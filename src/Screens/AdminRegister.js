import React, { useEffect, useState } from 'react'
import { Button,Form, Input } from 'antd';

const AdminRegister = () => {


  const handleSubmit = (value)=>{

    const data = JSON.parse(localStorage.getItem('admin'));

    if(data && data.length>0){
        data.push(value)
        localStorage.setItem('admin', JSON.stringify(data))
    }else{
        localStorage.setItem('admin', JSON.stringify([value]))
    }

    console.log(value);
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
      label="Full Name"
      name="Full Name"
      rules={[{ required: true, message: 'Please input your Full Name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
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
        Register
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AdminRegister
