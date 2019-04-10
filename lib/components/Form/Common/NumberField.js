'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberField = undefined;

var _css = require('antd/lib/input-number/style/css');

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _css2 = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var NumberField = function NumberField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      labelSpan = _ref.labelSpan,
      showRequiredStar = _ref.showRequiredStar,
      wrapperSpan = _ref.wrapperSpan,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'label', 'labelSpan', 'showRequiredStar', 'wrapperSpan', 'meta']);

  return _react2.default.createElement(
    FormItem,
    {
      label: label,
      labelCol: { span: labelSpan == undefined ? "8" : labelSpan },
      wrapperCol: { span: wrapperSpan == undefined ? "16" : wrapperSpan },
      validateStatus: touched && error ? "error" : "",
      help: touched && error, required: showRequiredStar ? true : false
    },
    _react2.default.createElement(_inputNumber2.default, (0, _extends3.default)({ value: input.value, onChange: function onChange(v) {
        return input.onChange(v);
      }, size: 'default' }, custom))
  );
};
exports.NumberField = NumberField;
exports.default = NumberField;