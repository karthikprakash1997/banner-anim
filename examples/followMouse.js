webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(200);


/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	// use jsx to render html, do not modify simple.html
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _rcBannerAnim = __webpack_require__(2);
	
	var _rcBannerAnim2 = _interopRequireDefault(_rcBannerAnim);
	
	var _rcQueueAnim = __webpack_require__(187);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _rcTweenOne = __webpack_require__(172);
	
	var _rcTweenOne2 = _interopRequireDefault(_rcTweenOne);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	__webpack_require__(193);
	
	var Element = _rcBannerAnim2['default'].Element;
	
	var Demo = (function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Demo, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _rcBannerAnim2['default'],
	        { type: 'across' },
	        _react2['default'].createElement(
	          Element,
	          { key: 'aaa',
	            prefixCls: 'banner-user-elem',
	            bg: 'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
	            bgPrefixCls: 'banner-user-bg',
	            followParallax: {
	              delay: 800,
	              transition: 'transform .5s ease-out',
	              data: [{ key: 'bgElem', scale: 0.03, type: ['backgroundPositionX'] }, { key: 'queue', scale: 0.05, type: 'x' }, { key: 'text', scale: -0.03, type: 'x' }]
	            }
	          },
	          _react2['default'].createElement(
	            _rcQueueAnim2['default'],
	            { key: 'queue' },
	            _react2['default'].createElement(
	              'h1',
	              { key: 'h1' },
	              'Ant Motion Demo'
	            ),
	            _react2['default'].createElement(
	              'p',
	              { key: 'p' },
	              'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
	            )
	          ),
	          _react2['default'].createElement(
	            _rcTweenOne2['default'],
	            { animation: { y: 50, opacity: 0, type: 'from' }, key: 'text' },
	            'Ant Motion Demo.Ant MotionDemo'
	          )
	        ),
	        _react2['default'].createElement(
	          Element,
	          { key: 'bbb',
	            prefixCls: 'banner-user-elem',
	            bg: 'https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg'
	          },
	          _react2['default'].createElement(
	            _rcQueueAnim2['default'],
	            null,
	            _react2['default'].createElement(
	              'h1',
	              { key: 'h1' },
	              'Ant Motion Demo'
	            ),
	            _react2['default'].createElement(
	              'p',
	              { key: 'p' },
	              'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
	            )
	          ),
	          _react2['default'].createElement(
	            _rcTweenOne2['default'],
	            { animation: { y: 50, opacity: 0, type: 'from' } },
	            'Ant Motion Demo.Ant Motion Demo'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Demo;
	})(_react2['default'].Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=followMouse.js.map