import React from 'react'
import Men4 from '../picsofproducts/men4.jpg'
import './Product14.css'
import { useNavigate } from 'react-router-dom'

const Product14 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Men4}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
                AARON SOLITAIRE DIAMOND RING
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product14