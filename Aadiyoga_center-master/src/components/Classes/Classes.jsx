import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Schedule = () => {
  const scheduleData = [
    { time: "06:30 AM (60 mins)", monday: "Bending & Twisting", tuesday: "Hip & Shoulder Opening", wednesday: "Front & Middle Split", thursday: "Backbending & Shoulder", friday: "Hatha & Core" },
    { time: "07:45 AM (60 mins)", monday: "Hip Opening & Shoulder", tuesday: "Backbending & Shoulder", wednesday: "Ashtanga Series", thursday: "Bending & Twisting", friday: "Inversion & Core" },
    { time: "09:30 AM (75 mins)", monday: "Gentle Stretching", tuesday: "Hip & Leg Stretching", wednesday: "Backbending & Shoulder", thursday: "Hatha & Core", friday: "Bending & Twisting" },
    { time: "11:30 AM (60 mins)", monday: "Available for Private Class", tuesday: "Full Body Opening", wednesday: "Available for Private Class", thursday: "Gentle Stretching", friday: "Available for Private Class" },
    { time: "05:15 PM (45 mins)", monday: "Available for Private Class", tuesday: "Kids Yoga", wednesday: "Available for Private Class", thursday: "Kids Yoga", friday: "Available for Private Class" },
    { time: "06:30 PM (60 mins)", monday: "Hip & Shoulder", tuesday: "Backbending & Shoulder", wednesday: "Twisting & Forwardbend", thursday: "Hatha & Core", friday: "Front & Middle Split" },
    { time: "07:40 PM (60 mins)", monday: "Gentle Stretching", tuesday: "Full Body Opening", wednesday: "Backbending & Shoulder", thursday: "Twisting & Forwardbend", friday: "Hip & Shoulder" }
  ];

  const weekendScheduleData = [
    { time: "07:30 AM (100 mins)", saturday: "Advanced Backbending", sunday: "Arm Balance & Core" },
    { time: "09:30 AM (75 mins)", saturday: "Full Body Opening", sunday: "Gentle Stretching" },
    { time: "06:30 PM (60 mins)", saturday: "Gentle Stretching", sunday: "Full Body Opening" }
  ];

  const navigate = useNavigate();

  const handledailycls = () => {
    navigate('/normalclass');  // Redirect to the /schedule page
  };

  const handleprivatecls = () => {
    navigate('/privateclass');  // Redirect to the /schedule page
  };


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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative group h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:opacity-50 bg-green "
        style={{ backgroundImage: `url('https://aadiyogacenter.com/wp-content/uploads/2024/04/1-29.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-black transition-all duration-300">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">Welcome to Our Yoga Classes</h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">Join us to balance your body and mind</p>
        </div>
      </div>


      <section className="about-section py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-teal-900">Yoga Classes</h2>
        <p className="text-lg text-gray-700 mb-8">
        Discover your yoga journey at Aadi Yoga Center. Choose from private sessions for personalized guidance or join our vibrant group classes. Our expert instructors will help you find your inner peace through yoga.        </p>

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

      {/* Daily Classes Schedule */}
      <h2 className="text-3xl font-semibold text-center my-8">Daily Classes Schedule</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Time</th>
              <th className="border border-gray-300 px-4 py-3">Monday</th>
              <th className="border border-gray-300 px-4 py-3">Tuesday</th>
              <th className="border border-gray-300 px-4 py-3">Wednesday</th>
              <th className="border border-gray-300 px-4 py-3">Thursday</th>
              <th className="border border-gray-300 px-4 py-3">Friday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-3">{item.time}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.monday ? "bg-green-100" : "bg-red-100"}`}>{item.monday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.tuesday ? "bg-green-100" : "bg-red-100"}`}>{item.tuesday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.wednesday ? "bg-green-100" : "bg-red-100"}`}>{item.wednesday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.thursday ? "bg-green-100" : "bg-red-100"}`}>{item.thursday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.friday ? "bg-green-100" : "bg-red-100"}`}>{item.friday || "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8">
        <button onClick={handledailycls} className="bg-teal-500 text-white bg-green-300 py-2 px-6 rounded-lg hover:bg-teal-600 transition-all shadow-lg">Book Classes</button>
      </div>

      {/* Weekend Classes Schedule */}
      <h2 className="text-3xl font-semibold text-center mt-12 mb-6">Weekend Classes Schedule</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Time</th>
              <th className="border border-gray-300 px-4 py-3">Saturday</th>
              <th className="border border-gray-300 px-4 py-3">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {weekendScheduleData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-3">{item.time}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.saturday ? "bg-green-100" : "bg-red-100"}`}>{item.saturday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.sunday ? "bg-green-100" : "bg-red-100"}`}>{item.sunday || "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8">
        <button onClick={handleprivatecls} className="bg-teal-500 text-white bg-green-300 py-2 px-6 rounded-lg hover:bg-teal-600 transition-all shadow-lg">Book Private Class</button>
      </div>
    </div>
  );
};

export default Schedule;
