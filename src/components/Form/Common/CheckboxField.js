/**
 * Created by lx on 16/9/8.
 */
import React from 'react'
import {Form, Checkbox} from 'antd';

const FormItem = Form.Item;
export const CheckboxField = ({input, checkboxFirst, labelSpan, showRequiredStar, wrapperSpan, text, label, meta: {touched, error}, ...custom}) => {
  if (!input.value) input.value = false;
  return (
    <FormItem
      label={checkboxFirst ? '' : label}
      labelCol={{span: labelSpan == undefined ? "8" : labelSpan}}
      wrapperCol={{span: wrapperSpan == undefined ? "16": wrapperSpan}}
      required={showRequiredStar ? true : false}
    >
      {
        checkboxFirst &&
        <span>
        <Checkbox {...input} defaultChecked={input.value} {...custom}>{text}</Checkbox>&nbsp;{label}
          </span>
      }
      {
        !checkboxFirst &&
        <Checkbox {...input} defaultChecked={input.value} {...custom}>{text}</Checkbox>
      }
    </FormItem>
  )
}
export default CheckboxField
