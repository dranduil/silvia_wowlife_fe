<template>
  <nav class="header-menu menu nav">
      <!-- menu list -->
      <!-- <MenuList></MenuList> -->
      <MenuList2></MenuList2>
      <!-- header btn -->
      <ul class="menu-btns">
          <li><ButtonLink :text="SectionData.headerData.btnText" link="/wallet" classname="btn" :class="classname"></ButtonLink></li>
          <li>
             <ThemeSwitcher></ThemeSwitcher>
          </li>
      </ul>
  </nav><!-- .header-menu -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

// @ is an alias to /src
// import MenuList from '@/components/common/MenuList.vue'
import MenuList2 from '@/components/common/MenuList2.vue'

export default {
  name: 'Menu',
  props: ['classname'],
  components: {
    // MenuList,
    MenuList2
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
