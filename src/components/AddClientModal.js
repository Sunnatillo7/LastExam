import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import http from '../axios'

function AddClientModal({ addVisible, setAddVisible }) {
    const [img, setImg] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()



    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = new FormData()
        form.append("image", img)
        form.append("name", name)
        form.append("phone_number", phone)
        form.append("address", address)

        http.post(`/clients/`, form).then(res => {
            console.log(res)
            if (res.status === 201) {
                alert(`Client is added`)
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <Modal isOpen={addVisible} toggle={() => setAddVisible(prev => !prev)}>

            <ModalHeader>
                <h1 className='text-[25px] font-bold'>Add new clients</h1>
            </ModalHeader>
            <ModalBody>
                <form id='form' onSubmit={handleSubmit} >
                    <input className='form-control my-2' onChange={(e) => setImg(e.target.files[0])} type="file" />
                    <input className='form-control my-2' onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
                    <input className='form-control my-2' onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Phone' />
                    <input className='form-control my-2' onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Address' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button form='form' className='btn btn-info'>  Add client</button>
                <button className='btn btn-danger'>  Close</button>
            </ModalFooter>

        </Modal>
    )
}

export default AddClientModal
