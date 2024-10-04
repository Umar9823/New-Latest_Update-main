import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutAadiYogaCenter = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
const settings = {
    dots: true,              // Show dots below for navigation
    infinite: true,          // Infinite scrolling
    speed: 500,              // Animation speed (transition between slides)
    slidesToShow: 4,         // Number of slides to show at a time
    slidesToScroll: 1,       // Number of slides to scroll per swipe
    autoplay: true,          // Autoplay enabled
    autoplaySpeed: 1800,     // Autoplay interval set to 3 seconds (3000ms)
    arrows: false,           // Hide left/right arrows
  };

  return (
    <section className="about-section py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-teal-900">About Aadi Yoga Center, Bangkok</h2>
        <p className="text-lg text-gray-700 mb-8">
         Aadi Yoga Center Thailand, where holistic wellness meets serene surroundings. Explore a range of transformative services tailored to your needs, including private and group yoga classes, specialized therapy sessions, invigorating kids' yoga, and soothing sound healing. Join our vibrant community and embark on a journey to inner balance and vitality.
        </p>

        {/* Image Carousel */}
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="px-2">
              <img src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png" alt="Yoga Image 1" className="w-full rounded-lg" />
            </div>
            <div className="px-2">
              <img src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png" alt="Yoga Image 2" className="w-full rounded-lg" />
            </div>
            <div className="px-2">
              <img src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png" alt="Yoga Image 3" className="w-full rounded-lg" />
            </div>
            <div className="px-2">
              <img src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png" alt="Yoga Image 4" className="w-full rounded-lg" />
            </div>
            <div className="px-2">
              <img src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png" alt="Yoga Image 5" className="w-full rounded-lg" />
            </div>
            <div className="px-2">
              <img src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png" alt="Yoga Image 6" className="w-full rounded-lg" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutAadiYogaCenter;
