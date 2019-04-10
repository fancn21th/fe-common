import React from 'react'
import {Input, Form, Select} from 'antd';
const FormItem = Form.Item;
export const MultiSelectField = ({input, okChange,showRequiredStar, children, label, labelSpan, wrapperSpan, meta: {touched, error}, ...custom}) => {
  if (input.value == "") {
    input.value = [];
  }
input.value=input.value.map((a)=>a.toString());
  return (
    <FormItem
      label={label}
      labelCol={{ span: labelSpan==undefined?"8":labelSpan }}
      wrapperCol={{ span: wrapperSpan==undefined?"16":wrapperSpan }}
      validateStatus={(touched && error)?"error":""}
      help={touched && error}  required={showRequiredStar?true:false}
    >
      <Select multiple  {...input} onChange={(e) => { input.onChange(e);okChange&&okChange() } }
        {...custom} size="default"
      >
        {children}
      </Select>
    </FormItem>
  )

}
export default MultiSelectField
