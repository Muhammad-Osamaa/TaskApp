import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';



const AdminLogin = (props) => {
  const [email,setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();



  const handleSubmit = (value)=>{
    
    const data = JSON.parse(localStorage.getItem('admin'));
   if(data){ const admin = data.filter((item,index) => item.email === value.email)

    if(admin && admin[0].password == value.password){
        localStorage.setItem('isAdminLogin', true)
        localStorage.setItem('isUserLogin', false)
        localStorage.setItem('userInfo',JSON.stringify(data[0]))
        navigate("/Home")
        message.success('Login successfully')

    }else{
        console.log("Email or password incorrect");
        message.error('Email or password incorrect')

    }
    console.log(email);}else{
        console.log("Admin not found");
        message.error('Admin not found')

    }
  }
  return (
   <><h1>Admin Login</h1>
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
  </>
  )
}

export default AdminLogin
