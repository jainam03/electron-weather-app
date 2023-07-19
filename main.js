const { app, BrowserWindow } = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1800,
        height: 1000,
    });

    mainWindow.loadFile('./index.html')
}

app.whenReady().then(createWindow)