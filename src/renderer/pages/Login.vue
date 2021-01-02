<template>
  <webview bandcamp-login class="w-full h-full" src="https://bandcamp.com/login" partition="persist:bandcamp"></webview>
</template>

<script>
export default {
  name: 'Login',
  mounted() {
    const webview = document.querySelector('[bandcamp-login]')

    webview.addEventListener('did-start-loading', () => {
      if (webview.src !== 'https://bandcamp.com/login') {
        this.$router.push('/album?url=https://frozenstarfall.bandcamp.com/album/infinite-dreams')
      }
    })

    webview.addEventListener('will-navigate', (event) => {
      if (event.url !== 'https://bandcamp.com/login') {
        this.$router.push('/album?url=https://frozenstarfall.bandcamp.com/album/infinite-dreams')
      }
    })
  }
}
</script>