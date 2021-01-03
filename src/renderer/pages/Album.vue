<template>
  <div v-if="TralbumData">
    <div class="px-4 pt-4 border-b border-gray-300 bg-white shadow">
      <div class="container mx-auto flex flex-wrap">
        <img class="max-w-xs h-auto" :src="'https://f4.bcbits.com/img/a' +  TralbumData.art_id  + '_16.jpg'"/>
        <div class="flex-grow self-center ml-4">
          <h1 class="font-extrabold text-6xl">{{ TralbumData.current.title }}</h1>
          <p class="font-bold mb-2">{{ TralbumData.current.artist || TralbumData.artist }}</p>
          <p>{{ TralbumData.trackinfo.length }} tracks, released {{ releaseDate }}</p>
        </div>
        <tab-list v-model="activeTab">
          <tab-list-entry :active=true>
            Track List
          </tab-list-entry>
          <tab-list-entry>
            About & Credits
          </tab-list-entry>
          <tab-list-entry>
            Reviews
          </tab-list-entry>
        </tab-list>
      </div>
    </div>

    <div class="container mx-auto py-4">
      <tab-container :activeTab="activeTab">
        <tab-content :active=true>
          <track-table :trackinfo="TralbumData.trackinfo"/>
        </tab-content>
        <tab-content>
          <div class="flex">
            <div class="w-1/2 px-4">
              <h2 class="text-xl font-medium mb-2">About</h2>
              <div v-html="aboutText"></div>
            </div>
            <div class="w-1/2 px-4">
              <h2 class="text-xl font-medium mb-2">Credits</h2>
              <div v-html="creditsText"></div>
            </div>
          </div>
        </tab-content>
        <tab-content>
          <p>TODO: Reviews</p>
        </tab-content>
      </tab-container>
    </div>
  </div>
</template>

<script>
import escs2html from '../utilities/escs2html'

import TabList from '../components/TabList.vue'
import TabListEntry from '../components/TabListEntry.vue'
import TabContainer from '../components/TabContainer.vue'
import TabContent from '../components/TabContent.vue'
import TrackTable from '../components/TrackTable.vue'

export default {
  name: 'Album',
  components: {
    TabList,
    TabListEntry,
    TabContainer,
    TabContent,
    TrackTable
  },
  data() {
    return {
      TralbumData: null,
      activeTab: 0
    }
  },
  computed: {
    releaseDate: function () {
      let date = new Date(this.TralbumData.current.release_date)

      return date.toLocaleDateString()
    },
    aboutText: function() {
      return escs2html(this.TralbumData.current.about)
    },
    creditsText: function() {
      return escs2html(this.TralbumData.current.credits)
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