import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (value) => {


    const data = JSON.parse(localStorage.getItem('users'));
    const user = data.filter((item, index) => item.email === value.email)
    if (user && user[0].password == value.password) {
      localStorage.setItem('isUserLogin', true)
      localStorage.setItem('isAdminLogin', false)
      localStorage.setItem('userInfo', JSON.stringify(user[0]))
      navigate("/Home")
      message.success('Login successfully')
    } else {
      console.log("Email or password incorrect");
      message.error('Email or password incorrect')
    }

  }

  return (
    <><h1>User Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={(values) => handleSubmit(values)}

        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
