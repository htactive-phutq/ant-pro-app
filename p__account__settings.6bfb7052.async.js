(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"1Z4A":function(e,t,a){"use strict";a.r(t);var n=a("fWQN"),i=a("mtLc"),c=a("yKVA"),r=a("879j"),s=(a("lUTK"),a("BvKs")),o=a("q1tI"),l=a.n(o),d=a("9kvl"),u=a("Hx5s"),m=(a("y8nQ"),a("Vl3Y")),g=(a("5NDa"),a("5rEg")),p=(a("miYZ"),a("tsqr")),b=(a("DZo9"),a("8z0m")),v=(a("+L6B"),a("2/Rp")),f=(a("OaEy"),a("2fM7")),y=a("z7Xi"),h=(a("T2oS"),a("W9HT")),E=a("zPRt"),O=a.n(E),j=f["a"].Option,_={label:"",value:"",key:""},k=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.componentDidMount=function(){var t=e.props.dispatch;t&&t({type:"accountAndsettings/fetchProvince"})},e.getCityOption=function(){var t=e.props.city;return t?e.getOption(t):[]},e.getOption=function(e){return!e||e.length<1?l.a.createElement(j,{key:0,value:0},"\u6ca1\u6709\u627e\u5230\u9009\u9879"):e.map((function(e){return l.a.createElement(j,{key:e.id,value:e.id},e.name)}))},e.selectProvinceItem=function(t){var a=e.props,n=a.dispatch,i=a.onChange;n&&n({type:"accountAndsettings/fetchCity",payload:t.key}),i&&i({province:t,city:_})},e.selectCityItem=function(t){var a=e.props,n=a.value,i=a.onChange;n&&i&&i({province:n.province,city:t})},e}return Object(i["a"])(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.dispatch,n=t.value;!e.value&&n&&n.province&&a&&a({type:"accountAndsettings/fetchCity",payload:n.province.key})}},{key:"getProvinceOption",value:function(){var e=this.props.province;return e?this.getOption(e):[]}},{key:"conversionObject",value:function(){var e=this.props.value;if(!e)return{province:_,city:_};var t=e.province,a=e.city;return{province:t||_,city:a||_}}},{key:"render",value:function(){var e=this.conversionObject(),t=e.province,a=e.city,n=this.props.loading;return l.a.createElement(h["a"],{spinning:n,wrapperClassName:O.a.row},l.a.createElement(f["a"],{className:O.a.item,value:t,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),l.a.createElement(f["a"],{className:O.a.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),a}(o["Component"]),w=Object(d["c"])((function(e){var t=e.accountAndsettings,a=e.loading,n=t.province,i=t.city;return{province:n,city:i,loading:a.models.accountAndsettings}}))(k),M=a("EdlB"),C=a.n(M),I=function(e){var t=e.value,a=e.onChange,n=["",""];return t&&(n=t.split("-")),l.a.createElement(l.a.Fragment,null,l.a.createElement(g["a"],{className:C.a.area_code,value:n[0],onChange:function(e){a&&a("".concat(e.target.value,"-").concat(n[1]))}}),l.a.createElement(g["a"],{className:C.a.phone_number,onChange:function(e){a&&a("".concat(n[0],"-").concat(e.target.value))},value:n[1]}))},N=I,A=a("YHME"),S=a.n(A),z=f["a"].Option,B=function(e){var t=e.avatar;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:S.a.avatar_title},l.a.createElement(d["a"],{id:"accountandsettings.basic.avatar",defaultMessage:"Avatar"})),l.a.createElement("div",{className:S.a.avatar},l.a.createElement("img",{src:t,alt:"avatar"})),l.a.createElement(b["a"],{showUploadList:!1},l.a.createElement("div",{className:S.a.button_view},l.a.createElement(v["a"],null,l.a.createElement(y["a"],null),l.a.createElement(d["a"],{id:"accountandsettings.basic.change-avatar",defaultMessage:"Change avatar"})))))},U=function(e,t,a){var n=t.province,i=t.city;n.key||a("Please input your province!"),i.key||a("Please input your city!"),a()},D=function(e,t,a){var n=t.split("-");n[0]||a("Please input your area code!"),n[1]||a("Please input your phone number!"),a()},q=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.view=void 0,e.getViewDom=function(t){e.view=t},e.handleFinish=function(){p["b"].success(Object(d["d"])({id:"accountandsettings.basic.update.success"}))},e}return Object(i["a"])(a,[{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e){if(e.avatar)return e.avatar;var t="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return t}return""}},{key:"render",value:function(){var e=this.props.currentUser;return l.a.createElement("div",{className:S.a.baseView,ref:this.getViewDom},l.a.createElement("div",{className:S.a.left},l.a.createElement(m["a"],{layout:"vertical",onFinish:this.handleFinish,initialValues:e,hideRequiredMark:!0},l.a.createElement(m["a"].Item,{name:"email",label:Object(d["d"])({id:"accountandsettings.basic.email"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.email-message"},{})}]},l.a.createElement(g["a"],null)),l.a.createElement(m["a"].Item,{name:"name",label:Object(d["d"])({id:"accountandsettings.basic.nickname"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.nickname-message"},{})}]},l.a.createElement(g["a"],null)),l.a.createElement(m["a"].Item,{name:"profile",label:Object(d["d"])({id:"accountandsettings.basic.profile"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.profile-message"},{})}]},l.a.createElement(g["a"].TextArea,{placeholder:Object(d["d"])({id:"accountandsettings.basic.profile-placeholder"}),rows:4})),l.a.createElement(m["a"].Item,{name:"country",label:Object(d["d"])({id:"accountandsettings.basic.country"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.country-message"},{})}]},l.a.createElement(f["a"],{style:{maxWidth:220}},l.a.createElement(z,{value:"China"},"\u4e2d\u56fd"))),l.a.createElement(m["a"].Item,{name:"geographic",label:Object(d["d"])({id:"accountandsettings.basic.geographic"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.geographic-message"},{})},{validator:U}]},l.a.createElement(w,null)),l.a.createElement(m["a"].Item,{name:"address",label:Object(d["d"])({id:"accountandsettings.basic.address"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.address-message"},{})}]},l.a.createElement(g["a"],null)),l.a.createElement(m["a"].Item,{name:"phone",label:Object(d["d"])({id:"accountandsettings.basic.phone"}),rules:[{required:!0,message:Object(d["d"])({id:"accountandsettings.basic.phone-message"},{})},{validator:D}]},l.a.createElement(N,null)),l.a.createElement(m["a"].Item,null,l.a.createElement(v["a"],{htmlType:"submit",type:"primary"},l.a.createElement(d["a"],{id:"accountandsettings.basic.update",defaultMessage:"Update Information"}))))),l.a.createElement("div",{className:S.a.right},l.a.createElement(B,{avatar:this.getAvatarURL()})))}}]),a}(o["Component"]),F=Object(d["c"])((function(e){var t=e.accountAndsettings;return{currentUser:t.currentUser}}))(q),K=(a("Mwp2"),a("VXEj")),W=a("/wp/"),P=a("a1tJ"),V=a("UBYk"),x=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){return[{title:Object(d["d"])({id:"accountandsettings.binding.taobao"},{}),description:Object(d["d"])({id:"accountandsettings.binding.taobao-description"},{}),actions:[l.a.createElement("a",{key:"Bind"},l.a.createElement(d["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:l.a.createElement(W["a"],{className:"taobao"})},{title:Object(d["d"])({id:"accountandsettings.binding.alipay"},{}),description:Object(d["d"])({id:"accountandsettings.binding.alipay-description"},{}),actions:[l.a.createElement("a",{key:"Bind"},l.a.createElement(d["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:l.a.createElement(P["a"],{className:"alipay"})},{title:Object(d["d"])({id:"accountandsettings.binding.dingding"},{}),description:Object(d["d"])({id:"accountandsettings.binding.dingding-description"},{}),actions:[l.a.createElement("a",{key:"Bind"},l.a.createElement(d["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:l.a.createElement(V["a"],{className:"dingding"})}]},e}return Object(i["a"])(a,[{key:"render",value:function(){return l.a.createElement(o["Fragment"],null,l.a.createElement(K["b"],{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return l.a.createElement(K["b"].Item,{actions:e.actions},l.a.createElement(K["b"].Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),L=x,R=(a("BoS7"),a("Sdc0")),T=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){var e=l.a.createElement(R["a"],{checkedChildren:Object(d["d"])({id:"accountandsettings.settings.open"}),unCheckedChildren:Object(d["d"])({id:"accountandsettings.settings.close"}),defaultChecked:!0});return[{title:Object(d["d"])({id:"accountandsettings.notification.password"},{}),description:Object(d["d"])({id:"accountandsettings.notification.password-description"},{}),actions:[e]},{title:Object(d["d"])({id:"accountandsettings.notification.messages"},{}),description:Object(d["d"])({id:"accountandsettings.notification.messages-description"},{}),actions:[e]},{title:Object(d["d"])({id:"accountandsettings.notification.todo"},{}),description:Object(d["d"])({id:"accountandsettings.notification.todo-description"},{}),actions:[e]}]},e}return Object(i["a"])(a,[{key:"render",value:function(){var e=this.getData();return l.a.createElement(o["Fragment"],null,l.a.createElement(K["b"],{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return l.a.createElement(K["b"].Item,{actions:e.actions},l.a.createElement(K["b"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),G=T,Y={strong:l.a.createElement("span",{className:"strong"},l.a.createElement(d["a"],{id:"accountandsettings.security.strong",defaultMessage:"Strong"})),medium:l.a.createElement("span",{className:"medium"},l.a.createElement(d["a"],{id:"accountandsettings.security.medium",defaultMessage:"Medium"})),weak:l.a.createElement("span",{className:"weak"},l.a.createElement(d["a"],{id:"accountandsettings.security.weak",defaultMessage:"Weak"}),"Weak")},H=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){return[{title:Object(d["d"])({id:"accountandsettings.security.password"},{}),description:l.a.createElement(l.a.Fragment,null,Object(d["d"])({id:"accountandsettings.security.password-description"}),"\uff1a",Y.strong),actions:[l.a.createElement("a",{key:"Modify"},l.a.createElement(d["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(d["d"])({id:"accountandsettings.security.phone"},{}),description:"".concat(Object(d["d"])({id:"accountandsettings.security.phone-description"},{}),"\uff1a138****8293"),actions:[l.a.createElement("a",{key:"Modify"},l.a.createElement(d["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(d["d"])({id:"accountandsettings.security.question"},{}),description:Object(d["d"])({id:"accountandsettings.security.question-description"},{}),actions:[l.a.createElement("a",{key:"Set"},l.a.createElement(d["a"],{id:"accountandsettings.security.set",defaultMessage:"Set"}))]},{title:Object(d["d"])({id:"accountandsettings.security.email"},{}),description:"".concat(Object(d["d"])({id:"accountandsettings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[l.a.createElement("a",{key:"Modify"},l.a.createElement(d["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(d["d"])({id:"accountandsettings.security.mfa"},{}),description:Object(d["d"])({id:"accountandsettings.security.mfa-description"},{}),actions:[l.a.createElement("a",{key:"bind"},l.a.createElement(d["a"],{id:"accountandsettings.security.bind",defaultMessage:"Bind"}))]}]},e}return Object(i["a"])(a,[{key:"render",value:function(){var e=this.getData();return l.a.createElement(l.a.Fragment,null,l.a.createElement(K["b"],{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return l.a.createElement(K["b"].Item,{actions:e.actions},l.a.createElement(K["b"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),J=H,X=a("KWSo"),Z=a.n(X),Q=s["a"].Item,$=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(e){var i;Object(n["a"])(this,a),i=t.call(this,e),i.main=void 0,i.getMenu=function(){var e=i.state.menuMap;return Object.keys(e).map((function(t){return l.a.createElement(Q,{key:t},e[t])}))},i.getRightTitle=function(){var e=i.state,t=e.selectKey,a=e.menuMap;return a[t]},i.selectKey=function(e){i.setState({selectKey:e})},i.resize=function(){i.main&&requestAnimationFrame((function(){if(i.main){var e="inline",t=i.main.offsetWidth;i.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),i.setState({mode:e})}}))},i.renderChildren=function(){var e=i.state.selectKey;switch(e){case"base":return l.a.createElement(F,null);case"security":return l.a.createElement(J,null);case"binding":return l.a.createElement(L,null);case"notification":return l.a.createElement(G,null);default:break}return null};var c={base:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.basic",defaultMessage:"Basic Settings"}),security:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.security",defaultMessage:"Security Settings"}),binding:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.binding",defaultMessage:"Account Binding"}),notification:l.a.createElement(d["a"],{id:"accountandsettings.menuMap.notification",defaultMessage:"New Message Notification"})};return i.state={mode:"inline",menuMap:c,selectKey:"base"},i}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"accountAndsettings/fetchCurrent"}),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.currentUser;if(!t.userid)return"";var a=this.state,n=a.mode,i=a.selectKey;return l.a.createElement(u["b"],null,l.a.createElement("div",{className:Z.a.main,ref:function(t){t&&(e.main=t)}},l.a.createElement("div",{className:Z.a.leftMenu},l.a.createElement(s["a"],{mode:n,selectedKeys:[i],onClick:function(t){var a=t.key;return e.selectKey(a)}},this.getMenu())),l.a.createElement("div",{className:Z.a.right},l.a.createElement("div",{className:Z.a.title},this.getRightTitle()),this.renderChildren())))}}]),a}(o["Component"]);t["default"]=Object(d["c"])((function(e){var t=e.accountAndsettings;return{currentUser:t.currentUser}}))($)},EdlB:function(e,t,a){e.exports={area_code:"area_code___2LS8F",phone_number:"phone_number___1PO0T"}},KWSo:function(e,t,a){e.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}},YHME:function(e,t,a){e.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF"}},zPRt:function(e,t,a){e.exports={row:"row___J_FI0",item:"item___2gpD9"}}}]);