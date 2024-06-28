import React from 'react'
import Earrings5 from '../picsofproducts/earrings5.jpg'
import './Product25.css'
import { useNavigate } from 'react-router-dom'

const Product25 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Earrings5}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            JILPA DIAMOND EARRINGS
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product25