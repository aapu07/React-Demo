(this["webpackJsonpreact-demo-app"]=this["webpackJsonpreact-demo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),i=a.n(l);a(13),a(14);var m=function(e){return r.a.createElement("div",{className:"Welcome"},r.a.createElement("h1",null," Welcome, ",e.name))},o=a(1),c=a(2),s=a(4),u=a(3),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{classname:"Clock"},r.a.createElement("h2",null," This is ",this.state.date.toLocaleTimeString(),"."),r.a.createElement("h1",null,"CLOCK"))}}]),a}(n.Component),f=a(7),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=Object(f.a)({},n.state.formDate);t[e.target.name]=e.target.value,n.setState({formData:t})},n.handleSubmit=function(e){e.preventDefault(),n.setState({submitted:!0})},n.resetForm=function(e){n.setState({submitted:!1,formData:{firstName:"",lastName:""}})},n.state={submitted:!1,formData:{firstName:"",lastName:""}},n}return Object(c.a)(a,[{key:"render",value:function(){return this.state.submitted?r.a.createElement("div",{className:"contact"},r.a.createElement("p",null," Thanks, ",this.state.formData.firstName,", for submitting form"),r.a.createElement("button",{onClick:this.resetForm},"Reset Form")):r.a.createElement("div",{className:"Contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"firstName"},"First name"),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.formData.firstName,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"lastName"},"Last name"),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.formData.lastName,onChange:this.handleChange})),r.a.createElement("button",null,"Submit Form")),this.state.formData.firstName,r.a.createElement("br",null),this.state.formData.lastName)}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{name:"ISBC"}),r.a.createElement(h,null),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2d6d9368.chunk.js.map