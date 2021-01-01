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
      <tr v-for="track in trackinfo" :key="track.track_num">
        <td class="border-b border-gray-300">{{ track.track_num }}</td>
        <td class="border-b border-gray-300">{{ track.title }}</td>
        <td class="border-b border-gray-300"><audio :src="track.file['mp3-128']" controls></audio></td>
        <td class="border-b border-gray-300">{{ track.duration }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TrackTable',
  props: {
    trackinfo: Object
  }
}
</script>