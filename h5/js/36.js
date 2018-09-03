(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"314":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),a=_interopRequireDefault(n(46)),u=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(315);var l=function(e){function AtSwitch(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtSwitch),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtSwitch.__proto__||Object.getPrototypeOf(AtSwitch)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtSwitch,u.default),r(AtSwitch,[{"key":"handleChange","value":function handleChange(e){this.props.onChange(e.detail.value)}},{"key":"render","value":function render(){var e=this.props,t=e.style,n=e.disabled,r=e.border,a=e.title,u=e.checked,l=e.color,c=t;r||(c+="border: none;");var s=["at-switch__container"];return n&&s.push("at-switch--disabled"),o.default.createElement(i.View,{"className":"at-switch","style":c},o.default.createElement(i.View,{"className":"at-switch__title"},a),o.default.createElement(i.View,{"className":s},o.default.createElement(i.View,{"className":"at-switch__mask"}),u?o.default.createElement(i.Switch,{"className":"at-switch__switch","checked":!0,"color":l,"onChange":this.handleChange.bind(this)}):o.default.createElement(i.Switch,{"className":"at-switch__switch","color":l,"onChange":this.handleChange.bind(this)})))}}]),AtSwitch}();l.defaultProps={"style":"","title":"","color":"#6190e8","border":!0,"disabled":!1,"checked":!1,"onChange":function onChange(){}},l.propTypes={"style":a.default.oneOfType([a.default.object,a.default.string]),"title":a.default.string,"color":a.default.string,"checked":a.default.bool,"border":a.default.bool,"disabled":a.default.bool,"onChange":a.default.func},t.default=l},"315":function(e,t,n){},"317":function(e,t,n){},"43":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),a=_interopRequireDefault(n(314)),u=_interopRequireDefault(n(91)),l=_interopRequireDefault(n(48));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(317);var c=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"switchValue":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o.default.Component),r(Index,[{"key":"handleChange","value":function handleChange(e){console.log(this.state.switchValue),this.setState({"switchValue":e})}},{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page"},o.default.createElement(l.default,{"title":"Switch 开关"}),o.default.createElement(i.View,{"className":"doc-body"},o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"基础用法"),o.default.createElement(i.View,{"className":"panel__content no-padding"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.default,null,o.default.createElement(a.default,{"title":"开启中","checked":!0,"onChange":this.handleChange.bind(this)}),o.default.createElement(a.default,{"title":"已关闭","border":!1}))))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"禁用状态"),o.default.createElement(i.View,{"className":"panel__content no-padding"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.default,null,o.default.createElement(a.default,{"title":"不可点击","checked":!0,"disabled":!0}),o.default.createElement(a.default,{"title":"不可点击","border":!1,"disabled":!0})))))))}}]),Index}();t.default=c},"46":function(e,t,n){e.exports=n(51)()},"47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=(_interopRequireDefault(o),_interopRequireDefault(n(0)),_interopRequireDefault(n(50)));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var a=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o.Component),r(AtComponent,[{"key":"isFunction","value":function isFunction(){return i.default.apply(void 0,arguments)}}]),AtComponent}();a.options={"addGlobalClass":!0},t.default=a},"48":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=(_interopRequireDefault(o),_interopRequireDefault(n(0))),a=_interopRequireDefault(n(46)),u=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(53);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(u.View,{"className":"doc-header"},i.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":a.default.string}},"49":function(e,t,n){var r=n(57).Symbol;e.exports=r},"50":function(e,t,n){var r=n(55),o=n(56),i="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";e.exports=function isFunction(e){if(!o(e))return!1;var t=r(e);return t==a||t==u||t==i||t==l}},"51":function(e,t,n){"use strict";var r=n(52);function emptyFunction(){}e.exports=function(){function shim(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"52":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"53":function(e,t,n){},"55":function(e,t,n){var r=n(49),o=n(59),i=n(60),a="[object Null]",u="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?u:a:l&&l in Object(e)?o(e):i(e)}},"56":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"57":function(e,t,n){var r=n(58),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},"58":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"59":function(e,t,n){var r=n(49),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[u]=n:delete e[u]),o}},"60":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"91":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),a=_interopRequireDefault(n(46)),u=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(92);var l=function(e){function AtForm(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtForm),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtForm.__proto__||Object.getPrototypeOf(AtForm)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtForm,u.default),r(AtForm,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"at-form","style":this.props.style},this.props.children)}}]),AtForm}();l.defaultProps={"style":""},l.propTypes={"style":a.default.oneOfType([a.default.object,a.default.string])},t.default=l},"92":function(e,t,n){}}]);