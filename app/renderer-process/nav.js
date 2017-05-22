"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log('is this user logged in? ', isLoggedIn);
    }
})(Nav = exports.Nav || (exports.Nav = {}));
