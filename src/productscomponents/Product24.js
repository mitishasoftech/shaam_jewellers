import React from 'react'
import Earrings4 from '../picsofproducts/earrings4.jpg'
import './Product24.css'
import { useNavigate } from 'react-router-dom'

const Product24 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Earrings4}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            EASHA DIAMOND EARRINGS
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product24