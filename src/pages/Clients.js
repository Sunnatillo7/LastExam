import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import http from '../axios'
import AddClientModal from '../components/AddClientModal'
import EditClientsModal from '../components/EditClientsModal'

function Clients() {
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [clients, setClients] = useState([])
    const [item, setItem] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        http.get(`/clients/`).then(res => {
            console.log(res)
            if (res.status === 200) {
                setClients(res.data)
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const deleteClient = (id) => {
        http.delete(`/clients/${id}`).then(res => {
            console.log(res)
            if (res.status === 204) {
                alert("User o'chirildi")
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const editClients = (item) => {
        setItem(item)
        setEditVisible(prev => !prev)

    }

    return (
        <div>
            <EditClientsModal item={item} editVisible={editVisible} setEditVisible={setEditVisible} />
            <AddClientModal addVisible={addVisible} setAddVisible={setAddVisible} />
            <button onClick={() => setAddVisible(prev => !prev)} className='btn btn-success absolute right-3'>Add clients</button>
            <Link className='btn btn-info absolute right-3 top-[80px]' to={"/suppliers"}>Suppliers</Link>
            <h1 className='font-bold text-[50px] mx-auto text-center my-4'>Our clients</h1>
            <div className='flex flex-wrap space-x-3'>

                {
                    clients.map((item, index) => (
                        <div className='w-[300px] pb-[20px] pt-[20px] bg-slate-400' key={index}>
                            <img className='w-[50%] mx-auto h-[200px] ' src={item.image} alt="img" />
                            <p className='text-center mt-2 font-bold text-[20px]'>{item.name}</p>
                            <div className='text-center mt-[15px]'>
                                <button onClick={() => editClients(item)} className='btn btn-warning'>Edit</button>
                                <button onClick={() => deleteClient(item.id)} className='btn btn-danger ml-3'>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Clients
