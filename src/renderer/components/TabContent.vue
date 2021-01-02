<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    classes: function () {
      const activeClasses = {}
      const inactiveClasses = { 'hidden': true }

      return {
        ...(this.isActive ? activeClasses : inactiveClasses)
      }
    }
  },
  created() {
    this.isActive = this.active
  },
  mounted() {
    this.$parent.addTabContent(this)
  }
}
</script>