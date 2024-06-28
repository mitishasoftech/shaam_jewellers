import React from 'react'
import './BandB.css'
import Bangles1 from '../picsofproducts/bangles1.jpg'
import Bangles2 from '../picsofproducts/bangles2.jpg'
import Bangles3 from '../picsofproducts/bangles3.jpg'
import Bangles4 from '../picsofproducts/bangles4.jpg'
import Bangles5 from '../picsofproducts/bangles5.jpg'
import Bracelets1 from '../picsofproducts/bracelets1.jpg'
import Bracelets2 from '../picsofproducts/bracelets2.jpg'
import Bracelets3 from '../picsofproducts/bracelets3.jpg'
import Bracelets4 from '../picsofproducts/bracelets4.jpg'
import Bracelets5 from '../picsofproducts/bracelets5.jpg'
import { useNavigate } from 'react-router-dom'

const BandB = () => {

    const navigate = useNavigate()

    const handleclick31 = () => {
        navigate('/product31')
    }
    const handleclick32 = () => {
        navigate('/product32')
    }
    const handleclick33 = () => {
        navigate('/product33')
    }
    const handleclick34 = () => {
        navigate('/product34')
    }
    const handleclick35 = () => {
        navigate('/product35')
    }
    const handleclick36 = () => {
        navigate('/product36')
    }
    const handleclick37 = () => {
        navigate('/product37')
    }
    const handleclick38 = () => {
        navigate('/product38')
    }
    const handleclick39 = () => {
        navigate('/product39')
    }
    const handleclick40 = () => {
        navigate('/product40')
    }

  return (
    <>
    <h1 style={{textAlign:'center', fontWeight:'bold' , marginTop:50}}>PRODUCTS</h1>
    <h3 style={{textAlign:'center' , marginTop:50}}>BANGLES AND BRACELETS</h3>
      <div className='BandBContainer'>
      <div className='BandBContent'  onClick={handleclick31}>
            <img src={Bangles1}></img>
            <p>SHAMBHAVI DIAMOND BANGLES</p>
 
        </div>
        <div className='BandBContent' onClick={handleclick32}>
            <img src={Bangles2}></img>
            <p>TRISHA DIAMOND BANGLES</p>
     
        </div>
        <div className='BandBContent' onClick={handleclick33}>
            <img src={Bangles3}></img>
            <p>AAINA DIAMOND BANGLE</p>
     
        </div>
        <div className='BandBContent' onClick={handleclick34}>
            <img src={Bangles4}></img>
            <p>VIPSHAA DIAMOND BANGLE</p>
     
        </div>
        <div className='BandBContent' onClick={handleclick35}>
            <img src={Bangles5}></img>
            <p>MAITHILI DIAMOND KADA</p>

        </div>
        <div className='BandBContent' onClick={handleclick36}>
            <img src={Bracelets1}></img>
            <p>TWINS FLEXI DIAMOND BRACELET</p>
     
        </div>
        <div className='BandBContent' onClick={handleclick37}>
            <img src={Bracelets2}></img>
            <p>AMISA DIAMOND BRACELET</p>

        </div>
        <div className='BandBContent' onClick={handleclick38}>
            <img src={Bracelets3}></img>
            <p>MITALI GOLD BRACELET</p>
     
        </div>
        <div className='BandBContent' onClick={handleclick39}>
            <img src={Bracelets4}></img>
            <p>CAVERY GOLD BRACELETS</p>
        
        </div>
        <div className='BandBContent' onClick={handleclick40}>
            <img src={Bracelets5}></img>
            <p>NAIRNI DIAMOND BRACELET</p>

        </div>
      </div>
    </>
  )
}

export default BandB
