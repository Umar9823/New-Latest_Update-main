import React from "react";
import { heroData } from './Herodata';
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";

// import Header from "../Header/Header";

const Hero = () => {

  const navigate = useNavigate();  // Initialize the useNavigate hook

  // Function to handle button click and redirect
  const handleBookNow = () => {
    navigate('/schedule');  // Redirect to the /schedule page
  };
  return (
    <section className="min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
      <div className="container mx-auto">
        {/* <Header /> */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-32">
          <div className="flex-1 lg:mt-12">
            <div 
              className="flex flex-wrap lg:mb-[22px]"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <h1 className="h1 mb-3">
                {heroData.title1}
              </h1>
              <h1
                className="h1 mb-3"
                style={{color:"#355750", marginLeft: "10px", whiteSpace: "nowrap"}} // Added whiteSpace property
              >
                {heroData.title2}
              </h1>
            </div>
            <p
              className="mb-6 lg:mb-12 max-w-[480px] lg:text-lg"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {heroData.description}
            </p>
            <div
              className="mb-12 space-x-4"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button onClick={handleBookNow} className="btn btn-sm lg:btn-lg" style={{backgroundColor: "#355750", color: "white"}}>
                {heroData.btn1}
              </button>
              <button className="btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 hover:bg-stroke-3 transition">
                {heroData.btn2}
              </button>
            </div>
          </div>
          <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
            <div
              className="flex-1 flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="w-[275px] h-[275px] lg:w-[804px] lg:h-[804px] lg:mt-0">
                <Parallax
                  className="w-full h-full p-28 lg:p-16"
                  bgImage={heroData.image}
                  bgImageAlt="guy image"
                  strength={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
