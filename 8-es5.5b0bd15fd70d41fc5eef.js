function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _inherits(n,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(l&&l.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),l&&_setPrototypeOf(n,l)}function _setPrototypeOf(n,l){return(_setPrototypeOf=Object.setPrototypeOf||function(n,l){return n.__proto__=l,n})(n,l)}function _createSuper(n){return function(){var l,t=_getPrototypeOf(n);if(_isNativeReflectConstruct()){var e=_getPrototypeOf(this).constructor;l=Reflect.construct(t,arguments,e)}else l=t.apply(this,arguments);return _possibleConstructorReturn(this,l)}}function _possibleConstructorReturn(n,l){return!l||"object"!=typeof l&&"function"!=typeof l?_assertThisInitialized(n):l}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5VnZ":function(n,l,t){"use strict";t.r(l);var e,u,r=t("8Y7J"),o=function n(){_classCallCheck(this,n)},c=t("pMnS"),b=t("SVse"),i=t("s7LF"),s=t("mrSG"),a=t("CoC1"),p=t("8nyR"),f=t("e1JD"),g=[{path:"count.countSub.val",existingEngine:sessionStorage}],d=(e=function(n){_inherits(t,n);var l=_createSuper(t);function t(){return _classCallCheck(this,t),l.apply(this,arguments)}return _createClass(t,[{key:"setDebounceSubValue",value:function(n){this.ctx.setState({val:n})}}]),t}(p.b),Object(s.a)([Object(a.c)(),Object(a.b)(),Object(s.c)(0,Object(a.e)("value")),Object(s.c)(0,Object(a.d)("val")),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[Number]),Object(s.b)("design:returntype",void 0)],e.prototype,"setDebounceSubValue",null),e=Object(s.a)([Object(a.f)(g),Object(a.g)(),Object(f.e)({name:"countSub",defaults:{val:100}})],e)),y=t("HDdC"),m=t("lJxs"),O=new f.g("count"),h=(u=function(n){_inherits(t,n);var l=_createSuper(t);function t(){return _classCallCheck(this,t),l.apply(this,arguments)}return _createClass(t,[{key:"increment",value:function(){this.ctx.setState((function(n){return Object.assign(Object.assign({},n),{val:n.val+1})}))}},{key:"countSubIncrement",value:function(){this.ctx.setState((function(n){return Object.assign(Object.assign({},n),{countSub:{val:n.countSub.val+1}})}))}},{key:"decrement",value:function(){this.setState((function(n){return Object.assign(Object.assign({},n),{val:n.val-1})}))}},{key:"setDebounceValue",value:function(n){this.ctx.setState((function(l){return Object.assign(Object.assign({},l),{val:parseFloat(n)||0})}))}},{key:"values$",get:function(){return this.state$.pipe(Object(m.a)((function(n){return n.countSub})))}}]),t}(p.b),Object(s.a)([Object(a.a)(),Object(s.b)("design:type",y.a),Object(s.b)("design:paramtypes",[])],u.prototype,"values$",null),Object(s.a)([Object(a.b)(),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[]),Object(s.b)("design:returntype",void 0)],u.prototype,"increment",null),Object(s.a)([Object(a.b)(),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[]),Object(s.b)("design:returntype",void 0)],u.prototype,"countSubIncrement",null),Object(s.a)([Object(a.b)(),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[]),Object(s.b)("design:returntype",void 0)],u.prototype,"decrement",null),Object(s.a)([Object(a.c)(),Object(a.b)(),Object(s.c)(0,Object(a.e)("val")),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[Object]),Object(s.b)("design:returntype",void 0)],u.prototype,"setDebounceValue",null),u=Object(s.a)([Object(a.g)(),Object(f.e)({name:O,defaults:{val:0},children:[d]})],u)),v=function n(l,t){_classCallCheck(this,n),this.counter=l,this.subCount=t},j=r.pb({encapsulation:2,styles:[],data:{}});function C(n){return r.Ib(2,[(n()(),r.rb(0,0,null,null,1,"a",[["href","https://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Fcount%2Fcount.state.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),r.rb(1,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(n()(),r.rb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),r.Gb(-1,null,["CountState"])),(n()(),r.Gb(-1,null,[" PS: CountSubState will be persistence in sessionStorage "])),(n()(),r.rb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(7,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),r.Gb(-1,null,["Selection:"])),(n()(),r.rb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.Gb(10,null,[" counter.state$ = ","\n"])),r.Db(131072,b.b,[r.i]),r.Db(0,b.f,[]),(n()(),r.rb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(14,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),r.Gb(15,null,[" counter.values$ = "," "])),r.Db(131072,b.b,[r.i]),r.Db(0,b.f,[]),(n()(),r.rb(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(21,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),r.Gb(-1,null,["Actions:"])),(n()(),r.rb(23,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.increment()&&e),e}),null,null)),(n()(),r.Gb(-1,null,[" increment\n"])),(n()(),r.rb(25,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.countSubIncrement()&&e),e}),null,null)),(n()(),r.Gb(-1,null,[" countSubIncrement\n"])),(n()(),r.rb(27,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.decrement()&&e),e}),null,null)),(n()(),r.Gb(-1,null,["decrement"])),(n()(),r.rb(29,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.reset()&&e),e}),null,null)),(n()(),r.Gb(-1,null,["reset"])),(n()(),r.rb(31,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(32,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(33,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),r.Gb(-1,null,["counter model:"])),(n()(),r.rb(35,0,null,null,6,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,u=n.component;return"input"===l&&(e=!1!==r.Bb(n,36)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==r.Bb(n,36).onTouched()&&e),"compositionstart"===l&&(e=!1!==r.Bb(n,36)._compositionStart()&&e),"compositionend"===l&&(e=!1!==r.Bb(n,36)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==u.counter.setDebounceValue(t)&&e),e}),null,null)),r.qb(36,16384,null,0,i.b,[r.C,r.l,[2,i.a]],null,null),r.Eb(1024,null,i.d,(function(n){return[n]}),[i.b]),r.qb(38,671744,null,0,i.g,[[8,null],[8,null],[8,null],[6,i.d]],{model:[0,"model"]},{update:"ngModelChange"}),r.Db(131072,b.b,[r.i]),r.Eb(2048,null,i.e,null,[i.g]),r.qb(41,16384,null,0,i.f,[[4,i.e]],null,null),(n()(),r.Gb(-1,null,[" (delay 300ms) "])),(n()(),r.rb(43,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r.rb(45,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),r.Gb(-1,null,["subCount model:"])),(n()(),r.rb(47,0,null,null,6,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,u=n.component;return"input"===l&&(e=!1!==r.Bb(n,48)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==r.Bb(n,48).onTouched()&&e),"compositionstart"===l&&(e=!1!==r.Bb(n,48)._compositionStart()&&e),"compositionend"===l&&(e=!1!==r.Bb(n,48)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==u.subCount.setDebounceSubValue(t)&&e),e}),null,null)),r.qb(48,16384,null,0,i.b,[r.C,r.l,[2,i.a]],null,null),r.Eb(1024,null,i.d,(function(n){return[n]}),[i.b]),r.qb(50,671744,null,0,i.g,[[8,null],[8,null],[8,null],[6,i.d]],{model:[0,"model"]},{update:"ngModelChange"}),r.Db(131072,b.b,[r.i]),r.Eb(2048,null,i.e,null,[i.g]),r.qb(53,16384,null,0,i.f,[[4,i.e]],null,null),(n()(),r.Gb(-1,null,[" (delay 300ms)\n"]))],(function(n,l){var t=l.component;n(l,38,0,r.Hb(l,38,0,r.Bb(l,39).transform(t.counter.state$)).val),n(l,50,0,r.Hb(l,50,0,r.Bb(l,51).transform(t.subCount.state$)).val)}),(function(n,l){var t=l.component;n(l,10,0,r.Hb(l,10,0,r.Bb(l,12).transform(r.Hb(l,10,0,r.Bb(l,11).transform(t.counter.state$))))),n(l,15,0,r.Hb(l,15,0,r.Bb(l,17).transform(r.Hb(l,15,0,r.Bb(l,16).transform(t.counter.values$))))),n(l,35,0,r.Bb(l,41).ngClassUntouched,r.Bb(l,41).ngClassTouched,r.Bb(l,41).ngClassPristine,r.Bb(l,41).ngClassDirty,r.Bb(l,41).ngClassValid,r.Bb(l,41).ngClassInvalid,r.Bb(l,41).ngClassPending),n(l,47,0,r.Bb(l,53).ngClassUntouched,r.Bb(l,53).ngClassTouched,r.Bb(l,53).ngClassPristine,r.Bb(l,53).ngClassDirty,r.Bb(l,53).ngClassValid,r.Bb(l,53).ngClassInvalid,r.Bb(l,53).ngClassPending)}))}var _=r.nb("count",v,(function(n){return r.Ib(0,[(n()(),r.rb(0,0,null,null,1,"count",[],null,null,null,C,j)),r.qb(1,49152,null,0,v,[h,d],null,null)],null,null)}),{},{},[]),S=t("Mrqg"),k=t("lLvT"),B=t("iInd");t.d(l,"CountModuleNgFactory",(function(){return D}));var D=r.ob(o,[],(function(n){return r.zb([r.Ab(512,r.k,r.Z,[[8,[c.a,_]],[3,r.k],r.w]),r.Ab(4608,b.m,b.l,[r.t,[2,b.s]]),r.Ab(4608,i.i,i.i,[]),r.Ab(4608,f.D,f.D,[[3,f.D],[2,f.c]]),r.Ab(4608,h,h,[]),r.Ab(4608,d,d,[]),r.Ab(1073742336,b.c,b.c,[]),r.Ab(1073742336,i.h,i.h,[]),r.Ab(1073742336,i.c,i.c,[]),r.Ab(512,f.y,f.y,[r.q,f.v,[3,f.y],f.n,f.z,f.B,[2,S.a]]),r.Ab(1024,f.s,(function(){return[[h,d]]}),[]),r.Ab(1073742336,f.p,f.p,[f.h,f.C,f.y,[2,f.s],f.o]),r.Ab(1073742336,k.a,k.a,[]),r.Ab(1073742336,B.m,B.m,[[2,B.r],[2,B.k]]),r.Ab(1073742336,o,o,[]),r.Ab(1024,B.i,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);