'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroupField = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/checkbox/style/css');

require('antd/lib/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item; /**
                                     * Created by lx on 16/9/8.
                                     */

var CheckboxGroup = _checkbox2.default.Group;
var CheckboxGroupField = function CheckboxGroupField(_ref) {
  var okChange = _ref.okChange,
      input = _ref.input,
      labelSpan = _ref.labelSpan,
      showRequiredStar = _ref.showRequiredStar,
      wrapperSpan = _ref.wrapperSpan,
      text = _ref.text,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['okChange', 'input', 'labelSpan', 'showRequiredStar', 'wrapperSpan', 'text', 'label', 'meta']);

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
    _react2.default.createElement(CheckboxGroup, (0, _extends3.default)({}, input, custom, { onChange: function onChange(e) {
        input.onChange(e);
        okChange && okChange(e);
      } }))
  );
};
exports.CheckboxGroupField = CheckboxGroupField;
exports.default = CheckboxGroupField;