"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var htmlImporter;
(function (htmlImporter) {
    const links = document.querySelectorAll('link[rel="import"]');
    function fileLoader(category) {
        if (!isCategory(category)) {
            Array.prototype.forEach.call(links, function (link) {
                let template = link.import.querySelector('.template-' + category);
                if (template !== null) {
                    let clone = document.importNode(template.content, true);
                    let current = document.querySelector('.content').childNodes;
                    if (link.href.match('home.html')) {
                    }
                    else {
                        document.querySelector('.content').appendChild(clone);
                    }
                }
            });
        }
    }
    htmlImporter.fileLoader = fileLoader;
    function isCategory(catgory) {
        let activeSections = document.querySelectorAll('.bb-section.category-' + catgory);
        if (activeSections.length > 0) {
            return true;
        }
        else {
            let currentSection = document.querySelectorAll('.bb-section');
            Array.prototype.forEach.call(currentSection, function (section) {
                if (section.dataset.template !== catgory) {
                    section.parentNode.removeChild(section);
                }
            });
            return false;
        }
    }
})(htmlImporter = exports.htmlImporter || (exports.htmlImporter = {}));
