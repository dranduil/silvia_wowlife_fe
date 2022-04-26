<template>
  <WalletProvider :wallets="wallets" :autoConnect="false">
    <WalletModalProvider>
      <slot></slot>
    </WalletModalProvider >
  </WalletProvider>
</template>

<script lang="ts" setup>
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { NetworkConnection } from '@/enum/index'
import { store } from "@/store";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
  Wallet
} from "@solana/wallet-adapter-wallets";

import {
  WalletProvider,
} from "@solana/wallet-adapter-vue";

import { WalletModalProvider } from "@solana/wallet-adapter-vue-ui";

const network = process.env.VUE_APP_SOLANA_NETWORK as WalletAdapterNetwork;
// const networkSelected = store.state.RPCNetworks.find( (net) => net.id === NetworkConnection.MAINNET )
// const network = WalletAdapterNetwork.Mainnet
// const network = WalletAdapterNetwork.Devnet
// const rpcHost = networkSelected?.UrlNetWork
console.log(getPhantomWallet)
const wallets: Wallet[] = [
  getPhantomWallet(),
  getSlopeWallet(),
  getSolflareWallet(),
  getSolletWallet({ network }),
  getSolletExtensionWallet({ network })
];

</script>
