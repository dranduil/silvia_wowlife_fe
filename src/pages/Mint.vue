<template>
    <div class="page-wrap mint-page">
        <!-- header  -->
        <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        </header>
        <WalletProvider :wallets="wallets" :autoConnect="false">
            <WalletModalProvider>
            </WalletModalProvider >
        </WalletProvider>
        <section class="mint-section pt-5 mt-3">
            <div class="container">
                <div class="row align-items-center flex flex-lg-row-reverse">
                    <div class="mt-4" v-if="wallet">
                        <div class="balance-wallet-container">
                            <div class="wallet-row">
                                <h3>Solana</h3>
                                <div>Balance: {{ (balance || 0).toLocaleString() }} <SolanaLogo /></div>
                            </div>
                        </div>

                        <div class="collection-info-container">
                            <h3 class="text-base font-bold" style="text-align: center;">Mint of {{collection.name}}</h3>
                            <div class="collection-info-row">
                                <div class="available"><span>Total Available</span> {{ itemsAvailable }}</div>
                                <div class="redeemed"><span>Redeemed</span> {{ itemsRedeemed }}</div>
                                <div class="remaing"><span>Remaining</span> {{ itemsRemaining }}</div>
                            </div>
                            <div class="collection-info-price"><span>Price :</span> {{ formatNumber.asNumber(price) }} <SolanaLogo /></div>
                            <span>{{getCountdownDate(isActive,endSettings,goLiveDate,isPresale)}}</span>
                            <button :disabled="isSoldOut || isMinting || !isActive" class="w-full px-2 py-1 mt-4 text-center bg-blue-500 rounded-md btn" @click="mint">
                                <span v-if="isSoldOut">Sold Out</span>
                                <span v-else-if="isMinting">Minting...</span>
                                <span v-else-if="isActive">Mint</span>

                                <VueCountdown v-else :time="getCountdownDate(isActive,endSettings,goLiveDate,isPresale)"  v-slot="{ days, hours, minutes, seconds }">
                                    <span class="collection-countdown">Available in ：{{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s</span>
                                </VueCountdown>
                            </button>
                        </div>
                    </div>
                    <div class="px-2 py-1 mt-4 bg-red-500 rounded-md" v-else>Please connect your wallet</div>
                </div>
            </div>
        </section>
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
    </div><!-- end page-wrap -->
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue'
    import * as anchor from "@project-serum/anchor";
    import VueCountdown from '@chenfengyuan/vue-countdown';
    import { useStore } from '@/store'
    import { ActionTypes } from '@/store/actions';
    import { LAMPORTS_PER_SOL } from "@solana/web3.js";
    import { useAnchorWallet } from "@solana/wallet-adapter-vue";
    import { toDate, formatNumber } from '@/utils';
    import {
        CandyMachine,
        awaitTransactionSignatureConfirmation,
        getCandyMachineState,
        mintOneToken,
    } from "../candy-machine";
    import SolanaLogo from '@/components/Solana.vue'

    const store = useStore()
    const candyMachineId = new anchor.web3.PublicKey(
      '68E14mDV9vsz4YaWiT3sQtdhB8f6YigCAUcdrsi6mTjh'
    )
    const rpcHost = process.env.VUE_APP_SOLANA_RPC_HOST!
    const connection = new anchor.web3.Connection(
        rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet'),
    )

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

    store.dispatch(ActionTypes.FetchCollection, {id:1})
    const collection = store.getters.GetCollectionData

    const refreshCandyMachineState = async () => {
        if (!wallet.value) return;

        let {
            id:idBis,
            program:programBis,
            state:stateBis,
            config:configBis
        } = await getCandyMachineState(
            wallet.value as anchor.Wallet,
            candyMachineId,
            connection
        );

        itemsAvailable.value = stateBis.itemsAvailable
        itemsRemaining.value = stateBis.itemsRemaining
        itemsRedeemed.value = stateBis.itemsRedeemed

        let active = stateBis.goLiveDate?.toNumber() < new Date().getTime() / 1000;
        let presale = false
        //whitelist mint ?
        if(stateBis.whitelistMintSettings)
        {
            if(stateBis.whitelistMintSettings.presale &&
                (!stateBis.goLiveDate || stateBis.goLiveDate.toNumber() > new Date().getTime() / 1000 )
            )
            {
                presale = true
            }
        }

        //is there discount ?
        if(stateBis.whitelistMintSettings?.discountPrice)
        {
            discountPrice.value = stateBis.whitelistMintSettings.discountPrice
        } else {
            discountPrice.value = undefined
            if(!stateBis.whitelistMintSettings?.presale)
            {
                stateBis.isWhitelistOnly = true
            }
        }

        //retrieves the whitelist token
        // const mint  = new anchor.web3.PublicKey(
        //     whitelistMintSettingsBis?.mint
        // )
        // const token = (await getAtaForMint(mint, anch))


        // datetime to stop the mint?
        if(stateBis.endSettings?.endSettingType.date)
        {
            endDate.value = toDate(stateBis.endSettings.number)
            if(stateBis.endSettings.number.toNumber() < new Date().getTime() / 1000)
            {
                active = false;
            }
        }
        // amount to stop the mint?
        if(stateBis.endSettings?.endSettingType.amount){
            let limit = Math.min(stateBis.endSettings.number.toNumber(), stateBis.itemsAvailable)
            if(stateBis.itemsRedeemed < limit)
            {
                itemsRemaining.value = limit - stateBis.itemsRedeemed
            }
            else
            {
                itemsRemaining.value = 0
                stateBis.isSoldOut = true;
            }
        }
        else
        {
            itemsRemaining.value = stateBis.itemsRemaining
        }


        if(stateBis.isSoldOut)
        {
            active = false
        }
        stateBis.isActive = active
        stateBis.isPresale = presale
        //assign values
        console.log(stateBis.price)
        startDate.value = stateBis.goLiveDate
        candyMachine.value = {id:idBis,program:programBis, state:stateBis, config:configBis}
        treasury.value = stateBis.treasury
        config.value = configBis
        isActive.value = stateBis.isActive
        price.value = stateBis.price
        goLiveDate.value = stateBis.goLiveDate
        endSettings.value = stateBis.endSettings
        isPresale.value = stateBis.isPresale


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
