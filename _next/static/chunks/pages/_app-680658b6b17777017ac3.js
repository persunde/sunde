_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"5MvH":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},Gpft:function(e,t,n){},LEOp:function(e,t,n){},VAPu:function(e,t,n){},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ue}));var r={};n.r(r),n.d(r,"initialize",(function(){return V})),n.d(r,"ga",(function(){return B})),n.d(r,"set",(function(){return F})),n.d(r,"send",(function(){return K})),n.d(r,"pageview",(function(){return U})),n.d(r,"modalview",(function(){return X})),n.d(r,"timing",(function(){return Z})),n.d(r,"event",(function(){return $})),n.d(r,"exception",(function(){return W})),n.d(r,"plugin",(function(){return Q})),n.d(r,"outboundLink",(function(){return Y})),n.d(r,"testModeAPI",(function(){return ee})),n.d(r,"default",(function(){return te}));var o=n("q1tI"),a=n.n(o),i=n("7O5W"),c=n("nOHt"),u=n.n(c),l=n("17x9"),f=n.n(l);function s(e){console.warn("[react-ga]",e)}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?h(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(){var e,n;y(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return w(h(n=v(this,(e=m(t)).call.apply(e,[this].concat(o)))),"handleClick",(function(e){var r=n.props,o=r.target,a=r.eventLabel,i=r.to,c=r.onClick,u=r.trackerNames,l={label:a},f="_blank"!==o,s=!(e.ctrlKey||e.shiftKey||e.metaKey||1===e.button);f&&s?(e.preventDefault(),t.trackLink(l,(function(){window.location.href=i}),u)):t.trackLink(l,(function(){}),u),c&&c(e)})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b(e,["to"]),{href:t,onClick:this.handleClick});return"_blank"===this.props.target&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,a.a.createElement("a",n)}}])&&d(n.prototype,r),o&&d(n,o),t}(o.Component);function k(e){return e.replace(/^\s+|\s+$/g,"")}w(j,"trackLink",(function(){s("ga tracking not enabled")})),w(j,"propTypes",{eventLabel:f.a.string.isRequired,target:f.a.string,to:f.a.string,onClick:f.a.func,trackerNames:f.a.arrayOf(f.a.string)}),w(j,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var P=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function A(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(s("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):t?k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(P)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}function E(e){console.info("[react-ga]",e)}var S=[],N={calls:S,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];S.push([].concat(t))},resetCalls:function(){S.length=0}};function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var q="undefined"===typeof window||"undefined"===typeof document,L=!1,I=!0,J=!1,G=!0,z=function(){var e;return J?N.ga.apply(N,arguments):!q&&(window.ga?(e=window).ga.apply(e,arguments):s("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function H(e){return A(e,I)}function M(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!G&&Array.isArray(e)||z.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){z.apply(void 0,T(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):s("ga command must be a string")}function R(e,t){e?t&&(t.debug&&!0===t.debug&&(L=!0),!1===t.titleCase&&(I=!1),t.useExistingGa)||(t&&t.gaOptions?z("create",e,t.gaOptions):z("create",e,"auto")):s("gaTrackingID is required in initialize()")}function V(e,t){if(t&&!0===t.testMode)J=!0;else{if(q)return!1;t&&!0===t.standardImplementation||function(e){var t,n,r,o,a,i,c,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=o,c.parentNode.insertBefore(i,c)}(t)}return G=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===D(e)?R(e.trackingId,e):s("All configs must be an object")})):R(e,t),!0}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(z.apply(void 0,t),L&&(E("called ga('arguments');"),E("with arguments: ".concat(JSON.stringify(t))))),window.ga}function F(e,t){e?"object"===D(e)?(0===Object.keys(e).length&&s("empty `fieldsObject` given to .set()"),M(t,"set",e),L&&(E("called ga('set', fieldsObject);"),E("with fieldsObject: ".concat(JSON.stringify(e))))):s("Expected `fieldsObject` arg to be an Object"):s("`fieldsObject` is required in .set()")}function K(e,t){M(t,"send",e),L&&(E("called ga('send', fieldObject);"),E("with fieldObject: ".concat(JSON.stringify(e))),E("with trackers: ".concat(JSON.stringify(t))))}function U(e,t,n){if(e){var r=k(e);if(""!==r){var o={};if(n&&(o.title=n),M(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),L){E("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),E("with path: ".concat(r).concat(a))}}else s("path cannot be an empty string in .pageview()")}else s("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=k(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);M(t,"send","pageview",o),L&&(E("called ga('send', 'pageview', path);"),E("with path: ".concat(o)))}else s("modalName cannot be an empty string or a single / in .modalview()")}else s("modalName is required in .modalview(modalName)")}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var i={hitType:"timing",timingCategory:H(t),timingVar:H(n),timingValue:r};o&&(i.timingLabel=H(o)),K(i,a)}else s("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=C(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:H(t),eventAction:H(n)};r&&(l.eventLabel=H(r)),"undefined"!==typeof o&&("number"!==typeof o?s("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?s("`args.nonInteraction` must be a boolean."):l.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?s("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&s("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=c[e]})),K(l,u)}else s("args.category AND args.action are required in event()")}function W(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=H(n)),"undefined"!==typeof r&&("boolean"!==typeof r?s("`args.fatal` must be a boolean."):o.exFatal=r),K(o,t)}var Q={require:function(e,t,n){if(e){var r=k(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==D(t))return void s("Expected `options` arg to be an Object");0===Object.keys(t).length&&s("Empty `options` given to .require()"),B(o,r,t),L&&E("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else B(o,r),L&&E("called ga('require', '".concat(r,"');"))}else s("`name` cannot be an empty string in .require()")}else s("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)s("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)s("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(B(o,r,n),L&&(E("called ga('".concat(o,"');")),E('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(B(o,n),L&&(E("called ga('".concat(o,"');")),E("with payload: ".concat(JSON.stringify(n))))):(B(o),L&&E("called ga('".concat(o,"');")))}}};function Y(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:H(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},K(r,n)}else s("args.label is required in outboundLink()");else s("hitCallback function is required")}var ee=N,te={initialize:V,ga:B,set:F,send:K,pageview:U,modalview:X,timing:Z,event:$,exception:W,plugin:Q,outboundLink:Y,testModeAPI:N};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j.origTrackLink=j.trackLink,j.trackLink=Y;var oe=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:j}),ae=function(){console.log("Logging pageview for ".concat(window.location.pathname)),oe.set({page:window.location.pathname}),oe.pageview(window.location.pathname)},ie=(n("VAPu"),n("wHSu")),ce=(n("5MvH"),n("iOjB"),n("Gpft"),n("LEOp"),a.a.createElement);function ue(e){var t=e.Component,n=e.pageProps;return Object(o.useEffect)((function(){console.log("GA init"),oe.initialize("UA-166119494-1",{gaOptions:{siteSpeedSampleRate:100}}),ae(),u.a.events.on("routeChangeComplete",ae)}),[]),ce(t,n)}i.a.autoAddCss=!1,i.c.add(ie.a,ie.e)},iOjB:function(e,t,n){}},[[0,0,2,4,6,1,3]]]);