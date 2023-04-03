import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import ToastComponent from '../components/ToastComponent'
import { ToastContainer } from 'react-toastify';
import http from '../axios'

function Register() {
    const navigate = useNavigate()
    const [img, setImg] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")


    const handleSubmit = (evt) => {
        evt.preventDefault()

        const form = new FormData()
        form.append("image", img)
        form.append("username", username)
        form.append("password", password)
        form.append("password2", password2)
        http.post(`/register/`, form).then(res => {
            if (res.status === 201) {
                // ToastComponent({type: "success" , text:"Well done"})
                alert(`Well done`)
                setTimeout(() => {
                    navigate(`/login`)
                    window.location.reload()
                }, 1500);

            }
        }).catch(err => {
            console.log(err)
            if (err.response.status === 400) {
                // ToastComponent({type:"erroe", text: "Please try again"})
                alert(`Please try again`)
            }
        })
    }
    return (
        <div className='w-[500px] mx-auto mt-[100px]'>
            <ToastContainer />
            <h1 className='font-bold text-center text-[30px]'>Register</h1>
            <form onSubmit={handleSubmit} className='mt-[25px]  '>
                <input onChange={(e) => setImg(e.target.files[0])} className='form-control my-2' type="file" />
                <input onChange={(e) => setUsername(e.target.value)} className='form-control my-2' type="text" placeholder='Username' />
                <input onChange={(e) => setPassword(e.target.value)} className='form-control my-2' type="password" placeholder='Password' />
                <input onChange={(e) => setPassword2(e.target.value)} className='form-control my-2' type="password" placeholder='Password' />
                <button className='btn btn-success mx-auto block mt-[20px]'>Register</button>
            </form>
        </div>
    )
}

export default Register
