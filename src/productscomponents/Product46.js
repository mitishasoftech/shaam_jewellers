import React from 'react'
import Mangalsutra6 from '../picsofproducts/mangalsutra6.jpg'
import './Product46.css'
import { useNavigate } from 'react-router-dom'

const Product46 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Mangalsutra6}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            ANIYA DIAMOND MANGALSUTRA
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product46