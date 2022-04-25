<template>
    <Menu v-if="mobileVisible" classname="btn-dark"></Menu>
    <div class="header-main is-sticky" :class="isTransparent">
        <div class="container">
            <div class="header-wrap">
                <!-- logo -->
                <Logo></Logo>
                <!-- mobile action -->
                <MobileAction></MobileAction>
                <!-- heder search -->
                <!-- <HeaderSearch></HeaderSearch> -->
                <!-- Menu -->
                <Menu v-if="largeVisible" classname="btn-dark"></Menu>
                <div class="header-overlay"></div>
            </div><!-- .header-warp-->
        </div><!-- .container-->
    </div><!-- .header-main-->
</template>
<script lang="ts" setup>
// @ is an alias to /src
import Logo from '@/components/common/Logo.vue'
import MobileAction from '@/components/common/MobileAction.vue'
import HeaderSearch from '@/components/common/HeaderSearch.vue'
import Menu from '@/components/common/Menu.vue'

let largeVisible = true
let mobileVisible = false
const isTransparent = true
const _navbar_break = 992
if (window.innerWidth <= _navbar_break) {
  largeVisible = false
  mobileVisible = true
}
else {
  largeVisible = true
  mobileVisible = false
}
window.onchange = function(e) {
  console.log("change")
}
</script>
