<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour classname="hero-title" title="Collections" :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroFour>
    </header>
    <!-- Collections -->
    <!--<Collections></Collections>-->
    <CollectionList :collections="collectionsData"></CollectionList>
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script lang="ts">
    // Import component data. You can change the data in the store to reflect in all component
    import SectionData from '@/store/store'
    import { computed, defineComponent, onMounted } from 'vue'
    import HeroFour from '@/components/section/HeroFour.vue'
    import CollectionList from '@/components/section/CollectionList.vue'
    import { useStore } from '@/store'
    import { ActionTypes } from '@/store/actions'
    export default defineComponent({
        name: 'Collections',
        components: {
            HeroFour,
            CollectionList
        },
        setup() {
            const store = useStore()
            onMounted(() => store.dispatch(ActionTypes.FetchCollections))
            const collectionsData = computed(() => store.getters.GetCollectionsData)
            return {SectionData, collectionsData}
        }
    })
</script>
