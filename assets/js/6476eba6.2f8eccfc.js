"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[827],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"\u4ecb\u7ecd"},c="Fvx",p={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"\u4ecb\u7ecd",description:"Fvx \u662f\u4e00\u4e2a\u57fa\u4e8eReact.js\u8fdb\u884c\u5feb\u901f\u6784\u5efaReact\u9879\u76ee\u7684\u811a\u624b\u67b6\u5de5\u5177, \u63d0\u4f9b:",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/fvx/docs/usage",editUrl:"https://github.com/proj-previews/fvx/edit/main/docs/usage.md",tags:[],version:"current",frontMatter:{title:"\u4ecb\u7ecd"},sidebar:"Docs",next:{title:"\u5b89\u88c5",permalink:"/fvx/docs/usages/install"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fvx"},"Fvx"),(0,i.kt)("strong",null,"Fvx")," \u662f\u4e00\u4e2a\u57fa\u4e8eReact.js\u8fdb\u884c\u5feb\u901f\u6784\u5efaReact\u9879\u76ee\u7684\u811a\u624b\u67b6\u5de5\u5177, \u63d0\u4f9b:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"Fvx create")," \u5b9e\u73b0\u7684\u4ea4\u4e92\u5f0f\u7684\u9879\u76ee\u811a\u624b\u67b6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"Fvx create")," \u5b9e\u73b0\u7684\u96f6\u914d\u7f6e\u539f\u578b\u5f00\u53d1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e webpack \u6784\u5efa\uff0c\u5e76\u5e26\u6709\u5408\u7406\u7684\u9ed8\u8ba4\u914d\u7f6e\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u9879\u76ee\u5185\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u4e30\u5bcc\u7684\u5b98\u65b9\u63d2\u4ef6\u96c6\u5408\uff0c\u96c6\u6210\u4e86\u524d\u7aef\u751f\u6001\u4e2d\u6700\u597d\u7684\u5de5\u5177\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u53ef\u9009\u529f\u80fd\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"npm"),"\u5305\uff0c\u4f8b\u5982 Babel/TypeScript \u8f6c\u8bd1\u3001ESLint \u96c6\u6210\u3001\u5355\u5143\u6d4b\u8bd5\u548c end-to-end \u6d4b\u8bd5\u7b49, \u5f00\u7bb1\u5373\u7528\u3002")),(0,i.kt)("strong",null,"Fvx")," \u81f4\u529b\u4e8e\u5c06 React.js \u751f\u6001\u4e2d\u7684\u5de5\u5177\u57fa\u7840\u6807\u51c6\u5316\u3002\u5b83\u786e\u4fdd\u4e86\u5404\u79cd\u6784\u5efa\u5de5\u5177\u80fd\u591f\u57fa\u4e8e\u667a\u80fd\u7684\u9ed8\u8ba4\u914d\u7f6e\u5373\u53ef\u5e73\u7a33\u8854\u63a5\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u4e13\u6ce8\u5728\u64b0\u5199\u5e94\u7528\u4e0a\uff0c\u800c\u4e0d\u5fc5\u82b1\u597d\u51e0\u5929\u53bb\u7ea0\u7ed3\u914d\u7f6e\u7684\u95ee\u9898\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u5b83\u4e5f\u4e3a\u6bcf\u4e2a\u5de5\u5177\u63d0\u4f9b\u4e86\u8c03\u6574\u914d\u7f6e\u7684\u7075\u6d3b\u6027\uff0c\u65e0\u9700 eject\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",null,"\u63d2\u4ef6\u652f\u6301"),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fvx"),"\u4f7f\u7528\u4e86\u4e00\u5957\u57fa\u4e8e\u63d2\u4ef6\u7684\u67b6\u6784\u3002\u672a\u6765",(0,i.kt)("inlineCode",{parentName:"li"},"Fvx"),"\u5c06\u4f1a\u57fa\u4e8e\u63d2\u4ef6\u5b9e\u73b0\u66f4\u591a\u7684\u7279\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u63d2\u4ef6\u7684\u67b6\u6784\u4f7f\u5f97",(0,i.kt)("inlineCode",{parentName:"li"},"Fvx"),"\u7075\u6d3b\u4e14\u53ef\u6269\u5c55\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fvx"),"\u8bbe\u8ba1\u5c06\u57fa\u4e8e\u63d2\u4ef6\u6765\u5b9e\u73b0\u9879\u76ee\u521b\u4f5c\u8fc7\u7a0b\u4e2d\u7684\u4f9d\u8d56\u53d8\u5316\uff0c\u4ee5\u6ee1\u8db3\u9879\u76ee\u5bf9\u7279\u5b9a\u914d\u7f6e\u7684\u4f9d\u8d56\uff0c\u4f7f\u5176\u5177\u6709\u66f4\u597d\u7684\u53ef\u6269\u5c55\u6027\u548c\u573a\u666f\u9002\u5e94\u80fd\u529b\u3002")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u63d2\u4ef6\u7cfb\u7edf\u6b63\u5728\u5f00\u53d1\u4e2d, \u5c06\u5f88\u5feb\u53d1\u5e03\uff0c\u656c\u8bf7\u671f\u5f85\u66f4\u591a\u65b0\u7279\u6027\u3002"))),(0,i.kt)("br",null),(0,i.kt)("strong",null,"\u6613\u4e8e\u7ef4\u62a4"),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Fvx"),"\u4e3b\u8981\u57fa\u4e8e\u539f\u751f",(0,i.kt)("inlineCode",{parentName:"p"},"javascript"),"\u7279\u6027\u5f00\u53d1\uff0c\u6613\u4e8e\u7ef4\u62a4\u3002\u5982\u679c\u611f\u5174\u8da3\u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/researchlab/fvx"},"\u6e90\u4ee3\u7801")," , \u6216\u8005\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/fvx"},"npm\u5305"),"\u4f9d\u8d56\u3002"))}m.isMDXComponent=!0}}]);