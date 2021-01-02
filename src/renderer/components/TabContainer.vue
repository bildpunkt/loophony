<template>
  <slot/>
</template>

<script>
export default {
  name: 'TabContainer',
  props: {
    activeTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabContents: []
    }
  },
  methods: {
    addTabContent: function (tabContent) {
      this.tabContents.push(tabContent)
    },
    setTabContentActive: function (activeIndex) {
      this.tabContents.forEach((tab, index) => {
        if (index === activeIndex) {
          tab.isActive = true
        } else {
          tab.isActive = false
        }
      })
    }
  },
  watch: {
    activeTab: function (newIndex, oldIndex) {
      this.setTabContentActive(newIndex)
    }
  }
}
</script>