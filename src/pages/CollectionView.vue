<template>
    <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main">
            <!-- Header main -->
            <HeaderMain></HeaderMain>
            <!-- hero -->

            <AuthorHero></AuthorHero>
        </header>
        <!-- Collections -->
        <CollectionViewItems></CollectionViewItems>
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
    </div><!-- end page-wrap -->
</template>

<script>
    // Import component data. You can change the data in the store to reflect in all component
    import CollectionViewItems from '@/components/section/CollectionViewItems.vue'
    import { computed, defineComponent, onMounted } from 'vue'
    import { useStore } from '@/store'
    import { ActionTypes } from '@/store/actions'
    import { useRoute } from "vue-router";

    export default defineComponent({
        name: 'CollectionView',
        components: {
            CollectionViewItems
        },
        setup(){
            const route = useRoute()
            const store = useStore()
            store.dispatch(ActionTypes.FetchCollection, {id: route.params.id})
        }
    })
</script>
