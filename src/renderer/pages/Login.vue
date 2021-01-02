<template>
  <webview bandcamp-login class="w-full h-full" src="https://bandcamp.com/login" partition="persist:bandcamp"></webview>
</template>

<script>
export default {
  name: 'Login',
  mounted() {
    const rootWebview = document.querySelector('[bandcamp-navigator]')
    const webview = document.querySelector('[bandcamp-login]')
    let apiDidNavigate = false

    webview.addEventListener('did-start-loading', () => {
      if (webview.src !== 'https://bandcamp.com/login') {
        webview.style.display = 'none'

        if (!apiDidNavigate) {
          rootWebview.src = 'https://bandcamp.com/api/fan/2/collection_summary'
          apiDidNavigate = true

          rootWebview.addEventListener('ipc-message', event => {
            let data = event.args[0]

            this.$router.push(`/profile/${data.collection_summary.username}`)
          })
        }
      }
    })
  }
}
</script>