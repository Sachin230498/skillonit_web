import React, { useState, useEffect } from 'react';
import Style from './GalleryImage.module.scss';

const GalleryImage = ({ galleryData }) => {
    const slides = galleryData.map((item, index) => ({
        id: index + 1,
        image: item.url,
        title: item?.name?.replace(/\.[^/.]+$/, ""),
    }));

    const [selectedSlide, setSelectedSlide] = useState(null);

    useEffect(() => {
        if (slides.length > 0) {
            setSelectedSlide(slides[0]);
        }
    }, [galleryData]);

    const handleSlideClick = (slide) => {
        setSelectedSlide(slide);
    };

    if (slides.length === 0) {
        return (
            <div className={Style.no_image}>
                No images are found
            </div>
        );
    }

    return (
        <div className={Style.gallery_image}>
            <div className={Style.gallery_main_swiper}>
                {selectedSlide?.image && (
                    <img
                        src={selectedSlide.image}
                        alt={selectedSlide.title}
                        title={selectedSlide.title}
                        name={selectedSlide.title}
                        width={5185}
                        height={3457}
                    />
                )}
            </div>
            <div className={Style.gallery_nav_swiper}>
                {slides.map((slide) => (
                    <div
                        className={`${Style.gallery_nav_swiper_card} ${slide.id === selectedSlide?.id ? Style.active : ''}`}
                        key={slide.id}
                        onClick={() => handleSlideClick(slide)}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            title={slide.title}
                            name={slide.title}
                            width={5185}
                            height={3457}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryImage;