(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});a(38);var n=a(0),r=a.n(n),o=a(201);var c=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={smallScreen:!1,modal:{name:""}},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()},c.resize=function(){this.setState({smallScreen:window.innerWidth<=840})},c.openModal=function(e){this.setState({modal:e}),document.getElementById("modal").style.display="block"},c.closeModal=function(){document.getElementById("modal").style.display="none"},c.render=function(){var e=this,t=this.props.data.allWorkJson.nodes[0],a=[],n=0;return t.work_items.forEach(function(t){a.push(r.a.createElement("div",{key:n,onClick:e.openModal.bind(e,t),className:e.state.smallScreen?"grid-item-small":"work-grid-item",style:{backgroundImage:"url("+t.image+")",backgroundSize:"100%"}})),n++}),r.a.createElement(o.a,{page:"work"},r.a.createElement("h1",{className:"title"},t.title),r.a.createElement("div",{className:"text"},t.text),r.a.createElement("div",{className:this.state.smallScreen?"grid-container-small":"work-grid-container"},a),r.a.createElement("div",{id:"modal",className:"modal",onClick:this.closeModal},r.a.createElement("div",{className:this.state.smallScreen?"modal-content-small":"modal-content"},r.a.createElement("span",{className:"modal-close"},"×"),r.a.createElement("div",{className:"modal-grid-container"},r.a.createElement("div",{className:"modal-grid-item-left"},r.a.createElement("span",{className:"modal-title"},this.state.modal.name),r.a.createElement("p",{className:"modal-text"},this.state.modal.description),r.a.createElement("p",{className:"modal-text"},"Completed: ",this.state.modal.completed)),r.a.createElement("div",{className:"modal-grid-item-right"},r.a.createElement("img",{src:this.state.modal.image,alt:this.state.modal.name,className:"modal-image"}))))))},n}(n.Component);t.default=c;var s="896320962"},196:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(196),a(9).default.enqueue;var s=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&o(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||o,staticQueryData:e})})}},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e,t,a){e.exports=a.p+"static/logo-large-c93a1b872c82ab29982171b5ef055984.svg"},200:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6Ii8+PC9zdmc+"},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(197),c=a(199),s=a.n(c),l=a(200),i=a.n(l);var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.openSidebar=function(){document.getElementById("sidebar").style.display="block"},c.closeSidebar=function(){document.getElementById("sidebar").style.display="none"},c.render=function(){var e=this.props.page;return this.props.smallScreen?r.a.createElement("div",{className:"sidebar"},r.a.createElement("button",{onClick:this.openSidebar,className:"sidebar-button-off"},r.a.createElement("img",{src:i.a,alt:"Menu",className:"menu-icon"})),r.a.createElement("div",{class:"sidebar-inner",style:{display:"none"},id:"sidebar",onClick:this.closeSidebar},r.a.createElement("button",{className:"sidebar-button-on"},r.a.createElement("img",{src:i.a,alt:"Menu",className:"menu-icon"})),r.a.createElement(o.a,{to:"/",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"HOME")),r.a.createElement(o.a,{to:"/work",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"WORK")),r.a.createElement(o.a,{to:"/about",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"ABOUT")),r.a.createElement(o.a,{to:"/contact",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"CONTACT")))):r.a.createElement("header",{className:"header"},r.a.createElement(o.a,{to:"/"},r.a.createElement("button",{className:"home"===e?"button-active":"button"},"HOME")),r.a.createElement(o.a,{to:"/work"},r.a.createElement("button",{className:"work"===e?"button-active":"button"},"WORK")),r.a.createElement(o.a,{to:"/"},r.a.createElement("img",{src:s.a,alt:"Crafty Logo",className:"logo"})),r.a.createElement(o.a,{to:"/about"},r.a.createElement("button",{className:"about"===e?"button-active":"button"},"ABOUT")),r.a.createElement(o.a,{to:"/contact"},r.a.createElement("button",{className:"contact"===e?"button-active":"button"},"CONTACT")))},n}(n.Component);var d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"https://simplecode.io",className:"footer-text"},"© ",(new Date).getFullYear()," "," Simplecode. All rights reserved."))},n}(n.Component);a(202);var u=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={smallScreen:!1},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()},o.resize=function(){this.setState({smallScreen:window.innerWidth<=840})},o.render=function(){var e=this.props,t=e.children,a=e.page;return r.a.createElement("div",{className:"main"},r.a.createElement(m,{page:a,smallScreen:this.state.smallScreen}),r.a.createElement("div",null,t),r.a.createElement(d,null))},n}(n.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-work-js-f890c61ddbe912472b60.js.map