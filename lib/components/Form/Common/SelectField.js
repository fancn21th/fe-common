'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = undefined;

var _css = require('antd/lib/select/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

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
var SelectField = function SelectField(_ref) {
  var input = _ref.input,
      okChange = _ref.okChange,
      children = _ref.children,
      showRequiredStar = _ref.showRequiredStar,
      label = _ref.label,
      labelSpan = _ref.labelSpan,
      wrapperSpan = _ref.wrapperSpan,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'okChange', 'children', 'showRequiredStar', 'label', 'labelSpan', 'wrapperSpan', 'meta']);

  if (input.value == "" || input.value == null) input.value = undefined;

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
      (0, _extends3.default)({ placeholder: 'Please Select' }, input, { onChange: function onChange(e) {
          if (e == undefined) {
            input.onChange("");
          } else {
            input.onChange(e);
          }
          okChange && okChange(e);
        }
      }, custom, { size: 'default', allowClear: input.value == "" ? false : true, showArrow: true,
        showSearch: true,
        optionFilterProp: 'children', filterOption: function filterOption(inputValue, option) {
          if (option.props.children.toLowerCase().indexOf(inputValue.toLowerCase()) != -1) {
            return true;
          }
        }

      }),
      children
    )
  );
};
exports.SelectField = SelectField;
exports.default = SelectField;