const {app, BrowserWindow, Menu } = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        height: 600,
        width: 600,
        icon: 'asset/icons/hook.ico',
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile("app/index.html")
    win.removeMenu()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if(process.platform = 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0){
        createWindow()
    }
})