import{A as k}from"./AuthenticatedLayout-bc51913f.js";import{j as c,i as w,m as C,p as V,c as j,w as M,o as d,b as a,a as i,u as S,f as m,q as I,F as N,g as O,n as $,d as B,t as h}from"./app-b635294e.js";import{h as F,_ as U}from"./http-helper-b42cef8c.js";import{_ as f}from"./Checkbox-6601a53f.js";import{_ as A}from"./DownloadFilesButton-48a72c59.js";import"./ApplicationLogo-f3bb887d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SecondaryButton-2e29735c.js";import"./TextInput-3e7bf9a0.js";import"./PrimaryButton-6b022853.js";const E={class:"flex items-center justify-end p-1 mb-3"},L={class:"flex-1 overflow-auto"},T={class:"min-w-full"},q={class:"bg-gray-100 border-b"},z={class:"text-sm font-medium text-gray-900 px-6 py-4 text-left w-[30px] max-w-[30px] pr-0"},D=a("th",{class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Name ",-1),G=a("th",{class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Path ",-1),P=["onClick"],W={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-[30px] max-w-[30px] pr-0"},H={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center"},J={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},K={key:0,class:"py-8 text-center text-sm text-gray-400"},le={__name:"SharedWithMe",props:{files:Object,folder:Object,ancestors:Object},setup(v){const r=v,l=c(!1),o=c({}),p=c(null),s=c({data:r.files.data,next:r.files.links.next}),_=w(()=>Object.entries(o.value).filter(e=>e[1]).map(e=>e[0]));function g(){console.log("load more"),console.log(s.value.next),s.value.next!==null&&F(s.value.next).then(e=>{s.value.data=[...s.value.data,...e.data],s.value.next=e.links.next})}function b(){s.value.data.forEach(e=>{o.value[e.id]=l.value})}function y(e){o.value[e.id]=!o.value[e.id],x(e)}function x(e){if(!o.value[e.id])l.value=!1;else{let n=!0;for(let t of s.value.data)if(!o.value[t.id]){n=!1;break}l.value=n}}return C(()=>{s.value={data:r.files.data,next:r.files.links.next}}),V(()=>{new IntersectionObserver(n=>n.forEach(t=>t.isIntersecting&&g()),{rootMargin:"-250px 0px 0px 0px"}).observe(p.value)}),(e,n)=>(d(),j(k,null,{default:M(()=>[a("nav",E,[a("div",null,[i(A,{all:l.value,ids:S(_),class:"mr-2","shared-with-me":!0},null,8,["all","ids"])])]),a("div",L,[a("table",T,[a("thead",q,[a("tr",null,[a("th",z,[i(f,{onChange:b,checked:l.value,"onUpdate:checked":n[0]||(n[0]=t=>l.value=t)},null,8,["checked"])]),D,G])]),a("tbody",null,[(d(!0),m(N,null,I(s.value.data,t=>(d(),m("tr",{key:t.id,onClick:u=>y(t),class:$(["border-b transition duration-300 ease-in-out hover:bg-blue-100 cursor-pointer",o.value[t.id]||l.value?"bg-blue-50":"bg-white"])},[a("td",W,[i(f,{onChange:u=>x(t),modelValue:o.value[t.id],"onUpdate:modelValue":u=>o.value[t.id]=u,checked:o.value[t.id]||l.value},null,8,["onChange","modelValue","onUpdate:modelValue","checked"])]),a("td",H,[i(U,{file:t},null,8,["file"]),B(" "+h(t.name),1)]),a("td",J,h(t.path),1)],10,P))),128))])]),s.value.data.length?O("",!0):(d(),m("div",K," There is no data in this folder ")),a("div",{ref_key:"loadMoreIntersect",ref:p},null,512)])]),_:1}))}};export{le as default};
