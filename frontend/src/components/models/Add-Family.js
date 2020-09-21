import React from 'react';
import { Modal, Form, Input, Button, Radio } from 'antd';

const FamilyModal = (props) => {
  const { visible, handleCancel, handleOk, confirmLoading } = props;
  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${label} is required!',
  };

  return (
    <Modal
      title="Title"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Form layout="vertical" onFinish={handleOk} validateMessages={validateMessages} autoComplete="off">
        <Form.Item name={['user', 'familyName']} label="Family Name" rules={[{ required: true }]}>
          <Input placeholder="Family Name..." />
        </Form.Item>
        <Form.Item name={['user', 'headPerson']} label="Head Person" rules={[{ required: true }]}>
          <Input name="headPerson" placeholder="Head Person.." />
        </Form.Item>
        <Form.Item name={['user', 'gender']} label="Gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
            className="m-t-20"
            loading={confirmLoading}
            type="primary"
            htmlType="submit"
          >
            Submit
            </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default FamilyModal;
