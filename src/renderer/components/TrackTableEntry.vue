<template>
  <tr>
    <td class="border-b border-gray-300">{{ track.track_num }}</td>
    <td class="border-b border-gray-300">{{ track.title }}</td>
    <td class="border-b border-gray-300"><audio :src="track.file['mp3-128']" controls></audio></td>
    <td class="border-b border-gray-300">{{ duration }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TrackTableEntry',
  props: {
    track: Object
  },
  computed: {
    duration: function () {
      const roundDuration = Math.floor(this.track.duration)
      let minutes = Math.floor(roundDuration / 60)
      let seconds = (roundDuration - minutes * 60).toString().padStart(2, '0')

      return `${minutes}:${seconds}`
    }
  }
}
</script>