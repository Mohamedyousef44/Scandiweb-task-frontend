import React from 'react'
import {useNavigate} from 'react-router-dom'
import Btn from './Btn'
import { useProductContext } from '../context/ٍSelectedProducts'
import api from '../utils/apiClient'

export default function BtnGroup() {
    const navigate  = useNavigate()
    const { selectedProducts, setSelectedProducts } = useProductContext()

    const handleClickDelete = () => {
      if (selectedProducts.length > 0) {
        let ids = JSON.stringify(selectedProducts);
        api.delete('/', { data: ids }) 
          .then((response) => {
            window.location.reload()
          })
          .catch((e) => {
            console.log(e);
          });
      }
    };

    const handleClickAdd = ()=>{
        navigate('/add-product')
    }

  return (
    <div className='d-flex flex-row justify-content-between '>
        <Btn title='ADD' clicked={handleClickAdd} />
        <Btn title='MASS DELETE' clicked={handleClickDelete} id='delete-product-btn' />
    </div>
  )
}
