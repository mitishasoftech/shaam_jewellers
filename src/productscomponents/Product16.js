import React from 'react'
import Men6 from '../picsofproducts/men6.jpg'
import './Product16.css'
import { useNavigate } from 'react-router-dom'

const Product16 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Men6}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
                FOREVER DAZZLE PLATINUM BAND
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product16