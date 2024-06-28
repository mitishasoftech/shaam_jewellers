import React from 'react'
import Necklace9 from '../picsofproducts/necklace9.jpg'
import './Product59.css'
import { useNavigate } from 'react-router-dom'

const Product59 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Necklace9}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            ANUSHKA DIAMOND NECKLACE
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product59