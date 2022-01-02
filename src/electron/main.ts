import { app, BrowserWindow, ipcMain } from 'electron'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

require('@electron/remote/main').initialize()
const { Notification } = require('electron')

function createWindow(){

    let mainWindow: BrowserWindow | null = new BrowserWindow({
        width: 800,
        minWidth: 800,
        height: 600,
        minHeight: 600,
        frame: false,
        title: 'Electron Boilerplate',
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            devTools: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    })

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
    mainWindow.on('closed', () => mainWindow = null)

    ipcMain.on('control-min', () => mainWindow?.minimize())
    ipcMain.on('control-max', () => mainWindow?.maximize())
    ipcMain.on('control-restore', () => mainWindow?.unmaximize())
    ipcMain.on('control-close', () => mainWindow?.close())

    ipcMain.on('showMessage', () => new Notification({title: 'Hello', body: 'Hello World'}).show())

}

app.on('ready', () => createWindow())

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})

app.setAppUserModelId('Electron Boilerplate')