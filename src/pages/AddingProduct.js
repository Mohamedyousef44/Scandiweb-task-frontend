import React  from 'react'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../components/Form'
import Btn from '../components/Btn'
import api from '../utils/apiClient'

export default function AddingProduct() {

    const navigate = useNavigate() 

    const handleSubmit = (values)=>{
        
        values = JSON.stringify(values)
        api.post('/add-product' , values)
        .then((response)=>{
            navigate('/')
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    const handleCancelBtn = ()=>{
        navigate('/')
    }
  return (
    <>
        <div className='container-fluid p-3'>
            <div className='d-flex flex-row justify-content-between align-items-center p-2 mb-3 border-dark border-bottom'>
                <h3>Product Add</h3>
                <Btn title='cancel' clicked={handleCancelBtn} />
            </div>
            <div className="col-12 col-md-6">
                    <FormComponent onSubmit={handleSubmit} />
            </div>
        </div>
    </>
  )
}
