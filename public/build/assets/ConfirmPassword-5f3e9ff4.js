import{v as n,c,w as t,o as m,a,u as o,X as l,b as e,d as p,e as _,n as u}from"./app-2a095cd5.js";import{_ as f}from"./GuestLayout-959f326a.js";import{_ as w,a as b,b as h}from"./TextInput-f5a952bc.js";import{_ as v}from"./PrimaryButton-832c8d42.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"card mx-auto",style:{"max-width":"400px"}},V={class:"card-body"},g=e("div",{class:"mb-3"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],C={class:"mb-3"},q={__name:"ConfirmPassword",setup($){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,r)=>(m(),c(f,null,{default:t(()=>[a(o(l),{title:"Confirm Password"}),e("div",x,[e("div",V,[g,e("form",{onSubmit:p(i,["prevent"])},[e("div",C,[a(w,{for:"password",value:"Password"}),a(b,{id:"password",type:"password",class:"",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=d=>o(s).password=d),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(h,{message:o(s).errors.password},null,8,["message"])]),a(v,{class:u(["w-100",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[_(" Confirm ")]),_:1},8,["class","disabled"])],40,y)])])]),_:1}))}};export{q as default};