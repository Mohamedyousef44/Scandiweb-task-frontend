import React from 'react'

export default function Btn(props) {
  
  return (
    <button className='btn btn-dark ms-2' id={props.id} type={props.type || 'button'} onClick={props.clicked}>{props.title}</button>
  )
}
