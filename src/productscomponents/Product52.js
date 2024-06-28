import React from 'react'
import Necklace2 from '../picsofproducts/necklace2.jpg'
import './Product52.css'
import { useNavigate } from 'react-router-dom'

const Product52 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Necklace2}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            ARDOUR AFFECTION DIAMOND PENDANT WITH CHAIN
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product52