(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(95);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(91),o=a(92),c=a(22),i=a(95),s=a(2),u=a(6),p=a(89),m=a(90),d=a(116),h=a(109),y=a(113),b=a(114),f=a(115),g=a(112),v=a(88),k=a(104),j=a(63),E=a.n(j);var O=function e(t,a){return"link"===t.type?Object(d.a)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function N(e){var t,a,l,o=e.item,c=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=o.items,y=o.label,b=O(o,m),f=(a=b,l=Object(n.useRef)(a),Object(n.useEffect)((function(){l.current=a}),[a]),l.current),g=Object(n.useState)((function(){return!!i&&(!b&&o.collapsed)})),v=g[0],k=g[1];Object(n.useEffect)((function(){b&&!f&&v&&k(!1)}),[b,f,v]);var j=Object(n.useCallback)((function(e){e.preventDefault(),k((function(e){return!e}))}),[k]);return 0===h.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:y},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&b},t[E.a.menuLinkText]=!i,t)),onClick:i?j:void 0,href:i?"#!":void 0},d),y),r.a.createElement("ul",{className:"menu__list"},h.map((function(e){return r.a.createElement(x,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:m})}))))}function C(e){var t=e.item,a=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),o=t.href,c=t.label,i=O(t,n);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(v.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:o},Object(k.a)(o)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},l),c))}function x(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(C,e)}}var _=function(e){var t,a,l=e.path,c=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,d=Object(n.useState)(!1),k=d[0],j=d[1],O=Object(m.a)().navbar,N=O.title,C=O.hideOnScroll,_=Object(o.a)().isClient,w=Object(f.a)(),P=w.logoLink,T=w.logoLinkProps,I=w.logoImageUrl,S=w.logoAlt,L=Object(h.a)().isAnnouncementBarClosed,B=Object(g.a)().scrollY;Object(y.a)(k);var M=Object(b.a)();return Object(n.useEffect)((function(){M===b.b.desktop&&j(!1)}),[M]),r.a.createElement("div",{className:Object(p.a)(E.a.sidebar,(t={},t[E.a.sidebarWithHideableNavbar]=C,t))},C&&r.a.createElement(v.a,Object(s.a)({tabIndex:-1,className:E.a.sidebarLogo,to:P},T),null!=I&&r.a.createElement("img",{key:_,src:I,alt:S}),null!=N&&r.a.createElement("strong",null,N)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",E.a.menu,(a={"menu--show":k},a[E.a.menuWithAnnouncementBar]=!L&&0===B,a))},r.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!k)}},k?r.a.createElement("span",{className:Object(p.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:E.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(x,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:l})})))))},w=a(99),P=a(108),T=a(102),I=a(64),S=a.n(I),L=a(117);function B(e){var t,a,n=e.currentDocRoute,c=e.versionMetadata,s=e.children,u=Object(o.a)(),p=u.siteConfig,m=u.isClient,d=c.pluginId,h=c.permalinkToSidebar,y=c.docsSidebars,b=c.version,f=h[n.path],g=y[f];return r.a.createElement(i.a,{key:m,searchMetadatas:{version:b,tag:Object(L.b)(d,b)}},r.a.createElement("div",{className:S.a.docPage},g&&r.a.createElement("div",{className:S.a.docSidebarContainer,role:"complementary"},r.a.createElement(_,{key:f,sidebar:g,path:n.path,sidebarCollapsible:null===(t=null===(a=p.themeConfig)||void 0===a?void 0:a.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:S.a.docMainContainer},r.a.createElement(l.a,{components:w.a},s))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,l=t.find((function(e){return Object(T.matchPath)(n.pathname,e)}));return l?r.a.createElement(B,{currentDocRoute:l,versionMetadata:a},Object(c.a)(t)):r.a.createElement(P.default,e)}},97:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},98:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var c=a;c!=r;c+=o)l.push(c);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},99:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(88),c=a(89),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:a(20).a,theme:i};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=p({},a,{backgroundColor:null}),r};function b(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=p({},b(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=n[o]++)<r[o];){var s=void 0,u=t[o],p=a[o][l];if("string"==typeof p?(u=o>0?u:["plain"],s=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),s=p.content),"string"==typeof s){var y=s.split(m),b=y.length;c.push({types:u,content:y[0]});for(var f=1;f<b;f++)d(c),i.push(c=[]),c.push({types:u,content:y[f]})}else o++,t.push(u),a.push(s),n.push(0),r.push(s.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return d(c),i}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=a(97),v=a.n(g),k=a(98),j=a.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(100),N=a(90),C=function(){var e=Object(N.a)().prism,t=Object(O.a)().isDarkTheme,a=e.theme||E,n=e.darkTheme||a;return t?n:a},x=a(48),_=a.n(x),w=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},T=/title=".*"/,I=function(e){var t=e.children,a=e.className,o=e.metastring,i=Object(N.a)().prism,u=Object(r.useState)(!1),p=u[0],m=u[1],d=Object(r.useState)(!1),h=d[0],y=d[1];Object(r.useEffect)((function(){y(!0)}),[]);var b=Object(r.useRef)(null),g=[],k="",E=C();if(o&&w.test(o)){var O=o.match(w)[1];g=j.a.parse(O).filter((function(e){return e>0}))}o&&T.test(o)&&(k=o.match(T)[0].split("title=")[1].replace(/"+/g,""));var x=a&&a.replace(/language-/,"");!x&&i.defaultLanguage&&(x=i.defaultLanguage);var I=t.replace(/\n$/,"");if(0===g.length&&void 0!==x){for(var S,L="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(x),M=t.replace(/\n$/,"").split("\n"),D=0;D<M.length;){var A=D+1,R=M[D].match(B);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=A+",";break;case"highlight-start":S=A;break;case"highlight-end":L+=S+"-"+(A-1)+","}M.splice(D,1)}else D+=1}g=j.a.parse(L),I=M.join("\n")}var W=function(){v()(I),m(!0),setTimeout((function(){return m(!1)}),2e3)};return l.a.createElement(f,Object(n.a)({},s,{key:String(h),theme:E,code:I,language:x}),(function(e){var t,a,r=e.className,o=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,k&&l.a.createElement("div",{style:o,className:_.a.codeBlockTitle},k),l.a.createElement("div",{className:_.a.codeBlockContent},l.a.createElement("button",{tabIndex:0,ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(_.a.copyButton,(t={},t[_.a.copyButtonWithTitle]=k,t)),onClick:W},p?"Copied":"Copy"),l.a.createElement("div",{className:Object(c.a)(r,_.a.codeBlock,(a={},a[_.a.codeBlockWithTitle]=k,a))},l.a.createElement("div",{className:_.a.codeBlockLines,style:o},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=s({line:e,key:t});return g.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},u({token:e,key:t})))})))}))))))}))},S=a(6),L=(a(49),a(50)),B=a.n(L),M=function(e){return function(t){var a,n=t.id,r=Object(S.a)(t,["id"]),o=Object(N.a)().navbar.hideOnScroll;return n?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",(a={},a[B.a.enhancedAnchor]=!o,a)),id:n}),r.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):l.a.createElement(e,r)}},D=a(51),A=a.n(D),R={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?l.a.createElement(I,e):l.a.createElement("code",e):t},a:function(e){return l.a.createElement(o.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:A.a.mdxCodeBlock},e))},h1:M("h1"),h2:M("h2"),h3:M("h3"),h4:M("h4"),h5:M("h5"),h6:M("h6")};t.a=R}}]);