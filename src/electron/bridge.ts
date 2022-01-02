const remote = require('@electron/remote')
const win = remote.getCurrentWindow()

document.onreadystatechange = () => {
    if(document.readyState === "complete") handleWindowControls()
}

function handleWindowControls(){

    toggleMaxRestoreButtons()
    win.on('maximize', toggleMaxRestoreButtons)
    win.on('unmaximize', toggleMaxRestoreButtons)

    function toggleMaxRestoreButtons(){
        win.isMaximized() ? document.body.classList.add('maximized') : document.body.classList.remove('maximized')
    }

}