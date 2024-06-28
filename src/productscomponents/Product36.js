import React from 'react'
import Bracelets1 from '../picsofproducts/bracelets1.jpg'
import './Product36.css'
import { useNavigate } from 'react-router-dom'

const Product36 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bracelets1}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            TWINS FLEXI DIAMOND BRACELET
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product36