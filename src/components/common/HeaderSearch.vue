<template>
    <div class="header-search-form" :class="classname">
        <input type="search" class="form-control form-control-s1" placeholder="Search item here...">
    </div>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store'

export default {
  name: 'HeaderSearch',
  props: ['classname'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
