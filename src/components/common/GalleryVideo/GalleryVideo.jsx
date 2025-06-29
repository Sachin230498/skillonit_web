import Style from './GalleryVideo.module.scss';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import { FaPlay } from 'react-icons/fa6';

const GalleryVideo = ({ galleryData }) => {
    const [videoModal, setVideoModal] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

    const toggleVideoModal = (isOpen, videoUrl = '') => {
        setVideoModal(isOpen);
        setSelectedVideoUrl(videoUrl);
    };

    const hasVideos = Array.isArray(galleryData) && galleryData.length > 0;

    const SlideContent = ({ item, index }) => {
        const swiper = useSwiper();

        const handleSlideClick = () => {
            swiper.slideToLoop(index);
        };

        const handlePlayClick = () => {
            swiper.slideToLoop(index);
            toggleVideoModal(true, item.video_url); 
        };

        return (
            <div className={Style.gallery_swiper_slide_main} onClick={handleSlideClick}>
                <div className={Style.gallery_swiper_card}>
                    <img
                        src={item.thumbnail_url}
                        alt={item.title}
                        title={item.title}
                        name={item.title}
                    />
                </div>
                <button
                    className={Style.play_btn}
                    onClick={handlePlayClick}
                >
                    <FaPlay />
                </button>
            </div>
        );
    };

    return (
        <div className={`gallery-video ${Style.gallery_video}`}>
            {hasVideos ? (
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 2, spaceBetween: 30 },
                        1280: { slidesPerView: 3, spaceBetween: 30 },
                        1440: { slidesPerView: 3, spaceBetween: 30 },
                        1920: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={Style.gallery_swiper}
                >
                    {galleryData.map((item, index) => (
                        <SwiperSlide key={index} className={Style.gallery_swiper_slide}>
                            <SlideContent item={item} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className={Style.no_videos}>
                    <p>No videos are found</p>
                </div>
            )}
            <VideoModal
                show={videoModal}
                handleClose={() => toggleVideoModal(false)}
                videoUrl={selectedVideoUrl}
            />
        </div>
    );
};

export default GalleryVideo;