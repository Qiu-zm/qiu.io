(window.webpackJsonp=window.webpackJsonp||[]).push([["about"],{"06a9":function(t,a,e){},4374:function(t,a,e){"use strict";e("06a9")},4494:function(t,a,e){t.exports=e.p+"static/img/goapp_banner_zh.92d7ac19.gif"},"51c4":function(t,a,e){},"5a56":function(t,a,e){},"730d":function(t,a,e){t.exports=e.p+"static/img/goapp_banner_en.c88cbf7d.gif"},"93e3":function(t,a,e){"use strict";e("51c4")},a3f5:function(t,a,e){t.exports=e.p+"static/img/content-icon-reward-disabled@3x.4a627377.png"},bb51:function(t,a,e){"use strict";e.r(a);var s=(e("e7e5"),e("d399")),i=e("043a"),n=e("0445"),l=e("7c53"),o=e("09d1"),c=e("cd54"),r=e("7b38"),u={name:"Home",components:{},data:()=>({account:"",CLOWNGAMEBalance:0,ClowngamePrice:0,OverallMobility:0,TotalPool:0,destroyed:0,timer:"",topval:"0px",leftval:"0px",transitionval:"",scaleval:"scale(0)",topval_b:"0px",leftval_b:"0px",transitionval_b:"",scaleval_b:"scale(0)",toast:null}),created(){},mounted(){this.init()},computed:{accounts(){return this.$store.state.account}},watch:{accounts(t,a){t!=a&&(this.account=t,this.init())}},methods:{init(){this.timer&&clearTimeout(this.timer);var t=this;let a=t.account=this.$store.state.account;this.getbalanceOf(i.c,a).then(async a=>{t.CLOWNGAMEBalance=await t.web3.utils.fromWei(a,"mwei")}),this.getbalanceOf(i.h,Object(n.f)()).then(async a=>{this.getbalanceOf(i.h,Object(n.c)()).then(async e=>{this.getbalanceOf(i.b,Object(n.c)()).then(async s=>{this.getbalanceOf(i.c,Object(n.f)()).then(async i=>{t.ClowngamePrice=await(s/e*t.web3.utils.fromWei(a,"ether")/t.web3.utils.fromWei(i,"mwei")),t.timer=setTimeout(()=>{t.init()},6e3)})})})})},mouChange(t){this.topval=t.offsetY+"px",this.leftval=t.offsetX+"px",setTimeout(()=>{this.transitionval="all 1s",this.scaleval="scale(145)"},10)},mouseLeave(t){this.scaleval="scale(0)",this.topval=t.offsetY+"px",this.leftval=t.offsetX+"px",setTimeout(()=>{this.transitionval="all 0s"},10)},mouChangeB(t){this.topval_b=t.offsetY+"px",this.leftval_b=t.offsetX+"px",setTimeout(()=>{this.transitionval_b="all 1s",this.scaleval_b="scale(145)"},10)},mouseLeaveB(t){this.scaleval_b="scale(0)",this.topval_b=t.offsetY+"px",this.leftval_b=t.offsetX+"px",setTimeout(()=>{this.transitionval_b="all 0s"},10)},Popup(t,a,e){let i="zh-CN"==this.$i18n.locale?a:e;"loading"==t?this.toast=s.a.loading({message:i,forbidClick:!0,duration:0}):"success"==t?s.a.success(i):"fail"==t&&s.a.fail(i)},getairdrop(){let t=this;t.Popup("loading","领取中...","Receiving...");let a=new t.web3.eth.Contract(Object(r.a)(),Object(r.b)());a.methods.iskongtou().call(function(e,s){s?(t.toast.clear(),t.Popup("fail","已领取","already received")):a.methods.kongtou(Object(r.c)()).send({from:t.$store.state.account},function(a,e){t.toast.clear(),e?t.Popup("success","领取成功","success"):t.Popup("fail","领取失败","failure")})})},gopath(t){this.$router.push(t)},golink(t){window.open(t)},getbalanceOf:(t,a)=>new Promise((e,s)=>{t.methods.balanceOf(a).call(function(t,a){t?s(t):e(a)})}),formatNum(t,a=2,e=6){if(1*t<0)return 0;let s;if((t=""+t).indexOf(".")>0)if(t.split(".")[0].length>4){s=t.split(".")[0]+"."+t.split(".")[1].substring(0,a)}else{s=t.split(".")[0]+"."+t.split(".")[1].substring(0,e)}else s=t;return s}},beforeDestroy(){clearTimeout(this.timer),this.timer=null},components:{Banner:o.a}},f=(e("4374"),e("2877")),p=Object(f.a)(u,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Clowngame"},[s("div",{staticClass:"details"},[s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("b1cf"),alt:""}}),t._v(" "+t._s(t.$t("clowngame.game01"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v(t._s(parseInt(t.CLOWNGAMEBalance)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("ffdb"),alt:""}}),t._v(" "+t._s(t.$t("clowngame.game02"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v("$ "+t._s(t.formatNum(t.ClowngamePrice,2,8)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-around"}},[s("van-col",{staticClass:"buy btn_act",attrs:{span:"12"},on:{click:function(a){return t.golink("https://pancakeswap.finance/swap?outputCurrency=0x2a1eb323ba7d71e5985bb6f571328618be0f4178")}}},[t._v(t._s(t.$t("clowngame.game03")))]),s("van-col",{staticClass:"klink btn_bg_c",attrs:{span:"12"},on:{click:function(a){return t.golink("https://www.dextools.io/app/pancakeswap/pair-explorer/0x2a1eb323ba7d71e5985bb6f571328618be0f4178")}}},[t._v(t._s(t.$t("clowngame.game04")))])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-around"}},[s("van-col",{staticClass:"buy btn_act",attrs:{span:"12"},on:{click:function(a){return t.golink("https://www.clown-coin.com/data/ClownGameAudit.pdf")}}},[t._v(t._s(t.$t("clowngame.game06")))]),s("van-col",{staticClass:"klink btn_bg_c",attrs:{span:"12"},on:{click:function(a){return t.golink("https://www.clown-coin.com/data/clowngameWhitePaper.pdf")}}},[t._v(t._s(t.$t("clowngame.game07")))])],1),s("div",{staticClass:"details_row air_drop"},[s("div",{staticClass:"airdrop",on:{mouseenter:function(a){return t.mouChange(a)},mouseleave:function(a){return t.mouseLeave(a)},click:t.getairdrop}},[t._v(" "+t._s(t.$t("clowngame.game05"))+" "),s("span",{staticClass:"airdrop_bg",style:{top:t.topval,left:t.leftval,transform:t.scaleval,transition:t.transitionval}})])]),s("div",{staticClass:"details_row air_drop_two"},[s("div",{staticClass:"airdrop",on:{mouseenter:function(a){return t.mouChangeB(a)},mouseleave:function(a){return t.mouseLeaveB(a)},click:function(a){return t.golink("https://bscscan.com/address/0x2a1eb323ba7d71e5985bb6f571328618be0f4178#code")}}},[t._v(" "+t._s(t.$t("clowngame.game08"))+" "),s("span",{staticClass:"airdrop_bg",style:{top:t.topval_b,left:t.leftval_b,transform:t.scaleval_b,transition:t.transitionval_b}})])])],1),s("div",{staticClass:"serve"},[s("van-row",{on:{click:function(a){return t.gopath("/nftbazaar")}}},["zh-CN"===this.$i18n.locale?s("van-col",[s("img",{staticClass:"img",attrs:{src:e("4494"),alt:""}})]):s("van-col",[s("img",{staticClass:"img",attrs:{src:e("730d"),alt:""}})])],1)],1)])},[],!1,null,"634fcb7f",null).exports,v={name:"Home",components:{},data:()=>({account:"",CLOWNBalance:0,CLOWNPrice:0,OverallMobility:0,BonusPools:0,TotalPool:0,destroyed:0,timer:"",topval:"0px",leftval:"0px",transitionval:"",toast:null,scaleval:"scale(0)",isgit:!0}),created(){},mounted(){this.init()},computed:{accounts(){return this.$store.state.account},ClownBalance(){return this.$store.state.balance}},watch:{accounts(t,a){t!=a&&(this.account=t,this.init())},ClownBalance(t,a){t!=a&&(this.CLOWNBalance=t)}},methods:{init(){this.timer&&clearTimeout(this.timer);var t=this;let a=t.account=this.$store.state.account;this.getbalanceOf(i.d,a).then(async a=>{t.CLOWNBalance=await t.web3.utils.fromWei(a,"gwei"),t.$store.commit("setbalance",t.CLOWNBalance)}),this.getbalanceOf(i.d,"0x000000000000000000000000000000000000dead").then(async a=>{t.destroyed=t.web3.utils.fromWei(a,"gwei")}),this.getbalanceOf(i.h,Object(n.d)()).then(async a=>{t.OverallMobility=await t.web3.utils.fromWei(a,"ether"),this.getbalanceOf(i.h,Object(n.c)()).then(async e=>{this.getbalanceOf(i.b,Object(n.c)()).then(async s=>{t.TotalPool=await(s/e*t.web3.utils.fromWei(a,"ether")*2),this.getbalanceOf(i.d,Object(n.d)()).then(async i=>{t.CLOWNPrice=await(s/e*t.web3.utils.fromWei(a,"ether")/t.web3.utils.fromWei(i,"gwei")*1e6),t.timer=setTimeout(()=>{t.init()},6e3)})})})}),this.getBalance()},Popup(t,a,e){let i="zh-CN"==this.$i18n.locale?a:e;"loading"==t?this.toast=s.a.loading({message:i,forbidClick:!0,duration:0}):"success"==t?s.a.success(i):"fail"==t&&s.a.fail(i)},mouChange(t){this.topval=t.offsetY+"px",this.leftval=t.offsetX+"px",setTimeout(()=>{this.transitionval="all 1s",this.scaleval="scale(145)"},10)},mouseLeave(t){this.scaleval="scale(0)",this.topval=t.offsetY+"px",this.leftval=t.offsetX+"px",setTimeout(()=>{this.transitionval="all 0s"},10)},gopath(t){this.$router.push(t)},golink(t){window.open(t)},getbalanceOf:(t,a)=>new Promise((e,s)=>{t.methods.balanceOf(a).call(function(t,a){t?s(t):e(a)})}),getBalance(){var t=this;t.web3.eth.getBalance(Object(l.b)()).then(a=>{t.BonusPools=t.web3.utils.fromWei(a,"ether")})},formatNum(t,a=2,e=6){if(1*t<0)return 0;let s;if((t=""+t).indexOf(".")>0)if(t.split(".")[0].length>4){s=t.split(".")[0]+"."+t.split(".")[1].substring(0,a)}else{s=t.split(".")[0]+"."+t.split(".")[1].substring(0,e)}else s=t;return s}},beforeDestroy(){clearTimeout(this.timer),this.timer=null},components:{Banner:o.a,Babyclown:c.default,ClownGame:p}},m=(e("93e3"),Object(f.a)(v,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("div",[s("Banner")],1),s("div",{staticClass:"details"},[s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("b1cf"),alt:""}}),t._v(" "+t._s(t.$t("home.home06"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v(t._s(parseInt(t.CLOWNBalance)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("a0fa"),alt:""}}),t._v(" "+t._s(t.$t("home.home01"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v("$ "+t._s(t.formatNum(t.TotalPool)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("ffdb"),alt:""}}),t._v(" "+t._s(t.$t("home.home02"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v("$ "+t._s(t.formatNum(t.CLOWNPrice)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("22c3"),alt:""}}),t._v(" "+t._s(t.$t("home.home03"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v(t._s(t.formatNum(t.OverallMobility)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("a3f5"),alt:""}}),t._v(" "+t._s(t.$t("home.home04"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v(t._s(t.formatNum(t.BonusPools)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-between"}},[s("van-col",{staticClass:"row_l"},[s("img",{attrs:{src:e("115a"),alt:""}}),t._v(" "+t._s(t.$t("home.home05"))+" ")]),s("van-col",{staticClass:"row_r"},[s("div",[t._v(t._s(parseInt(t.destroyed)))])])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-around"}},[s("van-col",{staticClass:"buy btn_act",attrs:{span:"12"},on:{click:function(a){return t.golink("https://pancakeswap.finance/swap?outputCurrency=0xfa949ef822125233f1e1a0691c13977b4354b257")}}},[t._v(t._s(t.$t("home.home07")))]),s("van-col",{staticClass:"klink btn_bg_c",attrs:{span:"12"},on:{click:function(a){return t.golink("https://www.dextools.io/app/pancakeswap/pair-explorer/0xfa949ef822125233f1e1a0691c13977b4354b257")}}},[t._v(t._s(t.$t("home.home08")))])],1),s("van-row",{staticClass:"details_row",attrs:{type:"flex",align:"center",justify:"space-around"}},[s("van-col",{staticClass:"buy btn_act",attrs:{span:"12"},on:{click:function(a){return t.golink("https://www.clown-coin.com/data/ClownAudit.pdf")}}},[t._v(t._s(t.$t("home.home15")))]),s("van-col",{staticClass:"klink btn_bg_c",attrs:{span:"12"},on:{click:function(a){return t.golink("https://www.clown-coin.com/data/ClownWhitePaper.pdf")}}},[t._v(t._s(t.$t("home.home16")))])],1),s("div",{staticClass:"details_row"},[s("div",{staticClass:"airdrop",on:{mouseenter:function(a){return t.mouChange(a)},mouseleave:function(a){return t.mouseLeave(a)},click:function(a){return t.golink("https://bscscan.com/address/0xfA949EF822125233f1e1A0691c13977B4354B257#code")}}},[t._v(" "+t._s(t.$t("home.home17"))+" "),s("span",{staticClass:"airdrop_bg",style:{top:t.topval,left:t.leftval,transform:t.scaleval,transition:t.transitionval}})])])],1),s("Babyclown"),s("ClownGame")],1)},[],!1,null,"217e28e2",null));a.default=m.exports},cd56:function(t,a,e){"use strict";e.r(a);var s={name:"Swapdemo1Tabbar",data:()=>({active:0,tablist:[{title:"tabbar01",path:"/",icon:{inactive:e("d370"),active:e("410c")}},{title:"tabbar03",path:"/getbnb",icon:{inactive:e("f9c6"),active:e("7c3c")}},{title:"tabbar04",path:"/lplock",icon:{inactive:e("703d"),active:e("e894")}},{title:"tabbar06",path:"/apps",icon:{inactive:e("8cab"),active:e("0b50")}}]}),methods:{openlink(t){window.open(t)}}},i=(e("fee9"),e("2877")),n={name:"FromtendV2OfficialMain",components:{Tabber:Object(i.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tabbar"},[e("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.tablist,function(a,s){return e("van-tabbar-item",{key:s,attrs:{to:a.path},scopedSlots:t._u([{key:"icon",fn:function(t){return[e("img",{class:t.active?"active":"",attrs:{src:t.active?a.icon.active:a.icon.inactive}})]}}],null,!0)},[e("span",[t._v(t._s(t.$t("tabbar."+a.title)))])])}),1)],1)},[],!1,null,"668a0685",null).exports},directives:{},data:()=>({}),mounted(){},methods:{}},l=(e("ea46"),Object(i.a)(n,function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"centent"},[a("router-view")],1),a("Tabber",{staticClass:"tabber"})],1)},[],!1,null,"2e398696",null));a.default=l.exports},d55f:function(t,a,e){},ea46:function(t,a,e){"use strict";e("5a56")},fee9:function(t,a,e){"use strict";e("d55f")}}]);