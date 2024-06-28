import React from 'react'
import Men7 from '../picsofproducts/men7.jpg'
import './Product17.css'
import { useNavigate } from 'react-router-dom'

const Product17 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Men7}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
                DONALD DIAMOND WEDDING RING
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product17