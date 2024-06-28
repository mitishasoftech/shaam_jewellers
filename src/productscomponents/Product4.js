import React from 'react'
import Women4 from '../picsofproducts/women4.jpg'
import './Product4.css'
import { useNavigate } from 'react-router-dom'

const Product4 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Women4}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold',textAlign:'center'}}>
                BANDHURA DIAMOND RING
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product4