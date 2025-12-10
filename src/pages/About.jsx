// src/pages/About.jsx
import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            
            {/* 1. Hero Section - Title Banner */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="display-3 fw-bold text-danger">
                        Our Story: A Culinary Journey
                    </h1>
                    <p className="lead text-muted mt-3">
                        Pioneering Indian Cuisine since 1947, taste the legacy that created the Butter Chicken.
                    </p>
                </div>
            </section>

            {/* 2. The Legacy Story (Two-Column Layout) */}
            <section className="container my-5 py-5">
                <div className="row align-items-center">
                    {/* Left Column - Image */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img 
                            src="/assets/moti_mahal_history.jpg" // Placeholder for an old photo or founder's image
                            alt="Moti Mahal History" 
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                    {/* Right Column - Text */}
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4 text-dark">
                            Born in Pre-Independence Era
                        </h2>
                        <p className="text-muted fs-5">
                            Moti Mahal ki shuruaat **Peshawar** (ab Pakistan mein) mein **Kundal Lal Gujral** ne ki thi. 1947 ke partition ke baad, woh **Delhi** aakar **Daryaganj** mein Moti Mahal restaurant ki sthapna ki. Yeh sirf ek restaurant nahi, yeh ek **culinary institution** ka janm tha.
                        </p>
                        <p className="text-muted fs-5">
                            Yahi woh kitchen tha jahan **Tandoori Chicken** ko 'invent' kiya gaya aur uski bachi hui gravy se **Butter Chicken** aur **Dal Makhani** jaisi iconic dishes ka janm hua. Yeh woh kahani hai jab India ne azaadi paayi, aur Indian cuisine ne apni pehchaan.
                        </p>
                    </div>
                </div>
            </section>
            
            <hr className="my-5" />

            {/* 3. Milestones and Vision (Timeline or Bullet Points) */}
            <section className="container my-5 py-5 text-center">
                <h2 className="fw-bold mb-5 text-danger display-4">
                    Our Global Footprint
                </h2>
                
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <ul className="list-group list-group-flush text-start">
                            <li className="list-group-item d-flex align-items-center p-4">
                                <span className="badge bg-danger rounded-pill me-4 fs-6 p-2">1947</span>
                                <div>
                                    <h5 className="mb-1 fw-bold">Daryaganj, Delhi</h5>
                                    <p className="mb-0 text-muted">Moti Mahal Daryaganj ki sthapna, jahan se Butter Chicken ki kahani shuru hui.</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex align-items-center p-4">
                                <span className="badge bg-danger rounded-pill me-4 fs-6 p-2">1970s</span>
                                <div>
                                    <h5 className="mb-1 fw-bold">International Recognition</h5>
                                    <p className="mb-0 text-muted">First Prime Minister, Pandit Jawaharlal Nehru, aur President Richard Nixon jaise bade personalities yahan dining karte the.</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex align-items-center p-4">
                                <span className="badge bg-danger rounded-pill me-4 fs-6 p-2">Present</span>
                                <div>
                                    <h5 className="mb-1 fw-bold">Expanding the Legacy</h5>
                                    <p className="mb-0 text-muted">Aaj, Moti Mahal ki legacy ko worldwide branches ke through aage badhaya ja raha hai, quality aur tradition maintain karte hue.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;