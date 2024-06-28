import React from 'react'
import Mangalsutra9 from '../picsofproducts/mangalsutra9.jpg'
import './Product49.css'
import { useNavigate } from 'react-router-dom'

const Product49 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Mangalsutra9}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            FLAME TREE GOLD MANGALSUTRA
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product49