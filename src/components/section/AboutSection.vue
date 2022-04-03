<template>
  <section class="about-section">
            <div class="container">
                <div class="row align-items-center flex" :class="isReverse">
                    <div class="col-lg-6 mb-5 mb-lg-0" :class="isClassThree">
                        <img :src="img" alt="" class="w-100" :class="isRound">
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6" :class="isClassTwo" >
                        <div class="about-content-wrap" v-html="content"></div>
                            <!-- <h2 class="mb-3">{{ title }}</h2> -->
                            <!-- <p :class="isClass">{{ content }}</p> -->
                            <!-- <p :class="isClass">{{ content }}</p> -->
                            <!-- <p v-html="contentfour"></p> -->
                    </div><!-- end col-lg-6 -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end about-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
// import SectionData from '@/store/store.js'

export default {
    name: 'AboutSection',
    props: {
        img:String,
        title:String,
        content:String,
        isRound:String,
        isClass:String,
        isClassTwo:String,
        isClassThree:String,
        isReverse:String
    }
}
</script>
