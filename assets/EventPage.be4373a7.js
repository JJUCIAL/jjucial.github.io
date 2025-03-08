import{_ as m,A as p,x as l}from"./CalendarApp.vue_vue_type_style_index_0_lang.8c866f10.js";import{u as v,d as _,e as f}from"./EventsPage.vue_vue_type_style_index_0_scoped_true_lang.72f6e0f9.js";import"./QBtn.26173b54.js";import{I as h,E as g}from"./InfoDialogue.622b3443.js";import{f as b,r,w,K as x,L as y,M as t,O as e,P as n}from"./index.f3efc39e.js";import"./pinia.0fe1c282.js";import"./useCalendarData.4b44e061.js";import"./debounce.9830d1c5.js";const B={class:"page-wrapper"},E={class:"center-container"},P={class:"top-scroll"},k={class:"mid-scroll"},S={class:"table-container"},V={class:"bottom-scroll"},W=`
  Welcome to the Events Hub!<br><br>
  Here you will find our events calendar along with different event systems. You can add and remove each event block by clicking the buttons:
  <ul>
    <li>Skill of the week
      <ul>
        <li>Review current or past competitions by selecting from the competition dropdown
        </li>
        <li>Search specific participants by username
        </li>
      </ul>
    </li>
    <li>
      Boss of the Week
      <ul><li>With the same features as SOTW</li></ul>
    </li>
    <li>Pet of the Month</li>
    <li>Bingo (metrics to be modified each bingo)
      <ul><li>Select a team to activate the table data</li>
        <li>The bingo table has progression tiers that begin with
          <ul><li>Green - Tier 1</li>
            <li>Yellow - Tier 2</li>
            <li>Red - Tier 3</li>
            </ul>
            and the current value of each metric reactively moves towards the nearest tier </li>
            </ul>
    </li>
    <li>
      Hall of fame
    </li>

  </ul>
  - l7 o p e
`,I=Object.assign({name:"IndexPage"},{__name:"EventPage",setup(T){const c=p(),d=b(()=>c.activeButton);v().addressbarColor.set("#a2e3fa");const s=r(!1);w(()=>d.value,o=>{o==="tiddi"?s.value=!0:s.value=!1});const a=r(!0);return(o,i)=>(x(),y("div",B,[t("div",E,[e(_,{style:{width:"100%","max-width":"650px",margin:"auto"}},{default:n(()=>[e(f,{class:"top-scroll-container"},{default:n(()=>[t("div",P,[e(l,{src:"/tiddi3.png"})]),t("div",k,[t("div",S,[e(g)])]),t("div",V,[e(l,{src:"/bottom.gif"})])]),_:1})]),_:1}),e(h,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=u=>a.value=u),title:"Events",message:W},null,8,["modelValue"])])]))}});var Y=m(I,[["__scopeId","data-v-5d86d06f"]]);export{Y as default};
