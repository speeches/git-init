/// <reference path="../node_modules/@types/reveal/index.d.ts" />

// More info https://github.com/hakimel/reveal.js#configuration

Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // More info https://github.com/hakimel/reveal.js#dependencies
    dependencies: [
        { src: 'lib/js/classList.js', condition: function () { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
        { src: 'plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'node_modules/reveal.js-menu/menu.js', async: true }
    ],

    menu: {
        numbers: true
    }
});

var newLine = '(\r)?\n';

for (var group of document.getElementsByClassName("section-md")){
    group.dataset.separator = "^" + newLine + "===" + newLine ;
    group.dataset.separatorVertical = "^" + newLine + "---" + newLine ;
    group.dataset.separatorNotes = "^Note:";
    group.dataset.charset = "UTF-8";
}
