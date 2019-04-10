import React from 'react'
import {Input, Form, Col} from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

const FourPartTelField = (fields) => {
  let part1 = fields.names[0].split('.');
  let part2 = fields.names[1].split('.');
  let part3 = fields.names[2].split('.');
  let part4 = fields.names[3].split('.');

  let placeholder0, placeholder1, placeholder2, placeholder3;
  if (fields.placeholders) {
    if (fields.placeholders[0]) {
      placeholder0 = fields.placeholders[0];
    }
    if (fields.placeholders[1]) {
      placeholder1 = fields.placeholders[1];
    }
    if (fields.placeholders[2]) {
      placeholder2 = fields.placeholders[2];
    }
    if (fields.placeholders[3]) {
      placeholder3 = fields.placeholders[3];
    }
  }

  let field1 = fields[part1[0]][part1[1]];
  let field2 = fields[part2[0]][part2[1]];
  let field3 = fields[part3[0]][part3[1]];
  let field4 = fields[part4[0]][part4[1]];

  const getHelp = ()=> {
    if (field1.meta.touched)
      return field1.meta.error;
    if (field2.meta.touched)
      return field1.meta.error;
    if (field3.meta.touched)
      return field1.meta.error;
    if (field4.meta.touched)
      return field1.meta.error;
  };
  const getValidateStatus = ()=> {
    if ((field1.meta.touched ||
      field2.meta.touched ||
      field3.meta.touched ||
      field4.meta.touched)
      && (field1.meta.error ||
      field2.meta.error ||
      field3.meta.error ||
      field4.meta.error)) {
      return true;
    }
    else {
      return false;
    }
  };
  return (
    <FormItem
      label={fields.label}
      labelCol={{span: fields.labelSpan == undefined ? "8" : fields.labelSpan}}
      wrapperCol={{span: fields.wrapperSpan == undefined ? "16" : fields.wrapperSpan}}
      validateStatus={getValidateStatus() ? "error" : ""}
      required={fields.showRequiredStar ? true : false}
      help={getHelp()}
    >
      <InputGroup>
        <Col span="4">
          <Input size="default" placeholder={placeholder0}
                 {...field1.input}
                 maxLength="5"
                 disabled={fields.disabled}
                 style={{width: '100%'}}/>
        </Col>
        <Col span="4">
          <Input size="default" placeholder={placeholder1}
                 {...field2.input}
                 maxLength="5"
                 disabled={fields.disabled}
                 style={{width: '100%'}}/>
        </Col>
        <Col span="8">
          <Input size="default" placeholder={placeholder2}
                 {...field3.input}
                 maxLength="10"
                 disabled={fields.disabled}
                 style={{width: '100%'}}/>
        </Col>
        <Col span="2">
          <p className="ant-form-split">ext:</p>
        </Col>
        <Col span="4">
          <Input size="default" placeholder={placeholder3}
                 {...field4.input}
                 maxLength="5"
                 disabled={fields.disabled}
                 style={{width: '100%'}}/>
        </Col>
      </InputGroup>
    </FormItem>
  )
};
export default FourPartTelField
