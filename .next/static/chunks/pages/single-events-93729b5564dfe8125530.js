(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6625],{7251:function(e,s,a){"use strict";var t=a(5893),i=(a(7294),a(1664));s.Z=function(e){var s=e.pageTitle,a=e.homePageUrl,n=e.homePageText,r=e.activePageText;return(0,t.jsxs)("div",{className:"page-title-area",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"page-title-content",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:a,children:(0,t.jsx)("a",{children:n})})}),(0,t.jsx)("li",{className:"active",children:r})]}),(0,t.jsx)("h2",{children:s})]})}),(0,t.jsx)("div",{className:"shape9",children:(0,t.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},8771:function(e,s,a){"use strict";var t=a(9713);function i(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?i(Object(a),!0).forEach((function(s){t(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}s.default=function(e,s){var a=r.default,t={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?t.loader=function(){return e}:"function"===typeof e?t.loader=e:"object"===typeof e&&(t=n(n({},t),e));(t=n(n({},t),s)).loadableGenerated&&delete(t=n(n({},t),t.loadableGenerated)).loadableGenerated;if("boolean"===typeof t.ssr){if(!t.ssr)return delete t.ssr,c(a,t);delete t.ssr}return a(t)};l(a(7294));var r=l(a(4860));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,s){return delete s.webpack,delete s.modules,e(s)}},1083:function(e,s,a){"use strict";var t;Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var i=((t=a(7294))&&t.__esModule?t:{default:t}).default.createContext(null);s.LoadableContext=i},4860:function(e,s,a){"use strict";var t=a(9713),i=a(4575),n=a(3913);function r(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?r(Object(a),!0).forEach((function(s){t(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function c(e,s){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,s){if(!e)return;if("string"===typeof e)return o(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,s)}(e))||s&&e&&"number"===typeof e.length){a&&(e=a);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){l=!0,n=e},f:function(){try{r||null==a.return||a.return()}finally{if(l)throw n}}}}function o(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=e[a];return t}Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var d,u=(d=a(7294))&&d.__esModule?d:{default:d},m=a(7161),h=a(1083);var x=[],f=[],j=!1;function b(e){var s=e(),a={loading:!0,loaded:null,error:null};return a.promise=s.then((function(e){return a.loading=!1,a.loaded=e,e})).catch((function(e){throw a.loading=!1,a.error=e,e})),a}var p=function(){function e(s,a){i(this,e),this._loadFn=s,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,a=this._opts;s.loading&&("number"===typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),a.delay)),"number"===typeof a.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),a.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(s){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function v(e){return function(e,s){var a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},s),t=null;function i(){if(!t){var s=new p(e,a);t={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return t.promise()}if(!j&&"function"===typeof a.webpack){var n=a.webpack();f.push((function(e){var s,a=c(n);try{for(a.s();!(s=a.n()).done;){var t=s.value;if(-1!==e.indexOf(t))return i()}}catch(r){a.e(r)}finally{a.f()}}))}var r=function(e,s){i();var n=u.default.useContext(h.LoadableContext),r=m.useSubscription(t);return u.default.useImperativeHandle(s,(function(){return{retry:t.retry}}),[]),n&&Array.isArray(a.modules)&&a.modules.forEach((function(e){n(e)})),u.default.useMemo((function(){return r.loading||r.error?u.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:t.retry}):r.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(r.loaded),e):null}),[e,r])};return r.preload=function(){return i()},r.displayName="LoadableComponent",u.default.forwardRef(r)}(b,e)}function g(e,s){for(var a=[];e.length;){var t=e.pop();a.push(t(s))}return Promise.all(a).then((function(){if(e.length)return g(e,s)}))}v.preloadAll=function(){return new Promise((function(e,s){g(x).then(e,s)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(s){var a=function(){return j=!0,s()};g(f,e).then(a,a)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var y=v;s.default=y},3594:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return j}});var t=a(5893),i=a(7294),n=a(7251),r=a(5982),l=function(){var e=i.useState(""),s=(0,r.Z)(e,2),a=s[0],n=s[1],l=i.useState(""),c=(0,r.Z)(l,2),o=c[0],d=c[1],u=i.useState(""),m=(0,r.Z)(u,2),h=m[0],x=m[1],f=i.useState(""),j=(0,r.Z)(f,2),b=j[0],p=j[1];i.useEffect((function(){var e=setInterval((function(){v()}),1e3);return function(){return clearInterval(e)}}),[]);var v=function(){var e=new Date("August 23, 2022 17:00:00 PDT"),s=Date.parse(e)/1e3,a=new Date,t=s-Date.parse(a)/1e3,i=Math.floor(t/86400),r=Math.floor((t-86400*i)/3600),l=Math.floor((t-86400*i-3600*r)/60),c=Math.floor(t-86400*i-3600*r-60*l);r<"10"&&(r="0"+r),l<"10"&&(l="0"+l),c<"10"&&(c="0"+c),n(i),d(r),x(l),p(c)};return(0,t.jsxs)("div",{id:"timer",className:"flex-wrap d-flex justify-content-center",children:[(0,t.jsxs)("div",{id:"days",className:"align-items-center flex-column d-flex justify-content-center",children:[a," ",(0,t.jsx)("span",{children:"Days"})]}),(0,t.jsxs)("div",{id:"hours",className:"align-items-center flex-column d-flex justify-content-center",children:[o," ",(0,t.jsx)("span",{children:"Hours"})]}),(0,t.jsxs)("div",{id:"minutes",className:"align-items-center flex-column d-flex justify-content-center",children:[h," ",(0,t.jsx)("span",{children:"Minutes"})]}),(0,t.jsxs)("div",{id:"seconds",className:"align-items-center flex-column d-flex justify-content-center",children:[b," ",(0,t.jsx)("span",{children:"Seconds"})]})]})},c=a(1664),o=function(){return(0,t.jsxs)("div",{className:"events-details-info",children:[(0,t.jsxs)("ul",{className:"info",children:[(0,t.jsx)("li",{className:"price",children:(0,t.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,t.jsx)("span",{children:"Cost"}),"$149"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,t.jsx)("span",{children:"Total Slot"}),"1500"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,t.jsx)("span",{children:"Booked Slot"}),"350"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,t.jsx)("span",{children:"Pay With"}),(0,t.jsxs)("div",{className:"payment-method",children:[(0,t.jsx)("img",{src:"/images/payment/payment1.png",className:"shadow",alt:"image"}),(0,t.jsx)("img",{src:"/images/payment/payment2.png",className:"shadow",alt:"image"}),(0,t.jsx)("img",{src:"/images/payment/payment3.png",className:"shadow",alt:"image"}),(0,t.jsx)("img",{src:"/images/payment/payment4.png",className:"shadow",alt:"image"})]})]})})]}),(0,t.jsxs)("div",{className:"btn-box",children:[(0,t.jsx)(c.default,{href:"#",children:(0,t.jsxs)("a",{className:"default-btn",children:[(0,t.jsx)("i",{className:"flaticon-user"})," Book Now ",(0,t.jsx)("span",{})]})}),(0,t.jsxs)("p",{children:["You must ",(0,t.jsx)(c.default,{href:"#",children:(0,t.jsx)("a",{children:"login"})})," before register event."]})]}),(0,t.jsx)("div",{className:"events-share",children:(0,t.jsxs)("div",{className:"share-info",children:[(0,t.jsxs)("span",{children:["Share This Course ",(0,t.jsx)("i",{className:"flaticon-share"})]}),(0,t.jsxs)("ul",{className:"social-link",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-facebook"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-instagram"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-linkedin"})})})]})]})})]})},d=a(4942);function u(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?u(Object(a),!0).forEach((function(s){(0,d.Z)(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}var h=(0,a(5152).default)((function(){return a.e(5518).then(a.t.bind(a,8694,23))}),{loadableGenerated:{webpack:function(){return[8694]},modules:["..\\components\\SingleEvents\\EventParticipants.js -> react-owl-carousel3"]}}),x={loop:!0,nav:!1,dots:!0,autoplayHoverPause:!0,autoplay:!0,margin:30,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:1},576:{items:2},768:{items:2},992:{items:3}}},f=function(){var e=i.useState(!1),s=(0,r.Z)(e,2),a=s[0],n=s[1];return i.useEffect((function(){n(!0)}),[]),(0,t.jsx)("div",{className:"advisor-area bg-f9f9f9 ptb-100",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"section-title",children:(0,t.jsx)("h2",{children:"Event Participants"})}),a?(0,t.jsxs)(h,m(m({className:"advisor-slides-two owl-carousel owl-theme"},x),{},{children:[(0,t.jsxs)("div",{className:"single-advisor-item",children:[(0,t.jsxs)("div",{className:"advisor-image",children:[(0,t.jsx)("img",{src:"/images/advisor/advisor4.jpg",alt:"image"}),(0,t.jsxs)("ul",{className:"social-link",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-facebook"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-instagram"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-linkedin"})})})]})]}),(0,t.jsxs)("div",{className:"advisor-content",children:[(0,t.jsx)("h3",{children:(0,t.jsx)(c.default,{href:"#",children:(0,t.jsx)("a",{children:"James Andy"})})}),(0,t.jsx)("span",{children:"Project Management Expert"})]})]}),(0,t.jsxs)("div",{className:"single-advisor-item",children:[(0,t.jsxs)("div",{className:"advisor-image",children:[(0,t.jsx)("img",{src:"/images/advisor/advisor5.jpg",alt:"image"}),(0,t.jsxs)("ul",{className:"social-link",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-facebook"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-instagram"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-linkedin"})})})]})]}),(0,t.jsxs)("div",{className:"advisor-content",children:[(0,t.jsx)("h3",{children:(0,t.jsx)(c.default,{href:"#",children:(0,t.jsx)("a",{children:"Jassica Hische"})})}),(0,t.jsx)("span",{children:"Illustrator Expert"})]})]}),(0,t.jsxs)("div",{className:"single-advisor-item",children:[(0,t.jsxs)("div",{className:"advisor-image",children:[(0,t.jsx)("img",{src:"/images/advisor/advisor6.jpg",alt:"image"}),(0,t.jsxs)("ul",{className:"social-link",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-facebook"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-instagram"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-linkedin"})})})]})]}),(0,t.jsxs)("div",{className:"advisor-content",children:[(0,t.jsx)("h3",{children:(0,t.jsx)(c.default,{href:"#",children:(0,t.jsx)("a",{children:"Alister Cock"})})}),(0,t.jsx)("span",{children:"QA Project Expert"})]})]}),(0,t.jsxs)("div",{className:"single-advisor-item",children:[(0,t.jsxs)("div",{className:"advisor-image",children:[(0,t.jsx)("img",{src:"/images/advisor/advisor7.jpg",alt:"image"}),(0,t.jsxs)("ul",{className:"social-link",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-facebook"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-instagram"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",className:"d-block",target:"_blank",children:(0,t.jsx)("i",{className:"bx bxl-linkedin"})})})]})]}),(0,t.jsxs)("div",{className:"advisor-content",children:[(0,t.jsx)("h3",{children:(0,t.jsx)(c.default,{href:"#",children:(0,t.jsx)("a",{children:"Lina Ninja"})})}),(0,t.jsx)("span",{children:"QA Project Expert"})]})]})]})):""]})})},j=function(){return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(n.Z,{pageTitle:"Global Conference on Business Management and Economics",homePageUrl:"/",homePageText:"Home",activePageText:"Global Conference on Business Management and Economics"}),(0,t.jsxs)("div",{className:"events-details-area pb-100",children:[(0,t.jsxs)("div",{className:"events-details-image",children:[(0,t.jsx)("img",{src:"/images/events/events-details.jpg",alt:"image"}),(0,t.jsx)(l,{})]}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-lg-8 col-md-12",children:[(0,t.jsx)("div",{className:"events-details-header",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bx bx-calendar"}),"Wed, 20 May, 2020"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bx bx-map"}),"Wed, 20 May, 2020"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bx bx-time"}),"Wed, 20 May, 2020"]})]})}),(0,t.jsx)("div",{className:"events-details-location",children:(0,t.jsx)("div",{id:"map",children:(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.76628212207!2d-117.46956773183814!3d33.946138126927174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca6df7ff47dbb%3A0xf7a1d705135e0ae8!2sRiverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1592581354634!5m2!1sen!2sbd"})})}),(0,t.jsxs)("div",{className:"events-details-desc",children:[(0,t.jsx)("h3",{children:"About The Event"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}),(0,t.jsx)("h3",{children:"Where the event?"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}),(0,t.jsx)("h3",{children:"Who this event is for?"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."})]})]}),(0,t.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,t.jsx)(o,{})})]})})]}),(0,t.jsx)(f,{})]})}},516:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-events",function(){return a(3594)}])},5152:function(e,s,a){e.exports=a(8771)}},function(e){e.O(0,[9774,2888,179],(function(){return s=516,e(e.s=s);var s}));var s=e.O();_N_E=s}]);