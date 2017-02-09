/// <reference path="../node_modules/@types/reveal/index.d.ts" />

// More info https://github.com/hakimel/reveal.js#configuration

var config = {};

if (containsQueryKey("live")) {
    config = {
        controls: false,
        progress: true,
        history: false,
        center: true,
        keyboard: false,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        multiplex: {
            // Example values. To generate your own, see the socket.io server instructions.
            secret: null, // Obtained from the socket.io server. Gives this (the master) control of the presentation
            id: 'd11fb5b6b20c046a', // Obtained from socket.io server
            url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh' // Location of socket.io server
        },

        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
            { src: 'lib/js/classList.js', condition: function () { return !document.body.classList; } },
            { src: 'plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
            { src: 'plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
            { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
            { src: 'plugin/zoom-js/zoom.js', async: true },
            { src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
            { src: 'plugin/multiplex/client.js', async: true }
        ]
    };
}
else if (containsQueryKey("master") || containsQueryKey("speaker")) {
    config = {
        controls: false,
        progress: true,
        history: true,
        center: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        multiplex: {
            // Example values. To generate your own, see the socket.io server instructions.
            secret: '14848666686364592786', // Obtained from the socket.io server. Gives this (the master) control of the presentation
            id: 'd11fb5b6b20c046a', // Obtained from socket.io server
            url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh' // Location of socket.io server
        },

        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
            { src: 'lib/js/classList.js', condition: function () { return !document.body.classList; } },
            { src: 'plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
            { src: 'plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
            { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
            { src: 'plugin/zoom-js/zoom.js', async: true },
            { src: 'plugin/notes/notes.js', async: true },
            { src: 'node_modules/reveal.js-menu/menu.js', async: true, condition: function () {
                    if (!window.frameElement) return false; // main
                    if (window.frameElement.parentElement.getAttribute("id") === "current-slide") return true;
                    if (window.frameElement.parentElement.getAttribute("id") === "upcoming-slide") return false;
                }
            },
            { src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
            { src: 'plugin/multiplex/master.js', async: true },

            // and if you want speaker notes
            { src: 'plugin/notes-server/client.js', async: true }
        ],

        menu: {
            numbers: false,
            markers: true
        }
    };
}
else {
    config = {
        controls: true,
        progress: true,
        history: true,
        center: true,
        keyboard: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
            { src: 'lib/js/classList.js', condition: function () { return !document.body.classList; } },
            { src: 'plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
            { src: 'plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
            { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
            { src: 'plugin/zoom-js/zoom.js', async: true },
            { src: 'node_modules/reveal.js-menu/menu.js', async: true }
        ],
        menu: {
            numbers: false,
            markers: true
        }
    };
}

Reveal.initialize(config);

var newLine = '(\r)?\n';

for (var group of document.getElementsByClassName("section-md")) {
    group.dataset.separator = "^" + newLine + "===" + newLine;
    group.dataset.separatorVertical = "^" + newLine + "---" + newLine;
    group.dataset.separatorNotes = "^Note:";
    group.dataset.charset = "UTF-8";
}

function containsQueryKey(key) {
    return getParameterByName(key) === "";
}

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}