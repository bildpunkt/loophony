<template>
  <div class="px-4 pt-4 border-b border-gray-300 bg-white shadow">
    <div class="container mx-auto flex flex-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>