import React from 'react'
import Necklace1 from '../picsofproducts/necklace1.jpg'
import './Product51.css'
import { useNavigate } from 'react-router-dom'

const Product51 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Necklace1}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            ANANYA GOLD PENDANT WITH CHAIN
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product51