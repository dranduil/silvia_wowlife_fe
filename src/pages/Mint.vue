<template>
	<div class="page-wrap mint-page">
		<header class="header-section has-header-main">
			<HeaderMain></HeaderMain>
		</header>
		<section class="mint-section pt-5 mt-3">
			<div class="container">
				<div class="row align-items-center flex flex-lg-row-reverse">
					<div class="balance-wallet-container">
						<div class="wallet-row">
							<h3>Solana</h3>

							<div v-if="wallet">Balance: {{ (balance || 0).toLocaleString() }}
								<SolanaLogo />
							</div>
							<div v-if="!wallet"> Connect your Wallet to know your balance</div>
						</div>
					</div>

					<div class="collection-info-container">
						<h3 class="text-base font-bold" style="text-align: center;">Mint of </h3>
						<div class="collection-info-row">
							<div class="available"><span>Total Available</span> {{ itemsAvailable }}</div>
							<div class="redeemed"><span>Redeemed</span> {{ itemsRedeemed }}</div>
							<div class="remaing"><span>Remaining</span> {{ itemsRemaining }}</div>
						</div>
						<div class="collection-info-price"><span>Price : </span> {{ formatNumber.asNumber(price) }}
							<SolanaLogo />
						</div>
						<span class="collection-info-date">
							{{ getCountdownDate(isActive, endSettings, goLiveDate, isPresale) }}
						</span>

						<div v-if="!wallet">Connect your wallet to mint this collection</div>
						<button v-if="wallet" :disabled="isSoldOut || isMinting || !isActive" class=" btn btn-dark"
							@click="mint">
							<span v-if="isSoldOut">Sold Out</span>
							<span v-else-if="isMinting">Minting...</span>
							<span v-else-if="isActive">Mint</span>

							<VueCountdown v-else
								:time="getCountdownDate(isActive, endSettings, goLiveDate, isPresale, true)"
								:interval="100" v-slot="{ days, hours, minutes, seconds }">
								<span class="collection-countdown">Available in ：{{ days }}d {{ hours }}h {{ minutes }}m
									{{ seconds }}s</span>
							</VueCountdown>
						</button>
					</div>
				</div>
			</div>
		</section>
		<!-- Footer  -->
		<Footer classname="bg-dark on-dark"></Footer>
	</div><!-- end page-wrap -->
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { notify } from "@kyvg/vue3-notification";
import * as anchor from "@project-serum/anchor";
import VueCountdown from '@chenfengyuan/vue-countdown';
import { useRoute } from "vue-router";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-vue";
import { toDate, formatNumber, toDateForVueCountDown, getCandyMachineIdByIdCollection, getCandyMachineId } from '@/utils';
import {
	CandyMachine,
	awaitTransactionSignatureConfirmation,
	getCandyMachineState,
	mintOneToken
} from "../candy-machine";
import SolanaLogo from '@/components/Solana.vue'

const route = useRoute()
const id_collection = parseInt(route.params.id)
// const candyMachineID = await getCandyMachineIdByIdCollection(id_collection)
const wallet = useAnchorWallet();

const candyMachineId = getCandyMachineId(id_collection);
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

const candyMachine = ref<CandyMachine>()
const treasury = ref<anchor.web3.PublicKey>()
const config = ref<anchor.web3.PublicKey>()
const price = ref<anchor.BN>()
const endDate = ref<Date>()
const endSettings = ref<null | { number: anchor.BN, endSettingType: any }>()
const goLiveDate = ref<anchor.BN>()
const isPresale = ref<boolean>()
const discountPrice = ref<anchor.BN>()

const refreshCandyMachineState = async () => {
	console.log('refresh candy start', wallet)
	if (!wallet.value) return;
	console.log('before getcandymachine state')
	let {
		id: idBis,
		program: programBis,
		state: stateBis,
		config: configBis
	} = await getCandyMachineState(
		wallet.value as anchor.Wallet,
		candyMachineId,
		connection,
		id_collection
	);

	itemsAvailable.value = stateBis.itemsAvailable
	itemsRemaining.value = stateBis.itemsRemaining
	itemsRedeemed.value = stateBis.itemsRedeemed

	let active = stateBis.goLiveDate?.toNumber() < new Date().getTime() / 1000;
	let presale = false
	//whitelist mint ?
	if (stateBis.whitelistMintSettings) {
		if (stateBis.whitelistMintSettings.presale &&
			(!stateBis.goLiveDate || stateBis.goLiveDate.toNumber() > new Date().getTime() / 1000)
		) {
			presale = true
		}
	}

	//is there discount ?
	if (stateBis.whitelistMintSettings?.discountPrice) {
		discountPrice.value = stateBis.whitelistMintSettings.discountPrice
	} else {
		discountPrice.value = undefined
		if (!stateBis.whitelistMintSettings?.presale) {
			stateBis.isWhitelistOnly = true
		}
	}

	//retrieves the whitelist token
	// const mint  = new anchor.web3.PublicKey(
	//     whitelistMintSettingsBis?.mint
	// )
	// const token = (await getAtaForMint(mint, anch))


	// datetime to stop the mint?
	if (stateBis.endSettings?.endSettingType.date) {
		endDate.value = toDate(stateBis.endSettings.number)
		if (stateBis.endSettings.number.toNumber() < new Date().getTime() / 1000) {
			active = false;
		}
	}
	// amount to stop the mint?
	if (stateBis.endSettings?.endSettingType.amount) {
		let limit = Math.min(stateBis.endSettings.number.toNumber(), stateBis.itemsAvailable)
		if (stateBis.itemsRedeemed < limit) {
			itemsRemaining.value = limit - stateBis.itemsRedeemed
		}
		else {
			itemsRemaining.value = 0
			stateBis.isSoldOut = true;
		}
	}
	else {
		itemsRemaining.value = stateBis.itemsRemaining
	}


	if (stateBis.isSoldOut) {
		active = false
	}
	stateBis.isActive = active
	stateBis.isPresale = presale
	//assign values
	console.log(stateBis.price)
	startDate.value = stateBis.goLiveDate
	candyMachine.value = { id: idBis, program: programBis, state: stateBis, config: configBis }
	treasury.value = stateBis.treasury
	config.value = configBis
	isActive.value = stateBis.isActive
	price.value = stateBis.price
	goLiveDate.value = stateBis.goLiveDate
	endSettings.value = stateBis.endSettings
	isPresale.value = stateBis.isPresale


};
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
	console.log("inizio mint")
	try {
		isMinting.value = true
		if (wallet && candyMachine.value?.program && wallet?.value?.publicKey !== undefined) {
			const mintTxId = await mintOneToken(
				candyMachine.value,
				wallet.value.publicKey
			);
			console.log('this is mintTxId response for mintOneToken: ', mintTxId)
			const status = await awaitTransactionSignatureConfirmation(
				mintTxId,
				txTimeout,
				connection,
				true
			);
			console.log('status :', status)
			if (!status?.err) {
				console.log("Congratulations! Mint succeeded!")
				notify({
					title: "Success",
					text: "Congratulations! Mint succeeded!",
					type: 'success'
				})
			} else {
				console.log("Mint failed! Please try again!")
				notify({
					title: "error",
					text: "Mint failed! Please try again!",
					type: 'error'
				})
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
		console.log(error)
		console.log(message)
	} finally {
		console.log('before fresh All')
		refreshAll()
		isMinting.value = false
	}
};

const getCountdownDate = (
	isActive: boolean,
	endSettings: null | { number: anchor.BN, endSettingType: any },
	goLiveDate: anchor.BN,
	isPresale: boolean,
	isCountdown = false
): Date | number | undefined => {
	if (
		isActive &&
		endSettings?.endSettingType.date
	) {
		return toDate(endSettings.number);
	}
	if (isCountdown) {
		return toDateForVueCountDown(
			goLiveDate
				? goLiveDate
				: isPresale
					? new anchor.BN(new Date().getTime() / 1000)
					: undefined,
		);
	}
	return toDate(
		goLiveDate
			? goLiveDate
			: isPresale
				? new anchor.BN(new Date().getTime() / 1000)
				: undefined,
	);
};
console.log('before watch')
watch(wallet, refreshAll, { immediate: true })
</script>
