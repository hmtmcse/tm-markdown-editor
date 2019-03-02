const { app, BrowserWindow } = require('electron');
const TmMeIOHelper = require('./electron/src/tm-me-io-helper');
const TmMeIpcMain = require('./electron/src/tm-me-ipc-main');

let browserWindow;
function createWindow () {
    browserWindow = new BrowserWindow({
        title: "TM Markdown Editor"
    });
    browserWindow.maximize();
    browserWindow.loadFile('index.html');
    browserWindow.on('closed', () => {
        browserWindow = null
    });
    TmMeIpcMain.bindIoIpc();
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (browserWindow === null) {
        createWindow()
    }
});