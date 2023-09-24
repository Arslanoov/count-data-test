(function(){"use strict";var t={628:function(t,e,s){var r=s(7195),i=function(){var t=this,e=t._self._c;return e("router-view")},n=[],a={name:"App",components:{}},o=a,u=s(1001),c=(0,u.Z)(o,i,n,!1,null,null,null),m=c.exports,l=s(2241),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"links"},[e("div",{staticClass:"link"},[e("router-link",{attrs:{to:"/with-vuex"}},[t._v("With vuex")])],1),e("div",{staticClass:"link"},[e("router-link",{attrs:{to:"/without-vuex"}},[t._v("Without vuex")])],1)])},p=[],_={},d=(0,u.Z)(_,v,p,!1,null,"14ed359a",null),f=d.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-menu"},[e("h2",[t._v("With vuex")]),t.error?e("div",{staticClass:"app-menu__error"},[t._v(t._s(t.error))]):t._e(),e("div",{staticClass:"app-menu__filters filters"},[e("div",{staticClass:"filters__item filter"},[e("input",{staticClass:"filter__input",attrs:{id:"price",type:"number",min:"0"},domProps:{value:t.price},on:{input:function(e){return t.setPriceDebounced(e.target.value)}}}),e("label",{staticClass:"filter__label",attrs:{htmlFor:"price"}},[t._v(" Цена: "+t._s(t.price)+" ")])]),e("div",{staticClass:"filters__item filter"},[e("input",{staticClass:"filter__input",attrs:{id:"amount",type:"number",min:"0"},domProps:{value:t.amount},on:{input:function(e){return t.setAmountDebounced(e.target.value)}}}),e("label",{staticClass:"filter__label",attrs:{htmlFor:"amount"}},[t._v(" Кол-во: "+t._s(t.amount)+" ")])]),e("div",{staticClass:"filters__item filter"},[e("input",{staticClass:"filter__input",attrs:{id:"sum",type:"number",min:"0"},domProps:{value:t.sum},on:{input:function(e){return t.setSumDebounced(e.target.value)}}}),e("label",{staticClass:"filter__label",attrs:{htmlFor:"sum"}},[t._v(" Сумма: "+t._s(t.sum)+" ")])]),e("div",{staticClass:"filters__item filter"},[e("button",{staticClass:"filters__btn",attrs:{disabled:t.saving},on:{click:t.onSaveData}},[t._v(" Отправить ")]),e("div",{staticClass:"filters__data"},[t._v(" Local Storage: "),e("pre",[t._v(t._s(t.lsForm))])])])]),e("div",{staticClass:"app-menu__events events"},[e("h3",[t._v("События")]),t._l(t.events,(function(s){return e("div",{key:s.time,staticClass:"events__item event"},[t._v(" Создано: "+t._s(new Date(s.time).toLocaleString())+" "),e("br"),t._v(" Тип: "+t._s(s.type)+" "+t._s(s.data?.name)+" "),e("br"),s.data?[t._v(" Payload: "),e("pre",[t._v(t._s(s.data))])]:t._e()],2)}))],2)])},g=[],b=s(408);const S=300,C=(t,e)=>{let s=null;return(...r)=>{window.clearTimeout(s),s=window.setTimeout((()=>{t(...r)}),e)}},w=t=>new Promise((e=>setTimeout(e,t))),y=async()=>{await w(1e3);try{return JSON.parse(sessionStorage.getItem("form"))||{}}catch(t){return{}}},P=async(t={})=>{let e=1;const s=await y();return s.nonce&&(e=s.nonce+1),t.sum%2!==0?{success:!1,message:"Сумма должна быть четной"}:(sessionStorage.setItem("form",JSON.stringify({...t,nonce:e})),{success:!0})};var D={name:"AppMenu",components:{},data:()=>({lsForm:"{}"}),computed:(0,b.Se)({error:"error",saving:"saving",events:"sortedEvents",price:"price",amount:"amount",sum:"sum"}),created(){this.setPriceDebounced=C(this.setPrice,S),this.setAmountDebounced=C(this.setAmount,S),this.setSumDebounced=C(this.setSum,S)},methods:{...(0,b.nv)({saveData:"saveData",setPrice:"setPrice",setAmount:"setAmount",setSum:"setSum"}),async onSaveData(){await this.saveData(),await this.updateLsData()},async updateLsData(){const t=await y();this.lsForm=JSON.stringify(t,null,4)}}},x=D,O=(0,u.Z)(x,h,g,!1,null,"15b2fb2a",null),A=O.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-menu"},[e("h2",[t._v("Without vuex")]),t.error?e("div",{staticClass:"app-menu__error"},[t._v(t._s(t.error))]):t._e(),e("div",{staticClass:"app-menu__filters filters"},[e("div",{staticClass:"filters__item filter"},[e("input",{staticClass:"filter__input",attrs:{id:"price",type:"number",min:"0"},domProps:{value:t.price},on:{input:function(e){return t.setPriceDebounced(e.target.value)}}}),e("label",{staticClass:"filter__label",attrs:{htmlFor:"price"}},[t._v(" Цена: "+t._s(t.price)+" ")])]),e("div",{staticClass:"filters__item filter"},[e("input",{staticClass:"filter__input",attrs:{id:"amount",type:"number",min:"0"},domProps:{value:t.amount},on:{input:function(e){return t.setAmountDebounced(e.target.value)}}}),e("label",{staticClass:"filter__label",attrs:{htmlFor:"amount"}},[t._v(" Кол-во: "+t._s(t.amount)+" ")])]),e("div",{staticClass:"filters__item filter"},[e("input",{staticClass:"filter__input",attrs:{id:"sum",type:"number",min:"0"},domProps:{value:t.sum},on:{input:function(e){return t.setSumDebounced(e.target.value)}}}),e("label",{staticClass:"filter__label",attrs:{htmlFor:"sum"}},[t._v(" Сумма: "+t._s(t.sum)+" ")])]),e("div",{staticClass:"filters__item filter"},[e("button",{staticClass:"filters__btn",attrs:{disabled:t.saving},on:{click:t.onSaveData}},[t._v(" Отправить ")]),e("div",{staticClass:"filters__data"},[t._v(" Local Storage: "),e("pre",[t._v(t._s(t.lsForm))])])])]),e("div",{staticClass:"app-menu__events events"},[e("h3",[t._v("События")]),t._l(t.sortedEvents,(function(s){return e("div",{key:s.time,staticClass:"events__item event"},[t._v(" Создано: "+t._s(new Date(s.time).toLocaleString())+" "),e("br"),t._v(" Тип: "+t._s(s.type)+" "+t._s(s.data?.name)+" "),e("br"),s.data?[t._v(" Payload: "),e("pre",[t._v(t._s(s.data))])]:t._e()],2)}))],2)])},F=[];s(7658);const k="Изменение input",N="Отправка данных",Z="Ответ сервера",I=(t,e,s)=>({time:Number(new Date),type:t,data:e,name:s}),J=t=>Number(t.toFixed(2)),L=t=>Number.isFinite(Number(t))?Math.max(0,t):0;var j={name:"AppMenu",components:{},data:()=>({lsForm:"{}",price:0,amount:0,sum:0,error:null,saving:!1,events:[]}),computed:{sortedEvents(){return[...this.events].sort(((t,e)=>e.time-t.time))}},created(){this.setPriceDebounced=C(this.setPrice,S),this.setAmountDebounced=C(this.setAmount,S),this.setSumDebounced=C(this.setSum,S)},methods:{async onSaveData(){await this.saveData(),await this.updateLsData()},async updateLsData(){const t=await y();this.lsForm=JSON.stringify(t,null,4)},async saveData(){this.error=null,this.saving=!0,this.events.push(I(N,{form:{price:this.price,amount:this.amount,sum:this.sum},lsStorage:JSON.parse(sessionStorage.getItem("form"))}));const t=await P({price:this.price,amount:this.amount,sum:this.sum});t.success||(this.error=t.message),this.events.push(I(Z,{response:t,lsStorage:JSON.parse(sessionStorage.getItem("form"))})),this.saving=!1},setPrice(t){this.events.push(I(k,{name:"price"}));const e=L(t);this.price=e,0!==e?this.sum=J(e*this.amount):this.price=0},setAmount(t){this.events.push(I(k,{name:"amount"}));const e=L(t);this.amount=e,this.sum=J(this.price*e)},setSum(t){this.events.push(I(k,{name:"sum"}));const e=L(t);if(this.sum=J(e),0===this.price&&0===this.amount)return void(this.sum=0);if(0===this.price)return void(this.price=e/J(this.amount));const s=e/this.price;if(Number.isInteger(s))this.amount=s;else{const t=Math.floor(s);if(0===t)return this.amount=0,void(this.sum=0);this.amount=t,this.price=J(e/t)}}}},M=j,T=(0,u.Z)(M,E,F,!1,null,"0d58193e",null),W=T.exports;r.ZP.use(l.ZP);const $=[{path:"/",component:f},{path:"/with-vuex",component:A},{path:"/without-vuex",component:W}],q=new l.ZP({routes:$});r.ZP.use(b.ZP);var z=new b.ZP.Store({state:{price:0,amount:0,sum:0,error:null,saving:!1,events:[]},getters:{hasError:t=>!!t.error,error:t=>t.error,price:t=>t.price,amount:t=>t.amount,sum:t=>t.sum,saving:t=>t.saving,sortedEvents:t=>t.events.sort(((t,e)=>e.time-t.time))},mutations:{setError(t,e){t.error=e},clearError(t){t.error=null},addEvent(t,e){t.events.push(e)},startSaving(t){t.saving=!0},stopSaving(t){t.saving=!1},setPrice(t,e){t.price=e},setAmount(t,e){t.amount=e},setSum(t,e){t.sum=e}},actions:{async saveData({commit:t,getters:e}){t("clearError"),t("startSaving"),t("addEvent",I(N,{form:{price:e.price,amount:e.amount,sum:e.sum},lsStorage:JSON.parse(sessionStorage.getItem("form"))}));const s=await P({price:e.price,amount:e.amount,sum:e.sum});s.success||t("setError",s.message),t("addEvent",I(Z,{response:s,lsStorage:JSON.parse(sessionStorage.getItem("form"))})),t("stopSaving")},setPrice({commit:t,getters:e},s){t("addEvent",I(k,{name:"price"}));const r=L(s);t("setPrice",s),t("setSum",0!==r?J(r*e.amount):0)},setAmount({commit:t,getters:e},s){t("addEvent",I(k,{name:"amount"}));const r=L(s);t("setAmount",s),t("setSum",J(e.price*r))},setSum({commit:t,getters:e},s){t("addEvent",I(k,{name:"sum"}));const r=L(s);if(t("setSum",J(r)),0===e.price&&0===e.amount)return void t("setSum",0);if(0===e.price){const s=r/J(e.amount);return void t("setPrice",s)}const i=r/e.price;if(Number.isInteger(i))t("setAmount",i);else{const e=Math.floor(i);if(0===e)return t("setAmount",0),void t("setSum",0);t("setAmount",e),t("setPrice",J(r/e))}}}});r.ZP.config.productionTip=!1,new r.ZP({store:z,router:q,render:t=>t(m)}).$mount("#app")}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,r,i,n){if(!r){var a=1/0;for(m=0;m<t.length;m++){r=t[m][0],i=t[m][1],n=t[m][2];for(var o=!0,u=0;u<r.length;u++)(!1&n||a>=n)&&Object.keys(s.O).every((function(t){return s.O[t](r[u])}))?r.splice(u--,1):(o=!1,n<a&&(a=n));if(o){t.splice(m--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var m=t.length;m>0&&t[m-1][2]>n;m--)t[m]=t[m-1];t[m]=[r,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,n,a=r[0],o=r[1],u=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(u)var m=u(s)}for(e&&e(r);c<a.length;c++)n=a[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(m)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(628)}));r=s.O(r)})();
//# sourceMappingURL=app.a16c68cb.js.map