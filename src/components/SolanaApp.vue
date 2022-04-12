<template>
  <WalletProvider :wallets="wallets" :autoConnect="false">
    <WalletModalProvider>
      <slot></slot>
    </WalletModalProvider >
  </WalletProvider>
</template>

<script lang="ts" setup>
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
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

// const network = process.env.VUE_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const network = 'devnet' as WalletAdapterNetwork;
const wallets: Wallet[] = [
  getPhantomWallet(),
  getSlopeWallet(),
  getSolflareWallet(),
  getSolletWallet({ network }),
  getSolletExtensionWallet({ network })
];
console.log(wallets)
</script>

<style>
.wallet-adapter-modal {
    pointer-events: all;
    @apply bg-blue-500 p-4 rounded-md w-72 z-10;
}

.wallet-adapter-modal-title {
    @apply text-black;
}

.wallet-adapter-modal-list {
    @apply flex flex-col;
}

.wallet-adapter-button {
    @apply hover:bg-blue-700 px-2 py-1 flex items-center rounded-md justify-between w-full transition-all duration-200;
}

.wallet-adapter-button-end-icon {
    @apply w-8 h-8 flex items-center justify-center  fill-current text-white;
}

.wallet-adapter-modal-wrapper {
    @apply flex flex-col gap-2 relative;
}

.wallet-adapter-modal-button-close {
    @apply absolute top-0 right-0 px-2 py-1 mr-2;
}

.wallet-adapter-modal-collapse-button {
    @apply bg-blue-600;
}

.wallet-adapter-modal-collapse-button-active > .wallet-adapter-button-end-icon {
    @apply transform rotate-180 transition-all duration-200;
}
</style>