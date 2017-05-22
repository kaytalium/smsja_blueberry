"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron = require('electron');
const path = require('path');
if (handleSquirrelEvent(electron_1.app)) {
    return;
}
const debug = /--debug/.test(process.argv[2]);
if (process.mas)
    electron_1.app.setName('blueberry');
let mainWindow;
function initialize() {
    var shouldQuit = makeSingleInstance();
    if (shouldQuit)
        return electron_1.app.quit;
    function createWindow() {
        var windowOptions = {
            width: 800,
            height: 400,
            show: true
        };
        mainWindow = new electron_1.BrowserWindow(windowOptions);
        mainWindow.loadURL(`file://${__dirname}/app/index.html`);
        if (debug) {
        }
        mainWindow.on('closed', function () {
            mainWindow = null;
        });
    }
    electron_1.app.on('ready', createWindow);
    electron_1.app.on('window-all-closed', function () {
        if (process.platform != 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', function () {
        if (mainWindow === null) {
            createWindow();
        }
    });
}
function makeSingleInstance() {
    if (process.mas)
        return false;
    return electron_1.app.makeSingleInstance(function () {
        if (mainWindow) {
            if (mainWindow.isMinimized())
                mainWindow.restore();
            mainWindow.focus();
        }
    });
}
initialize();
function handleSquirrelEvent(application) {
    if (process.argv.length === 1) {
        return false;
    }
    const ChildProcess = require('child_process');
    const appFolder = path.resolve(process.execPath, '..');
    const rootAtomFolder = path.resolve(appFolder, '..');
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
    const exeName = path.basename(process.execPath);
    const spawn = function (command, args) {
        let spawnedProcess, error;
        try {
            spawnedProcess = ChildProcess.spawn(command, args, {
                detached: true
            });
        }
        catch (error) { }
        return spawnedProcess;
    };
    const spawnUpdate = function (args) {
        return spawn(updateDotExe, args);
    };
    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            spawnUpdate(['--createShortcut', exeName]);
            setTimeout(application.quit, 1000);
            return true;
        case '--squirrel-obsolete':
            application.quit();
            return true;
    }
}
