<template>
  <nav class="header-menu menu nav">
      <MenuList2></MenuList2>
      <ul class="menu-btns">
          <li>
            <button class="btn btn-dark" @click="showModal" v-if="!wallet">Connect Wallet</button>
            <p class="btn btn-dark" v-else>{{ shortenAddress(wallet.publicKey.toBase58() || "") }}</p>
          </li>
          <li>
             <ThemeSwitcher></ThemeSwitcher>
          </li>
      </ul>
  </nav>
  <div v-if="visible" @click="hideModal" class="fixed inset-0"></div>
    <WalletModal :container="'#aside'"></WalletModal>
</template>

<script lang="ts" setup>
  import MenuList2 from '@/components/common/MenuList2.vue'
  import { watch } from 'vue'
  import { useWalletModal, WalletModal } from "@solana/wallet-adapter-vue-ui"
  import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-vue"
  import { shortenAddress } from "../../candy-machine";

  const { visible, showModal, hideModal } = useWalletModal();
  const { connect, ready } = useWallet()
  watch(ready, () => {
      if (ready.value) {
          connect()
      }
  }, { immediate: true })

  const wallet = useAnchorWallet();
  console.log(wallet)
</script>
