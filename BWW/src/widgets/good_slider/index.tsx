import React, { useState, useEffect } from 'react';
import './index.scss';
import arrow_rigth from '../../assets/img/icons8-стрелка-100.png';
import arrow_left from '../../assets/img/icons8-стрелка-100-left.png';

interface PhotoSliderProps {
    photos: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(1);

    const handleNextSlide = () => {
        setCurrentIndex1((prevIndex) => (prevIndex + 2 < photos.length ? prevIndex + 2 : 0));
        setCurrentIndex2((prevIndex) => (prevIndex + 2 < photos.length ? prevIndex + 2 : 1));
    };

    const handlePrevSlide = () => {
        setCurrentIndex1((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : photos.length - 1));
        setCurrentIndex2((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : photos.length - 2));
    };

    useEffect(() => {
        // Additional logic or side effects when currentIndex changes
        console.log('Current Index 1:', currentIndex1);
        console.log('Current Index 2:', currentIndex2);
    }, [currentIndex1, currentIndex2]);

    return (
        <div className='photo-slider-container'>
            <div className='photo-slider'>
                {photos.map((photo, index) => (
                    (index === currentIndex1 || index === currentIndex2) && (
                        <img src={photo} key={index} alt={`Slide ${index}`} />
                    )
                ))}
            </div>
            <div className='slider-navigation'>
                <button onClick={handlePrevSlide}><img className='arrow-img left-arrow' src={arrow_left} /></button>
                <button onClick={handleNextSlide}><img className='arrow-img right-arrow' src={arrow_rigth} /></button>
            </div>
        </div>
    );
};

export default PhotoSlider;
