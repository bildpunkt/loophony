<template>
  <page-header v-if="FanData">
    <img class="max-w-xs h-auto" :src="photoURL"/>
    <div class="flex-grow self-center ml-4">
      <h1 class="font-extrabold text-6xl mb-4">{{ FanData.username }}</h1>
      <p v-if="FanData.bio">{{ FanData.bio }}</p>
    </div>
    <tab-list v-model="activeTab">
      <tab-list-entry :active=true>
        Collection
      </tab-list-entry>
      <tab-list-entry>
        Wishlist
      </tab-list-entry>
      <tab-list-entry>
        {{ FanData.followers_count }} Followers
      </tab-list-entry>
      <tab-list-entry>
        {{ followingCount }} Following
      </tab-list-entry>
    </tab-list>
  </page-header>
  <div class="container mx-auto py-4">
    <tab-container :activeTab="activeTab">
      <tab-content :active=true>
        <collection-grid :collectionItems="CollectionItems" v-if="CollectionItems"/>
      </tab-content>
      <tab-content>
        <p>TODO: Wishlist</p>
      </tab-content>
      <tab-content>
        <p>TODO: Followers</p>
      </tab-content>
      <tab-content>
        <p>TODO: Following</p>
      </tab-content>
    </tab-container>
  </div>
</template>

<script>
import CollectionGrid from '../components/CollectionGrid.vue'
import PageHeader from '../components/PageHeader.vue'
import TabList from '../components/TabList.vue'
import TabListEntry from '../components/TabListEntry.vue'
import TabContainer from '../components/TabContainer.vue'
import TabContent from '../components/TabContent.vue'

export default {
  name: 'Profile',
  components: {
    CollectionGrid,
    PageHeader,
    TabList,
    TabListEntry,
    TabContainer,
    TabContent
  },
  data() {
    return {
      activeTab: 0,
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