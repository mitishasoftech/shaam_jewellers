import React from 'react'
import Necklace6 from '../picsofproducts/necklace6.jpg'
import './Product56.css'
import { useNavigate } from 'react-router-dom'

const Product56 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Necklace6}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            SPRING LEAVES DIAMOND NECKLACE
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product56