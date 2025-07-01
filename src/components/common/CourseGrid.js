import React from "react";
import { Link } from "react-router-dom";
import blockchain from "../../assets/images/courses/blockchain.png"
import web from "../../assets/images/courses/web.png"
import app from "../../assets/images/courses/app.png"
import game from "../../assets/images/courses/game.png"
import uiux from "../../assets/images/courses/ui-ux.png"
import graphic from "../../assets/images/courses/graphic.png"

const courses = [
  {
    title: "Blockchain Development",
    duration: "6 months",
    tags: ["Solidity", "Smart Contracts", "DApps", "Web3"],
     description: (
      <span>
        Build real <span className="text-[#00a6ff]">blockchain</span> apps and launch your Web3 career
      </span>
    ),
    img: blockchain ,
  },
  {
    title: "Web (MERN) Development",
    duration: "6 months",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    description: (
      <span>
      Build <span className="text-[#00a6ff]">full-stack</span> web apps with the powerful <span className="text-[#00a6ff]">MERN stack</span> 
      </span>
      ),
    img: web,
  },
  {
    title: "App Development",
    duration: "6 months",
    tags: ["Flutter"],
    description: (
      <span>
     Build real <span className="text-[#00a6ff]">mobile apps</span> with <span className="text-[#00a6ff]">Flutter</span>  and launch your career </span> ),
    img: app,
  },
  {
    title: "Game Development",
    duration: "6 months",
    tags: ["Unity", "C#", "2D & 3D Game Design"],
    description: ( <span  >Create amazing <span>2D & 3D</span> games with<span className="text-[#00a6ff]"> Unity</span> and<span className="text-[#00a6ff]"> C#</span>.</span>),
    img: game,
  },
  {
    title: "UI/UX Design",
    duration: "3 months",
    tags: ["Figma", "Prototyping", "UX Research"],
    description: (<span>Design beautiful, <span className="text-[#00a6ff]">user-friendly</span> and responsive apps and websites.</span>),
    img: uiux,
  },
  {
    title: "Graphic Design",
    duration: "3 months",
    tags: ["Photoshop", "Illustrator", "Branding"],
    description: (<span>Master design tools and create stunning<span className="text-[#00a6ff]"> visual content</span></span>),
    img: graphic,
  },
];

const CourseGrid = () => {
  return (
    <div className="min-h-screen max-w-7xl bg-white py-10 px-4 md:px-4">
      <div className=" text-center my-20">
        <p className="text-lg sm:text-xl font-semibold text-[#00a6ff] mt-2">
          From Basics to Brilliance
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          Start Learning Now
        </h1>
        <p className="text-sm sm:text-base text-gray-700 mt-4 max-w-2xl mx-auto">
          From foundational concepts to advanced skills, our courses are
          designed to guide you every step of the way.Join us and turn your
          curiosity into a career in the world of IT.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-2xl h-[500px] shadow-xl overflow-hidden bg-white flex flex-col"
          >
            {/* Top half background image */}
            <div
              className="h-2/3 bg-cover bg-center"
              style={{ backgroundImage: `url(${course.img})` }}
            >
              <div className="flex flex-col justify-between h-full px-4 pt-4">
              <div className="flex justify-end">
                <span className="bg-[#54C200] text-white text-sm px-3 py-1 rounded-full inline-block mb-3">
                  {course.duration}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-50 text-[#1CB0F6] px-2 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </div>

            {/* Bottom half content */}
            <div className="flex flex-col justify-between px-4  ">
              <div className="bg-[#E8A615] w-fit px-3 text-sm p-1 my-2 rounded-full">
                  Beginner to advanced
                </div>
              <div>
                <p className="text-lg text-gray-700">{course.description}</p>
              </div>

              <button className=" bg-[#00A6FF] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

    <div className="flex justify-end w-full mt-10">
       <Link to="/courses" reloadDocument className=" ">
                <button className=" border-2 border-blue-500 rounded-full px-3 p-2 hover:bg-blue-500 hover:text-white">Load More</button>
              </Link>
    </div>
    </div>
  );
};

export default CourseGrid;
