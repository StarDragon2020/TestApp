(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/image/image"],{"0d11":function(e,t,n){},"2eaf":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"4aeb":function(e,t,n){"use strict";var i=n("0d11"),a=n.n(i);a.a},7564:function(e,t,n){"use strict";(function(e){n("b784"),n("921b");i(n("66fd"));var t=i(n("bac3"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},ac83:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a")),a=r(n("3ddd"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,a,r,u){try{var s=e[r](u),c=s.value}catch(o){return void n(o)}s.done?t(c):Promise.resolve(c).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function s(e){u(r,i,a,s,c,"next",e)}function c(e){u(r,i,a,s,c,"throw",e)}s(void 0)})}}var c=[["camera"],["album"],["camera","album"]],o=[["compressed"],["original"],["compressed","original"]],f={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.target.value)},sizeTypeChange:function(e){this.sizeTypeIndex=parseInt(e.target.value)},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var t=s(i.default.mark(function t(){var n,a=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(n=t.sent,console.log("是否继续?",n),n){t.next=7;break}return t.abrupt("return");case 7:e.chooseImage({sourceType:c[this.sourceTypeIndex],sizeType:o[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){a.imageList=a.imageList.concat(e.tempFilePaths)},fail:function(t){e.getSetting({success:function(t){var n=!1;switch(a.sourceTypeIndex){case 0:n=t.authSetting["scope.camera"];break;case 1:n=t.authSetting["scope.album"];break;case 2:n=t.authSetting["scope.album"]&&t.authSetting["scope.camera"];break;default:break}n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}});case 8:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),isFullImg:function(){var t=this;return new Promise(function(n){e.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(e){e.confirm?(t.imageList=[],n(!0)):n(!1)},fail:function(){n(!1)}})})},previewImage:function(t){var n=t.target.dataset.src;e.previewImage({current:n,urls:this.imageList})},checkPermission:function(){var t=s(i.default.mark(function t(n){var r,u;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=n?n-1:this.sourceTypeIndex,!a.default.isIOS){t.next=7;break}return t.next=4,a.default.requestIOS(c[r][0]);case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,a.default.requestAndroid(0===r?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:t.t0=t.sent;case 10:return u=t.t0,null===u||1===u?u=1:e.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&a.default.gotoAppSetting()}}),t.abrupt("return",u);case 13:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()}};t.default=f}).call(this,n("543d")["default"])},b12f:function(e,t,n){"use strict";n.r(t);var i=n("ac83"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},bac3:function(e,t,n){"use strict";n.r(t);var i=n("2eaf"),a=n("b12f");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("4aeb");var u=n("2877"),s=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports}},[["7564","common/runtime","common/vendor"]]]);