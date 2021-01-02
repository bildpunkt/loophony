// @ts-nocheck
const { ipcRenderer } = require('electron')

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.toString() === 'https://bandcamp.com/api/fan/2/collection_summary') {
    ipcRenderer.sendToHost('data', JSON.parse(document.body.children[0].textContent))
  }

  if (window['TralbumData'] !== undefined) {
    ipcRenderer.sendToHost('data', window['TralbumData'])
  }

  if (window['CollectorsAPI'] !== undefined && window['FanData'] !== undefined) {
    const fanID = FanData.fan_id
    const lastToken = document.querySelector('[data-token]').getAttribute('data-token')

    CollectorsAPI
      .doPost('/api/fancollection/1/collection_items', 
      `{"fan_id":${fanID},"older_than_token":"${lastToken}","count":9999}`).then(function (data) {
        ipcRenderer.sendToHost('data', {
          FanData: window.FanData,
          CollectionItems: data.items
        })
      })
  }
})