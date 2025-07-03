// components/LearningGallery.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";
import dummyVideo from "../../assets/dummyVideo/sample-video.mp4";

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
const galleryVideo = [
  {
    id: 1,
    src: dummyVideo,
    alt: "Gallery video 1",
  },
  {
    id: 2,
    src: dummyVideo,
    alt: "Gallery video 2",
  },
  {
    id: 3,
    src: dummyVideo,
    alt: "Gallery video 3",
  },
];

function VideoCard({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false; // 🔊 unmute
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
      className="mx-2"
      style={{ width: "calc(100%/1.2)", minWidth: 600, maxWidth: 750 }}
    >
      <div className="relative w-full h-64 rounded-xl shadow-md bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-64 object-cover rounded-xl"
          playsInline
          preload="metadata"
        />

        {/* Always show button — icon changes */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
        >
          <div className="bg-white p-3 rounded-full shadow-md">
            {isPlaying ? (
              // ⏸️ Pause Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm5 0A.5.5 0 0 1 11 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
              </svg>
            ) : (
              // ▶️ Play Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.271 4.055a.5.5 0 0 0-.771.424v7.042a.5.5 0 0 0 .77.424l5.357-3.521a.5.5 0 0 0 0-.848L6.271 4.055z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

const LearningGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-[63px] font-bold bg-gradient-to-r from-[#0E8DE9] to-[#29D1FD] bg-clip-text text-transparent">
          Where Learning Comes to Life
        </h2>
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
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              style={{ width: "100%" }}
            >
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="mx-2"
                  style={{
                    minWidth: 400,
                    maxWidth: 400,
                    width: "calc(100%/1.2)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-52 object-cover rounded-xl"
                  />
                </div>
              ))}
            </Marquee>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>

          {/* Middle Swiper - pagination on right */}
          <div className="lg:mb-14 mb-6 relative">
            <Marquee
              gradient={false}
              speed={25}
              pauseOnHover={true}
              style={{ width: "100%" }}
            >
              {galleryVideo.map((item) => (
                <VideoCard key={item.id} src={item.src} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* right vertical  Swiper top to bottom */}
        <div className="relative overflow-hidden h-[510px] rounded-lg">
          <div className="marquee-down space-y-4">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <img
                key={`${img.id}-${index}`}
                src={img.src}
                alt={img.alt}
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningGallery;
