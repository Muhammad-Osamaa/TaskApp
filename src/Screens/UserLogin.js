import React  from 'react'
import { Button, Checkbox, Form, Input } from 'antd';


const Login = () => {
  const handleSubmit = (value)=>{

    const data = JSON.parse(localStorage.getItem('users'));
   const user = data.filter((item,index) => item.Email === value.email)
    if(user && user[0].password == value.password){
      console.log("Login Succesful")
    }else{
      console.log("Email or password incorrect");
    }
  }

  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={handleSubmit}
   
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
  )
}

export default Login
