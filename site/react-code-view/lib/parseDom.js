'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDom;
function parseDom(arg) {
  var objE = document.createElement('div');
  objE.innerHTML = arg;
  return objE;
}