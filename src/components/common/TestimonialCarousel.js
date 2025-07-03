import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummyVideo from "../../assets/dummyVideo/sample-video.mp4";

const testimonials = [
  {
    name: "Avani Desai",
    title: "UI/UX Designer",
    rating: 4.5,
    testimonial:
      "SkillonIT helped me land my first job. The practical skills I gained here are invaluable.",
    image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",  
    video: dummyVideo,  
  },
  {
    name: "Avani Desai",
    title: "UI/UX Designer",
    rating: 4.5,
    testimonial:
      "SkillonIT helped me land my first job. The practical skills I gained here are invaluable.",
    image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",  
    video: dummyVideo,  
  },
  {
    name: "Avani Desai",
    title: "UI/UX Designer",
    rating: 4.5,
    testimonial:
      "SkillonIT helped me land my first job. The practical skills I gained here are invaluable.",
    image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",  
    video: dummyVideo,  
  },
  {
    name: "Avani Desai",
    title: "UI/UX Designer",
    rating: 4.5,
    testimonial:
      "SkillonIT helped me land my first job. The practical skills I gained here are invaluable.",
    image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",  
    video: dummyVideo,  
  },
   
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-[63px] font-extrabold text-[#0F1F3E] text-center">
          What Our Students Say
        </h2>
        <p className="text-[28px] font-semibold text-[#00a6ff] text-center mt-2">
          Real experiences. Real transformations.
        </p>
        <p className="text-[19px] text-[#0F1F3E] max-w-7xl  text-center mx-auto ">
          Hear directly from our students about their learning journey at
          SkillonIT. From gaining practical skills to landing their first job,
          these stories reflect the real impact of quality IT education.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-[3rem]   px-6 py-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <video src={item.video} controls className="text-gray-700 mb-4 rounded-xl" />
                <p className="text-gray-700 mb-4 shadow-sm rounded p-3">{item.testimonial}</p>
                <div className="flex bg-white border-2 border-gray-100 items-center shadow-md rounded-lg p-2 gap-3 mt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg border-2 object-cover border-orange-500"
                  />
                  <div className="text-left flex flex-col gap-1 items-start">
                    <div className="text-sm font-semibold text-[#0084FF]">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">{item.title}</div>
                  <div className="mx-auto text-xs font-semibold bg-blue-100 px-2 py-1 rounded-lg">
                    ⭐ {item.rating}
                  </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
