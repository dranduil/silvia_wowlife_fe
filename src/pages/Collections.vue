<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbList.title" :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroFour>
    </header>
    <!-- Collections -->
    <!--<Collections></Collections>-->
    <CollectionList></CollectionList>
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
    // Import component data. You can change the data in the store to reflect in all component
    import SectionData from '@/store/store.js'
    import HeroFour from '@/components/section/HeroFour.vue'
    import CollectionList from '@/components/section/CollectionList.vue'
    export default {
        name: 'Explore',
        components: {
            HeroFour,
            CollectionList
        },
        data () {
            return {
            SectionData
            }
        }
    }
</script>
