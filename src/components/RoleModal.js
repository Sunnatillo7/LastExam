import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import {useNavigate} from "react-router-dom"

function RoleModal({ username, roleVisible, setRoleVisible }) {
    const navigate = useNavigate()
    const [select, setSelect] = useState("")

    const handleSelect = (evt) => {
        setSelect(evt.target.value)
    }

    const click = () => {
      if(select === "suppliers"){
        navigate(`/suppliers`)
      }else if(select === "clients"){
        navigate(`/clients`)
      }
    }
    return (
        <Modal isOpen={roleVisible} toggle={() => setRoleVisible(prev => !prev)}>
            <ModalHeader>
                <h1>Welcome {`${username}`} please chose page</h1>
            </ModalHeader>
            <ModalBody>
                <select onChange={handleSelect} className='form-control'>
                    <option value="" hidden selected>Chose role</option>
                    <option value="suppliers">Suppliers</option>
                    <option value="clients">Clients</option>
                </select>
            </ModalBody>
            <ModalFooter>
                <button onClick={click} className='btn btn-info'>Submit</button>
                <button onClick={() => setRoleVisible(prev => !prev)} className='btn btn-danger'>Close</button>
            </ModalFooter>

        </Modal>
    )
}

export default RoleModal
