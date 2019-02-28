import { app, BrowserWindow } from "electron";
import {PathUtil} from "./utils/path-util";


let browserWindow: Electron.BrowserWindow;
function createWindow() {
    browserWindow = new BrowserWindow({
        height: 768,
        width: 1366,
    });
    browserWindow.loadFile(PathUtil.staticResources("index.html"));
    browserWindow.setMenu(null);
    browserWindow.webContents.openDevTools();
}

app.on("ready", createWindow);