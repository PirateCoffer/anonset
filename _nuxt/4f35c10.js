(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{884:function(e,t,r){var content=r(890);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("540b5a0d",content,!0,{sourceMap:!1})},889:function(e,t,r){"use strict";r(884)},890:function(e,t,r){(t=r(14)(!1)).push([e.i,".clickable{cursor:pointer}#app.theme--dark tr.clickable:hover{background:#292929!important}",""]),e.exports=t},924:function(e,t,r){"use strict";r.r(t);r(45),r(43),r(23),r(13),r(8),r(11),r(6),r(33);var n=r(28),o=(r(17),r(18),r(4),r(49),r(3)),c=(r(69),r(25));function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"HomePage",data:function(){return{expanded:[],search:"",headers:[{text:"Coin",value:"name",align:"left",sortable:!0},{text:"USD Price",value:"usd_price",width:120},{text:"Algorithm",value:"algo",align:"center"},{text:"Consensus",value:"consensus",width:120,align:"center"},{text:"Supply",value:"total_supply"},{text:"Blocks",value:"blocks"},{text:"Anonset",value:"total_anonset",width:100},{text:"Shielded Trx",value:"zzshield",width:120},{text:"Transparent Trx",value:"total_transparent_tx",width:140},{text:"",value:"data-table-expand",align:"end"}],items:[],table:{},assets:["BTC","ARRR","ZEC","XMR","PIVX","GRIN","CCX","DASH","XVG","PART","BTCP","ONION","NAV","ZEN","LOKI"],filter:{anonset:[{text:"Last Hour",value:"hour"},{text:"Last 4 Hours",value:"4hours"},{text:"Last 12 Hours",value:"12hours"},{text:"Last Day",value:"day"},{text:"Last Week",value:"week"},{text:"Last Month",value:"month"}],transparent:[{text:"Last Hour",value:"hour"},{text:"Last 4 Hours",value:"4hours"},{text:"Last 12 Hours",value:"12hours"},{text:"Last Day",value:"day"},{text:"Last Week",value:"week"},{text:"Last Month",value:"month"}]}}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setTable();case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.startSocket();case 2:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{setTable:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,f,d,v,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://cryptocompare.com",n={zzshield:"313,030",anonset_velocity:"281.34",total_anonset:"221,142",total_transparent_tx:"198,459",coinbase_tx:"1,168,086"},t.next=4,e.getCoins("coins");case 4:return o=t.sent,t.next=7,e.getChains();case 7:return c=t.sent,t.next=10,e.getPrices(e.assets);case 10:for(l=t.sent,f=0;f<e.assets.length;f++)d=e.assets[f],v=o[d],e.table[d]=f,h=m({name:v.CoinName.split(" ").join("&nbsp;"),symbol:d,logo:r+v.ImageUrl,usd_price:l[d].USD,algo:v.Algorithm,description:v.Description,consensus:v.ProofType,blocks:c[d].block_height||1168086,total_supply:v.MaxSupply&&v.MaxSupply>0?v.MaxSupply:21e6},n),"ARRR"===d&&(h.usd_price=.16714,h.total_supply=21e6,h.logo="/anonset/media/images/logo.png"),e.items.push(h);case 12:case"end":return t.stop()}}),t)})))()},clickRow:function(e,t){t.isExpanded?t.expand(!1):t.expand()},customFilter:function(e,t,r){return null!=e&&null!=t&&"boolean"!=typeof e&&(-1!==e.toString().toLocaleLowerCase().indexOf(t.toLocaleLowerCase())||-1!==r.symbol.toLocaleLowerCase().indexOf(t.toLocaleLowerCase()))},getCoins:function(){return this.$axios.$get("https://min-api.cryptocompare.com/data/all/coinlist").then((function(e){return _.get(e,"Data")}))},getPairs:function(e,t){return(!e||e instanceof MouseEvent)&&(e=this.assets),"string"==typeof e&&(e=[e]),t||(t=["USD"]),"string"==typeof t&&(t=[t]),[e,t]},getPrices:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function o(){var c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=r.getPairs(e,t),l=Object(n.a)(c,2),e=l[0],t=l[1],o.abrupt("return",r.$axios.$get("https://min-api.cryptocompare.com/data/pricemulti",{params:{fsyms:e.join(","),tsyms:t.join(",")}}));case 5:case"end":return o.stop()}}),o)})))()},getChains:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,f,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.assets,"0dda0595ed0b05955aa4ab2aea26d899f33f12192a23d4e3faab879f10ca465a",n=[],o=l(r);try{for(f=function(){var t=c.value,r="https://min-api.cryptocompare.com/data/blockchain/latest?fsym="+t,o=e.$axios.$get(r,{params:{api_key:"0dda0595ed0b05955aa4ab2aea26d899f33f12192a23d4e3faab879f10ca465a"}}).then((function(e){return"Success"===e.Response?e.Data:{symbol:t}}));n.push(o)},o.s();!(c=o.n()).done;)f()}catch(e){o.e(e)}finally{o.f()}return t.next=7,Promise.all(n);case 7:return d=t.sent,m=d.reduce((function(e,t){return e[t.symbol]=t,e}),{}),t.abrupt("return",m);case 10:case"end":return t.stop()}}),t)})))()},startSocket:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function o(){var c,f,d,m,v,h,y,x,w,k,_;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!r.socket){o.next=4;break}return c=r.socket,delete r.socket,o.abrupt("return",c.close());case 4:f=r.getPairs(e,t),d=Object(n.a)(f,2),e=d[0],t=d[1],m=new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=".concat("0dda0595ed0b05955aa4ab2aea26d899f33f12192a23d4e3faab879f10ca465a")),r.socket=m,v=[],h=l(t);try{for(h.s();!(y=h.n()).done;){x=y.value,w=l(e);try{for(w.s();!(k=w.n()).done;)_=k.value,v.push("5~CCCAGG~".concat(_,"~").concat(x))}catch(e){w.e(e)}finally{w.f()}}}catch(e){h.e(e)}finally{h.f()}m.addEventListener("open",(function(e){m.send(JSON.stringify({action:"SubAdd",subs:v}))})),m.addEventListener("message",(function(e){var data=e.data;if("5"===(data=JSON.parse(data)).TYPE){var symbol=data.FROMSYMBOL,t=data.PRICE;if(symbol&&t){var n=r.table[symbol];if(n>-1)r.items[n].usd_price=t}}})),m.addEventListener("error",(function(e){log("error",e)}));case 16:case"end":return o.stop()}}),o)})))()}}},h=(r(889),r(50)),y=r(61),x=r.n(y),w=r(232),k=r(859),C=r(227),O=r(871),S=r(882),j=r(923),R=r(860),L=r(137),P=r(872),V=r(886),A=r(42),D=r(873),T=r(916),E=r(56),M=r(246),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"pt-1",attrs:{fluid:""}},[r("v-row",[r("v-col",[r("v-card",{attrs:{tile:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"item-class":function(){return"clickable"},search:e.search,"custom-filter":e.customFilter,"disable-pagination":"","hide-default-footer":"","single-expand":"",expanded:e.expanded,"item-key":"symbol","show-expand":"","sort-by":"usd_price","sort-desc":""},on:{"update:expanded":function(t){e.expanded=t},"click:row":e.clickRow},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-sheet",{staticClass:"pa-5 d-flex justify-center align-center",attrs:{"min-height":"600"}},[r("v-progress-circular",{attrs:{size:220,width:7,color:"yellow darken-2",indeterminate:""}})],1)]},proxy:!0},{key:"top",fn:function(){return[r("v-toolbar",{attrs:{dense:"",flat:""}},[e._e(),e._v(" "),r("v-spacer"),e._v(" "),e._e(),e._v(" "),e._e(),e._v(" "),r("v-sheet",{staticClass:"pa-1",attrs:{color:"transparent","max-width":"400"}},[r("v-text-field",{attrs:{solo:"",dense:"","single-line":"","hide-details":"",rounded:"","prepend-inner-icon":"mdi-magnify",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),r("v-divider")]},proxy:!0},{key:"item.name",fn:function(t){var n=t.item;return[r("div",{staticClass:"d-flex align-center"},[r("v-avatar",{attrs:{size:"35"}},[r("img",{attrs:{src:n.logo}})]),e._v(" "),r("span",{staticClass:"pl-2"},[r("span",{domProps:{innerHTML:e._s(n.name)}}),e._v(" ("+e._s(n.symbol)+")")])],1)]}},{key:"item.usd_price",fn:function(t){var n=t.item;return[r("div",{staticClass:"d-flex align-center"},[r("span",{staticClass:"pl-2"},[e._v(e._s(e._f("dollars")(n.usd_price)))])])]}},{key:"item.total_supply",fn:function(t){var n=t.item;return[r("div",{staticClass:"d-flex align-center"},[r("span",{staticClass:"pl-2"},[e._v(e._s(e._f("number")(n.total_supply)))])])]}},{key:"item.blocks",fn:function(t){var n=t.item;return[r("div",{staticClass:"d-flex align-center"},[r("span",{staticClass:"pl-2"},[e._v(e._s(e._f("number")(n.blocks)))])])]}},{key:"expanded-item",fn:function(t){var n=t.headers,o=t.item;return[r("td",{staticClass:"py-3",attrs:{colspan:n.length},domProps:{textContent:e._s(o.description)}})]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VAvatar:w.a,VBtn:k.a,VCard:C.a,VCol:O.a,VContainer:S.a,VDataTable:j.a,VDivider:R.a,VProgressCircular:L.a,VRow:P.a,VSelect:V.a,VSheet:A.a,VSpacer:D.a,VTextField:T.a,VToolbar:E.a,VToolbarItems:M.a})}}]);