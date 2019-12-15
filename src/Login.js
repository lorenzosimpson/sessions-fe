import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

const Login = props => {
    const [creds, setCreds] = useState({})

    function handleChange(e) {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axiosWithAuth()
        .post(`/login`, creds)
        .then(res => {
            console.log(res)
            props.history.push('/profile')
        })
        .catch(err => console.log(err))
    }

    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input type='text' name='username'></input>
            <input type='password' name='password'></input>
            <button>submit</button>
        </form>
    )
}
export default Login;