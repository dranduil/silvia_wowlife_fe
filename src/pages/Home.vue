<template>
  <div class="page-wrap">
        <header class="header-section has-header-main bg-gradient-2">
          <HeaderMain></HeaderMain>
        </header>

        <HeroFive></HeroFive>
        <Footer classname="bg-dark on-dark"></Footer>
  </div>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component

import HeroFive from '@/components/section/HeroFive.vue'
import HeaderMain from "@/components/common/HeaderMain.vue"
export default {
  name: 'Home',
  components: {
    HeroFive,
    HeaderMain
  },

  data () {
    return {

    }
  },

}
</script>
