import React from 'react'
import Men2 from '../picsofproducts/men2.jpg'
import './Product12.css'
import { useNavigate } from 'react-router-dom'

const Product12 = () => {

  const navigate = useNavigate()

  const handleenquiry = () => {
    navigate('/enquiry')
  }

  return (
    <>
      <div className='containerOfProduct'>
        <div className='imageOfProduct'>
            <img src={Men2}></img>
        </div>
        <div className='contentOfProduct'>
            <h2 style={{fontWeight:'bold'}}>
                HOWARD DIAMOND MENS RING
            </h2>
            <button onClick={handleenquiry}>ENQUIRY</button>
        </div>
      </div>
    </>
  )
}

export default Product12