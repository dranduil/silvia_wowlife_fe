<template>
    <section class="explore-section p-4">
        <div class="container">
            <div class="row g-gs">
                <div class="col-xl-6 col-lg-6 col-sm-12" v-for="collection in collections" :key="collection.id">
                    <div class="card card-full" >
                        <div class="card-image">
                            <img :src="collection.cover_image_url" class="card-img-top" alt="art image">
                        </div>
                        <div class="card-body p-4">
                            <h5 class="card-title text-truncate mb-0">{{collection.name}}</h5>
                            <div class="card-author mb-1 d-flex align-items-center">
                                <span class="me-1 card-author-by">By</span>
                                <div class="custom-tooltip-wrap">
                                    <!-- <a href="/author" class="custom-tooltip author-link">{{collection.author.name}}</a> -->
                                    <a href="#" class="custom-tooltip author-link">{{collection.author.username}}</a>
                                    <div class="card-generic custom-tooltip-dropdown" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(-81px, -22px);">
                                        <div class="author-action d-flex flex-wrap align-items-center mb-3">
                                            <div class="flex-shrink-0 avatar">
                                                <img :src="collection.author.profile_image" alt="avatar">
                                            </div>
                                            <div class="ms-2">
                                                <span class="author-username">{{collection.author.username}}</span>
                                                <span class="author-follow-text">1.3k Followers</span>
                                            </div>
                                        </div>
                                        <h6 class="author-name mb-1">{{collection.author.username}}</h6>
                                        <p class="author-desc smaller mb-3"></p>
                                    </div>
                                    <!-- end dropdown-menu -->
                                </div>
                                <!-- end custom-tooltip-wrap -->
                            </div>
                            <!-- end card-author -->
                            <!-- end card-price-wrap -->
                            <a :href="'/collections/'+collection.id" class="details"><span class="btn btn-sm btn-dark">View Collection</span></a>
                        </div>
                        <!-- end card-body -->
                        <a :href="'/collections/'+collection.id" class="details"></a>
                    </div>
                    <!-- end card -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"CollectionList",
    props:{
        collections:{
            type: Array
        }
    }
}
</script>
<style lang="">

</style>
