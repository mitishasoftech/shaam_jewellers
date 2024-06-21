import React from 'react'

const Carousel = () => {
  return (
    <>
      <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel" style={{maxWidth:'90%' , margin:'0 auto'}}
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1625139108082-48bb424c2333?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1640290699030-b477f95f13b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  </div>
    </>
  )
}

export default Carousel
