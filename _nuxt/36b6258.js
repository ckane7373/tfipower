(window.webpackJsonp=window.webpackJsonp||[]).push([[37,4,5],{440:function(t,e,n){"use strict";var r=n(203),o=n(93),c=n(94),l=n(0),h=n(5),d=Object(h.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},441:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2d62e390",content,!0,{sourceMap:!1})},442:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=r},443:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{src:"7.jpeg"},{src:"2.jpg"}]}}},o=n(64),c=n(71),l=n.n(c),h=n(451),d=n(449),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{"hide-delimiters":"","show-arrows-on-hover":"","hide-delimiter-background":"",continuous:"",cycle:""}},t._l(t.items,(function(t,i){return n("v-carousel-item",{key:i,attrs:{src:t.src}})})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCarousel:h.a,VCarouselItem:d.a})},444:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("c664d9c6",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{msg:"CLEAN ENERGY PROJECTS"},{msg:"WE EMPOWER THE NEXT GENERATION"},{msg:"WE HELP DRIVE INNOVATION"},{msg:"WE ARE HERE TO SERVE"}]}}},o=(n(446),n(64)),c=n(71),l=n.n(c),h=n(451),d=n(449),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-0 ma-0"},[n("v-carousel",{attrs:{"show-arrows-on-hover":"","hide-delimiter-background":"","hide-delimiters":"",interval:"9000",continuous:"",cycle:"",height:"50"}},t._l(t.items,(function(e,i){return n("v-carousel-item",{key:i,attrs:{src:"item.src"}},[n("div",{staticClass:"d-flex justify-space-around align-center"},[n("span",{staticClass:"pa-2 ma-2 green--text text--darken-3 text-subtitle-1"},[t._v(t._s(e.msg))])])])})),1)],1)}),[],!1,null,"60a2eec0",null);e.default=component.exports;l()(component,{VCarousel:h.a,VCarouselItem:d.a})},446:function(t,e,n){"use strict";n(444)},447:function(t,e,n){var r=n(15)(!1);r.push([t.i,"*[data-v-60a2eec0]{box-sizing:border-box;padding:0;margin-top:0}",""]),t.exports=r},449:function(t,e,n){"use strict";n(9),n(6),n(8),n(10),n(7),n(11);var r=n(1),o=n(440),c=n(159),l=n(5),h=n(0),d=n(49);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(l.a)(o.a,d.a);e.a=f.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:v(v({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(h.k)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},451:function(t,e,n){"use strict";n(9),n(6),n(8),n(10),n(7),n(11);var r=n(1),o=(n(24),n(65),n(441),n(162)),c=n(130),l=n(58),h=n(204),d=n(55),m=d.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return d.a.options.computed.classes.call(this)}},methods:{genData:d.a.options.methods.genData}}),v=n(0),f=n(13);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return y(y({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(f.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(m,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(h.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(v.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},556:function(t,e,n){"use strict";n.r(e);var r=n(445),o=n(443),c={components:{carou:r.default,carousa:o.default}},l=n(64),h=n(71),d=n.n(h),m=n(427),v=n(159),f=n(429),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"justify-center pt-12 ma-0 white"},[n("v-row",{staticClass:"justify-center pt-12 d-flex",attrs:{align:"center","align-content":"center",justify:"center"}},[n("v-col",{staticClass:"justify-center d-flex",attrs:{xs:"12",sm:"12",md:"6",lg:"4",xl:"3",cols:"12","align-content":"center",justify:"center"}},[n("div",{staticClass:"text-h4 text-sm-h3 text-md-h3 grey--text text--darken-6"},[t._v("\n        Company Profile\n      ")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex",attrs:{align:"center","align-content":"center",justify:"center"}},[n("v-col",[n("carou")],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex",attrs:{align:"center","align-content":"center",justify:"center"}},[n("v-col",{attrs:{cols:"10",sm:"8",md:"7",lg:"4",xl:"4",align:"center","align-content":"center",justify:"center"}},[n("v-img",{attrs:{contain:"",src:"city.png",width:"100vw"}})],1)],1),t._v(" "),n("div",{staticClass:"pa-8 ma-10 grey lighten-3"},[n("v-row",{staticClass:"d-flex",attrs:{align:"center","align-content":"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"3",sm:"2",md:"1",lg:"1",xl:"1",align:"center","align-content":"center",justify:"center"}},[n("v-img",{attrs:{src:"./overview1.png"}})],1),t._v(" "),n("v-col",{staticClass:"text-center align-center align-content-center font-weight-bold text-h3",attrs:{cols:"12"}},[n("div",{staticClass:"text-center align-center align-content-center text-h5 cyan--text darken-2"},[t._v("\n          GROUP OVERVIEW\n        ")])])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"black--text darken-2",attrs:{cols:"10"}},[n("p",{staticClass:"grey--text darken-2"},[t._v("\n          Ten Forward International GROUP is an Infrastructure Development and Investment company based in Accra.  The group is active in the areas of Renewable Power Generation, Minerals Explorations, Software Development and Cyber Security Services, and Specification of High Performance Architectural Glass to the industry.\n        ")])])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0 d-flex",attrs:{align:"center","align-content":"center",justify:"center"}},[n("v-col",{staticClass:"flex-wrap ma-0 pa-0 d-flex align-center align-content-center",attrs:{xs:"4",sm:"3",md:"2",lg:"1",xl:"1",cols:"4",align:"center","align-content":"center",justify:"center"}},[n("v-img",{attrs:{width:"200",src:"./list.png"}})],1),t._v(" "),n("v-col",{staticClass:"flex-wrap pa-0 ma-0 black--text d-flex ",attrs:{xs:"11",sm:"11",md:"9",lg:"10",xl:"10",cols:"11",align:"end","align-content":"start",justify:"end"}},[n("div",{staticClass:"pt-8"},[n("p",{staticClass:"text-left"},[t._v("\n          Ten Forward Group is an Infrastructure Investment and Development Holding Company headquartered in Accra.  The Group focuses on infrastructure projects that accelerates socio-economic development, and have sustainable environmental benefits.  The Group leverages its local knowledge & experiences to identify key investment opportunities, undertake the project development, arrange project financing, and execute/manage the business to optimize returns to all stakeholders.\n        ")]),n("p",{staticClass:"text-left"},[t._v("\n          Ten Forward Group works in close collaboration with the central, local governments, and the communities to implement infrastructure projects that creates employment and wealth for society at large.\n        ")])])])],1),t._v(" "),n("div",{staticClass:"pa-8 ma-10 grey lighten-3"},[n("v-row",{staticClass:"d-flex",attrs:{align:"center","align-content":"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"3",sm:"2",md:"1",lg:"1",xl:"1",align:"center","align-content":"center",justify:"center"}}),t._v(" "),n("v-col",{staticClass:"text-center align-center align-content-center font-weight-bold text-h3",attrs:{cols:"12"}},[n("div",{staticClass:"text-center align-center align-content-center text-h5 cyan--text darken-2"},[t._v("\n          COUNTRY SUMMARY\n        ")])])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"black--text darken-2",attrs:{cols:"10"}},[n("p",{staticClass:"grey--text darken-2"},[t._v("\n          Ghana, located in the Gulf of Guinea, truly lays claim to the title “Centre of the\n          world” as its latitude and longitude are the closest landmass to the intersection of\n          the equator and the Greenwich Meridian. Ghana recently became the host nation\n          for the Secretariat of the African Continental Free Trade Agreement. The Country’s\n          traditional exports are gold, oil, diamond, bauxite, manganese, cocoa, and timber.\n          The nation of 30 million inhabitants has an average age of 21 years, a literacy rate\n          of 75% and a GDP equivalent to US$75 billion. The per capita income is US$2500.\n          Ghana is a multi-party electoral state with an Executive and Legislative branch and\n          an independent Judiciary.\n        ")])])],1)],1),t._v(" "),n("v-row",{staticClass:"pa-0 ma-0"},[n("v-col",{staticClass:"text-center ma-0 pa-0 align-center align-content-center font-weight-bold text-h3 light-green--text darken-4",attrs:{cols:"10"}},[n("div",{staticClass:"pt-10 text-center align-center align-content-center text-h5 grey--text darken-4"},[t._v("\n        MESSAGE FROM THE CHAIRMAN\n      ")])])],1),t._v(" "),n("v-row",{staticClass:"pa-0 ma-0",attrs:{align:"center","align-content":"center",justify:"center"}},[n("v-col",{staticClass:"pt-3 ma-0 grey--text darken-3 ",attrs:{xs:"11",sm:"11",md:"12",lg:"9",xl:"9",cols:"11"}},[n("div",{staticClass:"pt12 ma-0"},[n("p",{staticClass:"pt-12 text-subtitle-4"},[t._v("\n          The West Africa sub region has been undergoing rapid economic and political transformations with growth rates translating to increases in consumption income.  With a population of 350 million and a majority under 30 years of age, West Africa offers tremendous investment opportunities for the right investor.  Gone are the days of military dictatorships, which have given way to a burst of electoral politics and free market economic policies that are fueling a surge of middle class consumers.  Some Leaders are responding to the hopes and aspirations of their citizens by fomenting an environment conducive for FDI flows. Nowhere is this politico-economic trend truer than in Ghana, a country renowned for its political stability and peaceful atmosphere.  The government of Ghana has issued a clarion call to the private sector to partner the public sector to facilitate the rapid industrialization of the economy in a manner that engenders wealth creation to benefit all communities across the nation.\n        ")]),n("p",{staticClass:"pt-2 text-subtitle-4"},[t._v("\n          Ten Forward Group is an active corporate citizen that is dedicated to investing in the development of infrastructure projects with long term objective to create sustainable businesses that generates employment for the masses and creates wealth for all stakeholders.  We welcome investment partners to join our quest to build the next African Unicorn.\n        ")])])]),t._v(" "),n("v-col",{staticClass:"pt-3 ma-0 align-center text--black align-content-center",attrs:{sm:"6",md:"4",lg:"3",xl:"3"}},[n("div",[n("v-img",{attrs:{src:"./NSP.jpeg"}}),t._v(" "),n("div",{staticClass:"justify-center d-flex pa-2 black--text"},[t._v("\n          NANA SARFO PREMPEH\n        ")])],1)])],1),t._v(" "),n("v-row",{staticClass:"pa-0 ma-0"},[n("v-col",{staticClass:"text-center ma-0 pa-0 align-center align-content-center font-weight-bold text-h3 light-green--text darken-4",attrs:{cols:"10"}},[n("div",{staticClass:"pt-10 text-center align-center align-content-center text-h5 grey--text darken-4"},[t._v("\n        THE GROUP PROJECTS\n      ")])])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"justify-end align-end align-content-end",attrs:{cols:"2"}},[n("v-img",{attrs:{src:"./sun.gif",width:"100"}})],1),t._v(" "),n("v-col",{staticClass:"text-center align-center align-content-center font-weight-bold text-h3",attrs:{cols:"9"}},[n("div",{staticClass:"text-center align-center align-content-center text-h5 light-green--text darken-4"},[t._v("\n        Hiowe Mahe-Shai Solar Power Plant\n      ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-img",{attrs:{src:"./solar.png",width:"300"}})],1)],1),t._v(" "),n("v-row",{staticClass:"pa-2 ma-2"},[n("v-col",{staticClass:"text-start align-center align-content-center black--text darken-2",attrs:{cols:"10"}},[n("div",[n("p",[t._v("\n          Phase one of the Hiowe Mahe-Shai Solar Power Plant shall soon commence construction in the Shai-Osudoku District of Greater Accra Region of Ghana.  The initial phase of 20MW is scheduled to reach a Commercial Operation Date (COD) in January 2021.  The Plant is designed to generate 91 gigawatt hours of electric power annually when the full 60MW Capacity is completed.  The Plant output will be fed directly onto the national electric grid.\n        ")]),t._v(" "),n("P",[t._v("The project is in line with the Government commitment to generating clean and affordable energy to power the national industrialization policy.  The siting of the Plant will have the additional benefit of becoming a magnet for businesses to locate and create jobs for the community.")])],1)])],1),t._v(" "),n("carousa"),t._v(" "),n("v-row",{staticClass:"pa-0 ma-0"},[n("v-col",{staticClass:"text-center ma-0 pa-0 align-center align-content-center font-weight-bold text-h3 light-green--text darken-4",attrs:{cols:"10"}},[n("div",{staticClass:"pt-10 text-center align-center align-content-center text-h5 grey--text darken-4"},[t._v("\n        OUR LOCATION\n      ")])])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12"}},[n("div",{staticClass:"mapouter"},[n("div",{staticClass:"gmap_canvas"},[n("iframe",{attrs:{id:"gmap_canvas",width:"100%",height:"540",src:"https://maps.google.com/maps?q=5%C2%B036'40.9%22N%200%C2%B011'45.0%22W&t=k&z=19&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])])])],1)],1)}),[],!1,null,"189b1ab8",null);e.default=component.exports;d()(component,{Carou:n(445).default,Carousa:n(443).default}),d()(component,{VCol:m.a,VImg:v.a,VRow:f.a})}}]);