'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectField = undefined;

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/select/style/css');

require('antd/lib/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var MultiSelectField = function MultiSelectField(_ref) {
  var input = _ref.input,
      okChange = _ref.okChange,
      showRequiredStar = _ref.showRequiredStar,
      children = _ref.children,
      label = _ref.label,
      labelSpan = _ref.labelSpan,
      wrapperSpan = _ref.wrapperSpan,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'okChange', 'showRequiredStar', 'children', 'label', 'labelSpan', 'wrapperSpan', 'meta']);

  if (input.value == "") {
    input.value = [];
  }
  input.value = input.value.map(function (a) {
    return a.toString();
  });
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
      _select2.default,
      (0, _extends3.default)({ multiple: true }, input, { onChange: function onChange(e) {
          input.onChange(e);okChange && okChange();
        }
      }, custom, { size: 'default'
      }),
      children
    )
  );
};
exports.MultiSelectField = MultiSelectField;
exports.default = MultiSelectField;