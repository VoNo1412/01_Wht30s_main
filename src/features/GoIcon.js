import React from 'react'
import icongo from '../assets/img/product/go-icon.svg';

const GoIcon = () => {
    return (
        <div className="product-go">
            <div className="product-text primary-desc">
                How to create <br /> mobile-optimized
            </div>
            <div className="product-icongo">
                <img src={icongo} alt="go-icon" />
            </div>
        </div>
    )
}

export default GoIcon