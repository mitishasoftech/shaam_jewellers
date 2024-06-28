import React from 'react'
import Mangalsutra1 from '../picsofproducts/mangalsutra1.jpg'
import './Product41.css'
import { useNavigate } from 'react-router-dom'

const Product41 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Mangalsutra1}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            AAIRA DIAMOND MANGALSUTRA
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product41