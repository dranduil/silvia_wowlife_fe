<template>
<section class="author-section section-space">
      <div class="container">
          <div class="row">
              <div class="col-xl-12 ps-xl-4">
                  <div class="author-items-wrap">
                      <h3>All Collection</h3>
                      <div class="gap-2x"></div><!-- end gap -->
                      <div class="row g-gs">
                          <div class="col-md-4" v-for="product in SectionData.productData.products" :key="product.id">
                          <div class="card card-full">
                              <div class="card-image">
                                  <img :src="product.img" class="card-img-top" alt="art image">
                              </div>
                              <div class="card-body p-4">
                                  <h5 class="card-title text-truncate mb-0">{{ product.title  }}</h5>
                                  <div class="card-author mb-1 d-flex align-items-center">
                                      <span class="me-1 card-author-by">By</span>
                                      <div class="custom-tooltip-wrap">
                                          <!-- <router-link :to="product.authorLink" class="custom-tooltip author-link">{{ product.author }}</router-link> -->
                                          <span  class="custom-tooltip author-link">{{ product.author }}</span>
                                      </div><!-- end custom-tooltip-wrap -->
                                  </div><!-- end card-author -->
                              </div><!-- end card-body -->
                              <router-link
                                  class="details"
                                    :to="{
                                      name: 'ProductDetail',
                                      params: {
                                          id: product.id,
                                          title: product.title,
                                          imgLg: product.imgLg,
                                          metaText: product.metaText,
                                          metaTextTwo: product.metaTextTwo,
                                          metaTextThree: product.metaTextThree,
                                          content: product.content,
                                        }
                                      }"
                                  >
                              </router-link>
                          </div><!-- end card -->
                      </div>
                      </div><!-- row -->
                  </div><!-- end author-items-wrap -->
              </div><!-- end col-lg-8 -->
          </div><!-- end row -->
      </div><!-- .container -->
  </section><!-- end author-section -->
</template>

<script lang="ts">
// Import component data. You can change the data in the store to reflect in all component
    import SectionData from '@/store/store'
    import { defineComponent} from 'vue'
    import { useStore } from '@/store/index'
    export default defineComponent({
        name: 'ProfileSection',
        setup(){
            const store = useStore()
            const collection = store.getters.GetCollectionData
            return {SectionData, collection}
        }
    })
</script>

<style lang="css" scoped>
 .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
 }
 .btn,
 .author-link,
 .card-price-wrap {
   z-index: 2;
   position: relative;
 }
</style>