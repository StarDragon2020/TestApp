(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/websocket-socketTask/websocket-socketTask"],{"0a7e":function(n,o,t){"use strict";t.r(o);var e=t("dd5a"),s=t("3a4b");for(var c in s)"default"!==c&&function(n){t.d(o,n,function(){return s[n]})}(c);t("7965");var a=t("2877"),i=Object(a["a"])(s["default"],e["a"],e["b"],!1,null,null,null);o["default"]=i.exports},2931:function(n,o,t){},"3a4b":function(n,o,t){"use strict";t.r(o);var e=t("e338"),s=t.n(e);for(var c in e)"default"!==c&&function(n){t.d(o,n,function(){return e[n]})}(c);o["default"]=s.a},"5d91":function(n,o,t){"use strict";(function(n){t("b784"),t("921b");e(t("66fd"));var o=e(t("0a7e"));function e(n){return n&&n.__esModule?n:{default:n}}n(o.default)}).call(this,t("543d")["createPage"])},7965:function(n,o,t){"use strict";var e=t("2931"),s=t.n(e);s.a},dd5a:function(n,o,t){"use strict";var e=function(){var n=this,o=n.$createElement;n._self._c},s=[];t.d(o,"a",function(){return e}),t.d(o,"b",function(){return s})},e338:function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=n.getSystemInfoSync().platform,e={data:function(){return{connected:!1,connecting:!1,socketTask:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect:function(){var o=this;return""===this.roomId?(n.showModal({content:"请输入一个房间号",showCancel:!1}),!1):this.connected||this.connecting?(n.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1):(this.connecting=!0,n.showLoading({title:"连接中..."}),this.socketTask=n.connectSocket({url:"wss://connect.websocket.in/hello_uni_app?room_id="+this.roomId,data:function(){return{msg:"Hello"}},header:{"content-type":"application/json"},method:"GET",success:function(n){},fail:function(n){}}),this.socketTask.onOpen(function(t){o.connecting=!1,o.connected=!0,n.hideLoading(),n.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",t)}),this.socketTask.onError(function(t){o.connecting=!1,o.connected=!1,n.hideLoading(),n.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",t)}),this.socketTask.onMessage(function(n){o.msg=n.data,console.log("onMessage",n)}),this.socketTask.onClose(function(n){o.connected=!1,o.startRecive=!1,o.socketTask=!1,o.msg=!1,console.log("onClose",n)}),void console.log("task",this.socketTask))},send:function(){this.socketTask.send({data:"from "+t+" : "+parseInt(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}};o.default=e}).call(this,t("543d")["default"])}},[["5d91","common/runtime","common/vendor"]]]);