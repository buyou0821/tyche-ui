'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

var _trim = require('lodash/trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeEditor = function (_React$Component) {
  _inherits(CodeEditor, _React$Component);

  function CodeEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CodeEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function () {
      var _this$props = _this.props,
          readOnly = _this$props.readOnly,
          onChange = _this$props.onChange;

      if (!readOnly && onChange) {
        onChange(_this.editor.getValue());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CodeEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          lineNumbers = _props.lineNumbers,
          lineWrapping = _props.lineWrapping,
          matchBrackets = _props.matchBrackets,
          tabSize = _props.tabSize,
          readOnly = _props.readOnly,
          theme = _props.theme;


      if (_codemirror2.default === undefined) {
        return;
      }

      this.editor = _codemirror2.default.fromTextArea(this.textarea, {
        mode: 'jsx',
        lineNumbers: lineNumbers,
        lineWrapping: lineWrapping,
        matchBrackets: matchBrackets,
        tabSize: tabSize,
        readOnly: readOnly,
        theme: theme
      });

      this.editor.on('change', this.handleChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var readOnly = this.props.readOnly;

      if (readOnly) {
        this.editor.setValue();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          style = _props2.style,
          className = _props2.className,
          code = _props2.code;


      return _react2.default.createElement(
        'div',
        { style: style, className: className },
        _react2.default.createElement('textarea', {
          ref: function ref(_ref2) {
            _this2.textarea = _ref2;
          },
          defaultValue: (0, _trim2.default)(code)
        })
      );
    }
  }]);

  return CodeEditor;
}(_react2.default.Component);

CodeEditor.propTypes = {
  readOnly: _propTypes2.default.bool,
  code: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  matchBrackets: _propTypes2.default.bool,
  lineNumbers: _propTypes2.default.bool,
  lineWrapping: _propTypes2.default.bool,
  tabSize: _propTypes2.default.number,
  onChange: _propTypes2.default.func
};
CodeEditor.defaultProps = {
  matchBrackets: true,
  tabSize: 2,
  theme: 'default'
};
exports.default = CodeEditor;