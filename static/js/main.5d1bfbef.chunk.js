(this["webpackJsonplearn-math"]=this["webpackJsonplearn-math"]||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(11),a=n.n(c),i=(n(17),n(9)),l=n(5),o=n(3),u=n(2),d=n.n(u),b=n(4),j={operation:"Multiplication",operator:String.fromCodePoint(215)},m=j.operation,h=j.operator,O=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,r,s,c,a,i,l,o,u=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:0,n=u.length>1&&void 0!==u[1]?u[1]:0,r={},t>=0&&n>=0&&t<=9&&n<=9){e.next=5;break}throw new Error("minX and minY must be numbers between 0 and 9");case 5:for(s=t;s<=9;s++)for(c=t;c<=9;c++)a="".concat(s,"_").concat(h,"_").concat(c),i="".concat(c,"_").concat(h,"_").concat(s),l={id:a,a:s,b:c,answer:s*c,operation:m,operator:h},r[i]?r[i]=l:r[a]=l;return o=Object.values(r),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=Object(i.a)(t)).sort((function(){return Math.random()-.5})),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,s,c,a,i,o,u,b;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.answer,r={},s=1;s<8;s++)a=n-s,(c=n+s)>=0&&(r[c]=!0),a>=0&&(r[a]=!0);return delete r[n],e.next=6,x(Object.keys(r));case 6:return i=e.sent,o=[Number(i.shift()),Number(i.pop()),n,Number(i.shift())],e.next=10,x(o);case 10:return u=e.sent,b=Object(l.a)(Object(l.a)({},t),{},{choices:u}),e.abrupt("return",b);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.forEach((function(e){var t=p(e);n.push(t)})),e.next=4,Promise.all(n);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=j.operation,N=j.operator,g=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,s,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({url:t}),n="".concat(t).match(/localhost/i)?2:null,e.next=4,O(2,2);case 4:return r=e.sent,e.next=7,x(r);case 7:return s=e.sent,e.next=10,f(n?s.slice(0,n):s);case 10:return c=e.sent,a={operation:v,operator:N,questions:c},e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,s,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=parseInt(t))<1)){e.next=3;break}return e.abrupt("return",[]);case 3:for(r={},s=n,c=1;c<s;c++)n%c===0&&(a=n/c,r[c]=!0,r[a]=!0,s=a);return i=[],Object.keys(r).forEach((function(e){return i.push(Number(e))})),i.sort((function(e,t){return e-t})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=n(0),k={width:20,size:7},A=function(e){var t=e.num,n=e.userIsDoneWithQuestion,s=void 0!==n&&n,c=e.onClick,a=Object(r.useState)((function(){return[]})),i=Object(o.a)(a,2),l=i[0],u=i[1],d=Object(r.useState)(!1),b=Object(o.a)(d,2),j=b[0],m=b[1],h=Object(r.useState)(!1),O=Object(o.a)(h,2),x=O[0],p=O[1];return Object(r.useEffect)((function(){w(t).then((function(e){return u(e)})).then((function(){return m(!0)})).catch((function(e){return console.error(e)}))}),[j]),Object(y.jsx)("div",{className:"d-inline border border-light rounded",children:Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"m-1",children:Object(y.jsx)("button",{type:"button",className:"btn btn-info m-1",disabled:s,style:{minWidth:44},onClick:function(){return c(t)},children:t})}),Object(y.jsxs)("div",{className:"d-sm mr-auto m-1 ",children:[l.map((function(e){return Object(y.jsx)("span",{className:"badge badge-warning ml-1",style:k,children:Object(y.jsx)("small",{children:e})},e)})),x&&l.map((function(e){return Object(y.jsxs)("div",{className:"d-flex d-sm",children:[Object(y.jsx)("span",{className:"badge badge-dark ml-1 mt-1",style:k,children:Object(y.jsx)("small",{children:e})}),Object(y.jsx)("span",{className:"badge badge-light ml-1 mt-1",style:k,children:"x"}),Object(y.jsx)("span",{className:"badge badge-dark ml-1 mt-1",style:k,children:Object(y.jsx)("small",{children:t/e})}),Object(y.jsx)("span",{className:"badge badge-light ml-1 mt-1",style:k,children:"="}),Object(y.jsx)("span",{className:"badge badge-dark ml-1 mt-1",style:k,children:Object(y.jsx)("small",{children:t})})]},e)}))]}),Object(y.jsx)("div",{className:"m-1",children:l.length>0&&Object(y.jsx)("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){return p(!x)},children:x?Object(y.jsx)("span",{children:"\u2190 less"}):Object(y.jsx)("span",{children:"more \u2193"})})})]})})},C=function(e){var t=e.index,n=e.total,r=e.navigate,s=t<n-1?t+1:null,c=t>0?t-1:null;return Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-link m-2",disabled:null===c,onClick:function(){return r(c)},children:"\xab Previous"}),Object(y.jsx)("button",{type:"button",className:"btn btn-link m-2",disabled:null===s,onClick:function(){return r(s)},children:"Next \xbb"})]})},S=n(25),Q={width:25},I=function(e){var t=e.question,n=e.handleUserAnswer,s=e.title,c=e.justAnsweredCorrectly,a=e.justAnsweredIncorrectly,i=e.questionIndex,l=e.total,u=e.navigate,d=Object(r.useState)(!1),b=Object(o.a)(d,2),j=b[0],m=b[1],h=t.a,O=t.b,x=t.operator,p=t.operation,f=t.choices,v=t.isCorrect,N=t.isAnswered,g=t.answer,w=v&&N,k=function(e){n(t,e)};return Object(y.jsxs)("div",{className:"shadow-lg border border-dark rounded p-2 m-2",children:[Object(y.jsxs)("div",{className:"rounded bg-info p-2 m-1 text-center",children:[Object(y.jsx)("div",{className:"h2",children:p}),Object(y.jsx)("div",{className:"h6",children:s})]}),c?Object(y.jsxs)("div",{className:"bg-light rounded m-1 p-2 text-center h2 text-info",children:[Object(y.jsxs)("div",{className:"h1",children:[Object(y.jsx)(S.a,{size:75,className:"m-1 p-2 text-info"}),"Correct!"]}),Object(y.jsx)("span",{className:"ml-2",children:h}),Object(y.jsx)("span",{className:"ml-2",children:x}),Object(y.jsx)("span",{className:"ml-2",children:O}),Object(y.jsx)("span",{className:"ml-2",children:"="}),Object(y.jsx)("span",{className:"ml-2 border-bottom border-dark text-center",style:{minWdth:30},children:g})]}):Object(y.jsxs)("div",{className:"bg-light rounded m-1 p-2 text-center h2",children:[Object(y.jsx)("span",{className:"m-2",children:h}),Object(y.jsx)("span",{className:"m-2",children:x}),Object(y.jsx)("span",{className:"m-2",children:O}),Object(y.jsx)("span",{className:"m-2",children:"="}),Object(y.jsx)("span",{className:"m-2 border-bottom border-dark text-center",style:{minWdth:30},children:w&&g}),Object(y.jsx)("span",{className:"text-right",style:Q,children:Object(y.jsx)("button",{type:"button",className:"btn btn-warning m-1 ",onClick:function(){return m(!j)},children:"?"})}),Object(y.jsx)("div",{className:"text-center",children:!j&&f.map((function(e){return Object(y.jsx)("button",{type:"button",className:"btn btn-info m-2",disabled:w,style:{minWidth:44},onClick:function(t){return k(e)},children:e},e)}))})]}),a&&Object(y.jsx)("div",{className:"alert alert-warning text-center",role:"alert",children:"That is not the correct answer. Please try again."}),j&&Object(y.jsxs)("div",{className:"d-flex flex-column border p-1 rounded",children:[Object(y.jsx)("div",{className:"h4 mt-2",children:"Divisors:"}),f.map((function(e){return Object(y.jsx)(A,{num:e,userIsDoneWithQuestion:w,onClick:k},e)})),h!==O&&Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"h4 mt-1 mr-3",children:"Same as:"}),Object(y.jsx)("span",{className:"badge badge-warning m-1 ml-5",style:Q,children:O}),Object(y.jsx)("span",{className:"badge badge-light m-1",style:Q,children:x}),Object(y.jsx)("span",{className:"badge badge-warning m-1",style:Q,children:h})]})]}),Object(y.jsx)(C,{index:i,total:l,navigate:u})]})},P=I;I.defaultProps={justAnsweredCorrectly:!1,justAnsweredIncorrectly:!1};var q=function(e){var t=e.testProgress,n=t.totalQuestions,r=t.answeredQuestions,s=t.attempts,c=t.correctAnswers,a=t.accuracy,i=100*r/n;return n?Object(y.jsxs)("div",{className:"shadow-lg border border-dark rounded p-1 m-2",children:[Object(y.jsx)("div",{className:"progress bg-secondary",style:{height:5},children:Object(y.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(i,"%")},"aria-valuenow":i,"aria-valuemin":"0","aria-valuemax":"100"})}),Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"mr-auto p-1",children:"Answered Questions"}),Object(y.jsxs)("div",{className:"p-1",children:[r,"\xa0 of \xa0",n]})]}),Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"mr-auto p-1",children:"Correct Answers"}),Object(y.jsx)("div",{className:"p-1",children:c})]}),Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"mr-auto p-1",children:"Attempts"}),Object(y.jsx)("div",{className:"p-1",children:s})]}),Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"mr-auto p-1",children:"Accuracy"}),Object(y.jsx)("div",{className:"p-1",children:"".concat(Number(a).toFixed(1),"%")})]})]}):null},E=j.operation,W={totalQuestions:0,answeredQuestions:0,correctAnswers:0,attempts:0,accuracy:0},_=function(e){var t=Object(r.useState)(0),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(0),u=Object(o.a)(a,2),d=u[0],b=u[1],j=Object(r.useState)([]),m=Object(o.a)(j,2),h=m[0],O=m[1],x=Object(r.useState)((function(){return Object(l.a)({},W)})),p=Object(o.a)(x,2),f=p[0],v=p[1],N=Object(r.useState)((function(){return-1})),w=Object(o.a)(N,2),k=w[0],A=w[1],C=Object(r.useState)((function(){return-1})),S=Object(o.a)(C,2),Q=S[0],I=S[1],_=Object(r.useState)((function(){return!1})),D=Object(o.a)(_,2),M=D[0],T=D[1],z=Object(r.useState)((function(){return!1})),J=Object(o.a)(z,2),U=J[0],B=J[1];if(Object(r.useEffect)((function(){g(window.location.href).then((function(e){O(e.questions),b(0),A(-1),I(-1),T(!1),B(!1),v(Object(l.a)(Object(l.a)({},W),{},{totalQuestions:e.questions.length}))})).catch((function(e){return console.error(e)}))}),[s]),!h||!h.length||h.length<1)return Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:E})});var F=h[d];return Object(y.jsx)("div",{className:"component",children:Object(y.jsxs)("div",{className:"shadow align-content-start",children:[!U&&Object(y.jsx)(P,{question:F,handleUserAnswer:function(e,t){var n=Object(i.a)(h),r=n.indexOf(e),s=e.answer===t,c=Object(l.a)(Object(l.a)({},e),{},{userAnswer:t,isCorrect:s,isAnswered:!0}),a=Object(l.a)({},f);s&&a.correctAnswers++,e.isAnswered||a.answeredQuestions++,a.attempts++,a.accuracy=100*a.correctAnswers/a.attempts,n[r]=c,v(a),O(n),A(s?d:-1),I(s?-1:d),s&&d+1<h.length&&setTimeout((function(){b(d+1)}),4e3),a.answeredQuestions===n.length&&(T(!0),setTimeout((function(){return B(!0)}),4e3))},title:"Question ".concat(d+1," of ").concat(h.length),justAnsweredCorrectly:k===d,justAnsweredIncorrectly:Q===d,questionIndex:d,total:h.length,navigate:function(e){b(e),A(-1),I(-1)}},F.id),M&&U&&Object(y.jsx)("div",{className:"alert alert-primary",role:"alert",children:"Completed!"}),Object(y.jsx)(q,{testProgress:f}),M&&U&&Object(y.jsx)("button",{type:"button",className:"btn btn-link m-2",onClick:function(){return c(s+1)},children:"Play Again"})]})})};n(22);a.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5d1bfbef.chunk.js.map