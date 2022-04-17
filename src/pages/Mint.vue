<template>
    <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        </header>
        <WalletProvider :wallets="wallets" :autoConnect="false">
            <WalletModalProvider>
            </WalletModalProvider >
        </WalletProvider>
        <div class="w-1/2 max-w-sm p-4  rounded-md bg-opacity-80">
            <h3 class="text-base font-bold">Candy Machine Mint</h3>
            <div class="mt-4" v-if="wallet">
                <p>Balance: {{ (balance || 0).toLocaleString() }} SOL</p>
                <p>Total Available: {{ itemsAvailable }}</p>
                <p>Redeemed: {{ itemsRedeemed }}</p>
                <p>Remaining: {{ itemsRemaining }}</p>
                <p>Price: {{ formatNumber.asNumber(price) }}</p>
                <button :disabled="isSoldOut || isMinting || !isActive" class="w-full px-2 py-1 mt-4 text-center bg-blue-500 rounded-md btn" @click="mint">
                    <span v-if="isSoldOut">Sold Out</span>
                    <span v-else-if="isMinting">Minting...</span>
                    <span v-else-if="isActive">Mint</span>
                    <VueCountdown v-else :time="getCountdownDate(isActive,endSettings,goLiveDate,isPresale)"  v-slot="{ days, hours, minutes, seconds }">
                        Available in ：{{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
                    </VueCountdown>
                </button>
            </div>
            <div class="px-2 py-1 mt-4 bg-red-500 rounded-md" v-else>Please connect your wallet</div>
        </div>
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
    </div><!-- end page-wrap -->
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue'
    import * as anchor from "@project-serum/anchor";
    import VueCountdown from '@chenfengyuan/vue-countdown';
    import { store } from '@/store'
    import { NetworkConnection } from '@/enum/index'
    import { LAMPORTS_PER_SOL } from "@solana/web3.js";
    import { useAnchorWallet } from "@solana/wallet-adapter-vue";
    import { AlertState, toDate, formatNumber, getAtaForMint } from '@/utils';
    import {
        CandyMachine,
        awaitTransactionSignatureConfirmation,
        getCandyMachineState,
        mintOneToken,
    } from "../candy-machine";

    const candyMachineId = new anchor.web3.PublicKey(
        '68E14mDV9vsz4YaWiT3sQtdhB8f6YigCAUcdrsi6mTjh'
    );

    const connection = new anchor.web3.Connection('https://solana-api.projectserum.com');

    // const startDateSeed = parseInt(process.env.VUE_APP_CANDY_START_DATE || '0', 10);
    const startDateSeed = parseInt('1649228789811', 10);
    const txTimeout = 30000;

    const isActive = ref<boolean>()
    const isSoldOut = ref<boolean>()
    const isMinting = ref<boolean>(false)
    const itemsAvailable = ref<number>(0)
    const itemsRedeemed = ref<number>(0)
    const itemsRemaining = ref<number>(0)
    const startDate = ref<Date>(new Date(startDateSeed))
    const balance = ref<number>(0)

    const wallet = useAnchorWallet();
    const candyMachine = ref<CandyMachine>()
    const treasury = ref<anchor.web3.PublicKey>()
    const config = ref<anchor.web3.PublicKey>()
    const price = ref<anchor.BN>()
    const endDate = ref<Date>()
    const endSettings = ref<null | { number: anchor.BN, endSettingType: any}>()
    const goLiveDate = ref<anchor.BN>()
    const isPresale = ref<boolean>()
    const discountPrice = ref<anchor.BN>()

    const refreshCandyMachineState = async () => {
        if (!wallet.value) return;

        let {
            candyMachine: candyMachineBis,
            goLiveDate: goLiveDateBis,
            itemsAvailable: itemsAvailableBis,
            itemsRemaining: itemsRemainingBis,
            itemsRedeemed: itemsRedeemedBis,
            treasury: treasuryBis,
            config: configBis,
            price: priceBis,
            isActive:isActiveBis,
            endSettings:endSettingsBis,
            whitelistMintSettings:whitelistMintSettingsBis,
            isWhitelistOnly:isWhitelistOnlyBis,
            isPresale: isPresaleBis,
            isSoldOut:isSoldOutBis
        } = await getCandyMachineState(
            wallet.value as anchor.Wallet,
            candyMachineId,
            connection
        );

        itemsAvailable.value = itemsAvailableBis
        itemsRemaining.value = itemsRemainingBis
        itemsRedeemed.value = itemsRedeemedBis


        let active = goLiveDateBis?.toNumber() < new Date().getTime() / 1000;
        let presale = false
        //whitelist mint ?
        if(whitelistMintSettingsBis)
        {
            if(whitelistMintSettingsBis.presale &&
                (!goLiveDateBis || goLiveDateBis.toNumber() > new Date().getTime() / 1000 )
            )
            {
                presale = true
            }
        }

        //is there discount ?
        if(whitelistMintSettingsBis?.discountPrice)
        {
            discountPrice.value = whitelistMintSettingsBis.discountPrice
        } else {
            discountPrice.value = undefined
            if(!whitelistMintSettingsBis?.presale)
            {
                isWhitelistOnlyBis = true
            }
        }

        //retrieves the whitelist token
        // const mint  = new anchor.web3.PublicKey(
        //     whitelistMintSettingsBis?.mint
        // )
        // const token = (await getAtaForMint(mint, anch))


        // datetime to stop the mint?
        if(endSettingsBis?.endSettingType.date)
        {
            endDate.value = toDate(endSettingsBis.number)
            if(endSettingsBis.toNumber() < new Date().getTime() / 1000)
            {
                active = false;
            }
        }
        // amount to stop the mint?
        if(endSettingsBis?.endSettingType.amount){
            let limit = Math.min(endSettingsBis.number.toNumber(), itemsAvailableBis)
            if(itemsRedeemedBis < limit)
            {
                itemsRemaining.value = limit - itemsRedeemedBis
            }
            else
            {
                itemsRemaining.value = 0
                isSoldOutBis = true;
            }
        }
        else
        {
            itemsRemaining.value = itemsRemainingBis
        }


        if(isSoldOutBis)
        {
            active = false
        }
        isActiveBis = active
        isPresaleBis = presale
        //assign values
        console.log(priceBis)
        startDate.value = goLiveDateBis
        candyMachine.value = candyMachineBis
        treasury.value = treasuryBis
        config.value = configBis
        isActive.value = isActiveBis
        price.value = priceBis
        goLiveDate.value = goLiveDateBis
        endSettings.value = endSettingsBis
        isPresale.value = isPresaleBis


    };
    console.log(startDate.value)
    const refreshBalance = async () => {
        if (wallet && wallet?.value?.publicKey !== undefined) {
            balance.value = await connection.getBalance(wallet.value.publicKey) / LAMPORTS_PER_SOL;
        }
    }

    const refreshAll = () => {
        refreshCandyMachineState();
        refreshBalance();
    }

    const mint = async () => {
        try {
            isMinting.value = true
            if (wallet && candyMachine.value?.program && wallet?.value?.publicKey !== undefined) {
                const mintTxId = await mintOneToken(
                    candyMachine.value,
                    config,
                    wallet.value.publicKey,
                    treasury
                );

                const status = await awaitTransactionSignatureConfirmation(
                    mintTxId,
                    txTimeout,
                    connection,
                    "singleGossip",
                    false
                );

                if (!status?.err) {
                    console.log("Congratulations! Mint succeeded!")
                    // setAlertState({
                    //     open: true,
                    //     message: "Congratulations! Mint succeeded!",
                    //     severity: "success",
                    // });
                } else {
                    console.log("Mint failed! Please try again!")
                    // setAlertState({
                    //     open: true,
                    //     message: "Mint failed! Please try again!",
                    //     severity: "error",
                    // });
                }
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            // TODO: blech:
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (error.message.indexOf("0x138")) {
                    console.log('')
                } else if (error.message.indexOf("0x137")) {
                    message = `SOLD OUT!`;
                } else if (error.message.indexOf("0x135")) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT!`;
                    isSoldOut.value = true;
                } else if (error.code === 312) {
                    message = `Minting period hasn't started yet.`;
                }
            }

            console.log(message)
        } finally {
            refreshAll()
            isMinting.value = false
        }
    };

    const getCountdownDate = (
        isActive: boolean,
        endSettings: null | { number: anchor.BN, endSettingType: any},
        goLiveDate:anchor.BN,
        isPresale: boolean,
    ): Date | undefined => {
        if (
            isActive &&
            endSettings?.endSettingType.date
        ) {
            return toDate(endSettings.number);
        }

        return toDate(
            goLiveDate
            ? goLiveDate
            : isPresale
            ? new anchor.BN(new Date().getTime() / 1000)
            : undefined,
        );
    };
    watch(wallet, refreshAll, { immediate: true })
</script>