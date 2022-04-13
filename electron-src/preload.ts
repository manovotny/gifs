import type {IpcRenderer} from 'electron';
import {ipcRenderer} from 'electron';

declare global {
    var ipcRenderer: IpcRenderer;
}

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
    global.ipcRenderer = ipcRenderer;
});
