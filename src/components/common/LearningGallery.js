// components/LearningGallery.jsx
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

const LearningGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-[63px] font-bold bg-gradient-to-r from-[#0E8DE9] to-[#29D1FD] bg-clip-text text-transparent">Where Learning Comes to Life</h2>
        <span className="text-[28px] font-semibold text-[#0F1F3E] mt-2">
          "A visual journey through our events and activities"
        </span>
        <p className="text-[19px] text-[#0F1F3E] mt-4">
          Explore the journey of SkillonIT through snapshots of our past events,
          training sessions, student activities, and behind-the-scenes glimpses
          of our institute.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-5">
          {/* Top Swiper - pagination bottom center */}
          <div className="mb-12 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 2.5 },
              }}
            >
              {galleryImages.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-52 object-cover rounded-xl  "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
          </div>

          {/* Middle Swiper - pagination on right */}
          <div className="lg:mb-14 mb-6 relative">
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

             
        <div className="lg:col-span-1">
          {/* Right-side vertical swiper with 3 visible images */}
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false , reverseDirection: true,}}
            style={{ height: "520px" }} // Adjust height as needed
            modules={[Autoplay]}
            className="rounded-lg  "
          >
            {galleryImages.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LearningGallery;
