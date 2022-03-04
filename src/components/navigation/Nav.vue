<template>
    <div id="nav" class="nav bg-black flex flex-row pt-2 pb-2 pl-4 pr-4">
        <Menu />
        <div class="flex justify-end w-full">
            <wallet-phantom />
        </div>
    </div>
</template>

<script>
import Menu from '@/components/navigation/Menu.vue'
import WalletPhantom from '@/components/buttons/WalletPhantom.vue'
export default {
    components:{
        Menu,
        WalletPhantom
    }
}
</script>

<style>

</style>
