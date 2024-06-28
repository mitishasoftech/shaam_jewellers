import React from 'react'
import Earrings2 from '../picsofproducts/earrings2.jpg'
import './Product22.css'
import { useNavigate } from 'react-router-dom'

const Product22 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Earrings2}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            OMBRE COLOURBUST PEACOCK GOLD EARRINGS
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product22