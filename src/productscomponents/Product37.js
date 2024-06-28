import React from 'react'
import Bracelets2 from '../picsofproducts/bracelets2.jpg'
import './Product37.css'
import { useNavigate } from 'react-router-dom'

const Product37 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bracelets2}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            AMISA DIAMOND BRACELET
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product37