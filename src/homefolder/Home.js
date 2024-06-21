import React from 'react'
import './Home.css'
import Carousel from './Carousel'
import PauseOnHover from './Slider'
import Saga from './Saga'
import CircleofLife from './CircleofLife'
import Favourites from './Favourites'


const Home = () => {
    return (
      <>
        {/* <div className='topbar'></div> */}
        {/* <Navbar /> */}
        <Carousel />
        <div className='secondrow'>
          <div className='imges'><img src='https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'></img>
          <h1>The Sheen of Shringaar</h1>
          <p>The ideal embellishment to the bridal glow, we bring to you a collection of striking pieces in gold, handpicked for her special day. Carved meticulously, choose from an alluring assortment of statement sets, royal kadas and ravishing Rani Haars.</p></div>
          <div className='imges'><img src='https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D'></img>
          <h1>Paint the town Gold</h1>
          <p>Tradition meets modernity in this stunning selection of sets, crafted with an assurance to stand out among the crowd. Bring home one of these spectacular statement pieces as an essential addition to your jewellery box.</p></div>
          <div className='imges'><img src='https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D'></img>
          <h1>The Auspicious and Awe-inspiring</h1>
          <p>As she adorns her attire on her wedding day, we feel honoured to provide the essentials to complete her auspicious ensemble. View our magnificent picks for the most special day of a woman's life.</p></div>
        </div>
        <PauseOnHover />
        <Saga />
        <CircleofLife />
        <Favourites />
        <div className='fourthrow'>
          <div className='fourthimges'><img src='https://images.unsplash.com/flagged/photo-1570055349452-29232699cc63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwamV3ZWxsZXJ5fGVufDB8fDB8fHww'></img>
          <h1>Neckline Nuances</h1>
          <p>Stand out subtly with these fine neck pieces in gold, curated with utmost detailing and perfections. With patterns woven to impress and stones engraved to wow, take home these neckline necessities today!</p></div>
          <div className='fourthimges'><img src='https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D'></img>
          <h1>The Golden Armour</h1>
          <p>Dressed in his best, he arrives to claim his bride. Select from several bold strings of gold for the groom, chosen for his special day.</p></div>
          <div className='fourthimges'><img src='https://images.unsplash.com/photo-1570212773364-e30cd076539e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwamV3ZWxsZXJ5fGVufDB8fDB8fHww'></img>
          <h1>A Glistening Glee</h1>
          <p>As the beauty of the bride's smile is unmatched, we can only try to add glitter to her special day, with exemplary tikkas for her forehead, stunning sets for her neckline and beautiful bangles and karas for her delicate wrists.</p></div>
        </div>
      </>
    )
}

export default Home