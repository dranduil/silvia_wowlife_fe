/* eslint-disable no-undef */
<template>
    <swiper
     :modules="modules"
     :slides-per-view="4"
     :breakpoints="{
        0: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 4
        }
     }"
     :loop="true"
     :pagination="{ clickable: true }" class="swiper-container-space">
        <swiper-slide v-for="item in SectionData.collectionData.collectionList" :key="item.id" class="h-auto">
            <router-link :to="item.path" class="card card-full card-collection">
                <img :src="item.img" class="card-img-top" alt="birds art image">
                <div class="card-body card-body-s1">
                    <div class="avatar avatar-1">
                          <img :src="item.avatar" alt="avatar" class="rounded-circle">
                    </div><!-- end avatar -->
                    <h4 class="card-title mt-4 mb-2 pt-1">{{ item.title }}</h4>
                    <p class="fw-semibold">{{ item.price }}</p>
                </div><!-- end card-body -->
            </router-link><!-- end card -->
        </swiper-slide>
    </swiper>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store'

// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from 'swiper';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'CollectionSlider',
  components: {
      Swiper,
      SwiperSlide,
  },
  data () {
    return {
      SectionData
    }
  },
  setup() {
      return{
        modules: [Pagination]
    }
  }
}
</script>
