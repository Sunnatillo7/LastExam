import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import http from '../axios'
import RoleModal from '../components/RoleModal'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [roleVisible , setRoleVisible] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (evt) => {
        evt.preventDefault()
        http.post(`/login/`, {
            username: username,
            password: password
        }).then(res => {
            if (res.status === 200 && res.data.access_token) {
                window.localStorage.setItem("token", res.data.access_token)
                 setRoleVisible(prev =>!prev)
            
            }
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <div className='w-[500px] mx-auto mt-[100px]'>
            <RoleModal roleVisible={roleVisible} setRoleVisible={setRoleVisible} username={username}/>
            <h1 className='text-center font-bold text-[30px] my-3'>Login</h1>
            <form onSubmit={handleSubmit} >
                <input onChange={(e) => setUsername(e.target.value)} className='form-control my-2' type="text" placeholder='Username' />
                <input onChange={(e) => setPassword(e.target.value)} className='form-control my-2' type="password" placeholder='Password' />
                <button className='btn btn-success mx-auto mt-2 block'>Login</button>
            </form>
        </div>
    )
}

export default Login
