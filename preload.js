const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  abrirJanelaSobre: () => ipcRenderer.send('abrir-janela-sobre'),
  abrirJanelaAjuda: () => ipcRenderer.send('abrir-janela-ajuda')
});