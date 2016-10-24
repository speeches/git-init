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
        { src: 'plugin/notes/notes.js', async: true }
    ]
});

// Connect to jitsi and show shared video
var domain = "meet.jit.si";
var room = "GitInitWorkShop";
var width = 700;
var height = 700;
var htmlElement = document.getElementById("live-video");
var configOverwrite = {
    desktopSharingChromeSources: [],
    startAudioMuted: true,
    startVideoMuted: true,
};
var interfaceConfigOverwrite = {
    SHOW_JITSI_WATERMARK: false,
    INVITATION_POWERED_BY: false,
    AUTHENTICATION_ENABLE: false,
    MAIN_TOOLBAR_BUTTONS: [],
    TOOLBAR_BUTTONS: [],
    SETTINGS_SECTIONS: [],
    DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
    DISABLE_RINGING: true,
};
var ssl = true;

var api = new JitsiMeetExternalAPI(domain, room, width, height, htmlElement, configOverwrite, interfaceConfigOverwrite, !ssl);
