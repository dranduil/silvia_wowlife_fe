<template>
    <section class="recent-section section-space-b">
            <div class="container">
                <SectionHeading classname="text-center" :text="SectionData.recentItemData.title" :content="SectionData.recentItemData.content" isMargin="mb-3"></SectionHeading>
                <!-- Recent item slider -->
                <RecentItemSlider></RecentItemSlider>
            </div>
        </section>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store'

export default {
  name: 'RecentItemSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
