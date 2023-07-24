import React, { useState } from 'react';
import arrow from '@/Assets/Images/components/Arrow.svg';

const GallerySlideshow = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length);

    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="gallery-slideshow">
            {images.length > 1 && (
                <div className="arrow prev" onClick={goToPrevImage}>
                    <img src={arrow} alt='button prev slide'></img>
                </div>
            )}
            <img className='img_gallery' src={images[currentImageIndex]} alt={`slide ${currentImageIndex + 1}`} />
            {images.length > 1 && (
                <div className="arrow next" onClick={goToNextImage}>
                    <img src={arrow} alt='button next slide'></img>
                </div>
            )}
            {images.length > 1 && (
                <p>{`${currentImageIndex + 1}/${images.length}`}</p>
            )}
        </div>
    );
};

export default GallerySlideshow;
