(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e2fa67a"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var a in o){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640")("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter;n({target:"Array",proto:!0,forced:!r("1dde")("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},"78c1":function(t,e,r){"use strict";r.r(e);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var i=r("2f62"),c=r("3de1"),a={name:"Home",components:{},data:function(){return{property:"value",language:"英文",addr:localStorage.getItem("setAccountAddr"),times:"",numbers:"",timedate:Object(c.e)(17816112e5,"YYYY年MM月DD日 hh:mm:ss"),price:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},Object(i.b)(["userName","phone","accountAddr","isLoading","Popup"])),mounted:function(){this.times=Object(c.a)(17816112e5),this.numbers=Object(c.c)(156.6854854242),this.price=Object(c.d)(3.45234)},methods:{doDispatch:function(){this.$store.dispatch("setUserName","成功修改vuex")},setphone:function(){this.$store.dispatch("setPhone","01987654321")},ispopup:function(){this.$store.dispatch("setLoding",!0)},setpopup:function(){this.$store.dispatch("setPopup",{open:!0,type:0,zh_CN:"这是成功提示",en:"This is a success tip"})},togglelanguage:function(){"zh-CN"===this.$i18n.locale?(this.language="英文",this.$i18n.locale="en-US"):(this.language="中文",this.$i18n.locale="zh-CN")},CopyUrl:function(){Object(c.b)(this.accountAddr)}}},u=r("2877"),s=Object(u.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("p",[t._v("格式化倒计时:"+t._s(t.times))]),r("p",[t._v("格式化时间:"+t._s(t.timedate))]),r("p",[t._v("格式化位数:"+t._s(t.numbers))]),r("p",[t._v("格式化金额："+t._s(t.price))]),r("div",[t._v("钱包地址:(localStorage)")]),r("div",[t._v(t._s(t.addr))]),r("div",{on:{click:function(e){return t.CopyUrl()}}},[t._v("钱包地址:(vuex)")]),r("div",[t._v(t._s(t.accountAddr))]),r("p",[t._v("userName:"+t._s(t.userName))]),r("van-button",{attrs:{type:"primary"},on:{click:t.doDispatch}},[t._v("修改username")]),r("p",[t._v("phone:"+t._s(t.phone))]),r("van-button",{attrs:{type:"primary"},on:{click:t.setphone}},[t._v("修改phone")]),r("p",[t._v("当前语种:"+t._s(t.language))]),r("van-button",{attrs:{type:"primary"},on:{click:t.togglelanguage}},[t._v("国际化")]),r("div",[t._v("是否弹窗"+t._s(t.isLoading))]),r("van-button",{attrs:{type:"primary"},on:{click:t.ispopup}},[t._v("关闭加载提示框")]),r("div",[t._v("是否弹窗"+t._s(t.Popup.open))]),r("van-button",{attrs:{type:"primary"},on:{click:t.setpopup}},[t._v("自定义弹窗")])],1)},[],!1,null,null,null);e.default=s.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),p=r("5135"),l=r("e8b5"),b=r("861d"),d=r("825a"),h=r("7b0b"),v=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),_=r("7418"),P=r("06cf"),S=r("9bf2"),E=r("d1e7"),k=r("9112"),N=r("6eeb"),D=r("5692"),x=r("f772"),$=r("d012"),C=r("90e3"),A=r("b622"),J=r("e538"),U=r("746f"),Y=r("d44e"),z=r("69f3"),I=r("b727").forEach,L=x("hidden"),T="Symbol",F="prototype",M=A("toPrimitive"),H=z.set,Q=z.getterFor(T),W=Object[F],q=o.Symbol,B=i("JSON","stringify"),G=P.f,K=S.f,R=j.f,V=E.f,X=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),rt=D("wks"),nt=o.QObject,ot=!nt||!nt[F]||!nt[F].findChild,it=a&&f(function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=G(W,e);n&&delete W[e],K(t,e,r),n&&t!==W&&K(W,e,n)}:K,ct=function(t,e){var r=X[t]=m(q[F]);return H(r,{type:T,tag:t,description:e}),a||(r.description=e),r},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,e,r){t===W&&ut(Z,e,r),d(t);var n=g(e,!0);return d(r),p(X,n)?(r.enumerable?(p(t,L)&&t[L][n]&&(t[L][n]=!1),r=m(r,{enumerable:y(0,!1)})):(p(t,L)||K(t,L,y(1,{})),t[L][n]=!0),it(t,n,r)):K(t,n,r)},st=function(t,e){d(t);var r=v(e),n=O(r).concat(bt(r));return I(n,function(e){a&&!ft.call(r,e)||ut(t,e,r[e])}),t},ft=function(t){var e=g(t,!0),r=V.call(this,e);return!(this===W&&p(X,e)&&!p(Z,e))&&(!(r||!p(this,e)||!p(X,e)||p(this,L)&&this[L][e])||r)},pt=function(t,e){var r=v(t),n=g(e,!0);if(r!==W||!p(X,n)||p(Z,n)){var o=G(r,n);return!o||!p(X,n)||p(r,L)&&r[L][n]||(o.enumerable=!0),o}},lt=function(t){var e=R(v(t)),r=[];return I(e,function(t){p(X,t)||p($,t)||r.push(t)}),r},bt=function(t){var e=t===W,r=R(e?Z:v(t)),n=[];return I(r,function(t){!p(X,t)||e&&!p(W,t)||n.push(X[t])}),n};(u||(N((q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=C(t),r=function(t){this===W&&r.call(Z,t),p(this,L)&&p(this[L],e)&&(this[L][e]=!1),it(this,e,y(1,t))};return a&&ot&&it(W,e,{configurable:!0,set:r}),ct(e,t)})[F],"toString",function(){return Q(this).tag}),N(q,"withoutSetter",function(t){return ct(C(t),t)}),E.f=ft,S.f=ut,P.f=pt,w.f=j.f=lt,_.f=bt,J.f=function(t){return ct(A(t),t)},a&&(K(q[F],"description",{configurable:!0,get:function(){return Q(this).description}}),c||N(W,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),I(O(rt),function(t){U(t)}),n({target:T,stat:!0,forced:!u},{for:function(t){var e=String(t);if(p(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(p(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,e){return void 0===e?m(t):st(m(t),e)},defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:f(function(){_.f(1)})},{getOwnPropertySymbols:function(t){return _.f(h(t))}}),B)&&n({target:"JSON",stat:!0,forced:!u||f(function(){var t=q();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))})},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,B.apply(null,o)}});q[F][M]||k(q[F],M,q[F].valueOf),Y(q,T),$[L]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n(function(){r.call(null,e||function(){throw 1},1)})}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75");n({target:"Object",stat:!0,forced:r("d039")(function(){i(1)})},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),a=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,p=6==t,l=7==t,b=5==t||p;return function(d,h,v,g){for(var y,m,O=i(d),w=o(O),j=n(h,v,3),_=c(w.length),P=0,S=g||a,E=e?S(d,_):r||l?S(d,0):void 0;_>P;P++)if((b||P in w)&&(m=j(y=w[P],P,O),t))if(e)E[P]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return P;case 2:u.call(E,y)}else switch(t){case 4:return!1;case 7:u.call(E,y)}return p?-1:s||f?f:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=c(t),o=a.f,s=i(n),f={},p=0;s.length>p;)void 0!==(r=o(n,e=s[p++]))&&u(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),u=o(function(){c(1)});n({target:"Object",stat:!0,forced:!a||u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n}}]);