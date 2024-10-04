import React from 'react';
// import Contact from '../components/Contact'
import { useNavigate } from 'react-router-dom';

const BookingSection = () => {

  const navigate = useNavigate();

  const redirect = ()=>{
    navigate('/schedule')
  }
  return (
    <section className="bg-white py-12 px-4 md:py-16 md:px-8 lg:py-24">
      <div className="container mx-auto text-center">
        <h5 className="text-sm text-green uppercase font-bold tracking-widest mb-2 md:mb-4">Reserve Your Spot Now</h5>
        <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-green-300 mb-4 md:mb-6" style={{letterSpacing:"1px"}}>
          Want to make booking or <br /> have a question?
        </h2>
        <p className="text-gray-500 mb-6 md:mb-8">
          Call us on 
          <a href="tel:+66963140218" className="text-primary font-bold"> +66 963140218 </a>
          or simply book an appointment...
        </p>
        <a 
        onClick={redirect} 
          className="inline-block bg-green-300   px-6 py-3 rounded-full shadow-lg hover:text-heading text-white transition-shadow duration-300 cursor-pointer"
         
        >
          Write to Us &rarr;
        </a>
      </div>
    </section>
  );
};

export default BookingSection;
