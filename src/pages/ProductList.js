import React, { useEffect , useState} from 'react'
import ProductCard from '../components/ProductCard';
import { SelectedProductsProvider } from '../context/ٍSelectedProducts';
import BtnGroup from '../components/BtnGroup';
import api from '../utils/apiClient';

export default function ProductList() {

    const [productList , setProductList] = useState([]) 

    useEffect(()=>{
        
        api.get('/')
        .then((response)=>{
            setProductList(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])
    return (
        <>
            <SelectedProductsProvider>
                <div className='container-fluid p-3'>
                    <div className='d-flex flex-row justify-content-between align-items-center p-2 mb-3 border-dark border-bottom'>
                        <h3>Product List</h3>
                        <BtnGroup />
                    </div>
                    <div className='row justify-content-evenly  gap-1 mt-3 align-content-between'>
                        {productList.map((product) => (
                            <ProductCard
                                key={product.sku}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </SelectedProductsProvider>
        </>
    )
}
