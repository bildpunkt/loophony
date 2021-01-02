<template>
  <div class="flex p-4" v-if="FanData">
    <img class="max-w-xs h-auto" :src="photoURL"/>
    <div class="flex-grow self-center ml-4">
      <h1 class="font-extrabold text-6xl mb-4">{{ FanData.username }}</h1>
      <p>{{ FanData.followers_count }} followers, {{ followingCount }} following</p>
    </div>
  </div>
  <div class="flex flex-wrap p-4" v-if="CollectionItems">
    <div class="w-1/5 pb-4" v-for="item in CollectionItems" :key="item.album_id">
      <img class="max-w-xs h-auto" :src="item.item_art.url"/>
      <p class="font-bold">{{ item.album_title }}</p>
      <p>{{ item.band_name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      FanData: null,
      CollectionItems: null
    }
  },
  computed: {
    photoURL: function () {
      return `https://f4.bcbits.com/img/${this.FanData.photo.image_id.toString().padStart(10, '0')}_41.jpg`
    },
    followingCount: function () {
      return Number(this.FanData.following_fans_count) + Number(this.FanData.following_bands_count)
    }
  },
  mounted() {
    let webview = document.querySelector('[bandcamp-navigator]')

    webview.src = `https://bandcamp.com/${this.$route.params.user}`

    webview.addEventListener('ipc-message', event => {
      this.FanData = event.args[0].FanData
      this.CollectionItems = event.args[0].CollectionItems
    })
  }
}
</script>