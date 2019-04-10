'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/col/style/css');

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _css2 = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _css3 = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var InputGroup = _input2.default.Group;

var MobileField = function MobileField(fields) {
  var part1 = fields.names[0].split('.');
  var part2 = fields.names[1].split('.');

  var field1 = fields[part1[0]][part1[1]];
  var field2 = fields[part2[0]][part2[1]];

  var getHelp = function getHelp() {
    if (field1.meta.touched) return field1.meta.error;
    if (field2.meta.touched) return field1.meta.error;
  };
  var getValidateStatus = function getValidateStatus() {
    if ((field1.meta.touched || field2.meta.touched) && (field1.meta.error || field2.meta.error)) {
      return true;
    } else {
      return false;
    }
  };
  return _react2.default.createElement(
    FormItem,
    {
      label: fields.label,
      labelCol: { span: fields.labelSpan == undefined ? "8" : fields.labelSpan },
      wrapperCol: { span: fields.wrapperSpan == undefined ? "16" : fields.wrapperSpan },
      hasFeedback: true,
      validateStatus: getValidateStatus() ? "error" : "",
      required: fields.showRequiredStar ? true : false,
      help: getHelp()
    },
    _react2.default.createElement(
      InputGroup,
      null,
      _react2.default.createElement(
        _col2.default,
        { span: '8' },
        _react2.default.createElement(_input2.default, (0, _extends3.default)({ size: 'default'
        }, field1.input, {
          disabled: fields.disabled, maxLength: '5',
          style: { width: '100%' } }))
      ),
      _react2.default.createElement(
        _col2.default,
        { span: '16' },
        _react2.default.createElement(_input2.default, (0, _extends3.default)({ size: 'default'
        }, field2.input, {
          disabled: fields.disabled, maxLength: '12',
          style: { width: '100%' } }))
      )
    )
  );
};
exports.default = MobileField;