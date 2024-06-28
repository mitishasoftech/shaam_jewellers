import React from 'react'
import Bracelets5 from '../picsofproducts/bracelets5.jpg'
import './Product40.css'
import { useNavigate } from 'react-router-dom'

const Product40 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bracelets5}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            NAIRNI DIAMOND BRACELET
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product40