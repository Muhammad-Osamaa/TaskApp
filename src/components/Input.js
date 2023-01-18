import React from "react";


const Input = ({onEmailChange,email,placeholder}) => {
    return(
        <input value={email} onChange={onEmailChange} type = "email" placeholder ={placeholder} id="email" name="email"/>

    )
}

export default Input