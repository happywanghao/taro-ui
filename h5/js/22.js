(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"231":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(45),i=_interopRequireDefault(n(46)),l=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(232);var u=function(e){function AtTabs(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTabs);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTabs.__proto__||Object.getPrototypeOf(AtTabs)).apply(this,arguments));return e.touchDot=0,e.interval=null,e.time=0,e.isMoving=!1,e.maxIndex=e.props.tabList.length,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTabs,l.default),r(AtTabs,[{"key":"handleClick","value":function handleClick(e){var t;(t=this.props).onClick.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleTouchStart","value":function handleTouchStart(e){var t=this;this.props.swipeable&&(this.touchDot=e.touches[0].pageX,this.interval=setInterval(function(){t.time++},100))}},{"key":"handleTouchMove","value":function handleTouchMove(e){if(this.props.swipeable){var t=this.props.current,n=e.touches[0].pageX-this.touchDot;!this.isMoving&&this.time<10&&(t+1<this.maxIndex&&n<=-40?(this.isMoving=!0,this.handleClick(t+1)):t-1>=0&&n>=40&&(this.isMoving=!0,this.handleClick(t-1)))}}},{"key":"handleTouchEnd","value":function handleTouchEnd(){this.props.swipeable&&(clearInterval(this.interval),this.time=0,this.isMoving=!1)}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.style,r=t.tabList,i=t.scroll,l=t.current,u=["at-tabs__header"];i&&u.push("at-tabs__header--scroll");var c="transform: translate3d(-"+100*l+"%, 0px, 0px);";return a.default.createElement(o.View,{"className":"at-tabs","style":n},a.default.createElement(o.View,{"className":u},r.map(function(t,n){return a.default.createElement(o.View,{"className":l===n?"at-tabs__item at-tabs__item--active":"at-tabs__item","key":t.title,"onClick":e.handleClick.bind(e,n)},t.title)})),a.default.createElement(o.View,{"className":"at-tabs__body","onTouchStart":this.handleTouchStart.bind(this),"onTouchEnd":this.handleTouchEnd.bind(this),"onTouchMove":this.handleTouchMove.bind(this),"style":c},this.props.children))}}]),AtTabs}();u.defaultProps={"style":"","current":0,"swipeable":!0,"scroll":!1,"tabList":[],"onClick":function onClick(){}},u.propTypes={"style":i.default.oneOfType([i.default.object,i.default.string]),"current":i.default.number,"swipeable":i.default.bool,"scroll":i.default.bool,"tabList":i.default.array,"onClick":i.default.func},t.default=u},"232":function(e,t,n){},"234":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(45),i=_interopRequireDefault(n(46)),l=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(235);var u=function(e){function AtTabsPane(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTabsPane),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTabsPane.__proto__||Object.getPrototypeOf(AtTabsPane)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTabsPane,l.default),r(AtTabsPane,[{"key":"render","value":function render(){var e=this.props,t=["tabs-pane"];return e.index===e.current?t.push("tabs-pane--active"):t.push("tabs-pane--inactive"),a.default.createElement(o.View,{"className":t},this.props.children)}}]),AtTabsPane}();u.defaultProps={"index":0,"current":0},u.propTypes={"index":i.default.number,"current":i.default.number},t.default=u},"235":function(e,t,n){},"237":function(e,t,n){},"29":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(45),i=_interopRequireDefault(n(231)),l=_interopRequireDefault(n(234)),u=_interopRequireDefault(n(48));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(237);var c=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"current1":0,"current2":0,"current3":0,"current4":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),r(Index,[{"key":"handleClick","value":function handleClick(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.current1,n=e.current2,r=e.current3,c=e.current4,s=[{"title":"标签页1"},{"title":"标签页2"},{"title":"标签页3"}];return a.default.createElement(o.View,{"className":"page"},a.default.createElement(u.default,{"title":"Tabs 标签页"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"等宽标签栏"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(i.default,{"swipeable":!1,"current":t,"tabList":s,"onClick":this.handleClick.bind(this,"current1")},a.default.createElement(l.default,{"current":t,"index":0},a.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")),a.default.createElement(l.default,{"current":t,"index":1},a.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")),a.default.createElement(l.default,{"current":t,"index":2},a.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容"))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"滚动标签栏"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(i.default,{"swipeable":!1,"scroll":!0,"current":n,"tabList":[{"title":"标签页1"},{"title":"标签页2"},{"title":"标签页3"},{"title":"标签页4"},{"title":"标签页5"},{"title":"标签页6"},{"title":"标签页7"},{"title":"标签页8"},{"title":"标签页9"}],"onClick":this.handleClick.bind(this,"current2")},a.default.createElement(l.default,{"current":n,"index":0},a.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")),a.default.createElement(l.default,{"current":n,"index":1},a.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")),a.default.createElement(l.default,{"current":n,"index":2},a.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容")),a.default.createElement(l.default,{"current":n,"index":3},a.default.createElement(o.View,{"className":"tab-content"},"标签页四的内容")),a.default.createElement(l.default,{"current":n,"index":4},a.default.createElement(o.View,{"className":"tab-content"},"标签页五的内容")),a.default.createElement(l.default,{"current":n,"index":5},a.default.createElement(o.View,{"className":"tab-content"},"标签页六的内容")),a.default.createElement(l.default,{"current":n,"index":6},a.default.createElement(o.View,{"className":"tab-content"},"标签页七的内容")),a.default.createElement(l.default,{"current":n,"index":7},a.default.createElement(o.View,{"className":"tab-content"},"标签页八的内容")),a.default.createElement(l.default,{"current":n,"index":8},a.default.createElement(o.View,{"className":"tab-content"},"标签页九的内容"))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"滑动切换内容"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(i.default,{"current":r,"tabList":s,"onClick":this.handleClick.bind(this,"current3")},a.default.createElement(l.default,{"current":r,"index":0},a.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")),a.default.createElement(l.default,{"current":r,"index":1},a.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")),a.default.createElement(l.default,{"current":r,"index":2},a.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容"))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"禁止内容切换动画"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(i.default,{"current":c,"tabList":s,"onClick":this.handleClick.bind(this,"current4")}),0===c?a.default.createElement(l.default,null,a.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")):null,1===c?a.default.createElement(l.default,null,a.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")):null,2===c?a.default.createElement(l.default,null,a.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容")):null))))}}]),Index}();t.default=c},"46":function(e,t,n){e.exports=n(51)()},"47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=(_interopRequireDefault(a),_interopRequireDefault(n(0)),_interopRequireDefault(n(50)));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a.Component),r(AtComponent,[{"key":"isFunction","value":function isFunction(){return o.default.apply(void 0,arguments)}}]),AtComponent}();i.options={"addGlobalClass":!0},t.default=i},"48":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=(_interopRequireDefault(a),_interopRequireDefault(n(0))),i=_interopRequireDefault(n(46)),l=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(53);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"49":function(e,t,n){var r=n(57).Symbol;e.exports=r},"50":function(e,t,n){var r=n(55),a=n(56),o="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";e.exports=function isFunction(e){if(!a(e))return!1;var t=r(e);return t==i||t==l||t==o||t==u}},"51":function(e,t,n){"use strict";var r=n(52);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"52":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"53":function(e,t,n){},"55":function(e,t,n){var r=n(49),a=n(59),o=n(60),i="[object Null]",l="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?l:i:u&&u in Object(e)?a(e):o(e)}},"56":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"57":function(e,t,n){var r=n(58),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},"58":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"59":function(e,t,n){var r=n(49),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var a=i.call(e);return r&&(t?e[l]=n:delete e[l]),a}},"60":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}}}]);