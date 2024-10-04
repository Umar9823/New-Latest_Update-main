import React from "react";
import { courses } from "./Coursesdata";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Courses = () => {

  const navigate = useNavigate();

  const redirect = ()=>{
    navigate('/services')
  }
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-32">
          <h2
            className="h2 mb-3 lg:mb-[18px]"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Our Services
          </h2>
          <p
            className="max-w-[480px] mx-auto"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Discover holistic wellness at Aadi Yoga Center with Yoga Pilates and Sound Healing for all ages. Find your balance and well-being with our expert guidance.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
          {courses.map((item, index) => {
            const { image, title, desc, link, delay } = item;
            return (
              <div
                className="w-full bg-white hover:shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[14px] mx-auto transition hover:cursor-pointer"
                key={index}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                  <img 
                    src={image} 
                    alt="" 
                    className="w-full h-[200px] object-cover rounded-md" // Applied size control here
                  />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                  <div className="flex text-orange gap-x-2">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <a className="font-medium" href="#">
                    {link}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
          onClick={redirect}
            className="btn btn-sm btn-orange"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Browse all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
