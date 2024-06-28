import React from 'react'
import Bracelets3 from '../picsofproducts/bracelets3.jpg'
import './Product38.css'
import { useNavigate } from 'react-router-dom'

const Product38 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Bracelets3}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            MITALI GOLD BRACELET
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product38