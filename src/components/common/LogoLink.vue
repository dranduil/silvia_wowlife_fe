<template>
    <router-link to="/" class="logo-link" :class="classname">
        <logo class="logo-dark logo-img" style="width:160px; height:70px;" alt="logo"></logo>
        <!-- <img class="logo-light logo-img" :src="require('@/images/logo-white.png')" alt="logo"> -->
        <logo class="logo-light logo-img" alt="logo" style="width:160px; height:70px;"></logo>
    </router-link>
</template>
<script>
import logo from '@/components/logo/logo.vue'
export default {
  name: 'LogoLink',
  props: ['classname'],
  components:{
    logo
  }
}
</script>
