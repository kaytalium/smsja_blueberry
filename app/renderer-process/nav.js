"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlImporter_1 = require("./htmlImporter");
var Nav;
(function (Nav) {
    let userLoggedIn = userAppStatus();
    if (userLoggedIn)
        handleUserView(userLoggedIn);
    else
        handleUserView();
    function showMainContent() {
        document.querySelector('.bb-content').classList.add('is-shown');
    }
    showMainContent();
    function userAppStatus() { return false; }
    function handleUserView(isLoggedIn = false) {
        if (!isLoggedIn) {
            htmlImporter_1.htmlImporter.fileLoader('login');
            document.querySelector('.bb-section').classList.add('is-shown');
        }
    }
})(Nav = exports.Nav || (exports.Nav = {}));
