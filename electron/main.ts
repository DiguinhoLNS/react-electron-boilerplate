import { app, BrowserWindow, ipcMain } from 'electron'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const createWindow = () => {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        //autoHideMenuBar: true,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: true,
            devTools: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        },
    })

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    mainWindow.on('closed', () => mainWindow = null)

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})
