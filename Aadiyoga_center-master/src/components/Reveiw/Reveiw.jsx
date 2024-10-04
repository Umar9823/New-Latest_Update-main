import React from "react";

const Review = () => {
  return (
    <div className="py-10 px-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-3xl font-extrabold mb-6">
          What Our Customers Say About Us
        </h2>
        <p className="text-heading mb-10">
          Discover what people are saying about Aadi Yoga Center, their
          experiences, and how we helped them on their journey to wellness.
        </p>

        {/* Google Review Widget */}
        <div
          className="w-full rounded-xl shadow-lg border border-white"
          data-romw-token="eHCoRqYamYIPowpw8v2AjkqXLGnVl5cTfDY5ESV0KpbTHNl4n4"
        ></div>

        {/* Testimonial Footer */}
        <div className="mt-6 text-sm">
          <p className="text-heading">We value every customer’s feedback and strive to provide the best experience possible!</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
