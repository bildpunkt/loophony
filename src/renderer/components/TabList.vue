<template>
  <div class="w-full">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props: {
    modelValue: Number
  },
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    addTab: function (tab) {
      this.tabs.push(tab)
    },
    setTabActive: function (tab) {
      const activeIndex = this.tabs.indexOf(tab)

      this.tabs.forEach((tab, index) => {
        if (index === activeIndex) {
          tab.isActive = true
        } else {
          tab.isActive = false
        }
      })

      this.$emit('update:modelValue', activeIndex)
    }
  }
}
</script>