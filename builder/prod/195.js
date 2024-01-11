"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[195],{195:(ft,w,O)=>{O.r(w),O.d(w,{scopeCss:()=>ht});const _="-shadowcsshost",b="-shadowcssslotted",y="-shadowcsscontext",C=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",N=new RegExp("("+_+C,"gim"),M=new RegExp("("+y+C,"gim"),D=new RegExp("("+b+C,"gim"),f=_+"-no-combinator",K=/-shadowcsshost-no-combinator([^\s]*)/,U=[/::shadow/g,/::content/g],m=/-shadowcsshost/gim,$=t=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${t}\\b)`,"gim"),A=$("::slotted"),G=$(":host"),I=$(":host-context"),z=/\/\*\s*[\s\S]*?\*\//g,J=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,V=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,X=/([{}])/g,Z=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",H=(t,e)=>{const o=tt(t);let s=0;return o.escapedString.replace(V,(...c)=>{const n=c[2];let l="",r=c[4],p="";r&&r.startsWith("{"+S)&&(l=o.blocks[s++],r=r.substring(8),p="{");const i=e({selector:n,content:l});return`${c[1]}${i.selector}${c[3]}${p}${i.content}${r}`})},tt=t=>{const e=t.split(X),o=[],s=[];let c=0,n=[];for(let r=0;r<e.length;r++){const p=e[r];"}"===p&&c--,c>0?n.push(p):(n.length>0&&(s.push(n.join("")),o.push(S),n=[]),o.push(p)),"{"===p&&c++}return n.length>0&&(s.push(n.join("")),o.push(S)),{escapedString:o.join(""),blocks:s}},B=(t,e,o)=>t.replace(e,(...s)=>{if(s[2]){const c=s[2].split(","),n=[];for(let l=0;l<c.length;l++){const r=c[l].trim();if(!r)break;n.push(o(f,r,s[3]))}return n.join(",")}return f+s[3]}),W=(t,e,o)=>t+e.replace(_,"")+o,nt=(t,e,o)=>e.indexOf(_)>-1?W(t,e,o):t+e+o+", "+e+" "+t+o,L=(t,e)=>t.replace(Z,(o,s="",c,n="",l="")=>s+e+n+l),P=(t,e,o,s,c)=>H(t,n=>{let l=n.selector,r=n.content;return"@"!==n.selector[0]?l=((t,e,o,s)=>t.split(",").map(c=>s&&c.indexOf("."+s)>-1?c.trim():((t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t))(c,e)?((t,e,o)=>{const c="."+(e=e.replace(/\[is=([^\]]*)\]/g,(g,...d)=>d[0])),n=g=>{let d=g.trim();if(!d)return"";if(g.indexOf(f)>-1)d=((t,e,o)=>{if(m.lastIndex=0,m.test(t)){const s=`.${o}`;return t.replace(K,(c,n)=>L(n,s)).replace(m,s+" ")}return e+" "+t})(g,e,o);else{const R=g.replace(m,"");R.length>0&&(d=L(R,c))}return d},l=(t=>{const e=[];let o=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(n,l)=>{const r=`__ph-${o}__`;return e.push(l),o++,r})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(n,l,r)=>{const p=`__ph-${o}__`;return e.push(r),o++,l+p}),placeholders:e}})(t);let a,r="",p=0;const i=/( |>|\+|~(?!=))\s*/g;let u=!((t=l.content).indexOf(f)>-1);for(;null!==(a=i.exec(t));){const g=a[1],d=t.slice(p,a.index).trim();u=u||d.indexOf(f)>-1,r+=`${u?n(d):d} ${g} `,p=i.lastIndex}const k=t.substring(p);return u=u||k.indexOf(f)>-1,r+=u?n(k):k,((t,e)=>e.replace(/__ph-(\d+)__/g,(o,s)=>t[+s]))(l.placeholders,r)})(c,e,o).trim():c.trim()).join(", "))(n.selector,e,o,s):(n.selector.startsWith("@media")||n.selector.startsWith("@supports")||n.selector.startsWith("@page")||n.selector.startsWith("@document"))&&(r=P(n.content,e,o,s)),{selector:l.replace(/\s{2,}/g," ").trim(),content:r}}),E=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,`.${e}`),ht=(t,e,o)=>{const s=e+"-h",c=e+"-s",n=(t=>t.match(J)||[])(t);t=(t=>t.replace(z,""))(t);const l=[];if(o){const p=a=>{const i=`/*!@___${l.length}___*/`;return l.push({placeholder:i,comment:`/*!@${a.selector}*/`}),a.selector=i+a.selector,a};t=H(t,a=>"@"!==a.selector[0]?p(a):((a.selector.startsWith("@media")||a.selector.startsWith("@supports")||a.selector.startsWith("@page")||a.selector.startsWith("@document"))&&(a.content=H(a.content,p)),a))}const r=((t,e,o,s,c)=>{const n=((t,e)=>{const o="."+e+" > ",s=[];return t=t.replace(D,(...c)=>{if(c[2]){const n=c[2].trim(),r=o+n+c[3];let p="";for(let h=c[4]-1;h>=0;h--){const u=c[5][h];if("}"===u||","===u)break;p=u+p}const a=(p+r).trim(),i=`${p.trimEnd()}${r.trim()}`.trim();return a!==i&&s.push({orgSelector:a,updatedSelector:`${i}, ${a}`}),r}return f+c[3]}),{selectors:s,cssText:t}})(t=(t=>B(t,M,nt))(t=(t=>B(t,N,W))(t=(t=>t.replace(I,`$1${y}`).replace(G,`$1${_}`).replace(A,`$1${b}`))(t))),s);return t=(t=>U.reduce((e,o)=>e.replace(o," "),t))(t=n.cssText),e&&(t=P(t,e,o,s)),{cssText:(t=(t=E(t,o)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:n.selectors.map(l=>({orgSelector:E(l.orgSelector,o),updatedSelector:E(l.updatedSelector,o)}))}})(t,e,s,c);return t=[r.cssText,...n].join("\n"),o&&l.forEach(({placeholder:p,comment:a})=>{t=t.replace(p,a)}),r.slottedSelectors.forEach(p=>{const a=new RegExp((t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"))(p.orgSelector),"g");t=t.replace(a,p.updatedSelector)}),t}}}]);