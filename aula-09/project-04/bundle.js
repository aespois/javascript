!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(e,r){e.exports=function(e){return e.toUpperCase()}},function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(r,"__esModule",{value:!0});var o=t(0),u=t.n(o);console.log(u()("test"));var c={nome:"Gabriel",usuario:"gabriel",idade:"27"},i=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(r){n(e,r,t[r])})}return e}({},c,{usuario:"gbrobot"});console.log(i)}]);