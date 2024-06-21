import React from 'react'
import './Footer.css'

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
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 section-heading-1">
        <h2 className="white">Newsletter</h2>
        <p className="white">
          Sunday Open
        </p>
      </div>
    </div>
    {/* NEWSLETTER */}
    <div className="newsletter-1">
      <div className="newsletter-bg">
        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <form action="php/newsletter.php" method="post">
              <input
                id="email_newsletter"
                className="form-control"
                type="email"
                name="nf_email"
                placeholder="Enter Your Email"
                maxLength={50}
              />
              <button type="submit" className="btn btn-primary">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Social Icon */}
    <div className="fcopy text-center">
      2018 All Right Reserved. Created by God
    </div>
  </div>
</div>


    </>
  )
}

export default Footer