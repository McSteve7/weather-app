(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n.n(i),c=(n(16),n(6)),s=n.n(c),u=n(9),l=n(1),p=n(2),h=n(4),d=n(3),m=n(5),y=(n(20),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.props.getWeather},a.a.createElement("input",{id:"city-section",type:"text",name:"city",placeholder:"  City..."}),a.a.createElement("input",{id:"country-section",type:"text",name:"country",placeholder:"  Country..."}),a.a.createElement("button",{id:"myButton"},"Get Weather"))}}]),t}(a.a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{id:"weather-header"},"Weather Application"),a.a.createElement("h4",{id:"weather-para"},"Get weather information for your city and more!"))}}]),t}(a.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"weather-result"},this.props.city&&this.props.country&&a.a.createElement("p",null,"Location: ",this.props.city,", ",this.props.country),this.props.temperature&&a.a.createElement("p",null,"Temperature: ",this.props.temperature),this.props.humidity&&a.a.createElement("p",null,"Humidity: ",this.props.humidity),this.props.pressure&&a.a.createElement("p",null,"Pressure: ",this.props.pressure),this.props.description&&a.a.createElement("p",null,"Condition: ",this.props.description),this.props.error&&a.a.createElement("p",null,"Error!: ",this.props.error),a.a.createElement("h6",{id:"footer-message"},"Built with love by Ajiboye Damilola"))}}]),t}(a.a.Component),w="6157e890d885dc4181d115089f315042",b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={temperature:"",city:"",country:"",humidity:"",pressure:"",description:"",error:""},n.getWeather=function(){var e=Object(u.a)(s.a.mark(function e(t){var r,a,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements.city.value,a=t.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(a,"&appid=").concat(w));case 5:return i=e.sent,e.next=8,i.json();case 8:o=e.sent,r&&a?(console.log(o),n.setState({temperature:o.main.temp,city:o.name,country:o.sys.country,humidity:o.main.humidity,pressure:o.main.pressure,description:o.weather[0].description,error:""})):n.setState({temperature:"",city:"",country:"",humidity:"",pressure:"",description:"",error:"Please enter the values"});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f,null),a.a.createElement(y,{getWeather:this.getWeather}),a.a.createElement(v,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,pressure:this.state.pressure,description:this.state.description,error:this.state.error}))}}]),t}(a.a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[10,2,1]]]);
//# sourceMappingURL=main.3d46a7a9.chunk.js.map