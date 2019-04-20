'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatePickerField = undefined;

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/date-picker/style/css');

require('antd/lib/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;

var DatePickerField = function DatePickerField(_ref) {
    var input = _ref.input,
        label = _ref.label,
        startDate = _ref.startDate,
        endDate = _ref.endDate,
        showRequiredStar = _ref.showRequiredStar,
        labelSpan = _ref.labelSpan,
        wrapperSpan = _ref.wrapperSpan,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'label', 'startDate', 'endDate', 'showRequiredStar', 'labelSpan', 'wrapperSpan', 'meta']);


    if (input.value == "" || input.value == undefined || isNaN(input.value)) {
        input.value = null;
    } else {
        input.value = (0, _moment2.default)(input.value);
    }

    return _react2.default.createElement(
        FormItem,
        {
            label: label,
            labelCol: { span: labelSpan == undefined ? "8" : labelSpan },
            wrapperCol: { span: wrapperSpan == undefined ? "16" : wrapperSpan },
            validateStatus: touched && error ? "error" : "",
            help: touched && error, required: showRequiredStar ? true : false
        },
        _react2.default.createElement(_datePicker2.default, (0, _extends3.default)({ format: 'YYYY-MM-DD', value: input.value }, custom, { onChange: function onChange(e) {
                input.onChange(Date.parse(e));
            } }))
    );
};
exports.DatePickerField = DatePickerField;
exports.default = DatePickerField;