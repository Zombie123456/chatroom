webpackJsonp([3],{"3Lt7":function(t,e,n){"use strict";Number,String,Number,String;var r=["-moz-box-","-webkit-box-",""],a={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var n=0;n<r.length;n++)t[r[n]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox-item",style:this.style},[this._t("default")],2)},staticRenderFns:[]},o=n("VU/8")(a,i,!1,null,null,null);e.a=o.exports},"63CM":function(t,e,n){"use strict";var r=n("BEQ0");function a(t){return void 0===t?document.body:"string"==typeof t&&0===t.indexOf("?")?document.body:("string"==typeof t&&t.indexOf("?")>0&&(t=t.split("?")[0]),"body"===t||!0===t?document.body:t instanceof window.Node?t:document.querySelector(t))}var i={inserted:function(t,e,n){var r=e.value;t.className=t.className?t.className+" v-transfer-dom":"v-transfer-dom";var i=t.parentNode,o=document.createComment(""),s=!1;!1!==r&&(i.replaceChild(o,t),a(r).appendChild(t),s=!0),t.__transferDomData||(t.__transferDomData={parentNode:i,home:o,target:a(r),hasMovedOut:s})},componentUpdated:function(t,e){var n=e.value;if(function(t){if(!t)return!1;if("string"==typeof t&&t.indexOf("?")>0)try{return JSON.parse(t.split("?")[1]).autoUpdate||!1}catch(t){return!1}return!1}(n)){var i=t.__transferDomData,o=i.parentNode,s=i.home,u=i.hasMovedOut;!u&&n?(o.replaceChild(s,t),a(n).appendChild(t),t.__transferDomData=r({},t.__transferDomData,{hasMovedOut:!0,target:a(n)})):u&&!1===n?(o.replaceChild(t,s),t.__transferDomData=r({},t.__transferDomData,{hasMovedOut:!1,target:a(n)})):n&&a(n).appendChild(t)}},unbind:function(t,e){t.className=t.className.replace("v-transfer-dom",""),t.__transferDomData&&!0===t.__transferDomData.hasMovedOut&&t.__transferDomData.parentNode&&t.__transferDomData.parentNode.appendChild(t),t.__transferDomData=null}};e.a=i},"Bf+Z":function(t,e){},HQ2I:function(t,e){},KRg4:function(t,e,n){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},NXHL:function(t,e,n){"use strict";t.exports=function(t,e,n){if("function"==typeof Array.prototype.find)return t.find(e,n);n=n||this;var r,a=t.length;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(r=0;r<a;r++)if(e.call(n,t[r],r,t))return t[r]}},TX7P:function(t,e){},UnAD:function(t,e){},YxJB:function(t,e,n){"use strict";Number,String,String,String,String,String;var r={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){var t={"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction};return t}}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===this.orient,"vux-flex-row":"horizontal"===this.orient},style:this.styles},[this._t("default")],2)},staticRenderFns:[]};var i=n("VU/8")(r,a,!1,function(t){n("Bf+Z")},null,null);e.a=i.exports},ZiF0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("fZjL"),a=n.n(r),i=n("//Fk"),o=n.n(i),s=n("gyMJ"),u=n("0xDb"),l=n("pDNl"),c=n("rHil"),d=n("2sLL"),f=n("YxJB"),p=n("3Lt7"),h=n("wwIJ"),v=n("1DHf"),m=n("HD9R"),w=n("oWtu"),_=(w.a,Boolean,String,{name:"check-icon",components:{Icon:w.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}}),g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-check-icon",on:{click:t.updateValue}},[n("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===t.type&&t.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),t._v(" "),n("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===t.type&&t.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),t._v(" "),n("icon",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],attrs:{type:"circle"}}),t._v(" "),n("span",[t._t("default")],2)],1)},staticRenderFns:[]};var y=n("VU/8")(_,g,!1,function(t){n("HQ2I")},null,null).exports,b=n("63CM"),x=(l.a,c.a,d.a,f.a,p.a,h.a,v.a,m.a,b.a,function(t,e){return new o.a(function(e,n){t?Object(u.f)(t)?Object(s.b)(t).then(function(t){t.existed?e("用户名已经存在"):e("")}):e("请输入6~15位英数字"):e("请输入用户名称")})}),S=function(t){return new o.a(function(e,n){t?Object(u.c)(t)?e(""):e("请输入6~15位数字或字母"):e("请输入密码")})},k=function(t,e){return new o.a(function(n,r){n(e!==t?"两次输入密码不一致":"")})},D=function(t){return new o.a(function(e,n){e(t?"":"请输入昵称")})},C={name:"Register",data:function(){return{user:{username:"",nickname:"",password:"",confirmation_password:""},captcha_src:"",error:"",valid:!0,confirmPasswordIsValid:!0,inputErrors:{username:"",password:"",confirmation_password:"",nickname:""},validators:{username:x,password:S,confirmation_password:k,nickname:D},loading:!1}},methods:{validate:function(t,e){var n=this,r=t||this.user[e];"confirmation_password"===e?this.validators.confirmation_password(r,this.user.password).then(function(t){n.inputErrors[e]=t}):this.validators[e](r).then(function(t){n.inputErrors[e]=t,"password"===e&&n.validate(n.user.confirmation_password,"confirmation_password")})},validateAll:function(){var t=this,e=["username","password","confirmation_password","nickname"].map(function(e){var n=t.user[e];return"confirmation_password"===e?t.validators.confirmation_password(n,t.user.password).then(function(e){return t.inputErrors.confirmation_password=e,e}):t.validators[e](n).then(function(n){return t.inputErrors[e]=n,n})});return o.a.all(e)},submitForm:function(){var t=this;this.validateAll().then(function(e){0===e.filter(function(t){return t}).length&&(t.loading=!0,Object(s.o)(t.user).then(function(e){return t.$store.dispatch("login",{user:{username:t.user.username,password:t.user.password}})}).then(function(e){t.$router.push({path:"/chatroom"}),t.$store.dispatch("fetchUser")},function(e){t.loading=!1,t.error=Object(u.a)(e)}).catch(function(){t.loading=!1}))})}},computed:{showInputErrors:function(){var t=this,e=[];return a()(this.inputErrors).forEach(function(n){var r=t.inputErrors[n];r&&e.push(r)}),e}},created:function(){},components:{XInput:l.a,Group:c.a,XButton:d.a,Flexbox:f.a,FlexboxItem:p.a,Selector:h.a,Cell:v.a,Popup:m.a,CheckIcon:y},directives:{TransferDom:b.a}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"container",attrs:{autocomplete:"off"}},[n("group",[t.showInputErrors.length?n("div",[n("ul",{staticClass:"input-errors",attrs:{slot:"after-title"},slot:"after-title"},t._l(t.showInputErrors,function(e,r){return n("li",{key:r,staticClass:"text"},[t._v("\n            "+t._s(e)+"\n          ")])}),0)]):t._e(),t._v(" "),n("x-input",{ref:"username",class:{"weui-cell_warn":t.inputErrors.username},attrs:{"show-clear":"",placeholder:"6~15位英数字",title:"用户名","label-width":"100",debounce:1e3},on:{"on-change":function(e){return t.validate(e,"username")},"on-blur":function(e){return t.validate(e,"username")}},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),t._v(" "),n("x-input",{ref:"password",class:{"weui-cell_warn":t.inputErrors.password},attrs:{"show-clear":"",type:"password",placeholder:"请输入6~15位数字或字母",autocomplete:"off",title:"密码","label-width":"100"},on:{"on-change":function(e){return t.validate(e,"password")},"on-blur":function(e){return t.validate(e,"password")}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t._v(" "),n("x-input",{ref:"confirmation_password",class:{"weui-cell_warn":t.inputErrors.confirmation_password},attrs:{"show-clear":"",type:"password",autocomplete:"off",title:"确认密码","label-width":"100"},on:{"on-change":function(e){return t.validate(e,"confirmation_password")},"on-blur":function(e){return t.validate(e,"confirmation_password")}},model:{value:t.user.confirmation_password,callback:function(e){t.$set(t.user,"confirmation_password",e)},expression:"user.confirmation_password"}}),t._v(" "),n("x-input",{ref:"nickname",class:{"weui-cell_warn":t.inputErrors.nickname},attrs:{"show-clear":"",title:"昵称","label-width":"100"},on:{"on-change":function(e){return t.validate(e,"nickname")},"on-blur":function(e){return t.validate(e,"nickname")}},model:{value:t.user.nickname,callback:function(e){t.$set(t.user,"nickname",e)},expression:"user.nickname"}})],1),t._v(" "),n("div",{staticClass:"actions"},[t.error?n("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("x-button",{attrs:{type:"primary","action-type":"button","show-loading":t.loading,disabled:t.loading},nativeOn:{click:function(e){return t.submitForm(e)}}},[t._v("\n                注册\n      ")])],1)],1)])},staticRenderFns:[]};var N=n("VU/8")(C,E,!1,function(t){n("TX7P")},"data-v-34fb3f02",null);e.default=N.exports},wwIJ:function(t,e,n){"use strict";var r=n("pFYg"),a=n.n(r),i=n("NXHL"),o=n.n(i),s=n("KRg4"),u=n("wmxo"),l=(s.a,u.a,String,String,Array,String,String,Boolean,String,Number,Object,Boolean,Array,{name:"selector",mixins:[s.a],created:function(){void 0!==this.value&&(this.currentValue=this.value)},beforeMount:function(){this.isIOS=/iPad|iPhone|iPod/.test(window.navigator.userAgent)},computed:{fixIos:function(){return!this.placeholder&&this.isEmptyValue(this.value)&&this.isIOS&&this.title},color:function(){return this.showPlaceholder?"#A9A9A9":""},processOptions:function(){var t=this;if(!this.options.length)return[];var e="object"===a()(this.options[0]);return e&&!this.valueMap?this.options:e&&this.valueMap?this.options.map(function(e){return{key:e[t.valueMap[0]],value:e[t.valueMap[1]]}}):this.options.map(function(t){return{key:t,value:t}})},showPlaceholder:function(){return!(!this.isEmptyValue(this.value)||!this.placeholder)},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{isEmptyValue:function(t){return void 0===t||""===t||null===t},cleanStyle:u.a,getFullValue:function(){var t=this;return this.value&&this.options.length?"object"!==a()(this.options[0])?this.value:this.valueMap?this.options.filter(function(e){return e[t.valueMap[0]]===t.value}):this.options.filter(function(e){return e.key===t.value}):null}},filters:{findByKey:function(t,e){var n=o()(e,function(e){return e.key===t});return n?n.value:t}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},props:{title:String,direction:String,options:{type:Array,required:!0},name:String,placeholder:String,readonly:Boolean,value:[String,Number,Object,Boolean],valueMap:{type:Array,validator:function(t){return!(!t.length||2!==t.length)}}},data:function(){return{currentValue:"",isIOS:!1}}}),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-selector weui-cell",class:{"weui-cell_select":!t.readonly,"weui-cell_select-after":t.title}},[t.title?n("div",{staticClass:"weui-cell__hd"},[n("label",{staticClass:"weui-label",class:t.labelClass,style:t.cleanStyle({width:t.$parent.labelWidth,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight}),attrs:{for:"vux-selector-"+t.uuid},domProps:{innerHTML:t._s(t.title)}})]):t._e(),t._v(" "),t.readonly?n("div",{staticClass:"weui-cell__ft vux-selector-readonly"},[t._v("\n    "+t._s(t._f("findByKey")(t.value,t.processOptions))+"\n  ")]):n("div",{staticClass:"weui-cell__bd"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-select",style:t.cleanStyle({direction:t.direction,color:t.color}),attrs:{id:"vux-selector-"+t.uuid,name:t.name},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentValue=e.target.multiple?n:n[0]}}},[t.showPlaceholder?n("option",{domProps:{value:null===t.value?"null":"",selected:t.isEmptyValue(t.value)&&!!t.placeholder}},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),t.fixIos?n("option",{attrs:{disabled:""}}):t._e(),t._v(" "),t._l(t.processOptions,function(e){return n("option",{domProps:{value:e.key}},[t._v(t._s("rtl"===t.direction?e.value+"‎":e.value))])})],2)])])},staticRenderFns:[]};var d=n("VU/8")(l,c,!1,function(t){n("UnAD")},null,null);e.a=d.exports}});
//# sourceMappingURL=3.8bde561fd0509f60e8e1.js.map