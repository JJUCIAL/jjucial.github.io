import{u as de,e as fe,a as ve,h as I,v as me,g as ge,f as ee,i as j,j as he,c as be,k as ye,l as we}from"./QBtn.f76d3de5.js";import{f as a,j as $,r as q,k as m,u as z,a1 as pe,J as M,q as se,a3 as te,w as Y,p as ce,n as le,B as V,v as B,a4 as Se,a5 as qe,a6 as ke,t as E,l as _e,a2 as Te}from"./index.dc9d4a84.js";import{d as Be}from"./pinia.812701e1.js";const G={dark:{type:Boolean,default:null}};function J(e,t){return a(()=>e.dark===null?t.dark.isActive:e.dark)}var Ue=$({name:"QItem",props:{...G,...de,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=z(),i=J(e,n),{hasLink:c,linkAttrs:s,linkClass:g,linkTag:y,navigateOnClick:p}=fe(),h=q(null),S=q(null),f=a(()=>e.clickable===!0||c.value===!0||e.tag==="label"),d=a(()=>e.disable!==!0&&f.value===!0),v=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?g.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=a(()=>{if(e.insetLevel===void 0)return null;const u=n.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function k(u){d.value===!0&&(S.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===h.value?S.value.focus():document.activeElement===S.value&&h.value.focus()),p(u))}function _(u){if(d.value===!0&&pe(u,[13,32])===!0){M(u),u.qKeyEvent=!0;const x=new MouseEvent("click",u);x.qKeyEvent=!0,h.value.dispatchEvent(x)}l("keyup",u)}function r(){const u=ve(t.default,[]);return d.value===!0&&u.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:S})),u}return()=>{const u={ref:h,class:v.value,style:w.value,role:"listitem",onClick:k,onKeyup:_};return d.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,s.value)):f.value===!0&&(u["aria-disabled"]="true"),m(y.value,u,r())}}}),Ke=$({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=a(()=>parseInt(e.lines,10)),n=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),i=a(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>m("div",{style:i.value,class:n.value},I(t.default))}});const Le=["ul","ol"];var Xe=$({name:"QList",props:{...G,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=z(),n=J(e,l.proxy.$q),i=a(()=>Le.includes(e.tag)?null:"list"),c=a(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m(e.tag,{class:c.value,role:i.value},I(t.default))}});function Ye(e,t,l){let n;function i(){n!==void 0&&(te.remove(n),n=void 0)}return se(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>l.value===!0,handler:t},te.add(n)}}}const Ge={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Je=["beforeShow","show","beforeHide","hide"];function Ze({showing:e,canShow:t,hideOnRouteChange:l,handleShow:n,handleHide:i,processOnMount:c}){const s=z(),{props:g,emit:y,proxy:p}=s;let h;function S(r){e.value===!0?v(r):f(r)}function f(r){if(g.disable===!0||r!==void 0&&r.qAnchorHandled===!0||t!==void 0&&t(r)!==!0)return;const u=g["onUpdate:modelValue"]!==void 0;u===!0&&(y("update:modelValue",!0),h=r,le(()=>{h===r&&(h=void 0)})),(g.modelValue===null||u===!1)&&d(r)}function d(r){e.value!==!0&&(e.value=!0,y("beforeShow",r),n!==void 0?n(r):y("show",r))}function v(r){if(g.disable===!0)return;const u=g["onUpdate:modelValue"]!==void 0;u===!0&&(y("update:modelValue",!1),h=r,le(()=>{h===r&&(h=void 0)})),(g.modelValue===null||u===!1)&&w(r)}function w(r){e.value!==!1&&(e.value=!1,y("beforeHide",r),i!==void 0?i(r):y("hide",r))}function k(r){g.disable===!0&&r===!0?g["onUpdate:modelValue"]!==void 0&&y("update:modelValue",!1):r===!0!==e.value&&(r===!0?d:w)(h)}Y(()=>g.modelValue,k),l!==void 0&&me(s)===!0&&Y(()=>p.$route.fullPath,()=>{l.value===!0&&e.value===!0&&v()}),c===!0&&ce(()=>{k(g.modelValue)});const _={show:f,hide:v,toggle:S};return Object.assign(p,_),_}const et=[Element,String],xe=[null,document,document.body,document.scrollingElement,document.documentElement];function tt(e,t){let l=ge(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return xe.includes(l)?window:l}function Ce(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ee(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let H;function lt(){if(H!==void 0)return H;const e=document.createElement("p"),t=document.createElement("div");ee(e,{width:"100%",height:"200px"}),ee(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return l===n&&(n=t.clientWidth),t.remove(),H=l-n,H}function Ve(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let A=0,U,K,R,X=!1,oe,ne,ie,L=null;function Ie(e){$e(e)&&M(e)}function $e(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Se(e),l=e.shiftKey&&!e.deltaX,n=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=l||n?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const s=t[c];if(Ve(s,n))return n?i<0&&s.scrollTop===0?!0:i>0&&s.scrollTop+s.clientHeight===s.scrollHeight:i<0&&s.scrollLeft===0?!0:i>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function re(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function O(e){X!==!0&&(X=!0,requestAnimationFrame(()=>{X=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:n}=document.scrollingElement;(R===void 0||t!==window.innerHeight)&&(R=l-t,document.scrollingElement.scrollTop=n),n>R&&(document.scrollingElement.scrollTop-=Math.ceil((n-R)/8))}))}function ae(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(t);U=Ee(window),K=Ce(window),oe=t.style.left,ne=t.style.top,ie=window.location.href,t.style.left=`-${U}px`,t.style.top=`-${K}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",O,B.passiveCapture),window.visualViewport.addEventListener("scroll",O,B.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",re,B.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",Ie,B.notPassive),e==="remove"&&(V.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",O,B.passiveCapture),window.visualViewport.removeEventListener("scroll",O,B.passiveCapture)):window.removeEventListener("scroll",re,B.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=oe,t.style.top=ne,window.location.href===ie&&window.scrollTo(U,K),R=void 0)}function ze(e){let t="add";if(e===!0){if(A++,L!==null){clearTimeout(L),L=null;return}if(A>1)return}else{if(A===0||(A--,A>0))return;if(t="remove",V.is.ios===!0&&V.is.nativeMobile===!0){L!==null&&clearTimeout(L),L=setTimeout(()=>{ae(t),L=null},100);return}}ae(t)}function ot(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ze(t))}}}function ue(){let e=null;const t=z();function l(){e!==null&&(clearTimeout(e),e=null)}return qe(l),se(l),{removeTimeout:l,registerTimeout(n,i){l(),j(t)===!1&&(e=setTimeout(()=>{e=null,n()},i))}}}const Z={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Pe=Object.keys(Z);Z.all=!0;function nt(e){const t={};for(const l of Pe)e[l]===!0&&(t[l]=!0);return Object.keys(t).length===0?Z:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Ae=["INPUT","TEXTAREA"];function it(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Ae.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function rt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ke.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function at(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function ut(e,t,l){if(l<=t)return t;const n=l-t+1;let i=t+(e-t)%n;return i<t&&(i=n+i),i===0?0:i}var st=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:l.value},I(t.default))}});function Re(e,t){const l=q(null),n=a(()=>e.disable===!0?null:m("span",{ref:l,class:"no-outline",tabindex:-1}));function i(c){const s=t.value;c!==void 0&&c.type.indexOf("key")===0?s!==null&&document.activeElement!==s&&s.contains(document.activeElement)===!0&&s.focus():l.value!==null&&(c===void 0||s!==null&&s.contains(c.target)===!0)&&l.value.focus()}return{refocusTargetEl:n,refocusTarget:i}}const Ne={name:String};function He(e={}){return(t,l,n)=>{t[l](m("input",{class:"hidden"+(n||""),...e.value}))}}function ct(e){return a(()=>e.name||e.for)}var Oe={xs:30,sm:35,md:40,lg:50,xl:60};const dt={...G,...ye,...Ne,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ft=["update:modelValue"];function vt(e,t){const{props:l,slots:n,emit:i,proxy:c}=z(),{$q:s}=c,g=J(l,s),y=q(null),{refocusTargetEl:p,refocusTarget:h}=Re(l,y),S=he(l,Oe),f=a(()=>l.val!==void 0&&Array.isArray(l.modelValue)),d=a(()=>{const o=E(l.val);return f.value===!0?l.modelValue.findIndex(b=>E(b)===o):-1}),v=a(()=>f.value===!0?d.value!==-1:E(l.modelValue)===E(l.trueValue)),w=a(()=>f.value===!0?d.value===-1:E(l.modelValue)===E(l.falseValue)),k=a(()=>v.value===!1&&w.value===!1),_=a(()=>l.disable===!0?-1:l.tabindex||0),r=a(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(g.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),u=a(()=>{const o=v.value===!0?"truthy":w.value===!0?"falsy":"indet",b=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?v.value===!0:w.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${o}${b}`}),x=a(()=>{const o={type:"checkbox"};return l.name!==void 0&&Object.assign(o,{".checked":v.value,"^checked":v.value===!0?"checked":void 0,name:l.name,value:f.value===!0?l.val:l.trueValue}),o}),P=He(x),W=a(()=>{const o={tabindex:_.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":k.value===!0?"mixed":v.value===!0?"true":"false"};return l.disable===!0&&(o["aria-disabled"]="true"),o});function C(o){o!==void 0&&(M(o),h(o)),l.disable!==!0&&i("update:modelValue",Q(),o)}function Q(){if(f.value===!0){if(v.value===!0){const o=l.modelValue.slice();return o.splice(d.value,1),o}return l.modelValue.concat([l.val])}if(v.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(w.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function D(o){(o.keyCode===13||o.keyCode===32)&&M(o)}function N(o){(o.keyCode===13||o.keyCode===32)&&C(o)}const F=t(v,k);return Object.assign(c,{toggle:C}),()=>{const o=F();l.disable!==!0&&P(o,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const b=[m("div",{class:u.value,style:S.value,"aria-hidden":"true"},o)];p.value!==null&&b.push(p.value);const T=l.label!==void 0?be(n.default,[l.label]):I(n.default);return T!==void 0&&b.push(m("div",{class:`q-${e}__label q-anchor--skip`},T)),m("div",{ref:y,class:r.value,...W.value,onClick:C,onKeydown:D,onKeyup:N},b)}}var mt=(e,t)=>{const l=e.__vccOpts||e;for(const[n,i]of t)l[n]=i;return l},gt=$({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const l=a(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(i=>e[i]===!0).map(i=>`q-btn-group--${i}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>m("div",{class:l.value},I(t.default))}});const ht=Be("wiseButton",{state:()=>({activeButton:"home"}),actions:{setActiveButton(e){this.activeButton=e}}});const je={ratio:[String,Number]};function Me(e,t){return a(()=>{const l=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const We=1.7778;var bt=$({name:"QImg",props:{...je,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:We},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:l}){const n=q(e.initialRatio),i=Me(e,n),c=z(),{registerTimeout:s,removeTimeout:g}=ue(),{registerTimeout:y,removeTimeout:p}=ue(),h=a(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),S=a(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),f=[q(null),q(h.value)],d=q(0),v=q(!1),w=q(!1),k=a(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),_=a(()=>({width:e.width,height:e.height})),r=a(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),u=a(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function x(){if(p(),e.loadingShowDelay===0){v.value=!0;return}y(()=>{v.value=!0},e.loadingShowDelay)}function P(){p(),v.value=!1}function W({target:o}){j(c)===!1&&(g(),n.value=o.naturalHeight===0?.5:o.naturalWidth/o.naturalHeight,C(o,1))}function C(o,b){b===1e3||j(c)===!0||(o.complete===!0?Q(o):s(()=>{C(o,b+1)},50))}function Q(o){j(c)!==!0&&(d.value=d.value^1,f[d.value].value=null,P(),o.getAttribute("__qerror")!=="true"&&(w.value=!1),l("load",o.currentSrc||o.src))}function D(o){g(),P(),w.value=!0,f[d.value].value=S.value,f[d.value^1].value=h.value,l("error",o)}function N(o){const b=f[o].value,T={key:"img_"+o,class:r.value,style:u.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...b};return d.value===o?Object.assign(T,{class:T.class+"current",onLoad:W,onError:D}):T.class+="loaded",m("div",{class:"q-img__container absolute-full",key:"img"+o},m("img",T))}function F(){return v.value===!1?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},I(t[w.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[m(we,{color:e.spinnerColor,size:e.spinnerSize})])}{let o=function(){Y(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,b=>{g(),w.value=!1,b===null?(P(),f[d.value^1].value=h.value):x(),f[d.value].value=b},{immediate:!0})};_e.value===!0?ce(o):o()}return()=>{const o=[];return i.value!==null&&o.push(m("div",{key:"filler",style:i.value})),f[0].value!==null&&o.push(N(0)),f[1].value!==null&&o.push(N(1)),o.push(m(Te,{name:"q-transition--fade"},F)),m("div",{key:"main",class:k.value,style:_.value,role:"img","aria-label":e.alt},o)}}});export{je as A,Me as B,Ne as C,ct as D,ut as E,Ue as Q,mt as _,G as a,Je as b,rt as c,J as d,ue as e,Ze as f,nt as g,Ye as h,at as i,ot as j,et as k,tt as l,Ce as m,Ee as n,lt as o,st as p,Ke as q,dt as r,it as s,ft as t,Ge as u,vt as v,ht as w,gt as x,bt as y,Xe as z};