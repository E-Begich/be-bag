import React from 'react'
import Product from './Product';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/images/bg.jpg" className="d-block w-100" alt="background1" height="700px"/>
          </div>
          <div className="carousel-item">
            <img src="./assets/images/sabrina.jpg" className="d-block w-100" alt="background2" height="700px"/>
          </div>
          <div className="carousel-item">
            <img src="./assets/images/kristina.jpg" className="d-block w-100" alt="background3"height="700px"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p className='lead text-center py-4 my-6'>This is test site. Please do not order for now.</p>
      <Product/>
    </div>
  )
}

export default Home;
