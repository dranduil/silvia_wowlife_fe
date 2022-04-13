<template>
    <div class="hero-wrap sub-header" :style="{ backgroundImage: 'url(' + coverimg + ')' }">
                <div class="overlay"></div>
                <div class="container">
                    <div class="hero-content py-0 d-flex align-items-center">
                        <div class="avatar flex-shrink-0" :class="avatarSize">
                                <img :src="collection.author.author_image_url" alt="" v-if="collection.author">
                            </div>
                            <div class="author-hero-content-wrap d-flex flex-wrap justify-content-between ms-3 flex-grow-1" v-if="collection.name">
                                <div class="author-hero-content me-3">
                                    <h4 class="hero-author-title mb-1 text-white" >{{ collection.name }}</h4>
                                    <p class="hero-author-username mb-1 text-white">@{{ collection.author.username }}</p>
                                    <div class="d-flex align-items-center">
                                        <input type="text" class="copy-input text-white" v-model="collection.author.address" id="copy-input" readonly>
                                        <div class="tooltip-s1">
                                            <button v-clipboard:copy="collection.author.address" v-clipboard:success="onCopy"  class="copy-text text-white ms-2" type="button">
                                                <span class="tooltip-s1-text tooltip-text">Copy</span>
                                                <em class="ni ni-copy"></em>
                                            </button>
                                        </div>
                                    </div>
                                </div><!-- author-hero-conetent -->
                                <div class="hero-action-wrap d-flex align-items-center my-2" v-if="isBtn">
                                    <router-link :to="btnlink" class="btn btn-light">{{ btntext }}</router-link>
                                    <div class="dropdown ms-3" v-if="isDropdown">
                                        <a class="icon-btn icon-btn-s1" href="#" data-bs-toggle="dropdown" id="reportDropdown">
                                            <em class="ni ni-more-h"></em>
                                        </a>
                                        <ul class="dropdown-menu card-generic p-2 dropdown-menu-end mt-2 card-generic-sm" aria-labelledby="reportDropdown">
                                            <li><a class="dropdown-item card-generic-item" href="#" data-bs-toggle="modal" data-bs-target="#reportModal">Report Page</a></li>
                                        </ul>
                                    </div><!-- end dropdown -->
                                </div><!--end hero-action-wrap -->
                            </div><!-- author-hero-content -->
                    </div><!-- hero-content -->
                </div><!-- .container-->
    </div><!-- end hero-wrap -->
</template>

<script lang="ts">
    import { useStore } from '@/store'
    import { computed, defineComponent } from 'vue'
    import BannerImage from '@/images/banner_collection_tiamodavivere.jpg'
    export default defineComponent({
        name: 'AuthorHero',
        setup(){
            const onCopy = (e:any)  => {
                let target = e.trigger.querySelector(".tooltip-text");
                let prevText = target.innerHTML;
                target.innerHTML = "Copied";
                setTimeout(function(){
                    target.innerHTML = prevText;
                }, 1000)
            }
            const store = useStore()
            const collection = computed(() => store.getters.GetCollectionData)
            const coverimg = BannerImage
            const btnLink = ""
            const btntext = ""
            const avatarSize = "avatar-3"
            return {collection, onCopy, coverimg, btnLink, btntext, avatarSize}
        }
    })
</script>
