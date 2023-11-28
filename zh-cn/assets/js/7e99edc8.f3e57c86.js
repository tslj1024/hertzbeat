"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[25887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(r),d=n,h=s["".concat(o,".").concat(d)]||s[d]||c[d]||p;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<p;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},19437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const p={title:"GreptimeDB & HertzBeat, \u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u7684\u5ea6\u91cf\u6570\u636e",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93","HertzBeat","GreptimeDB"]},l=void 0,i={permalink:"/zh-cn/blog/2023/05/11/greptimedb-store",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2023-05-11-greptimedb-store.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-05-11-greptimedb-store.md",title:"GreptimeDB & HertzBeat, \u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u7684\u5ea6\u91cf\u6570\u636e",description:"\u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u7684\u5ea6\u91cf\u6570\u636e",date:"2023-05-11T00:00:00.000Z",formattedDate:"2023\u5e745\u670811\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:6.195,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"GreptimeDB & HertzBeat, \u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u7684\u5ea6\u91cf\u6570\u636e",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93","HertzBeat","GreptimeDB"]},prevItem:{title:"\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat v1.3.2 \u53d1\u5e03, \u66f4\u7a33\u5b9a\u66f4\u6613\u7528",permalink:"/zh-cn/blog/2023/07/05/hertzbeat-v1.3.2"},nextItem:{title:"50\u592936\u4f4d\u8d21\u732e\u8005\uff0c\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat v1.3.1 \u53d1\u5e03",permalink:"/zh-cn/blog/2023/05/09/hertzbeat-v1.3.1"}},o={authorsImageUrls:[void 0]},m=[{value:"\u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u7684\u5ea6\u91cf\u6570\u636e",id:"\u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93-greptimedb-\u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7-hertzbeat-\u7684\u5ea6\u91cf\u6570\u636e",level:2},{value:"\u4ec0\u4e48\u662f GreptimeDB",id:"\u4ec0\u4e48\u662f-greptimedb",level:3},{value:"\u4ec0\u4e48\u662f HertzBeat",id:"\u4ec0\u4e48\u662f-hertzbeat",level:3},{value:"GreptimeDB &amp; HertzBeat",id:"greptimedb--hertzbeat",level:3},{value:"\u5b89\u88c5\u90e8\u7f72 GreptimeDB",id:"\u5b89\u88c5\u90e8\u7f72-greptimedb",level:4},{value:"\u5b89\u88c5\u90e8\u7f72 HertzBeat",id:"\u5b89\u88c5\u90e8\u7f72-hertzbeat",level:4},{value:"\u914d\u7f6e\u4f7f\u7528 GreptimeDB \u5b58\u50a8 HertzBeat \u76d1\u63a7\u6307\u6807\u5ea6\u91cf\u6570\u636e",id:"\u914d\u7f6e\u4f7f\u7528-greptimedb-\u5b58\u50a8-hertzbeat-\u76d1\u63a7\u6307\u6807\u5ea6\u91cf\u6570\u636e",level:4},{value:"\u89c2\u5bdf\u9a8c\u8bc1\u6548\u679c",id:"\u89c2\u5bdf\u9a8c\u8bc1\u6548\u679c",level:4},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],u={toc:m};function c(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93-greptimedb-\u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7-hertzbeat-\u7684\u5ea6\u91cf\u6570\u636e"},"\u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u7684\u5ea6\u91cf\u6570\u636e"),(0,n.kt)("h3",{id:"\u4ec0\u4e48\u662f-greptimedb"},"\u4ec0\u4e48\u662f GreptimeDB"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/GreptimeTeam/greptimedb"},"GreptimeDB")," \u662f\u4e00\u6b3e\u5f00\u6e90\u3001\u5206\u5e03\u5f0f\u3001\u4e91\u539f\u751f\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u878d\u5408\u65f6\u5e8f\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u3002 ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u7684\u751f\u6001\u7cfb\u7edf\uff0c\u652f\u6301\u5927\u91cf\u5f00\u653e\u534f\u8bae\uff0c\u4e0e MySQL/PostreSQL/PromQL/OpenTSDB \u7b49\u517c\u5bb9\uff0c\u5b66\u4e60\u6210\u672c\u4f4e\uff0c\u5f00\u7bb1\u5373\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u65f6\u5e8f\u3001\u5206\u6790\u6df7\u5408\u8d1f\u8f7d\uff0c\u652f\u6301\u9ad8\u5e76\u53d1\u7684\u8bfb/\u5199\uff1b\u539f\u751f\u652f\u6301 PromQL\uff0c \u652f\u6301 SQL/Python \u8fdb\u884c\u5f3a\u5927\u7684\u5e93\u5185\u5206\u6790\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u5b58\u50a8\u4e0e\u8ba1\u7b97\uff0c\u901a\u8fc7\u5bf9\u8c61\u5b58\u50a8\u548c\u9ad8\u6570\u636e\u538b\u7f29\u7387\u5b9e\u73b0\u8d85\u4f4e\u7684\u5b58\u50a8\u6210\u672c\u3002\u5185\u7f6e\u6570\u636e\u5206\u6790\u89e3\u51b3\u65b9\u6848\uff0c\u907f\u514d\u5c06\u6570\u636e\u590d\u5236\u5230\u5916\u90e8\u6570\u636e\u4ed3\u5e93\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u3001\u9ad8\u53ef\u9760\u4e0e\u9ad8\u53ef\u7528\uff0c\u901a\u8fc7\u89e3\u8026\u7684\u4e91\u539f\u751f\u67b6\u6784\uff0c\u8f7b\u677e\u72ec\u7acb\u5730\u6269\u5c55\u6bcf\u4e2a\u6a21\u5757\u3002\u901a\u8fc7\u53ef\u914d\u7f6e\u7684\u526f\u672c\u548c\u81ea\u52a8\u7684\u6545\u969c\u8f6c\u79fb\u673a\u5236\uff0c\u786e\u4fdd\u6570\u636e\u7684\u53ef\u9760\u6027\u548c\u53ef\u7528\u6027\u3002")),(0,n.kt)("p",null,"Cloud: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://greptime.com/playground"},"GreptimePlay"))),(0,n.kt)("h3",{id:"\u4ec0\u4e48\u662f-hertzbeat"},"\u4ec0\u4e48\u662f HertzBeat"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat")," \u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u65e0\u9700 Agent \u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u5de5\u5177\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96c6 ",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7+\u544a\u8b66+\u901a\u77e5")," All in one\uff0c\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u5e94\u7528\u7a0b\u5e8f\uff0c\u6570\u636e\u5e93\uff0c\u7f13\u5b58\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5927\u6570\u636e\uff0c\u4e2d\u95f4\u4ef6\uff0cWeb\u670d\u52a1\u5668\uff0c\u4e91\u539f\u751f\uff0c\u7f51\u7edc\uff0c\u81ea\u5b9a\u4e49\u7b49\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\u901a\u77e5\u4e00\u6b65\u5230\u4f4d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u81ea\u7531\u5316\u7684\u9608\u503c\u89c4\u5219(\u8ba1\u7b97\u8868\u8fbe\u5f0f)\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,n.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,n.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,n.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,n.kt)("inlineCode",{parentName:"li"},"Webhook")," \u7b49\u65b9\u5f0f\u53ca\u65f6\u9001\u8fbe\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06",(0,n.kt)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus"),"\u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u5728\u6d4f\u89c8\u5668\u914d\u7f6e",(0,n.kt)("inlineCode",{parentName:"li"},"YML"),"\u76d1\u63a7\u6a21\u7248\u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u60f3\u8981\u7684\u6307\u6807\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"HertzBeat"),"\u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002    ")),(0,n.kt)("p",null,"Cloud: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn/"},"TanCloud"))),(0,n.kt)("h3",{id:"greptimedb--hertzbeat"},"GreptimeDB & HertzBeat"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u5185\u5bb9\u6211\u4eec\u4f1a\u901a\u8fc7\u4e00\u6b65\u4e00\u6b65\u7684\u5f62\u5f0f\u6f14\u793a HertzBeat \u5982\u4f55\u7ed3\u5408 GreptimeDB \u4f5c\u4e3a\u5b58\u50a8\u7aef\u6765\u5b58\u50a8\u6536\u96c6\u5230\u7684\u6307\u6807\u6570\u636e\u3002")),(0,n.kt)("h4",{id:"\u5b89\u88c5\u90e8\u7f72-greptimedb"},"\u5b89\u88c5\u90e8\u7f72 GreptimeDB"),(0,n.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.greptime.com/getting-started/overview#docker"},"\u5b98\u65b9\u6587\u6863")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Docker \u5b89\u88c5 GreptimeDB")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker run -p 4000-4004:4000-4004 \\\n    -p 4242:4242 -v "$(pwd)/greptimedb:/tmp/greptimedb" \\\n    --name greptime \\\n    greptime/greptimedb:0.2.0 standalone start \\\n    --http-addr 0.0.0.0:4000 \\\n    --rpc-addr 0.0.0.0:4001\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'-v "$(pwd)/greptimedb:/tmp/greptimedb"')," \u4e3a greptimeDB \u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u5efa\u8bae\u5c06",(0,n.kt)("inlineCode",{parentName:"li"},"$(pwd)/greptimedb"),"\u66ff\u6362\u4e3a\u60a8\u60f3\u6307\u5b9a\u5b58\u653e\u7684\u5b9e\u9645\u672c\u5730\u76ee\u5f55")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"$ docker ps | grep greptime"),"\u67e5\u770b GreptimeDB \u662f\u5426\u542f\u52a8\u6210\u529f")),(0,n.kt)("h4",{id:"\u5b89\u88c5\u90e8\u7f72-hertzbeat"},"\u5b89\u88c5\u90e8\u7f72 HertzBeat"),(0,n.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/zh-cn/docs/start/docker-deploy"},"\u5b98\u65b9\u6587\u6863")," "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Docker \u5b89\u88c5 HertzBeat ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 1157:1157 \\\n    -e LANG=zh_CN.UTF-8 \\\n    -e TZ=Asia/Shanghai \\\n    -v /opt/data:/opt/hertzbeat/data \\\n    -v /opt/application.yml:/opt/hertzbeat/config/application.yml \\\n    --restart=always \\\n    --name hertzbeat tancloud/hertzbeat\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"-v /opt/data:/opt/hertzbeat/data")," : (\u53ef\u9009\uff0c\u6570\u636e\u6301\u4e45\u5316)\u91cd\u8981\u26a0\ufe0f \u6302\u8f7dH2\u6570\u636e\u5e93\u6587\u4ef6\u5230\u672c\u5730\u4e3b\u673a\uff0c\u4fdd\u8bc1\u6570\u636e\u4e0d\u4f1a\u56e0\u4e3a\u5bb9\u5668\u7684\u521b\u5efa\u5220\u9664\u800c\u4e22\u5931")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"-v /opt/application.yml:/opt/hertzbeat/config/application.yml"),"  : \u6302\u8f7d\u81ea\u5b9a\u4e49\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\uff0c\u5373\u4f7f\u7528\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u8986\u76d6\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6\u3002"))),(0,n.kt)("p",null,"\u6ce8\u610f\u26a0\ufe0f \u672c\u5730\u6302\u8f7d\u914d\u7f6e\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"application.yml")," \u9700\u63d0\u524d\u5b58\u5728\uff0c\u6587\u4ef6\u5b8c\u6574\u5185\u5bb9\u89c1\u9879\u76ee\u4ed3\u5e93",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/raw/master/script/application.yml"},"/script/application.yml")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat\uff0c\u67e5\u770b HertzBeat \u662f\u5426\u542f\u52a8\u6210\u529f\u3002")),(0,n.kt)("h4",{id:"\u914d\u7f6e\u4f7f\u7528-greptimedb-\u5b58\u50a8-hertzbeat-\u76d1\u63a7\u6307\u6807\u5ea6\u91cf\u6570\u636e"},"\u914d\u7f6e\u4f7f\u7528 GreptimeDB \u5b58\u50a8 HertzBeat \u76d1\u63a7\u6307\u6807\u5ea6\u91cf\u6570\u636e"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4fee\u6539 HertzBeat \u7aef\u914d\u7f6e\u6587\u4ef6 ")),(0,n.kt)("p",null,"\u4fee\u6539\u6302\u8f7d\u5230\u672c\u5730\u7684 HertzBeat \u914d\u7f6e\u6587\u4ef6 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/raw/master/script/application.yml"},"application.yml"),", \u5b89\u88c5\u5305\u6a21\u5f0f\u4e0b\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),"   "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4fee\u6539\u91cc\u9762\u7684",(0,n.kt)("inlineCode",{parentName:"strong"},"warehouse.store.jpa.enabled"),"\u53c2\u6570\u4e3a",(0,n.kt)("inlineCode",{parentName:"strong"},"false"),"\uff0c \u914d\u7f6e\u91cc\u9762\u7684",(0,n.kt)("inlineCode",{parentName:"strong"},"warehouse.store.greptime"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cURL\u8d26\u6237\u5bc6\u7801\uff0c\u5e76\u542f\u7528",(0,n.kt)("inlineCode",{parentName:"strong"},"enabled"),"\u4e3a",(0,n.kt)("inlineCode",{parentName:"strong"},"true"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n   store:\n      # \u5173\u95ed\u9ed8\u8ba4JPA\n      jpa:\n         enabled: false\n      greptime:\n         enabled: true\n         endpoint: localhost:4001\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u91cd\u542f HertzBeat ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker restart hertzbeat\n")),(0,n.kt)("h4",{id:"\u89c2\u5bdf\u9a8c\u8bc1\u6548\u679c"},"\u89c2\u5bdf\u9a8c\u8bc1\u6548\u679c"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8bbf\u95ee HertzBeat http://ip:1157/ \u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 HertzBeat \u6dfb\u52a0\u5e94\u7528\u76d1\u63a7\uff0c\u6bd4\u5982\u7f51\u7ad9\u76d1\u63a7\uff0cLinux\u76d1\u63a7\uff0cMysql\u76d1\u63a7"),(0,n.kt)("li",{parentName:"ol"},"\u76d1\u63a7\u91c7\u96c6\u51e0\u4e2a\u5468\u671f\u4e4b\u540e\uff0c\u67e5\u770b GreptimeDB \u6570\u636e\u5e93\u662f\u5426\u5b58\u50a8\u6307\u6807\u5ea6\u91cf\u6570\u636e\uff0cHertzBeat \u6307\u6807\u6570\u636e\u56fe\u8868\u6570\u636e\u662f\u5426\u5c55\u793a\u6b63\u5e38\u3002")),(0,n.kt)("p",null,"\u76f4\u63a5\u4e0a\u56fe\u54c7:  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1",src:r(29209).Z,width:"4064",height:"2166"}),"  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1",src:r(57122).Z,width:"4064",height:"2166"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1",src:r(56097).Z,width:"2764",height:"1664"})),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u5e26\u6211\u4eec\u4f53\u9a8c\u4e86\u5982\u4f55\u4f7f\u7528\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u5b58\u50a8\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u7684\u6307\u6807\u5ea6\u91cf\u6570\u636e\uff0c\u603b\u7684\u6765\u770b\u4e24\u6b3e\u5f00\u6e90\u4ea7\u54c1\u4e0a\u624b\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u5173\u952e\u662f\u5982\u679c\u5acc\u9ebb\u70e6\u4e0d\u60f3\u90e8\u7f72\u4ed6\u4fe9\u90fd\u8fd8\u6709\u4e91\u670d\u52a1\ud83d\ude02\u8ba9\u4f60\u6298\u817e\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f5c\u4e3a\u7279\u6027 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/pull/834"},"HertzBeat\u652f\u6301GreptimeDB")," \u7684\u5f00\u53d1\u8005\u4e4b\u4e00\uff0c\u5728\u5b9e\u9645\u9002\u914d\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0cGreptimeDB\u7684\u4e1d\u6ed1\u539f\u751fSDK\u548c\u7c7b\u4f3c\u5173\u7cfb\u6570\u636e\u5e93\u7684SQL\uff0c\u8ba9\u6211\u4eec\u4ece\u5176\u5b83\u65f6\u5e8f\u6570\u636e\u5e93 ",(0,n.kt)("inlineCode",{parentName:"p"},"TDengine, IotDB, InfluxDB")," \u5207\u6362\u8fc7\u53bb\u8fd8\u662f\u975e\u5e38\u5bb9\u6613\uff0c\u4f53\u9a8c\u4e1d\u6ed1\u7684\u3002"),(0,n.kt)("p",null,"GreptimeDB Github: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GreptimeTeam/greptimedb"},"https://github.com/GreptimeTeam/greptimedb"),(0,n.kt)("br",{parentName:"p"}),"\n","HertzBeat Github: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6700\u540e\u5c31\u662f\u6b22\u8fce\u5927\u5bb6\u4e00\u5b9a\u8981\u591a\u591a\u4e86\u89e3\uff0c\u591a\u591a\u4f7f\u7528\uff0c\u591a\u591a\u63d0\u610f\u89c1\uff0c\u591a\u591aISSUE\uff0c\u591a\u591aPR\uff0c\u591a\u591aStar\u652f\u6301\u8fd9\u4fe9\u6ca1\u51fa\u6765\u591a\u4e45\u5e0c\u671b\u5f97\u5230\u5475\u62a4\u7684\u5f00\u6e90\u725b\u725b\u4e0d\u6015\u56f0\u96be \u4e00\u9897\u5c0f\u661f\u661f\u54e6\uff01\u505a\u5f00\u6e90\uff0c\u6211\u4eec\u662f\u84b8(\u771f)\u7684\uff0c\u7231\u5fc3\ud83d\udc97")),(0,n.kt)("p",null,"\u611f\u8c22\u6b64\u7279\u6027 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/pull/834"},"HertzBeat\u652f\u6301GreptimeDB")," \u7684\u8d21\u732e\u8005\u4eec @zqr10159, @fengjiachun, @killme2008, @tomsun28"))}c.isMDXComponent=!0},29209:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/greptime-1-d2ba51f5163374602e1a0643db6edbcc.png"},57122:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/greptime-2-264d43273a7cfe3bda1112db315c6f1c.png"},56097:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/greptime-3-7640c67312e8c1db060284867b78d65e.png"}}]);