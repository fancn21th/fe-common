'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelectField = undefined;

var _css = require('antd/lib/tree-select/style/css');

var _treeSelect = require('antd/lib/tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

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
var TreeSelectField = function TreeSelectField(_ref) {
  var input = _ref.input,
      treeData = _ref.treeData,
      showRequiredStar = _ref.showRequiredStar,
      okChange = _ref.okChange,
      children = _ref.children,
      label = _ref.label,
      labelSpan = _ref.labelSpan,
      wrapperSpan = _ref.wrapperSpan,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'treeData', 'showRequiredStar', 'okChange', 'children', 'label', 'labelSpan', 'wrapperSpan', 'meta']);


  return _react2.default.createElement(
    FormItem,
    {
      label: label,
      labelCol: { span: labelSpan == undefined ? "8" : labelSpan },
      wrapperCol: { span: wrapperSpan == undefined ? "16" : wrapperSpan },
      validateStatus: touched && error ? "error" : "",
      help: touched && error, required: showRequiredStar ? true : false
    },
    _react2.default.createElement(_treeSelect2.default, (0, _extends3.default)({}, input, custom, { size: 'default', treeNodeFilterProp: 'label',
      labelInValue: true, onChange: function onChange(value) {
        ;input.onChange(value);
      }, treeData: treeData }))
  );
};
exports.TreeSelectField = TreeSelectField;
exports.default = TreeSelectField;