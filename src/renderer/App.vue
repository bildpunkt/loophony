<template>
  <div v-if="TralbumData">
    <div class="flex p-4">
      <img class="max-w-xs h-auto" :src="'https://f4.bcbits.com/img/a' +  TralbumData.art_id  + '_16.jpg'"/>
      <div class="flex-grow self-center ml-4">
        <h1 class="font-extrabold text-6xl">{{ TralbumData.current.title }}</h1>
        <p class="font-bold mb-2">{{ TralbumData.current.artist || TralbumData.artist }}</p>
        <p>{{TralbumData.trackinfo.length }} tracks, released {{ releaseDate }}</p>
      </div>
    </div>
  
    <div class="p-4">
      <table class="w-full border-separate">
        <thead>
          <tr class="font-extralight uppercase">
            <td class="border-b border-gray-300">#</td>
            <td class="border-b border-gray-300">Title</td>
            <td class="border-b border-gray-300"></td>
            <td class="border-b border-gray-300">Duration</td>
          </tr>
        </thead>
        <tbody v-if="TralbumData.trackinfo">
          <tr v-for="track in TralbumData.trackinfo" :key="track.track_num">
            <td class="border-b border-gray-300">{{ track.track_num }}</td>
            <td class="border-b border-gray-300">{{ track.title }}</td>
            <td class="border-b border-gray-300"><audio :src="track.file['mp3-128']" controls></audio></td>
            <td class="border-b border-gray-300">{{ track.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <webview src="https://frozenstarfall.bandcamp.com/album/infinite-dreams" preload="preload.js" nodeintegration style="display: none;"></webview>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      TralbumData: null
    }
  },
  computed: {
    releaseDate: function () {
      let date = new Date(this.TralbumData.current.release_date)

      return date.toLocaleDateString()
    }
  },
  mounted() {
    let webview = document.querySelector('webview')

    webview.addEventListener('ipc-message', event => {
      this.TralbumData = event.args[0]
    })
  }
}
</script>