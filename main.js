const { app, BrowserWindow } = require('electron')

let win

function createWindow(){
    win = new BrowserWindow({ Width: 800, Heigth: 600 })
    // win.loadURL(`fill://${__dirname}/index.html`)
    win.loadFile('index.html')
    win.on('closed', () => { win = null })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})