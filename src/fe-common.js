/**
 * Created by lx on 16/9/11.
 */
import CheckboxField from './components/Form/Common/CheckboxField'
import CheckboxGroupField from './components/Form/Common/CheckboxGroupField'
import DatePickerField from './components/Form/Common/DatePickerField'
import MultiSelectField from './components/Form/Common/MultiSelectField'
import NumberField from './components/Form/Common/NumberField'
import RadioGroupField from './components/Form/Common/RadioGroupField'
import SelectField from './components/Form/Common/SelectField'
import TextField from './components/Form/Common/TextField'
import TreeSelectField from './components/Form/Common/TreeSelectField'
import RateField from './components/Form/Common/RateField'
import FourPartTelField from './components/Form/Extend/FourPartTelField'
import ThreePartTelField from './components/Form/Extend/ThreePartTelField'
import MobileField from './components/Form/Extend/MobileField'
import NameField from './components/Form/Extend/NameField'


import {
    Form, Checkbox, DatePicker, Select, Input, Radio, TreeSelect,Tag,Collapse,AutoComplete,
    Col, Row, Table, Card, Button, message, Modal, Popconfirm, Icon, Popover, Spin, Dropdown, Menu, Tree,
    LocaleProvider, Carousel, Breadcrumb, Tabs, notification, Pagination, Transfer, Steps, Upload, Rate, Badge
} from 'antd';

const validateMsg = require('./utils/validateMsg');
const validateUtil = require('./utils/validateUtil');


export {
    CheckboxField,
    CheckboxGroupField,
    DatePickerField,
    MultiSelectField,
    NumberField,
    RadioGroupField,
    SelectField,
    TextField,
    TreeSelectField,
    FourPartTelField,
    ThreePartTelField,
    MobileField,
    NameField,
    RateField


}


exports.Form = Form;
exports.Checkbox = Checkbox;
exports.DatePicker = DatePicker;
exports.Select = Select;
exports.Input = Input;
exports.Radio = Radio;
exports.TreeSelect = TreeSelect;
exports.Col = Col;
exports.Row = Row;
exports.Table = Table;
exports.Card = Card;
exports.Button = Button;
exports.message = message;
exports.notification = notification;

exports.Modal = Modal;
exports.Popconfirm = Popconfirm;
exports.Icon = Icon;
exports.Popover = Popover;
exports.Spin = Spin;

exports.Dropdown = Dropdown;
exports.Menu = Menu;
exports.Tree = Tree;
exports.LocaleProvider = LocaleProvider;

exports.Breadcrumb = Breadcrumb;
exports.Tabs = Tabs;
exports.Pagination = Pagination;
exports.Transfer = Transfer;
exports.Steps = Steps;
exports.Upload = Upload;
exports.Rate = Rate;
exports.Carousel = Carousel;
exports.Badge = Badge;

exports.AutoComplete = AutoComplete;

exports.Tag=Tag;
exports.Collapse=Collapse;

exports.validateMsg = validateMsg;
exports.validateUtil = validateUtil;

