const { app, BrowserWindow } = require('electron');

let browserWindow;
function createWindow () {
    browserWindow = new BrowserWindow();
    browserWindow.maximize();
    browserWindow.loadFile('index.html');
    // browserWindow.webContents.openDevTools();
    browserWindow.on('closed', () => {
        browserWindow = null
    });
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