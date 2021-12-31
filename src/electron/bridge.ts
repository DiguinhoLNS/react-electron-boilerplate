const remote = require('@electron/remote')
const { contextBridge } = require('electron')

const win = remote.getCurrentWindow()

document.onreadystatechange = () => {
    if(document.readyState === "complete") handleWindowControls()
}

function handleWindowControls(){

    toggleMaxRestoreButtons()
    win.on('maximize', toggleMaxRestoreButtons)
    win.on('unmaximize', toggleMaxRestoreButtons)

    function toggleMaxRestoreButtons(){
        if(win.isMaximized()){
            document.body.classList.add('maximized')
        }else{
            document.body.classList.remove('maximized')
        }
    }

}