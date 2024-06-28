import React from 'react'
import './Necklace.css'
import Necklace1 from '../picsofproducts/necklace1.jpg'
import Necklace2 from '../picsofproducts/necklace2.jpg'
import Necklace3 from '../picsofproducts/necklace3.jpg'
import Necklace4 from '../picsofproducts/necklace4.jpg'
import Necklace5 from '../picsofproducts/necklace5.jpg'
import Necklace6 from '../picsofproducts/necklace6.jpg'
import Necklace7 from '../picsofproducts/necklace7.jpg'
import Necklace8 from '../picsofproducts/necklace8.jpg'
import Necklace9 from '../picsofproducts/necklace9.jpg'
import Necklace10 from '../picsofproducts/necklace10.jpg'
import { useNavigate } from 'react-router-dom'

const Necklace = () => {

    const navigate = useNavigate()

    const handleclick51 = () => {
        navigate('/product51')
    }
    const handleclick52 = () => {
        navigate('/product52')
    }
    const handleclick53 = () => {
        navigate('/product53')
    }
    const handleclick54 = () => {
        navigate('/product54')
    }
    const handleclick55 = () => {
        navigate('/product55')
    }
    const handleclick56 = () => {
        navigate('/product56')
    }
    const handleclick57 = () => {
        navigate('/product57')
    }
    const handleclick58 = () => {
        navigate('/product58')
    }
    const handleclick59 = () => {
        navigate('/product59')
    }
    const handleclick60 = () => {
        navigate('/product60')
    }

  return (
    <>
        <h1 style={{textAlign:'center', fontWeight:'bold' , marginTop:50}}>PRODUCTS</h1>
        <h3 style={{textAlign:'center' , marginTop:50}}>NECKLACE</h3>
        <div className='necklaceContainer'>
        <div className='necklaceContent' onClick={handleclick51}>
            <img src={Necklace1}></img>
            <p>ANANYA GOLD PENDANT WITH CHAIN</p>

        </div>
        <div className='necklaceContent' onClick={handleclick52}>
            <img src={Necklace2}></img>
            <p>ARDOUR AFFECTION DIAMOND PENDANT WITH CHAIN</p>
   
        </div>
        <div className='necklaceContent' onClick={handleclick53}>
            <img src={Necklace3}></img>
            <p>MOUNI DIAMOND NECKLACE</p>
    
        </div>
        <div className='necklaceContent' onClick={handleclick54}>
            <img src={Necklace4}></img>
            <p>EASHA DIAMOND NECKLACE</p>
     
        </div>
        <div className='necklaceContent' onClick={handleclick55}>
            <img src={Necklace5}></img>
            <p>SCARLET DIAMOND NECKLACE</p>
      
        </div>
        <div className='necklaceContent' onClick={handleclick56}>
            <img src={Necklace6}></img>
            <p>SPRING LEAVES DIAMOND NECKLACE</p>
     
        </div>
        <div className='necklaceContent' onClick={handleclick57}>
            <img src={Necklace7}></img>
            <p>NAINA DIAMOND NECKACE</p>
     
        </div>
        <div className='necklaceContent' onClick={handleclick58}>
            <img src={Necklace8}></img>
            <p>AAVYA DIAMOND NECKLACE</p>
         
        </div>
        <div className='necklaceContent' onClick={handleclick59}>
            <img src={Necklace9}></img>
            <p>ANUSHKA DIAMOND NECKLACE</p>

        </div>
        <div className='necklaceContent' onClick={handleclick60}>
            <img src={Necklace10}></img>
            <p>RHEA DIAMOND NECKLACE</p>

        </div>
        </div>

    </>
  )
}

export default Necklace
