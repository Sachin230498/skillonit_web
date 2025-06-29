import React from "react";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const reviewers = [
  {
    name: "Richa Sharma",
    role: "Front-End Dev, Malgo",
    image: "https://storage.googleapis.com/a1aa/image/7f7ac0d7-c3a8-4372-ce4b-3a83bee690a8.jpg",
    bg: "bg-white",
  },
  {
    name: "Avani Kumar",
    role: "UI/UX Designer, Malgo",
    image: "https://storage.googleapis.com/a1aa/image/5d2eba24-f229-48d3-8b8b-601cf7b65061.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Shahrukh K.",
    role: "UI/UX Designer, Malgo",
    image: "https://storage.googleapis.com/a1aa/image/f33e9e8c-180e-44f8-da6c-b59e5193ecfc.jpg",
    bg: "bg-[#FFF6E6]",
  },
  {
    name: "Amit Kumar",
    role: "UI/UX Designer, Malgo",
    image: "https://storage.googleapis.com/a1aa/image/e3a17ee4-5ce9-497a-5694-21449328e867.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Datta Thakre",
    role: "Blockchain, Malgo",
    image: "https://storage.googleapis.com/a1aa/image/51bf86dc-ef00-41e7-f65c-d9c82aa80a5f.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Akash P.",
    role: "Digital Marketer, Malgo",
    image: "https://storage.googleapis.com/a1aa/image/d8fe3c02-83f6-4aa3-963b-2028c77860e5.jpg",
    bg: "bg-[#E0F3FF]",
  },
];

const ReviewCarousel = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {reviewers.map((reviewer, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`${reviewer.bg} rounded-xl p-4 flex flex-row gap-2 h-32 items-center`}
            >
              <img
                src={reviewer.image}
                alt={reviewer.name}
                className="w-18 h-18 rounded-full mb-2"
                width={72}
                height={72}
              />
              <div className="text-sm text-center">
                <p className="font-semibold text-[#0071E3]">{reviewer.name}</p>
                <p className="text-gray-500 text-xs">{reviewer.role}</p>
                <div className="flex items-center justify-center mt-1 space-x-1">
                  <FaHeart className="text-red-600 text-sm" />
                  <span className="font-semibold text-sm">4.5/5</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;
// File: src/components/common/ReviewCarousel.js