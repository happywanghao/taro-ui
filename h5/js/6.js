(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"13":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),l=_interopRequireDefault(n(0)),o=n(45),i=_interopRequireDefault(n(65)),u=_interopRequireDefault(n(48));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(145);var c=function(e){function ButtonPage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonPage);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return t=n=_possibleConstructorReturn(this,(e=ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonPage,l.default.Component),a(ButtonPage,[{"key":"onButtonClick","value":function onButtonClick(){var e=r.default.getEnv();"WEAPP"===e?r.default.showModal({"content":"\b您点击了！","showCancel":!1}):"WEB"===e&&alert("\b您点击了！")}},{"key":"render","value":function render(){return l.default.createElement(o.View,{"className":"page"},l.default.createElement(u.default,{"title":"Button 按钮"}),l.default.createElement(o.View,{"className":"doc-body"},l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"主操作"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"type":"primary","onClick":this.onButtonClick.bind(this)},"主操作按钮")),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"type":"primary","loading":!0,"onClick":this.onButtonClick.bind(this)},"Loading")),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"type":"primary","disabled":!0},"不可操作")))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"次要操作"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"type":"secondary"},"次操作按钮")),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"type":"secondary","loading":!0},"Loading")),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"type":"secondary","disabled":!0},"不可操作")))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"次次要操作"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,null,"次次要操作按钮")),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"loading":!0},"Loading")),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(i.default,{"disabled":!0},"不可操作")))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"小按钮"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"primary","size":"small"},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"secondary","size":"small"},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small"},"按钮"))),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"primary","size":"small","loading":!0})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"secondary","size":"small","loading":!0})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small","loading":!0}))),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"primary","size":"small","disabled":!0},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"secondary","size":"small","disabled":!0},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small","disabled":!0},"按钮"))))),l.default.createElement(o.View,{"className":"panel"},l.default.createElement(o.View,{"className":"panel__title"},"圆角按钮"),l.default.createElement(o.View,{"className":"panel__content"},l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"primary","size":"small","circle":!0},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"secondary","size":"small","circle":!0},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small","circle":!0},"按钮"))),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"primary","size":"small","loading":!0,"circle":!0})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"secondary","size":"small","loading":!0,"circle":!0})),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small","loading":!0,"circle":!0}))),l.default.createElement(o.View,{"className":"btn-item"},l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"primary","size":"small","disabled":!0,"circle":!0},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"type":"secondary","size":"small","disabled":!0,"circle":!0},"按钮")),l.default.createElement(o.View,{"className":"subitem"},l.default.createElement(i.default,{"size":"small","disabled":!0,"circle":!0},"按钮")))))))}}]),ButtonPage}();t.default=c},"145":function(e,t,n){},"46":function(e,t,n){e.exports=n(51)()},"47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),l=(_interopRequireDefault(r),_interopRequireDefault(n(0)),_interopRequireDefault(n(50)));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var o=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,r.Component),a(AtComponent,[{"key":"isFunction","value":function isFunction(){return l.default.apply(void 0,arguments)}}]),AtComponent}();o.options={"addGlobalClass":!0},t.default=o},"48":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),l=(_interopRequireDefault(r),_interopRequireDefault(n(0))),o=_interopRequireDefault(n(46)),i=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(53);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(i.View,{"className":"doc-header"},l.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":o.default.string}},"49":function(e,t,n){var a=n(57).Symbol;e.exports=a},"50":function(e,t,n){var a=n(55),r=n(56),l="[object AsyncFunction]",o="[object Function]",i="[object GeneratorFunction]",u="[object Proxy]";e.exports=function isFunction(e){if(!r(e))return!1;var t=a(e);return t==o||t==i||t==l||t==u}},"51":function(e,t,n){"use strict";var a=n(52);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,l,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"52":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"53":function(e,t,n){},"55":function(e,t,n){var a=n(49),r=n(59),l=n(60),o="[object Null]",i="[object Undefined]",u=a?a.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?i:o:u&&u in Object(e)?r(e):l(e)}},"56":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"57":function(e,t,n){var a=n(58),r="object"==typeof self&&self&&self.Object===Object&&self,l=a||r||Function("return this")();e.exports=l},"58":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"59":function(e,t,n){var a=n(49),r=Object.prototype,l=r.hasOwnProperty,o=r.toString,i=a?a.toStringTag:void 0;e.exports=function getRawTag(e){var t=l.call(e,i),n=e[i];try{e[i]=void 0;var a=!0}catch(e){}var r=o.call(e);return a&&(t?e[i]=n:delete e[i]),r}},"60":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"61":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),l=_interopRequireDefault(n(46)),o=n(45),i=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(62);var u=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,i.default),a(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,a={"width":n+"px","height":n+"px"},l={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},i=Object.assign({},l,a);return r.default.createElement(o.View,{"className":"at-loading","style":a},r.default.createElement(o.View,{"className":"at-loading__ring","style":i}),r.default.createElement(o.View,{"className":"at-loading__ring","style":i}),r.default.createElement(o.View,{"className":"at-loading__ring","style":i}))}}]),AtLoading}();u.defaultProps={"size":"18","color":"#fff"},u.propTypes={"size":l.default.oneOfType([l.default.string,l.default.number]),"color":l.default.oneOfType([l.default.string,l.default.number])},t.default=u},"62":function(e,t,n){},"65":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),l=n(45),o=_interopRequireDefault(n(46)),i=_interopRequireDefault(n(61)),u=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(66);var c={"normal":"normal","small":"small"},s={"primary":"primary","secondary":"secondary"},f=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,u.default),a(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.size,n=void 0===t?"normal":t,a=e.type,o=void 0===a?"":a,u=e.circle,f=e.loading,d=e.disabled,p=["at-button"],m=c[n]||"",b=d?"at-button--disabled":"",y=s[o]?"at-button--"+o:"",_=u?"at-button--circle":"";p.push("at-button--"+m,y,_,b),p=p.filter(function(e){return""!==e});var h="primary"===o?"#fff":"#6190E8",w="small"===n?"16":"18",E=void 0;return f&&(E=r.default.createElement(l.View,{"className":"at-button__icon"},r.default.createElement(i.default,{"color":h,"size":w})),p.push("at-button--icon")),r.default.createElement(l.View,{"className":p,"onClick":this.onClick.bind(this)},E,r.default.createElement(l.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=f,f.defaultProps={"size":"normal","type":"","circle":!1,"loading":!1,"disabled":!1,"onClick":function onClick(){}},f.propTypes={"size":o.default.oneOf(["normal","small"]),"type":o.default.oneOf(["primary","secondary"]),"circle":o.default.bool,"loading":o.default.bool,"disabled":o.default.bool,"onClick":o.default.func}},"66":function(e,t,n){}}]);