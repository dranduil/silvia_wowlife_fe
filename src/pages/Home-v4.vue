<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-gradient-2">
          <HeaderMain></HeaderMain>
          <!-- hero -->
          <HeroFive></HeroFive>
        </header>
        <!-- Brand section  -->
        <!-- <BrandSectionTwo></BrandSectionTwo> -->
        <!-- HowItWork  -->
        <!-- <HowItWorkTwo></HowItWorkTwo> -->
        <!-- product  -->
        <!-- <section class="section-space trending-section bg-gray">
            <div class="container">

                <SectionHeading classname="text-center" :text="SectionData.productData.title"></SectionHeading>

                <ProductsContainerTwo></ProductsContainerTwo>
                <div class="text-center mt-4 mt-md-5">
                    <ButtonLink :text="SectionData.productData.btnText" :link="SectionData.productData.btnLinkFour" classname="btn-link btn-link-s1"></ButtonLink>
                </div>
            </div>
        </section> -->
        <!-- trending-section -->
        <!-- top creators -->
        <!-- <section class="top-creator-section section-space">
            <div class="container">
                <div class="section-head-sm text-center">
                    <h2>{{ SectionData.creatorData.title }}</h2>
                </div>
                <CreatorsTwo></CreatorsTwo>
            </div>
        </section> -->
        <!-- end top-creator-section -->
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store'
import HeroFive from '@/components/section/HeroFive.vue'

export default {
  name: 'Home-v4',
  components: {
    HeroFive
  },

  data () {
    return {
      SectionData
    }
  },

}
</script>
