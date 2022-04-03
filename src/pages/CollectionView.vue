<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->

        <AuthorHero avatarSize="avatar-3"
            :isCopyInput="true"
            :coverimg="collection.banner_image"
            :img="collectionData.author.author_image_url"
            :title="collectionData.name"
            :authorAddress="collectionData.author.address"
            :contract="collectionData.contract"
            :username="collectionData.author.username"
            :btntext="collection.btnLink"
            :btnlink="collection.btnLink"></AuthorHero>
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
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Explore',
        components: {
            CollectionViewItems
        },
        computed:{
            ...mapGetters([ 'GET_COLLECTION_DATA']),
            collectionData:{
                get(){
                    return this.GET_COLLECTION_DATA;
                }
            }
        },
        methods: {
            ...mapActions([ 'FETCH_COLLECTION']),
            fetchcollection(id_collection){
                this.FETCH_COLLECTION({id: id_collection})
            }

        },
        data () {
            this.fetchcollection(this.$route.params.id)
            return {
            collection: {
                        id: 1,
                        name:"Ti Amo da Vivere - Limited Edition",
                        author:{
                            name:"Silvia Del Chiaro",
                            username:"@silviawowlife",
                            profile_image: require('@/images/client/silvia_profile.jpg'),
                            address: "5m315FrGdFputmfddBswkSWCUmQRZhMRwVMB4XoEJjX4"
                        },
                        collection_image: require('@/images/thumb/collection_ti_amo_da_vivere.jpg'),
                        banner_image: require('@/images/banner_collection_tiamodavivere.jpg'),
                        btnLink:""
                    }
            }
        },
    }
</script>
