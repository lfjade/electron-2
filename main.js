const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.loadFile('html/index.html')
}

function createAboutWindow(){
    const aboutWindow = new BrowserWindow()
    aboutWindow.loadFile('html/sobre.html')
}

function createHelpWindow(){
    const helpWindow = new BrowserWindow()
    helpWindow.loadFile('html/ajuda.html')
}

app.whenReady().then(() => {
    createMainWindow()

    ipcMain.on('abrir-janela-sobre', ()=>{
        createAboutWindow()
    })
    ipcMain.on('abrir-janela-ajuda', () =>{
        createHelpWindow()
    })
})