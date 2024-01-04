(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const E=512,S=512,f=document.getElementById("iconView"),d=document.getElementById("mapCanvas"),C=document.getElementById("divMessage"),I=document.getElementById("bSave");document.title="Sprite Mapper 1.0.4";d.ondrop=e=>{var t;if(e.preventDefault(),(t=e.dataTransfer)!=null&&t.items){const r=Array.from(e.dataTransfer.items);L(r)}};d.ondragover=e=>{e.preventDefault()};I.onclick=()=>{{const e=document.createElement("a");e.download="image.png",e.href=d.toDataURL("image/png"),e.click()}{const e=new Blob([JSON.stringify(w)],{type:"application/json"}),t=document.createElement("a");t.download="image.json",t.href=window.URL.createObjectURL(e),t.click()}};var p=0,l=[],w;async function L(e){l=[],f.innerHTML="",console.log(e);const t=e.filter(c=>c.kind==="file").map(c=>c.getAsFile());t.sort((c,o)=>c.name.localeCompare(o.name));for(const c of t){console.log(`File ${c.name}`),console.log(c.type);try{const o=await T(c);o.style.backgroundColor=x[a],f.appendChild(o);const i=document.createElement("div");i.innerText=`${o.width} x ${o.height}`,f.appendChild(i);const n=document.createElement("div");n.innerText=c.name,f.appendChild(n),console.log(`image size: ${o.width} x ${o.height}`),l.push({width:o.width,height:o.height,x:0,y:0,name:b(c.name),image:o})}catch(o){p++,console.error(`Cannot load image ${c.name}`),c.type==="image/svg+xml"&&console.log('For SVG file, make sure the xml namespace is included: xmlns="http://www.w3.org/2000/svg"'),console.log(o)}}l.sort((c,o)=>Math.max(o.width,o.height)-Math.max(c.width,c.height));const r=p?` <span style="color: red;">Errors: ${p}.</span>`:"";C.innerHTML=`${l.length} icons in sprite sheet.${r}`,O(1,1,E,S)}function b(e){const t=e.indexOf(".");return t>=0?e.substring(0,t):e}function T(e){const t=URL.createObjectURL(e);return new Promise((r,c)=>{let o=new Image;o.onload=()=>{URL.revokeObjectURL(t),r(o)},o.onerror=c,o.src=t})}function O(e,t,r,c){const o={x:t,y:t,w:r-t*2,h:c-t*2};function i(n,s){if(!n.sprite&&n.w>=e*2+s.width&&n.h>=e+s.height){n.sprite=s,s.x=n.x+e,s.y=n.y+e;const m=2*e+s.width,u=2*e+s.height,h=n.w-m,g=n.h-u;return h>=g?(n.first={x:n.x+m,y:n.y,w:h,h:u},n.second={x:n.x,y:n.y+u,w:n.w,h:g}):(n.second={x:n.x+m,y:n.y,w:h,h:n.h},n.first={x:n.x,y:n.y+u,w:m,h:g}),!0}else if(n.first&&i(n.first,s)||n.second&&i(n.second,s))return!0;return!1}for(const n of l)if(console.log(n.name),!i(o,n)){console.log(JSON.stringify(o,void 0,4)),alert("Error: did not allocate enough space for sprite");return}console.log(`Packed: w = ${r}, h = ${c}`),k(r,c),console.log(w),M(r,c)}function $(e){return{frame:{x:e.x,y:e.y,w:e.width,h:e.height},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:e.width,h:e.height},sourceSize:{w:e.width,h:e.height}}}function k(e,t){const r={};for(const c of l)r[c.name]=$(c);w={frames:r,meta:{app:"Sprite Mapper",version:"0.1",image:"icons.png",format:"RGBA8888",size:{w:e,h:t},scale:"1"}}}function M(e,t){d.width=e,d.height=t;const r=d.getContext("2d");for(const c of l)r.drawImage(c.image,c.x,c.y)}const x=["#cccccc","#7f7f7f","#000000"],y=document.getElementById("colorSelect");var a=-1;function H(){x.forEach((e,t)=>{const r=document.createElement("div");r.style.backgroundColor=e,y.appendChild(r),r.onclick=()=>v(t)})}function v(e){if(e!==a){if(a>=0){const t=y.children[a];t.className=""}if(a=e,a>=0){const t=y.children[a];t.className="selected"}}for(const t of f.querySelectorAll("img"))t.style.backgroundColor=x[a]}H();v(0);
