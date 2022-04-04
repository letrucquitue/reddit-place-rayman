// ==UserScript==
// @name         Reddit Place - Rayman <3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  We love Rayman
// @author       Letrucquitue
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.zupimages.net/up/22/14/eftw.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://www.zupimages.net/up/22/14/eftw.png";
            i.style = "position: absolute;left: 231px;top: 1860px;image-rendering: pixelated;width: 14px;height: 23px; opacity:0.5;";
            console.log(i);
            return i;
        })())

    }, false);
}