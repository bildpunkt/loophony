const { ipcRenderer } = require('electron')

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.toString() === 'https://bandcamp.com/api/fan/2/collection_summary') {
    ipcRenderer.sendToHost('data', JSON.parse(document.body.children[0].textContent))
  }

  if (window['TralbumData'] !== undefined) {
    ipcRenderer.sendToHost('data', window['TralbumData'])
  }
})