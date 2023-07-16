import React , { useState }from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Btn from './Btn'

export default function FormComponent(props) {

    const [productType , setProductType] = useState('Type Switcher')

    const renderField = ()=>{
        if(productType === 'DVD'){
            return(
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Size (MB)</label>
                    <Field id='size' type='number' min='1'  name='size' className='form-control mb-3'></Field>
                    <span className='my-3 d-block fs-6 text-secondary'>*Please provide size in MB</span>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='size' component='span'></ErrorMessage>
                </div>
            )
        }else if(productType === 'Book'){
            return(
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label">Weight (KG)</label>
                    <Field id='weight' type='number' min='1'  name='weight' className='form-control mb-3'></Field>
                    <span className='my-3 d-block fs-6 text-secondary'>*Please provide weight in KG</span>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='weight' component='span'></ErrorMessage>
                </div>
            )
        }else if(productType === 'Furniture'){
            return(
                <>
                    <div className="mb-3">
                        <label htmlFor="height" className="form-label">Height (CM)</label>
                        <Field id='height'  type='number' min='1'  name='height' className='form-control mb-3'></Field>
                        <ErrorMessage className='alert alert-danger my-5 p-2' name='height' component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="width" className="form-label">Width (CM)</label>
                        <Field id='width' type='number' min='1'  name='width' className='form-control mb-3'></Field>
                        <ErrorMessage className='alert alert-danger my-5 p-2' name='width' component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="length" className="form-label">Length (CM)</label>
                        <Field id='length' type='number' min='1'  name='length' className='form-control mb-3'></Field>
                        <ErrorMessage className='alert alert-danger my-5 p-2' name='length' component='span'></ErrorMessage>
                        <span className='my-3 d-block fs-6 text-secondary'>*Please provide all dimensions in HXWXL</span>
                    </div>
                </>
            )
        }else{
            return (
                <span className='my-3 d-block fs-6 text-secondary'>*Please Choose Specific Type</span>
            )
        }
    }

    const initValues = {
        sku : '',
        name:'',
        price:1,
        size:null,
        weight:null,
        length:null,
        height:null,
        width:null
        
    }

    const handleSubmit = (values)=>{
        if(productType !== 'Type Switcher'){
            values.productType = productType
            props.onSubmit(values)
        }
    }

    const validationSchema = Yup.object({
        sku: Yup.string().required(),
        name:Yup.string().required(),
        price:Yup.number().required(),
        ...(productType === 'DVD' && {
            size:Yup.number().required()
        }),
        ...(productType === 'Book' && {
            weight:Yup.number().required()
        }),
        ...(productType === 'Furniture' && {
            height:Yup.number().required(),
            width:Yup.number().required(),
            length:Yup.number().required(),
        })
    })

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {()=>(
            <Form className='p-3 w-100'>
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">Product ID</label>
                    <Field type='text' name='sku' className='form-control mb-3'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='sku' component='span'></ErrorMessage>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <Field type='text' name='name' className='form-control mb-3'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='name' component='span'></ErrorMessage>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product Price</label>
                    <Field type='number' min='1'  name='price' className='form-control mb-3'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='price' component='span'></ErrorMessage>
                </div>
                <select name='productsType' className="form-select my-3" onChange={(e)=>{setProductType(e.target.value)}}>
                    <option id='Switcher' value='Type Switcher' selected>Type Switcher</option>
                    <option id='DVD' value="DVD">DVD</option>
                    <option id='Furniture' value="Furniture">Furniture</option>
                    <option id='Book' value="Book">Book</option>
                </select>
                {renderField()}
                <Btn type='submit' title='save' />
            </Form>
        )}
    </Formik>
  )
}
