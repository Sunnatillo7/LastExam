import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import http from '../axios'

function SupplierModal({ supplierVisible, setSupplierVisible }) {
    const [img, setImg] = useState()
    const [firstname, setFirstname] = useState('')
    const [username, setUsername] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = new FormData()
        form.append("image", img)
        form.append("username", username)
        form.append("first_name", firstname)
        form.append("last_name", lastname)
        form.append("age", age)
        form.append("email", email)
        form.append("phone_number", phone)
        form.append("address", address)

        http.post(`/suppliers/`, form).then((res) => {
            console.log(res)
            if (res.status === 201) {
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <Modal isOpen={supplierVisible} toggle={() => setSupplierVisible(prev => !prev)}>
            <ModalHeader>
                <h1 className='text-[30px] font-bold mx-auto'>Add Suppliers</h1>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input onChange={(e) => setImg(e.target.files[0])} className='form-control my-2' type="file" />
                    <input onChange={(e) => setUsername(e.target.value)} className='form-control my-2' type="text" placeholder='Username' />
                    <input onChange={(e) => setFirstname(e.target.value)} className='form-control my-2' type="text" placeholder='Firstname' />
                    <input onChange={(e) => setLastname(e.target.value)} className='form-control my-2' type="text" placeholder='Lastname' />
                    <input onChange={(e) => setAge(e.target.value)} className='form-control my-2' type="number" placeholder='Age' />
                    <input onChange={(e) => setEmail(e.target.value)} className='form-control my-2' type="email" placeholder='Email' />
                    <input onChange={(e) => setPhone(e.target.value)} className='form-control my-2' type="number" placeholder='Phone' />
                    <input onChange={(e) => setAddress(e.target.value)} className='form-control my-2' type="text" placeholder='Address' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button form='form' className='btn btn-success'>Add supplier</button>
                <button className='btn btn-info' onClick={() => setSupplierVisible(prev => !prev)}>Close</button>
            </ModalFooter>

        </Modal>
    )
}

export default SupplierModal
