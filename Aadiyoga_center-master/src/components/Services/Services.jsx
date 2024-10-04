import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import MainLayout from "../../Layouts/MainLayout";
import { courses } from "../Courses/Coursesdata";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Contact from '../Contact/Contact';

const Services = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleRedirect = (link) => {
    navigate(link); // Use navigate to redirect to the desired link
  };

  // Slider images array (you can replace these with actual URLs)
  const sliderImages = [
    'https://aadiyogacenter.com/wp-content/uploads/2024/04/banner1.png',
    "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-21.png",
    "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-29-1.png",
    "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png",
    
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one image per slide
    slidesToScroll: 1,
    autoplay: true, // Auto slide
    autoplaySpeed: 1500, // Slide every 3 seconds
    arrows: false, // Hide navigation arrows (optional)
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8 mt-[120px]">
        {/* Title and Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover holistic wellness at Aadi Yoga Center with Yoga, Pilates, and Sound Healing for all ages. 
            Find your balance and well-being with our expert guidance.
          </p>
        </div>

        {/* Hero Slider Section */}
        <div className="relative group rounded-lg shadow-md overflow-hidden">
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <div
                  className="h-[300px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Services Section */}
        <section className="section-sm lg:section-lg mt-12">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-gray-900" data-aos="fade-down" data-aos-delay="200">
                Explore Our Services
              </h2>
              <p className="max-w-xl mx-auto text-gray-600" data-aos="fade-down" data-aos-delay="300">
                From yoga to sound healing and therapeutic classes, explore the range of services we offer for your overall well-being.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((item, index) => {
                const { image, title, desc, link, delay } = item;
                return (
                  <div
                    className="w-full bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:scale-105"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={delay}
                    onClick={() => handleRedirect(link)} // Redirect when clicking on the card
                  >
                    {/* Card Image */}
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
                      <p className="text-gray-600 mb-4">{desc}</p>

                      {/* Star Rating */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex text-orange">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                        </div>
                      </div>

                      {/* Get Started Button */}
                      <button
                        onClick={() => handleRedirect(link)} // Redirect when clicking the button
                        className="w-full bg-green-500 text-white bg-green-300 font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-green-600"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Contact/>
    </MainLayout>
  );
};

export default Services;
