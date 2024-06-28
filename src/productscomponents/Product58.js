import React from 'react'
import Necklace8 from '../picsofproducts/necklace8.jpg'
import './Product58.css'
import { useNavigate } from 'react-router-dom'

const Product58 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Necklace8}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            AAVYA DIAMOND NECKLACE
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product58