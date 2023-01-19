import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';

const Register = () => {
  


  const handleSubmit = (value)=>{

    const data = JSON.parse(localStorage.getItem('users'));

    if(data && data.length>0){
      data.push(value) 
      localStorage.setItem('users',JSON.stringify(data))
      message.success('Account create successfuly')
    }else{
      localStorage.setItem('users',JSON.stringify([value]))

    }


    console.log(value);
  }
  return (
    <>
    <h1>User Register</h1>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={(values)=>handleSubmit(values)}
   
    autoComplete="off"
  >
    <Form.Item
      label="Full Name"
      name="fullName"
      rules={[{ required: true, message: 'Please input your Full Name!' }]}
    >
      <Input />
    </Form.Item>

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
        Register
      </Button>
    </Form.Item>
  </Form>
  </>
  )
}

export default Register
