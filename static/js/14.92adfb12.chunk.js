(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[14],{469:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(47),r=a(48),s=a(49),i=a(5),l=a(0),c=a(56),o=a(50),u=a(8),b=a(1);function j(){var e=Object(l.useContext)(u.a),t=e.hsva,a=e.dispatch;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"10px 0 10px 0"},children:[Object(b.jsx)(c.a,{style:{maxWidth:180,marginRight:15},hsva:t,onChange:function(e){a({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(b.jsx)(c.a,{style:{maxWidth:180},hsva:t,placement:"top",onChange:function(e){a({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}})]}),Object(b.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center"},children:[Object(b.jsx)(c.a,{style:{maxWidth:180,marginRight:15},hsva:t,placement:"left",onChange:function(e){a({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(b.jsx)(c.a,{style:{maxWidth:180},hsva:t,placement:"right",onChange:function(e){a({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}})]})]})}var h=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(){var e;Object(n.a)(this,i);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).editorUrl="/packages/color-editable-input-rgba/README.md",e.getMdStr=function(){return a.e(36).then(a.bind(null,438))},e.example=Object(b.jsx)(j,{}),e}return i}(o.a)},50:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(47),r=a(53),s=a(48),i=a(49),l=a(0),c=a(54),o=a(51),u=a.n(o),b=a(1),j=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.example=void 0,r.state={mdStr:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:u.a.warpper,children:[Object(b.jsxs)("div",{className:u.a.markdown,children:[this.example&&Object(b.jsx)("div",{className:u.a.example,children:this.example}),Object(b.jsx)(c.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(b.jsxs)("div",{className:u.a.footer,children:[Object(b.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(b.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color.svg",alt:"Github Issues"})}),Object(b.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(b.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(b.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(b.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(b.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(b.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(b.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),a}(l.Component)},51:function(e,t,a){e.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},52:function(e,t,a){"use strict";var n=a(7),r=a(3),s=a.n(r),i=a(9),l=a.n(i),c=a(0),o=a.n(c),u=a(1),b=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],j=o.a.forwardRef((function(e,t){var a=e.prefixCls,r=void 0===a?"w-color-editable-input":a,i=e.placement,o=void 0===i?"bottom":i,j=e.label,h=e.value,p=e.className,d=e.style,g=e.labelStyle,m=e.inputStyle,f=e.onChange,v=e.onBlur,x=l()(e,b),O=Object(c.useState)(h),y=Object(n.a)(O,2),w=y[0],k=y[1],_=Object(c.useRef)(!1);Object(c.useEffect)((function(){e.value!==w&&(_.current||k(e.value))}),[e.value]);var C={};return"bottom"===o&&(C.flexDirection="column"),"top"===o&&(C.flexDirection="column-reverse"),"left"===o&&(C.flexDirection="row-reverse"),Object(u.jsxs)("div",{className:[r,p||""].filter(Boolean).join(" "),style:s()({position:"relative",alignItems:"center",display:"flex",fontSize:11},C,d),children:[Object(u.jsx)("input",s()({ref:t,value:w,onChange:function(e,t){var a=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(a)&&f&&f(e,a);var n=function(e){return Number(String(e).replace(/%/g,""))}(a);isNaN(n)||f&&f(e,n),k(a)},onBlur:function(t){_.current=!1,k(e.value),v&&v(t)},autoComplete:"off",onFocus:function(){return _.current=!0}},x,{style:s()({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},m)})),j&&Object(u.jsx)("span",{style:s()({color:"rgb(153, 153, 153)",textTransform:"capitalize"},g),children:j})]})}));j.displayName="EditableInput",t.a=j},56:function(e,t,a){"use strict";var n=a(3),r=a.n(n),s=a(9),i=a.n(s),l=a(0),c=a.n(l),o=a(52),u=a(10),b=a(1),j=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],h=c.a.forwardRef((function(e,t){var a=e.prefixCls,n=void 0===a?"w-color-editable-input-rgba":a,s=e.hsva,l=e.placement,c=void 0===l?"bottom":l,h=e.rProps,p=void 0===h?{}:h,d=e.gProps,g=void 0===d?{}:d,m=e.bProps,f=void 0===m?{}:m,v=e.aProps,x=void 0===v?{}:v,O=e.className,y=e.style,w=e.onChange,k=i()(e,j),_=s?Object(u.k)(s):{};function C(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var S=function(e,t,a){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),w&&w(Object(u.a)(Object(u.m)(r()({},_,{a:e/100}))))),e>255&&(e=255,a.target.value="255"),e<0&&(e=0,a.target.value="0"),"r"===t&&w&&w(Object(u.a)(Object(u.m)(r()({},_,{r:e})))),"g"===t&&w&&w(Object(u.a)(Object(u.m)(r()({},_,{g:e})))),"b"===t&&w&&w(Object(u.a)(Object(u.m)(r()({},_,{b:e})))))};return Object(b.jsxs)("div",r()({ref:t,className:[n,O||""].filter(Boolean).join(" ")},k,{style:r()({fontSize:11,display:"flex"},y),children:[Object(b.jsx)(o.a,r()({label:"R",value:_.r||0,onBlur:C,placement:c,onChange:function(e,t){return S(t,"r",e)}},p,{style:r()({},p.style)})),Object(b.jsx)(o.a,r()({label:"G",value:_.g||0,onBlur:C,placement:c,onChange:function(e,t){return S(t,"g",e)}},g,{style:r()({marginLeft:5},p.style)})),Object(b.jsx)(o.a,r()({label:"B",value:_.b||0,onBlur:C,placement:c,onChange:function(e,t){return S(t,"b",e)}},f,{style:r()({marginLeft:5},f.style)})),x&&Object(b.jsx)(o.a,r()({label:"A",value:_.a?parseInt(String(100*_.a),10):0,onBlur:C,placement:c,onChange:function(e,t){return S(t,"a",e)}},x,{style:r()({marginLeft:5},x.style)}))]}))}));h.displayName="EditableInputRGBA",t.a=h}}]);
//# sourceMappingURL=14.92adfb12.chunk.js.map