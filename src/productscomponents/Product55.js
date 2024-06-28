import React from 'react'
import Necklace5 from '../picsofproducts/necklace5.jpg'
import './Product55.css'
import { useNavigate } from 'react-router-dom'

const Product55 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Necklace5}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            SCARLET DIAMOND NECKLACE
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product55