function _defineProperties(n,t){for(var l=0;l<t.length;l++){var e=t[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,t,l){return t&&_defineProperties(n.prototype,t),l&&_defineProperties(n,l),n}function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return(_setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function _createSuper(n){return function(){var t,l=_getPrototypeOf(n);if(_isNativeReflectConstruct()){var e=_getPrototypeOf(this).constructor;t=Reflect.construct(l,arguments,e)}else t=l.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(n):t}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0Wjt":function(n,t,l){"use strict";l.r(t);var e,u,o=l("8Y7J"),r=function n(){_classCallCheck(this,n)},i=l("pMnS"),s=l("s7LF"),a=l("mrSG"),c=l("CoC1"),b=l("8nyR"),p=l("e1JD"),f=(u=function(n){_inherits(l,n);var t=_createSuper(l);function l(){return _classCallCheck(this,l),t.apply(this,arguments)}return _createClass(l,[{key:"setPrice",value:function(n){this.setState(parseFloat(n))}}]),l}(b.a),u=Object(a.a)([Object(c.g)(),Object(p.e)({name:"price",defaults:10})],u)),d=(e=function(n){_inherits(l,n);var t=_createSuper(l);function l(n){var e;return _classCallCheck(this,l),(e=t.call(this)).price=n,e}return _createClass(l,[{key:"setAmount",value:function(n){this.setState(parseFloat(n))}},{key:"sum",get:function(){return this.snapshot+this.price.snapshot}}]),l}(b.a),Object(a.a)([Object(c.a)(),Object(a.b)("design:type",Number),Object(a.b)("design:paramtypes",[])],e.prototype,"sum",null),e=Object(a.a)([Object(c.g)(),Object(p.e)({name:"amount",defaults:20})],e)),g=function n(t,l){_classCallCheck(this,n),this.price=t,this.amount=l},h=o.pb({encapsulation:2,styles:[],data:{}});function m(n){return o.Ib(2,[(n()(),o.rb(0,0,null,null,6,"label",[],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,5,"input",[["placeholder","Price"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,t,l){var e=!0,u=n.component;return"input"===t&&(e=!1!==o.Bb(n,2)._handleInput(l.target.value)&&e),"blur"===t&&(e=!1!==o.Bb(n,2).onTouched()&&e),"compositionstart"===t&&(e=!1!==o.Bb(n,2)._compositionStart()&&e),"compositionend"===t&&(e=!1!==o.Bb(n,2)._compositionEnd(l.target.value)&&e),"ngModelChange"===t&&(e=!1!==u.price.setPrice(l)&&e),e}),null,null)),o.qb(2,16384,null,0,s.b,[o.C,o.l,[2,s.a]],null,null),o.Eb(1024,null,s.d,(function(n){return[n]}),[s.b]),o.qb(4,671744,null,0,s.g,[[8,null],[8,null],[8,null],[6,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),o.Eb(2048,null,s.e,null,[s.g]),o.qb(6,16384,null,0,s.f,[[4,s.e]],null,null),(n()(),o.rb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.rb(8,0,null,null,6,"label",[],null,null,null,null,null)),(n()(),o.rb(9,0,null,null,5,"input",[["placeholder","Amount"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,t,l){var e=!0,u=n.component;return"input"===t&&(e=!1!==o.Bb(n,10)._handleInput(l.target.value)&&e),"blur"===t&&(e=!1!==o.Bb(n,10).onTouched()&&e),"compositionstart"===t&&(e=!1!==o.Bb(n,10)._compositionStart()&&e),"compositionend"===t&&(e=!1!==o.Bb(n,10)._compositionEnd(l.target.value)&&e),"ngModelChange"===t&&(e=!1!==u.amount.setAmount(l)&&e),e}),null,null)),o.qb(10,16384,null,0,s.b,[o.C,o.l,[2,s.a]],null,null),o.Eb(1024,null,s.d,(function(n){return[n]}),[s.b]),o.qb(12,671744,null,0,s.g,[[8,null],[8,null],[8,null],[6,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),o.Eb(2048,null,s.e,null,[s.g]),o.qb(14,16384,null,0,s.f,[[4,s.e]],null,null),(n()(),o.rb(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Gb(16,null,["Sum: ",""]))],(function(n,t){var l=t.component;n(t,4,0,l.price.snapshot),n(t,12,0,l.amount.snapshot)}),(function(n,t){var l=t.component;n(t,1,0,o.Bb(t,6).ngClassUntouched,o.Bb(t,6).ngClassTouched,o.Bb(t,6).ngClassPristine,o.Bb(t,6).ngClassDirty,o.Bb(t,6).ngClassValid,o.Bb(t,6).ngClassInvalid,o.Bb(t,6).ngClassPending),n(t,9,0,o.Bb(t,14).ngClassUntouched,o.Bb(t,14).ngClassTouched,o.Bb(t,14).ngClassPristine,o.Bb(t,14).ngClassDirty,o.Bb(t,14).ngClassValid,o.Bb(t,14).ngClassInvalid,o.Bb(t,14).ngClassPending),n(t,16,0,l.amount.sum)}))}var y=o.nb("amount",g,(function(n){return o.Ib(0,[(n()(),o.rb(0,0,null,null,1,"amount",[],null,null,null,m,h)),o.qb(1,49152,null,0,g,[f,d],null,null)],null,null)}),{},{},[]),_=l("SVse"),C=l("Mrqg"),v=l("iInd");l.d(t,"AmountModuleNgFactory",(function(){return O}));var O=o.ob(r,[],(function(n){return o.zb([o.Ab(512,o.k,o.Z,[[8,[i.a,y]],[3,o.k],o.w]),o.Ab(4608,s.i,s.i,[]),o.Ab(4608,_.m,_.l,[o.t,[2,_.s]]),o.Ab(4608,p.D,p.D,[[3,p.D],[2,p.c]]),o.Ab(4608,f,f,[]),o.Ab(4608,d,d,[f]),o.Ab(1073742336,s.h,s.h,[]),o.Ab(1073742336,s.c,s.c,[]),o.Ab(1073742336,_.c,_.c,[]),o.Ab(512,p.y,p.y,[o.q,p.v,[3,p.y],p.n,p.z,p.B,[2,C.a]]),o.Ab(1024,p.s,(function(){return[[d,f]]}),[]),o.Ab(1073742336,p.p,p.p,[p.h,p.C,p.y,[2,p.s],p.o]),o.Ab(1073742336,v.m,v.m,[[2,v.r],[2,v.k]]),o.Ab(1073742336,r,r,[]),o.Ab(1024,v.i,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);