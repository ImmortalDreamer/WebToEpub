/*
    General dumping ground for misc functions that I can't find a better place for.
    Warning: Don't look at this too closely, or you may loose your sanity.
    Side Note: Putting these all in one place may not have been a good idea. 
    I think they're breeding. There seem to be more functions in here that I didn't create.
*/

"use strict";

var util = (function () {

    var createEmptyXhtmlDoc = function() {
        let doc = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "", null);
        let htmlNode = doc.createElement("html");
        doc.appendChild(htmlNode);
        htmlNode.appendChild(doc.createElement("head"));
        let body = doc.createElement("body");
        htmlNode.appendChild(body);
        return doc;
    }

    var resolveRelativeUrl = function(baseUrl, relativeUrl) {
        // Assumes parent document has a <base> element
        let base = document.getElementsByTagName('base')[0];
        let oldHref = base.href;

        // this gets the browser to do the work for us
        let resolver = document.createElement('a');
        base.href = baseUrl;
        resolver.href = relativeUrl;
        let resolvedUrl = resolver.href;  

        // restore and return
        base.href = oldHref;
        return resolvedUrl;
    }

    var addToDocBody = function (dom, contentToAdd) {
        dom.getElementsByTagName("body")[0].appendChild(contentToAdd);
    }

    // delete all nodes in the supplied array
    var removeElements = function (elements) {
        elements.forEach(function (e) {
            if (e.parentNode != null) {
                e.parentNode.removeChild(e)
            }
        });
    }

    return {
        createEmptyXhtmlDoc: createEmptyXhtmlDoc,
        resolveRelativeUrl: resolveRelativeUrl,
        addToDocBody: addToDocBody,
        removeElements: removeElements
    };
})();

