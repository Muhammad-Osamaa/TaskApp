import React, { Children, useState } from 'react';
import AdminLogin from './Screens/AdminLogin';
import AdminRegister from './Screens/AdminRegister';
import './App.css';
import { Tabs, Typography } from 'antd';
import UserLogin from './Screens/UserLogin'
import UserRegister from './Screens/UserRegister'


function App() {
  const [currentForm, setCurrentForm] = useState('Login');


  const UserForm = () => {
    return (
      <div>
        {
          currentForm === "Login" ?
            <div>
              <UserLogin />
              <Typography.Text>Create account? <Typography.Link onClick={() => setCurrentForm('Register')}>Register</Typography.Link> </Typography.Text>
            </div>
            :
            <div>
              <UserRegister />
              <Typography.Text>Already User? <Typography.Link onClick={() => setCurrentForm('Login')}>Login</Typography.Link> </Typography.Text>
            </div>
        }
      </div>
    )
  }
  const AdminForm = () => {
    return (
      <div>
        {
          currentForm === "Login" ?
            <div>
              <AdminLogin />
              <Typography.Text>Create account? <Typography.Link onClick={() => setCurrentForm('Register')}>Register</Typography.Link></Typography.Text>
            </div>
            :
            <div> <AdminRegister />
              <Typography.Text>Already User? <Typography.Link onClick={() => setCurrentForm('Login')}>Login</Typography.Link> </Typography.Text>
            </div>}
      </div>
    )
  }

  const items = [
    {
      key: '1',
      label: `Admin `,
      children: <AdminForm />


      ,
    },
    {
      key: '2',
      label: `User`,
      children: <UserForm />
    },
  ];




  return (
    <div className="App">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}



export default App;
