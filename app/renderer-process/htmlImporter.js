"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var htmlImporter;
(function (htmlImporter) {
    const links = document.querySelectorAll('link[rel="import"]');
    function fileLoader() {
    }
    htmlImporter.fileLoader = fileLoader;
})(htmlImporter = exports.htmlImporter || (exports.htmlImporter = {}));
