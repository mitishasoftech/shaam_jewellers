import React from 'react'
import './Mangalsutra.css'
import Mangalsutra1 from '../picsofproducts/mangalsutra1.jpg'
import Mangalsutra2 from '../picsofproducts/mangalsutra2.jpg'
import Mangalsutra3 from '../picsofproducts/mangalsutra3.jpg'
import Mangalsutra4 from '../picsofproducts/mangalsutra4.jpg'
import Mangalsutra5 from '../picsofproducts/mangalsutra5.jpg'
import Mangalsutra6 from '../picsofproducts/mangalsutra6.jpg'
import Mangalsutra7 from '../picsofproducts/mangalsutra7.jpg'
import Mangalsutra8 from '../picsofproducts/mangalsutra8.jpg'
import Mangalsutra9 from '../picsofproducts/mangalsutra9.jpg'
import Mangalsutra10 from '../picsofproducts/mangalsutra10.jpg'
import { useNavigate } from 'react-router-dom'

const Mangalsutra = () => {

    const navigate = useNavigate()

    const handleclick41 = () => {
        navigate('/product41')
    }
    const handleclick42 = () => {
        navigate('/product42')
    }
    const handleclick43 = () => {
        navigate('/product43')
    }
    const handleclick44 = () => {
        navigate('/product44')
    }
    const handleclick45 = () => {
        navigate('/product45')
    }
    const handleclick46 = () => {
        navigate('/product46')
    }
    const handleclick47 = () => {
        navigate('/product47')
    }
    const handleclick48 = () => {
        navigate('/product48')
    }
    const handleclick49 = () => {
        navigate('/product49')
    }
    const handleclick50 = () => {
        navigate('/product50')
    }

  return (
    <>
    <h1 style={{textAlign:'center', fontWeight:'bold' , marginTop:50}}>PRODUCTS</h1>
    <h3 style={{textAlign:'center' , marginTop:50}}>MANGALSUTRA</h3>
    <div className='mangalsutraContainer'>
    <div className='mangalsutraContent' onClick={handleclick41}>
            <img src={Mangalsutra1}></img>
            <p>AAIRA DIAMOND MANGALSUTRA</p>
          
        </div>
        <div className='mangalsutraContent' onClick={handleclick42}>
            <img src={Mangalsutra2}></img>
            <p>FREED DIAMOND MANGALSUTRA</p>
        
        </div>
        <div className='mangalsutraContent' onClick={handleclick43}>
            <img src={Mangalsutra3}></img>
            <p>SHAAMA DIAMOND MANGALSUTRA</p>
 
        </div>
        <div className='mangalsutraContent' onClick={handleclick44}>
            <img src={Mangalsutra4}></img>
            <p>DALILEH DIAMOND MANGALSUTRA</p>
      
        </div>
        <div className='mangalsutraContent' onClick={handleclick45}>
            <img src={Mangalsutra5}></img>
            <p>AANSHI DIAMOND MANGALSUTRA</p>
        
        </div>
        <div className='mangalsutraContent' onClick={handleclick46}>
            <img src={Mangalsutra6}></img>
            <p>ANIYA DIAMOND MANGALSUTRA</p>
     
        </div>
        <div className='mangalsutraContent' onClick={handleclick47}>
            <img src={Mangalsutra7}></img>
            <p>YVAINE DIAMOND MANGALSUTRA</p>
     
        </div>
        <div className='mangalsutraContent' onClick={handleclick48}>
            <img src={Mangalsutra8}></img>
            <p>PARHLO GOLD MANGALSUTRA</p>
       
        </div>
        <div className='mangalsutraContent' onClick={handleclick49}>
            <img src={Mangalsutra9}></img>
            <p>FLAME TREE GOLD MANGALSUTRA</p>

        </div>
        <div className='mangalsutraContent' onClick={handleclick50}>
            <img src={Mangalsutra10}></img>
            <p>PAISLEY GOLD MANGALSUTRA</p>

        </div>
    </div>
    </>
  )
}

export default Mangalsutra
