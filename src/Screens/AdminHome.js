import React from "react"
import { Button, Divider, Typography } from "antd"
import { useNavigate } from "react-router-dom"


const AdminHome = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const onlineUsers = JSON.parse(localStorage.getItem("onlineUsers"))
    const navigate = useNavigate();
    return (
        <div className="App" style={{ flexDirection: 'column' }}>
            <Typography.Text>Welcome {userInfo.fullName} </Typography.Text>

            <div style={{ marginTop: 20, marginBottom: 20, padding: 50, height: 200, overflowX: 'auto' }}>

                {onlineUsers.map((item, index) => {
                    return (
                        <>
                            <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
                                <Typography.Text>{item.fullName}</Typography.Text>
                                <Typography.Text style={{ marginTop: 2 }}>{item.email}</Typography.Text>
                                <Typography.Text style={{ marginTop: 2 }}>{item.location.latitude} , {item.location.longitude}</Typography.Text>

                            </div>
                            <Divider />
                        </>
                    )


                })}

            </div>


            <Button onClick={() => {
                localStorage.setItem('isAdminLogin', false)
                localStorage.setItem('userInfo', {})
                navigate("/")
            }}>Logout</Button>
        </div>
    )
}

export default AdminHome