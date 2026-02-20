// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css'
import backgroundImage from '../assets/image.png'
import img1 from '../assets/restropic/img11.jpg'
import img2 from '../assets/restropic/img2.jpg'
import img3 from '../assets/restropic/img3.jpg'
import img4 from '../assets/restropic/img4.jpg'
import img5 from '../assets/restropic/img5.jpg'
import img6 from '../assets/restropic/img6.jpg'
import img7 from '../assets/restropic/img7.jpg'
import Dish4 from '../assets/restropic/Dish4.jpg'
import Dish2 from '../assets/restropic/Dish2.jpg'
import Dish3 from '../assets/restropic/butterchicken.jpg'



const Home = () => {
    const featuredDishes = [
        { name: "Butter Chicken", description: "The world-famous creamy tomato curry.", image: Dish3 },
        { name: "Dal Makhani", description: "Black lentils simmered overnight, rich and velvety.", image: Dish2 },
        { name: "Kadhai Paneer", description: "Its signature bold and smoky flavor comes from Kadai Masala", image: Dish4 },
    ];

    return (
        <div className="home-page">

            {/* 1. Hero Section - FULL WIDTH + FULL HEIGHT */}
           <section className="hero-section text-white d-flex align-items-center">

                <div className="container-fluid py-5 text-center">
                    <h1 className="display-1 fw-bolder mb-3 text-warning">
                        Moti Mahal Restaurant
                    </h1>
                    <h2 className="display-6 mb-4">A Journey of Flavor, Tradition & Passion</h2>
<p className="lead mb-5 fs-5">
  Discover the taste that redefined Indian cuisine and continues to inspire the world.
</p>


                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <Link to="/menu" className="btn btn-danger btn-lg px-5 me-sm-3 fw-bold shadow-lg">
                            View Menu
                        </Link>
                        <Link to="/location" className="btn btn-outline-light btn-lg px-5 shadow-lg">
                            Find a Location
                        </Link>
                    </div>
                </div>
            </section>
             {/* 2.poster */}
             <h3 className='text-center mb-2 mt-2 text-danger fw-bold display-4'>Explore Our Ambience</h3>
            <div className='poster'>
                <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img6} class="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img7} class="d-block w-100 carousel-img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            </div>

          
            {/* 3. Featured Dishes - FULL WIDTH */}
            <section className="container-fluid my-5 py-5">
                <h2 className="text-center mb-5 text-danger fw-bold display-4">
                    Signature Dishes
                </h2>

                <div className="row g-4 justify-content-center">
                    {featuredDishes.map((dish, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100 border-0 shadow-lg">
                                <img
                                    src={dish.image}
                                    className="card-img-top"
                                    alt={dish.name}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold text-danger">{dish.name}</h5>
                                    <p className="card-text text-muted">{dish.description}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CTA Section - FULL WIDTH */}
            <section className="bg-danger text-white py-5 my-5 w-100">
                <div className="container-fluid text-center">
                    <h3 className="fw-bold mb-3">Plan Your Visit</h3>
                    <p className="lead mb-4">
                        Book your table today and enjoy an authentic dining experience.
                    </p>
                    <Link to="/booktable" className="btn btn-light btn-lg fw-bold px-5">
                        Book a Table Now
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
