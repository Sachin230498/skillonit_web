import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample image data
const galleryImages = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    alt: "Gallery Image 5",
  },
];

const CoursesBanner = () => {
  return (
    <div className="mt-20 shadow-xl">
        <div className="  relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: ".custom-pagination-right",
              }}
              loop={true}
            >
              {galleryImages.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Dots Right */}
            <div className="custom-pagination-right absolute top-1/2 -translate-y-1/2 right-2 flex flex-col gap-2 z-10"></div>

            {/* Style vertical pagination dots */}
            <style jsx>{`
              .custom-pagination-right .swiper-pagination-bullet {
                background: #888;
                opacity: 0.6;
                width: 10px;
                height: 10px;
                transition: all 0.3s;
              }
              .custom-pagination-right .swiper-pagination-bullet-active {
                background: #000;
                opacity: 1;
                width: 12px;
                height: 12px;
              }
            `}</style>
          </div>
    </div>
  )
}

export default CoursesBanner
