'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

require('codemirror/mode/javascript/javascript');

require('codemirror/mode/jsx/jsx');

require('codemirror/addon/runmode/runmode');

var _CodeEditor = require('./CodeEditor');

var _CodeEditor2 = _interopRequireDefault(_CodeEditor);

var _parseHTML2 = require('./parseHTML');

var _parseHTML3 = _interopRequireDefault(_parseHTML2);

var _Preview = require('./Preview');

var _Preview2 = _interopRequireDefault(_Preview);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var React = require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');

var _require = require('react-markdown-reader'),
  Markdown = _require.Markdown;

var classNames = require('classnames');

var CodeView = (function(_React$Component) {
  _inherits(CodeView, _React$Component);

  function CodeView(props) {
    _classCallCheck(this, CodeView);

    var _this = _possibleConstructorReturn(
      this,
      (CodeView.__proto__ || Object.getPrototypeOf(CodeView)).call(this, props),
    );

    _this.handleCodeChange = function(val) {
      _this.setState({
        hasError: false,
        errorMessage: null,
      });
      _this.executeCode(val);
    };

    _this.handleShowCode = function() {
      var showCode = !_this.state.showCode;
      _this.setState({ showCode: showCode });
    };

    _this.handleError = function(error) {
      _this.setState({
        hasError: true,
        errorMessage: error.message,
      });
    };

    _this.addPrefix = function(name) {
      var classPrefix = _this.props.classPrefix;

      if (classPrefix) {
        return '' + classPrefix + name;
      }
      return name;
    };

    var _parseHTML = (0, _parseHTML3.default)(props.children || props.source),
      code = _parseHTML.code,
      beforeHTML = _parseHTML.beforeHTML,
      afterHTML = _parseHTML.afterHTML;

    _this.state = {
      beforeHTML: beforeHTML,
      afterHTML: afterHTML,
      code: code,
      showCode: props.showCode,
      hasError: false,
      errorMessage: null,
    };
    _this.executeCode = _this.executeCode.bind(_this);

    setTimeout(function() {
      _this.executeCode();
    }, props.delay);
    return _this;
  }

  _createClass(CodeView, [
    {
      key: 'executeCode',
      value: function executeCode(nextCode) {
        var _this2 = this;

        var _props = this.props,
          babelTransformOptions = _props.babelTransformOptions,
          dependencies = _props.dependencies;

        var originalRender = ReactDOM.render;
        var hasError = false;
        ReactDOM.render = function(element) {
          _this2.initialExample = element;
        };
        try {
          var code = window.Babel.transform(nextCode || this.state.code, babelTransformOptions)
            .code;
          var statement = '';

          if (dependencies) {
            Object.keys(dependencies).forEach(function(key) {
              statement += 'var ' + key + '= dependencies.' + key + ';\n ';
            });
          }

          /* eslint-disable */
          eval(statement + ' ' + code);
          /* eslint-enable */
        } catch (err) {
          hasError = true;
          console.error(err);
        } finally {
          ReactDOM.render = originalRender;
          if (!hasError) {
            this.forceUpdate();
          }
        }
      },
    },
    {
      key: 'renderExample',
      value: function renderExample() {
        var _state = this.state,
          hasError = _state.hasError,
          errorMessage = _state.errorMessage;

        return React.createElement(
          _Preview2.default,
          {
            hasError: hasError,
            errorMessage: errorMessage,
            onError: this.handleError,
          },
          React.createElement(
            'div',
            null,
            this.initialExample ? this.initialExample : React.createElement('div', null, ''), // loading
          ),
        );
      },
    },
    {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
          className = _props2.className,
          style = _props2.style,
          showCodeIcon = _props2.showCodeIcon,
          buttonClassName = _props2.buttonClassName,
          renderToolbar = _props2.renderToolbar,
          theme = _props2.theme;
        var _state2 = this.state,
          showCode = _state2.showCode,
          beforeHTML = _state2.beforeHTML,
          afterHTML = _state2.afterHTML;

        var icon = React.createElement(
          'span',
          null,
          React.createElement('i', {
            className: classNames(this.addPrefix('icon'), this.addPrefix('icon-code')),
          }),
        );

        var showCodeButton = React.createElement(
          'button',
          {
            className: classNames(this.addPrefix('btn'), this.addPrefix('btn-xs'), buttonClassName),
            onClick: this.handleShowCode,
          },
          typeof showCodeIcon !== 'undefined' ? showCodeIcon : icon,
        );

        return React.createElement(
          'div',
          { className: className, style: style },
          React.createElement(Markdown, null, beforeHTML),
          React.createElement(
            'div',
            { className: 'code-view-wrapper' },
            this.renderExample(),
            React.createElement(
              'div',
              { className: 'code-view-toolbar' },
              renderToolbar ? renderToolbar(showCodeButton) : showCodeButton,
            ),
            React.createElement(_CodeEditor2.default, {
              lineNumbers: true,
              key: 'jsx',
              onChange: this.handleCodeChange,
              className: 'doc-code ' + (showCode ? 'show' : ''),
              theme: theme,
              code: this.state.code,
            }),
          ),
          React.createElement(Markdown, null, afterHTML),
        );
      },
    },
  ]);

  return CodeView;
})(React.Component);

CodeView.propTypes = {
  theme: PropTypes.string,
  classPrefix: PropTypes.string,
  delay: PropTypes.number,
  showCode: PropTypes.bool,
  source: PropTypes.string,
  children: PropTypes.string,
  dependencies: PropTypes.object,
  babelTransformOptions: PropTypes.object,
  buttonClassName: PropTypes.string,
  showCodeIcon: PropTypes.node,
  renderToolbar: PropTypes.func,
};
CodeView.defaultProps = {
  theme: '',
  delay: 0,
  babelTransformOptions: {
    presets: ['stage-0', 'react', 'es2015'],
  },
};
exports.default = CodeView;
