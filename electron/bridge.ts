const remote = require("electron").remote

document.onreadystatechange = (event) => {
    if(document.readyState === "complete") handleWindowControls()
}

window.onbeforeunload = (event) => {
    remote.BrowserWindow.getFocusedWindow()?.removeAllListeners()
}

function handleWindowControls(){

    document.getElementById('min-button')?.addEventListener("click", event => {
        remote.BrowserWindow.getFocusedWindow()?.minimize()
    })

    document.getElementById('max-button')?.addEventListener("click", event => {
        remote.BrowserWindow.getFocusedWindow()?.maximize()
    })

    document.getElementById('restore-button')?.addEventListener("click", event => {
        remote.BrowserWindow.getFocusedWindow()?.unmaximize()
    })

    document.getElementById('close-button')?.addEventListener("click", event => {
        remote.BrowserWindow.getFocusedWindow()?.close()
    })

    toggleMaxRestoreButtons()

    remote.BrowserWindow.getFocusedWindow()?.on('maximize', toggleMaxRestoreButtons)
    remote.BrowserWindow.getFocusedWindow()?.on('unmaximize', toggleMaxRestoreButtons)

    function toggleMaxRestoreButtons(){
        remote.getCurrentWindow()?.isMaximized() ? document.body.classList.add('maximized') : document.body.classList.remove('maximized')
    }

}