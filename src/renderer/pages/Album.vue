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
      <track-table :trackinfo="TralbumData.trackinfo"/>
    </div>
  </div>
</template>

<script>
import TrackTable from '../components/TrackTable.vue'

export default {
  name: 'Album',
  components: {
    TrackTable
  },
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
    let webview = document.querySelector('[bandcamp-navigator]')

    webview.src = this.$route.query.url

    webview.addEventListener('ipc-message', event => {
      this.TralbumData = event.args[0]
    })
  }
}
</script>