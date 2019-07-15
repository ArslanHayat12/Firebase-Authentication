import React, { Fragment } from "react";
import { Form, Input, Button, Icon, Checkbox } from "antd";
import "antd/dist/antd.css";
import "../styles/index.css";
const InputForm = Form.create<any>({ name: "form_in_modal" })((props: any) => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        props.action(values);
      }
    });
  };
  return (
    <div className="center">
      <h1 className="center"> {props.title} </h1>
      <Form onSubmit={handleSubmit}>
        {props.auth === "phone" ? (
          <Fragment>
            <Form.Item>
              {getFieldDecorator("phoneNumber", {
                rules: [
                  { required: true, message: "Please input your phone number!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Phone number (+923123456789)"
                />
              )}
            </Form.Item>
          </Fragment>
        ) : props.auth === "code" ? (
          <Fragment>
            <Form.Item>
              {getFieldDecorator("code", {
                rules: [
                  {
                    required: true,
                    message: "Please input code that was sent on your phone!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Code (123456)"
                />
              )}
            </Form.Item>
          </Fragment>
        ) : (
          <Fragment>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
          </Fragment>
        )}
        {props.error ? <p color="red">{props.error}</p> : null}
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {props.title}
          </Button>
          <br />
          <a onClick={() => props.history.push(props.authType)}>
           {props.authMessage}
          </a>
          <br />
          Or{" "}
          <a onClick={() => props.history.push(props.redirect)}>
            {props.message}
          </a>
        </Form.Item>
      </Form>
    </div>
  );
});

export default InputForm;
