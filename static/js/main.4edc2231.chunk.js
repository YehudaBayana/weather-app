(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{110:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(26),a=n.n(c),o=(n(110),n(111),n(20)),l=(n(116),n(70)),s=n(32),u=n(17),d=n(197),h=n(199),j="ADD_TO_FAVORITES",f="DELETE_FROM_FAVORITES",v="SET_CITY_NAME",p="SET_CURRENT_CITY",m="SET_AUTO_COMPLETE",b="SET_CURRENT_WEATHER",y="SET_ALL_WEATHER",O="DELETE_ALL_WEATHER",x="SET_WEEKLY_WEATHER",C="SET_IS_C",g="SET_API_ERROR";function w(e){return{type:f,payload:e}}function E(e){return{type:p,payload:e}}function N(e){return{type:m,payload:e}}function k(e){return{type:y,payload:e}}function T(e){return{type:C,payload:e}}function W(e){return{type:g,payload:e}}n(117);var A=n(3),_=Object(o.b)((function(e){return{currentCity:e.currentCity,cityName:e.cityName,autoComplete:e.autoComplete}}),(function(e){return{setCurrentCity:function(t){return e(E(t))},setCityName:function(t){return e({type:v,payload:t})},setAutoComplete:function(t){return e(N(t))},setApiError:function(t){return e(W(t))}}}))((function(e){var t=e.setCityName,n=e.autoComplete,i=e.setAutoComplete,c=e.setCurrentCity,a=d.a.Search,o=Object(r.useRef)();return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"search-input-div margin",children:[Object(A.jsx)(h.b,{direction:"vertical",children:Object(A.jsx)(a,{placeholder:"search city",allowClear:!0,onSearch:function(e){if(t(e),!e)return i([])},style:{width:300},ref:o,size:"large",enterButton:!0})}),Object(A.jsx)("ul",{className:"result-ul",children:null===n||void 0===n?void 0:n.map((function(e){return Object(A.jsx)("li",{className:"result-li",onClick:function(){return function(e){c(e),i([])}(e)},children:e.LocalizedName},e.Key)}))})]})})})),S=n(49),M=n(200),F=(n(119),Object(o.b)((function(e){return{favorites:e.favorites,currentCity:e.currentCity,autoComplete:e.autoComplete,currentWeather:e.currentWeather,weeklyWeather:e.weeklyWeather,isC:e.isC}}),(function(e){return{addToList:function(t){return e({type:j,payload:t})},deleteFromList:function(t){return e(w(t))},setIsC:function(t){return e(T(t))}}}))((function(e){var t,n,i,c,a,o,l,s,u,d=e.addToList,h=e.deleteFromList,j=e.currentCity,f=e.listFavorites,v=e.currentWeather,p=e.isC,m=Object(r.useState)(null)[1];return Object(r.useEffect)((function(){m(null===f||void 0===f?void 0:f.find((function(e){return e.key===j.Key})))}),[j,f]),Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"main-header margin",children:[Object(A.jsx)("div",{className:"card-container",children:Object(A.jsx)("div",{className:"widget",children:Object(A.jsxs)("div",{className:"details",children:[Object(A.jsx)("div",{className:"temperature",children:p?Math.floor(null===(t=v[0])||void 0===t?void 0:t.Temperature.Metric.Value)+" "+(null===(n=v[0])||void 0===n?void 0:n.Temperature.Metric.Unit):Math.floor(null===(i=v[0])||void 0===i?void 0:i.Temperature.Imperial.Value)+" "+(null===(c=v[0])||void 0===c?void 0:c.Temperature.Imperial.Unit)}),Object(A.jsx)("div",{className:"summary",children:Object(A.jsx)("p",{className:"summaryText",children:null===j||void 0===j?void 0:j.LocalizedName})}),Object(A.jsx)("div",{className:"precipitation",children:null===(a=v[0])||void 0===a?void 0:a.WeatherText}),Object(A.jsxs)("div",{className:"wind",children:["Wind: ",null===(o=v[0])||void 0===o||null===(l=o.Wind)||void 0===l?void 0:l.Speed.Metric.Value," ",null===(s=v[0])||void 0===s||null===(u=s.Wind)||void 0===u?void 0:u.Speed.Metric.Unit]})]})})}),j.inFavorites?Object(A.jsx)(S.a,{className:"favorite-btn",style:{fontSize:"21px",marginTop:"42px",padding:"7px 30px"},type:"primary",shape:"round",icon:Object(A.jsx)(M.a,{style:{color:"red"}}),onClick:function(){return(e=j).inFavorites=!1,h(e),void m(null);var e},children:"remove from favorites"}):Object(A.jsx)(S.a,{className:"favorite-btn",style:{fontSize:"21px",marginTop:"42px",padding:"7px 30px"},type:"primary",shape:"round",icon:Object(A.jsx)(M.a,{style:{color:"white"}}),onClick:function(){return(e=j).inFavorites=!0,d(e),void m(e);var e},children:"add to favorites"})]})})}))),I=(n(120),Object(o.b)((function(e){return{weeklyWeather:e.weeklyWeather,currentCity:e.currentCity,isC:e.isC}}))((function(e){var t,n=e.weeklyWeather,r=e.isC;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"weather-of-the-week margin",style:{display:"flex",flexWrap:"wrap"},children:null===(t=n.DailyForecasts)||void 0===t?void 0:t.map((function(e,t){var n=Math.floor((e.Temperature.Minimum.Value+e.Temperature.Maximum.Value)/2);return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"weather-wrapper",children:Object(A.jsxs)("div",{className:"weather-card madrid",children:[Object(A.jsx)("div",{className:"weather-icon ".concat(n>10?"sun":"cloud")}),Object(A.jsx)("h1",{children:r?n+" C":Math.floor(3.2034632*n)+" F"}),Object(A.jsx)("p",{children:new Date(e.Date).toDateString()})]})},t)})}))})})}))),L=function(e){var t=e.theme;return Object(A.jsx)("div",{children:Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(F,{}),Object(A.jsx)("div",{className:"weather-of-the-day margin",children:Object(A.jsx)("h1",{style:"dark"===t?{color:"white"}:{color:"black"},children:"The weather for the coming days"})}),Object(A.jsx)(I,{})]})})},R=function(e){var t=e.theme;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(_,{}),Object(A.jsx)(L,{theme:t})]})},V=(n(121),Object(o.b)((function(e){return{favorites:e.favorites,allWeather:e.allWeather,isC:e.isC}}),(function(e){return{setCurrentCity:function(t){return e(E(t))},deleteFromList:function(t){return e(w(t))},setAllWeather:function(t){return e(k(t))},deleteAllWeather:function(){return e({type:O})},setApiError:function(t){return e(W(t))}}}))((function(e){var t=e.favorites,n=e.allWeather,i=e.isC,c=e.setCurrentCity,a=e.setAllWeather,o=e.deleteAllWeather,l=e.setApiError;return Object(r.useEffect)((function(){o(),t.forEach((function(e){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(null===e||void 0===e?void 0:e.Key,"?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&language=en-us&details=true")).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(){return l(!0)}))}))}),[]),Object(A.jsxs)(A.Fragment,{children:[t.length>0?Object(A.jsx)("h1",{children:"favorites cities"}):Object(A.jsx)("h1",{children:"no favorites cities"}),Object(A.jsx)("div",{className:"favorites-container",style:{display:"flex",flexWrap:"wrap"},children:null===t||void 0===t?void 0:t.map((function(e,t){var r,a,o,l,u,d,h,j,f;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(s.b,{to:"/",children:Object(A.jsx)("div",{onClick:function(){c(e)},className:"favorites-card-container",children:Object(A.jsxs)("div",{className:"favorites-widget",children:[Object(A.jsxs)("div",{className:"favorites-details",children:[Object(A.jsxs)("div",{className:"favorites-temperature",children:[i?Math.floor(null===(r=n[t])||void 0===r?void 0:r.Temperature.Metric.Value)+(null===(a=n[t])||void 0===a?void 0:a.Temperature.Metric.Unit):Math.floor(null===(o=n[t])||void 0===o?void 0:o.Temperature.Imperial.Value)+(null===(l=n[t])||void 0===l?void 0:l.Temperature.Imperial.Unit),"\xb0"]}),Object(A.jsx)("div",{className:"favorites-summary",children:Object(A.jsx)("p",{className:"favorites-summaryText",children:null===e||void 0===e?void 0:e.LocalizedName})}),Object(A.jsx)("div",{className:"favorites-precipitation",children:null===(u=n[t])||void 0===u?void 0:u.WeatherText}),Object(A.jsxs)("div",{className:"favorites-wind",children:["Wind: ",null===(d=n[t])||void 0===d||null===(h=d.Wind)||void 0===h?void 0:h.Speed.Metric.Value," ",null===(j=n[t])||void 0===j||null===(f=j.Wind)||void 0===f?void 0:f.Speed.Metric.Unit]})]}),Object(A.jsx)("div",{className:"favorites-pictoBackdrop"}),Object(A.jsx)("div",{className:"favorites-pictoFrame"}),Object(A.jsx)("div",{className:"favorites-pictoCloudBig"}),Object(A.jsx)("div",{className:"favorites-pictoCloudFill"}),Object(A.jsx)("div",{className:"favorites-pictoCloudSmall"}),Object(A.jsx)("div",{className:"favorites-iconCloudBig"}),Object(A.jsx)("div",{className:"favorites-iconCloudFill"}),Object(A.jsx)("div",{className:"favorites-iconCloudSmall"})]})})},t)})}))})]})}))),z=n(196);n(123);var K=Object(o.b)((function(e){return{isC:e.isC}}),(function(e){return{setIsC:function(t){return e(T(t))}}}))((function(e){var t=e.setTheme,n=e.theme,r=e.setIsC,i=e.isC,c=function(){document.getElementById("fullNav").style.height="0%"};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{id:"fullNav",className:"overlay",children:[Object(A.jsx)("span",{className:"closebtn",onClick:function(){return c()},children:"\xd7"}),Object(A.jsxs)("div",{className:"overlay-content",children:[Object(A.jsx)("a",{href:"https://tech-career-alternative.firebaseapp.com/",target:"_blank",rel:"noreferrer",children:Object(A.jsx)("img",{src:"/frontfolio/images/tech-career-logo.png",width:"200px",alt:""})}),Object(A.jsx)(s.b,{to:"/",onClick:function(){return c()},children:"HOME"}),Object(A.jsx)(s.b,{to:"/favorites",onClick:function(){return c()},children:"FAVORITES"}),Object(A.jsx)(S.a,{onClick:function(){t((function(e){return"dark"===e?"light":"dark"})),c()},style:"dark"===n?{backgroundColor:"white",color:"black"}:{backgroundColor:"#424242",color:"white"},children:"dark"===n?"light mode":"dark mode"},"1"),Object(A.jsx)(S.a,{onClick:function(){r(!i),c()},children:i?"Fahrenheit":"Celsius"},"2")]})]}),Object(A.jsx)("span",{style:{fontSize:"30px",cursor:"pointer",color:"#1c47af"},onClick:function(){document.getElementById("fullNav").style.height="100%"},children:"\u2630"})]})})),D=Object(o.b)((function(e){return{isC:e.isC}}),(function(e){return{setIsC:function(t){return e(T(t))}}}))((function(e){var t=Object(u.g)().pathname,n=Object(r.useState)(window.innerWidth),i=Object(l.a)(n,2),c=i[0],a=i[1],o=Object(r.useState)(".")[1],d=e.isC,h=e.setIsC,j=e.theme,f=e.setTheme,v=function(){o((function(e){return"."===e?",":"."}))},p=function(){a(window.innerWidth)};return Object(r.useEffect)((function(){window.addEventListener("resize",p)}),[]),Object(r.useEffect)((function(){v()}),[t]),Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("nav",{className:"navbar margin",style:{backgroundColor:"#69c0ff"},children:Object(A.jsx)(z.a,{style:{backgroundColor:"#bae7ff"},ghost:!1,title:"Herolo",subTitle:"Weather Task",extra:c>460?[Object(A.jsx)(S.a,{onClick:function(){return f((function(e){return"dark"===e?"light":"dark"}))},style:"dark"===j?{backgroundColor:"white",color:"black"}:{backgroundColor:"#424242",color:"white"},children:"dark"===j?"light mode":"dark mode"},"1"),Object(A.jsx)(S.a,{onClick:function(){return h(!d)},children:d?"Fahrenheit":"Celsius"},"2"),Object(A.jsxs)(s.b,{to:"/favorites",children:[Object(A.jsx)(S.a,{onClick:v,type:document.location.href.indexOf("/favorites")>-1?"primary":"",children:"favorites"},"3")," "]}),Object(A.jsx)(s.b,{to:"/",children:Object(A.jsx)(S.a,{onClick:v,type:-1===document.location.href.indexOf("/favorites")?"primary":"",children:"home"},"4")})]:[Object(A.jsx)(K,{setTheme:f,theme:j})]})})})})),U=function(){var e=Object(u.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},B=function(){var e=Object(r.useState)("light"),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(A.jsxs)(s.a,{children:[Object(A.jsx)(U,{}),Object(A.jsxs)("div",{className:"App",style:"dark"===n?{backgroundColor:"gray"}:null,children:[Object(A.jsx)(D,{theme:n,setTheme:i}),Object(A.jsxs)(u.d,{children:[Object(A.jsx)(u.b,{path:"/",exact:!0,children:Object(A.jsx)(R,{theme:n})}),Object(A.jsx)(u.b,{path:"/favorites",children:Object(A.jsx)(V,{})}),Object(A.jsx)(u.a,{to:"/"})]})]})]})},X=function(e,t,n){Object(r.useEffect)((function(){fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&q=".concat(e,"&language=en-us")).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){console.log(e)}))}),[e])},H=function(e,t,n,i){Object(r.useEffect)((function(){e&&fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&language=en-us&details=true")).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(){return i(!0)}))}),[e])},Y=function(e,t,n){Object(r.useEffect)((function(){e&&fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&language=en-us&details=true&metric=true")).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(){return n(!0)}))}),[e,t])},J=Object(o.b)((function(e){return{currentCity:e.currentCity,cityName:e.cityName}}),(function(e){return{setCurrentCity:function(t){return e(E(t))},setAutoComplete:function(t){return e(N(t))},setCurrentWeather:function(t){return e({type:b,payload:t})},setAllWeather:function(t){return e(k(t))},setWeeklyWeather:function(t){return e({type:x,payload:t})},setApiError:function(t){return e(W(t))}}}))((function(e){var t=e.currentCity,n=e.cityName,i=e.setAutoComplete,c=e.setCurrentWeather,a=e.setAllWeather,o=e.setWeeklyWeather,l=e.setCurrentCity,s=e.setApiError;return X(n,i,s),H(null===t||void 0===t?void 0:t.Key,c,a,s),Y(null===t||void 0===t?void 0:t.Key,o,s),Object(r.useEffect)((function(){!function(e,t){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(n){var r=n.coords.latitude,i=n.coords.longitude;fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&q=".concat(r,"%2C").concat(i,"&language=en-us&details=true&toplevel=false")).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(){return t(!0)}))}),(function(){e({Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv"})}))}(l,s)}),[]),null})),G=(n(192),function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"Error-Container",children:[Object(A.jsxs)("div",{className:"MainGraphic",children:[Object(A.jsx)("svg",{className:"Hummingbird",viewBox:"0 0 55 41",xmlns:"http://www.w3.org/2000/svg",children:Object(A.jsx)("path",{d:"M35.5 5L54.7.6H32.3L35.5 5zM12.4 40.8l10.3-10.1-6.2-6.7-4.1 16.8zM33.8 5.3L30.5.8l-5.4 4 8.7.5zM20.8 4.6L8.8 0l1.9 4.1 10.1.5zM0 5l15.2 15.4 7.5-14.2L0 5zM34.2 6.8l-9.9-.5-8 15.2 7.4 8.1 8-7.9 2.5-14.9z"})}),Object(A.jsx)("svg",{className:"Cog",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:Object(A.jsx)("path",{d:"M29.18 19.07c-1.678-2.908-.668-6.634 2.256-8.328L28.29 5.295c-.897.527-1.942.83-3.057.83-3.36 0-6.085-2.743-6.085-6.126h-6.29c.01 1.043-.25 2.102-.81 3.07-1.68 2.907-5.41 3.896-8.34 2.21L.566 10.727c.905.515 1.69 1.268 2.246 2.234 1.677 2.904.673 6.624-2.24 8.32l3.145 5.447c.895-.522 1.935-.82 3.044-.82 3.35 0 6.066 2.725 6.083 6.092h6.29c-.004-1.035.258-2.08.81-3.04 1.676-2.902 5.4-3.893 8.325-2.218l3.145-5.447c-.9-.515-1.678-1.266-2.232-2.226zM16 22.48c-3.578 0-6.48-2.902-6.48-6.48S12.423 9.52 16 9.52c3.578 0 6.48 2.902 6.48 6.48s-2.902 6.48-6.48 6.48z"})})]}),Object(A.jsx)("h1",{className:"MainTitle",children:"The allowed number of requests per day has been exceeded."}),Object(A.jsx)("p",{className:"Main Description",children:"if you want to see the weather around the world within this web you can come back tomorrow ant it will work!"})]})})});fetch("https://api.countapi.xyz/update/weatherApp/yudaBayana/?amount=1");var Z=Object(o.b)((function(e){return{apiError:e.apiError}}))((function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(J,{}),e.apiError?Object(A.jsx)(G,{}):Object(A.jsx)(B,{})]})})),q=n(53),P=n(54),Q=[];var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=e.find((function(e){return e.Key===t.payload.Key}));return n?e:[].concat(Object(P.a)(e),[t.payload]);case f:var r=e.findIndex((function(e){return e.Key===t.payload.Key}));return e.splice(r,1),e;default:return e}},ee="current city";var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type===p?t.payload:e},ne=[];var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;return t.type===m?t.payload:e},ie={};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return t.type===b?t.payload:e},ae=[];var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;return t.type===x?t.payload:e},le=[];var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[].concat(Object(P.a)(e),Object(P.a)(t.payload));case O:return[];default:return e}},ue=!0;var de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return t.type===C?t.payload:e};var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===v?t.payload:e},je=!1;var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;return t.type===g?t.payload:e},ve={favorites:Q,cityName:"",currentCity:ee,autoComplete:ne,currentWeather:ie,allWeather:le,weeklyWeather:ae,isC:ue,apiError:je},pe=Object(q.a)({favorites:$,cityName:he,currentCity:te,autoComplete:re,currentWeather:ce,allWeather:se,weeklyWeather:oe,isC:de,apiError:fe}),me=Object(q.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),be=Object(q.c)(pe,ve,me);a.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(o.a,{store:be,children:Object(A.jsx)(Z,{})})}),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.4edc2231.chunk.js.map