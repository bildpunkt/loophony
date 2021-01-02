<template>
  <div class="flex-1 m-4">
    <router-link :to="'/album?url=' + item.item_url">
      <img class="max-w-xs h-auto" :src="item.item_art.url"/>
      <p class="font-bold">{{ item.album_title }}</p>
    </router-link>
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