(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/movable-view/movable-view"],{"0fe0":function(t,n,e){"use strict";var i=e("d2e0"),a=e.n(i);a.a},"30ca":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{x:0,y:0,scale:2,old:{x:0,y:0,scale:2}}},methods:{tap:function(t){this.x=this.old.x,this.y=this.old.y,this.$nextTick(function(){this.x=30,this.y=30})},tap2:function(){this.scale=this.old.scale,this.scale=this.old.scale,this.$nextTick(function(){this.scale=3})},onChange:function(t){this.old.x=t.detail.x,this.old.y=t.detail.y},onScale:function(t){this.old.scale=t.detail.scale}}};n.default=i},"4fa9":function(t,n,e){"use strict";(function(t){e("b784"),e("921b");i(e("66fd"));var n=i(e("c73f"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},5547:function(t,n,e){"use strict";e.r(n);var i=e("30ca"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=a.a},"571f":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},c73f:function(t,n,e){"use strict";e.r(n);var i=e("571f"),a=e("5547");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("0fe0");var o=e("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},d2e0:function(t,n,e){}},[["4fa9","common/runtime","common/vendor"]]]);