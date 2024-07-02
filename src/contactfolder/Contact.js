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
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27009.921951427856!2d76.31920073476566!3d32.197756499999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b51a006e9cfd5%3A0xadd7177679f557a1!2sShashi%20jewellers!5e0!3m2!1sen!2sin!4v1719814675493!5m2!1sen!2sin">
       width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"</iframe>
    
      </div>
      <div className='contactList'>
      <div className='location'>
        <h2>Shashi jewellers</h2>
        <p> <img style={{height:
              "30px"}}src="https://cdn-icons-png.flaticon.com/128/724/724664.png"/>  <span className=' ms-2'>+91 98166-22883</span></p>
             <p>  <img style={{height:"30px"}}src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png"/>
            <span className=' ms-2'> Near Santoshi Mata Mandir, Dari, Dharamshala, Gabli Dar, HP</span></p>
             <p> pin code:-176057</p>
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
