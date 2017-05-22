import { app, BrowserWindow } from 'electron'
const electron = require('electron')
//import { firebase } from './script/lib/firebaseConfig'
const path = require('path')

//setting up global vars for ts files 
declare var _dirname, process

if(handleSquirrelEvent(app)){
    //squirrel event handled and app will exit in 1000ms, so dont't do anything else
    return;
}

const debug = /--debug/.test(process.argv[2])

if(process.mas) app.setName('blueberry')

//keep a global reference of the window object, if you don't, the window will 
//be closed automatically when the javascript object is garbage collected.
let mainWindow

//Configure app for startup and shutdown
function initialize(){

    var shouldQuit = makeSingleInstance()
    if(shouldQuit) return app.quit

    function createWindow(){
        
        var windowOptions = {
            width: 800,
            height: 400,
            show: true
        }

        //create the browser window
        mainWindow = new BrowserWindow(windowOptions)

        //load the index of the app
        mainWindow.loadURL(`file://${__dirname}/app/index.html`)


        //Open the Devtools if debug command was fired.
        if(debug){
            //mainWindow.webComponents.openDevTools()
        }

        mainWindow.on('closed', function(){
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time 
            // when you should delete the corresponding element.
            mainWindow = null
        })
    }

    // This method will be called when electron has finished 
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', createWindow)

    // Quit when all windows are closed.
    app.on('window-all-closed', function(){
        // On OS X it is common for applications and their menu bar
        //to stay active until the user quits explicitly with Cmd + Q
        if(process.platform != 'darwin'){
            app.quit()
        }
    })

    app.on('activate', function(){
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if(mainWindow === null){
            createWindow()
        }
    })
}

// Make this app a single instance app
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of launching.
function makeSingleInstance(){
    if(process.mas) return false

    return app.makeSingleInstance(function (){
        if(mainWindow){
            if(mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}

//Start the app at this point
initialize()

function handleSquirrelEvent(application){
    if(process.argv.length === 1){
        return false
    }

    const ChildProcess = require('child_process')
    const appFolder = path.resolve(process.execPath, '..')
    const rootAtomFolder = path.resolve(appFolder, '..')
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'))
    const exeName = path.basename(process.execPath)

    const spawn = function (command, args) {
        let spawnedProcess, error;

        try{
            spawnedProcess = ChildProcess.spawn(command, args, {
                detached: true
            });
        } catch (error) { }

        return spawnedProcess
    }

    const spawnUpdate = function (args){
        return spawn(updateDotExe,args)
    }

    const squirrelEvent = process.argv[1]
    switch(squirrelEvent){
        case '--squirrel-install':
        case '--squirrel-updated':
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and 
            //   explorer context menus

            // Install desktop and start menu shortcuts
            spawnUpdate(['--createShortcut', exeName])

            setTimeout(application.quit, 1000)
            return true

        case '--squirrel-obsolete':
            // This is called on the outgoing version of your app befoire
            // we update to the new version - it's the opposite of 
            // --squirrel-updated

            application.quit()
            return true
    } 
}

