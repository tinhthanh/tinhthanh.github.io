(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
    typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ModelViewerElement = {}, global.three));
})(this, (function (exports, three) { 'use strict';

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$5=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$8(n){return (t,o)=>void 0!==o?e$5(n,t,o):i$2(n,t)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n$7;null!=(null===(n$7=window.HTMLSlotElement)||void 0===n$7?void 0:n$7.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$3=window,e$4=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),n$6=new WeakMap;class o$5{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}}const r$4=t=>new o$5("string"==typeof t?t:t+"",void 0,s$5),S$2=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$3=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$4;const e$3=window,r$3=e$3.trustedTypes,h$2=r$3?r$3.emptyScript:"",o$4=e$3.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$3=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$3},d$2="finalized";class u$2 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$2))return !1;this[d$2]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$3(i));}else void 0!==i&&s.push(c$3(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$3)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$2[d$2]=!0,u$2.elementProperties=new Map,u$2.elementStyles=[],u$2.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:u$2}),(null!==(s$4=e$3.reactiveElementVersions)&&void 0!==s$4?s$4:e$3.reactiveElementVersions=[]).push("1.6.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$2;const i$1=window,s$3=i$1.trustedTypes,e$2=s$3?s$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3="$lit$",n$4=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$4,h$1=`<${l$2}>`,r$2=document,u$1=()=>r$2.createComment(""),d$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$2=Array.isArray,v=t=>c$2(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$2="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p$1=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$1=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$2=w(1),T=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),E$1=new WeakMap,C$1=r$2.createTreeWalker(r$2,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$1):void 0!==c[3]&&(u=p$1):u===p$1?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$1:'"'===c[3]?$:g$1):u===$||u===g$1?u=p$1:u===_||u===m?u=f:(u=p$1,l=void 0);const w=u===p$1&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h$1:v>=0?(e.push(d),s.slice(0,v)+o$3+s.slice(v)+n$4+w):s+n$4+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C$1.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C$1.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$3)||i.startsWith(n$4)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$3).split(n$4),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$4),i=t.length-1;if(i>0){h.textContent=s$3?s$3.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$1()),C$1.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$1());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$4,t+1));)v.push({type:7,index:r}),t+=n$4.length-1;}r++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S$1(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$1(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$1(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$2).importNode(s,!0);C$1.currentNode=o;let n=C$1.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C$1.nextNode(),l++);}return C$1.currentNode=r$2,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$1(this,t,i),d$1(t)?t===A$1||null==t||""===t?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A$1&&d$1(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$2.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E$1.get(t.strings);return void 0===i&&E$1.set(t.strings,i=new N(t)),i}T(t){c$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$1()),this.k(u$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$1(this,t,i,0),n=!d$1(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$1(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d$1(h)||h!==this._$AH[l]),h===A$1?t=A$1:t!==A$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$1?void 0:t;}}const I$1=s$3?s$3.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A$1?this.element.setAttribute(this.name,I$1):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$1(this,t,i,0))&&void 0!==s?s:A$1)===T)return;const e=this._$AH,o=t===A$1&&e!==A$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A$1&&(e===A$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$1(this,t);}}const B$1=i$1.litHtmlPolyfillSupport;null==B$1||B$1(N,R),(null!==(t$2=i$1.litHtmlVersions)&&void 0!==t$2?t$2:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=window,e$1=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),n$3=new WeakMap;class o$2{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$1&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}}const r$1=t=>new o$2("string"==typeof t?t:t+"",void 0,s$2),S=(s,n)=>{e$1?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$1(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$1;const e=window,r=e.trustedTypes,h=r?r.emptyScript:"",o$1=e.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$1={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$1){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$1}static finalize(){if(this.hasOwnProperty(d))return !1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$1){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==o$1||o$1({ReactiveElement:u}),(null!==(s$1=e.reactiveElementVersions)&&void 0!==s$1?s$1:e.reactiveElementVersions=[]).push("1.6.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l,o;class s extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

    const HAS_WEBXR_DEVICE_API = navigator.xr != null &&
        self.XRSession != null && navigator.xr.isSessionSupported != null;
    const HAS_WEBXR_HIT_TEST_API = HAS_WEBXR_DEVICE_API &&
        self.XRSession.prototype.requestHitTestSource != null;
    const HAS_RESIZE_OBSERVER = self.ResizeObserver != null;
    const HAS_INTERSECTION_OBSERVER = self.IntersectionObserver != null;
    const IS_WEBXR_AR_CANDIDATE = HAS_WEBXR_HIT_TEST_API;
    (() => {
        const userAgent = navigator.userAgent || navigator.vendor || self.opera;
        let check = false;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
            .test(userAgent) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                .test(userAgent.substr(0, 4))) {
            check = true;
        }
        return check;
    })();
    /\bCrOS\b/.test(navigator.userAgent);
    const IS_ANDROID = /android/i.test(navigator.userAgent);
    const IS_IOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    /Safari\//.test(navigator.userAgent);
    const IS_FIREFOX = /firefox/i.test(navigator.userAgent);
    const IS_OCULUS = /OculusBrowser/.test(navigator.userAgent);
    IS_IOS && /CriOS\//.test(navigator.userAgent);
    const IS_SCENEVIEWER_CANDIDATE = IS_ANDROID && !IS_FIREFOX && !IS_OCULUS;
    const IS_WKWEBVIEW = Boolean(window.webkit && window.webkit.messageHandlers);
    const IS_AR_QUICKLOOK_CANDIDATE = (() => {
        if (IS_IOS) {
            if (!IS_WKWEBVIEW) {
                const tempAnchor = document.createElement('a');
                return Boolean(tempAnchor.relList && tempAnchor.relList.supports && tempAnchor.relList.supports('ar'));
            }
            else {
                return Boolean(/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent));
            }
        }
        else {
            return false;
        }
    })();

    const deserializeUrl = (url) => (!!url && url !== 'null') ? toFullUrl(url) : null;
    const assertIsArCandidate = () => {
        if (IS_WEBXR_AR_CANDIDATE) {
            return;
        }
        const missingApis = [];
        if (!HAS_WEBXR_DEVICE_API) {
            missingApis.push('WebXR Device API');
        }
        if (!HAS_WEBXR_HIT_TEST_API) {
            missingApis.push('WebXR Hit Test API');
        }
        throw new Error(`The following APIs are required for AR, but are missing in this browser: ${missingApis.join(', ')}`);
    };
    const toFullUrl = (partialUrl) => {
        const url = new URL(partialUrl, window.location.toString());
        return url.toString();
    };
    const throttle = (fn, ms) => {
        let timer = null;
        const throttled = (...args) => {
            if (timer != null) {
                return;
            }
            fn(...args);
            timer = self.setTimeout(() => timer = null, ms);
        };
        throttled.flush = () => {
            if (timer != null) {
                self.clearTimeout(timer);
                timer = null;
            }
        };
        return throttled;
    };
    const debounce = (fn, ms) => {
        let timer = null;
        return (...args) => {
            if (timer != null) {
                self.clearTimeout(timer);
            }
            timer = self.setTimeout(() => {
                timer = null;
                fn(...args);
            }, ms);
        };
    };
    const clamp = (value, lowerLimit, upperLimit) => Math.max(lowerLimit, Math.min(upperLimit, value));
    const CAPPED_DEVICE_PIXEL_RATIO = 1;
    const resolveDpr = (() => {
        const HAS_META_VIEWPORT_TAG = (() => {
            var _a;
            if ((_a = document.documentElement.getAttribute('itemtype')) === null || _a === void 0 ? void 0 : _a.includes('schema.org/SearchResultsPage')) {
                return true;
            }
            const metas = document.head != null ?
                Array.from(document.head.querySelectorAll('meta')) :
                [];
            for (const meta of metas) {
                if (meta.name === 'viewport') {
                    return true;
                }
            }
            return false;
        })();
        if (!HAS_META_VIEWPORT_TAG) {
            console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.');
        }
        return () => HAS_META_VIEWPORT_TAG ? window.devicePixelRatio :
            CAPPED_DEVICE_PIXEL_RATIO;
    })();
    const isDebugMode = (() => {
        const debugQueryParameterName = 'model-viewer-debug-mode';
        const debugQueryParameter = new RegExp(`[?&]${debugQueryParameterName}(&|$)`);
        return () => (self.ModelViewerElement &&
            self.ModelViewerElement.debugMode) ||
            (self.location && self.location.search &&
                self.location.search.match(debugQueryParameter));
    })();
    const timePasses = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
    const waitForEvent = (target, eventName, predicate = null) => new Promise(resolve => {
        function handler(event) {
            if (!predicate || predicate(event)) {
                resolve(event);
                target.removeEventListener(eventName, handler);
            }
        }
        target.addEventListener(eventName, handler);
    });

    var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const BASE_OPACITY = 0.5;
    const DEFAULT_SHADOW_INTENSITY = 0.0;
    const DEFAULT_SHADOW_SOFTNESS = 1.0;
    const DEFAULT_EXPOSURE = 1.0;
    const $currentEnvironmentMap = Symbol('currentEnvironmentMap');
    const $currentBackground = Symbol('currentBackground');
    const $updateEnvironment = Symbol('updateEnvironment');
    const $cancelEnvironmentUpdate = Symbol('cancelEnvironmentUpdate');
    const EnvironmentMixin = (ModelViewerElement) => {
        var _a, _b, _c;
        class EnvironmentModelViewerElement extends ModelViewerElement {
            constructor() {
                super(...arguments);
                this.environmentImage = null;
                this.skyboxImage = null;
                this.shadowIntensity = DEFAULT_SHADOW_INTENSITY;
                this.shadowSoftness = DEFAULT_SHADOW_SOFTNESS;
                this.exposure = DEFAULT_EXPOSURE;
                this.toneMapping = 'auto';
                this.skyboxHeight = '0';
                this[_a] = null;
                this[_b] = null;
                this[_c] = null;
            }
            updated(changedProperties) {
                super.updated(changedProperties);
                if (changedProperties.has('shadowIntensity')) {
                    this[$scene].setShadowIntensity(this.shadowIntensity * BASE_OPACITY);
                    this[$needsRender]();
                }
                if (changedProperties.has('shadowSoftness')) {
                    this[$scene].setShadowSoftness(this.shadowSoftness);
                    this[$needsRender]();
                }
                if (changedProperties.has('exposure')) {
                    this[$scene].exposure = this.exposure;
                    this[$needsRender]();
                }
                if (changedProperties.has('toneMapping')) {
                    this[$scene].toneMapping = this.toneMapping === 'commerce' ?
                        three.CustomToneMapping :
                        this.toneMapping === 'agx' ? three.AgXToneMapping :
                            three.ACESFilmicToneMapping;
                    this[$needsRender]();
                }
                if ((changedProperties.has('environmentImage') ||
                    changedProperties.has('skyboxImage')) &&
                    this[$shouldAttemptPreload]()) {
                    this[$updateEnvironment]();
                }
                if (changedProperties.has('skyboxHeight')) {
                    this[$scene].setGroundedSkybox();
                    this[$needsRender]();
                }
            }
            hasBakedShadow() {
                return this[$scene].bakedShadows.size > 0;
            }
            async [(_a = $currentEnvironmentMap, _b = $currentBackground, _c = $cancelEnvironmentUpdate, $updateEnvironment)]() {
                const { skyboxImage, environmentImage } = this;
                if (this[$cancelEnvironmentUpdate] != null) {
                    this[$cancelEnvironmentUpdate]();
                    this[$cancelEnvironmentUpdate] = null;
                }
                const { textureUtils } = this[$renderer];
                if (textureUtils == null) {
                    return;
                }
                const updateEnvProgress = this[$progressTracker].beginActivity('environment-update');
                try {
                    const { environmentMap, skybox } = await textureUtils.generateEnvironmentMapAndSkybox(deserializeUrl(skyboxImage), environmentImage, (progress) => updateEnvProgress(clamp(progress, 0, 1)));
                    if (this[$currentEnvironmentMap] !== environmentMap) {
                        this[$currentEnvironmentMap] = environmentMap;
                        this.dispatchEvent(new CustomEvent('environment-change'));
                    }
                    if (skybox != null) {
                        this[$currentBackground] =
                            skybox.name === environmentMap.name ? environmentMap : skybox;
                    }
                    else {
                        this[$currentBackground] = null;
                    }
                    this[$scene].setEnvironmentAndSkybox(this[$currentEnvironmentMap], this[$currentBackground]);
                }
                catch (errorOrPromise) {
                    if (errorOrPromise instanceof Error) {
                        this[$scene].setEnvironmentAndSkybox(null, null);
                        throw errorOrPromise;
                    }
                }
                finally {
                    updateEnvProgress(1.0);
                }
            }
        }
        __decorate$7([
            n$8({ type: String, attribute: 'environment-image' })
        ], EnvironmentModelViewerElement.prototype, "environmentImage", void 0);
        __decorate$7([
            n$8({ type: String, attribute: 'skybox-image' })
        ], EnvironmentModelViewerElement.prototype, "skyboxImage", void 0);
        __decorate$7([
            n$8({ type: Number, attribute: 'shadow-intensity' })
        ], EnvironmentModelViewerElement.prototype, "shadowIntensity", void 0);
        __decorate$7([
            n$8({ type: Number, attribute: 'shadow-softness' })
        ], EnvironmentModelViewerElement.prototype, "shadowSoftness", void 0);
        __decorate$7([
            n$8({ type: Number })
        ], EnvironmentModelViewerElement.prototype, "exposure", void 0);
        __decorate$7([
            n$8({ type: String, attribute: 'tone-mapping' })
        ], EnvironmentModelViewerElement.prototype, "toneMapping", void 0);
        __decorate$7([
            n$8({ type: String, attribute: 'skybox-height' })
        ], EnvironmentModelViewerElement.prototype, "skyboxHeight", void 0);
        return EnvironmentModelViewerElement;
    };

    var CloseIcon = x$2 `
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;

    var ControlsPrompt = x$2 `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;

    var ARGlyph = x$2 `
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;

    const templateResult = x$2 `
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${ARGlyph}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${ControlsPrompt}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${CloseIcon}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`;
    const makeTemplate = (shadowRoot) => {
        D(templateResult, shadowRoot);
    };

    const _taskCache$1 = new WeakMap();

    class DRACOLoader extends three.Loader {

    	constructor( manager ) {

    		super( manager );

    		this.decoderPath = '';
    		this.decoderConfig = {};
    		this.decoderBinary = null;
    		this.decoderPending = null;

    		this.workerLimit = 4;
    		this.workerPool = [];
    		this.workerNextTaskID = 1;
    		this.workerSourceURL = '';

    		this.defaultAttributeIDs = {
    			position: 'POSITION',
    			normal: 'NORMAL',
    			color: 'COLOR',
    			uv: 'TEX_COORD'
    		};
    		this.defaultAttributeTypes = {
    			position: 'Float32Array',
    			normal: 'Float32Array',
    			color: 'Float32Array',
    			uv: 'Float32Array'
    		};

    	}

    	setDecoderPath( path ) {

    		this.decoderPath = path;

    		return this;

    	}

    	setDecoderConfig( config ) {

    		this.decoderConfig = config;

    		return this;

    	}

    	setWorkerLimit( workerLimit ) {

    		this.workerLimit = workerLimit;

    		return this;

    	}

    	load( url, onLoad, onProgress, onError ) {

    		const loader = new three.FileLoader( this.manager );

    		loader.setPath( this.path );
    		loader.setResponseType( 'arraybuffer' );
    		loader.setRequestHeader( this.requestHeader );
    		loader.setWithCredentials( this.withCredentials );

    		loader.load( url, ( buffer ) => {

    			this.parse( buffer, onLoad, onError );

    		}, onProgress, onError );

    	}


    	parse( buffer, onLoad, onError = ()=>{} ) {

    		this.decodeDracoFile( buffer, onLoad, null, null, three.SRGBColorSpace ).catch( onError );

    	}

    	decodeDracoFile( buffer, callback, attributeIDs, attributeTypes, vertexColorSpace = three.LinearSRGBColorSpace, onError = () => {} ) {

    		const taskConfig = {
    			attributeIDs: attributeIDs || this.defaultAttributeIDs,
    			attributeTypes: attributeTypes || this.defaultAttributeTypes,
    			useUniqueIDs: !! attributeIDs,
    			vertexColorSpace: vertexColorSpace,
    		};

    		return this.decodeGeometry( buffer, taskConfig ).then( callback ).catch( onError );

    	}

    	decodeGeometry( buffer, taskConfig ) {

    		const taskKey = JSON.stringify( taskConfig );

    		// Check for an existing task using this buffer. A transferred buffer cannot be transferred
    		// again from this thread.
    		if ( _taskCache$1.has( buffer ) ) {

    			const cachedTask = _taskCache$1.get( buffer );

    			if ( cachedTask.key === taskKey ) {

    				return cachedTask.promise;

    			} else if ( buffer.byteLength === 0 ) {

    				// Technically, it would be possible to wait for the previous task to complete,
    				// transfer the buffer back, and decode again with the second configuration. That
    				// is complex, and I don't know of any reason to decode a Draco buffer twice in
    				// different ways, so this is left unimplemented.
    				throw new Error(

    					'THREE.DRACOLoader: Unable to re-decode a buffer with different ' +
    					'settings. Buffer has already been transferred.'

    				);

    			}

    		}

    		//

    		let worker;
    		const taskID = this.workerNextTaskID ++;
    		const taskCost = buffer.byteLength;

    		// Obtain a worker and assign a task, and construct a geometry instance
    		// when the task completes.
    		const geometryPending = this._getWorker( taskID, taskCost )
    			.then( ( _worker ) => {

    				worker = _worker;

    				return new Promise( ( resolve, reject ) => {

    					worker._callbacks[ taskID ] = { resolve, reject };

    					worker.postMessage( { type: 'decode', id: taskID, taskConfig, buffer }, [ buffer ] );

    					// this.debug();

    				} );

    			} )
    			.then( ( message ) => this._createGeometry( message.geometry ) );

    		// Remove task from the task list.
    		// Note: replaced '.finally()' with '.catch().then()' block - iOS 11 support (#19416)
    		geometryPending
    			.catch( () => true )
    			.then( () => {

    				if ( worker && taskID ) {

    					this._releaseTask( worker, taskID );

    					// this.debug();

    				}

    			} );

    		// Cache the task result.
    		_taskCache$1.set( buffer, {

    			key: taskKey,
    			promise: geometryPending

    		} );

    		return geometryPending;

    	}

    	_createGeometry( geometryData ) {

    		const geometry = new three.BufferGeometry();

    		if ( geometryData.index ) {

    			geometry.setIndex( new three.BufferAttribute( geometryData.index.array, 1 ) );

    		}

    		for ( let i = 0; i < geometryData.attributes.length; i ++ ) {

    			const result = geometryData.attributes[ i ];
    			const name = result.name;
    			const array = result.array;
    			const itemSize = result.itemSize;

    			const attribute = new three.BufferAttribute( array, itemSize );

    			if ( name === 'color' ) {

    				this._assignVertexColorSpace( attribute, result.vertexColorSpace );

    				attribute.normalized = ( array instanceof Float32Array ) === false;

    			}

    			geometry.setAttribute( name, attribute );

    		}

    		return geometry;

    	}

    	_assignVertexColorSpace( attribute, inputColorSpace ) {

    		// While .drc files do not specify colorspace, the only 'official' tooling
    		// is PLY and OBJ converters, which use sRGB. We'll assume sRGB when a .drc
    		// file is passed into .load() or .parse(). GLTFLoader uses internal APIs
    		// to decode geometry, and vertex colors are already Linear-sRGB in there.

    		if ( inputColorSpace !== three.SRGBColorSpace ) return;

    		const _color = new three.Color();

    		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

    			_color.fromBufferAttribute( attribute, i ).convertSRGBToLinear();
    			attribute.setXYZ( i, _color.r, _color.g, _color.b );

    		}

    	}

    	_loadLibrary( url, responseType ) {

    		const loader = new three.FileLoader( this.manager );
    		loader.setPath( this.decoderPath );
    		loader.setResponseType( responseType );
    		loader.setWithCredentials( this.withCredentials );

    		return new Promise( ( resolve, reject ) => {

    			loader.load( url, resolve, undefined, reject );

    		} );

    	}

    	preload() {

    		this._initDecoder();

    		return this;

    	}

    	_initDecoder() {

    		if ( this.decoderPending ) return this.decoderPending;

    		const useJS = typeof WebAssembly !== 'object' || this.decoderConfig.type === 'js';
    		const librariesPending = [];

    		if ( useJS ) {

    			librariesPending.push( this._loadLibrary( 'draco_decoder.js', 'text' ) );

    		} else {

    			librariesPending.push( this._loadLibrary( 'draco_wasm_wrapper.js', 'text' ) );
    			librariesPending.push( this._loadLibrary( 'draco_decoder.wasm', 'arraybuffer' ) );

    		}

    		this.decoderPending = Promise.all( librariesPending )
    			.then( ( libraries ) => {

    				const jsContent = libraries[ 0 ];

    				if ( ! useJS ) {

    					this.decoderConfig.wasmBinary = libraries[ 1 ];

    				}

    				const fn = DRACOWorker.toString();

    				const body = [
    					'/* draco decoder */',
    					jsContent,
    					'',
    					'/* worker */',
    					fn.substring( fn.indexOf( '{' ) + 1, fn.lastIndexOf( '}' ) )
    				].join( '\n' );

    				this.workerSourceURL = URL.createObjectURL( new Blob( [ body ] ) );

    			} );

    		return this.decoderPending;

    	}

    	_getWorker( taskID, taskCost ) {

    		return this._initDecoder().then( () => {

    			if ( this.workerPool.length < this.workerLimit ) {

    				const worker = new Worker( this.workerSourceURL );

    				worker._callbacks = {};
    				worker._taskCosts = {};
    				worker._taskLoad = 0;

    				worker.postMessage( { type: 'init', decoderConfig: this.decoderConfig } );

    				worker.onmessage = function ( e ) {

    					const message = e.data;

    					switch ( message.type ) {

    						case 'decode':
    							worker._callbacks[ message.id ].resolve( message );
    							break;

    						case 'error':
    							worker._callbacks[ message.id ].reject( message );
    							break;

    						default:
    							console.error( 'THREE.DRACOLoader: Unexpected message, "' + message.type + '"' );

    					}

    				};

    				this.workerPool.push( worker );

    			} else {

    				this.workerPool.sort( function ( a, b ) {

    					return a._taskLoad > b._taskLoad ? - 1 : 1;

    				} );

    			}

    			const worker = this.workerPool[ this.workerPool.length - 1 ];
    			worker._taskCosts[ taskID ] = taskCost;
    			worker._taskLoad += taskCost;
    			return worker;

    		} );

    	}

    	_releaseTask( worker, taskID ) {

    		worker._taskLoad -= worker._taskCosts[ taskID ];
    		delete worker._callbacks[ taskID ];
    		delete worker._taskCosts[ taskID ];

    	}

    	debug() {

    		console.log( 'Task load: ', this.workerPool.map( ( worker ) => worker._taskLoad ) );

    	}

    	dispose() {

    		for ( let i = 0; i < this.workerPool.length; ++ i ) {

    			this.workerPool[ i ].terminate();

    		}

    		this.workerPool.length = 0;

    		if ( this.workerSourceURL !== '' ) {

    			URL.revokeObjectURL( this.workerSourceURL );

    		}

    		return this;

    	}

    }

    /* WEB WORKER */

    function DRACOWorker() {

    	let decoderConfig;
    	let decoderPending;

    	onmessage = function ( e ) {

    		const message = e.data;

    		switch ( message.type ) {

    			case 'init':
    				decoderConfig = message.decoderConfig;
    				decoderPending = new Promise( function ( resolve/*, reject*/ ) {

    					decoderConfig.onModuleLoaded = function ( draco ) {

    						// Module is Promise-like. Wrap before resolving to avoid loop.
    						resolve( { draco: draco } );

    					};

    					DracoDecoderModule( decoderConfig ); // eslint-disable-line no-undef

    				} );
    				break;

    			case 'decode':
    				const buffer = message.buffer;
    				const taskConfig = message.taskConfig;
    				decoderPending.then( ( module ) => {

    					const draco = module.draco;
    					const decoder = new draco.Decoder();

    					try {

    						const geometry = decodeGeometry( draco, decoder, new Int8Array( buffer ), taskConfig );

    						const buffers = geometry.attributes.map( ( attr ) => attr.array.buffer );

    						if ( geometry.index ) buffers.push( geometry.index.array.buffer );

    						self.postMessage( { type: 'decode', id: message.id, geometry }, buffers );

    					} catch ( error ) {

    						console.error( error );

    						self.postMessage( { type: 'error', id: message.id, error: error.message } );

    					} finally {

    						draco.destroy( decoder );

    					}

    				} );
    				break;

    		}

    	};

    	function decodeGeometry( draco, decoder, array, taskConfig ) {

    		const attributeIDs = taskConfig.attributeIDs;
    		const attributeTypes = taskConfig.attributeTypes;

    		let dracoGeometry;
    		let decodingStatus;

    		const geometryType = decoder.GetEncodedGeometryType( array );

    		if ( geometryType === draco.TRIANGULAR_MESH ) {

    			dracoGeometry = new draco.Mesh();
    			decodingStatus = decoder.DecodeArrayToMesh( array, array.byteLength, dracoGeometry );

    		} else if ( geometryType === draco.POINT_CLOUD ) {

    			dracoGeometry = new draco.PointCloud();
    			decodingStatus = decoder.DecodeArrayToPointCloud( array, array.byteLength, dracoGeometry );

    		} else {

    			throw new Error( 'THREE.DRACOLoader: Unexpected geometry type.' );

    		}

    		if ( ! decodingStatus.ok() || dracoGeometry.ptr === 0 ) {

    			throw new Error( 'THREE.DRACOLoader: Decoding failed: ' + decodingStatus.error_msg() );

    		}

    		const geometry = { index: null, attributes: [] };

    		// Gather all vertex attributes.
    		for ( const attributeName in attributeIDs ) {

    			const attributeType = self[ attributeTypes[ attributeName ] ];

    			let attribute;
    			let attributeID;

    			// A Draco file may be created with default vertex attributes, whose attribute IDs
    			// are mapped 1:1 from their semantic name (POSITION, NORMAL, ...). Alternatively,
    			// a Draco file may contain a custom set of attributes, identified by known unique
    			// IDs. glTF files always do the latter, and `.drc` files typically do the former.
    			if ( taskConfig.useUniqueIDs ) {

    				attributeID = attributeIDs[ attributeName ];
    				attribute = decoder.GetAttributeByUniqueId( dracoGeometry, attributeID );

    			} else {

    				attributeID = decoder.GetAttributeId( dracoGeometry, draco[ attributeIDs[ attributeName ] ] );

    				if ( attributeID === - 1 ) continue;

    				attribute = decoder.GetAttribute( dracoGeometry, attributeID );

    			}

    			const attributeResult = decodeAttribute( draco, decoder, dracoGeometry, attributeName, attributeType, attribute );

    			if ( attributeName === 'color' ) {

    				attributeResult.vertexColorSpace = taskConfig.vertexColorSpace;

    			}

    			geometry.attributes.push( attributeResult );

    		}

    		// Add index.
    		if ( geometryType === draco.TRIANGULAR_MESH ) {

    			geometry.index = decodeIndex( draco, decoder, dracoGeometry );

    		}

    		draco.destroy( dracoGeometry );

    		return geometry;

    	}

    	function decodeIndex( draco, decoder, dracoGeometry ) {

    		const numFaces = dracoGeometry.num_faces();
    		const numIndices = numFaces * 3;
    		const byteLength = numIndices * 4;

    		const ptr = draco._malloc( byteLength );
    		decoder.GetTrianglesUInt32Array( dracoGeometry, byteLength, ptr );
    		const index = new Uint32Array( draco.HEAPF32.buffer, ptr, numIndices ).slice();
    		draco._free( ptr );

    		return { array: index, itemSize: 1 };

    	}

    	function decodeAttribute( draco, decoder, dracoGeometry, attributeName, attributeType, attribute ) {

    		const numComponents = attribute.num_components();
    		const numPoints = dracoGeometry.num_points();
    		const numValues = numPoints * numComponents;
    		const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
    		const dataType = getDracoDataType( draco, attributeType );

    		const ptr = draco._malloc( byteLength );
    		decoder.GetAttributeDataArrayForAllPoints( dracoGeometry, attribute, dataType, byteLength, ptr );
    		const array = new attributeType( draco.HEAPF32.buffer, ptr, numValues ).slice();
    		draco._free( ptr );

    		return {
    			name: attributeName,
    			array: array,
    			itemSize: numComponents
    		};

    	}

    	function getDracoDataType( draco, attributeType ) {

    		switch ( attributeType ) {

    			case Float32Array: return draco.DT_FLOAT32;
    			case Int8Array: return draco.DT_INT8;
    			case Int16Array: return draco.DT_INT16;
    			case Int32Array: return draco.DT_INT32;
    			case Uint8Array: return draco.DT_UINT8;
    			case Uint16Array: return draco.DT_UINT16;
    			case Uint32Array: return draco.DT_UINT32;

    		}

    	}

    }

    /**
     * @param {BufferGeometry} geometry
     * @param {number} drawMode
     * @return {BufferGeometry}
     */
    function toTrianglesDrawMode( geometry, drawMode ) {

    	if ( drawMode === three.TrianglesDrawMode ) {

    		console.warn( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.' );
    		return geometry;

    	}

    	if ( drawMode === three.TriangleFanDrawMode || drawMode === three.TriangleStripDrawMode ) {

    		let index = geometry.getIndex();

    		// generate index if not present

    		if ( index === null ) {

    			const indices = [];

    			const position = geometry.getAttribute( 'position' );

    			if ( position !== undefined ) {

    				for ( let i = 0; i < position.count; i ++ ) {

    					indices.push( i );

    				}

    				geometry.setIndex( indices );
    				index = geometry.getIndex();

    			} else {

    				console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
    				return geometry;

    			}

    		}

    		//

    		const numberOfTriangles = index.count - 2;
    		const newIndices = [];

    		if ( drawMode === three.TriangleFanDrawMode ) {

    			// gl.TRIANGLE_FAN

    			for ( let i = 1; i <= numberOfTriangles; i ++ ) {

    				newIndices.push( index.getX( 0 ) );
    				newIndices.push( index.getX( i ) );
    				newIndices.push( index.getX( i + 1 ) );

    			}

    		} else {

    			// gl.TRIANGLE_STRIP

    			for ( let i = 0; i < numberOfTriangles; i ++ ) {

    				if ( i % 2 === 0 ) {

    					newIndices.push( index.getX( i ) );
    					newIndices.push( index.getX( i + 1 ) );
    					newIndices.push( index.getX( i + 2 ) );

    				} else {

    					newIndices.push( index.getX( i + 2 ) );
    					newIndices.push( index.getX( i + 1 ) );
    					newIndices.push( index.getX( i ) );

    				}

    			}

    		}

    		if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

    			console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

    		}

    		// build final geometry

    		const newGeometry = geometry.clone();
    		newGeometry.setIndex( newIndices );
    		newGeometry.clearGroups();

    		return newGeometry;

    	} else {

    		console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode );
    		return geometry;

    	}

    }

    class GLTFLoader extends three.Loader {

    	constructor( manager ) {

    		super( manager );

    		this.dracoLoader = null;
    		this.ktx2Loader = null;
    		this.meshoptDecoder = null;

    		this.pluginCallbacks = [];

    		this.register( function ( parser ) {

    			return new GLTFMaterialsClearcoatExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFTextureBasisUExtension( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFTextureWebPExtension( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFTextureAVIFExtension( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsSheenExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsTransmissionExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsVolumeExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsIorExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsEmissiveStrengthExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsSpecularExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsIridescenceExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsAnisotropyExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMaterialsBumpExtension$1( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFLightsExtension( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMeshoptCompression( parser );

    		} );

    		this.register( function ( parser ) {

    			return new GLTFMeshGpuInstancing$1( parser );

    		} );

    	}

    	load( url, onLoad, onProgress, onError ) {

    		const scope = this;

    		let resourcePath;

    		if ( this.resourcePath !== '' ) {

    			resourcePath = this.resourcePath;

    		} else if ( this.path !== '' ) {

    			// If a base path is set, resources will be relative paths from that plus the relative path of the gltf file
    			// Example  path = 'https://my-cnd-server.com/', url = 'assets/models/model.gltf'
    			// resourcePath = 'https://my-cnd-server.com/assets/models/'
    			// referenced resource 'model.bin' will be loaded from 'https://my-cnd-server.com/assets/models/model.bin'
    			// referenced resource '../textures/texture.png' will be loaded from 'https://my-cnd-server.com/assets/textures/texture.png'
    			const relativeUrl = three.LoaderUtils.extractUrlBase( url );
    			resourcePath = three.LoaderUtils.resolveURL( relativeUrl, this.path );

    		} else {

    			resourcePath = three.LoaderUtils.extractUrlBase( url );

    		}

    		// Tells the LoadingManager to track an extra item, which resolves after
    		// the model is fully loaded. This means the count of items loaded will
    		// be incorrect, but ensures manager.onLoad() does not fire early.
    		this.manager.itemStart( url );

    		const _onError = function ( e ) {

    			if ( onError ) {

    				onError( e );

    			} else {

    				console.error( e );

    			}

    			scope.manager.itemError( url );
    			scope.manager.itemEnd( url );

    		};

    		const loader = new three.FileLoader( this.manager );

    		loader.setPath( this.path );
    		loader.setResponseType( 'arraybuffer' );
    		loader.setRequestHeader( this.requestHeader );
    		loader.setWithCredentials( this.withCredentials );

    		loader.load( url, function ( data ) {

    			try {

    				scope.parse( data, resourcePath, function ( gltf ) {

    					onLoad( gltf );

    					scope.manager.itemEnd( url );

    				}, _onError );

    			} catch ( e ) {

    				_onError( e );

    			}

    		}, onProgress, _onError );

    	}

    	setDRACOLoader( dracoLoader ) {

    		this.dracoLoader = dracoLoader;
    		return this;

    	}

    	setDDSLoader() {

    		throw new Error(

    			'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'

    		);

    	}

    	setKTX2Loader( ktx2Loader ) {

    		this.ktx2Loader = ktx2Loader;
    		return this;

    	}

    	setMeshoptDecoder( meshoptDecoder ) {

    		this.meshoptDecoder = meshoptDecoder;
    		return this;

    	}

    	register( callback ) {

    		if ( this.pluginCallbacks.indexOf( callback ) === - 1 ) {

    			this.pluginCallbacks.push( callback );

    		}

    		return this;

    	}

    	unregister( callback ) {

    		if ( this.pluginCallbacks.indexOf( callback ) !== - 1 ) {

    			this.pluginCallbacks.splice( this.pluginCallbacks.indexOf( callback ), 1 );

    		}

    		return this;

    	}

    	parse( data, path, onLoad, onError ) {

    		let json;
    		const extensions = {};
    		const plugins = {};
    		const textDecoder = new TextDecoder();

    		if ( typeof data === 'string' ) {

    			json = JSON.parse( data );

    		} else if ( data instanceof ArrayBuffer ) {

    			const magic = textDecoder.decode( new Uint8Array( data, 0, 4 ) );

    			if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

    				try {

    					extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

    				} catch ( error ) {

    					if ( onError ) onError( error );
    					return;

    				}

    				json = JSON.parse( extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content );

    			} else {

    				json = JSON.parse( textDecoder.decode( data ) );

    			}

    		} else {

    			json = data;

    		}

    		if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

    			if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
    			return;

    		}

    		const parser = new GLTFParser( json, {

    			path: path || this.resourcePath || '',
    			crossOrigin: this.crossOrigin,
    			requestHeader: this.requestHeader,
    			manager: this.manager,
    			ktx2Loader: this.ktx2Loader,
    			meshoptDecoder: this.meshoptDecoder

    		} );

    		parser.fileLoader.setRequestHeader( this.requestHeader );

    		for ( let i = 0; i < this.pluginCallbacks.length; i ++ ) {

    			const plugin = this.pluginCallbacks[ i ]( parser );

    			if ( ! plugin.name ) console.error( 'THREE.GLTFLoader: Invalid plugin found: missing name' );

    			plugins[ plugin.name ] = plugin;

    			// Workaround to avoid determining as unknown extension
    			// in addUnknownExtensionsToUserData().
    			// Remove this workaround if we move all the existing
    			// extension handlers to plugin system
    			extensions[ plugin.name ] = true;

    		}

    		if ( json.extensionsUsed ) {

    			for ( let i = 0; i < json.extensionsUsed.length; ++ i ) {

    				const extensionName = json.extensionsUsed[ i ];
    				const extensionsRequired = json.extensionsRequired || [];

    				switch ( extensionName ) {

    					case EXTENSIONS.KHR_MATERIALS_UNLIT:
    						extensions[ extensionName ] = new GLTFMaterialsUnlitExtension$1();
    						break;

    					case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
    						extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
    						break;

    					case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
    						extensions[ extensionName ] = new GLTFTextureTransformExtension();
    						break;

    					case EXTENSIONS.KHR_MESH_QUANTIZATION:
    						extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
    						break;

    					default:

    						if ( extensionsRequired.indexOf( extensionName ) >= 0 && plugins[ extensionName ] === undefined ) {

    							console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

    						}

    				}

    			}

    		}

    		parser.setExtensions( extensions );
    		parser.setPlugins( plugins );
    		parser.parse( onLoad, onError );

    	}

    	parseAsync( data, path ) {

    		const scope = this;

    		return new Promise( function ( resolve, reject ) {

    			scope.parse( data, path, resolve, reject );

    		} );

    	}

    }

    /* GLTFREGISTRY */

    function GLTFRegistry() {

    	let objects = {};

    	return	{

    		get: function ( key ) {

    			return objects[ key ];

    		},

    		add: function ( key, object ) {

    			objects[ key ] = object;

    		},

    		remove: function ( key ) {

    			delete objects[ key ];

    		},

    		removeAll: function () {

    			objects = {};

    		}

    	};

    }

    /*********************************/
    /********** EXTENSIONS ***********/
    /*********************************/

    const EXTENSIONS = {
    	KHR_BINARY_GLTF: 'KHR_binary_glTF',
    	KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
    	KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
    	KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
    	KHR_MATERIALS_IOR: 'KHR_materials_ior',
    	KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
    	KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
    	KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
    	KHR_MATERIALS_IRIDESCENCE: 'KHR_materials_iridescence',
    	KHR_MATERIALS_ANISOTROPY: 'KHR_materials_anisotropy',
    	KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
    	KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
    	KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
    	KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
    	KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
    	KHR_MATERIALS_EMISSIVE_STRENGTH: 'KHR_materials_emissive_strength',
    	EXT_MATERIALS_BUMP: 'EXT_materials_bump',
    	EXT_TEXTURE_WEBP: 'EXT_texture_webp',
    	EXT_TEXTURE_AVIF: 'EXT_texture_avif',
    	EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression',
    	EXT_MESH_GPU_INSTANCING: 'EXT_mesh_gpu_instancing'
    };

    /**
     * Punctual Lights Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
     */
    class GLTFLightsExtension {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

    		// Object3D instance caches
    		this.cache = { refs: {}, uses: {} };

    	}

    	_markDefs() {

    		const parser = this.parser;
    		const nodeDefs = this.parser.json.nodes || [];

    		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

    			const nodeDef = nodeDefs[ nodeIndex ];

    			if ( nodeDef.extensions
    					&& nodeDef.extensions[ this.name ]
    					&& nodeDef.extensions[ this.name ].light !== undefined ) {

    				parser._addNodeRef( this.cache, nodeDef.extensions[ this.name ].light );

    			}

    		}

    	}

    	_loadLight( lightIndex ) {

    		const parser = this.parser;
    		const cacheKey = 'light:' + lightIndex;
    		let dependency = parser.cache.get( cacheKey );

    		if ( dependency ) return dependency;

    		const json = parser.json;
    		const extensions = ( json.extensions && json.extensions[ this.name ] ) || {};
    		const lightDefs = extensions.lights || [];
    		const lightDef = lightDefs[ lightIndex ];
    		let lightNode;

    		const color = new three.Color( 0xffffff );

    		if ( lightDef.color !== undefined ) color.setRGB( lightDef.color[ 0 ], lightDef.color[ 1 ], lightDef.color[ 2 ], three.LinearSRGBColorSpace );

    		const range = lightDef.range !== undefined ? lightDef.range : 0;

    		switch ( lightDef.type ) {

    			case 'directional':
    				lightNode = new three.DirectionalLight( color );
    				lightNode.target.position.set( 0, 0, - 1 );
    				lightNode.add( lightNode.target );
    				break;

    			case 'point':
    				lightNode = new three.PointLight( color );
    				lightNode.distance = range;
    				break;

    			case 'spot':
    				lightNode = new three.SpotLight( color );
    				lightNode.distance = range;
    				// Handle spotlight properties.
    				lightDef.spot = lightDef.spot || {};
    				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
    				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
    				lightNode.angle = lightDef.spot.outerConeAngle;
    				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
    				lightNode.target.position.set( 0, 0, - 1 );
    				lightNode.add( lightNode.target );
    				break;

    			default:
    				throw new Error( 'THREE.GLTFLoader: Unexpected light type: ' + lightDef.type );

    		}

    		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
    		// here, because node-level parsing will only override position if explicitly specified.
    		lightNode.position.set( 0, 0, 0 );

    		lightNode.decay = 2;

    		assignExtrasToUserData( lightNode, lightDef );

    		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

    		lightNode.name = parser.createUniqueName( lightDef.name || ( 'light_' + lightIndex ) );

    		dependency = Promise.resolve( lightNode );

    		parser.cache.add( cacheKey, dependency );

    		return dependency;

    	}

    	getDependency( type, index ) {

    		if ( type !== 'light' ) return;

    		return this._loadLight( index );

    	}

    	createNodeAttachment( nodeIndex ) {

    		const self = this;
    		const parser = this.parser;
    		const json = parser.json;
    		const nodeDef = json.nodes[ nodeIndex ];
    		const lightDef = ( nodeDef.extensions && nodeDef.extensions[ this.name ] ) || {};
    		const lightIndex = lightDef.light;

    		if ( lightIndex === undefined ) return null;

    		return this._loadLight( lightIndex ).then( function ( light ) {

    			return parser._getNodeRef( self.cache, lightIndex, light );

    		} );

    	}

    }

    /**
     * Unlit Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
     */
    class GLTFMaterialsUnlitExtension$1 {

    	constructor() {

    		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

    	}

    	getMaterialType() {

    		return three.MeshBasicMaterial;

    	}

    	extendParams( materialParams, materialDef, parser ) {

    		const pending = [];

    		materialParams.color = new three.Color( 1.0, 1.0, 1.0 );
    		materialParams.opacity = 1.0;

    		const metallicRoughness = materialDef.pbrMetallicRoughness;

    		if ( metallicRoughness ) {

    			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

    				const array = metallicRoughness.baseColorFactor;

    				materialParams.color.setRGB( array[ 0 ], array[ 1 ], array[ 2 ], three.LinearSRGBColorSpace );
    				materialParams.opacity = array[ 3 ];

    			}

    			if ( metallicRoughness.baseColorTexture !== undefined ) {

    				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, three.SRGBColorSpace ) );

    			}

    		}

    		return Promise.all( pending );

    	}

    }

    /**
     * Materials Emissive Strength Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
     */
    class GLTFMaterialsEmissiveStrengthExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const emissiveStrength = materialDef.extensions[ this.name ].emissiveStrength;

    		if ( emissiveStrength !== undefined ) {

    			materialParams.emissiveIntensity = emissiveStrength;

    		}

    		return Promise.resolve();

    	}

    }

    /**
     * Clearcoat Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
     */
    class GLTFMaterialsClearcoatExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		const extension = materialDef.extensions[ this.name ];

    		if ( extension.clearcoatFactor !== undefined ) {

    			materialParams.clearcoat = extension.clearcoatFactor;

    		}

    		if ( extension.clearcoatTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'clearcoatMap', extension.clearcoatTexture ) );

    		}

    		if ( extension.clearcoatRoughnessFactor !== undefined ) {

    			materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;

    		}

    		if ( extension.clearcoatRoughnessTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture ) );

    		}

    		if ( extension.clearcoatNormalTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture ) );

    			if ( extension.clearcoatNormalTexture.scale !== undefined ) {

    				const scale = extension.clearcoatNormalTexture.scale;

    				materialParams.clearcoatNormalScale = new three.Vector2( scale, scale );

    			}

    		}

    		return Promise.all( pending );

    	}

    }

    /**
     * Iridescence Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
     */
    class GLTFMaterialsIridescenceExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		const extension = materialDef.extensions[ this.name ];

    		if ( extension.iridescenceFactor !== undefined ) {

    			materialParams.iridescence = extension.iridescenceFactor;

    		}

    		if ( extension.iridescenceTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'iridescenceMap', extension.iridescenceTexture ) );

    		}

    		if ( extension.iridescenceIor !== undefined ) {

    			materialParams.iridescenceIOR = extension.iridescenceIor;

    		}

    		if ( materialParams.iridescenceThicknessRange === undefined ) {

    			materialParams.iridescenceThicknessRange = [ 100, 400 ];

    		}

    		if ( extension.iridescenceThicknessMinimum !== undefined ) {

    			materialParams.iridescenceThicknessRange[ 0 ] = extension.iridescenceThicknessMinimum;

    		}

    		if ( extension.iridescenceThicknessMaximum !== undefined ) {

    			materialParams.iridescenceThicknessRange[ 1 ] = extension.iridescenceThicknessMaximum;

    		}

    		if ( extension.iridescenceThicknessTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'iridescenceThicknessMap', extension.iridescenceThicknessTexture ) );

    		}

    		return Promise.all( pending );

    	}

    }

    /**
     * Sheen Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
     */
    class GLTFMaterialsSheenExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		materialParams.sheenColor = new three.Color( 0, 0, 0 );
    		materialParams.sheenRoughness = 0;
    		materialParams.sheen = 1;

    		const extension = materialDef.extensions[ this.name ];

    		if ( extension.sheenColorFactor !== undefined ) {

    			const colorFactor = extension.sheenColorFactor;
    			materialParams.sheenColor.setRGB( colorFactor[ 0 ], colorFactor[ 1 ], colorFactor[ 2 ], three.LinearSRGBColorSpace );

    		}

    		if ( extension.sheenRoughnessFactor !== undefined ) {

    			materialParams.sheenRoughness = extension.sheenRoughnessFactor;

    		}

    		if ( extension.sheenColorTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'sheenColorMap', extension.sheenColorTexture, three.SRGBColorSpace ) );

    		}

    		if ( extension.sheenRoughnessTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'sheenRoughnessMap', extension.sheenRoughnessTexture ) );

    		}

    		return Promise.all( pending );

    	}

    }

    /**
     * Transmission Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
     * Draft: https://github.com/KhronosGroup/glTF/pull/1698
     */
    class GLTFMaterialsTransmissionExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		const extension = materialDef.extensions[ this.name ];

    		if ( extension.transmissionFactor !== undefined ) {

    			materialParams.transmission = extension.transmissionFactor;

    		}

    		if ( extension.transmissionTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'transmissionMap', extension.transmissionTexture ) );

    		}

    		return Promise.all( pending );

    	}

    }

    /**
     * Materials Volume Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
     */
    class GLTFMaterialsVolumeExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		const extension = materialDef.extensions[ this.name ];

    		materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;

    		if ( extension.thicknessTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'thicknessMap', extension.thicknessTexture ) );

    		}

    		materialParams.attenuationDistance = extension.attenuationDistance || Infinity;

    		const colorArray = extension.attenuationColor || [ 1, 1, 1 ];
    		materialParams.attenuationColor = new three.Color().setRGB( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ], three.LinearSRGBColorSpace );

    		return Promise.all( pending );

    	}

    }

    /**
     * Materials ior Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
     */
    class GLTFMaterialsIorExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_IOR;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const extension = materialDef.extensions[ this.name ];

    		materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;

    		return Promise.resolve();

    	}

    }

    /**
     * Materials specular Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
     */
    class GLTFMaterialsSpecularExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		const extension = materialDef.extensions[ this.name ];

    		materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;

    		if ( extension.specularTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'specularIntensityMap', extension.specularTexture ) );

    		}

    		const colorArray = extension.specularColorFactor || [ 1, 1, 1 ];
    		materialParams.specularColor = new three.Color().setRGB( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ], three.LinearSRGBColorSpace );

    		if ( extension.specularColorTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'specularColorMap', extension.specularColorTexture, three.SRGBColorSpace ) );

    		}

    		return Promise.all( pending );

    	}

    }


    /**
     * Materials bump Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/EXT_materials_bump
     */
    class GLTFMaterialsBumpExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.EXT_MATERIALS_BUMP;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		const extension = materialDef.extensions[ this.name ];

    		materialParams.bumpScale = extension.bumpFactor !== undefined ? extension.bumpFactor : 1.0;

    		if ( extension.bumpTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'bumpMap', extension.bumpTexture ) );

    		}

    		return Promise.all( pending );

    	}

    }

    /**
     * Materials anisotropy Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_anisotropy
     */
    class GLTFMaterialsAnisotropyExtension$1 {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;

    	}

    	getMaterialType( materialIndex ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

    		return three.MeshPhysicalMaterial;

    	}

    	extendMaterialParams( materialIndex, materialParams ) {

    		const parser = this.parser;
    		const materialDef = parser.json.materials[ materialIndex ];

    		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

    			return Promise.resolve();

    		}

    		const pending = [];

    		const extension = materialDef.extensions[ this.name ];

    		if ( extension.anisotropyStrength !== undefined ) {

    			materialParams.anisotropy = extension.anisotropyStrength;

    		}

    		if ( extension.anisotropyRotation !== undefined ) {

    			materialParams.anisotropyRotation = extension.anisotropyRotation;

    		}

    		if ( extension.anisotropyTexture !== undefined ) {

    			pending.push( parser.assignTexture( materialParams, 'anisotropyMap', extension.anisotropyTexture ) );

    		}

    		return Promise.all( pending );

    	}

    }

    /**
     * BasisU Texture Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
     */
    class GLTFTextureBasisUExtension {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.KHR_TEXTURE_BASISU;

    	}

    	loadTexture( textureIndex ) {

    		const parser = this.parser;
    		const json = parser.json;

    		const textureDef = json.textures[ textureIndex ];

    		if ( ! textureDef.extensions || ! textureDef.extensions[ this.name ] ) {

    			return null;

    		}

    		const extension = textureDef.extensions[ this.name ];
    		const loader = parser.options.ktx2Loader;

    		if ( ! loader ) {

    			if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

    				throw new Error( 'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures' );

    			} else {

    				// Assumes that the extension is optional and that a fallback texture is present
    				return null;

    			}

    		}

    		return parser.loadTextureImage( textureIndex, extension.source, loader );

    	}

    }

    /**
     * WebP Texture Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
     */
    class GLTFTextureWebPExtension {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
    		this.isSupported = null;

    	}

    	loadTexture( textureIndex ) {

    		const name = this.name;
    		const parser = this.parser;
    		const json = parser.json;

    		const textureDef = json.textures[ textureIndex ];

    		if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

    			return null;

    		}

    		const extension = textureDef.extensions[ name ];
    		const source = json.images[ extension.source ];

    		let loader = parser.textureLoader;
    		if ( source.uri ) {

    			const handler = parser.options.manager.getHandler( source.uri );
    			if ( handler !== null ) loader = handler;

    		}

    		return this.detectSupport().then( function ( isSupported ) {

    			if ( isSupported ) return parser.loadTextureImage( textureIndex, extension.source, loader );

    			if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

    				throw new Error( 'THREE.GLTFLoader: WebP required by asset but unsupported.' );

    			}

    			// Fall back to PNG or JPEG.
    			return parser.loadTexture( textureIndex );

    		} );

    	}

    	detectSupport() {

    		if ( ! this.isSupported ) {

    			this.isSupported = new Promise( function ( resolve ) {

    				const image = new Image();

    				// Lossy test image. Support for lossy images doesn't guarantee support for all
    				// WebP images, unfortunately.
    				image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

    				image.onload = image.onerror = function () {

    					resolve( image.height === 1 );

    				};

    			} );

    		}

    		return this.isSupported;

    	}

    }

    /**
     * AVIF Texture Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_avif
     */
    class GLTFTextureAVIFExtension {

    	constructor( parser ) {

    		this.parser = parser;
    		this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
    		this.isSupported = null;

    	}

    	loadTexture( textureIndex ) {

    		const name = this.name;
    		const parser = this.parser;
    		const json = parser.json;

    		const textureDef = json.textures[ textureIndex ];

    		if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

    			return null;

    		}

    		const extension = textureDef.extensions[ name ];
    		const source = json.images[ extension.source ];

    		let loader = parser.textureLoader;
    		if ( source.uri ) {

    			const handler = parser.options.manager.getHandler( source.uri );
    			if ( handler !== null ) loader = handler;

    		}

    		return this.detectSupport().then( function ( isSupported ) {

    			if ( isSupported ) return parser.loadTextureImage( textureIndex, extension.source, loader );

    			if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

    				throw new Error( 'THREE.GLTFLoader: AVIF required by asset but unsupported.' );

    			}

    			// Fall back to PNG or JPEG.
    			return parser.loadTexture( textureIndex );

    		} );

    	}

    	detectSupport() {

    		if ( ! this.isSupported ) {

    			this.isSupported = new Promise( function ( resolve ) {

    				const image = new Image();

    				// Lossy test image.
    				image.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
    				image.onload = image.onerror = function () {

    					resolve( image.height === 1 );

    				};

    			} );

    		}

    		return this.isSupported;

    	}

    }

    /**
     * meshopt BufferView Compression Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
     */
    class GLTFMeshoptCompression {

    	constructor( parser ) {

    		this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
    		this.parser = parser;

    	}

    	loadBufferView( index ) {

    		const json = this.parser.json;
    		const bufferView = json.bufferViews[ index ];

    		if ( bufferView.extensions && bufferView.extensions[ this.name ] ) {

    			const extensionDef = bufferView.extensions[ this.name ];

    			const buffer = this.parser.getDependency( 'buffer', extensionDef.buffer );
    			const decoder = this.parser.options.meshoptDecoder;

    			if ( ! decoder || ! decoder.supported ) {

    				if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

    					throw new Error( 'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files' );

    				} else {

    					// Assumes that the extension is optional and that fallback buffer data is present
    					return null;

    				}

    			}

    			return buffer.then( function ( res ) {

    				const byteOffset = extensionDef.byteOffset || 0;
    				const byteLength = extensionDef.byteLength || 0;

    				const count = extensionDef.count;
    				const stride = extensionDef.byteStride;

    				const source = new Uint8Array( res, byteOffset, byteLength );

    				if ( decoder.decodeGltfBufferAsync ) {

    					return decoder.decodeGltfBufferAsync( count, stride, source, extensionDef.mode, extensionDef.filter ).then( function ( res ) {

    						return res.buffer;

    					} );

    				} else {

    					// Support for MeshoptDecoder 0.18 or earlier, without decodeGltfBufferAsync
    					return decoder.ready.then( function () {

    						const result = new ArrayBuffer( count * stride );
    						decoder.decodeGltfBuffer( new Uint8Array( result ), count, stride, source, extensionDef.mode, extensionDef.filter );
    						return result;

    					} );

    				}

    			} );

    		} else {

    			return null;

    		}

    	}

    }

    /**
     * GPU Instancing Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
     *
     */
    class GLTFMeshGpuInstancing$1 {

    	constructor( parser ) {

    		this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
    		this.parser = parser;

    	}

    	createNodeMesh( nodeIndex ) {

    		const json = this.parser.json;
    		const nodeDef = json.nodes[ nodeIndex ];

    		if ( ! nodeDef.extensions || ! nodeDef.extensions[ this.name ] ||
    			nodeDef.mesh === undefined ) {

    			return null;

    		}

    		const meshDef = json.meshes[ nodeDef.mesh ];

    		// No Points or Lines + Instancing support yet

    		for ( const primitive of meshDef.primitives ) {

    			if ( primitive.mode !== WEBGL_CONSTANTS$1.TRIANGLES &&
    				 primitive.mode !== WEBGL_CONSTANTS$1.TRIANGLE_STRIP &&
    				 primitive.mode !== WEBGL_CONSTANTS$1.TRIANGLE_FAN &&
    				 primitive.mode !== undefined ) {

    				return null;

    			}

    		}

    		const extensionDef = nodeDef.extensions[ this.name ];
    		const attributesDef = extensionDef.attributes;

    		// @TODO: Can we support InstancedMesh + SkinnedMesh?

    		const pending = [];
    		const attributes = {};

    		for ( const key in attributesDef ) {

    			pending.push( this.parser.getDependency( 'accessor', attributesDef[ key ] ).then( accessor => {

    				attributes[ key ] = accessor;
    				return attributes[ key ];

    			} ) );

    		}

    		if ( pending.length < 1 ) {

    			return null;

    		}

    		pending.push( this.parser.createNodeMesh( nodeIndex ) );

    		return Promise.all( pending ).then( results => {

    			const nodeObject = results.pop();
    			const meshes = nodeObject.isGroup ? nodeObject.children : [ nodeObject ];
    			const count = results[ 0 ].count; // All attribute counts should be same
    			const instancedMeshes = [];

    			for ( const mesh of meshes ) {

    				// Temporal variables
    				const m = new three.Matrix4();
    				const p = new three.Vector3();
    				const q = new three.Quaternion();
    				const s = new three.Vector3( 1, 1, 1 );

    				const instancedMesh = new three.InstancedMesh( mesh.geometry, mesh.material, count );

    				for ( let i = 0; i < count; i ++ ) {

    					if ( attributes.TRANSLATION ) {

    						p.fromBufferAttribute( attributes.TRANSLATION, i );

    					}

    					if ( attributes.ROTATION ) {

    						q.fromBufferAttribute( attributes.ROTATION, i );

    					}

    					if ( attributes.SCALE ) {

    						s.fromBufferAttribute( attributes.SCALE, i );

    					}

    					instancedMesh.setMatrixAt( i, m.compose( p, q, s ) );

    				}

    				// Add instance attributes to the geometry, excluding TRS.
    				for ( const attributeName in attributes ) {

    					if ( attributeName === '_COLOR_0' ) {

    						const attr = attributes[ attributeName ];
    						instancedMesh.instanceColor = new three.InstancedBufferAttribute( attr.array, attr.itemSize, attr.normalized );

    					} else if ( attributeName !== 'TRANSLATION' &&
    						 attributeName !== 'ROTATION' &&
    						 attributeName !== 'SCALE' ) {

    						mesh.geometry.setAttribute( attributeName, attributes[ attributeName ] );

    					}

    				}

    				// Just in case
    				three.Object3D.prototype.copy.call( instancedMesh, mesh );

    				this.parser.assignFinalMaterial( instancedMesh );

    				instancedMeshes.push( instancedMesh );

    			}

    			if ( nodeObject.isGroup ) {

    				nodeObject.clear();

    				nodeObject.add( ... instancedMeshes );

    				return nodeObject;

    			}

    			return instancedMeshes[ 0 ];

    		} );

    	}

    }

    /* BINARY EXTENSION */
    const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
    const BINARY_EXTENSION_HEADER_LENGTH = 12;
    const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

    class GLTFBinaryExtension {

    	constructor( data ) {

    		this.name = EXTENSIONS.KHR_BINARY_GLTF;
    		this.content = null;
    		this.body = null;

    		const headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );
    		const textDecoder = new TextDecoder();

    		this.header = {
    			magic: textDecoder.decode( new Uint8Array( data.slice( 0, 4 ) ) ),
    			version: headerView.getUint32( 4, true ),
    			length: headerView.getUint32( 8, true )
    		};

    		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

    			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

    		} else if ( this.header.version < 2.0 ) {

    			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

    		}

    		const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
    		const chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
    		let chunkIndex = 0;

    		while ( chunkIndex < chunkContentsLength ) {

    			const chunkLength = chunkView.getUint32( chunkIndex, true );
    			chunkIndex += 4;

    			const chunkType = chunkView.getUint32( chunkIndex, true );
    			chunkIndex += 4;

    			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

    				const contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
    				this.content = textDecoder.decode( contentArray );

    			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

    				const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
    				this.body = data.slice( byteOffset, byteOffset + chunkLength );

    			}

    			// Clients must ignore chunks with unknown types.

    			chunkIndex += chunkLength;

    		}

    		if ( this.content === null ) {

    			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

    		}

    	}

    }

    /**
     * DRACO Mesh Compression Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
     */
    class GLTFDracoMeshCompressionExtension {

    	constructor( json, dracoLoader ) {

    		if ( ! dracoLoader ) {

    			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

    		}

    		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
    		this.json = json;
    		this.dracoLoader = dracoLoader;
    		this.dracoLoader.preload();

    	}

    	decodePrimitive( primitive, parser ) {

    		const json = this.json;
    		const dracoLoader = this.dracoLoader;
    		const bufferViewIndex = primitive.extensions[ this.name ].bufferView;
    		const gltfAttributeMap = primitive.extensions[ this.name ].attributes;
    		const threeAttributeMap = {};
    		const attributeNormalizedMap = {};
    		const attributeTypeMap = {};

    		for ( const attributeName in gltfAttributeMap ) {

    			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

    			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

    		}

    		for ( const attributeName in primitive.attributes ) {

    			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

    			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

    				const accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
    				const componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

    				attributeTypeMap[ threeAttributeName ] = componentType.name;
    				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

    			}

    		}

    		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

    			return new Promise( function ( resolve, reject ) {

    				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

    					for ( const attributeName in geometry.attributes ) {

    						const attribute = geometry.attributes[ attributeName ];
    						const normalized = attributeNormalizedMap[ attributeName ];

    						if ( normalized !== undefined ) attribute.normalized = normalized;

    					}

    					resolve( geometry );

    				}, threeAttributeMap, attributeTypeMap, three.LinearSRGBColorSpace, reject );

    			} );

    		} );

    	}

    }

    /**
     * Texture Transform Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
     */
    class GLTFTextureTransformExtension {

    	constructor() {

    		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

    	}

    	extendTexture( texture, transform ) {

    		if ( ( transform.texCoord === undefined || transform.texCoord === texture.channel )
    			&& transform.offset === undefined
    			&& transform.rotation === undefined
    			&& transform.scale === undefined ) {

    			// See https://github.com/mrdoob/three.js/issues/21819.
    			return texture;

    		}

    		texture = texture.clone();

    		if ( transform.texCoord !== undefined ) {

    			texture.channel = transform.texCoord;

    		}

    		if ( transform.offset !== undefined ) {

    			texture.offset.fromArray( transform.offset );

    		}

    		if ( transform.rotation !== undefined ) {

    			texture.rotation = transform.rotation;

    		}

    		if ( transform.scale !== undefined ) {

    			texture.repeat.fromArray( transform.scale );

    		}

    		texture.needsUpdate = true;

    		return texture;

    	}

    }

    /**
     * Mesh Quantization Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
     */
    class GLTFMeshQuantizationExtension {

    	constructor() {

    		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

    	}

    }

    /*********************************/
    /********** INTERPOLATION ********/
    /*********************************/

    // Spline Interpolation
    // Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
    class GLTFCubicSplineInterpolant extends three.Interpolant {

    	constructor( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

    		super( parameterPositions, sampleValues, sampleSize, resultBuffer );

    	}

    	copySampleValue_( index ) {

    		// Copies a sample value to the result buffer. See description of glTF
    		// CUBICSPLINE values layout in interpolate_() function below.

    		const result = this.resultBuffer,
    			values = this.sampleValues,
    			valueSize = this.valueSize,
    			offset = index * valueSize * 3 + valueSize;

    		for ( let i = 0; i !== valueSize; i ++ ) {

    			result[ i ] = values[ offset + i ];

    		}

    		return result;

    	}

    	interpolate_( i1, t0, t, t1 ) {

    		const result = this.resultBuffer;
    		const values = this.sampleValues;
    		const stride = this.valueSize;

    		const stride2 = stride * 2;
    		const stride3 = stride * 3;

    		const td = t1 - t0;

    		const p = ( t - t0 ) / td;
    		const pp = p * p;
    		const ppp = pp * p;

    		const offset1 = i1 * stride3;
    		const offset0 = offset1 - stride3;

    		const s2 = - 2 * ppp + 3 * pp;
    		const s3 = ppp - pp;
    		const s0 = 1 - s2;
    		const s1 = s3 - pp + p;

    		// Layout of keyframe output values for CUBICSPLINE animations:
    		//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
    		for ( let i = 0; i !== stride; i ++ ) {

    			const p0 = values[ offset0 + i + stride ]; // splineVertex_k
    			const m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
    			const p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
    			const m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

    			result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

    		}

    		return result;

    	}

    }

    const _q = new three.Quaternion();

    class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {

    	interpolate_( i1, t0, t, t1 ) {

    		const result = super.interpolate_( i1, t0, t, t1 );

    		_q.fromArray( result ).normalize().toArray( result );

    		return result;

    	}

    }


    /*********************************/
    /********** INTERNALS ************/
    /*********************************/

    /* CONSTANTS */

    const WEBGL_CONSTANTS$1 = {
    	FLOAT: 5126,
    	//FLOAT_MAT2: 35674,
    	FLOAT_MAT3: 35675,
    	FLOAT_MAT4: 35676,
    	FLOAT_VEC2: 35664,
    	FLOAT_VEC3: 35665,
    	FLOAT_VEC4: 35666,
    	LINEAR: 9729,
    	REPEAT: 10497,
    	SAMPLER_2D: 35678,
    	POINTS: 0,
    	LINES: 1,
    	LINE_LOOP: 2,
    	LINE_STRIP: 3,
    	TRIANGLES: 4,
    	TRIANGLE_STRIP: 5,
    	TRIANGLE_FAN: 6,
    	UNSIGNED_BYTE: 5121,
    	UNSIGNED_SHORT: 5123
    };

    const WEBGL_COMPONENT_TYPES = {
    	5120: Int8Array,
    	5121: Uint8Array,
    	5122: Int16Array,
    	5123: Uint16Array,
    	5125: Uint32Array,
    	5126: Float32Array
    };

    const WEBGL_FILTERS = {
    	9728: three.NearestFilter,
    	9729: three.LinearFilter,
    	9984: three.NearestMipmapNearestFilter,
    	9985: three.LinearMipmapNearestFilter,
    	9986: three.NearestMipmapLinearFilter,
    	9987: three.LinearMipmapLinearFilter
    };

    const WEBGL_WRAPPINGS = {
    	33071: three.ClampToEdgeWrapping,
    	33648: three.MirroredRepeatWrapping,
    	10497: three.RepeatWrapping
    };

    const WEBGL_TYPE_SIZES = {
    	'SCALAR': 1,
    	'VEC2': 2,
    	'VEC3': 3,
    	'VEC4': 4,
    	'MAT2': 4,
    	'MAT3': 9,
    	'MAT4': 16
    };

    const ATTRIBUTES = {
    	POSITION: 'position',
    	NORMAL: 'normal',
    	TANGENT: 'tangent',
    	TEXCOORD_0: 'uv',
    	TEXCOORD_1: 'uv1',
    	TEXCOORD_2: 'uv2',
    	TEXCOORD_3: 'uv3',
    	COLOR_0: 'color',
    	WEIGHTS_0: 'skinWeight',
    	JOINTS_0: 'skinIndex',
    };

    const PATH_PROPERTIES$1 = {
    	scale: 'scale',
    	translation: 'position',
    	rotation: 'quaternion',
    	weights: 'morphTargetInfluences'
    };

    const INTERPOLATION = {
    	CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
    		                        // keyframe track will be initialized with a default interpolation type, then modified.
    	LINEAR: three.InterpolateLinear,
    	STEP: three.InterpolateDiscrete
    };

    const ALPHA_MODES = {
    	OPAQUE: 'OPAQUE',
    	MASK: 'MASK',
    	BLEND: 'BLEND'
    };

    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
     */
    function createDefaultMaterial( cache ) {

    	if ( cache[ 'DefaultMaterial' ] === undefined ) {

    		cache[ 'DefaultMaterial' ] = new three.MeshStandardMaterial( {
    			color: 0xFFFFFF,
    			emissive: 0x000000,
    			metalness: 1,
    			roughness: 1,
    			transparent: false,
    			depthTest: true,
    			side: three.FrontSide
    		} );

    	}

    	return cache[ 'DefaultMaterial' ];

    }

    function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

    	// Add unknown glTF extensions to an object's userData.

    	for ( const name in objectDef.extensions ) {

    		if ( knownExtensions[ name ] === undefined ) {

    			object.userData.gltfExtensions = object.userData.gltfExtensions || {};
    			object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

    		}

    	}

    }

    /**
     * @param {Object3D|Material|BufferGeometry} object
     * @param {GLTF.definition} gltfDef
     */
    function assignExtrasToUserData( object, gltfDef ) {

    	if ( gltfDef.extras !== undefined ) {

    		if ( typeof gltfDef.extras === 'object' ) {

    			Object.assign( object.userData, gltfDef.extras );

    		} else {

    			console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

    		}

    	}

    }

    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
     *
     * @param {BufferGeometry} geometry
     * @param {Array<GLTF.Target>} targets
     * @param {GLTFParser} parser
     * @return {Promise<BufferGeometry>}
     */
    function addMorphTargets( geometry, targets, parser ) {

    	let hasMorphPosition = false;
    	let hasMorphNormal = false;
    	let hasMorphColor = false;

    	for ( let i = 0, il = targets.length; i < il; i ++ ) {

    		const target = targets[ i ];

    		if ( target.POSITION !== undefined ) hasMorphPosition = true;
    		if ( target.NORMAL !== undefined ) hasMorphNormal = true;
    		if ( target.COLOR_0 !== undefined ) hasMorphColor = true;

    		if ( hasMorphPosition && hasMorphNormal && hasMorphColor ) break;

    	}

    	if ( ! hasMorphPosition && ! hasMorphNormal && ! hasMorphColor ) return Promise.resolve( geometry );

    	const pendingPositionAccessors = [];
    	const pendingNormalAccessors = [];
    	const pendingColorAccessors = [];

    	for ( let i = 0, il = targets.length; i < il; i ++ ) {

    		const target = targets[ i ];

    		if ( hasMorphPosition ) {

    			const pendingAccessor = target.POSITION !== undefined
    				? parser.getDependency( 'accessor', target.POSITION )
    				: geometry.attributes.position;

    			pendingPositionAccessors.push( pendingAccessor );

    		}

    		if ( hasMorphNormal ) {

    			const pendingAccessor = target.NORMAL !== undefined
    				? parser.getDependency( 'accessor', target.NORMAL )
    				: geometry.attributes.normal;

    			pendingNormalAccessors.push( pendingAccessor );

    		}

    		if ( hasMorphColor ) {

    			const pendingAccessor = target.COLOR_0 !== undefined
    				? parser.getDependency( 'accessor', target.COLOR_0 )
    				: geometry.attributes.color;

    			pendingColorAccessors.push( pendingAccessor );

    		}

    	}

    	return Promise.all( [
    		Promise.all( pendingPositionAccessors ),
    		Promise.all( pendingNormalAccessors ),
    		Promise.all( pendingColorAccessors )
    	] ).then( function ( accessors ) {

    		const morphPositions = accessors[ 0 ];
    		const morphNormals = accessors[ 1 ];
    		const morphColors = accessors[ 2 ];

    		if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
    		if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
    		if ( hasMorphColor ) geometry.morphAttributes.color = morphColors;
    		geometry.morphTargetsRelative = true;

    		return geometry;

    	} );

    }

    /**
     * @param {Mesh} mesh
     * @param {GLTF.Mesh} meshDef
     */
    function updateMorphTargets( mesh, meshDef ) {

    	mesh.updateMorphTargets();

    	if ( meshDef.weights !== undefined ) {

    		for ( let i = 0, il = meshDef.weights.length; i < il; i ++ ) {

    			mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

    		}

    	}

    	// .extras has user-defined data, so check that .extras.targetNames is an array.
    	if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

    		const targetNames = meshDef.extras.targetNames;

    		if ( mesh.morphTargetInfluences.length === targetNames.length ) {

    			mesh.morphTargetDictionary = {};

    			for ( let i = 0, il = targetNames.length; i < il; i ++ ) {

    				mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

    			}

    		} else {

    			console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

    		}

    	}

    }

    function createPrimitiveKey( primitiveDef ) {

    	let geometryKey;

    	const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];

    	if ( dracoExtension ) {

    		geometryKey = 'draco:' + dracoExtension.bufferView
    				+ ':' + dracoExtension.indices
    				+ ':' + createAttributesKey( dracoExtension.attributes );

    	} else {

    		geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

    	}

    	if ( primitiveDef.targets !== undefined ) {

    		for ( let i = 0, il = primitiveDef.targets.length; i < il; i ++ ) {

    			geometryKey += ':' + createAttributesKey( primitiveDef.targets[ i ] );

    		}

    	}

    	return geometryKey;

    }

    function createAttributesKey( attributes ) {

    	let attributesKey = '';

    	const keys = Object.keys( attributes ).sort();

    	for ( let i = 0, il = keys.length; i < il; i ++ ) {

    		attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

    	}

    	return attributesKey;

    }

    function getNormalizedComponentScale( constructor ) {

    	// Reference:
    	// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data

    	switch ( constructor ) {

    		case Int8Array:
    			return 1 / 127;

    		case Uint8Array:
    			return 1 / 255;

    		case Int16Array:
    			return 1 / 32767;

    		case Uint16Array:
    			return 1 / 65535;

    		default:
    			throw new Error( 'THREE.GLTFLoader: Unsupported normalized accessor component type.' );

    	}

    }

    function getImageURIMimeType( uri ) {

    	if ( uri.search( /\.jpe?g($|\?)/i ) > 0 || uri.search( /^data\:image\/jpeg/ ) === 0 ) return 'image/jpeg';
    	if ( uri.search( /\.webp($|\?)/i ) > 0 || uri.search( /^data\:image\/webp/ ) === 0 ) return 'image/webp';

    	return 'image/png';

    }

    const _identityMatrix = new three.Matrix4();

    /* GLTF PARSER */

    class GLTFParser {

    	constructor( json = {}, options = {} ) {

    		this.json = json;
    		this.extensions = {};
    		this.plugins = {};
    		this.options = options;

    		// loader object cache
    		this.cache = new GLTFRegistry();

    		// associations between Three.js objects and glTF elements
    		this.associations = new Map();

    		// BufferGeometry caching
    		this.primitiveCache = {};

    		// Node cache
    		this.nodeCache = {};

    		// Object3D instance caches
    		this.meshCache = { refs: {}, uses: {} };
    		this.cameraCache = { refs: {}, uses: {} };
    		this.lightCache = { refs: {}, uses: {} };

    		this.sourceCache = {};
    		this.textureCache = {};

    		// Track node names, to ensure no duplicates
    		this.nodeNamesUsed = {};

    		// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
    		// expensive work of uploading a texture to the GPU off the main thread.

    		let isSafari = false;
    		let isFirefox = false;
    		let firefoxVersion = - 1;

    		if ( typeof navigator !== 'undefined' ) {

    			isSafari = /^((?!chrome|android).)*safari/i.test( navigator.userAgent ) === true;
    			isFirefox = navigator.userAgent.indexOf( 'Firefox' ) > - 1;
    			firefoxVersion = isFirefox ? navigator.userAgent.match( /Firefox\/([0-9]+)\./ )[ 1 ] : - 1;

    		}

    		if ( typeof createImageBitmap === 'undefined' || isSafari || ( isFirefox && firefoxVersion < 98 ) ) {

    			this.textureLoader = new three.TextureLoader( this.options.manager );

    		} else {

    			this.textureLoader = new three.ImageBitmapLoader( this.options.manager );

    		}

    		this.textureLoader.setCrossOrigin( this.options.crossOrigin );
    		this.textureLoader.setRequestHeader( this.options.requestHeader );

    		this.fileLoader = new three.FileLoader( this.options.manager );
    		this.fileLoader.setResponseType( 'arraybuffer' );

    		if ( this.options.crossOrigin === 'use-credentials' ) {

    			this.fileLoader.setWithCredentials( true );

    		}

    	}

    	setExtensions( extensions ) {

    		this.extensions = extensions;

    	}

    	setPlugins( plugins ) {

    		this.plugins = plugins;

    	}

    	parse( onLoad, onError ) {

    		const parser = this;
    		const json = this.json;
    		const extensions = this.extensions;

    		// Clear the loader cache
    		this.cache.removeAll();
    		this.nodeCache = {};

    		// Mark the special nodes/meshes in json for efficient parse
    		this._invokeAll( function ( ext ) {

    			return ext._markDefs && ext._markDefs();

    		} );

    		Promise.all( this._invokeAll( function ( ext ) {

    			return ext.beforeRoot && ext.beforeRoot();

    		} ) ).then( function () {

    			return Promise.all( [

    				parser.getDependencies( 'scene' ),
    				parser.getDependencies( 'animation' ),
    				parser.getDependencies( 'camera' ),

    			] );

    		} ).then( function ( dependencies ) {

    			const result = {
    				scene: dependencies[ 0 ][ json.scene || 0 ],
    				scenes: dependencies[ 0 ],
    				animations: dependencies[ 1 ],
    				cameras: dependencies[ 2 ],
    				asset: json.asset,
    				parser: parser,
    				userData: {}
    			};

    			addUnknownExtensionsToUserData( extensions, result, json );

    			assignExtrasToUserData( result, json );

    			return Promise.all( parser._invokeAll( function ( ext ) {

    				return ext.afterRoot && ext.afterRoot( result );

    			} ) ).then( function () {

    				onLoad( result );

    			} );

    		} ).catch( onError );

    	}

    	/**
    	 * Marks the special nodes/meshes in json for efficient parse.
    	 */
    	_markDefs() {

    		const nodeDefs = this.json.nodes || [];
    		const skinDefs = this.json.skins || [];
    		const meshDefs = this.json.meshes || [];

    		// Nothing in the node definition indicates whether it is a Bone or an
    		// Object3D. Use the skins' joint references to mark bones.
    		for ( let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

    			const joints = skinDefs[ skinIndex ].joints;

    			for ( let i = 0, il = joints.length; i < il; i ++ ) {

    				nodeDefs[ joints[ i ] ].isBone = true;

    			}

    		}

    		// Iterate over all nodes, marking references to shared resources,
    		// as well as skeleton joints.
    		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

    			const nodeDef = nodeDefs[ nodeIndex ];

    			if ( nodeDef.mesh !== undefined ) {

    				this._addNodeRef( this.meshCache, nodeDef.mesh );

    				// Nothing in the mesh definition indicates whether it is
    				// a SkinnedMesh or Mesh. Use the node's mesh reference
    				// to mark SkinnedMesh if node has skin.
    				if ( nodeDef.skin !== undefined ) {

    					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

    				}

    			}

    			if ( nodeDef.camera !== undefined ) {

    				this._addNodeRef( this.cameraCache, nodeDef.camera );

    			}

    		}

    	}

    	/**
    	 * Counts references to shared node / Object3D resources. These resources
    	 * can be reused, or "instantiated", at multiple nodes in the scene
    	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
    	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
    	 * Textures) can be reused directly and are not marked here.
    	 *
    	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
    	 */
    	_addNodeRef( cache, index ) {

    		if ( index === undefined ) return;

    		if ( cache.refs[ index ] === undefined ) {

    			cache.refs[ index ] = cache.uses[ index ] = 0;

    		}

    		cache.refs[ index ] ++;

    	}

    	/** Returns a reference to a shared resource, cloning it if necessary. */
    	_getNodeRef( cache, index, object ) {

    		if ( cache.refs[ index ] <= 1 ) return object;

    		const ref = object.clone();

    		// Propagates mappings to the cloned object, prevents mappings on the
    		// original object from being lost.
    		const updateMappings = ( original, clone ) => {

    			const mappings = this.associations.get( original );
    			if ( mappings != null ) {

    				this.associations.set( clone, mappings );

    			}

    			for ( const [ i, child ] of original.children.entries() ) {

    				updateMappings( child, clone.children[ i ] );

    			}

    		};

    		updateMappings( object, ref );

    		ref.name += '_instance_' + ( cache.uses[ index ] ++ );

    		return ref;

    	}

    	_invokeOne( func ) {

    		const extensions = Object.values( this.plugins );
    		extensions.push( this );

    		for ( let i = 0; i < extensions.length; i ++ ) {

    			const result = func( extensions[ i ] );

    			if ( result ) return result;

    		}

    		return null;

    	}

    	_invokeAll( func ) {

    		const extensions = Object.values( this.plugins );
    		extensions.unshift( this );

    		const pending = [];

    		for ( let i = 0; i < extensions.length; i ++ ) {

    			const result = func( extensions[ i ] );

    			if ( result ) pending.push( result );

    		}

    		return pending;

    	}

    	/**
    	 * Requests the specified dependency asynchronously, with caching.
    	 * @param {string} type
    	 * @param {number} index
    	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
    	 */
    	getDependency( type, index ) {

    		const cacheKey = type + ':' + index;
    		let dependency = this.cache.get( cacheKey );

    		if ( ! dependency ) {

    			switch ( type ) {

    				case 'scene':
    					dependency = this.loadScene( index );
    					break;

    				case 'node':
    					dependency = this._invokeOne( function ( ext ) {

    						return ext.loadNode && ext.loadNode( index );

    					} );
    					break;

    				case 'mesh':
    					dependency = this._invokeOne( function ( ext ) {

    						return ext.loadMesh && ext.loadMesh( index );

    					} );
    					break;

    				case 'accessor':
    					dependency = this.loadAccessor( index );
    					break;

    				case 'bufferView':
    					dependency = this._invokeOne( function ( ext ) {

    						return ext.loadBufferView && ext.loadBufferView( index );

    					} );
    					break;

    				case 'buffer':
    					dependency = this.loadBuffer( index );
    					break;

    				case 'material':
    					dependency = this._invokeOne( function ( ext ) {

    						return ext.loadMaterial && ext.loadMaterial( index );

    					} );
    					break;

    				case 'texture':
    					dependency = this._invokeOne( function ( ext ) {

    						return ext.loadTexture && ext.loadTexture( index );

    					} );
    					break;

    				case 'skin':
    					dependency = this.loadSkin( index );
    					break;

    				case 'animation':
    					dependency = this._invokeOne( function ( ext ) {

    						return ext.loadAnimation && ext.loadAnimation( index );

    					} );
    					break;

    				case 'camera':
    					dependency = this.loadCamera( index );
    					break;

    				default:
    					dependency = this._invokeOne( function ( ext ) {

    						return ext != this && ext.getDependency && ext.getDependency( type, index );

    					} );

    					if ( ! dependency ) {

    						throw new Error( 'Unknown type: ' + type );

    					}

    					break;

    			}

    			this.cache.add( cacheKey, dependency );

    		}

    		return dependency;

    	}

    	/**
    	 * Requests all dependencies of the specified type asynchronously, with caching.
    	 * @param {string} type
    	 * @return {Promise<Array<Object>>}
    	 */
    	getDependencies( type ) {

    		let dependencies = this.cache.get( type );

    		if ( ! dependencies ) {

    			const parser = this;
    			const defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

    			dependencies = Promise.all( defs.map( function ( def, index ) {

    				return parser.getDependency( type, index );

    			} ) );

    			this.cache.add( type, dependencies );

    		}

    		return dependencies;

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
    	 * @param {number} bufferIndex
    	 * @return {Promise<ArrayBuffer>}
    	 */
    	loadBuffer( bufferIndex ) {

    		const bufferDef = this.json.buffers[ bufferIndex ];
    		const loader = this.fileLoader;

    		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

    			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

    		}

    		// If present, GLB container is required to be the first buffer.
    		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

    			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

    		}

    		const options = this.options;

    		return new Promise( function ( resolve, reject ) {

    			loader.load( three.LoaderUtils.resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

    				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

    			} );

    		} );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
    	 * @param {number} bufferViewIndex
    	 * @return {Promise<ArrayBuffer>}
    	 */
    	loadBufferView( bufferViewIndex ) {

    		const bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

    		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

    			const byteLength = bufferViewDef.byteLength || 0;
    			const byteOffset = bufferViewDef.byteOffset || 0;
    			return buffer.slice( byteOffset, byteOffset + byteLength );

    		} );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
    	 * @param {number} accessorIndex
    	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
    	 */
    	loadAccessor( accessorIndex ) {

    		const parser = this;
    		const json = this.json;

    		const accessorDef = this.json.accessors[ accessorIndex ];

    		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

    			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
    			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];
    			const normalized = accessorDef.normalized === true;

    			const array = new TypedArray( accessorDef.count * itemSize );
    			return Promise.resolve( new three.BufferAttribute( array, itemSize, normalized ) );

    		}

    		const pendingBufferViews = [];

    		if ( accessorDef.bufferView !== undefined ) {

    			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

    		} else {

    			pendingBufferViews.push( null );

    		}

    		if ( accessorDef.sparse !== undefined ) {

    			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
    			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

    		}

    		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

    			const bufferView = bufferViews[ 0 ];

    			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
    			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

    			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
    			const elementBytes = TypedArray.BYTES_PER_ELEMENT;
    			const itemBytes = elementBytes * itemSize;
    			const byteOffset = accessorDef.byteOffset || 0;
    			const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
    			const normalized = accessorDef.normalized === true;
    			let array, bufferAttribute;

    			// The buffer is not interleaved if the stride is the item size in bytes.
    			if ( byteStride && byteStride !== itemBytes ) {

    				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
    				// This makes sure that IBA.count reflects accessor.count properly
    				const ibSlice = Math.floor( byteOffset / byteStride );
    				const ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
    				let ib = parser.cache.get( ibCacheKey );

    				if ( ! ib ) {

    					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

    					// Integer parameters to IB/IBA are in array elements, not bytes.
    					ib = new three.InterleavedBuffer( array, byteStride / elementBytes );

    					parser.cache.add( ibCacheKey, ib );

    				}

    				bufferAttribute = new three.InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

    			} else {

    				if ( bufferView === null ) {

    					array = new TypedArray( accessorDef.count * itemSize );

    				} else {

    					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

    				}

    				bufferAttribute = new three.BufferAttribute( array, itemSize, normalized );

    			}

    			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
    			if ( accessorDef.sparse !== undefined ) {

    				const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
    				const TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

    				const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
    				const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

    				const sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
    				const sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

    				if ( bufferView !== null ) {

    					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
    					bufferAttribute = new three.BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

    				}

    				for ( let i = 0, il = sparseIndices.length; i < il; i ++ ) {

    					const index = sparseIndices[ i ];

    					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
    					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
    					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
    					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
    					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

    				}

    			}

    			return bufferAttribute;

    		} );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
    	 * @param {number} textureIndex
    	 * @return {Promise<THREE.Texture|null>}
    	 */
    	loadTexture( textureIndex ) {

    		const json = this.json;
    		const options = this.options;
    		const textureDef = json.textures[ textureIndex ];
    		const sourceIndex = textureDef.source;
    		const sourceDef = json.images[ sourceIndex ];

    		let loader = this.textureLoader;

    		if ( sourceDef.uri ) {

    			const handler = options.manager.getHandler( sourceDef.uri );
    			if ( handler !== null ) loader = handler;

    		}

    		return this.loadTextureImage( textureIndex, sourceIndex, loader );

    	}

    	loadTextureImage( textureIndex, sourceIndex, loader ) {

    		const parser = this;
    		const json = this.json;

    		const textureDef = json.textures[ textureIndex ];
    		const sourceDef = json.images[ sourceIndex ];

    		const cacheKey = ( sourceDef.uri || sourceDef.bufferView ) + ':' + textureDef.sampler;

    		if ( this.textureCache[ cacheKey ] ) {

    			// See https://github.com/mrdoob/three.js/issues/21559.
    			return this.textureCache[ cacheKey ];

    		}

    		const promise = this.loadImageSource( sourceIndex, loader ).then( function ( texture ) {

    			texture.flipY = false;

    			texture.name = textureDef.name || sourceDef.name || '';

    			if ( texture.name === '' && typeof sourceDef.uri === 'string' && sourceDef.uri.startsWith( 'data:image/' ) === false ) {

    				texture.name = sourceDef.uri;

    			}

    			const samplers = json.samplers || {};
    			const sampler = samplers[ textureDef.sampler ] || {};

    			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || three.LinearFilter;
    			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || three.LinearMipmapLinearFilter;
    			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || three.RepeatWrapping;
    			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || three.RepeatWrapping;

    			parser.associations.set( texture, { textures: textureIndex } );

    			return texture;

    		} ).catch( function () {

    			return null;

    		} );

    		this.textureCache[ cacheKey ] = promise;

    		return promise;

    	}

    	loadImageSource( sourceIndex, loader ) {

    		const parser = this;
    		const json = this.json;
    		const options = this.options;

    		if ( this.sourceCache[ sourceIndex ] !== undefined ) {

    			return this.sourceCache[ sourceIndex ].then( ( texture ) => texture.clone() );

    		}

    		const sourceDef = json.images[ sourceIndex ];

    		const URL = self.URL || self.webkitURL;

    		let sourceURI = sourceDef.uri || '';
    		let isObjectURL = false;

    		if ( sourceDef.bufferView !== undefined ) {

    			// Load binary image data from bufferView, if provided.

    			sourceURI = parser.getDependency( 'bufferView', sourceDef.bufferView ).then( function ( bufferView ) {

    				isObjectURL = true;
    				const blob = new Blob( [ bufferView ], { type: sourceDef.mimeType } );
    				sourceURI = URL.createObjectURL( blob );
    				return sourceURI;

    			} );

    		} else if ( sourceDef.uri === undefined ) {

    			throw new Error( 'THREE.GLTFLoader: Image ' + sourceIndex + ' is missing URI and bufferView' );

    		}

    		const promise = Promise.resolve( sourceURI ).then( function ( sourceURI ) {

    			return new Promise( function ( resolve, reject ) {

    				let onLoad = resolve;

    				if ( loader.isImageBitmapLoader === true ) {

    					onLoad = function ( imageBitmap ) {

    						const texture = new three.Texture( imageBitmap );
    						texture.needsUpdate = true;

    						resolve( texture );

    					};

    				}

    				loader.load( three.LoaderUtils.resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

    			} );

    		} ).then( function ( texture ) {

    			// Clean up resources and configure Texture.

    			if ( isObjectURL === true ) {

    				URL.revokeObjectURL( sourceURI );

    			}

    			texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType( sourceDef.uri );

    			return texture;

    		} ).catch( function ( error ) {

    			console.error( 'THREE.GLTFLoader: Couldn\'t load texture', sourceURI );
    			throw error;

    		} );

    		this.sourceCache[ sourceIndex ] = promise;
    		return promise;

    	}

    	/**
    	 * Asynchronously assigns a texture to the given material parameters.
    	 * @param {Object} materialParams
    	 * @param {string} mapName
    	 * @param {Object} mapDef
    	 * @return {Promise<Texture>}
    	 */
    	assignTexture( materialParams, mapName, mapDef, colorSpace ) {

    		const parser = this;

    		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

    			if ( ! texture ) return null;

    			if ( mapDef.texCoord !== undefined && mapDef.texCoord > 0 ) {

    				texture = texture.clone();
    				texture.channel = mapDef.texCoord;

    			}

    			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

    				const transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

    				if ( transform ) {

    					const gltfReference = parser.associations.get( texture );
    					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );
    					parser.associations.set( texture, gltfReference );

    				}

    			}

    			if ( colorSpace !== undefined ) {

    				texture.colorSpace = colorSpace;

    			}

    			materialParams[ mapName ] = texture;

    			return texture;

    		} );

    	}

    	/**
    	 * Assigns final material to a Mesh, Line, or Points instance. The instance
    	 * already has a material (generated from the glTF material options alone)
    	 * but reuse of the same glTF material may require multiple threejs materials
    	 * to accommodate different primitive types, defines, etc. New materials will
    	 * be created if necessary, and reused from a cache.
    	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
    	 */
    	assignFinalMaterial( mesh ) {

    		const geometry = mesh.geometry;
    		let material = mesh.material;

    		const useDerivativeTangents = geometry.attributes.tangent === undefined;
    		const useVertexColors = geometry.attributes.color !== undefined;
    		const useFlatShading = geometry.attributes.normal === undefined;

    		if ( mesh.isPoints ) {

    			const cacheKey = 'PointsMaterial:' + material.uuid;

    			let pointsMaterial = this.cache.get( cacheKey );

    			if ( ! pointsMaterial ) {

    				pointsMaterial = new three.PointsMaterial();
    				three.Material.prototype.copy.call( pointsMaterial, material );
    				pointsMaterial.color.copy( material.color );
    				pointsMaterial.map = material.map;
    				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

    				this.cache.add( cacheKey, pointsMaterial );

    			}

    			material = pointsMaterial;

    		} else if ( mesh.isLine ) {

    			const cacheKey = 'LineBasicMaterial:' + material.uuid;

    			let lineMaterial = this.cache.get( cacheKey );

    			if ( ! lineMaterial ) {

    				lineMaterial = new three.LineBasicMaterial();
    				three.Material.prototype.copy.call( lineMaterial, material );
    				lineMaterial.color.copy( material.color );
    				lineMaterial.map = material.map;

    				this.cache.add( cacheKey, lineMaterial );

    			}

    			material = lineMaterial;

    		}

    		// Clone the material if it will be modified
    		if ( useDerivativeTangents || useVertexColors || useFlatShading ) {

    			let cacheKey = 'ClonedMaterial:' + material.uuid + ':';

    			if ( useDerivativeTangents ) cacheKey += 'derivative-tangents:';
    			if ( useVertexColors ) cacheKey += 'vertex-colors:';
    			if ( useFlatShading ) cacheKey += 'flat-shading:';

    			let cachedMaterial = this.cache.get( cacheKey );

    			if ( ! cachedMaterial ) {

    				cachedMaterial = material.clone();

    				if ( useVertexColors ) cachedMaterial.vertexColors = true;
    				if ( useFlatShading ) cachedMaterial.flatShading = true;

    				if ( useDerivativeTangents ) {

    					// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
    					if ( cachedMaterial.normalScale ) cachedMaterial.normalScale.y *= - 1;
    					if ( cachedMaterial.clearcoatNormalScale ) cachedMaterial.clearcoatNormalScale.y *= - 1;

    				}

    				this.cache.add( cacheKey, cachedMaterial );

    				this.associations.set( cachedMaterial, this.associations.get( material ) );

    			}

    			material = cachedMaterial;

    		}

    		mesh.material = material;

    	}

    	getMaterialType( /* materialIndex */ ) {

    		return three.MeshStandardMaterial;

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
    	 * @param {number} materialIndex
    	 * @return {Promise<Material>}
    	 */
    	loadMaterial( materialIndex ) {

    		const parser = this;
    		const json = this.json;
    		const extensions = this.extensions;
    		const materialDef = json.materials[ materialIndex ];

    		let materialType;
    		const materialParams = {};
    		const materialExtensions = materialDef.extensions || {};

    		const pending = [];

    		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

    			const kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
    			materialType = kmuExtension.getMaterialType();
    			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

    		} else {

    			// Specification:
    			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

    			const metallicRoughness = materialDef.pbrMetallicRoughness || {};

    			materialParams.color = new three.Color( 1.0, 1.0, 1.0 );
    			materialParams.opacity = 1.0;

    			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

    				const array = metallicRoughness.baseColorFactor;

    				materialParams.color.setRGB( array[ 0 ], array[ 1 ], array[ 2 ], three.LinearSRGBColorSpace );
    				materialParams.opacity = array[ 3 ];

    			}

    			if ( metallicRoughness.baseColorTexture !== undefined ) {

    				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, three.SRGBColorSpace ) );

    			}

    			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
    			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

    			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

    				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
    				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

    			}

    			materialType = this._invokeOne( function ( ext ) {

    				return ext.getMaterialType && ext.getMaterialType( materialIndex );

    			} );

    			pending.push( Promise.all( this._invokeAll( function ( ext ) {

    				return ext.extendMaterialParams && ext.extendMaterialParams( materialIndex, materialParams );

    			} ) ) );

    		}

    		if ( materialDef.doubleSided === true ) {

    			materialParams.side = three.DoubleSide;

    		}

    		const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

    		if ( alphaMode === ALPHA_MODES.BLEND ) {

    			materialParams.transparent = true;

    			// See: https://github.com/mrdoob/three.js/issues/17706
    			materialParams.depthWrite = false;

    		} else {

    			materialParams.transparent = false;

    			if ( alphaMode === ALPHA_MODES.MASK ) {

    				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

    			}

    		}

    		if ( materialDef.normalTexture !== undefined && materialType !== three.MeshBasicMaterial ) {

    			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

    			materialParams.normalScale = new three.Vector2( 1, 1 );

    			if ( materialDef.normalTexture.scale !== undefined ) {

    				const scale = materialDef.normalTexture.scale;

    				materialParams.normalScale.set( scale, scale );

    			}

    		}

    		if ( materialDef.occlusionTexture !== undefined && materialType !== three.MeshBasicMaterial ) {

    			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

    			if ( materialDef.occlusionTexture.strength !== undefined ) {

    				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

    			}

    		}

    		if ( materialDef.emissiveFactor !== undefined && materialType !== three.MeshBasicMaterial ) {

    			const emissiveFactor = materialDef.emissiveFactor;
    			materialParams.emissive = new three.Color().setRGB( emissiveFactor[ 0 ], emissiveFactor[ 1 ], emissiveFactor[ 2 ], three.LinearSRGBColorSpace );

    		}

    		if ( materialDef.emissiveTexture !== undefined && materialType !== three.MeshBasicMaterial ) {

    			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture, three.SRGBColorSpace ) );

    		}

    		return Promise.all( pending ).then( function () {

    			const material = new materialType( materialParams );

    			if ( materialDef.name ) material.name = materialDef.name;

    			assignExtrasToUserData( material, materialDef );

    			parser.associations.set( material, { materials: materialIndex } );

    			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

    			return material;

    		} );

    	}

    	/** When Object3D instances are targeted by animation, they need unique names. */
    	createUniqueName( originalName ) {

    		const sanitizedName = three.PropertyBinding.sanitizeNodeName( originalName || '' );

    		if ( sanitizedName in this.nodeNamesUsed ) {

    			return sanitizedName + '_' + ( ++ this.nodeNamesUsed[ sanitizedName ] );

    		} else {

    			this.nodeNamesUsed[ sanitizedName ] = 0;

    			return sanitizedName;

    		}

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
    	 *
    	 * Creates BufferGeometries from primitives.
    	 *
    	 * @param {Array<GLTF.Primitive>} primitives
    	 * @return {Promise<Array<BufferGeometry>>}
    	 */
    	loadGeometries( primitives ) {

    		const parser = this;
    		const extensions = this.extensions;
    		const cache = this.primitiveCache;

    		function createDracoPrimitive( primitive ) {

    			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
    				.decodePrimitive( primitive, parser )
    				.then( function ( geometry ) {

    					return addPrimitiveAttributes( geometry, primitive, parser );

    				} );

    		}

    		const pending = [];

    		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

    			const primitive = primitives[ i ];
    			const cacheKey = createPrimitiveKey( primitive );

    			// See if we've already created this geometry
    			const cached = cache[ cacheKey ];

    			if ( cached ) {

    				// Use the cached geometry if it exists
    				pending.push( cached.promise );

    			} else {

    				let geometryPromise;

    				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

    					// Use DRACO geometry if available
    					geometryPromise = createDracoPrimitive( primitive );

    				} else {

    					// Otherwise create a new geometry
    					geometryPromise = addPrimitiveAttributes( new three.BufferGeometry(), primitive, parser );

    				}

    				// Cache this geometry
    				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

    				pending.push( geometryPromise );

    			}

    		}

    		return Promise.all( pending );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
    	 * @param {number} meshIndex
    	 * @return {Promise<Group|Mesh|SkinnedMesh>}
    	 */
    	loadMesh( meshIndex ) {

    		const parser = this;
    		const json = this.json;
    		const extensions = this.extensions;

    		const meshDef = json.meshes[ meshIndex ];
    		const primitives = meshDef.primitives;

    		const pending = [];

    		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

    			const material = primitives[ i ].material === undefined
    				? createDefaultMaterial( this.cache )
    				: this.getDependency( 'material', primitives[ i ].material );

    			pending.push( material );

    		}

    		pending.push( parser.loadGeometries( primitives ) );

    		return Promise.all( pending ).then( function ( results ) {

    			const materials = results.slice( 0, results.length - 1 );
    			const geometries = results[ results.length - 1 ];

    			const meshes = [];

    			for ( let i = 0, il = geometries.length; i < il; i ++ ) {

    				const geometry = geometries[ i ];
    				const primitive = primitives[ i ];

    				// 1. create Mesh

    				let mesh;

    				const material = materials[ i ];

    				if ( primitive.mode === WEBGL_CONSTANTS$1.TRIANGLES ||
    						primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_STRIP ||
    						primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_FAN ||
    						primitive.mode === undefined ) {

    					// .isSkinnedMesh isn't in glTF spec. See ._markDefs()
    					mesh = meshDef.isSkinnedMesh === true
    						? new three.SkinnedMesh( geometry, material )
    						: new three.Mesh( geometry, material );

    					if ( mesh.isSkinnedMesh === true ) {

    						// normalize skin weights to fix malformed assets (see #15319)
    						mesh.normalizeSkinWeights();

    					}

    					if ( primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_STRIP ) {

    						mesh.geometry = toTrianglesDrawMode( mesh.geometry, three.TriangleStripDrawMode );

    					} else if ( primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_FAN ) {

    						mesh.geometry = toTrianglesDrawMode( mesh.geometry, three.TriangleFanDrawMode );

    					}

    				} else if ( primitive.mode === WEBGL_CONSTANTS$1.LINES ) {

    					mesh = new three.LineSegments( geometry, material );

    				} else if ( primitive.mode === WEBGL_CONSTANTS$1.LINE_STRIP ) {

    					mesh = new three.Line( geometry, material );

    				} else if ( primitive.mode === WEBGL_CONSTANTS$1.LINE_LOOP ) {

    					mesh = new three.LineLoop( geometry, material );

    				} else if ( primitive.mode === WEBGL_CONSTANTS$1.POINTS ) {

    					mesh = new three.Points( geometry, material );

    				} else {

    					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

    				}

    				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

    					updateMorphTargets( mesh, meshDef );

    				}

    				mesh.name = parser.createUniqueName( meshDef.name || ( 'mesh_' + meshIndex ) );

    				assignExtrasToUserData( mesh, meshDef );

    				if ( primitive.extensions ) addUnknownExtensionsToUserData( extensions, mesh, primitive );

    				parser.assignFinalMaterial( mesh );

    				meshes.push( mesh );

    			}

    			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

    				parser.associations.set( meshes[ i ], {
    					meshes: meshIndex,
    					primitives: i
    				} );

    			}

    			if ( meshes.length === 1 ) {

    				if ( meshDef.extensions ) addUnknownExtensionsToUserData( extensions, meshes[ 0 ], meshDef );

    				return meshes[ 0 ];

    			}

    			const group = new three.Group();

    			if ( meshDef.extensions ) addUnknownExtensionsToUserData( extensions, group, meshDef );

    			parser.associations.set( group, { meshes: meshIndex } );

    			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

    				group.add( meshes[ i ] );

    			}

    			return group;

    		} );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
    	 * @param {number} cameraIndex
    	 * @return {Promise<THREE.Camera>}
    	 */
    	loadCamera( cameraIndex ) {

    		let camera;
    		const cameraDef = this.json.cameras[ cameraIndex ];
    		const params = cameraDef[ cameraDef.type ];

    		if ( ! params ) {

    			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
    			return;

    		}

    		if ( cameraDef.type === 'perspective' ) {

    			camera = new three.PerspectiveCamera( three.MathUtils.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

    		} else if ( cameraDef.type === 'orthographic' ) {

    			camera = new three.OrthographicCamera( - params.xmag, params.xmag, params.ymag, - params.ymag, params.znear, params.zfar );

    		}

    		if ( cameraDef.name ) camera.name = this.createUniqueName( cameraDef.name );

    		assignExtrasToUserData( camera, cameraDef );

    		return Promise.resolve( camera );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
    	 * @param {number} skinIndex
    	 * @return {Promise<Skeleton>}
    	 */
    	loadSkin( skinIndex ) {

    		const skinDef = this.json.skins[ skinIndex ];

    		const pending = [];

    		for ( let i = 0, il = skinDef.joints.length; i < il; i ++ ) {

    			pending.push( this._loadNodeShallow( skinDef.joints[ i ] ) );

    		}

    		if ( skinDef.inverseBindMatrices !== undefined ) {

    			pending.push( this.getDependency( 'accessor', skinDef.inverseBindMatrices ) );

    		} else {

    			pending.push( null );

    		}

    		return Promise.all( pending ).then( function ( results ) {

    			const inverseBindMatrices = results.pop();
    			const jointNodes = results;

    			// Note that bones (joint nodes) may or may not be in the
    			// scene graph at this time.

    			const bones = [];
    			const boneInverses = [];

    			for ( let i = 0, il = jointNodes.length; i < il; i ++ ) {

    				const jointNode = jointNodes[ i ];

    				if ( jointNode ) {

    					bones.push( jointNode );

    					const mat = new three.Matrix4();

    					if ( inverseBindMatrices !== null ) {

    						mat.fromArray( inverseBindMatrices.array, i * 16 );

    					}

    					boneInverses.push( mat );

    				} else {

    					console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[ i ] );

    				}

    			}

    			return new three.Skeleton( bones, boneInverses );

    		} );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
    	 * @param {number} animationIndex
    	 * @return {Promise<AnimationClip>}
    	 */
    	loadAnimation( animationIndex ) {

    		const json = this.json;
    		const parser = this;

    		const animationDef = json.animations[ animationIndex ];
    		const animationName = animationDef.name ? animationDef.name : 'animation_' + animationIndex;

    		const pendingNodes = [];
    		const pendingInputAccessors = [];
    		const pendingOutputAccessors = [];
    		const pendingSamplers = [];
    		const pendingTargets = [];

    		for ( let i = 0, il = animationDef.channels.length; i < il; i ++ ) {

    			const channel = animationDef.channels[ i ];
    			const sampler = animationDef.samplers[ channel.sampler ];
    			const target = channel.target;
    			const name = target.node;
    			const input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
    			const output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

    			if ( target.node === undefined ) continue;

    			pendingNodes.push( this.getDependency( 'node', name ) );
    			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
    			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
    			pendingSamplers.push( sampler );
    			pendingTargets.push( target );

    		}

    		return Promise.all( [

    			Promise.all( pendingNodes ),
    			Promise.all( pendingInputAccessors ),
    			Promise.all( pendingOutputAccessors ),
    			Promise.all( pendingSamplers ),
    			Promise.all( pendingTargets )

    		] ).then( function ( dependencies ) {

    			const nodes = dependencies[ 0 ];
    			const inputAccessors = dependencies[ 1 ];
    			const outputAccessors = dependencies[ 2 ];
    			const samplers = dependencies[ 3 ];
    			const targets = dependencies[ 4 ];

    			const tracks = [];

    			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

    				const node = nodes[ i ];
    				const inputAccessor = inputAccessors[ i ];
    				const outputAccessor = outputAccessors[ i ];
    				const sampler = samplers[ i ];
    				const target = targets[ i ];

    				if ( node === undefined ) continue;

    				if ( node.updateMatrix ) {

    					node.updateMatrix();

    				}

    				const createdTracks = parser._createAnimationTracks( node, inputAccessor, outputAccessor, sampler, target );

    				if ( createdTracks ) {

    					for ( let k = 0; k < createdTracks.length; k ++ ) {

    						tracks.push( createdTracks[ k ] );

    					}

    				}

    			}

    			return new three.AnimationClip( animationName, undefined, tracks );

    		} );

    	}

    	createNodeMesh( nodeIndex ) {

    		const json = this.json;
    		const parser = this;
    		const nodeDef = json.nodes[ nodeIndex ];

    		if ( nodeDef.mesh === undefined ) return null;

    		return parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

    			const node = parser._getNodeRef( parser.meshCache, nodeDef.mesh, mesh );

    			// if weights are provided on the node, override weights on the mesh.
    			if ( nodeDef.weights !== undefined ) {

    				node.traverse( function ( o ) {

    					if ( ! o.isMesh ) return;

    					for ( let i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

    						o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

    					}

    				} );

    			}

    			return node;

    		} );

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
    	 * @param {number} nodeIndex
    	 * @return {Promise<Object3D>}
    	 */
    	loadNode( nodeIndex ) {

    		const json = this.json;
    		const parser = this;

    		const nodeDef = json.nodes[ nodeIndex ];

    		const nodePending = parser._loadNodeShallow( nodeIndex );

    		const childPending = [];
    		const childrenDef = nodeDef.children || [];

    		for ( let i = 0, il = childrenDef.length; i < il; i ++ ) {

    			childPending.push( parser.getDependency( 'node', childrenDef[ i ] ) );

    		}

    		const skeletonPending = nodeDef.skin === undefined
    			? Promise.resolve( null )
    			: parser.getDependency( 'skin', nodeDef.skin );

    		return Promise.all( [
    			nodePending,
    			Promise.all( childPending ),
    			skeletonPending
    		] ).then( function ( results ) {

    			const node = results[ 0 ];
    			const children = results[ 1 ];
    			const skeleton = results[ 2 ];

    			if ( skeleton !== null ) {

    				// This full traverse should be fine because
    				// child glTF nodes have not been added to this node yet.
    				node.traverse( function ( mesh ) {

    					if ( ! mesh.isSkinnedMesh ) return;

    					mesh.bind( skeleton, _identityMatrix );

    				} );

    			}

    			for ( let i = 0, il = children.length; i < il; i ++ ) {

    				node.add( children[ i ] );

    			}

    			return node;

    		} );

    	}

    	// ._loadNodeShallow() parses a single node.
    	// skin and child nodes are created and added in .loadNode() (no '_' prefix).
    	_loadNodeShallow( nodeIndex ) {

    		const json = this.json;
    		const extensions = this.extensions;
    		const parser = this;

    		// This method is called from .loadNode() and .loadSkin().
    		// Cache a node to avoid duplication.

    		if ( this.nodeCache[ nodeIndex ] !== undefined ) {

    			return this.nodeCache[ nodeIndex ];

    		}

    		const nodeDef = json.nodes[ nodeIndex ];

    		// reserve node's name before its dependencies, so the root has the intended name.
    		const nodeName = nodeDef.name ? parser.createUniqueName( nodeDef.name ) : '';

    		const pending = [];

    		const meshPromise = parser._invokeOne( function ( ext ) {

    			return ext.createNodeMesh && ext.createNodeMesh( nodeIndex );

    		} );

    		if ( meshPromise ) {

    			pending.push( meshPromise );

    		}

    		if ( nodeDef.camera !== undefined ) {

    			pending.push( parser.getDependency( 'camera', nodeDef.camera ).then( function ( camera ) {

    				return parser._getNodeRef( parser.cameraCache, nodeDef.camera, camera );

    			} ) );

    		}

    		parser._invokeAll( function ( ext ) {

    			return ext.createNodeAttachment && ext.createNodeAttachment( nodeIndex );

    		} ).forEach( function ( promise ) {

    			pending.push( promise );

    		} );

    		this.nodeCache[ nodeIndex ] = Promise.all( pending ).then( function ( objects ) {

    			let node;

    			// .isBone isn't in glTF spec. See ._markDefs
    			if ( nodeDef.isBone === true ) {

    				node = new three.Bone();

    			} else if ( objects.length > 1 ) {

    				node = new three.Group();

    			} else if ( objects.length === 1 ) {

    				node = objects[ 0 ];

    			} else {

    				node = new three.Object3D();

    			}

    			if ( node !== objects[ 0 ] ) {

    				for ( let i = 0, il = objects.length; i < il; i ++ ) {

    					node.add( objects[ i ] );

    				}

    			}

    			if ( nodeDef.name ) {

    				node.userData.name = nodeDef.name;
    				node.name = nodeName;

    			}

    			assignExtrasToUserData( node, nodeDef );

    			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

    			if ( nodeDef.matrix !== undefined ) {

    				const matrix = new three.Matrix4();
    				matrix.fromArray( nodeDef.matrix );
    				node.applyMatrix4( matrix );

    			} else {

    				if ( nodeDef.translation !== undefined ) {

    					node.position.fromArray( nodeDef.translation );

    				}

    				if ( nodeDef.rotation !== undefined ) {

    					node.quaternion.fromArray( nodeDef.rotation );

    				}

    				if ( nodeDef.scale !== undefined ) {

    					node.scale.fromArray( nodeDef.scale );

    				}

    			}

    			if ( ! parser.associations.has( node ) ) {

    				parser.associations.set( node, {} );

    			}

    			parser.associations.get( node ).nodes = nodeIndex;

    			return node;

    		} );

    		return this.nodeCache[ nodeIndex ];

    	}

    	/**
    	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
    	 * @param {number} sceneIndex
    	 * @return {Promise<Group>}
    	 */
    	loadScene( sceneIndex ) {

    		const extensions = this.extensions;
    		const sceneDef = this.json.scenes[ sceneIndex ];
    		const parser = this;

    		// Loader returns Group, not Scene.
    		// See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
    		const scene = new three.Group();
    		if ( sceneDef.name ) scene.name = parser.createUniqueName( sceneDef.name );

    		assignExtrasToUserData( scene, sceneDef );

    		if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

    		const nodeIds = sceneDef.nodes || [];

    		const pending = [];

    		for ( let i = 0, il = nodeIds.length; i < il; i ++ ) {

    			pending.push( parser.getDependency( 'node', nodeIds[ i ] ) );

    		}

    		return Promise.all( pending ).then( function ( nodes ) {

    			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

    				scene.add( nodes[ i ] );

    			}

    			// Removes dangling associations, associations that reference a node that
    			// didn't make it into the scene.
    			const reduceAssociations = ( node ) => {

    				const reducedAssociations = new Map();

    				for ( const [ key, value ] of parser.associations ) {

    					if ( key instanceof three.Material || key instanceof three.Texture ) {

    						reducedAssociations.set( key, value );

    					}

    				}

    				node.traverse( ( node ) => {

    					const mappings = parser.associations.get( node );

    					if ( mappings != null ) {

    						reducedAssociations.set( node, mappings );

    					}

    				} );

    				return reducedAssociations;

    			};

    			parser.associations = reduceAssociations( scene );

    			return scene;

    		} );

    	}

    	_createAnimationTracks( node, inputAccessor, outputAccessor, sampler, target ) {

    		const tracks = [];

    		const targetName = node.name ? node.name : node.uuid;
    		const targetNames = [];

    		if ( PATH_PROPERTIES$1[ target.path ] === PATH_PROPERTIES$1.weights ) {

    			node.traverse( function ( object ) {

    				if ( object.morphTargetInfluences ) {

    					targetNames.push( object.name ? object.name : object.uuid );

    				}

    			} );

    		} else {

    			targetNames.push( targetName );

    		}

    		let TypedKeyframeTrack;

    		switch ( PATH_PROPERTIES$1[ target.path ] ) {

    			case PATH_PROPERTIES$1.weights:

    				TypedKeyframeTrack = three.NumberKeyframeTrack;
    				break;

    			case PATH_PROPERTIES$1.rotation:

    				TypedKeyframeTrack = three.QuaternionKeyframeTrack;
    				break;

    			case PATH_PROPERTIES$1.position:
    			case PATH_PROPERTIES$1.scale:

    				TypedKeyframeTrack = three.VectorKeyframeTrack;
    				break;

    			default:

    				switch ( outputAccessor.itemSize ) {

    					case 1:
    						TypedKeyframeTrack = three.NumberKeyframeTrack;
    						break;
    					case 2:
    					case 3:
    					default:
    						TypedKeyframeTrack = three.VectorKeyframeTrack;
    						break;

    				}

    				break;

    		}

    		const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : three.InterpolateLinear;


    		const outputArray = this._getArrayFromAccessor( outputAccessor );

    		for ( let j = 0, jl = targetNames.length; j < jl; j ++ ) {

    			const track = new TypedKeyframeTrack(
    				targetNames[ j ] + '.' + PATH_PROPERTIES$1[ target.path ],
    				inputAccessor.array,
    				outputArray,
    				interpolation
    			);

    			// Override interpolation with custom factory method.
    			if ( sampler.interpolation === 'CUBICSPLINE' ) {

    				this._createCubicSplineTrackInterpolant( track );

    			}

    			tracks.push( track );

    		}

    		return tracks;

    	}

    	_getArrayFromAccessor( accessor ) {

    		let outputArray = accessor.array;

    		if ( accessor.normalized ) {

    			const scale = getNormalizedComponentScale( outputArray.constructor );
    			const scaled = new Float32Array( outputArray.length );

    			for ( let j = 0, jl = outputArray.length; j < jl; j ++ ) {

    				scaled[ j ] = outputArray[ j ] * scale;

    			}

    			outputArray = scaled;

    		}

    		return outputArray;

    	}

    	_createCubicSplineTrackInterpolant( track ) {

    		track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

    			// A CUBICSPLINE keyframe in glTF has three output values for each input value,
    			// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
    			// must be divided by three to get the interpolant's sampleSize argument.

    			const interpolantType = ( this instanceof three.QuaternionKeyframeTrack ) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;

    			return new interpolantType( this.times, this.values, this.getValueSize() / 3, result );

    		};

    		// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
    		track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

    	}

    }

    /**
     * @param {BufferGeometry} geometry
     * @param {GLTF.Primitive} primitiveDef
     * @param {GLTFParser} parser
     */
    function computeBounds( geometry, primitiveDef, parser ) {

    	const attributes = primitiveDef.attributes;

    	const box = new three.Box3();

    	if ( attributes.POSITION !== undefined ) {

    		const accessor = parser.json.accessors[ attributes.POSITION ];

    		const min = accessor.min;
    		const max = accessor.max;

    		// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

    		if ( min !== undefined && max !== undefined ) {

    			box.set(
    				new three.Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
    				new three.Vector3( max[ 0 ], max[ 1 ], max[ 2 ] )
    			);

    			if ( accessor.normalized ) {

    				const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
    				box.min.multiplyScalar( boxScale );
    				box.max.multiplyScalar( boxScale );

    			}

    		} else {

    			console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

    			return;

    		}

    	} else {

    		return;

    	}

    	const targets = primitiveDef.targets;

    	if ( targets !== undefined ) {

    		const maxDisplacement = new three.Vector3();
    		const vector = new three.Vector3();

    		for ( let i = 0, il = targets.length; i < il; i ++ ) {

    			const target = targets[ i ];

    			if ( target.POSITION !== undefined ) {

    				const accessor = parser.json.accessors[ target.POSITION ];
    				const min = accessor.min;
    				const max = accessor.max;

    				// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

    				if ( min !== undefined && max !== undefined ) {

    					// we need to get max of absolute components because target weight is [-1,1]
    					vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
    					vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
    					vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );


    					if ( accessor.normalized ) {

    						const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
    						vector.multiplyScalar( boxScale );

    					}

    					// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
    					// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
    					// are used to implement key-frame animations and as such only two are active at a time - this results in very large
    					// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
    					maxDisplacement.max( vector );

    				} else {

    					console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

    				}

    			}

    		}

    		// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
    		box.expandByVector( maxDisplacement );

    	}

    	geometry.boundingBox = box;

    	const sphere = new three.Sphere();

    	box.getCenter( sphere.center );
    	sphere.radius = box.min.distanceTo( box.max ) / 2;

    	geometry.boundingSphere = sphere;

    }

    /**
     * @param {BufferGeometry} geometry
     * @param {GLTF.Primitive} primitiveDef
     * @param {GLTFParser} parser
     * @return {Promise<BufferGeometry>}
     */
    function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

    	const attributes = primitiveDef.attributes;

    	const pending = [];

    	function assignAttributeAccessor( accessorIndex, attributeName ) {

    		return parser.getDependency( 'accessor', accessorIndex )
    			.then( function ( accessor ) {

    				geometry.setAttribute( attributeName, accessor );

    			} );

    	}

    	for ( const gltfAttributeName in attributes ) {

    		const threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

    		// Skip attributes already provided by e.g. Draco extension.
    		if ( threeAttributeName in geometry.attributes ) continue;

    		pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

    	}

    	if ( primitiveDef.indices !== undefined && ! geometry.index ) {

    		const accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

    			geometry.setIndex( accessor );

    		} );

    		pending.push( accessor );

    	}

    	if ( three.ColorManagement.workingColorSpace !== three.LinearSRGBColorSpace && 'COLOR_0' in attributes ) {

    		console.warn( `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${three.ColorManagement.workingColorSpace}" not supported.` );

    	}

    	assignExtrasToUserData( geometry, primitiveDef );

    	computeBounds( geometry, primitiveDef, parser );

    	return Promise.all( pending ).then( function () {

    		return primitiveDef.targets !== undefined
    			? addMorphTargets( geometry, primitiveDef.targets, parser )
    			: geometry;

    	} );

    }

    /**
     * @author Deepkolos / https://github.com/deepkolos
     */

    class WorkerPool {

    	constructor( pool = 4 ) {

    		this.pool = pool;
    		this.queue = [];
    		this.workers = [];
    		this.workersResolve = [];
    		this.workerStatus = 0;

    	}

    	_initWorker( workerId ) {

    		if ( ! this.workers[ workerId ] ) {

    			const worker = this.workerCreator();
    			worker.addEventListener( 'message', this._onMessage.bind( this, workerId ) );
    			this.workers[ workerId ] = worker;

    		}

    	}

    	_getIdleWorker() {

    		for ( let i = 0; i < this.pool; i ++ )
    			if ( ! ( this.workerStatus & ( 1 << i ) ) ) return i;

    		return - 1;

    	}

    	_onMessage( workerId, msg ) {

    		const resolve = this.workersResolve[ workerId ];
    		resolve && resolve( msg );

    		if ( this.queue.length ) {

    			const { resolve, msg, transfer } = this.queue.shift();
    			this.workersResolve[ workerId ] = resolve;
    			this.workers[ workerId ].postMessage( msg, transfer );

    		} else {

    			this.workerStatus ^= 1 << workerId;

    		}

    	}

    	setWorkerCreator( workerCreator ) {

    		this.workerCreator = workerCreator;

    	}

    	setWorkerLimit( pool ) {

    		this.pool = pool;

    	}

    	postMessage( msg, transfer ) {

    		return new Promise( ( resolve ) => {

    			const workerId = this._getIdleWorker();

    			if ( workerId !== - 1 ) {

    				this._initWorker( workerId );
    				this.workerStatus |= 1 << workerId;
    				this.workersResolve[ workerId ] = resolve;
    				this.workers[ workerId ].postMessage( msg, transfer );

    			} else {

    				this.queue.push( { resolve, msg, transfer } );

    			}

    		} );

    	}

    	dispose() {

    		this.workers.forEach( ( worker ) => worker.terminate() );
    		this.workersResolve.length = 0;
    		this.workers.length = 0;
    		this.queue.length = 0;
    		this.workerStatus = 0;

    	}

    }

    const t=0,n=2,p=1,x$1=2,E=0,F=1,X=10,nt=0,ct=9,gt=15,yt=16,dt=22,Ot=37,Ft=43,$t=76,se=83,pe=97,xe=100,de=103,Ae=109,Sn=165,In=166;class Si{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null;}}class Ii{constructor(t,e,n,i){this._dataView=new DataView(t.buffer,t.byteOffset+e,n),this._littleEndian=i,this._offset=0;}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian)+2**32*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_skip(t){return this._offset+=t,this}_scan(t,e=0){const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==e&&i<t;)i++,this._offset++;return i<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const Ti=[171,75,84,88,32,50,48,187,13,10,26,10];function Ei(t){return "undefined"!=typeof TextDecoder?(new TextDecoder).decode(t):Buffer.from(t).toString("utf8")}function Pi(t){const e=new Uint8Array(t.buffer,t.byteOffset,Ti.length);if(e[0]!==Ti[0]||e[1]!==Ti[1]||e[2]!==Ti[2]||e[3]!==Ti[3]||e[4]!==Ti[4]||e[5]!==Ti[5]||e[6]!==Ti[6]||e[7]!==Ti[7]||e[8]!==Ti[8]||e[9]!==Ti[9]||e[10]!==Ti[10]||e[11]!==Ti[11])throw new Error("Missing KTX 2.0 identifier.");const n=new Si,i=17*Uint32Array.BYTES_PER_ELEMENT,s=new Ii(t,Ti.length,i,!0);n.vkFormat=s._nextUint32(),n.typeSize=s._nextUint32(),n.pixelWidth=s._nextUint32(),n.pixelHeight=s._nextUint32(),n.pixelDepth=s._nextUint32(),n.layerCount=s._nextUint32(),n.faceCount=s._nextUint32();const a=s._nextUint32();n.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),o=s._nextUint32(),l=s._nextUint32(),f=s._nextUint32(),U=s._nextUint64(),c=s._nextUint64(),h=new Ii(t,Ti.length+i,3*a*8,!0);for(let e=0;e<a;e++)n.levels.push({levelData:new Uint8Array(t.buffer,t.byteOffset+h._nextUint64(),h._nextUint64()),uncompressedByteLength:h._nextUint64()});const _=new Ii(t,r,o,!0),p={vendorId:_._skip(4)._nextUint16(),descriptorType:_._nextUint16(),versionNumber:_._nextUint16(),descriptorBlockSize:_._nextUint16(),colorModel:_._nextUint8(),colorPrimaries:_._nextUint8(),transferFunction:_._nextUint8(),flags:_._nextUint8(),texelBlockDimension:[_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8()],bytesPlane:[_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8()],samples:[]},g=(p.descriptorBlockSize/4-6)/4;for(let t=0;t<g;t++){const e={bitOffset:_._nextUint16(),bitLength:_._nextUint8(),channelType:_._nextUint8(),samplePosition:[_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8()],sampleLower:-Infinity,sampleUpper:Infinity};64&e.channelType?(e.sampleLower=_._nextInt32(),e.sampleUpper=_._nextInt32()):(e.sampleLower=_._nextUint32(),e.sampleUpper=_._nextUint32()),p.samples[t]=e;}n.dataFormatDescriptor.length=0,n.dataFormatDescriptor.push(p);const y=new Ii(t,l,f,!0);for(;y._offset<f;){const t=y._nextUint32(),e=y._scan(t),i=Ei(e),s=y._scan(t-e.byteLength);n.keyValue[i]=i.match(/^ktx/i)?Ei(s):s,y._offset%4&&y._skip(4-y._offset%4);}if(c<=0)return n;const x=new Ii(t,U,c,!0),u=x._nextUint16(),b=x._nextUint16(),d=x._nextUint32(),m=x._nextUint32(),w=x._nextUint32(),D=x._nextUint32(),B=[];for(let t=0;t<a;t++)B.push({imageFlags:x._nextUint32(),rgbSliceByteOffset:x._nextUint32(),rgbSliceByteLength:x._nextUint32(),alphaSliceByteOffset:x._nextUint32(),alphaSliceByteLength:x._nextUint32()});const L=U+x._offset,A=L+d,k=A+m,v=k+w,S=new Uint8Array(t.buffer,t.byteOffset+L,d),I=new Uint8Array(t.buffer,t.byteOffset+A,m),O=new Uint8Array(t.buffer,t.byteOffset+k,w),T=new Uint8Array(t.buffer,t.byteOffset+v,D);return n.globalData={endpointCount:u,selectorCount:b,imageDescs:B,endpointsData:S,selectorsData:I,tablesData:O,extendedData:T},n}

    let A,I,B;const g={env:{emscripten_notify_memory_growth:function(A){B=new Uint8Array(I.exports.memory.buffer);}}};class Q{init(){return A||(A="undefined"!=typeof fetch?fetch("data:application/wasm;base64,"+C).then(A=>A.arrayBuffer()).then(A=>WebAssembly.instantiate(A,g)).then(this._init):WebAssembly.instantiate(Buffer.from(C,"base64"),g).then(this._init),A)}_init(A){I=A.instance,g.env.emscripten_notify_memory_growth(0);}decode(A,g=0){if(!I)throw new Error("ZSTDDecoder: Await .init() before decoding.");const Q=A.byteLength,C=I.exports.malloc(Q);B.set(A,C),g=g||Number(I.exports.ZSTD_findDecompressedSize(C,Q));const E=I.exports.malloc(g),i=I.exports.ZSTD_decompress(E,g,C,Q),D=B.slice(E,E+i);return I.exports.free(C),I.exports.free(E),D}}const C="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ";

    /**
     * Loader for KTX 2.0 GPU Texture containers.
     *
     * KTX 2.0 is a container format for various GPU texture formats. The loader
     * supports Basis Universal GPU textures, which can be quickly transcoded to
     * a wide variety of GPU texture compression formats, as well as some
     * uncompressed DataTexture and Data3DTexture formats.
     *
     * References:
     * - KTX: http://github.khronos.org/KTX-Specification/
     * - DFD: https://www.khronos.org/registry/DataFormat/specs/1.3/dataformat.1.3.html#basicdescriptor
     */

    const _taskCache = new WeakMap();

    let _activeLoaders = 0;

    let _zstd;

    class KTX2Loader extends three.Loader {

    	constructor( manager ) {

    		super( manager );

    		this.transcoderPath = '';
    		this.transcoderBinary = null;
    		this.transcoderPending = null;

    		this.workerPool = new WorkerPool();
    		this.workerSourceURL = '';
    		this.workerConfig = null;

    		if ( typeof MSC_TRANSCODER !== 'undefined' ) {

    			console.warn(

    				'THREE.KTX2Loader: Please update to latest "basis_transcoder".'
    				+ ' "msc_basis_transcoder" is no longer supported in three.js r125+.'

    			);

    		}

    	}

    	setTranscoderPath( path ) {

    		this.transcoderPath = path;

    		return this;

    	}

    	setWorkerLimit( num ) {

    		this.workerPool.setWorkerLimit( num );

    		return this;

    	}

    	detectSupport( renderer ) {

    		if ( renderer.isWebGPURenderer === true ) {

    			this.workerConfig = {
    				astcSupported: renderer.hasFeature( 'texture-compression-astc' ),
    				etc1Supported: false,
    				etc2Supported: renderer.hasFeature( 'texture-compression-etc2' ),
    				dxtSupported: renderer.hasFeature( 'texture-compression-bc' ),
    				bptcSupported: false,
    				pvrtcSupported: false
    			};

    		} else {

    			this.workerConfig = {
    				astcSupported: renderer.extensions.has( 'WEBGL_compressed_texture_astc' ),
    				etc1Supported: renderer.extensions.has( 'WEBGL_compressed_texture_etc1' ),
    				etc2Supported: renderer.extensions.has( 'WEBGL_compressed_texture_etc' ),
    				dxtSupported: renderer.extensions.has( 'WEBGL_compressed_texture_s3tc' ),
    				bptcSupported: renderer.extensions.has( 'EXT_texture_compression_bptc' ),
    				pvrtcSupported: renderer.extensions.has( 'WEBGL_compressed_texture_pvrtc' )
    					|| renderer.extensions.has( 'WEBKIT_WEBGL_compressed_texture_pvrtc' )
    			};

    			if ( renderer.capabilities.isWebGL2 ) {

    				// https://github.com/mrdoob/three.js/pull/22928
    				this.workerConfig.etc1Supported = false;

    			}

    		}

    		return this;

    	}

    	init() {

    		if ( ! this.transcoderPending ) {

    			// Load transcoder wrapper.
    			const jsLoader = new three.FileLoader( this.manager );
    			jsLoader.setPath( this.transcoderPath );
    			jsLoader.setWithCredentials( this.withCredentials );
    			const jsContent = jsLoader.loadAsync( 'basis_transcoder.js' );

    			// Load transcoder WASM binary.
    			const binaryLoader = new three.FileLoader( this.manager );
    			binaryLoader.setPath( this.transcoderPath );
    			binaryLoader.setResponseType( 'arraybuffer' );
    			binaryLoader.setWithCredentials( this.withCredentials );
    			const binaryContent = binaryLoader.loadAsync( 'basis_transcoder.wasm' );

    			this.transcoderPending = Promise.all( [ jsContent, binaryContent ] )
    				.then( ( [ jsContent, binaryContent ] ) => {

    					const fn = KTX2Loader.BasisWorker.toString();

    					const body = [
    						'/* constants */',
    						'let _EngineFormat = ' + JSON.stringify( KTX2Loader.EngineFormat ),
    						'let _TranscoderFormat = ' + JSON.stringify( KTX2Loader.TranscoderFormat ),
    						'let _BasisFormat = ' + JSON.stringify( KTX2Loader.BasisFormat ),
    						'/* basis_transcoder.js */',
    						jsContent,
    						'/* worker */',
    						fn.substring( fn.indexOf( '{' ) + 1, fn.lastIndexOf( '}' ) )
    					].join( '\n' );

    					this.workerSourceURL = URL.createObjectURL( new Blob( [ body ] ) );
    					this.transcoderBinary = binaryContent;

    					this.workerPool.setWorkerCreator( () => {

    						const worker = new Worker( this.workerSourceURL );
    						const transcoderBinary = this.transcoderBinary.slice( 0 );

    						worker.postMessage( { type: 'init', config: this.workerConfig, transcoderBinary }, [ transcoderBinary ] );

    						return worker;

    					} );

    				} );

    			if ( _activeLoaders > 0 ) {

    				// Each instance loads a transcoder and allocates workers, increasing network and memory cost.

    				console.warn(

    					'THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues.'
    					+ ' Use a single KTX2Loader instance, or call .dispose() on old instances.'

    				);

    			}

    			_activeLoaders ++;

    		}

    		return this.transcoderPending;

    	}

    	load( url, onLoad, onProgress, onError ) {

    		if ( this.workerConfig === null ) {

    			throw new Error( 'THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.' );

    		}

    		const loader = new three.FileLoader( this.manager );

    		loader.setResponseType( 'arraybuffer' );
    		loader.setWithCredentials( this.withCredentials );

    		loader.load( url, ( buffer ) => {

    			// Check for an existing task using this buffer. A transferred buffer cannot be transferred
    			// again from this thread.
    			if ( _taskCache.has( buffer ) ) {

    				const cachedTask = _taskCache.get( buffer );

    				return cachedTask.promise.then( onLoad ).catch( onError );

    			}

    			this._createTexture( buffer )
    				.then( ( texture ) => onLoad ? onLoad( texture ) : null )
    				.catch( onError );

    		}, onProgress, onError );

    	}

    	_createTextureFrom( transcodeResult, container ) {

    		const { faces, width, height, format, type, error, dfdFlags } = transcodeResult;

    		if ( type === 'error' ) return Promise.reject( error );

    		let texture;

    		if ( container.faceCount === 6 ) {

    			texture = new three.CompressedCubeTexture( faces, format, three.UnsignedByteType );

    		} else {

    			const mipmaps = faces[ 0 ].mipmaps;

    			texture = container.layerCount > 1
    				? new three.CompressedArrayTexture( mipmaps, width, height, container.layerCount, format, three.UnsignedByteType )
    				: new three.CompressedTexture( mipmaps, width, height, format, three.UnsignedByteType );

    		}

    		texture.minFilter = faces[ 0 ].mipmaps.length === 1 ? three.LinearFilter : three.LinearMipmapLinearFilter;
    		texture.magFilter = three.LinearFilter;
    		texture.generateMipmaps = false;

    		texture.needsUpdate = true;
    		texture.colorSpace = parseColorSpace( container );
    		texture.premultiplyAlpha = !! ( dfdFlags & p );

    		return texture;

    	}

    	/**
    	 * @param {ArrayBuffer} buffer
    	 * @param {object?} config
    	 * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
    	 */
    	async _createTexture( buffer, config = {} ) {

    		const container = Pi( new Uint8Array( buffer ) );

    		if ( container.vkFormat !== nt ) {

    			return createRawTexture( container );

    		}

    		//
    		const taskConfig = config;
    		const texturePending = this.init().then( () => {

    			return this.workerPool.postMessage( { type: 'transcode', buffer, taskConfig: taskConfig }, [ buffer ] );

    		} ).then( ( e ) => this._createTextureFrom( e.data, container ) );

    		// Cache the task result.
    		_taskCache.set( buffer, { promise: texturePending } );

    		return texturePending;

    	}

    	dispose() {

    		this.workerPool.dispose();
    		if ( this.workerSourceURL ) URL.revokeObjectURL( this.workerSourceURL );

    		_activeLoaders --;

    		return this;

    	}

    }


    /* CONSTANTS */

    KTX2Loader.BasisFormat = {
    	ETC1S: 0,
    	UASTC_4x4: 1,
    };

    KTX2Loader.TranscoderFormat = {
    	ETC1: 0,
    	ETC2: 1,
    	BC1: 2,
    	BC3: 3,
    	BC4: 4,
    	BC5: 5,
    	BC7_M6_OPAQUE_ONLY: 6,
    	BC7_M5: 7,
    	PVRTC1_4_RGB: 8,
    	PVRTC1_4_RGBA: 9,
    	ASTC_4x4: 10,
    	ATC_RGB: 11,
    	ATC_RGBA_INTERPOLATED_ALPHA: 12,
    	RGBA32: 13,
    	RGB565: 14,
    	BGR565: 15,
    	RGBA4444: 16,
    };

    KTX2Loader.EngineFormat = {
    	RGBAFormat: three.RGBAFormat,
    	RGBA_ASTC_4x4_Format: three.RGBA_ASTC_4x4_Format,
    	RGBA_BPTC_Format: three.RGBA_BPTC_Format,
    	RGBA_ETC2_EAC_Format: three.RGBA_ETC2_EAC_Format,
    	RGBA_PVRTC_4BPPV1_Format: three.RGBA_PVRTC_4BPPV1_Format,
    	RGBA_S3TC_DXT5_Format: three.RGBA_S3TC_DXT5_Format,
    	RGB_ETC1_Format: three.RGB_ETC1_Format,
    	RGB_ETC2_Format: three.RGB_ETC2_Format,
    	RGB_PVRTC_4BPPV1_Format: three.RGB_PVRTC_4BPPV1_Format,
    	RGB_S3TC_DXT1_Format: three.RGB_S3TC_DXT1_Format,
    };


    /* WEB WORKER */

    KTX2Loader.BasisWorker = function () {

    	let config;
    	let transcoderPending;
    	let BasisModule;

    	const EngineFormat = _EngineFormat; // eslint-disable-line no-undef
    	const TranscoderFormat = _TranscoderFormat; // eslint-disable-line no-undef
    	const BasisFormat = _BasisFormat; // eslint-disable-line no-undef

    	self.addEventListener( 'message', function ( e ) {

    		const message = e.data;

    		switch ( message.type ) {

    			case 'init':
    				config = message.config;
    				init( message.transcoderBinary );
    				break;

    			case 'transcode':
    				transcoderPending.then( () => {

    					try {

    						const { faces, buffers, width, height, hasAlpha, format, dfdFlags } = transcode( message.buffer );

    						self.postMessage( { type: 'transcode', id: message.id, faces, width, height, hasAlpha, format, dfdFlags }, buffers );

    					} catch ( error ) {

    						console.error( error );

    						self.postMessage( { type: 'error', id: message.id, error: error.message } );

    					}

    				} );
    				break;

    		}

    	} );

    	function init( wasmBinary ) {

    		transcoderPending = new Promise( ( resolve ) => {

    			BasisModule = { wasmBinary, onRuntimeInitialized: resolve };
    			BASIS( BasisModule ); // eslint-disable-line no-undef

    		} ).then( () => {

    			BasisModule.initializeBasis();

    			if ( BasisModule.KTX2File === undefined ) {

    				console.warn( 'THREE.KTX2Loader: Please update Basis Universal transcoder.' );

    			}

    		} );

    	}

    	function transcode( buffer ) {

    		const ktx2File = new BasisModule.KTX2File( new Uint8Array( buffer ) );

    		function cleanup() {

    			ktx2File.close();
    			ktx2File.delete();

    		}

    		if ( ! ktx2File.isValid() ) {

    			cleanup();
    			throw new Error( 'THREE.KTX2Loader:	Invalid or unsupported .ktx2 file' );

    		}

    		const basisFormat = ktx2File.isUASTC() ? BasisFormat.UASTC_4x4 : BasisFormat.ETC1S;
    		const width = ktx2File.getWidth();
    		const height = ktx2File.getHeight();
    		const layerCount = ktx2File.getLayers() || 1;
    		const levelCount = ktx2File.getLevels();
    		const faceCount = ktx2File.getFaces();
    		const hasAlpha = ktx2File.getHasAlpha();
    		const dfdFlags = ktx2File.getDFDFlags();

    		const { transcoderFormat, engineFormat } = getTranscoderFormat( basisFormat, width, height, hasAlpha );

    		if ( ! width || ! height || ! levelCount ) {

    			cleanup();
    			throw new Error( 'THREE.KTX2Loader:	Invalid texture' );

    		}

    		if ( ! ktx2File.startTranscoding() ) {

    			cleanup();
    			throw new Error( 'THREE.KTX2Loader: .startTranscoding failed' );

    		}

    		const faces = [];
    		const buffers = [];

    		for ( let face = 0; face < faceCount; face ++ ) {

    			const mipmaps = [];

    			for ( let mip = 0; mip < levelCount; mip ++ ) {

    				const layerMips = [];

    				let mipWidth, mipHeight;

    				for ( let layer = 0; layer < layerCount; layer ++ ) {

    					const levelInfo = ktx2File.getImageLevelInfo( mip, layer, face );

    					if ( face === 0 && mip === 0 && layer === 0 && ( levelInfo.origWidth % 4 !== 0 || levelInfo.origHeight % 4 !== 0 ) ) {

    						console.warn( 'THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions.' );

    					}

    					if ( levelCount > 1 ) {

    						mipWidth = levelInfo.origWidth;
    						mipHeight = levelInfo.origHeight;

    					} else {

    						// Handles non-multiple-of-four dimensions in textures without mipmaps. Textures with
    						// mipmaps must use multiple-of-four dimensions, for some texture formats and APIs.
    						// See mrdoob/three.js#25908.
    						mipWidth = levelInfo.width;
    						mipHeight = levelInfo.height;

    					}

    					const dst = new Uint8Array( ktx2File.getImageTranscodedSizeInBytes( mip, layer, 0, transcoderFormat ) );
    					const status = ktx2File.transcodeImage( dst, mip, layer, face, transcoderFormat, 0, - 1, - 1 );

    					if ( ! status ) {

    						cleanup();
    						throw new Error( 'THREE.KTX2Loader: .transcodeImage failed.' );

    					}

    					layerMips.push( dst );

    				}

    				const mipData = concat( layerMips );

    				mipmaps.push( { data: mipData, width: mipWidth, height: mipHeight } );
    				buffers.push( mipData.buffer );

    			}

    			faces.push( { mipmaps, width, height, format: engineFormat } );

    		}

    		cleanup();

    		return { faces, buffers, width, height, hasAlpha, format: engineFormat, dfdFlags };

    	}

    	//

    	// Optimal choice of a transcoder target format depends on the Basis format (ETC1S or UASTC),
    	// device capabilities, and texture dimensions. The list below ranks the formats separately
    	// for ETC1S and UASTC.
    	//
    	// In some cases, transcoding UASTC to RGBA32 might be preferred for higher quality (at
    	// significant memory cost) compared to ETC1/2, BC1/3, and PVRTC. The transcoder currently
    	// chooses RGBA32 only as a last resort and does not expose that option to the caller.
    	const FORMAT_OPTIONS = [
    		{
    			if: 'astcSupported',
    			basisFormat: [ BasisFormat.UASTC_4x4 ],
    			transcoderFormat: [ TranscoderFormat.ASTC_4x4, TranscoderFormat.ASTC_4x4 ],
    			engineFormat: [ EngineFormat.RGBA_ASTC_4x4_Format, EngineFormat.RGBA_ASTC_4x4_Format ],
    			priorityETC1S: Infinity,
    			priorityUASTC: 1,
    			needsPowerOfTwo: false,
    		},
    		{
    			if: 'bptcSupported',
    			basisFormat: [ BasisFormat.ETC1S, BasisFormat.UASTC_4x4 ],
    			transcoderFormat: [ TranscoderFormat.BC7_M5, TranscoderFormat.BC7_M5 ],
    			engineFormat: [ EngineFormat.RGBA_BPTC_Format, EngineFormat.RGBA_BPTC_Format ],
    			priorityETC1S: 3,
    			priorityUASTC: 2,
    			needsPowerOfTwo: false,
    		},
    		{
    			if: 'dxtSupported',
    			basisFormat: [ BasisFormat.ETC1S, BasisFormat.UASTC_4x4 ],
    			transcoderFormat: [ TranscoderFormat.BC1, TranscoderFormat.BC3 ],
    			engineFormat: [ EngineFormat.RGB_S3TC_DXT1_Format, EngineFormat.RGBA_S3TC_DXT5_Format ],
    			priorityETC1S: 4,
    			priorityUASTC: 5,
    			needsPowerOfTwo: false,
    		},
    		{
    			if: 'etc2Supported',
    			basisFormat: [ BasisFormat.ETC1S, BasisFormat.UASTC_4x4 ],
    			transcoderFormat: [ TranscoderFormat.ETC1, TranscoderFormat.ETC2 ],
    			engineFormat: [ EngineFormat.RGB_ETC2_Format, EngineFormat.RGBA_ETC2_EAC_Format ],
    			priorityETC1S: 1,
    			priorityUASTC: 3,
    			needsPowerOfTwo: false,
    		},
    		{
    			if: 'etc1Supported',
    			basisFormat: [ BasisFormat.ETC1S, BasisFormat.UASTC_4x4 ],
    			transcoderFormat: [ TranscoderFormat.ETC1 ],
    			engineFormat: [ EngineFormat.RGB_ETC1_Format ],
    			priorityETC1S: 2,
    			priorityUASTC: 4,
    			needsPowerOfTwo: false,
    		},
    		{
    			if: 'pvrtcSupported',
    			basisFormat: [ BasisFormat.ETC1S, BasisFormat.UASTC_4x4 ],
    			transcoderFormat: [ TranscoderFormat.PVRTC1_4_RGB, TranscoderFormat.PVRTC1_4_RGBA ],
    			engineFormat: [ EngineFormat.RGB_PVRTC_4BPPV1_Format, EngineFormat.RGBA_PVRTC_4BPPV1_Format ],
    			priorityETC1S: 5,
    			priorityUASTC: 6,
    			needsPowerOfTwo: true,
    		},
    	];

    	const ETC1S_OPTIONS = FORMAT_OPTIONS.sort( function ( a, b ) {

    		return a.priorityETC1S - b.priorityETC1S;

    	} );
    	const UASTC_OPTIONS = FORMAT_OPTIONS.sort( function ( a, b ) {

    		return a.priorityUASTC - b.priorityUASTC;

    	} );

    	function getTranscoderFormat( basisFormat, width, height, hasAlpha ) {

    		let transcoderFormat;
    		let engineFormat;

    		const options = basisFormat === BasisFormat.ETC1S ? ETC1S_OPTIONS : UASTC_OPTIONS;

    		for ( let i = 0; i < options.length; i ++ ) {

    			const opt = options[ i ];

    			if ( ! config[ opt.if ] ) continue;
    			if ( ! opt.basisFormat.includes( basisFormat ) ) continue;
    			if ( hasAlpha && opt.transcoderFormat.length < 2 ) continue;
    			if ( opt.needsPowerOfTwo && ! ( isPowerOfTwo( width ) && isPowerOfTwo( height ) ) ) continue;

    			transcoderFormat = opt.transcoderFormat[ hasAlpha ? 1 : 0 ];
    			engineFormat = opt.engineFormat[ hasAlpha ? 1 : 0 ];

    			return { transcoderFormat, engineFormat };

    		}

    		console.warn( 'THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32.' );

    		transcoderFormat = TranscoderFormat.RGBA32;
    		engineFormat = EngineFormat.RGBAFormat;

    		return { transcoderFormat, engineFormat };

    	}

    	function isPowerOfTwo( value ) {

    		if ( value <= 2 ) return true;

    		return ( value & ( value - 1 ) ) === 0 && value !== 0;

    	}

    	/** Concatenates N byte arrays. */
    	function concat( arrays ) {

    		if ( arrays.length === 1 ) return arrays[ 0 ];

    		let totalByteLength = 0;

    		for ( let i = 0; i < arrays.length; i ++ ) {

    			const array = arrays[ i ];
    			totalByteLength += array.byteLength;

    		}

    		const result = new Uint8Array( totalByteLength );

    		let byteOffset = 0;

    		for ( let i = 0; i < arrays.length; i ++ ) {

    			const array = arrays[ i ];
    			result.set( array, byteOffset );

    			byteOffset += array.byteLength;

    		}

    		return result;

    	}

    };

    //
    // Parsing for non-Basis textures. These textures are may have supercompression
    // like Zstd, but they do not require transcoding.

    const UNCOMPRESSED_FORMATS = new Set( [ three.RGBAFormat, three.RGFormat, three.RedFormat ] );

    const FORMAT_MAP = {

    	[ Ae ]: three.RGBAFormat,
    	[ pe ]: three.RGBAFormat,
    	[ Ot ]: three.RGBAFormat,
    	[ Ft ]: three.RGBAFormat,

    	[ de ]: three.RGFormat,
    	[ se ]: three.RGFormat,
    	[ yt ]: three.RGFormat,
    	[ dt ]: three.RGFormat,

    	[ xe ]: three.RedFormat,
    	[ $t ]: three.RedFormat,
    	[ gt ]: three.RedFormat,
    	[ ct ]: three.RedFormat,

    	[ In ]: three.RGBA_ASTC_6x6_Format,
    	[ Sn ]: three.RGBA_ASTC_6x6_Format,

    };

    const TYPE_MAP = {

    	[ Ae ]: three.FloatType,
    	[ pe ]: three.HalfFloatType,
    	[ Ot ]: three.UnsignedByteType,
    	[ Ft ]: three.UnsignedByteType,

    	[ de ]: three.FloatType,
    	[ se ]: three.HalfFloatType,
    	[ yt ]: three.UnsignedByteType,
    	[ dt ]: three.UnsignedByteType,

    	[ xe ]: three.FloatType,
    	[ $t ]: three.HalfFloatType,
    	[ gt ]: three.UnsignedByteType,
    	[ ct ]: three.UnsignedByteType,

    	[ In ]: three.UnsignedByteType,
    	[ Sn ]: three.UnsignedByteType,

    };

    async function createRawTexture( container ) {

    	const { vkFormat } = container;

    	if ( FORMAT_MAP[ vkFormat ] === undefined ) {

    		throw new Error( 'THREE.KTX2Loader: Unsupported vkFormat.' );

    	}

    	//

    	let zstd;

    	if ( container.supercompressionScheme === n ) {

    		if ( ! _zstd ) {

    			_zstd = new Promise( async ( resolve ) => {

    				const zstd = new Q();
    				await zstd.init();
    				resolve( zstd );

    			} );

    		}

    		zstd = await _zstd;

    	}

    	//

    	const mipmaps = [];


    	for ( let levelIndex = 0; levelIndex < container.levels.length; levelIndex ++ ) {

    		const levelWidth = Math.max( 1, container.pixelWidth >> levelIndex );
    		const levelHeight = Math.max( 1, container.pixelHeight >> levelIndex );
    		const levelDepth = container.pixelDepth ? Math.max( 1, container.pixelDepth >> levelIndex ) : 0;

    		const level = container.levels[ levelIndex ];

    		let levelData;

    		if ( container.supercompressionScheme === t ) {

    			levelData = level.levelData;

    		} else if ( container.supercompressionScheme === n ) {

    			levelData = zstd.decode( level.levelData, level.uncompressedByteLength );

    		} else {

    			throw new Error( 'THREE.KTX2Loader: Unsupported supercompressionScheme.' );

    		}

    		let data;

    		if ( TYPE_MAP[ vkFormat ] === three.FloatType ) {

    			data = new Float32Array(

    				levelData.buffer,
    				levelData.byteOffset,
    				levelData.byteLength / Float32Array.BYTES_PER_ELEMENT

    			);

    		} else if ( TYPE_MAP[ vkFormat ] === three.HalfFloatType ) {

    			data = new Uint16Array(

    				levelData.buffer,
    				levelData.byteOffset,
    				levelData.byteLength / Uint16Array.BYTES_PER_ELEMENT

    			);

    		} else {

    			data = levelData;

    		}

    		mipmaps.push( {

    			data: data,
    			width: levelWidth,
    			height: levelHeight,
    			depth: levelDepth,

    		} );

    	}

    	let texture;

    	if ( UNCOMPRESSED_FORMATS.has( FORMAT_MAP[ vkFormat ] ) ) {

    		texture = container.pixelDepth === 0
    		? new three.DataTexture( mipmaps[ 0 ].data, container.pixelWidth, container.pixelHeight )
    		: new three.Data3DTexture( mipmaps[ 0 ].data, container.pixelWidth, container.pixelHeight, container.pixelDepth );

    	} else {

    		if ( container.pixelDepth > 0 ) throw new Error( 'THREE.KTX2Loader: Unsupported pixelDepth.' );

    		texture = new three.CompressedTexture( mipmaps, container.pixelWidth, container.pixelHeight );

    	}

    	texture.mipmaps = mipmaps;

    	texture.type = TYPE_MAP[ vkFormat ];
    	texture.format = FORMAT_MAP[ vkFormat ];
    	texture.colorSpace = parseColorSpace( container );
    	texture.needsUpdate = true;

    	//

    	return Promise.resolve( texture );

    }

    function parseColorSpace( container ) {

    	const dfd = container.dataFormatDescriptor[ 0 ];

    	if ( dfd.colorPrimaries === F ) {

    		return dfd.transferFunction === x$1 ? three.SRGBColorSpace : three.LinearSRGBColorSpace;

    	} else if ( dfd.colorPrimaries === X ) {

    		return dfd.transferFunction === x$1 ? three.DisplayP3ColorSpace : three.LinearDisplayP3ColorSpace;

    	} else if ( dfd.colorPrimaries === E ) {

    		return three.NoColorSpace;

    	} else {

    		console.warn( `THREE.KTX2Loader: Unsupported color primaries, "${ dfd.colorPrimaries }"` );
    		return three.NoColorSpace;

    	}

    }

    var _a$9, _b$9;
    const $retainerCount = Symbol('retainerCount');
    const $recentlyUsed = Symbol('recentlyUsed');
    const $evict = Symbol('evict');
    const $evictionThreshold = Symbol('evictionThreshold');
    const $cache = Symbol('cache');
    class CacheEvictionPolicy {
        constructor(cache, evictionThreshold = 5) {
            this[_a$9] = new Map();
            this[_b$9] = [];
            this[$cache] = cache;
            this[$evictionThreshold] = evictionThreshold;
        }
        set evictionThreshold(value) {
            this[$evictionThreshold] = value;
            this[$evict]();
        }
        get evictionThreshold() {
            return this[$evictionThreshold];
        }
        get cache() {
            return this[$cache];
        }
        retainerCount(key) {
            return this[$retainerCount].get(key) || 0;
        }
        reset() {
            this[$retainerCount].clear();
            this[$recentlyUsed] = [];
        }
        retain(key) {
            if (!this[$retainerCount].has(key)) {
                this[$retainerCount].set(key, 0);
            }
            this[$retainerCount].set(key, this[$retainerCount].get(key) + 1);
            const recentlyUsedIndex = this[$recentlyUsed].indexOf(key);
            if (recentlyUsedIndex !== -1) {
                this[$recentlyUsed].splice(recentlyUsedIndex, 1);
            }
            this[$recentlyUsed].unshift(key);
            this[$evict]();
        }
        release(key) {
            if (this[$retainerCount].has(key)) {
                this[$retainerCount].set(key, Math.max(this[$retainerCount].get(key) - 1, 0));
            }
            this[$evict]();
        }
        [(_a$9 = $retainerCount, _b$9 = $recentlyUsed, $evict)]() {
            if (this[$recentlyUsed].length < this[$evictionThreshold]) {
                return;
            }
            for (let i = this[$recentlyUsed].length - 1; i >= this[$evictionThreshold]; --i) {
                const key = this[$recentlyUsed][i];
                const retainerCount = this[$retainerCount].get(key);
                if (retainerCount === 0) {
                    this[$cache].delete(key);
                    this[$recentlyUsed].splice(i, 1);
                }
            }
        }
    }

    const ensureUniqueNames = (variantNames) => {
        const uniqueNames = [];
        const knownNames = new Set();
        for (const name of variantNames) {
            let uniqueName = name;
            let suffix = 0;
            while (knownNames.has(uniqueName)) {
                uniqueName = name + '.' + (++suffix);
            }
            knownNames.add(uniqueName);
            uniqueNames.push(uniqueName);
        }
        return uniqueNames;
    };
    const mappingsArrayToTable = (extensionDef) => {
        const table = new Map();
        for (const mapping of extensionDef.mappings) {
            for (const variant of mapping.variants) {
                table.set(variant, { material: null, gltfMaterialIndex: mapping.material });
            }
        }
        return table;
    };
    class GLTFMaterialsVariantsExtension {
        constructor(parser) {
            this.parser = parser;
            this.name = 'KHR_materials_variants';
        }
        afterRoot(gltf) {
            const parser = this.parser;
            const json = parser.json;
            if (json.extensions === undefined ||
                json.extensions[this.name] === undefined) {
                return null;
            }
            const extensionDef = json.extensions[this.name];
            const variantsDef = extensionDef.variants || [];
            const variants = ensureUniqueNames(variantsDef.map((v) => v.name));
            for (const scene of gltf.scenes) {
                scene.traverse(object => {
                    const mesh = object;
                    if (!mesh.material) {
                        return;
                    }
                    const association = parser.associations.get(mesh);
                    if (association == null || association.meshes == null ||
                        association.primitives == null) {
                        return;
                    }
                    const meshDef = json.meshes[association.meshes];
                    const primitivesDef = meshDef.primitives;
                    const primitiveDef = primitivesDef[association.primitives];
                    const extensionsDef = primitiveDef.extensions;
                    if (!extensionsDef || !extensionsDef[this.name]) {
                        return;
                    }
                    mesh.userData.variantMaterials =
                        mappingsArrayToTable(extensionsDef[this.name]);
                });
            }
            gltf.userData.variants = variants;
            return Promise.resolve();
        }
    }

    var _a$8, _b$8;
    three.Texture.DEFAULT_ANISOTROPY = 4;
    const loadWithLoader = (url, loader, progressCallback = () => { }) => {
        const onProgress = (event) => {
            const fraction = event.loaded / event.total;
            progressCallback(Math.max(0, Math.min(1, isFinite(fraction) ? fraction : 1)));
        };
        return new Promise((resolve, reject) => {
            loader.load(url, resolve, onProgress, reject);
        });
    };
    const fetchScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            document.body.appendChild(script);
            script.onload = resolve;
            script.onerror = reject;
            script.async = true;
            script.src = src;
        });
    };
    const cache = new Map();
    const preloaded = new Map();
    let dracoDecoderLocation;
    const dracoLoader = new DRACOLoader();
    let ktx2TranscoderLocation;
    const ktx2Loader = new KTX2Loader();
    let meshoptDecoderLocation;
    let meshoptDecoder;
    const $loader = Symbol('loader');
    const $evictionPolicy = Symbol('evictionPolicy');
    const $GLTFInstance = Symbol('GLTFInstance');
    class CachingGLTFLoader extends three.EventDispatcher {
        constructor(GLTFInstance) {
            super();
            this[_b$8] = new GLTFLoader().register(parser => new GLTFMaterialsVariantsExtension(parser));
            this[$GLTFInstance] = GLTFInstance;
            this[$loader].setDRACOLoader(dracoLoader);
            this[$loader].setKTX2Loader(ktx2Loader);
        }
        static setDRACODecoderLocation(url) {
            dracoDecoderLocation = url;
            dracoLoader.setDecoderPath(url);
        }
        static getDRACODecoderLocation() {
            return dracoDecoderLocation;
        }
        static setKTX2TranscoderLocation(url) {
            ktx2TranscoderLocation = url;
            ktx2Loader.setTranscoderPath(url);
        }
        static getKTX2TranscoderLocation() {
            return ktx2TranscoderLocation;
        }
        static setMeshoptDecoderLocation(url) {
            if (meshoptDecoderLocation !== url) {
                meshoptDecoderLocation = url;
                meshoptDecoder = fetchScript(url)
                    .then(() => MeshoptDecoder.ready)
                    .then(() => MeshoptDecoder);
            }
        }
        static getMeshoptDecoderLocation() {
            return meshoptDecoderLocation;
        }
        static initializeKTX2Loader(renderer) {
            ktx2Loader.detectSupport(renderer);
        }
        static get cache() {
            return cache;
        }
        static clearCache() {
            cache.forEach((_value, url) => {
                this.delete(url);
            });
            this[$evictionPolicy].reset();
        }
        static has(url) {
            return cache.has(url);
        }
        static async delete(url) {
            if (!this.has(url)) {
                return;
            }
            const gltfLoads = cache.get(url);
            preloaded.delete(url);
            cache.delete(url);
            const gltf = await gltfLoads;
            gltf.dispose();
        }
        static hasFinishedLoading(url) {
            return !!preloaded.get(url);
        }
        get [(_a$8 = $evictionPolicy, _b$8 = $loader, $evictionPolicy)]() {
            return this.constructor[$evictionPolicy];
        }
        async preload(url, element, progressCallback = () => { }) {
            this[$loader].setWithCredentials(CachingGLTFLoader.withCredentials);
            this.dispatchEvent({ type: 'preload', element: element, src: url });
            if (!cache.has(url)) {
                if (meshoptDecoder != null) {
                    this[$loader].setMeshoptDecoder(await meshoptDecoder);
                }
                const rawGLTFLoads = loadWithLoader(url, this[$loader], (progress) => {
                    progressCallback(progress * 0.8);
                });
                const GLTFInstance = this[$GLTFInstance];
                const gltfInstanceLoads = rawGLTFLoads
                    .then((rawGLTF) => {
                    return GLTFInstance.prepare(rawGLTF);
                })
                    .then((preparedGLTF) => {
                    progressCallback(0.9);
                    return new GLTFInstance(preparedGLTF);
                })
                    .catch((reason => {
                    console.error(reason);
                    return new GLTFInstance();
                }));
                cache.set(url, gltfInstanceLoads);
            }
            await cache.get(url);
            preloaded.set(url, true);
            if (progressCallback) {
                progressCallback(1.0);
            }
        }
        async load(url, element, progressCallback = () => { }) {
            await this.preload(url, element, progressCallback);
            const gltf = await cache.get(url);
            const clone = await gltf.clone();
            this[$evictionPolicy].retain(url);
            clone.dispose = () => {
                this[$evictionPolicy].release(url);
            };
            return clone;
        }
    }
    CachingGLTFLoader[_a$8] = new CacheEvictionPolicy(CachingGLTFLoader);

    class CSS2DObject extends three.Object3D {

    	constructor( element = document.createElement( 'div' ) ) {

    		super();

    		this.isCSS2DObject = true;

    		this.element = element;

    		this.element.style.position = 'absolute';
    		this.element.style.userSelect = 'none';

    		this.element.setAttribute( 'draggable', false );

    		this.center = new three.Vector2( 0.5, 0.5 ); // ( 0, 0 ) is the lower left; ( 1, 1 ) is the top right

    		this.addEventListener( 'removed', function () {

    			this.traverse( function ( object ) {

    				if ( object.element instanceof Element && object.element.parentNode !== null ) {

    					object.element.parentNode.removeChild( object.element );

    				}

    			} );

    		} );

    	}

    	copy( source, recursive ) {

    		super.copy( source, recursive );

    		this.element = source.element.cloneNode( true );

    		this.center = source.center;

    		return this;

    	}

    }

    //

    const _vector = new three.Vector3();
    const _viewMatrix = new three.Matrix4();
    const _viewProjectionMatrix = new three.Matrix4();
    const _a$7 = new three.Vector3();
    const _b$7 = new three.Vector3();

    class CSS2DRenderer {

    	constructor( parameters = {} ) {

    		const _this = this;

    		let _width, _height;
    		let _widthHalf, _heightHalf;

    		const cache = {
    			objects: new WeakMap()
    		};

    		const domElement = parameters.element !== undefined ? parameters.element : document.createElement( 'div' );

    		domElement.style.overflow = 'hidden';

    		this.domElement = domElement;

    		this.getSize = function () {

    			return {
    				width: _width,
    				height: _height
    			};

    		};

    		this.render = function ( scene, camera ) {

    			if ( scene.matrixWorldAutoUpdate === true ) scene.updateMatrixWorld();
    			if ( camera.parent === null && camera.matrixWorldAutoUpdate === true ) camera.updateMatrixWorld();

    			_viewMatrix.copy( camera.matrixWorldInverse );
    			_viewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, _viewMatrix );

    			renderObject( scene, scene, camera );
    			zOrder( scene );

    		};

    		this.setSize = function ( width, height ) {

    			_width = width;
    			_height = height;

    			_widthHalf = _width / 2;
    			_heightHalf = _height / 2;

    			domElement.style.width = width + 'px';
    			domElement.style.height = height + 'px';

    		};

    		function renderObject( object, scene, camera ) {

    			if ( object.isCSS2DObject ) {

    				_vector.setFromMatrixPosition( object.matrixWorld );
    				_vector.applyMatrix4( _viewProjectionMatrix );

    				const visible = ( object.visible === true ) && ( _vector.z >= - 1 && _vector.z <= 1 ) && ( object.layers.test( camera.layers ) === true );
    				object.element.style.display = ( visible === true ) ? '' : 'none';

    				if ( visible === true ) {

    					object.onBeforeRender( _this, scene, camera );

    					const element = object.element;

    					element.style.transform = 'translate(' + ( - 100 * object.center.x ) + '%,' + ( - 100 * object.center.y ) + '%)' + 'translate(' + ( _vector.x * _widthHalf + _widthHalf ) + 'px,' + ( - _vector.y * _heightHalf + _heightHalf ) + 'px)';

    					if ( element.parentNode !== domElement ) {

    						domElement.appendChild( element );

    					}

    					object.onAfterRender( _this, scene, camera );

    				}

    				const objectData = {
    					distanceToCameraSquared: getDistanceToSquared( camera, object )
    				};

    				cache.objects.set( object, objectData );

    			}

    			for ( let i = 0, l = object.children.length; i < l; i ++ ) {

    				renderObject( object.children[ i ], scene, camera );

    			}

    		}

    		function getDistanceToSquared( object1, object2 ) {

    			_a$7.setFromMatrixPosition( object1.matrixWorld );
    			_b$7.setFromMatrixPosition( object2.matrixWorld );

    			return _a$7.distanceToSquared( _b$7 );

    		}

    		function filterAndFlatten( scene ) {

    			const result = [];

    			scene.traverse( function ( object ) {

    				if ( object.isCSS2DObject ) result.push( object );

    			} );

    			return result;

    		}

    		function zOrder( scene ) {

    			const sorted = filterAndFlatten( scene ).sort( function ( a, b ) {

    				if ( a.renderOrder !== b.renderOrder ) {

    					return b.renderOrder - a.renderOrder;

    				}

    				const distanceA = cache.objects.get( a ).distanceToCameraSquared;
    				const distanceB = cache.objects.get( b ).distanceToCameraSquared;

    				return distanceA - distanceB;

    			} );

    			const zMax = sorted.length;

    			for ( let i = 0, l = sorted.length; i < l; i ++ ) {

    				sorted[ i ].element.style.zIndex = zMax - i;

    			}

    		}

    	}

    }

    function reduceVertices( object, func, initialValue ) {

    	let value = initialValue;
    	const vertex = new three.Vector3();

    	object.updateWorldMatrix( true, true );

    	object.traverseVisible( ( child ) => {

    		const { geometry } = child;

    		if ( geometry !== undefined ) {

    			const { position } = geometry.attributes;

    			if ( position !== undefined ) {

    				for ( let i = 0, l = position.count; i < l; i ++ ) {

    					if ( child.isMesh ) {

    						child.getVertexPosition( i, vertex );

    					} else {

    						vertex.fromBufferAttribute( position, i );

    					}

    					if ( ! child.isSkinnedMesh ) {

    						vertex.applyMatrix4( child.matrixWorld );

    					}

    					value = func( value, vertex );

    				}

    			}

    		}

    	} );

    	return value;

    }

    let _renderer;
    let fullscreenQuadGeometry;
    let fullscreenQuadMaterial;
    let fullscreenQuad;

    function decompress( texture, maxTextureSize = Infinity, renderer = null ) {

    	if ( ! fullscreenQuadGeometry ) fullscreenQuadGeometry = new three.PlaneGeometry( 2, 2, 1, 1 );
    	if ( ! fullscreenQuadMaterial ) fullscreenQuadMaterial = new three.ShaderMaterial( {
    		uniforms: { blitTexture: new three.Uniform( texture ) },
    		vertexShader: `
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,
    		fragmentShader: `
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`
    	} );

    	fullscreenQuadMaterial.uniforms.blitTexture.value = texture;
    	fullscreenQuadMaterial.defines.IS_SRGB = texture.colorSpace == three.SRGBColorSpace;
    	fullscreenQuadMaterial.needsUpdate = true;

    	if ( ! fullscreenQuad ) {

    		fullscreenQuad = new three.Mesh( fullscreenQuadGeometry, fullscreenQuadMaterial );
    		fullscreenQuad.frustrumCulled = false;

    	}

    	const _camera = new three.PerspectiveCamera();
    	const _scene = new three.Scene();
    	_scene.add( fullscreenQuad );

    	if ( renderer === null ) {

    		renderer = _renderer = new three.WebGLRenderer( { antialias: false } );

    	}

    	const width = Math.min( texture.image.width, maxTextureSize );
    	const height = Math.min( texture.image.height, maxTextureSize );

    	renderer.setSize( width, height );
    	renderer.clear();
    	renderer.render( _scene, _camera );

    	const canvas = document.createElement( 'canvas' );
    	const context = canvas.getContext( '2d' );

    	canvas.width = width;
    	canvas.height = height;

    	context.drawImage( renderer.domElement, 0, 0, width, height );

    	const readableTexture = new three.CanvasTexture( canvas );

    	readableTexture.minFilter = texture.minFilter;
    	readableTexture.magFilter = texture.magFilter;
    	readableTexture.wrapS = texture.wrapS;
    	readableTexture.wrapT = texture.wrapT;
    	readableTexture.name = texture.name;

    	if ( _renderer ) {

    		_renderer.forceContextLoss();
    		_renderer.dispose();
    		_renderer = null;

    	}

    	return readableTexture;

    }

    /**
     * The KHR_mesh_quantization extension allows these extra attribute component types
     *
     * @see https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md#extending-mesh-attributes
     */
    const KHR_mesh_quantization_ExtraAttrTypes = {
    	POSITION: [
    		'byte',
    		'byte normalized',
    		'unsigned byte',
    		'unsigned byte normalized',
    		'short',
    		'short normalized',
    		'unsigned short',
    		'unsigned short normalized',
    	],
    	NORMAL: [
    		'byte normalized',
    		'short normalized',
    	],
    	TANGENT: [
    		'byte normalized',
    		'short normalized',
    	],
    	TEXCOORD: [
    		'byte',
    		'byte normalized',
    		'unsigned byte',
    		'short',
    		'short normalized',
    		'unsigned short',
    	],
    };


    class GLTFExporter {

    	constructor() {

    		this.pluginCallbacks = [];

    		this.register( function ( writer ) {

    			return new GLTFLightExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsUnlitExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsTransmissionExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsVolumeExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsIorExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsSpecularExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsClearcoatExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsIridescenceExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsSheenExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsAnisotropyExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsEmissiveStrengthExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMaterialsBumpExtension( writer );

    		} );

    		this.register( function ( writer ) {

    			return new GLTFMeshGpuInstancing( writer );

    		} );

    	}

    	register( callback ) {

    		if ( this.pluginCallbacks.indexOf( callback ) === - 1 ) {

    			this.pluginCallbacks.push( callback );

    		}

    		return this;

    	}

    	unregister( callback ) {

    		if ( this.pluginCallbacks.indexOf( callback ) !== - 1 ) {

    			this.pluginCallbacks.splice( this.pluginCallbacks.indexOf( callback ), 1 );

    		}

    		return this;

    	}

    	/**
    	 * Parse scenes and generate GLTF output
    	 * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
    	 * @param  {Function} onDone  Callback on completed
    	 * @param  {Function} onError  Callback on errors
    	 * @param  {Object} options options
    	 */
    	parse( input, onDone, onError, options ) {

    		const writer = new GLTFWriter();
    		const plugins = [];

    		for ( let i = 0, il = this.pluginCallbacks.length; i < il; i ++ ) {

    			plugins.push( this.pluginCallbacks[ i ]( writer ) );

    		}

    		writer.setPlugins( plugins );
    		writer.write( input, onDone, options ).catch( onError );

    	}

    	parseAsync( input, options ) {

    		const scope = this;

    		return new Promise( function ( resolve, reject ) {

    			scope.parse( input, resolve, reject, options );

    		} );

    	}

    }

    //------------------------------------------------------------------------------
    // Constants
    //------------------------------------------------------------------------------

    const WEBGL_CONSTANTS = {
    	POINTS: 0x0000,
    	LINES: 0x0001,
    	LINE_LOOP: 0x0002,
    	LINE_STRIP: 0x0003,
    	TRIANGLES: 0x0004,
    	TRIANGLE_STRIP: 0x0005,
    	TRIANGLE_FAN: 0x0006,

    	BYTE: 0x1400,
    	UNSIGNED_BYTE: 0x1401,
    	SHORT: 0x1402,
    	UNSIGNED_SHORT: 0x1403,
    	INT: 0x1404,
    	UNSIGNED_INT: 0x1405,
    	FLOAT: 0x1406,

    	ARRAY_BUFFER: 0x8892,
    	ELEMENT_ARRAY_BUFFER: 0x8893,

    	NEAREST: 0x2600,
    	LINEAR: 0x2601,
    	NEAREST_MIPMAP_NEAREST: 0x2700,
    	LINEAR_MIPMAP_NEAREST: 0x2701,
    	NEAREST_MIPMAP_LINEAR: 0x2702,
    	LINEAR_MIPMAP_LINEAR: 0x2703,

    	CLAMP_TO_EDGE: 33071,
    	MIRRORED_REPEAT: 33648,
    	REPEAT: 10497
    };

    const KHR_MESH_QUANTIZATION = 'KHR_mesh_quantization';

    const THREE_TO_WEBGL = {};

    THREE_TO_WEBGL[ three.NearestFilter ] = WEBGL_CONSTANTS.NEAREST;
    THREE_TO_WEBGL[ three.NearestMipmapNearestFilter ] = WEBGL_CONSTANTS.NEAREST_MIPMAP_NEAREST;
    THREE_TO_WEBGL[ three.NearestMipmapLinearFilter ] = WEBGL_CONSTANTS.NEAREST_MIPMAP_LINEAR;
    THREE_TO_WEBGL[ three.LinearFilter ] = WEBGL_CONSTANTS.LINEAR;
    THREE_TO_WEBGL[ three.LinearMipmapNearestFilter ] = WEBGL_CONSTANTS.LINEAR_MIPMAP_NEAREST;
    THREE_TO_WEBGL[ three.LinearMipmapLinearFilter ] = WEBGL_CONSTANTS.LINEAR_MIPMAP_LINEAR;

    THREE_TO_WEBGL[ three.ClampToEdgeWrapping ] = WEBGL_CONSTANTS.CLAMP_TO_EDGE;
    THREE_TO_WEBGL[ three.RepeatWrapping ] = WEBGL_CONSTANTS.REPEAT;
    THREE_TO_WEBGL[ three.MirroredRepeatWrapping ] = WEBGL_CONSTANTS.MIRRORED_REPEAT;

    const PATH_PROPERTIES = {
    	scale: 'scale',
    	position: 'translation',
    	quaternion: 'rotation',
    	morphTargetInfluences: 'weights'
    };

    const DEFAULT_SPECULAR_COLOR = new three.Color();

    // GLB constants
    // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#glb-file-format-specification

    const GLB_HEADER_BYTES = 12;
    const GLB_HEADER_MAGIC = 0x46546C67;
    const GLB_VERSION = 2;

    const GLB_CHUNK_PREFIX_BYTES = 8;
    const GLB_CHUNK_TYPE_JSON = 0x4E4F534A;
    const GLB_CHUNK_TYPE_BIN = 0x004E4942;

    //------------------------------------------------------------------------------
    // Utility functions
    //------------------------------------------------------------------------------

    /**
     * Compare two arrays
     * @param  {Array} array1 Array 1 to compare
     * @param  {Array} array2 Array 2 to compare
     * @return {Boolean}        Returns true if both arrays are equal
     */
    function equalArray( array1, array2 ) {

    	return ( array1.length === array2.length ) && array1.every( function ( element, index ) {

    		return element === array2[ index ];

    	} );

    }

    /**
     * Converts a string to an ArrayBuffer.
     * @param  {string} text
     * @return {ArrayBuffer}
     */
    function stringToArrayBuffer( text ) {

    	return new TextEncoder().encode( text ).buffer;

    }

    /**
     * Is identity matrix
     *
     * @param {Matrix4} matrix
     * @returns {Boolean} Returns true, if parameter is identity matrix
     */
    function isIdentityMatrix( matrix ) {

    	return equalArray( matrix.elements, [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] );

    }

    /**
     * Get the min and max vectors from the given attribute
     * @param  {BufferAttribute} attribute Attribute to find the min/max in range from start to start + count
     * @param  {Integer} start
     * @param  {Integer} count
     * @return {Object} Object containing the `min` and `max` values (As an array of attribute.itemSize components)
     */
    function getMinMax( attribute, start, count ) {

    	const output = {

    		min: new Array( attribute.itemSize ).fill( Number.POSITIVE_INFINITY ),
    		max: new Array( attribute.itemSize ).fill( Number.NEGATIVE_INFINITY )

    	};

    	for ( let i = start; i < start + count; i ++ ) {

    		for ( let a = 0; a < attribute.itemSize; a ++ ) {

    			let value;

    			if ( attribute.itemSize > 4 ) {

    				 // no support for interleaved data for itemSize > 4

    				value = attribute.array[ i * attribute.itemSize + a ];

    			} else {

    				if ( a === 0 ) value = attribute.getX( i );
    				else if ( a === 1 ) value = attribute.getY( i );
    				else if ( a === 2 ) value = attribute.getZ( i );
    				else if ( a === 3 ) value = attribute.getW( i );

    				if ( attribute.normalized === true ) {

    					value = three.MathUtils.normalize( value, attribute.array );

    				}

    			}

    			output.min[ a ] = Math.min( output.min[ a ], value );
    			output.max[ a ] = Math.max( output.max[ a ], value );

    		}

    	}

    	return output;

    }

    /**
     * Get the required size + padding for a buffer, rounded to the next 4-byte boundary.
     * https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#data-alignment
     *
     * @param {Integer} bufferSize The size the original buffer.
     * @returns {Integer} new buffer size with required padding.
     *
     */
    function getPaddedBufferSize( bufferSize ) {

    	return Math.ceil( bufferSize / 4 ) * 4;

    }

    /**
     * Returns a buffer aligned to 4-byte boundary.
     *
     * @param {ArrayBuffer} arrayBuffer Buffer to pad
     * @param {Integer} paddingByte (Optional)
     * @returns {ArrayBuffer} The same buffer if it's already aligned to 4-byte boundary or a new buffer
     */
    function getPaddedArrayBuffer( arrayBuffer, paddingByte = 0 ) {

    	const paddedLength = getPaddedBufferSize( arrayBuffer.byteLength );

    	if ( paddedLength !== arrayBuffer.byteLength ) {

    		const array = new Uint8Array( paddedLength );
    		array.set( new Uint8Array( arrayBuffer ) );

    		if ( paddingByte !== 0 ) {

    			for ( let i = arrayBuffer.byteLength; i < paddedLength; i ++ ) {

    				array[ i ] = paddingByte;

    			}

    		}

    		return array.buffer;

    	}

    	return arrayBuffer;

    }

    function getCanvas() {

    	if ( typeof document === 'undefined' && typeof OffscreenCanvas !== 'undefined' ) {

    		return new OffscreenCanvas( 1, 1 );

    	}

    	return document.createElement( 'canvas' );

    }

    function getToBlobPromise( canvas, mimeType ) {

    	if ( canvas.toBlob !== undefined ) {

    		return new Promise( ( resolve ) => canvas.toBlob( resolve, mimeType ) );

    	}

    	let quality;

    	// Blink's implementation of convertToBlob seems to default to a quality level of 100%
    	// Use the Blink default quality levels of toBlob instead so that file sizes are comparable.
    	if ( mimeType === 'image/jpeg' ) {

    		quality = 0.92;

    	} else if ( mimeType === 'image/webp' ) {

    		quality = 0.8;

    	}

    	return canvas.convertToBlob( {

    		type: mimeType,
    		quality: quality

    	} );

    }

    /**
     * Writer
     */
    class GLTFWriter {

    	constructor() {

    		this.plugins = [];

    		this.options = {};
    		this.pending = [];
    		this.buffers = [];

    		this.byteOffset = 0;
    		this.buffers = [];
    		this.nodeMap = new Map();
    		this.skins = [];

    		this.extensionsUsed = {};
    		this.extensionsRequired = {};

    		this.uids = new Map();
    		this.uid = 0;

    		this.json = {
    			asset: {
    				version: '2.0',
    				generator: 'THREE.GLTFExporter'
    			}
    		};

    		this.cache = {
    			meshes: new Map(),
    			attributes: new Map(),
    			attributesNormalized: new Map(),
    			materials: new Map(),
    			textures: new Map(),
    			images: new Map()
    		};

    	}

    	setPlugins( plugins ) {

    		this.plugins = plugins;

    	}

    	/**
    	 * Parse scenes and generate GLTF output
    	 * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
    	 * @param  {Function} onDone  Callback on completed
    	 * @param  {Object} options options
    	 */
    	async write( input, onDone, options = {} ) {

    		this.options = Object.assign( {
    			// default options
    			binary: false,
    			trs: false,
    			onlyVisible: true,
    			maxTextureSize: Infinity,
    			animations: [],
    			includeCustomExtensions: false
    		}, options );

    		if ( this.options.animations.length > 0 ) {

    			// Only TRS properties, and not matrices, may be targeted by animation.
    			this.options.trs = true;

    		}

    		this.processInput( input );

    		await Promise.all( this.pending );

    		const writer = this;
    		const buffers = writer.buffers;
    		const json = writer.json;
    		options = writer.options;

    		const extensionsUsed = writer.extensionsUsed;
    		const extensionsRequired = writer.extensionsRequired;

    		// Merge buffers.
    		const blob = new Blob( buffers, { type: 'application/octet-stream' } );

    		// Declare extensions.
    		const extensionsUsedList = Object.keys( extensionsUsed );
    		const extensionsRequiredList = Object.keys( extensionsRequired );

    		if ( extensionsUsedList.length > 0 ) json.extensionsUsed = extensionsUsedList;
    		if ( extensionsRequiredList.length > 0 ) json.extensionsRequired = extensionsRequiredList;

    		// Update bytelength of the single buffer.
    		if ( json.buffers && json.buffers.length > 0 ) json.buffers[ 0 ].byteLength = blob.size;

    		if ( options.binary === true ) {

    			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#glb-file-format-specification

    			const reader = new FileReader();
    			reader.readAsArrayBuffer( blob );
    			reader.onloadend = function () {

    				// Binary chunk.
    				const binaryChunk = getPaddedArrayBuffer( reader.result );
    				const binaryChunkPrefix = new DataView( new ArrayBuffer( GLB_CHUNK_PREFIX_BYTES ) );
    				binaryChunkPrefix.setUint32( 0, binaryChunk.byteLength, true );
    				binaryChunkPrefix.setUint32( 4, GLB_CHUNK_TYPE_BIN, true );

    				// JSON chunk.
    				const jsonChunk = getPaddedArrayBuffer( stringToArrayBuffer( JSON.stringify( json ) ), 0x20 );
    				const jsonChunkPrefix = new DataView( new ArrayBuffer( GLB_CHUNK_PREFIX_BYTES ) );
    				jsonChunkPrefix.setUint32( 0, jsonChunk.byteLength, true );
    				jsonChunkPrefix.setUint32( 4, GLB_CHUNK_TYPE_JSON, true );

    				// GLB header.
    				const header = new ArrayBuffer( GLB_HEADER_BYTES );
    				const headerView = new DataView( header );
    				headerView.setUint32( 0, GLB_HEADER_MAGIC, true );
    				headerView.setUint32( 4, GLB_VERSION, true );
    				const totalByteLength = GLB_HEADER_BYTES
    					+ jsonChunkPrefix.byteLength + jsonChunk.byteLength
    					+ binaryChunkPrefix.byteLength + binaryChunk.byteLength;
    				headerView.setUint32( 8, totalByteLength, true );

    				const glbBlob = new Blob( [
    					header,
    					jsonChunkPrefix,
    					jsonChunk,
    					binaryChunkPrefix,
    					binaryChunk
    				], { type: 'application/octet-stream' } );

    				const glbReader = new FileReader();
    				glbReader.readAsArrayBuffer( glbBlob );
    				glbReader.onloadend = function () {

    					onDone( glbReader.result );

    				};

    			};

    		} else {

    			if ( json.buffers && json.buffers.length > 0 ) {

    				const reader = new FileReader();
    				reader.readAsDataURL( blob );
    				reader.onloadend = function () {

    					const base64data = reader.result;
    					json.buffers[ 0 ].uri = base64data;
    					onDone( json );

    				};

    			} else {

    				onDone( json );

    			}

    		}


    	}

    	/**
    	 * Serializes a userData.
    	 *
    	 * @param {THREE.Object3D|THREE.Material} object
    	 * @param {Object} objectDef
    	 */
    	serializeUserData( object, objectDef ) {

    		if ( Object.keys( object.userData ).length === 0 ) return;

    		const options = this.options;
    		const extensionsUsed = this.extensionsUsed;

    		try {

    			const json = JSON.parse( JSON.stringify( object.userData ) );

    			if ( options.includeCustomExtensions && json.gltfExtensions ) {

    				if ( objectDef.extensions === undefined ) objectDef.extensions = {};

    				for ( const extensionName in json.gltfExtensions ) {

    					objectDef.extensions[ extensionName ] = json.gltfExtensions[ extensionName ];
    					extensionsUsed[ extensionName ] = true;

    				}

    				delete json.gltfExtensions;

    			}

    			if ( Object.keys( json ).length > 0 ) objectDef.extras = json;

    		} catch ( error ) {

    			console.warn( 'THREE.GLTFExporter: userData of \'' + object.name + '\' ' +
    				'won\'t be serialized because of JSON.stringify error - ' + error.message );

    		}

    	}

    	/**
    	 * Returns ids for buffer attributes.
    	 * @param  {Object} object
    	 * @return {Integer}
    	 */
    	getUID( attribute, isRelativeCopy = false ) {

    		if ( this.uids.has( attribute ) === false ) {

    			const uids = new Map();

    			uids.set( true, this.uid ++ );
    			uids.set( false, this.uid ++ );

    			this.uids.set( attribute, uids );

    		}

    		const uids = this.uids.get( attribute );

    		return uids.get( isRelativeCopy );

    	}

    	/**
    	 * Checks if normal attribute values are normalized.
    	 *
    	 * @param {BufferAttribute} normal
    	 * @returns {Boolean}
    	 */
    	isNormalizedNormalAttribute( normal ) {

    		const cache = this.cache;

    		if ( cache.attributesNormalized.has( normal ) ) return false;

    		const v = new three.Vector3();

    		for ( let i = 0, il = normal.count; i < il; i ++ ) {

    			// 0.0005 is from glTF-validator
    			if ( Math.abs( v.fromBufferAttribute( normal, i ).length() - 1.0 ) > 0.0005 ) return false;

    		}

    		return true;

    	}

    	/**
    	 * Creates normalized normal buffer attribute.
    	 *
    	 * @param {BufferAttribute} normal
    	 * @returns {BufferAttribute}
    	 *
    	 */
    	createNormalizedNormalAttribute( normal ) {

    		const cache = this.cache;

    		if ( cache.attributesNormalized.has( normal ) )	return cache.attributesNormalized.get( normal );

    		const attribute = normal.clone();
    		const v = new three.Vector3();

    		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

    			v.fromBufferAttribute( attribute, i );

    			if ( v.x === 0 && v.y === 0 && v.z === 0 ) {

    				// if values can't be normalized set (1, 0, 0)
    				v.setX( 1.0 );

    			} else {

    				v.normalize();

    			}

    			attribute.setXYZ( i, v.x, v.y, v.z );

    		}

    		cache.attributesNormalized.set( normal, attribute );

    		return attribute;

    	}

    	/**
    	 * Applies a texture transform, if present, to the map definition. Requires
    	 * the KHR_texture_transform extension.
    	 *
    	 * @param {Object} mapDef
    	 * @param {THREE.Texture} texture
    	 */
    	applyTextureTransform( mapDef, texture ) {

    		let didTransform = false;
    		const transformDef = {};

    		if ( texture.offset.x !== 0 || texture.offset.y !== 0 ) {

    			transformDef.offset = texture.offset.toArray();
    			didTransform = true;

    		}

    		if ( texture.rotation !== 0 ) {

    			transformDef.rotation = texture.rotation;
    			didTransform = true;

    		}

    		if ( texture.repeat.x !== 1 || texture.repeat.y !== 1 ) {

    			transformDef.scale = texture.repeat.toArray();
    			didTransform = true;

    		}

    		if ( didTransform ) {

    			mapDef.extensions = mapDef.extensions || {};
    			mapDef.extensions[ 'KHR_texture_transform' ] = transformDef;
    			this.extensionsUsed[ 'KHR_texture_transform' ] = true;

    		}

    	}

    	buildMetalRoughTexture( metalnessMap, roughnessMap ) {

    		if ( metalnessMap === roughnessMap ) return metalnessMap;

    		function getEncodingConversion( map ) {

    			if ( map.colorSpace === three.SRGBColorSpace ) {

    				return function SRGBToLinear( c ) {

    					return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

    				};

    			}

    			return function LinearToLinear( c ) {

    				return c;

    			};

    		}

    		console.warn( 'THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.' );

    		if ( metalnessMap instanceof three.CompressedTexture ) {

    			metalnessMap = decompress( metalnessMap );

    		}

    		if ( roughnessMap instanceof three.CompressedTexture ) {

    			roughnessMap = decompress( roughnessMap );

    		}

    		const metalness = metalnessMap ? metalnessMap.image : null;
    		const roughness = roughnessMap ? roughnessMap.image : null;

    		const width = Math.max( metalness ? metalness.width : 0, roughness ? roughness.width : 0 );
    		const height = Math.max( metalness ? metalness.height : 0, roughness ? roughness.height : 0 );

    		const canvas = getCanvas();
    		canvas.width = width;
    		canvas.height = height;

    		const context = canvas.getContext( '2d' );
    		context.fillStyle = '#00ffff';
    		context.fillRect( 0, 0, width, height );

    		const composite = context.getImageData( 0, 0, width, height );

    		if ( metalness ) {

    			context.drawImage( metalness, 0, 0, width, height );

    			const convert = getEncodingConversion( metalnessMap );
    			const data = context.getImageData( 0, 0, width, height ).data;

    			for ( let i = 2; i < data.length; i += 4 ) {

    				composite.data[ i ] = convert( data[ i ] / 256 ) * 256;

    			}

    		}

    		if ( roughness ) {

    			context.drawImage( roughness, 0, 0, width, height );

    			const convert = getEncodingConversion( roughnessMap );
    			const data = context.getImageData( 0, 0, width, height ).data;

    			for ( let i = 1; i < data.length; i += 4 ) {

    				composite.data[ i ] = convert( data[ i ] / 256 ) * 256;

    			}

    		}

    		context.putImageData( composite, 0, 0 );

    		//

    		const reference = metalnessMap || roughnessMap;

    		const texture = reference.clone();

    		texture.source = new three.Source( canvas );
    		texture.colorSpace = three.NoColorSpace;
    		texture.channel = ( metalnessMap || roughnessMap ).channel;

    		if ( metalnessMap && roughnessMap && metalnessMap.channel !== roughnessMap.channel ) {

    			console.warn( 'THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match.' );

    		}

    		return texture;

    	}

    	/**
    	 * Process a buffer to append to the default one.
    	 * @param  {ArrayBuffer} buffer
    	 * @return {Integer}
    	 */
    	processBuffer( buffer ) {

    		const json = this.json;
    		const buffers = this.buffers;

    		if ( ! json.buffers ) json.buffers = [ { byteLength: 0 } ];

    		// All buffers are merged before export.
    		buffers.push( buffer );

    		return 0;

    	}

    	/**
    	 * Process and generate a BufferView
    	 * @param  {BufferAttribute} attribute
    	 * @param  {number} componentType
    	 * @param  {number} start
    	 * @param  {number} count
    	 * @param  {number} target (Optional) Target usage of the BufferView
    	 * @return {Object}
    	 */
    	processBufferView( attribute, componentType, start, count, target ) {

    		const json = this.json;

    		if ( ! json.bufferViews ) json.bufferViews = [];

    		// Create a new dataview and dump the attribute's array into it

    		let componentSize;

    		switch ( componentType ) {

    			case WEBGL_CONSTANTS.BYTE:
    			case WEBGL_CONSTANTS.UNSIGNED_BYTE:

    				componentSize = 1;

    				break;

    			case WEBGL_CONSTANTS.SHORT:
    			case WEBGL_CONSTANTS.UNSIGNED_SHORT:

    				componentSize = 2;

    				break;

    			default:

    				componentSize = 4;

    		}

    		const byteLength = getPaddedBufferSize( count * attribute.itemSize * componentSize );
    		const dataView = new DataView( new ArrayBuffer( byteLength ) );
    		let offset = 0;

    		for ( let i = start; i < start + count; i ++ ) {

    			for ( let a = 0; a < attribute.itemSize; a ++ ) {

    				let value;

    				if ( attribute.itemSize > 4 ) {

    					 // no support for interleaved data for itemSize > 4

    					value = attribute.array[ i * attribute.itemSize + a ];

    				} else {

    					if ( a === 0 ) value = attribute.getX( i );
    					else if ( a === 1 ) value = attribute.getY( i );
    					else if ( a === 2 ) value = attribute.getZ( i );
    					else if ( a === 3 ) value = attribute.getW( i );

    					if ( attribute.normalized === true ) {

    						value = three.MathUtils.normalize( value, attribute.array );

    					}

    				}

    				if ( componentType === WEBGL_CONSTANTS.FLOAT ) {

    					dataView.setFloat32( offset, value, true );

    				} else if ( componentType === WEBGL_CONSTANTS.INT ) {

    					dataView.setInt32( offset, value, true );

    				} else if ( componentType === WEBGL_CONSTANTS.UNSIGNED_INT ) {

    					dataView.setUint32( offset, value, true );

    				} else if ( componentType === WEBGL_CONSTANTS.SHORT ) {

    					dataView.setInt16( offset, value, true );

    				} else if ( componentType === WEBGL_CONSTANTS.UNSIGNED_SHORT ) {

    					dataView.setUint16( offset, value, true );

    				} else if ( componentType === WEBGL_CONSTANTS.BYTE ) {

    					dataView.setInt8( offset, value );

    				} else if ( componentType === WEBGL_CONSTANTS.UNSIGNED_BYTE ) {

    					dataView.setUint8( offset, value );

    				}

    				offset += componentSize;

    			}

    		}

    		const bufferViewDef = {

    			buffer: this.processBuffer( dataView.buffer ),
    			byteOffset: this.byteOffset,
    			byteLength: byteLength

    		};

    		if ( target !== undefined ) bufferViewDef.target = target;

    		if ( target === WEBGL_CONSTANTS.ARRAY_BUFFER ) {

    			// Only define byteStride for vertex attributes.
    			bufferViewDef.byteStride = attribute.itemSize * componentSize;

    		}

    		this.byteOffset += byteLength;

    		json.bufferViews.push( bufferViewDef );

    		// @TODO Merge bufferViews where possible.
    		const output = {

    			id: json.bufferViews.length - 1,
    			byteLength: 0

    		};

    		return output;

    	}

    	/**
    	 * Process and generate a BufferView from an image Blob.
    	 * @param {Blob} blob
    	 * @return {Promise<Integer>}
    	 */
    	processBufferViewImage( blob ) {

    		const writer = this;
    		const json = writer.json;

    		if ( ! json.bufferViews ) json.bufferViews = [];

    		return new Promise( function ( resolve ) {

    			const reader = new FileReader();
    			reader.readAsArrayBuffer( blob );
    			reader.onloadend = function () {

    				const buffer = getPaddedArrayBuffer( reader.result );

    				const bufferViewDef = {
    					buffer: writer.processBuffer( buffer ),
    					byteOffset: writer.byteOffset,
    					byteLength: buffer.byteLength
    				};

    				writer.byteOffset += buffer.byteLength;
    				resolve( json.bufferViews.push( bufferViewDef ) - 1 );

    			};

    		} );

    	}

    	/**
    	 * Process attribute to generate an accessor
    	 * @param  {BufferAttribute} attribute Attribute to process
    	 * @param  {THREE.BufferGeometry} geometry (Optional) Geometry used for truncated draw range
    	 * @param  {Integer} start (Optional)
    	 * @param  {Integer} count (Optional)
    	 * @return {Integer|null} Index of the processed accessor on the "accessors" array
    	 */
    	processAccessor( attribute, geometry, start, count ) {

    		const json = this.json;

    		const types = {

    			1: 'SCALAR',
    			2: 'VEC2',
    			3: 'VEC3',
    			4: 'VEC4',
    			9: 'MAT3',
    			16: 'MAT4'

    		};

    		let componentType;

    		// Detect the component type of the attribute array
    		if ( attribute.array.constructor === Float32Array ) {

    			componentType = WEBGL_CONSTANTS.FLOAT;

    		} else if ( attribute.array.constructor === Int32Array ) {

    			componentType = WEBGL_CONSTANTS.INT;

    		} else if ( attribute.array.constructor === Uint32Array ) {

    			componentType = WEBGL_CONSTANTS.UNSIGNED_INT;

    		} else if ( attribute.array.constructor === Int16Array ) {

    			componentType = WEBGL_CONSTANTS.SHORT;

    		} else if ( attribute.array.constructor === Uint16Array ) {

    			componentType = WEBGL_CONSTANTS.UNSIGNED_SHORT;

    		} else if ( attribute.array.constructor === Int8Array ) {

    			componentType = WEBGL_CONSTANTS.BYTE;

    		} else if ( attribute.array.constructor === Uint8Array ) {

    			componentType = WEBGL_CONSTANTS.UNSIGNED_BYTE;

    		} else {

    			throw new Error( 'THREE.GLTFExporter: Unsupported bufferAttribute component type: ' + attribute.array.constructor.name );

    		}

    		if ( start === undefined ) start = 0;
    		if ( count === undefined || count === Infinity ) count = attribute.count;

    		// Skip creating an accessor if the attribute doesn't have data to export
    		if ( count === 0 ) return null;

    		const minMax = getMinMax( attribute, start, count );
    		let bufferViewTarget;

    		// If geometry isn't provided, don't infer the target usage of the bufferView. For
    		// animation samplers, target must not be set.
    		if ( geometry !== undefined ) {

    			bufferViewTarget = attribute === geometry.index ? WEBGL_CONSTANTS.ELEMENT_ARRAY_BUFFER : WEBGL_CONSTANTS.ARRAY_BUFFER;

    		}

    		const bufferView = this.processBufferView( attribute, componentType, start, count, bufferViewTarget );

    		const accessorDef = {

    			bufferView: bufferView.id,
    			byteOffset: bufferView.byteOffset,
    			componentType: componentType,
    			count: count,
    			max: minMax.max,
    			min: minMax.min,
    			type: types[ attribute.itemSize ]

    		};

    		if ( attribute.normalized === true ) accessorDef.normalized = true;
    		if ( ! json.accessors ) json.accessors = [];

    		return json.accessors.push( accessorDef ) - 1;

    	}

    	/**
    	 * Process image
    	 * @param  {Image} image to process
    	 * @param  {Integer} format of the image (RGBAFormat)
    	 * @param  {Boolean} flipY before writing out the image
    	 * @param  {String} mimeType export format
    	 * @return {Integer}     Index of the processed texture in the "images" array
    	 */
    	processImage( image, format, flipY, mimeType = 'image/png' ) {

    		if ( image !== null ) {

    			const writer = this;
    			const cache = writer.cache;
    			const json = writer.json;
    			const options = writer.options;
    			const pending = writer.pending;

    			if ( ! cache.images.has( image ) ) cache.images.set( image, {} );

    			const cachedImages = cache.images.get( image );

    			const key = mimeType + ':flipY/' + flipY.toString();

    			if ( cachedImages[ key ] !== undefined ) return cachedImages[ key ];

    			if ( ! json.images ) json.images = [];

    			const imageDef = { mimeType: mimeType };

    			const canvas = getCanvas();

    			canvas.width = Math.min( image.width, options.maxTextureSize );
    			canvas.height = Math.min( image.height, options.maxTextureSize );

    			const ctx = canvas.getContext( '2d' );

    			if ( flipY === true ) {

    				ctx.translate( 0, canvas.height );
    				ctx.scale( 1, - 1 );

    			}

    			if ( image.data !== undefined ) { // THREE.DataTexture

    				if ( format !== three.RGBAFormat ) {

    					console.error( 'GLTFExporter: Only RGBAFormat is supported.', format );

    				}

    				if ( image.width > options.maxTextureSize || image.height > options.maxTextureSize ) {

    					console.warn( 'GLTFExporter: Image size is bigger than maxTextureSize', image );

    				}

    				const data = new Uint8ClampedArray( image.height * image.width * 4 );

    				for ( let i = 0; i < data.length; i += 4 ) {

    					data[ i + 0 ] = image.data[ i + 0 ];
    					data[ i + 1 ] = image.data[ i + 1 ];
    					data[ i + 2 ] = image.data[ i + 2 ];
    					data[ i + 3 ] = image.data[ i + 3 ];

    				}

    				ctx.putImageData( new ImageData( data, image.width, image.height ), 0, 0 );

    			} else {

    				ctx.drawImage( image, 0, 0, canvas.width, canvas.height );

    			}

    			if ( options.binary === true ) {

    				pending.push(

    					getToBlobPromise( canvas, mimeType )
    						.then( blob => writer.processBufferViewImage( blob ) )
    						.then( bufferViewIndex => {

    							imageDef.bufferView = bufferViewIndex;

    						} )

    				);

    			} else {

    				if ( canvas.toDataURL !== undefined ) {

    					imageDef.uri = canvas.toDataURL( mimeType );

    				} else {

    					pending.push(

    						getToBlobPromise( canvas, mimeType )
    							.then( blob => new FileReader().readAsDataURL( blob ) )
    							.then( dataURL => {

    								imageDef.uri = dataURL;

    							} )

    					);

    				}

    			}

    			const index = json.images.push( imageDef ) - 1;
    			cachedImages[ key ] = index;
    			return index;

    		} else {

    			throw new Error( 'THREE.GLTFExporter: No valid image data found. Unable to process texture.' );

    		}

    	}

    	/**
    	 * Process sampler
    	 * @param  {Texture} map Texture to process
    	 * @return {Integer}     Index of the processed texture in the "samplers" array
    	 */
    	processSampler( map ) {

    		const json = this.json;

    		if ( ! json.samplers ) json.samplers = [];

    		const samplerDef = {
    			magFilter: THREE_TO_WEBGL[ map.magFilter ],
    			minFilter: THREE_TO_WEBGL[ map.minFilter ],
    			wrapS: THREE_TO_WEBGL[ map.wrapS ],
    			wrapT: THREE_TO_WEBGL[ map.wrapT ]
    		};

    		return json.samplers.push( samplerDef ) - 1;

    	}

    	/**
    	 * Process texture
    	 * @param  {Texture} map Map to process
    	 * @return {Integer} Index of the processed texture in the "textures" array
    	 */
    	processTexture( map ) {

    		const writer = this;
    		const options = writer.options;
    		const cache = this.cache;
    		const json = this.json;

    		if ( cache.textures.has( map ) ) return cache.textures.get( map );

    		if ( ! json.textures ) json.textures = [];

    		// make non-readable textures (e.g. CompressedTexture) readable by blitting them into a new texture
    		if ( map instanceof three.CompressedTexture ) {

    			map = decompress( map, options.maxTextureSize );

    		}

    		let mimeType = map.userData.mimeType;

    		if ( mimeType === 'image/webp' ) mimeType = 'image/png';

    		const textureDef = {
    			sampler: this.processSampler( map ),
    			source: this.processImage( map.image, map.format, map.flipY, mimeType )
    		};

    		if ( map.name ) textureDef.name = map.name;

    		this._invokeAll( function ( ext ) {

    			ext.writeTexture && ext.writeTexture( map, textureDef );

    		} );

    		const index = json.textures.push( textureDef ) - 1;
    		cache.textures.set( map, index );
    		return index;

    	}

    	/**
    	 * Process material
    	 * @param  {THREE.Material} material Material to process
    	 * @return {Integer|null} Index of the processed material in the "materials" array
    	 */
    	processMaterial( material ) {

    		const cache = this.cache;
    		const json = this.json;

    		if ( cache.materials.has( material ) ) return cache.materials.get( material );

    		if ( material.isShaderMaterial ) {

    			console.warn( 'GLTFExporter: THREE.ShaderMaterial not supported.' );
    			return null;

    		}

    		if ( ! json.materials ) json.materials = [];

    		// @QUESTION Should we avoid including any attribute that has the default value?
    		const materialDef = {	pbrMetallicRoughness: {} };

    		if ( material.isMeshStandardMaterial !== true && material.isMeshBasicMaterial !== true ) {

    			console.warn( 'GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.' );

    		}

    		// pbrMetallicRoughness.baseColorFactor
    		const color = material.color.toArray().concat( [ material.opacity ] );

    		if ( ! equalArray( color, [ 1, 1, 1, 1 ] ) ) {

    			materialDef.pbrMetallicRoughness.baseColorFactor = color;

    		}

    		if ( material.isMeshStandardMaterial ) {

    			materialDef.pbrMetallicRoughness.metallicFactor = material.metalness;
    			materialDef.pbrMetallicRoughness.roughnessFactor = material.roughness;

    		} else {

    			materialDef.pbrMetallicRoughness.metallicFactor = 0.5;
    			materialDef.pbrMetallicRoughness.roughnessFactor = 0.5;

    		}

    		// pbrMetallicRoughness.metallicRoughnessTexture
    		if ( material.metalnessMap || material.roughnessMap ) {

    			const metalRoughTexture = this.buildMetalRoughTexture( material.metalnessMap, material.roughnessMap );

    			const metalRoughMapDef = {
    				index: this.processTexture( metalRoughTexture ),
    				channel: metalRoughTexture.channel
    			};
    			this.applyTextureTransform( metalRoughMapDef, metalRoughTexture );
    			materialDef.pbrMetallicRoughness.metallicRoughnessTexture = metalRoughMapDef;

    		}

    		// pbrMetallicRoughness.baseColorTexture
    		if ( material.map ) {

    			const baseColorMapDef = {
    				index: this.processTexture( material.map ),
    				texCoord: material.map.channel
    			};
    			this.applyTextureTransform( baseColorMapDef, material.map );
    			materialDef.pbrMetallicRoughness.baseColorTexture = baseColorMapDef;

    		}

    		if ( material.emissive ) {

    			const emissive = material.emissive;
    			const maxEmissiveComponent = Math.max( emissive.r, emissive.g, emissive.b );

    			if ( maxEmissiveComponent > 0 ) {

    				materialDef.emissiveFactor = material.emissive.toArray();

    			}

    			// emissiveTexture
    			if ( material.emissiveMap ) {

    				const emissiveMapDef = {
    					index: this.processTexture( material.emissiveMap ),
    					texCoord: material.emissiveMap.channel
    				};
    				this.applyTextureTransform( emissiveMapDef, material.emissiveMap );
    				materialDef.emissiveTexture = emissiveMapDef;

    			}

    		}

    		// normalTexture
    		if ( material.normalMap ) {

    			const normalMapDef = {
    				index: this.processTexture( material.normalMap ),
    				texCoord: material.normalMap.channel
    			};

    			if ( material.normalScale && material.normalScale.x !== 1 ) {

    				// glTF normal scale is univariate. Ignore `y`, which may be flipped.
    				// Context: https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
    				normalMapDef.scale = material.normalScale.x;

    			}

    			this.applyTextureTransform( normalMapDef, material.normalMap );
    			materialDef.normalTexture = normalMapDef;

    		}

    		// occlusionTexture
    		if ( material.aoMap ) {

    			const occlusionMapDef = {
    				index: this.processTexture( material.aoMap ),
    				texCoord: material.aoMap.channel
    			};

    			if ( material.aoMapIntensity !== 1.0 ) {

    				occlusionMapDef.strength = material.aoMapIntensity;

    			}

    			this.applyTextureTransform( occlusionMapDef, material.aoMap );
    			materialDef.occlusionTexture = occlusionMapDef;

    		}

    		// alphaMode
    		if ( material.transparent ) {

    			materialDef.alphaMode = 'BLEND';

    		} else {

    			if ( material.alphaTest > 0.0 ) {

    				materialDef.alphaMode = 'MASK';
    				materialDef.alphaCutoff = material.alphaTest;

    			}

    		}

    		// doubleSided
    		if ( material.side === three.DoubleSide ) materialDef.doubleSided = true;
    		if ( material.name !== '' ) materialDef.name = material.name;

    		this.serializeUserData( material, materialDef );

    		this._invokeAll( function ( ext ) {

    			ext.writeMaterial && ext.writeMaterial( material, materialDef );

    		} );

    		const index = json.materials.push( materialDef ) - 1;
    		cache.materials.set( material, index );
    		return index;

    	}

    	/**
    	 * Process mesh
    	 * @param  {THREE.Mesh} mesh Mesh to process
    	 * @return {Integer|null} Index of the processed mesh in the "meshes" array
    	 */
    	processMesh( mesh ) {

    		const cache = this.cache;
    		const json = this.json;

    		const meshCacheKeyParts = [ mesh.geometry.uuid ];

    		if ( Array.isArray( mesh.material ) ) {

    			for ( let i = 0, l = mesh.material.length; i < l; i ++ ) {

    				meshCacheKeyParts.push( mesh.material[ i ].uuid	);

    			}

    		} else {

    			meshCacheKeyParts.push( mesh.material.uuid );

    		}

    		const meshCacheKey = meshCacheKeyParts.join( ':' );

    		if ( cache.meshes.has( meshCacheKey ) ) return cache.meshes.get( meshCacheKey );

    		const geometry = mesh.geometry;

    		let mode;

    		// Use the correct mode
    		if ( mesh.isLineSegments ) {

    			mode = WEBGL_CONSTANTS.LINES;

    		} else if ( mesh.isLineLoop ) {

    			mode = WEBGL_CONSTANTS.LINE_LOOP;

    		} else if ( mesh.isLine ) {

    			mode = WEBGL_CONSTANTS.LINE_STRIP;

    		} else if ( mesh.isPoints ) {

    			mode = WEBGL_CONSTANTS.POINTS;

    		} else {

    			mode = mesh.material.wireframe ? WEBGL_CONSTANTS.LINES : WEBGL_CONSTANTS.TRIANGLES;

    		}

    		const meshDef = {};
    		const attributes = {};
    		const primitives = [];
    		const targets = [];

    		// Conversion between attributes names in threejs and gltf spec
    		const nameConversion = {
    			uv: 'TEXCOORD_0',
    			uv1: 'TEXCOORD_1',
    			uv2: 'TEXCOORD_2',
    			uv3: 'TEXCOORD_3',
    			color: 'COLOR_0',
    			skinWeight: 'WEIGHTS_0',
    			skinIndex: 'JOINTS_0'
    		};

    		const originalNormal = geometry.getAttribute( 'normal' );

    		if ( originalNormal !== undefined && ! this.isNormalizedNormalAttribute( originalNormal ) ) {

    			console.warn( 'THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one.' );

    			geometry.setAttribute( 'normal', this.createNormalizedNormalAttribute( originalNormal ) );

    		}

    		// @QUESTION Detect if .vertexColors = true?
    		// For every attribute create an accessor
    		let modifiedAttribute = null;

    		for ( let attributeName in geometry.attributes ) {

    			// Ignore morph target attributes, which are exported later.
    			if ( attributeName.slice( 0, 5 ) === 'morph' ) continue;

    			const attribute = geometry.attributes[ attributeName ];
    			attributeName = nameConversion[ attributeName ] || attributeName.toUpperCase();

    			// Prefix all geometry attributes except the ones specifically
    			// listed in the spec; non-spec attributes are considered custom.
    			const validVertexAttributes =
    					/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/;

    			if ( ! validVertexAttributes.test( attributeName ) ) attributeName = '_' + attributeName;

    			if ( cache.attributes.has( this.getUID( attribute ) ) ) {

    				attributes[ attributeName ] = cache.attributes.get( this.getUID( attribute ) );
    				continue;

    			}

    			// JOINTS_0 must be UNSIGNED_BYTE or UNSIGNED_SHORT.
    			modifiedAttribute = null;
    			const array = attribute.array;

    			if ( attributeName === 'JOINTS_0' &&
    				! ( array instanceof Uint16Array ) &&
    				! ( array instanceof Uint8Array ) ) {

    				console.warn( 'GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.' );
    				modifiedAttribute = new three.BufferAttribute( new Uint16Array( array ), attribute.itemSize, attribute.normalized );

    			}

    			const accessor = this.processAccessor( modifiedAttribute || attribute, geometry );

    			if ( accessor !== null ) {

    				if ( ! attributeName.startsWith( '_' ) ) {

    					this.detectMeshQuantization( attributeName, attribute );

    				}

    				attributes[ attributeName ] = accessor;
    				cache.attributes.set( this.getUID( attribute ), accessor );

    			}

    		}

    		if ( originalNormal !== undefined ) geometry.setAttribute( 'normal', originalNormal );

    		// Skip if no exportable attributes found
    		if ( Object.keys( attributes ).length === 0 ) return null;

    		// Morph targets
    		if ( mesh.morphTargetInfluences !== undefined && mesh.morphTargetInfluences.length > 0 ) {

    			const weights = [];
    			const targetNames = [];
    			const reverseDictionary = {};

    			if ( mesh.morphTargetDictionary !== undefined ) {

    				for ( const key in mesh.morphTargetDictionary ) {

    					reverseDictionary[ mesh.morphTargetDictionary[ key ] ] = key;

    				}

    			}

    			for ( let i = 0; i < mesh.morphTargetInfluences.length; ++ i ) {

    				const target = {};
    				let warned = false;

    				for ( const attributeName in geometry.morphAttributes ) {

    					// glTF 2.0 morph supports only POSITION/NORMAL/TANGENT.
    					// Three.js doesn't support TANGENT yet.

    					if ( attributeName !== 'position' && attributeName !== 'normal' ) {

    						if ( ! warned ) {

    							console.warn( 'GLTFExporter: Only POSITION and NORMAL morph are supported.' );
    							warned = true;

    						}

    						continue;

    					}

    					const attribute = geometry.morphAttributes[ attributeName ][ i ];
    					const gltfAttributeName = attributeName.toUpperCase();

    					// Three.js morph attribute has absolute values while the one of glTF has relative values.
    					//
    					// glTF 2.0 Specification:
    					// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#morph-targets

    					const baseAttribute = geometry.attributes[ attributeName ];

    					if ( cache.attributes.has( this.getUID( attribute, true ) ) ) {

    						target[ gltfAttributeName ] = cache.attributes.get( this.getUID( attribute, true ) );
    						continue;

    					}

    					// Clones attribute not to override
    					const relativeAttribute = attribute.clone();

    					if ( ! geometry.morphTargetsRelative ) {

    						for ( let j = 0, jl = attribute.count; j < jl; j ++ ) {

    							for ( let a = 0; a < attribute.itemSize; a ++ ) {

    								if ( a === 0 ) relativeAttribute.setX( j, attribute.getX( j ) - baseAttribute.getX( j ) );
    								if ( a === 1 ) relativeAttribute.setY( j, attribute.getY( j ) - baseAttribute.getY( j ) );
    								if ( a === 2 ) relativeAttribute.setZ( j, attribute.getZ( j ) - baseAttribute.getZ( j ) );
    								if ( a === 3 ) relativeAttribute.setW( j, attribute.getW( j ) - baseAttribute.getW( j ) );

    							}

    						}

    					}

    					target[ gltfAttributeName ] = this.processAccessor( relativeAttribute, geometry );
    					cache.attributes.set( this.getUID( baseAttribute, true ), target[ gltfAttributeName ] );

    				}

    				targets.push( target );

    				weights.push( mesh.morphTargetInfluences[ i ] );

    				if ( mesh.morphTargetDictionary !== undefined ) targetNames.push( reverseDictionary[ i ] );

    			}

    			meshDef.weights = weights;

    			if ( targetNames.length > 0 ) {

    				meshDef.extras = {};
    				meshDef.extras.targetNames = targetNames;

    			}

    		}

    		const isMultiMaterial = Array.isArray( mesh.material );

    		if ( isMultiMaterial && geometry.groups.length === 0 ) return null;

    		let didForceIndices = false;

    		if ( isMultiMaterial && geometry.index === null ) {

    			const indices = [];

    			for ( let i = 0, il = geometry.attributes.position.count; i < il; i ++ ) {

    				indices[ i ] = i;

    			}

    			geometry.setIndex( indices );

    			didForceIndices = true;

    		}

    		const materials = isMultiMaterial ? mesh.material : [ mesh.material ];
    		const groups = isMultiMaterial ? geometry.groups : [ { materialIndex: 0, start: undefined, count: undefined } ];

    		for ( let i = 0, il = groups.length; i < il; i ++ ) {

    			const primitive = {
    				mode: mode,
    				attributes: attributes,
    			};

    			this.serializeUserData( geometry, primitive );

    			if ( targets.length > 0 ) primitive.targets = targets;

    			if ( geometry.index !== null ) {

    				let cacheKey = this.getUID( geometry.index );

    				if ( groups[ i ].start !== undefined || groups[ i ].count !== undefined ) {

    					cacheKey += ':' + groups[ i ].start + ':' + groups[ i ].count;

    				}

    				if ( cache.attributes.has( cacheKey ) ) {

    					primitive.indices = cache.attributes.get( cacheKey );

    				} else {

    					primitive.indices = this.processAccessor( geometry.index, geometry, groups[ i ].start, groups[ i ].count );
    					cache.attributes.set( cacheKey, primitive.indices );

    				}

    				if ( primitive.indices === null ) delete primitive.indices;

    			}

    			const material = this.processMaterial( materials[ groups[ i ].materialIndex ] );

    			if ( material !== null ) primitive.material = material;

    			primitives.push( primitive );

    		}

    		if ( didForceIndices === true ) {

    			geometry.setIndex( null );

    		}

    		meshDef.primitives = primitives;

    		if ( ! json.meshes ) json.meshes = [];

    		this._invokeAll( function ( ext ) {

    			ext.writeMesh && ext.writeMesh( mesh, meshDef );

    		} );

    		const index = json.meshes.push( meshDef ) - 1;
    		cache.meshes.set( meshCacheKey, index );
    		return index;

    	}

    	/**
    	 * If a vertex attribute with a
    	 * [non-standard data type](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#meshes-overview)
    	 * is used, it is checked whether it is a valid data type according to the
    	 * [KHR_mesh_quantization](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md)
    	 * extension.
    	 * In this case the extension is automatically added to the list of used extensions.
    	 *
    	 * @param {string} attributeName
    	 * @param {THREE.BufferAttribute} attribute
    	 */
    	detectMeshQuantization( attributeName, attribute ) {

    		if ( this.extensionsUsed[ KHR_MESH_QUANTIZATION ] ) return;

    		let attrType = undefined;

    		switch ( attribute.array.constructor ) {

    			case Int8Array:

    				attrType = 'byte';

    				break;

    			case Uint8Array:

    				attrType = 'unsigned byte';

    				break;

    			case Int16Array:

    				attrType = 'short';

    				break;

    			case Uint16Array:

    				attrType = 'unsigned short';

    				break;

    			default:

    				return;

    		}

    		if ( attribute.normalized ) attrType += ' normalized';

    		const attrNamePrefix = attributeName.split( '_', 1 )[ 0 ];

    		if ( KHR_mesh_quantization_ExtraAttrTypes[ attrNamePrefix ] && KHR_mesh_quantization_ExtraAttrTypes[ attrNamePrefix ].includes( attrType ) ) {

    			this.extensionsUsed[ KHR_MESH_QUANTIZATION ] = true;
    			this.extensionsRequired[ KHR_MESH_QUANTIZATION ] = true;

    		}

    	}

    	/**
    	 * Process camera
    	 * @param  {THREE.Camera} camera Camera to process
    	 * @return {Integer}      Index of the processed mesh in the "camera" array
    	 */
    	processCamera( camera ) {

    		const json = this.json;

    		if ( ! json.cameras ) json.cameras = [];

    		const isOrtho = camera.isOrthographicCamera;

    		const cameraDef = {
    			type: isOrtho ? 'orthographic' : 'perspective'
    		};

    		if ( isOrtho ) {

    			cameraDef.orthographic = {
    				xmag: camera.right * 2,
    				ymag: camera.top * 2,
    				zfar: camera.far <= 0 ? 0.001 : camera.far,
    				znear: camera.near < 0 ? 0 : camera.near
    			};

    		} else {

    			cameraDef.perspective = {
    				aspectRatio: camera.aspect,
    				yfov: three.MathUtils.degToRad( camera.fov ),
    				zfar: camera.far <= 0 ? 0.001 : camera.far,
    				znear: camera.near < 0 ? 0 : camera.near
    			};

    		}

    		// Question: Is saving "type" as name intentional?
    		if ( camera.name !== '' ) cameraDef.name = camera.type;

    		return json.cameras.push( cameraDef ) - 1;

    	}

    	/**
    	 * Creates glTF animation entry from AnimationClip object.
    	 *
    	 * Status:
    	 * - Only properties listed in PATH_PROPERTIES may be animated.
    	 *
    	 * @param {THREE.AnimationClip} clip
    	 * @param {THREE.Object3D} root
    	 * @return {number|null}
    	 */
    	processAnimation( clip, root ) {

    		const json = this.json;
    		const nodeMap = this.nodeMap;

    		if ( ! json.animations ) json.animations = [];

    		clip = GLTFExporter.Utils.mergeMorphTargetTracks( clip.clone(), root );

    		const tracks = clip.tracks;
    		const channels = [];
    		const samplers = [];

    		for ( let i = 0; i < tracks.length; ++ i ) {

    			const track = tracks[ i ];
    			const trackBinding = three.PropertyBinding.parseTrackName( track.name );
    			let trackNode = three.PropertyBinding.findNode( root, trackBinding.nodeName );
    			const trackProperty = PATH_PROPERTIES[ trackBinding.propertyName ];

    			if ( trackBinding.objectName === 'bones' ) {

    				if ( trackNode.isSkinnedMesh === true ) {

    					trackNode = trackNode.skeleton.getBoneByName( trackBinding.objectIndex );

    				} else {

    					trackNode = undefined;

    				}

    			}

    			if ( ! trackNode || ! trackProperty ) {

    				console.warn( 'THREE.GLTFExporter: Could not export animation track "%s".', track.name );
    				return null;

    			}

    			const inputItemSize = 1;
    			let outputItemSize = track.values.length / track.times.length;

    			if ( trackProperty === PATH_PROPERTIES.morphTargetInfluences ) {

    				outputItemSize /= trackNode.morphTargetInfluences.length;

    			}

    			let interpolation;

    			// @TODO export CubicInterpolant(InterpolateSmooth) as CUBICSPLINE

    			// Detecting glTF cubic spline interpolant by checking factory method's special property
    			// GLTFCubicSplineInterpolant is a custom interpolant and track doesn't return
    			// valid value from .getInterpolation().
    			if ( track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === true ) {

    				interpolation = 'CUBICSPLINE';

    				// itemSize of CUBICSPLINE keyframe is 9
    				// (VEC3 * 3: inTangent, splineVertex, and outTangent)
    				// but needs to be stored as VEC3 so dividing by 3 here.
    				outputItemSize /= 3;

    			} else if ( track.getInterpolation() === three.InterpolateDiscrete ) {

    				interpolation = 'STEP';

    			} else {

    				interpolation = 'LINEAR';

    			}

    			samplers.push( {
    				input: this.processAccessor( new three.BufferAttribute( track.times, inputItemSize ) ),
    				output: this.processAccessor( new three.BufferAttribute( track.values, outputItemSize ) ),
    				interpolation: interpolation
    			} );

    			channels.push( {
    				sampler: samplers.length - 1,
    				target: {
    					node: nodeMap.get( trackNode ),
    					path: trackProperty
    				}
    			} );

    		}

    		json.animations.push( {
    			name: clip.name || 'clip_' + json.animations.length,
    			samplers: samplers,
    			channels: channels
    		} );

    		return json.animations.length - 1;

    	}

    	/**
    	 * @param {THREE.Object3D} object
    	 * @return {number|null}
    	 */
    	 processSkin( object ) {

    		const json = this.json;
    		const nodeMap = this.nodeMap;

    		const node = json.nodes[ nodeMap.get( object ) ];

    		const skeleton = object.skeleton;

    		if ( skeleton === undefined ) return null;

    		const rootJoint = object.skeleton.bones[ 0 ];

    		if ( rootJoint === undefined ) return null;

    		const joints = [];
    		const inverseBindMatrices = new Float32Array( skeleton.bones.length * 16 );
    		const temporaryBoneInverse = new three.Matrix4();

    		for ( let i = 0; i < skeleton.bones.length; ++ i ) {

    			joints.push( nodeMap.get( skeleton.bones[ i ] ) );
    			temporaryBoneInverse.copy( skeleton.boneInverses[ i ] );
    			temporaryBoneInverse.multiply( object.bindMatrix ).toArray( inverseBindMatrices, i * 16 );

    		}

    		if ( json.skins === undefined ) json.skins = [];

    		json.skins.push( {
    			inverseBindMatrices: this.processAccessor( new three.BufferAttribute( inverseBindMatrices, 16 ) ),
    			joints: joints,
    			skeleton: nodeMap.get( rootJoint )
    		} );

    		const skinIndex = node.skin = json.skins.length - 1;

    		return skinIndex;

    	}

    	/**
    	 * Process Object3D node
    	 * @param  {THREE.Object3D} node Object3D to processNode
    	 * @return {Integer} Index of the node in the nodes list
    	 */
    	processNode( object ) {

    		const json = this.json;
    		const options = this.options;
    		const nodeMap = this.nodeMap;

    		if ( ! json.nodes ) json.nodes = [];

    		const nodeDef = {};

    		if ( options.trs ) {

    			const rotation = object.quaternion.toArray();
    			const position = object.position.toArray();
    			const scale = object.scale.toArray();

    			if ( ! equalArray( rotation, [ 0, 0, 0, 1 ] ) ) {

    				nodeDef.rotation = rotation;

    			}

    			if ( ! equalArray( position, [ 0, 0, 0 ] ) ) {

    				nodeDef.translation = position;

    			}

    			if ( ! equalArray( scale, [ 1, 1, 1 ] ) ) {

    				nodeDef.scale = scale;

    			}

    		} else {

    			if ( object.matrixAutoUpdate ) {

    				object.updateMatrix();

    			}

    			if ( isIdentityMatrix( object.matrix ) === false ) {

    				nodeDef.matrix = object.matrix.elements;

    			}

    		}

    		// We don't export empty strings name because it represents no-name in Three.js.
    		if ( object.name !== '' ) nodeDef.name = String( object.name );

    		this.serializeUserData( object, nodeDef );

    		if ( object.isMesh || object.isLine || object.isPoints ) {

    			const meshIndex = this.processMesh( object );

    			if ( meshIndex !== null ) nodeDef.mesh = meshIndex;

    		} else if ( object.isCamera ) {

    			nodeDef.camera = this.processCamera( object );

    		}

    		if ( object.isSkinnedMesh ) this.skins.push( object );

    		if ( object.children.length > 0 ) {

    			const children = [];

    			for ( let i = 0, l = object.children.length; i < l; i ++ ) {

    				const child = object.children[ i ];

    				if ( child.visible || options.onlyVisible === false ) {

    					const nodeIndex = this.processNode( child );

    					if ( nodeIndex !== null ) children.push( nodeIndex );

    				}

    			}

    			if ( children.length > 0 ) nodeDef.children = children;

    		}

    		this._invokeAll( function ( ext ) {

    			ext.writeNode && ext.writeNode( object, nodeDef );

    		} );

    		const nodeIndex = json.nodes.push( nodeDef ) - 1;
    		nodeMap.set( object, nodeIndex );
    		return nodeIndex;

    	}

    	/**
    	 * Process Scene
    	 * @param  {Scene} node Scene to process
    	 */
    	processScene( scene ) {

    		const json = this.json;
    		const options = this.options;

    		if ( ! json.scenes ) {

    			json.scenes = [];
    			json.scene = 0;

    		}

    		const sceneDef = {};

    		if ( scene.name !== '' ) sceneDef.name = scene.name;

    		json.scenes.push( sceneDef );

    		const nodes = [];

    		for ( let i = 0, l = scene.children.length; i < l; i ++ ) {

    			const child = scene.children[ i ];

    			if ( child.visible || options.onlyVisible === false ) {

    				const nodeIndex = this.processNode( child );

    				if ( nodeIndex !== null ) nodes.push( nodeIndex );

    			}

    		}

    		if ( nodes.length > 0 ) sceneDef.nodes = nodes;

    		this.serializeUserData( scene, sceneDef );

    	}

    	/**
    	 * Creates a Scene to hold a list of objects and parse it
    	 * @param  {Array} objects List of objects to process
    	 */
    	processObjects( objects ) {

    		const scene = new three.Scene();
    		scene.name = 'AuxScene';

    		for ( let i = 0; i < objects.length; i ++ ) {

    			// We push directly to children instead of calling `add` to prevent
    			// modify the .parent and break its original scene and hierarchy
    			scene.children.push( objects[ i ] );

    		}

    		this.processScene( scene );

    	}

    	/**
    	 * @param {THREE.Object3D|Array<THREE.Object3D>} input
    	 */
    	processInput( input ) {

    		const options = this.options;

    		input = input instanceof Array ? input : [ input ];

    		this._invokeAll( function ( ext ) {

    			ext.beforeParse && ext.beforeParse( input );

    		} );

    		const objectsWithoutScene = [];

    		for ( let i = 0; i < input.length; i ++ ) {

    			if ( input[ i ] instanceof three.Scene ) {

    				this.processScene( input[ i ] );

    			} else {

    				objectsWithoutScene.push( input[ i ] );

    			}

    		}

    		if ( objectsWithoutScene.length > 0 ) this.processObjects( objectsWithoutScene );

    		for ( let i = 0; i < this.skins.length; ++ i ) {

    			this.processSkin( this.skins[ i ] );

    		}

    		for ( let i = 0; i < options.animations.length; ++ i ) {

    			this.processAnimation( options.animations[ i ], input[ 0 ] );

    		}

    		this._invokeAll( function ( ext ) {

    			ext.afterParse && ext.afterParse( input );

    		} );

    	}

    	_invokeAll( func ) {

    		for ( let i = 0, il = this.plugins.length; i < il; i ++ ) {

    			func( this.plugins[ i ] );

    		}

    	}

    }

    /**
     * Punctual Lights Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
     */
    class GLTFLightExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_lights_punctual';

    	}

    	writeNode( light, nodeDef ) {

    		if ( ! light.isLight ) return;

    		if ( ! light.isDirectionalLight && ! light.isPointLight && ! light.isSpotLight ) {

    			console.warn( 'THREE.GLTFExporter: Only directional, point, and spot lights are supported.', light );
    			return;

    		}

    		const writer = this.writer;
    		const json = writer.json;
    		const extensionsUsed = writer.extensionsUsed;

    		const lightDef = {};

    		if ( light.name ) lightDef.name = light.name;

    		lightDef.color = light.color.toArray();

    		lightDef.intensity = light.intensity;

    		if ( light.isDirectionalLight ) {

    			lightDef.type = 'directional';

    		} else if ( light.isPointLight ) {

    			lightDef.type = 'point';

    			if ( light.distance > 0 ) lightDef.range = light.distance;

    		} else if ( light.isSpotLight ) {

    			lightDef.type = 'spot';

    			if ( light.distance > 0 ) lightDef.range = light.distance;

    			lightDef.spot = {};
    			lightDef.spot.innerConeAngle = ( 1.0 - light.penumbra ) * light.angle;
    			lightDef.spot.outerConeAngle = light.angle;

    		}

    		if ( light.decay !== undefined && light.decay !== 2 ) {

    			console.warn( 'THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, '
    				+ 'and expects light.decay=2.' );

    		}

    		if ( light.target
    				&& ( light.target.parent !== light
    				|| light.target.position.x !== 0
    				|| light.target.position.y !== 0
    				|| light.target.position.z !== - 1 ) ) {

    			console.warn( 'THREE.GLTFExporter: Light direction may be lost. For best results, '
    				+ 'make light.target a child of the light with position 0,0,-1.' );

    		}

    		if ( ! extensionsUsed[ this.name ] ) {

    			json.extensions = json.extensions || {};
    			json.extensions[ this.name ] = { lights: [] };
    			extensionsUsed[ this.name ] = true;

    		}

    		const lights = json.extensions[ this.name ].lights;
    		lights.push( lightDef );

    		nodeDef.extensions = nodeDef.extensions || {};
    		nodeDef.extensions[ this.name ] = { light: lights.length - 1 };

    	}

    }

    /**
     * Unlit Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
     */
    class GLTFMaterialsUnlitExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_unlit';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshBasicMaterial ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = {};

    		extensionsUsed[ this.name ] = true;

    		materialDef.pbrMetallicRoughness.metallicFactor = 0.0;
    		materialDef.pbrMetallicRoughness.roughnessFactor = 0.9;

    	}

    }

    /**
     * Clearcoat Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
     */
    class GLTFMaterialsClearcoatExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_clearcoat';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || material.clearcoat === 0 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		extensionDef.clearcoatFactor = material.clearcoat;

    		if ( material.clearcoatMap ) {

    			const clearcoatMapDef = {
    				index: writer.processTexture( material.clearcoatMap ),
    				texCoord: material.clearcoatMap.channel
    			};
    			writer.applyTextureTransform( clearcoatMapDef, material.clearcoatMap );
    			extensionDef.clearcoatTexture = clearcoatMapDef;

    		}

    		extensionDef.clearcoatRoughnessFactor = material.clearcoatRoughness;

    		if ( material.clearcoatRoughnessMap ) {

    			const clearcoatRoughnessMapDef = {
    				index: writer.processTexture( material.clearcoatRoughnessMap ),
    				texCoord: material.clearcoatRoughnessMap.channel
    			};
    			writer.applyTextureTransform( clearcoatRoughnessMapDef, material.clearcoatRoughnessMap );
    			extensionDef.clearcoatRoughnessTexture = clearcoatRoughnessMapDef;

    		}

    		if ( material.clearcoatNormalMap ) {

    			const clearcoatNormalMapDef = {
    				index: writer.processTexture( material.clearcoatNormalMap ),
    				texCoord: material.clearcoatNormalMap.channel
    			};
    			writer.applyTextureTransform( clearcoatNormalMapDef, material.clearcoatNormalMap );
    			extensionDef.clearcoatNormalTexture = clearcoatNormalMapDef;

    		}

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;


    	}

    }

    /**
     * Iridescence Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
     */
    class GLTFMaterialsIridescenceExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_iridescence';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || material.iridescence === 0 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		extensionDef.iridescenceFactor = material.iridescence;

    		if ( material.iridescenceMap ) {

    			const iridescenceMapDef = {
    				index: writer.processTexture( material.iridescenceMap ),
    				texCoord: material.iridescenceMap.channel
    			};
    			writer.applyTextureTransform( iridescenceMapDef, material.iridescenceMap );
    			extensionDef.iridescenceTexture = iridescenceMapDef;

    		}

    		extensionDef.iridescenceIor = material.iridescenceIOR;
    		extensionDef.iridescenceThicknessMinimum = material.iridescenceThicknessRange[ 0 ];
    		extensionDef.iridescenceThicknessMaximum = material.iridescenceThicknessRange[ 1 ];

    		if ( material.iridescenceThicknessMap ) {

    			const iridescenceThicknessMapDef = {
    				index: writer.processTexture( material.iridescenceThicknessMap ),
    				texCoord: material.iridescenceThicknessMap.channel
    			};
    			writer.applyTextureTransform( iridescenceThicknessMapDef, material.iridescenceThicknessMap );
    			extensionDef.iridescenceThicknessTexture = iridescenceThicknessMapDef;

    		}

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * Transmission Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
     */
    class GLTFMaterialsTransmissionExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_transmission';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || material.transmission === 0 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		extensionDef.transmissionFactor = material.transmission;

    		if ( material.transmissionMap ) {

    			const transmissionMapDef = {
    				index: writer.processTexture( material.transmissionMap ),
    				texCoord: material.transmissionMap.channel
    			};
    			writer.applyTextureTransform( transmissionMapDef, material.transmissionMap );
    			extensionDef.transmissionTexture = transmissionMapDef;

    		}

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * Materials Volume Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
     */
    class GLTFMaterialsVolumeExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_volume';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || material.transmission === 0 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		extensionDef.thicknessFactor = material.thickness;

    		if ( material.thicknessMap ) {

    			const thicknessMapDef = {
    				index: writer.processTexture( material.thicknessMap ),
    				texCoord: material.thicknessMap.channel
    			};
    			writer.applyTextureTransform( thicknessMapDef, material.thicknessMap );
    			extensionDef.thicknessTexture = thicknessMapDef;

    		}

    		extensionDef.attenuationDistance = material.attenuationDistance;
    		extensionDef.attenuationColor = material.attenuationColor.toArray();

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * Materials ior Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
     */
    class GLTFMaterialsIorExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_ior';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || material.ior === 1.5 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		extensionDef.ior = material.ior;

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * Materials specular Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
     */
    class GLTFMaterialsSpecularExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_specular';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || ( material.specularIntensity === 1.0 &&
    		       material.specularColor.equals( DEFAULT_SPECULAR_COLOR ) &&
    		     ! material.specularIntensityMap && ! material.specularColorMap ) ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		if ( material.specularIntensityMap ) {

    			const specularIntensityMapDef = {
    				index: writer.processTexture( material.specularIntensityMap ),
    				texCoord: material.specularIntensityMap.channel
    			};
    			writer.applyTextureTransform( specularIntensityMapDef, material.specularIntensityMap );
    			extensionDef.specularTexture = specularIntensityMapDef;

    		}

    		if ( material.specularColorMap ) {

    			const specularColorMapDef = {
    				index: writer.processTexture( material.specularColorMap ),
    				texCoord: material.specularColorMap.channel
    			};
    			writer.applyTextureTransform( specularColorMapDef, material.specularColorMap );
    			extensionDef.specularColorTexture = specularColorMapDef;

    		}

    		extensionDef.specularFactor = material.specularIntensity;
    		extensionDef.specularColorFactor = material.specularColor.toArray();

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * Sheen Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
     */
    class GLTFMaterialsSheenExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_sheen';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || material.sheen == 0.0 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		if ( material.sheenRoughnessMap ) {

    			const sheenRoughnessMapDef = {
    				index: writer.processTexture( material.sheenRoughnessMap ),
    				texCoord: material.sheenRoughnessMap.channel
    			};
    			writer.applyTextureTransform( sheenRoughnessMapDef, material.sheenRoughnessMap );
    			extensionDef.sheenRoughnessTexture = sheenRoughnessMapDef;

    		}

    		if ( material.sheenColorMap ) {

    			const sheenColorMapDef = {
    				index: writer.processTexture( material.sheenColorMap ),
    				texCoord: material.sheenColorMap.channel
    			};
    			writer.applyTextureTransform( sheenColorMapDef, material.sheenColorMap );
    			extensionDef.sheenColorTexture = sheenColorMapDef;

    		}

    		extensionDef.sheenRoughnessFactor = material.sheenRoughness;
    		extensionDef.sheenColorFactor = material.sheenColor.toArray();

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * Anisotropy Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_anisotropy
     */
    class GLTFMaterialsAnisotropyExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_anisotropy';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshPhysicalMaterial || material.anisotropy == 0.0 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		if ( material.anisotropyMap ) {

    			const anisotropyMapDef = { index: writer.processTexture( material.anisotropyMap ) };
    			writer.applyTextureTransform( anisotropyMapDef, material.anisotropyMap );
    			extensionDef.anisotropyTexture = anisotropyMapDef;

    		}

    		extensionDef.anisotropyStrength = material.anisotropy;
    		extensionDef.anisotropyRotation = material.anisotropyRotation;

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * Materials Emissive Strength Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
     */
    class GLTFMaterialsEmissiveStrengthExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'KHR_materials_emissive_strength';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshStandardMaterial || material.emissiveIntensity === 1.0 ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		extensionDef.emissiveStrength = material.emissiveIntensity;

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }


    /**
     * Materials bump Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/EXT_materials_bump
     */
    class GLTFMaterialsBumpExtension {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'EXT_materials_bump';

    	}

    	writeMaterial( material, materialDef ) {

    		if ( ! material.isMeshStandardMaterial || (
    		       material.bumpScale === 1 &&
    		     ! material.bumpMap ) ) return;

    		const writer = this.writer;
    		const extensionsUsed = writer.extensionsUsed;

    		const extensionDef = {};

    		if ( material.bumpMap ) {

    			const bumpMapDef = {
    				index: writer.processTexture( material.bumpMap ),
    				texCoord: material.bumpMap.channel
    			};
    			writer.applyTextureTransform( bumpMapDef, material.bumpMap );
    			extensionDef.bumpTexture = bumpMapDef;

    		}

    		extensionDef.bumpFactor = material.bumpScale;

    		materialDef.extensions = materialDef.extensions || {};
    		materialDef.extensions[ this.name ] = extensionDef;

    		extensionsUsed[ this.name ] = true;

    	}

    }

    /**
     * GPU Instancing Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
     */
    class GLTFMeshGpuInstancing {

    	constructor( writer ) {

    		this.writer = writer;
    		this.name = 'EXT_mesh_gpu_instancing';

    	}

    	writeNode( object, nodeDef ) {

    		if ( ! object.isInstancedMesh ) return;

    		const writer = this.writer;

    		const mesh = object;

    		const translationAttr = new Float32Array( mesh.count * 3 );
    		const rotationAttr = new Float32Array( mesh.count * 4 );
    		const scaleAttr = new Float32Array( mesh.count * 3 );

    		const matrix = new three.Matrix4();
    		const position = new three.Vector3();
    		const quaternion = new three.Quaternion();
    		const scale = new three.Vector3();

    		for ( let i = 0; i < mesh.count; i ++ ) {

    			mesh.getMatrixAt( i, matrix );
    			matrix.decompose( position, quaternion, scale );

    			position.toArray( translationAttr, i * 3 );
    			quaternion.toArray( rotationAttr, i * 4 );
    			scale.toArray( scaleAttr, i * 3 );

    		}

    		const attributes = {
    			TRANSLATION: writer.processAccessor( new three.BufferAttribute( translationAttr, 3 ) ),
    			ROTATION: writer.processAccessor( new three.BufferAttribute( rotationAttr, 4 ) ),
    			SCALE: writer.processAccessor( new three.BufferAttribute( scaleAttr, 3 ) ),
    		};

    		if ( mesh.instanceColor )
    			attributes._COLOR_0 = writer.processAccessor( mesh.instanceColor );

    		nodeDef.extensions = nodeDef.extensions || {};
    		nodeDef.extensions[ this.name ] = { attributes };

    		writer.extensionsUsed[ this.name ] = true;
    		writer.extensionsRequired[ this.name ] = true;

    	}

    }

    /**
     * Static utility functions
     */
    GLTFExporter.Utils = {

    	insertKeyframe: function ( track, time ) {

    		const tolerance = 0.001; // 1ms
    		const valueSize = track.getValueSize();

    		const times = new track.TimeBufferType( track.times.length + 1 );
    		const values = new track.ValueBufferType( track.values.length + valueSize );
    		const interpolant = track.createInterpolant( new track.ValueBufferType( valueSize ) );

    		let index;

    		if ( track.times.length === 0 ) {

    			times[ 0 ] = time;

    			for ( let i = 0; i < valueSize; i ++ ) {

    				values[ i ] = 0;

    			}

    			index = 0;

    		} else if ( time < track.times[ 0 ] ) {

    			if ( Math.abs( track.times[ 0 ] - time ) < tolerance ) return 0;

    			times[ 0 ] = time;
    			times.set( track.times, 1 );

    			values.set( interpolant.evaluate( time ), 0 );
    			values.set( track.values, valueSize );

    			index = 0;

    		} else if ( time > track.times[ track.times.length - 1 ] ) {

    			if ( Math.abs( track.times[ track.times.length - 1 ] - time ) < tolerance ) {

    				return track.times.length - 1;

    			}

    			times[ times.length - 1 ] = time;
    			times.set( track.times, 0 );

    			values.set( track.values, 0 );
    			values.set( interpolant.evaluate( time ), track.values.length );

    			index = times.length - 1;

    		} else {

    			for ( let i = 0; i < track.times.length; i ++ ) {

    				if ( Math.abs( track.times[ i ] - time ) < tolerance ) return i;

    				if ( track.times[ i ] < time && track.times[ i + 1 ] > time ) {

    					times.set( track.times.slice( 0, i + 1 ), 0 );
    					times[ i + 1 ] = time;
    					times.set( track.times.slice( i + 1 ), i + 2 );

    					values.set( track.values.slice( 0, ( i + 1 ) * valueSize ), 0 );
    					values.set( interpolant.evaluate( time ), ( i + 1 ) * valueSize );
    					values.set( track.values.slice( ( i + 1 ) * valueSize ), ( i + 2 ) * valueSize );

    					index = i + 1;

    					break;

    				}

    			}

    		}

    		track.times = times;
    		track.values = values;

    		return index;

    	},

    	mergeMorphTargetTracks: function ( clip, root ) {

    		const tracks = [];
    		const mergedTracks = {};
    		const sourceTracks = clip.tracks;

    		for ( let i = 0; i < sourceTracks.length; ++ i ) {

    			let sourceTrack = sourceTracks[ i ];
    			const sourceTrackBinding = three.PropertyBinding.parseTrackName( sourceTrack.name );
    			const sourceTrackNode = three.PropertyBinding.findNode( root, sourceTrackBinding.nodeName );

    			if ( sourceTrackBinding.propertyName !== 'morphTargetInfluences' || sourceTrackBinding.propertyIndex === undefined ) {

    				// Tracks that don't affect morph targets, or that affect all morph targets together, can be left as-is.
    				tracks.push( sourceTrack );
    				continue;

    			}

    			if ( sourceTrack.createInterpolant !== sourceTrack.InterpolantFactoryMethodDiscrete
    				&& sourceTrack.createInterpolant !== sourceTrack.InterpolantFactoryMethodLinear ) {

    				if ( sourceTrack.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline ) {

    					// This should never happen, because glTF morph target animations
    					// affect all targets already.
    					throw new Error( 'THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.' );

    				}

    				console.warn( 'THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead.' );

    				sourceTrack = sourceTrack.clone();
    				sourceTrack.setInterpolation( three.InterpolateLinear );

    			}

    			const targetCount = sourceTrackNode.morphTargetInfluences.length;
    			const targetIndex = sourceTrackNode.morphTargetDictionary[ sourceTrackBinding.propertyIndex ];

    			if ( targetIndex === undefined ) {

    				throw new Error( 'THREE.GLTFExporter: Morph target name not found: ' + sourceTrackBinding.propertyIndex );

    			}

    			let mergedTrack;

    			// If this is the first time we've seen this object, create a new
    			// track to store merged keyframe data for each morph target.
    			if ( mergedTracks[ sourceTrackNode.uuid ] === undefined ) {

    				mergedTrack = sourceTrack.clone();

    				const values = new mergedTrack.ValueBufferType( targetCount * mergedTrack.times.length );

    				for ( let j = 0; j < mergedTrack.times.length; j ++ ) {

    					values[ j * targetCount + targetIndex ] = mergedTrack.values[ j ];

    				}

    				// We need to take into consideration the intended target node
    				// of our original un-merged morphTarget animation.
    				mergedTrack.name = ( sourceTrackBinding.nodeName || '' ) + '.morphTargetInfluences';
    				mergedTrack.values = values;

    				mergedTracks[ sourceTrackNode.uuid ] = mergedTrack;
    				tracks.push( mergedTrack );

    				continue;

    			}

    			const sourceInterpolant = sourceTrack.createInterpolant( new sourceTrack.ValueBufferType( 1 ) );

    			mergedTrack = mergedTracks[ sourceTrackNode.uuid ];

    			// For every existing keyframe of the merged track, write a (possibly
    			// interpolated) value from the source track.
    			for ( let j = 0; j < mergedTrack.times.length; j ++ ) {

    				mergedTrack.values[ j * targetCount + targetIndex ] = sourceInterpolant.evaluate( mergedTrack.times[ j ] );

    			}

    			// For every existing keyframe of the source track, write a (possibly
    			// new) keyframe to the merged track. Values from the previous loop may
    			// be written again, but keyframes are de-duplicated.
    			for ( let j = 0; j < sourceTrack.times.length; j ++ ) {

    				const keyframeIndex = this.insertKeyframe( mergedTrack, sourceTrack.times[ j ] );
    				mergedTrack.values[ keyframeIndex * targetCount + targetIndex ] = sourceTrack.values[ j ];

    			}

    		}

    		clip.tracks = tracks;

    		return clip;

    	}

    };

    const compatibleObject = (object) => {
        return object.material !==
            undefined &&
            object.userData &&
            object.userData.variantMaterials &&
            !!Array
                .from(object.userData.variantMaterials
                .values())
                .filter(m => compatibleMaterial(m.material));
    };
    const compatibleMaterial = (material) => {
        return material && material.isMaterial && !Array.isArray(material);
    };
    class GLTFExporterMaterialsVariantsExtension {
        constructor(writer) {
            this.writer = writer;
            this.name = 'KHR_materials_variants';
            this.variantNames = [];
        }
        beforeParse(objects) {
            const variantNameSet = new Set();
            for (const object of objects) {
                object.traverse(o => {
                    if (!compatibleObject(o)) {
                        return;
                    }
                    const variantMaterials = o.userData.variantMaterials;
                    const variantDataMap = o.userData.variantData;
                    for (const [variantName, variantData] of variantDataMap) {
                        const variantMaterial = variantMaterials.get(variantData.index);
                        if (variantMaterial && compatibleMaterial(variantMaterial.material)) {
                            variantNameSet.add(variantName);
                        }
                    }
                });
            }
            variantNameSet.forEach(name => this.variantNames.push(name));
        }
        writeMesh(mesh, meshDef) {
            if (!compatibleObject(mesh)) {
                return;
            }
            const userData = mesh.userData;
            const variantMaterials = userData.variantMaterials;
            const variantDataMap = userData.variantData;
            const mappingTable = new Map();
            const reIndexedVariants = new Map();
            const variants = Array.from(variantDataMap.values()).sort((a, b) => {
                return a.index - b.index;
            });
            for (const [i, variantData] of variants.entries()) {
                reIndexedVariants.set(variantData.index, i);
            }
            for (const variantData of variantDataMap.values()) {
                const variantInstance = variantMaterials.get(variantData.index);
                if (!variantInstance || !compatibleMaterial(variantInstance.material)) {
                    continue;
                }
                const materialIndex = this.writer.processMaterial(variantInstance.material);
                if (!mappingTable.has(materialIndex)) {
                    mappingTable.set(materialIndex, { material: materialIndex, variants: [] });
                }
                mappingTable.get(materialIndex).variants.push(reIndexedVariants.get(variantData.index));
            }
            const mappingsDef = Array.from(mappingTable.values())
                .map((m => { return m.variants.sort((a, b) => a - b) && m; }))
                .sort((a, b) => a.material - b.material);
            if (mappingsDef.length === 0) {
                return;
            }
            const originalMaterialIndex = compatibleMaterial(userData.originalMaterial) ?
                this.writer.processMaterial(userData.originalMaterial) :
                -1;
            for (const primitiveDef of meshDef.primitives) {
                if (originalMaterialIndex >= 0) {
                    primitiveDef.material = originalMaterialIndex;
                }
                primitiveDef.extensions = primitiveDef.extensions || {};
                primitiveDef.extensions[this.name] = { mappings: mappingsDef };
            }
        }
        afterParse() {
            if (this.variantNames.length === 0) {
                return;
            }
            const root = this.writer.json;
            root.extensions = root.extensions || {};
            const variantsDef = this.variantNames.map(n => {
                return { name: n };
            });
            root.extensions[this.name] = { variants: variantsDef };
            this.writer.extensionsUsed[this.name] = true;
        }
    }

    class SessionLightProbe {

    	constructor( xrLight, renderer, lightProbe, environmentEstimation, estimationStartCallback ) {

    		this.xrLight = xrLight;
    		this.renderer = renderer;
    		this.lightProbe = lightProbe;
    		this.xrWebGLBinding = null;
    		this.estimationStartCallback = estimationStartCallback;
    		this.frameCallback = this.onXRFrame.bind( this );

    		const session = renderer.xr.getSession();

    		// If the XRWebGLBinding class is available then we can also query an
    		// estimated reflection cube map.
    		if ( environmentEstimation && 'XRWebGLBinding' in window ) {

    			// This is the simplest way I know of to initialize a WebGL cubemap in Three.
    			const cubeRenderTarget = new three.WebGLCubeRenderTarget( 16 );
    			xrLight.environment = cubeRenderTarget.texture;

    			const gl = renderer.getContext();

    			// Ensure that we have any extensions needed to use the preferred cube map format.
    			switch ( session.preferredReflectionFormat ) {

    				case 'srgba8':
    					gl.getExtension( 'EXT_sRGB' );
    					break;

    				case 'rgba16f':
    					gl.getExtension( 'OES_texture_half_float' );
    					break;

    			}

    			this.xrWebGLBinding = new XRWebGLBinding( session, gl );

    			this.lightProbe.addEventListener( 'reflectionchange', () => {

    				this.updateReflection();

    			} );

    		}

    		// Start monitoring the XR animation frame loop to look for lighting
    		// estimation changes.
    		session.requestAnimationFrame( this.frameCallback );

    	}

    	updateReflection() {

    		const textureProperties = this.renderer.properties.get( this.xrLight.environment );

    		if ( textureProperties ) {

    			const cubeMap = this.xrWebGLBinding.getReflectionCubeMap( this.lightProbe );

    			if ( cubeMap ) {

    				textureProperties.__webglTexture = cubeMap;

    				this.xrLight.environment.needsPMREMUpdate = true;

    			}

    		}

    	}

    	onXRFrame( time, xrFrame ) {

    		// If either this obejct or the XREstimatedLight has been destroyed, stop
    		// running the frame loop.
    		if ( ! this.xrLight ) {

    			return;

    		}

    		const session = xrFrame.session;
    		session.requestAnimationFrame( this.frameCallback );

    		const lightEstimate = xrFrame.getLightEstimate( this.lightProbe );
    		if ( lightEstimate ) {

    			// We can copy the estimate's spherical harmonics array directly into the light probe.
    			this.xrLight.lightProbe.sh.fromArray( lightEstimate.sphericalHarmonicsCoefficients );
    			this.xrLight.lightProbe.intensity = 1.0;

    			// For the directional light we have to normalize the color and set the scalar as the
    			// intensity, since WebXR can return color values that exceed 1.0.
    			const intensityScalar = Math.max( 1.0,
    				Math.max( lightEstimate.primaryLightIntensity.x,
    					Math.max( lightEstimate.primaryLightIntensity.y,
    						lightEstimate.primaryLightIntensity.z ) ) );

    			this.xrLight.directionalLight.color.setRGB(
    				lightEstimate.primaryLightIntensity.x / intensityScalar,
    				lightEstimate.primaryLightIntensity.y / intensityScalar,
    				lightEstimate.primaryLightIntensity.z / intensityScalar );
    			this.xrLight.directionalLight.intensity = intensityScalar;
    			this.xrLight.directionalLight.position.copy( lightEstimate.primaryLightDirection );

    			if ( this.estimationStartCallback ) {

    				this.estimationStartCallback();
    				this.estimationStartCallback = null;

    			}

    		}

    	}

    	dispose() {

    		this.xrLight = null;
    		this.renderer = null;
    		this.lightProbe = null;
    		this.xrWebGLBinding = null;

    	}

    }

    class XREstimatedLight extends three.Group {

    	constructor( renderer, environmentEstimation = true ) {

    		super();

    		this.lightProbe = new three.LightProbe();
    		this.lightProbe.intensity = 0;
    		this.add( this.lightProbe );

    		this.directionalLight = new three.DirectionalLight();
    		this.directionalLight.intensity = 0;
    		this.add( this.directionalLight );

    		// Will be set to a cube map in the SessionLightProbe if environment estimation is
    		// available and requested.
    		this.environment = null;

    		let sessionLightProbe = null;
    		let estimationStarted = false;
    		renderer.xr.addEventListener( 'sessionstart', () => {

    			const session = renderer.xr.getSession();

    			if ( 'requestLightProbe' in session ) {

    				session.requestLightProbe( {

    					reflectionFormat: session.preferredReflectionFormat

    				} ).then( ( probe ) => {

    					sessionLightProbe = new SessionLightProbe( this, renderer, probe, environmentEstimation, () => {

    						estimationStarted = true;

    						// Fired to indicate that the estimated lighting values are now being updated.
    						this.dispatchEvent( { type: 'estimationstart' } );

    					} );

    				} );

    			}

    		} );

    		renderer.xr.addEventListener( 'sessionend', () => {

    			if ( sessionLightProbe ) {

    				sessionLightProbe.dispose();
    				sessionLightProbe = null;

    			}

    			if ( estimationStarted ) {

    				// Fired to indicate that the estimated lighting values are no longer being updated.
    				this.dispatchEvent( { type: 'estimationend' } );

    			}

    		} );

    		// Done inline to provide access to sessionLightProbe.
    		this.dispose = () => {

    			if ( sessionLightProbe ) {

    				sessionLightProbe.dispose();
    				sessionLightProbe = null;

    			}

    			this.remove( this.lightProbe );
    			this.lightProbe = null;

    			this.remove( this.directionalLight );
    			this.directionalLight = null;

    			this.environment = null;

    		};

    	}

    }

    const SETTLING_TIME = 10000;
    const MIN_DECAY_MILLISECONDS = 0.001;
    const DECAY_MILLISECONDS = 50;
    class Damper {
        constructor(decayMilliseconds = DECAY_MILLISECONDS) {
            this.velocity = 0;
            this.naturalFrequency = 0;
            this.setDecayTime(decayMilliseconds);
        }
        setDecayTime(decayMilliseconds) {
            this.naturalFrequency =
                1 / Math.max(MIN_DECAY_MILLISECONDS, decayMilliseconds);
        }
        update(x, xGoal, timeStepMilliseconds, xNormalization) {
            const nilSpeed = 0.0002 * this.naturalFrequency;
            if (x == null || xNormalization === 0) {
                return xGoal;
            }
            if (x === xGoal && this.velocity === 0) {
                return xGoal;
            }
            if (timeStepMilliseconds < 0) {
                return x;
            }
            const deltaX = (x - xGoal);
            const intermediateVelocity = this.velocity + this.naturalFrequency * deltaX;
            const intermediateX = deltaX + timeStepMilliseconds * intermediateVelocity;
            const decay = Math.exp(-this.naturalFrequency * timeStepMilliseconds);
            const newVelocity = (intermediateVelocity - this.naturalFrequency * intermediateX) * decay;
            const acceleration = -this.naturalFrequency * (newVelocity + intermediateVelocity * decay);
            if (Math.abs(newVelocity) < nilSpeed * Math.abs(xNormalization) &&
                acceleration * deltaX >= 0) {
                this.velocity = 0;
                return xGoal;
            }
            else {
                this.velocity = newVelocity;
                return xGoal + intermediateX * decay;
            }
        }
    }

    const RADIUS = 0.2;
    const LINE_WIDTH = 0.03;
    const MAX_OPACITY = 0.75;
    const SEGMENTS = 12;
    const DELTA_PHI = Math.PI / (2 * SEGMENTS);
    const vector2$1 = new three.Vector2();
    const addCorner = (vertices, cornerX, cornerY) => {
        let phi = cornerX > 0 ? (cornerY > 0 ? 0 : -Math.PI / 2) :
            (cornerY > 0 ? Math.PI / 2 : Math.PI);
        for (let i = 0; i <= SEGMENTS; ++i) {
            vertices.push(cornerX + (RADIUS - LINE_WIDTH) * Math.cos(phi), cornerY + (RADIUS - LINE_WIDTH) * Math.sin(phi), 0, cornerX + RADIUS * Math.cos(phi), cornerY + RADIUS * Math.sin(phi), 0);
            phi += DELTA_PHI;
        }
    };
    class PlacementBox extends three.Mesh {
        constructor(scene, side) {
            const geometry = new three.BufferGeometry();
            const triangles = [];
            const vertices = [];
            const { size, boundingBox } = scene;
            const x = size.x / 2;
            const y = (side === 'back' ? size.y : size.z) / 2;
            addCorner(vertices, x, y);
            addCorner(vertices, -x, y);
            addCorner(vertices, -x, -y);
            addCorner(vertices, x, -y);
            const numVertices = vertices.length / 3;
            for (let i = 0; i < numVertices - 2; i += 2) {
                triangles.push(i, i + 1, i + 3, i, i + 3, i + 2);
            }
            const i = numVertices - 2;
            triangles.push(i, i + 1, 1, i, 1, 0);
            geometry.setAttribute('position', new three.Float32BufferAttribute(vertices, 3));
            geometry.setIndex(triangles);
            super(geometry);
            this.side = side;
            const material = this.material;
            material.side = three.DoubleSide;
            material.transparent = true;
            material.opacity = 0;
            this.goalOpacity = 0;
            this.opacityDamper = new Damper();
            this.hitPlane =
                new three.Mesh(new three.PlaneGeometry(2 * (x + RADIUS), 2 * (y + RADIUS)));
            this.hitPlane.visible = false;
            this.hitPlane.material.side = three.DoubleSide;
            this.add(this.hitPlane);
            boundingBox.getCenter(this.position);
            switch (side) {
                case 'bottom':
                    this.rotateX(-Math.PI / 2);
                    this.shadowHeight = boundingBox.min.y;
                    this.position.y = this.shadowHeight;
                    break;
                case 'back':
                    this.shadowHeight = boundingBox.min.z;
                    this.position.z = this.shadowHeight;
            }
            scene.target.add(this);
            this.offsetHeight = 0;
        }
        getHit(scene, screenX, screenY) {
            vector2$1.set(screenX, -screenY);
            this.hitPlane.visible = true;
            const hitResult = scene.positionAndNormalFromPoint(vector2$1, this.hitPlane);
            this.hitPlane.visible = false;
            return hitResult == null ? null : hitResult.position;
        }
        getExpandedHit(scene, screenX, screenY) {
            this.hitPlane.scale.set(1000, 1000, 1000);
            this.hitPlane.updateMatrixWorld();
            const hitResult = this.getHit(scene, screenX, screenY);
            this.hitPlane.scale.set(1, 1, 1);
            return hitResult;
        }
        set offsetHeight(offset) {
            offset -= 0.001;
            if (this.side === 'back') {
                this.position.z = this.shadowHeight + offset;
            }
            else {
                this.position.y = this.shadowHeight + offset;
            }
        }
        get offsetHeight() {
            if (this.side === 'back') {
                return this.position.z - this.shadowHeight;
            }
            else {
                return this.position.y - this.shadowHeight;
            }
        }
        set show(visible) {
            this.goalOpacity = visible ? MAX_OPACITY : 0;
        }
        updateOpacity(delta) {
            const material = this.material;
            material.opacity =
                this.opacityDamper.update(material.opacity, this.goalOpacity, delta, 1);
            this.visible = material.opacity > 0;
        }
        dispose() {
            var _a;
            const { geometry, material } = this.hitPlane;
            geometry.dispose();
            material.dispose();
            this.geometry.dispose();
            this.material.dispose();
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.remove(this);
        }
    }

    const numberNode = (value, unit) => ({ type: 'number', number: value, unit });
    const parseExpressions = (() => {
        const cache = {};
        const MAX_PARSE_ITERATIONS = 1000;
        return (inputString) => {
            const cacheKey = inputString;
            if (cacheKey in cache) {
                return cache[cacheKey];
            }
            const expressions = [];
            let parseIterations = 0;
            while (inputString) {
                if (++parseIterations > MAX_PARSE_ITERATIONS) {
                    inputString = '';
                    break;
                }
                const expressionParseResult = parseExpression(inputString);
                const expression = expressionParseResult.nodes[0];
                if (expression == null || expression.terms.length === 0) {
                    break;
                }
                expressions.push(expression);
                inputString = expressionParseResult.remainingInput;
            }
            return cache[cacheKey] = expressions;
        };
    })();
    const parseExpression = (() => {
        const IS_IDENT_RE = /^(\-\-|[a-z\u0240-\uffff])/i;
        const IS_OPERATOR_RE = /^([\*\+\/]|[\-]\s)/i;
        const IS_EXPRESSION_END_RE = /^[\),]/;
        const FUNCTION_ARGUMENTS_FIRST_TOKEN = '(';
        const HEX_FIRST_TOKEN = '#';
        return (inputString) => {
            const terms = [];
            while (inputString.length) {
                inputString = inputString.trim();
                if (IS_EXPRESSION_END_RE.test(inputString)) {
                    break;
                }
                else if (inputString[0] === FUNCTION_ARGUMENTS_FIRST_TOKEN) {
                    const { nodes, remainingInput } = parseFunctionArguments(inputString);
                    inputString = remainingInput;
                    terms.push({
                        type: 'function',
                        name: { type: 'ident', value: 'calc' },
                        arguments: nodes
                    });
                }
                else if (IS_IDENT_RE.test(inputString)) {
                    const identParseResult = parseIdent(inputString);
                    const identNode = identParseResult.nodes[0];
                    inputString = identParseResult.remainingInput;
                    if (inputString[0] === FUNCTION_ARGUMENTS_FIRST_TOKEN) {
                        const { nodes, remainingInput } = parseFunctionArguments(inputString);
                        terms.push({ type: 'function', name: identNode, arguments: nodes });
                        inputString = remainingInput;
                    }
                    else {
                        terms.push(identNode);
                    }
                }
                else if (IS_OPERATOR_RE.test(inputString)) {
                    terms.push({ type: 'operator', value: inputString[0] });
                    inputString = inputString.slice(1);
                }
                else {
                    const { nodes, remainingInput } = inputString[0] === HEX_FIRST_TOKEN ?
                        parseHex(inputString) :
                        parseNumber(inputString);
                    if (nodes.length === 0) {
                        break;
                    }
                    terms.push(nodes[0]);
                    inputString = remainingInput;
                }
            }
            return { nodes: [{ type: 'expression', terms }], remainingInput: inputString };
        };
    })();
    const parseIdent = (() => {
        const NOT_IDENT_RE = /[^a-z0-9_\-\u0240-\uffff]/i;
        return (inputString) => {
            const match = inputString.match(NOT_IDENT_RE);
            const ident = match == null ? inputString : inputString.substr(0, match.index);
            const remainingInput = match == null ? '' : inputString.substr(match.index);
            return { nodes: [{ type: 'ident', value: ident }], remainingInput };
        };
    })();
    const parseNumber = (() => {
        const VALUE_RE = /[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/;
        const UNIT_RE = /^[a-z%]+/i;
        const ALLOWED_UNITS = /^(m|mm|cm|rad|deg|[%])$/;
        return (inputString) => {
            const valueMatch = inputString.match(VALUE_RE);
            const value = valueMatch == null ? '0' : valueMatch[0];
            inputString = value == null ? inputString : inputString.slice(value.length);
            const unitMatch = inputString.match(UNIT_RE);
            let unit = unitMatch != null && unitMatch[0] !== '' ? unitMatch[0] : null;
            const remainingInput = unitMatch == null ? inputString : inputString.slice(unit.length);
            if (unit != null && !ALLOWED_UNITS.test(unit)) {
                unit = null;
            }
            return {
                nodes: [{
                        type: 'number',
                        number: parseFloat(value) || 0,
                        unit: unit
                    }],
                remainingInput
            };
        };
    })();
    const parseHex = (() => {
        const HEX_RE = /^[a-f0-9]*/i;
        return (inputString) => {
            inputString = inputString.slice(1).trim();
            const hexMatch = inputString.match(HEX_RE);
            const nodes = hexMatch == null ? [] : [{ type: 'hex', value: hexMatch[0] }];
            return {
                nodes,
                remainingInput: hexMatch == null ? inputString :
                    inputString.slice(hexMatch[0].length)
            };
        };
    })();
    const parseFunctionArguments = (inputString) => {
        const expressionNodes = [];
        inputString = inputString.slice(1).trim();
        while (inputString.length) {
            const expressionParseResult = parseExpression(inputString);
            expressionNodes.push(expressionParseResult.nodes[0]);
            inputString = expressionParseResult.remainingInput.trim();
            if (inputString[0] === ',') {
                inputString = inputString.slice(1).trim();
            }
            else if (inputString[0] === ')') {
                inputString = inputString.slice(1);
                break;
            }
        }
        return { nodes: expressionNodes, remainingInput: inputString };
    };
    const $visitedTypes = Symbol('visitedTypes');
    class ASTWalker {
        constructor(visitedTypes) {
            this[$visitedTypes] = visitedTypes;
        }
        walk(ast, callback) {
            const remaining = ast.slice();
            while (remaining.length) {
                const next = remaining.shift();
                if (this[$visitedTypes].indexOf(next.type) > -1) {
                    callback(next);
                }
                switch (next.type) {
                    case 'expression':
                        remaining.unshift(...next.terms);
                        break;
                    case 'function':
                        remaining.unshift(next.name, ...next.arguments);
                        break;
                }
            }
        }
    }
    const ZERO = Object.freeze({ type: 'number', number: 0, unit: null });

    const degreesToRadians = (numberNode, fallbackRadianValue = 0) => {
        let { number, unit } = numberNode;
        if (!isFinite(number)) {
            number = fallbackRadianValue;
            unit = 'rad';
        }
        else if (numberNode.unit === 'rad' || numberNode.unit == null) {
            return numberNode;
        }
        const valueIsDegrees = unit === 'deg' && number != null;
        const value = valueIsDegrees ? number : 0;
        const radians = value * Math.PI / 180;
        return { type: 'number', number: radians, unit: 'rad' };
    };
    const lengthToBaseMeters = (numberNode, fallbackMeterValue = 0) => {
        let { number, unit } = numberNode;
        if (!isFinite(number)) {
            number = fallbackMeterValue;
            unit = 'm';
        }
        else if (numberNode.unit === 'm') {
            return numberNode;
        }
        let scale;
        switch (unit) {
            default:
                scale = 1;
                break;
            case 'cm':
                scale = 1 / 100;
                break;
            case 'mm':
                scale = 1 / 1000;
                break;
        }
        const value = scale * number;
        return { type: 'number', number: value, unit: 'm' };
    };
    const normalizeUnit = (() => {
        const identity = (node) => node;
        const unitNormalizers = {
            'rad': identity,
            'deg': degreesToRadians,
            'm': identity,
            'mm': lengthToBaseMeters,
            'cm': lengthToBaseMeters
        };
        return (node, fallback = ZERO) => {
            if (!isFinite(node.number)) {
                node.number = fallback.number;
                node.unit = fallback.unit;
            }
            const { unit } = node;
            if (unit == null) {
                return node;
            }
            const normalize = unitNormalizers[unit];
            if (normalize == null) {
                return fallback;
            }
            return normalize(node);
        };
    })();

    var _a$6, _b$6, _c$4;
    const $evaluate = Symbol('evaluate');
    const $lastValue = Symbol('lastValue');
    class Evaluator {
        constructor() {
            this[_a$6] = null;
        }
        static evaluatableFor(node, basis = ZERO) {
            if (node instanceof Evaluator) {
                return node;
            }
            if (node.type === 'number') {
                if (node.unit === '%') {
                    return new PercentageEvaluator(node, basis);
                }
                return node;
            }
            switch (node.name.value) {
                case 'calc':
                    return new CalcEvaluator(node, basis);
                case 'env':
                    return new EnvEvaluator(node);
            }
            return ZERO;
        }
        static evaluate(evaluatable) {
            if (evaluatable instanceof Evaluator) {
                return evaluatable.evaluate();
            }
            return evaluatable;
        }
        static isConstant(evaluatable) {
            if (evaluatable instanceof Evaluator) {
                return evaluatable.isConstant;
            }
            return true;
        }
        static applyIntrinsics(evaluated, intrinsics) {
            const { basis, keywords } = intrinsics;
            const { auto } = keywords;
            return basis.map((basisNode, index) => {
                const autoSubstituteNode = auto[index] == null ? basisNode : auto[index];
                let evaluatedNode = evaluated[index] ? evaluated[index] : autoSubstituteNode;
                if (evaluatedNode.type === 'ident') {
                    const keyword = evaluatedNode.value;
                    if (keyword in keywords) {
                        evaluatedNode = keywords[keyword][index];
                    }
                }
                if (evaluatedNode == null || evaluatedNode.type === 'ident') {
                    evaluatedNode = autoSubstituteNode;
                }
                if (evaluatedNode.unit === '%') {
                    return numberNode(evaluatedNode.number / 100 * basisNode.number, basisNode.unit);
                }
                evaluatedNode = normalizeUnit(evaluatedNode, basisNode);
                if (evaluatedNode.unit !== basisNode.unit) {
                    return basisNode;
                }
                return evaluatedNode;
            });
        }
        get isConstant() {
            return false;
        }
        evaluate() {
            if (!this.isConstant || this[$lastValue] == null) {
                this[$lastValue] = this[$evaluate]();
            }
            return this[$lastValue];
        }
    }
    _a$6 = $lastValue;
    const $percentage = Symbol('percentage');
    const $basis = Symbol('basis');
    class PercentageEvaluator extends Evaluator {
        constructor(percentage, basis) {
            super();
            this[$percentage] = percentage;
            this[$basis] = basis;
        }
        get isConstant() {
            return true;
        }
        [$evaluate]() {
            return numberNode(this[$percentage].number / 100 * this[$basis].number, this[$basis].unit);
        }
    }
    const $identNode = Symbol('identNode');
    class EnvEvaluator extends Evaluator {
        constructor(envFunction) {
            super();
            this[_b$6] = null;
            const identNode = envFunction.arguments.length ? envFunction.arguments[0].terms[0] : null;
            if (identNode != null && identNode.type === 'ident') {
                this[$identNode] = identNode;
            }
        }
        get isConstant() {
            return false;
        }
        ;
        [(_b$6 = $identNode, $evaluate)]() {
            if (this[$identNode] != null) {
                switch (this[$identNode].value) {
                    case 'window-scroll-y':
                        const verticalScrollPosition = window.pageYOffset;
                        const verticalScrollMax = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
                        const scrollY = verticalScrollPosition /
                            (verticalScrollMax - window.innerHeight) ||
                            0;
                        return { type: 'number', number: scrollY, unit: null };
                }
            }
            return ZERO;
        }
    }
    const IS_MULTIPLICATION_RE = /[\*\/]/;
    const $evaluator = Symbol('evaluator');
    class CalcEvaluator extends Evaluator {
        constructor(calcFunction, basis = ZERO) {
            super();
            this[_c$4] = null;
            if (calcFunction.arguments.length !== 1) {
                return;
            }
            const terms = calcFunction.arguments[0].terms.slice();
            const secondOrderTerms = [];
            while (terms.length) {
                const term = terms.shift();
                if (secondOrderTerms.length > 0) {
                    const previousTerm = secondOrderTerms[secondOrderTerms.length - 1];
                    if (previousTerm.type === 'operator' &&
                        IS_MULTIPLICATION_RE.test(previousTerm.value)) {
                        const operator = secondOrderTerms.pop();
                        const leftValue = secondOrderTerms.pop();
                        if (leftValue == null) {
                            return;
                        }
                        secondOrderTerms.push(new OperatorEvaluator(operator, Evaluator.evaluatableFor(leftValue, basis), Evaluator.evaluatableFor(term, basis)));
                        continue;
                    }
                }
                secondOrderTerms.push(term.type === 'operator' ? term :
                    Evaluator.evaluatableFor(term, basis));
            }
            while (secondOrderTerms.length > 2) {
                const [left, operator, right] = secondOrderTerms.splice(0, 3);
                if (operator.type !== 'operator') {
                    return;
                }
                secondOrderTerms.unshift(new OperatorEvaluator(operator, Evaluator.evaluatableFor(left, basis), Evaluator.evaluatableFor(right, basis)));
            }
            if (secondOrderTerms.length === 1) {
                this[$evaluator] = secondOrderTerms[0];
            }
        }
        get isConstant() {
            return this[$evaluator] == null || Evaluator.isConstant(this[$evaluator]);
        }
        [(_c$4 = $evaluator, $evaluate)]() {
            return this[$evaluator] != null ? Evaluator.evaluate(this[$evaluator]) :
                ZERO;
        }
    }
    const $operator = Symbol('operator');
    const $left = Symbol('left');
    const $right = Symbol('right');
    class OperatorEvaluator extends Evaluator {
        constructor(operator, left, right) {
            super();
            this[$operator] = operator;
            this[$left] = left;
            this[$right] = right;
        }
        get isConstant() {
            return Evaluator.isConstant(this[$left]) &&
                Evaluator.isConstant(this[$right]);
        }
        [$evaluate]() {
            const leftNode = normalizeUnit(Evaluator.evaluate(this[$left]));
            const rightNode = normalizeUnit(Evaluator.evaluate(this[$right]));
            const { number: leftValue, unit: leftUnit } = leftNode;
            const { number: rightValue, unit: rightUnit } = rightNode;
            if (rightUnit != null && leftUnit != null && rightUnit != leftUnit) {
                return ZERO;
            }
            const unit = leftUnit || rightUnit;
            let value;
            switch (this[$operator].value) {
                case '+':
                    value = leftValue + rightValue;
                    break;
                case '-':
                    value = leftValue - rightValue;
                    break;
                case '/':
                    value = leftValue / rightValue;
                    break;
                case '*':
                    value = leftValue * rightValue;
                    break;
                default:
                    return ZERO;
            }
            return { type: 'number', number: value, unit };
        }
    }
    const $evaluatables = Symbol('evaluatables');
    const $intrinsics = Symbol('intrinsics');
    class StyleEvaluator extends Evaluator {
        constructor(expressions, intrinsics) {
            super();
            this[$intrinsics] = intrinsics;
            const firstExpression = expressions[0];
            const terms = firstExpression != null ? firstExpression.terms : [];
            this[$evaluatables] =
                intrinsics.basis.map((basisNode, index) => {
                    const term = terms[index];
                    if (term == null) {
                        return { type: 'ident', value: 'auto' };
                    }
                    if (term.type === 'ident') {
                        return term;
                    }
                    return Evaluator.evaluatableFor(term, basisNode);
                });
        }
        get isConstant() {
            for (const evaluatable of this[$evaluatables]) {
                if (!Evaluator.isConstant(evaluatable)) {
                    return false;
                }
            }
            return true;
        }
        [$evaluate]() {
            const evaluated = this[$evaluatables].map(evaluatable => Evaluator.evaluate(evaluatable));
            return Evaluator.applyIntrinsics(evaluated, this[$intrinsics])
                .map(numberNode => numberNode.number);
        }
    }

    var _a$5, _b$5, _c$3, _d$2;
    const $instances = Symbol('instances');
    const $activateListener = Symbol('activateListener');
    const $deactivateListener = Symbol('deactivateListener');
    const $notifyInstances = Symbol('notifyInstances');
    const $notify = Symbol('notify');
    const $scrollCallback = Symbol('callback');
    class ScrollObserver {
        constructor(callback) {
            this[$scrollCallback] = callback;
        }
        static [$notifyInstances]() {
            for (const instance of ScrollObserver[$instances]) {
                instance[$notify]();
            }
        }
        static [(_a$5 = $instances, $activateListener)]() {
            window.addEventListener('scroll', this[$notifyInstances], { passive: true });
        }
        static [$deactivateListener]() {
            window.removeEventListener('scroll', this[$notifyInstances]);
        }
        observe() {
            if (ScrollObserver[$instances].size === 0) {
                ScrollObserver[$activateListener]();
            }
            ScrollObserver[$instances].add(this);
        }
        disconnect() {
            ScrollObserver[$instances].delete(this);
            if (ScrollObserver[$instances].size === 0) {
                ScrollObserver[$deactivateListener]();
            }
        }
        [$notify]() {
            this[$scrollCallback]();
        }
        ;
    }
    ScrollObserver[_a$5] = new Set();
    const $computeStyleCallback = Symbol('computeStyleCallback');
    const $astWalker = Symbol('astWalker');
    const $dependencies = Symbol('dependencies');
    const $onScroll = Symbol('onScroll');
    class StyleEffector {
        constructor(callback) {
            this[_b$5] = {};
            this[_c$3] = new ASTWalker(['function']);
            this[_d$2] = () => {
                this[$computeStyleCallback]({ relatedState: 'window-scroll' });
            };
            this[$computeStyleCallback] = callback;
        }
        observeEffectsFor(ast) {
            const newDependencies = {};
            const oldDependencies = this[$dependencies];
            this[$astWalker].walk(ast, functionNode => {
                const { name } = functionNode;
                const firstArgument = functionNode.arguments[0];
                const firstTerm = firstArgument.terms[0];
                if (name.value !== 'env' || firstTerm == null ||
                    firstTerm.type !== 'ident') {
                    return;
                }
                switch (firstTerm.value) {
                    case 'window-scroll-y':
                        if (newDependencies['window-scroll'] == null) {
                            const observer = 'window-scroll' in oldDependencies ?
                                oldDependencies['window-scroll'] :
                                new ScrollObserver(this[$onScroll]);
                            observer.observe();
                            delete oldDependencies['window-scroll'];
                            newDependencies['window-scroll'] = observer;
                        }
                        break;
                }
            });
            for (const environmentState in oldDependencies) {
                const observer = oldDependencies[environmentState];
                observer.disconnect();
            }
            this[$dependencies] = newDependencies;
        }
        dispose() {
            for (const environmentState in this[$dependencies]) {
                const observer = this[$dependencies][environmentState];
                observer.disconnect();
            }
        }
    }
    _b$5 = $dependencies, _c$3 = $astWalker, _d$2 = $onScroll;

    const style = (config) => {
        const observeEffects = config.observeEffects || false;
        const getIntrinsics = config.intrinsics instanceof Function ?
            config.intrinsics :
            (() => config.intrinsics);
        return (proto, propertyName) => {
            const originalUpdated = proto.updated;
            const originalConnectedCallback = proto.connectedCallback;
            const originalDisconnectedCallback = proto.disconnectedCallback;
            const $styleEffector = Symbol(`${propertyName}StyleEffector`);
            const $styleEvaluator = Symbol(`${propertyName}StyleEvaluator`);
            const $updateEvaluator = Symbol(`${propertyName}UpdateEvaluator`);
            const $evaluateAndSync = Symbol(`${propertyName}EvaluateAndSync`);
            Object.defineProperties(proto, {
                [$styleEffector]: { value: null, writable: true },
                [$styleEvaluator]: { value: null, writable: true },
                [$updateEvaluator]: {
                    value: function () {
                        const ast = parseExpressions(this[propertyName]);
                        this[$styleEvaluator] =
                            new StyleEvaluator(ast, getIntrinsics(this));
                        if (this[$styleEffector] == null && observeEffects) {
                            this[$styleEffector] =
                                new StyleEffector(() => this[$evaluateAndSync]());
                        }
                        if (this[$styleEffector] != null) {
                            this[$styleEffector].observeEffectsFor(ast);
                        }
                    }
                },
                [$evaluateAndSync]: {
                    value: function () {
                        if (this[$styleEvaluator] == null) {
                            return;
                        }
                        const result = this[$styleEvaluator].evaluate();
                        this[config.updateHandler](result);
                    }
                },
                updated: {
                    value: function (changedProperties) {
                        if (changedProperties.has(propertyName)) {
                            this[$updateEvaluator]();
                            this[$evaluateAndSync]();
                        }
                        originalUpdated.call(this, changedProperties);
                    }
                },
                connectedCallback: {
                    value: function () {
                        originalConnectedCallback.call(this);
                        this.requestUpdate(propertyName, this[propertyName]);
                    }
                },
                disconnectedCallback: {
                    value: function () {
                        originalDisconnectedCallback.call(this);
                        if (this[$styleEffector] != null) {
                            this[$styleEffector].dispose();
                            this[$styleEffector] = null;
                        }
                    }
                }
            });
        };
    };

    const easeInOutQuad = (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const interpolate = (start, end, ease = easeInOutQuad) => (time) => start + (end - start) * ease(time);
    const sequence = (tracks, weights) => {
        const cumulativeSum = ((sum) => (value) => sum += value);
        const times = weights.map(cumulativeSum(0));
        return (time) => {
            time = clamp(time, 0, 1);
            time *= times[times.length - 1];
            const i = times.findIndex((val) => val >= time);
            const start = i < 1 ? 0 : times[i - 1];
            const end = times[i];
            return tracks[i]((time - start) / (end - start));
        };
    };
    const timeline = (path) => {
        const tracks = [];
        const weights = [];
        let lastValue = path.initialValue;
        for (let i = 0; i < path.keyframes.length; ++i) {
            const keyframe = path.keyframes[i];
            const { value, frames } = keyframe;
            const ease = keyframe.ease || easeInOutQuad;
            const track = interpolate(lastValue, value, ease);
            tracks.push(track);
            weights.push(frames);
            lastValue = value;
        }
        return sequence(tracks, weights);
    };

    var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const PROMPT_ANIMATION_TIME = 5000;
    const wiggle = timeline({
        initialValue: 0,
        keyframes: [
            { frames: 5, value: -1 },
            { frames: 1, value: -1 },
            { frames: 8, value: 1 },
            { frames: 1, value: 1 },
            { frames: 5, value: 0 },
            { frames: 18, value: 0 }
        ]
    });
    const fade = timeline({
        initialValue: 0,
        keyframes: [
            { frames: 1, value: 1 },
            { frames: 5, value: 1 },
            { frames: 1, value: 0 },
            { frames: 6, value: 0 }
        ]
    });
    const DEFAULT_FOV_DEG = 30;
    const DEFAULT_MIN_FOV_DEG = 12;
    const DEFAULT_CAMERA_ORBIT = '0deg 75deg 105%';
    const DEFAULT_CAMERA_TARGET = 'auto auto auto';
    const DEFAULT_FIELD_OF_VIEW = 'auto';
    const MINIMUM_RADIUS_RATIO = 2.2;
    const AZIMUTHAL_QUADRANT_LABELS = ['front', 'right', 'back', 'left'];
    const POLAR_TRIENT_LABELS = ['upper-', '', 'lower-'];
    const DEFAULT_INTERACTION_PROMPT_THRESHOLD = 3000;
    const INTERACTION_PROMPT = '. Use mouse, touch or arrow keys to move.';
    const InteractionPromptStrategy = {
        AUTO: 'auto',
        NONE: 'none'
    };
    const InteractionPromptStyle = {
        BASIC: 'basic',
        WIGGLE: 'wiggle'
    };
    const TouchAction = {
        PAN_Y: 'pan-y',
        PAN_X: 'pan-x',
        NONE: 'none'
    };
    const fieldOfViewIntrinsics = () => {
        return {
            basis: [degreesToRadians(numberNode(DEFAULT_FOV_DEG, 'deg'))],
            keywords: { auto: [null] }
        };
    };
    const minFieldOfViewIntrinsics = () => {
        return {
            basis: [degreesToRadians(numberNode(DEFAULT_MIN_FOV_DEG, 'deg'))],
            keywords: { auto: [null] }
        };
    };
    const cameraOrbitIntrinsics = (() => {
        const defaultTerms = parseExpressions(DEFAULT_CAMERA_ORBIT)[0]
            .terms;
        const theta = normalizeUnit(defaultTerms[0]);
        const phi = normalizeUnit(defaultTerms[1]);
        return (element) => {
            const radius = element[$scene].idealCameraDistance();
            return {
                basis: [theta, phi, numberNode(radius, 'm')],
                keywords: { auto: [null, null, numberNode(105, '%')] }
            };
        };
    })();
    const minCameraOrbitIntrinsics = (element) => {
        const radius = MINIMUM_RADIUS_RATIO * element[$scene].boundingSphere.radius;
        return {
            basis: [
                numberNode(-Infinity, 'rad'),
                numberNode(Math.PI / 8, 'rad'),
                numberNode(radius, 'm')
            ],
            keywords: { auto: [null, null, null] }
        };
    };
    const maxCameraOrbitIntrinsics = (element) => {
        const orbitIntrinsics = cameraOrbitIntrinsics(element);
        const evaluator = new StyleEvaluator([], orbitIntrinsics);
        const defaultRadius = evaluator.evaluate()[2];
        return {
            basis: [
                numberNode(Infinity, 'rad'),
                numberNode(Math.PI - Math.PI / 8, 'rad'),
                numberNode(defaultRadius, 'm')
            ],
            keywords: { auto: [null, null, null] }
        };
    };
    const cameraTargetIntrinsics = (element) => {
        const center = element[$scene].boundingBox.getCenter(new three.Vector3());
        return {
            basis: [
                numberNode(center.x, 'm'),
                numberNode(center.y, 'm'),
                numberNode(center.z, 'm')
            ],
            keywords: { auto: [null, null, null] }
        };
    };
    const HALF_PI = Math.PI / 2.0;
    const THIRD_PI = Math.PI / 3.0;
    const QUARTER_PI = HALF_PI / 2.0;
    const TAU = 2.0 * Math.PI;
    const $controls = Symbol('controls');
    const $panElement = Symbol('panElement');
    const $promptElement = Symbol('promptElement');
    const $promptAnimatedContainer = Symbol('promptAnimatedContainer');
    const $fingerAnimatedContainers = Symbol('fingerAnimatedContainers');
    const $deferInteractionPrompt = Symbol('deferInteractionPrompt');
    const $updateAria = Symbol('updateAria');
    const $updateCameraForRadius = Symbol('updateCameraForRadius');
    const $cancelPrompts = Symbol('cancelPrompts');
    const $onChange = Symbol('onChange');
    const $onPointerChange = Symbol('onPointerChange');
    const $waitingToPromptUser = Symbol('waitingToPromptUser');
    const $userHasInteracted = Symbol('userHasInteracted');
    const $promptElementVisibleTime = Symbol('promptElementVisibleTime');
    const $lastPromptOffset = Symbol('lastPromptOffset');
    const $cancellationSource = Symbol('cancellationSource');
    const $lastSpherical = Symbol('lastSpherical');
    const $jumpCamera = Symbol('jumpCamera');
    const $initialized = Symbol('initialized');
    const $maintainThetaPhi = Symbol('maintainThetaPhi');
    const $syncCameraOrbit = Symbol('syncCameraOrbit');
    const $syncFieldOfView = Symbol('syncFieldOfView');
    const $syncCameraTarget = Symbol('syncCameraTarget');
    const $syncMinCameraOrbit = Symbol('syncMinCameraOrbit');
    const $syncMaxCameraOrbit = Symbol('syncMaxCameraOrbit');
    const $syncMinFieldOfView = Symbol('syncMinFieldOfView');
    const $syncMaxFieldOfView = Symbol('syncMaxFieldOfView');
    const ControlsMixin = (ModelViewerElement) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        class ControlsModelViewerElement extends ModelViewerElement {
            constructor() {
                super(...arguments);
                this.cameraControls = false;
                this.cameraOrbit = DEFAULT_CAMERA_ORBIT;
                this.cameraTarget = DEFAULT_CAMERA_TARGET;
                this.fieldOfView = DEFAULT_FIELD_OF_VIEW;
                this.minCameraOrbit = 'auto';
                this.maxCameraOrbit = 'auto';
                this.minFieldOfView = 'auto';
                this.maxFieldOfView = 'auto';
                this.interactionPromptThreshold = DEFAULT_INTERACTION_PROMPT_THRESHOLD;
                this.interactionPrompt = InteractionPromptStrategy.AUTO;
                this.interactionPromptStyle = InteractionPromptStyle.WIGGLE;
                this.orbitSensitivity = 1;
                this.zoomSensitivity = 1;
                this.panSensitivity = 1;
                this.touchAction = TouchAction.NONE;
                this.disableZoom = false;
                this.disablePan = false;
                this.disableTap = false;
                this.interpolationDecay = DECAY_MILLISECONDS;
                this[_a] = this.shadowRoot.querySelector('.interaction-prompt');
                this[_b] = this.shadowRoot.querySelector('#prompt');
                this[_c] = [
                    this.shadowRoot.querySelector('#finger0'),
                    this.shadowRoot.querySelector('#finger1')
                ];
                this[_d] = this.shadowRoot.querySelector('.pan-target');
                this[_e] = 0;
                this[_f] = Infinity;
                this[_g] = false;
                this[_h] = false;
                this[_j] = ChangeSource.AUTOMATIC;
                this[_k] = new SmoothControls(this[$scene].camera, this[$userInputElement], this[$scene]);
                this[_l] = new three.Spherical();
                this[_m] = false;
                this[_o] = false;
                this[_p] = false;
                this[_q] = () => {
                    const source = this[$controls].changeSource;
                    this[$cancellationSource] = source;
                    if (source === ChangeSource.USER_INTERACTION) {
                        this[$userHasInteracted] = true;
                        this[$deferInteractionPrompt]();
                    }
                };
                this[_r] = () => {
                    this[$updateAria]();
                    this[$needsRender]();
                    const source = this[$controls].changeSource;
                    this.dispatchEvent(new CustomEvent('camera-change', { detail: { source } }));
                };
                this[_s] = (event) => {
                    this[$container].classList.toggle('pointer-tumbling', event.type === 'pointer-change-start');
                };
            }
            get inputSensitivity() {
                return this[$controls].inputSensitivity;
            }
            set inputSensitivity(value) {
                this[$controls].inputSensitivity = value;
            }
            getCameraOrbit() {
                const { theta, phi, radius } = this[$lastSpherical];
                return {
                    theta,
                    phi,
                    radius,
                    toString() {
                        return `${this.theta}rad ${this.phi}rad ${this.radius}m`;
                    }
                };
            }
            getCameraTarget() {
                return toVector3D(this[$renderer].isPresenting ? this[$renderer].arRenderer.target :
                    this[$scene].getTarget());
            }
            getFieldOfView() {
                return this[$controls].getFieldOfView();
            }
            getMinimumFieldOfView() {
                return this[$controls].options.minimumFieldOfView;
            }
            getMaximumFieldOfView() {
                return this[$controls].options.maximumFieldOfView;
            }
            getIdealAspect() {
                return this[$scene].idealAspect;
            }
            jumpCameraToGoal() {
                this[$jumpCamera] = true;
                this.requestUpdate($jumpCamera, false);
            }
            resetInteractionPrompt() {
                this[$lastPromptOffset] = 0;
                this[$promptElementVisibleTime] = Infinity;
                this[$userHasInteracted] = false;
                this[$waitingToPromptUser] =
                    this.interactionPrompt === InteractionPromptStrategy.AUTO &&
                        this.cameraControls;
            }
            zoom(keyPresses) {
                const event = new WheelEvent('wheel', { deltaY: -30 * keyPresses });
                this[$userInputElement].dispatchEvent(event);
            }
            connectedCallback() {
                super.connectedCallback();
                this[$controls].addEventListener('user-interaction', this[$cancelPrompts]);
                this[$controls].addEventListener('pointer-change-start', this[$onPointerChange]);
                this[$controls].addEventListener('pointer-change-end', this[$onPointerChange]);
            }
            disconnectedCallback() {
                super.disconnectedCallback();
                this[$controls].removeEventListener('user-interaction', this[$cancelPrompts]);
                this[$controls].removeEventListener('pointer-change-start', this[$onPointerChange]);
                this[$controls].removeEventListener('pointer-change-end', this[$onPointerChange]);
            }
            updated(changedProperties) {
                super.updated(changedProperties);
                const controls = this[$controls];
                const scene = this[$scene];
                if (changedProperties.has('cameraControls')) {
                    if (this.cameraControls) {
                        controls.enableInteraction();
                        if (this.interactionPrompt === InteractionPromptStrategy.AUTO) {
                            this[$waitingToPromptUser] = true;
                        }
                    }
                    else {
                        controls.disableInteraction();
                        this[$deferInteractionPrompt]();
                    }
                    this[$userInputElement].setAttribute('aria-label', this[$ariaLabel]);
                }
                if (changedProperties.has('disableZoom')) {
                    controls.disableZoom = this.disableZoom;
                }
                if (changedProperties.has('disablePan')) {
                    controls.enablePan = !this.disablePan;
                }
                if (changedProperties.has('disableTap')) {
                    controls.enableTap = !this.disableTap;
                }
                if (changedProperties.has('interactionPrompt') ||
                    changedProperties.has('cameraControls') ||
                    changedProperties.has('src')) {
                    if (this.interactionPrompt === InteractionPromptStrategy.AUTO &&
                        this.cameraControls && !this[$userHasInteracted]) {
                        this[$waitingToPromptUser] = true;
                    }
                    else {
                        this[$deferInteractionPrompt]();
                    }
                }
                if (changedProperties.has('interactionPromptStyle')) {
                    this[$promptAnimatedContainer].style.opacity =
                        this.interactionPromptStyle == InteractionPromptStyle.BASIC ? '1' :
                            '0';
                }
                if (changedProperties.has('touchAction')) {
                    const touchAction = this.touchAction;
                    controls.applyOptions({ touchAction });
                    controls.updateTouchActionStyle();
                }
                if (changedProperties.has('orbitSensitivity')) {
                    controls.orbitSensitivity = this.orbitSensitivity;
                }
                if (changedProperties.has('zoomSensitivity')) {
                    controls.zoomSensitivity = this.zoomSensitivity;
                }
                if (changedProperties.has('panSensitivity')) {
                    controls.panSensitivity = this.panSensitivity;
                }
                if (changedProperties.has('interpolationDecay')) {
                    controls.setDamperDecayTime(this.interpolationDecay);
                    scene.setTargetDamperDecayTime(this.interpolationDecay);
                }
                if (this[$jumpCamera] === true) {
                    Promise.resolve().then(() => {
                        controls.jumpToGoal();
                        scene.jumpToGoal();
                        this[$onChange]();
                        this[$jumpCamera] = false;
                    });
                }
            }
            async updateFraming() {
                const scene = this[$scene];
                const oldFramedFoV = scene.adjustedFoV(scene.framedFoVDeg);
                await scene.updateFraming();
                const newFramedFoV = scene.adjustedFoV(scene.framedFoVDeg);
                const zoom = this[$controls].getFieldOfView() / oldFramedFoV;
                this[$controls].setFieldOfView(newFramedFoV * zoom);
                this[$maintainThetaPhi] = true;
                this.requestUpdate('maxFieldOfView');
                this.requestUpdate('fieldOfView');
                this.requestUpdate('minCameraOrbit');
                this.requestUpdate('maxCameraOrbit');
                this.requestUpdate('cameraOrbit');
                await this.updateComplete;
            }
            interact(duration, finger0, finger1) {
                const inputElement = this[$userInputElement];
                const fingerElements = this[$fingerAnimatedContainers];
                if (fingerElements[0].style.opacity === '1') {
                    console.warn('interact() failed because an existing interaction is running.');
                    return;
                }
                const xy = new Array();
                xy.push({ x: timeline(finger0.x), y: timeline(finger0.y) });
                const positions = [{ x: xy[0].x(0), y: xy[0].y(0) }];
                if (finger1 != null) {
                    xy.push({ x: timeline(finger1.x), y: timeline(finger1.y) });
                    positions.push({ x: xy[1].x(0), y: xy[1].y(0) });
                }
                let startTime = performance.now();
                const { width, height } = this[$scene];
                const rect = this.getBoundingClientRect();
                const dispatchTouches = (type) => {
                    for (const [i, position] of positions.entries()) {
                        const { style } = fingerElements[i];
                        style.transform = `translateX(${width * position.x}px) translateY(${height * position.y}px)`;
                        if (type === 'pointerdown') {
                            style.opacity = '1';
                        }
                        else if (type === 'pointerup') {
                            style.opacity = '0';
                        }
                        const init = {
                            pointerId: i - 5678,
                            pointerType: 'touch',
                            target: inputElement,
                            clientX: width * position.x + rect.x,
                            clientY: height * position.y + rect.y,
                            altKey: true
                        };
                        inputElement.dispatchEvent(new PointerEvent(type, init));
                    }
                };
                const moveTouches = () => {
                    const changeSource = this[$cancellationSource];
                    if (changeSource !== ChangeSource.AUTOMATIC ||
                        !inputElement.isConnected) {
                        for (const fingerElement of this[$fingerAnimatedContainers]) {
                            fingerElement.style.opacity = '0';
                        }
                        dispatchTouches('pointercancel');
                        this.dispatchEvent(new CustomEvent('interact-stopped', { detail: { source: changeSource } }));
                        document.removeEventListener('visibilitychange', onVisibilityChange);
                        return;
                    }
                    const time = Math.min(1, (performance.now() - startTime) / duration);
                    for (const [i, position] of positions.entries()) {
                        position.x = xy[i].x(time);
                        position.y = xy[i].y(time);
                    }
                    dispatchTouches('pointermove');
                    if (time < 1) {
                        requestAnimationFrame(moveTouches);
                    }
                    else {
                        dispatchTouches('pointerup');
                        this.dispatchEvent(new CustomEvent('interact-stopped', { detail: { source: ChangeSource.AUTOMATIC } }));
                        document.removeEventListener('visibilitychange', onVisibilityChange);
                    }
                };
                const onVisibilityChange = () => {
                    let elapsed = 0;
                    if (document.visibilityState === 'hidden') {
                        elapsed = performance.now() - startTime;
                    }
                    else {
                        startTime = performance.now() - elapsed;
                    }
                };
                document.addEventListener('visibilitychange', onVisibilityChange);
                dispatchTouches('pointerdown');
                this[$cancellationSource] = ChangeSource.AUTOMATIC;
                requestAnimationFrame(moveTouches);
            }
            [(_a = $promptElement, _b = $promptAnimatedContainer, _c = $fingerAnimatedContainers, _d = $panElement, _e = $lastPromptOffset, _f = $promptElementVisibleTime, _g = $userHasInteracted, _h = $waitingToPromptUser, _j = $cancellationSource, _k = $controls, _l = $lastSpherical, _m = $jumpCamera, _o = $initialized, _p = $maintainThetaPhi, $syncFieldOfView)](style) {
                const controls = this[$controls];
                const scene = this[$scene];
                scene.framedFoVDeg = style[0] * 180 / Math.PI;
                controls.changeSource = ChangeSource.NONE;
                controls.setFieldOfView(scene.adjustedFoV(scene.framedFoVDeg));
                this[$cancelPrompts]();
            }
            [$syncCameraOrbit](style) {
                const controls = this[$controls];
                if (this[$maintainThetaPhi]) {
                    const { theta, phi } = this.getCameraOrbit();
                    style[0] = theta;
                    style[1] = phi;
                    this[$maintainThetaPhi] = false;
                }
                controls.changeSource = ChangeSource.NONE;
                controls.setOrbit(style[0], style[1], style[2]);
                this[$cancelPrompts]();
            }
            [$syncMinCameraOrbit](style) {
                this[$controls].applyOptions({
                    minimumAzimuthalAngle: style[0],
                    minimumPolarAngle: style[1],
                    minimumRadius: style[2]
                });
                this.jumpCameraToGoal();
            }
            [$syncMaxCameraOrbit](style) {
                this[$controls].applyOptions({
                    maximumAzimuthalAngle: style[0],
                    maximumPolarAngle: style[1],
                    maximumRadius: style[2]
                });
                this[$updateCameraForRadius](style[2]);
                this.jumpCameraToGoal();
            }
            [$syncMinFieldOfView](style) {
                this[$controls].applyOptions({ minimumFieldOfView: style[0] * 180 / Math.PI });
                this.jumpCameraToGoal();
            }
            [$syncMaxFieldOfView](style) {
                const fov = this[$scene].adjustedFoV(style[0] * 180 / Math.PI);
                this[$controls].applyOptions({ maximumFieldOfView: fov });
                this.jumpCameraToGoal();
            }
            [$syncCameraTarget](style) {
                const [x, y, z] = style;
                if (!this[$renderer].arRenderer.isPresenting) {
                    this[$scene].setTarget(x, y, z);
                }
                this[$controls].changeSource = ChangeSource.NONE;
                this[$renderer].arRenderer.updateTarget();
                this[$cancelPrompts]();
            }
            [$tick](time, delta) {
                super[$tick](time, delta);
                if (this[$renderer].isPresenting || !this[$getModelIsVisible]()) {
                    return;
                }
                const controls = this[$controls];
                const scene = this[$scene];
                const now = performance.now();
                if (this[$waitingToPromptUser]) {
                    if (this.loaded &&
                        now > this[$loadedTime] + this.interactionPromptThreshold) {
                        this[$waitingToPromptUser] = false;
                        this[$promptElementVisibleTime] = now;
                        this[$promptElement].classList.add('visible');
                    }
                }
                if (isFinite(this[$promptElementVisibleTime]) &&
                    this.interactionPromptStyle === InteractionPromptStyle.WIGGLE) {
                    const animationTime = ((now - this[$promptElementVisibleTime]) / PROMPT_ANIMATION_TIME) %
                        1;
                    const offset = wiggle(animationTime);
                    const opacity = fade(animationTime);
                    this[$promptAnimatedContainer].style.opacity = `${opacity}`;
                    if (offset !== this[$lastPromptOffset]) {
                        const xOffset = offset * scene.width * 0.05;
                        const deltaTheta = (offset - this[$lastPromptOffset]) * Math.PI / 16;
                        this[$promptAnimatedContainer].style.transform =
                            `translateX(${xOffset}px)`;
                        controls.changeSource = ChangeSource.AUTOMATIC;
                        controls.adjustOrbit(deltaTheta, 0, 0);
                        this[$lastPromptOffset] = offset;
                    }
                }
                const cameraMoved = controls.update(time, delta);
                const targetMoved = scene.updateTarget(delta);
                if (cameraMoved || targetMoved) {
                    this[$onChange]();
                }
            }
            [$deferInteractionPrompt]() {
                this[$waitingToPromptUser] = false;
                this[$promptElement].classList.remove('visible');
                this[$promptElementVisibleTime] = Infinity;
            }
            [$updateCameraForRadius](radius) {
                const maximumRadius = Math.max(this[$scene].farRadius(), radius);
                const near = 0;
                const far = Math.abs(2 * maximumRadius);
                this[$controls].updateNearFar(near, far);
            }
            [$updateAria]() {
                const { theta, phi } = this[$controls].getCameraSpherical(this[$lastSpherical]);
                const azimuthalQuadrant = (4 + Math.floor(((theta % TAU) + QUARTER_PI) / HALF_PI)) % 4;
                const polarTrient = Math.floor(phi / THIRD_PI);
                const azimuthalQuadrantLabel = AZIMUTHAL_QUADRANT_LABELS[azimuthalQuadrant];
                const polarTrientLabel = POLAR_TRIENT_LABELS[polarTrient];
                this[$updateStatus](`View from stage ${polarTrientLabel}${azimuthalQuadrantLabel}`);
            }
            get [$ariaLabel]() {
                return super[$ariaLabel].replace(/\.$/, '') +
                    (this.cameraControls ? INTERACTION_PROMPT : '');
            }
            async [$onResize](event) {
                const controls = this[$controls];
                const scene = this[$scene];
                const oldFramedFoV = scene.adjustedFoV(scene.framedFoVDeg);
                super[$onResize](event);
                const fovRatio = scene.adjustedFoV(scene.framedFoVDeg) / oldFramedFoV;
                const fov = controls.getFieldOfView() * (isFinite(fovRatio) ? fovRatio : 1);
                controls.updateAspect(this[$scene].aspect);
                this.requestUpdate('maxFieldOfView', this.maxFieldOfView);
                await this.updateComplete;
                this[$controls].setFieldOfView(fov);
                this.jumpCameraToGoal();
            }
            [$onModelLoad]() {
                super[$onModelLoad]();
                if (this[$initialized]) {
                    this[$maintainThetaPhi] = true;
                }
                else {
                    this[$initialized] = true;
                }
                this.requestUpdate('maxFieldOfView', this.maxFieldOfView);
                this.requestUpdate('fieldOfView', this.fieldOfView);
                this.requestUpdate('minCameraOrbit', this.minCameraOrbit);
                this.requestUpdate('maxCameraOrbit', this.maxCameraOrbit);
                this.requestUpdate('cameraOrbit', this.cameraOrbit);
                this.requestUpdate('cameraTarget', this.cameraTarget);
                this.jumpCameraToGoal();
            }
        }
        _q = $cancelPrompts, _r = $onChange, _s = $onPointerChange;
        __decorate$6([
            n$8({ type: Boolean, attribute: 'camera-controls' })
        ], ControlsModelViewerElement.prototype, "cameraControls", void 0);
        __decorate$6([
            style({
                intrinsics: cameraOrbitIntrinsics,
                observeEffects: true,
                updateHandler: $syncCameraOrbit
            }),
            n$8({ type: String, attribute: 'camera-orbit', hasChanged: () => true })
        ], ControlsModelViewerElement.prototype, "cameraOrbit", void 0);
        __decorate$6([
            style({
                intrinsics: cameraTargetIntrinsics,
                observeEffects: true,
                updateHandler: $syncCameraTarget
            }),
            n$8({ type: String, attribute: 'camera-target', hasChanged: () => true })
        ], ControlsModelViewerElement.prototype, "cameraTarget", void 0);
        __decorate$6([
            style({
                intrinsics: fieldOfViewIntrinsics,
                observeEffects: true,
                updateHandler: $syncFieldOfView
            }),
            n$8({ type: String, attribute: 'field-of-view', hasChanged: () => true })
        ], ControlsModelViewerElement.prototype, "fieldOfView", void 0);
        __decorate$6([
            style({
                intrinsics: minCameraOrbitIntrinsics,
                updateHandler: $syncMinCameraOrbit
            }),
            n$8({ type: String, attribute: 'min-camera-orbit', hasChanged: () => true })
        ], ControlsModelViewerElement.prototype, "minCameraOrbit", void 0);
        __decorate$6([
            style({
                intrinsics: maxCameraOrbitIntrinsics,
                updateHandler: $syncMaxCameraOrbit
            }),
            n$8({ type: String, attribute: 'max-camera-orbit', hasChanged: () => true })
        ], ControlsModelViewerElement.prototype, "maxCameraOrbit", void 0);
        __decorate$6([
            style({
                intrinsics: minFieldOfViewIntrinsics,
                updateHandler: $syncMinFieldOfView
            }),
            n$8({ type: String, attribute: 'min-field-of-view', hasChanged: () => true })
        ], ControlsModelViewerElement.prototype, "minFieldOfView", void 0);
        __decorate$6([
            style({ intrinsics: fieldOfViewIntrinsics, updateHandler: $syncMaxFieldOfView }),
            n$8({ type: String, attribute: 'max-field-of-view', hasChanged: () => true })
        ], ControlsModelViewerElement.prototype, "maxFieldOfView", void 0);
        __decorate$6([
            n$8({ type: Number, attribute: 'interaction-prompt-threshold' })
        ], ControlsModelViewerElement.prototype, "interactionPromptThreshold", void 0);
        __decorate$6([
            n$8({ type: String, attribute: 'interaction-prompt' })
        ], ControlsModelViewerElement.prototype, "interactionPrompt", void 0);
        __decorate$6([
            n$8({ type: String, attribute: 'interaction-prompt-style' })
        ], ControlsModelViewerElement.prototype, "interactionPromptStyle", void 0);
        __decorate$6([
            n$8({ type: Number, attribute: 'orbit-sensitivity' })
        ], ControlsModelViewerElement.prototype, "orbitSensitivity", void 0);
        __decorate$6([
            n$8({ type: Number, attribute: 'zoom-sensitivity' })
        ], ControlsModelViewerElement.prototype, "zoomSensitivity", void 0);
        __decorate$6([
            n$8({ type: Number, attribute: 'pan-sensitivity' })
        ], ControlsModelViewerElement.prototype, "panSensitivity", void 0);
        __decorate$6([
            n$8({ type: String, attribute: 'touch-action' })
        ], ControlsModelViewerElement.prototype, "touchAction", void 0);
        __decorate$6([
            n$8({ type: Boolean, attribute: 'disable-zoom' })
        ], ControlsModelViewerElement.prototype, "disableZoom", void 0);
        __decorate$6([
            n$8({ type: Boolean, attribute: 'disable-pan' })
        ], ControlsModelViewerElement.prototype, "disablePan", void 0);
        __decorate$6([
            n$8({ type: Boolean, attribute: 'disable-tap' })
        ], ControlsModelViewerElement.prototype, "disableTap", void 0);
        __decorate$6([
            n$8({ type: Number, attribute: 'interpolation-decay' })
        ], ControlsModelViewerElement.prototype, "interpolationDecay", void 0);
        return ControlsModelViewerElement;
    };

    const PAN_SENSITIVITY = 0.018;
    const TAP_DISTANCE = 2;
    const TAP_MS = 300;
    const vector2 = new three.Vector2();
    const vector3$2 = new three.Vector3();
    const DEFAULT_OPTIONS = Object.freeze({
        minimumRadius: 0,
        maximumRadius: Infinity,
        minimumPolarAngle: Math.PI / 8,
        maximumPolarAngle: Math.PI - Math.PI / 8,
        minimumAzimuthalAngle: -Infinity,
        maximumAzimuthalAngle: Infinity,
        minimumFieldOfView: 10,
        maximumFieldOfView: 45,
        touchAction: 'none'
    });
    const KEYBOARD_ORBIT_INCREMENT = Math.PI / 8;
    const ZOOM_SENSITIVITY = 0.04;
    const PAN_KEY_INCREMENT = 10;
    const ChangeSource = {
        USER_INTERACTION: 'user-interaction',
        NONE: 'none',
        AUTOMATIC: 'automatic'
    };
    class SmoothControls extends three.EventDispatcher {
        constructor(camera, element, scene) {
            super();
            this.camera = camera;
            this.element = element;
            this.scene = scene;
            this.orbitSensitivity = 1;
            this.zoomSensitivity = 1;
            this.panSensitivity = 1;
            this.inputSensitivity = 1;
            this.changeSource = ChangeSource.NONE;
            this._interactionEnabled = false;
            this._disableZoom = false;
            this.isUserPointing = false;
            this.enablePan = true;
            this.enableTap = true;
            this.panProjection = new three.Matrix3();
            this.panPerPixel = 0;
            this.spherical = new three.Spherical();
            this.goalSpherical = new three.Spherical();
            this.thetaDamper = new Damper();
            this.phiDamper = new Damper();
            this.radiusDamper = new Damper();
            this.logFov = Math.log(DEFAULT_OPTIONS.maximumFieldOfView);
            this.goalLogFov = this.logFov;
            this.fovDamper = new Damper();
            this.touchMode = null;
            this.pointers = [];
            this.startTime = 0;
            this.startPointerPosition = { clientX: 0, clientY: 0 };
            this.lastSeparation = 0;
            this.touchDecided = false;
            this.onContext = (event) => {
                if (this.enablePan) {
                    event.preventDefault();
                }
                else {
                    for (const pointer of this.pointers) {
                        this.onPointerUp(new PointerEvent('pointercancel', Object.assign(Object.assign({}, this.startPointerPosition), { pointerId: pointer.id })));
                    }
                }
            };
            this.touchModeZoom = (dx, dy) => {
                if (!this._disableZoom) {
                    const touchDistance = this.twoTouchDistance(this.pointers[0], this.pointers[1]);
                    const deltaZoom = ZOOM_SENSITIVITY * this.zoomSensitivity *
                        (this.lastSeparation - touchDistance) * 50 / this.scene.height;
                    this.lastSeparation = touchDistance;
                    this.userAdjustOrbit(0, 0, deltaZoom);
                }
                if (this.panPerPixel > 0) {
                    this.movePan(dx, dy);
                }
            };
            this.disableScroll = (event) => {
                event.preventDefault();
            };
            this.touchModeRotate = (dx, dy) => {
                const { touchAction } = this._options;
                if (!this.touchDecided && touchAction !== 'none') {
                    this.touchDecided = true;
                    const dxMag = Math.abs(dx);
                    const dyMag = Math.abs(dy);
                    if (this.changeSource === ChangeSource.USER_INTERACTION &&
                        ((touchAction === 'pan-y' && dyMag > dxMag) ||
                            (touchAction === 'pan-x' && dxMag > dyMag))) {
                        this.touchMode = null;
                        return;
                    }
                    else {
                        this.element.addEventListener('touchmove', this.disableScroll, { passive: false });
                    }
                }
                this.handleSinglePointerMove(dx, dy);
            };
            this.onPointerDown = (event) => {
                if (this.pointers.length > 2) {
                    return;
                }
                const { element } = this;
                if (this.pointers.length === 0) {
                    element.addEventListener('pointermove', this.onPointerMove);
                    element.addEventListener('pointerup', this.onPointerUp);
                    this.touchMode = null;
                    this.touchDecided = false;
                    this.startPointerPosition.clientX = event.clientX;
                    this.startPointerPosition.clientY = event.clientY;
                    this.startTime = performance.now();
                }
                try {
                    element.setPointerCapture(event.pointerId);
                }
                catch (_a) {
                }
                this.pointers.push({ clientX: event.clientX, clientY: event.clientY, id: event.pointerId });
                this.isUserPointing = false;
                if (event.pointerType === 'touch') {
                    this.changeSource = event.altKey ?
                        ChangeSource.AUTOMATIC :
                        ChangeSource.USER_INTERACTION;
                    this.onTouchChange(event);
                }
                else {
                    this.changeSource = ChangeSource.USER_INTERACTION;
                    this.onMouseDown(event);
                }
                if (this.changeSource === ChangeSource.USER_INTERACTION) {
                    this.dispatchEvent({ type: 'user-interaction' });
                }
            };
            this.onPointerMove = (event) => {
                const pointer = this.pointers.find((pointer) => pointer.id === event.pointerId);
                if (pointer == null) {
                    return;
                }
                if (event.pointerType === 'mouse' && event.buttons === 0) {
                    this.onPointerUp(event);
                    return;
                }
                const numTouches = this.pointers.length;
                const dx = (event.clientX - pointer.clientX) / numTouches;
                const dy = (event.clientY - pointer.clientY) / numTouches;
                if (dx === 0 && dy === 0) {
                    return;
                }
                pointer.clientX = event.clientX;
                pointer.clientY = event.clientY;
                if (event.pointerType === 'touch') {
                    this.changeSource = event.altKey ?
                        ChangeSource.AUTOMATIC :
                        ChangeSource.USER_INTERACTION;
                    if (this.touchMode !== null) {
                        this.touchMode(dx, dy);
                    }
                }
                else {
                    this.changeSource = ChangeSource.USER_INTERACTION;
                    if (this.panPerPixel > 0) {
                        this.movePan(dx, dy);
                    }
                    else {
                        this.handleSinglePointerMove(dx, dy);
                    }
                }
            };
            this.onPointerUp = (event) => {
                const { element } = this;
                const index = this.pointers.findIndex((pointer) => pointer.id === event.pointerId);
                if (index !== -1) {
                    this.pointers.splice(index, 1);
                }
                if (this.panPerPixel > 0 && !event.altKey) {
                    this.resetRadius();
                }
                if (this.pointers.length === 0) {
                    element.removeEventListener('pointermove', this.onPointerMove);
                    element.removeEventListener('pointerup', this.onPointerUp);
                    element.removeEventListener('touchmove', this.disableScroll);
                    if (this.enablePan && this.enableTap) {
                        this.recenter(event);
                    }
                }
                else if (this.touchMode !== null) {
                    this.onTouchChange(event);
                }
                this.scene.element[$panElement].style.opacity = 0;
                element.style.cursor = 'grab';
                this.panPerPixel = 0;
                if (this.isUserPointing) {
                    this.dispatchEvent({ type: 'pointer-change-end' });
                }
            };
            this.onWheel = (event) => {
                this.changeSource = ChangeSource.USER_INTERACTION;
                const deltaZoom = event.deltaY *
                    (event.deltaMode == 1 ? 18 : 1) * ZOOM_SENSITIVITY *
                    this.zoomSensitivity / 30;
                this.userAdjustOrbit(0, 0, deltaZoom);
                event.preventDefault();
                this.dispatchEvent({ type: 'user-interaction' });
            };
            this.onKeyDown = (event) => {
                const { changeSource } = this;
                this.changeSource = ChangeSource.USER_INTERACTION;
                const relevantKey = (event.shiftKey && this.enablePan) ?
                    this.panKeyCodeHandler(event) :
                    this.orbitZoomKeyCodeHandler(event);
                if (relevantKey) {
                    event.preventDefault();
                    this.dispatchEvent({ type: 'user-interaction' });
                }
                else {
                    this.changeSource = changeSource;
                }
            };
            this._options = Object.assign({}, DEFAULT_OPTIONS);
            this.setOrbit(0, Math.PI / 2, 1);
            this.setFieldOfView(100);
            this.jumpToGoal();
        }
        get interactionEnabled() {
            return this._interactionEnabled;
        }
        enableInteraction() {
            if (this._interactionEnabled === false) {
                const { element } = this;
                element.addEventListener('pointerdown', this.onPointerDown);
                element.addEventListener('pointercancel', this.onPointerUp);
                if (!this._disableZoom) {
                    element.addEventListener('wheel', this.onWheel);
                }
                element.addEventListener('keydown', this.onKeyDown);
                element.addEventListener('touchmove', () => { }, { passive: false });
                element.addEventListener('contextmenu', this.onContext);
                this.element.style.cursor = 'grab';
                this._interactionEnabled = true;
                this.updateTouchActionStyle();
            }
        }
        disableInteraction() {
            if (this._interactionEnabled === true) {
                const { element } = this;
                element.removeEventListener('pointerdown', this.onPointerDown);
                element.removeEventListener('pointermove', this.onPointerMove);
                element.removeEventListener('pointerup', this.onPointerUp);
                element.removeEventListener('pointercancel', this.onPointerUp);
                element.removeEventListener('wheel', this.onWheel);
                element.removeEventListener('keydown', this.onKeyDown);
                element.removeEventListener('contextmenu', this.onContext);
                element.style.cursor = '';
                this.touchMode = null;
                this._interactionEnabled = false;
                this.updateTouchActionStyle();
            }
        }
        get options() {
            return this._options;
        }
        set disableZoom(disable) {
            if (this._disableZoom != disable) {
                this._disableZoom = disable;
                if (disable === true) {
                    this.element.removeEventListener('wheel', this.onWheel);
                }
                else {
                    this.element.addEventListener('wheel', this.onWheel);
                }
                this.updateTouchActionStyle();
            }
        }
        getCameraSpherical(target = new three.Spherical()) {
            return target.copy(this.spherical);
        }
        getFieldOfView() {
            return this.camera.fov;
        }
        applyOptions(_options) {
            Object.assign(this._options, _options);
            this.setOrbit();
            this.setFieldOfView(Math.exp(this.goalLogFov));
        }
        updateNearFar(nearPlane, farPlane) {
            this.camera.far = farPlane === 0 ? 2 : farPlane;
            this.camera.near = Math.max(nearPlane, this.camera.far / 1000);
            this.camera.updateProjectionMatrix();
        }
        updateAspect(aspect) {
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
        }
        setOrbit(goalTheta = this.goalSpherical.theta, goalPhi = this.goalSpherical.phi, goalRadius = this.goalSpherical.radius) {
            const { minimumAzimuthalAngle, maximumAzimuthalAngle, minimumPolarAngle, maximumPolarAngle, minimumRadius, maximumRadius } = this._options;
            const { theta, phi, radius } = this.goalSpherical;
            const nextTheta = clamp(goalTheta, minimumAzimuthalAngle, maximumAzimuthalAngle);
            if (!isFinite(minimumAzimuthalAngle) &&
                !isFinite(maximumAzimuthalAngle)) {
                this.spherical.theta =
                    this.wrapAngle(this.spherical.theta - nextTheta) + nextTheta;
            }
            const nextPhi = clamp(goalPhi, minimumPolarAngle, maximumPolarAngle);
            const nextRadius = clamp(goalRadius, minimumRadius, maximumRadius);
            if (nextTheta === theta && nextPhi === phi && nextRadius === radius) {
                return false;
            }
            if (!isFinite(nextTheta) || !isFinite(nextPhi) || !isFinite(nextRadius)) {
                return false;
            }
            this.goalSpherical.theta = nextTheta;
            this.goalSpherical.phi = nextPhi;
            this.goalSpherical.radius = nextRadius;
            this.goalSpherical.makeSafe();
            return true;
        }
        setRadius(radius) {
            this.goalSpherical.radius = radius;
            this.setOrbit();
        }
        setFieldOfView(fov) {
            const { minimumFieldOfView, maximumFieldOfView } = this._options;
            fov = clamp(fov, minimumFieldOfView, maximumFieldOfView);
            this.goalLogFov = Math.log(fov);
        }
        setDamperDecayTime(decayMilliseconds) {
            this.thetaDamper.setDecayTime(decayMilliseconds);
            this.phiDamper.setDecayTime(decayMilliseconds);
            this.radiusDamper.setDecayTime(decayMilliseconds);
            this.fovDamper.setDecayTime(decayMilliseconds);
        }
        adjustOrbit(deltaTheta, deltaPhi, deltaZoom) {
            const { theta, phi, radius } = this.goalSpherical;
            const { minimumRadius, maximumRadius, minimumFieldOfView, maximumFieldOfView } = this._options;
            const dTheta = this.spherical.theta - theta;
            const dThetaLimit = Math.PI - 0.001;
            const goalTheta = theta - clamp(deltaTheta, -dThetaLimit - dTheta, dThetaLimit - dTheta);
            const goalPhi = phi - deltaPhi;
            const deltaRatio = deltaZoom === 0 ?
                0 :
                ((deltaZoom > 0 ? maximumRadius : minimumRadius) - radius) /
                    (Math.log(deltaZoom > 0 ? maximumFieldOfView : minimumFieldOfView) -
                        this.goalLogFov);
            const goalRadius = radius +
                deltaZoom *
                    (isFinite(deltaRatio) ? deltaRatio :
                        (maximumRadius - minimumRadius) * 2);
            this.setOrbit(goalTheta, goalPhi, goalRadius);
            if (deltaZoom !== 0) {
                const goalLogFov = this.goalLogFov + deltaZoom;
                this.setFieldOfView(Math.exp(goalLogFov));
            }
        }
        jumpToGoal() {
            this.update(0, SETTLING_TIME);
        }
        update(_time, delta) {
            if (this.isStationary()) {
                return false;
            }
            const { maximumPolarAngle, maximumRadius } = this._options;
            const dTheta = this.spherical.theta - this.goalSpherical.theta;
            if (Math.abs(dTheta) > Math.PI &&
                !isFinite(this._options.minimumAzimuthalAngle) &&
                !isFinite(this._options.maximumAzimuthalAngle)) {
                this.spherical.theta -= Math.sign(dTheta) * 2 * Math.PI;
            }
            this.spherical.theta = this.thetaDamper.update(this.spherical.theta, this.goalSpherical.theta, delta, Math.PI);
            this.spherical.phi = this.phiDamper.update(this.spherical.phi, this.goalSpherical.phi, delta, maximumPolarAngle);
            this.spherical.radius = this.radiusDamper.update(this.spherical.radius, this.goalSpherical.radius, delta, maximumRadius);
            this.logFov = this.fovDamper.update(this.logFov, this.goalLogFov, delta, 1);
            this.moveCamera();
            return true;
        }
        updateTouchActionStyle() {
            const { style } = this.element;
            if (this._interactionEnabled) {
                const { touchAction } = this._options;
                if (this._disableZoom && touchAction !== 'none') {
                    style.touchAction = 'manipulation';
                }
                else {
                    style.touchAction = touchAction;
                }
            }
            else {
                style.touchAction = '';
            }
        }
        isStationary() {
            return this.goalSpherical.theta === this.spherical.theta &&
                this.goalSpherical.phi === this.spherical.phi &&
                this.goalSpherical.radius === this.spherical.radius &&
                this.goalLogFov === this.logFov;
        }
        moveCamera() {
            this.spherical.makeSafe();
            this.camera.position.setFromSpherical(this.spherical);
            this.camera.setRotationFromEuler(new three.Euler(this.spherical.phi - Math.PI / 2, this.spherical.theta, 0, 'YXZ'));
            if (this.camera.fov !== Math.exp(this.logFov)) {
                this.camera.fov = Math.exp(this.logFov);
                this.camera.updateProjectionMatrix();
            }
        }
        userAdjustOrbit(deltaTheta, deltaPhi, deltaZoom) {
            this.adjustOrbit(deltaTheta * this.orbitSensitivity * this.inputSensitivity, deltaPhi * this.orbitSensitivity * this.inputSensitivity, deltaZoom * this.inputSensitivity);
        }
        wrapAngle(radians) {
            const normalized = (radians + Math.PI) / (2 * Math.PI);
            const wrapped = normalized - Math.floor(normalized);
            return wrapped * 2 * Math.PI - Math.PI;
        }
        pixelLengthToSphericalAngle(pixelLength) {
            return 2 * Math.PI * pixelLength / this.scene.height;
        }
        twoTouchDistance(touchOne, touchTwo) {
            const { clientX: xOne, clientY: yOne } = touchOne;
            const { clientX: xTwo, clientY: yTwo } = touchTwo;
            const xDelta = xTwo - xOne;
            const yDelta = yTwo - yOne;
            return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
        }
        handleSinglePointerMove(dx, dy) {
            const deltaTheta = this.pixelLengthToSphericalAngle(dx);
            const deltaPhi = this.pixelLengthToSphericalAngle(dy);
            if (this.isUserPointing === false) {
                this.isUserPointing = true;
                this.dispatchEvent({ type: 'pointer-change-start' });
            }
            this.userAdjustOrbit(deltaTheta, deltaPhi, 0);
        }
        initializePan() {
            const { theta, phi } = this.spherical;
            const psi = theta - this.scene.yaw;
            this.panPerPixel =
                PAN_SENSITIVITY * this.panSensitivity / this.scene.height;
            this.panProjection.set(-Math.cos(psi), -Math.cos(phi) * Math.sin(psi), 0, 0, Math.sin(phi), 0, Math.sin(psi), -Math.cos(phi) * Math.cos(psi), 0);
        }
        movePan(dx, dy) {
            const { scene } = this;
            const dxy = vector3$2.set(dx, dy, 0).multiplyScalar(this.inputSensitivity);
            const metersPerPixel = this.spherical.radius * Math.exp(this.logFov) * this.panPerPixel;
            dxy.multiplyScalar(metersPerPixel);
            const target = scene.getTarget();
            target.add(dxy.applyMatrix3(this.panProjection));
            scene.boundingSphere.clampPoint(target, target);
            scene.setTarget(target.x, target.y, target.z);
        }
        recenter(pointer) {
            if (performance.now() > this.startTime + TAP_MS ||
                Math.abs(pointer.clientX - this.startPointerPosition.clientX) >
                    TAP_DISTANCE ||
                Math.abs(pointer.clientY - this.startPointerPosition.clientY) >
                    TAP_DISTANCE) {
                return;
            }
            const { scene } = this;
            const hit = scene.positionAndNormalFromPoint(scene.getNDC(pointer.clientX, pointer.clientY));
            if (hit == null) {
                const { cameraTarget } = scene.element;
                scene.element.cameraTarget = '';
                scene.element.cameraTarget = cameraTarget;
                this.userAdjustOrbit(0, 0, 1);
            }
            else {
                scene.target.worldToLocal(hit.position);
                scene.setTarget(hit.position.x, hit.position.y, hit.position.z);
            }
        }
        resetRadius() {
            const { scene } = this;
            const hit = scene.positionAndNormalFromPoint(vector2.set(0, 0));
            if (hit == null) {
                return;
            }
            scene.target.worldToLocal(hit.position);
            const goalTarget = scene.getTarget();
            const { theta, phi } = this.spherical;
            const psi = theta - scene.yaw;
            const n = vector3$2.set(Math.sin(phi) * Math.sin(psi), Math.cos(phi), Math.sin(phi) * Math.cos(psi));
            const dr = n.dot(hit.position.sub(goalTarget));
            goalTarget.add(n.multiplyScalar(dr));
            scene.setTarget(goalTarget.x, goalTarget.y, goalTarget.z);
            this.setOrbit(undefined, undefined, this.goalSpherical.radius - dr);
        }
        onTouchChange(event) {
            if (this.pointers.length === 1) {
                this.touchMode = this.touchModeRotate;
            }
            else {
                if (this._disableZoom) {
                    this.touchMode = null;
                    this.element.removeEventListener('touchmove', this.disableScroll);
                    return;
                }
                this.touchMode = (this.touchDecided && this.touchMode === null) ?
                    null :
                    this.touchModeZoom;
                this.touchDecided = true;
                this.element.addEventListener('touchmove', this.disableScroll, { passive: false });
                this.lastSeparation =
                    this.twoTouchDistance(this.pointers[0], this.pointers[1]);
                if (this.enablePan && this.touchMode != null) {
                    this.initializePan();
                    if (!event.altKey) {
                        this.scene.element[$panElement].style.opacity = 1;
                    }
                }
            }
        }
        onMouseDown(event) {
            this.panPerPixel = 0;
            if (this.enablePan &&
                (event.button === 2 || event.ctrlKey || event.metaKey ||
                    event.shiftKey)) {
                this.initializePan();
                this.scene.element[$panElement].style.opacity = 1;
            }
            this.element.style.cursor = 'grabbing';
        }
        orbitZoomKeyCodeHandler(event) {
            let relevantKey = true;
            switch (event.key) {
                case 'PageUp':
                    this.userAdjustOrbit(0, 0, ZOOM_SENSITIVITY * this.zoomSensitivity);
                    break;
                case 'PageDown':
                    this.userAdjustOrbit(0, 0, -1 * ZOOM_SENSITIVITY * this.zoomSensitivity);
                    break;
                case 'ArrowUp':
                    this.userAdjustOrbit(0, -KEYBOARD_ORBIT_INCREMENT, 0);
                    break;
                case 'ArrowDown':
                    this.userAdjustOrbit(0, KEYBOARD_ORBIT_INCREMENT, 0);
                    break;
                case 'ArrowLeft':
                    this.userAdjustOrbit(-KEYBOARD_ORBIT_INCREMENT, 0, 0);
                    break;
                case 'ArrowRight':
                    this.userAdjustOrbit(KEYBOARD_ORBIT_INCREMENT, 0, 0);
                    break;
                default:
                    relevantKey = false;
                    break;
            }
            return relevantKey;
        }
        panKeyCodeHandler(event) {
            this.initializePan();
            let relevantKey = true;
            switch (event.key) {
                case 'ArrowUp':
                    this.movePan(0, -1 * PAN_KEY_INCREMENT);
                    break;
                case 'ArrowDown':
                    this.movePan(0, PAN_KEY_INCREMENT);
                    break;
                case 'ArrowLeft':
                    this.movePan(-1 * PAN_KEY_INCREMENT, 0);
                    break;
                case 'ArrowRight':
                    this.movePan(PAN_KEY_INCREMENT, 0);
                    break;
                default:
                    relevantKey = false;
                    break;
            }
            return relevantKey;
        }
    }

    const INIT_FRAMES = 30;
    const AR_SHADOW_INTENSITY = 0.8;
    const ROTATION_RATE = 1.5;
    const HIT_ANGLE_DEG = 20;
    const SCALE_SNAP_HIGH = 1.3;
    const SCALE_SNAP_LOW = 1 / SCALE_SNAP_HIGH;
    const MIN_VIEWPORT_SCALE = 0.25;
    const MAX_DISTANCE = 10;
    const ARStatus = {
        NOT_PRESENTING: 'not-presenting',
        SESSION_STARTED: 'session-started',
        OBJECT_PLACED: 'object-placed',
        FAILED: 'failed'
    };
    const ARTracking = {
        TRACKING: 'tracking',
        NOT_TRACKING: 'not-tracking'
    };
    const vector3$1 = new three.Vector3();
    const matrix4 = new three.Matrix4();
    const hitPosition = new three.Vector3();
    const camera = new three.PerspectiveCamera(45, 1, 0.1, 100);
    class ARRenderer extends three.EventDispatcher {
        constructor(renderer) {
            super();
            this.renderer = renderer;
            this.currentSession = null;
            this.placeOnWall = false;
            this.placementBox = null;
            this.lastTick = null;
            this.turntableRotation = null;
            this.oldShadowIntensity = null;
            this.frame = null;
            this.initialHitSource = null;
            this.transientHitTestSource = null;
            this.inputSource = null;
            this._presentedScene = null;
            this.resolveCleanup = null;
            this.exitWebXRButtonContainer = null;
            this.overlay = null;
            this.xrLight = null;
            this.tracking = true;
            this.frames = 0;
            this.initialized = false;
            this.oldTarget = new three.Vector3();
            this.placementComplete = false;
            this.isTranslating = false;
            this.isRotating = false;
            this.isTwoFingering = false;
            this.lastDragPosition = new three.Vector3();
            this.firstRatio = 0;
            this.lastAngle = 0;
            this.goalPosition = new three.Vector3();
            this.goalYaw = 0;
            this.goalScale = 1;
            this.xDamper = new Damper();
            this.yDamper = new Damper();
            this.zDamper = new Damper();
            this.yawDamper = new Damper();
            this.scaleDamper = new Damper();
            this.onExitWebXRButtonContainerClick = () => this.stopPresenting();
            this.onUpdateScene = () => {
                if (this.placementBox != null && this.isPresenting) {
                    this.placementBox.dispose();
                    this.placementBox = new PlacementBox(this.presentedScene, this.placeOnWall ? 'back' : 'bottom');
                }
            };
            this.onSelectStart = (event) => {
                const hitSource = this.transientHitTestSource;
                if (hitSource == null) {
                    return;
                }
                const fingers = this.frame.getHitTestResultsForTransientInput(hitSource);
                const scene = this.presentedScene;
                const box = this.placementBox;
                if (fingers.length === 1) {
                    this.inputSource = event.inputSource;
                    const { axes } = this.inputSource.gamepad;
                    const hitPosition = box.getHit(this.presentedScene, axes[0], axes[1]);
                    box.show = true;
                    if (hitPosition != null) {
                        this.isTranslating = true;
                        this.lastDragPosition.copy(hitPosition);
                    }
                    else if (this.placeOnWall === false) {
                        this.isRotating = true;
                        this.lastAngle = axes[0] * ROTATION_RATE;
                    }
                }
                else if (fingers.length === 2) {
                    box.show = true;
                    this.isTwoFingering = true;
                    const { separation } = this.fingerPolar(fingers);
                    this.firstRatio = separation / scene.scale.x;
                }
            };
            this.onSelectEnd = () => {
                this.isTranslating = false;
                this.isRotating = false;
                this.isTwoFingering = false;
                this.inputSource = null;
                this.goalPosition.y +=
                    this.placementBox.offsetHeight * this.presentedScene.scale.x;
                this.placementBox.show = false;
            };
            this.threeRenderer = renderer.threeRenderer;
            this.threeRenderer.xr.enabled = true;
        }
        async resolveARSession() {
            assertIsArCandidate();
            const session = await navigator.xr.requestSession('immersive-ar', {
                requiredFeatures: ['hit-test'],
                optionalFeatures: ['dom-overlay', 'light-estimation'],
                domOverlay: this.overlay ? { root: this.overlay } : undefined
            });
            this.threeRenderer.xr.setReferenceSpaceType('local');
            await this.threeRenderer.xr.setSession(session);
            this.threeRenderer.xr.cameraAutoUpdate = false;
            return session;
        }
        get presentedScene() {
            return this._presentedScene;
        }
        async supportsPresentation() {
            try {
                assertIsArCandidate();
                return await navigator.xr.isSessionSupported('immersive-ar');
            }
            catch (error) {
                console.warn('Request to present in WebXR denied:');
                console.warn(error);
                console.warn('Falling back to next ar-mode');
                return false;
            }
        }
        async present(scene, environmentEstimation = false) {
            if (this.isPresenting) {
                console.warn('Cannot present while a model is already presenting');
            }
            let waitForAnimationFrame = new Promise((resolve, _reject) => {
                requestAnimationFrame(() => resolve());
            });
            scene.setHotspotsVisibility(false);
            scene.queueRender();
            await waitForAnimationFrame;
            this._presentedScene = scene;
            this.overlay = scene.element.shadowRoot.querySelector('div.default');
            if (environmentEstimation === true) {
                this.xrLight = new XREstimatedLight(this.threeRenderer);
                this.xrLight.addEventListener('estimationstart', () => {
                    if (!this.isPresenting || this.xrLight == null) {
                        return;
                    }
                    const scene = this.presentedScene;
                    scene.add(this.xrLight);
                    scene.environment = this.xrLight.environment;
                });
            }
            const currentSession = await this.resolveARSession();
            currentSession.addEventListener('end', () => {
                this.postSessionCleanup();
            }, { once: true });
            const exitButton = scene.element.shadowRoot.querySelector('.slot.exit-webxr-ar-button');
            exitButton.classList.add('enabled');
            exitButton.addEventListener('click', this.onExitWebXRButtonContainerClick);
            this.exitWebXRButtonContainer = exitButton;
            const viewerRefSpace = await currentSession.requestReferenceSpace('viewer');
            this.tracking = true;
            this.frames = 0;
            this.initialized = false;
            this.turntableRotation = scene.yaw;
            this.goalYaw = scene.yaw;
            this.goalScale = 1;
            scene.setBackground(null);
            this.oldShadowIntensity = scene.shadowIntensity;
            scene.setShadowIntensity(0.01);
            this.oldTarget.copy(scene.getTarget());
            scene.element.addEventListener('load', this.onUpdateScene);
            const radians = HIT_ANGLE_DEG * Math.PI / 180;
            const ray = this.placeOnWall === true ?
                undefined :
                new XRRay(new DOMPoint(0, 0, 0), { x: 0, y: -Math.sin(radians), z: -Math.cos(radians) });
            currentSession
                .requestHitTestSource({ space: viewerRefSpace, offsetRay: ray }).then(hitTestSource => {
                this.initialHitSource = hitTestSource;
            });
            this.currentSession = currentSession;
            this.placementBox =
                new PlacementBox(scene, this.placeOnWall ? 'back' : 'bottom');
            this.placementComplete = false;
            this.lastTick = performance.now();
            this.dispatchEvent({ type: 'status', status: ARStatus.SESSION_STARTED });
        }
        async stopPresenting() {
            if (!this.isPresenting) {
                return;
            }
            const cleanupPromise = new Promise((resolve) => {
                this.resolveCleanup = resolve;
            });
            try {
                await this.currentSession.end();
                await cleanupPromise;
            }
            catch (error) {
                console.warn('Error while trying to end WebXR AR session');
                console.warn(error);
                this.postSessionCleanup();
            }
        }
        get isPresenting() {
            return this.presentedScene != null;
        }
        get target() {
            return this.oldTarget;
        }
        updateTarget() {
            const scene = this.presentedScene;
            if (scene != null) {
                const target = scene.getTarget();
                this.oldTarget.copy(target);
                if (this.placeOnWall) {
                    target.z = scene.boundingBox.min.z;
                }
                else {
                    target.y = scene.boundingBox.min.y;
                }
                scene.setTarget(target.x, target.y, target.z);
            }
        }
        postSessionCleanup() {
            const session = this.currentSession;
            if (session != null) {
                session.removeEventListener('selectstart', this.onSelectStart);
                session.removeEventListener('selectend', this.onSelectEnd);
                this.currentSession = null;
            }
            const scene = this.presentedScene;
            this._presentedScene = null;
            if (scene != null) {
                const { element } = scene;
                if (this.xrLight != null) {
                    scene.remove(this.xrLight);
                    this.xrLight.dispose();
                    this.xrLight = null;
                }
                scene.position.set(0, 0, 0);
                scene.scale.set(1, 1, 1);
                scene.setShadowOffset(0);
                const yaw = this.turntableRotation;
                if (yaw != null) {
                    scene.yaw = yaw;
                }
                const intensity = this.oldShadowIntensity;
                if (intensity != null) {
                    scene.setShadowIntensity(intensity);
                }
                scene.setEnvironmentAndSkybox(element[$currentEnvironmentMap], element[$currentBackground]);
                const point = this.oldTarget;
                scene.setTarget(point.x, point.y, point.z);
                scene.xrCamera = null;
                scene.element.removeEventListener('load', this.onUpdateScene);
                scene.orientHotspots(0);
                element.requestUpdate('cameraTarget');
                element.requestUpdate('maxCameraOrbit');
                element[$onResize](element.getBoundingClientRect());
                requestAnimationFrame(() => {
                    scene.element.dispatchEvent(new CustomEvent('camera-change', { detail: { source: ChangeSource.NONE } }));
                });
            }
            this.renderer.height = 0;
            const exitButton = this.exitWebXRButtonContainer;
            if (exitButton != null) {
                exitButton.classList.remove('enabled');
                exitButton.removeEventListener('click', this.onExitWebXRButtonContainerClick);
                this.exitWebXRButtonContainer = null;
            }
            const hitSource = this.transientHitTestSource;
            if (hitSource != null) {
                hitSource.cancel();
                this.transientHitTestSource = null;
            }
            const hitSourceInitial = this.initialHitSource;
            if (hitSourceInitial != null) {
                hitSourceInitial.cancel();
                this.initialHitSource = null;
            }
            if (this.placementBox != null) {
                this.placementBox.dispose();
                this.placementBox = null;
            }
            this.lastTick = null;
            this.turntableRotation = null;
            this.oldShadowIntensity = null;
            this.frame = null;
            this.inputSource = null;
            this.overlay = null;
            if (this.resolveCleanup != null) {
                this.resolveCleanup();
            }
            this.dispatchEvent({ type: 'status', status: ARStatus.NOT_PRESENTING });
        }
        updateView(view) {
            const scene = this.presentedScene;
            const xr = this.threeRenderer.xr;
            xr.updateCamera(camera);
            scene.xrCamera = xr.getCamera();
            const { elements } = scene.getCamera().matrixWorld;
            scene.orientHotspots(Math.atan2(elements[1], elements[5]));
            if (!this.initialized) {
                this.placeInitially();
                this.initialized = true;
            }
            if (view.requestViewportScale && view.recommendedViewportScale) {
                const scale = view.recommendedViewportScale;
                view.requestViewportScale(Math.max(scale, MIN_VIEWPORT_SCALE));
            }
            const layer = xr.getBaseLayer();
            if (layer != null) {
                const viewport = layer instanceof XRWebGLLayer ?
                    layer.getViewport(view) :
                    xr.getBinding().getViewSubImage(layer, view).viewport;
                this.threeRenderer.setViewport(viewport.x, viewport.y, viewport.width, viewport.height);
            }
        }
        placeInitially() {
            const scene = this.presentedScene;
            const { position, element } = scene;
            const xrCamera = scene.getCamera();
            const { width, height } = this.overlay.getBoundingClientRect();
            scene.setSize(width, height);
            xrCamera.projectionMatrixInverse.copy(xrCamera.projectionMatrix).invert();
            const { theta, radius } = element
                .getCameraOrbit();
            const cameraDirection = xrCamera.getWorldDirection(vector3$1);
            scene.yaw = Math.atan2(-cameraDirection.x, -cameraDirection.z) - theta;
            this.goalYaw = scene.yaw;
            position.copy(xrCamera.position)
                .add(cameraDirection.multiplyScalar(radius));
            this.updateTarget();
            const target = scene.getTarget();
            position.add(target).sub(this.oldTarget);
            this.goalPosition.copy(position);
            scene.setHotspotsVisibility(true);
            const { session } = this.frame;
            session.addEventListener('selectstart', this.onSelectStart);
            session.addEventListener('selectend', this.onSelectEnd);
            session
                .requestHitTestSourceForTransientInput({ profile: 'generic-touchscreen' }).then(hitTestSource => {
                this.transientHitTestSource = hitTestSource;
            });
        }
        getTouchLocation() {
            const { axes } = this.inputSource.gamepad;
            let location = this.placementBox.getExpandedHit(this.presentedScene, axes[0], axes[1]);
            if (location != null) {
                vector3$1.copy(location).sub(this.presentedScene.getCamera().position);
                if (vector3$1.length() > MAX_DISTANCE)
                    return null;
            }
            return location;
        }
        getHitPoint(hitResult) {
            const refSpace = this.threeRenderer.xr.getReferenceSpace();
            const pose = hitResult.getPose(refSpace);
            if (pose == null) {
                return null;
            }
            const hitMatrix = matrix4.fromArray(pose.transform.matrix);
            if (this.placeOnWall === true) {
                this.goalYaw = Math.atan2(hitMatrix.elements[4], hitMatrix.elements[6]);
            }
            return hitMatrix.elements[5] > 0.75 !== this.placeOnWall ?
                hitPosition.setFromMatrixPosition(hitMatrix) :
                null;
        }
        moveToFloor(frame) {
            const hitSource = this.initialHitSource;
            if (hitSource == null) {
                return;
            }
            const hitTestResults = frame.getHitTestResults(hitSource);
            if (hitTestResults.length == 0) {
                return;
            }
            const hit = hitTestResults[0];
            const hitPoint = this.getHitPoint(hit);
            if (hitPoint == null) {
                return;
            }
            this.placementBox.show = true;
            if (!this.isTranslating) {
                if (this.placeOnWall) {
                    this.goalPosition.copy(hitPoint);
                }
                else {
                    this.goalPosition.y = hitPoint.y;
                }
            }
            hitSource.cancel();
            this.initialHitSource = null;
            this.dispatchEvent({ type: 'status', status: ARStatus.OBJECT_PLACED });
        }
        fingerPolar(fingers) {
            const fingerOne = fingers[0].inputSource.gamepad.axes;
            const fingerTwo = fingers[1].inputSource.gamepad.axes;
            const deltaX = fingerTwo[0] - fingerOne[0];
            const deltaY = fingerTwo[1] - fingerOne[1];
            const angle = Math.atan2(deltaY, deltaX);
            let deltaYaw = this.lastAngle - angle;
            if (deltaYaw > Math.PI) {
                deltaYaw -= 2 * Math.PI;
            }
            else if (deltaYaw < -Math.PI) {
                deltaYaw += 2 * Math.PI;
            }
            this.lastAngle = angle;
            return {
                separation: Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                deltaYaw: deltaYaw
            };
        }
        processInput(frame) {
            const hitSource = this.transientHitTestSource;
            if (hitSource == null) {
                return;
            }
            if (!this.isTranslating && !this.isTwoFingering && !this.isRotating) {
                return;
            }
            const fingers = frame.getHitTestResultsForTransientInput(hitSource);
            const scene = this.presentedScene;
            const scale = scene.scale.x;
            if (this.isTwoFingering) {
                if (fingers.length < 2) {
                    this.isTwoFingering = false;
                }
                else {
                    const { separation, deltaYaw } = this.fingerPolar(fingers);
                    if (this.placeOnWall === false) {
                        this.goalYaw += deltaYaw;
                    }
                    if (scene.canScale) {
                        const scale = separation / this.firstRatio;
                        this.goalScale =
                            (scale < SCALE_SNAP_HIGH && scale > SCALE_SNAP_LOW) ? 1 : scale;
                    }
                }
                return;
            }
            else if (fingers.length === 2) {
                this.isTranslating = false;
                this.isRotating = false;
                this.isTwoFingering = true;
                const { separation } = this.fingerPolar(fingers);
                this.firstRatio = separation / scale;
                return;
            }
            if (this.isRotating) {
                const angle = this.inputSource.gamepad.axes[0] * ROTATION_RATE;
                this.goalYaw += angle - this.lastAngle;
                this.lastAngle = angle;
            }
            else if (this.isTranslating) {
                fingers.forEach(finger => {
                    if (finger.inputSource !== this.inputSource) {
                        return;
                    }
                    let hit = null;
                    if (finger.results.length > 0) {
                        hit = this.getHitPoint(finger.results[0]);
                    }
                    if (hit == null) {
                        hit = this.getTouchLocation();
                    }
                    if (hit == null) {
                        return;
                    }
                    this.goalPosition.sub(this.lastDragPosition);
                    if (this.placeOnWall === false) {
                        const offset = hit.y - this.lastDragPosition.y;
                        if (offset < 0) {
                            this.placementBox.offsetHeight = offset / scale;
                            this.presentedScene.setShadowOffset(offset);
                            const cameraPosition = vector3$1.copy(scene.getCamera().position);
                            const alpha = -offset / (cameraPosition.y - hit.y);
                            cameraPosition.multiplyScalar(alpha);
                            hit.multiplyScalar(1 - alpha).add(cameraPosition);
                        }
                    }
                    this.goalPosition.add(hit);
                    this.lastDragPosition.copy(hit);
                });
            }
        }
        moveScene(delta) {
            const scene = this.presentedScene;
            const { position, yaw } = scene;
            const boundingRadius = scene.boundingSphere.radius;
            const goal = this.goalPosition;
            const oldScale = scene.scale.x;
            const box = this.placementBox;
            let source = ChangeSource.NONE;
            if (!goal.equals(position) || this.goalScale !== oldScale) {
                source = ChangeSource.USER_INTERACTION;
                let { x, y, z } = position;
                x = this.xDamper.update(x, goal.x, delta, boundingRadius);
                y = this.yDamper.update(y, goal.y, delta, boundingRadius);
                z = this.zDamper.update(z, goal.z, delta, boundingRadius);
                position.set(x, y, z);
                const newScale = this.scaleDamper.update(oldScale, this.goalScale, delta, 1);
                scene.scale.set(newScale, newScale, newScale);
                if (!this.isTranslating) {
                    const offset = goal.y - y;
                    if (this.placementComplete && this.placeOnWall === false) {
                        box.offsetHeight = offset / newScale;
                        scene.setShadowOffset(offset);
                    }
                    else if (offset === 0) {
                        this.placementComplete = true;
                        box.show = false;
                        scene.setShadowIntensity(AR_SHADOW_INTENSITY);
                    }
                }
            }
            box.updateOpacity(delta);
            scene.updateTarget(delta);
            scene.yaw = this.yawDamper.update(yaw, this.goalYaw, delta, Math.PI);
            scene.element.dispatchEvent(new CustomEvent('camera-change', { detail: { source } }));
        }
        onWebXRFrame(time, frame) {
            this.frame = frame;
            ++this.frames;
            const refSpace = this.threeRenderer.xr.getReferenceSpace();
            const pose = frame.getViewerPose(refSpace);
            if (pose == null && this.tracking === true && this.frames > INIT_FRAMES) {
                this.tracking = false;
                this.dispatchEvent({ type: 'tracking', status: ARTracking.NOT_TRACKING });
            }
            const scene = this.presentedScene;
            if (pose == null || scene == null || !scene.element.loaded) {
                this.threeRenderer.clear();
                return;
            }
            if (this.tracking === false) {
                this.tracking = true;
                this.dispatchEvent({ type: 'tracking', status: ARTracking.TRACKING });
            }
            let isFirstView = true;
            for (const view of pose.views) {
                this.updateView(view);
                if (isFirstView) {
                    this.moveToFloor(frame);
                    this.processInput(frame);
                    const delta = time - this.lastTick;
                    this.moveScene(delta);
                    this.renderer.preRender(scene, time, delta);
                    this.lastTick = time;
                    scene.renderShadow(this.threeRenderer);
                }
                this.threeRenderer.render(scene, scene.getCamera());
                isFirstView = false;
            }
        }
    }

    function clone( source ) {

    	const sourceLookup = new Map();
    	const cloneLookup = new Map();

    	const clone = source.clone();

    	parallelTraverse( source, clone, function ( sourceNode, clonedNode ) {

    		sourceLookup.set( clonedNode, sourceNode );
    		cloneLookup.set( sourceNode, clonedNode );

    	} );

    	clone.traverse( function ( node ) {

    		if ( ! node.isSkinnedMesh ) return;

    		const clonedMesh = node;
    		const sourceMesh = sourceLookup.get( node );
    		const sourceBones = sourceMesh.skeleton.bones;

    		clonedMesh.skeleton = sourceMesh.skeleton.clone();
    		clonedMesh.bindMatrix.copy( sourceMesh.bindMatrix );

    		clonedMesh.skeleton.bones = sourceBones.map( function ( bone ) {

    			return cloneLookup.get( bone );

    		} );

    		clonedMesh.bind( clonedMesh.skeleton, clonedMesh.bindMatrix );

    	} );

    	return clone;

    }

    function parallelTraverse( a, b, callback ) {

    	callback( a, b );

    	for ( let i = 0; i < a.children.length; i ++ ) {

    		parallelTraverse( a.children[ i ], b.children[ i ], callback );

    	}

    }

    const $prepared = Symbol('prepared');
    const $prepare = Symbol('prepare');
    const $preparedGLTF = Symbol('preparedGLTF');
    const $clone = Symbol('clone');
    class GLTFInstance {
        constructor(preparedGLTF) {
            this[$preparedGLTF] = preparedGLTF;
        }
        static prepare(source) {
            if (source.scene == null) {
                throw new Error('Model does not have a scene');
            }
            if (source[$prepared]) {
                return source;
            }
            const prepared = this[$prepare](source);
            prepared[$prepared] = true;
            return prepared;
        }
        static [$prepare](source) {
            const { scene } = source;
            const scenes = [scene];
            return Object.assign(Object.assign({}, source), { scene, scenes });
        }
        get parser() {
            return this[$preparedGLTF].parser;
        }
        get animations() {
            return this[$preparedGLTF].animations;
        }
        get scene() {
            return this[$preparedGLTF].scene;
        }
        get scenes() {
            return this[$preparedGLTF].scenes;
        }
        get cameras() {
            return this[$preparedGLTF].cameras;
        }
        get asset() {
            return this[$preparedGLTF].asset;
        }
        get userData() {
            return this[$preparedGLTF].userData;
        }
        clone() {
            const GLTFInstanceConstructor = this.constructor;
            const clonedGLTF = this[$clone]();
            return new GLTFInstanceConstructor(clonedGLTF);
        }
        dispose() {
            this.scenes.forEach((scene) => {
                scene.traverse((object) => {
                    const mesh = object;
                    if (!mesh.material) {
                        return;
                    }
                    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                    materials.forEach(material => {
                        for (const propertyName in material) {
                            const texture = material[propertyName];
                            if (texture instanceof three.Texture) {
                                const image = texture.source.data;
                                if (image.close != null) {
                                    image.close();
                                }
                                texture.dispose();
                            }
                        }
                        material.dispose();
                    });
                    mesh.geometry.dispose();
                });
            });
        }
        [$clone]() {
            const source = this[$preparedGLTF];
            const scene = clone(this.scene);
            cloneVariantMaterials(scene, this.scene);
            const scenes = [scene];
            const userData = source.userData ? Object.assign({}, source.userData) : {};
            return Object.assign(Object.assign({}, source), { scene, scenes, userData });
        }
    }
    const cloneVariantMaterials = (dst, src) => {
        traversePair(dst, src, (dst, src) => {
            if (src.userData.variantMaterials !== undefined) {
                dst.userData.variantMaterials = new Map(src.userData.variantMaterials);
            }
            if (src.userData.variantData !== undefined) {
                dst.userData.variantData = src.userData.variantData;
            }
            if (src.userData.originalMaterial !== undefined) {
                dst.userData.originalMaterial = src.userData.originalMaterial;
            }
        });
    };
    const traversePair = (obj1, obj2, callback) => {
        callback(obj1, obj2);
        for (let i = 0; i < obj1.children.length; i++) {
            traversePair(obj1.children[i], obj2.children[i], callback);
        }
    };

    const $threeGLTF = Symbol('threeGLTF');
    const $gltf = Symbol('gltf');
    const $gltfElementMap = Symbol('gltfElementMap');
    const $threeObjectMap = Symbol('threeObjectMap');
    const $parallelTraverseThreeScene = Symbol('parallelTraverseThreeScene');
    const $correlateOriginalThreeGLTF = Symbol('correlateOriginalThreeGLTF');
    const $correlateCloneThreeGLTF = Symbol('correlateCloneThreeGLTF');
    class CorrelatedSceneGraph {
        constructor(threeGLTF, gltf, threeObjectMap, gltfElementMap) {
            this[$threeGLTF] = threeGLTF;
            this[$gltf] = gltf;
            this[$gltfElementMap] = gltfElementMap;
            this[$threeObjectMap] = threeObjectMap;
        }
        static from(threeGLTF, upstreamCorrelatedSceneGraph) {
            if (upstreamCorrelatedSceneGraph != null) {
                return this[$correlateCloneThreeGLTF](threeGLTF, upstreamCorrelatedSceneGraph);
            }
            else {
                return this[$correlateOriginalThreeGLTF](threeGLTF);
            }
        }
        static [$correlateOriginalThreeGLTF](threeGLTF) {
            const gltf = threeGLTF.parser.json;
            const associations = threeGLTF.parser.associations;
            const gltfElementMap = new Map();
            const defaultMaterial = { name: 'Default' };
            const defaultReference = { type: 'materials', index: -1 };
            for (const threeMaterial of associations.keys()) {
                if (threeMaterial instanceof three.Material &&
                    associations.get(threeMaterial) == null) {
                    if (defaultReference.index < 0) {
                        if (gltf.materials == null) {
                            gltf.materials = [];
                        }
                        defaultReference.index = gltf.materials.length;
                        gltf.materials.push(defaultMaterial);
                    }
                    threeMaterial.name = defaultMaterial.name;
                    associations.set(threeMaterial, { materials: defaultReference.index });
                }
            }
            for (const [threeObject, gltfMappings] of associations) {
                if (gltfMappings) {
                    threeObject.userData = threeObject.userData || {};
                    threeObject.userData.associations = gltfMappings;
                }
                for (const mapping in gltfMappings) {
                    if (mapping != null && mapping !== 'primitives') {
                        const type = mapping;
                        const elementArray = gltf[type] || [];
                        const gltfElement = elementArray[gltfMappings[type]];
                        if (gltfElement == null) {
                            continue;
                        }
                        let threeObjects = gltfElementMap.get(gltfElement);
                        if (threeObjects == null) {
                            threeObjects = new Set();
                            gltfElementMap.set(gltfElement, threeObjects);
                        }
                        threeObjects.add(threeObject);
                    }
                }
            }
            return new CorrelatedSceneGraph(threeGLTF, gltf, associations, gltfElementMap);
        }
        static [$correlateCloneThreeGLTF](cloneThreeGLTF, upstreamCorrelatedSceneGraph) {
            const originalThreeGLTF = upstreamCorrelatedSceneGraph.threeGLTF;
            const originalGLTF = upstreamCorrelatedSceneGraph.gltf;
            const cloneGLTF = JSON.parse(JSON.stringify(originalGLTF));
            const cloneThreeObjectMap = new Map();
            const cloneGLTFElementMap = new Map();
            for (let i = 0; i < originalThreeGLTF.scenes.length; i++) {
                this[$parallelTraverseThreeScene](originalThreeGLTF.scenes[i], cloneThreeGLTF.scenes[i], (object, cloneObject) => {
                    const elementReference = upstreamCorrelatedSceneGraph.threeObjectMap.get(object);
                    if (elementReference == null) {
                        return;
                    }
                    for (const mapping in elementReference) {
                        if (mapping != null && mapping !== 'primitives') {
                            const type = mapping;
                            const index = elementReference[type];
                            const cloneElement = cloneGLTF[type][index];
                            const mappings = cloneThreeObjectMap.get(cloneObject) || {};
                            mappings[type] = index;
                            cloneThreeObjectMap.set(cloneObject, mappings);
                            const cloneObjects = cloneGLTFElementMap.get(cloneElement) || new Set();
                            cloneObjects.add(cloneObject);
                            cloneGLTFElementMap.set(cloneElement, cloneObjects);
                        }
                    }
                });
            }
            return new CorrelatedSceneGraph(cloneThreeGLTF, cloneGLTF, cloneThreeObjectMap, cloneGLTFElementMap);
        }
        static [$parallelTraverseThreeScene](sceneOne, sceneTwo, callback) {
            const traverse = (a, b) => {
                callback(a, b);
                if (a.isObject3D) {
                    const meshA = a;
                    const meshB = b;
                    if (meshA.material) {
                        if (Array.isArray(meshA.material)) {
                            for (let i = 0; i < meshA.material.length; ++i) {
                                callback(meshA.material[i], meshB.material[i]);
                            }
                        }
                        else {
                            callback(meshA.material, meshB.material);
                        }
                    }
                    for (let i = 0; i < a.children.length; ++i) {
                        traverse(a.children[i], b.children[i]);
                    }
                }
            };
            traverse(sceneOne, sceneTwo);
        }
        get threeGLTF() {
            return this[$threeGLTF];
        }
        get gltf() {
            return this[$gltf];
        }
        get gltfElementMap() {
            return this[$gltfElementMap];
        }
        get threeObjectMap() {
            return this[$threeObjectMap];
        }
    }

    const $correlatedSceneGraph = Symbol('correlatedSceneGraph');
    class ModelViewerGLTFInstance extends GLTFInstance {
        static [$prepare](source) {
            const prepared = super[$prepare](source);
            if (prepared[$correlatedSceneGraph] == null) {
                prepared[$correlatedSceneGraph] = CorrelatedSceneGraph.from(prepared);
            }
            const { scene } = prepared;
            const nullSphere = new three.Sphere(undefined, Infinity);
            scene.traverse((node) => {
                node.renderOrder = 1000;
                node.frustumCulled = false;
                if (!node.name) {
                    node.name = node.uuid;
                }
                const mesh = node;
                if (mesh.material) {
                    const { geometry } = mesh;
                    mesh.castShadow = true;
                    if (mesh.isSkinnedMesh) {
                        geometry.boundingSphere = nullSphere;
                        geometry.boundingBox = null;
                    }
                    const material = mesh.material;
                    if (material.isMeshBasicMaterial === true) {
                        material.toneMapped = false;
                    }
                    material.shadowSide = three.FrontSide;
                    if (material.aoMap) {
                        const { gltf, threeObjectMap } = prepared[$correlatedSceneGraph];
                        const gltfRef = threeObjectMap.get(material);
                        if (gltf.materials != null && gltfRef != null &&
                            gltfRef.materials != null) {
                            const gltfMaterial = gltf.materials[gltfRef.materials];
                            if (gltfMaterial.occlusionTexture &&
                                gltfMaterial.occlusionTexture.texCoord === 0 &&
                                geometry.attributes.uv != null) {
                                geometry.setAttribute('uv2', geometry.attributes.uv);
                            }
                        }
                    }
                }
            });
            return prepared;
        }
        get correlatedSceneGraph() {
            return this[$preparedGLTF][$correlatedSceneGraph];
        }
        [$clone]() {
            const clone = super[$clone]();
            const sourceUUIDToClonedMaterial = new Map();
            clone.scene.traverse((node) => {
                const mesh = node;
                if (mesh.material) {
                    const material = mesh.material;
                    if (material != null) {
                        if (sourceUUIDToClonedMaterial.has(material.uuid)) {
                            mesh.material = sourceUUIDToClonedMaterial.get(material.uuid);
                            return;
                        }
                        mesh.material = material.clone();
                        sourceUUIDToClonedMaterial.set(material.uuid, mesh.material);
                    }
                }
                const light = node;
                if (light.target !== undefined) {
                    light.add(light.target);
                }
            });
            clone[$correlatedSceneGraph] =
                CorrelatedSceneGraph.from(clone, this.correlatedSceneGraph);
            return clone;
        }
    }

    /**
     * @monogrid/gainmap-js v3.0.1
     * With ❤️, by MONOGRID <hello@mono-grid.com>
     */

    const getBufferForType = (type, width, height) => {
        let out;
        switch (type) {
            case three.UnsignedByteType:
                out = new Uint8ClampedArray(width * height * 4);
                break;
            case three.HalfFloatType:
                out = new Uint16Array(width * height * 4);
                break;
            case three.UnsignedIntType:
                out = new Uint32Array(width * height * 4);
                break;
            case three.ByteType:
                out = new Int8Array(width * height * 4);
                break;
            case three.ShortType:
                out = new Int16Array(width * height * 4);
                break;
            case three.IntType:
                out = new Int32Array(width * height * 4);
                break;
            case three.FloatType:
                out = new Float32Array(width * height * 4);
                break;
            default:
                throw new Error('Unsupported data type');
        }
        return out;
    };
    let _canReadPixelsResult;
    /**
     * Test if this browser implementation can correctly read pixels from the specified
     * Render target type.
     *
     * Runs only once
     *
     * @param type
     * @param renderer
     * @param camera
     * @param renderTargetOptions
     * @returns
     */
    const canReadPixels = (type, renderer, camera, renderTargetOptions) => {
        if (_canReadPixelsResult !== undefined)
            return _canReadPixelsResult;
        const testRT = new three.WebGLRenderTarget(1, 1, renderTargetOptions);
        renderer.setRenderTarget(testRT);
        const mesh = new three.Mesh(new three.PlaneGeometry(), new three.MeshBasicMaterial({ color: 0xffffff }));
        renderer.render(mesh, camera);
        renderer.setRenderTarget(null);
        const out = getBufferForType(type, testRT.width, testRT.height);
        renderer.readRenderTargetPixels(testRT, 0, 0, testRT.width, testRT.height, out);
        testRT.dispose();
        mesh.geometry.dispose();
        mesh.material.dispose();
        _canReadPixelsResult = out[0] !== 0;
        return _canReadPixelsResult;
    };
    /**
     * Utility class used for rendering a texture with a material
     *
     * @category Core
     * @group Core
     */
    class QuadRenderer {
        /**
         *
         * @param sourceTexture
         * @param renderer
         */
        constructor(options) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            this._rendererIsDisposable = false;
            this._supportsReadPixels = true;
            /**
             * Renders the input texture using the specified material
             */
            this.render = () => {
                this._renderer.setRenderTarget(this._renderTarget);
                try {
                    this._renderer.render(this._scene, this._camera);
                }
                catch (e) {
                    this._renderer.setRenderTarget(null);
                    throw e;
                }
                this._renderer.setRenderTarget(null);
            };
            this._width = options.width;
            this._height = options.height;
            this._type = options.type;
            this._colorSpace = options.colorSpace;
            const rtOptions = {
                // fixed options
                format: three.RGBAFormat,
                depthBuffer: false,
                stencilBuffer: false,
                // user options
                type: this._type, // set in class property
                colorSpace: this._colorSpace, // set in class property
                anisotropy: ((_a = options.renderTargetOptions) === null || _a === void 0 ? void 0 : _a.anisotropy) !== undefined ? (_b = options.renderTargetOptions) === null || _b === void 0 ? void 0 : _b.anisotropy : 1,
                generateMipmaps: ((_c = options.renderTargetOptions) === null || _c === void 0 ? void 0 : _c.generateMipmaps) !== undefined ? (_d = options.renderTargetOptions) === null || _d === void 0 ? void 0 : _d.generateMipmaps : false,
                magFilter: ((_e = options.renderTargetOptions) === null || _e === void 0 ? void 0 : _e.magFilter) !== undefined ? (_f = options.renderTargetOptions) === null || _f === void 0 ? void 0 : _f.magFilter : three.LinearFilter,
                minFilter: ((_g = options.renderTargetOptions) === null || _g === void 0 ? void 0 : _g.minFilter) !== undefined ? (_h = options.renderTargetOptions) === null || _h === void 0 ? void 0 : _h.minFilter : three.LinearFilter,
                samples: ((_j = options.renderTargetOptions) === null || _j === void 0 ? void 0 : _j.samples) !== undefined ? (_k = options.renderTargetOptions) === null || _k === void 0 ? void 0 : _k.samples : undefined,
                wrapS: ((_l = options.renderTargetOptions) === null || _l === void 0 ? void 0 : _l.wrapS) !== undefined ? (_m = options.renderTargetOptions) === null || _m === void 0 ? void 0 : _m.wrapS : three.ClampToEdgeWrapping,
                wrapT: ((_o = options.renderTargetOptions) === null || _o === void 0 ? void 0 : _o.wrapT) !== undefined ? (_p = options.renderTargetOptions) === null || _p === void 0 ? void 0 : _p.wrapT : three.ClampToEdgeWrapping
            };
            this._material = options.material;
            if (options.renderer) {
                this._renderer = options.renderer;
            }
            else {
                this._renderer = QuadRenderer.instantiateRenderer();
                this._rendererIsDisposable = true;
            }
            this._scene = new three.Scene();
            this._camera = new three.OrthographicCamera();
            this._camera.position.set(0, 0, 10);
            this._camera.left = -0.5;
            this._camera.right = 0.5;
            this._camera.top = 0.5;
            this._camera.bottom = -0.5;
            this._camera.updateProjectionMatrix();
            if (!canReadPixels(this._type, this._renderer, this._camera, rtOptions)) {
                let alternativeType;
                switch (this._type) {
                    case three.HalfFloatType:
                        alternativeType = this._renderer.extensions.has('EXT_color_buffer_float') ? three.FloatType : undefined;
                        break;
                }
                if (alternativeType !== undefined) {
                    console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${three.FloatType}`);
                    this._type = alternativeType;
                }
                else {
                    this._supportsReadPixels = false;
                    console.warn('This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown');
                }
            }
            this._quad = new three.Mesh(new three.PlaneGeometry(), this._material);
            this._quad.geometry.computeBoundingBox();
            this._scene.add(this._quad);
            this._renderTarget = new three.WebGLRenderTarget(this.width, this.height, rtOptions);
            this._renderTarget.texture.mapping = ((_q = options.renderTargetOptions) === null || _q === void 0 ? void 0 : _q.mapping) !== undefined ? (_r = options.renderTargetOptions) === null || _r === void 0 ? void 0 : _r.mapping : three.UVMapping;
        }
        /**
         * Instantiates a temporary renderer
         *
         * @returns
         */
        static instantiateRenderer() {
            const renderer = new three.WebGLRenderer();
            renderer.setSize(128, 128);
            // renderer.outputColorSpace = SRGBColorSpace
            // renderer.toneMapping = LinearToneMapping
            // renderer.debug.checkShaderErrors = false
            // this._rendererIsDisposable = true
            return renderer;
        }
        /**
         * Obtains a Buffer containing the rendered texture.
         *
         * @throws Error if the browser cannot read pixels from this RenderTarget type.
         * @returns a TypedArray containing RGBA values from this renderer
         */
        toArray() {
            if (!this._supportsReadPixels)
                throw new Error('Can\'t read pixels in this browser');
            const out = getBufferForType(this._type, this._width, this._height);
            this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, out);
            return out;
        }
        /**
         * Performs a readPixel operation in the renderTarget
         * and returns a DataTexture containing the read data
         *
         * @params options
         * @returns
         */
        toDataTexture(options) {
            const returnValue = new three.DataTexture(
            // fixed values
            this.toArray(), this.width, this.height, three.RGBAFormat, this._type, 
            // user values
            (options === null || options === void 0 ? void 0 : options.mapping) || three.UVMapping, (options === null || options === void 0 ? void 0 : options.wrapS) || three.ClampToEdgeWrapping, (options === null || options === void 0 ? void 0 : options.wrapT) || three.ClampToEdgeWrapping, (options === null || options === void 0 ? void 0 : options.magFilter) || three.LinearFilter, (options === null || options === void 0 ? void 0 : options.minFilter) || three.LinearFilter, (options === null || options === void 0 ? void 0 : options.anisotropy) || 1, 
            // fixed value
            three.LinearSRGBColorSpace);
            // set this afterwards, we can't set it in constructor
            returnValue.generateMipmaps = (options === null || options === void 0 ? void 0 : options.generateMipmaps) !== undefined ? options === null || options === void 0 ? void 0 : options.generateMipmaps : false;
            return returnValue;
        }
        /**
         * If using a disposable renderer, it will dispose it.
         */
        disposeOnDemandRenderer() {
            this._renderer.setRenderTarget(null);
            if (this._rendererIsDisposable) {
                this._renderer.dispose();
                this._renderer.forceContextLoss();
            }
        }
        /**
         * Will dispose of **all** assets used by this renderer.
         *
         *
         * @param disposeRenderTarget will dispose of the renderTarget which will not be usable later
         * set this to true if you passed the `renderTarget.texture` to a `PMREMGenerator`
         * or are otherwise done with it.
         *
         * @example
         * ```js
         * const loader = new HDRJPGLoader(renderer)
         * const result = await loader.loadAsync('gainmap.jpeg')
         * const mesh = new Mesh(geometry, new MeshBasicMaterial({ map: result.renderTarget.texture }) )
         * // DO NOT dispose the renderTarget here,
         * // it is used directly in the material
         * result.dispose()
         * ```
         *
         * @example
         * ```js
         * const loader = new HDRJPGLoader(renderer)
         * const pmremGenerator = new PMREMGenerator( renderer );
         * const result = await loader.loadAsync('gainmap.jpeg')
         * const envMap = pmremGenerator.fromEquirectangular(result.renderTarget.texture)
         * const mesh = new Mesh(geometry, new MeshStandardMaterial({ envMap }) )
         * // renderTarget can be disposed here
         * // because it was used to generate a PMREM texture
         * result.dispose(true)
         * ```
         */
        dispose(disposeRenderTarget) {
            this.disposeOnDemandRenderer();
            if (disposeRenderTarget) {
                this.renderTarget.dispose();
            }
            // dispose shader material texture uniforms
            if (this.material instanceof three.ShaderMaterial) {
                Object.values(this.material.uniforms).forEach(v => {
                    if (v.value instanceof three.Texture)
                        v.value.dispose();
                });
            }
            // dispose other material properties
            Object.values(this.material).forEach(value => {
                if (value instanceof three.Texture)
                    value.dispose();
            });
            this.material.dispose();
            this._quad.geometry.dispose();
        }
        /**
         * Width of the texture
         */
        get width() { return this._width; }
        set width(value) {
            this._width = value;
            this._renderTarget.setSize(this._width, this._height);
        }
        /**
         * Height of the texture
         */
        get height() { return this._height; }
        set height(value) {
            this._height = value;
            this._renderTarget.setSize(this._width, this._height);
        }
        /**
         * The renderer used
         */
        get renderer() { return this._renderer; }
        /**
         * The `WebGLRenderTarget` used.
         */
        get renderTarget() { return this._renderTarget; }
        set renderTarget(value) {
            this._renderTarget = value;
            this._width = value.width;
            this._height = value.height;
            // this._type = value.texture.type
        }
        /**
         * The `Material` used.
         */
        get material() { return this._material; }
        /**
         *
         */
        get type() { return this._type; }
        get colorSpace() { return this._colorSpace; }
    }

    /**
     * @monogrid/gainmap-js v3.0.1
     * With ❤️, by MONOGRID <hello@mono-grid.com>
     */

    const vertexShader = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
    const fragmentShader = /* glsl */ `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
    /**
     * A Material which is able to decode the Gainmap into a full HDR Representation
     *
     * @category Materials
     * @group Materials
     */
    class GainMapDecoderMaterial extends three.ShaderMaterial {
        /**
         *
         * @param params
         */
        constructor({ gamma, offsetHdr, offsetSdr, gainMapMin, gainMapMax, maxDisplayBoost, hdrCapacityMin, hdrCapacityMax, sdr, gainMap }) {
            super({
                name: 'GainMapDecoderMaterial',
                vertexShader,
                fragmentShader,
                uniforms: {
                    sdr: { value: sdr },
                    gainMap: { value: gainMap },
                    gamma: { value: new three.Vector3(1.0 / gamma[0], 1.0 / gamma[1], 1.0 / gamma[2]) },
                    offsetHdr: { value: new three.Vector3().fromArray(offsetHdr) },
                    offsetSdr: { value: new three.Vector3().fromArray(offsetSdr) },
                    gainMapMin: { value: new three.Vector3().fromArray(gainMapMin) },
                    gainMapMax: { value: new three.Vector3().fromArray(gainMapMax) },
                    weightFactor: {
                        value: (Math.log2(maxDisplayBoost) - hdrCapacityMin) / (hdrCapacityMax - hdrCapacityMin)
                    }
                },
                blending: three.NoBlending,
                depthTest: false,
                depthWrite: false
            });
            this._maxDisplayBoost = maxDisplayBoost;
            this._hdrCapacityMin = hdrCapacityMin;
            this._hdrCapacityMax = hdrCapacityMax;
            this.needsUpdate = true;
            this.uniformsNeedUpdate = true;
        }
        get sdr() { return this.uniforms.sdr.value; }
        set sdr(value) { this.uniforms.sdr.value = value; }
        get gainMap() { return this.uniforms.gainMap.value; }
        set gainMap(value) { this.uniforms.gainMap.value = value; }
        /**
         * @see {@link GainMapMetadata.offsetHdr}
         */
        get offsetHdr() { return this.uniforms.offsetHdr.value.toArray(); }
        set offsetHdr(value) { this.uniforms.offsetHdr.value.fromArray(value); }
        /**
         * @see {@link GainMapMetadata.offsetSdr}
         */
        get offsetSdr() { return this.uniforms.offsetSdr.value.toArray(); }
        set offsetSdr(value) { this.uniforms.offsetSdr.value.fromArray(value); }
        /**
         * @see {@link GainMapMetadata.gainMapMin}
         */
        get gainMapMin() { return this.uniforms.gainMapMin.value.toArray(); }
        set gainMapMin(value) { this.uniforms.gainMapMin.value.fromArray(value); }
        /**
         * @see {@link GainMapMetadata.gainMapMax}
         */
        get gainMapMax() { return this.uniforms.gainMapMax.value.toArray(); }
        set gainMapMax(value) { this.uniforms.gainMapMax.value.fromArray(value); }
        /**
         * @see {@link GainMapMetadata.gamma}
         */
        get gamma() {
            const g = this.uniforms.gamma.value;
            return [1 / g.x, 1 / g.y, 1 / g.z];
        }
        set gamma(value) {
            const g = this.uniforms.gamma.value;
            g.x = 1.0 / value[0];
            g.y = 1.0 / value[1];
            g.z = 1.0 / value[2];
        }
        /**
         * @see {@link GainMapMetadata.hdrCapacityMin}
         * @remarks Logarithmic space
         */
        get hdrCapacityMin() { return this._hdrCapacityMin; }
        set hdrCapacityMin(value) {
            this._hdrCapacityMin = value;
            this.calculateWeight();
        }
        /**
         * @see {@link GainMapMetadata.hdrCapacityMin}
         * @remarks Logarithmic space
         */
        get hdrCapacityMax() { return this._hdrCapacityMax; }
        set hdrCapacityMax(value) {
            this._hdrCapacityMax = value;
            this.calculateWeight();
        }
        /**
         * @see {@link GainmapDecodingParameters.maxDisplayBoost}
         * @remarks Non Logarithmic space
         */
        get maxDisplayBoost() { return this._maxDisplayBoost; }
        set maxDisplayBoost(value) {
            this._maxDisplayBoost = Math.max(1, Math.min(65504, value));
            this.calculateWeight();
        }
        calculateWeight() {
            const val = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
            this.uniforms.weightFactor.value = Math.max(0, Math.min(1, val));
        }
    }

    class GainMapNotFoundError extends Error {
    }

    class XMPMetadataNotFoundError extends Error {
    }

    const getAttribute = (description, name, defaultValue) => {
        var _a;
        let returnValue;
        const parsedValue = (_a = description.attributes.getNamedItem(name)) === null || _a === void 0 ? void 0 : _a.nodeValue;
        if (!parsedValue) {
            const node = description.getElementsByTagName(name)[0];
            if (node) {
                const values = node.getElementsByTagName('rdf:li');
                if (values.length === 3) {
                    returnValue = Array.from(values).map(v => v.innerHTML);
                }
                else {
                    throw new Error(`Gainmap metadata contains an array of items for ${name} but its length is not 3`);
                }
            }
            else {
                if (defaultValue)
                    return defaultValue;
                else
                    throw new Error(`Can't find ${name} in gainmap metadata`);
            }
        }
        else {
            returnValue = parsedValue;
        }
        return returnValue;
    };
    /**
     *
     * @param input
     * @returns
     */
    const extractXMP = (input) => {
        var _a, _b;
        let str;
        // support node test environment
        if (typeof TextDecoder !== 'undefined')
            str = new TextDecoder().decode(input);
        else
            str = input.toString();
        let start = str.indexOf('<x:xmpmeta');
        const parser = new DOMParser();
        while (start !== -1) {
            const end = str.indexOf('x:xmpmeta>', start);
            str.slice(start, end + 10);
            const xmpBlock = str.slice(start, end + 10);
            try {
                const xmlDocument = parser.parseFromString(xmpBlock, 'text/xml');
                const description = xmlDocument.getElementsByTagName('rdf:Description')[0];
                const gainMapMin = getAttribute(description, 'hdrgm:GainMapMin', '0');
                const gainMapMax = getAttribute(description, 'hdrgm:GainMapMax');
                const gamma = getAttribute(description, 'hdrgm:Gamma', '1');
                const offsetSDR = getAttribute(description, 'hdrgm:OffsetSDR', '0.015625');
                const offsetHDR = getAttribute(description, 'hdrgm:OffsetHDR', '0.015625');
                let hdrCapacityMin = (_a = description.attributes.getNamedItem('hdrgm:HDRCapacityMin')) === null || _a === void 0 ? void 0 : _a.nodeValue;
                if (!hdrCapacityMin)
                    hdrCapacityMin = '0';
                const hdrCapacityMax = (_b = description.attributes.getNamedItem('hdrgm:HDRCapacityMax')) === null || _b === void 0 ? void 0 : _b.nodeValue;
                if (!hdrCapacityMax)
                    throw new Error('Incomplete gainmap metadata');
                return {
                    gainMapMin: Array.isArray(gainMapMin) ? gainMapMin.map(v => parseFloat(v)) : [parseFloat(gainMapMin), parseFloat(gainMapMin), parseFloat(gainMapMin)],
                    gainMapMax: Array.isArray(gainMapMax) ? gainMapMax.map(v => parseFloat(v)) : [parseFloat(gainMapMax), parseFloat(gainMapMax), parseFloat(gainMapMax)],
                    gamma: Array.isArray(gamma) ? gamma.map(v => parseFloat(v)) : [parseFloat(gamma), parseFloat(gamma), parseFloat(gamma)],
                    offsetSdr: Array.isArray(offsetSDR) ? offsetSDR.map(v => parseFloat(v)) : [parseFloat(offsetSDR), parseFloat(offsetSDR), parseFloat(offsetSDR)],
                    offsetHdr: Array.isArray(offsetHDR) ? offsetHDR.map(v => parseFloat(v)) : [parseFloat(offsetHDR), parseFloat(offsetHDR), parseFloat(offsetHDR)],
                    hdrCapacityMin: parseFloat(hdrCapacityMin),
                    hdrCapacityMax: parseFloat(hdrCapacityMax)
                };
            }
            catch (e) {
            }
            start = str.indexOf('<x:xmpmeta', end);
        }
    };

    /**
     * MPF Extractor (Multi Picture Format Extractor)
     * By Henrik S Nilsson 2019
     *
     * Extracts images stored in images based on the MPF format (found here: https://www.cipa.jp/e/std/std-sec.html
     * under "CIPA DC-007-Translation-2021 Multi-Picture Format"
     *
     * Overly commented, and without intention of being complete or production ready.
     * Created to extract depth maps from iPhone images, and to learn about image metadata.
     * Kudos to: Phil Harvey (exiftool), Jaume Sanchez (android-lens-blur-depth-extractor)
     */
    class MPFExtractor {
        constructor(options) {
            this.options = {
                debug: options && options.debug !== undefined ? options.debug : false,
                extractFII: options && options.extractFII !== undefined ? options.extractFII : true,
                extractNonFII: options && options.extractNonFII !== undefined ? options.extractNonFII : true
            };
        }
        extract(imageArrayBuffer) {
            return new Promise((resolve, reject) => {
                const debug = this.options.debug;
                const dataView = new DataView(imageArrayBuffer.buffer);
                // If you're executing this line on a big endian machine, it'll be reversed.
                // bigEnd further down though, refers to the endianness of the image itself.
                if (dataView.getUint16(0) !== 0xffd8) {
                    reject(new Error('Not a valid jpeg'));
                    return;
                }
                const length = dataView.byteLength;
                let offset = 2;
                let loops = 0;
                let marker; // APP# marker
                while (offset < length) {
                    if (++loops > 250) {
                        reject(new Error(`Found no marker after ${loops} loops 😵`));
                        return;
                    }
                    if (dataView.getUint8(offset) !== 0xff) {
                        reject(new Error(`Not a valid marker at offset 0x${offset.toString(16)}, found: 0x${dataView.getUint8(offset).toString(16)}`));
                        return;
                    }
                    marker = dataView.getUint8(offset + 1);
                    if (debug)
                        console.log(`Marker: ${marker.toString(16)}`);
                    if (marker === 0xe2) {
                        if (debug)
                            console.log('Found APP2 marker (0xffe2)');
                        // Works for iPhone 8 Plus, X, and XSMax. Or any photos of MPF format.
                        // Great way to visualize image information in html is using Exiftool. E.g.:
                        // ./exiftool.exe -htmldump -wantTrailer photo.jpg > photo.html
                        const formatPt = offset + 4;
                        /*
                         *  Structure of the MP Format Identifier
                         *
                         *  Offset Addr.  | Code (Hex)  | Description
                         *  +00             ff            Marker Prefix      <-- offset
                         *  +01             e2            APP2
                         *  +02             #n            APP2 Field Length
                         *  +03             #n            APP2 Field Length
                         *  +04             4d            'M'                <-- formatPt
                         *  +05             50            'P'
                         *  +06             46            'F'
                         *  +07             00            NULL
                         *                                                   <-- tiffOffset
                         */
                        if (dataView.getUint32(formatPt) === 0x4d504600) {
                            // Found MPF tag, so we start dig out sub images
                            const tiffOffset = formatPt + 4;
                            let bigEnd; // Endianness from TIFF header
                            // Test for TIFF validity and endianness
                            // 0x4949 and 0x4D4D ('II' and 'MM') marks Little Endian and Big Endian
                            if (dataView.getUint16(tiffOffset) === 0x4949) {
                                bigEnd = false;
                            }
                            else if (dataView.getUint16(tiffOffset) === 0x4d4d) {
                                bigEnd = true;
                            }
                            else {
                                reject(new Error('No valid endianness marker found in TIFF header'));
                                return;
                            }
                            if (dataView.getUint16(tiffOffset + 2, !bigEnd) !== 0x002a) {
                                reject(new Error('Not valid TIFF data! (no 0x002A marker)'));
                                return;
                            }
                            // 32 bit number stating the offset from the start of the 8 Byte MP Header
                            // to MP Index IFD Least possible value is thus 8 (means 0 offset)
                            const firstIFDOffset = dataView.getUint32(tiffOffset + 4, !bigEnd);
                            if (firstIFDOffset < 0x00000008) {
                                reject(new Error('Not valid TIFF data! (First offset less than 8)'));
                                return;
                            }
                            // Move ahead to MP Index IFD
                            // Assume we're at the first IFD, so firstIFDOffset points to
                            // MP Index IFD and not MP Attributes IFD. (If we try extract from a sub image,
                            // we fail silently here due to this assumption)
                            // Count (2 Byte) | MP Index Fields a.k.a. MP Entries (count * 12 Byte) | Offset of Next IFD (4 Byte)
                            const dirStart = tiffOffset + firstIFDOffset; // Start of IFD (Image File Directory)
                            const count = dataView.getUint16(dirStart, !bigEnd); // Count of MPEntries (2 Byte)
                            // Extract info from MPEntries (starting after Count)
                            const entriesStart = dirStart + 2;
                            let numberOfImages = 0;
                            for (let i = entriesStart; i < entriesStart + 12 * count; i += 12) {
                                // Each entry is 12 Bytes long
                                // Check MP Index IFD tags, here we only take tag 0xb001 = Number of images
                                if (dataView.getUint16(i, !bigEnd) === 0xb001) {
                                    // stored in Last 4 bytes of its 12 Byte entry.
                                    numberOfImages = dataView.getUint32(i + 8, !bigEnd);
                                }
                            }
                            const nextIFDOffsetLen = 4; // 4 Byte offset field that appears after MP Index IFD tags
                            const MPImageListValPt = dirStart + 2 + count * 12 + nextIFDOffsetLen;
                            const images = [];
                            for (let i = MPImageListValPt; i < MPImageListValPt + numberOfImages * 16; i += 16) {
                                const image = {
                                    MPType: dataView.getUint32(i, !bigEnd),
                                    size: dataView.getUint32(i + 4, !bigEnd),
                                    // This offset is specified relative to the address of the MP Endian
                                    // field in the MP Header, unless the image is a First Individual Image,
                                    // in which case the value of the offset shall be NULL (0x00000000).
                                    dataOffset: dataView.getUint32(i + 8, !bigEnd),
                                    dependantImages: dataView.getUint32(i + 12, !bigEnd),
                                    start: -1,
                                    end: -1,
                                    isFII: false
                                };
                                if (!image.dataOffset) {
                                    // dataOffset is 0x00000000 for First Individual Image
                                    image.start = 0;
                                    image.isFII = true;
                                }
                                else {
                                    image.start = tiffOffset + image.dataOffset;
                                    image.isFII = false;
                                }
                                image.end = image.start + image.size;
                                images.push(image);
                            }
                            if (this.options.extractNonFII && images.length) {
                                const bufferBlob = new Blob([dataView]);
                                const imgs = [];
                                for (const image of images) {
                                    if (image.isFII && !this.options.extractFII) {
                                        continue; // Skip FII
                                    }
                                    const imageBlob = bufferBlob.slice(image.start, image.end + 1, 'image/jpeg');
                                    // we don't need this
                                    // const imageUrl = URL.createObjectURL(imageBlob)
                                    // image.img = document.createElement('img')
                                    // image.img.src = imageUrl
                                    imgs.push(imageBlob);
                                }
                                resolve(imgs);
                            }
                        }
                    }
                    offset += 2 + dataView.getUint16(offset + 2);
                }
            });
        }
    }

    /**
     * Extracts XMP Metadata and the gain map recovery image
     * from a single JPEG file.
     *
     * @category Decoding Functions
     * @group Decoding Functions
     * @param jpegFile an `Uint8Array` containing and encoded JPEG file
     * @returns an sdr `Uint8Array` compressed in JPEG, a gainMap `Uint8Array` compressed in JPEG and the XMP parsed XMP metadata
     * @throws Error if XMP Metadata is not found
     * @throws Error if Gain map image is not found
     * @example
     * import { FileLoader } from 'three'
     * import { extractGainmapFromJPEG } from '@monogrid/gainmap-js'
     *
     * const jpegFile = await new FileLoader()
     *  .setResponseType('arraybuffer')
     *  .loadAsync('image.jpg')
     *
     * const { sdr, gainMap, metadata } = extractGainmapFromJPEG(jpegFile)
     */
    const extractGainmapFromJPEG = async (jpegFile) => {
        const metadata = extractXMP(jpegFile);
        if (!metadata)
            throw new XMPMetadataNotFoundError('Gain map XMP metadata not found');
        const mpfExtractor = new MPFExtractor({ extractFII: true, extractNonFII: true });
        const images = await mpfExtractor.extract(jpegFile);
        if (images.length !== 2)
            throw new GainMapNotFoundError('Gain map recovery image not found');
        return {
            sdr: new Uint8Array(await images[0].arrayBuffer()),
            gainMap: new Uint8Array(await images[1].arrayBuffer()),
            metadata
        };
    };

    /**
     * private function, async get image from blob
     *
     * @param blob
     * @returns
     */
    const getHTMLImageFromBlob = (blob) => {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.onload = () => { resolve(img); };
            img.onerror = (e) => { reject(e); };
            img.src = URL.createObjectURL(blob);
        });
    };

    class LoaderBase extends three.Loader {
        /**
         *
         * @param renderer
         * @param manager
         */
        constructor(renderer, manager) {
            super(manager);
            this._renderer = renderer;
            this._internalLoadingManager = new three.LoadingManager();
        }
        /**
         * Specify the renderTarget options to use when rendering the gain map
         *
         * @param options
         * @returns
         */
        setRenderTargetOptions(options) {
            this._renderTargetOptions = options;
            return this;
        }
        /**
         * @private
         * @returns
         */
        prepareQuadRenderer() {
            // temporary values
            const material = new GainMapDecoderMaterial({
                gainMapMax: [1, 1, 1],
                gainMapMin: [0, 0, 0],
                gamma: [1, 1, 1],
                offsetHdr: [1, 1, 1],
                offsetSdr: [1, 1, 1],
                hdrCapacityMax: 1,
                hdrCapacityMin: 0,
                maxDisplayBoost: 1,
                gainMap: new three.Texture(),
                sdr: new three.Texture()
            });
            return new QuadRenderer({
                width: 16,
                height: 16,
                type: three.HalfFloatType,
                colorSpace: three.LinearSRGBColorSpace,
                material,
                renderer: this._renderer,
                renderTargetOptions: this._renderTargetOptions
            });
        }
        /**
       * @private
       * @param quadRenderer
       * @param metadata
       * @param sdrBuffer
       * @param gainMapBuffer
       */
        async render(quadRenderer, metadata, sdrBuffer, gainMapBuffer) {
            // this is optional, will render a black gain-map if not present
            const gainMapBlob = gainMapBuffer ? new Blob([gainMapBuffer], { type: 'image/jpeg' }) : undefined;
            const sdrBlob = new Blob([sdrBuffer], { type: 'image/jpeg' });
            let sdrImage;
            let gainMapImage;
            let needsFlip = false;
            if (typeof createImageBitmap === 'undefined') {
                const res = await Promise.all([
                    gainMapBlob ? getHTMLImageFromBlob(gainMapBlob) : Promise.resolve(undefined),
                    getHTMLImageFromBlob(sdrBlob)
                ]);
                gainMapImage = res[0];
                sdrImage = res[1];
                needsFlip = true;
            }
            else {
                const res = await Promise.all([
                    gainMapBlob ? createImageBitmap(gainMapBlob, { imageOrientation: 'flipY' }) : Promise.resolve(undefined),
                    createImageBitmap(sdrBlob, { imageOrientation: 'flipY' })
                ]);
                gainMapImage = res[0];
                sdrImage = res[1];
            }
            const gainMap = new three.Texture(gainMapImage || new ImageData(2, 2), three.UVMapping, three.ClampToEdgeWrapping, three.ClampToEdgeWrapping, three.LinearFilter, three.LinearMipMapLinearFilter, three.RGBAFormat, three.UnsignedByteType, 1, three.LinearSRGBColorSpace);
            gainMap.flipY = needsFlip;
            gainMap.needsUpdate = true;
            const sdr = new three.Texture(sdrImage, three.UVMapping, three.ClampToEdgeWrapping, three.ClampToEdgeWrapping, three.LinearFilter, three.LinearMipMapLinearFilter, three.RGBAFormat, three.UnsignedByteType, 1, three.SRGBColorSpace);
            sdr.flipY = needsFlip;
            sdr.needsUpdate = true;
            quadRenderer.width = sdrImage.width;
            quadRenderer.height = sdrImage.height;
            quadRenderer.material.gainMap = gainMap;
            quadRenderer.material.sdr = sdr;
            quadRenderer.material.gainMapMin = metadata.gainMapMin;
            quadRenderer.material.gainMapMax = metadata.gainMapMax;
            quadRenderer.material.offsetHdr = metadata.offsetHdr;
            quadRenderer.material.offsetSdr = metadata.offsetSdr;
            quadRenderer.material.gamma = metadata.gamma;
            quadRenderer.material.hdrCapacityMin = metadata.hdrCapacityMin;
            quadRenderer.material.hdrCapacityMax = metadata.hdrCapacityMax;
            quadRenderer.material.maxDisplayBoost = Math.pow(2, metadata.hdrCapacityMax);
            quadRenderer.material.needsUpdate = true;
            quadRenderer.render();
        }
    }

    /**
     * A Three.js Loader for a JPEG with embedded gainmap metadata.
     *
     * @category Loaders
     * @group Loaders
     *
     * @example
     * import { HDRJPGLoader } from '@monogrid/gainmap-js'
     * import {
     *   EquirectangularReflectionMapping,
     *   LinearFilter,
     *   Mesh,
     *   MeshBasicMaterial,
     *   PerspectiveCamera,
     *   PlaneGeometry,
     *   Scene,
     *   WebGLRenderer
     * } from 'three'
     *
     * const renderer = new WebGLRenderer()
     *
     * const loader = new HDRJPGLoader(renderer)
     *
     * const result = await loader.loadAsync('gainmap.jpeg')
     * // `result` can be used to populate a Texture
     *
     * const scene = new Scene()
     * const mesh = new Mesh(
     *   new PlaneGeometry(),
     *   new MeshBasicMaterial({ map: result.renderTarget.texture })
     * )
     * scene.add(mesh)
     * renderer.render(scene, new PerspectiveCamera())
     *
     * // Starting from three.js r159
     * // `result.renderTarget.texture` can
     * // also be used as Equirectangular scene background
     * //
     * // it was previously needed to convert it
     * // to a DataTexture with `result.toDataTexture()`
     * scene.background = result.renderTarget.texture
     * scene.background.mapping = EquirectangularReflectionMapping
     *
     * // result must be manually disposed
     * // when you are done using it
     * result.dispose()
     *
     */
    class HDRJPGLoader extends LoaderBase {
        /**
         * Loads a JPEG containing gain map metadata
         * Renders a normal SDR image if gainmap data is not found
         *
         * @param url An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
         * @param onLoad Load complete callback, will receive the result
         * @param onProgress Progress callback, will receive a {@link ProgressEvent}
         * @param onError Error callback
         * @returns
         */
        load(url, onLoad, onProgress, onError) {
            const quadRenderer = this.prepareQuadRenderer();
            const loader = new three.FileLoader(this._internalLoadingManager);
            loader.setResponseType('arraybuffer');
            loader.setRequestHeader(this.requestHeader);
            loader.setPath(this.path);
            loader.setWithCredentials(this.withCredentials);
            this.manager.itemStart(url);
            loader.load(url, async (jpeg) => {
                if (typeof jpeg === 'string')
                    throw new Error('Invalid buffer, received [string], was expecting [ArrayBuffer]');
                const jpegBuffer = new Uint8Array(jpeg);
                let sdrJPEG;
                let gainMapJPEG;
                let metadata;
                try {
                    const extractionResult = await extractGainmapFromJPEG(jpegBuffer);
                    // gain map is successfully reconstructed
                    sdrJPEG = extractionResult.sdr;
                    gainMapJPEG = extractionResult.gainMap;
                    metadata = extractionResult.metadata;
                }
                catch (e) {
                    // render the SDR version if this is not a gainmap
                    if (e instanceof XMPMetadataNotFoundError || e instanceof GainMapNotFoundError) {
                        console.warn(`Failure to reconstruct an HDR image from ${url}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`);
                        metadata = {
                            gainMapMin: [0, 0, 0],
                            gainMapMax: [1, 1, 1],
                            gamma: [1, 1, 1],
                            hdrCapacityMin: 0,
                            hdrCapacityMax: 1,
                            offsetHdr: [0, 0, 0],
                            offsetSdr: [0, 0, 0]
                        };
                        sdrJPEG = jpegBuffer;
                    }
                    else {
                        throw e;
                    }
                }
                // solves #16
                try {
                    await this.render(quadRenderer, metadata, sdrJPEG, gainMapJPEG);
                }
                catch (error) {
                    this.manager.itemError(url);
                    if (typeof onError === 'function')
                        onError(error);
                    quadRenderer.disposeOnDemandRenderer();
                    return;
                }
                if (typeof onLoad === 'function')
                    onLoad(quadRenderer);
                this.manager.itemEnd(url);
                quadRenderer.disposeOnDemandRenderer();
            }, onProgress, (error) => {
                this.manager.itemError(url);
                if (typeof onError === 'function')
                    onError(error);
            });
            return quadRenderer;
        }
    }

    // https://github.com/mrdoob/three.js/issues/5552
    // http://en.wikipedia.org/wiki/RGBE_image_format

    class RGBELoader extends three.DataTextureLoader {

    	constructor( manager ) {

    		super( manager );

    		this.type = three.HalfFloatType;

    	}

    	// adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html

    	parse( buffer ) {

    		const
    			/* default error routine.  change this to change error handling */
    			rgbe_read_error = 1,
    			rgbe_write_error = 2,
    			rgbe_format_error = 3,
    			rgbe_memory_error = 4,
    			rgbe_error = function ( rgbe_error_code, msg ) {

    				switch ( rgbe_error_code ) {

    					case rgbe_read_error: throw new Error( 'THREE.RGBELoader: Read Error: ' + ( msg || '' ) );
    					case rgbe_write_error: throw new Error( 'THREE.RGBELoader: Write Error: ' + ( msg || '' ) );
    					case rgbe_format_error: throw new Error( 'THREE.RGBELoader: Bad File Format: ' + ( msg || '' ) );
    					default:
    					case rgbe_memory_error: throw new Error( 'THREE.RGBELoader: Memory Error: ' + ( msg || '' ) );

    				}

    			},

    			/* offsets to red, green, and blue components in a data (float) pixel */
    			//RGBE_DATA_RED = 0,
    			//RGBE_DATA_GREEN = 1,
    			//RGBE_DATA_BLUE = 2,

    			/* number of floats per pixel, use 4 since stored in rgba image format */
    			//RGBE_DATA_SIZE = 4,

    			/* flags indicating which fields in an rgbe_header_info are valid */
    			RGBE_VALID_PROGRAMTYPE = 1,
    			RGBE_VALID_FORMAT = 2,
    			RGBE_VALID_DIMENSIONS = 4,

    			NEWLINE = '\n',

    			fgets = function ( buffer, lineLimit, consume ) {

    				const chunkSize = 128;

    				lineLimit = ! lineLimit ? 1024 : lineLimit;
    				let p = buffer.pos,
    					i = - 1, len = 0, s = '',
    					chunk = String.fromCharCode.apply( null, new Uint16Array( buffer.subarray( p, p + chunkSize ) ) );

    				while ( ( 0 > ( i = chunk.indexOf( NEWLINE ) ) ) && ( len < lineLimit ) && ( p < buffer.byteLength ) ) {

    					s += chunk; len += chunk.length;
    					p += chunkSize;
    					chunk += String.fromCharCode.apply( null, new Uint16Array( buffer.subarray( p, p + chunkSize ) ) );

    				}

    				if ( - 1 < i ) {

    					/*for (i=l-1; i>=0; i--) {
    						byteCode = m.charCodeAt(i);
    						if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
    						else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
    						if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
    					}*/
    					if ( false !== consume ) buffer.pos += len + i + 1;
    					return s + chunk.slice( 0, i );

    				}

    				return false;

    			},

    			/* minimal header reading.  modify if you want to parse more information */
    			RGBE_ReadHeader = function ( buffer ) {


    				// regexes to parse header info fields
    				const magic_token_re = /^#\?(\S+)/,
    					gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
    					exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
    					format_re = /^\s*FORMAT=(\S+)\s*$/,
    					dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,

    					// RGBE format header struct
    					header = {

    						valid: 0, /* indicate which fields are valid */

    						string: '', /* the actual header string */

    						comments: '', /* comments found in header */

    						programtype: 'RGBE', /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */

    						format: '', /* RGBE format, default 32-bit_rle_rgbe */

    						gamma: 1.0, /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */

    						exposure: 1.0, /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */

    						width: 0, height: 0 /* image dimensions, width/height */

    					};

    				let line, match;

    				if ( buffer.pos >= buffer.byteLength || ! ( line = fgets( buffer ) ) ) {

    					rgbe_error( rgbe_read_error, 'no header found' );

    				}

    				/* if you want to require the magic token then uncomment the next line */
    				if ( ! ( match = line.match( magic_token_re ) ) ) {

    					rgbe_error( rgbe_format_error, 'bad initial token' );

    				}

    				header.valid |= RGBE_VALID_PROGRAMTYPE;
    				header.programtype = match[ 1 ];
    				header.string += line + '\n';

    				while ( true ) {

    					line = fgets( buffer );
    					if ( false === line ) break;
    					header.string += line + '\n';

    					if ( '#' === line.charAt( 0 ) ) {

    						header.comments += line + '\n';
    						continue; // comment line

    					}

    					if ( match = line.match( gamma_re ) ) {

    						header.gamma = parseFloat( match[ 1 ] );

    					}

    					if ( match = line.match( exposure_re ) ) {

    						header.exposure = parseFloat( match[ 1 ] );

    					}

    					if ( match = line.match( format_re ) ) {

    						header.valid |= RGBE_VALID_FORMAT;
    						header.format = match[ 1 ];//'32-bit_rle_rgbe';

    					}

    					if ( match = line.match( dimensions_re ) ) {

    						header.valid |= RGBE_VALID_DIMENSIONS;
    						header.height = parseInt( match[ 1 ], 10 );
    						header.width = parseInt( match[ 2 ], 10 );

    					}

    					if ( ( header.valid & RGBE_VALID_FORMAT ) && ( header.valid & RGBE_VALID_DIMENSIONS ) ) break;

    				}

    				if ( ! ( header.valid & RGBE_VALID_FORMAT ) ) {

    					rgbe_error( rgbe_format_error, 'missing format specifier' );

    				}

    				if ( ! ( header.valid & RGBE_VALID_DIMENSIONS ) ) {

    					rgbe_error( rgbe_format_error, 'missing image size specifier' );

    				}

    				return header;

    			},

    			RGBE_ReadPixels_RLE = function ( buffer, w, h ) {

    				const scanline_width = w;

    				if (
    					// run length encoding is not allowed so read flat
    					( ( scanline_width < 8 ) || ( scanline_width > 0x7fff ) ) ||
    					// this file is not run length encoded
    					( ( 2 !== buffer[ 0 ] ) || ( 2 !== buffer[ 1 ] ) || ( buffer[ 2 ] & 0x80 ) )
    				) {

    					// return the flat buffer
    					return new Uint8Array( buffer );

    				}

    				if ( scanline_width !== ( ( buffer[ 2 ] << 8 ) | buffer[ 3 ] ) ) {

    					rgbe_error( rgbe_format_error, 'wrong scanline width' );

    				}

    				const data_rgba = new Uint8Array( 4 * w * h );

    				if ( ! data_rgba.length ) {

    					rgbe_error( rgbe_memory_error, 'unable to allocate buffer space' );

    				}

    				let offset = 0, pos = 0;

    				const ptr_end = 4 * scanline_width;
    				const rgbeStart = new Uint8Array( 4 );
    				const scanline_buffer = new Uint8Array( ptr_end );
    				let num_scanlines = h;

    				// read in each successive scanline
    				while ( ( num_scanlines > 0 ) && ( pos < buffer.byteLength ) ) {

    					if ( pos + 4 > buffer.byteLength ) {

    						rgbe_error( rgbe_read_error );

    					}

    					rgbeStart[ 0 ] = buffer[ pos ++ ];
    					rgbeStart[ 1 ] = buffer[ pos ++ ];
    					rgbeStart[ 2 ] = buffer[ pos ++ ];
    					rgbeStart[ 3 ] = buffer[ pos ++ ];

    					if ( ( 2 != rgbeStart[ 0 ] ) || ( 2 != rgbeStart[ 1 ] ) || ( ( ( rgbeStart[ 2 ] << 8 ) | rgbeStart[ 3 ] ) != scanline_width ) ) {

    						rgbe_error( rgbe_format_error, 'bad rgbe scanline format' );

    					}

    					// read each of the four channels for the scanline into the buffer
    					// first red, then green, then blue, then exponent
    					let ptr = 0, count;

    					while ( ( ptr < ptr_end ) && ( pos < buffer.byteLength ) ) {

    						count = buffer[ pos ++ ];
    						const isEncodedRun = count > 128;
    						if ( isEncodedRun ) count -= 128;

    						if ( ( 0 === count ) || ( ptr + count > ptr_end ) ) {

    							rgbe_error( rgbe_format_error, 'bad scanline data' );

    						}

    						if ( isEncodedRun ) {

    							// a (encoded) run of the same value
    							const byteValue = buffer[ pos ++ ];
    							for ( let i = 0; i < count; i ++ ) {

    								scanline_buffer[ ptr ++ ] = byteValue;

    							}
    							//ptr += count;

    						} else {

    							// a literal-run
    							scanline_buffer.set( buffer.subarray( pos, pos + count ), ptr );
    							ptr += count; pos += count;

    						}

    					}


    					// now convert data from buffer into rgba
    					// first red, then green, then blue, then exponent (alpha)
    					const l = scanline_width; //scanline_buffer.byteLength;
    					for ( let i = 0; i < l; i ++ ) {

    						let off = 0;
    						data_rgba[ offset ] = scanline_buffer[ i + off ];
    						off += scanline_width; //1;
    						data_rgba[ offset + 1 ] = scanline_buffer[ i + off ];
    						off += scanline_width; //1;
    						data_rgba[ offset + 2 ] = scanline_buffer[ i + off ];
    						off += scanline_width; //1;
    						data_rgba[ offset + 3 ] = scanline_buffer[ i + off ];
    						offset += 4;

    					}

    					num_scanlines --;

    				}

    				return data_rgba;

    			};

    		const RGBEByteToRGBFloat = function ( sourceArray, sourceOffset, destArray, destOffset ) {

    			const e = sourceArray[ sourceOffset + 3 ];
    			const scale = Math.pow( 2.0, e - 128.0 ) / 255.0;

    			destArray[ destOffset + 0 ] = sourceArray[ sourceOffset + 0 ] * scale;
    			destArray[ destOffset + 1 ] = sourceArray[ sourceOffset + 1 ] * scale;
    			destArray[ destOffset + 2 ] = sourceArray[ sourceOffset + 2 ] * scale;
    			destArray[ destOffset + 3 ] = 1;

    		};

    		const RGBEByteToRGBHalf = function ( sourceArray, sourceOffset, destArray, destOffset ) {

    			const e = sourceArray[ sourceOffset + 3 ];
    			const scale = Math.pow( 2.0, e - 128.0 ) / 255.0;

    			// clamping to 65504, the maximum representable value in float16
    			destArray[ destOffset + 0 ] = three.DataUtils.toHalfFloat( Math.min( sourceArray[ sourceOffset + 0 ] * scale, 65504 ) );
    			destArray[ destOffset + 1 ] = three.DataUtils.toHalfFloat( Math.min( sourceArray[ sourceOffset + 1 ] * scale, 65504 ) );
    			destArray[ destOffset + 2 ] = three.DataUtils.toHalfFloat( Math.min( sourceArray[ sourceOffset + 2 ] * scale, 65504 ) );
    			destArray[ destOffset + 3 ] = three.DataUtils.toHalfFloat( 1 );

    		};

    		const byteArray = new Uint8Array( buffer );
    		byteArray.pos = 0;
    		const rgbe_header_info = RGBE_ReadHeader( byteArray );

    		const w = rgbe_header_info.width,
    			h = rgbe_header_info.height,
    			image_rgba_data = RGBE_ReadPixels_RLE( byteArray.subarray( byteArray.pos ), w, h );


    		let data, type;
    		let numElements;

    		switch ( this.type ) {

    			case three.FloatType:

    				numElements = image_rgba_data.length / 4;
    				const floatArray = new Float32Array( numElements * 4 );

    				for ( let j = 0; j < numElements; j ++ ) {

    					RGBEByteToRGBFloat( image_rgba_data, j * 4, floatArray, j * 4 );

    				}

    				data = floatArray;
    				type = three.FloatType;
    				break;

    			case three.HalfFloatType:

    				numElements = image_rgba_data.length / 4;
    				const halfArray = new Uint16Array( numElements * 4 );

    				for ( let j = 0; j < numElements; j ++ ) {

    					RGBEByteToRGBHalf( image_rgba_data, j * 4, halfArray, j * 4 );

    				}

    				data = halfArray;
    				type = three.HalfFloatType;
    				break;

    			default:

    				throw new Error( 'THREE.RGBELoader: Unsupported type: ' + this.type );

    		}

    		return {
    			width: w, height: h,
    			data: data,
    			header: rgbe_header_info.string,
    			gamma: rgbe_header_info.gamma,
    			exposure: rgbe_header_info.exposure,
    			type: type
    		};

    	}

    	setDataType( value ) {

    		this.type = value;
    		return this;

    	}

    	load( url, onLoad, onProgress, onError ) {

    		function onLoadCallback( texture, texData ) {

    			switch ( texture.type ) {

    				case three.FloatType:
    				case three.HalfFloatType:

    					texture.colorSpace = three.LinearSRGBColorSpace;
    					texture.minFilter = three.LinearFilter;
    					texture.magFilter = three.LinearFilter;
    					texture.generateMipmaps = false;
    					texture.flipY = true;

    					break;

    			}

    			if ( onLoad ) onLoad( texture, texData );

    		}

    		return super.load( url, onLoadCallback, onProgress, onError );

    	}

    }

    const legacy = {
        topLight: {
            intensity: 500,
            position: [0.418, 16.199, 0.300],
        },
        room: {
            position: [-0.757, 13.219, 0.717],
            scale: [31.713, 28.305, 28.591],
        },
        boxes: [
            {
                position: [-10.906, 2.009, 1.846],
                rotation: -0.195,
                scale: [2.328, 7.905, 4.651],
            },
            {
                position: [-5.607, -0.754, -0.758],
                rotation: 0.994,
                scale: [1.970, 1.534, 3.955],
            },
            {
                position: [6.167, 0.857, 7.803],
                rotation: 0.561,
                scale: [3.927, 6.285, 3.687],
            },
            {
                position: [-2.017, 0.018, 6.124],
                rotation: 0.333,
                scale: [2.002, 4.566, 2.064],
            },
            {
                position: [2.291, -0.756, -2.621],
                rotation: -0.286,
                scale: [1.546, 1.552, 1.496],
            },
            {
                position: [-2.193, -0.369, -5.547],
                rotation: 0.516,
                scale: [3.875, 3.487, 2.986],
            },
        ],
        lights: [
            {
                intensity: 50,
                position: [-16.116, 14.37, 8.208],
                scale: [0.1, 2.428, 2.739],
            },
            {
                intensity: 50,
                position: [-16.109, 18.021, -8.207],
                scale: [0.1, 2.425, 2.751],
            },
            {
                intensity: 17,
                position: [14.904, 12.198, -1.832],
                scale: [0.15, 4.265, 6.331],
            },
            {
                intensity: 43,
                position: [-0.462, 8.89, 14.520],
                scale: [4.38, 5.441, 0.088],
            },
            {
                intensity: 20,
                position: [3.235, 11.486, -12.541],
                scale: [2.5, 2.0, 0.1],
            },
            {
                intensity: 100,
                position: [0.0, 20.0, 0.0],
                scale: [1.0, 0.1, 1.0],
            },
        ]
    };
    const neutral = {
        topLight: {
            intensity: 400,
            position: [0.5, 14.0, 0.5],
        },
        room: {
            position: [0.0, 13.2, 0.0],
            scale: [31.5, 28.5, 31.5],
        },
        boxes: [
            {
                position: [-10.906, -1.0, 1.846],
                rotation: -0.195,
                scale: [2.328, 7.905, 4.651],
            },
            {
                position: [-5.607, -0.754, -0.758],
                rotation: 0.994,
                scale: [1.970, 1.534, 3.955],
            },
            {
                position: [6.167, -0.16, 7.803],
                rotation: 0.561,
                scale: [3.927, 6.285, 3.687],
            },
            {
                position: [-2.017, 0.018, 6.124],
                rotation: 0.333,
                scale: [2.002, 4.566, 2.064],
            },
            {
                position: [2.291, -0.756, -2.621],
                rotation: -0.286,
                scale: [1.546, 1.552, 1.496],
            },
            {
                position: [-2.193, -0.369, -5.547],
                rotation: 0.516,
                scale: [3.875, 3.487, 2.986],
            },
        ],
        lights: [
            {
                intensity: 80,
                position: [-14.0, 10.0, 8.0],
                scale: [0.1, 2.5, 2.5],
            },
            {
                intensity: 80,
                position: [-14.0, 14.0, -4.0],
                scale: [0.1, 2.5, 2.5],
            },
            {
                intensity: 23,
                position: [14.0, 12.0, 0.0],
                scale: [0.1, 5.0, 5.0],
            },
            {
                intensity: 16,
                position: [0.0, 9.0, 14.0],
                scale: [5.0, 5.0, 0.1],
            },
            {
                intensity: 80,
                position: [7.0, 8.0, -14.0],
                scale: [2.5, 2.5, 0.1],
            },
            {
                intensity: 80,
                position: [-7.0, 16.0, -14.0],
                scale: [2.5, 2.5, 0.1],
            },
            {
                intensity: 1,
                position: [0.0, 20.0, 0.0],
                scale: [0.1, 0.1, 0.1],
            },
        ]
    };
    class EnvironmentScene extends three.Scene {
        constructor(name) {
            super();
            this.position.y = -3.5;
            const geometry = new three.BoxGeometry();
            geometry.deleteAttribute('uv');
            const roomMaterial = new three.MeshStandardMaterial({ metalness: 0, side: three.BackSide });
            const boxMaterial = new three.MeshStandardMaterial({ metalness: 0 });
            const data = name == 'legacy' ? legacy : neutral;
            const mainLight = new three.PointLight(0xffffff, data.topLight.intensity, 28, 2);
            mainLight.position.set(...data.topLight.position);
            this.add(mainLight);
            const room = new three.Mesh(geometry, roomMaterial);
            room.position.set(...data.room.position);
            room.scale.set(...data.room.scale);
            this.add(room);
            for (const box of data.boxes) {
                const box1 = new three.Mesh(geometry, boxMaterial);
                box1.position.set(...box.position);
                box1.rotation.set(0, box.rotation, 0);
                box1.scale.set(...box.scale);
                this.add(box1);
            }
            for (const light of data.lights) {
                const light1 = new three.Mesh(geometry, this.createAreaLightMaterial(light.intensity));
                light1.position.set(...light.position);
                light1.scale.set(...light.scale);
                this.add(light1);
            }
        }
        createAreaLightMaterial(intensity) {
            const material = new three.MeshBasicMaterial();
            material.color.setScalar(intensity);
            return material;
        }
    }

    const GENERATED_SIGMA = 0.04;
    const MAX_SAMPLES = 20;
    const HDR_FILE_RE = /\.hdr(\.js)?$/;
    class TextureUtils {
        constructor(threeRenderer) {
            this.threeRenderer = threeRenderer;
            this.lottieLoaderUrl = '';
            this.withCredentials = false;
            this._ldrLoader = null;
            this._imageLoader = null;
            this._hdrLoader = null;
            this._lottieLoader = null;
            this.generatedEnvironmentMap = null;
            this.generatedEnvironmentMapAlt = null;
            this.skyboxCache = new Map();
            this.blurMaterial = null;
            this.blurScene = null;
        }
        get ldrLoader() {
            if (this._ldrLoader == null) {
                this._ldrLoader = new three.TextureLoader();
            }
            this._ldrLoader.setWithCredentials(this.withCredentials);
            return this._ldrLoader;
        }
        get imageLoader() {
            if (this._imageLoader == null) {
                this._imageLoader = new HDRJPGLoader(this.threeRenderer);
            }
            this._imageLoader.setWithCredentials(this.withCredentials);
            return this._imageLoader;
        }
        get hdrLoader() {
            if (this._hdrLoader == null) {
                this._hdrLoader = new RGBELoader();
                this._hdrLoader.setDataType(three.HalfFloatType);
            }
            this._hdrLoader.setWithCredentials(this.withCredentials);
            return this._hdrLoader;
        }
        async getLottieLoader() {
            if (this._lottieLoader == null) {
                const { LottieLoader } = await import( this.lottieLoaderUrl);
                this._lottieLoader = new LottieLoader();
            }
            this._lottieLoader.setWithCredentials(this.withCredentials);
            return this._lottieLoader;
        }
        async loadImage(url) {
            const texture = await new Promise((resolve, reject) => this.ldrLoader.load(url, resolve, () => { }, reject));
            texture.name = url;
            texture.flipY = false;
            return texture;
        }
        async loadLottie(url, quality) {
            const loader = await this.getLottieLoader();
            loader.setQuality(quality);
            const texture = await new Promise((resolve, reject) => loader.load(url, resolve, () => { }, reject));
            texture.name = url;
            return texture;
        }
        async loadEquirect(url, progressCallback = () => { }) {
            try {
                const isHDR = HDR_FILE_RE.test(url);
                const loader = isHDR ? this.hdrLoader : this.imageLoader;
                const texture = await new Promise((resolve, reject) => loader.load(url, (result) => {
                    const { renderTarget } = result;
                    if (renderTarget != null) {
                        const { texture } = renderTarget;
                        result.dispose(false);
                        resolve(texture);
                    }
                    else {
                        resolve(result);
                    }
                }, (event) => {
                    progressCallback(event.loaded / event.total * 0.9);
                }, reject));
                progressCallback(1.0);
                texture.name = url;
                texture.mapping = three.EquirectangularReflectionMapping;
                if (!isHDR) {
                    texture.colorSpace = three.SRGBColorSpace;
                }
                return texture;
            }
            finally {
                if (progressCallback) {
                    progressCallback(1);
                }
            }
        }
        async generateEnvironmentMapAndSkybox(skyboxUrl = null, environmentMapUrl = null, progressCallback = () => { }) {
            const useAltEnvironment = environmentMapUrl !== 'legacy';
            if (environmentMapUrl === 'legacy' || environmentMapUrl === 'neutral') {
                environmentMapUrl = null;
            }
            environmentMapUrl = deserializeUrl(environmentMapUrl);
            let skyboxLoads = Promise.resolve(null);
            let environmentMapLoads;
            if (!!skyboxUrl) {
                skyboxLoads = this.loadEquirectFromUrl(skyboxUrl, progressCallback);
            }
            if (!!environmentMapUrl) {
                environmentMapLoads =
                    this.loadEquirectFromUrl(environmentMapUrl, progressCallback);
            }
            else if (!!skyboxUrl) {
                environmentMapLoads =
                    this.loadEquirectFromUrl(skyboxUrl, progressCallback);
            }
            else {
                environmentMapLoads = useAltEnvironment ?
                    this.loadGeneratedEnvironmentMapAlt() :
                    this.loadGeneratedEnvironmentMap();
            }
            const [environmentMap, skybox] = await Promise.all([environmentMapLoads, skyboxLoads]);
            if (environmentMap == null) {
                throw new Error('Failed to load environment map.');
            }
            return { environmentMap, skybox };
        }
        async loadEquirectFromUrl(url, progressCallback) {
            if (!this.skyboxCache.has(url)) {
                const skyboxMapLoads = this.loadEquirect(url, progressCallback);
                this.skyboxCache.set(url, skyboxMapLoads);
            }
            return this.skyboxCache.get(url);
        }
        async GenerateEnvironmentMap(scene, name) {
            await timePasses();
            const renderer = this.threeRenderer;
            const cubeTarget = new three.WebGLCubeRenderTarget(256, {
                generateMipmaps: false,
                type: three.HalfFloatType,
                format: three.RGBAFormat,
                colorSpace: three.LinearSRGBColorSpace,
                depthBuffer: true
            });
            const cubeCamera = new three.CubeCamera(0.1, 100, cubeTarget);
            const generatedEnvironmentMap = cubeCamera.renderTarget.texture;
            generatedEnvironmentMap.name = name;
            const outputColorSpace = renderer.outputColorSpace;
            const toneMapping = renderer.toneMapping;
            renderer.toneMapping = three.NoToneMapping;
            renderer.outputColorSpace = three.LinearSRGBColorSpace;
            cubeCamera.update(renderer, scene);
            this.blurCubemap(cubeTarget, GENERATED_SIGMA);
            renderer.toneMapping = toneMapping;
            renderer.outputColorSpace = outputColorSpace;
            return generatedEnvironmentMap;
        }
        async loadGeneratedEnvironmentMap() {
            if (this.generatedEnvironmentMap == null) {
                this.generatedEnvironmentMap =
                    this.GenerateEnvironmentMap(new EnvironmentScene('legacy'), 'legacy');
            }
            return this.generatedEnvironmentMap;
        }
        async loadGeneratedEnvironmentMapAlt() {
            if (this.generatedEnvironmentMapAlt == null) {
                this.generatedEnvironmentMapAlt = this.GenerateEnvironmentMap(new EnvironmentScene('neutral'), 'neutral');
            }
            return this.generatedEnvironmentMapAlt;
        }
        blurCubemap(cubeTarget, sigma) {
            if (this.blurMaterial == null) {
                this.blurMaterial = this.getBlurShader(MAX_SAMPLES);
                const box = new three.BoxGeometry();
                const blurMesh = new three.Mesh(box, this.blurMaterial);
                this.blurScene = new three.Scene();
                this.blurScene.add(blurMesh);
            }
            const tempTarget = cubeTarget.clone();
            this.halfblur(cubeTarget, tempTarget, sigma, 'latitudinal');
            this.halfblur(tempTarget, cubeTarget, sigma, 'longitudinal');
        }
        halfblur(targetIn, targetOut, sigmaRadians, direction) {
            const STANDARD_DEVIATIONS = 3;
            const pixels = targetIn.width;
            const radiansPerPixel = isFinite(sigmaRadians) ?
                Math.PI / (2 * pixels) :
                2 * Math.PI / (2 * MAX_SAMPLES - 1);
            const sigmaPixels = sigmaRadians / radiansPerPixel;
            const samples = isFinite(sigmaRadians) ?
                1 + Math.floor(STANDARD_DEVIATIONS * sigmaPixels) :
                MAX_SAMPLES;
            if (samples > MAX_SAMPLES) {
                console.warn(`sigmaRadians, ${sigmaRadians}, is too large and will clip, as it requested ${samples} samples when the maximum is set to ${MAX_SAMPLES}`);
            }
            const weights = [];
            let sum = 0;
            for (let i = 0; i < MAX_SAMPLES; ++i) {
                const x = i / sigmaPixels;
                const weight = Math.exp(-x * x / 2);
                weights.push(weight);
                if (i == 0) {
                    sum += weight;
                }
                else if (i < samples) {
                    sum += 2 * weight;
                }
            }
            for (let i = 0; i < weights.length; i++) {
                weights[i] = weights[i] / sum;
            }
            const blurUniforms = this.blurMaterial.uniforms;
            blurUniforms['envMap'].value = targetIn.texture;
            blurUniforms['samples'].value = samples;
            blurUniforms['weights'].value = weights;
            blurUniforms['latitudinal'].value = direction === 'latitudinal';
            blurUniforms['dTheta'].value = radiansPerPixel;
            const cubeCamera = new three.CubeCamera(0.1, 100, targetOut);
            cubeCamera.update(this.threeRenderer, this.blurScene);
        }
        getBlurShader(maxSamples) {
            const weights = new Float32Array(maxSamples);
            const poleAxis = new three.Vector3(0, 1, 0);
            const shaderMaterial = new three.ShaderMaterial({
                name: 'SphericalGaussianBlur',
                defines: { 'n': maxSamples },
                uniforms: {
                    'envMap': { value: null },
                    'samples': { value: 1 },
                    'weights': { value: weights },
                    'latitudinal': { value: false },
                    'dTheta': { value: 0 },
                    'poleAxis': { value: poleAxis }
                },
                vertexShader:  `
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,
                fragmentShader:  `
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,
                blending: three.NoBlending,
                depthTest: false,
                depthWrite: false,
                side: three.BackSide
            });
            return shaderMaterial;
        }
        async dispose() {
            for (const [, promise] of this.skyboxCache) {
                const skybox = await promise;
                skybox.dispose();
            }
            if (this.generatedEnvironmentMap != null) {
                (await this.generatedEnvironmentMap).dispose();
                this.generatedEnvironmentMap = null;
            }
            if (this.generatedEnvironmentMapAlt != null) {
                (await this.generatedEnvironmentMapAlt).dispose();
                this.generatedEnvironmentMapAlt = null;
            }
            if (this.blurMaterial != null) {
                this.blurMaterial.dispose();
            }
        }
    }

    const DURATION_DECAY = 0.2;
    const LOW_FRAME_DURATION_MS = 40;
    const HIGH_FRAME_DURATION_MS = 60;
    const MAX_AVG_CHANGE_MS = 5;
    const SCALE_STEPS = [1, 0.79, 0.62, 0.5, 0.4, 0.31, 0.25];
    const DEFAULT_LAST_STEP = 3;
    const DEFAULT_POWER_PREFERENCE = 'high-performance';
    const COMMERCE_EXPOSURE = 1.3;
    class Renderer extends three.EventDispatcher {
        constructor(options) {
            super();
            this.loader = new CachingGLTFLoader(ModelViewerGLTFInstance);
            this.width = 0;
            this.height = 0;
            this.dpr = 1;
            this.scenes = new Set();
            this.multipleScenesVisible = false;
            this.lastTick = performance.now();
            this.renderedLastFrame = false;
            this.scaleStep = 0;
            this.lastStep = DEFAULT_LAST_STEP;
            this.avgFrameDuration = (HIGH_FRAME_DURATION_MS + LOW_FRAME_DURATION_MS) / 2;
            this.onWebGLContextLost = (event) => {
                this.dispatchEvent({ type: 'contextlost', sourceEvent: event });
            };
            this.onWebGLContextRestored = () => {
                var _a;
                (_a = this.textureUtils) === null || _a === void 0 ? void 0 : _a.dispose();
                this.textureUtils = new TextureUtils(this.threeRenderer);
                for (const scene of this.scenes) {
                    scene.element[$updateEnvironment]();
                }
            };
            this.dpr = resolveDpr();
            this.canvas3D = document.createElement('canvas');
            this.canvas3D.id = 'webgl-canvas';
            this.canvas3D.classList.add('show');
            three.ShaderChunk.tonemapping_pars_fragment =
                three.ShaderChunk.tonemapping_pars_fragment.replace('vec3 CustomToneMapping( vec3 color ) { return color; }', `
      float startCompression = 0.8 - 0.04;
      float desaturation = 0.15;
      vec3 CustomToneMapping( vec3 color ) {
        color *= toneMappingExposure;

        float x = min(color.r, min(color.g, color.b));
        float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
        color -= offset;

        float peak = max(color.r, max(color.g, color.b));
        if (peak < startCompression) return color;

        float d = 1. - startCompression;
        float newPeak = 1. - d * d / (peak + d - startCompression);
        color *= newPeak / peak;

        float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
        return mix(color, vec3(1, 1, 1), g);
      }`);
            try {
                this.threeRenderer = new three.WebGLRenderer({
                    canvas: this.canvas3D,
                    alpha: true,
                    antialias: true,
                    powerPreference: options.powerPreference,
                    preserveDrawingBuffer: true,
                });
                this.threeRenderer.autoClear = true;
                this.threeRenderer.setPixelRatio(1);
                this.threeRenderer.debug = {
                    checkShaderErrors: !!options.debug,
                    onShaderError: null
                };
                this.threeRenderer.toneMapping = three.ACESFilmicToneMapping;
            }
            catch (error) {
                console.warn(error);
            }
            this.arRenderer = new ARRenderer(this);
            this.textureUtils =
                this.canRender ? new TextureUtils(this.threeRenderer) : null;
            CachingGLTFLoader.initializeKTX2Loader(this.threeRenderer);
            this.canvas3D.addEventListener('webglcontextlost', this.onWebGLContextLost);
            this.canvas3D.addEventListener('webglcontextrestored', this.onWebGLContextRestored);
            this.updateRendererSize();
        }
        static get singleton() {
            return this._singleton;
        }
        static resetSingleton() {
            const elements = this._singleton.dispose();
            for (const element of elements) {
                element.disconnectedCallback();
            }
            this._singleton = new Renderer({
                powerPreference: (self.ModelViewerElement || {})
                    .powerPreference ||
                    DEFAULT_POWER_PREFERENCE,
                debug: isDebugMode()
            });
            for (const element of elements) {
                element.connectedCallback();
            }
        }
        get canRender() {
            return this.threeRenderer != null;
        }
        get scaleFactor() {
            return SCALE_STEPS[this.scaleStep];
        }
        set minScale(scale) {
            let i = 1;
            while (i < SCALE_STEPS.length) {
                if (SCALE_STEPS[i] < scale) {
                    break;
                }
                ++i;
            }
            this.lastStep = i - 1;
        }
        registerScene(scene) {
            this.scenes.add(scene);
            scene.forceRescale();
            const size = new three.Vector2();
            this.threeRenderer.getSize(size);
            scene.canvas.width = size.x;
            scene.canvas.height = size.y;
            if (this.canRender && this.scenes.size > 0) {
                this.threeRenderer.setAnimationLoop((time, frame) => this.render(time, frame));
            }
        }
        unregisterScene(scene) {
            this.scenes.delete(scene);
            if (this.canvas3D.parentElement === scene.canvas.parentElement) {
                scene.canvas.parentElement.removeChild(this.canvas3D);
            }
            if (this.canRender && this.scenes.size === 0) {
                this.threeRenderer.setAnimationLoop(null);
            }
        }
        displayCanvas(scene) {
            return this.multipleScenesVisible ? scene.element[$canvas] : this.canvas3D;
        }
        countVisibleScenes() {
            const { canvas3D } = this;
            let visibleScenes = 0;
            let canvas3DScene = null;
            for (const scene of this.scenes) {
                const { element } = scene;
                if (element.modelIsVisible && scene.externalRenderer == null) {
                    ++visibleScenes;
                }
                if (canvas3D.parentElement === scene.canvas.parentElement) {
                    canvas3DScene = scene;
                }
            }
            const multipleScenesVisible = visibleScenes > 1;
            if (canvas3DScene != null) {
                const newlyMultiple = multipleScenesVisible && !this.multipleScenesVisible;
                const disappearing = !canvas3DScene.element.modelIsVisible;
                if (newlyMultiple || disappearing) {
                    const { width, height } = this.sceneSize(canvas3DScene);
                    this.copyPixels(canvas3DScene, width, height);
                    canvas3D.parentElement.removeChild(canvas3D);
                }
            }
            this.multipleScenesVisible = multipleScenesVisible;
        }
        updateRendererSize() {
            var _a;
            const dpr = resolveDpr();
            if (dpr !== this.dpr) {
                for (const scene of this.scenes) {
                    const { element } = scene;
                    element[$updateSize](element.getBoundingClientRect());
                }
            }
            let width = 0;
            let height = 0;
            for (const scene of this.scenes) {
                width = Math.max(width, scene.width);
                height = Math.max(height, scene.height);
            }
            if (width === this.width && height === this.height && dpr === this.dpr) {
                return;
            }
            this.width = width;
            this.height = height;
            this.dpr = dpr;
            width = Math.ceil(width * dpr);
            height = Math.ceil(height * dpr);
            if (this.canRender) {
                this.threeRenderer.setSize(width, height, false);
            }
            for (const scene of this.scenes) {
                const { canvas } = scene;
                canvas.width = width;
                canvas.height = height;
                scene.forceRescale();
                (_a = scene.effectRenderer) === null || _a === void 0 ? void 0 : _a.setSize(width, height);
            }
        }
        updateRendererScale(delta) {
            const scaleStep = this.scaleStep;
            this.avgFrameDuration += clamp(DURATION_DECAY * (delta - this.avgFrameDuration), -MAX_AVG_CHANGE_MS, MAX_AVG_CHANGE_MS);
            if (this.avgFrameDuration > HIGH_FRAME_DURATION_MS) {
                ++this.scaleStep;
            }
            else if (this.avgFrameDuration < LOW_FRAME_DURATION_MS && this.scaleStep > 0) {
                --this.scaleStep;
            }
            this.scaleStep = Math.min(this.scaleStep, this.lastStep);
            if (scaleStep !== this.scaleStep) {
                this.avgFrameDuration =
                    (HIGH_FRAME_DURATION_MS + LOW_FRAME_DURATION_MS) / 2;
            }
        }
        shouldRender(scene) {
            if (!scene.shouldRender()) {
                if (scene.scaleStep != 0) {
                    scene.scaleStep = 0;
                    this.rescaleCanvas(scene);
                }
                else {
                    return false;
                }
            }
            else if (scene.scaleStep != this.scaleStep) {
                scene.scaleStep = this.scaleStep;
                this.rescaleCanvas(scene);
            }
            return true;
        }
        rescaleCanvas(scene) {
            const scale = SCALE_STEPS[scene.scaleStep];
            const width = Math.ceil(this.width / scale);
            const height = Math.ceil(this.height / scale);
            const { style } = scene.canvas;
            style.width = `${width}px`;
            style.height = `${height}px`;
            this.canvas3D.style.width = `${width}px`;
            this.canvas3D.style.height = `${height}px`;
            const renderedDpr = this.dpr * scale;
            const reason = scale < 1 ? 'GPU throttling' :
                this.dpr !== window.devicePixelRatio ? 'No meta viewport tag' :
                    '';
            scene.element.dispatchEvent(new CustomEvent('render-scale', {
                detail: {
                    reportedDpr: window.devicePixelRatio,
                    renderedDpr: renderedDpr,
                    minimumDpr: this.dpr * SCALE_STEPS[this.lastStep],
                    pixelWidth: Math.ceil(scene.width * renderedDpr),
                    pixelHeight: Math.ceil(scene.height * renderedDpr),
                    reason: reason
                }
            }));
        }
        sceneSize(scene) {
            const { dpr } = this;
            const scaleFactor = SCALE_STEPS[scene.scaleStep];
            const width = Math.min(Math.ceil(scene.width * scaleFactor * dpr), this.canvas3D.width);
            const height = Math.min(Math.ceil(scene.height * scaleFactor * dpr), this.canvas3D.height);
            return { width, height };
        }
        copyPixels(scene, width, height) {
            const context2D = scene.context;
            if (context2D == null) {
                console.log('could not acquire 2d context');
                return;
            }
            context2D.clearRect(0, 0, width, height);
            context2D.drawImage(this.canvas3D, 0, 0, width, height, 0, 0, width, height);
            scene.canvas.classList.add('show');
        }
        orderedScenes() {
            const scenes = [];
            for (const visible of [false, true]) {
                for (const scene of this.scenes) {
                    if (scene.element.modelIsVisible === visible) {
                        scenes.push(scene);
                    }
                }
            }
            return scenes;
        }
        get isPresenting() {
            return this.arRenderer.isPresenting;
        }
        preRender(scene, t, delta) {
            const { element, exposure, toneMapping } = scene;
            element[$tick](t, delta);
            const exposureIsNumber = typeof exposure === 'number' && !Number.isNaN(exposure);
            const env = element.environmentImage;
            const sky = element.skyboxImage;
            const compensateExposure = toneMapping === three.CustomToneMapping &&
                (env === 'neutral' || env === 'legacy' || (!env && !sky));
            this.threeRenderer.toneMappingExposure =
                (exposureIsNumber ? exposure : 1.0) *
                    (compensateExposure ? COMMERCE_EXPOSURE : 1.0);
        }
        render(t, frame) {
            if (frame != null) {
                this.arRenderer.onWebXRFrame(t, frame);
                return;
            }
            const delta = t - this.lastTick;
            this.lastTick = t;
            if (!this.canRender || this.isPresenting) {
                return;
            }
            this.countVisibleScenes();
            this.updateRendererSize();
            if (this.renderedLastFrame) {
                this.updateRendererScale(delta);
                this.renderedLastFrame = false;
            }
            const { canvas3D } = this;
            for (const scene of this.orderedScenes()) {
                const { element } = scene;
                if (!element.loaded ||
                    (!element.modelIsVisible && scene.renderCount > 0)) {
                    continue;
                }
                this.preRender(scene, t, delta);
                if (!this.shouldRender(scene)) {
                    continue;
                }
                if (scene.externalRenderer != null) {
                    const camera = scene.getCamera();
                    camera.updateMatrix();
                    const { matrix, projectionMatrix } = camera;
                    const viewMatrix = matrix.elements.slice();
                    const target = scene.getTarget();
                    viewMatrix[12] += target.x;
                    viewMatrix[13] += target.y;
                    viewMatrix[14] += target.z;
                    scene.externalRenderer.render({
                        viewMatrix: viewMatrix,
                        projectionMatrix: projectionMatrix.elements
                    });
                    continue;
                }
                if (!element.modelIsVisible && !this.multipleScenesVisible) {
                    for (const visibleScene of this.scenes) {
                        if (visibleScene.element.modelIsVisible) {
                            visibleScene.queueRender();
                        }
                    }
                }
                const { width, height } = this.sceneSize(scene);
                scene.renderShadow(this.threeRenderer);
                this.threeRenderer.setRenderTarget(null);
                this.threeRenderer.setViewport(0, Math.ceil(this.height * this.dpr) - height, width, height);
                if (scene.effectRenderer != null) {
                    scene.effectRenderer.render(delta);
                }
                else {
                    this.threeRenderer.autoClear =
                        true;
                    this.threeRenderer.toneMapping = scene.toneMapping;
                    this.threeRenderer.render(scene, scene.camera);
                }
                if (this.multipleScenesVisible ||
                    (!scene.element.modelIsVisible && scene.renderCount === 0)) {
                    this.copyPixels(scene, width, height);
                }
                else if (canvas3D.parentElement !== scene.canvas.parentElement) {
                    scene.canvas.parentElement.appendChild(canvas3D);
                    scene.canvas.classList.remove('show');
                }
                scene.hasRendered();
                ++scene.renderCount;
                this.renderedLastFrame = true;
            }
        }
        dispose() {
            if (this.textureUtils != null) {
                this.textureUtils.dispose();
            }
            if (this.threeRenderer != null) {
                this.threeRenderer.dispose();
            }
            this.textureUtils = null;
            this.threeRenderer = null;
            const elements = [];
            for (const scene of this.scenes) {
                elements.push(scene.element);
            }
            this.canvas3D.removeEventListener('webglcontextlost', this.onWebGLContextLost);
            this.canvas3D.removeEventListener('webglcontextrestored', this.onWebGLContextRestored);
            return elements;
        }
    }
    Renderer._singleton = new Renderer({
        powerPreference: (self.ModelViewerElement || {})
            .powerPreference ||
            DEFAULT_POWER_PREFERENCE,
        debug: isDebugMode()
    });

    const $correlatedObjects = Symbol('correlatedObjects');
    const $onUpdate$1 = Symbol('onUpdate');
    class ThreeDOMElement {
        constructor(onUpdate, correlatedObjects = null) {
            this[$onUpdate$1] = onUpdate;
            this[$correlatedObjects] = correlatedObjects;
        }
    }

    const quadMaterial = new three.MeshBasicMaterial();
    const quad = new three.PlaneGeometry(2, 2);
    let adhocNum = 0;
    const $threeTexture$2 = Symbol('threeTexture');
    const $threeTextures$1 = Symbol('threeTextures');
    class Image$1 extends ThreeDOMElement {
        get [$threeTexture$2]() {
            var _a;
            return (_a = this[$correlatedObjects]) === null || _a === void 0 ? void 0 : _a.values().next().value;
        }
        get [$threeTextures$1]() {
            return this[$correlatedObjects];
        }
        constructor(onUpdate, texture) {
            super(onUpdate, new Set(texture ? [texture] : []));
            if (!this[$threeTexture$2].image.src) {
                this[$threeTexture$2].image.src =
                    texture.name ? texture.name : 'adhoc_image' + adhocNum++;
            }
            if (!this[$threeTexture$2].image.name) {
                this[$threeTexture$2].image.name =
                    (texture && texture.image && texture.image.src) ?
                        texture.image.src.split('/').pop() :
                        'adhoc_image';
            }
        }
        get name() {
            return this[$threeTexture$2].image.name || '';
        }
        get uri() {
            return this[$threeTexture$2].image.src;
        }
        get bufferView() {
            return this[$threeTexture$2].image.bufferView;
        }
        get element() {
            const texture = this[$threeTexture$2];
            if (texture && (texture.isCanvasTexture || texture.isVideoTexture)) {
                return texture.image;
            }
            return;
        }
        get animation() {
            const texture = this[$threeTexture$2];
            if (texture && texture.isCanvasTexture && texture.animation) {
                return texture.animation;
            }
            return;
        }
        get type() {
            return this.uri != null ? 'external' : 'embedded';
        }
        set name(name) {
            for (const texture of this[$threeTextures$1]) {
                texture.image.name = name;
            }
        }
        update() {
            const texture = this[$threeTexture$2];
            if (texture && texture.isCanvasTexture && !texture.animation) {
                this[$threeTexture$2].needsUpdate = true;
                this[$onUpdate$1]();
            }
        }
        async createThumbnail(width, height) {
            const scene = new three.Scene();
            quadMaterial.map = this[$threeTexture$2];
            const mesh = new three.Mesh(quad, quadMaterial);
            scene.add(mesh);
            const camera = new three.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            const { threeRenderer } = Renderer.singleton;
            const renderTarget = new three.WebGLRenderTarget(width, height);
            threeRenderer.setRenderTarget(renderTarget);
            threeRenderer.render(scene, camera);
            threeRenderer.setRenderTarget(null);
            const buffer = new Uint8Array(width * height * 4);
            threeRenderer.readRenderTargetPixels(renderTarget, 0, 0, width, height, buffer);
            blobCanvas.width = width;
            blobCanvas.height = height;
            const blobContext = blobCanvas.getContext('2d');
            const imageData = blobContext.createImageData(width, height);
            imageData.data.set(buffer);
            blobContext.putImageData(imageData, 0, 0);
            return new Promise(async (resolve, reject) => {
                blobCanvas.toBlob(blob => {
                    if (!blob) {
                        return reject('Failed to capture thumbnail.');
                    }
                    resolve(URL.createObjectURL(blob));
                }, 'image/png');
            });
        }
    }

    var Filter;
    (function (Filter) {
        Filter[Filter["Nearest"] = 9728] = "Nearest";
        Filter[Filter["Linear"] = 9729] = "Linear";
        Filter[Filter["NearestMipmapNearest"] = 9984] = "NearestMipmapNearest";
        Filter[Filter["LinearMipmapNearest"] = 9985] = "LinearMipmapNearest";
        Filter[Filter["NearestMipmapLinear"] = 9986] = "NearestMipmapLinear";
        Filter[Filter["LinearMipmapLinear"] = 9987] = "LinearMipmapLinear";
    })(Filter || (Filter = {}));
    var Wrap;
    (function (Wrap) {
        Wrap[Wrap["ClampToEdge"] = 33071] = "ClampToEdge";
        Wrap[Wrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
        Wrap[Wrap["Repeat"] = 10497] = "Repeat";
    })(Wrap || (Wrap = {}));

    const wrapModeToWrapping = new Map([
        [Wrap.Repeat, three.RepeatWrapping],
        [Wrap.ClampToEdge, three.ClampToEdgeWrapping],
        [Wrap.MirroredRepeat, three.MirroredRepeatWrapping]
    ]);
    const wrappingToWrapMode = new Map([
        [three.RepeatWrapping, Wrap.Repeat],
        [three.ClampToEdgeWrapping, Wrap.ClampToEdge],
        [three.MirroredRepeatWrapping, Wrap.MirroredRepeat]
    ]);
    const minFilterToMinification = new Map([
        [Filter.Nearest, three.NearestFilter],
        [Filter.Linear, three.LinearFilter],
        [Filter.NearestMipmapNearest, three.NearestMipmapNearestFilter],
        [Filter.LinearMipmapNearest, three.LinearMipmapNearestFilter],
        [Filter.NearestMipmapLinear, three.NearestMipmapLinearFilter],
        [Filter.LinearMipmapLinear, three.LinearMipmapLinearFilter]
    ]);
    const minificationToMinFilter = new Map([
        [three.NearestFilter, Filter.Nearest],
        [three.LinearFilter, Filter.Linear],
        [three.NearestMipmapNearestFilter, Filter.NearestMipmapNearest],
        [three.LinearMipmapNearestFilter, Filter.LinearMipmapNearest],
        [three.NearestMipmapLinearFilter, Filter.NearestMipmapLinear],
        [three.LinearMipmapLinearFilter, Filter.LinearMipmapLinear]
    ]);
    const magFilterToMagnification = new Map([[Filter.Nearest, three.NearestFilter], [Filter.Linear, three.LinearFilter]]);
    const magnificationToMagFilter = new Map([[three.NearestFilter, Filter.Nearest], [three.LinearFilter, Filter.Linear]]);
    const isMinFilter = (() => {
        return (value) => minificationToMinFilter.has(value);
    })();
    const isMagFilter = (() => {
        return (value) => magnificationToMagFilter.has(value);
    })();
    const isWrapping = (() => {
        return (value) => wrappingToWrapMode.has(value);
    })();
    const isValidSamplerValue = (property, value) => {
        switch (property) {
            case 'minFilter':
                return isMinFilter(value);
            case 'magFilter':
                return isMagFilter(value);
            case 'wrapS':
            case 'wrapT':
                return isWrapping(value);
            case 'rotation':
            case 'repeat':
            case 'offset':
                return true;
            default:
                throw new Error(`Cannot configure property "${property}" on Sampler`);
        }
    };
    const $threeTexture$1 = Symbol('threeTexture');
    const $threeTextures = Symbol('threeTextures');
    const $setProperty = Symbol('setProperty');
    class Sampler extends ThreeDOMElement {
        get [$threeTexture$1]() {
            var _a;
            return (_a = this[$correlatedObjects]) === null || _a === void 0 ? void 0 : _a.values().next().value;
        }
        get [$threeTextures]() {
            return this[$correlatedObjects];
        }
        constructor(onUpdate, texture) {
            super(onUpdate, new Set(texture ? [texture] : []));
        }
        get name() {
            return this[$threeTexture$1].name || '';
        }
        get minFilter() {
            return minificationToMinFilter.get(this[$threeTexture$1].minFilter);
        }
        get magFilter() {
            return magnificationToMagFilter.get(this[$threeTexture$1].magFilter);
        }
        get wrapS() {
            return wrappingToWrapMode.get(this[$threeTexture$1].wrapS);
        }
        get wrapT() {
            return wrappingToWrapMode.get(this[$threeTexture$1].wrapT);
        }
        get rotation() {
            return this[$threeTexture$1].rotation;
        }
        get scale() {
            return toVector2D(this[$threeTexture$1].repeat);
        }
        get offset() {
            return toVector2D(this[$threeTexture$1].offset);
        }
        setMinFilter(filter) {
            this[$setProperty]('minFilter', minFilterToMinification.get(filter));
        }
        setMagFilter(filter) {
            this[$setProperty]('magFilter', magFilterToMagnification.get(filter));
        }
        setWrapS(mode) {
            this[$setProperty]('wrapS', wrapModeToWrapping.get(mode));
        }
        setWrapT(mode) {
            this[$setProperty]('wrapT', wrapModeToWrapping.get(mode));
        }
        setRotation(rotation) {
            if (rotation == null) {
                rotation = 0;
            }
            this[$setProperty]('rotation', rotation);
        }
        setScale(scale) {
            if (scale == null) {
                scale = { u: 1, v: 1 };
            }
            this[$setProperty]('repeat', new three.Vector2(scale.u, scale.v));
        }
        setOffset(offset) {
            if (offset == null) {
                offset = { u: 0, v: 0 };
            }
            this[$setProperty]('offset', new three.Vector2(offset.u, offset.v));
        }
        [$setProperty](property, value) {
            if (isValidSamplerValue(property, value)) {
                for (const texture of this[$threeTextures]) {
                    texture[property] = value;
                    texture.needsUpdate = true;
                }
            }
            this[$onUpdate$1]();
        }
    }

    const $image = Symbol('image');
    const $sampler = Symbol('sampler');
    const $threeTexture = Symbol('threeTexture');
    class Texture extends ThreeDOMElement {
        constructor(onUpdate, threeTexture) {
            super(onUpdate, new Set(threeTexture ? [threeTexture] : []));
            this[$sampler] = new Sampler(onUpdate, threeTexture);
            this[$image] = new Image$1(onUpdate, threeTexture);
        }
        get [$threeTexture]() {
            var _a;
            return (_a = this[$correlatedObjects]) === null || _a === void 0 ? void 0 : _a.values().next().value;
        }
        get name() {
            return this[$threeTexture].name || '';
        }
        set name(name) {
            for (const texture of this[$correlatedObjects]) {
                texture.name = name;
            }
        }
        get sampler() {
            return this[$sampler];
        }
        get source() {
            return this[$image];
        }
    }

    var _a$4, _b$4, _c$2;
    const $texture = Symbol('texture');
    const $transform = Symbol('transform');
    const $materials$1 = Symbol('materials');
    const $usage = Symbol('usage');
    const $onUpdate = Symbol('onUpdate');
    const $activeVideo = Symbol('activeVideo');
    var TextureUsage;
    (function (TextureUsage) {
        TextureUsage[TextureUsage["Base"] = 0] = "Base";
        TextureUsage[TextureUsage["MetallicRoughness"] = 1] = "MetallicRoughness";
        TextureUsage[TextureUsage["Normal"] = 2] = "Normal";
        TextureUsage[TextureUsage["Occlusion"] = 3] = "Occlusion";
        TextureUsage[TextureUsage["Emissive"] = 4] = "Emissive";
        TextureUsage[TextureUsage["Clearcoat"] = 5] = "Clearcoat";
        TextureUsage[TextureUsage["ClearcoatRoughness"] = 6] = "ClearcoatRoughness";
        TextureUsage[TextureUsage["ClearcoatNormal"] = 7] = "ClearcoatNormal";
        TextureUsage[TextureUsage["SheenColor"] = 8] = "SheenColor";
        TextureUsage[TextureUsage["SheenRoughness"] = 9] = "SheenRoughness";
        TextureUsage[TextureUsage["Transmission"] = 10] = "Transmission";
        TextureUsage[TextureUsage["Thickness"] = 11] = "Thickness";
        TextureUsage[TextureUsage["Specular"] = 12] = "Specular";
        TextureUsage[TextureUsage["SpecularColor"] = 13] = "SpecularColor";
        TextureUsage[TextureUsage["Iridescence"] = 14] = "Iridescence";
        TextureUsage[TextureUsage["IridescenceThickness"] = 15] = "IridescenceThickness";
        TextureUsage[TextureUsage["Anisotropy"] = 16] = "Anisotropy";
    })(TextureUsage || (TextureUsage = {}));
    class TextureInfo {
        constructor(onUpdate, usage, threeTexture, material) {
            this[_a$4] = null;
            this[_b$4] = {
                rotation: 0,
                scale: new three.Vector2(1, 1),
                offset: new three.Vector2(0, 0)
            };
            this[_c$2] = false;
            if (threeTexture) {
                this[$transform].rotation = threeTexture.rotation;
                this[$transform].scale.copy(threeTexture.repeat);
                this[$transform].offset.copy(threeTexture.offset);
                this[$texture] = new Texture(onUpdate, threeTexture);
            }
            this[$onUpdate] = onUpdate;
            this[$materials$1] = material;
            this[$usage] = usage;
        }
        get texture() {
            return this[$texture];
        }
        setTexture(texture) {
            var _d, _e;
            const threeTexture = texture != null ? texture.source[$threeTexture$2] : null;
            const oldTexture = (_d = this[$texture]) === null || _d === void 0 ? void 0 : _d.source[$threeTexture$2];
            if (oldTexture != null && oldTexture.isVideoTexture) {
                this[$activeVideo] = false;
            }
            else if ((_e = this[$texture]) === null || _e === void 0 ? void 0 : _e.source.animation) {
                this[$texture].source.animation.removeEventListener('enterFrame', this[$onUpdate]);
            }
            this[$texture] = texture;
            if (threeTexture != null && threeTexture.isVideoTexture) {
                const element = threeTexture.image;
                this[$activeVideo] = true;
                if (element.requestVideoFrameCallback != null) {
                    const update = () => {
                        if (!this[$activeVideo]) {
                            return;
                        }
                        this[$onUpdate]();
                        element.requestVideoFrameCallback(update);
                    };
                    element.requestVideoFrameCallback(update);
                }
                else {
                    const update = () => {
                        if (!this[$activeVideo]) {
                            return;
                        }
                        this[$onUpdate]();
                        requestAnimationFrame(update);
                    };
                    requestAnimationFrame(update);
                }
            }
            else if ((texture === null || texture === void 0 ? void 0 : texture.source.animation) != null) {
                texture.source.animation.addEventListener('enterFrame', this[$onUpdate]);
            }
            let colorSpace = three.SRGBColorSpace;
            if (this[$materials$1]) {
                for (const material of this[$materials$1]) {
                    switch (this[$usage]) {
                        case TextureUsage.Base:
                            material.map = threeTexture;
                            break;
                        case TextureUsage.MetallicRoughness:
                            colorSpace = three.LinearSRGBColorSpace;
                            material.metalnessMap = threeTexture;
                            material.roughnessMap = threeTexture;
                            break;
                        case TextureUsage.Normal:
                            colorSpace = three.LinearSRGBColorSpace;
                            material.normalMap = threeTexture;
                            break;
                        case TextureUsage.Occlusion:
                            colorSpace = three.LinearSRGBColorSpace;
                            material.aoMap = threeTexture;
                            break;
                        case TextureUsage.Emissive:
                            material.emissiveMap = threeTexture;
                            break;
                        case TextureUsage.Clearcoat:
                            material.clearcoatMap = threeTexture;
                            break;
                        case TextureUsage.ClearcoatRoughness:
                            material.clearcoatRoughnessMap = threeTexture;
                            break;
                        case TextureUsage.ClearcoatNormal:
                            material.clearcoatNormalMap = threeTexture;
                            break;
                        case TextureUsage.SheenColor:
                            material.sheenColorMap = threeTexture;
                            break;
                        case TextureUsage.SheenRoughness:
                            material.sheenRoughnessMap = threeTexture;
                            break;
                        case TextureUsage.Transmission:
                            material.transmissionMap = threeTexture;
                            break;
                        case TextureUsage.Thickness:
                            material.thicknessMap = threeTexture;
                            break;
                        case TextureUsage.Specular:
                            material.specularIntensityMap = threeTexture;
                            break;
                        case TextureUsage.SpecularColor:
                            material.specularColorMap = threeTexture;
                            break;
                        case TextureUsage.Iridescence:
                            material.iridescenceMap = threeTexture;
                            break;
                        case TextureUsage.IridescenceThickness:
                            material.iridescenceThicknessMap = threeTexture;
                            break;
                        case TextureUsage.Anisotropy:
                            material.anisotropyMap = threeTexture;
                            break;
                    }
                    material.needsUpdate = true;
                }
            }
            if (threeTexture) {
                threeTexture.colorSpace = colorSpace;
                threeTexture.rotation = this[$transform].rotation;
                threeTexture.repeat = this[$transform].scale;
                threeTexture.offset = this[$transform].offset;
            }
            this[$onUpdate]();
        }
    }
    _a$4 = $texture, _b$4 = $transform, _c$2 = $activeVideo;

    const $threeMaterial = Symbol('threeMaterial');
    const $threeMaterials = Symbol('threeMaterials');
    const $baseColorTexture = Symbol('baseColorTexture');
    const $metallicRoughnessTexture = Symbol('metallicRoughnessTexture');
    class PBRMetallicRoughness extends ThreeDOMElement {
        constructor(onUpdate, correlatedMaterials) {
            super(onUpdate, correlatedMaterials);
            const { map, metalnessMap } = correlatedMaterials.values().next().value;
            this[$baseColorTexture] =
                new TextureInfo(onUpdate, TextureUsage.Base, map, correlatedMaterials);
            this[$metallicRoughnessTexture] = new TextureInfo(onUpdate, TextureUsage.MetallicRoughness, metalnessMap, correlatedMaterials);
        }
        get [$threeMaterials]() {
            return this[$correlatedObjects];
        }
        get [$threeMaterial]() {
            var _a;
            return (_a = this[$correlatedObjects]) === null || _a === void 0 ? void 0 : _a.values().next().value;
        }
        get baseColorFactor() {
            const rgba = [0, 0, 0, this[$threeMaterial].opacity];
            this[$threeMaterial].color.toArray(rgba);
            return rgba;
        }
        get metallicFactor() {
            return this[$threeMaterial].metalness;
        }
        get roughnessFactor() {
            return this[$threeMaterial].roughness;
        }
        get baseColorTexture() {
            return this[$baseColorTexture];
        }
        get metallicRoughnessTexture() {
            return this[$metallicRoughnessTexture];
        }
        setBaseColorFactor(rgba) {
            const color = new three.Color();
            if (rgba instanceof Array) {
                color.fromArray(rgba);
            }
            else {
                color.set(rgba);
            }
            for (const material of this[$threeMaterials]) {
                material.color.set(color);
                if (rgba instanceof Array) {
                    material.opacity = (rgba)[3];
                }
                else {
                    rgba = [0, 0, 0, material.opacity];
                    color.toArray(rgba);
                }
            }
            this[$onUpdate$1]();
        }
        setMetallicFactor(value) {
            for (const material of this[$threeMaterials]) {
                material.metalness = value;
            }
            this[$onUpdate$1]();
        }
        setRoughnessFactor(value) {
            for (const material of this[$threeMaterials]) {
                material.roughness = value;
            }
            this[$onUpdate$1]();
        }
    }

    var _a$3, _b$3;
    const $pbrMetallicRoughness = Symbol('pbrMetallicRoughness');
    const $normalTexture = Symbol('normalTexture');
    const $occlusionTexture = Symbol('occlusionTexture');
    const $emissiveTexture = Symbol('emissiveTexture');
    const $backingThreeMaterial = Symbol('backingThreeMaterial');
    const $applyAlphaCutoff = Symbol('applyAlphaCutoff');
    const $getAlphaMode = Symbol('getAlphaMode');
    const $lazyLoadGLTFInfo = Symbol('lazyLoadGLTFInfo');
    const $initialize = Symbol('initialize');
    const $getLoadedMaterial = Symbol('getLoadedMaterial');
    const $ensureMaterialIsLoaded = Symbol('ensureMaterialIsLoaded');
    const $gltfIndex = Symbol('gltfIndex');
    const $setActive = Symbol('setActive');
    const $variantIndices = Symbol('variantIndices');
    const $isActive = Symbol('isActive');
    const $variantSet = Symbol('variantSet');
    const $modelVariants = Symbol('modelVariants');
    const $name = Symbol('name');
    const $pbrTextures = Symbol('pbrTextures');
    class Material extends ThreeDOMElement {
        constructor(onUpdate, gltfIndex, isActive, modelVariants, correlatedMaterials, name, lazyLoadInfo = undefined) {
            super(onUpdate, correlatedMaterials);
            this[_a$3] = new Set();
            this[_b$3] = new Map();
            this[$gltfIndex] = gltfIndex;
            this[$isActive] = isActive;
            this[$modelVariants] = modelVariants;
            this[$name] = name;
            if (lazyLoadInfo == null) {
                this[$initialize]();
            }
            else {
                this[$lazyLoadGLTFInfo] = lazyLoadInfo;
            }
        }
        get [(_a$3 = $variantSet, _b$3 = $pbrTextures, $backingThreeMaterial)]() {
            return this[$correlatedObjects]
                .values()
                .next()
                .value;
        }
        [$initialize]() {
            const onUpdate = this[$onUpdate$1];
            const correlatedMaterials = this[$correlatedObjects];
            this[$pbrMetallicRoughness] =
                new PBRMetallicRoughness(onUpdate, correlatedMaterials);
            const { normalMap, aoMap, emissiveMap } = correlatedMaterials.values().next().value;
            this[$normalTexture] = new TextureInfo(onUpdate, TextureUsage.Normal, normalMap, correlatedMaterials);
            this[$occlusionTexture] = new TextureInfo(onUpdate, TextureUsage.Occlusion, aoMap, correlatedMaterials);
            this[$emissiveTexture] = new TextureInfo(onUpdate, TextureUsage.Emissive, emissiveMap, correlatedMaterials);
            const createTextureInfo = (usage) => {
                this[$pbrTextures].set(usage, new TextureInfo(onUpdate, usage, null, correlatedMaterials));
            };
            createTextureInfo(TextureUsage.Clearcoat);
            createTextureInfo(TextureUsage.ClearcoatRoughness);
            createTextureInfo(TextureUsage.ClearcoatNormal);
            createTextureInfo(TextureUsage.SheenColor);
            createTextureInfo(TextureUsage.SheenRoughness);
            createTextureInfo(TextureUsage.Transmission);
            createTextureInfo(TextureUsage.Thickness);
            createTextureInfo(TextureUsage.Specular);
            createTextureInfo(TextureUsage.SpecularColor);
            createTextureInfo(TextureUsage.Iridescence);
            createTextureInfo(TextureUsage.IridescenceThickness);
            createTextureInfo(TextureUsage.Anisotropy);
        }
        async [$getLoadedMaterial]() {
            if (this[$lazyLoadGLTFInfo] != null) {
                const { set, material } = await this[$lazyLoadGLTFInfo].doLazyLoad();
                this[$correlatedObjects] = set;
                this[$initialize]();
                this[$lazyLoadGLTFInfo] = undefined;
                this.ensureLoaded = async () => { };
                return material;
            }
            return this[$correlatedObjects].values().next().value;
        }
        colorFromRgb(rgb) {
            const color = new three.Color();
            if (rgb instanceof Array) {
                color.fromArray(rgb);
            }
            else {
                color.set(rgb);
            }
            return color;
        }
        [$ensureMaterialIsLoaded]() {
            if (this[$lazyLoadGLTFInfo] == null) {
                return;
            }
            throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`);
        }
        async ensureLoaded() {
            await this[$getLoadedMaterial]();
        }
        get isLoaded() {
            return this[$lazyLoadGLTFInfo] == null;
        }
        get isActive() {
            return this[$isActive];
        }
        [$setActive](isActive) {
            this[$isActive] = isActive;
        }
        get name() {
            return this[$name] || '';
        }
        set name(name) {
            this[$name] = name;
            if (this[$correlatedObjects] != null) {
                for (const threeMaterial of this[$correlatedObjects]) {
                    threeMaterial.name = name;
                }
            }
        }
        get pbrMetallicRoughness() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrMetallicRoughness];
        }
        get normalTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$normalTexture];
        }
        get occlusionTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$occlusionTexture];
        }
        get emissiveTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$emissiveTexture];
        }
        get emissiveFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].emissive.toArray();
        }
        get index() {
            return this[$gltfIndex];
        }
        [$variantIndices]() {
            return this[$variantSet];
        }
        hasVariant(name) {
            const variantData = this[$modelVariants].get(name);
            return variantData != null && this[$variantSet].has(variantData.index);
        }
        setEmissiveFactor(rgb) {
            this[$ensureMaterialIsLoaded]();
            const color = this.colorFromRgb(rgb);
            for (const material of this[$correlatedObjects]) {
                material.emissive.set(color);
            }
            this[$onUpdate$1]();
        }
        [$getAlphaMode]() {
            if (this[$backingThreeMaterial].transparent) {
                return 'BLEND';
            }
            else {
                if (this[$backingThreeMaterial].alphaTest > 0.0) {
                    return 'MASK';
                }
            }
            return 'OPAQUE';
        }
        [$applyAlphaCutoff]() {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                if (this[$getAlphaMode]() === 'MASK') {
                    if (material.alphaTest == undefined) {
                        material.alphaTest = 0.5;
                    }
                }
                else {
                    material.alphaTest = undefined;
                }
                material.needsUpdate = true;
            }
        }
        setAlphaCutoff(cutoff) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.alphaTest = cutoff;
                material.needsUpdate = true;
            }
            this[$applyAlphaCutoff]();
            this[$onUpdate$1]();
        }
        getAlphaCutoff() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].alphaTest;
        }
        setDoubleSided(doubleSided) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.side = doubleSided ? three.DoubleSide : three.FrontSide;
                material.needsUpdate = true;
            }
            this[$onUpdate$1]();
        }
        getDoubleSided() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].side == three.DoubleSide;
        }
        setAlphaMode(alphaMode) {
            this[$ensureMaterialIsLoaded]();
            const enableTransparency = (material, enabled) => {
                material.transparent = enabled;
                material.depthWrite = !enabled;
            };
            for (const material of this[$correlatedObjects]) {
                enableTransparency(material, alphaMode === 'BLEND');
                if (alphaMode === 'MASK') {
                    material.alphaTest = 0.5;
                }
                else {
                    material.alphaTest = undefined;
                }
                material.needsUpdate = true;
            }
            this[$onUpdate$1]();
        }
        getAlphaMode() {
            this[$ensureMaterialIsLoaded]();
            return this[$getAlphaMode]();
        }
        get emissiveStrength() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].emissiveIntensity;
        }
        setEmissiveStrength(emissiveStrength) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.emissiveIntensity = emissiveStrength;
            }
            this[$onUpdate$1]();
        }
        get clearcoatFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].clearcoat;
        }
        get clearcoatRoughnessFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].clearcoatRoughness;
        }
        get clearcoatTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.Clearcoat);
        }
        get clearcoatRoughnessTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.ClearcoatRoughness);
        }
        get clearcoatNormalTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.ClearcoatNormal);
        }
        get clearcoatNormalScale() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].clearcoatNormalScale.x;
        }
        setClearcoatFactor(clearcoatFactor) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.clearcoat = clearcoatFactor;
            }
            this[$onUpdate$1]();
        }
        setClearcoatRoughnessFactor(clearcoatRoughnessFactor) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.clearcoatRoughness = clearcoatRoughnessFactor;
            }
            this[$onUpdate$1]();
        }
        setClearcoatNormalScale(clearcoatNormalScale) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.clearcoatNormalScale =
                    new three.Vector2(clearcoatNormalScale, clearcoatNormalScale);
            }
            this[$onUpdate$1]();
        }
        get ior() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].ior;
        }
        setIor(ior) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.ior = ior;
            }
            this[$onUpdate$1]();
        }
        get sheenColorFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].sheenColor.toArray();
        }
        get sheenColorTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.SheenColor);
        }
        get sheenRoughnessFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].sheenRoughness;
        }
        get sheenRoughnessTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.SheenRoughness);
        }
        setSheenColorFactor(rgb) {
            this[$ensureMaterialIsLoaded]();
            const color = this.colorFromRgb(rgb);
            for (const material of this[$correlatedObjects]) {
                material.sheenColor.set(color);
                material.sheen = 1;
            }
            this[$onUpdate$1]();
        }
        setSheenRoughnessFactor(roughness) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.sheenRoughness = roughness;
                material.sheen = 1;
            }
            this[$onUpdate$1]();
        }
        get transmissionFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].transmission;
        }
        get transmissionTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.Transmission);
        }
        setTransmissionFactor(transmission) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.transmission = transmission;
            }
            this[$onUpdate$1]();
        }
        get thicknessFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].thickness;
        }
        get thicknessTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.Thickness);
        }
        get attenuationDistance() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].attenuationDistance;
        }
        get attenuationColor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].attenuationColor.toArray();
        }
        setThicknessFactor(thickness) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.thickness = thickness;
            }
            this[$onUpdate$1]();
        }
        setAttenuationDistance(attenuationDistance) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.attenuationDistance = attenuationDistance;
            }
            this[$onUpdate$1]();
        }
        setAttenuationColor(rgb) {
            this[$ensureMaterialIsLoaded]();
            const color = this.colorFromRgb(rgb);
            for (const material of this[$correlatedObjects]) {
                material.attenuationColor.set(color);
            }
            this[$onUpdate$1]();
        }
        get specularFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].specularIntensity;
        }
        get specularTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.Specular);
        }
        get specularColorFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].specularColor.toArray();
        }
        get specularColorTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.SheenColor);
        }
        setSpecularFactor(specularFactor) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.specularIntensity = specularFactor;
            }
            this[$onUpdate$1]();
        }
        setSpecularColorFactor(rgb) {
            this[$ensureMaterialIsLoaded]();
            const color = this.colorFromRgb(rgb);
            for (const material of this[$correlatedObjects]) {
                material.specularColor.set(color);
            }
            this[$onUpdate$1]();
        }
        get iridescenceFactor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].iridescence;
        }
        get iridescenceTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.Iridescence);
        }
        get iridescenceIor() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].iridescenceIOR;
        }
        get iridescenceThicknessMinimum() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].iridescenceThicknessRange[0];
        }
        get iridescenceThicknessMaximum() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].iridescenceThicknessRange[1];
        }
        get iridescenceThicknessTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.IridescenceThickness);
        }
        setIridescenceFactor(iridescence) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.iridescence = iridescence;
            }
            this[$onUpdate$1]();
        }
        setIridescenceIor(ior) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.iridescenceIOR = ior;
            }
            this[$onUpdate$1]();
        }
        setIridescenceThicknessMinimum(thicknessMin) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.iridescenceThicknessRange[0] = thicknessMin;
            }
            this[$onUpdate$1]();
        }
        setIridescenceThicknessMaximum(thicknessMax) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.iridescenceThicknessRange[1] = thicknessMax;
            }
            this[$onUpdate$1]();
        }
        get anisotropyStrength() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].anisotropy;
        }
        get anisotropyRotation() {
            this[$ensureMaterialIsLoaded]();
            return this[$backingThreeMaterial].anisotropyRotation;
        }
        get anisotropyTexture() {
            this[$ensureMaterialIsLoaded]();
            return this[$pbrTextures].get(TextureUsage.Anisotropy);
        }
        setAnisotropyStrength(strength) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.anisotropy = strength;
            }
            this[$onUpdate$1]();
        }
        setAnisotropyRotation(rotation) {
            this[$ensureMaterialIsLoaded]();
            for (const material of this[$correlatedObjects]) {
                material.anisotropyRotation = rotation;
            }
            this[$onUpdate$1]();
        }
    }

    class Node$1 {
        constructor(name) {
            this.name = '';
            this.children = new Array();
            this.name = name;
        }
    }
    class PrimitiveNode extends Node$1 {
        constructor(mesh, mvMaterials, modelVariants, correlatedSceneGraph) {
            super(mesh.name);
            this.materials = new Map();
            this.variantToMaterialMap = new Map();
            this.initialMaterialIdx = 0;
            this.activeMaterialIdx = 0;
            this.mesh = mesh;
            const { gltf, threeGLTF, threeObjectMap } = correlatedSceneGraph;
            this.parser = threeGLTF.parser;
            this.modelVariants = modelVariants;
            this.mesh.userData.variantData = modelVariants;
            const materialMappings = threeObjectMap.get(mesh.material);
            if (materialMappings.materials != null) {
                this.initialMaterialIdx = this.activeMaterialIdx =
                    materialMappings.materials;
            }
            else {
                console.error(`Primitive (${mesh.name}) missing initial material reference.`);
            }
            const associations = mesh.userData.associations ||
                {};
            if (associations.meshes == null) {
                console.error('Mesh is missing primitive index association');
                return;
            }
            const meshElementArray = gltf['meshes'] || [];
            const gltfPrimitives = (meshElementArray[associations.meshes].primitives || []);
            const gltfPrimitive = gltfPrimitives[associations.primitives];
            if (gltfPrimitive == null) {
                console.error('Mesh primitive definition is missing.');
                return;
            }
            if (gltfPrimitive.material != null) {
                this.materials.set(gltfPrimitive.material, mvMaterials[gltfPrimitive.material]);
            }
            else {
                const defaultIdx = mvMaterials.findIndex((mat) => {
                    return mat.name === 'Default';
                });
                if (defaultIdx >= 0) {
                    this.materials.set(defaultIdx, mvMaterials[defaultIdx]);
                }
                else {
                    console.warn('gltfPrimitive has no material!');
                }
            }
            if (gltfPrimitive.extensions &&
                gltfPrimitive.extensions['KHR_materials_variants']) {
                const variantsExtension = gltfPrimitive.extensions['KHR_materials_variants'];
                const extensions = threeGLTF.parser.json.extensions;
                const variantNames = extensions['KHR_materials_variants'].variants;
                for (const mapping of variantsExtension.mappings) {
                    const mvMaterial = mvMaterials[mapping.material];
                    this.materials.set(mapping.material, mvMaterial);
                    for (const variant of mapping.variants) {
                        const { name } = variantNames[variant];
                        this.variantToMaterialMap.set(variant, mvMaterial);
                        mvMaterial[$variantIndices]().add(variant);
                        if (!modelVariants.has(name)) {
                            modelVariants.set(name, { name, index: variant });
                        }
                    }
                }
            }
        }
        async setActiveMaterial(material) {
            const mvMaterial = this.materials.get(material);
            if (mvMaterial != null && material !== this.activeMaterialIdx) {
                this.mesh.material = await mvMaterial[$getLoadedMaterial]();
                const { normalScale } = this.mesh.material;
                if (normalScale != null &&
                    (normalScale.y * normalScale.x < 0) !=
                        (this.mesh.geometry.attributes.tangent == null)) {
                    this.parser.assignFinalMaterial(this.mesh);
                }
                this.activeMaterialIdx = material;
            }
            return this.mesh.material;
        }
        getActiveMaterial() {
            return this.materials.get(this.activeMaterialIdx);
        }
        getMaterial(index) {
            return this.materials.get(index);
        }
        async enableVariant(name) {
            if (name == null) {
                return this.setActiveMaterial(this.initialMaterialIdx);
            }
            if (this.variantToMaterialMap != null && this.modelVariants.has(name)) {
                const modelVariants = this.modelVariants.get(name);
                return this.enableVariantHelper(modelVariants.index);
            }
            return null;
        }
        async enableVariantHelper(index) {
            if (this.variantToMaterialMap != null && index != null) {
                const material = this.variantToMaterialMap.get(index);
                if (material != null) {
                    return this.setActiveMaterial(material.index);
                }
            }
            return null;
        }
        async instantiateVariants() {
            if (this.variantToMaterialMap == null) {
                return;
            }
            for (const index of this.variantToMaterialMap.keys()) {
                const variantMaterial = this.mesh.userData.variantMaterials.get(index);
                if (variantMaterial.material != null) {
                    continue;
                }
                const threeMaterial = await this.enableVariantHelper(index);
                if (threeMaterial != null) {
                    variantMaterial.material = threeMaterial;
                }
            }
        }
        get variantInfo() {
            return this.variantToMaterialMap;
        }
        addVariant(materialVariant, variantName) {
            if (!this.ensureVariantIsUnused(variantName)) {
                return false;
            }
            if (!this.modelVariants.has(variantName)) {
                this.modelVariants.set(variantName, { name: variantName, index: this.modelVariants.size });
            }
            const modelVariantData = this.modelVariants.get(variantName);
            const variantIndex = modelVariantData.index;
            materialVariant[$variantIndices]().add(variantIndex);
            this.variantToMaterialMap.set(variantIndex, materialVariant);
            this.materials.set(materialVariant.index, materialVariant);
            this.updateVariantUserData(variantIndex, materialVariant);
            return true;
        }
        deleteVariant(variantIndex) {
            if (this.variantInfo.has(variantIndex)) {
                this.variantInfo.delete(variantIndex);
                const userDataMap = this.mesh.userData.variantMaterials;
                if (userDataMap != null) {
                    userDataMap.delete(variantIndex);
                }
            }
        }
        updateVariantUserData(variantIndex, materialVariant) {
            materialVariant[$variantIndices]().add(variantIndex);
            this.mesh.userData.variantData = this.modelVariants;
            this.mesh.userData.variantMaterials = this.mesh.userData.variantMaterials ||
                new Map();
            const map = this.mesh.userData.variantMaterials;
            map.set(variantIndex, {
                material: materialVariant[$correlatedObjects].values().next().value,
                gltfMaterialIndex: materialVariant.index,
            });
        }
        ensureVariantIsUnused(variantName) {
            const modelVariants = this.modelVariants.get(variantName);
            if (modelVariants != null && this.variantInfo.has(modelVariants.index)) {
                console.warn(`Primitive cannot add variant '${variantName}' for this material, it already exists.`);
                return false;
            }
            return true;
        }
    }

    var _a$2, _b$2, _c$1, _d$1, _e$1, _f$1;
    const $materials = Symbol('materials');
    const $hierarchy = Symbol('hierarchy');
    const $roots = Symbol('roots');
    const $primitivesList = Symbol('primitives');
    const $prepareVariantsForExport = Symbol('prepareVariantsForExport');
    const $switchVariant = Symbol('switchVariant');
    const $materialFromPoint = Symbol('materialFromPoint');
    const $nodeFromPoint = Symbol('nodeFromPoint');
    const $nodeFromIndex = Symbol('nodeFromIndex');
    const $variantData = Symbol('variantData');
    const $availableVariants = Symbol('availableVariants');
    const $modelOnUpdate = Symbol('modelOnUpdate');
    const $cloneMaterial = Symbol('cloneMaterial');
    class LazyLoader {
        constructor(gltf, gltfElementMap, mapKey, doLazyLoad) {
            this.gltf = gltf;
            this.gltfElementMap = gltfElementMap;
            this.mapKey = mapKey;
            this.doLazyLoad = doLazyLoad;
        }
    }
    class Model {
        constructor(correlatedSceneGraph, onUpdate = () => { }) {
            this[_a$2] = new Array();
            this[_b$2] = new Array();
            this[_c$1] = new Array();
            this[_d$1] = new Array();
            this[_e$1] = () => { };
            this[_f$1] = new Map();
            this[$modelOnUpdate] = onUpdate;
            const { gltf, threeGLTF, gltfElementMap } = correlatedSceneGraph;
            for (const [i, material] of gltf.materials.entries()) {
                const correlatedMaterial = gltfElementMap.get(material);
                if (correlatedMaterial != null) {
                    this[$materials].push(new Material(onUpdate, i, true, this[$variantData], correlatedMaterial, material.name));
                }
                else {
                    const elementArray = gltf['materials'] || [];
                    const gltfMaterialDef = elementArray[i];
                    const capturedMatIndex = i;
                    const materialLoadCallback = async () => {
                        const threeMaterial = await threeGLTF.parser.getDependency('material', capturedMatIndex);
                        const threeMaterialSet = new Set();
                        gltfElementMap.set(gltfMaterialDef, threeMaterialSet);
                        threeMaterialSet.add(threeMaterial);
                        return { set: threeMaterialSet, material: threeMaterial };
                    };
                    this[$materials].push(new Material(onUpdate, i, false, this[$variantData], correlatedMaterial, material.name, new LazyLoader(gltf, gltfElementMap, gltfMaterialDef, materialLoadCallback)));
                }
            }
            const parentMap = new Map();
            const nodeStack = new Array();
            for (const object of threeGLTF.scene.children) {
                nodeStack.push(object);
            }
            while (nodeStack.length > 0) {
                const object = nodeStack.pop();
                let node = null;
                if (object instanceof three.Mesh) {
                    node = new PrimitiveNode(object, this.materials, this[$variantData], correlatedSceneGraph);
                    this[$primitivesList].push(node);
                }
                else {
                    node = new Node$1(object.name);
                }
                const parent = parentMap.get(object);
                if (parent != null) {
                    parent.children.push(node);
                }
                else {
                    this[$roots].push(node);
                }
                this[$hierarchy].push(node);
                for (const child of object.children) {
                    nodeStack.push(child);
                    parentMap.set(object, node);
                }
            }
        }
        get materials() {
            return this[$materials];
        }
        [(_a$2 = $materials, _b$2 = $hierarchy, _c$1 = $roots, _d$1 = $primitivesList, _e$1 = $modelOnUpdate, _f$1 = $variantData, $availableVariants)]() {
            const variants = Array.from(this[$variantData].values());
            variants.sort((a, b) => {
                return a.index - b.index;
            });
            return variants.map((data) => {
                return data.name;
            });
        }
        getMaterialByName(name) {
            const matches = this[$materials].filter(material => {
                return material.name === name;
            });
            if (matches.length > 0) {
                return matches[0];
            }
            return null;
        }
        [$nodeFromIndex](mesh, primitive) {
            const found = this[$hierarchy].find((node) => {
                if (node instanceof PrimitiveNode) {
                    const { meshes, primitives } = node.mesh.userData.associations;
                    if (meshes == mesh && primitives == primitive) {
                        return true;
                    }
                }
                return false;
            });
            return found == null ? null : found;
        }
        [$nodeFromPoint](hit) {
            return this[$hierarchy].find((node) => {
                if (node instanceof PrimitiveNode) {
                    const primitive = node;
                    if (primitive.mesh === hit.object) {
                        return true;
                    }
                }
                return false;
            });
        }
        [$materialFromPoint](hit) {
            return this[$nodeFromPoint](hit).getActiveMaterial();
        }
        async [$switchVariant](variantName) {
            for (const primitive of this[$primitivesList]) {
                await primitive.enableVariant(variantName);
            }
            for (const material of this.materials) {
                material[$setActive](false);
            }
            for (const primitive of this[$primitivesList]) {
                this.materials[primitive.getActiveMaterial().index][$setActive](true);
            }
        }
        async [$prepareVariantsForExport]() {
            const promises = new Array();
            for (const primitive of this[$primitivesList]) {
                promises.push(primitive.instantiateVariants());
            }
            await Promise.all(promises);
        }
        [$cloneMaterial](index, newMaterialName) {
            const material = this.materials[index];
            if (!material.isLoaded) {
                console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);
            }
            const threeMaterialSet = material[$correlatedObjects];
            const clonedSet = new Set();
            for (const [i, threeMaterial] of threeMaterialSet.entries()) {
                const clone = threeMaterial.clone();
                clone.name =
                    newMaterialName + (threeMaterialSet.size > 1 ? '_inst' + i : '');
                clonedSet.add(clone);
            }
            const clonedMaterial = new Material(this[$modelOnUpdate], this[$materials].length, false,
            this[$variantData], clonedSet, newMaterialName);
            this[$materials].push(clonedMaterial);
            return clonedMaterial;
        }
        createMaterialInstanceForVariant(originalMaterialIndex, newMaterialName, variantName, activateVariant = true) {
            let variantMaterialInstance = null;
            for (const primitive of this[$primitivesList]) {
                const variantData = this[$variantData].get(variantName);
                if (variantData != null && primitive.variantInfo.has(variantData.index)) {
                    continue;
                }
                if (primitive.getMaterial(originalMaterialIndex) == null) {
                    continue;
                }
                if (!this.hasVariant(variantName)) {
                    this.createVariant(variantName);
                }
                if (variantMaterialInstance == null) {
                    variantMaterialInstance =
                        this[$cloneMaterial](originalMaterialIndex, newMaterialName);
                }
                primitive.addVariant(variantMaterialInstance, variantName);
            }
            if (activateVariant && variantMaterialInstance != null) {
                variantMaterialInstance[$setActive](true);
                this.materials[originalMaterialIndex][$setActive](false);
                for (const primitive of this[$primitivesList]) {
                    primitive.enableVariant(variantName);
                }
            }
            return variantMaterialInstance;
        }
        createVariant(variantName) {
            if (!this[$variantData].has(variantName)) {
                this[$variantData].set(variantName, { name: variantName, index: this[$variantData].size });
            }
            else {
                console.warn(`Variant '${variantName}'' already exists`);
            }
        }
        hasVariant(variantName) {
            return this[$variantData].has(variantName);
        }
        setMaterialToVariant(materialIndex, targetVariantName) {
            if (this[$availableVariants]().find(name => name === targetVariantName) ==
                null) {
                console.warn(`Can't add material to '${targetVariantName}', the variant does not exist.'`);
                return;
            }
            if (materialIndex < 0 || materialIndex >= this.materials.length) {
                console.error(`setMaterialToVariant(): materialIndex is out of bounds.`);
                return;
            }
            for (const primitive of this[$primitivesList]) {
                const material = primitive.getMaterial(materialIndex);
                if (material != null) {
                    primitive.addVariant(material, targetVariantName);
                }
            }
        }
        updateVariantName(currentName, newName) {
            const variantData = this[$variantData].get(currentName);
            if (variantData == null) {
                return;
            }
            variantData.name = newName;
            this[$variantData].set(newName, variantData);
            this[$variantData].delete(currentName);
        }
        deleteVariant(variantName) {
            const variant = this[$variantData].get(variantName);
            if (variant == null) {
                return;
            }
            for (const material of this.materials) {
                if (material.hasVariant(variantName)) {
                    material[$variantSet].delete(variant.index);
                }
            }
            for (const primitive of this[$primitivesList]) {
                primitive.deleteVariant(variant.index);
            }
            this[$variantData].delete(variantName);
        }
    }

    var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const $currentGLTF = Symbol('currentGLTF');
    const $originalGltfJson = Symbol('originalGltfJson');
    const $model = Symbol('model');
    const $getOnUpdateMethod = Symbol('getOnUpdateMethod');
    const $buildTexture = Symbol('buildTexture');
    const SceneGraphMixin = (ModelViewerElement) => {
        var _a, _b, _c;
        class SceneGraphModelViewerElement extends ModelViewerElement {
            constructor() {
                super(...arguments);
                this[_a] = undefined;
                this[_b] = null;
                this[_c] = null;
                this.variantName = null;
                this.orientation = '0 0 0';
                this.scale = '1 1 1';
            }
            get model() {
                return this[$model];
            }
            get availableVariants() {
                return this.model ? this.model[$availableVariants]() : [];
            }
            get originalGltfJson() {
                return this[$originalGltfJson];
            }
            [(_a = $model, _b = $currentGLTF, _c = $originalGltfJson, $getOnUpdateMethod)]() {
                return () => {
                    this[$needsRender]();
                };
            }
            [$buildTexture](texture) {
                texture.colorSpace = three.SRGBColorSpace;
                texture.wrapS = three.RepeatWrapping;
                texture.wrapT = three.RepeatWrapping;
                return new Texture(this[$getOnUpdateMethod](), texture);
            }
            async createTexture(uri, type = 'image/png') {
                const { textureUtils } = this[$renderer];
                const texture = await textureUtils.loadImage(uri);
                texture.userData.mimeType = type;
                return this[$buildTexture](texture);
            }
            async createLottieTexture(uri, quality = 1) {
                const { textureUtils } = this[$renderer];
                const texture = await textureUtils.loadLottie(uri, quality);
                return this[$buildTexture](texture);
            }
            createVideoTexture(uri) {
                const video = document.createElement('video');
                video.crossOrigin = this.withCredentials ? 'use-credentials' : 'anonymous';
                video.src = uri;
                video.muted = true;
                video.playsInline = true;
                video.loop = true;
                video.play();
                const texture = new three.VideoTexture(video);
                return this[$buildTexture](texture);
            }
            createCanvasTexture() {
                const canvas = document.createElement('canvas');
                const texture = new three.CanvasTexture(canvas);
                return this[$buildTexture](texture);
            }
            async updated(changedProperties) {
                super.updated(changedProperties);
                if (changedProperties.has('variantName')) {
                    const updateVariantProgress = this[$progressTracker].beginActivity('variant-update');
                    updateVariantProgress(0.1);
                    const model = this[$model];
                    const { variantName } = this;
                    if (model != null) {
                        await model[$switchVariant](variantName);
                        this[$needsRender]();
                        this.dispatchEvent(new CustomEvent('variant-applied'));
                    }
                    updateVariantProgress(1.0);
                }
                if (changedProperties.has('orientation') ||
                    changedProperties.has('scale')) {
                    if (!this.loaded) {
                        return;
                    }
                    const scene = this[$scene];
                    scene.applyTransform();
                    scene.updateBoundingBox();
                    scene.updateShadow();
                    this[$renderer].arRenderer.onUpdateScene();
                    this[$needsRender]();
                }
            }
            [$onModelLoad]() {
                super[$onModelLoad]();
                const { currentGLTF } = this[$scene];
                if (currentGLTF != null) {
                    const { correlatedSceneGraph } = currentGLTF;
                    if (correlatedSceneGraph != null &&
                        currentGLTF !== this[$currentGLTF]) {
                        this[$model] =
                            new Model(correlatedSceneGraph, this[$getOnUpdateMethod]());
                        this[$originalGltfJson] =
                            JSON.parse(JSON.stringify(correlatedSceneGraph.gltf));
                    }
                    if ('variants' in currentGLTF.userData) {
                        this.requestUpdate('variantName');
                    }
                }
                this[$currentGLTF] = currentGLTF;
            }
            async exportScene(options) {
                const scene = this[$scene];
                return new Promise(async (resolve, reject) => {
                    const opts = {
                        binary: true,
                        onlyVisible: true,
                        maxTextureSize: Infinity,
                        includeCustomExtensions: false,
                        forceIndices: false
                    };
                    Object.assign(opts, options);
                    opts.animations = scene.animations;
                    opts.truncateDrawRange = true;
                    const shadow = scene.shadow;
                    let visible = false;
                    if (shadow != null) {
                        visible = shadow.visible;
                        shadow.visible = false;
                    }
                    await this[$model][$prepareVariantsForExport]();
                    const exporter = new GLTFExporter()
                        .register((writer) => new GLTFExporterMaterialsVariantsExtension(writer));
                    exporter.parse(scene.model, (gltf) => {
                        return resolve(new Blob([opts.binary ? gltf : JSON.stringify(gltf)], {
                            type: opts.binary ? 'application/octet-stream' :
                                'application/json'
                        }));
                    }, () => {
                        return reject('glTF export failed');
                    }, opts);
                    if (shadow != null) {
                        shadow.visible = visible;
                    }
                });
            }
            materialFromPoint(pixelX, pixelY) {
                const model = this[$model];
                if (model == null) {
                    return null;
                }
                const scene = this[$scene];
                const ndcCoords = scene.getNDC(pixelX, pixelY);
                const hit = scene.hitFromPoint(ndcCoords);
                if (hit == null || hit.face == null) {
                    return null;
                }
                return model[$materialFromPoint](hit);
            }
        }
        __decorate$5([
            n$8({ type: String, attribute: 'variant-name' })
        ], SceneGraphModelViewerElement.prototype, "variantName", void 0);
        __decorate$5([
            n$8({ type: String, attribute: 'orientation' })
        ], SceneGraphModelViewerElement.prototype, "orientation", void 0);
        __decorate$5([
            n$8({ type: String, attribute: 'scale' })
        ], SceneGraphModelViewerElement.prototype, "scale", void 0);
        return SceneGraphModelViewerElement;
    };

    class GroundedSkybox extends three.Mesh {
        constructor() {
            super(undefined, new three.MeshBasicMaterial({ depthWrite: false }));
            this.height = 0;
            this.radius = 0;
            this.resolution = 0;
            this.userData.noHit = true;
        }
        get map() {
            return this.material.map;
        }
        set map(skybox) {
            this.material.map = skybox;
        }
        isUsable() {
            return this.height > 0 && this.radius > 0 && this.geometry != null &&
                this.map != null;
        }
        updateGeometry(height = this.height, radius = this.radius, resolution = 128) {
            if (height != this.height || radius != this.radius ||
                resolution != this.resolution) {
                this.height = height;
                this.radius = radius;
                this.resolution = resolution;
                if (height > 0 && radius > 0) {
                    this.geometry.dispose();
                    this.geometry = makeGeometry(height, radius, resolution);
                }
            }
        }
    }
    function makeGeometry(height, radius, resolution) {
        const geometry = new three.SphereGeometry(radius, 2 * resolution, resolution);
        geometry.scale(1, 1, -1);
        const pos = geometry.getAttribute('position');
        const tmp = new three.Vector3();
        for (let i = 0; i < pos.count; ++i) {
            tmp.fromBufferAttribute(pos, i);
            if (tmp.y < 0) {
                const y1 = -height * 3 / 2;
                const f = tmp.y < y1 ? -height / tmp.y : (1 - tmp.y * tmp.y / (3 * y1 * y1));
                tmp.multiplyScalar(f);
                tmp.toArray(pos.array, 3 * i);
            }
        }
        pos.needsUpdate = true;
        return geometry;
    }

    const a = new three.Vector3();
    const b = new three.Vector3();
    const c = new three.Vector3();
    const mat = new three.Matrix3();
    const triangle = new three.Triangle();
    const quat = new three.Quaternion();
    class Hotspot extends CSS2DObject {
        constructor(config) {
            super(document.createElement('div'));
            this.normal = new three.Vector3(0, 1, 0);
            this.initialized = false;
            this.referenceCount = 1;
            this.pivot = document.createElement('div');
            this.slot = document.createElement('slot');
            this.element.classList.add('annotation-wrapper');
            this.slot.name = config.name;
            this.element.appendChild(this.pivot);
            this.pivot.appendChild(this.slot);
            this.updatePosition(config.position);
            this.updateNormal(config.normal);
            this.surface = config.surface;
        }
        get facingCamera() {
            return !this.element.classList.contains('hide');
        }
        show() {
            if (!this.facingCamera || !this.initialized) {
                this.updateVisibility(true);
            }
        }
        hide() {
            if (this.facingCamera || !this.initialized) {
                this.updateVisibility(false);
            }
        }
        increment() {
            this.referenceCount++;
        }
        decrement() {
            if (this.referenceCount > 0) {
                --this.referenceCount;
            }
            return this.referenceCount === 0;
        }
        updatePosition(position) {
            if (position == null)
                return;
            const positionNodes = parseExpressions(position)[0].terms;
            for (let i = 0; i < 3; ++i) {
                this.position.setComponent(i, normalizeUnit(positionNodes[i]).number);
            }
            this.updateMatrixWorld();
        }
        updateNormal(normal) {
            if (normal == null)
                return;
            const normalNodes = parseExpressions(normal)[0].terms;
            for (let i = 0; i < 3; ++i) {
                this.normal.setComponent(i, normalNodes[i].number);
            }
        }
        updateSurface(forceUpdate) {
            if (!forceUpdate && this.initialized) {
                return;
            }
            const { mesh, tri, bary } = this;
            if (mesh == null || tri == null || bary == null) {
                return;
            }
            mesh.getVertexPosition(tri.x, a);
            mesh.getVertexPosition(tri.y, b);
            mesh.getVertexPosition(tri.z, c);
            a.toArray(mat.elements, 0);
            b.toArray(mat.elements, 3);
            c.toArray(mat.elements, 6);
            this.position.copy(bary).applyMatrix3(mat);
            const target = this.parent;
            target.worldToLocal(mesh.localToWorld(this.position));
            triangle.set(a, b, c);
            triangle.getNormal(this.normal).transformDirection(mesh.matrixWorld);
            const scene = target.parent;
            quat.setFromAxisAngle(a.set(0, 1, 0), -scene.yaw);
            this.normal.applyQuaternion(quat);
        }
        orient(radians) {
            this.pivot.style.transform = `rotate(${radians}rad)`;
        }
        updateVisibility(show) {
            this.element.classList.toggle('hide', !show);
            this.slot.assignedNodes().forEach((node) => {
                if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                }
                const element = node;
                const visibilityAttribute = element.dataset.visibilityAttribute;
                if (visibilityAttribute != null) {
                    const attributeName = `data-${visibilityAttribute}`;
                    element.toggleAttribute(attributeName, show);
                }
                element.dispatchEvent(new CustomEvent('hotspot-visibility', {
                    detail: {
                        visible: show,
                    },
                }));
            });
            this.initialized = true;
        }
    }

    /**
     * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
     * - see http://www.cake23.de/traveling-wavefronts-lit-up.html
     *
     * - 9 samples per pass
     * - standard deviation 2.7
     * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
     */

    const HorizontalBlurShader = {

    	name: 'HorizontalBlurShader',

    	uniforms: {

    		'tDiffuse': { value: null },
    		'h': { value: 1.0 / 512.0 }

    	},

    	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

    	fragmentShader: /* glsl */`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`

    };

    /**
     * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
     * - see http://www.cake23.de/traveling-wavefronts-lit-up.html
     *
     * - 9 samples per pass
     * - standard deviation 2.7
     * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
     */

    const VerticalBlurShader = {

    	name: 'VerticalBlurShader',

    	uniforms: {

    		'tDiffuse': { value: null },
    		'v': { value: 1.0 / 512.0 }

    	},

    	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

    	fragmentShader: /* glsl */`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`

    };

    // https://en.wikipedia.org/wiki/Linear_interpolation
    function lerp( x, y, t ) {

    	return ( 1 - t ) * x + t * y;

    }

    const LOG_MAX_RESOLUTION = 9;
    const LOG_MIN_RESOLUTION = 6;
    const ANIMATION_SCALING = 2;
    const DEFAULT_HARD_INTENSITY = 0.3;
    class Shadow extends three.Object3D {
        constructor(scene, softness, side) {
            super();
            this.camera = new three.OrthographicCamera();
            this.renderTarget = null;
            this.renderTargetBlur = null;
            this.depthMaterial = new three.MeshDepthMaterial();
            this.horizontalBlurMaterial = new three.ShaderMaterial(HorizontalBlurShader);
            this.verticalBlurMaterial = new three.ShaderMaterial(VerticalBlurShader);
            this.intensity = 0;
            this.softness = 1;
            this.boundingBox = new three.Box3;
            this.size = new three.Vector3;
            this.maxDimension = 0;
            this.isAnimated = false;
            this.needsUpdate = false;
            const { camera } = this;
            camera.rotation.x = Math.PI / 2;
            camera.left = -0.5;
            camera.right = 0.5;
            camera.bottom = -0.5;
            camera.top = 0.5;
            this.add(camera);
            const plane = new three.PlaneGeometry();
            const shadowMaterial = new three.MeshBasicMaterial({
                opacity: 1,
                transparent: true,
                side: three.BackSide,
            });
            this.floor = new three.Mesh(plane, shadowMaterial);
            this.floor.userData.noHit = true;
            camera.add(this.floor);
            this.blurPlane = new three.Mesh(plane);
            this.blurPlane.visible = false;
            camera.add(this.blurPlane);
            scene.target.add(this);
            this.depthMaterial.onBeforeCompile = function (shader) {
                shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );', 'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );');
            };
            this.horizontalBlurMaterial.depthTest = false;
            this.verticalBlurMaterial.depthTest = false;
            this.setScene(scene, softness, side);
        }
        setScene(scene, softness, side) {
            const { boundingBox, size, rotation, position } = this;
            this.isAnimated = scene.animationNames.length > 0;
            this.boundingBox.copy(scene.boundingBox);
            this.size.copy(scene.size);
            this.maxDimension = Math.max(size.x, size.y, size.z) *
                (this.isAnimated ? ANIMATION_SCALING : 1);
            this.boundingBox.getCenter(position);
            if (side === 'back') {
                const { min, max } = boundingBox;
                [min.y, min.z] = [min.z, min.y];
                [max.y, max.z] = [max.z, max.y];
                [size.y, size.z] = [size.z, size.y];
                rotation.x = Math.PI / 2;
                rotation.y = Math.PI;
            }
            else {
                rotation.x = 0;
                rotation.y = 0;
            }
            if (this.isAnimated) {
                const minY = boundingBox.min.y;
                const maxY = boundingBox.max.y;
                size.y = this.maxDimension;
                boundingBox.expandByVector(size.subScalar(this.maxDimension).multiplyScalar(-0.5));
                boundingBox.min.y = minY;
                boundingBox.max.y = maxY;
                size.set(this.maxDimension, maxY - minY, this.maxDimension);
            }
            if (side === 'bottom') {
                position.y = boundingBox.min.y;
            }
            else {
                position.z = boundingBox.min.y;
            }
            this.setSoftness(softness);
        }
        setSoftness(softness) {
            this.softness = softness;
            const { size, camera } = this;
            const scaleY = (this.isAnimated ? ANIMATION_SCALING : 1);
            const resolution = scaleY *
                Math.pow(2, LOG_MAX_RESOLUTION -
                    softness * (LOG_MAX_RESOLUTION - LOG_MIN_RESOLUTION));
            this.setMapSize(resolution);
            const softFar = size.y / 2;
            const hardFar = size.y * scaleY;
            camera.near = 0;
            camera.far = lerp(hardFar, softFar, softness);
            this.depthMaterial.opacity = 1.0 / softness;
            camera.updateProjectionMatrix();
            this.setIntensity(this.intensity);
            this.setOffset(0);
        }
        setMapSize(maxMapSize) {
            const { size } = this;
            if (this.isAnimated) {
                maxMapSize *= ANIMATION_SCALING;
            }
            const baseWidth = Math.floor(size.x > size.z ? maxMapSize : maxMapSize * size.x / size.z);
            const baseHeight = Math.floor(size.x > size.z ? maxMapSize * size.z / size.x : maxMapSize);
            const TAP_WIDTH = 10;
            const width = TAP_WIDTH + baseWidth;
            const height = TAP_WIDTH + baseHeight;
            if (this.renderTarget != null &&
                (this.renderTarget.width !== width ||
                    this.renderTarget.height !== height)) {
                this.renderTarget.dispose();
                this.renderTarget = null;
                this.renderTargetBlur.dispose();
                this.renderTargetBlur = null;
            }
            if (this.renderTarget == null) {
                const params = { format: three.RGBAFormat };
                this.renderTarget = new three.WebGLRenderTarget(width, height, params);
                this.renderTargetBlur = new three.WebGLRenderTarget(width, height, params);
                this.floor.material.map =
                    this.renderTarget.texture;
            }
            this.camera.scale.set(size.x * (1 + TAP_WIDTH / baseWidth), size.z * (1 + TAP_WIDTH / baseHeight), 1);
            this.needsUpdate = true;
        }
        setIntensity(intensity) {
            this.intensity = intensity;
            if (intensity > 0) {
                this.visible = true;
                this.floor.visible = true;
                this.floor.material.opacity = intensity *
                    lerp(DEFAULT_HARD_INTENSITY, 1, this.softness * this.softness);
            }
            else {
                this.visible = false;
                this.floor.visible = false;
            }
        }
        getIntensity() {
            return this.intensity;
        }
        setOffset(offset) {
            this.floor.position.z = -offset + this.gap();
        }
        gap() {
            return 0.001 * this.maxDimension;
        }
        render(renderer, scene) {
            scene.overrideMaterial = this.depthMaterial;
            const initialClearAlpha = renderer.getClearAlpha();
            renderer.setClearAlpha(0);
            this.floor.visible = false;
            const xrEnabled = renderer.xr.enabled;
            renderer.xr.enabled = false;
            const oldRenderTarget = renderer.getRenderTarget();
            renderer.setRenderTarget(this.renderTarget);
            renderer.render(scene, this.camera);
            scene.overrideMaterial = null;
            this.floor.visible = true;
            this.blurShadow(renderer);
            renderer.xr.enabled = xrEnabled;
            renderer.setRenderTarget(oldRenderTarget);
            renderer.setClearAlpha(initialClearAlpha);
        }
        blurShadow(renderer) {
            const { camera, horizontalBlurMaterial, verticalBlurMaterial, renderTarget, renderTargetBlur, blurPlane } = this;
            blurPlane.visible = true;
            blurPlane.material = horizontalBlurMaterial;
            horizontalBlurMaterial.uniforms.h.value = 1 / this.renderTarget.width;
            horizontalBlurMaterial.uniforms.tDiffuse.value = this.renderTarget.texture;
            renderer.setRenderTarget(renderTargetBlur);
            renderer.render(blurPlane, camera);
            blurPlane.material = verticalBlurMaterial;
            verticalBlurMaterial.uniforms.v.value = 1 / this.renderTarget.height;
            verticalBlurMaterial.uniforms.tDiffuse.value =
                this.renderTargetBlur.texture;
            renderer.setRenderTarget(renderTarget);
            renderer.render(blurPlane, camera);
            blurPlane.visible = false;
        }
        dispose() {
            if (this.renderTarget != null) {
                this.renderTarget.dispose();
            }
            if (this.renderTargetBlur != null) {
                this.renderTargetBlur.dispose();
            }
            this.depthMaterial.dispose();
            this.horizontalBlurMaterial.dispose();
            this.verticalBlurMaterial.dispose();
            this.floor.material.dispose();
            this.floor.geometry.dispose();
            this.blurPlane.geometry.dispose();
            this.removeFromParent();
        }
    }

    const GROUNDED_SKYBOX_SIZE = 10;
    const MIN_SHADOW_RATIO = 100;
    const view = new three.Vector3();
    const target = new three.Vector3();
    const normalWorld = new three.Vector3();
    const raycaster = new three.Raycaster();
    const vector3 = new three.Vector3();
    const ndc = new three.Vector2();
    class ModelScene extends three.Scene {
        constructor({ canvas, element, width, height }) {
            super();
            this.annotationRenderer = new CSS2DRenderer();
            this.effectRenderer = null;
            this.schemaElement = document.createElement('script');
            this.width = 1;
            this.height = 1;
            this.aspect = 1;
            this.scaleStep = 0;
            this.renderCount = 0;
            this.externalRenderer = null;
            this.camera = new three.PerspectiveCamera(45, 1, 0.1, 100);
            this.xrCamera = null;
            this.url = null;
            this.target = new three.Object3D();
            this.animationNames = [];
            this.boundingBox = new three.Box3();
            this.boundingSphere = new three.Sphere();
            this.size = new three.Vector3();
            this.idealAspect = 0;
            this.framedFoVDeg = 0;
            this.shadow = null;
            this.shadowIntensity = 0;
            this.shadowSoftness = 1;
            this.bakedShadows = new Set();
            this.exposure = 1;
            this.toneMapping = three.ACESFilmicToneMapping;
            this.canScale = true;
            this.isDirty = false;
            this.goalTarget = new three.Vector3();
            this.targetDamperX = new Damper();
            this.targetDamperY = new Damper();
            this.targetDamperZ = new Damper();
            this._currentGLTF = null;
            this._model = null;
            this.cancelPendingSourceChange = null;
            this.animationsByName = new Map();
            this.currentAnimationAction = null;
            this.groundedSkybox = new GroundedSkybox();
            this.name = 'ModelScene';
            this.element = element;
            this.canvas = canvas;
            this.camera = new three.PerspectiveCamera(45, 1, 0.1, 100);
            this.camera.name = 'MainCamera';
            this.add(this.target);
            this.setSize(width, height);
            this.target.name = 'Target';
            this.mixer = new three.AnimationMixer(this.target);
            const { domElement } = this.annotationRenderer;
            const { style } = domElement;
            style.display = 'none';
            style.pointerEvents = 'none';
            style.position = 'absolute';
            style.top = '0';
            this.element.shadowRoot.querySelector('.default').appendChild(domElement);
            this.schemaElement.setAttribute('type', 'application/ld+json');
        }
        get context() {
            return this.canvas.getContext('2d');
        }
        getCamera() {
            return this.xrCamera != null ? this.xrCamera : this.camera;
        }
        queueRender() {
            this.isDirty = true;
        }
        shouldRender() {
            return this.isDirty;
        }
        hasRendered() {
            this.isDirty = false;
        }
        forceRescale() {
            this.scaleStep = -1;
            this.queueRender();
        }
        async setObject(model) {
            this.reset();
            this._model = model;
            this.target.add(model);
            await this.setupScene();
        }
        async setSource(url, progressCallback = () => { }) {
            if (!url || url === this.url) {
                progressCallback(1);
                return;
            }
            this.reset();
            this.url = url;
            if (this.externalRenderer != null) {
                const framingInfo = await this.externalRenderer.load(progressCallback);
                this.boundingSphere.radius = framingInfo.framedRadius;
                this.idealAspect = framingInfo.fieldOfViewAspect;
                return;
            }
            if (this.cancelPendingSourceChange != null) {
                this.cancelPendingSourceChange();
                this.cancelPendingSourceChange = null;
            }
            let gltf;
            try {
                gltf = await new Promise(async (resolve, reject) => {
                    this.cancelPendingSourceChange = () => reject();
                    try {
                        const result = await this.element[$renderer].loader.load(url, this.element, progressCallback);
                        resolve(result);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            catch (error) {
                if (error == null) {
                    return;
                }
                throw error;
            }
            this.cancelPendingSourceChange = null;
            this.reset();
            this.url = url;
            this._currentGLTF = gltf;
            if (gltf != null) {
                this._model = gltf.scene;
                this.target.add(gltf.scene);
            }
            const { animations } = gltf;
            const animationsByName = new Map();
            const animationNames = [];
            for (const animation of animations) {
                animationsByName.set(animation.name, animation);
                animationNames.push(animation.name);
            }
            this.animations = animations;
            this.animationsByName = animationsByName;
            this.animationNames = animationNames;
            await this.setupScene();
        }
        async setupScene() {
            this.applyTransform();
            this.updateBoundingBox();
            await this.updateFraming();
            this.updateShadow();
            this.setShadowIntensity(this.shadowIntensity);
            this.setGroundedSkybox();
        }
        reset() {
            this.url = null;
            this.renderCount = 0;
            this.queueRender();
            if (this.shadow != null) {
                this.shadow.setIntensity(0);
            }
            this.bakedShadows.clear();
            const { _model } = this;
            if (_model != null) {
                _model.removeFromParent();
                this._model = null;
            }
            const gltf = this._currentGLTF;
            if (gltf != null) {
                gltf.dispose();
                this._currentGLTF = null;
            }
            if (this.currentAnimationAction != null) {
                this.currentAnimationAction.stop();
                this.currentAnimationAction = null;
            }
            this.mixer.stopAllAction();
            this.mixer.uncacheRoot(this);
        }
        dispose() {
            this.reset();
            if (this.shadow != null) {
                this.shadow.dispose();
                this.shadow = null;
            }
            this.element[$currentGLTF] = null;
            this.element[$originalGltfJson] = null;
            this.element[$model] = null;
        }
        get currentGLTF() {
            return this._currentGLTF;
        }
        setSize(width, height) {
            if (this.width === width && this.height === height) {
                return;
            }
            this.width = Math.max(width, 1);
            this.height = Math.max(height, 1);
            this.annotationRenderer.setSize(width, height);
            this.aspect = this.width / this.height;
            if (this.externalRenderer != null) {
                const dpr = resolveDpr();
                this.externalRenderer.resize(width * dpr, height * dpr);
            }
            this.queueRender();
        }
        markBakedShadow(mesh) {
            mesh.userData.noHit = true;
            this.bakedShadows.add(mesh);
        }
        unmarkBakedShadow(mesh) {
            mesh.userData.noHit = false;
            mesh.visible = true;
            this.bakedShadows.delete(mesh);
            this.boundingBox.expandByObject(mesh);
        }
        findBakedShadows(group) {
            const boundingBox = new three.Box3();
            group.traverse((object) => {
                const mesh = object;
                if (!mesh.material) {
                    return;
                }
                const material = mesh.material;
                if (!material.transparent) {
                    return;
                }
                boundingBox.setFromObject(mesh);
                const size = boundingBox.getSize(vector3);
                const minDim = Math.min(size.x, size.y, size.z);
                const maxDim = Math.max(size.x, size.y, size.z);
                if (maxDim < MIN_SHADOW_RATIO * minDim) {
                    return;
                }
                this.markBakedShadow(mesh);
            });
        }
        checkBakedShadows() {
            const { min, max } = this.boundingBox;
            const shadowBox = new three.Box3();
            this.boundingBox.getSize(this.size);
            for (const mesh of this.bakedShadows) {
                shadowBox.setFromObject(mesh);
                if (shadowBox.min.y < min.y + this.size.y / MIN_SHADOW_RATIO &&
                    shadowBox.min.x <= min.x && shadowBox.max.x >= max.x &&
                    shadowBox.min.z <= min.z && shadowBox.max.z >= max.z) {
                    continue;
                }
                if (shadowBox.min.z < min.z + this.size.z / MIN_SHADOW_RATIO &&
                    shadowBox.min.x <= min.x && shadowBox.max.x >= max.x &&
                    shadowBox.min.y <= min.y && shadowBox.max.y >= max.y) {
                    continue;
                }
                this.unmarkBakedShadow(mesh);
            }
        }
        applyTransform() {
            const { model } = this;
            if (model == null) {
                return;
            }
            const orientation = parseExpressions(this.element.orientation)[0]
                .terms;
            const roll = normalizeUnit(orientation[0]).number;
            const pitch = normalizeUnit(orientation[1]).number;
            const yaw = normalizeUnit(orientation[2]).number;
            model.quaternion.setFromEuler(new three.Euler(pitch, yaw, roll, 'YXZ'));
            const scale = parseExpressions(this.element.scale)[0]
                .terms;
            model.scale.set(scale[0].number, scale[1].number, scale[2].number);
        }
        updateBoundingBox() {
            const { model } = this;
            if (model == null) {
                return;
            }
            this.target.remove(model);
            this.findBakedShadows(model);
            const bound = (box, vertex) => {
                return box.expandByPoint(vertex);
            };
            this.setBakedShadowVisibility(false);
            this.boundingBox = reduceVertices(model, bound, new three.Box3());
            if (this.boundingBox.isEmpty()) {
                this.setBakedShadowVisibility(true);
                this.bakedShadows.forEach((mesh) => this.unmarkBakedShadow(mesh));
                this.boundingBox = reduceVertices(model, bound, new three.Box3());
            }
            this.checkBakedShadows();
            this.setBakedShadowVisibility();
            this.boundingBox.getSize(this.size);
            this.target.add(model);
        }
        async updateFraming() {
            const { model } = this;
            if (model == null) {
                return;
            }
            this.target.remove(model);
            this.setBakedShadowVisibility(false);
            const { center } = this.boundingSphere;
            this.element.requestUpdate('cameraTarget');
            await this.element.updateComplete;
            center.copy(this.getTarget());
            const radiusSquared = (value, vertex) => {
                return Math.max(value, center.distanceToSquared(vertex));
            };
            this.boundingSphere.radius =
                Math.sqrt(reduceVertices(model, radiusSquared, 0));
            const horizontalTanFov = (value, vertex) => {
                vertex.sub(center);
                const radiusXZ = Math.sqrt(vertex.x * vertex.x + vertex.z * vertex.z);
                return Math.max(value, radiusXZ / (this.idealCameraDistance() - Math.abs(vertex.y)));
            };
            this.idealAspect = reduceVertices(model, horizontalTanFov, 0) /
                Math.tan((this.framedFoVDeg / 2) * Math.PI / 180);
            this.setBakedShadowVisibility();
            this.target.add(model);
        }
        setBakedShadowVisibility(visible = this.shadowIntensity <= 0) {
            for (const shadow of this.bakedShadows) {
                shadow.visible = visible;
            }
        }
        idealCameraDistance() {
            const halfFovRad = (this.framedFoVDeg / 2) * Math.PI / 180;
            return this.boundingSphere.radius / Math.sin(halfFovRad);
        }
        adjustedFoV(fovDeg) {
            const vertical = Math.tan((fovDeg / 2) * Math.PI / 180) *
                Math.max(1, this.idealAspect / this.aspect);
            return 2 * Math.atan(vertical) * 180 / Math.PI;
        }
        getNDC(clientX, clientY) {
            if (this.xrCamera != null) {
                ndc.set(clientX / window.screen.width, clientY / window.screen.height);
            }
            else {
                const rect = this.element.getBoundingClientRect();
                ndc.set((clientX - rect.x) / this.width, (clientY - rect.y) / this.height);
            }
            ndc.multiplyScalar(2).subScalar(1);
            ndc.y *= -1;
            return ndc;
        }
        getSize() {
            return { width: this.width, height: this.height };
        }
        setEnvironmentAndSkybox(environment, skybox) {
            if (this.element[$renderer].arRenderer.presentedScene === this) {
                return;
            }
            this.environment = environment;
            this.setBackground(skybox);
            this.queueRender();
        }
        setBackground(skybox) {
            this.groundedSkybox.map = skybox;
            if (this.groundedSkybox.isUsable()) {
                this.target.add(this.groundedSkybox);
                this.background = null;
            }
            else {
                this.target.remove(this.groundedSkybox);
                this.background = skybox;
            }
        }
        farRadius() {
            return this.boundingSphere.radius *
                (this.groundedSkybox.parent != null ? GROUNDED_SKYBOX_SIZE : 1);
        }
        setGroundedSkybox() {
            const heightNode = parseExpressions(this.element.skyboxHeight)[0].terms[0];
            const height = normalizeUnit(heightNode).number;
            const radius = GROUNDED_SKYBOX_SIZE * this.boundingSphere.radius;
            this.groundedSkybox.updateGeometry(height, radius);
            this.groundedSkybox.position.y =
                height - (this.shadow ? 2 * this.shadow.gap() : 0);
            this.setBackground(this.groundedSkybox.map);
        }
        setTarget(modelX, modelY, modelZ) {
            this.goalTarget.set(-modelX, -modelY, -modelZ);
        }
        setTargetDamperDecayTime(decayMilliseconds) {
            this.targetDamperX.setDecayTime(decayMilliseconds);
            this.targetDamperY.setDecayTime(decayMilliseconds);
            this.targetDamperZ.setDecayTime(decayMilliseconds);
        }
        getTarget() {
            return this.goalTarget.clone().multiplyScalar(-1);
        }
        jumpToGoal() {
            this.updateTarget(SETTLING_TIME);
        }
        updateTarget(delta) {
            const goal = this.goalTarget;
            const target = this.target.position;
            if (!goal.equals(target)) {
                const normalization = this.boundingSphere.radius / 10;
                let { x, y, z } = target;
                x = this.targetDamperX.update(x, goal.x, delta, normalization);
                y = this.targetDamperY.update(y, goal.y, delta, normalization);
                z = this.targetDamperZ.update(z, goal.z, delta, normalization);
                this.target.position.set(x, y, z);
                this.target.updateMatrixWorld();
                this.queueRender();
                return true;
            }
            else {
                return false;
            }
        }
        pointTowards(worldX, worldZ) {
            const { x, z } = this.position;
            this.yaw = Math.atan2(worldX - x, worldZ - z);
        }
        get model() {
            return this._model;
        }
        set yaw(radiansY) {
            this.rotation.y = radiansY;
            this.queueRender();
        }
        get yaw() {
            return this.rotation.y;
        }
        set animationTime(value) {
            this.mixer.setTime(value);
            this.queueShadowRender();
        }
        get animationTime() {
            if (this.currentAnimationAction != null) {
                const loopCount = Math.max(this.currentAnimationAction._loopCount, 0);
                if (this.currentAnimationAction.loop === three.LoopPingPong &&
                    (loopCount & 1) === 1) {
                    return this.duration - this.currentAnimationAction.time;
                }
                else {
                    return this.currentAnimationAction.time;
                }
            }
            return 0;
        }
        set animationTimeScale(value) {
            this.mixer.timeScale = value;
        }
        get animationTimeScale() {
            return this.mixer.timeScale;
        }
        get duration() {
            if (this.currentAnimationAction != null &&
                this.currentAnimationAction.getClip()) {
                return this.currentAnimationAction.getClip().duration;
            }
            return 0;
        }
        get hasActiveAnimation() {
            return this.currentAnimationAction != null;
        }
        playAnimation(name = null, crossfadeTime = 0, loopMode = three.LoopRepeat, repetitionCount = Infinity) {
            if (this._currentGLTF == null) {
                return;
            }
            const { animations } = this;
            if (animations == null || animations.length === 0) {
                return;
            }
            let animationClip = null;
            if (name != null) {
                animationClip = this.animationsByName.get(name);
                if (animationClip == null) {
                    const parsedAnimationIndex = parseInt(name);
                    if (!isNaN(parsedAnimationIndex) && parsedAnimationIndex >= 0 &&
                        parsedAnimationIndex < animations.length) {
                        animationClip = animations[parsedAnimationIndex];
                    }
                }
            }
            if (animationClip == null) {
                animationClip = animations[0];
            }
            try {
                const { currentAnimationAction: lastAnimationAction } = this;
                const action = this.mixer.clipAction(animationClip, this);
                this.currentAnimationAction = action;
                if (this.element.paused) {
                    this.mixer.stopAllAction();
                }
                else {
                    action.paused = false;
                    if (lastAnimationAction != null && action !== lastAnimationAction) {
                        action.crossFadeFrom(lastAnimationAction, crossfadeTime, false);
                    }
                    else if (this.animationTimeScale > 0 &&
                        this.animationTime == this.duration) {
                        this.animationTime = 0;
                    }
                }
                action.setLoop(loopMode, repetitionCount);
                action.enabled = true;
                action.clampWhenFinished = true;
                action.play();
            }
            catch (error) {
                console.error(error);
            }
        }
        stopAnimation() {
            this.currentAnimationAction = null;
            this.mixer.stopAllAction();
        }
        updateAnimation(step) {
            this.mixer.update(step);
            this.queueShadowRender();
        }
        subscribeMixerEvent(event, callback) {
            this.mixer.addEventListener(event, callback);
        }
        updateShadow() {
            const shadow = this.shadow;
            if (shadow != null) {
                const side = this.element.arPlacement === 'wall' ? 'back' : 'bottom';
                shadow.setScene(this, this.shadowSoftness, side);
                shadow.needsUpdate = true;
            }
        }
        renderShadow(renderer) {
            const shadow = this.shadow;
            if (shadow != null && shadow.needsUpdate == true) {
                shadow.render(renderer, this);
                shadow.needsUpdate = false;
            }
        }
        queueShadowRender() {
            if (this.shadow != null) {
                this.shadow.needsUpdate = true;
            }
        }
        setShadowIntensity(shadowIntensity) {
            this.shadowIntensity = shadowIntensity;
            if (this._currentGLTF == null) {
                return;
            }
            this.setBakedShadowVisibility();
            if (shadowIntensity <= 0 && this.shadow == null) {
                return;
            }
            if (this.shadow == null) {
                const side = this.element.arPlacement === 'wall' ? 'back' : 'bottom';
                this.shadow = new Shadow(this, this.shadowSoftness, side);
            }
            this.shadow.setIntensity(shadowIntensity);
        }
        setShadowSoftness(softness) {
            this.shadowSoftness = softness;
            const shadow = this.shadow;
            if (shadow != null) {
                shadow.setSoftness(softness);
            }
        }
        setShadowOffset(offset) {
            const shadow = this.shadow;
            if (shadow != null) {
                shadow.setOffset(offset);
            }
        }
        hitFromPoint(ndcPosition, object = this) {
            raycaster.setFromCamera(ndcPosition, this.getCamera());
            const hits = raycaster.intersectObject(object, true);
            return hits.find((hit) => hit.object.visible && !hit.object.userData.noHit);
        }
        positionAndNormalFromPoint(ndcPosition, object = this) {
            var _a;
            const hit = this.hitFromPoint(ndcPosition, object);
            if (hit == null) {
                return null;
            }
            const position = hit.point;
            const normal = hit.face != null ?
                hit.face.normal.clone().applyNormalMatrix(new three.Matrix3().getNormalMatrix(hit.object.matrixWorld)) :
                raycaster.ray.direction.clone().multiplyScalar(-1);
            const uv = (_a = hit.uv) !== null && _a !== void 0 ? _a : null;
            return { position, normal, uv };
        }
        surfaceFromPoint(ndcPosition, object = this) {
            const model = this.element.model;
            if (model == null) {
                return null;
            }
            const hit = this.hitFromPoint(ndcPosition, object);
            if (hit == null || hit.face == null) {
                return null;
            }
            const node = model[$nodeFromPoint](hit);
            const { meshes, primitives } = node.mesh.userData.associations;
            const va = new three.Vector3();
            const vb = new three.Vector3();
            const vc = new three.Vector3();
            const { a, b, c } = hit.face;
            const mesh = hit.object;
            mesh.getVertexPosition(a, va);
            mesh.getVertexPosition(b, vb);
            mesh.getVertexPosition(c, vc);
            const tri = new three.Triangle(va, vb, vc);
            const uvw = new three.Vector3();
            tri.getBarycoord(mesh.worldToLocal(hit.point), uvw);
            return `${meshes} ${primitives} ${a} ${b} ${c} ${uvw.x.toFixed(3)} ${uvw.y.toFixed(3)} ${uvw.z.toFixed(3)}`;
        }
        addHotspot(hotspot) {
            this.target.add(hotspot);
            this.annotationRenderer.domElement.appendChild(hotspot.element);
        }
        removeHotspot(hotspot) {
            this.target.remove(hotspot);
        }
        forHotspots(func) {
            const { children } = this.target;
            for (let i = 0, l = children.length; i < l; i++) {
                const hotspot = children[i];
                if (hotspot instanceof Hotspot) {
                    func(hotspot);
                }
            }
        }
        initializeSurface(hotspot) {
            if (hotspot.surface != null && hotspot.mesh == null) {
                const nodes = parseExpressions(hotspot.surface)[0].terms;
                if (nodes.length != 8) {
                    console.warn(hotspot.surface + ' does not have exactly 8 numbers.');
                    return;
                }
                const primitiveNode = this.element.model[$nodeFromIndex](nodes[0].number, nodes[1].number);
                const tri = new three.Vector3(nodes[2].number, nodes[3].number, nodes[4].number);
                if (primitiveNode == null) {
                    console.warn(hotspot.surface +
                        ' does not match a node/primitive in this glTF! Skipping this hotspot.');
                    return;
                }
                const numVert = primitiveNode.mesh.geometry.attributes.position.count;
                if (tri.x >= numVert || tri.y >= numVert || tri.z >= numVert) {
                    console.warn(hotspot.surface +
                        ' vertex indices out of range in this glTF! Skipping this hotspot.');
                    return;
                }
                const bary = new three.Vector3(nodes[5].number, nodes[6].number, nodes[7].number);
                hotspot.mesh = primitiveNode.mesh;
                hotspot.tri = tri;
                hotspot.bary = bary;
            }
        }
        updateSurfaceHotspots() {
            const forceUpdate = !this.element.paused;
            this.forHotspots((hotspot) => {
                this.initializeSurface(hotspot);
                hotspot.updateSurface(forceUpdate);
            });
        }
        updateHotspotsVisibility(viewerPosition) {
            this.forHotspots((hotspot) => {
                view.copy(viewerPosition);
                target.setFromMatrixPosition(hotspot.matrixWorld);
                view.sub(target);
                normalWorld.copy(hotspot.normal)
                    .transformDirection(this.target.matrixWorld);
                if (view.dot(normalWorld) < 0) {
                    hotspot.hide();
                }
                else {
                    hotspot.show();
                }
            });
        }
        orientHotspots(radians) {
            this.forHotspots((hotspot) => {
                hotspot.orient(radians);
            });
        }
        setHotspotsVisibility(visible) {
            this.forHotspots((hotspot) => {
                hotspot.visible = visible;
            });
        }
        updateSchema(src) {
            var _a;
            const { schemaElement, element } = this;
            const { alt, poster, iosSrc } = element;
            if (src != null) {
                const encoding = [{
                        '@type': 'MediaObject',
                        contentUrl: src,
                        encodingFormat: ((_a = src.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'gltf' ?
                            'model/gltf+json' :
                            'model/gltf-binary'
                    }];
                if (iosSrc) {
                    encoding.push({
                        '@type': 'MediaObject',
                        contentUrl: iosSrc,
                        encodingFormat: 'model/vnd.usdz+zip'
                    });
                }
                const structuredData = {
                    '@context': 'http://schema.org/',
                    '@type': '3DModel',
                    image: poster !== null && poster !== void 0 ? poster : undefined,
                    name: alt !== null && alt !== void 0 ? alt : undefined,
                    encoding
                };
                schemaElement.textContent = JSON.stringify(structuredData);
                document.head.appendChild(schemaElement);
            }
            else if (schemaElement.parentElement != null) {
                schemaElement.parentElement.removeChild(schemaElement);
            }
        }
    }

    class ProgressTracker extends EventTarget {
        constructor() {
            super(...arguments);
            this.ongoingActivities = new Set();
            this.totalProgress = 0;
        }
        get ongoingActivityCount() {
            return this.ongoingActivities.size;
        }
        beginActivity(reason) {
            const activity = { progress: 0, completed: false };
            this.ongoingActivities.add(activity);
            if (this.ongoingActivityCount === 1) {
                this.announceTotalProgress(activity, 0, reason);
            }
            return (progress) => {
                let nextProgress;
                nextProgress = Math.max(clamp(progress, 0, 1), activity.progress);
                if (nextProgress !== activity.progress) {
                    this.announceTotalProgress(activity, nextProgress, reason);
                }
                return activity.progress;
            };
        }
        announceTotalProgress(updatedActivity, nextProgress, reason) {
            let progressLeft = 0;
            let completedActivities = 0;
            if (nextProgress == 1.0)
                updatedActivity.completed = true;
            for (const activity of this.ongoingActivities) {
                const { progress } = activity;
                progressLeft += 1.0 - progress;
                if (activity.completed) {
                    completedActivities++;
                }
            }
            const lastProgress = updatedActivity.progress;
            updatedActivity.progress = nextProgress;
            this.totalProgress += (nextProgress - lastProgress) *
                (1.0 - this.totalProgress) / progressLeft;
            const totalProgress = completedActivities === this.ongoingActivityCount ?
                1.0 :
                this.totalProgress;
            this.dispatchEvent(new CustomEvent('progress', { detail: { totalProgress, reason } }));
            if (completedActivities === this.ongoingActivityCount) {
                this.totalProgress = 0.0;
                this.ongoingActivities.clear();
            }
        }
    }

    var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var _a$1, _b$1, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const CLEAR_MODEL_TIMEOUT_MS = 10;
    const FALLBACK_SIZE_UPDATE_THRESHOLD_MS = 50;
    const ANNOUNCE_MODEL_VISIBILITY_DEBOUNCE_THRESHOLD = 0;
    const UNSIZED_MEDIA_WIDTH = 300;
    const UNSIZED_MEDIA_HEIGHT = 150;
    const blobCanvas = document.createElement('canvas');
    const $fallbackResizeHandler = Symbol('fallbackResizeHandler');
    const $defaultAriaLabel = Symbol('defaultAriaLabel');
    const $resizeObserver = Symbol('resizeObserver');
    const $clearModelTimeout = Symbol('clearModelTimeout');
    const $onContextLost = Symbol('onContextLost');
    const $loaded = Symbol('loaded');
    const $status = Symbol('status');
    const $onFocus = Symbol('onFocus');
    const $onBlur = Symbol('onBlur');
    const $updateSize = Symbol('updateSize');
    const $intersectionObserver = Symbol('intersectionObserver');
    const $isElementInViewport = Symbol('isElementInViewport');
    const $announceModelVisibility = Symbol('announceModelVisibility');
    const $ariaLabel = Symbol('ariaLabel');
    const $altDefaulted = Symbol('altDefaulted');
    const $statusElement = Symbol('statusElement');
    const $updateStatus = Symbol('updateStatus');
    const $loadedTime = Symbol('loadedTime');
    const $updateSource = Symbol('updateSource');
    const $markLoaded = Symbol('markLoaded');
    const $container = Symbol('container');
    const $userInputElement = Symbol('input');
    const $canvas = Symbol('canvas');
    const $scene = Symbol('scene');
    const $needsRender = Symbol('needsRender');
    const $tick = Symbol('tick');
    const $onModelLoad = Symbol('onModelLoad');
    const $onResize = Symbol('onResize');
    const $renderer = Symbol('renderer');
    const $progressTracker = Symbol('progressTracker');
    const $getLoaded = Symbol('getLoaded');
    const $getModelIsVisible = Symbol('getModelIsVisible');
    const $shouldAttemptPreload = Symbol('shouldAttemptPreload');
    const toVector3D = (v) => {
        return {
            x: v.x,
            y: v.y,
            z: v.z,
            toString() {
                return `${this.x}m ${this.y}m ${this.z}m`;
            }
        };
    };
    const toVector2D = (v) => {
        return {
            u: v.x,
            v: v.y,
            toString() {
                return `${this.u} ${this.v}`;
            }
        };
    };
    class ModelViewerElementBase extends u {
        constructor() {
            super();
            this.alt = null;
            this.src = null;
            this.withCredentials = false;
            this.generateSchema = false;
            this[_a$1] = false;
            this[_b$1] = false;
            this[_c] = 0;
            this[_d] = '';
            this[_e] = null;
            this[_f] = debounce(() => {
                const boundingRect = this.getBoundingClientRect();
                this[$updateSize](boundingRect);
            }, FALLBACK_SIZE_UPDATE_THRESHOLD_MS);
            this[_g] = debounce((oldVisibility) => {
                const newVisibility = this.modelIsVisible;
                if (newVisibility !== oldVisibility) {
                    this.dispatchEvent(new CustomEvent('model-visibility', { detail: { visible: newVisibility } }));
                }
            }, ANNOUNCE_MODEL_VISIBILITY_DEBOUNCE_THRESHOLD);
            this[_h] = null;
            this[_j] = null;
            this[_k] = new ProgressTracker();
            this[_l] = () => {
                this[$statusElement].textContent = this[$status];
            };
            this[_m] = () => {
                this[$statusElement].textContent = '';
            };
            this[_o] = (event) => {
                this.dispatchEvent(new CustomEvent('error', { detail: { type: 'webglcontextlost', sourceError: event.sourceEvent } }));
            };
            this.attachShadow({ mode: 'open' });
            const shadowRoot = this.shadowRoot;
            makeTemplate(shadowRoot);
            this[$container] = shadowRoot.querySelector('.container');
            this[$userInputElement] =
                shadowRoot.querySelector('.userInput');
            this[$canvas] = shadowRoot.querySelector('canvas');
            this[$statusElement] =
                shadowRoot.querySelector('#status');
            this[$defaultAriaLabel] =
                this[$userInputElement].getAttribute('aria-label');
            let width, height;
            if (this.isConnected) {
                const rect = this.getBoundingClientRect();
                width = rect.width;
                height = rect.height;
            }
            else {
                width = UNSIZED_MEDIA_WIDTH;
                height = UNSIZED_MEDIA_HEIGHT;
            }
            this[$scene] =
                new ModelScene({ canvas: this[$canvas], element: this, width, height });
            Promise.resolve().then(() => {
                this[$updateSize](this.getBoundingClientRect());
            });
            if (HAS_RESIZE_OBSERVER) {
                this[$resizeObserver] =
                    new ResizeObserver((entries) => {
                        if (this[$renderer].isPresenting) {
                            return;
                        }
                        for (let entry of entries) {
                            if (entry.target === this) {
                                this[$updateSize](entry.contentRect);
                            }
                        }
                    });
            }
            if (HAS_INTERSECTION_OBSERVER) {
                this[$intersectionObserver] = new IntersectionObserver(entries => {
                    for (let entry of entries) {
                        if (entry.target === this) {
                            const oldVisibility = this.modelIsVisible;
                            this[$isElementInViewport] = entry.isIntersecting;
                            this[$announceModelVisibility](oldVisibility);
                            if (this[$isElementInViewport] && !this.loaded) {
                                this[$updateSource]();
                            }
                        }
                    }
                }, {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.00001,
                });
            }
            else {
                this[$isElementInViewport] = true;
            }
        }
        static get is() {
            return 'model-viewer';
        }
        static set modelCacheSize(value) {
            CachingGLTFLoader[$evictionPolicy].evictionThreshold = value;
        }
        static get modelCacheSize() {
            return CachingGLTFLoader[$evictionPolicy].evictionThreshold;
        }
        static set minimumRenderScale(value) {
            if (value > 1) {
                console.warn('<model-viewer> minimumRenderScale has been clamped to a maximum value of 1.');
            }
            if (value <= 0) {
                console.warn('<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25.');
            }
            Renderer.singleton.minScale = value;
        }
        static get minimumRenderScale() {
            return Renderer.singleton.minScale;
        }
        get loaded() {
            return this[$getLoaded]();
        }
        get [(_a$1 = $isElementInViewport, _b$1 = $loaded, _c = $loadedTime, _d = $status, _e = $clearModelTimeout, _f = $fallbackResizeHandler, _g = $announceModelVisibility, _h = $resizeObserver, _j = $intersectionObserver, _k = $progressTracker, $renderer)]() {
            return Renderer.singleton;
        }
        get modelIsVisible() {
            return this[$getModelIsVisible]();
        }
        connectedCallback() {
            super.connectedCallback && super.connectedCallback();
            if (HAS_RESIZE_OBSERVER) {
                this[$resizeObserver].observe(this);
            }
            else {
                self.addEventListener('resize', this[$fallbackResizeHandler]);
            }
            if (HAS_INTERSECTION_OBSERVER) {
                this[$intersectionObserver].observe(this);
            }
            this.addEventListener('focus', this[$onFocus]);
            this.addEventListener('blur', this[$onBlur]);
            const renderer = this[$renderer];
            renderer.addEventListener('contextlost', this[$onContextLost]);
            renderer.registerScene(this[$scene]);
            if (this[$clearModelTimeout] != null) {
                self.clearTimeout(this[$clearModelTimeout]);
                this[$clearModelTimeout] = null;
                this.requestUpdate('src', null);
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback && super.disconnectedCallback();
            if (HAS_RESIZE_OBSERVER) {
                this[$resizeObserver].unobserve(this);
            }
            else {
                self.removeEventListener('resize', this[$fallbackResizeHandler]);
            }
            if (HAS_INTERSECTION_OBSERVER) {
                this[$intersectionObserver].unobserve(this);
            }
            this.removeEventListener('focus', this[$onFocus]);
            this.removeEventListener('blur', this[$onBlur]);
            const renderer = this[$renderer];
            renderer.removeEventListener('contextlost', this[$onContextLost]);
            renderer.unregisterScene(this[$scene]);
            this[$clearModelTimeout] = self.setTimeout(() => {
                this[$scene].dispose();
                this[$clearModelTimeout] = null;
            }, CLEAR_MODEL_TIMEOUT_MS);
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('src')) {
                if (this.src == null) {
                    this[$loaded] = false;
                    this[$loadedTime] = 0;
                    this[$scene].reset();
                }
                else if (this.src !== this[$scene].url) {
                    this[$loaded] = false;
                    this[$loadedTime] = 0;
                    this[$updateSource]();
                }
            }
            if (changedProperties.has('alt')) {
                this[$userInputElement].setAttribute('aria-label', this[$ariaLabel]);
            }
            if (changedProperties.has('withCredentials')) {
                CachingGLTFLoader.withCredentials = this.withCredentials;
                this[$renderer].textureUtils.withCredentials = this.withCredentials;
            }
            if (changedProperties.has('generateSchema')) {
                if (this.generateSchema) {
                    this[$scene].updateSchema(this.src);
                }
                else {
                    this[$scene].updateSchema(null);
                }
            }
        }
        toDataURL(type, encoderOptions) {
            return this[$renderer]
                .displayCanvas(this[$scene])
                .toDataURL(type, encoderOptions);
        }
        async toBlob(options) {
            const mimeType = options ? options.mimeType : undefined;
            const qualityArgument = options ? options.qualityArgument : undefined;
            const useIdealAspect = options ? options.idealAspect : undefined;
            const { width, height, idealAspect, aspect } = this[$scene];
            const { dpr, scaleFactor } = this[$renderer];
            let outputWidth = width * scaleFactor * dpr;
            let outputHeight = height * scaleFactor * dpr;
            let offsetX = 0;
            let offsetY = 0;
            if (useIdealAspect === true) {
                if (idealAspect > aspect) {
                    const oldHeight = outputHeight;
                    outputHeight = Math.round(outputWidth / idealAspect);
                    offsetY = (oldHeight - outputHeight) / 2;
                }
                else {
                    const oldWidth = outputWidth;
                    outputWidth = Math.round(outputHeight * idealAspect);
                    offsetX = (oldWidth - outputWidth) / 2;
                }
            }
            blobCanvas.width = outputWidth;
            blobCanvas.height = outputHeight;
            try {
                return new Promise(async (resolve, reject) => {
                    blobCanvas.getContext('2d').drawImage(this[$renderer].displayCanvas(this[$scene]), offsetX, offsetY, outputWidth, outputHeight, 0, 0, outputWidth, outputHeight);
                    blobCanvas.toBlob((blob) => {
                        if (!blob) {
                            return reject(new Error('Unable to retrieve canvas blob'));
                        }
                        resolve(blob);
                    }, mimeType, qualityArgument);
                });
            }
            finally {
                this[$updateSize]({ width, height });
            }
        }
        registerEffectComposer(effectComposer) {
            effectComposer.setRenderer(this[$renderer].threeRenderer);
            effectComposer.setMainCamera(this[$scene].getCamera());
            effectComposer.setMainScene(this[$scene]);
            this[$scene].effectRenderer = effectComposer;
        }
        unregisterEffectComposer() {
            this[$scene].effectRenderer = null;
        }
        registerRenderer(renderer) {
            this[$scene].externalRenderer = renderer;
        }
        unregisterRenderer() {
            this[$scene].externalRenderer = null;
        }
        get [$ariaLabel]() {
            return this[$altDefaulted];
        }
        get [$altDefaulted]() {
            return (this.alt == null || this.alt === 'null') ? this[$defaultAriaLabel] :
                this.alt;
        }
        [$getLoaded]() {
            return this[$loaded];
        }
        [$getModelIsVisible]() {
            return this.loaded && this[$isElementInViewport];
        }
        [$shouldAttemptPreload]() {
            return !!this.src && this[$isElementInViewport];
        }
        [$updateSize]({ width, height }) {
            if (width === 0 || height === 0) {
                return;
            }
            this[$container].style.width = `${width}px`;
            this[$container].style.height = `${height}px`;
            this[$onResize]({ width, height });
        }
        [$tick](time, delta) {
            var _p;
            (_p = this[$scene].effectRenderer) === null || _p === void 0 ? void 0 : _p.beforeRender(time, delta);
        }
        [$markLoaded]() {
            if (this[$loaded]) {
                return;
            }
            this[$loaded] = true;
            this[$loadedTime] = performance.now();
        }
        [$needsRender]() {
            this[$scene].queueRender();
        }
        [$onModelLoad]() {
        }
        [$updateStatus](status) {
            this[$status] = status;
            const rootNode = this.getRootNode();
            if (rootNode != null && rootNode.activeElement === this &&
                this[$statusElement].textContent != status) {
                this[$statusElement].textContent = status;
            }
        }
        [(_l = $onFocus, _m = $onBlur, $onResize)](e) {
            this[$scene].setSize(e.width, e.height);
        }
        async [(_o = $onContextLost, $updateSource)]() {
            const scene = this[$scene];
            if (this.loaded || !this[$shouldAttemptPreload]() ||
                this.src === scene.url) {
                return;
            }
            if (this.generateSchema) {
                scene.updateSchema(this.src);
            }
            this[$updateStatus]('Loading');
            scene.stopAnimation();
            const updateSourceProgress = this[$progressTracker].beginActivity('model-load');
            const source = this.src;
            try {
                const srcUpdated = scene.setSource(source, (progress) => updateSourceProgress(clamp(progress, 0, 1) * 0.95));
                const envUpdated = this[$updateEnvironment]();
                await Promise.all([srcUpdated, envUpdated]);
                this[$markLoaded]();
                this[$onModelLoad]();
                this.updateComplete.then(() => {
                    this.dispatchEvent(new CustomEvent('before-render'));
                });
                await new Promise(resolve => {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            this.dispatchEvent(new CustomEvent('load', { detail: { url: source } }));
                            resolve();
                        });
                    });
                });
            }
            catch (error) {
                this.dispatchEvent(new CustomEvent('error', { detail: { type: 'loadfailure', sourceError: error } }));
            }
            finally {
                updateSourceProgress(1.0);
            }
        }
    }
    __decorate$4([
        n$8({ type: String })
    ], ModelViewerElementBase.prototype, "alt", void 0);
    __decorate$4([
        n$8({ type: String })
    ], ModelViewerElementBase.prototype, "src", void 0);
    __decorate$4([
        n$8({ type: Boolean, attribute: 'with-credentials' })
    ], ModelViewerElementBase.prototype, "withCredentials", void 0);
    __decorate$4([
        n$8({ type: Boolean, attribute: 'generate-schema' })
    ], ModelViewerElementBase.prototype, "generateSchema", void 0);

    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const MILLISECONDS_PER_SECOND = 1000.0;
    const $changeAnimation = Symbol('changeAnimation');
    const $paused = Symbol('paused');
    const DEFAULT_PLAY_OPTIONS = {
        repetitions: Infinity,
        pingpong: false
    };
    const AnimationMixin = (ModelViewerElement) => {
        var _a;
        class AnimationModelViewerElement extends ModelViewerElement {
            constructor(...args) {
                super(args);
                this.autoplay = false;
                this.animationName = undefined;
                this.animationCrossfadeDuration = 300;
                this[_a] = true;
                this[$scene].subscribeMixerEvent('loop', (e) => {
                    const count = e.action._loopCount;
                    this.dispatchEvent(new CustomEvent('loop', { detail: { count } }));
                });
                this[$scene].subscribeMixerEvent('finished', () => {
                    this[$paused] = true;
                    this.dispatchEvent(new CustomEvent('finished'));
                });
            }
            get availableAnimations() {
                if (this.loaded) {
                    return this[$scene].animationNames;
                }
                return [];
            }
            get duration() {
                return this[$scene].duration;
            }
            get paused() {
                return this[$paused];
            }
            get currentTime() {
                return this[$scene].animationTime;
            }
            set currentTime(value) {
                this[$scene].animationTime = value;
                this[$needsRender]();
            }
            get timeScale() {
                return this[$scene].animationTimeScale;
            }
            set timeScale(value) {
                this[$scene].animationTimeScale = value;
            }
            pause() {
                if (this[$paused]) {
                    return;
                }
                this[$paused] = true;
                this.dispatchEvent(new CustomEvent('pause'));
            }
            play(options) {
                if (this.availableAnimations.length > 0) {
                    this[$paused] = false;
                    this[$changeAnimation](options);
                    this.dispatchEvent(new CustomEvent('play'));
                }
            }
            [(_a = $paused, $onModelLoad)]() {
                super[$onModelLoad]();
                this[$paused] = true;
                if (this.animationName != null) {
                    this[$changeAnimation]();
                }
                if (this.autoplay) {
                    this.play();
                }
            }
            [$tick](_time, delta) {
                super[$tick](_time, delta);
                if (this[$paused] ||
                    (!this[$getModelIsVisible]() && !this[$renderer].isPresenting)) {
                    return;
                }
                this[$scene].updateAnimation(delta / MILLISECONDS_PER_SECOND);
                this[$needsRender]();
            }
            updated(changedProperties) {
                super.updated(changedProperties);
                if (changedProperties.has('autoplay') && this.autoplay) {
                    this.play();
                }
                if (changedProperties.has('animationName')) {
                    this[$changeAnimation]();
                }
            }
            [$changeAnimation](options = DEFAULT_PLAY_OPTIONS) {
                var _b;
                const repetitions = (_b = options.repetitions) !== null && _b !== void 0 ? _b : Infinity;
                const mode = options.pingpong ?
                    three.LoopPingPong :
                    (repetitions === 1 ? three.LoopOnce : three.LoopRepeat);
                this[$scene].playAnimation(this.animationName, this.animationCrossfadeDuration / MILLISECONDS_PER_SECOND, mode, repetitions);
                if (this[$paused]) {
                    this[$scene].updateAnimation(0);
                    this[$needsRender]();
                }
            }
        }
        __decorate$3([
            n$8({ type: Boolean })
        ], AnimationModelViewerElement.prototype, "autoplay", void 0);
        __decorate$3([
            n$8({ type: String, attribute: 'animation-name' })
        ], AnimationModelViewerElement.prototype, "animationName", void 0);
        __decorate$3([
            n$8({ type: Number, attribute: 'animation-crossfade-duration' })
        ], AnimationModelViewerElement.prototype, "animationCrossfadeDuration", void 0);
        return AnimationModelViewerElement;
    };

    const $hotspotMap = Symbol('hotspotMap');
    const $mutationCallback = Symbol('mutationCallback');
    const $observer = Symbol('observer');
    const $addHotspot = Symbol('addHotspot');
    const $removeHotspot = Symbol('removeHotspot');
    const worldToModel = new three.Matrix4();
    const AnnotationMixin = (ModelViewerElement) => {
        var _a, _b, _c;
        class AnnotationModelViewerElement extends ModelViewerElement {
            constructor() {
                super(...arguments);
                this[_a] = new Map();
                this[_b] = (mutations) => {
                    mutations.forEach((mutation) => {
                        if (!(mutation instanceof MutationRecord) ||
                            mutation.type === 'childList') {
                            mutation.addedNodes.forEach((node) => {
                                this[$addHotspot](node);
                            });
                            mutation.removedNodes.forEach((node) => {
                                this[$removeHotspot](node);
                            });
                            this[$needsRender]();
                        }
                    });
                };
                this[_c] = new MutationObserver(this[$mutationCallback]);
            }
            connectedCallback() {
                super.connectedCallback();
                for (let i = 0; i < this.children.length; ++i) {
                    this[$addHotspot](this.children[i]);
                }
                const { ShadyDOM } = self;
                if (ShadyDOM == null) {
                    this[$observer].observe(this, { childList: true });
                }
                else {
                    this[$observer] =
                        ShadyDOM.observeChildren(this, this[$mutationCallback]);
                }
            }
            disconnectedCallback() {
                super.disconnectedCallback();
                const { ShadyDOM } = self;
                if (ShadyDOM == null) {
                    this[$observer].disconnect();
                }
                else {
                    ShadyDOM.unobserveChildren(this[$observer]);
                }
            }
            [(_a = $hotspotMap, _b = $mutationCallback, _c = $observer, $tick)](time, delta) {
                super[$tick](time, delta);
                const scene = this[$scene];
                const { annotationRenderer } = scene;
                const camera = scene.getCamera();
                if (scene.shouldRender()) {
                    scene.updateSurfaceHotspots();
                    scene.updateHotspotsVisibility(camera.position);
                    annotationRenderer.domElement.style.display = '';
                    annotationRenderer.render(scene, camera);
                }
            }
            updateHotspot(config) {
                const hotspot = this[$hotspotMap].get(config.name);
                if (hotspot == null) {
                    return;
                }
                hotspot.updatePosition(config.position);
                hotspot.updateNormal(config.normal);
                hotspot.surface = config.surface;
                this[$needsRender]();
            }
            queryHotspot(name) {
                const hotspot = this[$hotspotMap].get(name);
                if (hotspot == null) {
                    return null;
                }
                const position = toVector3D(hotspot.position);
                const normal = toVector3D(hotspot.normal);
                const facingCamera = hotspot.facingCamera;
                const scene = this[$scene];
                const camera = scene.getCamera();
                const vector = new three.Vector3();
                vector.setFromMatrixPosition(hotspot.matrixWorld);
                vector.project(camera);
                const widthHalf = scene.width / 2;
                const heightHalf = scene.height / 2;
                vector.x = (vector.x * widthHalf) + widthHalf;
                vector.y = -(vector.y * heightHalf) + heightHalf;
                const canvasPosition = toVector3D(new three.Vector3(vector.x, vector.y, vector.z));
                if (!Number.isFinite(canvasPosition.x) ||
                    !Number.isFinite(canvasPosition.y)) {
                    return null;
                }
                return { position, normal, canvasPosition, facingCamera };
            }
            positionAndNormalFromPoint(pixelX, pixelY) {
                const scene = this[$scene];
                const ndcPosition = scene.getNDC(pixelX, pixelY);
                const hit = scene.positionAndNormalFromPoint(ndcPosition);
                if (hit == null) {
                    return null;
                }
                worldToModel.copy(scene.target.matrixWorld).invert();
                const position = toVector3D(hit.position.applyMatrix4(worldToModel));
                const normal = toVector3D(hit.normal.transformDirection(worldToModel));
                let uv = null;
                if (hit.uv != null) {
                    uv = toVector2D(hit.uv);
                }
                return { position: position, normal: normal, uv: uv };
            }
            surfaceFromPoint(pixelX, pixelY) {
                const scene = this[$scene];
                const ndcPosition = scene.getNDC(pixelX, pixelY);
                return scene.surfaceFromPoint(ndcPosition);
            }
            [$addHotspot](node) {
                if (!(node instanceof HTMLElement &&
                    node.slot.indexOf('hotspot') === 0)) {
                    return;
                }
                let hotspot = this[$hotspotMap].get(node.slot);
                if (hotspot != null) {
                    hotspot.increment();
                }
                else {
                    hotspot = new Hotspot({
                        name: node.slot,
                        position: node.dataset.position,
                        normal: node.dataset.normal,
                        surface: node.dataset.surface,
                    });
                    this[$hotspotMap].set(node.slot, hotspot);
                    this[$scene].addHotspot(hotspot);
                }
                this[$scene].queueRender();
            }
            [$removeHotspot](node) {
                if (!(node instanceof HTMLElement)) {
                    return;
                }
                const hotspot = this[$hotspotMap].get(node.slot);
                if (!hotspot) {
                    return;
                }
                if (hotspot.decrement()) {
                    this[$scene].removeHotspot(hotspot);
                    this[$hotspotMap].delete(node.slot);
                }
                this[$scene].queueRender();
            }
        }
        return AnnotationModelViewerElement;
    };

    /*!
    fflate - fast JavaScript compression/decompression
    <https://101arrowz.github.io/fflate>
    Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
    version 0.6.9
    */
    var durl = function (c) { return URL.createObjectURL(new Blob([c], { type: 'text/javascript' })); };
    try {
        URL.revokeObjectURL(durl(''));
    }
    catch (e) {
        // We're in Deno or a very old browser
        durl = function (c) { return 'data:application/javascript;charset=UTF-8,' + encodeURI(c); };
    }

    // aliases for shorter compressed code (most minifers don't do this)
    var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
    // fixed length extra bits
    var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
    // fixed distance extra bits
    // see fleb note
    var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
    // code length index map
    var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    // get base, reverse index map from extra bits
    var freb = function (eb, start) {
        var b = new u16(31);
        for (var i = 0; i < 31; ++i) {
            b[i] = start += 1 << eb[i - 1];
        }
        // numbers here are at max 18 bits
        var r = new u32(b[30]);
        for (var i = 1; i < 30; ++i) {
            for (var j = b[i]; j < b[i + 1]; ++j) {
                r[j] = ((j - b[i]) << 5) | i;
            }
        }
        return [b, r];
    };
    var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
    // we can ignore the fact that the other numbers are wrong; they never happen anyway
    fl[28] = 258, revfl[258] = 28;
    var _b = freb(fdeb, 0), revfd = _b[1];
    // map of value to reverse (assuming 16 bits)
    var rev = new u16(32768);
    for (var i = 0; i < 32768; ++i) {
        // reverse table algorithm from SO
        var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
        x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
        x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
        rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
    }
    // create huffman tree from u8 "map": index -> code length for code index
    // mb (max bits) must be at most 15
    // TODO: optimize/split up?
    var hMap = (function (cd, mb, r) {
        var s = cd.length;
        // index
        var i = 0;
        // u16 "map": index -> # of codes with bit length = index
        var l = new u16(mb);
        // length of cd must be 288 (total # of codes)
        for (; i < s; ++i)
            ++l[cd[i] - 1];
        // u16 "map": index -> minimum code for bit length = index
        var le = new u16(mb);
        for (i = 0; i < mb; ++i) {
            le[i] = (le[i - 1] + l[i - 1]) << 1;
        }
        var co;
        if (r) {
            // u16 "map": index -> number of actual bits, symbol for code
            co = new u16(1 << mb);
            // bits to remove for reverser
            var rvb = 15 - mb;
            for (i = 0; i < s; ++i) {
                // ignore 0 lengths
                if (cd[i]) {
                    // num encoding both symbol and bits read
                    var sv = (i << 4) | cd[i];
                    // free bits
                    var r_1 = mb - cd[i];
                    // start value
                    var v = le[cd[i] - 1]++ << r_1;
                    // m is end value
                    for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                        // every 16 bit value starting with the code yields the same result
                        co[rev[v] >>> rvb] = sv;
                    }
                }
            }
        }
        else {
            co = new u16(s);
            for (i = 0; i < s; ++i) {
                if (cd[i]) {
                    co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
                }
            }
        }
        return co;
    });
    // fixed length tree
    var flt = new u8(288);
    for (var i = 0; i < 144; ++i)
        flt[i] = 8;
    for (var i = 144; i < 256; ++i)
        flt[i] = 9;
    for (var i = 256; i < 280; ++i)
        flt[i] = 7;
    for (var i = 280; i < 288; ++i)
        flt[i] = 8;
    // fixed distance tree
    var fdt = new u8(32);
    for (var i = 0; i < 32; ++i)
        fdt[i] = 5;
    // fixed length map
    var flm = /*#__PURE__*/ hMap(flt, 9, 0);
    // fixed distance map
    var fdm = /*#__PURE__*/ hMap(fdt, 5, 0);
    // get end of byte
    var shft = function (p) { return ((p / 8) | 0) + (p & 7 && 1); };
    // typed array slice - allows garbage collector to free original reference,
    // while being more compatible than .slice
    var slc = function (v, s, e) {
        if (s == null || s < 0)
            s = 0;
        if (e == null || e > v.length)
            e = v.length;
        // can't use .constructor in case user-supplied
        var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
        n.set(v.subarray(s, e));
        return n;
    };
    // starting at p, write the minimum number of bits that can hold v to d
    var wbits = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) | 0;
        d[o] |= v;
        d[o + 1] |= v >>> 8;
    };
    // starting at p, write the minimum number of bits (>8) that can hold v to d
    var wbits16 = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) | 0;
        d[o] |= v;
        d[o + 1] |= v >>> 8;
        d[o + 2] |= v >>> 16;
    };
    // creates code lengths from a frequency table
    var hTree = function (d, mb) {
        // Need extra info to make a tree
        var t = [];
        for (var i = 0; i < d.length; ++i) {
            if (d[i])
                t.push({ s: i, f: d[i] });
        }
        var s = t.length;
        var t2 = t.slice();
        if (!s)
            return [et, 0];
        if (s == 1) {
            var v = new u8(t[0].s + 1);
            v[t[0].s] = 1;
            return [v, 1];
        }
        t.sort(function (a, b) { return a.f - b.f; });
        // after i2 reaches last ind, will be stopped
        // freq must be greater than largest possible number of symbols
        t.push({ s: -1, f: 25001 });
        var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
        t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
        // efficient algorithm from UZIP.js
        // i0 is lookbehind, i2 is lookahead - after processing two low-freq
        // symbols that combined have high freq, will start processing i2 (high-freq,
        // non-composite) symbols instead
        // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
        while (i1 != s - 1) {
            l = t[t[i0].f < t[i2].f ? i0++ : i2++];
            r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
            t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
        }
        var maxSym = t2[0].s;
        for (var i = 1; i < s; ++i) {
            if (t2[i].s > maxSym)
                maxSym = t2[i].s;
        }
        // code lengths
        var tr = new u16(maxSym + 1);
        // max bits in tree
        var mbt = ln(t[i1 - 1], tr, 0);
        if (mbt > mb) {
            // more algorithms from UZIP.js
            // TODO: find out how this code works (debt)
            //  ind    debt
            var i = 0, dt = 0;
            //    left            cost
            var lft = mbt - mb, cst = 1 << lft;
            t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
            for (; i < s; ++i) {
                var i2_1 = t2[i].s;
                if (tr[i2_1] > mb) {
                    dt += cst - (1 << (mbt - tr[i2_1]));
                    tr[i2_1] = mb;
                }
                else
                    break;
            }
            dt >>>= lft;
            while (dt > 0) {
                var i2_2 = t2[i].s;
                if (tr[i2_2] < mb)
                    dt -= 1 << (mb - tr[i2_2]++ - 1);
                else
                    ++i;
            }
            for (; i >= 0 && dt; --i) {
                var i2_3 = t2[i].s;
                if (tr[i2_3] == mb) {
                    --tr[i2_3];
                    ++dt;
                }
            }
            mbt = mb;
        }
        return [new u8(tr), mbt];
    };
    // get the max length and assign length codes
    var ln = function (n, l, d) {
        return n.s == -1
            ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
            : (l[n.s] = d);
    };
    // length codes generation
    var lc = function (c) {
        var s = c.length;
        // Note that the semicolon was intentional
        while (s && !c[--s])
            ;
        var cl = new u16(++s);
        //  ind      num         streak
        var cli = 0, cln = c[0], cls = 1;
        var w = function (v) { cl[cli++] = v; };
        for (var i = 1; i <= s; ++i) {
            if (c[i] == cln && i != s)
                ++cls;
            else {
                if (!cln && cls > 2) {
                    for (; cls > 138; cls -= 138)
                        w(32754);
                    if (cls > 2) {
                        w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                        cls = 0;
                    }
                }
                else if (cls > 3) {
                    w(cln), --cls;
                    for (; cls > 6; cls -= 6)
                        w(8304);
                    if (cls > 2)
                        w(((cls - 3) << 5) | 8208), cls = 0;
                }
                while (cls--)
                    w(cln);
                cls = 1;
                cln = c[i];
            }
        }
        return [cl.subarray(0, cli), s];
    };
    // calculate the length of output from tree, code lengths
    var clen = function (cf, cl) {
        var l = 0;
        for (var i = 0; i < cl.length; ++i)
            l += cf[i] * cl[i];
        return l;
    };
    // writes a fixed block
    // returns the new bit pos
    var wfblk = function (out, pos, dat) {
        // no need to write 00 as type: TypedArray defaults to 0
        var s = dat.length;
        var o = shft(pos + 2);
        out[o] = s & 255;
        out[o + 1] = s >>> 8;
        out[o + 2] = out[o] ^ 255;
        out[o + 3] = out[o + 1] ^ 255;
        for (var i = 0; i < s; ++i)
            out[o + i + 4] = dat[i];
        return (o + 4 + s) * 8;
    };
    // writes a block
    var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
        wbits(out, p++, final);
        ++lf[256];
        var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
        var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
        var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
        var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
        var lcfreq = new u16(19);
        for (var i = 0; i < lclt.length; ++i)
            lcfreq[lclt[i] & 31]++;
        for (var i = 0; i < lcdt.length; ++i)
            lcfreq[lcdt[i] & 31]++;
        var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
        var nlcc = 19;
        for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
            ;
        var flen = (bl + 5) << 3;
        var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
        var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
        if (flen <= ftlen && flen <= dtlen)
            return wfblk(out, p, dat.subarray(bs, bs + bl));
        var lm, ll, dm, dl;
        wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
        if (dtlen < ftlen) {
            lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
            var llm = hMap(lct, mlcb, 0);
            wbits(out, p, nlc - 257);
            wbits(out, p + 5, ndc - 1);
            wbits(out, p + 10, nlcc - 4);
            p += 14;
            for (var i = 0; i < nlcc; ++i)
                wbits(out, p + 3 * i, lct[clim[i]]);
            p += 3 * nlcc;
            var lcts = [lclt, lcdt];
            for (var it = 0; it < 2; ++it) {
                var clct = lcts[it];
                for (var i = 0; i < clct.length; ++i) {
                    var len = clct[i] & 31;
                    wbits(out, p, llm[len]), p += lct[len];
                    if (len > 15)
                        wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
                }
            }
        }
        else {
            lm = flm, ll = flt, dm = fdm, dl = fdt;
        }
        for (var i = 0; i < li; ++i) {
            if (syms[i] > 255) {
                var len = (syms[i] >>> 18) & 31;
                wbits16(out, p, lm[len + 257]), p += ll[len + 257];
                if (len > 7)
                    wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
                var dst = syms[i] & 31;
                wbits16(out, p, dm[dst]), p += dl[dst];
                if (dst > 3)
                    wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
            }
            else {
                wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
            }
        }
        wbits16(out, p, lm[256]);
        return p + ll[256];
    };
    // deflate options (nice << 13) | chain
    var deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    // empty
    var et = /*#__PURE__*/ new u8(0);
    // compresses data into a raw DEFLATE buffer
    var dflt = function (dat, lvl, plvl, pre, post, lst) {
        var s = dat.length;
        var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post);
        // writing to this writes to the output buffer
        var w = o.subarray(pre, o.length - post);
        var pos = 0;
        if (!lvl || s < 8) {
            for (var i = 0; i <= s; i += 65535) {
                // end
                var e = i + 65535;
                if (e < s) {
                    // write full block
                    pos = wfblk(w, pos, dat.subarray(i, e));
                }
                else {
                    // write final block
                    w[i] = lst;
                    pos = wfblk(w, pos, dat.subarray(i, s));
                }
            }
        }
        else {
            var opt = deo[lvl - 1];
            var n = opt >>> 13, c = opt & 8191;
            var msk_1 = (1 << plvl) - 1;
            //    prev 2-byte val map    curr 2-byte val map
            var prev = new u16(32768), head = new u16(msk_1 + 1);
            var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
            var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
            // 24576 is an arbitrary number of maximum symbols per block
            // 424 buffer for last block
            var syms = new u32(25000);
            // length/literal freq   distance freq
            var lf = new u16(288), df = new u16(32);
            //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
            var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
            for (; i < s; ++i) {
                // hash value
                // deopt when i > s - 3 - at end, deopt acceptable
                var hv = hsh(i);
                // index mod 32768    previous index mod
                var imod = i & 32767, pimod = head[hv];
                prev[imod] = pimod;
                head[hv] = imod;
                // We always should modify head and prev, but only add symbols if
                // this data is not yet processed ("wait" for wait index)
                if (wi <= i) {
                    // bytes remaining
                    var rem = s - i;
                    if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                        pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                        li = lc_1 = eb = 0, bs = i;
                        for (var j = 0; j < 286; ++j)
                            lf[j] = 0;
                        for (var j = 0; j < 30; ++j)
                            df[j] = 0;
                    }
                    //  len    dist   chain
                    var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                    if (rem > 2 && hv == hsh(i - dif)) {
                        var maxn = Math.min(n, rem) - 1;
                        var maxd = Math.min(32767, i);
                        // max possible length
                        // not capped at dif because decompressors implement "rolling" index population
                        var ml = Math.min(258, rem);
                        while (dif <= maxd && --ch_1 && imod != pimod) {
                            if (dat[i + l] == dat[i + l - dif]) {
                                var nl = 0;
                                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                    ;
                                if (nl > l) {
                                    l = nl, d = dif;
                                    // break out early when we reach "nice" (we are satisfied enough)
                                    if (nl > maxn)
                                        break;
                                    // now, find the rarest 2-byte sequence within this
                                    // length of literals and search for that instead.
                                    // Much faster than just using the start
                                    var mmd = Math.min(dif, nl - 2);
                                    var md = 0;
                                    for (var j = 0; j < mmd; ++j) {
                                        var ti = (i - dif + j + 32768) & 32767;
                                        var pti = prev[ti];
                                        var cd = (ti - pti + 32768) & 32767;
                                        if (cd > md)
                                            md = cd, pimod = ti;
                                    }
                                }
                            }
                            // check the previous match
                            imod = pimod, pimod = prev[imod];
                            dif += (imod - pimod + 32768) & 32767;
                        }
                    }
                    // d will be nonzero only when a match was found
                    if (d) {
                        // store both dist and len data in one Uint32
                        // Make sure this is recognized as a len/dist with 28th bit (2^28)
                        syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                        var lin = revfl[l] & 31, din = revfd[d] & 31;
                        eb += fleb[lin] + fdeb[din];
                        ++lf[257 + lin];
                        ++df[din];
                        wi = i + l;
                        ++lc_1;
                    }
                    else {
                        syms[li++] = dat[i];
                        ++lf[dat[i]];
                    }
                }
            }
            pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
            // this is the easiest way to avoid needing to maintain state
            if (!lst && pos & 7)
                pos = wfblk(w, pos + 1, et);
        }
        return slc(o, 0, pre + shft(pos) + post);
    };
    // CRC32 table
    var crct = /*#__PURE__*/ (function () {
        var t = new u32(256);
        for (var i = 0; i < 256; ++i) {
            var c = i, k = 9;
            while (--k)
                c = ((c & 1) && 0xEDB88320) ^ (c >>> 1);
            t[i] = c;
        }
        return t;
    })();
    // CRC32
    var crc = function () {
        var c = -1;
        return {
            p: function (d) {
                // closures have awful performance
                var cr = c;
                for (var i = 0; i < d.length; ++i)
                    cr = crct[(cr & 255) ^ d[i]] ^ (cr >>> 8);
                c = cr;
            },
            d: function () { return ~c; }
        };
    };
    // deflate with opts
    var dopt = function (dat, opt, pre, post, st) {
        return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
    };
    // Walmart object spread
    var mrg = function (a, b) {
        var o = {};
        for (var k in a)
            o[k] = a[k];
        for (var k in b)
            o[k] = b[k];
        return o;
    };
    // write bytes
    var wbytes = function (d, b, v) {
        for (; v; ++b)
            d[b] = v, v >>>= 8;
    };
    /**
     * Compresses data with DEFLATE without any wrapper
     * @param data The data to compress
     * @param opts The compression options
     * @returns The deflated version of the data
     */
    function deflateSync(data, opts) {
        return dopt(data, opts || {}, 0, 0);
    }
    // flatten a directory structure
    var fltn = function (d, p, t, o) {
        for (var k in d) {
            var val = d[k], n = p + k;
            if (val instanceof u8)
                t[n] = [val, o];
            else if (Array.isArray(val))
                t[n] = [val[0], mrg(o, val[1])];
            else
                fltn(val, n + '/', t, o);
        }
    };
    // text encoder
    var te = typeof TextEncoder != 'undefined' && /*#__PURE__*/ new TextEncoder();
    // text decoder
    var td = typeof TextDecoder != 'undefined' && /*#__PURE__*/ new TextDecoder();
    // text decoder stream
    var tds = 0;
    try {
        td.decode(et, { stream: true });
        tds = 1;
    }
    catch (e) { }
    /**
     * Converts a string into a Uint8Array for use with compression/decompression methods
     * @param str The string to encode
     * @param latin1 Whether or not to interpret the data as Latin-1. This should
     *               not need to be true unless decoding a binary string.
     * @returns The string encoded in UTF-8/Latin-1 binary
     */
    function strToU8(str, latin1) {
        if (latin1) {
            var ar_1 = new u8(str.length);
            for (var i = 0; i < str.length; ++i)
                ar_1[i] = str.charCodeAt(i);
            return ar_1;
        }
        if (te)
            return te.encode(str);
        var l = str.length;
        var ar = new u8(str.length + (str.length >> 1));
        var ai = 0;
        var w = function (v) { ar[ai++] = v; };
        for (var i = 0; i < l; ++i) {
            if (ai + 5 > ar.length) {
                var n = new u8(ai + 8 + ((l - i) << 1));
                n.set(ar);
                ar = n;
            }
            var c = str.charCodeAt(i);
            if (c < 128 || latin1)
                w(c);
            else if (c < 2048)
                w(192 | (c >> 6)), w(128 | (c & 63));
            else if (c > 55295 && c < 57344)
                c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                    w(240 | (c >> 18)), w(128 | ((c >> 12) & 63)), w(128 | ((c >> 6) & 63)), w(128 | (c & 63));
            else
                w(224 | (c >> 12)), w(128 | ((c >> 6) & 63)), w(128 | (c & 63));
        }
        return slc(ar, 0, ai);
    }
    // extra field length
    var exfl = function (ex) {
        var le = 0;
        if (ex) {
            for (var k in ex) {
                var l = ex[k].length;
                if (l > 65535)
                    throw 'extra field too long';
                le += l + 4;
            }
        }
        return le;
    };
    // write zip header
    var wzh = function (d, b, f, fn, u, c, ce, co) {
        var fl = fn.length, ex = f.extra, col = co && co.length;
        var exl = exfl(ex);
        wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
        if (ce != null)
            d[b++] = 20, d[b++] = f.os;
        d[b] = 20, b += 2; // spec compliance? what's that?
        d[b++] = (f.flag << 1) | (c == null && 8), d[b++] = u && 8;
        d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
        var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
        if (y < 0 || y > 119)
            throw 'date not in range 1980-2099';
        wbytes(d, b, (y << 25) | ((dt.getMonth() + 1) << 21) | (dt.getDate() << 16) | (dt.getHours() << 11) | (dt.getMinutes() << 5) | (dt.getSeconds() >>> 1)), b += 4;
        if (c != null) {
            wbytes(d, b, f.crc);
            wbytes(d, b + 4, c);
            wbytes(d, b + 8, f.size);
        }
        wbytes(d, b + 12, fl);
        wbytes(d, b + 14, exl), b += 16;
        if (ce != null) {
            wbytes(d, b, col);
            wbytes(d, b + 6, f.attrs);
            wbytes(d, b + 10, ce), b += 14;
        }
        d.set(fn, b);
        b += fl;
        if (exl) {
            for (var k in ex) {
                var exf = ex[k], l = exf.length;
                wbytes(d, b, +k);
                wbytes(d, b + 2, l);
                d.set(exf, b + 4), b += 4 + l;
            }
        }
        if (col)
            d.set(co, b), b += col;
        return b;
    };
    // write zip footer (end of central directory)
    var wzf = function (o, b, c, d, e) {
        wbytes(o, b, 0x6054B50); // skip disk
        wbytes(o, b + 8, c);
        wbytes(o, b + 10, c);
        wbytes(o, b + 12, d);
        wbytes(o, b + 16, e);
    };
    /**
     * Synchronously creates a ZIP file. Prefer using `zip` for better performance
     * with more than one file.
     * @param data The directory structure for the ZIP archive
     * @param opts The main options, merged with per-file options
     * @returns The generated ZIP archive
     */
    function zipSync(data, opts) {
        if (!opts)
            opts = {};
        var r = {};
        var files = [];
        fltn(data, '', r, opts);
        var o = 0;
        var tot = 0;
        for (var fn in r) {
            var _a = r[fn], file = _a[0], p = _a[1];
            var compression = p.level == 0 ? 0 : 8;
            var f = strToU8(fn), s = f.length;
            var com = p.comment, m = com && strToU8(com), ms = m && m.length;
            var exl = exfl(p.extra);
            if (s > 65535)
                throw 'filename too long';
            var d = compression ? deflateSync(file, p) : file, l = d.length;
            var c = crc();
            c.p(file);
            files.push(mrg(p, {
                size: file.length,
                crc: c.d(),
                c: d,
                f: f,
                m: m,
                u: s != fn.length || (m && (com.length != ms)),
                o: o,
                compression: compression
            }));
            o += 30 + s + exl + l;
            tot += 76 + 2 * (s + exl) + (ms || 0) + l;
        }
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        for (var i = 0; i < files.length; ++i) {
            var f = files[i];
            wzh(out, f.o, f, f.f, f.u, f.c.length);
            var badd = 30 + f.f.length + exfl(f.extra);
            out.set(f.c, f.o + badd);
            wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
        }
        wzf(out, o, files.length, cdl, oe);
        return out;
    }

    class USDZExporter {

    	async parse( scene, options = {} ) {

    		options = Object.assign( {
    			ar: {
    				anchoring: { type: 'plane' },
    				planeAnchoring: { alignment: 'horizontal' }
    			},
    			quickLookCompatible: false,
    		}, options );

    		const files = {};
    		const modelFileName = 'model.usda';

    		// model file should be first in USDZ archive so we init it here
    		files[ modelFileName ] = null;

    		let output = buildHeader();

    		output += buildSceneStart( options );

    		const materials = {};
    		const textures = {};

    		scene.traverseVisible( ( object ) => {

    			if ( object.isMesh ) {

    				const geometry = object.geometry;
    				const material = object.material;

    				if ( material.isMeshStandardMaterial ) {

    					const geometryFileName = 'geometries/Geometry_' + geometry.id + '.usda';

    					if ( ! ( geometryFileName in files ) ) {

    						const meshObject = buildMeshObject( geometry );
    						files[ geometryFileName ] = buildUSDFileAsString( meshObject );

    					}

    					if ( ! ( material.uuid in materials ) ) {

    						materials[ material.uuid ] = material;

    					}

    					output += buildXform( object, geometry, material );

    				} else {

    					console.warn( 'THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)', object );

    				}

    			} else if ( object.isCamera ) {

    				output += buildCamera( object );

    			}

    		} );


    		output += buildSceneEnd();

    		output += buildMaterials( materials, textures, options.quickLookCompatible );

    		files[ modelFileName ] = strToU8( output );
    		output = null;

    		for ( const id in textures ) {

    			let texture = textures[ id ];

    			if ( texture.isCompressedTexture === true ) {

    				texture = decompress( texture );

    			}

    			const canvas = imageToCanvas( texture.image, texture.flipY );
    			const blob = await new Promise( resolve => canvas.toBlob( resolve, 'image/png', 1 ) );

    			files[ `textures/Texture_${ id }.png` ] = new Uint8Array( await blob.arrayBuffer() );

    		}

    		// 64 byte alignment
    		// https://github.com/101arrowz/fflate/issues/39#issuecomment-777263109

    		let offset = 0;

    		for ( const filename in files ) {

    			const file = files[ filename ];
    			const headerSize = 34 + filename.length;

    			offset += headerSize;

    			const offsetMod64 = offset & 63;

    			if ( offsetMod64 !== 4 ) {

    				const padLength = 64 - offsetMod64;
    				const padding = new Uint8Array( padLength );

    				files[ filename ] = [ file, { extra: { 12345: padding } } ];

    			}

    			offset = file.length;

    		}

    		return zipSync( files, { level: 0 } );

    	}

    }

    function imageToCanvas( image, flipY ) {

    	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
    		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
    		( typeof OffscreenCanvas !== 'undefined' && image instanceof OffscreenCanvas ) ||
    		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

    		const scale = 1024 / Math.max( image.width, image.height );

    		const canvas = document.createElement( 'canvas' );
    		canvas.width = image.width * Math.min( 1, scale );
    		canvas.height = image.height * Math.min( 1, scale );

    		const context = canvas.getContext( '2d' );

    		// TODO: We should be able to do this in the UsdTransform2d?

    		if ( flipY === true ) {

    			context.translate( 0, canvas.height );
    			context.scale( 1, - 1 );

    		}

    		context.drawImage( image, 0, 0, canvas.width, canvas.height );

    		return canvas;

    	} else {

    		throw new Error( 'THREE.USDZExporter: No valid image data found. Unable to process texture.' );

    	}

    }

    //

    const PRECISION = 7;

    function buildHeader() {

    	return `#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`;

    }

    function buildSceneStart( options ) {

    	return `def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${options.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${options.ar.planeAnchoring.alignment}"

`;

    }

    function buildSceneEnd() {

    	return `
		}
	}
}

`;

    }

    function buildUSDFileAsString( dataToInsert ) {

    	let output = buildHeader();
    	output += dataToInsert;
    	return strToU8( output );

    }

    // Xform

    function buildXform( object, geometry, material ) {

    	const name = 'Object_' + object.id;
    	const transform = buildMatrix( object.matrixWorld );

    	if ( object.matrixWorld.determinant() < 0 ) {

    		console.warn( 'THREE.USDZExporter: USDZ does not support negative scales', object );

    	}

    	return `def Xform "${ name }" (
	prepend references = @./geometries/Geometry_${ geometry.id }.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${ transform }
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${ material.id }>
}

`;

    }

    function buildMatrix( matrix ) {

    	const array = matrix.elements;

    	return `( ${ buildMatrixRow( array, 0 ) }, ${ buildMatrixRow( array, 4 ) }, ${ buildMatrixRow( array, 8 ) }, ${ buildMatrixRow( array, 12 ) } )`;

    }

    function buildMatrixRow( array, offset ) {

    	return `(${ array[ offset + 0 ] }, ${ array[ offset + 1 ] }, ${ array[ offset + 2 ] }, ${ array[ offset + 3 ] })`;

    }

    // Mesh

    function buildMeshObject( geometry ) {

    	const mesh = buildMesh( geometry );
    	return `
def "Geometry"
{
${mesh}
}
`;

    }

    function buildMesh( geometry ) {

    	const name = 'Geometry';
    	const attributes = geometry.attributes;
    	const count = attributes.position.count;

    	return `
	def Mesh "${ name }"
	{
		int[] faceVertexCounts = [${ buildMeshVertexCount( geometry ) }]
		int[] faceVertexIndices = [${ buildMeshVertexIndices( geometry ) }]
		normal3f[] normals = [${ buildVector3Array( attributes.normal, count )}] (
			interpolation = "vertex"
		)
		point3f[] points = [${ buildVector3Array( attributes.position, count )}]
${ buildPrimvars( attributes ) }
		uniform token subdivisionScheme = "none"
	}
`;

    }

    function buildMeshVertexCount( geometry ) {

    	const count = geometry.index !== null ? geometry.index.count : geometry.attributes.position.count;

    	return Array( count / 3 ).fill( 3 ).join( ', ' );

    }

    function buildMeshVertexIndices( geometry ) {

    	const index = geometry.index;
    	const array = [];

    	if ( index !== null ) {

    		for ( let i = 0; i < index.count; i ++ ) {

    			array.push( index.getX( i ) );

    		}

    	} else {

    		const length = geometry.attributes.position.count;

    		for ( let i = 0; i < length; i ++ ) {

    			array.push( i );

    		}

    	}

    	return array.join( ', ' );

    }

    function buildVector3Array( attribute, count ) {

    	if ( attribute === undefined ) {

    		console.warn( 'USDZExporter: Normals missing.' );
    		return Array( count ).fill( '(0, 0, 0)' ).join( ', ' );

    	}

    	const array = [];

    	for ( let i = 0; i < attribute.count; i ++ ) {

    		const x = attribute.getX( i );
    		const y = attribute.getY( i );
    		const z = attribute.getZ( i );

    		array.push( `(${ x.toPrecision( PRECISION ) }, ${ y.toPrecision( PRECISION ) }, ${ z.toPrecision( PRECISION ) })` );

    	}

    	return array.join( ', ' );

    }

    function buildVector2Array( attribute ) {

    	const array = [];

    	for ( let i = 0; i < attribute.count; i ++ ) {

    		const x = attribute.getX( i );
    		const y = attribute.getY( i );

    		array.push( `(${ x.toPrecision( PRECISION ) }, ${ 1 - y.toPrecision( PRECISION ) })` );

    	}

    	return array.join( ', ' );

    }

    function buildPrimvars( attributes ) {

    	let string = '';

    	for ( let i = 0; i < 4; i ++ ) {

    		const id = ( i > 0 ? i : '' );
    		const attribute = attributes[ 'uv' + id ];

    		if ( attribute !== undefined ) {

    			string += `
		texCoord2f[] primvars:st${ id } = [${ buildVector2Array( attribute )}] (
			interpolation = "vertex"
		)`;

    		}

    	}

    	return string;

    }

    // Materials

    function buildMaterials( materials, textures, quickLookCompatible = false ) {

    	const array = [];

    	for ( const uuid in materials ) {

    		const material = materials[ uuid ];

    		array.push( buildMaterial( material, textures, quickLookCompatible ) );

    	}

    	return `def "Materials"
{
${ array.join( '' ) }
}

`;

    }

    function buildMaterial( material, textures, quickLookCompatible = false ) {

    	// https://graphics.pixar.com/usd/docs/UsdPreviewSurface-Proposal.html

    	const pad = '			';
    	const inputs = [];
    	const samplers = [];

    	function buildTexture( texture, mapType, color ) {

    		const id = texture.source.id + '_' + texture.flipY;

    		textures[ id ] = texture;

    		const uv = texture.channel > 0 ? 'st' + texture.channel : 'st';

    		const WRAPPINGS = {
    			1000: 'repeat', // RepeatWrapping
    			1001: 'clamp', // ClampToEdgeWrapping
    			1002: 'mirror' // MirroredRepeatWrapping
    		};

    		const repeat = texture.repeat.clone();
    		const offset = texture.offset.clone();
    		const rotation = texture.rotation;

    		// rotation is around the wrong point. after rotation we need to shift offset again so that we're rotating around the right spot
    		const xRotationOffset = Math.sin( rotation );
    		const yRotationOffset = Math.cos( rotation );

    		// texture coordinates start in the opposite corner, need to correct
    		offset.y = 1 - offset.y - repeat.y;

    		// turns out QuickLook is buggy and interprets texture repeat inverted/applies operations in a different order.
    		// Apple Feedback: 	FB10036297 and FB11442287
    		if ( quickLookCompatible ) {

    			// This is NOT correct yet in QuickLook, but comes close for a range of models.
    			// It becomes more incorrect the bigger the offset is

    			offset.x = offset.x / repeat.x;
    			offset.y = offset.y / repeat.y;

    			offset.x += xRotationOffset / repeat.x;
    			offset.y += yRotationOffset - 1;

    		} else {

    			// results match glTF results exactly. verified correct in usdview.
    			offset.x += xRotationOffset * repeat.x;
    			offset.y += ( 1 - yRotationOffset ) * repeat.y;

    		}

    		return `
		def Shader "PrimvarReader_${ mapType }"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${ uv }"
			float2 outputs:result
		}

		def Shader "Transform2d_${ mapType }"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${ material.id }/PrimvarReader_${ mapType }.outputs:result>
			float inputs:rotation = ${ ( rotation * ( 180 / Math.PI ) ).toFixed( PRECISION ) }
			float2 inputs:scale = ${ buildVector2( repeat ) }
			float2 inputs:translation = ${ buildVector2( offset ) }
			float2 outputs:result
		}

		def Shader "Texture_${ texture.id }_${ mapType }"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${ id }.png@
			float2 inputs:st.connect = </Materials/Material_${ material.id }/Transform2d_${ mapType }.outputs:result>
			${ color !== undefined ? 'float4 inputs:scale = ' + buildColor4( color ) : '' }
			token inputs:sourceColorSpace = "${ texture.colorSpace === three.NoColorSpace ? 'raw' : 'sRGB' }"
			token inputs:wrapS = "${ WRAPPINGS[ texture.wrapS ] }"
			token inputs:wrapT = "${ WRAPPINGS[ texture.wrapT ] }"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${ material.transparent || material.alphaTest > 0.0 ? 'float outputs:a' : '' }
		}`;

    	}


    	if ( material.side === three.DoubleSide ) {

    		console.warn( 'THREE.USDZExporter: USDZ does not support double sided materials', material );

    	}

    	if ( material.map !== null ) {

    		inputs.push( `${ pad }color3f inputs:diffuseColor.connect = </Materials/Material_${ material.id }/Texture_${ material.map.id }_diffuse.outputs:rgb>` );

    		if ( material.transparent ) {

    			inputs.push( `${ pad }float inputs:opacity.connect = </Materials/Material_${ material.id }/Texture_${ material.map.id }_diffuse.outputs:a>` );

    		} else if ( material.alphaTest > 0.0 ) {

    			inputs.push( `${ pad }float inputs:opacity.connect = </Materials/Material_${ material.id }/Texture_${ material.map.id }_diffuse.outputs:a>` );
    			inputs.push( `${ pad }float inputs:opacityThreshold = ${material.alphaTest}` );

    		}

    		samplers.push( buildTexture( material.map, 'diffuse', material.color ) );

    	} else {

    		inputs.push( `${ pad }color3f inputs:diffuseColor = ${ buildColor( material.color ) }` );

    	}

    	if ( material.emissiveMap !== null ) {

    		inputs.push( `${ pad }color3f inputs:emissiveColor.connect = </Materials/Material_${ material.id }/Texture_${ material.emissiveMap.id }_emissive.outputs:rgb>` );

    		samplers.push( buildTexture( material.emissiveMap, 'emissive' ) );

    	} else if ( material.emissive.getHex() > 0 ) {

    		inputs.push( `${ pad }color3f inputs:emissiveColor = ${ buildColor( material.emissive ) }` );

    	}

    	if ( material.normalMap !== null ) {

    		inputs.push( `${ pad }normal3f inputs:normal.connect = </Materials/Material_${ material.id }/Texture_${ material.normalMap.id }_normal.outputs:rgb>` );

    		samplers.push( buildTexture( material.normalMap, 'normal' ) );

    	}

    	if ( material.aoMap !== null ) {

    		inputs.push( `${ pad }float inputs:occlusion.connect = </Materials/Material_${ material.id }/Texture_${ material.aoMap.id }_occlusion.outputs:r>` );

    		samplers.push( buildTexture( material.aoMap, 'occlusion' ) );

    	}

    	if ( material.roughnessMap !== null && material.roughness === 1 ) {

    		inputs.push( `${ pad }float inputs:roughness.connect = </Materials/Material_${ material.id }/Texture_${ material.roughnessMap.id }_roughness.outputs:g>` );

    		samplers.push( buildTexture( material.roughnessMap, 'roughness' ) );

    	} else {

    		inputs.push( `${ pad }float inputs:roughness = ${ material.roughness }` );

    	}

    	if ( material.metalnessMap !== null && material.metalness === 1 ) {

    		inputs.push( `${ pad }float inputs:metallic.connect = </Materials/Material_${ material.id }/Texture_${ material.metalnessMap.id }_metallic.outputs:b>` );

    		samplers.push( buildTexture( material.metalnessMap, 'metallic' ) );

    	} else {

    		inputs.push( `${ pad }float inputs:metallic = ${ material.metalness }` );

    	}

    	if ( material.alphaMap !== null ) {

    		inputs.push( `${pad}float inputs:opacity.connect = </Materials/Material_${material.id}/Texture_${material.alphaMap.id}_opacity.outputs:r>` );
    		inputs.push( `${pad}float inputs:opacityThreshold = 0.0001` );

    		samplers.push( buildTexture( material.alphaMap, 'opacity' ) );

    	} else {

    		inputs.push( `${pad}float inputs:opacity = ${material.opacity}` );

    	}

    	if ( material.isMeshPhysicalMaterial ) {

    		inputs.push( `${ pad }float inputs:clearcoat = ${ material.clearcoat }` );
    		inputs.push( `${ pad }float inputs:clearcoatRoughness = ${ material.clearcoatRoughness }` );
    		inputs.push( `${ pad }float inputs:ior = ${ material.ior }` );

    	}

    	return `
	def Material "Material_${ material.id }"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${ inputs.join( '\n' ) }
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${ material.id }/PreviewSurface.outputs:surface>

${ samplers.join( '\n' ) }

	}
`;

    }

    function buildColor( color ) {

    	return `(${ color.r }, ${ color.g }, ${ color.b })`;

    }

    function buildColor4( color ) {

    	return `(${ color.r }, ${ color.g }, ${ color.b }, 1.0)`;

    }

    function buildVector2( vector ) {

    	return `(${ vector.x }, ${ vector.y })`;

    }


    function buildCamera( camera ) {

    	const name = camera.name ? camera.name : 'Camera_' + camera.id;

    	const transform = buildMatrix( camera.matrixWorld );

    	if ( camera.matrixWorld.determinant() < 0 ) {

    		console.warn( 'THREE.USDZExporter: USDZ does not support negative scales', camera );

    	}

    	if ( camera.isOrthographicCamera ) {

    		return `def Camera "${name}"
		{
			matrix4d xformOp:transform = ${ transform }
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${ camera.near.toPrecision( PRECISION ) }, ${ camera.far.toPrecision( PRECISION ) })
			float horizontalAperture = ${ ( ( Math.abs( camera.left ) + Math.abs( camera.right ) ) * 10 ).toPrecision( PRECISION ) }
			float verticalAperture = ${ ( ( Math.abs( camera.top ) + Math.abs( camera.bottom ) ) * 10 ).toPrecision( PRECISION ) }
			token projection = "orthographic"
		}
	
	`;

    	} else {

    		return `def Camera "${name}"
		{
			matrix4d xformOp:transform = ${ transform }
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${ camera.near.toPrecision( PRECISION ) }, ${ camera.far.toPrecision( PRECISION ) })
			float focalLength = ${ camera.getFocalLength().toPrecision( PRECISION ) }
			float focusDistance = ${ camera.focus.toPrecision( PRECISION ) }
			float horizontalAperture = ${ camera.getFilmWidth().toPrecision( PRECISION ) }
			token projection = "perspective"
			float verticalAperture = ${ camera.getFilmHeight().toPrecision( PRECISION ) }
		}
	
	`;

    	}

    }

    const enumerationDeserializer = (allowedNames) => (valueString) => {
        try {
            const expressions = parseExpressions(valueString);
            const names = (expressions.length ? expressions[0].terms : [])
                .filter((valueNode) => valueNode && valueNode.type === 'ident')
                .map(valueNode => valueNode.value)
                .filter(name => allowedNames.indexOf(name) > -1);
            return new Set(names);
        }
        catch (_error) {
        }
        return new Set();
    };

    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    let isWebXRBlocked = false;
    let isSceneViewerBlocked = false;
    const noArViewerSigil = '#model-viewer-no-ar-fallback';
    const deserializeARModes = enumerationDeserializer(['quick-look', 'scene-viewer', 'webxr', 'none']);
    const DEFAULT_AR_MODES = 'webxr scene-viewer quick-look';
    const ARMode = {
        QUICK_LOOK: 'quick-look',
        SCENE_VIEWER: 'scene-viewer',
        WEBXR: 'webxr',
        NONE: 'none'
    };
    const $arButtonContainer = Symbol('arButtonContainer');
    const $enterARWithWebXR = Symbol('enterARWithWebXR');
    const $openSceneViewer = Symbol('openSceneViewer');
    const $openIOSARQuickLook = Symbol('openIOSARQuickLook');
    const $canActivateAR = Symbol('canActivateAR');
    const $arMode = Symbol('arMode');
    const $arModes = Symbol('arModes');
    const $arAnchor = Symbol('arAnchor');
    const $preload = Symbol('preload');
    const $onARButtonContainerClick = Symbol('onARButtonContainerClick');
    const $onARStatus = Symbol('onARStatus');
    const $onARTracking = Symbol('onARTracking');
    const $onARTap = Symbol('onARTap');
    const $selectARMode = Symbol('selectARMode');
    const $triggerLoad = Symbol('triggerLoad');
    const ARMixin = (ModelViewerElement) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        class ARModelViewerElement extends ModelViewerElement {
            constructor() {
                super(...arguments);
                this.ar = false;
                this.arScale = 'auto';
                this.arPlacement = 'floor';
                this.arModes = DEFAULT_AR_MODES;
                this.iosSrc = null;
                this.xrEnvironment = false;
                this[_a] = false;
                this[_b] = this.shadowRoot.querySelector('.ar-button');
                this[_c] = document.createElement('a');
                this[_d] = new Set();
                this[_e] = ARMode.NONE;
                this[_f] = false;
                this[_g] = (event) => {
                    event.preventDefault();
                    this.activateAR();
                };
                this[_h] = ({ status }) => {
                    if (status === ARStatus.NOT_PRESENTING ||
                        this[$renderer].arRenderer.presentedScene === this[$scene]) {
                        this.setAttribute('ar-status', status);
                        this.dispatchEvent(new CustomEvent('ar-status', { detail: { status } }));
                        if (status === ARStatus.NOT_PRESENTING) {
                            this.removeAttribute('ar-tracking');
                        }
                        else if (status === ARStatus.SESSION_STARTED) {
                            this.setAttribute('ar-tracking', ARTracking.TRACKING);
                        }
                    }
                };
                this[_j] = ({ status }) => {
                    this.setAttribute('ar-tracking', status);
                    this.dispatchEvent(new CustomEvent('ar-tracking', { detail: { status } }));
                };
                this[_k] = (event) => {
                    if (event.data == '_apple_ar_quicklook_button_tapped') {
                        this.dispatchEvent(new CustomEvent('quick-look-button-tapped'));
                    }
                };
            }
            get canActivateAR() {
                return this[$arMode] !== ARMode.NONE;
            }
            connectedCallback() {
                super.connectedCallback();
                this[$renderer].arRenderer.addEventListener('status', this[$onARStatus]);
                this.setAttribute('ar-status', ARStatus.NOT_PRESENTING);
                this[$renderer].arRenderer.addEventListener('tracking', this[$onARTracking]);
                this[$arAnchor].addEventListener('message', this[$onARTap]);
            }
            disconnectedCallback() {
                super.disconnectedCallback();
                this[$renderer].arRenderer.removeEventListener('status', this[$onARStatus]);
                this[$renderer].arRenderer.removeEventListener('tracking', this[$onARTracking]);
                this[$arAnchor].removeEventListener('message', this[$onARTap]);
            }
            update(changedProperties) {
                super.update(changedProperties);
                if (changedProperties.has('arScale')) {
                    this[$scene].canScale = this.arScale !== 'fixed';
                }
                if (changedProperties.has('arPlacement')) {
                    this[$scene].updateShadow();
                    this[$needsRender]();
                }
                if (changedProperties.has('arModes')) {
                    this[$arModes] = deserializeARModes(this.arModes);
                }
                if (changedProperties.has('ar') || changedProperties.has('arModes') ||
                    changedProperties.has('src') || changedProperties.has('iosSrc')) {
                    this[$selectARMode]();
                }
            }
            async activateAR() {
                switch (this[$arMode]) {
                    case ARMode.QUICK_LOOK:
                        await this[$openIOSARQuickLook]();
                        break;
                    case ARMode.WEBXR:
                        await this[$enterARWithWebXR]();
                        break;
                    case ARMode.SCENE_VIEWER:
                        this[$openSceneViewer]();
                        break;
                    default:
                        console.warn('No AR Mode can be activated. This is probably due to missing \
configuration or device capabilities');
                        break;
                }
            }
            async [(_a = $canActivateAR, _b = $arButtonContainer, _c = $arAnchor, _d = $arModes, _e = $arMode, _f = $preload, _g = $onARButtonContainerClick, _h = $onARStatus, _j = $onARTracking, _k = $onARTap, $selectARMode)]() {
                let arMode = ARMode.NONE;
                if (this.ar) {
                    if (this.src != null) {
                        for (const value of this[$arModes]) {
                            if (value === 'webxr' && IS_WEBXR_AR_CANDIDATE && !isWebXRBlocked &&
                                await this[$renderer].arRenderer.supportsPresentation()) {
                                arMode = ARMode.WEBXR;
                                break;
                            }
                            if (value === 'scene-viewer' && IS_SCENEVIEWER_CANDIDATE &&
                                !isSceneViewerBlocked) {
                                arMode = ARMode.SCENE_VIEWER;
                                break;
                            }
                            if (value === 'quick-look' && IS_AR_QUICKLOOK_CANDIDATE) {
                                arMode = ARMode.QUICK_LOOK;
                                break;
                            }
                        }
                    }
                    if (arMode === ARMode.NONE && this.iosSrc != null &&
                        IS_AR_QUICKLOOK_CANDIDATE) {
                        arMode = ARMode.QUICK_LOOK;
                    }
                }
                if (arMode !== ARMode.NONE) {
                    this[$arButtonContainer].classList.add('enabled');
                    this[$arButtonContainer].addEventListener('click', this[$onARButtonContainerClick]);
                }
                else if (this[$arButtonContainer].classList.contains('enabled')) {
                    this[$arButtonContainer].removeEventListener('click', this[$onARButtonContainerClick]);
                    this[$arButtonContainer].classList.remove('enabled');
                    const status = ARStatus.FAILED;
                    this.setAttribute('ar-status', status);
                    this.dispatchEvent(new CustomEvent('ar-status', { detail: { status } }));
                }
                this[$arMode] = arMode;
            }
            async [$enterARWithWebXR]() {
                console.log('Attempting to present in AR with WebXR...');
                await this[$triggerLoad]();
                try {
                    this[$arButtonContainer].removeEventListener('click', this[$onARButtonContainerClick]);
                    const { arRenderer } = this[$renderer];
                    arRenderer.placeOnWall = this.arPlacement === 'wall';
                    await arRenderer.present(this[$scene], this.xrEnvironment);
                }
                catch (error) {
                    console.warn('Error while trying to present in AR with WebXR');
                    console.error(error);
                    await this[$renderer].arRenderer.stopPresenting();
                    isWebXRBlocked = true;
                    console.warn('Falling back to next ar-mode');
                    await this[$selectARMode]();
                    this.activateAR();
                }
                finally {
                    this[$selectARMode]();
                }
            }
            async [$triggerLoad]() {
                if (!this.loaded) {
                    this[$preload] = true;
                    this[$updateSource]();
                    await waitForEvent(this, 'load');
                    this[$preload] = false;
                }
            }
            [$shouldAttemptPreload]() {
                return super[$shouldAttemptPreload]() || this[$preload];
            }
            [$openSceneViewer]() {
                const location = self.location.toString();
                const locationUrl = new URL(location);
                const modelUrl = new URL(this.src, location);
                if (modelUrl.hash)
                    modelUrl.hash = '';
                const params = new URLSearchParams(modelUrl.search);
                locationUrl.hash = noArViewerSigil;
                params.set('mode', 'ar_preferred');
                if (!params.has('disable_occlusion')) {
                    params.set('disable_occlusion', 'true');
                }
                if (this.arScale === 'fixed') {
                    params.set('resizable', 'false');
                }
                if (this.arPlacement === 'wall') {
                    params.set('enable_vertical_placement', 'true');
                }
                if (params.has('sound')) {
                    const soundUrl = new URL(params.get('sound'), location);
                    params.set('sound', soundUrl.toString());
                }
                if (params.has('link')) {
                    const linkUrl = new URL(params.get('link'), location);
                    params.set('link', linkUrl.toString());
                }
                const intent = `intent://arvr.google.com/scene-viewer/1.0?${params.toString() + '&file=' +
                encodeURIComponent(modelUrl
                    .toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(locationUrl.toString())};end;`;
                const undoHashChange = () => {
                    if (self.location.hash === noArViewerSigil) {
                        isSceneViewerBlocked = true;
                        self.history.back();
                        console.warn('Error while trying to present in AR with Scene Viewer');
                        console.warn('Falling back to next ar-mode');
                        this[$selectARMode]();
                    }
                };
                self.addEventListener('hashchange', undoHashChange, { once: true });
                this[$arAnchor].setAttribute('href', intent);
                console.log('Attempting to present in AR with Scene Viewer...');
                this[$arAnchor].click();
            }
            async [$openIOSARQuickLook]() {
                const generateUsdz = !this.iosSrc;
                this[$arButtonContainer].classList.remove('enabled');
                const objectURL = generateUsdz ? await this.prepareUSDZ() : this.iosSrc;
                const modelUrl = new URL(objectURL, self.location.toString());
                if (generateUsdz) {
                    const location = self.location.toString();
                    const locationUrl = new URL(location);
                    const srcUrl = new URL(this.src, locationUrl);
                    if (srcUrl.hash) {
                        modelUrl.hash = srcUrl.hash;
                    }
                }
                if (this.arScale === 'fixed') {
                    if (modelUrl.hash) {
                        modelUrl.hash += '&';
                    }
                    modelUrl.hash += 'allowsContentScaling=0';
                }
                const anchor = this[$arAnchor];
                anchor.setAttribute('rel', 'ar');
                const img = document.createElement('img');
                anchor.appendChild(img);
                anchor.setAttribute('href', modelUrl.toString());
                if (generateUsdz) {
                    anchor.setAttribute('download', 'model.usdz');
                }
                anchor.style.display = 'none';
                if (!anchor.isConnected)
                    this.shadowRoot.appendChild(anchor);
                console.log('Attempting to present in AR with Quick Look...');
                anchor.click();
                anchor.removeChild(img);
                if (generateUsdz) {
                    URL.revokeObjectURL(objectURL);
                }
                this[$arButtonContainer].classList.add('enabled');
            }
            async prepareUSDZ() {
                const updateSourceProgress = this[$progressTracker].beginActivity('usdz-conversion');
                await this[$triggerLoad]();
                const { model, shadow } = this[$scene];
                if (model == null) {
                    return '';
                }
                let visible = false;
                if (shadow != null) {
                    visible = shadow.visible;
                    shadow.visible = false;
                }
                updateSourceProgress(0.2);
                const exporter = new USDZExporter();
                const arraybuffer = await exporter.parse(model);
                const blob = new Blob([arraybuffer], {
                    type: 'model/vnd.usdz+zip',
                });
                const url = URL.createObjectURL(blob);
                updateSourceProgress(1);
                if (shadow != null) {
                    shadow.visible = visible;
                }
                return url;
            }
        }
        __decorate$2([
            n$8({ type: Boolean, attribute: 'ar' })
        ], ARModelViewerElement.prototype, "ar", void 0);
        __decorate$2([
            n$8({ type: String, attribute: 'ar-scale' })
        ], ARModelViewerElement.prototype, "arScale", void 0);
        __decorate$2([
            n$8({ type: String, attribute: 'ar-placement' })
        ], ARModelViewerElement.prototype, "arPlacement", void 0);
        __decorate$2([
            n$8({ type: String, attribute: 'ar-modes' })
        ], ARModelViewerElement.prototype, "arModes", void 0);
        __decorate$2([
            n$8({ type: String, attribute: 'ios-src' })
        ], ARModelViewerElement.prototype, "iosSrc", void 0);
        __decorate$2([
            n$8({ type: Boolean, attribute: 'xr-environment' })
        ], ARModelViewerElement.prototype, "xrEnvironment", void 0);
        return ARModelViewerElement;
    };

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const PROGRESS_BAR_UPDATE_THRESHOLD = 100;
    const DEFAULT_DRACO_DECODER_LOCATION = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/';
    const DEFAULT_KTX2_TRANSCODER_LOCATION = 'https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/';
    const DEFAULT_LOTTIE_LOADER_LOCATION = 'https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js';
    const RevealStrategy = {
        AUTO: 'auto',
        MANUAL: 'manual'
    };
    const LoadingStrategy = {
        AUTO: 'auto',
        LAZY: 'lazy',
        EAGER: 'eager'
    };
    const $defaultProgressBarElement = Symbol('defaultProgressBarElement');
    const $posterContainerElement = Symbol('posterContainerElement');
    const $defaultPosterElement = Symbol('defaultPosterElement');
    const $shouldDismissPoster = Symbol('shouldDismissPoster');
    const $hidePoster = Symbol('hidePoster');
    const $modelIsRevealed = Symbol('modelIsRevealed');
    const $updateProgressBar = Symbol('updateProgressBar');
    const $ariaLabelCallToAction = Symbol('ariaLabelCallToAction');
    const $onProgress = Symbol('onProgress');
    const LoadingMixin = (ModelViewerElement) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        class LoadingModelViewerElement extends ModelViewerElement {
            constructor(...args) {
                super(...args);
                this.poster = null;
                this.reveal = RevealStrategy.AUTO;
                this.loading = LoadingStrategy.AUTO;
                this[_a] = false;
                this[_b] = false;
                this[_c] = this.shadowRoot.querySelector('.slot.poster');
                this[_d] = this.shadowRoot.querySelector('#default-poster');
                this[_e] = this.shadowRoot.querySelector('#default-progress-bar > .bar');
                this[_f] = this[$defaultPosterElement].getAttribute('aria-label');
                this[_g] = throttle((progress) => {
                    const parentNode = this[$defaultProgressBarElement].parentNode;
                    requestAnimationFrame(() => {
                        this[$defaultProgressBarElement].style.transform =
                            `scaleX(${progress})`;
                        if (progress === 0) {
                            parentNode.removeChild(this[$defaultProgressBarElement]);
                            parentNode.appendChild(this[$defaultProgressBarElement]);
                        }
                        this[$defaultProgressBarElement].classList.toggle('hide', progress === 1.0);
                    });
                }, PROGRESS_BAR_UPDATE_THRESHOLD);
                this[_h] = (event) => {
                    const progress = event.detail.totalProgress;
                    if (progress === 1.0) {
                        this[$updateProgressBar].flush();
                        if (this.loaded &&
                            (this[$shouldDismissPoster] ||
                                this.reveal === RevealStrategy.AUTO)) {
                            this[$hidePoster]();
                        }
                    }
                    this[$updateProgressBar](progress);
                    this.dispatchEvent(new CustomEvent('progress', { detail: { totalProgress: progress } }));
                };
                const ModelViewerElement = self.ModelViewerElement || {};
                const dracoDecoderLocation = ModelViewerElement.dracoDecoderLocation ||
                    DEFAULT_DRACO_DECODER_LOCATION;
                CachingGLTFLoader.setDRACODecoderLocation(dracoDecoderLocation);
                const ktx2TranscoderLocation = ModelViewerElement.ktx2TranscoderLocation ||
                    DEFAULT_KTX2_TRANSCODER_LOCATION;
                CachingGLTFLoader.setKTX2TranscoderLocation(ktx2TranscoderLocation);
                if (ModelViewerElement.meshoptDecoderLocation) {
                    CachingGLTFLoader.setMeshoptDecoderLocation(ModelViewerElement.meshoptDecoderLocation);
                }
                const lottieLoaderLocation = ModelViewerElement.lottieLoaderLocation ||
                    DEFAULT_LOTTIE_LOADER_LOCATION;
                Renderer.singleton.textureUtils.lottieLoaderUrl = lottieLoaderLocation;
            }
            static set dracoDecoderLocation(value) {
                CachingGLTFLoader.setDRACODecoderLocation(value);
            }
            static get dracoDecoderLocation() {
                return CachingGLTFLoader.getDRACODecoderLocation();
            }
            static set ktx2TranscoderLocation(value) {
                CachingGLTFLoader.setKTX2TranscoderLocation(value);
            }
            static get ktx2TranscoderLocation() {
                return CachingGLTFLoader.getKTX2TranscoderLocation();
            }
            static set meshoptDecoderLocation(value) {
                CachingGLTFLoader.setMeshoptDecoderLocation(value);
            }
            static get meshoptDecoderLocation() {
                return CachingGLTFLoader.getMeshoptDecoderLocation();
            }
            static set lottieLoaderLocation(value) {
                Renderer.singleton.textureUtils.lottieLoaderUrl = value;
            }
            static get lottieLoaderLocation() {
                return Renderer.singleton.textureUtils.lottieLoaderUrl;
            }
            static mapURLs(callback) {
                Renderer.singleton.loader[$loader].manager.setURLModifier(callback);
            }
            dismissPoster() {
                if (this.loaded) {
                    this[$hidePoster]();
                }
                else {
                    this[$shouldDismissPoster] = true;
                    this[$updateSource]();
                }
            }
            showPoster() {
                const posterContainerElement = this[$posterContainerElement];
                if (posterContainerElement.classList.contains('show')) {
                    return;
                }
                posterContainerElement.classList.add('show');
                this[$userInputElement].classList.remove('show');
                const defaultPosterElement = this[$defaultPosterElement];
                defaultPosterElement.removeAttribute('tabindex');
                defaultPosterElement.removeAttribute('aria-hidden');
                const oldVisibility = this.modelIsVisible;
                this[$modelIsRevealed] = false;
                this[$announceModelVisibility](oldVisibility);
            }
            getDimensions() {
                return toVector3D(this[$scene].size);
            }
            getBoundingBoxCenter() {
                return toVector3D(this[$scene].boundingBox.getCenter(new three.Vector3()));
            }
            connectedCallback() {
                super.connectedCallback();
                if (!this.loaded) {
                    this.showPoster();
                }
                this[$progressTracker].addEventListener('progress', this[$onProgress]);
            }
            disconnectedCallback() {
                super.disconnectedCallback();
                this[$progressTracker].removeEventListener('progress', this[$onProgress]);
            }
            async updated(changedProperties) {
                super.updated(changedProperties);
                if (changedProperties.has('poster') && this.poster != null) {
                    this[$defaultPosterElement].style.backgroundImage =
                        `url(${this.poster})`;
                }
                if (changedProperties.has('alt')) {
                    this[$defaultPosterElement].setAttribute('aria-label', this[$altDefaulted]);
                }
                if (changedProperties.has('reveal') || changedProperties.has('loading')) {
                    this[$updateSource]();
                }
            }
            [(_a = $modelIsRevealed, _b = $shouldDismissPoster, _c = $posterContainerElement, _d = $defaultPosterElement, _e = $defaultProgressBarElement, _f = $ariaLabelCallToAction, _g = $updateProgressBar, _h = $onProgress, $shouldAttemptPreload)]() {
                return !!this.src &&
                    (this[$shouldDismissPoster] ||
                        this.loading === LoadingStrategy.EAGER ||
                        (this.reveal === RevealStrategy.AUTO && this[$isElementInViewport]));
            }
            [$hidePoster]() {
                this[$shouldDismissPoster] = false;
                const posterContainerElement = this[$posterContainerElement];
                if (!posterContainerElement.classList.contains('show')) {
                    return;
                }
                posterContainerElement.classList.remove('show');
                this[$userInputElement].classList.add('show');
                const oldVisibility = this.modelIsVisible;
                this[$modelIsRevealed] = true;
                this[$announceModelVisibility](oldVisibility);
                const root = this.getRootNode();
                if (root && root.activeElement === this) {
                    this[$userInputElement].focus();
                }
                const defaultPosterElement = this[$defaultPosterElement];
                defaultPosterElement.setAttribute('aria-hidden', 'true');
                defaultPosterElement.tabIndex = -1;
                this.dispatchEvent(new CustomEvent('poster-dismissed'));
            }
            [$getModelIsVisible]() {
                return super[$getModelIsVisible]() && this[$modelIsRevealed];
            }
        }
        __decorate$1([
            n$8({ type: String })
        ], LoadingModelViewerElement.prototype, "poster", void 0);
        __decorate$1([
            n$8({ type: String })
        ], LoadingModelViewerElement.prototype, "reveal", void 0);
        __decorate$1([
            n$8({ type: String })
        ], LoadingModelViewerElement.prototype, "loading", void 0);
        return LoadingModelViewerElement;
    };

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const DEFAULT_ROTATION_SPEED = Math.PI / 32;
    const AUTO_ROTATE_DELAY_DEFAULT = 3000;
    const rotationRateIntrinsics = {
        basis: [degreesToRadians(numberNode(DEFAULT_ROTATION_SPEED, 'rad'))],
        keywords: { auto: [null] }
    };
    const $autoRotateStartTime = Symbol('autoRotateStartTime');
    const $radiansPerSecond = Symbol('radiansPerSecond');
    const $syncRotationRate = Symbol('syncRotationRate');
    const $onCameraChange = Symbol('onCameraChange');
    const StagingMixin = (ModelViewerElement) => {
        var _a, _b, _c;
        class StagingModelViewerElement extends ModelViewerElement {
            constructor() {
                super(...arguments);
                this.autoRotate = false;
                this.autoRotateDelay = AUTO_ROTATE_DELAY_DEFAULT;
                this.rotationPerSecond = 'auto';
                this[_a] = performance.now();
                this[_b] = 0;
                this[_c] = (event) => {
                    if (!this.autoRotate) {
                        return;
                    }
                    if (event.detail.source === 'user-interaction') {
                        this[$autoRotateStartTime] = performance.now();
                    }
                };
            }
            connectedCallback() {
                super.connectedCallback();
                this.addEventListener('camera-change', this[$onCameraChange]);
                this[$autoRotateStartTime] = performance.now();
            }
            disconnectedCallback() {
                super.disconnectedCallback();
                this.removeEventListener('camera-change', this[$onCameraChange]);
                this[$autoRotateStartTime] = performance.now();
            }
            updated(changedProperties) {
                super.updated(changedProperties);
                if (changedProperties.has('autoRotate')) {
                    this[$autoRotateStartTime] = performance.now();
                }
            }
            [(_a = $autoRotateStartTime, _b = $radiansPerSecond, $syncRotationRate)](style) {
                this[$radiansPerSecond] = style[0];
            }
            [$tick](time, delta) {
                super[$tick](time, delta);
                if (!this.autoRotate || !this[$getModelIsVisible]() ||
                    this[$renderer].isPresenting) {
                    return;
                }
                const rotationDelta = Math.min(delta, time - this[$autoRotateStartTime] - this.autoRotateDelay);
                if (rotationDelta > 0) {
                    this[$scene].yaw = this.turntableRotation +
                        this[$radiansPerSecond] * rotationDelta * 0.001;
                }
            }
            get turntableRotation() {
                return this[$scene].yaw;
            }
            resetTurntableRotation(theta = 0) {
                this[$scene].yaw = theta;
            }
        }
        _c = $onCameraChange;
        __decorate([
            n$8({ type: Boolean, attribute: 'auto-rotate' })
        ], StagingModelViewerElement.prototype, "autoRotate", void 0);
        __decorate([
            n$8({ type: Number, attribute: 'auto-rotate-delay' })
        ], StagingModelViewerElement.prototype, "autoRotateDelay", void 0);
        __decorate([
            style({ intrinsics: rotationRateIntrinsics, updateHandler: $syncRotationRate }),
            n$8({ type: String, attribute: 'rotation-per-second' })
        ], StagingModelViewerElement.prototype, "rotationPerSecond", void 0);
        return StagingModelViewerElement;
    };

    const ModelViewerElement = AnnotationMixin(SceneGraphMixin(StagingMixin(EnvironmentMixin(ControlsMixin(ARMixin(LoadingMixin(AnimationMixin(ModelViewerElementBase))))))));
    customElements.define('model-viewer', ModelViewerElement);

    Object.defineProperty(exports, 'CanvasTexture', {
        enumerable: true,
        get: function () { return three.CanvasTexture; }
    });
    Object.defineProperty(exports, 'FileLoader', {
        enumerable: true,
        get: function () { return three.FileLoader; }
    });
    Object.defineProperty(exports, 'Loader', {
        enumerable: true,
        get: function () { return three.Loader; }
    });
    Object.defineProperty(exports, 'NearestFilter', {
        enumerable: true,
        get: function () { return three.NearestFilter; }
    });
    exports.ModelViewerElement = ModelViewerElement;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=model-viewer-module-umd.js.map
