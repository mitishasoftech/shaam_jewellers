import React from 'react'
import './About.css'
import Img from './headerimg7.jpg'

const About = () => {
  return (
    <>
      <div className='photo'>
        <img src={Img} />
      </div>
      <div className='content'>
        <div className='contentHeading'>
            <h3>About Us</h3>
        </div>
        <div className='contentContent'>
            <p>With an intent to bring in fair dealings at the best price in the world of jewellery, 
                Sham Jewellers was born in 1990. The biggest and most distinguished jewellery store in 
                the region , Sham Jewellers proudly presents to its customers a grand variety of the most 
                glorious and chic picks from the jewellery industry, leaving them truly spoilt for choice. 
                Be it basic gold bangles or stellar wedding masterpieces, Sham Jewellers offers a ravishing 
                range of gold, kundan, jadau, meenakari, solitaire, polki and diamond jewellery with the  
                promise of transparent policies and warm service. Today, after over three decades of its 
                inception, Sham stands synonymous with 100% hallmarked jewellery, 100% transparency in making 
                charges, 100% commitment proved by same buying and selling rate with no overcharge in the 
                name of wastage and 100% return guarantee, cash or exchange. Step into this world of 
                opulence, magnificence and excellence and bedeck yourself with a scintillating sparkle.</p>
        </div>
      </div>
      <div className='content'>
        <div className='contentHeading'>
            <h3>Contact</h3>
        </div>
        <div className='contentContent'>
            <p>Mitisha Softech Pvt Ltd</p>
            <p>F426, First Floor, Phase 8B, Industrial Area,</p>
            <p>Sector 91, Sahibzada Ajit Singh Nagar,</p>
            <p>Punjab 160055</p>
        </div>
      </div>
    </>
  )
}

export default About
