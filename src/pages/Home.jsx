// src/pages/Home.jsx
import React, { useEffect } from 'react';
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
import Dish5 from '../assets/restropic/biryani.jpg'

const Home = () => {

    // ✅ SEO Title
    useEffect(() => {
        document.title = "Best Indian & Thai Restaurant in Krabi | Moti Mahal";
    }, []);

    const featuredDishes = [
        { name: "Butter Chicken", description: "The world-famous creamy tomato curry.", image: Dish3 },
        { name: "Dal Makhani", description: "Black lentils simmered overnight, rich and velvety.", image: Dish2 },
        { name: "Kadhai Paneer", description: "Bold and smoky flavor cooked in traditional Kadai Masala.", image: Dish4 },
        { name: "Biryani", description: "Aromatic, flavorful, and perfectly spiced traditional biryani.", image: Dish5 }
    ];

    return (
        <div className="home-page">

            {/* 1. Hero Section */}
            <section className="hero-section text-white d-flex align-items-center">
                <div className="container-fluid py-5 text-center">

                    {/* ✅ SEO Optimized H1 */}
                    <h1 className="display-1 fw-bolder mb-3 text-warning">
                        Best Indian & Thai Restaurant in Krabi, Thailand
                    </h1>

                    <h2 className="display-6 mb-4">
                        Moti Mahal Restaurant – Near Ao Nang Beach
                    </h2>

                    <p className="lead mb-5 fs-5">
                        Experience authentic Indian and Thai cuisine, fresh flavors,
                        and a family-friendly ambience in the heart of Krabi.
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

            {/* 2. Ambience Section */}
            <h3 className='text-center mb-2 mt-4 text-danger fw-bold display-5'>
                Explore Our Ambience
            </h3>

            <div className='poster'>
                <div id="carouselExampleIndicators" className="carousel slide">

                    <div className="carousel-indicators">
                        {[0,1,2,3,4,5,6].map((num) => (
                            <button
                                key={num}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={num}
                                className={num === 0 ? "active" : ""}
                                aria-current={num === 0 ? "true" : undefined}
                                aria-label={`Slide ${num + 1}`}
                            ></button>
                        ))}
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100 carousel-img"
                                alt="Moti Mahal Restaurant Interior in Krabi Thailand" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100 carousel-img"
                                alt="Restaurant seating area near Ao Nang Beach" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100 carousel-img"
                                alt="Family dining area at Moti Mahal Krabi" />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100 carousel-img"
                                alt="Beautiful ambience inside Moti Mahal Restaurant" />
                        </div>
                        <div className="carousel-item">
                            <img src={img5} className="d-block w-100 carousel-img"
                                alt="Comfortable seating and decor in Krabi restaurant" />
                        </div>
                        <div className="carousel-item">
                            <img src={img6} className="d-block w-100 carousel-img"
                                alt="Indian restaurant ambience in Krabi Thailand" />
                        </div>
                        <div className="carousel-item">
                            <img src={img7} className="d-block w-100 carousel-img"
                                alt="Tourist friendly restaurant in Krabi" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>
            </div>

            {/* 3. Signature Dishes */}
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
                                    alt={`${dish.name} - Best Indian Food in Krabi`}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold text-danger">
                                        {dish.name}
                                    </h5>
                                    <p className="card-text text-muted">
                                        {dish.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CTA Section */}
            <section className="bg-danger text-white py-5 my-5 w-100">
                <div className="container-fluid text-center">
                    <h3 className="fw-bold mb-3">Plan Your Visit</h3>
                    <p className="lead mb-4">
                        Book your table today and enjoy authentic Indian & Thai cuisine in Krabi.
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