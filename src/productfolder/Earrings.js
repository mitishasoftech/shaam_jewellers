import React from 'react'
import './Earrings.css'
import Earrings1 from '../picsofproducts/earrings1.jpg'
import Earrings2 from '../picsofproducts/earrings2.jpg'
import Earrings3 from '../picsofproducts/earrings3.jpg'
import Earrings4 from '../picsofproducts/earrings4.jpg'
import Earrings5 from '../picsofproducts/earrings5.jpg'
import Earrings6 from '../picsofproducts/earrings6.jpg'
import Earrings7 from '../picsofproducts/earrings7.jpg'
import Earrings8 from '../picsofproducts/earrings8.jpg'
import Earrings9 from '../picsofproducts/earrings9.jpg'
import Earrings10 from '../picsofproducts/earrings10.jpg'
import { useNavigate } from 'react-router-dom'

const Earrings = () => {

    const navigate = useNavigate()

    const handleclick21 = () => {
        navigate('/product21')
    }
    const handleclick22 = () => {
        navigate('/product22')
    }
    const handleclick23 = () => {
        navigate('/product23')
    }
    const handleclick24 = () => {
        navigate('/product24')
    }
    const handleclick25 = () => {
        navigate('/product25')
    }
    const handleclick26 = () => {
        navigate('/product26')
    }
    const handleclick27 = () => {
        navigate('/product27')
    }
    const handleclick28 = () => {
        navigate('/product28')
    }
    const handleclick29 = () => {
        navigate('/product29')
    }
    const handleclick30 = () => {
        navigate('/product30')
    }

  return (
    <>
        <h1 style={{textAlign:'center', fontWeight:'bold' , marginTop:50}}>PRODUCTS</h1>
        <h3 style={{textAlign:'center' , marginTop:50}}>EARRINGS</h3>
        <div className='earringsContainer' >
        <div className='earringsContent' onClick={handleclick21}>
            <img src={Earrings1}></img>
            <p>TWIRL ECSTASY DIAMOND STUD EARRINGS</p>
       
        </div>
        <div className='earringsContent' onClick={handleclick22}>
            <img src={Earrings2}></img>
            <p>OMBRE COLOURBUST PEACOCK GOLD EARRINGS</p>
 
        </div>
        <div className='earringsContent' onClick={handleclick23}>
            <img src={Earrings3}></img>
            <p>ZEHRA DIAMOND STUD EARRINGS</p>

        </div>
        <div className='earringsContent' onClick={handleclick24}>
            <img src={Earrings4}></img>
            <p>EASHA DIAMOND EARRINGS</p>

        </div>
        <div className='earringsContent' onClick={handleclick25}>
            <img src={Earrings5}></img>
            <p>JILPA DIAMOND EARRINGS</p>
   
        </div>
        <div className='earringsContent' onClick={handleclick26}>
            <img src={Earrings6}></img>
            <p>MORII DIAMOND DANGLE EARRINGS</p>
    
        </div>
        <div className='earringsContent' onClick={handleclick27}>
            <img src={Earrings7}></img>
            <p>OLIVER DIAMOND EAR STUD</p>
     
        </div>
        <div className='earringsContent' onClick={handleclick28}>
            <img src={Earrings8}></img>
            <p>SHAHIRA DIAMOND EARRINGS</p>

        </div>
        <div className='earringsContent' onClick={handleclick29}>
            <img src={Earrings9}></img>
            <p>RAFFLESIA DIAMOND STUD EARRINGS</p>
   
        </div>
        <div className='earringsContent' onClick={handleclick30}>
            <img src={Earrings10}></img>
            <p>PEARO DIAMOND EARRINGS</p>
    
        </div>
        </div>

    </>
  )
}

export default Earrings
