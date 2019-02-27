import { app, BrowserWindow } from "electron";
import {PathUtil} from "./utils/PathUtil";


let browserWindow: Electron.BrowserWindow;
function createWindow() {
    browserWindow = new BrowserWindow({
        height: 1000,
        width: 1200,
    });
    browserWindow.loadFile(PathUtil.staticResources("index.html"));
    browserWindow.webContents.openDevTools();
}

app.on("ready", createWindow);