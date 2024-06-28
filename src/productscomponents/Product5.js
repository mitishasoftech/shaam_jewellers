import React from 'react'
import Women5 from '../picsofproducts/women5.jpg'
import './Product5.css'
import { useNavigate } from 'react-router-dom'

const Product5 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Women5}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
                ELEGANT LADY SOLITAIRE DIAMOND RING
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product5