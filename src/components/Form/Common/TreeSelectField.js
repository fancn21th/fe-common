import React from 'react'
import {Input, Form, Select,TreeSelect} from 'antd';

const FormItem = Form.Item;
export const TreeSelectField = ({input, treeData,showRequiredStar, okChange, children, label, labelSpan, wrapperSpan, meta: {touched, error}, ...custom}) => {

  return (
    <FormItem
      label={label}
      labelCol={{ span: labelSpan==undefined?"8":labelSpan }}
      wrapperCol={{ span: wrapperSpan==undefined?"16":wrapperSpan }}
      validateStatus={(touched && error)?"error":""}
      help={touched && error}  required={showRequiredStar?true:false}
    >
      <TreeSelect {...input} {...custom} size="default"  treeNodeFilterProp="label"
                                         labelInValue onChange={value=>
                                          {;input.onChange(value)}} treeData={treeData} />
    </FormItem>
  )

}
export default TreeSelectField
