(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{298:function(e,o,t){var map={"./Belle1.jpg":320,"./Belle2.jpg":321,"./Belle3.jpg":322,"./Belle4.jpg":323,"./Rapunzel1.jpg":324,"./Rapunzel2.jpg":325,"./Rapunzel3.jpg":326,"./Rapunzel4.jpg":327,"./slime1.jpg":328,"./slime2.jpg":329,"./slime3.jpg":330,"./slime4.jpg":331};function l(e){var o=n(e);return t(o)}function n(e){if(!t.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}l.keys=function(){return Object.keys(map)},l.resolve=n,e.exports=l,l.id=298},299:function(e,o,t){var content=t(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(123).default)("2917f28c",content,!0,{sourceMap:!1})},320:function(e,o,t){e.exports=t.p+"img/Belle1.9940040.jpg"},321:function(e,o,t){e.exports=t.p+"img/Belle2.b3152dd.jpg"},322:function(e,o,t){e.exports=t.p+"img/Belle3.0b6b8c3.jpg"},323:function(e,o,t){e.exports=t.p+"img/Belle4.9442de6.jpg"},324:function(e,o,t){e.exports=t.p+"img/Rapunzel1.f2d80d4.jpg"},325:function(e,o,t){e.exports=t.p+"img/Rapunzel2.3f5a821.jpg"},326:function(e,o,t){e.exports=t.p+"img/Rapunzel3.f5f4db1.jpg"},327:function(e,o,t){e.exports=t.p+"img/Rapunzel4.f70108c.jpg"},328:function(e,o,t){e.exports=t.p+"img/slime1.10b238d.jpg"},329:function(e,o,t){e.exports=t.p+"img/slime2.5f4c6c2.jpg"},330:function(e,o,t){e.exports=t.p+"img/slime3.8737b95.jpg"},331:function(e,o,t){e.exports=t.p+"img/slime4.5b5ed1f.jpg"},332:function(e,o,t){"use strict";var l=t(10),n=t(2),c=t(96),r=t(17),d=t(13),m=t(43),h=t(178),f=t(95),v=t(177),k=t(4),w=t(44),x=t(71).f,N=t(30).f,_=t(16).f,C=t(333).trim,M="Number",y=n.Number,A=y.prototype,j=m(w(A))==M,z=function(e){if(f(e))throw TypeError("Cannot convert a Symbol value to a number");var o,t,l,n,c,r,d,code,m=v(e,"number");if("string"==typeof m&&m.length>2)if(43===(o=(m=C(m)).charCodeAt(0))||45===o){if(88===(t=m.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(m.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+m}for(r=(c=m.slice(2)).length,d=0;d<r;d++)if((code=c.charCodeAt(d))<48||code>n)return NaN;return parseInt(c,l)}return+m};if(c(M,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,S=function(e){var o=arguments.length<1?0:e,t=this;return t instanceof S&&(j?k((function(){A.valueOf.call(t)})):m(t)!=M)?h(new y(z(o)),t,S):z(o)},E=l?x(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;E.length>$;$++)d(y,I=E[$])&&!d(S,I)&&_(S,I,N(y,I));S.prototype=A,A.constructor=S,r(n,M,S)}},333:function(e,o,t){var l=t(20),n=t(11),c="["+t(334)+"]",r=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),m=function(e){return function(o){var t=n(l(o));return 1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(d,"")),t}};e.exports={start:m(1),end:m(2),trim:m(3)}},334:function(e,o){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},335:function(e,o,t){"use strict";t(299)},336:function(e,o,t){var l=t(122)(!1);l.push([e.i,".straight-image-block--mobile[data-v-df81018c]{display:none}@media(max-width:675px){.straight-image-block--mobile[data-v-df81018c]{display:block;position:relative}}.straight-image-block--mobile .image-block[data-v-df81018c]{display:block;position:absolute}.straight-image-block--mobile .image-block img[data-v-df81018c]{width:100%;border:2px solid #000}",""]),e.exports=l},358:function(e,o,t){"use strict";t.r(o);t(332),t(70);var l={name:"FlyAwayImageComponent",props:{imageShow:{type:String,default:function(){return"straight"}},imageNumber:{type:Number,default:0},modelData:{type:Object,defalut:{}}},data:function(){for(var e=[],i=0;i<this.$props.imageNumber;i++)e[i]=i+1;return{touchX:0,touchY:0,imageZNumber:e,firstImageNum:1}},methods:{getTouchStart:function(e){this.$data.touchList=e.changedTouches[0],e.changedTouches[0].target.offsetParent.style.transition="none"},touchmove:function(e){var o=e.changedTouches&&e.changedTouches[0],t=this.$data.touchList,l=Math.floor(o.pageX-t.pageX),n=Math.floor(o.pageY-t.pageY);t.target.offsetParent.style.transform="translate(".concat(l,"px, ").concat(n,"px)"),this.$data.touchX=l,this.$data.touchY=n},getTouchEnd:function(e){var o=(e.changedTouches&&e.changedTouches[0]).target.offsetParent;this.$data.touchX=0,this.$data.touchY=0,o.style.transition="transform 1s ease 0s",o.style.transform="translate(0px, 0px)",this.$data.firstImageNum<this.$props.imageNumber?this.$data.firstImageNum+=1:this.$data.firstImageNum=1}}},n=(t(335),t(29)),component=Object(n.a)(l,(function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",{staticClass:"straight-image-block--mobile",on:{touchstart:e.getTouchStart,touchmove:e.touchmove,touchend:e.getTouchEnd}},e._l(e.imageNumber,(function(o){return l("div",{key:e.modelData.id+"_"+e.modelData.title+"_"+o,staticClass:"image-block",style:{"z-index":e.firstImageNum===o?"99":"1"}},[l("img",{attrs:{src:t(298)("./"+e.modelData.id+o+".jpg")}})])})),0)}),[],!1,null,"df81018c",null);o.default=component.exports},364:function(e,o,t){var content=t(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(123).default)("32aec299",content,!0,{sourceMap:!1})},443:function(e){e.exports=JSON.parse('[{"id":"slime","title":"利姆路 坦派斯特","description":"","content":"","imageNumber":4,"Origin":"關於我轉生變成史萊姆這檔事"},{"id":"Belle","title":"貝兒","description":"","content":"","imageNumber":4,"Origin":"美女與野獸"},{"id":"Rapunzel","title":"樂佩","description":"","content":"","imageNumber":4,"Origin":"長髮公主"}]')},444:function(e,o,t){"use strict";t(364)},445:function(e,o,t){var l=t(122)(!1);l.push([e.i,".ModelCollectionArea[data-v-7155ce96]{margin:30px auto;padding:0 30px}.ModelCollectionArea .change-button-block[data-v-7155ce96]{display:flex}.ModelCollectionArea .change-button-block button[data-v-7155ce96]{margin:0 20px;border:2px solid #000;border-radius:4px;color:#000;background-color:#fff;padding:8px 10px}@media(max-width:675px){.ModelCollectionArea .collection-block .straight-image-block--pc[data-v-7155ce96]{display:none}}.ModelCollectionArea .collection-block .straight-image-block--pc .image-block[data-v-7155ce96]{display:block}.ModelCollectionArea .collection-block .straight-image-block--pc .image-block img[data-v-7155ce96]{width:100%;border:2px solid #000}.ModelCollectionArea .collection-block .horizontal-image-block--pc[data-v-7155ce96]{display:flex;overflow:hidden;height:300px;padding:20px 0;position:relative}@media(max-width:675px){.ModelCollectionArea .collection-block .horizontal-image-block--pc[data-v-7155ce96]{display:none}}.ModelCollectionArea .collection-block .horizontal-image-block--pc .image-block[data-v-7155ce96]{margin:5px 20px;height:100%;transition:transform 1s}.ModelCollectionArea .collection-block .horizontal-image-block--pc .image-block img[data-v-7155ce96]{height:100%;width:350px;-o-object-fit:scale-down;object-fit:scale-down}.ModelCollectionArea .collection-block .horizontal-image-block--pc .image-move-left--button[data-v-7155ce96],.ModelCollectionArea .collection-block .horizontal-image-block--pc .image-move-right--button[data-v-7155ce96]{top:50%;height:150px;transform:translateY(-50%);background-color:hsla(0,0%,75.3%,.9);border-color:rgba(0,0,0,.5);border-radius:4px;width:50px;position:absolute;z-index:2}.ModelCollectionArea .collection-block .horizontal-image-block--pc .image-move-right--button[data-v-7155ce96]{right:0}.ModelCollectionArea .collection-block .horizontal-image-block--pc .image-move-left--button[data-v-7155ce96]{left:0}.ModelCollectionArea .collection-block .change-image-show-button--block[data-v-7155ce96]{display:flex;padding:20px 0;justify-content:center;align-items:center}.ModelCollectionArea .collection-block .change-image-show-button--block .image-show-button[data-v-7155ce96]{margin:0 20px;border:2px solid #000;border-radius:4px;color:#000;background-color:#fff;width:100px;height:30px}.ModelCollectionArea .collection-block .change-image-show-button--block .image-show-button[data-v-7155ce96]:hover{border-color:brown;background-color:#000;color:#fff}.ModelCollectionArea .collection-block .change-image-show-button--block .active-button[data-v-7155ce96]{background-color:#5f9ea0}.ModelCollectionArea .collection-block .horizontal-image-block--mobile[data-v-7155ce96]{display:none;position:relative}@media(max-width:675px){.ModelCollectionArea .collection-block .horizontal-image-block--mobile[data-v-7155ce96]{display:block;position:relative;width:100%;height:300px}.ModelCollectionArea .collection-block .horizontal-image-block--mobile .image-block[data-v-7155ce96]{width:100%;position:absolute;transition:left 1s,right 1s}.ModelCollectionArea .collection-block .horizontal-image-block--mobile .horizontal-image[data-v-7155ce96]{width:100%}.ModelCollectionArea .collection-block .horizontal-image-block--mobile .image-move-left--button[data-v-7155ce96],.ModelCollectionArea .collection-block .horizontal-image-block--mobile .image-move-right--button[data-v-7155ce96]{top:50%;height:150px;transform:translateY(-50%);background-color:hsla(0,0%,75.3%,.9);border-color:rgba(0,0,0,.5);border-radius:4px;width:50px;position:absolute;z-index:99}.ModelCollectionArea .collection-block .horizontal-image-block--mobile .image-move-right--button[data-v-7155ce96]{right:0}.ModelCollectionArea .collection-block .horizontal-image-block--mobile .image-move-left--button[data-v-7155ce96]{left:0}}",""]),e.exports=l},861:function(e,o,t){"use strict";t.r(o);t(39);var l=t(443),n={layout:"testNoteLayout",name:"ModelCollectionArea",components:{FlyAwayImageComponent:t(358).default},data:function(){return{modelCollectionImageLinstJson:l,imageShow:"straight",imageMove:0,seeNow:{}}},methods:{changeImageShowWay:function(e){this.$data.imageShow=e},imageMoveLeft:function(){this.$data.imageMove=this.$data.imageMove-1},imageMoveRight:function(){this.$data.imageMove=this.$data.imageMove+1},clickModel:function(e){var o=l.filter((function(o){return o.id===e}));this.$data.seeNow=o&&o[0]||{},this.$data.imageMove=0}},head:function(){return{title:"模型收藏區-銓"}}},c=(t(444),t(29)),component=Object(c.a)(n,(function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",{staticClass:"ModelCollectionArea"},[l("p",[e._v("ModelCollectionArea")]),e._v(" "),l("div",{staticClass:"change-button-block"},e._l(e.modelCollectionImageLinstJson,(function(o){return l("div",{key:"changeblock-"+o.id},[l("button",{on:{click:function(t){return e.clickModel(o.id)}}},[e._v(e._s(o.title))])])})),0),e._v(" "),e.seeNow&&e.seeNow.id?l("div",{staticClass:"collection-block"},[l("p",[e._v("作品來源: "+e._s(e.seeNow.Origin))]),e._v(" "),l("p",[e._v("標題: "+e._s(e.seeNow.title))]),e._v(" "),e.seeNow.content?l("p",[e._v("內容介紹: "+e._s(e.seeNow.content))]):e._e(),e._v(" "),e.seeNow.description?l("p",[e._v("物品描述: "+e._s(e.seeNow.description))]):e._e(),e._v(" "),l("p",[e._v("圖片顯示方式:")]),e._v(" "),l("div",{staticClass:"change-image-show-button--block"},[l("button",{staticClass:"image-show-button",class:"straight"===e.imageShow?"active-button":"",on:{click:function(o){return e.changeImageShowWay("straight")}}},[e._v("\n        直的\n      ")]),e._v(" "),l("button",{staticClass:"image-show-button",class:"horizontal"===e.imageShow?"active-button":"",on:{click:function(o){return e.changeImageShowWay("horizontal")}}},[e._v("\n        橫的\n      ")])]),e._v(" "),"straight"===e.imageShow?l("div",{staticClass:"straight-image-block--pc"},e._l(e.seeNow.imageNumber,(function(o){return l("div",{key:e.seeNow.id+"_"+e.seeNow.title+"_"+o,staticClass:"image-block"},[l("img",{attrs:{src:t(298)("./"+e.seeNow.id+o+".jpg")}})])})),0):e._e(),e._v(" "),l("FlyAwayImageComponent",{attrs:{imageNumber:e.seeNow.imageNumber,modelData:e.seeNow,imageShow:"straight"}}),e._v(" "),l("div",["horizontal"===e.imageShow?l("div",{staticClass:"horizontal-image-block--pc"},[e.imageMove+e.seeNow.imageNumber>1?l("button",{staticClass:"image-move-left--button",on:{click:e.imageMoveLeft}},[e._v("\n          L\n        ")]):e._e(),e._v(" "),e._l(e.seeNow.imageNumber,(function(o){return l("div",{key:e.seeNow.id+"_"+e.seeNow.title+"_"+o,staticClass:"image-block",style:{transform:"translate("+400*e.imageMove+"px, 0px)"}},[l("img",{staticClass:"horizontal-image",attrs:{src:t(298)("./"+e.seeNow.id+o+".jpg")}})])})),e._v(" "),e.imageMove<0?l("button",{staticClass:"image-move-right--button",on:{click:e.imageMoveRight}},[e._v("\n          R\n        ")]):e._e()],2):e._e()])],1):e._e()])}),[],!1,null,"7155ce96",null);o.default=component.exports;installComponents(component,{FlyAwayImageComponent:t(358).default})}}]);