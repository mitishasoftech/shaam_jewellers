import React from 'react'
import Bangles4 from '../picsofproducts/bangles4.jpg'
import './Product34.css'
import { useNavigate } from 'react-router-dom'

const Product34 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bangles4}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            VIPSHAA DIAMOND BANGLE
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product34