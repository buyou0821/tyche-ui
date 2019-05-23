'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseHTML;

var _parseDom = require('./parseDom');

var _parseDom2 = _interopRequireDefault(_parseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function text(element) {
  return element.textContent || element.innerText;
}

function parseHTML(source) {
  if (!source) {
    return null;
  }

  var findCode = source.match(/<!-+\ ?start-code\ ?-+>([\s\S]+)<!-+\ ?end-code\ ?-+>/gi);
  var code = null;

  if (!findCode) {
    return {
      beforeHTML: source
    };
  }

  code = text((0, _parseDom2.default)(findCode.join('')));

  var beforeHTML = source.match(/([\s\S]+)<!-+\ ?start-code\ ?-+>/gi);
  var afterHTML = source.match(/<!-+\ ?end-code\ ?-+>([\s\S]+)/gi);

  return {
    code: code,
    beforeHTML: beforeHTML,
    afterHTML: afterHTML
  };
}