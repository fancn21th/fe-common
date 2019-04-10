import React from 'react'
import {Input, Form, Col} from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

const MobileField = (fields) => {
  let part1 = fields.names[0].split('.');
  let part2 = fields.names[1].split('.');

  let field1 = fields[part1[0]][part1[1]];
  let field2 = fields[part2[0]][part2[1]];

  const getHelp = ()=> {
    if (field1.meta.touched)
      return field1.meta.error;
    if (field2.meta.touched)
      return field1.meta.error;
  };
  const getValidateStatus = ()=> {
    if ((field1.meta.touched ||
      field2.meta.touched )
      && (field1.meta.error ||
      field2.meta.error)) {
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
      hasFeedback
      validateStatus={getValidateStatus() ? "error" : ""}
      required={fields.showRequiredStar ? true : false}
      help={getHelp()}
    >
      <InputGroup>
        <Col span="8">
          <Input size="default"
                 {...field1.input}
                 disabled={fields.disabled} maxLength="5"
                 style={{width: '100%'}}/>
        </Col>
        <Col span="16">
          <Input size="default"
                 {...field2.input}
                 disabled={fields.disabled} maxLength="12"
                 style={{width: '100%'}}/>
        </Col>
      </InputGroup>
    </FormItem>
  )

};
export default MobileField
