import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const MessageRecieved = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigate('/')
    },2500)
    return () => clearTimeout(timer)
  },[navigate])

  return (
    <>
    <div style={{height:300}}>
      <h2 style={{textAlign:'center'}}>Thank You</h2>
      <h2 style={{textAlign:'center'}}>Message Recieved</h2>
    </div>
    </>
  )
}

export default MessageRecieved
