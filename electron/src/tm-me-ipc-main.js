
const { ipcMain, dialog } = require('electron');
const TmMeIOHelper = require('./tm-me-io-helper');


const TmMeIpcMain = {
    bindIoIpc: () => {
        ipcMain.on('listDirectory', (event, argument) => {
            let response = TmMeIOHelper.listDirectory(argument)
            console.log(response);
            event.returnValue = response;
        })
    }
};

module.exports = TmMeIpcMain;