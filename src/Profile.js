import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const Profile = props => {
    useEffect(() => {
        axiosWithAuth()
        .get(`/users/test_1`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    })

    return (
        <>
        <h1>profile</h1>
       
        </>
    )
}

export default Profile;