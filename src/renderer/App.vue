<template>
  <router-view></router-view>
  <webview bandcamp-navigator preload="preload.js" nodeintegration style="display: none;"></webview>
</template>

<script>
export default {
  name: 'App'
}
</script>