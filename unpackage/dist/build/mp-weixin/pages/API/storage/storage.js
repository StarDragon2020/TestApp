(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/storage/storage"],{"0e40":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"4cf9":function(t,e,n){"use strict";n.r(e);var a=n("990c"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},7418:function(t,e,n){"use strict";(function(t){n("b784"),n("921b");a(n("66fd"));var e=a(n("8cbe"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8cbe":function(t,e,n){"use strict";n.r(e);var a=n("0e40"),o=n("4cf9");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("afc2");var u=n("2877"),l=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports},"990c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.target.value},dataChange:function(t){this.data=t.target.value},getStorage:function(){var e=this.key;this.data;0===e.length?t.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):t.getStorage({key:e,success:function(e){t.showModal({title:"读取数据成功",content:"data: '"+e.data+"'",showCancel:!1})},fail:function(){t.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var e=this.key,n=this.data;0===e.length?t.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):t.setStorage({key:e,data:n,success:function(e){t.showModal({title:"存储数据成功",content:" ",showCancel:!1})},fail:function(){t.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){t.clearStorageSync(),this.key="",this.data="",t.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};e.default=n}).call(this,n("543d")["default"])},afc2:function(t,e,n){"use strict";var a=n("c3a2"),o=n.n(a);o.a},c3a2:function(t,e,n){}},[["7418","common/runtime","common/vendor"]]]);