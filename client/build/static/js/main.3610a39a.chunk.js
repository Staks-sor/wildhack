(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,c,s){},13:function(e,c,s){},21:function(e,c,s){"use strict";s.r(c);s(12);var n=s(7),t=s(6),i=s(3),a=(s(13),s(1)),r=s.n(a),l=s(11),o=s(0),d={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},j={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},h={display:"flex",minWidth:0,overflow:"hidden"},u={display:"block",width:"auto",height:"100%"};var b=function(){var e=r.a.useState(!1),c=Object(i.a)(e,2),s=c[0],a=c[1],b=r.a.useState([]),O=Object(i.a)(b,2),m=O[0],x=O[1],v=r.a.useState([]),f=Object(i.a)(v,2),p=f[0],g=f[1],N=r.a.useState([]),w=Object(i.a)(N,2),k=w[0],y=w[1],R=r.a.useState([]),S=Object(i.a)(R,2),_=S[0],E=S[1],L=r.a.useState("success"),U=Object(i.a)(L,2),C=U[0],D=U[1],A=Object(l.a)({onDrop:function(e){x(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),e.forEach((function(e){console.log(e);var c=(new FileReader).readAsDataURL(e);console.log(c)}))}}),P=A.getRootProps,z=A.getInputProps,B=m.map((function(e){return Object(o.jsx)("div",{style:j,children:Object(o.jsxs)("div",{style:h,children:[console.log(e),Object(o.jsx)("img",{src:e.preview,style:u})]})},e.name)}));return r.a.useEffect((function(){return function(){m.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[m]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"logo",children:[Object(o.jsx)("h1",{children:"EQUAL"}),Object(o.jsx)("h3",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"})]}),Object(o.jsx)("div",{className:"sponsor",children:Object(o.jsx)("img",{src:"croc.svg"})})]}),Object(o.jsx)("div",{className:"main_title",children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0445"}),s?Object(o.jsxs)("div",{className:"result",children:[Object(o.jsx)("button",{onClick:function(){a(!1),E([]),g([]),y([]),x([])},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(o.jsx)("div",{className:"main_title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),Object(o.jsxs)("div",{className:"result_preview",children:[Object(o.jsx)("div",{className:"success"==C?"column success_checked":"column success",onClick:function(e){D("success")},children:Object(o.jsxs)("h3",{children:[Object(o.jsx)("i",{}),"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"]})}),Object(o.jsx)("div",{className:"strange"==C?"column warning_checked":"column warning",onClick:function(e){D("strange")},children:Object(o.jsxs)("h3",{children:[Object(o.jsx)("i",{}),"\u0421\u043f\u043e\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"]})}),Object(o.jsx)("div",{className:"error"==C?"column error_checked":"column error",onClick:function(e){D("error")},children:Object(o.jsxs)("h3",{children:[Object(o.jsx)("i",{}),"\u041f\u043b\u043e\u0445\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"]})})]}),Object(o.jsx)("h1",{children:"success"==C?"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":"strange"==C?"\u0421\u043f\u043e\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":"\u041f\u043b\u043e\u0445\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),"success"==C?Object(o.jsx)("div",{className:"result_images",children:p.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"http://localhost:8000/good/".concat(null===e||void 0===e?void 0:e.filename)}),Object(o.jsxs)("div",{className:"chance success",children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c: ",+(null===e||void 0===e?void 0:e.chance)]})]})}))}):"strange"==C?Object(o.jsx)("div",{className:"result_images",children:_.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"http://localhost:8000/strange/".concat(null===e||void 0===e?void 0:e.filename)}),Object(o.jsxs)("div",{className:"chance warning",children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c: ",+(null===e||void 0===e?void 0:e.chance)]})]})}))}):Object(o.jsx)("div",{className:"result_images",children:k.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"http://localhost:8000/error/".concat(null===e||void 0===e?void 0:e.filename)}),Object(o.jsxs)("div",{className:"chance error",children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c: ",+(null===e||void 0===e?void 0:e.chance)]})]})}))})]}):Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"upload",children:[Object(o.jsx)("button",{onClick:function(){(null===m||void 0===m?void 0:m.length)>0?(a(!0),m.forEach((function(e){var c=new FormData;c.append("image",e),fetch("http://localhost:8000/images",{method:"POST",body:c}).then((function(e){return e.json()})).then((function(e){console.log(e),+e.chance>=.45?g((function(c){return[].concat(Object(t.a)(c),[e])})):+e.chance>=.25&&+e.chance<.45?E((function(c){return[].concat(Object(t.a)(c),[e])})):+e.chance<.25&&y((function(c){return[].concat(Object(t.a)(c),[e])}))}))}))):alert("\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b")},children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"}),Object(o.jsxs)("div",{className:"toolbar",children:["\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e: ",null===m||void 0===m?void 0:m.length," \u0444\u043e\u0442\u043e."]}),Object(o.jsxs)("section",{className:"container",children:[Object(o.jsxs)("div",Object(n.a)(Object(n.a)({},P({className:"dropzone"})),{},{children:[Object(o.jsx)("input",Object(n.a)({},z())),Object(o.jsx)("p",{children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0432 \u044d\u0442\u043e \u043e\u043a\u043d\u043e \u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0444\u043e\u0442\u043e \u0438\u043b\u0438 \u0432\u0438\u0434\u0435\u043e..."})]})),Object(o.jsx)("aside",{style:d,children:B})]})]})})]})},O=s(10);s.n(O).a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3610a39a.chunk.js.map