import React from 'react'
import Mangalsutra4 from '../picsofproducts/mangalsutra4.jpg'
import './Product44.css'
import { useNavigate } from 'react-router-dom'

const Product44 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Mangalsutra4}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            DALILEH DIAMOND MANGALSUTRA
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product44