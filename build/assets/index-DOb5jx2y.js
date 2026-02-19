function Yp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var O1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gp={exports:{}},Ul={},Kp={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),L1=Symbol.for("react.portal"),D1=Symbol.for("react.fragment"),N1=Symbol.for("react.strict_mode"),A1=Symbol.for("react.profiler"),F1=Symbol.for("react.provider"),$1=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),U1=Symbol.for("react.suspense"),W1=Symbol.for("react.memo"),V1=Symbol.for("react.lazy"),Cf=Symbol.iterator;function H1(e){return e===null||typeof e!="object"?null:(e=Cf&&e[Cf]||e["@@iterator"],typeof e=="function"?e:null)}var qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,Zp={};function ji(e,t,n){this.props=e,this.context=t,this.refs=Zp,this.updater=n||qp}ji.prototype.isReactComponent={};ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jp(){}Jp.prototype=ji.prototype;function Qc(e,t,n){this.props=e,this.context=t,this.refs=Zp,this.updater=n||qp}var Yc=Qc.prototype=new Jp;Yc.constructor=Qc;Xp(Yc,ji.prototype);Yc.isPureReactComponent=!0;var Ef=Array.isArray,em=Object.prototype.hasOwnProperty,Gc={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)em.call(t,r)&&!tm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yo,type:e,key:o,ref:a,props:i,_owner:Gc.current}}function Q1(e,t){return{$$typeof:Yo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yo}function Y1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pf=/\/+/g;function _s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y1(""+e.key):t.toString(36)}function Fa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yo:case L1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+_s(a,0):r,Ef(i)?(n="",e!=null&&(n=e.replace(Pf,"$&/")+"/"),Fa(i,t,n,"",function(u){return u})):i!=null&&(Kc(i)&&(i=Q1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ef(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+_s(o,l);a+=Fa(o,t,n,s,i)}else if(s=H1(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+_s(o,l++),a+=Fa(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ca(e,t,n){if(e==null)return e;var r=[],i=0;return Fa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function G1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},$a={transition:null},K1={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:$a,ReactCurrentOwner:Gc};le.Children={map:ca,forEach:function(e,t,n){ca(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ca(e,function(){t++}),t},toArray:function(e){return ca(e,function(t){return t})||[]},only:function(e){if(!Kc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ji;le.Fragment=D1;le.Profiler=A1;le.PureComponent=Qc;le.StrictMode=N1;le.Suspense=U1;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Gc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)em.call(t,s)&&!tm.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Yo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e){return e={$$typeof:$1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:F1,_context:e},e.Consumer=e};le.createElement=nm;le.createFactory=function(e){var t=nm.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:B1,render:e}};le.isValidElement=Kc;le.lazy=function(e){return{$$typeof:V1,_payload:{_status:-1,_result:e},_init:G1}};le.memo=function(e,t){return{$$typeof:W1,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=$a.transition;$a.transition={};try{e()}finally{$a.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return st.current.useCallback(e,t)};le.useContext=function(e){return st.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return st.current.useDeferredValue(e)};le.useEffect=function(e,t){return st.current.useEffect(e,t)};le.useId=function(){return st.current.useId()};le.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return st.current.useMemo(e,t)};le.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};le.useRef=function(e){return st.current.useRef(e)};le.useState=function(e){return st.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return st.current.useTransition()};le.version="18.2.0";Kp.exports=le;var E=Kp.exports;const Xt=Hc(E),q1=Yp({__proto__:null,default:Xt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1=E,Z1=Symbol.for("react.element"),J1=Symbol.for("react.fragment"),ev=Object.prototype.hasOwnProperty,tv=X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nv={key:!0,ref:!0,__self:!0,__source:!0};function rm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ev.call(t,r)&&!nv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z1,type:e,key:o,ref:a,props:i,_owner:tv.current}}Ul.Fragment=J1;Ul.jsx=rm;Ul.jsxs=rm;Gp.exports=Ul;var c=Gp.exports,Mu={},im={exports:{}},Pt={},om={exports:{}},am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,Y){var q=F.length;F.push(Y);e:for(;0<q;){var te=q-1>>>1,ie=F[te];if(0<i(ie,Y))F[te]=Y,F[q]=ie,q=te;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],q=F.pop();if(q!==Y){F[0]=q;e:for(var te=0,ie=F.length,Ve=ie>>>1;te<Ve;){var Me=2*(te+1)-1,$e=F[Me],je=Me+1,qe=F[je];if(0>i($e,q))je<ie&&0>i(qe,$e)?(F[te]=qe,F[je]=q,te=je):(F[te]=$e,F[Me]=q,te=Me);else if(je<ie&&0>i(qe,q))F[te]=qe,F[je]=q,te=je;else break e}}return Y}function i(F,Y){var q=F.sortIndex-Y.sortIndex;return q!==0?q:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,d=null,h=3,v=!1,y=!1,S=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=F)r(u),Y.sortIndex=Y.expirationTime,t(s,Y);else break;Y=n(u)}}function j(F){if(S=!1,g(F),!y)if(n(s)!==null)y=!0,Rt(_);else{var Y=n(u);Y!==null&&we(j,Y.startTime-F)}}function _(F,Y){y=!1,S&&(S=!1,m(z),z=-1),v=!0;var q=h;try{for(g(Y),d=n(s);d!==null&&(!(d.expirationTime>Y)||F&&!X());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var ie=te(d.expirationTime<=Y);Y=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(s)&&r(s),g(Y)}else r(s);d=n(s)}if(d!==null)var Ve=!0;else{var Me=n(u);Me!==null&&we(j,Me.startTime-Y),Ve=!1}return Ve}finally{d=null,h=q,v=!1}}var x=!1,R=null,z=-1,A=5,$=-1;function X(){return!(e.unstable_now()-$<A)}function se(){if(R!==null){var F=e.unstable_now();$=F;var Y=!0;try{Y=R(!0,F)}finally{Y?pe():(x=!1,R=null)}}else x=!1}var pe;if(typeof p=="function")pe=function(){p(se)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,ct=xe.port2;xe.port1.onmessage=se,pe=function(){ct.postMessage(null)}}else pe=function(){C(se,0)};function Rt(F){R=F,x||(x=!0,pe())}function we(F,Y){z=C(function(){F(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Rt(_))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(F){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var q=h;h=Y;try{return F()}finally{h=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=h;h=F;try{return Y()}finally{h=q}},e.unstable_scheduleCallback=function(F,Y,q){var te=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?te+q:te):q=te,F){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=q+ie,F={id:f++,callback:Y,priorityLevel:F,startTime:q,expirationTime:ie,sortIndex:-1},q>te?(F.sortIndex=q,t(u,F),n(s)===null&&F===n(u)&&(S?(m(z),z=-1):S=!0,we(j,q-te))):(F.sortIndex=ie,t(s,F),y||v||(y=!0,Rt(_))),F},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(F){var Y=h;return function(){var q=h;h=Y;try{return F.apply(this,arguments)}finally{h=q}}}})(am);om.exports=am;var rv=om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=E,Et=rv;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,yo={};function Mr(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(yo[e]=t,e=0;e<t.length;e++)sm.add(t[e])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},Rf={};function ov(e){return Tu.call(Rf,e)?!0:Tu.call(_f,e)?!1:iv.test(e)?Rf[e]=!0:(_f[e]=!0,!1)}function av(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lv(e,t,n,r){if(t===null||typeof t>"u"||av(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var qc=/[\-:]([a-z])/g;function Xc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qc,Xc);et[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qc,Xc);et[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qc,Xc);et[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zc(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lv(t,n,i,r)&&(n=null),r||i===null?ov(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pn=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),cm=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),dm=Symbol.for("react.offscreen"),If=Symbol.iterator;function Di(e){return e===null||typeof e!="object"?null:(e=If&&e[If]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,Rs;function qi(e){if(Rs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rs=t&&t[1]||""}return`
`+Rs+e}var Is=!1;function Ms(e,t){if(!e||Is)return"";Is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Is=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qi(e):""}function sv(e){switch(e.tag){case 5:return qi(e.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return e=Ms(e.type,!1),e;case 11:return e=Ms(e.type.render,!1),e;case 1:return e=Ms(e.type,!0),e;default:return""}}function Du(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case Ur:return"Portal";case zu:return"Profiler";case Jc:return"StrictMode";case Ou:return"Suspense";case Lu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cm:return(e.displayName||"Context")+".Consumer";case um:return(e._context.displayName||"Context")+".Provider";case ed:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case td:return t=e.displayName||null,t!==null?t:Du(e.type)||"Memo";case Ln:t=e._payload,e=e._init;try{return Du(e(t))}catch{}}return null}function uv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(t);case 8:return t===Jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cv(e){var t=fm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fa(e){e._valueTracker||(e._valueTracker=cv(e))}function hm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nu(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pm(e,t){t=t.checked,t!=null&&Zc(e,"checked",t,!1)}function Au(e,t){pm(e,t);var n=tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fu(e,t.type,tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fu(e,t,n){(t!=="number"||ol(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xi=Array.isArray;function ti(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $u(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Xi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tr(n)}}function mm(e,t){var n=tr(t.value),r=tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Of(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,vm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){dv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function ym(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function xm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ym(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fv=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(e,t){if(t){if(fv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Wu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function nd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hu=null,ni=null,ri=null;function Lf(e){if(e=qo(e)){if(typeof Hu!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Yl(t),Hu(e.stateNode,e.type,t))}}function wm(e){ni?ri?ri.push(e):ri=[e]:ni=e}function Sm(){if(ni){var e=ni,t=ri;if(ri=ni=null,Lf(e),t)for(e=0;e<t.length;e++)Lf(t[e])}}function km(e,t){return e(t)}function bm(){}var Ts=!1;function jm(e,t,n){if(Ts)return e(t,n);Ts=!0;try{return km(e,t,n)}finally{Ts=!1,(ni!==null||ri!==null)&&(bm(),Sm())}}function wo(e,t){var n=e.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Qu=!1;if(bn)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Qu=!1}function hv(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var io=!1,al=null,ll=!1,Yu=null,pv={onError:function(e){io=!0,al=e}};function mv(e,t,n,r,i,o,a,l,s){io=!1,al=null,hv.apply(pv,arguments)}function gv(e,t,n,r,i,o,a,l,s){if(mv.apply(this,arguments),io){if(io){var u=al;io=!1,al=null}else throw Error(D(198));ll||(ll=!0,Yu=u)}}function Tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Df(e){if(Tr(e)!==e)throw Error(D(188))}function vv(e){var t=e.alternate;if(!t){if(t=Tr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Df(i),e;if(o===r)return Df(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Em(e){return e=vv(e),e!==null?Pm(e):null}function Pm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pm(e);if(t!==null)return t;e=e.sibling}return null}var _m=Et.unstable_scheduleCallback,Nf=Et.unstable_cancelCallback,yv=Et.unstable_shouldYield,xv=Et.unstable_requestPaint,Fe=Et.unstable_now,wv=Et.unstable_getCurrentPriorityLevel,rd=Et.unstable_ImmediatePriority,Rm=Et.unstable_UserBlockingPriority,sl=Et.unstable_NormalPriority,Sv=Et.unstable_LowPriority,Im=Et.unstable_IdlePriority,Wl=null,dn=null;function kv(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:Cv,bv=Math.log,jv=Math.LN2;function Cv(e){return e>>>=0,e===0?32:31-(bv(e)/jv|0)|0}var pa=64,ma=4194304;function Zi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Zi(l):(o&=a,o!==0&&(r=Zi(o)))}else a=n&~i,a!==0?r=Zi(a):o!==0&&(r=Zi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Jt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ev(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Jt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Ev(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Gu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mm(){var e=pa;return pa<<=1,!(pa&4194240)&&(pa=64),e}function zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Jt(t),e[t]=n}function _v(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function id(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ve=0;function Tm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zm,od,Om,Lm,Dm,Ku=!1,ga=[],Vn=null,Hn=null,Qn=null,So=new Map,ko=new Map,Nn=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":So.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function Ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qo(t),t!==null&&od(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Iv(e,t,n,r,i){switch(t){case"focusin":return Vn=Ai(Vn,e,t,n,r,i),!0;case"dragenter":return Hn=Ai(Hn,e,t,n,r,i),!0;case"mouseover":return Qn=Ai(Qn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return So.set(o,Ai(So.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ko.set(o,Ai(ko.get(o)||null,e,t,n,r,i)),!0}return!1}function Nm(e){var t=vr(e.target);if(t!==null){var n=Tr(t);if(n!==null){if(t=n.tag,t===13){if(t=Cm(n),t!==null){e.blockedOn=t,Dm(e.priority,function(){Om(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vu=r,n.target.dispatchEvent(r),Vu=null}else return t=qo(n),t!==null&&od(t),e.blockedOn=n,!1;t.shift()}return!0}function Ff(e,t,n){Ba(e)&&n.delete(t)}function Mv(){Ku=!1,Vn!==null&&Ba(Vn)&&(Vn=null),Hn!==null&&Ba(Hn)&&(Hn=null),Qn!==null&&Ba(Qn)&&(Qn=null),So.forEach(Ff),ko.forEach(Ff)}function Fi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ku||(Ku=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,Mv)))}function bo(e){function t(i){return Fi(i,e)}if(0<ga.length){Fi(ga[0],e);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&Fi(Vn,e),Hn!==null&&Fi(Hn,e),Qn!==null&&Fi(Qn,e),So.forEach(t),ko.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Nm(n),n.blockedOn===null&&Nn.shift()}var ii=Pn.ReactCurrentBatchConfig,cl=!0;function Tv(e,t,n,r){var i=ve,o=ii.transition;ii.transition=null;try{ve=1,ad(e,t,n,r)}finally{ve=i,ii.transition=o}}function zv(e,t,n,r){var i=ve,o=ii.transition;ii.transition=null;try{ve=4,ad(e,t,n,r)}finally{ve=i,ii.transition=o}}function ad(e,t,n,r){if(cl){var i=qu(e,t,n,r);if(i===null)Ws(e,t,r,dl,n),Af(e,r);else if(Iv(i,e,t,n,r))r.stopPropagation();else if(Af(e,r),t&4&&-1<Rv.indexOf(e)){for(;i!==null;){var o=qo(i);if(o!==null&&zm(o),o=qu(e,t,n,r),o===null&&Ws(e,t,r,dl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ws(e,t,r,null,n)}}var dl=null;function qu(e,t,n,r){if(dl=null,e=nd(r),e=vr(e),e!==null)if(t=Tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function Am(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wv()){case rd:return 1;case Rm:return 4;case sl:case Sv:return 16;case Im:return 536870912;default:return 16}default:return 16}}var Fn=null,ld=null,Ua=null;function Fm(){if(Ua)return Ua;var e,t=ld,n=t.length,r,i="value"in Fn?Fn.value:Fn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ua=i.slice(e,1<r?1-r:void 0)}function Wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function $f(){return!1}function _t(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?va:$f,this.isPropagationStopped=$f,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),t}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=_t(Ci),Ko=Oe({},Ci,{view:0,detail:0}),Ov=_t(Ko),Os,Ls,$i,Vl=Oe({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(Os=e.screenX-$i.screenX,Ls=e.screenY-$i.screenY):Ls=Os=0,$i=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),Bf=_t(Vl),Lv=Oe({},Vl,{dataTransfer:0}),Dv=_t(Lv),Nv=Oe({},Ko,{relatedTarget:0}),Ds=_t(Nv),Av=Oe({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=_t(Av),$v=Oe({},Ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=_t($v),Uv=Oe({},Ci,{data:0}),Uf=_t(Uv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hv[e])?!!t[e]:!1}function ud(){return Qv}var Yv=Oe({},Ko,{key:function(e){if(e.key){var t=Wv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(e){return e.type==="keypress"?Wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gv=_t(Yv),Kv=Oe({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=_t(Kv),qv=Oe({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),Xv=_t(qv),Zv=Oe({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=_t(Zv),ey=Oe({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=_t(ey),ny=[9,13,27,32],cd=bn&&"CompositionEvent"in window,oo=null;bn&&"documentMode"in document&&(oo=document.documentMode);var ry=bn&&"TextEvent"in window&&!oo,$m=bn&&(!cd||oo&&8<oo&&11>=oo),Vf=" ",Hf=!1;function Bm(e,t){switch(e){case"keyup":return ny.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function iy(e,t){switch(e){case"compositionend":return Um(t);case"keypress":return t.which!==32?null:(Hf=!0,Vf);case"textInput":return e=t.data,e===Vf&&Hf?null:e;default:return null}}function oy(e,t){if(Vr)return e==="compositionend"||!cd&&Bm(e,t)?(e=Fm(),Ua=ld=Fn=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $m&&t.locale!=="ko"?null:t.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ay[e.type]:t==="textarea"}function Wm(e,t,n,r){wm(r),t=fl(t,"onChange"),0<t.length&&(n=new sd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,jo=null;function ly(e){e0(e,0)}function Hl(e){var t=Yr(e);if(hm(t))return e}function sy(e,t){if(e==="change")return t}var Vm=!1;if(bn){var Ns;if(bn){var As="oninput"in document;if(!As){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),As=typeof Yf.oninput=="function"}Ns=As}else Ns=!1;Vm=Ns&&(!document.documentMode||9<document.documentMode)}function Gf(){ao&&(ao.detachEvent("onpropertychange",Hm),jo=ao=null)}function Hm(e){if(e.propertyName==="value"&&Hl(jo)){var t=[];Wm(t,jo,e,nd(e)),jm(ly,t)}}function uy(e,t,n){e==="focusin"?(Gf(),ao=t,jo=n,ao.attachEvent("onpropertychange",Hm)):e==="focusout"&&Gf()}function cy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(jo)}function dy(e,t){if(e==="click")return Hl(t)}function fy(e,t){if(e==="input"||e==="change")return Hl(t)}function hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:hy;function Co(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tu.call(t,i)||!nn(e[i],t[i]))return!1}return!0}function Kf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qf(e,t){var n=Kf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kf(n)}}function Qm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ym(){for(var e=window,t=ol();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ol(e.document)}return t}function dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function py(e){var t=Ym(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qm(n.ownerDocument.documentElement,n)){if(r!==null&&dd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qf(n,o);var a=qf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var my=bn&&"documentMode"in document&&11>=document.documentMode,Hr=null,Xu=null,lo=null,Zu=!1;function Xf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||Hr==null||Hr!==ol(r)||(r=Hr,"selectionStart"in r&&dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Co(lo,r)||(lo=r,r=fl(Xu,"onSelect"),0<r.length&&(t=new sd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},Fs={},Gm={};bn&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Ql(e){if(Fs[e])return Fs[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gm)return Fs[e]=t[n];return e}var Km=Ql("animationend"),qm=Ql("animationiteration"),Xm=Ql("animationstart"),Zm=Ql("transitionend"),Jm=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(e,t){Jm.set(e,t),Mr(t,[e])}for(var $s=0;$s<Zf.length;$s++){var Bs=Zf[$s],gy=Bs.toLowerCase(),vy=Bs[0].toUpperCase()+Bs.slice(1);rr(gy,"on"+vy)}rr(Km,"onAnimationEnd");rr(qm,"onAnimationIteration");rr(Xm,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Zm,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function Jf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gv(r,t,void 0,e),e.currentTarget=null}function e0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Jf(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Jf(i,l,u),o=s}}}if(ll)throw e=Yu,ll=!1,Yu=null,e}function Ce(e,t){var n=t[rc];n===void 0&&(n=t[rc]=new Set);var r=e+"__bubble";n.has(r)||(t0(t,e,2,!1),n.add(r))}function Us(e,t,n){var r=0;t&&(r|=4),t0(n,e,r,t)}var xa="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[xa]){e[xa]=!0,sm.forEach(function(n){n!=="selectionchange"&&(yy.has(n)||Us(n,!1,e),Us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xa]||(t[xa]=!0,Us("selectionchange",!1,t))}}function t0(e,t,n,r){switch(Am(t)){case 1:var i=Tv;break;case 4:i=zv;break;default:i=ad}n=i.bind(null,t,n,e),i=void 0,!Qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ws(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=vr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}jm(function(){var u=o,f=nd(n),d=[];e:{var h=Jm.get(e);if(h!==void 0){var v=sd,y=e;switch(e){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":v=Gv;break;case"focusin":y="focus",v=Ds;break;case"focusout":y="blur",v=Ds;break;case"beforeblur":case"afterblur":v=Ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Xv;break;case Km:case qm:case Xm:v=Fv;break;case Zm:v=Jv;break;case"scroll":v=Ov;break;case"wheel":v=ty;break;case"copy":case"cut":case"paste":v=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wf}var S=(t&4)!==0,C=!S&&e==="scroll",m=S?h!==null?h+"Capture":null:h;S=[];for(var p=u,g;p!==null;){g=p;var j=g.stateNode;if(g.tag===5&&j!==null&&(g=j,m!==null&&(j=wo(p,m),j!=null&&S.push(Po(p,j,g)))),C)break;p=p.return}0<S.length&&(h=new v(h,y,null,n,f),d.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Vu&&(y=n.relatedTarget||n.fromElement)&&(vr(y)||y[jn]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?vr(y):null,y!==null&&(C=Tr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(S=Bf,j="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Wf,j="onPointerLeave",m="onPointerEnter",p="pointer"),C=v==null?h:Yr(v),g=y==null?h:Yr(y),h=new S(j,p+"leave",v,n,f),h.target=C,h.relatedTarget=g,j=null,vr(f)===u&&(S=new S(m,p+"enter",y,n,f),S.target=g,S.relatedTarget=C,j=S),C=j,v&&y)t:{for(S=v,m=y,p=0,g=S;g;g=Dr(g))p++;for(g=0,j=m;j;j=Dr(j))g++;for(;0<p-g;)S=Dr(S),p--;for(;0<g-p;)m=Dr(m),g--;for(;p--;){if(S===m||m!==null&&S===m.alternate)break t;S=Dr(S),m=Dr(m)}S=null}else S=null;v!==null&&eh(d,h,v,S,!1),y!==null&&C!==null&&eh(d,C,y,S,!0)}}e:{if(h=u?Yr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var _=sy;else if(Qf(h))if(Vm)_=fy;else{_=cy;var x=uy}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=dy);if(_&&(_=_(e,u))){Wm(d,_,n,f);break e}x&&x(e,h,u),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Fu(h,"number",h.value)}switch(x=u?Yr(u):window,e){case"focusin":(Qf(x)||x.contentEditable==="true")&&(Hr=x,Xu=u,lo=null);break;case"focusout":lo=Xu=Hr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Xf(d,n,f);break;case"selectionchange":if(my)break;case"keydown":case"keyup":Xf(d,n,f)}var R;if(cd)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Vr?Bm(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&($m&&n.locale!=="ko"&&(Vr||z!=="onCompositionStart"?z==="onCompositionEnd"&&Vr&&(R=Fm()):(Fn=f,ld="value"in Fn?Fn.value:Fn.textContent,Vr=!0)),x=fl(u,z),0<x.length&&(z=new Uf(z,e,null,n,f),d.push({event:z,listeners:x}),R?z.data=R:(R=Um(n),R!==null&&(z.data=R)))),(R=ry?iy(e,n):oy(e,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(f=new Uf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=R))}e0(d,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wo(e,n),o!=null&&r.unshift(Po(e,o,i)),o=wo(e,t),o!=null&&r.push(Po(e,o,i))),e=e.return}return r}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=wo(n,o),s!=null&&a.unshift(Po(n,s,l))):i||(s=wo(n,o),s!=null&&a.push(Po(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var xy=/\r\n?/g,wy=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(wy,"")}function wa(e,t,n){if(t=th(t),th(e)!==t&&n)throw Error(D(425))}function hl(){}var Ju=null,ec=null;function tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(by)}:nc;function by(e){setTimeout(function(){throw e})}function Vs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),bo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bo(t)}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ei,_o="__reactProps$"+Ei,jn="__reactContainer$"+Ei,rc="__reactEvents$"+Ei,jy="__reactListeners$"+Ei,Cy="__reactHandles$"+Ei;function vr(e){var t=e[cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rh(e);e!==null;){if(n=e[cn])return n;e=rh(e)}return t}e=n,n=e.parentNode}return null}function qo(e){return e=e[cn]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Yl(e){return e[_o]||null}var ic=[],Gr=-1;function ir(e){return{current:e}}function Pe(e){0>Gr||(e.current=ic[Gr],ic[Gr]=null,Gr--)}function be(e,t){Gr++,ic[Gr]=e.current,e.current=t}var nr={},ot=ir(nr),mt=ir(!1),Cr=nr;function ci(e,t){var n=e.type.contextTypes;if(!n)return nr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function gt(e){return e=e.childContextTypes,e!=null}function pl(){Pe(mt),Pe(ot)}function ih(e,t,n){if(ot.current!==nr)throw Error(D(168));be(ot,t),be(mt,n)}function n0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,uv(e)||"Unknown",i));return Oe({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,Cr=ot.current,be(ot,e),be(mt,mt.current),!0}function oh(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=n0(e,t,Cr),r.__reactInternalMemoizedMergedChildContext=e,Pe(mt),Pe(ot),be(ot,e)):Pe(mt),be(mt,n)}var xn=null,Gl=!1,Hs=!1;function r0(e){xn===null?xn=[e]:xn.push(e)}function Ey(e){Gl=!0,r0(e)}function or(){if(!Hs&&xn!==null){Hs=!0;var e=0,t=ve;try{var n=xn;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xn=null,Gl=!1}catch(i){throw xn!==null&&(xn=xn.slice(e+1)),_m(rd,or),i}finally{ve=t,Hs=!1}}return null}var Kr=[],qr=0,gl=null,vl=0,Tt=[],zt=0,Er=null,wn=1,Sn="";function fr(e,t){Kr[qr++]=vl,Kr[qr++]=gl,gl=e,vl=t}function i0(e,t,n){Tt[zt++]=wn,Tt[zt++]=Sn,Tt[zt++]=Er,Er=e;var r=wn;e=Sn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var o=32-Jt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,wn=1<<32-Jt(t)+i|n<<i|r,Sn=o+e}else wn=1<<o|n<<i|r,Sn=e}function fd(e){e.return!==null&&(fr(e,1),i0(e,1,0))}function hd(e){for(;e===gl;)gl=Kr[--qr],Kr[qr]=null,vl=Kr[--qr],Kr[qr]=null;for(;e===Er;)Er=Tt[--zt],Tt[zt]=null,Sn=Tt[--zt],Tt[zt]=null,wn=Tt[--zt],Tt[zt]=null}var Ct=null,bt=null,Ie=!1,Kt=null;function o0(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ah(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,bt=Yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Er!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ct=e,bt=null,!0):!1;default:return!1}}function oc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ac(e){if(Ie){var t=bt;if(t){var n=t;if(!ah(e,t)){if(oc(e))throw Error(D(418));t=Yn(n.nextSibling);var r=Ct;t&&ah(e,t)?o0(r,n):(e.flags=e.flags&-4097|2,Ie=!1,Ct=e)}}else{if(oc(e))throw Error(D(418));e.flags=e.flags&-4097|2,Ie=!1,Ct=e}}}function lh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function Sa(e){if(e!==Ct)return!1;if(!Ie)return lh(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tc(e.type,e.memoizedProps)),t&&(t=bt)){if(oc(e))throw a0(),Error(D(418));for(;t;)o0(e,t),t=Yn(t.nextSibling)}if(lh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){bt=Yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=Ct?Yn(e.stateNode.nextSibling):null;return!0}function a0(){for(var e=bt;e;)e=Yn(e.nextSibling)}function di(){bt=Ct=null,Ie=!1}function pd(e){Kt===null?Kt=[e]:Kt.push(e)}var Py=Pn.ReactCurrentBatchConfig;function Qt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var yl=ir(null),xl=null,Xr=null,md=null;function gd(){md=Xr=xl=null}function vd(e){var t=yl.current;Pe(yl),e._currentValue=t}function lc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oi(e,t){xl=e,md=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pt=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(md!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(xl===null)throw Error(D(308));Xr=e,xl.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var yr=null;function yd(e){yr===null?yr=[e]:yr.push(e)}function l0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Cn(e,n)}return i=r.interleaved,i===null?(t.next=t,yd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Cn(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,id(e,n)}}function sh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var i=e.updateQueue;Dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,f=u=s=null,l=o;do{var h=l.lane,v=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,S=l;switch(h=t,v=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=Oe({},d,h);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=d):f=f.next=v,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_r|=a,e.lanes=a,e.memoizedState=d}}function uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var u0=new lm.Component().refs;function sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Kl={isMounted:function(e){return(e=e._reactInternals)?Tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=qn(e),o=kn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(en(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=qn(e),o=kn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(en(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=qn(e),i=kn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&(en(t,e,r,n),Va(t,e,r))}};function ch(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Co(n,r)||!Co(i,o):!0}function c0(e,t,n){var r=!1,i=nr,o=t.contextType;return typeof o=="object"&&o!==null?o=At(o):(i=gt(t)?Cr:ot.current,r=t.contextTypes,o=(r=r!=null)?ci(e,i):nr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function dh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Kl.enqueueReplaceState(t,t.state,null)}function uc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=u0,xd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=At(o):(o=gt(t)?Cr:ot.current,i.context=ci(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(sc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Kl.enqueueReplaceState(i,i.state,null),wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===u0&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fh(e){var t=e._init;return t(e._payload)}function d0(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Xn(m,p),m.index=0,m.sibling=null,m}function o(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,j){return p===null||p.tag!==6?(p=Zs(g,m.mode,j),p.return=m,p):(p=i(p,g),p.return=m,p)}function s(m,p,g,j){var _=g.type;return _===Wr?f(m,p,g.props.children,j,g.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ln&&fh(_)===p.type)?(j=i(p,g.props),j.ref=Bi(m,p,g),j.return=m,j):(j=qa(g.type,g.key,g.props,null,m.mode,j),j.ref=Bi(m,p,g),j.return=m,j)}function u(m,p,g,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Js(g,m.mode,j),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function f(m,p,g,j,_){return p===null||p.tag!==7?(p=br(g,m.mode,j,_),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Zs(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case da:return g=qa(p.type,p.key,p.props,null,m.mode,g),g.ref=Bi(m,null,p),g.return=m,g;case Ur:return p=Js(p,m.mode,g),p.return=m,p;case Ln:var j=p._init;return d(m,j(p._payload),g)}if(Xi(p)||Di(p))return p=br(p,m.mode,g,null),p.return=m,p;ka(m,p)}return null}function h(m,p,g,j){var _=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:l(m,p,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case da:return g.key===_?s(m,p,g,j):null;case Ur:return g.key===_?u(m,p,g,j):null;case Ln:return _=g._init,h(m,p,_(g._payload),j)}if(Xi(g)||Di(g))return _!==null?null:f(m,p,g,j,null);ka(m,g)}return null}function v(m,p,g,j,_){if(typeof j=="string"&&j!==""||typeof j=="number")return m=m.get(g)||null,l(p,m,""+j,_);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case da:return m=m.get(j.key===null?g:j.key)||null,s(p,m,j,_);case Ur:return m=m.get(j.key===null?g:j.key)||null,u(p,m,j,_);case Ln:var x=j._init;return v(m,p,g,x(j._payload),_)}if(Xi(j)||Di(j))return m=m.get(g)||null,f(p,m,j,_,null);ka(p,j)}return null}function y(m,p,g,j){for(var _=null,x=null,R=p,z=p=0,A=null;R!==null&&z<g.length;z++){R.index>z?(A=R,R=null):A=R.sibling;var $=h(m,R,g[z],j);if($===null){R===null&&(R=A);break}e&&R&&$.alternate===null&&t(m,R),p=o($,p,z),x===null?_=$:x.sibling=$,x=$,R=A}if(z===g.length)return n(m,R),Ie&&fr(m,z),_;if(R===null){for(;z<g.length;z++)R=d(m,g[z],j),R!==null&&(p=o(R,p,z),x===null?_=R:x.sibling=R,x=R);return Ie&&fr(m,z),_}for(R=r(m,R);z<g.length;z++)A=v(R,m,z,g[z],j),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?z:A.key),p=o(A,p,z),x===null?_=A:x.sibling=A,x=A);return e&&R.forEach(function(X){return t(m,X)}),Ie&&fr(m,z),_}function S(m,p,g,j){var _=Di(g);if(typeof _!="function")throw Error(D(150));if(g=_.call(g),g==null)throw Error(D(151));for(var x=_=null,R=p,z=p=0,A=null,$=g.next();R!==null&&!$.done;z++,$=g.next()){R.index>z?(A=R,R=null):A=R.sibling;var X=h(m,R,$.value,j);if(X===null){R===null&&(R=A);break}e&&R&&X.alternate===null&&t(m,R),p=o(X,p,z),x===null?_=X:x.sibling=X,x=X,R=A}if($.done)return n(m,R),Ie&&fr(m,z),_;if(R===null){for(;!$.done;z++,$=g.next())$=d(m,$.value,j),$!==null&&(p=o($,p,z),x===null?_=$:x.sibling=$,x=$);return Ie&&fr(m,z),_}for(R=r(m,R);!$.done;z++,$=g.next())$=v(R,m,z,$.value,j),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?z:$.key),p=o($,p,z),x===null?_=$:x.sibling=$,x=$);return e&&R.forEach(function(se){return t(m,se)}),Ie&&fr(m,z),_}function C(m,p,g,j){if(typeof g=="object"&&g!==null&&g.type===Wr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case da:e:{for(var _=g.key,x=p;x!==null;){if(x.key===_){if(_=g.type,_===Wr){if(x.tag===7){n(m,x.sibling),p=i(x,g.props.children),p.return=m,m=p;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ln&&fh(_)===x.type){n(m,x.sibling),p=i(x,g.props),p.ref=Bi(m,x,g),p.return=m,m=p;break e}n(m,x);break}else t(m,x);x=x.sibling}g.type===Wr?(p=br(g.props.children,m.mode,j,g.key),p.return=m,m=p):(j=qa(g.type,g.key,g.props,null,m.mode,j),j.ref=Bi(m,p,g),j.return=m,m=j)}return a(m);case Ur:e:{for(x=g.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Js(g,m.mode,j),p.return=m,m=p}return a(m);case Ln:return x=g._init,C(m,p,x(g._payload),j)}if(Xi(g))return y(m,p,g,j);if(Di(g))return S(m,p,g,j);ka(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Zs(g,m.mode,j),p.return=m,m=p),a(m)):n(m,p)}return C}var fi=d0(!0),f0=d0(!1),Xo={},fn=ir(Xo),Ro=ir(Xo),Io=ir(Xo);function xr(e){if(e===Xo)throw Error(D(174));return e}function wd(e,t){switch(be(Io,t),be(Ro,e),be(fn,Xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bu(t,e)}Pe(fn),be(fn,t)}function hi(){Pe(fn),Pe(Ro),Pe(Io)}function h0(e){xr(Io.current);var t=xr(fn.current),n=Bu(t,e.type);t!==n&&(be(Ro,e),be(fn,n))}function Sd(e){Ro.current===e&&(Pe(fn),Pe(Ro))}var Te=ir(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qs=[];function kd(){for(var e=0;e<Qs.length;e++)Qs[e]._workInProgressVersionPrimary=null;Qs.length=0}var Ha=Pn.ReactCurrentDispatcher,Ys=Pn.ReactCurrentBatchConfig,Pr=0,ze=null,He=null,Ye=null,kl=!1,so=!1,Mo=0,_y=0;function tt(){throw Error(D(321))}function bd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function jd(e,t,n,r,i,o){if(Pr=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ha.current=e===null||e.memoizedState===null?Ty:zy,e=n(r,i),so){o=0;do{if(so=!1,Mo=0,25<=o)throw Error(D(301));o+=1,Ye=He=null,t.updateQueue=null,Ha.current=Oy,e=n(r,i)}while(so)}if(Ha.current=bl,t=He!==null&&He.next!==null,Pr=0,Ye=He=ze=null,kl=!1,t)throw Error(D(300));return e}function Cd(){var e=Mo!==0;return Mo=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ze.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ft(){if(He===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ye===null?ze.memoizedState:Ye.next;if(t!==null)Ye=t,He=e;else{if(e===null)throw Error(D(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ye===null?ze.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function To(e,t){return typeof t=="function"?t(e):t}function Gs(e){var t=Ft(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var f=u.lane;if((Pr&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ze.lanes|=f,_r|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,nn(r,t.memoizedState)||(pt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,_r|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ks(e){var t=Ft(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);nn(o,t.memoizedState)||(pt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function p0(){}function m0(e,t){var n=ze,r=Ft(),i=t(),o=!nn(r.memoizedState,i);if(o&&(r.memoizedState=i,pt=!0),r=r.queue,Ed(y0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,zo(9,v0.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(D(349));Pr&30||g0(n,t,i)}return i}function g0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function v0(e,t,n,r){t.value=n,t.getSnapshot=r,x0(t)&&w0(e)}function y0(e,t,n){return n(function(){x0(t)&&w0(e)})}function x0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function w0(e){var t=Cn(e,1);t!==null&&en(t,e,1,-1)}function hh(e){var t=ln();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=My.bind(null,ze,e),[t.memoizedState,e]}function zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function S0(){return Ft().memoizedState}function Qa(e,t,n,r){var i=ln();ze.flags|=e,i.memoizedState=zo(1|t,n,void 0,r===void 0?null:r)}function ql(e,t,n,r){var i=Ft();r=r===void 0?null:r;var o=void 0;if(He!==null){var a=He.memoizedState;if(o=a.destroy,r!==null&&bd(r,a.deps)){i.memoizedState=zo(t,n,o,r);return}}ze.flags|=e,i.memoizedState=zo(1|t,n,o,r)}function ph(e,t){return Qa(8390656,8,e,t)}function Ed(e,t){return ql(2048,8,e,t)}function k0(e,t){return ql(4,2,e,t)}function b0(e,t){return ql(4,4,e,t)}function j0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function C0(e,t,n){return n=n!=null?n.concat([e]):null,ql(4,4,j0.bind(null,t,e),n)}function Pd(){}function E0(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function P0(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _0(e,t,n){return Pr&21?(nn(n,t)||(n=Mm(),ze.lanes|=n,_r|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=n)}function Ry(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=Ys.transition;Ys.transition={};try{e(!1),t()}finally{ve=n,Ys.transition=r}}function R0(){return Ft().memoizedState}function Iy(e,t,n){var r=qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I0(e))M0(t,n);else if(n=l0(e,t,n,r),n!==null){var i=lt();en(n,e,r,i),T0(n,t,r)}}function My(e,t,n){var r=qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I0(e))M0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,a)){var s=t.interleaved;s===null?(i.next=i,yd(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=l0(e,t,i,r),n!==null&&(i=lt(),en(n,e,r,i),T0(n,t,r))}}function I0(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function M0(e,t){so=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function T0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,id(e,n)}}var bl={readContext:At,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Ty={readContext:At,useCallback:function(e,t){return ln().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4194308,4,j0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qa(4,2,e,t)},useMemo:function(e,t){var n=ln();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ln();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Iy.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=ln();return e={current:e},t.memoizedState=e},useState:hh,useDebugValue:Pd,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=hh(!1),t=e[0];return e=Ry.bind(null,e[1]),ln().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ze,i=ln();if(Ie){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Ke===null)throw Error(D(349));Pr&30||g0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ph(y0.bind(null,r,o,e),[e]),r.flags|=2048,zo(9,v0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ln(),t=Ke.identifierPrefix;if(Ie){var n=Sn,r=wn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_y++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zy={readContext:At,useCallback:E0,useContext:At,useEffect:Ed,useImperativeHandle:C0,useInsertionEffect:k0,useLayoutEffect:b0,useMemo:P0,useReducer:Gs,useRef:S0,useState:function(){return Gs(To)},useDebugValue:Pd,useDeferredValue:function(e){var t=Ft();return _0(t,He.memoizedState,e)},useTransition:function(){var e=Gs(To)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:m0,useId:R0,unstable_isNewReconciler:!1},Oy={readContext:At,useCallback:E0,useContext:At,useEffect:Ed,useImperativeHandle:C0,useInsertionEffect:k0,useLayoutEffect:b0,useMemo:P0,useReducer:Ks,useRef:S0,useState:function(){return Ks(To)},useDebugValue:Pd,useDeferredValue:function(e){var t=Ft();return He===null?t.memoizedState=e:_0(t,He.memoizedState,e)},useTransition:function(){var e=Ks(To)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:m0,useId:R0,unstable_isNewReconciler:!1};function pi(e,t){try{var n="",r=t;do n+=sv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ly=typeof WeakMap=="function"?WeakMap:Map;function z0(e,t,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,wc=r),cc(e,t)},n}function O0(e,t,n){n=kn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){cc(e,t),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function mh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ly;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ky.bind(null,e,t,n),t.then(e,e))}function gh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kn(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var Dy=Pn.ReactCurrentOwner,pt=!1;function at(e,t,n,r){t.child=e===null?f0(t,null,n,r):fi(t,e.child,n,r)}function yh(e,t,n,r,i){n=n.render;var o=t.ref;return oi(t,i),r=jd(e,t,n,r,o,i),n=Cd(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Ie&&n&&fd(t),t.flags|=1,at(e,t,r,i),t.child)}function xh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ld(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,L0(e,t,o,r,i)):(e=qa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(a,r)&&e.ref===t.ref)return En(e,t,i)}return t.flags|=1,e=Xn(o,r),e.ref=t.ref,e.return=t,t.child=e}function L0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Co(o,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pt=!0);else return t.lanes=e.lanes,En(e,t,i)}return dc(e,t,n,r,i)}function D0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Jr,St),St|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(Jr,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(Jr,St),St|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(Jr,St),St|=r;return at(e,t,i,n),t.child}function N0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dc(e,t,n,r,i){var o=gt(n)?Cr:ot.current;return o=ci(t,o),oi(t,i),n=jd(e,t,n,r,o,i),r=Cd(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Ie&&r&&fd(t),t.flags|=1,at(e,t,n,i),t.child)}function wh(e,t,n,r,i){if(gt(n)){var o=!0;ml(t)}else o=!1;if(oi(t,i),t.stateNode===null)Ya(e,t),c0(t,n,r),uc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=gt(n)?Cr:ot.current,u=ci(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&dh(t,a,r,u),Dn=!1;var h=t.memoizedState;a.state=h,wl(t,r,a,i),s=t.memoizedState,l!==r||h!==s||mt.current||Dn?(typeof f=="function"&&(sc(t,n,f,r),s=t.memoizedState),(l=Dn||ch(t,n,l,r,h,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,s0(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Qt(t.type,l),a.props=u,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=At(s):(s=gt(n)?Cr:ot.current,s=ci(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&dh(t,a,r,s),Dn=!1,h=t.memoizedState,a.state=h,wl(t,r,a,i);var y=t.memoizedState;l!==d||h!==y||mt.current||Dn?(typeof v=="function"&&(sc(t,n,v,r),y=t.memoizedState),(u=Dn||ch(t,n,u,r,h,y,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return fc(e,t,n,r,o,i)}function fc(e,t,n,r,i,o){N0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&oh(t,n,!1),En(e,t,o);r=t.stateNode,Dy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=fi(t,e.child,null,o),t.child=fi(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&oh(t,n,!0),t.child}function A0(e){var t=e.stateNode;t.pendingContext?ih(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ih(e,t.context,!1),wd(e,t.containerInfo)}function Sh(e,t,n,r,i){return di(),pd(i),t.flags|=256,at(e,t,n,r),t.child}var hc={dehydrated:null,treeContext:null,retryLane:0};function pc(e){return{baseLanes:e,cachePool:null,transitions:null}}function F0(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Te,i&1),e===null)return ac(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Jl(a,r,0,null),e=br(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pc(n),t.memoizedState=hc,e):_d(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ny(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Xn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Xn(l,o):(o=br(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?pc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=hc,r}return o=e.child,e=o.sibling,r=Xn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _d(e,t){return t=Jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,n,r){return r!==null&&pd(r),fi(t,e.child,null,n),e=_d(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ny(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=qs(Error(D(422))),ba(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Jl({mode:"visible",children:r.children},i,0,null),o=br(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fi(t,e.child,null,a),t.child.memoizedState=pc(a),t.memoizedState=hc,o);if(!(t.mode&1))return ba(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(D(419)),r=qs(o,r,void 0),ba(e,t,a,r)}if(l=(a&e.childLanes)!==0,pt||l){if(r=Ke,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Cn(e,i),en(r,e,i,-1))}return Od(),r=qs(Error(D(421))),ba(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,bt=Yn(i.nextSibling),Ct=t,Ie=!0,Kt=null,e!==null&&(Tt[zt++]=wn,Tt[zt++]=Sn,Tt[zt++]=Er,wn=e.id,Sn=e.overflow,Er=t),t=_d(t,r.children),t.flags|=4096,t)}function kh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),lc(e.return,t,n)}function Xs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kh(e,n,t);else if(e.tag===19)kh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Sl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xs(t,!0,n,null,o);break;case"together":Xs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ay(e,t,n){switch(t.tag){case 3:A0(t),di();break;case 5:h0(t);break;case 1:gt(t.type)&&ml(t);break;case 4:wd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?F0(e,t,n):(be(Te,Te.current&1),e=En(e,t,n),e!==null?e.sibling:null);be(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,D0(e,t,n)}return En(e,t,n)}var B0,mc,U0,W0;B0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mc=function(){};U0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xr(fn.current);var o=null;switch(n){case"input":i=Nu(e,i),r=Nu(e,r),o=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":i=$u(e,i),r=$u(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hl)}Uu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Ce("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};W0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ui(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fy(e,t,n){var r=t.pendingProps;switch(hd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return gt(t.type)&&pl(),nt(t),null;case 3:return r=t.stateNode,hi(),Pe(mt),Pe(ot),kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(bc(Kt),Kt=null))),mc(e,t),nt(t),null;case 5:Sd(t);var i=xr(Io.current);if(n=t.type,e!==null&&t.stateNode!=null)U0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return nt(t),null}if(e=xr(fn.current),Sa(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[cn]=t,r[_o]=o,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Ji.length;i++)Ce(Ji[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Mf(r,o),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ce("invalid",r);break;case"textarea":zf(r,o),Ce("invalid",r)}Uu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&wa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&wa(r.textContent,l,e),i=["children",""+l]):yo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ce("scroll",r)}switch(n){case"input":fa(r),Tf(r,o,!0);break;case"textarea":fa(r),Of(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=hl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[cn]=t,e[_o]=r,B0(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wu(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),i=r;break;case"iframe":case"object":case"embed":Ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ji.length;i++)Ce(Ji[i],e);i=r;break;case"source":Ce("error",e),i=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=r;break;case"details":Ce("toggle",e),i=r;break;case"input":Mf(e,r),i=Nu(e,r),Ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":zf(e,r),i=$u(e,r),Ce("invalid",e);break;default:i=r}Uu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?xm(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vm(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xo(e,s):typeof s=="number"&&xo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Ce("scroll",e):s!=null&&Zc(e,o,s,a))}switch(n){case"input":fa(e),Tf(e,r,!1);break;case"textarea":fa(e),Of(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ti(e,!!r.multiple,o,!1):r.defaultValue!=null&&ti(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)W0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=xr(Io.current),xr(fn.current),Sa(t)){if(r=t.stateNode,n=t.memoizedProps,r[cn]=t,(o=r.nodeValue!==n)&&(e=Ct,e!==null))switch(e.tag){case 3:wa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=t,t.stateNode=r}return nt(t),null;case 13:if(Pe(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&bt!==null&&t.mode&1&&!(t.flags&128))a0(),di(),t.flags|=98560,o=!1;else if(o=Sa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[cn]=t}else di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Kt!==null&&(bc(Kt),Kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Qe===0&&(Qe=3):Od())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return hi(),mc(e,t),e===null&&Eo(t.stateNode.containerInfo),nt(t),null;case 10:return vd(t.type._context),nt(t),null;case 17:return gt(t.type)&&pl(),nt(t),null;case 19:if(Pe(Te),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ui(o,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Sl(e),a!==null){for(t.flags|=128,Ui(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&Fe()>mi&&(t.flags|=128,r=!0,Ui(o,!1),t.lanes=4194304)}else{if(!r)if(e=Sl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ui(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ie)return nt(t),null}else 2*Fe()-o.renderingStartTime>mi&&n!==1073741824&&(t.flags|=128,r=!0,Ui(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Fe(),t.sibling=null,n=Te.current,be(Te,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return zd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?St&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function $y(e,t){switch(hd(t),t.tag){case 1:return gt(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hi(),Pe(mt),Pe(ot),kd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sd(t),null;case 13:if(Pe(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Te),null;case 4:return hi(),null;case 10:return vd(t.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var ja=!1,rt=!1,By=typeof WeakSet=="function"?WeakSet:Set,U=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function gc(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var bh=!1;function Uy(e,t){if(Ju=cl,e=Ym(),dd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++f===r&&(s=a),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ec={focusedElem:e,selectionRange:n},cl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,C=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Qt(t.type,S),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(j){Ne(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return y=bh,bh=!1,y}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gc(t,n,o)}i=i.next}while(i!==r)}}function Xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function V0(e){var t=e.alternate;t!==null&&(e.alternate=null,V0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[cn],delete t[_o],delete t[rc],delete t[jy],delete t[Cy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function H0(e){return e.tag===5||e.tag===3||e.tag===4}function jh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||H0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hl));else if(r!==4&&(e=e.child,e!==null))for(yc(e,t,n),e=e.sibling;e!==null;)yc(e,t,n),e=e.sibling}function xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xc(e,t,n),e=e.sibling;e!==null;)xc(e,t,n),e=e.sibling}var Ze=null,Yt=!1;function Mn(e,t,n){for(n=n.child;n!==null;)Q0(e,t,n),n=n.sibling}function Q0(e,t,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:rt||Zr(n,t);case 6:var r=Ze,i=Yt;Ze=null,Mn(e,t,n),Ze=r,Yt=i,Ze!==null&&(Yt?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Yt?(e=Ze,n=n.stateNode,e.nodeType===8?Vs(e.parentNode,n):e.nodeType===1&&Vs(e,n),bo(e)):Vs(Ze,n.stateNode));break;case 4:r=Ze,i=Yt,Ze=n.stateNode.containerInfo,Yt=!0,Mn(e,t,n),Ze=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&gc(n,t,a),i=i.next}while(i!==r)}Mn(e,t,n);break;case 1:if(!rt&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,t,l)}Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Mn(e,t,n),rt=r):Mn(e,t,n);break;default:Mn(e,t,n)}}function Ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new By),t.forEach(function(r){var i=Xy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,Yt=!1;break e;case 3:Ze=l.stateNode.containerInfo,Yt=!0;break e;case 4:Ze=l.stateNode.containerInfo,Yt=!0;break e}l=l.return}if(Ze===null)throw Error(D(160));Q0(o,a,i),Ze=null,Yt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Y0(t,e),t=t.sibling}function Y0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),an(e),r&4){try{uo(3,e,e.return),Xl(3,e)}catch(S){Ne(e,e.return,S)}try{uo(5,e,e.return)}catch(S){Ne(e,e.return,S)}}break;case 1:Ht(t,e),an(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Ht(t,e),an(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{xo(i,"")}catch(S){Ne(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&pm(i,o),Wu(l,a);var u=Wu(l,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?xm(i,d):f==="dangerouslySetInnerHTML"?vm(i,d):f==="children"?xo(i,d):Zc(i,f,d,u)}switch(l){case"input":Au(i,o);break;case"textarea":mm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?ti(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?ti(i,!!o.multiple,o.defaultValue,!0):ti(i,!!o.multiple,o.multiple?[]:"",!1))}i[_o]=o}catch(S){Ne(e,e.return,S)}}break;case 6:if(Ht(t,e),an(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){Ne(e,e.return,S)}}break;case 3:if(Ht(t,e),an(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(S){Ne(e,e.return,S)}break;case 4:Ht(t,e),an(e);break;case 13:Ht(t,e),an(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Md=Fe())),r&4&&Ch(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||f,Ht(t,e),rt=u):Ht(t,e),an(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(U=e,f=e.child;f!==null;){for(d=U=f;U!==null;){switch(h=U,v=h.child,h.tag){case 0:case 11:case 14:case 15:uo(4,h,h.return);break;case 1:Zr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){Ne(r,n,S)}}break;case 5:Zr(h,h.return);break;case 22:if(h.memoizedState!==null){Ph(d);continue}}v!==null?(v.return=h,U=v):Ph(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ym("display",a))}catch(S){Ne(e,e.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){Ne(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ht(t,e),an(e),r&4&&Ch(e);break;case 21:break;default:Ht(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(H0(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var o=jh(e);xc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=jh(e);yc(e,l,a);break;default:throw Error(D(161))}}catch(s){Ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wy(e,t,n){U=e,G0(e)}function G0(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ja;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||rt;l=ja;var u=rt;if(ja=a,(rt=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?_h(i):s!==null?(s.return=a,U=s):_h(i);for(;o!==null;)U=o,G0(o),o=o.sibling;U=i,ja=l,rt=u}Eh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Eh(e)}}function Eh(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||Xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uh(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&bo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}rt||t.flags&512&&vc(t)}catch(h){Ne(t,t.return,h)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Ph(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function _h(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xl(4,t)}catch(s){Ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ne(t,i,s)}}var o=t.return;try{vc(t)}catch(s){Ne(t,o,s)}break;case 5:var a=t.return;try{vc(t)}catch(s){Ne(t,a,s)}}}catch(s){Ne(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var Vy=Math.ceil,jl=Pn.ReactCurrentDispatcher,Rd=Pn.ReactCurrentOwner,Nt=Pn.ReactCurrentBatchConfig,fe=0,Ke=null,We=null,Je=0,St=0,Jr=ir(0),Qe=0,Oo=null,_r=0,Zl=0,Id=0,co=null,ht=null,Md=0,mi=1/0,gn=null,Cl=!1,wc=null,Kn=null,Ca=!1,$n=null,El=0,fo=0,Sc=null,Ga=-1,Ka=0;function lt(){return fe&6?Fe():Ga!==-1?Ga:Ga=Fe()}function qn(e){return e.mode&1?fe&2&&Je!==0?Je&-Je:Py.transition!==null?(Ka===0&&(Ka=Mm()),Ka):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Am(e.type)),e):1}function en(e,t,n,r){if(50<fo)throw fo=0,Sc=null,Error(D(185));Go(e,n,r),(!(fe&2)||e!==Ke)&&(e===Ke&&(!(fe&2)&&(Zl|=n),Qe===4&&An(e,Je)),vt(e,r),n===1&&fe===0&&!(t.mode&1)&&(mi=Fe()+500,Gl&&or()))}function vt(e,t){var n=e.callbackNode;Pv(e,t);var r=ul(e,e===Ke?Je:0);if(r===0)n!==null&&Nf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nf(n),t===1)e.tag===0?Ey(Rh.bind(null,e)):r0(Rh.bind(null,e)),ky(function(){!(fe&6)&&or()}),n=null;else{switch(Tm(r)){case 1:n=rd;break;case 4:n=Rm;break;case 16:n=sl;break;case 536870912:n=Im;break;default:n=sl}n=ng(n,K0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function K0(e,t){if(Ga=-1,Ka=0,fe&6)throw Error(D(327));var n=e.callbackNode;if(ai()&&e.callbackNode!==n)return null;var r=ul(e,e===Ke?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pl(e,r);else{t=r;var i=fe;fe|=2;var o=X0();(Ke!==e||Je!==t)&&(gn=null,mi=Fe()+500,kr(e,t));do try{Yy();break}catch(l){q0(e,l)}while(!0);gd(),jl.current=o,fe=i,We!==null?t=0:(Ke=null,Je=0,t=Qe)}if(t!==0){if(t===2&&(i=Gu(e),i!==0&&(r=i,t=kc(e,i))),t===1)throw n=Oo,kr(e,0),An(e,r),vt(e,Fe()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hy(i)&&(t=Pl(e,r),t===2&&(o=Gu(e),o!==0&&(r=o,t=kc(e,o))),t===1))throw n=Oo,kr(e,0),An(e,r),vt(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:hr(e,ht,gn);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Md+500-Fe(),10<t)){if(ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nc(hr.bind(null,e,ht,gn),t);break}hr(e,ht,gn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Jt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vy(r/1960))-r,10<r){e.timeoutHandle=nc(hr.bind(null,e,ht,gn),r);break}hr(e,ht,gn);break;case 5:hr(e,ht,gn);break;default:throw Error(D(329))}}}return vt(e,Fe()),e.callbackNode===n?K0.bind(null,e):null}function kc(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(kr(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=ht,ht=n,t!==null&&bc(t)),e}function bc(e){ht===null?ht=e:ht.push.apply(ht,e)}function Hy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Id,t&=~Zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jt(t),r=1<<n;e[n]=-1,t&=~r}}function Rh(e){if(fe&6)throw Error(D(327));ai();var t=ul(e,0);if(!(t&1))return vt(e,Fe()),null;var n=Pl(e,t);if(e.tag!==0&&n===2){var r=Gu(e);r!==0&&(t=r,n=kc(e,r))}if(n===1)throw n=Oo,kr(e,0),An(e,t),vt(e,Fe()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hr(e,ht,gn),vt(e,Fe()),null}function Td(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(mi=Fe()+500,Gl&&or())}}function Rr(e){$n!==null&&$n.tag===0&&!(fe&6)&&ai();var t=fe;fe|=1;var n=Nt.transition,r=ve;try{if(Nt.transition=null,ve=1,e)return e()}finally{ve=r,Nt.transition=n,fe=t,!(fe&6)&&or()}}function zd(){St=Jr.current,Pe(Jr)}function kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sy(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(hd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:hi(),Pe(mt),Pe(ot),kd();break;case 5:Sd(r);break;case 4:hi();break;case 13:Pe(Te);break;case 19:Pe(Te);break;case 10:vd(r.type._context);break;case 22:case 23:zd()}n=n.return}if(Ke=e,We=e=Xn(e.current,null),Je=St=t,Qe=0,Oo=null,Id=Zl=_r=0,ht=co=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}yr=null}return e}function q0(e,t){do{var n=We;try{if(gd(),Ha.current=bl,kl){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(Pr=0,Ye=He=ze=null,so=!1,Mo=0,Rd.current=null,n===null||n.return===null){Qe=1,Oo=t,We=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Je,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=gh(a);if(v!==null){v.flags&=-257,vh(v,a,l,o,t),v.mode&1&&mh(o,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var S=new Set;S.add(s),t.updateQueue=S}else y.add(s);break e}else{if(!(t&1)){mh(o,u,t),Od();break e}s=Error(D(426))}}else if(Ie&&l.mode&1){var C=gh(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),vh(C,a,l,o,t),pd(pi(s,l));break e}}o=s=pi(s,l),Qe!==4&&(Qe=2),co===null?co=[o]:co.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=z0(o,s,t);sh(o,m);break e;case 1:l=s;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kn===null||!Kn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=O0(o,l,t);sh(o,j);break e}}o=o.return}while(o!==null)}J0(n)}catch(_){t=_,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function X0(){var e=jl.current;return jl.current=bl,e===null?bl:e}function Od(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Ke===null||!(_r&268435455)&&!(Zl&268435455)||An(Ke,Je)}function Pl(e,t){var n=fe;fe|=2;var r=X0();(Ke!==e||Je!==t)&&(gn=null,kr(e,t));do try{Qy();break}catch(i){q0(e,i)}while(!0);if(gd(),fe=n,jl.current=r,We!==null)throw Error(D(261));return Ke=null,Je=0,Qe}function Qy(){for(;We!==null;)Z0(We)}function Yy(){for(;We!==null&&!yv();)Z0(We)}function Z0(e){var t=tg(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?J0(e):We=t,Rd.current=null}function J0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$y(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,We=null;return}}else if(n=Fy(n,t,St),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Qe===0&&(Qe=5)}function hr(e,t,n){var r=ve,i=Nt.transition;try{Nt.transition=null,ve=1,Gy(e,t,n,r)}finally{Nt.transition=i,ve=r}return null}function Gy(e,t,n,r){do ai();while($n!==null);if(fe&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(_v(e,o),e===Ke&&(We=Ke=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,ng(sl,function(){return ai(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Nt.transition,Nt.transition=null;var a=ve;ve=1;var l=fe;fe|=4,Rd.current=null,Uy(e,n),Y0(n,e),py(ec),cl=!!Ju,ec=Ju=null,e.current=n,Wy(n),xv(),fe=l,ve=a,Nt.transition=o}else e.current=n;if(Ca&&(Ca=!1,$n=e,El=i),o=e.pendingLanes,o===0&&(Kn=null),kv(n.stateNode),vt(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=wc,wc=null,e;return El&1&&e.tag!==0&&ai(),o=e.pendingLanes,o&1?e===Sc?fo++:(fo=0,Sc=e):fo=0,or(),null}function ai(){if($n!==null){var e=Tm(El),t=Nt.transition,n=ve;try{if(Nt.transition=null,ve=16>e?16:e,$n===null)var r=!1;else{if(e=$n,$n=null,El=0,fe&6)throw Error(D(331));var i=fe;for(fe|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:uo(8,f,o)}var d=f.child;if(d!==null)d.return=f,U=d;else for(;U!==null;){f=U;var h=f.sibling,v=f.return;if(V0(f),f===u){U=null;break}if(h!==null){h.return=v,U=h;break}U=v}}}var y=o.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var C=S.sibling;S.sibling=null,S=C}while(S!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:uo(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,U=m;break e}U=o.return}}var p=e.current;for(U=p;U!==null;){a=U;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,U=g;else e:for(a=p;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(_){Ne(l,l.return,_)}if(l===a){U=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,U=j;break e}U=l.return}}if(fe=i,or(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Wl,e)}catch{}r=!0}return r}finally{ve=n,Nt.transition=t}}return!1}function Ih(e,t,n){t=pi(n,t),t=z0(e,t,1),e=Gn(e,t,1),t=lt(),e!==null&&(Go(e,1,t),vt(e,t))}function Ne(e,t,n){if(e.tag===3)Ih(e,e,n);else for(;t!==null;){if(t.tag===3){Ih(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=pi(n,e),e=O0(t,e,1),t=Gn(t,e,1),e=lt(),t!==null&&(Go(t,1,e),vt(t,e));break}}t=t.return}}function Ky(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(Je&n)===n&&(Qe===4||Qe===3&&(Je&130023424)===Je&&500>Fe()-Md?kr(e,0):Id|=n),vt(e,t)}function eg(e,t){t===0&&(e.mode&1?(t=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):t=1);var n=lt();e=Cn(e,t),e!==null&&(Go(e,t,n),vt(e,n))}function qy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eg(e,n)}function Xy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),eg(e,n)}var tg;tg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pt=!1,Ay(e,t,n);pt=!!(e.flags&131072)}else pt=!1,Ie&&t.flags&1048576&&i0(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ya(e,t),e=t.pendingProps;var i=ci(t,ot.current);oi(t,n),i=jd(null,t,r,e,i,n);var o=Cd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(r)?(o=!0,ml(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xd(t),i.updater=Kl,t.stateNode=i,i._reactInternals=t,uc(t,r,e,n),t=fc(null,t,r,!0,o,n)):(t.tag=0,Ie&&o&&fd(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ya(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Jy(r),e=Qt(r,e),i){case 0:t=dc(null,t,r,e,n);break e;case 1:t=wh(null,t,r,e,n);break e;case 11:t=yh(null,t,r,e,n);break e;case 14:t=xh(null,t,r,Qt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),dc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),wh(e,t,r,i,n);case 3:e:{if(A0(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,s0(e,t),wl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=pi(Error(D(423)),t),t=Sh(e,t,r,n,i);break e}else if(r!==i){i=pi(Error(D(424)),t),t=Sh(e,t,r,n,i);break e}else for(bt=Yn(t.stateNode.containerInfo.firstChild),Ct=t,Ie=!0,Kt=null,n=f0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===i){t=En(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return h0(t),e===null&&ac(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,tc(r,i)?a=null:o!==null&&tc(r,o)&&(t.flags|=32),N0(e,t),at(e,t,a,n),t.child;case 6:return e===null&&ac(t),null;case 13:return F0(e,t,n);case 4:return wd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fi(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),yh(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,be(yl,r._currentValue),r._currentValue=a,o!==null)if(nn(o.value,a)){if(o.children===i.children&&!mt.current){t=En(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=kn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),lc(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(D(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),lc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oi(t,n),i=At(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Qt(r,t.pendingProps),i=Qt(r.type,i),xh(e,t,r,i,n);case 15:return L0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Ya(e,t),t.tag=1,gt(r)?(e=!0,ml(t)):e=!1,oi(t,n),c0(t,r,i),uc(t,r,i,n),fc(null,t,r,!0,e,n);case 19:return $0(e,t,n);case 22:return D0(e,t,n)}throw Error(D(156,t.tag))};function ng(e,t){return _m(e,t)}function Zy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new Zy(e,t,n,r)}function Ld(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jy(e){if(typeof e=="function")return Ld(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ed)return 11;if(e===td)return 14}return 2}function Xn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qa(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ld(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wr:return br(n.children,i,o,t);case Jc:a=8,i|=8;break;case zu:return e=Dt(12,n,t,i|2),e.elementType=zu,e.lanes=o,e;case Ou:return e=Dt(13,n,t,i),e.elementType=Ou,e.lanes=o,e;case Lu:return e=Dt(19,n,t,i),e.elementType=Lu,e.lanes=o,e;case dm:return Jl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case um:a=10;break e;case cm:a=9;break e;case ed:a=11;break e;case td:a=14;break e;case Ln:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Dt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function br(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function Jl(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=dm,e.lanes=n,e.stateNode={isHidden:!1},e}function Zs(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Js(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ex(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dd(e,t,n,r,i,o,a,l,s){return e=new ex(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(o),e}function tx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rg(e){if(!e)return nr;e=e._reactInternals;e:{if(Tr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(gt(n))return n0(e,n,t)}return t}function ig(e,t,n,r,i,o,a,l,s){return e=Dd(n,r,!0,e,i,o,a,l,s),e.context=rg(null),n=e.current,r=lt(),i=qn(n),o=kn(r,i),o.callback=t??null,Gn(n,o,i),e.current.lanes=i,Go(e,i,r),vt(e,r),e}function es(e,t,n,r){var i=t.current,o=lt(),a=qn(i);return n=rg(n),t.context===null?t.context=n:t.pendingContext=n,t=kn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,a),e!==null&&(en(e,i,a,o),Va(e,i,a)),a}function _l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nd(e,t){Mh(e,t),(e=e.alternate)&&Mh(e,t)}function nx(){return null}var og=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ad(e){this._internalRoot=e}ts.prototype.render=Ad.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));es(e,t,null,null)};ts.prototype.unmount=Ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){es(null,e,null,null)}),t[jn]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&Nm(e)}};function Fd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Th(){}function rx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=_l(a);o.call(u)}}var a=ig(t,r,e,0,null,!1,!1,"",Th);return e._reactRootContainer=a,e[jn]=a.current,Eo(e.nodeType===8?e.parentNode:e),Rr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=_l(s);l.call(u)}}var s=Dd(e,0,!1,null,null,!1,!1,"",Th);return e._reactRootContainer=s,e[jn]=s.current,Eo(e.nodeType===8?e.parentNode:e),Rr(function(){es(t,s,n,r)}),s}function rs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=_l(a);l.call(s)}}es(t,a,e,i)}else a=rx(n,t,e,i,r);return _l(a)}zm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zi(t.pendingLanes);n!==0&&(id(t,n|1),vt(t,Fe()),!(fe&6)&&(mi=Fe()+500,or()))}break;case 13:Rr(function(){var r=Cn(e,1);if(r!==null){var i=lt();en(r,e,1,i)}}),Nd(e,1)}};od=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=lt();en(t,e,134217728,n)}Nd(e,134217728)}};Om=function(e){if(e.tag===13){var t=qn(e),n=Cn(e,t);if(n!==null){var r=lt();en(n,e,t,r)}Nd(e,t)}};Lm=function(){return ve};Dm=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};Hu=function(e,t,n){switch(t){case"input":if(Au(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yl(r);if(!i)throw Error(D(90));hm(r),Au(r,i)}}}break;case"textarea":mm(e,n);break;case"select":t=n.value,t!=null&&ti(e,!!n.multiple,t,!1)}};km=Td;bm=Rr;var ix={usingClientEntryPoint:!1,Events:[qo,Yr,Yl,wm,Sm,Td]},Wi={findFiberByHostInstance:vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ox={bundleType:Wi.bundleType,version:Wi.version,rendererPackageName:Wi.rendererPackageName,rendererConfig:Wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Em(e),e===null?null:e.stateNode},findFiberByHostInstance:Wi.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Wl=Ea.inject(ox),dn=Ea}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix;Pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(t))throw Error(D(200));return tx(e,t,null,n)};Pt.createRoot=function(e,t){if(!Fd(e))throw Error(D(299));var n=!1,r="",i=og;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dd(e,1,!1,null,null,n,!1,r,i),e[jn]=t.current,Eo(e.nodeType===8?e.parentNode:e),new Ad(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Em(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return Rr(e)};Pt.hydrate=function(e,t,n){if(!ns(t))throw Error(D(200));return rs(null,e,t,!0,n)};Pt.hydrateRoot=function(e,t,n){if(!Fd(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=og;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ig(t,null,e,1,n??null,i,!1,o,a),e[jn]=t.current,Eo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ts(t)};Pt.render=function(e,t,n){if(!ns(t))throw Error(D(200));return rs(null,e,t,!1,n)};Pt.unmountComponentAtNode=function(e){if(!ns(e))throw Error(D(40));return e._reactRootContainer?(Rr(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Td;Pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ns(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return rs(e,t,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";function ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ag)}catch(e){console.error(e)}}ag(),im.exports=Pt;var is=im.exports;const ax=Hc(is),lx=Yp({__proto__:null,default:ax},[is]);var zh=is;Mu.createRoot=zh.createRoot,Mu.hydrateRoot=zh.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}var Ae;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ae||(Ae={}));const Oh="popstate";function sx(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Lo("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return cx(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ux(){return Math.random().toString(36).substr(2,8)}function Lh(e,t){return{usr:e.state,key:e.key,idx:t}}function Lo(e,t,n,r){return n===void 0&&(n=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_n(t):t,{state:n,key:t&&t.key||r||ux()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _n(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Ae.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(Re({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=Ae.Pop;let C=f(),m=C==null?null:C-u;u=C,s&&s({action:l,location:S.location,delta:m})}function h(C,m){l=Ae.Push;let p=Lo(S.location,C,m);n&&n(p,C),u=f()+1;let g=Lh(p,u),j=S.createHref(p);try{a.pushState(g,"",j)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(j)}o&&s&&s({action:l,location:S.location,delta:1})}function v(C,m){l=Ae.Replace;let p=Lo(S.location,C,m);n&&n(p,C),u=f();let g=Lh(p,u),j=S.createHref(p);a.replaceState(g,"",j),o&&s&&s({action:l,location:S.location,delta:0})}function y(C){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:Zo(C);return p=p.replace(/ $/,"%20"),ae(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let S={get action(){return l},get location(){return e(i,a)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Oh,d),s=C,()=>{i.removeEventListener(Oh,d),s=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let m=y(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(C){return a.go(C)}};return S}var ye;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ye||(ye={}));const dx=new Set(["lazy","caseSensitive","path","id","index","children"]);function fx(e){return e.index===!0}function Rl(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,String(o)],l=typeof i.id=="string"?i.id:a.join("-");if(ae(i.index!==!0||!i.children,"Cannot specify children on an index route"),ae(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),fx(i)){let s=Re({},i,t(i),{id:l});return r[l]=s,s}else{let s=Re({},i,t(i),{id:l,children:void 0});return r[l]=s,i.children&&(s.children=Rl(i.children,t,a,r)),s}})}function pr(e,t,n){return n===void 0&&(n="/"),Xa(e,t,n,!1)}function Xa(e,t,n,r){let i=typeof t=="string"?_n(t):t,o=Jo(i.pathname||"/",n);if(o==null)return null;let a=lg(e);px(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=Cx(o);l=bx(a[s],u,r)}return l}function hx(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function lg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(ae(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Zn([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lg(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Sx(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of sg(o.path))i(o,a,s)}),t}function sg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=sg(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function px(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mx=/^:[\w-]+$/,gx=3,vx=2,yx=1,xx=10,wx=-2,Dh=e=>e==="*";function Sx(e,t){let n=e.split("/"),r=n.length;return n.some(Dh)&&(r+=wx),t&&(r+=vx),n.filter(i=>!Dh(i)).reduce((i,o)=>i+(mx.test(o)?gx:o===""?yx:xx),r)}function kx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function bx(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=Nh({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),h=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Nh({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:Zn([o,d.pathname]),pathnameBase:_x(Zn([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Zn([o,d.pathnameBase]))}return a}function Nh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:h,isOptional:v}=f;if(h==="*"){let S=l[d]||"";a=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const y=l[d];return v&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function jx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Cx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return gi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ex(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?_n(e):e;return{pathname:n?n.startsWith("/")?n:Px(n,t):t,search:Rx(r),hash:Ix(i)}}function Px(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function eu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ug(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cg(e,t){let n=ug(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=_n(e):(i=Re({},e),ae(!i.pathname||!i.pathname.includes("?"),eu("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),eu("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),eu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Ex(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Zn=e=>e.join("/").replace(/\/\/+/g,"/"),_x=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ix=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Il{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function os(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const fg=["post","put","patch","delete"],Mx=new Set(fg),Tx=["get",...fg],zx=new Set(Tx),Ox=new Set([301,302,303,307,308]),Lx=new Set([307,308]),tu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Dx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Vi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},$d=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nx=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),hg="remix-router-transitions";function Ax(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ae(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;i=b=>({hasErrorBoundary:w(b)})}else i=Nx;let o={},a=Rl(e.routes,i,void 0,o),l,s=e.basename||"/",u=e.dataStrategy||Ux,f=e.patchRoutesOnNavigation,d=Re({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,v=new Set,y=null,S=null,C=null,m=e.hydrationData!=null,p=pr(a,e.history.location,s),g=null;if(p==null&&!f){let w=dt(404,{pathname:e.history.location.pathname}),{matches:b,route:P}=Gh(a);p=b,g={[P.id]:w}}p&&!e.hydrationData&&aa(p,a,e.history.location.pathname).active&&(p=null);let j;if(p)if(p.some(w=>w.route.lazy))j=!1;else if(!p.some(w=>w.route.loader))j=!0;else if(d.v7_partialHydration){let w=e.hydrationData?e.hydrationData.loaderData:null,b=e.hydrationData?e.hydrationData.errors:null;if(b){let P=p.findIndex(O=>b[O.route.id]!==void 0);j=p.slice(0,P+1).every(O=>!Cc(O.route,w,b))}else j=p.every(P=>!Cc(P.route,w,b))}else j=e.hydrationData!=null;else if(j=!1,p=[],d.v7_partialHydration){let w=aa(null,a,e.history.location.pathname);w.active&&w.matches&&(p=w.matches)}let _,x={historyAction:e.history.action,location:e.history.location,matches:p,initialized:j,navigation:tu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},R=Ae.Pop,z=!1,A,$=!1,X=new Map,se=null,pe=!1,xe=!1,ct=[],Rt=new Set,we=new Map,F=0,Y=-1,q=new Map,te=new Set,ie=new Map,Ve=new Map,Me=new Set,$e=new Map,je=new Map,qe;function M(){if(h=e.history.listen(w=>{let{action:b,location:P,delta:O}=w;if(qe){qe(),qe=void 0;return}gi(je.size===0||O!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=Sf({currentLocation:x.location,nextLocation:P,historyAction:b});if(W&&O!=null){let G=new Promise(J=>{qe=J});e.history.go(O*-1),oa(W,{state:"blocked",location:P,proceed(){oa(W,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),G.then(()=>e.history.go(O))},reset(){let J=new Map(x.blockers);J.set(W,Vi),I({blockers:J})}});return}return ce(b,P)}),n){n2(t,X);let w=()=>r2(t,X);t.addEventListener("pagehide",w),se=()=>t.removeEventListener("pagehide",w)}return x.initialized||ce(Ae.Pop,x.location,{initialHydration:!0}),_}function T(){h&&h(),se&&se(),v.clear(),A&&A.abort(),x.fetchers.forEach((w,b)=>lr(b)),x.blockers.forEach((w,b)=>wf(b))}function L(w){return v.add(w),()=>v.delete(w)}function I(w,b){b===void 0&&(b={}),x=Re({},x,w);let P=[],O=[];d.v7_fetcherPersist&&x.fetchers.forEach((W,G)=>{W.state==="idle"&&(Me.has(G)?O.push(G):P.push(G))}),[...v].forEach(W=>W(x,{deletedFetchers:O,viewTransitionOpts:b.viewTransitionOpts,flushSync:b.flushSync===!0})),d.v7_fetcherPersist&&(P.forEach(W=>x.fetchers.delete(W)),O.forEach(W=>lr(W)))}function Z(w,b,P){var O,W;let{flushSync:G}=P===void 0?{}:P,J=x.actionData!=null&&x.navigation.formMethod!=null&&Gt(x.navigation.formMethod)&&x.navigation.state==="loading"&&((O=w.state)==null?void 0:O._isRedirect)!==!0,H;b.actionData?Object.keys(b.actionData).length>0?H=b.actionData:H=null:J?H=x.actionData:H=null;let Q=b.loaderData?Qh(x.loaderData,b.loaderData,b.matches||[],b.errors):x.loaderData,V=x.blockers;V.size>0&&(V=new Map(V),V.forEach((de,Xe)=>V.set(Xe,Vi)));let K=z===!0||x.navigation.formMethod!=null&&Gt(x.navigation.formMethod)&&((W=w.state)==null?void 0:W._isRedirect)!==!0;l&&(a=l,l=void 0),pe||R===Ae.Pop||(R===Ae.Push?e.history.push(w,w.state):R===Ae.Replace&&e.history.replace(w,w.state));let oe;if(R===Ae.Pop){let de=X.get(x.location.pathname);de&&de.has(w.pathname)?oe={currentLocation:x.location,nextLocation:w}:X.has(w.pathname)&&(oe={currentLocation:w,nextLocation:x.location})}else if($){let de=X.get(x.location.pathname);de?de.add(w.pathname):(de=new Set([w.pathname]),X.set(x.location.pathname,de)),oe={currentLocation:x.location,nextLocation:w}}I(Re({},b,{actionData:H,loaderData:Q,historyAction:R,location:w,initialized:!0,navigation:tu,revalidation:"idle",restoreScrollPosition:bf(w,b.matches||x.matches),preventScrollReset:K,blockers:V}),{viewTransitionOpts:oe,flushSync:G===!0}),R=Ae.Pop,z=!1,$=!1,pe=!1,xe=!1,ct=[]}async function B(w,b){if(typeof w=="number"){e.history.go(w);return}let P=jc(x.location,x.matches,s,d.v7_prependBasename,w,d.v7_relativeSplatPath,b==null?void 0:b.fromRouteId,b==null?void 0:b.relative),{path:O,submission:W,error:G}=Ah(d.v7_normalizeFormMethod,!1,P,b),J=x.location,H=Lo(x.location,O,b&&b.state);H=Re({},H,e.history.encodeLocation(H));let Q=b&&b.replace!=null?b.replace:void 0,V=Ae.Push;Q===!0?V=Ae.Replace:Q===!1||W!=null&&Gt(W.formMethod)&&W.formAction===x.location.pathname+x.location.search&&(V=Ae.Replace);let K=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,oe=(b&&b.flushSync)===!0,de=Sf({currentLocation:J,nextLocation:H,historyAction:V});if(de){oa(de,{state:"blocked",location:H,proceed(){oa(de,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),B(w,b)},reset(){let Xe=new Map(x.blockers);Xe.set(de,Vi),I({blockers:Xe})}});return}return await ce(V,H,{submission:W,pendingError:G,preventScrollReset:K,replace:b&&b.replace,enableViewTransition:b&&b.viewTransition,flushSync:oe})}function ne(){if(ar(),I({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){ce(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}ce(R||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation,enableViewTransition:$===!0})}}async function ce(w,b,P){A&&A.abort(),A=null,R=w,pe=(P&&P.startUninterruptedRevalidation)===!0,I1(x.location,x.matches),z=(P&&P.preventScrollReset)===!0,$=(P&&P.enableViewTransition)===!0;let O=l||a,W=P&&P.overrideNavigation,G=pr(O,b,s),J=(P&&P.flushSync)===!0,H=aa(G,O,b.pathname);if(H.active&&H.matches&&(G=H.matches),!G){let{error:ke,notFoundMatches:me,route:Le}=Cs(b.pathname);Z(b,{matches:me,loaderData:{},errors:{[Le.id]:ke}},{flushSync:J});return}if(x.initialized&&!xe&&Gx(x.location,b)&&!(P&&P.submission&&Gt(P.submission.formMethod))){Z(b,{matches:G},{flushSync:J});return}A=new AbortController;let Q=Nr(e.history,b,A.signal,P&&P.submission),V;if(P&&P.pendingError)V=[mr(G).route.id,{type:ye.error,error:P.pendingError}];else if(P&&P.submission&&Gt(P.submission.formMethod)){let ke=await _e(Q,b,P.submission,G,H.active,{replace:P.replace,flushSync:J});if(ke.shortCircuited)return;if(ke.pendingActionResult){let[me,Le]=ke.pendingActionResult;if(kt(Le)&&os(Le.error)&&Le.error.status===404){A=null,Z(b,{matches:ke.matches,loaderData:{},errors:{[me]:Le.error}});return}}G=ke.matches||G,V=ke.pendingActionResult,W=nu(b,P.submission),J=!1,H.active=!1,Q=Nr(e.history,Q.url,Q.signal)}let{shortCircuited:K,matches:oe,loaderData:de,errors:Xe}=await Se(Q,b,G,H.active,W,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,J,V);K||(A=null,Z(b,Re({matches:oe||G},Yh(V),{loaderData:de,errors:Xe})))}async function _e(w,b,P,O,W,G){G===void 0&&(G={}),ar();let J=e2(b,P);if(I({navigation:J},{flushSync:G.flushSync===!0}),W){let V=await la(O,b.pathname,w.signal);if(V.type==="aborted")return{shortCircuited:!0};if(V.type==="error"){let K=mr(V.partialMatches).route.id;return{matches:V.partialMatches,pendingActionResult:[K,{type:ye.error,error:V.error}]}}else if(V.matches)O=V.matches;else{let{notFoundMatches:K,error:oe,route:de}=Cs(b.pathname);return{matches:K,pendingActionResult:[de.id,{type:ye.error,error:oe}]}}}let H,Q=eo(O,b);if(!Q.route.action&&!Q.route.lazy)H={type:ye.error,error:dt(405,{method:w.method,pathname:b.pathname,routeId:Q.route.id})};else if(H=(await pn("action",x,w,[Q],O,null))[Q.route.id],w.signal.aborted)return{shortCircuited:!0};if(wr(H)){let V;return G&&G.replace!=null?V=G.replace:V=Wh(H.response.headers.get("Location"),new URL(w.url),s)===x.location.pathname+x.location.search,await Bt(w,H,!0,{submission:P,replace:V}),{shortCircuited:!0}}if(Bn(H))throw dt(400,{type:"defer-action"});if(kt(H)){let V=mr(O,Q.route.id);return(G&&G.replace)!==!0&&(R=Ae.Push),{matches:O,pendingActionResult:[V.route.id,H]}}return{matches:O,pendingActionResult:[Q.route.id,H]}}async function Se(w,b,P,O,W,G,J,H,Q,V,K){let oe=W||nu(b,G),de=G||J||qh(oe),Xe=!pe&&(!d.v7_partialHydration||!Q);if(O){if(Xe){let De=It(K);I(Re({navigation:oe},De!==void 0?{actionData:De}:{}),{flushSync:V})}let he=await la(P,b.pathname,w.signal);if(he.type==="aborted")return{shortCircuited:!0};if(he.type==="error"){let De=mr(he.partialMatches).route.id;return{matches:he.partialMatches,loaderData:{},errors:{[De]:he.error}}}else if(he.matches)P=he.matches;else{let{error:De,notFoundMatches:Or,route:Li}=Cs(b.pathname);return{matches:Or,loaderData:{},errors:{[Li.id]:De}}}}let ke=l||a,[me,Le]=$h(e.history,x,P,de,b,d.v7_partialHydration&&Q===!0,d.v7_skipActionErrorRevalidation,xe,ct,Rt,Me,ie,te,ke,s,K);if(Es(he=>!(P&&P.some(De=>De.route.id===he))||me&&me.some(De=>De.route.id===he)),Y=++F,me.length===0&&Le.length===0){let he=yf();return Z(b,Re({matches:P,loaderData:{},errors:K&&kt(K[1])?{[K[0]]:K[1].error}:null},Yh(K),he?{fetchers:new Map(x.fetchers)}:{}),{flushSync:V}),{shortCircuited:!0}}if(Xe){let he={};if(!O){he.navigation=oe;let De=It(K);De!==void 0&&(he.actionData=De)}Le.length>0&&(he.fetchers=yt(Le)),I(he,{flushSync:V})}Le.forEach(he=>{Vt(he.key),he.controller&&we.set(he.key,he.controller)});let zr=()=>Le.forEach(he=>Vt(he.key));A&&A.signal.addEventListener("abort",zr);let{loaderResults:zi,fetcherResults:mn}=await In(x,P,me,Le,w);if(w.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",zr),Le.forEach(he=>we.delete(he.key));let on=Pa(zi);if(on)return await Bt(w,on.result,!0,{replace:H}),{shortCircuited:!0};if(on=Pa(mn),on)return te.add(on.key),await Bt(w,on.result,!0,{replace:H}),{shortCircuited:!0};let{loaderData:Ps,errors:Oi}=Hh(x,P,zi,K,Le,mn,$e);$e.forEach((he,De)=>{he.subscribe(Or=>{(Or||he.done)&&$e.delete(De)})}),d.v7_partialHydration&&Q&&x.errors&&(Oi=Re({},x.errors,Oi));let ur=yf(),sa=xf(Y),ua=ur||sa||Le.length>0;return Re({matches:P,loaderData:Ps,errors:Oi},ua?{fetchers:new Map(x.fetchers)}:{})}function It(w){if(w&&!kt(w[1]))return{[w[0]]:w[1].data};if(x.actionData)return Object.keys(x.actionData).length===0?null:x.actionData}function yt(w){return w.forEach(b=>{let P=x.fetchers.get(b.key),O=Hi(void 0,P?P.data:void 0);x.fetchers.set(b.key,O)}),new Map(x.fetchers)}function xt(w,b,P,O){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Vt(w);let W=(O&&O.flushSync)===!0,G=l||a,J=jc(x.location,x.matches,s,d.v7_prependBasename,P,d.v7_relativeSplatPath,b,O==null?void 0:O.relative),H=pr(G,J,s),Q=aa(H,G,J);if(Q.active&&Q.matches&&(H=Q.matches),!H){Wt(w,b,dt(404,{pathname:J}),{flushSync:W});return}let{path:V,submission:K,error:oe}=Ah(d.v7_normalizeFormMethod,!0,J,O);if(oe){Wt(w,b,oe,{flushSync:W});return}let de=eo(H,V),Xe=(O&&O.preventScrollReset)===!0;if(K&&Gt(K.formMethod)){Ii(w,b,V,de,H,Q.active,W,Xe,K);return}ie.set(w,{routeId:b,path:V}),Mi(w,b,V,de,H,Q.active,W,Xe,K)}async function Ii(w,b,P,O,W,G,J,H,Q){ar(),ie.delete(w);function V(Be){if(!Be.route.action&&!Be.route.lazy){let Lr=dt(405,{method:Q.formMethod,pathname:P,routeId:b});return Wt(w,b,Lr,{flushSync:J}),!0}return!1}if(!G&&V(O))return;let K=x.fetchers.get(w);Ut(w,t2(Q,K),{flushSync:J});let oe=new AbortController,de=Nr(e.history,P,oe.signal,Q);if(G){let Be=await la(W,P,de.signal);if(Be.type==="aborted")return;if(Be.type==="error"){Wt(w,b,Be.error,{flushSync:J});return}else if(Be.matches){if(W=Be.matches,O=eo(W,P),V(O))return}else{Wt(w,b,dt(404,{pathname:P}),{flushSync:J});return}}we.set(w,oe);let Xe=F,me=(await pn("action",x,de,[O],W,w))[O.route.id];if(de.signal.aborted){we.get(w)===oe&&we.delete(w);return}if(d.v7_fetcherPersist&&Me.has(w)){if(wr(me)||kt(me)){Ut(w,zn(void 0));return}}else{if(wr(me))if(we.delete(w),Y>Xe){Ut(w,zn(void 0));return}else return te.add(w),Ut(w,Hi(Q)),Bt(de,me,!1,{fetcherSubmission:Q,preventScrollReset:H});if(kt(me)){Wt(w,b,me.error);return}}if(Bn(me))throw dt(400,{type:"defer-action"});let Le=x.navigation.location||x.location,zr=Nr(e.history,Le,oe.signal),zi=l||a,mn=x.navigation.state!=="idle"?pr(zi,x.navigation.location,s):x.matches;ae(mn,"Didn't find any matches after fetcher action");let on=++F;q.set(w,on);let Ps=Hi(Q,me.data);x.fetchers.set(w,Ps);let[Oi,ur]=$h(e.history,x,mn,Q,Le,!1,d.v7_skipActionErrorRevalidation,xe,ct,Rt,Me,ie,te,zi,s,[O.route.id,me]);ur.filter(Be=>Be.key!==w).forEach(Be=>{let Lr=Be.key,jf=x.fetchers.get(Lr),z1=Hi(void 0,jf?jf.data:void 0);x.fetchers.set(Lr,z1),Vt(Lr),Be.controller&&we.set(Lr,Be.controller)}),I({fetchers:new Map(x.fetchers)});let sa=()=>ur.forEach(Be=>Vt(Be.key));oe.signal.addEventListener("abort",sa);let{loaderResults:ua,fetcherResults:he}=await In(x,mn,Oi,ur,zr);if(oe.signal.aborted)return;oe.signal.removeEventListener("abort",sa),q.delete(w),we.delete(w),ur.forEach(Be=>we.delete(Be.key));let De=Pa(ua);if(De)return Bt(zr,De.result,!1,{preventScrollReset:H});if(De=Pa(he),De)return te.add(De.key),Bt(zr,De.result,!1,{preventScrollReset:H});let{loaderData:Or,errors:Li}=Hh(x,mn,ua,void 0,ur,he,$e);if(x.fetchers.has(w)){let Be=zn(me.data);x.fetchers.set(w,Be)}xf(on),x.navigation.state==="loading"&&on>Y?(ae(R,"Expected pending action"),A&&A.abort(),Z(x.navigation.location,{matches:mn,loaderData:Or,errors:Li,fetchers:new Map(x.fetchers)})):(I({errors:Li,loaderData:Qh(x.loaderData,Or,mn,Li),fetchers:new Map(x.fetchers)}),xe=!1)}async function Mi(w,b,P,O,W,G,J,H,Q){let V=x.fetchers.get(w);Ut(w,Hi(Q,V?V.data:void 0),{flushSync:J});let K=new AbortController,oe=Nr(e.history,P,K.signal);if(G){let me=await la(W,P,oe.signal);if(me.type==="aborted")return;if(me.type==="error"){Wt(w,b,me.error,{flushSync:J});return}else if(me.matches)W=me.matches,O=eo(W,P);else{Wt(w,b,dt(404,{pathname:P}),{flushSync:J});return}}we.set(w,K);let de=F,ke=(await pn("loader",x,oe,[O],W,w))[O.route.id];if(Bn(ke)&&(ke=await Bd(ke,oe.signal,!0)||ke),we.get(w)===K&&we.delete(w),!oe.signal.aborted){if(Me.has(w)){Ut(w,zn(void 0));return}if(wr(ke))if(Y>de){Ut(w,zn(void 0));return}else{te.add(w),await Bt(oe,ke,!1,{preventScrollReset:H});return}if(kt(ke)){Wt(w,b,ke.error);return}ae(!Bn(ke),"Unhandled fetcher deferred data"),Ut(w,zn(ke.data))}}async function Bt(w,b,P,O){let{submission:W,fetcherSubmission:G,preventScrollReset:J,replace:H}=O===void 0?{}:O;b.response.headers.has("X-Remix-Revalidate")&&(xe=!0);let Q=b.response.headers.get("Location");ae(Q,"Expected a Location header on the redirect Response"),Q=Wh(Q,new URL(w.url),s);let V=Lo(x.location,Q,{_isRedirect:!0});if(n){let me=!1;if(b.response.headers.has("X-Remix-Reload-Document"))me=!0;else if($d.test(Q)){const Le=e.history.createURL(Q);me=Le.origin!==t.location.origin||Jo(Le.pathname,s)==null}if(me){H?t.location.replace(Q):t.location.assign(Q);return}}A=null;let K=H===!0||b.response.headers.has("X-Remix-Replace")?Ae.Replace:Ae.Push,{formMethod:oe,formAction:de,formEncType:Xe}=x.navigation;!W&&!G&&oe&&de&&Xe&&(W=qh(x.navigation));let ke=W||G;if(Lx.has(b.response.status)&&ke&&Gt(ke.formMethod))await ce(K,V,{submission:Re({},ke,{formAction:Q}),preventScrollReset:J||z,enableViewTransition:P?$:void 0});else{let me=nu(V,W);await ce(K,V,{overrideNavigation:me,fetcherSubmission:G,preventScrollReset:J||z,enableViewTransition:P?$:void 0})}}async function pn(w,b,P,O,W,G){let J,H={};try{J=await Wx(u,w,b,P,O,W,G,o,i)}catch(Q){return O.forEach(V=>{H[V.route.id]={type:ye.error,error:Q}}),H}for(let[Q,V]of Object.entries(J))if(Kx(V)){let K=V.result;H[Q]={type:ye.redirect,response:Qx(K,P,Q,W,s,d.v7_relativeSplatPath)}}else H[Q]=await Hx(V);return H}async function In(w,b,P,O,W){let G=w.matches,J=pn("loader",w,W,P,b,null),H=Promise.all(O.map(async K=>{if(K.matches&&K.match&&K.controller){let de=(await pn("loader",w,Nr(e.history,K.path,K.controller.signal),[K.match],K.matches,K.key))[K.match.route.id];return{[K.key]:de}}else return Promise.resolve({[K.key]:{type:ye.error,error:dt(404,{pathname:K.path})}})})),Q=await J,V=(await H).reduce((K,oe)=>Object.assign(K,oe),{});return await Promise.all([Zx(b,Q,W.signal,G,w.loaderData),Jx(b,V,O)]),{loaderResults:Q,fetcherResults:V}}function ar(){xe=!0,ct.push(...Es()),ie.forEach((w,b)=>{we.has(b)&&Rt.add(b),Vt(b)})}function Ut(w,b,P){P===void 0&&(P={}),x.fetchers.set(w,b),I({fetchers:new Map(x.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Wt(w,b,P,O){O===void 0&&(O={});let W=mr(x.matches,b);lr(w),I({errors:{[W.route.id]:P},fetchers:new Map(x.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Ti(w){return d.v7_fetcherPersist&&(Ve.set(w,(Ve.get(w)||0)+1),Me.has(w)&&Me.delete(w)),x.fetchers.get(w)||Dx}function lr(w){let b=x.fetchers.get(w);we.has(w)&&!(b&&b.state==="loading"&&q.has(w))&&Vt(w),ie.delete(w),q.delete(w),te.delete(w),Me.delete(w),Rt.delete(w),x.fetchers.delete(w)}function sr(w){if(d.v7_fetcherPersist){let b=(Ve.get(w)||0)-1;b<=0?(Ve.delete(w),Me.add(w)):Ve.set(w,b)}else lr(w);I({fetchers:new Map(x.fetchers)})}function Vt(w){let b=we.get(w);b&&(b.abort(),we.delete(w))}function vf(w){for(let b of w){let P=Ti(b),O=zn(P.data);x.fetchers.set(b,O)}}function yf(){let w=[],b=!1;for(let P of te){let O=x.fetchers.get(P);ae(O,"Expected fetcher: "+P),O.state==="loading"&&(te.delete(P),w.push(P),b=!0)}return vf(w),b}function xf(w){let b=[];for(let[P,O]of q)if(O<w){let W=x.fetchers.get(P);ae(W,"Expected fetcher: "+P),W.state==="loading"&&(Vt(P),q.delete(P),b.push(P))}return vf(b),b.length>0}function _1(w,b){let P=x.blockers.get(w)||Vi;return je.get(w)!==b&&je.set(w,b),P}function wf(w){x.blockers.delete(w),je.delete(w)}function oa(w,b){let P=x.blockers.get(w)||Vi;ae(P.state==="unblocked"&&b.state==="blocked"||P.state==="blocked"&&b.state==="blocked"||P.state==="blocked"&&b.state==="proceeding"||P.state==="blocked"&&b.state==="unblocked"||P.state==="proceeding"&&b.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+b.state);let O=new Map(x.blockers);O.set(w,b),I({blockers:O})}function Sf(w){let{currentLocation:b,nextLocation:P,historyAction:O}=w;if(je.size===0)return;je.size>1&&gi(!1,"A router only supports one blocker at a time");let W=Array.from(je.entries()),[G,J]=W[W.length-1],H=x.blockers.get(G);if(!(H&&H.state==="proceeding")&&J({currentLocation:b,nextLocation:P,historyAction:O}))return G}function Cs(w){let b=dt(404,{pathname:w}),P=l||a,{matches:O,route:W}=Gh(P);return Es(),{notFoundMatches:O,route:W,error:b}}function Es(w){let b=[];return $e.forEach((P,O)=>{(!w||w(O))&&(P.cancel(),b.push(O),$e.delete(O))}),b}function R1(w,b,P){if(y=w,C=b,S=P||null,!m&&x.navigation===tu){m=!0;let O=bf(x.location,x.matches);O!=null&&I({restoreScrollPosition:O})}return()=>{y=null,C=null,S=null}}function kf(w,b){return S&&S(w,b.map(O=>hx(O,x.loaderData)))||w.key}function I1(w,b){if(y&&C){let P=kf(w,b);y[P]=C()}}function bf(w,b){if(y){let P=kf(w,b),O=y[P];if(typeof O=="number")return O}return null}function aa(w,b,P){if(f)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:Xa(b,P,s,!0)}}else return{active:!0,matches:Xa(b,P,s,!0)||[]};return{active:!1,matches:null}}async function la(w,b,P){if(!f)return{type:"success",matches:w};let O=w;for(;;){let W=l==null,G=l||a,J=o;try{await f({path:b,matches:O,patch:(V,K)=>{P.aborted||Uh(V,K,G,J,i)}})}catch(V){return{type:"error",error:V,partialMatches:O}}finally{W&&!P.aborted&&(a=[...a])}if(P.aborted)return{type:"aborted"};let H=pr(G,b,s);if(H)return{type:"success",matches:H};let Q=Xa(G,b,s,!0);if(!Q||O.length===Q.length&&O.every((V,K)=>V.route.id===Q[K].route.id))return{type:"success",matches:null};O=Q}}function M1(w){o={},l=Rl(w,i,void 0,o)}function T1(w,b){let P=l==null;Uh(w,b,l||a,o,i),P&&(a=[...a],I({}))}return _={get basename(){return s},get future(){return d},get state(){return x},get routes(){return a},get window(){return t},initialize:M,subscribe:L,enableScrollRestoration:R1,navigate:B,fetch:xt,revalidate:ne,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Ti,deleteFetcher:sr,dispose:T,getBlocker:_1,deleteBlocker:wf,patchRoutes:T1,_internalFetchControllers:we,_internalActiveDeferreds:$e,_internalSetRoutes:M1},_}function Fx(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function jc(e,t,n,r,i,o,a,l){let s,u;if(a){s=[];for(let d of t)if(s.push(d),d.route.id===a){u=d;break}}else s=t,u=t[t.length-1];let f=dg(i||".",cg(s,o),Jo(e.pathname,n)||e.pathname,l==="path");if(i==null&&(f.search=e.search,f.hash=e.hash),(i==null||i===""||i===".")&&u){let d=Ud(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let h=new URLSearchParams(f.search),v=h.getAll("index");h.delete("index"),v.filter(S=>S).forEach(S=>h.append("index",S));let y=h.toString();f.search=y?"?"+y:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Zn([n,f.pathname])),Zo(f)}function Ah(e,t,n,r){if(!r||!Fx(r))return{path:n};if(r.formMethod&&!Xx(r.formMethod))return{path:n,error:dt(405,{method:r.formMethod})};let i=()=>({path:n,error:dt(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),l=gg(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Gt(a))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,y)=>{let[S,C]=y;return""+v+S+"="+C+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Gt(a))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}ae(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ec(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ec(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Vh(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Vh(s)}catch{return i()}let f={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Gt(f.formMethod))return{path:n,submission:f};let d=_n(n);return t&&d.search&&Ud(d.search)&&s.append("index",""),d.search="?"+s,{path:Zo(d),submission:f}}function Fh(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(i=>i.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function $h(e,t,n,r,i,o,a,l,s,u,f,d,h,v,y,S){let C=S?kt(S[1])?S[1].error:S[1].data:void 0,m=e.createURL(t.location),p=e.createURL(i),g=n;o&&t.errors?g=Fh(n,Object.keys(t.errors)[0],!0):S&&kt(S[1])&&(g=Fh(n,S[0]));let j=S?S[1].statusCode:void 0,_=a&&j&&j>=400,x=g.filter((z,A)=>{let{route:$}=z;if($.lazy)return!0;if($.loader==null)return!1;if(o)return Cc($,t.loaderData,t.errors);if($x(t.loaderData,t.matches[A],z)||s.some(pe=>pe===z.route.id))return!0;let X=t.matches[A],se=z;return Bh(z,Re({currentUrl:m,currentParams:X.params,nextUrl:p,nextParams:se.params},r,{actionResult:C,actionStatus:j,defaultShouldRevalidate:_?!1:l||m.pathname+m.search===p.pathname+p.search||m.search!==p.search||pg(X,se)}))}),R=[];return d.forEach((z,A)=>{if(o||!n.some(xe=>xe.route.id===z.routeId)||f.has(A))return;let $=pr(v,z.path,y);if(!$){R.push({key:A,routeId:z.routeId,path:z.path,matches:null,match:null,controller:null});return}let X=t.fetchers.get(A),se=eo($,z.path),pe=!1;h.has(A)?pe=!1:u.has(A)?(u.delete(A),pe=!0):X&&X.state!=="idle"&&X.data===void 0?pe=l:pe=Bh(se,Re({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:C,actionStatus:j,defaultShouldRevalidate:_?!1:l})),pe&&R.push({key:A,routeId:z.routeId,path:z.path,matches:$,match:se,controller:new AbortController})}),[x,R]}function Cc(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,i=n!=null&&n[e.id]!==void 0;return!r&&i?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!i}function $x(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function pg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Bh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function Uh(e,t,n,r,i){var o;let a;if(e){let u=r[e];ae(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),a=u.children}else a=n;let l=t.filter(u=>!a.some(f=>mg(u,f))),s=Rl(l,i,[e||"_","patch",String(((o=a)==null?void 0:o.length)||"0")],r);a.push(...s)}function mg(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var i;return(i=t.children)==null?void 0:i.some(o=>mg(n,o))}):!1}async function Bx(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];ae(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";gi(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!dx.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,Re({},t(i),{lazy:void 0}))}async function Ux(e){let{matches:t}=e,n=t.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,o,a)=>Object.assign(i,{[n[a].route.id]:o}),{})}async function Wx(e,t,n,r,i,o,a,l,s,u){let f=o.map(v=>v.route.lazy?Bx(v.route,s,l):void 0),d=o.map((v,y)=>{let S=f[y],C=i.some(p=>p.route.id===v.route.id);return Re({},v,{shouldLoad:C,resolve:async p=>(p&&r.method==="GET"&&(v.route.lazy||v.route.loader)&&(C=!0),C?Vx(t,r,v,S,p,u):Promise.resolve({type:ye.data,result:void 0}))})}),h=await e({matches:d,request:r,params:o[0].params,fetcherKey:a,context:u});try{await Promise.all(f)}catch{}return h}async function Vx(e,t,n,r,i,o){let a,l,s=u=>{let f,d=new Promise((y,S)=>f=S);l=()=>f(),t.signal.addEventListener("abort",l);let h=y=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:o},...y!==void 0?[y]:[]),v=(async()=>{try{return{type:"data",result:await(i?i(S=>h(S)):h())}}catch(y){return{type:"error",result:y}}})();return Promise.race([v,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(h=>{f=h}),r]);if(f!==void 0)throw f;a=d}else if(await r,u=n.route[e],u)a=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw dt(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:ye.data,result:void 0};else if(u)a=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw dt(404,{pathname:d})}ae(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ye.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return a}async function Hx(e){let{result:t,type:n}=e;if(vg(t)){let u;try{let f=t.headers.get("Content-Type");f&&/\bapplication\/json\b/.test(f)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(f){return{type:ye.error,error:f}}return n===ye.error?{type:ye.error,error:new Il(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ye.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ye.error){if(Kh(t)){var r;if(t.data instanceof Error){var i;return{type:ye.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status}}t=new Il(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ye.error,error:t,statusCode:os(t)?t.status:void 0}}if(qx(t)){var o,a;return{type:ye.deferred,deferredData:t,statusCode:(o=t.init)==null?void 0:o.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(Kh(t)){var l,s;return{type:ye.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:ye.data,data:t}}function Qx(e,t,n,r,i,o){let a=e.headers.get("Location");if(ae(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!$d.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=jc(new URL(t.url),l,i,!0,a,o),e.headers.set("Location",a)}return e}function Wh(e,t,n){if($d.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),o=Jo(i.pathname,n)!=null;if(i.origin===t.origin&&o)return i.pathname+i.search+i.hash}return e}function Nr(e,t,n,r){let i=e.createURL(gg(t)).toString(),o={signal:n};if(r&&Gt(r.formMethod)){let{formMethod:a,formEncType:l}=r;o.method=a.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(r.json)):l==="text/plain"?o.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?o.body=Ec(r.formData):o.body=r.formData}return new Request(i,o)}function Ec(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Vh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Yx(e,t,n,r,i){let o={},a=null,l,s=!1,u={},f=n&&kt(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let h=d.route.id,v=t[h];if(ae(!wr(v),"Cannot handle redirect results in processLoaderData"),kt(v)){let y=v.error;if(f!==void 0&&(y=f,f=void 0),a=a||{},i)a[h]=y;else{let S=mr(e,h);a[S.route.id]==null&&(a[S.route.id]=y)}o[h]=void 0,s||(s=!0,l=os(v.error)?v.error.status:500),v.headers&&(u[h]=v.headers)}else Bn(v)?(r.set(h,v.deferredData),o[h]=v.deferredData.data,v.statusCode!=null&&v.statusCode!==200&&!s&&(l=v.statusCode),v.headers&&(u[h]=v.headers)):(o[h]=v.data,v.statusCode&&v.statusCode!==200&&!s&&(l=v.statusCode),v.headers&&(u[h]=v.headers))}),f!==void 0&&n&&(a={[n[0]]:f},o[n[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function Hh(e,t,n,r,i,o,a){let{loaderData:l,errors:s}=Yx(t,n,r,a,!1);return i.forEach(u=>{let{key:f,match:d,controller:h}=u,v=o[f];if(ae(v,"Did not find corresponding fetcher result"),!(h&&h.signal.aborted))if(kt(v)){let y=mr(e.matches,d==null?void 0:d.route.id);s&&s[y.route.id]||(s=Re({},s,{[y.route.id]:v.error})),e.fetchers.delete(f)}else if(wr(v))ae(!1,"Unhandled fetcher revalidation redirect");else if(Bn(v))ae(!1,"Unhandled fetcher deferred data");else{let y=zn(v.data);e.fetchers.set(f,y)}}),{loaderData:l,errors:s}}function Qh(e,t,n,r){let i=Re({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Yh(e){return e?kt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function mr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Gh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function dt(e,t){let{pathname:n,routeId:r,method:i,type:o,message:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",s='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Il(e||500,l,new Error(s),!0)}function Pa(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,i]=t[n];if(wr(i))return{key:r,result:i}}}function gg(e){let t=typeof e=="string"?_n(e):e;return Zo(Re({},t,{hash:""}))}function Gx(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Kx(e){return vg(e.result)&&Ox.has(e.result.status)}function Bn(e){return e.type===ye.deferred}function kt(e){return e.type===ye.error}function wr(e){return(e&&e.type)===ye.redirect}function Kh(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function qx(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function vg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Xx(e){return zx.has(e.toLowerCase())}function Gt(e){return Mx.has(e.toLowerCase())}async function Zx(e,t,n,r,i){let o=Object.entries(t);for(let a=0;a<o.length;a++){let[l,s]=o[a],u=e.find(h=>(h==null?void 0:h.route.id)===l);if(!u)continue;let f=r.find(h=>h.route.id===u.route.id),d=f!=null&&!pg(f,u)&&(i&&i[u.route.id])!==void 0;Bn(s)&&d&&await Bd(s,n,!1).then(h=>{h&&(t[l]=h)})}}async function Jx(e,t,n){for(let r=0;r<n.length;r++){let{key:i,routeId:o,controller:a}=n[r],l=t[i];e.find(u=>(u==null?void 0:u.route.id)===o)&&Bn(l)&&(ae(a,"Expected an AbortController for revalidating fetcher deferred result"),await Bd(l,a.signal,!0).then(u=>{u&&(t[i]=u)}))}}async function Bd(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ye.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ye.error,error:i}}return{type:ye.data,data:e.deferredData.data}}}function Ud(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function eo(e,t){let n=typeof t=="string"?_n(t).search:t.search;if(e[e.length-1].route.index&&Ud(n||""))return e[e.length-1];let r=ug(e);return r[r.length-1]}function qh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function nu(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function e2(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Hi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function t2(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function zn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function n2(e,t){try{let n=e.sessionStorage.getItem(hg);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function r2(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(hg,JSON.stringify(n))}catch(r){gi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Do.apply(this,arguments)}const as=E.createContext(null),yg=E.createContext(null),ls=E.createContext(null),ss=E.createContext(null),Pi=E.createContext({outlet:null,matches:[],isDataRoute:!1}),xg=E.createContext(null);function us(){return E.useContext(ss)!=null}function cs(){return us()||ae(!1),E.useContext(ss).location}function wg(e){E.useContext(ls).static||E.useLayoutEffect(e)}function Wd(){let{isDataRoute:e}=E.useContext(Pi);return e?m2():i2()}function i2(){us()||ae(!1);let e=E.useContext(as),{basename:t,future:n,navigator:r}=E.useContext(ls),{matches:i}=E.useContext(Pi),{pathname:o}=cs(),a=JSON.stringify(cg(i,n.v7_relativeSplatPath)),l=E.useRef(!1);return wg(()=>{l.current=!0}),E.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=dg(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Zn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}function o2(e,t,n,r){us()||ae(!1);let{navigator:i}=E.useContext(ls),{matches:o}=E.useContext(Pi),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=cs(),f;if(t){var d;let C=typeof t=="string"?_n(t):t;s==="/"||(d=C.pathname)!=null&&d.startsWith(s)||ae(!1),f=C}else f=u;let h=f.pathname||"/",v=h;if(s!=="/"){let C=s.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=pr(e,{pathname:v}),S=c2(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Zn([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Zn([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&S?E.createElement(ss.Provider,{value:{location:Do({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ae.Pop}},S):S}function a2(){let e=p2(),t=os(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const l2=E.createElement(a2,null);class s2 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Pi.Provider,{value:this.props.routeContext},E.createElement(xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u2(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(as);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Pi.Provider,{value:t},r)}function c2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);f>=0||ae(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:v}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,h)=>{let v,y=!1,S=null,C=null;n&&(v=l&&d.route.id?l[d.route.id]:void 0,S=d.route.errorElement||l2,s&&(u<0&&h===0?(g2("route-fallback",!1),y=!0,C=null):u===h&&(y=!0,C=d.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,h+1)),p=()=>{let g;return v?g=S:y?g=C:d.route.Component?g=E.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,E.createElement(u2,{match:d,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?E.createElement(s2,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Sg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sg||{}),Ml=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ml||{});function d2(e){let t=E.useContext(as);return t||ae(!1),t}function f2(e){let t=E.useContext(yg);return t||ae(!1),t}function h2(e){let t=E.useContext(Pi);return t||ae(!1),t}function kg(e){let t=h2(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function p2(){var e;let t=E.useContext(xg),n=f2(Ml.UseRouteError),r=kg(Ml.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function m2(){let{router:e}=d2(Sg.UseNavigateStable),t=kg(Ml.UseNavigateStable),n=E.useRef(!1);return wg(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Do({fromRouteId:t},o)))},[e,t])}const Xh={};function g2(e,t,n){!t&&!Xh[e]&&(Xh[e]=!0)}const Zh={};function v2(e,t){Zh[t]||(Zh[t]=!0,console.warn(t))}const Ar=(e,t,n)=>v2(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function y2(e,t){(e==null?void 0:e.v7_startTransition)===void 0&&Ar("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||!t.v7_relativeSplatPath)&&Ar("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist===void 0&&Ar("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod===void 0&&Ar("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration===void 0&&Ar("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation===void 0&&Ar("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function x2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ae.Pop,navigator:o,static:a=!1,future:l}=e;us()&&ae(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:o,static:a,future:Do({v7_relativeSplatPath:!1},l)}),[s,l,o,a]);typeof r=="string"&&(r=_n(r));let{pathname:f="/",search:d="",hash:h="",state:v=null,key:y="default"}=r,S=E.useMemo(()=>{let C=Jo(f,s);return C==null?null:{location:{pathname:C,search:d,hash:h,state:v,key:y},navigationType:i}},[s,f,d,h,v,y,i]);return S==null?null:E.createElement(ls.Provider,{value:u},E.createElement(ss.Provider,{children:n,value:S}))}new Promise(()=>{});function w2(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tl.apply(this,arguments)}const S2="6";try{window.__reactRouterVersion=S2}catch{}function k2(e,t){return Ax({basename:t==null?void 0:t.basename,future:Tl({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:sx({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||b2(),routes:e,mapRouteProperties:w2,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function b2(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Tl({},t,{errors:j2(t.errors)})),t}function j2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Il(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const C2=E.createContext({isTransitioning:!1}),E2=E.createContext(new Map),P2="startTransition",Jh=q1[P2],_2="flushSync",ep=lx[_2];function R2(e){Jh?Jh(e):e()}function Qi(e){ep?ep(e):e()}class I2{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function M2(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=E.useState(n.state),[a,l]=E.useState(),[s,u]=E.useState({isTransitioning:!1}),[f,d]=E.useState(),[h,v]=E.useState(),[y,S]=E.useState(),C=E.useRef(new Map),{v7_startTransition:m}=r||{},p=E.useCallback(z=>{m?R2(z):z()},[m]),g=E.useCallback((z,A)=>{let{deletedFetchers:$,flushSync:X,viewTransitionOpts:se}=A;$.forEach(xe=>C.current.delete(xe)),z.fetchers.forEach((xe,ct)=>{xe.data!==void 0&&C.current.set(ct,xe.data)});let pe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!se||pe){X?Qi(()=>o(z)):p(()=>o(z));return}if(X){Qi(()=>{h&&(f&&f.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:se.currentLocation,nextLocation:se.nextLocation})});let xe=n.window.document.startViewTransition(()=>{Qi(()=>o(z))});xe.finished.finally(()=>{Qi(()=>{d(void 0),v(void 0),l(void 0),u({isTransitioning:!1})})}),Qi(()=>v(xe));return}h?(f&&f.resolve(),h.skipTransition(),S({state:z,currentLocation:se.currentLocation,nextLocation:se.nextLocation})):(l(z),u({isTransitioning:!0,flushSync:!1,currentLocation:se.currentLocation,nextLocation:se.nextLocation}))},[n.window,h,f,C,p]);E.useLayoutEffect(()=>n.subscribe(g),[n,g]),E.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new I2)},[s]),E.useEffect(()=>{if(f&&a&&n.window){let z=a,A=f.promise,$=n.window.document.startViewTransition(async()=>{p(()=>o(z)),await A});$.finished.finally(()=>{d(void 0),v(void 0),l(void 0),u({isTransitioning:!1})}),v($)}},[p,a,f,n.window]),E.useEffect(()=>{f&&a&&i.location.key===a.location.key&&f.resolve()},[f,h,i.location,a]),E.useEffect(()=>{!s.isTransitioning&&y&&(l(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),S(void 0))},[s.isTransitioning,y]),E.useEffect(()=>{},[]);let j=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:z=>n.navigate(z),push:(z,A,$)=>n.navigate(z,{state:A,preventScrollReset:$==null?void 0:$.preventScrollReset}),replace:(z,A,$)=>n.navigate(z,{replace:!0,state:A,preventScrollReset:$==null?void 0:$.preventScrollReset})}),[n]),_=n.basename||"/",x=E.useMemo(()=>({router:n,navigator:j,static:!1,basename:_}),[n,j,_]),R=E.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return E.useEffect(()=>y2(r,n.future),[r,n.future]),E.createElement(E.Fragment,null,E.createElement(as.Provider,{value:x},E.createElement(yg.Provider,{value:i},E.createElement(E2.Provider,{value:C.current},E.createElement(C2.Provider,{value:s},E.createElement(x2,{basename:_,location:i.location,navigationType:i.historyAction,navigator:j,future:R},i.initialized||n.future.v7_partialHydration?E.createElement(T2,{routes:n.routes,future:n.future,state:i}):t))))),null)}const T2=E.memo(z2);function z2(e){let{routes:t,future:n,state:r}=e;return o2(t,void 0,r,n)}var tp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tp||(tp={}));var np;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(np||(np={}));var it=function(){return it=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},it.apply(this,arguments)};function vi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Ee="-ms-",ho="-moz-",ge="-webkit-",bg="comm",ds="rule",Vd="decl",O2="@import",jg="@keyframes",L2="@layer",Cg=Math.abs,Hd=String.fromCharCode,Pc=Object.assign;function D2(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function Eg(e){return e.trim()}function vn(e,t){return(e=t.exec(e))?e[0]:e}function re(e,t,n){return e.replace(t,n)}function Za(e,t,n){return e.indexOf(t,n)}function Ge(e,t){return e.charCodeAt(t)|0}function yi(e,t,n){return e.slice(t,n)}function un(e){return e.length}function Pg(e){return e.length}function to(e,t){return t.push(e),e}function N2(e,t){return e.map(t).join("")}function rp(e,t){return e.filter(function(n){return!vn(n,t)})}var fs=1,xi=1,_g=0,$t=0,Ue=0,_i="";function hs(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:fs,column:xi,length:a,return:"",siblings:l}}function On(e,t){return Pc(hs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fr(e){for(;e.root;)e=On(e.root,{children:[e]});to(e,e.siblings)}function A2(){return Ue}function F2(){return Ue=$t>0?Ge(_i,--$t):0,xi--,Ue===10&&(xi=1,fs--),Ue}function tn(){return Ue=$t<_g?Ge(_i,$t++):0,xi++,Ue===10&&(xi=1,fs++),Ue}function jr(){return Ge(_i,$t)}function Ja(){return $t}function ps(e,t){return yi(_i,e,t)}function _c(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $2(e){return fs=xi=1,_g=un(_i=e),$t=0,[]}function B2(e){return _i="",e}function ru(e){return Eg(ps($t-1,Rc(e===91?e+2:e===40?e+1:e)))}function U2(e){for(;(Ue=jr())&&Ue<33;)tn();return _c(e)>2||_c(Ue)>3?"":" "}function W2(e,t){for(;--t&&tn()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return ps(e,Ja()+(t<6&&jr()==32&&tn()==32))}function Rc(e){for(;tn();)switch(Ue){case e:return $t;case 34:case 39:e!==34&&e!==39&&Rc(Ue);break;case 40:e===41&&Rc(e);break;case 92:tn();break}return $t}function V2(e,t){for(;tn()&&e+Ue!==57;)if(e+Ue===84&&jr()===47)break;return"/*"+ps(t,$t-1)+"*"+Hd(e===47?e:tn())}function H2(e){for(;!_c(jr());)tn();return ps(e,$t)}function Q2(e){return B2(el("",null,null,null,[""],e=$2(e),0,[0],e))}function el(e,t,n,r,i,o,a,l,s){for(var u=0,f=0,d=a,h=0,v=0,y=0,S=1,C=1,m=1,p=0,g="",j=i,_=o,x=r,R=g;C;)switch(y=p,p=tn()){case 40:if(y!=108&&Ge(R,d-1)==58){Za(R+=re(ru(p),"&","&\f"),"&\f",Cg(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:R+=ru(p);break;case 9:case 10:case 13:case 32:R+=U2(y);break;case 92:R+=W2(Ja()-1,7);continue;case 47:switch(jr()){case 42:case 47:to(Y2(V2(tn(),Ja()),t,n,s),s);break;default:R+="/"}break;case 123*S:l[u++]=un(R)*m;case 125*S:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+f:m==-1&&(R=re(R,/\f/g,"")),v>0&&un(R)-d&&to(v>32?op(R+";",r,n,d-1,s):op(re(R," ","")+";",r,n,d-2,s),s);break;case 59:R+=";";default:if(to(x=ip(R,t,n,u,f,i,l,g,j=[],_=[],d,o),o),p===123)if(f===0)el(R,t,x,x,j,o,d,l,_);else switch(h===99&&Ge(R,3)===110?100:h){case 100:case 108:case 109:case 115:el(e,x,x,r&&to(ip(e,x,x,0,0,i,l,g,i,j=[],d,_),_),i,_,d,l,r?j:_);break;default:el(R,x,x,x,[""],_,0,l,_)}}u=f=v=0,S=m=1,g=R="",d=a;break;case 58:d=1+un(R),v=y;default:if(S<1){if(p==123)--S;else if(p==125&&S++==0&&F2()==125)continue}switch(R+=Hd(p),p*S){case 38:m=f>0?1:(R+="\f",-1);break;case 44:l[u++]=(un(R)-1)*m,m=1;break;case 64:jr()===45&&(R+=ru(tn())),h=jr(),f=d=un(g=R+=H2(Ja())),p++;break;case 45:y===45&&un(R)==2&&(S=0)}}return o}function ip(e,t,n,r,i,o,a,l,s,u,f,d){for(var h=i-1,v=i===0?o:[""],y=Pg(v),S=0,C=0,m=0;S<r;++S)for(var p=0,g=yi(e,h+1,h=Cg(C=a[S])),j=e;p<y;++p)(j=Eg(C>0?v[p]+" "+g:re(g,/&\f/g,v[p])))&&(s[m++]=j);return hs(e,t,n,i===0?ds:l,s,u,f,d)}function Y2(e,t,n,r){return hs(e,t,n,bg,Hd(A2()),yi(e,2,-2),0,r)}function op(e,t,n,r,i){return hs(e,t,n,Vd,yi(e,0,r),yi(e,r+1,-1),r,i)}function Rg(e,t,n){switch(D2(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+e+e;case 4789:return ho+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+ho+e+Ee+e+e;case 5936:switch(Ge(e,t+11)){case 114:return ge+e+Ee+re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+Ee+re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+Ee+re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ge+e+Ee+e+e;case 6165:return ge+e+Ee+"flex-"+e+e;case 5187:return ge+e+re(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return ge+e+Ee+"flex-item-"+re(e,/flex-|-self/g,"")+(vn(e,/flex-|baseline/)?"":Ee+"grid-row-"+re(e,/flex-|-self/g,""))+e;case 4675:return ge+e+Ee+"flex-line-pack"+re(e,/align-content|flex-|-self/g,"")+e;case 5548:return ge+e+Ee+re(e,"shrink","negative")+e;case 5292:return ge+e+Ee+re(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+re(e,"-grow","")+ge+e+Ee+re(e,"grow","positive")+e;case 4554:return ge+re(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return re(re(re(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return re(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return re(re(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+e+e;case 4200:if(!vn(e,/flex-|baseline/))return Ee+"grid-column-align"+yi(e,t)+e;break;case 2592:case 3360:return Ee+re(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,vn(r.props,/grid-\w+-end/)})?~Za(e+(n=n[t].value),"span",0)?e:Ee+re(e,"-start","")+e+Ee+"grid-row-span:"+(~Za(n,"span",0)?vn(n,/\d+/):+vn(n,/\d+/)-+vn(e,/\d+/))+";":Ee+re(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vn(r.props,/grid-\w+-start/)})?e:Ee+re(re(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return re(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return re(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+ho+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Za(e,"stretch",0)?Rg(re(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return re(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return Ee+i+":"+o+u+(a?Ee+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Ge(e,t+6)===121)return re(e,":",":"+ge)+e;break;case 6444:switch(Ge(e,Ge(e,14)===45?18:11)){case 120:return re(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Ee+"$2box$3")+e;case 100:return re(e,":",":"+Ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(e,"scroll-","scroll-snap-")+e}return e}function zl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function G2(e,t,n,r){switch(e.type){case L2:if(e.children.length)break;case O2:case Vd:return e.return=e.return||e.value;case bg:return"";case jg:return e.return=e.value+"{"+zl(e.children,r)+"}";case ds:if(!un(e.value=e.props.join(",")))return""}return un(n=zl(e.children,r))?e.return=e.value+"{"+n+"}":""}function K2(e){var t=Pg(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function q2(e){return function(t){t.root||(t=t.return)&&e(t)}}function X2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vd:e.return=Rg(e.value,e.length,n);return;case jg:return zl([On(e,{value:re(e.value,"@","@"+ge)})],r);case ds:if(e.length)return N2(n=e.props,function(i){switch(vn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(On(e,{props:[re(i,/:(read-\w+)/,":"+ho+"$1")]})),Fr(On(e,{props:[i]})),Pc(e,{props:rp(n,r)});break;case"::placeholder":Fr(On(e,{props:[re(i,/:(plac\w+)/,":"+ge+"input-$1")]})),Fr(On(e,{props:[re(i,/:(plac\w+)/,":"+ho+"$1")]})),Fr(On(e,{props:[re(i,/:(plac\w+)/,Ee+"input-$1")]})),Fr(On(e,{props:[i]})),Pc(e,{props:rp(n,r)});break}return""})}}var Z2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},wi=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",Ig="active",Mg="data-styled-version",ms="6.1.8",Qd=`/*!sc*/
`,Yd=typeof window<"u"&&"HTMLElement"in window,J2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),ew={},gs=Object.freeze([]),Si=Object.freeze({});function Tg(e,t,n){return n===void 0&&(n=Si),e.theme!==n.theme&&e.theme||t||n.theme}var zg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nw=/(^-|-$)/g;function ap(e){return e.replace(tw,"-").replace(nw,"")}var rw=/(a)(d)/gi,_a=52,lp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ic(e){var t,n="";for(t=Math.abs(e);t>_a;t=t/_a|0)n=lp(t%_a)+n;return(lp(t%_a)+n).replace(rw,"$1-$2")}var iu,Og=5381,ei=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Lg=function(e){return ei(Og,e)};function Gd(e){return Ic(Lg(e)>>>0)}function iw(e){return e.displayName||e.name||"Component"}function ou(e){return typeof e=="string"&&!0}var Dg=typeof Symbol=="function"&&Symbol.for,Ng=Dg?Symbol.for("react.memo"):60115,ow=Dg?Symbol.for("react.forward_ref"):60112,aw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ag={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sw=((iu={})[ow]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},iu[Ng]=Ag,iu);function sp(e){return("type"in(t=e)&&t.type.$$typeof)===Ng?Ag:"$$typeof"in e?sw[e.$$typeof]:aw;var t}var uw=Object.defineProperty,cw=Object.getOwnPropertyNames,up=Object.getOwnPropertySymbols,dw=Object.getOwnPropertyDescriptor,fw=Object.getPrototypeOf,cp=Object.prototype;function Fg(e,t,n){if(typeof t!="string"){if(cp){var r=fw(t);r&&r!==cp&&Fg(e,r,n)}var i=cw(t);up&&(i=i.concat(up(t)));for(var o=sp(e),a=sp(t),l=0;l<i.length;++l){var s=i[l];if(!(s in lw||n&&n[s]||a&&s in a||o&&s in o)){var u=dw(t,s);try{uw(e,s,u)}catch{}}}}return e}function ki(e){return typeof e=="function"}function Kd(e){return typeof e=="object"&&"styledComponentId"in e}function Sr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ol(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function No(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Mc(e,t,n){if(n===void 0&&(n=!1),!n&&!No(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Mc(e[r],t[r]);else if(No(t))for(var r in t)e[r]=Mc(e[r],t[r]);return e}function qd(e,t){Object.defineProperty(e,"toString",{value:t})}function ea(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var hw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ea(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Qd);return n},e}(),tl=new Map,Ll=new Map,nl=1,Ra=function(e){if(tl.has(e))return tl.get(e);for(;Ll.has(nl);)nl++;var t=nl++;return tl.set(e,t),Ll.set(t,e),t},pw=function(e,t){nl=t+1,tl.set(e,t),Ll.set(t,e)},mw="style[".concat(wi,"][").concat(Mg,'="').concat(ms,'"]'),gw=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},yw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Qd),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(gw);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(pw(f,u),vw(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function xw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $g=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(wi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wi,Ig),r.setAttribute(Mg,ms);var a=xw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},ww=function(){function e(t){this.element=$g(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw ea(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sw=function(){function e(t){this.element=$g(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),kw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dp=Yd,bw={isServer:!Yd,useCSSOMInjection:!J2},Dl=function(){function e(t,n,r){t===void 0&&(t=Si),n===void 0&&(n={});var i=this;this.options=it(it({},bw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Yd&&dp&&(dp=!1,function(o){for(var a=document.querySelectorAll(mw),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(wi)!==Ig&&(yw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),qd(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var h=function(m){return Ll.get(m)}(d);if(h===void 0)return"continue";var v=o.names.get(h),y=a.getGroup(d);if(v===void 0||y.length===0)return"continue";var S="".concat(wi,".g").concat(d,'[id="').concat(h,'"]'),C="";v!==void 0&&v.forEach(function(m){m.length>0&&(C+="".concat(m,","))}),s+="".concat(y).concat(S,'{content:"').concat(C,'"}').concat(Qd)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ra(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(it(it({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new kw(i):r?new ww(i):new Sw(i)}(this.options),new hw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ra(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ra(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ra(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jw=/&/g,Cw=/^\s*\/\/.*$/gm;function Bg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Bg(n.children,t)),n})}function Ew(e){var t,n,r,i=e===void 0?Si:e,o=i.options,a=o===void 0?Si:o,l=i.plugins,s=l===void 0?gs:l,u=function(h,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},f=s.slice();f.push(function(h){h.type===ds&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(jw,n).replace(r,u))}),a.prefix&&f.push(X2),f.push(G2);var d=function(h,v,y,S){v===void 0&&(v=""),y===void 0&&(y=""),S===void 0&&(S="&"),t=S,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var C=h.replace(Cw,""),m=Q2(y||v?"".concat(y," ").concat(v," { ").concat(C," }"):C);a.namespace&&(m=Bg(m,a.namespace));var p=[];return zl(m,K2(f.concat(q2(function(g){return p.push(g)})))),p};return d.hash=s.length?s.reduce(function(h,v){return v.name||ea(15),ei(h,v.name)},Og).toString():"",d}var Pw=new Dl,Tc=Ew(),Ug=Xt.createContext({shouldForwardProp:void 0,styleSheet:Pw,stylis:Tc});Ug.Consumer;Xt.createContext(void 0);function zc(){return E.useContext(Ug)}var Wg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Tc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,qd(this,function(){throw ea(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Tc),this.name+t.hash},e}(),_w=function(e){return e>="A"&&e<="Z"};function fp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_w(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Vg=function(e){return e==null||e===!1||e===""},Hg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Vg(o)&&(Array.isArray(o)&&o.isCss||ki(o)?r.push("".concat(fp(i),":"),o,";"):No(o)?r.push.apply(r,vi(vi(["".concat(i," {")],Hg(o),!1),["}"],!1)):r.push("".concat(fp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Z2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jn(e,t,n,r){if(Vg(e))return[];if(Kd(e))return[".".concat(e.styledComponentId)];if(ki(e)){if(!ki(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Jn(i,t,n,r)}var o;return e instanceof Wg?n?(e.inject(n,r),[e.getName(r)]):[e]:No(e)?Hg(e):Array.isArray(e)?Array.prototype.concat.apply(gs,e.map(function(a){return Jn(a,t,n,r)})):[e.toString()]}function Qg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ki(n)&&!Kd(n))return!1}return!0}var Rw=Lg(ms),Iw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Qg(t),this.componentId=n,this.baseHash=ei(Rw,n),this.baseStyle=r,Dl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Sr(i,this.staticRulesId);else{var o=Ol(Jn(this.rules,t,n,r)),a=Ic(ei(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Sr(i,a),this.staticRulesId=a}else{for(var s=ei(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var h=Ol(Jn(d,t,n,r));s=ei(s,h+f),u+=h}}if(u){var v=Ic(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Sr(i,v)}}return i},e}(),Xd=Xt.createContext(void 0);Xd.Consumer;var au={};function Mw(e,t,n){var r=Kd(e),i=e,o=!ou(e),a=t.attrs,l=a===void 0?gs:a,s=t.componentId,u=s===void 0?function(j,_){var x=typeof j!="string"?"sc":ap(j);au[x]=(au[x]||0)+1;var R="".concat(x,"-").concat(Gd(ms+x+au[x]));return _?"".concat(_,"-").concat(R):R}(t.displayName,t.parentComponentId):s,f=t.displayName,d=f===void 0?function(j){return ou(j)?"styled.".concat(j):"Styled(".concat(iw(j),")")}(e):f,h=t.displayName&&t.componentId?"".concat(ap(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(j,_){return S(j,_)&&C(j,_)}}else y=S}var m=new Iw(n,h,r?i.componentStyle:void 0);function p(j,_){return function(x,R,z){var A=x.attrs,$=x.componentStyle,X=x.defaultProps,se=x.foldedComponentIds,pe=x.styledComponentId,xe=x.target,ct=Xt.useContext(Xd),Rt=zc(),we=x.shouldForwardProp||Rt.shouldForwardProp,F=Tg(R,ct,X)||Si,Y=function($e,je,qe){for(var M,T=it(it({},je),{className:void 0,theme:qe}),L=0;L<$e.length;L+=1){var I=ki(M=$e[L])?M(T):M;for(var Z in I)T[Z]=Z==="className"?Sr(T[Z],I[Z]):Z==="style"?it(it({},T[Z]),I[Z]):I[Z]}return je.className&&(T.className=Sr(T.className,je.className)),T}(A,R,F),q=Y.as||xe,te={};for(var ie in Y)Y[ie]===void 0||ie[0]==="$"||ie==="as"||ie==="theme"&&Y.theme===F||(ie==="forwardedAs"?te.as=Y.forwardedAs:we&&!we(ie,q)||(te[ie]=Y[ie]));var Ve=function($e,je){var qe=zc(),M=$e.generateAndInjectStyles(je,qe.styleSheet,qe.stylis);return M}($,Y),Me=Sr(se,pe);return Ve&&(Me+=" "+Ve),Y.className&&(Me+=" "+Y.className),te[ou(q)&&!zg.has(q)?"class":"className"]=Me,te.ref=z,E.createElement(q,te)}(g,j,_)}p.displayName=d;var g=Xt.forwardRef(p);return g.attrs=v,g.componentStyle=m,g.displayName=d,g.shouldForwardProp=y,g.foldedComponentIds=r?Sr(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=h,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(_){for(var x=[],R=1;R<arguments.length;R++)x[R-1]=arguments[R];for(var z=0,A=x;z<A.length;z++)Mc(_,A[z],!0);return _}({},i.defaultProps,j):j}}),qd(g,function(){return".".concat(g.styledComponentId)}),o&&Fg(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function hp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var pp=function(e){return Object.assign(e,{isCss:!0})};function Zd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ki(e)||No(e))return pp(Jn(hp(gs,vi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jn(r):pp(Jn(hp(r,t)))}function Oc(e,t,n){if(n===void 0&&(n=Si),!t)throw ea(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Zd.apply(void 0,vi([i],o,!1)))};return r.attrs=function(i){return Oc(e,t,it(it({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Oc(e,t,it(it({},n),i))},r}var Yg=function(e){return Oc(Mw,e)},k=Yg;zg.forEach(function(e){k[e]=Yg(e)});var Tw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Qg(t),Dl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ol(Jn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Dl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Jd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zd.apply(void 0,vi([e],t,!1)),i="sc-global-".concat(Gd(JSON.stringify(r))),o=new Tw(r,i),a=function(s){var u=zc(),f=Xt.useContext(Xd),d=Xt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(d,s,u.styleSheet,f,u.stylis),Xt.useLayoutEffect(function(){if(!u.styleSheet.server)return l(d,s,u.styleSheet,f,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,s,u.styleSheet,f,u.stylis]),null};function l(s,u,f,d,h){if(o.isStatic)o.renderStyles(s,ew,f,h);else{var v=it(it({},u),{theme:Tg(u,d,a.defaultProps)});o.renderStyles(s,v,f,h)}}return Xt.memo(a)}function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ol(Zd.apply(void 0,vi([e],t,!1))),i=Gd(r);return new Wg(i,r)}const zw="/assets/offgridlogo2-C_BI3BgU.png",Ow=k.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: ${({$scrolled:e})=>e?"rgba(18, 54, 14, 0.95)":"transparent"};
  backdrop-filter: ${({$scrolled:e})=>e?"blur(10px)":"none"};
  border-bottom: ${({$scrolled:e})=>e?"1px solid rgba(255, 222, 89, 0.1)":"1px solid transparent"};
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Lw=k.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 1001;

  img {
    height: 55px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    img {
      height: 45px;
    }
  }
`,Dw=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 968px) {
    display: none;
  }
`,Nw=k.button`
  position: relative;
  background: none;
  border: none;
  padding: 0.6rem 1.1rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #ffde59;
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover {
    color: #ffffff;

    &::after {
      width: 60%;
    }
  }

  &.active {
    color: #ffde59;

    &::after {
      width: 60%;
    }
  }
`,Aw=k.button`
  padding: 0.7rem 1.5rem;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 10px rgba(255, 222, 89, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 222, 89, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,Fw=k.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: ${({$isOpen:e})=>e?"rgba(255, 222, 89, 0.1)":"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1001;
  transition: background 0.3s ease;

  @media (max-width: 968px) {
    display: flex;
  }
`,$w=k.div`
  width: 22px;
  height: 16px;
  position: relative;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffde59;
    border-radius: 2px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      top: 0;
      transform: ${({$isOpen:e})=>e?"translateY(7px) rotate(45deg)":"none"};
    }

    &:nth-child(2) {
      top: 7px;
      opacity: ${({$isOpen:e})=>e?0:1};
    }

    &:nth-child(3) {
      top: 14px;
      transform: ${({$isOpen:e})=>e?"translateY(-7px) rotate(-45deg)":"none"};
    }
  }
`,Bw=k.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background: linear-gradient(180deg, #12360e 0%, #0d2a0a 100%);
  padding: 6rem 2rem 2rem;
  transform: ${({$isOpen:e})=>e?"translateX(0)":"translateX(100%)"};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  box-shadow: ${({$isOpen:e})=>e?"-10px 0 40px rgba(0, 0, 0, 0.3)":"none"};

  @media (min-width: 969px) {
    display: none;
  }
`,Uw=k.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;

  &:hover, &.active {
    color: #ffde59;
    padding-left: 0.5rem;
  }
`,Ww=k.button`
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(255, 222, 89, 0.4);
  }
`,Vw=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({$isOpen:e})=>e?1:0};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: 998;

  @media (min-width: 969px) {
    display: none;
  }
`,Hw=k.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,Qw=k.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
`,mp=k.a`
  display: block;
  font-size: 1rem;
  color: #ffde59;
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`,lu=[{id:"about",label:"About"},{id:"services",label:"Services"},{id:"why-off-grid",label:"Why Off-Grid"}],Yw=({onContactClick:e})=>{const[t,n]=E.useState(!1),[r,i]=E.useState(!1),[o,a]=E.useState(""),l=Wd(),s=cs();E.useEffect(()=>{const h=()=>{i(window.scrollY>50);const v=lu.map(y=>y.id);for(const y of v.reverse()){const S=document.getElementById(y);if(S&&S.getBoundingClientRect().top<=150){a(y);break}}};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]),E.useEffect(()=>{const h=()=>{window.innerWidth>968&&n(!1)};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),E.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const u=()=>{s.pathname==="/"?window.scrollTo({top:0,behavior:"smooth"}):l("/"),n(!1)},f=h=>{const v=document.getElementById(h);if(v){const S=v.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:S-80,behavior:"smooth"})}n(!1)},d=()=>{e?e():l("/",{state:{scrollToContact:!0}}),n(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs(Ow,{$scrolled:r,children:[c.jsx(Lw,{onClick:u,children:c.jsx("img",{src:zw,alt:"Off Grid Land Development"})}),c.jsxs(Dw,{children:[lu.map(h=>c.jsx(Nw,{className:o===h.id?"active":"",onClick:()=>f(h.id),children:h.label},h.id)),c.jsx(Aw,{onClick:d,children:"Get a Quote"})]}),c.jsx(Fw,{$isOpen:t,onClick:()=>n(!t),"aria-label":"Toggle menu",children:c.jsxs($w,{$isOpen:t,children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})})]}),c.jsx(Vw,{$isOpen:t,onClick:()=>n(!1)}),c.jsxs(Bw,{$isOpen:t,children:[lu.map(h=>c.jsx(Uw,{className:o===h.id?"active":"",onClick:()=>f(h.id),children:h.label},h.id)),c.jsx(Ww,{onClick:d,children:"Get a Quote"}),c.jsxs(Hw,{children:[c.jsx(Qw,{children:"Contact Us"}),c.jsx(mp,{href:"tel:+15055551234",children:"(505) 555-1234"}),c.jsx(mp,{href:"mailto:info@offgridland.dev",children:"info@offgridland.dev"})]})]})]})},ef=E.memo(Yw);var Gw=Object.defineProperty,Kw=(e,t)=>{for(var n in t)Gw(e,n,{get:t[n],enumerable:!0})},rn={};Kw(rn,{assign:()=>Zw,colors:()=>er,createStringInterpolator:()=>sf,skipAnimation:()=>e1,to:()=>Jg,willAdvance:()=>uf});var tf=na(),ee=e=>ta(e,tf),nf=na();ee.write=e=>ta(e,nf);var vs=na();ee.onStart=e=>ta(e,vs);var rf=na();ee.onFrame=e=>ta(e,rf);var of=na();ee.onFinish=e=>ta(e,of);var li=[];ee.setTimeout=(e,t)=>{const n=ee.now()+t,r=()=>{const o=li.findIndex(a=>a.cancel==r);~o&&li.splice(o,1),Wn-=~o?1:0},i={time:n,handler:e,cancel:r};return li.splice(Gg(n),0,i),Wn+=1,Kg(),i};var Gg=e=>~(~li.findIndex(t=>t.time>e)||~li.length);ee.cancel=e=>{vs.delete(e),rf.delete(e),of.delete(e),tf.delete(e),nf.delete(e)};ee.sync=e=>{Lc=!0,ee.batchedUpdates(e),Lc=!1};ee.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,ee.onStart(n)}return r.handler=e,r.cancel=()=>{vs.delete(n),t=null},r};var af=typeof window<"u"?window.requestAnimationFrame:()=>{};ee.use=e=>af=e;ee.now=typeof performance<"u"?()=>performance.now():Date.now;ee.batchedUpdates=e=>e();ee.catch=console.error;ee.frameLoop="always";ee.advance=()=>{ee.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Xg()};var Un=-1,Wn=0,Lc=!1;function ta(e,t){Lc?(t.delete(e),e(0)):(t.add(e),Kg())}function Kg(){Un<0&&(Un=0,ee.frameLoop!=="demand"&&af(qg))}function qw(){Un=-1}function qg(){~Un&&(af(qg),ee.batchedUpdates(Xg))}function Xg(){const e=Un;Un=ee.now();const t=Gg(Un);if(t&&(Zg(li.splice(0,t),n=>n.handler()),Wn-=t),!Wn){qw();return}vs.flush(),tf.flush(e?Math.min(64,Un-e):16.667),rf.flush(),nf.flush(),of.flush()}function na(){let e=new Set,t=e;return{add(n){Wn+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return Wn-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,Wn-=t.size,Zg(t,r=>r(n)&&e.add(r)),Wn+=e.size,t=e)}}}function Zg(e,t){e.forEach(n=>{try{t(n)}catch(r){ee.catch(r)}})}function Dc(){}var Xw=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),N={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function yn(e,t){if(N.arr(e)){if(!N.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var ue=(e,t)=>e.forEach(t);function hn(e,t,n){if(N.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var jt=e=>N.und(e)?[]:N.arr(e)?e:[e];function po(e,t){if(e.size){const n=Array.from(e);e.clear(),ue(n,t)}}var no=(e,...t)=>po(e,n=>n(...t)),lf=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),sf,Jg,er=null,e1=!1,uf=Dc,Zw=e=>{e.to&&(Jg=e.to),e.now&&(ee.now=e.now),e.colors!==void 0&&(er=e.colors),e.skipAnimation!=null&&(e1=e.skipAnimation),e.createStringInterpolator&&(sf=e.createStringInterpolator),e.requestAnimationFrame&&ee.use(e.requestAnimationFrame),e.batchedUpdates&&(ee.batchedUpdates=e.batchedUpdates),e.willAdvance&&(uf=e.willAdvance),e.frameLoop&&(ee.frameLoop=e.frameLoop)},mo=new Set,Lt=[],su=[],Nl=0,ys={get idle(){return!mo.size&&!Lt.length},start(e){Nl>e.priority?(mo.add(e),ee.onStart(Jw)):(t1(e),ee(Nc))},advance:Nc,sort(e){if(Nl)ee.onFrame(()=>ys.sort(e));else{const t=Lt.indexOf(e);~t&&(Lt.splice(t,1),n1(e))}},clear(){Lt=[],mo.clear()}};function Jw(){mo.forEach(t1),mo.clear(),ee(Nc)}function t1(e){Lt.includes(e)||n1(e)}function n1(e){Lt.splice(e5(Lt,t=>t.priority>e.priority),0,e)}function Nc(e){const t=su;for(let n=0;n<Lt.length;n++){const r=Lt[n];Nl=r.priority,r.idle||(uf(r),r.advance(e),r.idle||t.push(r))}return Nl=0,su=Lt,su.length=0,Lt=t,Lt.length>0}function e5(e,t){const n=e.findIndex(t);return n<0?e.length:n}var t5=(e,t,n)=>Math.min(Math.max(n,e),t),n5={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Zt="[-+]?\\d*\\.?\\d+",Al=Zt+"%";function xs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var r5=new RegExp("rgb"+xs(Zt,Zt,Zt)),i5=new RegExp("rgba"+xs(Zt,Zt,Zt,Zt)),o5=new RegExp("hsl"+xs(Zt,Al,Al)),a5=new RegExp("hsla"+xs(Zt,Al,Al,Zt)),l5=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,s5=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,u5=/^#([0-9a-fA-F]{6})$/,c5=/^#([0-9a-fA-F]{8})$/;function d5(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=u5.exec(e))?parseInt(t[1]+"ff",16)>>>0:er&&er[e]!==void 0?er[e]:(t=r5.exec(e))?($r(t[1])<<24|$r(t[2])<<16|$r(t[3])<<8|255)>>>0:(t=i5.exec(e))?($r(t[1])<<24|$r(t[2])<<16|$r(t[3])<<8|yp(t[4]))>>>0:(t=l5.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=c5.exec(e))?parseInt(t[1],16)>>>0:(t=s5.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=o5.exec(e))?(gp(vp(t[1]),Ia(t[2]),Ia(t[3]))|255)>>>0:(t=a5.exec(e))?(gp(vp(t[1]),Ia(t[2]),Ia(t[3]))|yp(t[4]))>>>0:null}function uu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function gp(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=uu(i,r,e+1/3),a=uu(i,r,e),l=uu(i,r,e-1/3);return Math.round(o*255)<<24|Math.round(a*255)<<16|Math.round(l*255)<<8}function $r(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function vp(e){return(parseFloat(e)%360+360)%360/360}function yp(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function Ia(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function xp(e){let t=d5(e);if(t===null)return e;t=t||0;const n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,o=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${o})`}var Ao=(e,t,n)=>{if(N.fun(e))return e;if(N.arr(e))return Ao({range:e,output:t,extrapolate:n});if(N.str(e.output[0]))return sf(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",l=r.extrapolateRight||r.extrapolate||"extend",s=r.easing||(u=>u);return u=>{const f=h5(u,o);return f5(u,o[f],o[f+1],i[f],i[f+1],s,a,l,r.map)}};function f5(e,t,n,r,i,o,a,l,s){let u=s?s(e):e;if(u<t){if(a==="identity")return u;a==="clamp"&&(u=t)}if(u>n){if(l==="identity")return u;l==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=o(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function h5(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var p5=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*e,i=t==="end"?Math.floor(r):Math.ceil(r);return t5(0,1,i/e)},Fl=1.70158,Ma=Fl*1.525,wp=Fl+1,Sp=2*Math.PI/3,kp=2*Math.PI/4.5,Ta=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,m5={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>wp*e*e*e-Fl*e*e,easeOutBack:e=>1+wp*Math.pow(e-1,3)+Fl*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((Ma+1)*2*e-Ma)/2:(Math.pow(2*e-2,2)*((Ma+1)*(e*2-2)+Ma)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Sp),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Sp)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*kp))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*kp)/2+1,easeInBounce:e=>1-Ta(1-e),easeOutBounce:Ta,easeInOutBounce:e=>e<.5?(1-Ta(1-2*e))/2:(1+Ta(2*e-1))/2,steps:p5},Fo=Symbol.for("FluidValue.get"),bi=Symbol.for("FluidValue.observers"),Ot=e=>!!(e&&e[Fo]),ft=e=>e&&e[Fo]?e[Fo]():e,bp=e=>e[bi]||null;function g5(e,t){e.eventObserved?e.eventObserved(t):e(t)}function $o(e,t){const n=e[bi];n&&n.forEach(r=>{g5(r,t)})}var r1=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");v5(this,e)}},v5=(e,t)=>i1(e,Fo,t);function Ri(e,t){if(e[Fo]){let n=e[bi];n||i1(e,bi,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Bo(e,t){const n=e[bi];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[bi]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var i1=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),rl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,y5=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,jp=new RegExp(`(${rl.source})(%|[a-z]+)`,"i"),x5=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ws=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,o1=e=>{const[t,n]=w5(e);if(!t||lf())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||e}else{if(n&&ws.test(n))return o1(n);if(n)return n}return e},w5=e=>{const t=ws.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},cu,S5=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,a1=e=>{cu||(cu=er?new RegExp(`(${Object.keys(er).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(o=>ft(o).replace(ws,o1).replace(y5,xp).replace(cu,xp)),n=t.map(o=>o.match(rl).map(Number)),i=n[0].map((o,a)=>n.map(l=>{if(!(a in l))throw Error('The arity of each "output" value must be equal');return l[a]})).map(o=>Ao({...e,output:o}));return o=>{var s;const a=!jp.test(t[0])&&((s=t.find(u=>jp.test(u)))==null?void 0:s.replace(rl,""));let l=0;return t[0].replace(rl,()=>`${i[l++](o)}${a||""}`).replace(x5,S5)}},cf="react-spring: ",l1=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${cf}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},k5=l1(console.warn);function b5(){k5(`${cf}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var j5=l1(console.warn);function C5(){j5(`${cf}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Ss(e){return N.str(e)&&(e[0]=="#"||/\d/.test(e)||!lf()&&ws.test(e)||e in(er||{}))}var df=lf()?E.useEffect:E.useLayoutEffect,E5=()=>{const e=E.useRef(!1);return df(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function s1(){const e=E.useState()[1],t=E5();return()=>{t.current&&e(Math.random())}}function P5(e,t){const[n]=E.useState(()=>({inputs:t,result:e()})),r=E.useRef(),i=r.current;let o=i;return o?t&&o.inputs&&_5(t,o.inputs)||(o={inputs:t,result:e()}):o=n,E.useEffect(()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)},[o]),o.result}function _5(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var u1=e=>E.useEffect(e,R5),R5=[];function Cp(e){const t=E.useRef();return E.useEffect(()=>{t.current=e}),t.current}var Uo=Symbol.for("Animated:node"),I5=e=>!!e&&e[Uo]===e,sn=e=>e&&e[Uo],ff=(e,t)=>Xw(e,Uo,t),ks=e=>e&&e[Uo]&&e[Uo].getPayload(),c1=class{constructor(){ff(this,this)}getPayload(){return this.payload||[]}},ra=class extends c1{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,N.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ra(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return N.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,N.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Wo=class extends ra{constructor(e){super(0),this._string=null,this._toString=Ao({output:[e,e]})}static create(e){return new Wo(e)}getValue(){const e=this._string;return e??(this._string=this._toString(this._value))}setValue(e){if(N.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=Ao({output:[this.getValue(),e]})),this._value=0,super.reset()}},$l={dependencies:null},bs=class extends c1{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return hn(this.source,(n,r)=>{I5(n)?t[r]=n.getValue(e):Ot(n)?t[r]=ft(n):e||(t[r]=n)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ue(this.payload,e=>e.reset())}_makePayload(e){if(e){const t=new Set;return hn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){$l.dependencies&&Ot(e)&&$l.dependencies.add(e);const t=ks(e);t&&ue(t,n=>this.add(n))}},d1=class extends bs{constructor(e){super(e)}static create(e){return new d1(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();return e.length==t.length?t.map((n,r)=>n.setValue(e[r])).some(Boolean):(super.setValue(e.map(M5)),!0)}};function M5(e){return(Ss(e)?Wo:ra).create(e)}function Ac(e){const t=sn(e);return t?t.constructor:N.arr(e)?d1:Ss(e)?Wo:ra}var Ep=(e,t)=>{const n=!N.fun(e)||e.prototype&&e.prototype.isReactComponent;return E.forwardRef((r,i)=>{const o=E.useRef(null),a=n&&E.useCallback(y=>{o.current=O5(i,y)},[i]),[l,s]=z5(r,t),u=s1(),f=()=>{const y=o.current;if(n&&!y)return;(y?t.applyAnimatedValues(y,l.getValue(!0)):!1)===!1&&u()},d=new T5(f,s),h=E.useRef();df(()=>(h.current=d,ue(s,y=>Ri(y,d)),()=>{h.current&&(ue(h.current.deps,y=>Bo(y,h.current)),ee.cancel(h.current.update))})),E.useEffect(f,[]),u1(()=>()=>{const y=h.current;ue(y.deps,S=>Bo(S,y))});const v=t.getComponentProps(l.getValue());return E.createElement(e,{...v,ref:a})})},T5=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&ee.write(this.update)}};function z5(e,t){const n=new Set;return $l.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new bs(e),$l.dependencies=null,[e,n]}function O5(e,t){return e&&(N.fun(e)?e(t):e.current=t),t}var Pp=Symbol.for("AnimatedComponent"),L5=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new bs(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=a=>{const l=_p(a)||"Anonymous";return N.str(a)?a=o[a]||(o[a]=Ep(a,i)):a=a[Pp]||(a[Pp]=Ep(a,i)),a.displayName=`Animated(${l})`,a};return hn(e,(a,l)=>{N.arr(e)&&(l=_p(a)),o[l]=o(a)}),{animated:o}},_p=e=>N.str(e)?e:e&&N.str(e.displayName)?e.displayName:N.fun(e)&&e.name||null;function gr(e,...t){return N.fun(e)?e(...t):e}var go=(e,t)=>e===!0||!!(t&&e&&(N.fun(e)?e(t):jt(e).includes(t))),f1=(e,t)=>N.obj(e)?t&&e[t]:e,h1=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,D5=e=>e,hf=(e,t=D5)=>{let n=N5;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const o=t(e[i],i);N.und(o)||(r[i]=o)}return r},N5=["config","onProps","onStart","onChange","onPause","onResume","onRest"],A5={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function F5(e){const t={};let n=0;if(hn(e,(r,i)=>{A5[i]||(t[i]=r,n++)}),n)return t}function p1(e){const t=F5(e);if(t){const n={to:t};return hn(e,(r,i)=>i in t||(n[i]=r)),n}return{...e}}function Vo(e){return e=ft(e),N.arr(e)?e.map(Vo):Ss(e)?rn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function $5(e){for(const t in e)return!0;return!1}function Fc(e){return N.fun(e)||N.arr(e)&&N.obj(e[0])}function B5(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function U5(e,t){var n;t&&e.ref!==t&&((n=e.ref)==null||n.delete(e),t.add(e),e.ref=t)}var W5={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},$c={...W5.default,mass:1,damping:1,easing:m5.linear,clamp:!1},V5=class{constructor(){this.velocity=0,Object.assign(this,$c)}};function H5(e,t,n){n&&(n={...n},Rp(n,t),t={...n,...t}),Rp(e,t),Object.assign(e,t);for(const a in $c)e[a]==null&&(e[a]=$c[a]);let{frequency:r,damping:i}=e;const{mass:o}=e;return N.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r),e}function Rp(e,t){if(!N.und(t.decay))e.duration=void 0;else{const n=!N.und(t.tension)||!N.und(t.friction);(n||!N.und(t.frequency)||!N.und(t.damping)||!N.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var Ip=[],Q5=class{constructor(){this.changed=!1,this.values=Ip,this.toValues=null,this.fromValues=Ip,this.config=new V5,this.immediate=!1}};function m1(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise((a,l)=>{let s,u,f=go(n.cancel??(r==null?void 0:r.cancel),t);if(f)v();else{N.und(n.pause)||(i.paused=go(n.pause,t));let y=r==null?void 0:r.pause;y!==!0&&(y=i.paused||go(y,t)),s=gr(n.delay||0,t),y?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),s=u.time-ee.now()}function h(){s>0&&!rn.skipAnimation?(i.delayed=!0,u=ee.setTimeout(v,s),i.pauseQueue.add(d),i.timeouts.add(u)):v()}function v(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),e<=(i.cancelId||0)&&(f=!0);try{o.start({...n,callId:e,cancel:f},a)}catch(y){l(y)}}})}var pf=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?si(e.get()):t.every(n=>n.noop)?g1(e.get()):qt(e.get(),t.every(n=>n.finished)),g1=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),qt=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),si=e=>({value:e,cancelled:!0,finished:!1});function v1(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:l,promise:s}=n;return!o&&e===l&&!t.reset?s:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=hf(t,(C,m)=>m==="onRest"?void 0:C);let f,d;const h=new Promise((C,m)=>(f=C,d=m)),v=C=>{const m=i<=(n.cancelId||0)&&si(r)||i!==n.asyncId&&qt(r,!1);if(m)throw C.result=m,d(C),C},y=(C,m)=>{const p=new Mp,g=new Tp;return(async()=>{if(rn.skipAnimation)throw Ho(n),g.result=qt(r,!1),d(g),g;v(p);const j=N.obj(C)?{...C}:{...m,to:C};j.parentId=i,hn(u,(x,R)=>{N.und(j[R])&&(j[R]=x)});const _=await r.start(j);return v(p),n.paused&&await new Promise(x=>{n.resumeQueue.add(x)}),_})()};let S;if(rn.skipAnimation)return Ho(n),qt(r,!1);try{let C;N.arr(e)?C=(async m=>{for(const p of m)await y(p)})(e):C=Promise.resolve(e(y,r.stop.bind(r))),await Promise.all([C.then(f),h]),S=qt(r.get(),!0,!1)}catch(C){if(C instanceof Mp)S=C.result;else if(C instanceof Tp)S=C.result;else throw C}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?l:void 0,n.promise=o?s:void 0)}return N.fun(a)&&ee.batchedUpdates(()=>{a(S,r,r.item)}),S})()}function Ho(e,t){po(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Mp=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Tp=class extends Error{constructor(){super("SkipAnimationSignal")}},Bc=e=>e instanceof mf,Y5=1,mf=class extends r1{constructor(){super(...arguments),this.id=Y5++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=sn(this);return e&&e.getValue()}to(...e){return rn.to(this,e)}interpolate(...e){return b5(),rn.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){$o(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ys.sort(this),$o(this,{type:"priority",parent:this,priority:e})}},Ir=Symbol.for("SpringPhase"),y1=1,Uc=2,Wc=4,du=e=>(e[Ir]&y1)>0,Tn=e=>(e[Ir]&Uc)>0,Yi=e=>(e[Ir]&Wc)>0,zp=(e,t)=>t?e[Ir]|=Uc|y1:e[Ir]&=~Uc,Op=(e,t)=>t?e[Ir]|=Wc:e[Ir]&=~Wc,G5=class extends mf{constructor(e,t){if(super(),this.animation=new Q5,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!N.und(e)||!N.und(t)){const n=N.obj(e)?{...e}:{...t,from:e};N.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Tn(this)||this._state.asyncTo)||Yi(this)}get goal(){return ft(this.animation.to)}get velocity(){const e=sn(this);return e instanceof ra?e.lastVelocity||0:e.getPayload().map(t=>t.lastVelocity||0)}get hasAnimated(){return du(this)}get isAnimating(){return Tn(this)}get isPaused(){return Yi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=ks(r.to);!a&&Ot(r.to)&&(i=jt(ft(r.to))),r.values.forEach((u,f)=>{if(u.done)return;const d=u.constructor==Wo?1:a?a[f].lastPosition:i[f];let h=r.immediate,v=d;if(!h){if(v=u.lastPosition,o.tension<=0){u.done=!0;return}let y=u.elapsedTime+=e;const S=r.fromValues[f],C=u.v0!=null?u.v0:u.v0=N.arr(o.velocity)?o.velocity[f]:o.velocity;let m;const p=o.precision||(S==d?.005:Math.min(1,Math.abs(d-S)*.001));if(N.und(o.duration))if(o.decay){const g=o.decay===!0?.998:o.decay,j=Math.exp(-(1-g)*y);v=S+C/(1-g)*(1-j),h=Math.abs(u.lastPosition-v)<=p,m=C*j}else{m=u.lastVelocity==null?C:u.lastVelocity;const g=o.restVelocity||p/10,j=o.clamp?0:o.bounce,_=!N.und(j),x=S==d?u.v0>0:S<d;let R,z=!1;const A=1,$=Math.ceil(e/A);for(let X=0;X<$&&(R=Math.abs(m)>g,!(!R&&(h=Math.abs(d-v)<=p,h)));++X){_&&(z=v==d||v>d==x,z&&(m=-m*j,v=d));const se=-o.tension*1e-6*(v-d),pe=-o.friction*.001*m,xe=(se+pe)/o.mass;m=m+xe*A,v=v+m*A}}else{let g=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,u.durationProgress>0&&(u.elapsedTime=o.duration*u.durationProgress,y=u.elapsedTime+=e)),g=(o.progress||0)+y/this._memoizedDuration,g=g>1?1:g<0?0:g,u.durationProgress=g),v=S+o.easing(g)*(d-S),m=(v-u.lastPosition)/e,h=g==1}u.lastVelocity=m,Number.isNaN(v)&&(console.warn("Got NaN while animating:",this),h=!0)}a&&!a[f].done&&(h=!1),h?u.done=!0:t=!1,u.setValue(v,o.round)&&(n=!0)});const l=sn(this),s=l.getValue();if(t){const u=ft(r.to);(s!==u||n)&&!o.decay?(l.setValue(u),this._onChange(u)):n&&o.decay&&this._onChange(s),this._stop()}else n&&this._onChange(s)}set(e){return ee.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Tn(this)){const{to:e,config:t}=this.animation;ee.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return N.und(e)?(n=this.queue||[],this.queue=[]):n=[N.obj(e)?e:{...t,to:e}],Promise.all(n.map(r=>this._update(r))).then(r=>pf(this,r))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ho(this._state,e&&this._lastCallId),ee.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=N.obj(n)?n[t]:n,(n==null||Fc(n))&&(n=void 0),r=N.obj(r)?r[t]:r,r==null&&(r=void 0);const i={to:n,from:r};return du(this)||(e.reverse&&([n,r]=[r,n]),r=ft(r),N.und(r)?sn(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,hf(e,(a,l)=>/^on/.test(l)?f1(a,n):a)),Dp(this,e,"onProps"),Ki(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return m1(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Yi(this)||(Op(this,!0),no(o.pauseQueue),Ki(this,"onPause",qt(this,Gi(this,this.animation.to)),this))},resume:()=>{Yi(this)&&(Op(this,!1),Tn(this)&&this._resume(),no(o.resumeQueue),Ki(this,"onResume",qt(this,Gi(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(a=>{if(e.loop&&a.finished&&!(t&&a.noop)){const l=x1(e);if(l)return this._update(l,!0)}return a})}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(si(this));const r=!N.und(e.to),i=!N.und(e.from);if(r||i)if(t.callId>this._lastToId)this._lastToId=t.callId;else return n(si(this));const{key:o,defaultProps:a,animation:l}=this,{to:s,from:u}=l;let{to:f=s,from:d=u}=e;i&&!r&&(!t.default||N.und(f))&&(f=d),t.reverse&&([f,d]=[d,f]);const h=!yn(d,u);h&&(l.from=d),d=ft(d);const v=!yn(f,s);v&&this._focus(f);const y=Fc(t.to),{config:S}=l,{decay:C,velocity:m}=S;(r||i)&&(S.velocity=0),t.config&&!y&&H5(S,gr(t.config,o),t.config!==a.config?gr(a.config,o):void 0);let p=sn(this);if(!p||N.und(f))return n(qt(this,!0));const g=N.und(t.reset)?i&&!t.default:!N.und(d)&&go(t.reset,o),j=g?d:this.get(),_=Vo(f),x=N.num(_)||N.arr(_)||Ss(_),R=!y&&(!x||go(a.immediate||t.immediate,o));if(v){const X=Ac(f);if(X!==p.constructor)if(R)p=this._set(_);else throw Error(`Cannot animate between ${p.constructor.name} and ${X.name}, as the "to" prop suggests`)}const z=p.constructor;let A=Ot(f),$=!1;if(!A){const X=g||!du(this)&&h;(v||X)&&($=yn(Vo(j),_),A=!$),(!yn(l.immediate,R)&&!R||!yn(S.decay,C)||!yn(S.velocity,m))&&(A=!0)}if($&&Tn(this)&&(l.changed&&!g?A=!0:A||this._stop(s)),!y&&((A||Ot(s))&&(l.values=p.getPayload(),l.toValues=Ot(f)?null:z==Wo?[1]:jt(_)),l.immediate!=R&&(l.immediate=R,!R&&!g&&this._set(s)),A)){const{onRest:X}=l;ue(q5,pe=>Dp(this,t,pe));const se=qt(this,Gi(this,s));no(this._pendingCalls,se),this._pendingCalls.add(n),l.changed&&ee.batchedUpdates(()=>{var pe;l.changed=!g,X==null||X(se,this),g?gr(a.onRest,se):(pe=l.onStart)==null||pe.call(l,se,this)})}g&&this._set(j),y?n(v1(t.to,t,this._state,this)):A?this._start():Tn(this)&&!v?this._pendingCalls.add(n):n(g1(j))}_focus(e){const t=this.animation;e!==t.to&&(bp(this)&&this._detach(),t.to=e,bp(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ot(t)&&(Ri(t,this),Bc(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ot(e)&&Bo(e,this)}_set(e,t=!0){const n=ft(e);if(!N.und(n)){const r=sn(this);if(!r||!yn(n,r.getValue())){const i=Ac(n);!r||r.constructor!=i?ff(this,i.create(n)):r.setValue(n),r&&ee.batchedUpdates(()=>{this._onChange(n,t)})}}return sn(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ki(this,"onStart",qt(this,Gi(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),gr(this.animation.onChange,e,this)),gr(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;sn(this).reset(ft(e.to)),e.immediate||(e.fromValues=e.values.map(t=>t.lastPosition)),Tn(this)||(zp(this,!0),Yi(this)||this._resume())}_resume(){rn.skipAnimation?this.finish():ys.start(this)}_stop(e,t){if(Tn(this)){zp(this,!1);const n=this.animation;ue(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),$o(this,{type:"idle",parent:this});const r=t?si(this.get()):qt(this.get(),Gi(this,e??n.to));no(this._pendingCalls,r),n.changed&&(n.changed=!1,Ki(this,"onRest",r,this))}}};function Gi(e,t){const n=Vo(t),r=Vo(e.get());return yn(r,n)}function x1(e,t=e.loop,n=e.to){const r=gr(t);if(r){const i=r!==!0&&p1(r),o=(i||e).reverse,a=!i||i.reset;return Qo({...e,loop:t,default:!1,pause:void 0,to:!o||Fc(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function Qo(e){const{to:t,from:n}=e=p1(e),r=new Set;return N.obj(t)&&Lp(t,r),N.obj(n)&&Lp(n,r),e.keys=r.size?Array.from(r):null,e}function K5(e){const t=Qo(e);return N.und(t.default)&&(t.default=hf(t)),t}function Lp(e,t){hn(e,(n,r)=>n!=null&&t.add(r))}var q5=["onStart","onRest","onChange","onPause","onResume"];function Dp(e,t,n){e.animation[n]=t[n]!==h1(t,n)?f1(t[n],e.key):void 0}function Ki(e,t,...n){var r,i,o,a;(i=(r=e.animation)[t])==null||i.call(r,...n),(a=(o=e.defaultProps)[t])==null||a.call(o,...n)}var X5=["onStart","onChange","onRest"],Z5=1,J5=class{constructor(e,t){this.id=Z5++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(const t in e){const n=e[t];N.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Qo(e)),this}start(e){let{queue:t}=this;return e?t=jt(e).map(Qo):this.queue=[],this._flush?this._flush(this,t):(j1(this,t),Vc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;ue(jt(t),r=>n[r].stop(!!e))}else Ho(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(N.und(e))this.start({pause:!0});else{const t=this.springs;ue(jt(e),n=>t[n].pause())}return this}resume(e){if(N.und(e))this.start({pause:!1});else{const t=this.springs;ue(jt(e),n=>t[n].resume())}return this}each(e){hn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,po(e,([l,s])=>{s.value=this.get(),l(s,this,this._item)}));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&po(t,([l,s])=>{s.value=a,l(s,this,this._item)}),o&&(this._started=!1,po(n,([l,s])=>{s.value=a,l(s,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;ee.onFrame(this._onFrame)}};function Vc(e,t){return Promise.all(t.map(n=>w1(e,n))).then(n=>pf(e,n))}async function w1(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:l,onResolve:s}=t,u=N.obj(t.default)&&t.default;a&&(t.loop=!1),i===!1&&(t.to=null),o===!1&&(t.from=null);const f=N.arr(i)||N.fun(i)?i:void 0;f?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):ue(X5,S=>{const C=t[S];if(N.fun(C)){const m=e._events[S];t[S]=({finished:p,cancelled:g})=>{const j=m.get(C);j?(p||(j.finished=!1),g&&(j.cancelled=!0)):m.set(C,{value:null,finished:p||!1,cancelled:g||!1})},u&&(u[S]=t[S])}});const d=e._state;t.pause===!d.paused?(d.paused=t.pause,no(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map(S=>e.springs[S].start(t)),v=t.cancel===!0||h1(t,"cancel")===!0;(f||v&&d.asyncId)&&h.push(m1(++e._lastAsyncId,{props:t,state:d,actions:{pause:Dc,resume:Dc,start(S,C){v?(Ho(d,e._lastAsyncId),C(si(e))):(S.onRest=l,C(v1(f,S,d,e)))}}})),d.paused&&await new Promise(S=>{d.resumeQueue.add(S)});const y=pf(e,await Promise.all(h));if(a&&y.finished&&!(n&&y.noop)){const S=x1(t,a,i);if(S)return j1(e,[S]),w1(e,S,!0)}return s&&ee.batchedUpdates(()=>s(y,e,e.item)),y}function Np(e,t){const n={...e.springs};return t&&ue(jt(t),r=>{N.und(r.keys)&&(r=Qo(r)),N.obj(r.to)||(r={...r,to:void 0}),b1(n,r,i=>k1(i))}),S1(e,n),n}function S1(e,t){hn(t,(n,r)=>{e.springs[r]||(e.springs[r]=n,Ri(n,e))})}function k1(e,t){const n=new G5;return n.key=e,t&&Ri(n,t),n}function b1(e,t,n){t.keys&&ue(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function j1(e,t){ue(t,n=>{b1(e.springs,n,r=>k1(r,e))})}var js=({children:e,...t})=>{const n=E.useContext(Bl),r=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=P5(()=>({pause:r,immediate:i}),[r,i]);const{Provider:o}=Bl;return E.createElement(o,{value:t},e)},Bl=eS(js,{});js.Provider=Bl.Provider;js.Consumer=Bl.Consumer;function eS(e,t){return Object.assign(e,E.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var tS=()=>{const e=[],t=function(r){C5();const i=[];return ue(e,(o,a)=>{if(N.und(r))i.push(o.start());else{const l=n(r,o,a);l&&i.push(o.start(l))}}),i};t.current=e,t.add=function(r){e.includes(r)||e.push(r)},t.delete=function(r){const i=e.indexOf(r);~i&&e.splice(i,1)},t.pause=function(){return ue(e,r=>r.pause(...arguments)),this},t.resume=function(){return ue(e,r=>r.resume(...arguments)),this},t.set=function(r){ue(e,(i,o)=>{const a=N.fun(r)?r(o,i):r;a&&i.set(a)})},t.start=function(r){const i=[];return ue(e,(o,a)=>{if(N.und(r))i.push(o.start());else{const l=this._getProps(r,o,a);l&&i.push(o.start(l))}}),i},t.stop=function(){return ue(e,r=>r.stop(...arguments)),this},t.update=function(r){return ue(e,(i,o)=>i.update(this._getProps(r,i,o))),this};const n=function(r,i,o){return N.fun(r)?r(o,i):r};return t._getProps=n,t};function nS(e,t,n){const r=N.fun(t)&&t;r&&!n&&(n=[]);const i=E.useMemo(()=>r||arguments.length==3?tS():void 0,[]),o=E.useRef(0),a=s1(),l=E.useMemo(()=>({ctrls:[],queue:[],flush(m,p){const g=Np(m,p);return o.current>0&&!l.queue.length&&!Object.keys(g).some(_=>!m.springs[_])?Vc(m,p):new Promise(_=>{S1(m,g),l.queue.push(()=>{_(Vc(m,p))}),a()})}}),[]),s=E.useRef([...l.ctrls]),u=[],f=Cp(e)||0;E.useMemo(()=>{ue(s.current.slice(e,f),m=>{B5(m,i),m.stop(!0)}),s.current.length=e,d(f,e)},[e]),E.useMemo(()=>{d(0,Math.min(f,e))},n);function d(m,p){for(let g=m;g<p;g++){const j=s.current[g]||(s.current[g]=new J5(null,l.flush)),_=r?r(g,j):t[g];_&&(u[g]=K5(_))}}const h=s.current.map((m,p)=>Np(m,u[p])),v=E.useContext(js),y=Cp(v),S=v!==y&&$5(v);df(()=>{o.current++,l.ctrls=s.current;const{queue:m}=l;m.length&&(l.queue=[],ue(m,p=>p())),ue(s.current,(p,g)=>{i==null||i.add(p),S&&p.start({default:v});const j=u[g];j&&(U5(p,j.ref),p.ref?p.queue.push(j):p.start(j))})}),u1(()=>()=>{ue(l.ctrls,m=>m.stop(!0))});const C=h.map(m=>({...m}));return i?[C,i]:C}function rS(e,t){const n=N.fun(e),[[r],i]=nS(1,n?e:[e],n?t||[]:t);return n||arguments.length==2?[r,i]:r}var iS=class extends mf{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ao(...t);const n=this._get(),r=Ac(n);ff(this,r.create(n))}advance(e){const t=this._get(),n=this.get();yn(t,n)||(sn(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ap(this._active)&&fu(this)}_get(){const e=N.arr(this.source)?this.source.map(ft):jt(ft(this.source));return this.calc(...e)}_start(){this.idle&&!Ap(this._active)&&(this.idle=!1,ue(ks(this),e=>{e.done=!1}),rn.skipAnimation?(ee.batchedUpdates(()=>this.advance()),fu(this)):ys.start(this))}_attach(){let e=1;ue(jt(this.source),t=>{Ot(t)&&Ri(t,this),Bc(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){ue(jt(this.source),e=>{Ot(e)&&Bo(e,this)}),this._active.clear(),fu(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=jt(this.source).reduce((t,n)=>Math.max(t,(Bc(n)?n.priority:0)+1),0))}};function oS(e){return e.idle!==!1}function Ap(e){return!e.size||Array.from(e).every(oS)}function fu(e){e.idle||(e.idle=!0,ue(ks(e),t=>{t.done=!0}),$o(e,{type:"idle",parent:e}))}rn.assign({createStringInterpolator:a1,to:(e,t)=>new iS(e,t)});var C1=/^--/;function aS(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!C1.test(e)&&!(vo.hasOwnProperty(e)&&vo[e])?t+"px":(""+t).trim()}var Fp={};function lS(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:l,...s}=t,u=Object.values(s),f=Object.keys(s).map(d=>n||e.hasAttribute(d)?d:Fp[d]||(Fp[d]=d.replace(/([A-Z])/g,h=>"-"+h.toLowerCase())));i!==void 0&&(e.textContent=i);for(const d in r)if(r.hasOwnProperty(d)){const h=aS(d,r[d]);C1.test(d)?e.style.setProperty(d,h):e.style[d]=h}f.forEach((d,h)=>{e.setAttribute(d,u[h])}),o!==void 0&&(e.scrollTop=o),a!==void 0&&(e.scrollLeft=a),l!==void 0&&e.setAttribute("viewBox",l)}var vo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sS=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),uS=["Webkit","Ms","Moz","O"];vo=Object.keys(vo).reduce((e,t)=>(uS.forEach(n=>e[sS(n,t)]=e[t]),e),vo);var cS=/^(matrix|translate|scale|rotate|skew)/,dS=/^(translate)/,fS=/^(rotate|skew)/,hu=(e,t)=>N.num(e)&&e!==0?e+t:e,il=(e,t)=>N.arr(e)?e.every(n=>il(n,t)):N.num(e)?e===t:parseFloat(e)===t,hS=class extends bs{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push(a=>[`translate3d(${a.map(l=>hu(l,"px")).join(",")})`,il(a,0)])),hn(r,(a,l)=>{if(l==="transform")i.push([a||""]),o.push(s=>[s,s===""]);else if(cS.test(l)){if(delete r[l],N.und(a))return;const s=dS.test(l)?"px":fS.test(l)?"deg":"";i.push(jt(a)),o.push(l==="rotate3d"?([u,f,d,h])=>[`rotate3d(${u},${f},${d},${hu(h,s)})`,il(h,0)]:u=>[`${l}(${u.map(f=>hu(f,s)).join(",")})`,il(u,l.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new pS(i,o)),super(r)}},pS=class extends r1{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ue(this.inputs,(n,r)=>{const i=ft(n[0]),[o,a]=this.transforms[r](N.arr(i)?i:n.map(ft));e+=" "+o,t=t&&a}),t?"none":e}observerAdded(e){e==1&&ue(this.inputs,t=>ue(t,n=>Ot(n)&&Ri(n,this)))}observerRemoved(e){e==0&&ue(this.inputs,t=>ue(t,n=>Ot(n)&&Bo(n,this)))}eventObserved(e){e.type=="change"&&(this._value=null),$o(this,e)}},mS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];rn.assign({batchedUpdates:is.unstable_batchedUpdates,createStringInterpolator:a1,colors:n5});var gS=L5(mS,{applyAnimatedValues:lS,createAnimatedStyle:e=>new hS(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),vS=gS.animated;const yS="/assets/ziaspinner-BC00nBBk.png",xS=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #12360e;
`,wS=k(vS.img)`
  width: 100px;
  height: 100px;
`,SS=()=>{const[e,t]=E.useState(!1),n=rS({to:{transform:e?"rotate(360deg)":"rotate(0deg)"},from:{transform:"rotate(0deg)"},reset:!0,onRest:()=>{e&&setTimeout(()=>{t(!1),requestAnimationFrame(()=>t(!0))},1e3)},config:{duration:1e3}});return E.useEffect(()=>{t(!0)},[]),c.jsx(xS,{children:c.jsx(wS,{style:n,src:yS,alt:"Loading..."})})},kS="/assets/heromovieedited-optimized-aXQ1eQks.webm",ia=Rn`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bS=Rn`
  from { opacity: 0; }
  to { opacity: 1; }
`,jS=Rn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,CS=k.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  width: 100%;
  overflow: hidden;
`,ES=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`,PS=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(18, 54, 14, 0.75) 0%,
    rgba(18, 54, 14, 0.5) 50%,
    rgba(18, 54, 14, 0.85) 100%
  );
  z-index: 1;
`,_S=k.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  padding: 0 2rem;
`,RS=k.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${ia} 0.8s ease forwards;
  animation-delay: 0.2s;
  
  &::before,
  &::after {
    content: '—';
    margin: 0 0.75rem;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }
`,IS=k.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${ia} 0.8s ease forwards;
  animation-delay: 0.4s;
  
  span {
    color: #ffde59;
  }
`,MS=k.p`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 650px;
  margin: 0 auto 2rem;
  opacity: 0;
  animation: ${ia} 0.8s ease forwards;
  animation-delay: 0.6s;
`,TS=k.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${ia} 0.8s ease forwards;
  animation-delay: 0.8s;
`,pu=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;

  svg {
    width: 18px;
    height: 18px;
    color: #ffde59;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`,zS=k.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${ia} 0.8s ease forwards;
  animation-delay: 1s;
`,OS=k.button`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 222, 89, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 222, 89, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,LS=k.button`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #ffffff;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #ffde59;
    color: #ffde59;
    background: rgba(255, 222, 89, 0.1);
  }
`,DS=k.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: ${bS} 0.8s ease forwards 1.4s;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
  }
`,NS=k.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #ffde59, transparent);
  animation: ${jS} 2s ease-in-out infinite;
`,AS=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"4"}),c.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),FS=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 2v6M12 22v-6M4.93 10.93l1.41 1.41M17.66 10.93l-1.41 1.41"}),c.jsx("path",{d:"M2 12h2M20 12h2"}),c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M12 15v7"})]}),$S=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"3",y:"8",width:"18",height:"10",rx:"2"}),c.jsx("path",{d:"M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2"}),c.jsx("path",{d:"M12 18v4M8 22h8"})]}),BS=({scrollToContact:e})=>c.jsxs(CS,{children:[c.jsx(ES,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:c.jsx("source",{src:kS,type:"video/webm"})}),c.jsx(PS,{}),c.jsxs(_S,{children:[c.jsx(RS,{children:"New Mexico's Off-Grid Specialists"}),c.jsxs(IS,{children:["Turn Raw Land into ",c.jsx("span",{children:"Your Off-Grid Home"})]}),c.jsx(MS,{children:"We transform remote properties into fully functional, self-sufficient homesteads. From well drilling to solar power to septic systems — everything you need to live off the grid."}),c.jsxs(TS,{children:[c.jsxs(pu,{children:[c.jsx(AS,{}),"Solar Power Systems"]}),c.jsxs(pu,{children:[c.jsx(FS,{}),"Well Drilling"]}),c.jsxs(pu,{children:[c.jsx($S,{}),"Septic Installation"]})]}),c.jsxs(zS,{children:[c.jsx(OS,{onClick:e,children:"Start Your Project"}),c.jsx(LS,{onClick:()=>{var t;(t=document.getElementById("services"))==null||t.scrollIntoView({behavior:"smooth"})},children:"Our Services"})]})]}),c.jsxs(DS,{children:[c.jsx("span",{children:"Explore"}),c.jsx(NS,{})]})]}),US=E.memo(BS);Rn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const WS=k.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #0d2a0a 0%, #12360e 50%, #0d2a0a 100%);
  overflow: hidden;
`,VS=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 20% 0%, rgba(255, 222, 89, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(255, 222, 89, 0.03) 0%, transparent 50%);
  pointer-events: none;
`,HS=k.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`,QS=k.div`
  text-align: center;
  margin-bottom: 4rem;
`,YS=k.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1rem;
`,GS=k.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: #ffde59;
  }
`,KS=k.p`
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`,qS=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,XS=k.div`
  @media (max-width: 968px) {
    order: 2;
  }
`,mu=k.p`
  font-size: 1.1rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  strong {
    color: #ffde59;
    font-weight: 600;
  }
`,ZS=k.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 968px) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`,za=k.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 222, 89, 0.2);
    transform: translateY(-4px);
  }
`,Oa=k.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffde59;
  margin-bottom: 0.5rem;
  line-height: 1;
`,La=k.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`,JS=k.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,gu=k.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 222, 89, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,vu=k.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.15) 0%, rgba(255, 222, 89, 0.05) 100%);
  border-radius: 16px;

  svg {
    width: 28px;
    height: 28px;
    color: #ffde59;
  }
`,yu=k.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
`,xu=k.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`,ek=k.div`
  text-align: center;
  margin-top: 4rem;
`,tk=k.button`
  padding: 1.1rem 2.8rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 222, 89, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 222, 89, 0.4);
  }
`,nk=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),c.jsx("path",{d:"M2 17l10 5 10-5"}),c.jsx("path",{d:"M2 12l10 5 10-5"})]}),rk=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),ik=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})}),ok=({onContactClick:e})=>c.jsxs(WS,{id:"about",children:[c.jsx(VS,{}),c.jsxs(HS,{children:[c.jsxs(QS,{children:[c.jsx(YS,{children:"Who We Are"}),c.jsxs(GS,{children:["New Mexico's Trusted ",c.jsx("span",{children:"Off-Grid Experts"})]}),c.jsx(KS,{children:"A small, dedicated team with deep roots in the Land of Enchantment — helping families achieve true independence on their own land."})]}),c.jsxs(qS,{children:[c.jsxs(XS,{children:[c.jsxs(mu,{children:[c.jsx("strong",{children:"Off Grid Land Development"})," was born from a simple belief: everyone deserves the freedom to live on their own terms. We've spent over two decades mastering the art of off-grid living in New Mexico's diverse and challenging terrain."]}),c.jsxs(mu,{children:["Unlike big contractors who treat off-grid as an afterthought, it's",c.jsx("strong",{children:" all we do"}),". We understand the unique demands of remote properties — from the high desert plains to mountain valleys. Every well we drill, every solar panel we install, every septic system we design is built for reliability when you're miles from the nearest utility line."]}),c.jsx(mu,{children:"We're not just building infrastructure. We're helping you build a life of independence, sustainability, and connection to the land."})]}),c.jsxs(ZS,{children:[c.jsxs(za,{children:[c.jsx(Oa,{children:"20+"}),c.jsx(La,{children:"Years Experience"})]}),c.jsxs(za,{children:[c.jsx(Oa,{children:"500+"}),c.jsx(La,{children:"Projects Completed"})]}),c.jsxs(za,{children:[c.jsx(Oa,{children:"100%"}),c.jsx(La,{children:"Off-Grid Focused"})]}),c.jsxs(za,{children:[c.jsx(Oa,{children:"NM"}),c.jsx(La,{children:"Statewide Service"})]})]})]}),c.jsxs(JS,{children:[c.jsxs(gu,{children:[c.jsx(vu,{children:c.jsx(nk,{})}),c.jsx(yu,{children:"Deep Expertise"}),c.jsx(xu,{children:"Two decades of specialized experience in off-grid solar, well drilling, and septic systems across New Mexico's toughest terrain."})]}),c.jsxs(gu,{children:[c.jsx(vu,{children:c.jsx(rk,{})}),c.jsx(yu,{children:"Truly Local"}),c.jsx(xu,{children:"We live here, we work here, and we understand the unique challenges of building off-grid in the Land of Enchantment."})]}),c.jsxs(gu,{children:[c.jsx(vu,{children:c.jsx(ik,{})}),c.jsx(yu,{children:"Turnkey Solutions"}),c.jsx(xu,{children:"One team, one vision. We handle your entire project from raw land to move-in ready — no juggling multiple contractors."})]})]}),c.jsx(ek,{children:c.jsx(tk,{onClick:e,children:"Let's Build Your Off-Grid Dream"})})]})]}),ak=E.memo(ok);Rn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Rn`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const lk=k.section`
  position: relative;
  padding: 8rem 2rem;
  background: #12360e;
  overflow: hidden;
`,sk=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
`,uk=k.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top:-50px;
  z-index: 1;
`,ck=k.div`
  text-align: center;
  margin-bottom: 5rem;
`,dk=k.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1rem;
`,fk=k.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: #ffde59;
  }
`,hk=k.p`
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.8;
`,pk=k.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`,mk=k.div`
  position: relative;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.$accentColor||"#ffde59"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${e=>e.$accentColor||"#ffde59"}40;
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 100px ${e=>e.$accentColor||"#ffde59"}10;

    &::before {
      opacity: 1;
    }
  }
`,gk=k.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$bgColor||"rgba(255, 222, 89, 0.1)"};
  border-radius: 20px;
  margin-bottom: 1.75rem;

  svg {
    width: 32px;
    height: 32px;
    color: ${e=>e.$iconColor||"#ffde59"};
  }
`,vk=k.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
`,yk=k.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin-bottom: 1.75rem;
`,xk=k.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`,wk=k.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0.75rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: ${e=>e.$checkColor||"#ffde59"};
    margin-top: 2px;
  }
`,Sk=k.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${e=>e.$linkColor||"#ffde59"};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover {
    gap: 0.75rem;

    svg {
      transform: translateX(4px);
    }
  }
`,kk=k.div`
  margin-top: 2rem;
`,bk=k.h3`
  text-align: center;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;

  span {
    color: #ffde59;
  }
`,jk=k.p`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 600px;
  margin: 0 auto 3.5rem;
`,Ck=k.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 222, 89, 0.3) 20%,
      rgba(255, 222, 89, 0.3) 80%,
      transparent
    );

    @media (max-width: 968px) {
      display: none;
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`,E1=k.div`
  text-align: center;
  position: relative;
`,Ek=k.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a4a14 0%, #12360e 100%);
  border: 2px solid rgba(255, 222, 89, 0.3);
  border-radius: 50%;
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffde59;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  ${E1}:hover & {
    border-color: #ffde59;
    box-shadow: 0 0 30px rgba(255, 222, 89, 0.2);
    transform: scale(1.05);
  }
`,Pk=k.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`,_k=k.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  max-width: 200px;
  margin: 0 auto;
`,Rk=k.div`
  margin-top: 5rem;
  padding: 3rem;
  background: linear-gradient(
    135deg,
    rgba(255, 222, 89, 0.1) 0%,
    rgba(255, 222, 89, 0.05) 100%
  );
  border: 1px solid rgba(255, 222, 89, 0.2);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,Ik=k.div`
  flex: 1;
`,Mk=k.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`,Tk=k.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
`,zk=k.button`
  padding: 1.1rem 2.8rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 222, 89, 0.3);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 222, 89, 0.4);
  }
`,Ok=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"4"}),c.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),Lk=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M5 3h14"}),c.jsx("path",{d:"M12 3v18"}),c.jsx("path",{d:"M8 8c0 2.5 1.5 4 4 4s4-1.5 4-4"}),c.jsx("path",{d:"M6 21h12"}),c.jsx("path",{d:"M3 21l3-3"}),c.jsx("path",{d:"M21 21l-3-3"})]}),Dk=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"8",width:"20",height:"10",rx:"2"}),c.jsx("path",{d:"M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2"}),c.jsx("path",{d:"M2 12h20"}),c.jsx("path",{d:"M12 18v4"}),c.jsx("path",{d:"M8 22h8"})]}),Nk=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),Ak=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Fk=[{id:"solar",title:"Off-Grid Solar Power",description:"Complete solar energy systems designed for total independence. We size, design, and install systems that keep your lights on year-round.",icon:Ok,accentColor:"#ffde59",bgColor:"rgba(255, 222, 89, 0.1)",features:["Custom system design & sizing","Premium solar panels & inverters","Battery backup systems","Generator integration","Remote monitoring setup","25-year panel warranties"]},{id:"well",title:"Well Drilling",description:"Professional well drilling for reliable, clean water on your property. We navigate permits, test water quality, and install complete pump systems.",icon:Lk,accentColor:"#5eb3e4",bgColor:"rgba(94, 179, 228, 0.1)",features:["Site assessment & permitting","Residential & agricultural wells","Solar-powered pump systems","Water quality testing","Pressure tank installation","Well rehabilitation services"]},{id:"septic",title:"Septic Systems",description:"Code-compliant septic solutions for any terrain. From conventional systems to advanced treatment units for challenging sites.",icon:Dk,accentColor:"#7ed67e",bgColor:"rgba(126, 214, 126, 0.1)",features:["Soil & perc testing","Engineered system design","Conventional septic tanks","Advanced treatment systems","Full permit management","Maintenance programs"]}],$k=[{number:"1",title:"Consultation",description:"We visit your land and assess your needs"},{number:"2",title:"Design",description:"Custom plans tailored to your property"},{number:"3",title:"Permits",description:"We handle all paperwork and approvals"},{number:"4",title:"Build",description:"Professional installation, done right"}],Bk=({onContactClick:e})=>c.jsxs(lk,{id:"services",children:[c.jsx(sk,{}),c.jsxs(uk,{children:[c.jsxs(ck,{children:[c.jsx(dk,{children:"What We Do"}),c.jsxs(fk,{children:["Complete ",c.jsx("span",{children:"Off-Grid Infrastructure"})]}),c.jsx(hk,{children:"Everything you need to transform raw land into a self-sufficient homestead — all from one trusted team."})]}),c.jsx(pk,{children:Fk.map(t=>c.jsxs(mk,{$accentColor:t.accentColor,children:[c.jsx(gk,{$bgColor:t.bgColor,$iconColor:t.accentColor,children:c.jsx(t.icon,{})}),c.jsx(vk,{children:t.title}),c.jsx(yk,{children:t.description}),c.jsx(xk,{children:t.features.map((n,r)=>c.jsxs(wk,{$checkColor:t.accentColor,children:[c.jsx(Nk,{}),n]},r))}),c.jsxs(Sk,{$linkColor:t.accentColor,onClick:e,children:["Get a Quote ",c.jsx(Ak,{})]})]},t.id))}),c.jsxs(kk,{children:[c.jsxs(bk,{children:["How We ",c.jsx("span",{children:"Work"})]}),c.jsx(jk,{children:"From first call to final inspection, we make off-grid development simple."}),c.jsx(Ck,{children:$k.map((t,n)=>c.jsxs(E1,{children:[c.jsx(Ek,{children:t.number}),c.jsx(Pk,{children:t.title}),c.jsx(_k,{children:t.description})]},n))})]}),c.jsxs(Rk,{children:[c.jsxs(Ik,{children:[c.jsx(Mk,{children:"Ready to Go Off-Grid?"}),c.jsx(Tk,{children:"Get a free consultation and custom quote for your property."})]}),c.jsx(zk,{onClick:e,children:"Start Your Project"})]})]})]}),Uk=E.memo(Bk),Wk=Rn`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,Vk=k.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #12360e 0%, #1a4a14 50%, #12360e 100%);
  overflow: hidden;
`,Hk=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`,wu=k.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 222, 89, 0.08) 0%, transparent 70%);
  animation: ${Wk} 6s ease-in-out infinite;

  &:nth-child(1) {
    width: 400px;
    height: 400px;
    top: -100px;
    left: -100px;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: -50px;
    right: -50px;
    animation-delay: -2s;
  }

  &:nth-child(3) {
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -4s;
  }
`,Qk=k.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`,Yk=k.div`
  text-align: center;
  margin-bottom: 4rem;
`,Gk=k.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1rem;
`,Kk=k.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: #ffde59;
  }
`,qk=k.p`
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.8;
`,Xk=k.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Zk=k.div`
  position: relative;
  padding: 2rem;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ffde59, #f5c842);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 222, 89, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 60px rgba(255, 222, 89, 0.05);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    text-align: center;
  }
`,Jk=k.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.15) 0%, rgba(255, 222, 89, 0.05) 100%);
  border-radius: 14px;
  margin-bottom: 1.25rem;

  svg {
    width: 26px;
    height: 26px;
    color: #ffde59;
  }

  @media (max-width: 640px) {
    margin: 0 auto 1.25rem;
  }
`,e4=k.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
`,t4=k.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
`,n4=k.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 5rem;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 222, 89, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,r4=k.div`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50px;
    background: linear-gradient(180deg, transparent, rgba(255, 222, 89, 0.2), transparent);

    @media (max-width: 768px) {
      display: none;
    }
  }
`,i4=k.div`
  font-size: 2.75rem;
  font-weight: 800;
  color: #ffde59;
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`,o4=k.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`,a4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),c.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),l4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),c.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"})]}),s4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 2a10 10 0 1010 10A10 10 0 0012 2z"}),c.jsx("path",{d:"M12 6v6l4 2"})]}),u4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),c.jsx("polyline",{points:"9 12 11 14 15 10"})]}),c4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"}),c.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"}),c.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),d4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),c.jsx("polyline",{points:"17 6 23 6 23 12"})]}),f4=[{icon:a4,title:"True Independence",description:"No utility bills, no grid dependency. Generate your own power and live on your own terms."},{icon:l4,title:"Long-Term Savings",description:"After initial investment, your monthly costs drop dramatically. No electric or water bills."},{icon:u4,title:"Reliable Systems",description:"Modern off-grid technology is proven and dependable, designed to last for decades."},{icon:s4,title:"Sustainable Living",description:"Reduce your carbon footprint and live in harmony with the land using clean energy."},{icon:c4,title:"Privacy & Peace",description:"Build away from crowded subdivisions. Enjoy the quiet of your own remote sanctuary."},{icon:d4,title:"Property Value",description:"Developed off-grid land with infrastructure is worth significantly more than raw land."}],h4=[{number:"$0",label:"Monthly Utility Bills"},{number:"25+",label:"Year System Lifespan"},{number:"100%",label:"Energy Independence"},{number:"✓",label:"Incentives Available"}],p4=()=>c.jsxs(Vk,{id:"why-off-grid",children:[c.jsxs(Hk,{children:[c.jsx(wu,{}),c.jsx(wu,{}),c.jsx(wu,{})]}),c.jsxs(Qk,{children:[c.jsxs(Yk,{children:[c.jsx(Gk,{children:"The Off-Grid Lifestyle"}),c.jsxs(Kk,{children:["Why Go ",c.jsx("span",{children:"Off-Grid?"})]}),c.jsx(qk,{children:"More than just a trend — it's a lifestyle choice that offers freedom, savings, and a deeper connection to the land you call home."})]}),c.jsx(Xk,{children:f4.map((e,t)=>c.jsxs(Zk,{children:[c.jsx(Jk,{children:c.jsx(e.icon,{})}),c.jsx(e4,{children:e.title}),c.jsx(t4,{children:e.description})]},t))}),c.jsx(n4,{children:h4.map((e,t)=>c.jsxs(r4,{children:[c.jsx(i4,{children:e.number}),c.jsx(o4,{children:e.label})]},t))})]})]}),m4=E.memo(p4);var P1={exports:{}};(function(e,t){(function(n,r){e.exports=r(E)})(typeof self<"u"?self:O1,function(n){return function(r){var i={};function o(a){if(i[a])return i[a].exports;var l=i[a]={i:a,l:!1,exports:{}};return r[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=r,o.c=i,o.d=function(a,l,s){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:s})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(1&l&&(a=o(a)),8&l||4&l&&typeof a=="object"&&a&&a.__esModule)return a;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&l&&typeof a!="string")for(var u in a)o.d(s,u,(function(f){return a[f]}).bind(null,u));return s},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s=2)}([function(r,i){r.exports=n},function(r,i,o){var a={linear:function(l,s,u,f){return(u-s)*l/f+s},easeInQuad:function(l,s,u,f){return(u-s)*(l/=f)*l+s},easeOutQuad:function(l,s,u,f){return-(u-s)*(l/=f)*(l-2)+s},easeInOutQuad:function(l,s,u,f){var d=u-s;return(l/=f/2)<1?d/2*l*l+s:-d/2*(--l*(l-2)-1)+s},easeInCubic:function(l,s,u,f){return(u-s)*(l/=f)*l*l+s},easeOutCubic:function(l,s,u,f){return(u-s)*((l=l/f-1)*l*l+1)+s},easeInOutCubic:function(l,s,u,f){var d=u-s;return(l/=f/2)<1?d/2*l*l*l+s:d/2*((l-=2)*l*l+2)+s},easeInQuart:function(l,s,u,f){return(u-s)*(l/=f)*l*l*l+s},easeOutQuart:function(l,s,u,f){return-(u-s)*((l=l/f-1)*l*l*l-1)+s},easeInOutQuart:function(l,s,u,f){var d=u-s;return(l/=f/2)<1?d/2*l*l*l*l+s:-d/2*((l-=2)*l*l*l-2)+s},easeInQuint:function(l,s,u,f){return(u-s)*(l/=f)*l*l*l*l+s},easeOutQuint:function(l,s,u,f){return(u-s)*((l=l/f-1)*l*l*l*l+1)+s},easeInOutQuint:function(l,s,u,f){var d=u-s;return(l/=f/2)<1?d/2*l*l*l*l*l+s:d/2*((l-=2)*l*l*l*l+2)+s},easeInSine:function(l,s,u,f){var d=u-s;return-d*Math.cos(l/f*(Math.PI/2))+d+s},easeOutSine:function(l,s,u,f){return(u-s)*Math.sin(l/f*(Math.PI/2))+s},easeInOutSine:function(l,s,u,f){return-(u-s)/2*(Math.cos(Math.PI*l/f)-1)+s},easeInExpo:function(l,s,u,f){return l==0?s:(u-s)*Math.pow(2,10*(l/f-1))+s},easeOutExpo:function(l,s,u,f){var d=u-s;return l==f?s+d:d*(1-Math.pow(2,-10*l/f))+s},easeInOutExpo:function(l,s,u,f){var d=u-s;return l===0?s:l===f?s+d:(l/=f/2)<1?d/2*Math.pow(2,10*(l-1))+s:d/2*(2-Math.pow(2,-10*--l))+s},easeInCirc:function(l,s,u,f){return-(u-s)*(Math.sqrt(1-(l/=f)*l)-1)+s},easeOutCirc:function(l,s,u,f){return(u-s)*Math.sqrt(1-(l=l/f-1)*l)+s},easeInOutCirc:function(l,s,u,f){var d=u-s;return(l/=f/2)<1?-d/2*(Math.sqrt(1-l*l)-1)+s:d/2*(Math.sqrt(1-(l-=2)*l)+1)+s},easeInElastic:function(l,s,u,f){var d,h,v,y=u-s;return v=1.70158,l===0?s:(l/=f)==1?s+y:((h=0)||(h=.3*f),(d=y)<Math.abs(y)?(d=y,v=h/4):v=h/(2*Math.PI)*Math.asin(y/d),-d*Math.pow(2,10*(l-=1))*Math.sin((l*f-v)*(2*Math.PI)/h)+s)},easeOutElastic:function(l,s,u,f){var d,h,v,y=u-s;return v=1.70158,l===0?s:(l/=f)==1?s+y:((h=0)||(h=.3*f),(d=y)<Math.abs(y)?(d=y,v=h/4):v=h/(2*Math.PI)*Math.asin(y/d),d*Math.pow(2,-10*l)*Math.sin((l*f-v)*(2*Math.PI)/h)+y+s)},easeInOutElastic:function(l,s,u,f){var d,h,v,y=u-s;return v=1.70158,l===0?s:(l/=f/2)==2?s+y:((h=0)||(h=f*.44999999999999996),(d=y)<Math.abs(y)?(d=y,v=h/4):v=h/(2*Math.PI)*Math.asin(y/d),l<1?d*Math.pow(2,10*(l-=1))*Math.sin((l*f-v)*(2*Math.PI)/h)*-.5+s:d*Math.pow(2,-10*(l-=1))*Math.sin((l*f-v)*(2*Math.PI)/h)*.5+y+s)},easeInBack:function(l,s,u,f,d){return d===void 0&&(d=1.70158),(u-s)*(l/=f)*l*((d+1)*l-d)+s},easeOutBack:function(l,s,u,f,d){return d===void 0&&(d=1.70158),(u-s)*((l=l/f-1)*l*((d+1)*l+d)+1)+s},easeInOutBack:function(l,s,u,f,d){var h=u-s;return d===void 0&&(d=1.70158),(l/=f/2)<1?h/2*(l*l*((1+(d*=1.525))*l-d))+s:h/2*((l-=2)*l*((1+(d*=1.525))*l+d)+2)+s},easeInBounce:function(l,s,u,f){var d=u-s;return d-a.easeOutBounce(f-l,0,d,f)+s},easeOutBounce:function(l,s,u,f){var d=u-s;return(l/=f)<.36363636363636365?d*(7.5625*l*l)+s:l<.7272727272727273?d*(7.5625*(l-=.5454545454545454)*l+.75)+s:l<.9090909090909091?d*(7.5625*(l-=.8181818181818182)*l+.9375)+s:d*(7.5625*(l-=.9545454545454546)*l+.984375)+s},easeInOutBounce:function(l,s,u,f){var d=u-s;return l<f/2?.5*a.easeInBounce(2*l,0,d,f)+s:.5*a.easeOutBounce(2*l-f,0,d,f)+.5*d+s}};r.exports=a},function(r,i,o){r.exports=o(3)},function(r,i,o){o.r(i),o.d(i,"ReactConfetti",function(){return qe});var a,l,s=o(0),u=o.n(s),f=o(1),d=o.n(f);function h(M,T){return M+Math.random()*(T-M)}function v(M,T){for(var L=0;L<T.length;L++){var I=T[L];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(M,I.key,I)}}function y(M,T,L){return T in M?Object.defineProperty(M,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):M[T]=L,M}(function(M){M[M.Circle=0]="Circle",M[M.Square=1]="Square",M[M.Strip=2]="Strip"})(a||(a={})),function(M){M[M.Positive=1]="Positive",M[M.Negative=-1]="Negative"}(l||(l={}));var S=function(){function M(I,Z,B,ne){(function(Ii,Mi){if(!(Ii instanceof Mi))throw new TypeError("Cannot call a class as a function")})(this,M),y(this,"context",void 0),y(this,"radius",void 0),y(this,"x",void 0),y(this,"y",void 0),y(this,"w",void 0),y(this,"h",void 0),y(this,"vx",void 0),y(this,"vy",void 0),y(this,"shape",void 0),y(this,"angle",void 0),y(this,"angularSpin",void 0),y(this,"color",void 0),y(this,"rotateY",void 0),y(this,"rotationDirection",void 0),y(this,"getOptions",void 0),this.getOptions=Z;var ce,_e,Se=this.getOptions(),It=Se.colors,yt=Se.initialVelocityX,xt=Se.initialVelocityY;this.context=I,this.x=B,this.y=ne,this.w=h(5,20),this.h=h(5,20),this.radius=h(5,10),this.vx=typeof yt=="number"?h(-yt,yt):h(yt.min,yt.max),this.vy=typeof xt=="number"?h(-xt,0):h(xt.min,xt.max),this.shape=(ce=0,_e=2,Math.floor(ce+Math.random()*(_e-ce+1))),this.angle=h(0,360)*Math.PI/180,this.angularSpin=h(-.2,.2),this.color=It[Math.floor(Math.random()*It.length)],this.rotateY=h(0,1),this.rotationDirection=h(0,1)?l.Positive:l.Negative}var T,L;return T=M,(L=[{key:"update",value:function(){var I=this.getOptions(),Z=I.gravity,B=I.wind,ne=I.friction,ce=I.opacity,_e=I.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=Z,this.vx+=B,this.vx*=ne,this.vy*=ne,this.rotateY>=1&&this.rotationDirection===l.Positive?this.rotationDirection=l.Negative:this.rotateY<=-1&&this.rotationDirection===l.Negative&&(this.rotationDirection=l.Positive);var Se=.1*this.rotationDirection;if(this.rotateY+=Se,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=ce,this.context.lineCap="round",this.context.lineWidth=2,_e&&typeof _e=="function")_e.call(this,this.context);else switch(this.shape){case a.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case a.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case a.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&v(T.prototype,L),M}();function C(M,T,L){return T in M?Object.defineProperty(M,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):M[T]=L,M}var m=function M(T,L){var I=this;(function(B,ne){if(!(B instanceof ne))throw new TypeError("Cannot call a class as a function")})(this,M),C(this,"canvas",void 0),C(this,"context",void 0),C(this,"getOptions",void 0),C(this,"x",0),C(this,"y",0),C(this,"w",0),C(this,"h",0),C(this,"lastNumberOfPieces",0),C(this,"tweenInitTime",Date.now()),C(this,"particles",[]),C(this,"particlesGenerated",0),C(this,"removeParticleAt",function(B){I.particles.splice(B,1)}),C(this,"getParticle",function(){var B=h(I.x,I.w+I.x),ne=h(I.y,I.h+I.y);return new S(I.context,I.getOptions,B,ne)}),C(this,"animate",function(){var B=I.canvas,ne=I.context,ce=I.particlesGenerated,_e=I.lastNumberOfPieces,Se=I.getOptions(),It=Se.run,yt=Se.recycle,xt=Se.numberOfPieces,Ii=Se.debug,Mi=Se.tweenFunction,Bt=Se.tweenDuration;if(!It)return!1;var pn=I.particles.length,In=yt?pn:ce,ar=Date.now();if(In<xt){_e!==xt&&(I.tweenInitTime=ar,I.lastNumberOfPieces=xt);for(var Ut=I.tweenInitTime,Wt=Mi(ar-Ut>Bt?Bt:Math.max(0,ar-Ut),In,xt,Bt),Ti=Math.round(Wt-In),lr=0;lr<Ti;lr++)I.particles.push(I.getParticle());I.particlesGenerated+=Ti}return Ii&&(ne.font="12px sans-serif",ne.fillStyle="#333",ne.textAlign="right",ne.fillText("Particles: ".concat(pn),B.width-10,B.height-20)),I.particles.forEach(function(sr,Vt){sr.update(),(sr.y>B.height||sr.y<-100||sr.x>B.width+100||sr.x<-100)&&(yt&&In<=xt?I.particles[Vt]=I.getParticle():I.removeParticleAt(Vt))}),pn>0||In<xt}),this.canvas=T;var Z=this.canvas.getContext("2d");if(!Z)throw new Error("Could not get canvas context");this.context=Z,this.getOptions=L};function p(M,T){var L=Object.keys(M);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);T&&(I=I.filter(function(Z){return Object.getOwnPropertyDescriptor(M,Z).enumerable})),L.push.apply(L,I)}return L}function g(M){for(var T=1;T<arguments.length;T++){var L=arguments[T]!=null?arguments[T]:{};T%2?p(Object(L),!0).forEach(function(I){_(M,I,L[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(L)):p(Object(L)).forEach(function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(L,I))})}return M}function j(M,T){for(var L=0;L<T.length;L++){var I=T[L];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(M,I.key,I)}}function _(M,T,L){return T in M?Object.defineProperty(M,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):M[T]=L,M}var x={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:d.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},R=function(){function M(I,Z){var B=this;(function(ce,_e){if(!(ce instanceof _e))throw new TypeError("Cannot call a class as a function")})(this,M),_(this,"canvas",void 0),_(this,"context",void 0),_(this,"_options",void 0),_(this,"generator",void 0),_(this,"rafId",void 0),_(this,"setOptionsWithDefaults",function(ce){var _e={confettiSource:{x:0,y:0,w:B.canvas.width,h:0}};B._options=g(g(g({},_e),x),ce),Object.assign(B,ce.confettiSource)}),_(this,"update",function(){var ce=B.options,_e=ce.run,Se=ce.onConfettiComplete,It=B.canvas,yt=B.context;_e&&(yt.fillStyle="white",yt.clearRect(0,0,It.width,It.height)),B.generator.animate()?B.rafId=requestAnimationFrame(B.update):(Se&&typeof Se=="function"&&B.generator.particlesGenerated>0&&Se.call(B,B),B._options.run=!1)}),_(this,"reset",function(){B.generator&&B.generator.particlesGenerated>0&&(B.generator.particlesGenerated=0,B.generator.particles=[],B.generator.lastNumberOfPieces=0)}),_(this,"stop",function(){B.options={run:!1},B.rafId&&(cancelAnimationFrame(B.rafId),B.rafId=void 0)}),this.canvas=I;var ne=this.canvas.getContext("2d");if(!ne)throw new Error("Could not get canvas context");this.context=ne,this.generator=new m(this.canvas,function(){return B.options}),this.options=Z,this.update()}var T,L;return T=M,(L=[{key:"options",get:function(){return this._options},set:function(I){var Z=this._options&&this._options.run,B=this._options&&this._options.recycle;this.setOptionsWithDefaults(I),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof I.recycle=="boolean"&&I.recycle&&B===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof I.run=="boolean"&&I.run&&Z===!1&&this.update()}}])&&j(T.prototype,L),M}();function z(M){return function(T){if(Array.isArray(T))return ct(T)}(M)||function(T){if(typeof Symbol<"u"&&Symbol.iterator in Object(T))return Array.from(T)}(M)||xe(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(M){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T})(M)}function $(){return($=Object.assign||function(M){for(var T=1;T<arguments.length;T++){var L=arguments[T];for(var I in L)Object.prototype.hasOwnProperty.call(L,I)&&(M[I]=L[I])}return M}).apply(this,arguments)}function X(M,T){var L=Object.keys(M);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);T&&(I=I.filter(function(Z){return Object.getOwnPropertyDescriptor(M,Z).enumerable})),L.push.apply(L,I)}return L}function se(M){for(var T=1;T<arguments.length;T++){var L=arguments[T]!=null?arguments[T]:{};T%2?X(Object(L),!0).forEach(function(I){Ve(M,I,L[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(L)):X(Object(L)).forEach(function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(L,I))})}return M}function pe(M,T){return function(L){if(Array.isArray(L))return L}(M)||function(L,I){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(L)))){var Z=[],B=!0,ne=!1,ce=void 0;try{for(var _e,Se=L[Symbol.iterator]();!(B=(_e=Se.next()).done)&&(Z.push(_e.value),!I||Z.length!==I);B=!0);}catch(It){ne=!0,ce=It}finally{try{B||Se.return==null||Se.return()}finally{if(ne)throw ce}}return Z}}(M,T)||xe(M,T)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function xe(M,T){if(M){if(typeof M=="string")return ct(M,T);var L=Object.prototype.toString.call(M).slice(8,-1);return L==="Object"&&M.constructor&&(L=M.constructor.name),L==="Map"||L==="Set"?Array.from(M):L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)?ct(M,T):void 0}}function ct(M,T){(T==null||T>M.length)&&(T=M.length);for(var L=0,I=new Array(T);L<T;L++)I[L]=M[L];return I}function Rt(M,T){if(!(M instanceof T))throw new TypeError("Cannot call a class as a function")}function we(M,T){for(var L=0;L<T.length;L++){var I=T[L];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(M,I.key,I)}}function F(M,T){return(F=Object.setPrototypeOf||function(L,I){return L.__proto__=I,L})(M,T)}function Y(M){var T=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var L,I=ie(M);if(T){var Z=ie(this).constructor;L=Reflect.construct(I,arguments,Z)}else L=I.apply(this,arguments);return q(this,L)}}function q(M,T){return!T||A(T)!=="object"&&typeof T!="function"?te(M):T}function te(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function ie(M){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(T){return T.__proto__||Object.getPrototypeOf(T)})(M)}function Ve(M,T,L){return T in M?Object.defineProperty(M,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):M[T]=L,M}var Me=u.a.createRef(),$e=function(M){(function(B,ne){if(typeof ne!="function"&&ne!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(ne&&ne.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),ne&&F(B,ne)})(Z,M);var T,L,I=Y(Z);function Z(B){var ne;Rt(this,Z);for(var ce=arguments.length,_e=new Array(ce>1?ce-1:0),Se=1;Se<ce;Se++)_e[Se-1]=arguments[Se];return Ve(te(ne=I.call.apply(I,[this,B].concat(_e))),"canvas",u.a.createRef()),Ve(te(ne),"confetti",void 0),ne.canvas=B.canvasRef||Me,ne}return T=Z,(L=[{key:"componentDidMount",value:function(){if(this.canvas.current){var B=je(this.props)[0];this.confetti=new R(this.canvas.current,B)}}},{key:"componentDidUpdate",value:function(){var B=je(this.props)[0];this.confetti&&(this.confetti.options=B)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var B=pe(je(this.props),2),ne=B[0],ce=B[1],_e=se({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},ce.style);return u.a.createElement("canvas",$({width:ne.width,height:ne.height,ref:this.canvas},ce,{style:_e}))}}])&&we(T.prototype,L),Z}(s.Component);function je(M){var T={},L={},I=[].concat(z(Object.keys(x)),["confettiSource","drawShape","onConfettiComplete"]),Z=["canvasRef"];for(var B in M){var ne=M[B];I.includes(B)?T[B]=ne:Z.includes(B)?Z[B]=ne:L[B]=ne}return[T,L,{}]}Ve($e,"defaultProps",se({},x)),Ve($e,"displayName","ReactConfetti");var qe=u.a.forwardRef(function(M,T){return u.a.createElement($e,$({canvasRef:T},M))});i.default=qe}]).default})})(P1);var g4=P1.exports;const v4=Hc(g4);Rn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const y4=Rn`
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 222, 89, 0.4); }
  50% { box-shadow: 0 0 0 15px rgba(255, 222, 89, 0); }
`,x4=k.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #0d2a0a 0%, #12360e 50%, #0d2a0a 100%);
  overflow: hidden;
`,w4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 30% 20%, rgba(255, 222, 89, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(255, 222, 89, 0.03) 0%, transparent 50%);
  pointer-events: none;
`,S4=k.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`,k4=k.div`
  text-align: center;
  margin-bottom: 4rem;
`,b4=k.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1rem;
`,j4=k.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: #ffde59;
  }
`,C4=k.p`
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`,E4=k.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,P4=k.div`
  @media (max-width: 968px) {
    order: 2;
  }
`,_4=k.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
`,R4=k.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 2rem;
`,I4=k.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`,Su=k.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 222, 89, 0.3);
    transform: translateX(8px);
  }
`,ku=k.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.15) 0%, rgba(255, 222, 89, 0.05) 100%);
  border-radius: 12px;

  svg {
    width: 22px;
    height: 22px;
    color: #ffde59;
  }
`,bu=k.div``,ju=k.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.25rem;
`,Cu=k.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
`,M4=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,Eu=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);

  svg {
    width: 18px;
    height: 18px;
    color: #ffde59;
  }
`,T4=k.div`
  @media (max-width: 968px) {
    order: 1;
  }
`,z4=k.div`
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;

  @media (max-width: 580px) {
    padding: 2rem 1.5rem;
  }
`,O4=k.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-align: center;
`,L4=k.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 2rem;
`,D4=k.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Da=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Na=k.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`,Pu=k.input`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:focus {
    outline: none;
    border-color: #ffde59;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(255, 222, 89, 0.1);
  }
`,N4=k.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: #ffffff;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:focus {
    outline: none;
    border-color: #ffde59;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(255, 222, 89, 0.1);
  }
`,A4=k.button`
  width: 100%;
  padding: 1.15rem 2rem;
  margin-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 222, 89, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 222, 89, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,F4=k.div`
  text-align: center;
  padding: 2rem 0;
`,$4=k.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.2) 0%, rgba(255, 222, 89, 0.1) 100%);
  border-radius: 50%;
  animation: ${y4} 2s ease-in-out infinite;

  svg {
    width: 40px;
    height: 40px;
    color: #ffde59;
  }
`,B4=k.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
`,U4=k.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  max-width: 400px;
  margin: 0 auto;
`,W4=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})}),V4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),c.jsx("polyline",{points:"22,6 12,13 2,6"})]}),H4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),$p=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),Q4=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),Y4=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("polyline",{points:"12 6 12 12 16 14"})]}),G4=()=>{const[e,t]=E.useState(!1),[n,r]=E.useState(!1),[i,o]=E.useState(!1),a=async l=>{l.preventDefault(),o(!0);const s=new FormData(l.target);try{(await fetch("https://formspree.io/f/mnnqkknd",{method:"POST",body:s,headers:{Accept:"application/json"}})).ok?(t(!0),r(!0),setTimeout(()=>r(!1),5e3)):alert("There was an issue submitting the form. Please try again.")}catch{alert("There was an error submitting the form. Please try again.")}finally{o(!1)}};return c.jsxs(x4,{id:"contact",children:[n&&c.jsx(v4,{width:window.innerWidth,height:window.innerHeight,recycle:!1,numberOfPieces:300,colors:["#ffde59","#f5c842","#12360e","#ffffff"]}),c.jsx(w4,{}),c.jsxs(S4,{children:[c.jsxs(k4,{children:[c.jsx(b4,{children:"Get Started"}),c.jsxs(j4,{children:["Let's Build Your ",c.jsx("span",{children:"Off-Grid Future"})]}),c.jsx(C4,{children:"Ready to take the first step? Get a free consultation and custom quote for your property — no obligation, just honest advice."})]}),c.jsxs(E4,{children:[c.jsxs(P4,{children:[c.jsx(_4,{children:"We're Here to Help"}),c.jsx(R4,{children:"Have questions about your project? Want to discuss what's possible on your land? Reach out — we'd love to hear from you."}),c.jsxs(I4,{children:[c.jsxs(Su,{href:"tel:+15055551234",children:[c.jsx(ku,{children:c.jsx(W4,{})}),c.jsxs(bu,{children:[c.jsx(ju,{children:"Call us"}),c.jsx(Cu,{children:"(505) 352-4674"})]})]}),c.jsxs(Su,{href:"mailto:info@offgridland.dev",children:[c.jsx(ku,{children:c.jsx(V4,{})}),c.jsxs(bu,{children:[c.jsx(ju,{children:"Email us"}),c.jsx(Cu,{children:"offgridlanddev@gmail.com"})]})]}),c.jsxs(Su,{href:"#",children:[c.jsx(ku,{children:c.jsx(H4,{})}),c.jsxs(bu,{children:[c.jsx(ju,{children:"Service area"}),c.jsx(Cu,{children:"All of New Mexico/Southern Colorado"})]})]})]}),c.jsxs(M4,{children:[c.jsxs(Eu,{children:[c.jsx(Q4,{}),"Licensed & Insured"]}),c.jsxs(Eu,{children:[c.jsx(Y4,{}),"24hr Response Time"]}),c.jsxs(Eu,{children:[c.jsx($p,{}),"Free Estimates"]})]})]}),c.jsx(T4,{children:c.jsx(z4,{children:e?c.jsxs(F4,{children:[c.jsx($4,{children:c.jsx($p,{})}),c.jsx(B4,{children:"Thank You!"}),c.jsx(U4,{children:"We've received your request and will be in touch within 24 hours to discuss your project and provide a personalized quote."})]}):c.jsxs(c.Fragment,{children:[c.jsx(O4,{children:"Request a Free Quote"}),c.jsx(L4,{children:"Tell us about your project"}),c.jsxs(D4,{onSubmit:a,children:[c.jsxs(Da,{children:[c.jsx(Na,{htmlFor:"name",children:"Your Name"}),c.jsx(Pu,{type:"text",id:"name",name:"name",placeholder:"John Smith",required:!0})]}),c.jsxs(Da,{children:[c.jsx(Na,{htmlFor:"email",children:"Email Address"}),c.jsx(Pu,{type:"email",id:"email",name:"email",placeholder:"john@example.com",required:!0})]}),c.jsxs(Da,{children:[c.jsx(Na,{htmlFor:"phone",children:"Phone Number"}),c.jsx(Pu,{type:"tel",id:"phone",name:"phone",placeholder:"(505) 555-1234",required:!0})]}),c.jsxs(Da,{children:[c.jsx(Na,{htmlFor:"message",children:"Project Details"}),c.jsx(N4,{id:"message",name:"message",placeholder:"Tell us about your land, location, and what you're looking to build...",required:!0})]}),c.jsx(A4,{type:"submit",disabled:i,children:i?"Sending...":"Get Your Free Quote"})]})]})})})]})]})]})},K4=E.memo(G4),q4=k.footer`
  background: linear-gradient(180deg, #0d2a0a 0%, #091f07 100%);
  color: #ffffff;
  padding: 4rem 2rem 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 222, 89, 0.2), transparent);
  }
`,X4=k.div`
  max-width: 1200px;
  margin: 0 auto;
`,Z4=k.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,J4=k.div``,e3=k.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffde59;
  margin-bottom: 1rem;
`,t3=k.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 300px;

  @media (max-width: 580px) {
    max-width: 100%;
  }
`,n3=k.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 580px) {
    justify-content: center;
  }
`,Bp=k.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 222, 89, 0.1);
    border-color: rgba(255, 222, 89, 0.3);
    color: #ffde59;
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,_u=k.div``,Ru=k.h4`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1.25rem;
`,Up=k.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,cr=k.li`
  margin-bottom: 0.75rem;
`,dr=k.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    padding-left: 4px;
  }
`,r3=k.div``,Iu=k.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffde59;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  @media (max-width: 580px) {
    justify-content: center;
  }
`,i3=k.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin-bottom: 1.5rem;
`,o3=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 580px) {
    flex-direction: column;
    text-align: center;
  }
`,a3=k.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
`,l3=k.a`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;

  span {
    color: #ffde59;
    font-weight: 500;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);

    span {
      color: #f5c842;
    }
  }
`,s3=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),c.jsx("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"}),c.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),u3=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})}),c3=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})}),d3=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),c.jsx("polyline",{points:"22,6 12,13 2,6"})]}),f3=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),h3=()=>{const e=new Date().getFullYear(),t=r=>{const i=document.getElementById(r);if(i){const a=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:a-80,behavior:"smooth"})}},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(q4,{children:c.jsxs(X4,{children:[c.jsxs(Z4,{children:[c.jsxs(J4,{children:[c.jsx(e3,{children:"Off Grid Land Development"}),c.jsx(t3,{children:"New Mexico's trusted partner for complete off-grid infrastructure. Solar, wells, and septic — everything you need to live independently."}),c.jsxs(n3,{children:[c.jsx(Bp,{href:"https://www.instagram.com/nmoffgridsolar",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:c.jsx(s3,{})}),c.jsx(Bp,{href:"https://www.facebook.com/offgridland",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:c.jsx(u3,{})})]})]}),c.jsxs(_u,{children:[c.jsx(Ru,{children:"Services"}),c.jsxs(Up,{children:[c.jsx(cr,{children:c.jsx(dr,{onClick:()=>t("services"),children:"Off-Grid Solar"})}),c.jsx(cr,{children:c.jsx(dr,{onClick:()=>t("services"),children:"Well Drilling"})}),c.jsx(cr,{children:c.jsx(dr,{onClick:()=>t("services"),children:"Septic Systems"})})]})]}),c.jsxs(_u,{children:[c.jsx(Ru,{children:"Company"}),c.jsxs(Up,{children:[c.jsx(cr,{children:c.jsx(dr,{onClick:n,children:"Home"})}),c.jsx(cr,{children:c.jsx(dr,{onClick:()=>t("about"),children:"About Us"})}),c.jsx(cr,{children:c.jsx(dr,{onClick:()=>t("why-off-grid"),children:"Why Off-Grid"})}),c.jsx(cr,{children:c.jsx(dr,{onClick:()=>t("contact"),children:"Contact"})})]})]}),c.jsxs(_u,{children:[c.jsx(Ru,{children:"Contact"}),c.jsxs(r3,{children:[c.jsxs(Iu,{href:"tel:+15053524674",children:[c.jsx(c3,{}),"(505) 352-4674"]}),c.jsxs(Iu,{href:"mailto:offgridlanddev@gmail.com",children:[c.jsx(d3,{}),"offgridlanddev@gmail.com"]}),c.jsxs(Iu,{href:"#",children:[c.jsx(f3,{}),"New Mexico"]})]})]})]}),c.jsx(i3,{}),c.jsxs(o3,{children:[c.jsxs(a3,{children:["© ",e," Off Grid Land Development. All rights reserved."]}),c.jsxs(l3,{href:"https://codelabs88.com",target:"_blank",rel:"noopener noreferrer",children:["Developed by ",c.jsx("span",{children:"CodeLabs88"})]})]})]})})},gf=E.memo(h3),p3=Jd`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: #12360e;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #ffffff;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
    font-weight: 700;
    color: #ffde59;
  }

  a {
    text-decoration: none;
    color: #ffde59;
    transition: color 0.3s ease;

    &:hover {
      color: #e6cd4e;
    }
  }

  button {
    font-family: 'Roboto', Arial, sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Roboto', Arial, sans-serif;
    color: #12360e;
  }
`,m3=k.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`,g3=()=>{const[e,t]=E.useState(!0),n=E.useRef(null),r=cs();E.useEffect(()=>{const f=()=>{(document.readyState==="complete"||document.readyState==="interactive")&&t(!1)};document.addEventListener("readystatechange",f);const d=setTimeout(()=>{t(!1)},3e3);return()=>{clearTimeout(d),document.removeEventListener("readystatechange",f)}},[]),E.useEffect(()=>{var d;if(sessionStorage.getItem("scrollToContact")==="true"||((d=r.state)==null?void 0:d.scrollToContact)){const h=setInterval(()=>{if(n.current){sessionStorage.removeItem("scrollToContact");const y=n.current.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:y+-80,behavior:"smooth"}),clearInterval(h)}},100),v=setTimeout(()=>{clearInterval(h)},5e3);return()=>{clearInterval(h),clearTimeout(v)}}},[r]);const i=()=>{if(n.current){const f=n.current.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:f+-80,behavior:"smooth"})}},o=E.useMemo(()=>c.jsx(US,{scrollToContact:i}),[]),a=E.useMemo(()=>c.jsx(ak,{onContactClick:i}),[]),l=E.useMemo(()=>c.jsx(Uk,{onContactClick:i}),[]),s=E.useMemo(()=>c.jsx(m4,{}),[]),u=E.useMemo(()=>c.jsx(gf,{}),[]);return c.jsxs(c.Fragment,{children:[c.jsx(p3,{}),c.jsx(m3,{children:e?c.jsx(SS,{}):c.jsxs(c.Fragment,{children:[c.jsx(ef,{onContactClick:i}),o,a,l,s,c.jsxs("div",{ref:n,children:[c.jsx(K4,{}),u]})]})})]})},v3=k.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;

  font-size: 20px;
  margin-bottom: 50px;
  overflow-x: auto; // Allow horizontal scrolling on mobile
`,y3=k.table`
  width: 100%;
  max-width: 1000px; // Limit table size on larger screens
  text-align: left;
  border-collapse: collapse;

  @media (max-width: 768px) {
    width: 100vw; // Ensure the table fits within the viewport width
    font-size: 12px; // Adjust font size for smaller screens
  }
`,Br=k.th`
  border-bottom: 1px solid #ddd;
  padding: 4px;
  font-size: 14px;

  &:nth-child(2),
  &:nth-child(3) {
    width: 50px; // Make these columns narrower
  }

  @media (max-width: 768px) {
    padding: 3px; // Reduce padding on mobile
    font-size: 12px;
  }
`,Mt=k.td`
  border-bottom: 1px solid #ddd;
  padding: 4px;
  font-size: 13px;

  &:nth-child(2),
  &:nth-child(3) {
    width: 50px; // Make these columns narrower
    text-align: center; // Center-align smaller cells
  }

  @media (max-width: 768px) {
    padding: 3px; // Reduce padding on mobile
    font-size: 12px;
  }
`,Aa=k.input`
  padding: 2px;
  margin: 1px 0;
  width: calc(100% - 4px);
  font-size: 13px;

  @media (max-width: 768px) {
    padding: 2px;
    margin: 1px 0;
    font-size: 12px; // Smaller font size for mobile
  }
`,Wp=k.button`
  background-color: #ffde59; // Yellow background for buttons
  color: #12360e; // Dark green text for buttons
  border: none;
  padding: 4px 8px;
  margin-top: 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  font-size: 13px;

  &:hover {
    background-color: #e6cd4e; // Slightly darker yellow on hover
  }

  @media (max-width: 768px) {
    padding: 3px 6px; // Smaller padding for mobile
    font-size: 12px; // Smaller font size for mobile
  }
`,Vp=k(Mt)`
  font-size: 18px; // Larger font size for emphasis
  font-weight: bold; // Make it bold
  color: #ffde59; // Yellow color for totals

  @media (max-width: 768px) {
    font-size: 14px; // Adjust font size for mobile
  }
`,Hp=[{id:1,appliance:"Refrigerator",powerRating:150,quantity:1,usage:24},{id:2,appliance:"LED Light Bulb",powerRating:10,quantity:10,usage:5},{id:3,appliance:"Ceiling Fan",powerRating:70,quantity:3,usage:6},{id:4,appliance:"LCD Television",powerRating:150,quantity:2,usage:4},{id:5,appliance:"Desktop Computer",powerRating:200,quantity:1,usage:4}],x3=({onDevicesChange:e,resetKey:t})=>{const[n,r]=E.useState(Hp);E.useEffect(()=>{console.log("Resetting devices with resetKey:",t),r(Hp)},[t]);const i=(f,d,h)=>{r(n.map(v=>v.id===f?{...v,[d]:Number(h)||h}:v))},o=f=>{r(n.filter(d=>d.id!==f))},a=f=>{const d=Number(f.quantity)||0,h=Number(f.usage)||0;return f.powerRating*d*h};E.useEffect(()=>{const f=n.reduce((d,h)=>d+a(h),0)/1e3;e(f)},[n,e]);const l=n.reduce((f,d)=>f+a(d),0)/1e3,s=l*365,u=()=>{const d={id:n.length>0?Math.max(...n.map(h=>h.id))+1:1,appliance:"",powerRating:0,quantity:1,usage:1};r([...n,d])};return c.jsx(v3,{children:c.jsxs(y3,{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx(Br,{children:"Appliance"}),c.jsx(Br,{children:"Quantity"}),c.jsx(Br,{children:"Power Rating (Watts)"}),c.jsx(Br,{children:"Average Daily Usage (Hours)"}),c.jsx(Br,{children:"Watt Hours per Day"}),c.jsx(Br,{children:"Action"})]})}),c.jsxs("tbody",{children:[n.map(f=>c.jsxs("tr",{children:[c.jsx(Mt,{children:c.jsx(Aa,{type:"text",value:f.appliance,onChange:d=>i(f.id,"appliance",d.target.value),placeholder:"Appliance Name"})}),c.jsx(Mt,{children:c.jsx(Aa,{type:"number",value:f.quantity,min:"1",onChange:d=>i(f.id,"quantity",d.target.value)})}),c.jsx(Mt,{children:c.jsx(Aa,{type:"number",value:f.powerRating,onChange:d=>i(f.id,"powerRating",d.target.value)})}),c.jsx(Mt,{children:c.jsx(Aa,{type:"number",value:f.usage,min:"0",step:"0.1",onChange:d=>i(f.id,"usage",d.target.value)})}),c.jsx(Mt,{children:a(f).toFixed(2)}),c.jsx(Mt,{children:c.jsx(Wp,{onClick:()=>o(f.id),children:"X"})})]},f.id)),c.jsx("tr",{children:c.jsx(Mt,{colSpan:"6",children:c.jsx(Wp,{onClick:u,children:"Add Device"})})}),c.jsxs("tr",{children:[c.jsx(Mt,{colSpan:"4",style:{fontWeight:"bold",textAlign:"right"},children:"Daily kWh Usage:"}),c.jsxs(Vp,{children:[l.toFixed(2)," kWh"]}),c.jsx(Mt,{})]}),c.jsxs("tr",{children:[c.jsx(Mt,{colSpan:"4",style:{fontWeight:"bold",textAlign:"right"},children:"Annual kWh Usage:"}),c.jsxs(Vp,{children:[s.toFixed(2)," kWh"]}),c.jsx(Mt,{})]})]})]})})},w3="/assets/eg4battery-D__oXe6o.png",S3=k.div`
  margin: 0; /* Remove outer margin to avoid white edges */
  background-color: #12360e; /* Green background */
  border-radius: 0; /* Remove border-radius for full-width */

  box-sizing: border-box; /* Padding included in width */
`,k3=k.div`
  max-width: 1200px; /* Keeps content centered and readable */
  margin: 0 auto; /* Centers content horizontally */
`,b3=k.h3`
  color: white; /* Lighter yellow for emphasis */
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1rem; /* Add a small margin on top */
    margin-left: auto; /* Center align horizontally */
    margin-right: auto;
    width: 90%; /* Reduce the width on smaller screens */
  }
`,j3=k.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically by default */
  align-items: center;
  gap: 2rem; /* Reduced gap for cleaner layout */
  margin-top: 1rem;
`,C3=k.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  justify-content: center; /* Center align the battery images */
  gap: 1.5rem; /* Uniform gap */
`,E3=k.img`
  width: 120px; /* Default size for web view */
  height: auto;
  background-color: white; /* White background for battery images */
  border-radius: 8px;
  border: 2px solid #ffde59; /* Yellow border for battery images */
  padding: 0.5rem; /* Add padding to ensure the image doesn't touch the border */

  @media (max-width: 768px) {
    width: ${({batteriesRequired:e})=>e===1?"80vw":"90px"}; /* Larger image if only one battery is recommended */
  }
`,P3=k.div`
  text-align: center; /* Center-align the bullet points container */
  margin-top: 1rem; /* Space above the bullet points */
`,_3=k.ul`
  list-style-type: disc;
  padding: 0;
  margin: 0 auto; /* Center-align the bullet points */
  max-width: 500px; /* Limit width for readability */

  li {
    font-size: 1rem;
    margin-bottom: 0.5rem; /* Reduced gap between bullet points */
    color: #ffde59; /* Yellow text for bullet points */
    text-align: left; /* Align text to the left */
  }
`,R3=k.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: #ffde59; /* Yellow button background */
    color: #12360e; /* Green text for button */
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e6cd4e; /* Slightly darker yellow on hover */
    }
  }
`,I3=({batteriesRequired:e,handlePrint:t})=>{const n=Wd(),r=()=>{sessionStorage.setItem("scrollToContact","true"),n("/")};return c.jsx(S3,{children:c.jsxs(k3,{children:[c.jsx("h2",{style:{color:"#ffde59",fontSize:"2rem",textAlign:"center"},children:"Battery Recommendation"}),c.jsx(b3,{children:"Discover your optimal battery setup for reliable off-grid power. Print this page or get a quote to secure your energy independence today!"}),c.jsxs(j3,{children:[c.jsx(C3,{batteriesRequired:e,children:Array.from({length:e},(i,o)=>c.jsx(E3,{src:w3,alt:"Battery",batteriesRequired:e},o))}),c.jsx(P3,{children:c.jsxs(_3,{children:[c.jsx("li",{children:"Battery Type: LiFePO4 (Lithium Iron Phosphate)"}),c.jsx("li",{children:"Capacity per Battery: 14.3 kWh"}),c.jsxs("li",{children:["Recommended Quantity: ",e]})]})})]}),c.jsxs(R3,{children:[c.jsx("button",{onClick:t,children:"Print Summary"}),c.jsx("button",{onClick:r,children:"Get a Quote"})]})]})})},M3="/assets/ogslogoblack2-DwQjOPT0.webp",T3=k.div`
  font-family: 'Roboto', Arial, sans-serif; /* Modern font */
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid #12360e;
  border-radius: 8px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #333333;
`,z3=k.div`
  text-align: center;
  margin-bottom: 2rem;
`,O3=k.img`
  height: 40px; /* Smaller logo */
  margin-bottom: 0.5rem;
`,L3=k.h1`
  color: #12360e;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  letter-spacing: 0.5px;
`,D3=k.p`
  font-size: 1.1rem;
  color: #555555;
  margin: 0;
`,N3=k.div`
  margin-bottom: 1.5rem;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #333333;
    line-height: 1.6;
  }

  strong {
    color: #12360e;
  }
`,A3=k.div`
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-left: 5px solid #12360e;
  margin: 2rem 0;

  h3 {
    color: #12360e;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #333333;
  }
`,F3=k.div`
  background-color: #12360e;
  color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  a {
    color: #ffde59;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`,$3=({address:e,dailyKwh:t,batteriesRequired:n})=>c.jsxs(T3,{children:[c.jsxs(z3,{children:[c.jsx(O3,{src:M3,alt:"Company Logo"}),c.jsx(L3,{children:"Your Off-Grid Energy Solution"}),c.jsx(D3,{children:"Reliable, long-lasting, and tailored for your lifestyle"})]}),c.jsxs(N3,{children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Address:"})," ",e]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Daily Energy Usage:"})," ",t.toFixed(2)," kWh"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Battery Type:"})," LiFePO4 (Lithium Iron Phosphate)"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Recommended Quantity:"})," ",n," x 14.3 kWh LiFePO4 Batteries"]})]}),c.jsxs(A3,{children:[c.jsx("h3",{children:"Why LiFePO4 Batteries are Perfect for Off-Grid Living"}),c.jsx("p",{children:"✅ Longer lifespan with up to 8000+ cycles at 80% Depth of Discharge (DoD)."}),c.jsx("p",{children:"✅ High energy density ensures more storage in less space."}),c.jsx("p",{children:"✅ Integrated self-heating for optimal performance in all climates."}),c.jsx("p",{children:"✅ Lightweight and maintenance-free compared to lead-acid alternatives."}),c.jsx("p",{children:"✅ Safer operation with UL-certified safety standards."})]}),c.jsxs(F3,{children:[c.jsx("p",{children:c.jsx("strong",{children:"Contact Us Today"})}),c.jsxs("p",{children:["Phone: ",c.jsx("a",{href:"tel:5053524674",children:"505-352-4674"})]}),c.jsxs("p",{children:["Email: ",c.jsx("a",{href:"mailto:nmoffgridsolar@gmail.com",children:"nmoffgridsolar@gmail.com"})]}),c.jsxs("p",{children:["Website: ",c.jsx("a",{href:"https://www.nmoffgridsolar.com",target:"_blank",rel:"noopener noreferrer",children:"www.nmoffgridsolar.com"})]})]})]}),B3=Jd`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: #12360e;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #ffffff;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
    font-weight: 700;
    color: #ffde59;
  }

  a {
    text-decoration: none;
    color: #ffde59;
    transition: color 0.3s ease;

    &:hover {
      color: #e6cd4e;
    }
  }

  button {
    font-family: 'Roboto', Arial, sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Roboto', Arial, sans-serif;
    color: #12360e;
  }
`,U3=k.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #12360e;
`,W3=k.div`
  flex: 1;
  text-align: center;
  background-color: #12360e;
  width: 100vw;
  box-sizing: border-box;
  padding: 0 1rem; /* Add padding to prevent touching edges */

  @media (max-width: 768px) {
    padding: 0 0.5rem; /* Reduce padding on smaller screens */
  }
`,V3=k.h1`
  font-size: 2.5rem;
  color: #ffde59;
  margin-bottom: 1rem;
  margin-top: 120px;
`,Qp=k.h3`
  font-size: 1.2rem;
  color: white;
  margin: 0 auto 2rem auto;
  max-width: 700px;
  line-height: 1.5;
`,H3=k.div`
  margin: 1.5rem 0;

  input {
    padding: 0.75rem;
    border: 2px solid #ffde59;
    border-radius: 8px;
    width: 60%;
    max-width: 500px;
    font-size: 1rem;
    background-color: #f0f0f0;
    color: #12360e;
  }

  button {
    margin-left: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #ffde59;
    color: #12360e;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e6cd4e;
    }
  }
`,Q3=k.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin: 1rem 0;
`,Y3=k.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffde59;
  margin: 1rem 0;
`,G3=k.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,K3=k.button`
  background-color: #ffde59;
  color: #12360e;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 50px;

  &:hover {
    background-color: #e6cd4e;
  }
`,q3=()=>{const[e,t]=E.useState(localStorage.getItem("address")||""),[n,r]=E.useState(localStorage.getItem("submittedAddress")||""),[i,o]=E.useState(!!localStorage.getItem("isAddressSubmitted")),[a,l]=E.useState(0),[s,u]=E.useState(parseFloat(localStorage.getItem("dailyKwh"))||0),[f,d]=E.useState(0),[h,v]=E.useState(0),y=E.useRef();E.useEffect(()=>{let g=Math.floor(s/7);s/7%1>=.7&&(g+=1),v(g)},[s]),E.useEffect(()=>{localStorage.setItem("address",e),localStorage.setItem("submittedAddress",n),localStorage.setItem("isAddressSubmitted",i),localStorage.setItem("dailyKwh",s)},[e,n,i,s]);const S=g=>{g.preventDefault(),r(e),o(!0)},C=g=>{u(g),l(g)},m=()=>{localStorage.clear(),t(""),r(""),o(!1),u(0),l(0),d(g=>g+1)},p=()=>{window.print()};return c.jsxs(c.Fragment,{children:[c.jsx(B3,{}),c.jsxs(U3,{children:[c.jsx(ef,{}),c.jsxs(W3,{children:[c.jsx(V3,{children:"Off Grid Load Calculator"}),c.jsx(Qp,{children:"Use this calculator to estimate your daily energy consumption and determine how many batteries you need to power your appliances off-grid. Enter the details for your appliances below, including quantity, power rating, and daily usage."}),i?c.jsxs(c.Fragment,{children:[c.jsxs(Q3,{children:["Address: ",n]}),c.jsxs(Y3,{children:[a," KiloWatt Hours Daily"]}),c.jsx(x3,{onDevicesChange:C,resetKey:f}),c.jsx(I3,{batteriesRequired:h,handlePrint:p}),c.jsx(G3,{children:c.jsx(K3,{onClick:m,children:"Restart"})})]}):c.jsxs(c.Fragment,{children:[c.jsx(Qp,{children:"Enter Your Address"}),c.jsxs(H3,{children:[c.jsx("input",{type:"text",value:e,onChange:g=>t(g.target.value),placeholder:"Start typing address..."}),c.jsx("button",{onClick:S,children:"Submit"})]})]})]}),c.jsx(gf,{}),c.jsx("div",{ref:y,style:{display:"none"},children:c.jsx($3,{address:n,dailyKwh:s,batteriesRequired:h})})]})]})},X3=Jd`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: #12360e;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #ffffff;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
    font-weight: 700;
    color: #ffde59;
  }

  a {
    text-decoration: none;
    color: #ffde59;
    transition: color 0.3s ease;

    &:hover {
      color: #e6cd4e;
    }
  }

  button {
    font-family: 'Roboto', Arial, sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Roboto', Arial, sans-serif;
    color: #12360e;
  }
`,Z3=k.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #12360e;
`,J3=k.div`
  background-color: #12360e;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
  margin-top: 55px;
`,eb=k.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  margin-top: 40px;
`,tb=k.p`
  font-size: 1.2rem;
  margin: 0;
`,nb=k.div`
  margin-bottom: 1rem;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`,rb=k.div`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #ffde59;
  color: #12360e;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #e6cd4e;
  }
`,ib=k.div`
  padding: 0 1rem;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  line-height: 1.6;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-out, padding 0.4s ease-out;

  &.active {
    max-height: 1000px;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`,ob=k.div`
  text-align: center;
  margin-top: 2rem;
`,ab=k.button`
  background-color: #ffffff; /* White background */
  color: #12360e; /* Green text */
  padding: 1rem 1.7rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #12360e; /* Green border */
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #14521a;
    color: #ffffff; /* White text on hover */
    transform: scale(1.05);
  }
`,lb=()=>{const[e,t]=E.useState(null),n=Wd(),r=a=>{t(e===a?null:a)},i=()=>{n("/",{state:{scrollToContact:!0}})},o=[{question:"1. What is an off-grid solar system?",answer:"An off-grid solar system operates independently from the traditional power grid, using solar panels to generate electricity and batteries to store it for later use."},{question:"2. How much power do I need for my off-grid system?",answer:"Your power needs depend on the appliances and devices you plan to run. Calculating your daily energy usage in kilowatt-hours (kWh) will help determine the size of the system you need."},{question:"3. How long do LiFePO4 batteries last?",answer:"LiFePO4 (Lithium Iron Phosphate) batteries can last up to 10 years or more, with a lifespan of approximately 8000+ cycles at 80% Depth of Discharge (DoD)."},{question:"4. Can I run my entire home on an off-grid system?",answer:"Yes, with a properly sized system that matches your energy needs, you can run your entire home independently from the grid."},{question:"5. How much does an off-grid system cost?",answer:"Costs vary based on the size of the system, the number of solar panels and batteries, and additional components like inverters and charge controllers."},{question:"6. How do I maintain my off-grid system?",answer:"Off-grid systems require minimal maintenance. Regularly clean solar panels, monitor battery health, and ensure components like inverters are functioning correctly."},{question:"7. How reliable is off-grid solar in extreme weather?",answer:"High-quality systems perform well even in extreme weather conditions, with batteries and panels designed to withstand various climates."},{question:"8. Can I upgrade my existing off-grid system?",answer:"Yes, you can upgrade components like solar panels, batteries, or inverters to expand your system as your energy needs grow."},{question:"9. Do off-grid systems work during cloudy days?",answer:"Yes, batteries store excess energy generated during sunny days, allowing the system to operate even when it’s cloudy."},{question:"10. Why choose us for your off-grid needs?",answer:"We specialize in reliable, high-quality systems designed for off-grid living, ensuring long-lasting performance and customer satisfaction."}];return c.jsxs(c.Fragment,{children:[c.jsx(X3,{}),c.jsx(ef,{}),c.jsxs(J3,{children:[c.jsx(eb,{children:"Frequently Asked Questions"}),c.jsx(tb,{children:"Explore answers to the most common questions about off-grid solar systems."})]}),c.jsxs(Z3,{children:[o.map((a,l)=>c.jsxs(nb,{children:[c.jsxs(rb,{onClick:()=>r(l),children:[a.question,c.jsx("span",{children:e===l?"-":"+"})]}),c.jsx(ib,{className:e===l?"active":"",children:a.answer})]},l)),c.jsx(ob,{children:c.jsx(ab,{onClick:i,children:"Get a Quote"})})]}),c.jsx(gf,{})]})},sb=k2([{path:"/",element:c.jsx(g3,{})},{path:"/battery-calculator",element:c.jsx(q3,{})},{path:"/faq",element:c.jsx(lb,{})}]);Mu.createRoot(document.getElementById("root")).render(c.jsx(Xt.StrictMode,{children:c.jsx(M2,{router:sb})}));
