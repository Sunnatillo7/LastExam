import React, { useEffect, useState } from 'react'
import SupplierModal from '../components/SupplierModal'
import http from '../axios'
import EditSuppliers from '../components/EditSuppliers'
import { Link } from 'react-router-dom'

function Suppliers() {
    const [item, setItem] = useState({})
    const [supplierVisible, setSupplierVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)

    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
        http.get(`/suppliers/`).then(res => {
            console.log(res)
            setSuppliers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    // const click = (id) => {
    //  http.get(`/suppliers/${id}`).then(res =>{
    //     console.log(res)
    //  }).catch(err =>{
    //     console.log(err)
    //  })
    // }


    const deleteBtn = (id) => {
        http.delete(`/suppliers/${id}`).then(res => {
            console.log(res)
            if (res.status === 204) {
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const editFunction = (item) => {
        setItem(item)
        setEditVisible(prev => !prev)

    }
    console.log(item)
    return (
        <div>
            <EditSuppliers item={item} editVisible={editVisible} setEditVisible={setEditVisible} />
            <SupplierModal supplierVisible={supplierVisible} setSupplierVisible={setSupplierVisible} />
            <button className='btn btn-success absolute right-3' onClick={() => setSupplierVisible(preb => !preb)} >Add suppliers</button>
            <Link to={"/clients"} className="btn btn-info absolute right-3 top-[80px]">Clients</Link>

            <h1 className='font-bold text-[40px] text-center my-4'>Our Suppliers</h1>
            <div className='flex space-x-2 flex-wrap mt-[70px]'>
                {
                    suppliers.map((item, index) => (
                        <div className='w-[280px] cursor-pointer pb-[15px]  pt-[20px] bg-slate-400 ' key={index}>
                            <img className='w-[50%] h-[200px] mx-auto rounded' src={item.image} alt="img" />
                            <p className='text-center text-[30px]'>{item.first_name}</p>
                            <a href={item.email} className='text-center block'>Email : {item.email}</a>
                            <div className='text-center'>
                                <button onClick={() => editFunction(item)} className='btn btn-info mt-2'>Edit</button>
                                <button onClick={() => deleteBtn(item.id)} className='btn btn-danger mt-2 ml-4'>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Suppliers
