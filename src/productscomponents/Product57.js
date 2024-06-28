import React from 'react'
import Necklace7 from '../picsofproducts/necklace7.jpg'
import './Product57.css'
import { useNavigate } from 'react-router-dom'

const Product57 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Necklace7}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            NAINA DIAMOND NECKACE
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product57