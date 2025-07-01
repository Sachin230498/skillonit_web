import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Avanti Desai",
    title: "UI/UX Designer @Maxbyte",
    rating: 4.5,
    avatar: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    feedback: `SkillonIT gave me the confidence and skills I needed to land my first job in tech. The hands-on approach was a game changer.`
  },
  {
    name: "Rahul Mehta",
    title: "Frontend Dev @InnovaTech",
    rating: 4.7,
    avatar: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    feedback: `I loved the structure of the courses and the real-world projects. I was able to build my portfolio and secure job interviews quickly.`
  },
  {
    name: "Sneha Iyer",
    title: "Backend Engineer @CodeVerse",
    rating: 4.8,
    avatar: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    feedback: `Thanks to SkillonIT, I could transition from a different field into IT smoothly. The instructors were so helpful and clear.`
  },
  {
    name: "Mohit Kumar",
    title: "Software Intern @Digiflex",
    rating: 4.6,
    avatar: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    feedback: `I started with zero experience, but now I feel ready for any technical challenge. The mock interviews were especially helpful.`
  }
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <section className="text-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
            What Our Students Say
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-[#00a6ff] mt-2">
            Real experiences. Real transformations.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-4 max-w-2xl mx-auto">
            Hear directly from our students about their learning journey at SkillonIT. From gaining practical skills to landing their first job, these stories reflect the real impact of quality IT education.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="rounded-xl"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col items-center">
                  <p className="text-gray-700 shadow-sm rounded-md p-3 text-base md:text-lg mb-6">{item.feedback}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="text-left">
                      <div className="text-gray-900 font-bold">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.title}</div>
                      <div className="text-yellow-500 text-sm font-semibold">{item.rating}⭐</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white  p-4 text-sm rounded-full  bg-[#3572EF] hover:bg-blue-100">
            <ChevronLeft className="text-blue-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white  p-4 text-sm rounded-full  bg-[#3572EF] hover:bg-blue-100">
            <ChevronRight className="text-blue-600" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
