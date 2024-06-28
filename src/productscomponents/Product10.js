import React from 'react'
import Women10 from '../picsofproducts/women10.jpg'
import './Product10.css'
import { useNavigate } from 'react-router-dom'

const Product10 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Women10}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
                JUST HEARTS MIRACLE PLATE DIAMOND RING
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product10