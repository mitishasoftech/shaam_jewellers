import React from 'react'
import Bangles5 from '../picsofproducts/bangles5.jpg'
import './Product35.css'
import { useNavigate } from 'react-router-dom'

const Product35 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bangles5}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            MAITHILI DIAMOND KADA
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product35