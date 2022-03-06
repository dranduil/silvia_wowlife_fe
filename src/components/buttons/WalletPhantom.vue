<template>
    <button class="bg-white text-xs p-1 m-1 rounded-sm" v-on:click="connectwallet">
        Connect Wallet
    </button>
</template>

<script>
export default {
    methods:{
        async connectwallet() {
            try {
                const resp = await window.solana.connect();
                console.log(resp.publicKey.toString())
                const response = solanaWeb3.getAccountInfo(resp.publicKey.toString())
                console.log(response)
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>
