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
        <section class="banner-collection">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 collection-mint">
                        <ButtonLink link="/mint" text=" Mint collection Now " class="btn btn-dark"></ButtonLink>
                    </div>
                    <div class="col-xl-6 collection-preview">
                        <ButtonLink link="/collections/view-detail/1" text=" View Detail of Collection " class="btn btn-dark"></ButtonLink>
                    </div>
                </div>
            </div>
        </section>
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
import ButtonLink from '@/components/common/ButtonLink.vue';

    export default defineComponent({
        name: 'CollectionView',
        components: {
    CollectionViewItems,
    ButtonLink
},
        setup(){
            const route = useRoute()
            const store = useStore()
            store.dispatch(ActionTypes.FetchCollection, {id: route.params.id})
        }
    })
</script>
