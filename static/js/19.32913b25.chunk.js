(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[19],{473:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var s=r(47),a=r(48),i=r(49),c=r(5),n=r(0),o=r(55),l=r(10),d=r(50),h=r(8),u=r(1);function b(){var e=Object(n.useContext)(h.a),t=e.hsva,r=e.dispatch;return Object(u.jsx)("div",{style:{width:256},children:Object(u.jsx)(o.a,{colors:["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],color:Object(l.f)(t),onChange:function(e){r({hsva:Object(c.a)(Object(c.a)({},e),e)})}})})}var j=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).editorUrl="/packages/color-swatch/README.md",e.getMdStr=function(){return r.e(46).then(r.bind(null,442))},e.example=Object(u.jsx)(b,{}),e}return c}(d.a)},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(47),a=r(53),i=r(48),c=r(49),n=r(0),o=r(54),l=r(51),d=r.n(l),h=r(1),u=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).editorUrl=void 0,a.getMdStr=void 0,a.example=void 0,a.state={mdStr:""},a}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:d.a.warpper,children:[Object(h.jsxs)("div",{className:d.a.markdown,children:[this.example&&Object(h.jsx)("div",{className:d.a.example,children:this.example}),Object(h.jsx)(o.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(h.jsxs)("div",{className:d.a.footer,children:[Object(h.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color.svg",alt:"Github Issues"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(h.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(h.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(h.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(n.Component)},51:function(e,t,r){e.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},55:function(e,t,r){"use strict";var s=r(3),a=r.n(s),i=r(9),c=r.n(i),n=r(0),o=r.n(n),l=r(10),d=r(1),h=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],u=o.a.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-swatch":r,i=e.className,n=e.color,u=e.colors,b=void 0===u?[]:u,j=e.style,p=e.rectProps,g=void 0===p?{}:p,m=e.onChange,f=e.addonAfter,v=e.addonBefore,w=e.rectRender,x=c()(e,h),O=a()({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),k=function(e){m&&m(Object(l.b)(e))};return Object(d.jsxs)("div",a()({ref:t},x,{className:[s,i||""].filter(Boolean).join(" "),style:a()({display:"flex",flexWrap:"wrap",position:"relative"},j),children:[v&&o.a.isValidElement(v)&&v,b&&Array.isArray(b)&&b.map((function(e,t){var r="",s="";"string"===typeof e&&(r=e,s=e),"object"===typeof e&&e.color&&(r=e.title||e.color,s=e.color);var i=n&&n.toLocaleLowerCase()===s.toLocaleLowerCase();if(w)return w({key:t,title:r,color:s,checked:!!i,style:a()({},O,{background:s}),onClick:function(){return k(s)}});var c=g.children&&o.a.isValidElement(g.children)?o.a.cloneElement(g.children,{color:s,checked:i}):null;return Object(d.jsx)("div",a()({tabIndex:0,title:r,onClick:function(){return k(s)}},g,{children:c,style:a()({},O,{background:s})}),t)})),f&&o.a.isValidElement(f)&&f]}))}));u.displayName="Swatch",t.a=u}}]);
//# sourceMappingURL=19.32913b25.chunk.js.map