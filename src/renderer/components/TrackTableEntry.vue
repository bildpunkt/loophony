<template>
  <tr>
    <td class="border-b border-gray-300">{{ track.track_num }}</td>
    <td class="border-b border-gray-300">{{ track.title }}</td>
    <td class="border-b border-gray-300"><audio :src="track.file['mp3-128']" controls></audio></td>
    <td class="border-b border-gray-300">{{ track.duration }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TrackTableEntry',
  props: {
    track: Object
  }
}
</script>