import React from 'react'
import Earrings1 from '../picsofproducts/earrings1.jpg'
import './Product21.css'
import { useNavigate } from 'react-router-dom'

const Product21 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Earrings1}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
              TWIRL ECSTASY DIAMOND STUD EARRINGS
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product21