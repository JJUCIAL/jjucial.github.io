import{u as lt,e as ot,a as it,h as R,v as at,g as rt,f as Le,i as ee,j as ut,c as st,k as ct,l as oe,m as dt}from"./QBtn.06d25aa4.js";import{f as g,j as z,r as T,k as S,u as A,U as Qe,Z as U,q as j,a0 as Pe,w as V,p as qe,n as ie,a1 as B,v as $,a2 as ft,a3 as Xe,a4 as vt,T as mt,s as ht,a5 as gt,V as W,a6 as de,_ as ae,X as fe,Y as ye,W as Y,t as X,a7 as Be,D as pt,a8 as bt,a9 as yt,$ as Ye,l as wt}from"./index.bfd4a0b0.js";import{d as St}from"./pinia.6188f59d.js";const Ce={dark:{type:Boolean,default:null}};function Te(e,t){return g(()=>e.dark===null?t.dark.isActive:e.dark)}var mn=z({name:"QItem",props:{...Ce,...lt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=A(),l=Te(e,o),{hasLink:i,linkAttrs:a,linkClass:u,linkTag:c,navigateOnClick:s}=ot(),v=T(null),y=T(null),h=g(()=>e.clickable===!0||i.value===!0||e.tag==="label"),r=g(()=>e.disable!==!0&&h.value===!0),f=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=g(()=>{if(e.insetLevel===void 0)return null;const m=o.lang.rtl===!0?"Right":"Left";return{["padding"+m]:16+e.insetLevel*56+"px"}});function E(m){r.value===!0&&(y.value!==null&&(m.qKeyEvent!==!0&&document.activeElement===v.value?y.value.focus():document.activeElement===y.value&&v.value.focus()),s(m))}function P(m){if(r.value===!0&&Qe(m,[13,32])===!0){U(m),m.qKeyEvent=!0;const x=new MouseEvent("click",m);x.qKeyEvent=!0,v.value.dispatchEvent(x)}n("keyup",m)}function p(){const m=it(t.default,[]);return r.value===!0&&m.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:y})),m}return()=>{const m={ref:v,class:f.value,style:w.value,role:"listitem",onClick:E,onKeyup:P};return r.value===!0?(m.tabindex=e.tabindex||"0",Object.assign(m,a.value)):h.value===!0&&(m["aria-disabled"]="true"),S(c.value,m,p())}}}),hn=z({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=g(()=>parseInt(e.lines,10)),o=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=g(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>S("div",{style:l.value,class:o.value},R(t.default))}});const qt=["ul","ol"];var gn=z({name:"QList",props:{...Ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=A(),o=Te(e,n.proxy.$q),l=g(()=>qt.includes(e.tag)?null:"list"),i=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:i.value,role:l.value},R(t.default))}});function pn(e,t,n){let o;function l(){o!==void 0&&(Pe.remove(o),o=void 0)}return j(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){o={condition:()=>n.value===!0,handler:t},Pe.add(o)}}}const Ct={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Tt=["beforeShow","show","beforeHide","hide"];function Et({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:i}){const a=A(),{props:u,emit:c,proxy:s}=a;let v;function y(p){e.value===!0?f(p):h(p)}function h(p){if(u.disable===!0||p!==void 0&&p.qAnchorHandled===!0||t!==void 0&&t(p)!==!0)return;const m=u["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!0),v=p,ie(()=>{v===p&&(v=void 0)})),(u.modelValue===null||m===!1)&&r(p)}function r(p){e.value!==!0&&(e.value=!0,c("beforeShow",p),o!==void 0?o(p):c("show",p))}function f(p){if(u.disable===!0)return;const m=u["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!1),v=p,ie(()=>{v===p&&(v=void 0)})),(u.modelValue===null||m===!1)&&w(p)}function w(p){e.value!==!1&&(e.value=!1,c("beforeHide",p),l!==void 0?l(p):c("hide",p))}function E(p){u.disable===!0&&p===!0?u["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):p===!0!==e.value&&(p===!0?r:w)(v)}V(()=>u.modelValue,E),n!==void 0&&at(a)===!0&&V(()=>s.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),i===!0&&qe(()=>{E(u.modelValue)});const P={show:h,hide:f,toggle:y};return Object.assign(s,P),P}const xt=[Element,String],kt=[null,document,document.body,document.scrollingElement,document.documentElement];function _t(e,t){let n=rt(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return kt.includes(n)?window:n}function Lt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Pt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function Bt(){if(ne!==void 0)return ne;const e=document.createElement("p"),t=document.createElement("div");Le(e,{width:"100%",height:"200px"}),Le(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),ne=n-o,ne}function Ht(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,ve,me,J,he=!1,He,$e,Me,D=null;function $t(e){Mt(e)&&U(e)}function Mt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ft(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=n||o?e.deltaY:e.deltaX;for(let i=0;i<t.length;i++){const a=t[i];if(Ht(a,o))return o?l<0&&a.scrollTop===0?!0:l>0&&a.scrollTop+a.clientHeight===a.scrollHeight:l<0&&a.scrollLeft===0?!0:l>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function Ve(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function le(e){he!==!0&&(he=!0,requestAnimationFrame(()=>{he=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:o}=document.scrollingElement;(J===void 0||t!==window.innerHeight)&&(J=n-t,document.scrollingElement.scrollTop=o),o>J&&(document.scrollingElement.scrollTop-=Math.ceil((o-J)/8))}))}function Ae(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:l}=window.getComputedStyle(t);ve=Pt(window),me=Lt(window),He=t.style.left,$e=t.style.top,Me=window.location.href,t.style.left=`-${ve}px`,t.style.top=`-${me}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,B.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",le,$.passiveCapture),window.visualViewport.addEventListener("scroll",le,$.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ve,$.passiveCapture))}B.is.desktop===!0&&B.is.mac===!0&&window[`${e}EventListener`]("wheel",$t,$.notPassive),e==="remove"&&(B.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",le,$.passiveCapture),window.visualViewport.removeEventListener("scroll",le,$.passiveCapture)):window.removeEventListener("scroll",Ve,$.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=He,t.style.top=$e,window.location.href===Me&&window.scrollTo(ve,me),J=void 0)}function Vt(e){let t="add";if(e===!0){if(Z++,D!==null){clearTimeout(D),D=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(t="remove",B.is.ios===!0&&B.is.nativeMobile===!0){D!==null&&clearTimeout(D),D=setTimeout(()=>{Ae(t),D=null},100);return}}Ae(t)}function bn(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Vt(t))}}}function we(){let e=null;const t=A();function n(){e!==null&&(clearTimeout(e),e=null)}return Xe(n),j(n),{removeTimeout:n,registerTimeout(o,l){n(),ee(t)===!1&&(e=setTimeout(()=>{e=null,o()},l))}}}const Ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},At=Object.keys(Ee);Ee.all=!0;function We(e){const t={};for(const n of At)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?Ee:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Wt=["INPUT","TEXTAREA"];function ze(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Wt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function re(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),vt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ge(e,t,n){const o=ye(e);let l,i=o.left-t.event.x,a=o.top-t.event.y,u=Math.abs(i),c=Math.abs(a);const s=t.direction;s.horizontal===!0&&s.vertical!==!0?l=i<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?l=a<0?"up":"down":s.up===!0&&a<0?(l="up",u>c&&(s.left===!0&&i<0?l="left":s.right===!0&&i>0&&(l="right"))):s.down===!0&&a>0?(l="down",u>c&&(s.left===!0&&i<0?l="left":s.right===!0&&i>0&&(l="right"))):s.left===!0&&i<0?(l="left",u<c&&(s.up===!0&&a<0?l="up":s.down===!0&&a>0&&(l="down"))):s.right===!0&&i>0&&(l="right",u<c&&(s.up===!0&&a<0?l="up":s.down===!0&&a>0&&(l="down")));let v=!1;if(l===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};l=t.event.lastDir,v=!0,l==="left"||l==="right"?(o.left-=i,u=0,i=0):(o.top-=a,c=0,a=0)}return{synthetic:v,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:o,direction:l,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:u,y:c},offset:{x:i,y:a},delta:{x:o.left-t.event.lastX,y:o.top-t.event.lastY}}}}let zt=0;var yn=mt({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(n.mouse!==!0&&B.has.touch!==!0)return;function o(i,a){n.mouse===!0&&a===!0?U(i):(n.stop===!0&&fe(i),n.prevent===!0&&ae(i))}const l={uid:"qvtp_"+zt++,handler:t,modifiers:n,direction:We(n),noop:ht,mouseStart(i){ze(i,l)&&gt(i)&&(W(l,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),l.start(i,!0))},touchStart(i){if(ze(i,l)){const a=i.target;W(l,"temp",[[a,"touchmove","move","notPassiveCapture"],[a,"touchcancel","end","passiveCapture"],[a,"touchend","end","passiveCapture"]]),l.start(i)}},start(i,a){if(B.is.firefox===!0&&de(e,!0),l.lastEvt=i,a===!0||n.stop===!0){if(l.direction.all!==!0&&(a!==!0||l.modifiers.mouseAllDir!==!0&&l.modifiers.mousealldir!==!0)){const s=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&ae(s),i.cancelBubble===!0&&fe(s),Object.assign(s,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[l.uid]:i.qClonedBy.concat(l.uid)}),l.initialEvent={target:i.target,event:s}}fe(i)}const{left:u,top:c}=ye(i);l.event={x:u,y:c,time:Date.now(),mouse:a===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:u,lastY:c}},move(i){if(l.event===void 0)return;const a=ye(i),u=a.left-l.event.x,c=a.top-l.event.y;if(u===0&&c===0)return;l.lastEvt=i;const s=l.event.mouse===!0,v=()=>{o(i,s);let r;n.preserveCursor!==!0&&n.preservecursor!==!0&&(r=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),re(),l.styleCleanup=f=>{if(l.styleCleanup=void 0,r!==void 0&&(document.documentElement.style.cursor=r),document.body.classList.remove("non-selectable"),s===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{w(),f()},50):w()}else f!==void 0&&f()}};if(l.event.detected===!0){l.event.isFirst!==!0&&o(i,l.event.mouse);const{payload:r,synthetic:f}=ge(i,l,!1);r!==void 0&&(l.handler(r)===!1?l.end(i):(l.styleCleanup===void 0&&l.event.isFirst===!0&&v(),l.event.lastX=r.position.left,l.event.lastY=r.position.top,l.event.lastDir=f===!0?void 0:r.direction,l.event.isFirst=!1));return}if(l.direction.all===!0||s===!0&&(l.modifiers.mouseAllDir===!0||l.modifiers.mousealldir===!0)){v(),l.event.detected=!0,l.move(i);return}const y=Math.abs(u),h=Math.abs(c);y!==h&&(l.direction.horizontal===!0&&y>h||l.direction.vertical===!0&&y<h||l.direction.up===!0&&y<h&&c<0||l.direction.down===!0&&y<h&&c>0||l.direction.left===!0&&y>h&&u<0||l.direction.right===!0&&y>h&&u>0?(l.event.detected=!0,l.move(i)):l.end(i,!0))},end(i,a){if(l.event!==void 0){if(Y(l,"temp"),B.is.firefox===!0&&de(e,!1),a===!0)l.styleCleanup!==void 0&&l.styleCleanup(),l.event.detected!==!0&&l.initialEvent!==void 0&&l.initialEvent.target.dispatchEvent(l.initialEvent.event);else if(l.event.detected===!0){l.event.isFirst===!0&&l.handler(ge(i===void 0?l.lastEvt:i,l).payload);const{payload:u}=ge(i===void 0?l.lastEvt:i,l,!0),c=()=>{l.handler(u)};l.styleCleanup!==void 0?l.styleCleanup(c):c()}l.event=void 0,l.initialEvent=void 0,l.lastEvt=void 0}}};if(e.__qtouchpan=l,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";W(l,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}B.has.touch===!0&&W(l,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=We(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),Y(t,"main"),Y(t,"temp"),B.is.firefox===!0&&de(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchpan)}});function wn(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Sn(e,t,n){if(n<=t)return t;const o=n-t+1;let l=t+(e-t)%o;return l<t&&(l=o+l),l===0?0:l}function qn(e,t=2,n="0"){if(e==null)return e;const o=""+e;return o.length>=t?o:new Array(t-o.length+1).join(n)+o}var Cn=z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=g(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:n.value},R(t.default))}});function It(e,t){const n=T(null),o=g(()=>e.disable===!0?null:S("span",{ref:n,class:"no-outline",tabindex:-1}));function l(i){const a=t.value;i!==void 0&&i.type.indexOf("key")===0?a!==null&&document.activeElement!==a&&a.contains(document.activeElement)===!0&&a.focus():n.value!==null&&(i===void 0||a!==null&&a.contains(i.target)===!0)&&n.value.focus()}return{refocusTargetEl:o,refocusTarget:l}}const Ft={name:String};function Tn(e){return g(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Dt(e={}){return(t,n,o)=>{t[n](S("input",{class:"hidden"+(o||""),...e.value}))}}function En(e){return g(()=>e.name||e.for)}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const xn={...Ce,...ct,...Ft,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},kn=["update:modelValue"];function _n(e,t){const{props:n,slots:o,emit:l,proxy:i}=A(),{$q:a}=i,u=Te(n,a),c=T(null),{refocusTargetEl:s,refocusTarget:v}=It(n,c),y=ut(n,Nt),h=g(()=>n.val!==void 0&&Array.isArray(n.modelValue)),r=g(()=>{const d=X(n.val);return h.value===!0?n.modelValue.findIndex(C=>X(C)===d):-1}),f=g(()=>h.value===!0?r.value!==-1:X(n.modelValue)===X(n.trueValue)),w=g(()=>h.value===!0?r.value===-1:X(n.modelValue)===X(n.falseValue)),E=g(()=>f.value===!1&&w.value===!1),P=g(()=>n.disable===!0?-1:n.tabindex||0),p=g(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(n.disable===!0?" disabled":"")+(u.value===!0?` q-${e}--dark`:"")+(n.dense===!0?` q-${e}--dense`:"")+(n.leftLabel===!0?" reverse":"")),m=g(()=>{const d=f.value===!0?"truthy":w.value===!0?"falsy":"indet",C=n.color!==void 0&&(n.keepColor===!0||(e==="toggle"?f.value===!0:w.value!==!0))?` text-${n.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${d}${C}`}),x=g(()=>{const d={type:"checkbox"};return n.name!==void 0&&Object.assign(d,{".checked":f.value,"^checked":f.value===!0?"checked":void 0,name:n.name,value:h.value===!0?n.val:n.trueValue}),d}),b=Dt(x),H=g(()=>{const d={tabindex:P.value,role:e==="toggle"?"switch":"checkbox","aria-label":n.label,"aria-checked":E.value===!0?"mixed":f.value===!0?"true":"false"};return n.disable===!0&&(d["aria-disabled"]="true"),d});function q(d){d!==void 0&&(U(d),v(d)),n.disable!==!0&&l("update:modelValue",_(),d)}function _(){if(h.value===!0){if(f.value===!0){const d=n.modelValue.slice();return d.splice(r.value,1),d}return n.modelValue.concat([n.val])}if(f.value===!0){if(n.toggleOrder!=="ft"||n.toggleIndeterminate===!1)return n.falseValue}else if(w.value===!0){if(n.toggleOrder==="ft"||n.toggleIndeterminate===!1)return n.trueValue}else return n.toggleOrder!=="ft"?n.trueValue:n.falseValue;return n.indeterminateValue}function L(d){(d.keyCode===13||d.keyCode===32)&&U(d)}function I(d){(d.keyCode===13||d.keyCode===32)&&q(d)}const Q=t(f,E);return Object.assign(i,{toggle:q}),()=>{const d=Q();n.disable!==!0&&b(d,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const C=[S("div",{class:m.value,style:y.value,"aria-hidden":"true"},d)];s.value!==null&&C.push(s.value);const M=n.label!==void 0?st(o.default,[n.label]):R(o.default);return M!==void 0&&C.push(S("div",{class:`q-${e}__label q-anchor--skip`},M)),S("div",{ref:c,class:p.value,...H.value,onClick:q,onKeydown:L,onKeyup:I},C)}}var Ln=(e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n};const Ke={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Pn={...Ke,contextMenu:Boolean};function Ot({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:i}=A(),a=T(null);let u=null;function c(r){return a.value===null?!1:r===void 0||r.touches===void 0||r.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(r){l.hide(r)},toggle(r){l.toggle(r),r.qAnchorHandled=!0},toggleKey(r){Qe(r,13)===!0&&s.toggle(r)},contextClick(r){l.hide(r),ae(r),ie(()=>{l.show(r),r.qAnchorHandled=!0})},prevent:ae,mobileTouch(r){if(s.mobileCleanup(r),c(r)!==!0)return;l.hide(r),a.value.classList.add("non-selectable");const f=r.target;W(s,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,l.show(r),r.qAnchorHandled=!0},300)},mobileCleanup(r){a.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&r!==void 0&&re()}}),n=function(r=o.contextMenu){if(o.noParentEvent===!0||a.value===null)return;let f;r===!0?l.$q.platform.is.mobile===!0?f=[[a.value,"touchstart","mobileTouch","passive"]]:f=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:f=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],W(s,"anchor",f)});function v(){Y(s,"anchor")}function y(r){for(a.value=r;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function h(){if(o.target===!1||o.target===""||l.$el.parentNode===null)a.value=null;else if(o.target===!0)y(l.$el.parentNode);else{let r=o.target;if(typeof o.target=="string")try{r=document.querySelector(o.target)}catch{r=void 0}r!=null?(a.value=r.$el||r,n()):(a.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return V(()=>o.contextMenu,r=>{a.value!==null&&(v(),n(r))}),V(()=>o.target,()=>{a.value!==null&&v(),h()}),V(()=>o.noParentEvent,r=>{a.value!==null&&(r===!0?v():n())}),qe(()=>{h(),t!==!0&&o.modelValue===!0&&a.value===null&&i("update:modelValue",!1)}),j(()=>{u!==null&&clearTimeout(u),v()}),{anchorEl:a,canShow:c,anchorEvents:s}}function jt(e,t){const n=T(null);let o;function l(u,c){const s=`${c!==void 0?"add":"remove"}EventListener`,v=c!==void 0?c:o;u!==window&&u[s]("scroll",v,$.passive),window[s]("scroll",v,$.passive),o=c}function i(){n.value!==null&&(l(n.value),n.value=null)}const a=V(()=>e.noParentEvent,()=>{n.value!==null&&(i(),t())});return j(a),{localScrollTarget:n,unconfigureScrollTarget:i,changeScrollEvent:l}}let N=[],te=[];function Ue(e){te=te.filter(t=>t!==e)}function Rt(e){Ue(e),te.push(e)}function Ie(e){Ue(e),te.length===0&&N.length!==0&&(N[N.length-1](),N=[])}function Bn(e){te.length===0?e():N.push(e)}function Hn(e){N=N.filter(t=>t!==e)}let Qt=1,Xt=document.body;function Yt(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${Qt++}`:e,Be.globalNodes!==void 0){const o=Be.globalNodes.class;o!==void 0&&(n.className=o)}return Xt.appendChild(n),n}function Kt(e){e.remove()}const K=[];function $n(e){return K.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Ut(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return oe(e)}else if(e.__qPortal===!0){const n=oe(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=oe(e)}while(e!=null)}function Mn(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Ut(e,t);continue}e.hide(t)}e=oe(e)}}const Gt=z({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Zt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Jt(e,t,n,o){const l=T(!1),i=T(!1);let a=null;const u={},c=o==="dialog"&&Zt(e);function s(y){if(y===!0){Ie(u),i.value=!0;return}i.value=!1,l.value===!1&&(c===!1&&a===null&&(a=Yt(!1,o)),l.value=!0,K.push(e.proxy),Rt(u))}function v(y){if(i.value=!1,y!==!0)return;Ie(u),l.value=!1;const h=K.indexOf(e.proxy);h!==-1&&K.splice(h,1),a!==null&&(Kt(a),a=null)}return pt(()=>{v(!0)}),e.proxy.__qPortal=!0,bt(e.proxy,"contentEl",()=>t.value),{showPortal:s,hidePortal:v,portalIsActive:l,portalIsAccessible:i,renderPortal:()=>c===!0?n():l.value===!0?[S(yt,{to:a},S(Gt,n))]:void 0}}const pe={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function en(e,t=()=>{},n=()=>{}){return{transitionProps:g(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function tn(){let e;const t=A();function n(){e=void 0}return Xe(n),j(n),{removeTick:n,registerTick(o){e=o,ie(()=>{e===o&&(ee(t)===!1&&e(),e=void 0)})}}}const{notPassiveCapture:ue}=$,O=[];function se(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=K.length-1;for(;n>=0;){const o=K[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=O.length-1;o>=0;o--){const l=O[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function nn(e){O.push(e),O.length===1&&(document.addEventListener("mousedown",se,ue),document.addEventListener("touchstart",se,ue))}function Fe(e){const t=O.findIndex(n=>n===e);t!==-1&&(O.splice(t,1),O.length===0&&(document.removeEventListener("mousedown",se,ue),document.removeEventListener("touchstart",se,ue)))}let De,Ne;function Oe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ln(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Se={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Se[`${e}#ltr`]=e,Se[`${e}#rtl`]=e});function je(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:Se[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function on(e,t){let{top:n,left:o,right:l,bottom:i,width:a,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],i+=t[1],l+=t[0],a+=t[0],u+=t[1]),{top:n,bottom:i,height:u,left:o,right:l,width:a,middle:o+(l-o)/2,center:n+(i-n)/2}}function an(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function rn(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Re(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Ge(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ge(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:i,selfOrigin:a,absoluteOffset:u,fit:c,cover:s,maxHeight:v,maxWidth:y}=e;if(B.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:q,offsetTop:_}=window.visualViewport;q!==De&&(H.setProperty("--q-pe-left",q+"px"),De=q),_!==Ne&&(H.setProperty("--q-pe-top",_+"px"),Ne=_)}const{scrollLeft:h,scrollTop:r}=n,f=u===void 0?on(l,s===!0?[0,0]:o):an(l,u,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y,maxHeight:v,visibility:"visible"});const{offsetWidth:w,offsetHeight:E}=n,{elWidth:P,elHeight:p}=c===!0||s===!0?{elWidth:Math.max(f.width,w),elHeight:s===!0?Math.max(f.height,E):E}:{elWidth:w,elHeight:E};let m={maxWidth:y,maxHeight:v};(c===!0||s===!0)&&(m.minWidth=f.width+"px",s===!0&&(m.minHeight=f.height+"px")),Object.assign(n.style,m);const x=rn(P,p);let b=Re(f,x,i,a);if(u===void 0||o===void 0)be(b,f,x,i,a);else{const{top:H,left:q}=b;be(b,f,x,i,a);let _=!1;if(b.top!==H){_=!0;const L=2*o[1];f.center=f.top-=L,f.bottom-=L+2}if(b.left!==q){_=!0;const L=2*o[0];f.middle=f.left-=L,f.right-=L+2}_===!0&&(b=Re(f,x,i,a),be(b,f,x,i,a))}m={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(m.maxHeight=b.maxHeight+"px",f.height>b.maxHeight&&(m.minHeight=m.maxHeight)),b.maxWidth!==void 0&&(m.maxWidth=b.maxWidth+"px",f.width>b.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(n.style,m),n.scrollTop!==r&&(n.scrollTop=r),n.scrollLeft!==h&&(n.scrollLeft=h)}function be(e,t,n,o,l){const i=n.bottom,a=n.right,u=Bt(),c=window.innerHeight-u,s=document.body.clientWidth;if(e.top<0||e.top+i>c)if(l.vertical==="center")e.top=t[o.vertical]>c/2?Math.max(0,c-i):0,e.maxHeight=Math.min(i,c);else if(t[o.vertical]>c/2){const v=Math.min(c,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(i,v),e.top=Math.max(0,v-i)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(i,c-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),l.horizontal==="middle")e.left=t[o.horizontal]>s/2?Math.max(0,s-a):0;else if(t[o.horizontal]>s/2){const v=Math.min(s,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(a,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(a,s-e.left)}var Vn=z({name:"QTooltip",inheritAttrs:!1,props:{...Ke,...Ct,...pe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...pe.transitionShow,default:"jump-down"},transitionHide:{...pe.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Oe},self:{type:String,default:"top middle",validator:Oe},offset:{type:Array,default:()=>[14,14],validator:ln},scrollTarget:xt,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Tt],setup(e,{slots:t,emit:n,attrs:o}){let l,i;const a=A(),{proxy:{$q:u}}=a,c=T(null),s=T(!1),v=g(()=>je(e.anchor,u.lang.rtl)),y=g(()=>je(e.self,u.lang.rtl)),h=g(()=>e.persistent!==!0),{registerTick:r,removeTick:f}=tn(),{registerTimeout:w}=we(),{transitionProps:E,transitionStyle:P}=en(e),{localScrollTarget:p,changeScrollEvent:m,unconfigureScrollTarget:x}=jt(e,ke),{anchorEl:b,canShow:H,anchorEvents:q}=Ot({showing:s,configureAnchorEl:et}),{show:_,hide:L}=Et({showing:s,canShow:H,handleShow:C,handleHide:M,hideOnRouteChange:h,processOnMount:!0});Object.assign(q,{delayShow:Ze,delayHide:Je});const{showPortal:I,hidePortal:Q,renderPortal:d}=Jt(a,c,nt,"tooltip");if(u.platform.is.mobile===!0){const k={anchorEl:b,innerRef:c,onClickOutside(F){return L(F),F.target.classList.contains("q-dialog__backdrop")&&U(F),!0}},ce=g(()=>e.modelValue===null&&e.persistent!==!0&&s.value===!0);V(ce,F=>{(F===!0?nn:Fe)(k)}),j(()=>{Fe(k)})}function C(k){I(),r(()=>{i=new MutationObserver(()=>G()),i.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),G(),ke()}),l===void 0&&(l=V(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,G)),w(()=>{I(!0),n("show",k)},e.transitionDuration)}function M(k){f(),Q(),xe(),w(()=>{Q(!0),n("hide",k)},e.transitionDuration)}function xe(){i!==void 0&&(i.disconnect(),i=void 0),l!==void 0&&(l(),l=void 0),x(),Y(q,"tooltipTemp")}function G(){Ge({targetEl:c.value,offset:e.offset,anchorEl:b.value,anchorOrigin:v.value,selfOrigin:y.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ze(k){if(u.platform.is.mobile===!0){re(),document.body.classList.add("non-selectable");const ce=b.value,F=["touchmove","touchcancel","touchend","click"].map(_e=>[ce,_e,"delayHide","passiveCapture"]);W(q,"tooltipTemp",F)}w(()=>{_(k)},e.delay)}function Je(k){u.platform.is.mobile===!0&&(Y(q,"tooltipTemp"),re(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),w(()=>{L(k)},e.hideDelay)}function et(){if(e.noParentEvent===!0||b.value===null)return;const k=u.platform.is.mobile===!0?[[b.value,"touchstart","delayShow","passive"]]:[[b.value,"mouseenter","delayShow","passive"],[b.value,"mouseleave","delayHide","passive"]];W(q,"anchor",k)}function ke(){if(b.value!==null||e.scrollTarget!==void 0){p.value=_t(b.value,e.scrollTarget);const k=e.noParentEvent===!0?G:L;m(p.value,k)}}function tt(){return s.value===!0?S("div",{...o,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,P.value],role:"tooltip"},R(t.default)):null}function nt(){return S(Ye,E.value,tt)}return j(xe),Object.assign(a.proxy,{updatePosition:G}),d}}),An=z({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=g(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>S("div",{class:n.value},R(t.default))}});const Wn=St("wiseButton",{state:()=>({activeButton:"home"}),actions:{setActiveButton(e){this.activeButton=e}}});const un={ratio:[String,Number]};function sn(e,t){return g(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const cn=1.7778;var zn=z({name:"QImg",props:{...un,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:cn},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const o=T(e.initialRatio),l=sn(e,o),i=A(),{registerTimeout:a,removeTimeout:u}=we(),{registerTimeout:c,removeTimeout:s}=we(),v=g(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),y=g(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),h=[T(null),T(v.value)],r=T(0),f=T(!1),w=T(!1),E=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),P=g(()=>({width:e.width,height:e.height})),p=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),m=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function x(){if(s(),e.loadingShowDelay===0){f.value=!0;return}c(()=>{f.value=!0},e.loadingShowDelay)}function b(){s(),f.value=!1}function H({target:d}){ee(i)===!1&&(u(),o.value=d.naturalHeight===0?.5:d.naturalWidth/d.naturalHeight,q(d,1))}function q(d,C){C===1e3||ee(i)===!0||(d.complete===!0?_(d):a(()=>{q(d,C+1)},50))}function _(d){ee(i)!==!0&&(r.value=r.value^1,h[r.value].value=null,b(),d.getAttribute("__qerror")!=="true"&&(w.value=!1),n("load",d.currentSrc||d.src))}function L(d){u(),b(),w.value=!0,h[r.value].value=y.value,h[r.value^1].value=v.value,n("error",d)}function I(d){const C=h[d].value,M={key:"img_"+d,class:p.value,style:m.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...C};return r.value===d?Object.assign(M,{class:M.class+"current",onLoad:H,onError:L}):M.class+="loaded",S("div",{class:"q-img__container absolute-full",key:"img"+d},S("img",M))}function Q(){return f.value===!1?S("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},R(t[w.value===!0?"error":"default"])):S("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[S(dt,{color:e.spinnerColor,size:e.spinnerSize})])}{let d=function(){V(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,C=>{u(),w.value=!1,C===null?(b(),h[r.value^1].value=v.value):x(),h[r.value].value=C},{immediate:!0})};wt.value===!0?qe(d):d()}return()=>{const d=[];return l.value!==null&&d.push(S("div",{key:"filler",style:l.value})),h[0].value!==null&&d.push(I(0)),h[1].value!==null&&d.push(I(1)),d.push(S(Ye,{name:"q-transition--fade"},Q)),S("div",{key:"main",class:E.value,style:P.value,role:"img","aria-label":e.alt},d)}}});export{qn as $,Bn as A,Hn as B,Ft as C,En as D,Pn as E,pe as F,Oe as G,ln as H,tn as I,en as J,jt as K,Ot as L,Jt as M,je as N,nn as O,Fe as P,mn as Q,Ut as R,Ge as S,yn as T,Sn as U,$n as V,Mn as W,We as X,ze as Y,re as Z,Ln as _,Ce as a,Tn as a0,Dt as a1,Tt as b,Te as c,we as d,Et as e,pn as f,wn as g,bn as h,_t as i,Lt as j,Pt as k,Bt as l,Cn as m,hn as n,xn as o,kn as p,_n as q,Wn as r,xt as s,Vn as t,Ct as u,An as v,zn as w,gn as x,un as y,sn as z};