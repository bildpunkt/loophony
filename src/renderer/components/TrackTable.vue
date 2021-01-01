<template>
  <table class="w-full border-separate">
    <thead>
      <tr class="font-extralight uppercase">
        <td class="border-b border-gray-300">#</td>
        <td class="border-b border-gray-300">Title</td>
        <td class="border-b border-gray-300"></td>
        <td class="border-b border-gray-300">Duration</td>
      </tr>
    </thead>
    <tbody v-if="trackinfo">
      <track-table-entry v-for="track in trackinfo" :track="track" :key="track.track_num"/>
    </tbody>
  </table>
</template>

<script>
import TrackTableEntry from './TrackTableEntry.vue'

export default {
  name: 'TrackTable',
  components: {
    TrackTableEntry
  },
  props: {
    trackinfo: Object
  }
}
</script>