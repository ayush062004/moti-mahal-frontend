// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Hum yahan se static data le rahe hain, lekin abhi hum sirf 3-4 featured items hardcode karenge
// const featuredDishes = menuData.filter(item => item.isSignature); 

const Home = () => {
    // Hardcoded data for Featured Dishes (Agar aapne images add nahi ki hain toh sirf text use karein)
    const featuredDishes = [
        { name: "Butter Chicken", description: "The world-famous creamy tomato curry.", image: "/assets/dish1.jpg" },
        { name: "Dal Makhani", description: "Black lentils simmered overnight, rich and velvety.", image: "/assets/dish2.jpg" },
        { name: "Tandoori Platter", description: "Assortment of succulent kebabs.", image: "/assets/dish3.jpg" },
    ];

    return (
        <div className="home-page">
            {/* 1. Hero Section (Full-width Banner) */}
            <section 
                className="text-white d-flex align-items-center"
                style={{
                    height: '95vh',
                    backgroundImage: 'url(/assets/hero_ambiance.jpg)', // Replace with your high-res image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
                    backgroundBlendMode: 'darken'
                }}
            >
                <div className="container py-5 text-center">
                    <h1 className="display-1 fw-bolder mb-3 text-warning">
                        The Original Moti Mahal
                    </h1>
                    <h2 className="display-6 mb-4">
                        A Culinary Legacy Since 1947
                    </h2>
                    <p className="lead mb-5 fs-5">
                        Experience the taste that started it all – the authentic Tandoori and Mughlai cuisine.
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <Link to="/menu" className="btn btn-danger btn-lg px-5 me-sm-3 fw-bold shadow-lg">
                            View Menu
                        </Link>
                        <Link to="/locations" className="btn btn-outline-light btn-lg px-5 shadow-lg">
                            Find a Location
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Heritage/USP Section (Why Choose Us) */}
            <section className="container my-5 py-5 text-center">
                <h2 className="text-center mb-5 text-danger fw-bold display-4">
                    Our Unmatched Heritage
                </h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        {/* You need to install Bootstrap Icons: npm install bootstrap-icons */}
                        <i className="bi bi-clock-history fs-1 text-danger mb-3"></i> 
                        <h5 className="fw-bold mt-2">Pioneers Since 1947</h5>
                        <p className="text-muted">Over 75 years of culinary mastery and tradition.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-star-fill fs-1 text-danger mb-3"></i> 
                        <h5 className="fw-bold mt-2">The Butter Chicken Origin</h5>
                        <p className="text-muted">The creators of the dish loved by the entire world.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-geo-alt fs-1 text-danger mb-3"></i> 
                        <h5 className="fw-bold mt-2">Global Presence</h5>
                        <p className="text-muted">Serving authentic cuisine across multiple cities and countries.</p>
                    </div>
                </div>
            </section>
            
            <hr className="my-5" />

            {/* 3. Featured Dishes Section (Menu Preview) */}
            <section className="container my-5 py-5">
                <h2 className="text-center mb-5 text-dark fw-bold display-4">
                    Signature Dishes
                </h2>
                <div className="row g-4">
                    {featuredDishes.map((dish, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100 border-0 shadow-lg">
                                <img 
                                    src={dish.image} 
                                    className="card-img-top" 
                                    alt={dish.name} 
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold text-danger">{dish.name}</h5>
                                    <p className="card-text text-muted">{dish.description}</p>
                                    <Link to="/menu" className="btn btn-outline-danger mt-2">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Call to Action - Reservation */}
            <section className="bg-danger text-white py-5 my-5">
                <div className="container text-center">
                    <h3 className="fw-bold mb-3">Plan Your Visit</h3>
                    <p className="lead mb-4">
                        Book your table today and enjoy an authentic dining experience.
                    </p>
                    <button className="btn btn-light btn-lg fw-bold px-5">
                        Book a Table Now
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Home;