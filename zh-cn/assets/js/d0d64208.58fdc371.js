"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[38325],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>g});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),u=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},k=function(t){var a=u(t.components);return n.createElement(m.Provider,{value:a},t.children)},i={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=u(e),g=r,o=N["".concat(m,".").concat(g)]||N[g]||i[g]||l;return e?n.createElement(o,p(p({ref:a},k),{},{components:e})):n.createElement(o,p({ref:a},k))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=N;var d={};for(var m in a)hasOwnProperty.call(a,m)&&(d[m]=a[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,p[1]=d;for(var u=2;u<l;u++)p[u]=e[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},25706:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=e(87462),r=(e(67294),e(3905));const l={id:"nebulaGraph",title:"\u76d1\u63a7 NebulaGraph \u6570\u636e\u5e93",sidebar_label:"NebulaGraph \u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u5de5\u5177","\u5f00\u6e90 NebulaGraph \u76d1\u63a7\u5de5\u5177","\u76d1\u63a7 NebulaGraph \u6307\u6807"]},p=void 0,d={unversionedId:"help/nebulaGraph",id:"help/nebulaGraph",title:"\u76d1\u63a7 NebulaGraph \u6570\u636e\u5e93",description:"\u6536\u96c6\u548c\u76d1\u63a7 NebulaGraph \u7684\u5e38\u89c4\u6027\u80fd\u6307\u6807\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/nebulagraph.md",sourceDirName:"help",slug:"/help/nebulaGraph",permalink:"/zh-cn/docs/help/nebulaGraph",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/nebulagraph.md",tags:[],version:"current",frontMatter:{id:"nebulaGraph",title:"\u76d1\u63a7 NebulaGraph \u6570\u636e\u5e93",sidebar_label:"NebulaGraph \u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u5de5\u5177","\u5f00\u6e90 NebulaGraph \u76d1\u63a7\u5de5\u5177","\u76d1\u63a7 NebulaGraph \u6307\u6807"]},sidebar:"docs",previous:{title:"OpenGauss\u6570\u636e\u5e93",permalink:"/zh-cn/docs/help/opengauss"},next:{title:"REDIS\u6570\u636e\u5e93",permalink:"/zh-cn/docs/help/redis"}},m={},u=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u6536\u96c6\u6307\u6807",id:"\u6536\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\uff1anebulaGraph_stats",id:"\u6307\u6807\u96c6nebulagraph_stats",level:4},{value:"\u6307\u6807\u96c6\uff1arocksdb_stats",id:"\u6307\u6807\u96c6rocksdb_stats",level:4}],k={toc:u};function i(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6536\u96c6\u548c\u76d1\u63a7 NebulaGraph \u7684\u5e38\u89c4\u6027\u80fd\u6307\u6807\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u534f\u8bae\uff1anebulaGraph")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u76d1\u63a7\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0cnebulaGraph_stats \u548c rocksdb_stats\u3002\nnebulaGraph_stats \u662f NebulaGraph \u7684\u7edf\u8ba1\u4fe1\u606f\uff0crocksdb_stats \u662f RocksDB \u7684\u7edf\u8ba1\u4fe1\u606f\u3002\n")),(0,r.kt)("h3",{id:""}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001\u901a\u8fc7 stats \u548c rocksdb stats \u63a5\u53e3\u83b7\u53d6\u53ef\u7528\u53c2\u6570\u3002")),(0,r.kt)("p",null,"1.1\u3001\u5982\u679c\u53ea\u9700\u8981\u83b7\u53d6 nebulaGraph_stats\uff0c\u9700\u8981\u786e\u4fdd\u53ef\u4ee5\u8bbf\u95ee stats\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u7aef\u53e3\u662f 19669\uff0c\u8bbf\u95ee\u5730\u5740\u4e3a http://ip:19669/stats"),(0,r.kt)("p",null,"1.2\u3001\u5982\u679c\u9700\u8981\u83b7\u53d6 rocksdb stats \u7684\u9644\u52a0\u53c2\u6570\uff0c\u9700\u8981\u786e\u4fdd\u53ef\u4ee5\u8bbf\u95ee rocksdb stats\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("p",null,"\u9996\u6b21\u8fde\u63a5 NebulaGraph \u65f6\uff0c\u5fc5\u987b\u5148\u6ce8\u518c Storage \u670d\u52a1\uff0c\u4ee5\u4fbf\u6b63\u786e\u67e5\u8be2\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6709\u5e2e\u52a9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"strong",href:"https://docs.nebula-graph.com.cn/3.4.3/4.deployment-and-installation/connect-to-nebula-graph/"},"https://docs.nebula-graph.com.cn/3.4.3/4.deployment-and-installation/connect-to-nebula-graph/"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.nebula-graph.com.cn/3.4.3/2.quick-start/3.quick-start-on-premise/3.1add-storage-hosts/"},"https://docs.nebula-graph.com.cn/3.4.3/2.quick-start/3.quick-start-on-premise/3.1add-storage-hosts/"))),(0,r.kt)("p",null,"\u9ed8\u8ba4\u7aef\u53e3\u662f 19779\uff0c\u8bbf\u95ee\u5730\u5740\u4e3a\uff1ahttp://ip:19779/rocksdb_stats"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u4e3b\u673a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684 IPV4\u3001IPV6 \u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u6ca1\u6709\u534f\u8bae\u5934\uff08\u4f8b\u5982\uff1ahttps://\u3001http://\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc6\u522b\u6b64\u76d1\u63a7\u7684\u540d\u79f0\u3002\u540d\u79f0\u9700\u8981\u552f\u4e00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"graphPort"),(0,r.kt)("td",{parentName:"tr",align:null},"Nebula Graph \u63d0\u4f9b\u7684 Graph \u670d\u52a1\u7684\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timePeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u662f 5 \u79d2\u300160 \u79d2\u3001600 \u79d2\u6216 3600 \u79d2\uff0c\u5206\u522b\u8868\u793a\u6700\u8fd1 5 \u79d2\u3001\u6700\u8fd1 1 \u5206\u949f\u3001\u6700\u8fd1 10 \u5206\u949f\u548c\u6700\u8fd1 1 \u5c0f\u65f6\u7684\u65f6\u95f4\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storagePort"),(0,r.kt)("td",{parentName:"tr",align:null},"Nebula Graph \u63d0\u4f9b\u7684 Storage \u670d\u52a1\u7684\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6536\u96c6\u54cd\u5e94\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u96c6\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u6570\u636e\u6536\u96c6\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\uff0c\u6700\u5c0f\u53ef\u8bbe\u7f6e\u7684\u95f4\u9694\u4e3a 30 \u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u68c0\u6d4b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u68c0\u6d4b\u548c\u9a8c\u8bc1\u6dfb\u52a0\u76d1\u63a7\u4e4b\u524d\u7684\u53ef\u7528\u6027\u3002\u53ea\u6709\u68c0\u6d4b\u6210\u529f\u540e\uff0c\u6dfb\u52a0\u548c\u4fee\u6539\u64cd\u4f5c\u624d\u4f1a\u7ee7\u7eed\u8fdb\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bc6\u522b\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u8bb0\u5f55\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u6536\u96c6\u6307\u6807"},"\u6536\u96c6\u6307\u6807"),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6nebulagraph_stats"},"\u6307\u6807\u96c6\uff1anebulaGraph_stats"),(0,r.kt)("p",null,"\u6307\u6807\u592a\u591a\uff0c\u76f8\u5173\u94fe\u63a5\u5982\u4e0b\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.nebula-graph.com.cn/3.4.3/6.monitor-and-metrics/1.query-performance-metrics/"},"https://docs.nebula-graph.com.cn/3.4.3/6.monitor-and-metrics/1.query-performance-metrics/"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8fbe\u5230\u5185\u5b58\u6c34\u4f4d\u7ebf\u7684\u8bed\u53e5\u7684\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8fbe\u5230\u5185\u5b58\u6c34\u4f4d\u7ebf\u7684\u8bed\u53e5\u7684\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u4e3b\u52a8\u56de\u6536\u7684\u8fc7\u671f\u7684\u4f1a\u8bdd\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u4e3b\u52a8\u56de\u6536\u7684\u8fc7\u671f\u7684\u4f1a\u8bdd\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6162\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(avg)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6162\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p75)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6162\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p95)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6162\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p99)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6162\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p999)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(avg)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p75)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p95)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p99)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u5ef6\u8fdf\u65f6\u95f4(p999)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e0\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef\u5bfc\u9a8c\u8bc1\u5931\u8d25\u7684\u4f1a\u8bdd\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e0\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef\u5bfc\u9a8c\u8bc1\u5931\u8d25\u7684\u4f1a\u8bdd\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u6b21\u6570(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u6b21\u6570(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6392\u5e8f\uff08Sort\uff09\u7b97\u5b50\u6267\u884c\u65f6\u95f4(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6392\u5e8f\uff08Sort\uff09\u7b97\u5b50\u6267\u884c\u65f6\u95f4(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Storaged \u670d\u52a1\u7684 RPC \u8bf7\u6c42\u5931\u8d25\u7684\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Storaged \u670d\u52a1\u7684 RPC \u8bf7\u6c42\u5931\u8d25\u7684\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u9a8c\u8bc1\u5931\u8d25\u7684\u4f1a\u8bdd\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u9a8c\u8bc1\u5931\u8d25\u7684\u4f1a\u8bdd\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u62a5\u9519\u8bed\u53e5\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u62a5\u9519\u8bed\u53e5\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u7ec8\u6b62\u7684\u67e5\u8be2\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u7ec8\u6b62\u7684\u67e5\u8be2\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e0\u67e5\u8be2\u9519\u8bef\u800c\u5bfc\u81f4\u7684 Leader \u53d8\u66f4\u7684\u6b21\u6570(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e0\u67e5\u8be2\u9519\u8bef\u800c\u5bfc\u81f4\u7684 Leader \u53d8\u66f4\u7684\u6b21\u6570(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Metad \u670d\u52a1\u7684 RPC \u8bf7\u6c42\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Metad \u670d\u52a1\u7684 RPC \u8bf7\u6c42\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6162\u67e5\u8be2\u6b21\u6570(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6162\u67e5\u8be2\u6b21\u6570(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d3b\u8dc3\u7684\u4f1a\u8bdd\u6570\u7684\u53d8\u5316\u6570(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d3b\u8dc3\u7684\u67e5\u8be2\u8bed\u53e5\u6570\u7684\u53d8\u5316\u6570(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u63a5\u6536\u7684\u8bed\u53e5\u6570(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u63a5\u6536\u7684\u8bed\u53e5\u6570(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u805a\u5408\uff08Aggregate\uff09\u7b97\u5b50\u6267\u884c\u65f6\u95f4(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u805a\u5408\uff08Aggregate\uff09\u7b97\u5b50\u6267\u884c\u65f6\u95f4(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u5668\u9636\u6bb5\u5ef6\u8fdf\u65f6\u95f4(avg)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u5668\u9636\u6bb5\u5ef6\u8fdf\u65f6\u95f4(p75)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u5668\u9636\u6bb5\u5ef6\u8fdf\u65f6\u95f4(p95)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u5668\u9636\u6bb5\u5ef6\u8fdf\u65f6\u95f4(p99)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u5668\u9636\u6bb5\u5ef6\u8fdf\u65f6\u95f4(p999)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Metad \u7684 RPC \u8bf7\u6c42\u5931\u8d25\u7684\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Metad \u7684 RPC \u8bf7\u6c42\u5931\u8d25\u7684\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u626b\u63cf\uff08IndexScan\uff09\u7b97\u5b50\u6267\u884c\u65f6\u95f4(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u626b\u63cf\uff08IndexScan\uff09\u7b97\u5b50\u6267\u884c\u65f6\u95f4(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u5efa\u7acb\u8fc7\u7684\u4f1a\u8bdd\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u5efa\u7acb\u8fc7\u7684\u4f1a\u8bdd\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e0\u4e3a\u8d85\u8fc7FLAG_OUT_OF_MAX_ALLOWED_CONNECTIONS\u53c2\u6570\u5bfc\u81f4\u7684\u9a8c\u8bc1\u767b\u5f55\u7684\u5931\u8d25\u7684\u4f1a\u8bdd\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e0\u4e3a\u8d85\u8fc7FLAG_OUT_OF_MAX_ALLOWED_CONNECTIONS\u53c2\u6570\u5bfc\u81f4\u7684\u9a8c\u8bc1\u767b\u5f55\u7684\u5931\u8d25\u7684\u4f1a\u8bdd\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Storaged \u670d\u52a1\u7684 RPC \u8bf7\u6c42\u6570\u91cf(rate)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graphd \u670d\u52a1\u53d1\u7ed9 Storaged \u670d\u52a1\u7684 RPC \u8bf7\u6c42\u6570\u91cf(sum)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6rocksdb_stats"},"\u6307\u6807\u96c6\uff1arocksdb_stats"),(0,r.kt)("p",null,"\u6307\u6807\u592a\u591a\uff0c\u76f8\u5173\u94fe\u63a5\u5982\u4e0b\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.nebula-graph.com.cn/3.4.3/6.monitor-and-metrics/2.rocksdb-statistics/"},"https://docs.nebula-graph.com.cn/3.4.3/6.monitor-and-metrics/2.rocksdb-statistics/"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb.backup.read.bytes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5907\u4efd RocksDB \u6570\u636e\u5e93\u671f\u95f4\u8bfb\u53d6\u7684\u5b57\u8282\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb.backup.write.bytes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"...")))))}i.isMDXComponent=!0}}]);