import React from 'react'
import { InputNumber ,Form} from 'antd';
const FormItem = Form.Item;
export const NumberField =  ({ input, label,labelSpan,showRequiredStar,wrapperSpan, meta: { touched, error }, ...custom }) => {
 return (

    <FormItem
      label={label}
      labelCol={{ span: labelSpan==undefined?"8":labelSpan }}
      wrapperCol={{ span: wrapperSpan==undefined?"16":wrapperSpan }}
      validateStatus={(touched && error)?"error":""}
      help={touched && error}  required={showRequiredStar?true:false}
    >
      <InputNumber value={input.value} onChange={(v)=>input.onChange(v)}  size="default" {...custom} />
    </FormItem>
  )

}
export default NumberField
