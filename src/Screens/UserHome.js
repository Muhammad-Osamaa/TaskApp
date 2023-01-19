import { Button, Typography } from "antd";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../App.css";



const UserHome = () => {
    const [showButton, setShowButton] = useState(true)
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    const navigate = useNavigate()

    const onClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                const onlinUsers = JSON.parse(localStorage.getItem('onlineUsers'))
                if (onlinUsers) {
                    onlinUsers.push({ fullName: userInfo.fullName, email: userInfo.email, location: { latitude: location.coords.latitude, longitude: location.coords.longitude } })
                    localStorage.setItem('onlineUsers', JSON.stringify(onlinUsers))
                    setShowButton(false)
                } else {
                    localStorage.setItem('onlineUsers', JSON.stringify([{ fullName: userInfo.fullName, email: userInfo.email, location: { latitude: location.coords.latitude, longitude: location.coords.longitude } }]))
                    setShowButton(false)

                }
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }

    }

    return (
        <div className="App" style={{flexDirection:'column'}}>
            <Typography.Text>Welcome {userInfo.fullName} </Typography.Text>
            {showButton ?
                <Button style={{marginTop :50, marginBottom : 50}} onClick={() => onClick()}>Mark Your Attendance</Button> : <div>Mark Attendance Successfully</div>}

            <Button onClick={() => {
                localStorage.setItem('isUserLogin', false)
                localStorage.setItem('userInfo',{})
                navigate("/")
            }}>Logout</Button>
        </div>

    )
}

export default UserHome