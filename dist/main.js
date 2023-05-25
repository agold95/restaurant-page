(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(984),t.b),u=new URL(t(381),t.b),p=i()(o()),l=d()(s),m=d()(u);p.push([e.id,":root {\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background: url("+l+");\n    background-size: cover;\n\n    --background-dark: #272727c0;\n    --font-light: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.home-title, .menu-title {\n    text-align: center;\n    font-size: 2.5em;\n    background-color: var(--background-dark);\n    color: var(--font-light);\n    padding: 1em;\n    padding-bottom: 3em;\n}\n\n.home-image {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2em;\n}\n\n.home-image > img {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 25em;\n    width: 25em;\n    background: url("+m+");\n    border-radius: 0.5em;\n}\n\n.home-text {\n    padding: 1em 3em;\n    font-style: italic;\n}\n\n.home-text h4 {\n    font-size: 2.3em;\n    text-align: center;\n    border-radius: 0.3em;\n    padding: 1em;\n}\n\n.home-text-p {\n    display: flex;\n    justify-content: space-around;\n    font-size: 1.2em;\n}\n\n.home-text-p p {\n    padding: 3em;\n    margin: 1em;\n    background-color: var(--background-dark);\n    color: var(--font-light);\n    border-radius: 0.5em;\n}\n\n.menu-grid {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 2em;\n    padding: 3em 8em;\n}\n\n.menu-grid > div {\n    background-color: var(--background-dark);\n    border-radius: 1em;\n}\n\n.menu-grid > div > img {\n    height: 15em;\n    width: 15em;\n}\n\n.menu-grid > div > p {\n    text-align: center;\n    font-size: 2em;\n    color: white;\n}\n\n.menu-content > h4 {\n    color: white;\n    font-size: 1.6em;\n    text-align: center;\n    background-color: var(--background-dark);\n    border-radius: 0.2em;\n    margin: 1em;\n    padding: 1em;\n}",""]);const f=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var l=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},381:(e,n,t)=>{e.exports=t.p+"c59d56d9bcd23a33fa82.jpg"},984:(e,n,t)=>{e.exports=t.p+"15dc255099186b0991fd.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),u=t.n(s),p=t(589),l=t.n(p),m=t(426),f={};f.styleTagTransform=l(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,t(381);const g=t.p+"3d5271bb3e1e14a4f230.png",h=t.p+"199aafa4345c8e676de2.jpg",v=t.p+"8d1f8059e5261757508f.jpg",b=t.p+"8f28215382ff379d0b81.jpg";function y(e){const n=document.createElement("div");return n.classList=e,n}function x(e){const n=document.createElement("p");return n.innerHTML=e,n}function C(e,n){const t=document.createElement("img");return t.src=e,t.alt=n,t}document.getElementById("content").appendChild(function(){const e=y("menu-content");e.appendChild(y("menu-title")).appendChild(function(e){const n=document.createElement("h1");return n.textContent="Menu",n}());const n=e.appendChild(y("menu-grid")),t=n.appendChild(y("hotdog-container"));t.appendChild(C(g,"hot dog")),t.appendChild(x("Hot dogs!"));const r=n.appendChild(y("hamburger-container"));r.appendChild(C(h,"Hamburger")),r.appendChild(x("Hamburgers!!"));const o=n.appendChild(y("pizza2-container"));o.appendChild(C(v,"pizza 2")),o.appendChild(x("Pizza!!!"));const a=n.appendChild(y("icecream-container"));return a.appendChild(C(b,"icecream")),a.appendChild(x("Icecream!!!!")),e.appendChild(function(e){const n=document.createElement("h4");return n.innerHTML="We only serve the <em>very coolest</em> of food at <em><b>Very Cool Restaurant</b></em>.",n}()),e}())})()})();