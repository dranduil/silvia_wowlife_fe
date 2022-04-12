<template>
  <SolanaApp>
    <router-view :key="$route.path"/>
  </SolanaApp>
</template>

<script lang="ts" setup>
  import SolanaApp from './components/SolanaApp.vue';
</script>
<style>
#app {
  @apply h-full flex flex-col m-auto max-w-screen-lg;
}

.aside-wrapper:not(:empty) {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  @apply flex items-center justify-center;
}
</style>