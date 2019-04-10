/**
 * Created by lx on 16/9/8.
 */
import React from 'react'
import { Form,Radio} from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
export const RadioGroupField =  ({ children,input,okChange,showRequiredStar,labelSpan,wrapperSpan, text,label, meta: { touched, error }, ...custom }) => {

  if(!input.value) input.value=[];
  return(
    <FormItem
      label={label}
      labelCol={{ span: labelSpan==undefined?"8":labelSpan }}
      wrapperCol={{ span: wrapperSpan==undefined?"16":wrapperSpan }}
      validateStatus={(touched && error)?"error":""}
      help={touched && error}  required={showRequiredStar?true:false}
    >
      <RadioGroup {...input} {...custom} onChange={(e) => { input.onChange(e);okChange&&okChange(e) } }>
        {children}
      </RadioGroup>
    </FormItem>

  )
}
export default RadioGroupField
