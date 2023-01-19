import React from "react"
import AdminHome from "./AdminHome"
import UserHome from "./UserHome"

const Home = () => {

    const isAdminLogin = JSON.parse(localStorage.getItem('isAdminLogin'))

    return (

        isAdminLogin ? <AdminHome/> : <UserHome/>
    )
}

export default Home