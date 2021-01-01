const { ipcRenderer } = require('electron')

document.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.sendToHost('data', window['TralbumData'])
})