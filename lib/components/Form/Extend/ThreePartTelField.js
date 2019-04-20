'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/col/style/css');

require('antd/lib/input/style/css');

require('antd/lib/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var InputGroup = _input2.default.Group;

var ThreePartTelField = function ThreePartTelField(fields) {
    var part1 = fields.names[0].split('.');
    var part2 = fields.names[1].split('.');
    /* let part3 = fields.names[2].split('.');*/

    var placeholder0 = void 0,
        placeholder1 = void 0,
        placeholder2 = void 0;
    if (fields.placeholders) {
        if (fields.placeholders[0]) {
            placeholder0 = fields.placeholders[0];
        }
        if (fields.placeholders[1]) {
            placeholder1 = fields.placeholders[1];
        }
        /* if (fields.placeholders[2]) {
             placeholder2 = fields.placeholders[2];
         }*/
    }
    var field1 = fields[part1[0]][part1[1]];
    var field2 = fields[part2[0]][part2[1]];
    /* let field1 = fields[part1[0]][part1[1]];
     let field2 = fields[part2[0]][part2[1]];
     let field3 = fields[part3[0]][part3[1]];*/

    var getHelp = function getHelp() {
        if (field1.meta.touched) return field1.meta.error;
        if (field2.meta.touched) return field1.meta.error;
        /*if (field3.meta.touched)
            return field1.meta.error;*/
    };
    /*const getValidateStatus = () => {
        if ((field1.meta.touched ||
            field2.meta.touched ||
            field3.meta.touched)
            && (field1.meta.error ||
            field2.meta.error ||
            field3.meta.error)) {
            return true;
        }
        else {
            return false;
        }
    };*/
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
            validateStatus: getValidateStatus() ? "error" : "",
            required: fields.showRequiredStar ? true : false,
            help: getHelp()
        },
        _react2.default.createElement(
            InputGroup,
            null,
            _react2.default.createElement(
                _col2.default,
                { span: '4' },
                _react2.default.createElement(_input2.default, (0, _extends3.default)({ size: 'default', placeholder: placeholder0
                }, field1.input, {
                    maxLength: '5',
                    disabled: fields.disabled,
                    style: { width: '100%' } }))
            ),
            _react2.default.createElement(
                _col2.default,
                { span: '12' },
                _react2.default.createElement(_input2.default, (0, _extends3.default)({ size: 'default', placeholder: placeholder1
                }, field2.input, {
                    maxLength: '15',
                    disabled: fields.disabled,
                    style: { width: '100%' } }))
            )
        )
    );
};
exports.default = ThreePartTelField;