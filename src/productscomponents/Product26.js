import React from 'react'
import Earrings6 from '../picsofproducts/earrings6.jpg'
import './Product26.css'
import { useNavigate } from 'react-router-dom'

const Product26 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Earrings6}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            MORII DIAMOND DANGLE EARRINGS
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product26