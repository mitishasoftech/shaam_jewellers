import React from 'react'
import './Rings.css'
import Women1 from '../picsofproducts/women1.jpg'
import Women2 from '../picsofproducts/women2.jpg'
import Women3 from '../picsofproducts/women3.jpg'
import Women4 from '../picsofproducts/women4.jpg'
import Women5 from '../picsofproducts/women5.jpg'
import Women6 from '../picsofproducts/women6.jpg'
import Women7 from '../picsofproducts/women7.jpg'
import Women8 from '../picsofproducts/women8.jpg'
import Women9 from '../picsofproducts/women9.jpg'
import Women10 from '../picsofproducts/women10.jpg'
import Men1 from '../picsofproducts/men1.jpg'
import Men2 from '../picsofproducts/men2.jpg'
import Men3 from '../picsofproducts/men3.jpg'
import Men4 from '../picsofproducts/men4.jpg'
import Men5 from '../picsofproducts/men5.jpg'
import Men6 from '../picsofproducts/men6.jpg'
import Men7 from '../picsofproducts/men7.jpg'
import Men8 from '../picsofproducts/men8.jpg'
import Men9 from '../picsofproducts/men9.jpg'
import Men10 from '../picsofproducts/men10.jpg'
import { useNavigate } from 'react-router-dom'

const Rings = () => {

    const navigate = useNavigate()

    const handleclick1 = () => {
        navigate('/product1')
    }
    const handleclick2 = () => {
        navigate('/product2')
    }
    const handleclick3 = () => {
        navigate('/product3')
    }
    const handleclick4 = () => {
        navigate('/product4')
    }
    const handleclick5 = () => {
        navigate('/product5')
    }
    const handleclick6 = () => {
        navigate('/product6')
    }
    const handleclick7 = () => {
        navigate('/product7')
    }
    const handleclick8 = () => {
        navigate('/product8')
    }
    const handleclick9 = () => {
        navigate('/product9')
    }
    const handleclick10 = () => {
        navigate('/product10')
    }
    const handleclick11 = () => {
        navigate('/product11')
    }
    const handleclick12 = () => {
        navigate('/product12')
    }
    const handleclick13 = () => {
        navigate('/product13')
    }
    const handleclick14 = () => {
        navigate('/product14')
    }
    const handleclick15 = () => {
        navigate('/product15')
    }
    const handleclick16 = () => {
        navigate('/product16')
    }
    const handleclick17 = () => {
        navigate('/product17')
    }
    const handleclick18 = () => {
        navigate('/product18')
    }
    const handleclick19 = () => {
        navigate('/product19')
    }
    const handleclick20 = () => {
        navigate('/product20')
    }

  return (
    <>
    <h1 style={{textAlign:'center', fontWeight:'bold' , marginTop:50}}>PRODUCTS</h1>
    <h3 style={{textAlign:'center' , marginTop:50}}>WOMEN RINGS</h3>
      <div className='ringsContainer'>
        <div className='ringsContent' onClick={handleclick1}>
            <img src={Women1}></img>
            <p>ZAYNAB DIAMOND RING</p>
          
        </div>
        <div className='ringsContent' onClick={handleclick2}>
            <img src={Women2}></img>
            <p>VEDA DIAMOND RING</p>
         
        </div>
        <div className='ringsContent' onClick={handleclick3}>
            <img src={Women3}></img>
            <p>SAVAREEN DIAMOND RING</p>
          
        </div>
        <div className='ringsContent' onClick={handleclick4}>
            <img src={Women4}></img>
            <p>BANDHURA DIAMOND RING</p>
      
        </div>
        <div className='ringsContent' onClick={handleclick5}>
            <img src={Women5}></img>
            <p>ELEGANT LADY SOLITAIRE DIAMOND RING</p>
       
        </div>
        <div className='ringsContent' onClick={handleclick6}>
            <img src={Women6}></img>
            <p>LADY ARMOUR DIAMOND GAP RING</p>
 
        </div>
        <div className='ringsContent' onClick={handleclick7}>
            <img src={Women7}></img>
            <p>ACHSA HERA DIAMOND RING</p>
    
        </div>
        <div className='ringsContent' onClick={handleclick8}>
            <img src={Women8}></img>
            <p>ANANYA DIAMOND RING</p>
     
        </div>
        <div className='ringsContent' onClick={handleclick9}>
            <img src={Women9}></img>
            <p>ARLETH DIAMOND RING</p>
          
        </div>
        <div className='ringsContent' onClick={handleclick10}>
            <img src={Women10}></img>
            <p>JUST HEARTS MIRACLE PLATE DIAMOND RING</p>
 
        </div>
        </div>
        <h3 style={{textAlign:'center'}}>MEN RINGS</h3>
        <div className='ringsContainer'>
        <div className='ringsContent' onClick={handleclick11}>
            <img src={Men1}></img>
            <p>SCOTT PLATINUM RING</p>
     
        </div>
        <div className='ringsContent' onClick={handleclick12}>
            <img src={Men2}></img>
            <p>HOWARD DIAMOND MENS RING</p>
    
        </div>
        <div className='ringsContent' onClick={handleclick13}>
            <img src={Men3}></img>
            <p>OM PLATINUM BAND</p>

        </div>
        <div className='ringsContent' onClick={handleclick14}>
            <img src={Men4}></img>
            <p>AARON SOLITAIRE DIAMOND RING</p>
 
        </div>
        <div className='ringsContent' onClick={handleclick15}>
            <img src={Men5}></img>
            <p>ROSS DIAMOND RING</p>
            
        </div>
        <div className='ringsContent' onClick={handleclick16}>
            <img src={Men6}></img>
            <p>FOREVER DAZZLE PLATINUM BAND</p>
    
        </div>
        <div className='ringsContent' onClick={handleclick17}>
            <img src={Men7}></img>
            <p>DONALD DIAMOND WEDDING RING</p>
            
        </div>
        <div className='ringsContent' onClick={handleclick18}>
            <img src={Men8}></img>
            <p>DARIO PLATINUM RING</p>
           
        </div>
        <div className='ringsContent' onClick={handleclick19}>
            <img src={Men9}></img>
            <p>DANNY GOLD WEDDING RING</p>
         
        </div>
        <div className='ringsContent' onClick={handleclick20}>
            <img src={Men10}></img>
            <p>NEIL DIAMOND RING</p>
          
        </div>
        </div>
    </>
  )
}

export default Rings
