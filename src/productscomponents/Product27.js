import React from 'react'
import Earrings7 from '../picsofproducts/earrings7.jpg'
import './Product27.css'
import { useNavigate } from 'react-router-dom'

const Product27 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Earrings7}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
            OLIVER DIAMOND EAR STUD
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product27