import React from 'react'
import './Footer.css'
import Logo from './shashilogo.jpg'

const Footer = () => {
  return (
    <>
      <div className="section footer-1 color-overlay">
        <svg
          className="svg svg-top"
          xmlns="http://www.w3.org/2000/svg"
          width={1200}
          fill="#f9fcfe"
          height={30}
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
        >
          <path d="M0,0S1.209,1.508,200.671,7.031C375.088,15.751,454.658,30,600,30V0H0ZM1200,0s-90.21,1.511-200.671,7.034C824.911,15.751,745.342,30,600,30V0h600Z" />
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 section-heading-1 logo">
              {/* <h2 className="white">Newsletter</h2>
        <p className="white">
          Sunday Open
        </p> */}
              <img src={Logo} />
            </div>
          </div>
          {/* NEWSLETTER */}
          <div className="newsletter-1">
            <div className="">
              {/* <div className="row">
          <div className="col-lg-6">
            <p>Shashi jewellers provides a  eye-catching <br/>
            expensive-look jwellery.<br/>we provides varieties of collection<br/>
            having good quality brand.</p>
            </div>
            <div className="icon col-lg-6">
              <img style={{height:
              "30px"}}src="https://cdn-icons-png.flaticon.com/128/724/724664.png"/>  09816622883<br/>
              <img style={{height:"30px"}}src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png"/>
              Near Santoshi Mata Mandir, Dari, Dharamshala, Gabli Dar, Himachal Pradesh 176057
            
            
            
            
            
        
        
            </div>
        </div> */}
              <div className="   text-white">
                <div className="row">
                  <div className="col-lg-6 col-md-6 p-3">
                    <p className=''>Shashi jewellers provides a  eye-catching <br />
                      expensive-look jwellery.<br />we provides varieties of collection<br />
                      having good quality brand.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 p-3 ">
                    <p> <img style={{
                      height:
                        "30px"
                    }} src="https://cdn-icons-png.flaticon.com/128/724/724664.png" />  <span className=' ms-2'>+91 98166-22883</span></p>
                    <p>  <img style={{ height: "30px" }} src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" />
                      <span className=' ms-2'> Near Santoshi Mata Mandir, Dari, Dharamshala,<br/> <span className='ms-5'>Gabli Dar, HP</span></span></p>
                    <p ><img style={{height:"30px"}}src="https://cdn-icons-png.flaticon.com/128/149/149059.png"/><span className='ms-2'>Pin code:-176057</span></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social Icon */}
          <div className="fcopy text-center">
            © 2023 Mitisha Softech Private Limited. All rights reserved
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer