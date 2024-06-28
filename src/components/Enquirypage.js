import React , { useState } from 'react'
import './Enquirypage.css'
import { useNavigate } from 'react-router-dom'

const Enquirypage = () => {

  const navigate = useNavigate()

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [message , setMessage] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !message){
      alert('Please type something')
      return;
    }
    else{
    navigate('/messagerecieved')
    }
  }

  return (
    <>
      <div className='contactContainer'>
                    <h1>Are You Interested ?</h1>
                    <span style={{fontWeight:'bold'}}>So what are you waiting for?</span>
                    <span style={{fontWeight:'bold'}}>Just send us a message and We will contact you right back</span>
                    <input  className='contactTabs' placeholder='Your Name' onChange={(e)=>setName(e.target.value)} />
                    <input  className='contactTabs' placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}/>
                    {/* <input  className='contactTabs' placeholder='Subject' /> */}
                    <input  className='contactTabs' placeholder='Message' onChange={(e)=>setMessage(e.target.value)}/>
                    <button className='contactButton' onClick={handlesubmit}>Send Message</button>
      </div>
    </>
  )
}

export default Enquirypage
