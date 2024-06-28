import React from 'react'
import Bangles2 from '../picsofproducts/bangles2.jpg'
import './Product32.css'
import { useNavigate } from 'react-router-dom'

const Product32 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bangles2}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            TRISHA DIAMOND BANGLES
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product32