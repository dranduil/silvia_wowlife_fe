<template>
  <div class="page-wrap">
      <!-- header  -->
      <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
      </header>
      <div class="bg-slate-900 flex flex-row" >
        <div class="grid place-content-center w-full">
          <logo />
        </div>
      </div>
      <!-- Footer  -->
      <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>
<script>
  import logo from "@/components/logo/logo.vue";
  export default {
    components : {
      logo
    },
    data() {

    }
  }
</script>
