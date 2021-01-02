<template>
  <div class="flex flex-wrap space-between">
    <collection-grid-entry v-for="item in collectionItems" :item="item" :key="item.album_id"/>
  </div>
</template>

<script>
import CollectionGridEntry from './CollectionGridEntry.vue'

export default {
  name: 'CollectionGrid',
  components: {
    CollectionGridEntry
  },
  props: {
    collectionItems: Array
  }
}
</script>