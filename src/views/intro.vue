<script>
  import logo from "@/components/logo/logo.vue";
  export default {
    components : {
      logo
    },
    data() {
      let menuSize = document.querySelector('#nav').offsetHeight
      let h = window.innerHeight - menuSize
      window.addEventListener('resize', () => {
        h = window.innerHeight - menuSize
      })
      return {
        justHeight: h
      }
    }
  }
</script>

<template>
  <div class="bg-slate-900 flex flex-row" v-bind:style="{height: justHeight + 'px',}">
    <div class="grid place-content-center w-full">
      <logo />
    </div>
  </div>
</template>

<script>

</script>
