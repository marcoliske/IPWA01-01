import { Button, Form, Input, Select } from "antd";
import React from "react";
import { gender } from "../../interface";
import { IUserRegistryData, regExAlphabetical } from "../../interface";
import { UserDonationStore } from "./store/userdonationstore";

const { Option } = Select;

export const RegisterUserInfo = (): JSX.Element => {
  const [form] = Form.useForm();

  const onFinish = (values: IUserRegistryData): void => {
    console.log(values);
    UserDonationStore.registryData = values;
    UserDonationStore.registryProgress.step = 2;
  };

  return (
    <>
      <Form
        name="userInfo"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Anrede"
          name="gender"
          rules={[{ required: true, message: "Bitte gib eine Anrede an" }]}
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 4 },
          }}
        >
          <Select>
            <Option value={gender.mr}>Herr</Option>
            <Option value={gender.mrs}>Frau</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="* Name"
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 16 },
          }}
          style={{ marginBottom: 0 }}
        >
          <Input.Group compact>
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Bitte gib deinen Vornamen an" },
                regExAlphabetical,
              ]}
              style={{ marginRight: 14 }}
            >
              <Input placeholder="Vorname"></Input>
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Bitte gib deinen Nachnamen an" },
                regExAlphabetical,
              ]}
            >
              <Input placeholder="Nachname"></Input>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Keine gültige Emailadresse!",
            },
            { required: true, message: "Bitte gib eine Emailadresse an" },
          ]}
          wrapperCol={{ span: 8 }}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item className="form-button" wrapperCol={{ span: 8, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Weiter
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
