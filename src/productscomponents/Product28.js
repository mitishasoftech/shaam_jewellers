import React from 'react'
import Earrings8 from '../picsofproducts/earrings8.jpg'
import './Product28.css'
import { useNavigate } from 'react-router-dom'

const Product28 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Earrings8}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            SHAHIRA DIAMOND EARRINGS
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product28