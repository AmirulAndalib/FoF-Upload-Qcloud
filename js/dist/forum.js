/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={18:function(t,e){var r,n;void 0===(n="function"==typeof(r=function(){"use strict";if("undefined"==typeof window||void 0===window.navigator||void 0===window.navigator.userAgent)return!1;var t=window,e=t.navigator,r=e.userAgent,n=!1,o=function(t){var e=null;try{e=new ActiveXObject(t)}catch(t){e=null}return!!e},i=function(){if(void 0!==e.platform&&"MacIntel"===e.platform&&void 0!==e.maxTouchPoints&&e.maxTouchPoints>1||/Mobi|Tablet|Android|iPad|iPhone/.test(r))return!1;var n,i,a,u="boolean"==typeof e.pdfViewerEnabled;return!(u&&!e.pdfViewerEnabled)&&(u&&e.pdfViewerEnabled||(n=void 0!==t.chrome,i=void 0!==t.safari||void 0!==e.vendor&&/Apple/.test(e.vendor)&&/Safari/.test(r),a=void 0!==t.Mozilla||/irefox/.test(r),n||i||a)||"ActiveXObject"in t&&(o("AcroPDF.PDF")||o("PDF.PdfCtrl")))}(),a=function(t){return n||console.log("[PDFObject]",t),!1},u=function(t,e,r,n,o,i,a,u,c,l,f){!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(e);var s=r;if("pdfjs"===t){var p=-1!==f.indexOf("?")?"&":"?";s=f+p+"file="+encodeURIComponent(r)+n}else s+=n;var d=document.createElement("iframe");if(d.className="pdfobject",d.type="application/pdf",d.title=u,d.src=s,d.allow="fullscreen",d.frameborder="0",a&&(d.id=a),!c){var h="border: none;";e!==document.body?h+="width: "+o+"; height: "+i+";":h+="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",d.style.cssText=h}return l&&l.key&&-1===["className","type","title","src","style","id","allow","frameborder"].indexOf(l.key)&&d.setAttribute(l.key,void 0!==l.value?l.value:""),e.classList.add("pdfobject-container"),e.appendChild(d),e.getElementsByTagName("iframe")[0]},c=function(e,r,o){var c=r||!1,l=o||{};n="boolean"==typeof l.suppressConsole&&l.suppressConsole;var f,s="string"==typeof l.id?l.id:"",p=l.page||!1,d=l.pdfOpenParams||{},h="string"!=typeof l.fallbackLink&&"boolean"!=typeof l.fallbackLink||l.fallbackLink,v=l.width||"100%",y=l.height||"100%",m=l.title||"Embedded PDF",g="boolean"==typeof l.forcePDFJS&&l.forcePDFJS,b="boolean"==typeof l.omitInlineStyles&&l.omitInlineStyles,w=l.PDFJS_URL||!1,x=function(e){var r=document.body;return"string"==typeof e?r=document.querySelector(e):void 0!==t.jQuery&&e instanceof jQuery&&e.length?r=e.get(0):void 0!==e.nodeType&&1===e.nodeType&&(r=e),r}(c),L=l.customAttribute||{},P="<p>This browser does not support inline PDFs. Please download the PDF to view it: [pdflink]</p>";if("string"!=typeof e)return a("URL is not valid");if(!x)return a("Target element cannot be determined");if(p&&(d.page=p),f=function(t){var e,r="",n=[],o="";if((t.comment||t.viewrect||t.highlight)&&(t.page||(t.page=1,a("The comment, viewrect, and highlight parameters require a page parameter, but none was specified. Defaulting to page 1."))),t.page&&(n.push("page="+encodeURIComponent(t.page)),delete t.page),t.fdf&&(o=t.fdf,delete t.fdf),t){for(e in t)t.hasOwnProperty(e)&&n.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));o&&n.push("fdf="+encodeURIComponent(o)),(r=n.join("&"))&&(r="#"+r)}return r}(d),g&&w)return u("pdfjs",x,e,f,v,y,s,m,b,L,w);if(i)return u("iframe",x,e,f,v,y,s,m,b,L);if(w)return u("pdfjs",x,e,f,v,y,s,m,b,L,w);if(h)if("string"==typeof h)x.innerHTML=h.replace(/\[url\]/g,e);else if(-1!==e.indexOf("data:application/pdf;base64"))!function(t,e,r,n){if(window.Blob&&window.URL&&window.URL.createObjectURL){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(){if(200===o.status){var t=o.response,i=document.createElement("a");i.innerText="Download PDF",i.href=URL.createObjectURL(t),i.setAttribute("download",e),r.innerHTML=n.replace(/\[pdflink\]/g,i.outerHTML)}},o.send()}}(e,"file.pdf",x,P);else{var j="<a href='"+e+"'>Download PDF</a>";x.innerHTML=P.replace(/\[pdflink\]/g,j)}return a("This browser does not support embedded PDFs")};return{embed:function(t,e,r){return c(t,e,r)},pdfobjectversion:"2.3.0",supportsPDFs:i}})?r.apply(e,[]):r)||(t.exports=n)},24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new F(n||[]);return u(i,"_invoke",{value:O(t,r,a)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var v="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function w(){}function x(){}function L(){}var P={};p(P,l,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(U([])));k&&k!==i&&a.call(k,l)&&(P=k);var E=L.prototype=w.prototype=Object.create(P);function S(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(o,i,u,c){var l=h(t[o],t,i);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==n(s)&&a.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var o;u(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function O(t,r,n){var o=v;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=_(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=h(t,r,n);if("normal"===l.type){if(o=n.done?g:y,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function _(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=h(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function U(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=L,u(E,"constructor",{value:L,configurable:!0}),u(L,"constructor",{value:x,configurable:!0}),x.displayName=p(L,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,p(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},S(T.prototype),p(T.prototype,f,(function(){return this})),r.AsyncIterator=T,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new T(d(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),p(E,s,"Generator"),p(E,l,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=U,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:U(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";function t(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function u(e){t(a,o,i,u,c,"next",e)}function c(e){t(a,o,i,u,c,"throw",e)}u(void 0)}))}}r.r(n);var o=r(183),i=r.n(o);const a=flarum.core.compat["forum/app"];var u=r.n(a);const c=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),i="body",a="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",a="href",i="head"}o[a]=e,document[i].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}();var l=r(18),f=r.n(l),s={url:"https://cdn.staticfile.org/dplayer/1.27.1/DPlayer.min.js",loaded:!1};const p=flarum.core.compat["forum/components/CommentPost"];var d=r.n(p);const h=flarum.core.compat["common/extend"],v=flarum.core.compat["forum/components/Post"];var y=r.n(v),m=void 0;function g(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return b(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var w=function(){var t=e(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loaded){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,c.js(e.url);case 4:e.loaded=!0;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=e(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(s);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=e(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();u().initializers.add("gbcl-fof-upload-qcloud",(function(){(0,h.extend)(y().prototype,"oncreate",(function(){var t=this;this.$("[data-fof-qcloud-upload-download-uuid]").unbind("click").on("click",(function(e){if(e.preventDefault(),e.stopPropagation(),u().forum.attribute("fof-upload.canDownload")){var r=u().forum.attribute("apiUrl")+"/gbcl/fof-qcloud/download";r+="/"+encodeURIComponent(e.currentTarget.dataset.fofQcloudUploadDownloadUuid),r+="/"+encodeURIComponent(t.attrs.post.id()),r+="/"+encodeURIComponent(u().session.csrfToken),window.open(r)}else alert(u().translator.trans("fof-upload.forum.states.unauthorized"))}))})),(0,h.extend)(d().prototype,"refreshContent",(function(){var t,e,r,n=m.element.querySelectorAll(".qcloud-dplayer-container"),o=m.element.querySelectorAll(".qcloud-pdf-container");if(n.length&&L().then((function(){for(var t,e=g(n);!(t=e()).done;){var r=t.value;r.children.length||new DPlayer({container:r,theme:"#b7daff",preload:"auto",volume:.7,loop:!1,lang:navigator.language,live:!1,mutex:!0,hotkey:!0,video:{url:r.dataset.url,type:"auto"},contextmenu:[{text:"GBCL UplQCloud",link:"https://github.com/GBCLStudio/FoF-Upload-Qcloud"}]})}})).catch((function(t){return console.log(t)})),o.length)for(var i,a=g(o);!(i=a()).done;){var c=i.value;c.children.length||(void 0,void 0,e=(t=c).dataset.url,r={height:"440px",fallbackLink:"<p>"+u().translator.trans("gbcl-fof-upload-qcloud.forum.pdf.fallbackNotice1")+": <a href='"+e+"'>"+u().translator.trans("gbcl-fof-upload-qcloud.forum.pdf.fallbackNotice2")+"</a></p>"},f().embed(e,t,r))}}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map