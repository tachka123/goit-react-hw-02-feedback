(this["webpackJsonpgoit-react-hw-01"]=this["webpackJsonpgoit-react-hw-01"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=a(4),u=a.n(c),i=a(1),d=a(5),b=a(6),m=a(9),s=a(7),v=a(10),f=a(8),p=a.n(f),E=function(e,t){return Math.round(e/t*100)},k=function(e){var t=e.label,a=e.value,n=e.percent;return r.a.createElement("span",null,t,": ",a," ",n&&r.a.createElement(r.a.Fragment,null,n))};k.defaultProps={label:"error",value:0,percent:""};var g=k,h=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,l=e.feedback;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{label:"Good",value:t}),r.a.createElement(g,{label:"Neutral",value:a}),r.a.createElement(g,{label:"Bad",value:n}),r.a.createElement(g,{label:"Total",value:o}),r.a.createElement(g,{label:"Feedback",value:l,percent:"%"}))};h.defaultProps={good:0,neutral:0,bad:0,total:0,feedback:0};var F=h,O=function(e){var t=e.option,a=e.onLeaveFeedback,n=e.name;return r.a.createElement("button",{name:n,onClick:a,type:"button"},t)},P=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0,total:0,feedback:0},a.addComment=function(e){var t=e.target.name;a.setState((function(e){var a;return a={},Object(i.a)(a,t,e[t]+1),Object(i.a)(a,"total",e.total+1),a})),a.countPositiveFeedbackPercentage()},a.countPositiveFeedbackPercentage=function(){a.setState((function(e){var t=e.good,a=e.total;return{feedback:E(t,a)}}))},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.title,t=this.state,a=t.good,n=t.neutral,o=t.bad,l=t.total,c=t.feedback;return r.a.createElement("div",{className:p.a.container},r.a.createElement("h2",null,e),r.a.createElement(O,{onLeaveFeedback:this.addComment,name:"good",option:"GOOD"}),r.a.createElement(O,{onLeaveFeedback:this.addComment,option:"NEUTRAL",name:"neutral"}),r.a.createElement(O,{onLeaveFeedback:this.addComment,name:"bad",option:"BAD"}),r.a.createElement("h2",null,"Statisctics"),0===a&&0===n&&0===o?"No feedback given":r.a.createElement(F,{good:a,neutral:n,bad:o,total:l,feedback:c}))}}]),t}(n.Component);P.defaultProps={title:"Please leave feedback"};var j=P,C=function(){return r.a.createElement("div",{className:u.a.container},r.a.createElement(j,{title:"Please leave feedback"}))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))},4:function(e,t,a){e.exports={container:"variables_container__3qXA6"}},8:function(e,t,a){e.exports={container:"statistic_container__lJ3J1"}}},[[11,1,2]]]);
//# sourceMappingURL=main.f658b728.chunk.js.map