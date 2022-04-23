<template>
  <div class="header-logo">
        <!-- logo link -->
        <LogoLink></LogoLink>
    </div><!-- .header-logo -->
</template>

<script>
import LogoLink from '@/components/common/LogoLink.vue'
export default {
  name: 'Logo',
  components: {
    LogoLink
  }
}
</script>
