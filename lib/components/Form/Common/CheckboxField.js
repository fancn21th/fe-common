'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = undefined;

var _css = require('antd/lib/checkbox/style/css');

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

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

var FormItem = _form2.default.Item; /**
                                     * Created by lx on 16/9/8.
                                     */
var CheckboxField = function CheckboxField(_ref) {
  var input = _ref.input,
      checkboxFirst = _ref.checkboxFirst,
      labelSpan = _ref.labelSpan,
      showRequiredStar = _ref.showRequiredStar,
      wrapperSpan = _ref.wrapperSpan,
      text = _ref.text,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'checkboxFirst', 'labelSpan', 'showRequiredStar', 'wrapperSpan', 'text', 'label', 'meta']);

  if (!input.value) input.value = false;
  return _react2.default.createElement(
    FormItem,
    {
      label: checkboxFirst ? '' : label,
      labelCol: { span: labelSpan == undefined ? "8" : labelSpan },
      wrapperCol: { span: wrapperSpan == undefined ? "16" : wrapperSpan },
      required: showRequiredStar ? true : false
    },
    checkboxFirst && _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        _checkbox2.default,
        (0, _extends3.default)({}, input, { defaultChecked: input.value }, custom),
        text
      ),
      '\xA0',
      label
    ),
    !checkboxFirst && _react2.default.createElement(
      _checkbox2.default,
      (0, _extends3.default)({}, input, { defaultChecked: input.value }, custom),
      text
    )
  );
};
exports.CheckboxField = CheckboxField;
exports.default = CheckboxField;