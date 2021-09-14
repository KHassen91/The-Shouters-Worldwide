/*! For license information please see 16.d24b4005.chunk.js.LICENSE.txt */
(this.webpackJsonpxeril=this.webpackJsonpxeril||[]).push([[16],{35:function(t,e,n){"use strict";n.r(e),n.d(e,"getScrollbarWidth",(function(){return i})),n.d(e,"setScrollbarWidth",(function(){return u})),n.d(e,"isBodyOverflowing",(function(){return c})),n.d(e,"getOriginalBodyPadding",(function(){return s})),n.d(e,"conditionallyUpdateScrollbar",(function(){return l})),n.d(e,"setGlobalCssModule",(function(){return d})),n.d(e,"mapToCssModules",(function(){return f})),n.d(e,"omit",(function(){return p})),n.d(e,"pick",(function(){return m})),n.d(e,"warnOnce",(function(){return b})),n.d(e,"deprecated",(function(){return g})),n.d(e,"DOMElement",(function(){return v})),n.d(e,"targetPropType",(function(){return E})),n.d(e,"tagPropType",(function(){return O})),n.d(e,"TransitionTimeouts",(function(){return w})),n.d(e,"TransitionPropTypeKeys",(function(){return x})),n.d(e,"TransitionStatuses",(function(){return j})),n.d(e,"keyCodes",(function(){return T})),n.d(e,"PopperPlacements",(function(){return N})),n.d(e,"canUseDOM",(function(){return M})),n.d(e,"isReactRefObj",(function(){return A})),n.d(e,"toNumber",(function(){return C})),n.d(e,"isObject",(function(){return S})),n.d(e,"isFunction",(function(){return k})),n.d(e,"findDOMElements",(function(){return D})),n.d(e,"isArrayOrNodeList",(function(){return I})),n.d(e,"getTarget",(function(){return $})),n.d(e,"defaultToggleEvents",(function(){return G})),n.d(e,"addMultipleEventListeners",(function(){return F})),n.d(e,"focusableElements",(function(){return R}));var r,o=n(7),a=n.n(o);function i(){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function u(t){document.body.style.paddingRight=t>0?t+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function s(){var t=window.getComputedStyle(document.body,null);return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function l(){var t=i(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=e?parseInt(e.style.paddingRight||0,10):0;c()&&u(n+t)}function d(t){r=t}function f(t,e){return void 0===t&&(t=""),void 0===e&&(e=r),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function p(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}function m(t,e){for(var n,r=Array.isArray(e)?e:[e],o=r.length,a={};o>0;)a[n=r[o-=1]]=t[n];return a}var y={};function b(t){y[t]||("undefined"!==typeof console&&console.error(t),y[t]=!0)}function g(t,e){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&b('"'+r+'" property of "'+o+'" has been deprecated.\n'+e);for(var a=arguments.length,i=new Array(a>3?a-3:0),u=3;u<a;u++)i[u-3]=arguments[u];return t.apply(void 0,[n,r,o].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function v(t,e,n){if(!(t[e]instanceof h))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=a.a.oneOfType([a.a.string,a.a.func,v,a.a.shape({current:a.a.any})]),O=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),w={Fade:150,Collapse:350,Modal:300,Carousel:600},x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},N=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function A(t){return!(!t||"object"!==typeof t)&&"current"in t}function P(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function C(t){var e=typeof t;if("number"===e)return t;if("symbol"===e||"object"===e&&"[object Symbol]"===P(t))return NaN;if(S(t)){var n="function"===typeof t.valueOf?t.valueOf():t;t=S(n)?""+n:n}if("string"!==e)return 0===t?t:+t;t=t.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(t);return r||/^0o[0-7]+$/i.test(t)?parseInt(t.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(t)?NaN:+t}function S(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function k(t){if(!S(t))return!1;var e=P(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}function D(t){if(A(t))return t.current;if(k(t))return t();if("string"===typeof t&&M){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function I(t){return null!==t&&(Array.isArray(t)||M&&"number"===typeof t.length)}function $(t,e){var n=D(t);return e?I(n)?n:null===n?[]:[n]:I(n)?n[0]:n}var G=["touchstart","click"];function F(t,e,n,r){var o=t;I(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!I(o)||"function"!==typeof e||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(t){Array.prototype.forEach.call(o,(function(n){n.addEventListener(t,e,r)}))})),function(){Array.prototype.forEach.call(a,(function(t){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(t,e,r)}))}))}}var R=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},36:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},429:function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(9),a=n(11),i=n(10),u=n(0),c=n.n(u),s=n(47),l=n(45),d=n(46),f=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"section bg-cta"},c.a.createElement("div",{className:"bg-overlay"}),c.a.createElement(s.a,null,c.a.createElement(l.a,null,c.a.createElement(d.a,{lg:12},c.a.createElement("div",{className:"text-cebter"},c.a.createElement("h2",{className:"text-white text-center"},"Un Petit Texte"),c.a.createElement("p",{className:" text-white text-center mt-3"},"Un petit Texte")))))))}}]),n}(u.Component);e.default=f},45:function(t,e,n){"use strict";var r=n(1),o=n(6),a=n(0),i=n.n(a),u=n(7),c=n.n(u),s=n(36),l=n.n(s),d=n(35),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(t){var e=t.className,n=t.cssModule,a=t.noGutters,u=t.tag,c=t.form,s=t.widths,f=Object(o.a)(t,["className","cssModule","noGutters","tag","form","widths"]),p=[];s.forEach((function(e,n){var r=t[e];if(delete f[e],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+e+"-"+r)}}));var m=Object(d.mapToCssModules)(l()(e,a?"no-gutters":null,c?"form-row":"row",p),n);return i.a.createElement(u,Object(r.a)({},f,{className:m}))};y.propTypes=p,y.defaultProps=m,e.a=y},46:function(t,e,n){"use strict";var r=n(1),o=n(6),a=n(0),i=n.n(a),u=n(7),c=n.n(u),s=n(36),l=n.n(s),d=n(35),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},g=function(t){var e=t.className,n=t.cssModule,a=t.widths,u=t.tag,c=Object(o.a)(t,["className","cssModule","widths","tag"]),s=[];a.forEach((function(e,r){var o=t[e];if(delete c[e],o||""===o){var a=!r;if(Object(d.isObject)(o)){var i,u=a?"-":"-"+e+"-",f=b(a,e,o.size);s.push(Object(d.mapToCssModules)(l()(((i={})[f]=o.size||""===o.size,i["order"+u+o.order]=o.order||0===o.order,i["offset"+u+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=b(a,e,o);s.push(p)}}})),s.length||s.push("col");var f=Object(d.mapToCssModules)(l()(e,s),n);return i.a.createElement(u,Object(r.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=y,e.a=g},47:function(t,e,n){"use strict";var r=n(1),o=n(6),a=n(0),i=n.n(a),u=n(7),c=n.n(u),s=n(36),l=n.n(s),d=n(35),f={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(t){var e=t.className,n=t.cssModule,a=t.fluid,u=t.tag,c=Object(o.a)(t,["className","cssModule","fluid","tag"]),s="container";!0===a?s="container-fluid":a&&(s="container-"+a);var f=Object(d.mapToCssModules)(l()(e,s),n);return i.a.createElement(u,Object(r.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},e.a=p}}]);
//# sourceMappingURL=16.d24b4005.chunk.js.map