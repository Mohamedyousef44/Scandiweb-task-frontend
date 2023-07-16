import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ٍSelectedProducts'

export default function ProductCard(props) {

    const [isChecked , setIsChecked] = useState(false)
    const { selectedProducts, setSelectedProducts } = useProductContext()

    useEffect(()=>{
        if(isChecked){
            setSelectedProducts((prevSelectedProducts)=>{
                    return [...prevSelectedProducts , props.product.sku]
            })
        }else{
            setSelectedProducts((prevSelectedProducts)=>{
                return prevSelectedProducts.filter((productID)=> productID !== props.product.sku)
            })
        }

    } , [isChecked])

  return (
    <div className='border border-2 border-dark d-flex flex-column justify-content-evenly align-items-center product-card p-2 mb-4'>
        <input type='checkbox'
            className='delete-checkbox align-self-start ms-2'
            name={props.product.sku} 
            checked={isChecked}
            onChange={()=>{setIsChecked(!isChecked)}}
            ></input>
        <p>{props.product.sku}</p>
        <p>{props.product.name}</p>
        <p>{props.product.price} $</p>
        {props.product.size && (
            <p>Size:{props.product.size} MB</p>
        )}
        {props.product.weight && (
            <p>Weight:{props.product.weight} KG</p>
        )}
        {props.product.dimensions && (
            <p>Dimensions:{props.product.dimensions}</p>
        )}
    </div>
  )
}
