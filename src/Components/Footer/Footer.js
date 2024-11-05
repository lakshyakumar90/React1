import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Footer = ({item}) => {
    const {name, locality, labels} = item;
  return (
    <div className='footer'>
        <h1>{name}</h1>
        <p>Outlet ({locality})</p>
        <p><FaLocationDot /> {labels[1].message}</p>
    </div>
  )
}

export default Footer