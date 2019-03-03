
const { ipcMain } = require('electron');
const TmMeIOHelper = require('./tm-me-io-helper');


const TmMeIpcMain = {
    bindIoIpc: () => {

        ipcMain.on('rename', (event, argument) => {
            event.returnValue = TmMeIOHelper.rename(argument.oldPath, argument.newPath);
        });

        ipcMain.on('listDirectory', (event, argument) => {
            event.returnValue = TmMeIOHelper.listDirectory(argument);
        });

        ipcMain.on('deleteDir', (event, directoryPath) => {
            event.returnValue = TmMeIOHelper.deleteDir(directoryPath);
        });

        ipcMain.on('deleteFile', (event, filePath) => {
            event.returnValue = TmMeIOHelper.deleteFile(filePath);
        });

        ipcMain.on('writeFile', (event, argument) => {
            event.returnValue = TmMeIOHelper.writeFile(argument.filePath, argument.data);
        });

        ipcMain.on('readFile', (event, filePath) => {
            event.returnValue = TmMeIOHelper.readFile(filePath);
        });

        ipcMain.on('mkdirP', (event, directoryPath) => {
            event.returnValue = TmMeIOHelper.mkdirP(directoryPath);
        });

    }
};

module.exports = TmMeIpcMain;