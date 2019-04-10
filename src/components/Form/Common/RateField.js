import React from 'react'
import {Form, Rate} from 'antd';
const FormItem = Form.Item;
const RateField = ({input, label, labelSpan, wrapperSpan, showRequiredStar, meta: {asyncValidating, touched, error}, ...custom}) => {

    return (

        <FormItem
            label={label}
            labelCol={{span: labelSpan == undefined ? "8" : labelSpan}}
            wrapperCol={{span: wrapperSpan == undefined ? "16" : wrapperSpan}}
            validateStatus={asyncValidating ? "validating" : ((touched && error) ? "error" : "")}
            help={touched && error} required={showRequiredStar ? true : false}
        >
            <Rate {...input} size="default" {...custom} />
        </FormItem>
    )

}
export default RateField
