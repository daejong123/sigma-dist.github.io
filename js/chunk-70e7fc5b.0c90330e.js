(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70e7fc5b"],{"1d02":function(A,t,e){},"28bc":function(A,t,e){A.exports=e.p+"img/frequency.0819bd63.png"},"2ec7":function(A,t,e){"use strict";e("1d02")},"3b86":function(A,t,e){},"3f7f":function(A,t,e){},"3f98":function(A,t,e){"use strict";e("3b86")},"4d7a":function(A,t,e){"use strict";e("3f7f")},"721c":function(A,t,e){"use strict";e("c3c8")},"77c8":function(A,t,e){A.exports=e.p+"img/ultralow.305a06b0.png"},"7abe":function(A,t,e){"use strict";e.r(t);var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("home-area"),e("company-area",{attrs:{"element-in-view":A.handleElementInView}}),e("technology-area",{attrs:{"element-in-view":A.handleElementInView}}),e("jd-area"),e("contact-area",{attrs:{"element-in-view":A.handleElementInView}}),e("uni-footer")],1)},a=[],i=e("9fe9"),s=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInLeft"}},[A.animate?e("div",{staticClass:"banner-wrap"},[e("div",{staticClass:"bg-ship"}),e("div",{attrs:{id:"banner"}},[e("div",{staticClass:"banner-content"},[e("transition",{attrs:{"enter-active-class":"animate__animated animate__backInDown"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:A.bannerTitle1,expression:"bannerTitle1"}],staticClass:"banner-content-item"},[A._v(" "+A._s(A.i18n.bannerData[0])+" ")])]),e("transition",{attrs:{"enter-active-class":"animate__animated animate__backInLeft"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:A.bannerTitle2,expression:"bannerTitle2"}],staticClass:"banner-content-item"},[A._v(" "+A._s(A.i18n.bannerData[1])+" ")])]),e("transition",{attrs:{"enter-active-class":"animate__animated animate__backInRight"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:A.bannerTitle3,expression:"bannerTitle3"}],staticClass:"banner-content-item"},[A._v(" "+A._s(A.i18n.bannerData[2])+" ")])])],1)])]):A._e()])},c=[],o={data:function(){return{animate:!1,bannerTitle1:!1,bannerTitle2:!1,bannerTitle3:!1}},mounted:function(){var A=this;setTimeout((function(){A.animate=!0})),setTimeout((function(){A.bannerTitle1=!0}),1e3),setTimeout((function(){A.bannerTitle2=!0}),2e3),setTimeout((function(){A.bannerTitle3=!0}),3e3)}},r=o,l=(e("4d7a"),e("2877")),u=Object(l["a"])(r,s,c,!1,null,"5cbbfe4a",null),d=u.exports,m=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{attrs:{id:"company"}},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__slideInLeft"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:A.commpanyShow,expression:"commpanyShow"}],staticClass:"company-img",attrs:{src:e("f796"),alt:""}})]),n("transition",{attrs:{"enter-active-class":"animate__animated animate__lightSpeedInRight"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:A.commpanyShow,expression:"commpanyShow"}],staticClass:"company-content"},[n("h2",{staticClass:"title"},[A._v(A._s(A.company.title))]),A._l(A.company.desc,(function(t,e){return n("p",{key:e,domProps:{innerHTML:A._s(t)}})}))],2)])],1)},f=[],h={props:{elementInView:{type:Function,required:!0}},data:function(){return{commpanyShow:!1}},computed:{company:function(){return this.i18n.company}},mounted:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)},methods:{scroll:function(){var A=this;this.elementInView("company",(function(){A.commpanyShow=!0}))}}},p=h,w=(e("2ec7"),Object(l["a"])(p,m,f,!1,null,"8df015d4",null)),v=w.exports,b=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"technology"}},[e("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInTopLeft"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:A.technologyShow,expression:"technologyShow"}],staticClass:"tech-left"},[e("h2",{staticClass:"tech-left-title"},[A._v(A._s(A.content.title))]),A._l(A.content.desc,(function(t,n){return e("p",{key:n},[A._v(" "+A._s(t)+" ")])}))],2)]),e("transition",{attrs:{"enter-active-class":"animate__animated animate__bounceInRight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:A.technologyShow,expression:"technologyShow"}],staticClass:"tech-right"},A._l(A.techData,(function(t,n){return e("div",{key:n,staticClass:"tech-right-item"},[e("img",{staticClass:"tech-right-item__img",attrs:{src:t.url,alt:""}}),A.isCnLocale()?e("span",{staticClass:"tech-right-item__label"},[A._v(" "+A._s(t.label)+" ")]):e("span",{staticClass:"tech-right-item__enlabel"},[A._v(" "+A._s(t.enLabel)+" ")])])})),0)])],1)},g=[],_=e("b13e"),y=e.n(_),S=e("28bc"),C=e.n(S),E=e("8f72"),I=e.n(E),T=e("de08"),V=e.n(T),F=e("77c8"),j=e.n(F),x={props:{elementInView:{type:Function,required:!0}},data:function(){return{technologyShow:!1,techData:[{label:"高效能设计",enLabel:"High Efficiency",url:y.a},{label:"高频控制",enLabel:"High Frequency",url:C.a},{label:"小型解决方案",enLabel:"Small Solution",url:I.a},{label:"超快瞬态响应",enLabel:"Super-Fast Transient",url:V.a},{label:"超低耗电设计",enLabel:"Ultra Low lq",url:j.a}]}},computed:{content:function(){return this.i18n.technology}},mounted:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)},methods:{scroll:function(){var A=this;this.elementInView("technology",(function(){A.technologyShow=!0}))}}},L=x,M=(e("8446"),Object(l["a"])(L,b,g,!1,null,"08464732",null)),N=M.exports,Q=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"jd"}},[e("div",{staticClass:"jd-wrap"}),e("h2",{staticClass:"jd-title"},[A._v(A._s(A.content.title))]),e("div",{staticClass:"jd-content"},A._l(A.content.jobs,(function(t,n){return e("div",{key:n,staticClass:"jd-content-item"},[A._v(" "+A._s(t)+" ")])})),0)])},k=[],D={computed:{content:function(){return this.i18n.jd}}},H=D,O=(e("721c"),Object(l["a"])(H,Q,k,!1,null,"6b5eb2ff",null)),Y=O.exports,J=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{attrs:{id:"contact"}},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__slideInLeft"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:A.contactShow,expression:"contactShow"}],staticClass:"company-img",attrs:{src:e("986b"),alt:""}})]),n("transition",{attrs:{"enter-active-class":"animate__animated animate__lightSpeedInRight"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:A.contactShow,expression:"contactShow"}],staticClass:"contact-wrap"},[n("h2",{staticClass:"title"},[A._v(A._s(A.content.title))]),A._l(A.content.desc,(function(t,e){return n("p",{key:e},[A._v(" "+A._s(t)+" ")])}))],2)])],1)},z=[],Z={props:{elementInView:{type:Function,required:!0}},data:function(){return{contactShow:!1}},computed:{content:function(){return this.i18n.contact}},mounted:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)},methods:{scroll:function(){var A=this;this.elementInView("contact",(function(){A.contactShow=!0}))}}},B=Z,U=(e("3f98"),Object(l["a"])(B,J,z,!1,null,"5a6d96dc",null)),W=U.exports,X={components:{UniFooter:i["a"],HomeArea:d,CompanyArea:v,TechnologyArea:N,JdArea:Y,ContactArea:W},data:function(){return{}},methods:{handleElementInView:function(A,t){var e=document.getElementById(A).offsetTop+0,n=document.documentElement.scrollTop;e>=n&&e<n+window.innerHeight&&setTimeout((function(){t()}),0)}}},G=X,R=Object(l["a"])(G,n,a,!1,null,null,null);t["default"]=R.exports},8446:function(A,t,e){"use strict";e("ecbd")},"8f72":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAB11BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOhdawAAAAnHRSTlMAAQIDBAUGBwgJCgsMDQ4SExQVFxkaGxwdHiEiIyQlJicoLS4vMTIzP0BCQ0RFRkxNTk9QUVJTVFVWV1hZWltcXV5fYWJjZGVmZ2hpamtsb3Bxc3R1gYKDhoeIiYuMjZWWnJ2nsrO0tba3v8DExcbHycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXp6u7v8PHy8/T19vv8/f52sue9AAAACXBIWXMAACHVAAAh1QEEnLSdAAAG0klEQVR4nO2d+VsTRxzGF7IbDIcltAqCghUPkKS1BFJFA8ZCQhLEWASL0nogYLlaVBStXErCVSRIIWZ3/9gGMJnZQNidSWZ2eZ55f8qTZ+Y7n2d2dufcdzmOiYmJiYmJiYmJSQfl8uY8QjLzudllNZVUXqhxuAN3CCngdtRcrLSaskRbZg88HglFZaKKhkce+21lmTML54P9H0SysAnF5vuD1UJmvJX3xyKUcHckRkZ7zmRSvb6pTYke7o6kzddeHpf31FCUMu4ucnSgFAuXt7+j2Bhgie/qMCq5wP1BH9wdzbUUIPO2L+jHK8sLnnw0Xt4d0pNXlj+2oLWKH+b15Y23CjsK76l3KdmljdEn3V1BQurqfjK6kfpAmirTzisMpTwfXnZUWY/nHyM1+DmWf9z6/e1XyjLFAe39tA8eOEji9I8oVwdfV2ZFuJqjXq0Zz0xB+cS1h9+QpIRV3PcJurTSmwpt2YT7n0Gu2ExrIVlKWIWemRgo+3OPtpHQ+TFQweK06xhhSIUsrmlQx9J4tZY8prvrIMtaG1XeOLFnDVTX+l0tM5GyfpAj9pBie9hTYd8XUF/9WoZBdqjPmKZ2vwGVzIDytfQeuQHoRr1Cnm+/6qFbPqDeJqyPQfpX2IXmCEIOduZJQPDIqpq6cgQ0oQ7MEs3ltnavrdyMmb0T3ETDlaqpL4STqTeq8AosbHi+JUlbQw7MO/Ys6AdCF1VT14BueVT9ehwkc8P73SoS3zvwpsDF40mE7Vq1xLkO0ICeFGGVV54YOomD5VgBip6CVtmgdtfxNwFwtwWrPNtWIsAW0pg2KUsPYHCrjeOFAEjchdXLCd7kPSO1Y7WJvC7A0KEWIe8OSBzMwyqObgQGTDoCAyYdgQGTjsCASUdgwKQjMGDSERgw6QiZFLc3VU6NgD6BpgScU2HztNWV5ygjJP41HjDv+DM+NfpvsL4AjlCw9+9QPcomMh1g58pepiU/NMG5F0j86zAacOnLRK5VMEmX/1pN/Jr4zmDAtyKJXBJYfZS/JOejEZfBgB+qnKfYvm8w4AdHDdgd2Q8JK3LdYMAnJw4H/vtbgwFzjav7KYFW6hFC0QE2NS2l5w1fM17HwfGNi+l4Q06krXlagx/zz2nqeNGJtiZIbbSW61o54IyQtHwD8dwfvfEw3xbed0xIDLWiHuChOIDnfaGUOpYW2pEPHNGccQieZSXwMnL9Up4i8S4F8eINjANddOd0Jif0dAs7cU5/Up6EmsHzONyItbdIGZjjr32dZixfwztFSRuYMzW+3IhGN16o7rFlgyEbwPGxW8uD3maESVEGDNkBzkwMmLQYMGkxYNJiwKTFgNV14mZvb8sJ3Nz0Bz/OF5FoNDLRiPkqFPXhZdPXRaDVpiMxvDQ7k5OkpaMwgOevQsspi8afIgnNKzKkJZfBJ6GCV8Eryyse9KNrFIEFfzh1ISXsM/BCiuAJHbBU1WbYpSpT88GLgS6DLgaary7vx93RkhPt6UZrQduZdgl+0YgL2vz1Q7YMlpqMt2Xg/Dc9b7yXNtxe84kXh/EacK/55vrhwIbba+7dPhzYcFu3vx014OZkk0hz/MBoe83gpktzwMN4e81fu7lF/68gwr1A4l8D7jXXD23K8ubAlfyDDin9ZLyOg8upqGv95fL+Y2B2r8dWYcBjYNyRO2inUwQGTDoCAyYdgQGTjsCASUdgwKQjMGDSERgw6QhZeBHbB17E9pF/EZt3g8SYr7rbqb7qng0zgec0zQSyY9ewSyz+U0/BrkFhiHEWqzyusGFoxxBjENsQYzOJsKBuiAFbjtzGK5AzV9j9PnsFriNkJ2iVw+omItZHIHkGpi5mMy1Tl1w/5Bali20OdNvH/Br2c2yQMdFMMXm+VFmh8udsGjIorJ/66Fs//Q5WP0VN1k+mIHhLR/rkwes8sGXxwuZaQU07fNWwfdmMiyqxpXkWsi8bO6cpk9CjMIhr088grlvjg/H0pMKCrw+vw8NQyR9rsAXfa809uxfesJBiMyir0RnIMRtTmBy2as7JD6Rsyk92VhUXWUi5SOblWYqKz3ZOKssUnyEsgpe9VWaWpc/jT3u6SHlod3U/Hd9MKVF+cxLl6tTpb4Vah8LLmVp0NceV5Y/NiMdC8r0fdeVFtfPluIKWOf14Z13IhsnxR4XtrV6W1FOX8Y4Ulg3oY/r9DM/0e6eSPW90sFXHeKEN6HTP2DpN4/r1sW6NlrjpJFQH++dj6kVlQ7G5/uC5DD8NEJepdPfjC9tE24a0HRp+5LeVZukzF6aSqku1De4OUh7aHe6G2ktV2fq8RUJH6QMiTExMTExMTExMTNr0P/unZOH3unEFAAAAAElFTkSuQmCC"},"986b":function(A,t,e){A.exports=e.p+"img/company-address.9f922b11.jpg"},"9ba9":function(A,t,e){},"9fe9":function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"footer"},[e("p",[A._v(" Copyright © "+A._s(A.currentYear)+" "),A.isCnLocale()?e("span",[A._v(" 六式格玛半导体 ")]):e("span",[A._v(" 6 Sigma Semiconductor")])])])},a=[],i={computed:{currentYear:function(){return(new Date).getFullYear()}}},s=i,c=(e("a27a"),e("2877")),o=Object(c["a"])(s,n,a,!1,null,"9c0a63de",null);t["a"]=o.exports},a27a:function(A,t,e){"use strict";e("9ba9")},b13e:function(A,t,e){A.exports=e.p+"img/efficency.8ba54ab3.png"},c3c8:function(A,t,e){},de08:function(A,t,e){A.exports=e.p+"img/speed.f00f0b2a.png"},ecbd:function(A,t,e){},f796:function(A,t,e){A.exports=e.p+"img/bg-ship-bridge.8db0a221.jpg"}}]);
//# sourceMappingURL=chunk-70e7fc5b.0c90330e.js.map