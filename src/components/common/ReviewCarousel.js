// import React from "react";
// import { FaHeart } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay ,FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import 'swiper/css/free-mode';

// const reviewers = [
//   {
//     name: "Richa Sharma",
//     role: "Front-End Dev, Malgo",
//     image:
//       "https://storage.googleapis.com/a1aa/image/7f7ac0d7-c3a8-4372-ce4b-3a83bee690a8.jpg",
//     bg: "bg-white",
//   },
//   {
//     name: "Avani Kumar",
//     role: "UI/UX Designer, Malgo",
//     image:
//       "https://storage.googleapis.com/a1aa/image/5d2eba24-f229-48d3-8b8b-601cf7b65061.jpg",
//     bg: "bg-[#E0F3FF]",
//   },
//   {
//     name: "Shahrukh K.",
//     role: "UI/UX Designer, Malgo",
//     image:
//       "https://storage.googleapis.com/a1aa/image/f33e9e8c-180e-44f8-da6c-b59e5193ecfc.jpg",
//     bg: "bg-[#FFF6E6]",
//   },
//   {
//     name: "Amit Kumar",
//     role: "UI/UX Designer, Malgo",
//     image:
//       "https://storage.googleapis.com/a1aa/image/e3a17ee4-5ce9-497a-5694-21449328e867.jpg",
//     bg: "bg-[#E0F3FF]",
//   },
//   {
//     name: "Datta Thakre",
//     role: "Blockchain, Malgo",
//     image:
//       "https://storage.googleapis.com/a1aa/image/51bf86dc-ef00-41e7-f65c-d9c82aa80a5f.jpg",
//     bg: "bg-[#E0F3FF]",
//   },
//   {
//     name: "Akash P.",
//     role: "Digital Marketer, Malgo",
//     image:
//       "https://storage.googleapis.com/a1aa/image/d8fe3c02-83f6-4aa3-963b-2028c77860e5.jpg",
//     bg: "bg-[#E0F3FF]",
//   },
//   {
//     name: "Datta Thakre",
//     role: "Blockchain, Malgo",
//     image:
//       "https://storage.googleapis.com/a1aa/image/51bf86dc-ef00-41e7-f65c-d9c82aa80a5f.jpg",
//     bg: "bg-[#E0F3FF]",
//   },
// ];

 
// const ReviewCarousel = () => {
//   return (
//     <div className="p-4 max-w-8xl mx-auto w-full">
//       <Swiper
//         spaceBetween={0} // No gap for true marquee
//         loop={true}
//         freeMode={true}
//         freeModeMomentum={false}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//         }}
//         speed={15000} // Higher value = slower, smoother
//         modules={[Autoplay, FreeMode]}
//         slidesPerView={"auto"} // Show as many as fit, for marquee
//         allowTouchMove={false}
//         cssMode={false}
//         style={{ width: "100%" }}
//       >
//         {reviewers.map((reviewer, idx) => (
//           <SwiperSlide key={idx} style={{ width: 260, minWidth: 220, maxWidth: 300 }}>
//             <div
//               className={`${reviewer.bg} rounded-xl p-2 mx-1 flex items-center gap-4 h-auto sm:h-32`}
//             >
//               <img
//                 src={reviewer.image}
//                 alt={reviewer.name}
//                 className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover"
//               />
//               <div className="text-sm text-left text-nowrap">
//                 <div className="font-semibold text-[#0071E3]">
//                   {reviewer.name}
//                 </div>
//                 <div className="text-gray-500 text-xs">{reviewer.role}</div>
//                 <div className="flex items-center justify-center sm:justify-start space-x-1">
//                   <FaHeart className="text-red-600 text-sm" />
//                   <span className="font-semibold text-sm">4.5/5</span>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
 

// export default ReviewCarousel;





import React from "react";
import { FaHeart } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const reviewers = [
  {
    name: "Richa Sharma",
    role: "Front-End Dev, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/7f7ac0d7-c3a8-4372-ce4b-3a83bee690a8.jpg",
    bg: "bg-white",
  },
  {
    name: "Avani Kumar",
    role: "UI/UX Designer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/5d2eba24-f229-48d3-8b8b-601cf7b65061.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Shahrukh K.",
    role: "UI/UX Designer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/f33e9e8c-180e-44f8-da6c-b59e5193ecfc.jpg",
    bg: "bg-[#FFF6E6]",
  },
  {
    name: "Amit Kumar",
    role: "UI/UX Designer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/e3a17ee4-5ce9-497a-5694-21449328e867.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Datta Thakre",
    role: "Blockchain, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/51bf86dc-ef00-41e7-f65c-d9c82aa80a5f.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Akash P.",
    role: "Digital Marketer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/d8fe3c02-83f6-4aa3-963b-2028c77860e5.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Datta Thakre",
    role: "Blockchain, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/51bf86dc-ef00-41e7-f65c-d9c82aa80a5f.jpg",
    bg: "bg-[#E0F3FF]",
  },
];

const ReviewCarousel = () => {
  return (
    <div className="p-4 mt-3 max-w-8xl mx-auto w-full">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        style={{ width: "100%" }}
      >
        {reviewers.map((reviewer, idx) => (
          <div
            key={idx}
            className={`${reviewer.bg} rounded-xl p-2 mx-1 flex items-center gap-4 h-auto sm:h-32`}
            style={{ width: 260, minWidth: 220, maxWidth: 300 }}
          >
            <img
              src={reviewer.image}
              alt={reviewer.name}
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover"
            />
            <div className="text-sm text-left text-nowrap">
              <div className="font-semibold text-[#0071E3]">
                {reviewer.name}
              </div>
              <div className="text-gray-500 text-xs">{reviewer.role}</div>
              <div className="flex items-center justify-center sm:justify-start space-x-1">
                <FaHeart className="text-red-600 text-sm" />
                <span className="font-semibold text-sm">4.5/5</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ReviewCarousel;