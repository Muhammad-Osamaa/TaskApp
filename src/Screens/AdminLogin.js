import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';


const AdminLogin = (props) => {
  const [email,setEmail] = useState("");
  const [pass, setPass] = useState("");
  



  const handleSubmit = (value)=>{
    const data = JSON.parse(localStorage.getItem('admin'));
   if(data){ const admin = data.filter((item,index) => item.Email === value.email)

    if(admin && admin[0].password == value.password){
        console.log("Login Successful")
    }else{
        console.log("Email or password incorrect");
    }
    console.log(email);}else{
        console.log("Admin not found");
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
      rules={[{ required: true, message: 'Please input your username!' }]}
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

export default AdminLogin
