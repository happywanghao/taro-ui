(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"309":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(0)),i=n(45),l=_interopRequireDefault(n(46)),u=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(310);var c=function(e){function AtTextarea(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTextarea),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTextarea.__proto__||Object.getPrototypeOf(AtTextarea)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTextarea,u.default),r(AtTextarea,[{"key":"handleInput","value":function handleInput(e){var t;(t=this.props).onChange.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleFocus","value":function handleFocus(e){var t;(t=this.props).onFocus.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleBlur","value":function handleBlur(e){var t;(t=this.props).onBlur.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleConfirm","value":function handleConfirm(e){var t;(t=this.props).onConfirm.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"render","value":function render(){var e=this.props,t=e.style,n=e.value,r=e.cursorSpacing,l=e.maxlength,u=e.placeholder,c=e.count,s=e.disabled,f=e.autoFocus,p=e.fixed,d=e.textOverflowForbidden,h=e.height,m=l;d||(m+=500);var b=h?"height:"+o.default.pxTransform(h):"";return a.default.createElement(i.View,{"className":"at-textarea","style":t},a.default.createElement(i.Textarea,{"style":b,"placeholderClass":"placeholder","cursorSpacing":r,"className":"at-textarea__textarea","value":n,"showConfirmBar":!1,"confirmType":"完成","maxlength":m,"placeholder":u,"disabled":s,"autoFocus":f,"fixed":p,"onInput":this.handleInput.bind(this),"onFocus":this.handleFocus.bind(this),"onBlur":this.handleBlur.bind(this),"onConfirm":this.handleConfirm.bind(this)}),c?a.default.createElement(i.View,{"className":l<n.length?"at-textarea__bottom at-textarea--error":"at-textarea__bottom"},n.length,"/",l):null)}}]),AtTextarea}(),s=function defaultFunc(){};c.defaultProps={"style":"","value":"","cursorSpacing":100,"maxlength":200,"placeholder":"","disabled":!1,"autoFocus":!1,"count":!0,"fixed":!1,"height":"","textOverflowForbidden":!0,"onChange":s,"onFocus":s,"onBlur":s,"onConfirm":s},c.propTypes={"style":l.default.oneOfType([l.default.object,l.default.string]),"value":l.default.string,"cursorSpacing":l.default.number,"maxlength":l.default.oneOfType([l.default.string,l.default.number]),"placeholder":l.default.string,"disabled":l.default.bool,"autoFocus":l.default.bool,"count":l.default.bool,"textOverflowForbidden":l.default.bool,"fixed":l.default.bool,"height":l.default.string,"onChange":l.default.func,"onFocus":l.default.func,"onBlur":l.default.func,"onConfirm":l.default.func},t.default=c},"310":function(e,t,n){},"312":function(e,t,n){},"42":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),a=n(45),i=_interopRequireDefault(n(309)),l=_interopRequireDefault(n(48));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(312);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":"","value4":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o.default.Component),r(Index,[{"key":"handleChange","value":function handleChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t.target.value))}},{"key":"render","value":function render(){return o.default.createElement(a.View,{"className":"page"},o.default.createElement(l.default,{"title":"Textarea 多行文本框"}),o.default.createElement(a.View,{"className":"doc-body"},o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"基础"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(i.default,{"value":this.state.value1,"onChange":this.handleChange.bind(this,"value1"),"maxlength":"200","placeholder":"你的问题是..."})))),o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"不显示字数"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(i.default,{"count":!1,"value":this.state.value2,"onChange":this.handleChange.bind(this,"value2"),"maxlength":"200","placeholder":"你的问题是..."})))),o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"文字超出仍可输入"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(i.default,{"textOverflowForbidden":!1,"value":this.state.value3,"onChange":this.handleChange.bind(this,"value3"),"maxlength":"200","placeholder":"你的问题是..."})))),o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"自定义高度"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(i.default,{"height":"300","value":this.state.value4,"onChange":this.handleChange.bind(this,"value4"),"maxlength":"200","placeholder":"你的问题是..."}))))))}}]),Index}();t.default=u},"46":function(e,t,n){e.exports=n(51)()},"47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(0)),_interopRequireDefault(n(50)));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o.Component),r(AtComponent,[{"key":"isFunction","value":function isFunction(){return a.default.apply(void 0,arguments)}}]),AtComponent}();i.options={"addGlobalClass":!0},t.default=i},"48":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(0))),i=_interopRequireDefault(n(46)),l=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(53);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(l.View,{"className":"doc-header"},a.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"49":function(e,t,n){var r=n(57).Symbol;e.exports=r},"50":function(e,t,n){var r=n(55),o=n(56),a="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";e.exports=function isFunction(e){if(!o(e))return!1;var t=r(e);return t==i||t==l||t==a||t==u}},"51":function(e,t,n){"use strict";var r=n(52);function emptyFunction(){}e.exports=function(){function shim(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"52":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"53":function(e,t,n){},"55":function(e,t,n){var r=n(49),o=n(59),a=n(60),i="[object Null]",l="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?l:i:u&&u in Object(e)?o(e):a(e)}},"56":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"57":function(e,t,n){var r=n(58),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},"58":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"59":function(e,t,n){var r=n(49),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,l=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=a.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[l]=n:delete e[l]),o}},"60":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}}}]);