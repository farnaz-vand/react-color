(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[8],{114:function(e,t,r){"use strict";var a=r(3),n=r.n(a),o=r(9),i=r.n(o),s=r(0),l=r.n(s),c=r(28),u=r(13),d=r(10),b=r(52),p=r(56),f=r(55),g=r(1),h=["prefixCls","className","style","onChange","color","colors"],j=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#cccccc","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];function m(e){return e.checked?Object(g.jsx)("div",{style:{height:5,width:5,borderRadius:"50%",backgroundColor:Object(c.a)(e.color)}}):null}var v=l.a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-compact":r,o=e.className,l=e.style,c=e.onChange,v=e.color,x=e.colors,O=void 0===x?j:x,y=i()(e,h),w="string"===typeof v&&Object(u.a)(v)?Object(d.b)(v):v,C=v?Object(d.f)(w).replace(/^#/,""):"",k=Object(s.useCallback)((function(e){return c&&c(Object(d.a)(e))}),[]),S={style:{alignItems:"baseline"},inputStyle:{boxShadow:"none",backgroundColor:"transparent",outline:0}};return Object(g.jsxs)("div",n()({ref:t,style:n()({background:"#f6f6f6",borderRadius:3,display:"flex",width:240,flexWrap:"wrap",paddingTop:5,paddingLeft:5},l),className:[a,o||""].filter(Boolean).join(" ")},y,{children:[Object(g.jsx)(f.a,{colors:O,color:v?Object(d.f)(w):void 0,rectProps:{children:Object(g.jsx)(m,{}),style:{display:"flex",alignItems:"center",justifyContent:"center"}},onChange:function(e){return k(e)}}),Object(g.jsxs)("div",{style:{display:"flex",margin:"0 4px 3px 0"},children:[Object(g.jsx)(b.a,{onChange:function(e,t){var r;"string"===typeof(r=t)&&Object(u.a)(r)&&/(3|6)/.test(String(r.length))&&k(Object(d.b)(r))},labelStyle:{paddingRight:5,marginTop:-1},value:C.toLocaleUpperCase(),label:Object(g.jsx)("div",{style:{width:8,height:8,backgroundColor:"#"+C}}),inputStyle:{outline:"none",boxShadow:"initial",background:"transparent"},style:{flexDirection:"row-reverse",flex:"1 1 0%",minWidth:80}}),Object(g.jsx)(p.a,{hsva:w,placement:"left",onChange:function(e){return k(e.hsva)},aProps:!1,rProps:S,gProps:S,bProps:S})]})]}))}));v.displayName="Compact",t.a=v},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(10),n=function(e){if(!e)return"#fff";var t=Object(a.a)(e);return(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3>=128?"#000":"#fff"}},461:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var a=r(47),n=r(48),o=r(49),i=r(5),s=r(0),l=r(114),c=r(50),u=r(8),d=r(1);function b(){var e=Object(s.useContext)(u.a),t=e.hsva,r=e.dispatch;return Object(d.jsx)("div",{style:{width:256},children:Object(d.jsx)(l.a,{color:t,style:{boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px"},onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}})})}var p=function(e){Object(n.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(a.a)(this,i);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).editorUrl="/packages/color-compact/README.md",e.getMdStr=function(){return r.e(33).then(r.bind(null,430))},e.example=Object(d.jsx)(b,{}),e}return i}(c.a)},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(47),n=r(53),o=r(48),i=r(49),s=r(0),l=r(54),c=r(51),u=r.n(c),d=r(1),b=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).editorUrl=void 0,n.getMdStr=void 0,n.example=void 0,n.state={mdStr:""},n}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:u.a.warpper,children:[Object(d.jsxs)("div",{className:u.a.markdown,children:[this.example&&Object(d.jsx)("div",{className:u.a.example,children:this.example}),Object(d.jsx)(l.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(d.jsxs)("div",{className:u.a.footer,children:[Object(d.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color.svg",alt:"Github Issues"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(d.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(d.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(d.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(s.Component)},51:function(e,t,r){e.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},52:function(e,t,r){"use strict";var a=r(7),n=r(3),o=r.n(n),i=r(9),s=r.n(i),l=r(0),c=r.n(l),u=r(1),d=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],b=c.a.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,i=e.placement,c=void 0===i?"bottom":i,b=e.label,p=e.value,f=e.className,g=e.style,h=e.labelStyle,j=e.inputStyle,m=e.onChange,v=e.onBlur,x=s()(e,d),O=Object(l.useState)(p),y=Object(a.a)(O,2),w=y[0],C=y[1],k=Object(l.useRef)(!1);Object(l.useEffect)((function(){e.value!==w&&(k.current||C(e.value))}),[e.value]);var S={};return"bottom"===c&&(S.flexDirection="column"),"top"===c&&(S.flexDirection="column-reverse"),"left"===c&&(S.flexDirection="row-reverse"),Object(u.jsxs)("div",{className:[n,f||""].filter(Boolean).join(" "),style:o()({position:"relative",alignItems:"center",display:"flex",fontSize:11},S,g),children:[Object(u.jsx)("input",o()({ref:t,value:w,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var a=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(a)||m&&m(e,a),C(r)},onBlur:function(t){k.current=!1,C(e.value),v&&v(t)},autoComplete:"off",onFocus:function(){return k.current=!0}},x,{style:o()({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},j)})),b&&Object(u.jsx)("span",{style:o()({color:"rgb(153, 153, 153)",textTransform:"capitalize"},h),children:b})]})}));b.displayName="EditableInput",t.a=b},55:function(e,t,r){"use strict";var a=r(3),n=r.n(a),o=r(9),i=r.n(o),s=r(0),l=r.n(s),c=r(10),u=r(1),d=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],b=l.a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-swatch":r,o=e.className,s=e.color,b=e.colors,p=void 0===b?[]:b,f=e.style,g=e.rectProps,h=void 0===g?{}:g,j=e.onChange,m=e.addonAfter,v=e.addonBefore,x=e.rectRender,O=i()(e,d),y=n()({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},h.style),w=function(e){j&&j(Object(c.b)(e))};return Object(u.jsxs)("div",n()({ref:t},O,{className:[a,o||""].filter(Boolean).join(" "),style:n()({display:"flex",flexWrap:"wrap",position:"relative"},f),children:[v&&l.a.isValidElement(v)&&v,p&&Array.isArray(p)&&p.map((function(e,t){var r="",a="";"string"===typeof e&&(r=e,a=e),"object"===typeof e&&e.color&&(r=e.title||e.color,a=e.color);var o=s&&s.toLocaleLowerCase()===a.toLocaleLowerCase();if(x)return x({key:t,title:r,color:a,checked:!!o,style:n()({},y,{background:a}),onClick:function(){return w(a)}});var i=h.children&&l.a.isValidElement(h.children)?l.a.cloneElement(h.children,{color:a,checked:o}):null;return Object(u.jsx)("div",n()({tabIndex:0,title:r,onClick:function(){return w(a)}},h,{children:i,style:n()({},y,{background:a})}),t)})),m&&l.a.isValidElement(m)&&m]}))}));b.displayName="Swatch",t.a=b},56:function(e,t,r){"use strict";var a=r(3),n=r.n(a),o=r(9),i=r.n(o),s=r(0),l=r.n(s),c=r(52),u=r(10),d=r(1),b=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],p=l.a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-editable-input-rgba":r,o=e.hsva,s=e.placement,l=void 0===s?"bottom":s,p=e.rProps,f=void 0===p?{}:p,g=e.gProps,h=void 0===g?{}:g,j=e.bProps,m=void 0===j?{}:j,v=e.aProps,x=void 0===v?{}:v,O=e.className,y=e.style,w=e.onChange,C=i()(e,b),k=o?Object(u.k)(o):{};function S(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var B=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),w&&w(Object(u.a)(Object(u.m)(n()({},k,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&w&&w(Object(u.a)(Object(u.m)(n()({},k,{r:e})))),"g"===t&&w&&w(Object(u.a)(Object(u.m)(n()({},k,{g:e})))),"b"===t&&w&&w(Object(u.a)(Object(u.m)(n()({},k,{b:e})))))};return Object(d.jsxs)("div",n()({ref:t,className:[a,O||""].filter(Boolean).join(" ")},C,{style:n()({fontSize:11,display:"flex"},y),children:[Object(d.jsx)(c.a,n()({label:"R",value:k.r||0,onBlur:S,placement:l,onChange:function(e,t){return B(t,"r",e)}},f,{style:n()({},f.style)})),Object(d.jsx)(c.a,n()({label:"G",value:k.g||0,onBlur:S,placement:l,onChange:function(e,t){return B(t,"g",e)}},h,{style:n()({marginLeft:5},f.style)})),Object(d.jsx)(c.a,n()({label:"B",value:k.b||0,onBlur:S,placement:l,onChange:function(e,t){return B(t,"b",e)}},m,{style:n()({marginLeft:5},m.style)})),x&&Object(d.jsx)(c.a,n()({label:"A",value:k.a?parseInt(String(100*k.a),10):0,onBlur:S,placement:l,onChange:function(e,t){return B(t,"a",e)}},x,{style:n()({marginLeft:5},x.style)}))]}))}));p.displayName="EditableInputRGBA",t.a=p}}]);
//# sourceMappingURL=8.ff7cd4e4.chunk.js.map