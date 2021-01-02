<template>
  <div class="flex-1 m-4">
    <img class="max-w-xs h-auto" :src="item.item_art.url"/>
    <p class="font-bold">{{ item.album_title }}</p>
    <p>{{ item.band_name }}</p>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridEntry',
  props: {
    item: Object
  }
}
</script>