import React, { useState } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

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
    <div className='contact'>
      <div className='map'>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5774808266247!2d76.68044277393936!3d30.702161987112312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1719307849260!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" 
      />
      </div>
      <div className='contactList'>
      <div className='location'>
        <h2>Mitisha Softech Pvt Ltd</h2>
        <p>F426, First Floor, Phase 8B, Industrial Area,</p>
        <p>Sector 91, Sahibzada Ajit Singh Nagar,</p>
        <p>Punjab 160055</p>
      </div>
      <div className='contactForm'>
                    <h1>Are You Interested ?</h1>
                    <span style={{fontWeight:'bold'}}>So what are you waiting for?</span>
                    <span style={{fontWeight:'bold'}}>Just send us a message and We will contact you right back</span>
                    <input  className='contactTabs' placeholder='Your Name' onChange={(e) => setName(e.target.value)}/>
                    <input  className='contactTabs' placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}/>
                    {/* <input  className='contactTabs' placeholder='Subject' /> */}
                    <input  className='contactTabs' placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>
                    <button className='contactButton' onClick={handlesubmit}>Send Message</button>
      </div>
      </div>
    </div>

    </>
  )
}

export default Contact
