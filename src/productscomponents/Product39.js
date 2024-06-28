import React from 'react'
import Bracelets4 from '../picsofproducts/bracelets4.jpg'
import './Product39.css'
import { useNavigate } from 'react-router-dom'

const Product39 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bracelets4}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            CAVERY GOLD BRACELETS
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product39