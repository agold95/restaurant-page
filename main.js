(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(984),t.b),l=new URL(t(381),t.b),u=i()(o()),p=d()(s),m=d()(l);u.push([n.id,":root {\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background: url("+p+");\n    background-size: cover;\n\n    --background-dark: #272727d7;\n    --font-light: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.restaurant-name {\n    text-align: center;\n    font-size: 2.5em;\n    background-color: var(--background-dark);\n    color: var(--font-light);\n    padding: 1em;\n    padding-bottom: 1em;\n}\n\nnav {\n    background-color: var(--background-dark);\n    text-align: center;\n    padding: 1em;\n}\n\nbutton {\n    background: none;\n    border: none;\n    border-bottom: 2px solid transparent;\n    color: var(--font-light);\n    padding: 1em;\n    margin: 1em;\n    font-size: 1em;\n    cursor: pointer;\n}\n\nbutton:hover {\n    transform: translateY(-10%);\n    transition: transform 0.2s;\n}\n\n.nav-button.active {\n    border-bottom: 2px solid white;\n    transform: translateY(-20%);\n    transition: transform 0.2s;\n}\n\n.home-title, .menu-title, .contact-title {\n    text-align: center;\n    font-size: 2.5em;\n    background-color: var(--background-dark);\n    color: var(--font-light);\n    padding: 1em;\n    padding-bottom: 3em;\n}\n\n.home-image {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 1em 10em;\n    padding: 1em;\n    background-color: var(--background-dark);\n    border-radius: 0.2em;\n}\n\n.home-image > img {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 25em;\n    width: 25em;\n    background: url("+m+");\n    border-radius: 0.5em;\n}\n\n.home-text {\n    padding: 1em 3em;\n    font-style: italic;\n}\n\n.home-text h4 {\n    font-size: 2.3em;\n    text-align: center;\n    border-radius: 0.3em;\n    padding: 1em;\n}\n\n.home-text-p {\n    display: flex;\n    justify-content: space-around;\n    font-size: 1.2em;\n}\n\n.home-text-p p {\n    padding: 3em;\n    margin: 1em;\n    background-color: var(--background-dark);\n    color: var(--font-light);\n    border-radius: 0.5em;\n}\n\n.home-text-p p:hover {\n    transform: translateY(-17%);\n    transition: transform 0.2s;\n}\n\n.menu-grid {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 2em;\n    padding: 3em 8em;\n}\n\n.menu-grid > div {\n    background-color: var(--background-dark);\n    border-radius: 1em;\n    padding: 1em;\n    margin: 2em 4em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-grid > div:hover {\n    background-color: rgba(65, 65, 65, 0.836);\n    transform: translateY(-5%);\n    transition: transform 0.3s;\n}\n\n.menu-grid > div > img {\n    height: 15em;\n    width: 15em;\n}\n\n.menu-grid > div > p {\n    text-align: center;\n    font-size: 2em;\n    color: var(--font-light);\n}\n\n.menu-content > h4 {\n    color: var(--font-light);\n    font-size: 1.6em;\n    text-align: center;\n    background-color: var(--background-dark);\n    border-radius: 0.2em;\n    margin: 1em;\n    padding: 1em;\n}\n\n.contact-info {\n    background-color: var(--background-dark);\n    color: var(--font-light);\n    font-size: 1.3em;\n    text-align: center;\n    border-radius: 0.2em;\n    margin: 1em 10em;\n    padding: 1em;\n}\n\n.contact-info > img {\n    height: 15em;\n    width: 15em;\n}\n\n.contact-info > p {\n    font-size: 0.8em;\n    padding-bottom: 2em;\n}\n\n.contact-info > h4 {\n    font-size: 1.4em;\n}",""]);const f=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},381:(n,e,t)=>{n.exports=t.p+"c59d56d9bcd23a33fa82.jpg"},984:(n,e,t)=>{n.exports=t.p+"15dc255099186b0991fd.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(381);function g(n){const e=document.createElement("div");return e.classList=n,e}function b(n){const e=document.createElement("h4");return e.innerHTML=n,e}function v(n){const e=document.createElement("p");return e.innerHTML=n,e}function y(n,e){const t=document.createElement("img");return t.src=n,t.alt=e,t}const C=function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=g("home-content");n.appendChild(g("home-image")).appendChild(y(h,"pizza"));const e=n.appendChild(g("home-text"));e.appendChild(b("Welcome to Very Cool Restaurant"));const t=e.appendChild(g("home-text-p"));return t.appendChild(v("Here at <em><b>Very Cool Restaurant</b></em>, there is a lot of <em>very cool</em> food and <em>very cool</em> drinks.")),t.appendChild(v("We have great cool food like <b>pizza</b>, <b>hot dogs</b>, <b>hamburgers</b>, and <b>ice cream</b>!")),t.appendChild(v("Food at <em><b>Very Cool Restaurant</b></em> is only cooked by <em>very cool</em> people and tastes <em>very cool</em> too.")),t.appendChild(v("We are open only at <em>very cool</em> times of the day, so come on down to <em><b>Very Cool Restaurant</b></em> today!")),n}())},x=t.p+"3d5271bb3e1e14a4f230.png",k=t.p+"199aafa4345c8e676de2.jpg",E=t.p+"8d1f8059e5261757508f.jpg",w=t.p+"8f28215382ff379d0b81.jpg",L=t.p+"6af7ee5bf2c469cb4f12.png";function z(n){document.querySelectorAll(".nav-button").forEach((n=>{n!==this&&n.classList.remove("active")})),n.classList.add("active")}function j(){const n=document.createElement("header");n.classList.add("header");const e=document.createElement("h1");return e.classList.add("restaurant-name"),e.textContent="Very Cool Restaurant",n.appendChild(e),n.appendChild(function(){const n=document.createElement("nav"),e=document.createElement("button");e.classList.add("nav-button"),e.textContent="Home",e.addEventListener("click",(n=>{n.target.classList.contains("active")||(z(e),C())})),n.appendChild(e);const t=document.createElement("button");t.classList.add("nav-button"),t.textContent="Menu",t.addEventListener("click",(n=>{n.target.classList.contains("active")||(z(t),function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=g("menu-content"),e=n.appendChild(g("menu-grid")),t=e.appendChild(g("hotdog-container"));t.appendChild(y(x,"hot dog")),t.appendChild(v("Hot dogs!"));const r=e.appendChild(g("hamburger-container"));r.appendChild(y(k,"Hamburger")),r.appendChild(v("Hamburgers!!"));const o=e.appendChild(g("pizza2-container"));o.appendChild(y(E,"pizza 2")),o.appendChild(v("Pizza!!!"));const a=e.appendChild(g("icecream-container"));return a.appendChild(y(w,"icecream")),a.appendChild(v("Icecream!!!!")),n.appendChild(b("We only serve the <em>very coolest</em> of food at <em><b>Very Cool Restaurant</b></em>.")),n}())}())})),n.appendChild(t);const r=document.createElement("button");return r.classList.add("nav-button"),r.textContent="Contact",r.addEventListener("click",(n=>{n.target.classList.contains("active")||(z(r),function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=g("contact-content"),e=n.appendChild(g("contact-info"));return e.appendChild(b("Where we're located")),e.appendChild(y(L,"Earth")),e.appendChild(v("<small>...somewhere around here...</small>")),e.appendChild(b("📞 1-(234)-567-8901")),n}())}())})),n.appendChild(r),n}()),n}!function(){const n=document.getElementById("content");n.appendChild(j()),n.appendChild(function(){const n=document.createElement("main");return n.classList.add("main"),n.setAttribute("id","main"),n}()),z(document.querySelector(".nav-button")),C()}()})()})();