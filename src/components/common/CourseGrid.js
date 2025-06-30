import React from "react";

const courses = [
  {
    title: "Blockchain Development",
    duration: "6 months",
    tags: ["Solidity", "Smart Contracts", "DApps", "Web3"],
    description: "Build real blockchain apps and launch your Web3 career",
    img: "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_1280.jpg",
  },
  {
    title: "Web (MERN) Development",
    duration: "6 months",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "Build full-stack web apps with the powerful MERN stack",
    img: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max",
  },
  {
    title: "App Development",
    duration: "6 months",
    tags: ["Flutter"],
    description: "Build real mobile apps with Flutter and launch your career",
    img: "https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_1280.jpg",
  },
  {
    title: "Game Development",
    duration: "6 months",
    tags: ["Unity", "C#", "2D & 3D Game Design"],
    description: "Create amazing 2D & 3D games with Unity and C#",
    img: "https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg",
  },
  {
    title: "UI/UX Design",
    duration: "3 months",
    tags: ["Figma", "Prototyping", "UX Research"],
    description: "Design beautiful, user-friendly apps and websites",
    img: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fblog%2F1737465366012ui-ux-design-portfolio.jpg&w=750&q=75",
  },
  {
    title: "Graphic Design",
    duration: "3 months",
    tags: ["Photoshop", "Illustrator", "Branding"],
    description: "Master design tools and create stunning visual content",
    img: "https://cdn.pixabay.com/photo/2020/10/14/18/35/sign-post-5655110_1280.png",
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
            className="rounded-2xl h-[500px] shadow-md overflow-hidden bg-white flex flex-col"
          >
            {/* Top half background image */}
            <div
              className="h-2/3 bg-cover bg-center"
              style={{ backgroundImage: `url(${course.img})` }}
            >
              <div className="flex flex-col justify-between h-full px-4 pt-4">
              <div className="flex justify-end">
                <span className="bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full inline-block mb-3">
                  {course.duration}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </div>

            {/* Bottom half content */}
            <div className="flex flex-col justify-between p-4 ">
              <div>
                <p className="text-sm text-gray-700">{course.description}</p>
              </div>

              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
