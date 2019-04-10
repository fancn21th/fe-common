import React from 'react'
import {Input, Form, Select} from 'antd';
const FormItem = Form.Item;
export const SelectField = ({input, okChange, children, showRequiredStar, label, labelSpan, wrapperSpan, meta: {touched, error}, ...custom}) => {
  if (input.value ==""||input.value ==null)
    input.value = undefined;

  return (
    <FormItem
      label={label}
      labelCol={{span: labelSpan == undefined ? "8" : labelSpan}}
      wrapperCol={{span: wrapperSpan == undefined ? "16" : wrapperSpan}}
      validateStatus={(touched && error) ? "error" : ""}
      help={touched && error} required={showRequiredStar ? true : false}
    >
      <Select  placeholder="Please Select" {...input} onChange={(e) => {
        if (e == undefined) {
          input.onChange("");

        }
        else {
          input.onChange(e);
        }
        okChange && okChange(e)
      } }
              {...custom} size="default" allowClear={input.value==""?false:true} showArrow={true}
              showSearch
              optionFilterProp="children"  filterOption={(inputValue, option)=> {
        if (option.props.children.toLowerCase().indexOf(inputValue.toLowerCase())!=-1) {
          return true;
        }
      }}

      >
        {children}
      </Select>
    </FormItem>
  )

}
export default SelectField
