import React from 'react';

const SkilledIndiaSection = () => {
  return (
    <section className="w-full max-w-7xl mt-20 px-4">
      <div className=" text-center ">
        <h1 className="text-[63px] font-extrabold text-gray-900">
          Building a Skilled India
        </h1>
        <p className="text-[28px] font-bold text-[#00a6ff] mt-2">
          Your Gateway to Digital Excellence
        </p>
        <p className="text-[19px] text-gray-700 mt-4 max-w-2xl mx-auto">
          SkillonIT stands as Vidarbha’s first IT academy, offering industry-focused IT training courses in Buldhana, Maharashtra.
          Designed to equip aspiring professionals with in-demand IT skills, our expert-led courses ensure career-ready expertise.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src=" https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_1280.jpg"
          alt="Education"
          className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-2xl shadow-md"
        />
        <img
          src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg "
          alt="Education"
          className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-2xl shadow-md sm:col-span-1 lg:col-span-2"
        />
        <img
          src=" https://cdn.pixabay.com/photo/2016/06/29/08/50/pencils-1486278_1280.jpg"
          alt="Education"
          className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-2xl shadow-md sm:col-span-2 lg:col-span-3"
        />
      </div>
    </section>
  );
};

export default SkilledIndiaSection;
