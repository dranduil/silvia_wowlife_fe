<template>
  <div class="page-wrap">
      <!-- header  -->
      <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
      </header>
      <!-- About section  -->
      <AboutSection class="pt-5 mt-3" :img="pageData.cover_photo_url" isClassThree="col-sm-9 ps-xl-5" isRound="ps-xl-4" isReverse="flex-lg-row-reverse" isClassTwo="pe-lg-5" :title="pageData.title" :content="pageData.content"></AboutSection>
      <!-- funFact  -->
      <!--<funFactSection classname="col-xl-2 col-sm-4 col-6" :items="SectionData.funfactData.funfactListTwo"></funFactSection>-->
      <!-- About section  -->
      <!--<AboutSection class="section-space-b" :img="SectionData.aboutDataTwo.img" isRound="rounded-3" :title="SectionData.aboutDataTwo.title" isClassTwo="ps-xl-5" :content="SectionData.aboutDataTwo.content" isClass="lead" :contenttwo="SectionData.aboutDataTwo.contentTwo" :contentthree="SectionData.aboutDataTwo.contentThree" :contentfour="SectionData.aboutDataTwo.contentFour"></AboutSection>-->
      <!-- Brand section  -->
      <!-- <BrandSection isBg="bg-gray"></BrandSection> -->
      <!-- Team section  -->
      <TeamSection></TeamSection>
      <!-- Blog  -->
      <section class="section-space-b blog-section">
          <div class="container">
              <!-- section heading -->
              <!-- <SectionHeading classname="text-center" :text="SectionData.blogData.titleTwo" :content="SectionData.blogData.content" isMargin="mb-3"></SectionHeading> -->
              <!-- blog section -->
              <!-- <BlogSectionSlider></BlogSectionSlider> -->
              <!-- <div class="text-center mt-5"> -->
                  <!-- <ButtonLink :text="SectionData.blogData.btnText" :link="SectionData.blogData.btnLink" classname="btn-link btn-link-s1"></ButtonLink> -->
              <!-- </div> -->
          </div><!-- .container -->
      </section><!-- end blog-section -->
      <!-- Cta  -->
      <Cta class="section-space-b bg-pattern" :title="SectionData.ctaDataTwo.title" :content="SectionData.ctaDataTwo.content" :btntext="SectionData.ctaDataTwo.btnText" :btnlink="SectionData.ctaDataTwo.btnLink"></Cta>
      <!-- Footer  -->
      <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>

<script lang="ts">
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store'
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from '@/store'
import { ActionTypes } from '@/store/actions'
export default defineComponent({
  name: 'AboutUs',
  setup() {
    const store = useStore()
    const SectionDatas = computed(() => store.getters.GetState)
    const pageData = computed(() => store.getters.GetPageData)
    onMounted(() => store.dispatch(ActionTypes.FetchPage, {id: 1}))
    return { SectionDatas, pageData, SectionData }
  }
})
</script>
