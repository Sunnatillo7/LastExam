import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import http from '../axios'

function EditClientsModal({ editVisible, setEditVisible, item }) {
    const [img, setImg] = useState()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')


    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = new FormData()
        form.append("image", img)
        form.append("name", name)
        form.append("phone_number", phone)
        form.append("address", address)

        http.put(`/clients/${item.id}/`, form).then(res => {
            console.log(res)
            if (res.status === 200) {
                alert("Client was edited")
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <Modal isOpen={editVisible} toggle={() => setEditVisible(prev => !prev)}>
            <ModalHeader>
                <h1>  Edit client items</h1>
            </ModalHeader>
            <ModalBody>
                <form id='form' onSubmit={handleSubmit}>
                    <input className='form-control my-2' onChange={(e) => setImg(e.target.files[0])} type="file" />
                    <input defaultValue={item.name} className='form-control my-2' onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
                    <input defaultValue={item.phone_number} className='form-control my-2' onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Phone' />
                    <input defaultValue={item.address} className='form-control my-2' onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Address' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button form='form' className='btn btn-info'>Edit</button>
                <button className='btn btn-warning'>Close</button>
            </ModalFooter>
        </Modal>
    )
}

export default EditClientsModal
