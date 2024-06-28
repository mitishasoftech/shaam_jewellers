import React from 'react'
import Bangles1 from '../picsofproducts/bangles1.jpg'
import './Product31.css'
import { useNavigate } from 'react-router-dom'

const Product31 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bangles1}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            SHAMBHAVI DIAMOND BANGLES
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product31