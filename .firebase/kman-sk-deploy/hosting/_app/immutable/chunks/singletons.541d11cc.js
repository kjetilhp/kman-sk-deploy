import{w as u}from"./index.6cc25391.js";var h;const E=((h=globalThis.__sveltekit_wxefqr)==null?void 0:h.base)??"";var b;(b=globalThis.__sveltekit_wxefqr)==null||b.assets;const y="sveltekit:snapshot",I="sveltekit:scroll",O="sveltekit:index",c={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}const d=new WeakSet,p={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function f(e,t){const n=e.getAttribute(`data-sveltekit-${t}`);return S(e,t,n),n}function S(e,t,n){n!==null&&!d.has(e)&&!p[t].includes(n)&&(console.error(`Unexpected value for ${t} — should be one of ${p[t].map(s=>JSON.stringify(s)).join(", ")}`,e),d.add(e))}const _={...c,"":c.hover};function k(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=k(e)}}function L(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!s||A(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:s,download:r}}function P(e){let t=null,n=null,s=null,l=null,r=null,a=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=f(o,"preload-code")),l===null&&(l=f(o,"preload-data")),t===null&&(t=f(o,"keepfocus")),n===null&&(n=f(o,"noscroll")),r===null&&(r=f(o,"reload")),a===null&&(a=f(o,"replacestate")),o=k(o);function i(w){switch(w){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[s??"off"],preload_data:_[l??"off"],keep_focus:i(t),noscroll:i(n),reload:i(r),replace_state:i(a)}}function g(e){const t=u(e);let n=!0;function s(){n=!0,t.update(a=>a)}function l(a){n=!1,t.set(a)}function r(a){let o;return t.subscribe(i=>{(o===void 0||n&&i!==o)&&a(o=i)})}return{notify:s,set:l,subscribe:r}}function x(){const{set:e,subscribe:t}=u(!1);return{subscribe:t,check:async()=>!1}}function A(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let v;function V(e){v=e.client}function Y(e){return(...t)=>v[e](...t)}const K={url:g({}),page:g({}),navigating:u(null),updated:x()};export{O as I,c as P,I as S,y as a,L as b,P as c,K as d,E as e,N as f,T as g,V as h,A as i,Y as j,v as k,U as s};
