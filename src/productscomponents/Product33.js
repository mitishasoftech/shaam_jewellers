import React from 'react'
import Bangles3 from '../picsofproducts/bangles3.jpg'
import './Product33.css'
import { useNavigate } from 'react-router-dom'

const Product33 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bangles3}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            AAINA DIAMOND BANGLE
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product33