import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import http from '../axios'

function EditSuppliers({ item, editVisible, setEditVisible }) {
    const [img, setImg] = useState()
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const editSupplier =()=>{
        const form = new FormData()
        form.append("image", img)
        form.append("username", username)
        form.append("first_name", firstname)
        form.append("last_name	", lastname)
        form.append("age", age)
        form.append("email", email)
        form.append("phone_number", phone)
        form.append("address", address)
        http.put(`/suppliers/${item.id}/`, form).then(res =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    }
    return (
        <Modal isOpen={editVisible} toggle={() => setEditVisible(prev => !prev)}>
            <ModalHeader>
                <h1 className='font-bold text-[30px]'>Edit Suppliers</h1>
            </ModalHeader>
            <ModalBody>
                <input onChange={(e)=> setImg(e.target.files[0])}  className='form-control my-2' type="file" />
                <input onChange={(e)=> setUsername(e.target.value)} defaultValue={item.username} className='form-control my-2' type="text" placeholder='Username' />
                <input onChange={(e)=> setFirstname(e.target.value)} defaultValue={item.first_name} className='form-control my-2' type="text" placeholder='Firstname' />
                <input onChange={(e)=> setLastname(e.target.value)} defaultValue={item.last_name} className='form-control my-2' type="text" placeholder='Lastname' />
                <input onChange={(e)=> setAge(e.target.value)} defaultValue={item.age} className='form-control my-2' type="number" placeholder='Age' />
                <input onChange={(e)=> setEmail(e.target.value)} defaultValue={item.email} className='form-control my-2' type="email" placeholder='Email' />
                <input onChange={(e)=> setPhone(e.target.value)} defaultValue={item.phone_number} className='form-control my-2' type="number" placeholder='Phone' />
                <input onChange={(e)=> setAddress(e.target.value)} defaultValue={item.address} className='form-control my-2' type="text" placeholder='Address' />
            </ModalBody>
            <ModalFooter>
                <button onClick={editSupplier} className='btn btn-success'>Edit</button>
                <button className='btn btn-info'>Close</button>
            </ModalFooter>

        </Modal>
    )
}

export default EditSuppliers
