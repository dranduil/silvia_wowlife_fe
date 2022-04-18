<template>
    <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main">
            <!-- Header main -->
            <HeaderMain></HeaderMain>
        </header>
        <section class="collection-view-detail" v-for="item in itemDetails" v-bind:key="item.id" :style="get_style(item)">
                <div class="container" :style="getHeightSection()">
                    <div class="row">
                        <div class="col-lg-12 item">
                            <h1>{{ item.title }}</h1>
                            <p>{{item.description}}</p>
                        </div>
                    </div>
                </div>
        </section>
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
    </div><!-- end page-wrap -->
</template>
<script lang="ts" setup>
// Import component data. You can change the data in the store to reflect in all component
import { useStore } from '@/store'
import { Author } from '@/interfaces/store/dataStore'

const store = useStore()
const itemDetails = store.state.CollectionDetails

function get_style(item)
{
    return `background-image: url(${item.bg_url});`
}

function getHeightSection()
{
    const headerHeight = 98
    const windowHeight:number = window.innerHeight
    const height = windowHeight - headerHeight
    
    return `height:${height}px`
}
</script>