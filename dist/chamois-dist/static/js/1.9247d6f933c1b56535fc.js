webpackJsonp([1],{"+w95":function(e,t,s){var a=s("VU/8")(s("k7Ye"),s("UGJn"),null,null);e.exports=a.exports},"4frb":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.loading?s("span",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):s("div",{staticClass:"checkbox"},e._l(e.csList,function(t){return s("label",{key:t.id,staticClass:"m-r-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkboxCS[t.username],expression:"checkboxCS[cs.username]"}],attrs:{type:"checkbox",name:"cs"},domProps:{checked:Array.isArray(e.checkboxCS[t.username])?e._i(e.checkboxCS[t.username],null)>-1:e.checkboxCS[t.username]},on:{change:function(s){var a=e.checkboxCS[t.username],o=s.target,n=!!o.checked;if(Array.isArray(a)){var r=e._i(a,null);o.checked?r<0&&e.$set(e.checkboxCS,t.username,a.concat([null])):r>-1&&e.$set(e.checkboxCS,t.username,a.slice(0,r).concat(a.slice(r+1)))}else e.$set(e.checkboxCS,t.username,n)}}}),e._v(" "),s("i",{staticClass:"dark-white"}),e._v("\n    "+e._s(t.username)+"\n  ")])}),0)},staticRenderFns:[]}},"6M5Y":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("n5Qe");t.default={props:{agent:{type:String,default:""},clearable:{type:Boolean,default:!1},hiddenList:{type:Array,default:function(){return[]}}},data:function(){return{agentList:[],selectedAgent:"",loading:!0}},watch:{agent:function(e,t){this.selectedAgent=e||""},selectedAgent:function(e,t){e?this.$emit("agent-select",e):this.$emit("agent-select","")}},created:function(){this.getAgentList()},methods:{getAgentList:function(){var e=this;this.$http.get(a.a.manageUser+"?roles=agent&opt_expand=1").then(function(t){e.agentList=t.filter(function(t){return!(e.hiddenList.includes(t.username)||t.agent&&e.hiddenList.includes(t.agent.username))}),e.selectedAgent=e.agent,e.loading=!1})}}}},FJ6v:function(e,t,s){var a=s("VU/8")(s("LmzE"),s("4frb"),null,null);e.exports=a.exports},LmzE:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("fZjL"),o=s.n(a),n=s("n5Qe");t.default={props:{customerService:{default:""}},data:function(){return{api:n.a.manageUser,csList:[],checkboxCS:{},loading:!0}},watch:{customerService:function(e,t){var s=this;e.forEach(function(e){s.$set(s.checkboxCS,e,!0)})},checkboxCS:{handler:function(e){this.$emit("cs-select",o()(e).filter(function(t){return e[t]}))},deep:!0}},created:function(){var e=this;this.$http.get(this.api+"?roles=customer service").then(function(t){e.csList=t.sort(function(t,s){return e.customerService.includes(t.username)?-1:1}),e.loading=!1}),this.customerService&&this.customerService.length&&this.customerService.forEach(function(t){e.$set(e.checkboxCS,t,!0)})}}},UGJn:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row m-r-xs m-l-xs m-b"},[s("button",{staticClass:"pull-left md-btn blue w-sm",on:{click:function(t){return e.openModal("create")}}},[e._v("\n      "+e._s(e.$t("action.create_object",{object:e.$t("common.member")}))+"\n    ")])]),e._v(" "),s("form",{staticClass:"form text-sm",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"box"},[s("div",{staticClass:"box-body clearfix form-input-sm"},[s("div",{staticClass:"row m-l-xs m-r-xs"},[s("div",{staticClass:"pull-left m-r-xs"},[s("label",{staticClass:"form-control-label p-b-0",class:{"text-blue":e.query.username_q}},[e._v(e._s(e.$t("common.username"))+"\n            ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query.username_q,expression:"query.username_q",modifiers:{trim:!0}}],staticClass:"form-control w-sm",attrs:{placeholder:e.$t("common.username")},domProps:{value:e.query.username_q},on:{input:[function(t){t.target.composing||e.$set(e.query,"username_q",t.target.value.trim())},e.search],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),s("div",{staticClass:"pull-left m-r-xs"},[s("label",{staticClass:"form-control-label p-b-0",class:{"text-blue":e.query.nickname_q}},[e._v(e._s(e.$t("common.nickname"))+"\n            ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query.nickname_q,expression:"query.nickname_q",modifiers:{trim:!0}}],staticClass:"form-control w-sm",attrs:{placeholder:e.$t("common.nickname")},domProps:{value:e.query.nickname_q},on:{input:[function(t){t.target.composing||e.$set(e.query,"nickname_q",t.target.value.trim())},e.search],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),s("div",{staticClass:"pull-left m-r-xs"},[s("label",{staticClass:"form-control-label p-b-0",class:{"text-blue":e.query.agent_q}},[e._v(e._s(e.$t("common.agent"))+"\n            ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query.agent_q,expression:"query.agent_q",modifiers:{trim:!0}}],staticClass:"form-control w-sm",attrs:{placeholder:e.$t("common.agent")},domProps:{value:e.query.agent_q},on:{input:[function(t){t.target.composing||e.$set(e.query,"agent_q",t.target.value.trim())},e.search],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),s("div",{staticClass:"pull-left m-r-xs"},[s("label",{staticClass:"form-control-label p-b-0",class:{"text-blue":e.query.roles}},[e._v(e._s(e.$t("common.role"))+"\n            ")]),e._v(" "),s("role",{staticStyle:{display:"block"},attrs:{role:e.query.roles},on:{"role-select":e.roleFilter}})],1),e._v(" "),s("button",{staticClass:"md-btn pull-right btn m-t-md w-xs",attrs:{type:"button",disabled:e.isQueryEmpty},on:{click:e.clearAll}},[s("span",[e.loading?s("i",{staticClass:"fa fa-spin fa-spinner"}):s("i",{staticClass:"fa fa-trash-o"}),e._v("\n               "+e._s(e.$t("action.clear"))+"\n            ")])])])])])]),e._v(" "),s("div",{staticClass:"box"},[s("table",{staticClass:"table table-striped",attrs:{"st-table":"rowCollectionBasic"}},[s("thead",[s("tr",[s("th",{staticStyle:{width:"15%"}},[e._v(e._s(e.$t("common.username")))]),e._v(" "),s("th",[e._v(e._s(e.$t("common.nickname")))]),e._v(" "),s("th",[e._v(e._s(e.$t("common.mobile"))+"/"+e._s(e.$t("common.QQ")))]),e._v(" "),s("th",[e._v(e._s(e.$t("common.agent")))]),e._v(" "),s("th",{staticClass:"text-center"},[e._v(e._s(e.$t("common.date_joined")))]),e._v(" "),s("th",{staticClass:"text-center"},[e._v(e._s(e.$t("common.registered_ip")))]),e._v(" "),s("th",{staticClass:"text-center"},[e._v(e._s(e.$t("common.role")))]),e._v(" "),s("th",{staticClass:"text-center",staticStyle:{width:"10%"}},[e._v(e._s(e.$t("common.operate")))])])]),e._v(" "),e.queryset.length?s("tbody",e._l(e.queryset,function(t){return s("tr",{key:t.id},[s("td",[e._v(e._s(t.is_robot?e.$t("setting.robot"):t.username||"-"))]),e._v(" "),s("td",[e._v(e._s(t.nickname||"-"))]),e._v(" "),s("td",[s("span",[e._v(e._s(t.mobile||"-"))]),e._v(" "),s("br"),e._v(" "),s("span",[e._v(e._s(t.QQ||"-"))])]),e._v(" "),s("td",[t.agent?s("span",[e._v(e._s(t.agent.username||"-"))]):s("span",[e._v("-")])]),e._v(" "),s("td",{staticClass:"text-center"},[t.date_joined?s("span",[e._v(e._s(e._f("moment")(t.date_joined,"YYYY-MM-DD HH:mm:ss")))]):s("span",[e._v(e._s("-"))])]),e._v(" "),s("td",{staticClass:"text-center"},[e._v(e._s(t.registered_ip||"-"))]),e._v(" "),t.roles?s("td",{staticClass:"text-center"},e._l(t.roles,function(t,a){return s("span",{key:t.id},[a>0?s("br"):e._e(),e._v(e._s(t.display_name)+"\n            ")])}),0):s("td",{staticClass:"text-center"},[e._v("-")]),e._v(" "),s("td",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-xs btn-icon blue",on:{click:function(s){e.openModal("update",Object.assign({},t,{roles:t.roles.map(function(e){return e.name}),agent:t.agent.username||"",hasAgent:!!t.agent.username,agent_customer_services:t.agent_customer_services?t.agent_customer_services.map(function(e){return e.username}):[],domain:t.domain||"",password:"",confirmation_password:""}))}}},[s("i",{staticClass:"fa fa-edit"})]),e._v(" "),s("button",{staticClass:"btn btn-xs btn-icon danger",on:{click:function(s){return e.openModal("delete",t)}}},[s("i",{staticClass:"fa fa-trash-o"})])])])}),0):e._e()])]),e._v(" "),e.modal.showModal?s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-backdrop fade in",on:{click:function(t){e.modal.showModal=!1}}}),e._v(" "),s("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),e.updateMember(e.modal.mode,Object.assign({},e.modal.member,{agent_username:e.modal.member.agent,role_names:[].concat(e.modal.member.roles)}))}}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[e._v("\n              "+e._s(e.modal.mode&&e.$t("action."+e.modal.mode+"_object",{object:e.$t("common.member")}))+"\n            ")])]),e._v(" "),"delete"!==e.modal.mode?s("div",{staticClass:"modal-body p-lg",staticStyle:{overflow:"scroll","max-height":"600px"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 text-center"},[s("h6",[e._v(e._s(e.$t("common.basic_info")))])])]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label p-r-0"},[e._v(e._s(e.$t("common.username")))]),e._v(" "),s("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.modal.member.username,expression:"modal.member.username",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{pattern:"[A-Za-z\\d]{6,15}",title:e.$t("message.username_form_validation_msg",{digit:"6~15"}),required:""},domProps:{value:e.modal.member.username},on:{input:function(t){t.target.composing||e.$set(e.modal.member,"username",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),s("span",{staticClass:"m-l-xs text-xs text-muted"},[e._v(e._s(e.$t("message.username_form_validation_msg",{digit:"6~15"}))+"\n                ")])])]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label p-r-0"},[e._v(e._s(e.$t("common.nickname")))]),e._v(" "),s("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.modal.member.nickname,expression:"modal.member.nickname",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{required:""},domProps:{value:e.modal.member.nickname},on:{input:function(t){t.target.composing||e.$set(e.modal.member,"nickname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label",class:{"p-r-0":"create"===e.modal.mode}},[e._v(e._s("create"===e.modal.mode?e.$t("common.password"):e.$t("action.reset_password")))]),e._v(" "),"create"===e.modal.mode?s("span",{staticClass:"text-danger"},[e._v("*")]):e._e()]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.modal.member.password,expression:"modal.member.password",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"password",required:"create"===e.modal.mode,pattern:"(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,15}",title:e.$t("message.password_form_validation_msg",{digit:"8~15"}),autocomplete:"off"},domProps:{value:e.modal.member.password},on:{input:[function(t){t.target.composing||e.$set(e.modal.member,"password",t.target.value.trim())},e.checkPasswordSame],blur:function(t){return e.$forceUpdate()}}}),e._v(" "),s("span",{staticClass:"m-l-xs text-xs text-muted"},[e._v(e._s(e.$t("message.password_form_validation_msg",{digit:"8~15"}))+"\n                ")])])]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label",class:{"p-r-0":"create"===e.modal.mode}},[e._v(e._s(e.$t("common.password_check")))]),e._v(" "),"create"===e.modal.mode?s("span",{staticClass:"text-danger"},[e._v("*")]):e._e()]),e._v(" "),s("div",{staticClass:"col-sm-5",class:{"has-warning":!e.modal.isPasswordSame}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.modal.member.confirmation_password,expression:"modal.member.confirmation_password",modifiers:{trim:!0}}],staticClass:"form-control",class:{"form-control-warning":!e.modal.isPasswordSame},attrs:{type:"password",required:e.modal.member.password.length>0},domProps:{value:e.modal.member.confirmation_password},on:{input:[function(t){t.target.composing||e.$set(e.modal.member,"confirmation_password",t.target.value.trim())},e.checkPasswordSame],blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label"},[e._v(e._s(e.$t("common.mobile")))])]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.modal.member.mobile,expression:"modal.member.mobile",modifiers:{trim:!0}}],staticClass:"form-control",domProps:{value:e.modal.member.mobile},on:{input:function(t){t.target.composing||e.$set(e.modal.member,"mobile",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label"},[e._v(e._s(e.$t("common.QQ")))])]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.modal.member.QQ,expression:"modal.member.QQ",modifiers:{trim:!0}}],staticClass:"form-control",domProps:{value:e.modal.member.QQ},on:{input:function(t){t.target.composing||e.$set(e.modal.member,"QQ",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label"},[e._v(e._s(e.$t("common.agent")))])]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("agent",{attrs:{clearable:!e.modal.member.hasAgent,hiddenList:[e.modal.member.username],agent:e.modal.member.agent},on:{"agent-select":e.agentSelect}})],1)]),e._v(" "),s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label"},[e._v(e._s(e.$t("common.role")))])]),e._v(" "),s("div",{staticClass:"col-sm-6 m-t-sm"},[s("role",{attrs:{role:e.modal.member.roles,mode:"checkbox",noShowList:["member"],disabledList:e.modal.isAgent?["agent"]:[]},on:{"role-select":e.roleSelect}})],1)]),e._v(" "),e.isChosingAgent?s("div",{staticClass:"row b-t m-t-sm p-t-sm"},[s("div",{staticClass:"col-sm-12 text-center m-t-sm"},[s("h6",[e._v(e._s(e.$t("nav.agent_promo")))])])]):e._e(),e._v(" "),e.isChosingAgent?s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label"},[e._v(e._s(e.$t("common.promote_code")))])]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("label",{staticClass:"form-control-label p-l-0"},[e._v(e._s(e.modal.member.promote_code))])])]):e._e(),e._v(" "),e.isChosingAgent?s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label"},[e._v(e._s(e.$t("common.agent_domain")))])]),e._v(" "),s("div",{staticClass:"col-sm-5"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.modal.member.domain,expression:"modal.member.domain",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"多个域名请用','隔开"},domProps:{value:e.modal.member.domain},on:{input:function(t){t.target.composing||e.$set(e.modal.member,"domain",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]):e._e(),e._v(" "),e.isChosingAgent?s("div",{staticClass:"row m-t-xs"},[s("div",{staticClass:"col-sm-3 col-sm-offset-1 text-right"},[s("label",{staticClass:"form-control-label"},[e._v(e._s(e.$t("role.customer_service")))])]),e._v(" "),s("div",{staticClass:"col-sm-6 m-t-sm"},[s("customer-service",{attrs:{customerService:e.modal.member.agent_customer_services},on:{"cs-select":e.csSelect}})],1)]):e._e()]):s("div",{staticClass:"modal-body p-lg"},[s("span",[e._v(e._s(e.$t("message.sure_to_do",{object:e.$t("common.member")+" ("+e.modal.member.username+")",operate:e.$t("action.delete")}))+"\n            ")])]),e._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn dark-white p-x-md w-xs",attrs:{type:"button"},on:{click:function(t){e.modal.showModal=!1}}},[e._v("\n              "+e._s(e.$t("action.cancel"))+"\n            ")]),e._v(" "),s("button",{staticClass:"btn blue p-x-md w-xs",attrs:{type:"submit",disabled:!e.modal.isPasswordSame}},[e.modal.loading?s("span",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):s("span",[e._v(e._s(e.$t("action.confirm")))])])])])])])]):e._e(),e._v(" "),s("pulling",{ref:"pulling",attrs:{api:e.api,query:e.query,queryset:e.queryset,extra:"sort=date_joined"},on:{"query-data":e.queryData,"query-param":e.queryParam}})],1)},staticRenderFns:[]}},YKkP:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.loading?s("span",{staticClass:"form-control"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedAgent,expression:"selectedAgent"}],staticClass:"form-control c-select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedAgent=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:!e.clearable,hidden:!e.clearable}},[e._v("\n    "+e._s(e.$t("common.please_select"))+"\n  ")]),e._v(" "),e._l(e.agentList,function(t){return s("option",{key:t.id,staticClass:"form-control",domProps:{value:t.username}},[e._v(e._s(t.username)+"\n  ")])})],2)},staticRenderFns:[]}},ckMg:function(e,t,s){var a=s("VU/8")(s("zzOL"),s("s1Yk"),null,null);e.exports=a.exports},k7Ye:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Gu7T"),o=s.n(a),n=s("//Fk"),r=s.n(n),i=s("woOf"),l=s.n(i),c=s("8h12"),m=s.n(c),d=s("ckMg"),u=s.n(d),v=s("kSxZ"),_=s.n(v),f=s("FJ6v"),p=s.n(f),h=s("n5Qe"),b=s("oFuF"),g=s("M4fF"),C=s.n(g);t.default={data:function(){return{api:h.a.manageUser,query:{},queryset:[],modal:{showModal:!1,mode:"",member:{},isPasswordSame:!0,loading:!1},requiredFields:["username","nickname","mobile","QQ","role_names"],loading:!0}},created:function(){this.setQueryAll(),this.rebase()},watch:{$route:{handler:function(){this.loading=!0,this.setQueryAll(),this.queryset=[],this.$refs.pulling.rebase()},deep:!0}},computed:{isQueryEmpty:function(){return b.a.compareQuery(this.query,{})},isChosingAgent:function(){return this.modal.member.roles.includes("agent")}},methods:{setQueryAll:function(){this.query=l()({},this.$route.query)},getPromo:function(){var e=this;return new r.a(function(t){e.$http.get(h.a.user+"promote_info/").then(function(e){t(e)})})},openModal:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{username:"",nickname:"",password:"",confirmation_password:"",mobile:"",QQ:"",roles:["member"],promote_code:"",agent:"",hasAgent:!1,domain:"",agent_customer_services:[]};this.modal=l()(this.modal,{mode:t,member:s,isAgent:s.roles.includes("agent"),showModal:!0,loading:!1}),("create"===t||"update"===t&&!s.promote_code)&&this.getPromo().then(function(t){e.modal.member=l()(s,t)})},closeModal:function(){this.modal.showModal=!1},updateMember:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments[1];this.modal.loading=!0;var a={},n=this.requiredFields;("create"===t||"update"===t&&s.password)&&(n=[].concat(o()(n),["password","confirmation_password"])),s.agent_username&&(a.agent_username=s.agent_username),this.isChosingAgent&&(n=[].concat(o()(n),["domain","promote_code","agent_customer_services"])),n.forEach(function(e){a[e]=s[e]}),"create"===t?this.$http.post(this.api,a).then(function(s){e.notify(t,"success","success",!0,!0)},function(s){e.notify(t,"danger","failed",!1,!1,s)}):"update"===t?this.$http.put(""+this.api+s.id+"/",a).then(function(s){e.notify(t,"success","success",!0,!0)},function(s){e.notify(t,"danger","failed",!1,!1,s)}):"delete"===t&&this.$http.delete(""+this.api+s.id+"/").then(function(s){e.notify(t,"success","success",!0,!0)},function(s){e.notify(t,"danger","failed",!1,!1,s)})},roleFilter:function(e){this.query.roles=e,this.submit()},agentSelect:function(e){this.modal.member.agent=e},roleSelect:function(e){this.modal.member.roles=e},csSelect:function(e){this.modal.member.agent_customer_services=e},queryData:function(e){this.loading=!1,this.queryset=e},queryParam:function(e){this.query=l()(this.query,e)},search:C.a.debounce(function(){this.submit()},700),checkPasswordSame:C.a.debounce(function(){this.modal.isPasswordSame=this.modal.member.password===this.modal.member.confirmation_password},700),submit:function(){b.a.compareQuery(this.query,this.$route.query)||this.$refs.pulling.submit()},rebase:function(){var e=this;this.$nextTick(function(){e.$refs.pulling.rebase()})},clearAll:function(){var e=this;this.query={},this.$nextTick(function(){e.submit()})},notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"update",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success",a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";this.modal.loading=!1,b.a.notify({message:this.$t("action."+e)+this.$t("status."+s)+(n&&" ("+n+")"),type:t}),a&&this.closeModal(),o&&this.rebase()}},components:{Pulling:m.a,Agent:_.a,Role:u.a,CustomerService:p.a}}},kSxZ:function(e,t,s){var a=s("VU/8")(s("6M5Y"),s("YKkP"),null,null);e.exports=a.exports},s1Yk:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return"select"===e.mode?s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedRole,expression:"selectedRole"}],staticClass:"form-control w-sm c-select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedRole=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[e._v(e._s(e.$t("common.please_select")))]),e._v(" "),e._l(e.roleFilter,function(t){return s("option",{key:t.id,staticClass:"form-control",domProps:{value:t.name}},[e._v(e._s(t.display_name)+"\n  ")])})],2):s("div",{staticClass:"checkbox"},e._l(e.roleFilter,function(t){return s("label",{key:t.id,staticClass:"m-r-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkboxRole[t.name],expression:"checkboxRole[r.name]"}],attrs:{type:"checkbox",name:"role",disabled:e.disabledList.includes(t.name)},domProps:{checked:Array.isArray(e.checkboxRole[t.name])?e._i(e.checkboxRole[t.name],null)>-1:e.checkboxRole[t.name]},on:{change:function(s){var a=e.checkboxRole[t.name],o=s.target,n=!!o.checked;if(Array.isArray(a)){var r=e._i(a,null);o.checked?r<0&&e.$set(e.checkboxRole,t.name,a.concat([null])):r>-1&&e.$set(e.checkboxRole,t.name,a.slice(0,r).concat(a.slice(r+1)))}else e.$set(e.checkboxRole,t.name,n)}}}),e._v(" "),s("i",{staticClass:"dark-white"}),e._v("\n    "+e._s(t.display_name)+"\n  ")])}),0)},staticRenderFns:[]}},zzOL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("fZjL"),o=s.n(a);t.default={props:{role:{default:""},mode:{default:"select"},noShowList:{default:""},disabledList:{default:""}},data:function(){return{roles:[{display_name:this.$t("role.agent"),id:3,name:"agent"},{display_name:this.$t("role.customer_service"),id:4,name:"customer service"},{display_name:this.$t("role.manager"),id:1,name:"manager"},{display_name:this.$t("role.member"),id:2,name:"member"}],selectedRole:"",checkboxRole:{}}},watch:{role:function(e,t){var s=this;"select"===this.mode?this.selectedRole=e||"":this.role.forEach(function(e){s.$set(s.checkboxRole,e,!0)})},selectedRole:function(e,t){e?this.$emit("role-select",e.toString()):this.$emit("role-select","")},checkboxRole:{handler:function(e){this.$emit("role-select",o()(e).filter(function(t){return e[t]}))},deep:!0}},computed:{roleFilter:function(){var e=this;return this.roles.filter(function(t){return!e.noShowList.includes(t.name)})}},created:function(){var e=this;"select"===this.mode?this.selectedRole=this.role:this.role&&this.role.length&&this.role.forEach(function(t){e.$set(e.checkboxRole,t,!0)})}}}});
//# sourceMappingURL=1.9247d6f933c1b56535fc.js.map