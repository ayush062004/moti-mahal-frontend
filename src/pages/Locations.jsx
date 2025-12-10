// src/components/LocationCard.jsx

import React from 'react';

const LocationCard = ({ location }) => {
    return (
        <div className="card shadow-lg h-100 border-0">
            <div className="card-body">
                <h5 className="card-title text-danger fw-bold">{location.name}</h5>
                <p className="card-text mb-2">
                    <i className="bi bi-geo-alt-fill me-2 text-dark"></i>
                    {location.address}
                </p>
                <p className="card-text mb-2">
                    <i className="bi bi-telephone-fill me-2 text-dark"></i>
                    <a href={`tel:${location.phone}`} className="text-decoration-none text-dark">{location.phone}</a>
                </p>
                <p className="card-text mb-3">
                    <i className="bi bi-clock-fill me-2 text-dark"></i>
                    {location.hours}
                </p>
                
                <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-danger btn-sm"
                >
                    Get Directions
                </a>
            </div>
            {/* Map Frame (Pehle location ka map dikhane ke liye) */}
            <iframe
                src={location.mapEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${location.name}`}
            ></iframe>
        </div>
    );
};

export default LocationCard;