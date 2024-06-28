import React from 'react'
import Mangalsutra2 from '../picsofproducts/mangalsutra2.jpg'
import './Product42.css'
import { useNavigate } from 'react-router-dom'

const Product42 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Mangalsutra2}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            FREED DIAMOND MANGALSUTRA
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product42