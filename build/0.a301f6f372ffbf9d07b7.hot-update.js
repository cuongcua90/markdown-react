webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };\n\nvar _React = __webpack_require__(2);\n\nvar _React2 = _interopRequireWildcard(_React);\n\nvar Home = _React2['default'].createClass({\n  displayName: 'Home',\n\n  getInitialState: function getInitialState() {\n    return {\n      value: ''\n    };\n  },\n\n  render: function render() {\n    return _React2['default'].createElement(\n      'div',\n      null,\n      _React2['default'].createElement('input', { type: 'text', onChange: this.textInputDidChange, value: this.state.value })\n    );\n  },\n\n  textInputDidChange: function textInputDidChange(e) {\n    this.setState({ value: e.currentTarget.value });\n  }\n\n});\n\n_React2['default'].render(_React2['default'].createElement(Home, null), document.getElementById('main'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.jsx\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.jsx?");

/***/ }
])