(function(t){function e(e){for(var o,a,u=e[0],s=e[1],c=e[2],p=0,f=[];p<u.length;p++)a=u[p],r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"0941":function(t,e,n){"use strict";var o=n("abfb"),r=n.n(o);r.a},"49c4":function(t,e,n){"use strict";(function(t){n("6b54");var o={v:3,q:{find:{"out.e.a":"1HWbpbCZHTBJmZxjFAmfHqgNjbEePkMqTW"},limit:1e3},r:{f:"[ reduce .[] as $tx ( {count:  0, value: 0} ; . | .count += 1 | .value += $tx.out[0].e.v ) ]"}},r=JSON.stringify(o),i=t.from(r).toString("base64"),a="https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/"+i;e["a"]={name:"Planaria",mounted:function(){var t=this;this.$root.$on("tipped",function(){t.msg="accounting the ledger...";try{t.$genesis.get(a).then(function(e){var n=e.data;t.txCount=n.u[0].count+n.c[0].count,t.totalReceived=n.u[0].value+n.c[0].value,t.tipped=!0})}catch(e){t.msg="network seems broken?"}})},data:function(){return{tipped:!1,txCount:0,totalReceived:0,msg:"You can't imagine how many people tipped, I swear...Tip to see it."}}}}).call(this,n("b639").Buffer)},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("Planaria"),t.tipping?n("div",{staticClass:"tip-container"},[t._l(t.amounts,function(e){return n("ul",{key:e},[n("button",{on:{click:function(n){return t.tip(e)}}},[t._v(t._s(e)+"satoshi")])])}),n("MoneyButton",{attrs:{to:"1HWbpbCZHTBJmZxjFAmfHqgNjbEePkMqTW",amount:t.tipAmount,currency:"BSV",label:"","client-identifier":"a487dbab0a83557b5b681456038be735","button-id":"1563118841480","button-data":"{}",type:"tip"},on:{payment:t.handlePayment}})],2):n("button",{on:{click:function(e){t.tipping=!t.tipping}}},[t._v("TIP")])],1)},u=[],s=n("1803"),c=n.n(s),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.tipped?t._e():n("p",[t._v(t._s(t.msg))]),t.tipped?n("p",[n("strong",[t._v(t._s(t.txCount))]),t._v(" people total\n    "),n("strong",[t._v(t._s(t.totalReceived))]),t._v(" satoshis\n    "),n("strong",[t._v("TIP")]),t._v("ed!\n  ")]):t._e()])},p=[],f=n("49c4"),d=f["a"],b=n("2877"),m=Object(b["a"])(d,l,p,!1,null,null,null),v=m.exports,g=function(t){return t/1e8},h={name:"HelloWorld",methods:{tip:function(t){this.tipAmount=g(t)},handlePayment:function(){this.$root.$emit("tipped"),this.msg="Bitcoin is the most efficient system, and will help us to stamp out dishonesty and fraud."}},data:function(){return{tipping:!1,amounts:[600,800,1e3,2e3,5e3,8e3,1e4],tipAmount:g(600),msg:"TIP YOUR MOTHER IF YOU WANT TO TIP"}},components:{MoneyButton:c.a,Planaria:v}},y=h,_=(n("0941"),Object(b["a"])(y,a,u,!1,null,"7951ee2e",null)),x=_.exports,P={name:"app",components:{HelloWorld:x}},O=P,j=(n("034f"),Object(b["a"])(O,r,i,!1,null,null,null)),w=j.exports,T=n("bc3a"),k=n.n(T);o["a"].config.productionTip=!1,o["a"].use({install:function(t){t.prototype.$genesis=k.a.create({baseURL:"https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN",headers:{key:"1PxLCzxHpt344JYTchMDBPaaxV5xhpJ4o7"}})}}),new o["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){},abfb:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.3978dedb.png"}});
//# sourceMappingURL=app.e2f919e1.js.map