import React, { useEffect, useState } from 'react'
import './Scrollup.css'

const ScrolltoTop = () => {

    const [btn,setbtn] = useState (false)

    useEffect(() => {
        const handlescroll = () => {
            if(window.scrollY > 150){
                setbtn(true)
            }
            else{
                setbtn(false)
            }
        }
        window.addEventListener('scroll',handlescroll)
    },[])
    const stp = () => {
        window.scrollTo({
            top:0
        })
    }

  return (
    <>
        {btn && (<div className='box' onClick={stp}>
                    <i class="fa-solid fa-up-long"></i>
                 </div>)}
    </>
  )
}

export default ScrolltoTop