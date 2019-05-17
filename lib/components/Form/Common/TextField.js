"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require("antd/lib/input");

var _input2 = _interopRequireDefault(_input);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _form = require("antd/lib/form");

var _form2 = _interopRequireDefault(_form);

require("antd/lib/input/style/css");

require("antd/lib/form/style/css");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var TextField = function TextField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      hasFeedback = _ref.hasFeedback,
      labelSpan = _ref.labelSpan,
      okBlur = _ref.okBlur,
      okFocus = _ref.okFocus,
      okEnter = _ref.okEnter,
      okChange = _ref.okChange,
      wrapperSpan = _ref.wrapperSpan,
      showRequiredStar = _ref.showRequiredStar,
      _ref$meta = _ref.meta,
      asyncValidating = _ref$meta.asyncValidating,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ["input", "label", "hasFeedback", "labelSpan", "okBlur", "okFocus", "okEnter", "okChange", "wrapperSpan", "showRequiredStar", "meta"]);

  return _react2.default.createElement(
    FormItem,
    {
      label: label,
      labelCol: { span: labelSpan == undefined ? "8" : labelSpan },
      wrapperCol: { span: wrapperSpan == undefined ? "16" : wrapperSpan },
      hasFeedback: hasFeedback == undefined || hasFeedback == true ? true : false,
      validateStatus: asyncValidating ? "validating" : touched && error ? "error" : "",
      help: touched && error,
      required: showRequiredStar ? true : false
    },
    _react2.default.createElement(_input2.default, (0, _extends3.default)({}, input, {
      size: "default"
    }, custom, {
      onChange: function onChange(e) {
        input.onChange(e);
        okChange && okChange(e);
      },
      onBlur: function onBlur(e) {
        okBlur && okBlur(e);
      },
      onFocus: function onFocus(e) {
        okFocus && okFocus(e);
      },
      onPressEnter: function onPressEnter(e) {
        okEnter && okEnter(e);
      }
    }))
  );
};
exports.default = TextField;