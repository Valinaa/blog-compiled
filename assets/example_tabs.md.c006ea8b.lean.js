import{u as d,D as o,o as h,c as m,G as a,B as l,z as s,t as i,b as r,O as u,a as e}from"./chunks/framework.7d066bc9.js";const g=u("",2),y=s("p",null,"a content",-1),_=s("p",null,"b content",-1),D=s("h2",{id:"runtime-api-examples",tabindex:"-1"},[e("Runtime API Examples "),s("a",{class:"header-anchor",href:"#runtime-api-examples","aria-label":'Permalink to "Runtime API Examples"'},"​")],-1),C=s("p",null,"This page demonstrates usage of some of the runtime APIs provided by VitePress.",-1),A=s("p",null,[e("The main "),s("code",null,"useData()"),e(" API can be used to access site, theme, and page data for the current page. It works in both "),s("code",null,".md"),e(" and "),s("code",null,".vue"),e(" files:")],-1),b=s("div",{class:"language-md"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<script setup>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"import { useData } from 'vitepress'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"const { theme, page, frontmatter } = useData()")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<\/script>")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"## "),s("span",{style:{color:"#FFCB6B"}},"Results")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"### "),s("span",{style:{color:"#FFCB6B"}},"Theme Data")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<pre>{{ theme }}</pre>")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"### "),s("span",{style:{color:"#FFCB6B"}},"Page Data")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<pre>{{ page }}</pre>")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"### "),s("span",{style:{color:"#FFCB6B"}},"Page Frontmatter")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<pre>{{ frontmatter }}</pre>")])])])],-1),F=s("h3",{id:"results",tabindex:"-1"},[e("Results "),s("a",{class:"header-anchor",href:"#results","aria-label":'Permalink to "Results"'},"​")],-1),f=s("h4",{id:"page-data",tabindex:"-1"},[e("Page Data "),s("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1),x=s("h4",{id:"page-frontmatter",tabindex:"-1"},[e("Page Frontmatter "),s("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1),P=s("h3",{id:"more",tabindex:"-1"},[e("More "),s("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),k=s("p",null,[e("Check out the documentation for the "),s("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),e(".")],-1),T=s("h2",{id:"markdown-extension-examples",tabindex:"-1"},[e("Markdown Extension Examples "),s("a",{class:"header-anchor",href:"#markdown-extension-examples","aria-label":'Permalink to "Markdown Extension Examples"'},"​")],-1),v=s("p",null,"This page demonstrates some of the built-in markdown extensions provided by VitePress.",-1),B=s("h3",{id:"syntax-highlighting",tabindex:"-1"},[e("Syntax Highlighting "),s("a",{class:"header-anchor",href:"#syntax-highlighting","aria-label":'Permalink to "Syntax Highlighting"'},"​")],-1),w=s("p",null,[e("VitePress provides Syntax Highlighting powered by "),s("a",{href:"https://github.com/shikijs/shiki",target:"_blank",rel:"noreferrer"},"Shiki"),e(", with additional features like line-highlighting:")],-1),S=s("p",null,[s("strong",null,"Input")],-1),E=s("div",{class:"language-"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"```js{4}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export default {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  data () {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    return {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      msg: 'Highlighted!'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")])])])],-1),I=s("p",null,[s("strong",null,"Output")],-1),V=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight has-highlighted-lines"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"data"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line highlighted"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      msg"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"Highlighted!"),s("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1),z=JSON.parse('{"title":"tabs插件示例","description":"演示基础的tabs使用","frontmatter":{"title":"tabs插件示例","description":"演示基础的tabs使用","readingTime":true,"comment":true,"date":"2023-06-19T00:00:00.000Z","tag":["配置"],"tags":["教程"],"sticky":6,"top":4,"recommend":3},"headers":[],"relativePath":"example/tabs.md","filePath":"example/tabs.md","lastUpdated":null}'),N={name:"example/tabs.md"},G=Object.assign(N,{setup(R){const{site:j,theme:H,page:p,frontmatter:c}=d();return(M,O)=>{const n=o("PluginTabsTab"),t=o("PluginTabs");return h(),m("div",null,[g,a(t,null,{default:l(()=>[a(n,{label:"我是第一个标签"},{default:l(()=>[y]),_:1}),a(n,{label:"我是第二个标签"},{default:l(()=>[_]),_:1})]),_:1}),a(t,null,{default:l(()=>[a(n,{label:"api-examples"},{default:l(()=>[D,C,A,b,F,f,s("pre",null,i(r(p)),1),x,s("pre",null,i(r(c)),1),P,k]),_:1}),a(n,{label:"markdown-examples"},{default:l(()=>[T,v,B,w,S,E,I,V]),_:1})]),_:1})])}}});export{z as __pageData,G as default};
