"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppLogin;
(function (AppLogin) {
    let template = document.currentScript.ownerDocument.querySelector('template#login');
    let prototype = Object.create(HTMLElement.prototype);
    let $notify;
    let $dropbox;
    let $itemCount;
    prototype.createdCallback = function () {
        this.createShadowRoot().appendChild(document.importNode(template.content, true));
    };
    prototype.attachedCallback = function () { };
    prototype.attributeChangedCallback = function (attrName, oldVal, newVal) {
        switch (attrName) {
            case 'new-item-count':
                notifyCount(newVal);
                break;
        }
    };
    function onclick(e) {
        const isOpen = this.shadowRoot.querySelector('.dropbox.is-open');
        if (isOpen) {
            $dropbox.classList.remove('is-open');
        }
        else {
            $dropbox.classList.add('is-open');
        }
    }
    function notifyCount(n) {
        if (n) {
            $itemCount.innerHTML = n;
        }
    }
    document.registerElement('app-login', { prototype: prototype });
})(AppLogin = exports.AppLogin || (exports.AppLogin = {}));
