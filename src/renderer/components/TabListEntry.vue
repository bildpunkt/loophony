<template>
  <div :class="classes" @click="$parent.setTabActive(this)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'TabListEntry',
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
  created() {
    this.isActive = this.active
  },
  mounted() {
    this.$parent.addTab(this)
  },
  computed: {
    classes: function() {
      const defaultClasses = {
        'cursor-pointer': true,
        'inline-block': true,
        'py-4': true,
        'px-6': true,
        'border-b-4': true,
        'uppercase': true,
        'font-semibold': true
      }

      const activeClasses = {
        'border-green-400': true,
        'text-green-400': true
      }

      const inactiveClasses = {
        'border-transparent': true
      }

      return {
        ...defaultClasses,
        ...(this.isActive ? activeClasses : inactiveClasses)
      }
    }
  }
}
</script>