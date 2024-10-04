import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Contact/Contact";
import MainLayout from "../../Layouts/MainLayout";

// Example Yoga Images - Replace with your actual image URLs or import them.
const yogaImages = [
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-21.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-29-1.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png",
];

const YogaTherapy = () => {
  const settings = {
    dots: true, // Show dots below for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed (transition between slides)
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 1800, // Autoplay interval set to 3 seconds (3000ms)
    arrows: false, // Hide left/right arrows
  };

  const Letimg = {
    dots: true, // Show dots below for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed (transition between slides)
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 1800, // Autoplay interval
    arrows: false,
  };
  return (
    <MainLayout>
      <section className="bg-white py-12 lg:py-24 mt-[100px]">
        {/* Header Section */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12">
            {/* Title and Text */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Therapeutic Yoga
              </h1>
              <h2 className="text-2xl font-bold text-black mt-1 mb-1">
                Yoga therapy Sessions & Courses
              </h2>
              <p className="text-lg text-gray-600 ">
                Yoga therapy is a holistic approach to healing that integrates
                the wisdom of yoga with evidence-based therapeutic techniques.
                Our sessions combine gentle movement, breathwork, mindfulness
                practices, and relaxation techniques to help you reconnect with
                your body, reduce symptoms, and restore balance on all
                levels—physical, mental, emotional, and spiritual. Led by
                compassionate and skilled practitioners, our yoga therapy
                sessions are conducted in a safe and nurturing environment,
                where you are encouraged to explore your unique needs and
                challenges with compassion and curiosity. Whether you’re new to
                yoga or an experienced practitioner, our therapists provide
                personalized guidance and support to help you harness the
                healing power of yoga for your specific concerns.
              </p>
            </div>

            {/* Main Image */}
            {/* <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
            src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png"
            alt="Yoga Classes"
            className="rounded-lg shadow-md w-full max-w-md"
            />
            </div> */}

            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <Slider {...Letimg} className="w-full max-w-md">
                {yogaImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Yoga Image ${index + 1}`}
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="carousel-container">
            <Slider {...settings}>
              <div className="px-2">
                <img
                  src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png"
                  alt="Yoga Image 1"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png"
                  alt="Yoga Image 2"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png"
                  alt="Yoga Image 3"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png"
                  alt="Yoga Image 4"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png"
                  alt="Yoga Image 5"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="px-2">
                <img
                  src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png"
                  alt="Yoga Image 6"
                  className="w-full rounded-lg"
                />
              </div>
            </Slider>
          </div>
        </div>
        <Contact />
      </section>
    </MainLayout>
  );
};

export default YogaTherapy;
