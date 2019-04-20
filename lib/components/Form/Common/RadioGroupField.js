'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroupField = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _radio = require('antd/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/radio/style/css');

require('antd/lib/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item; /**
                                     * Created by lx on 16/9/8.
                                     */

var RadioGroup = _radio2.default.Group;
var RadioGroupField = function RadioGroupField(_ref) {
  var children = _ref.children,
      input = _ref.input,
      okChange = _ref.okChange,
      showRequiredStar = _ref.showRequiredStar,
      labelSpan = _ref.labelSpan,
      wrapperSpan = _ref.wrapperSpan,
      text = _ref.text,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['children', 'input', 'okChange', 'showRequiredStar', 'labelSpan', 'wrapperSpan', 'text', 'label', 'meta']);


  if (!input.value) input.value = [];
  return _react2.default.createElement(
    FormItem,
    {
      label: label,
      labelCol: { span: labelSpan == undefined ? "8" : labelSpan },
      wrapperCol: { span: wrapperSpan == undefined ? "16" : wrapperSpan },
      validateStatus: touched && error ? "error" : "",
      help: touched && error, required: showRequiredStar ? true : false
    },
    _react2.default.createElement(
      RadioGroup,
      (0, _extends3.default)({}, input, custom, { onChange: function onChange(e) {
          input.onChange(e);okChange && okChange(e);
        } }),
      children
    )
  );
};
exports.RadioGroupField = RadioGroupField;
exports.default = RadioGroupField;