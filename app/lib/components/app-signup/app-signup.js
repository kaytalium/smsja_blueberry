"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppSignUp;
(function (AppSignUp) {
    let template = document.currentScript.ownerDocument.querySelector('template#signup');
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
                break;
        }
    };
    document.registerElement('app-signup', { prototype: prototype });
})(AppSignUp = exports.AppSignUp || (exports.AppSignUp = {}));
