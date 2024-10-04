import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";

const Product = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 mb-10 mt-[120px] text-center ">
        {/* Header Text */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          We Are Launching Soon Our Yoga Product
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8">
          Discover the perfect balance of comfort and support with our exclusive yoga products.
        </p>

        {/* Image Container with Hover Effect */}

        <div className="flex gap-5">
        <div className="relative group w-full md:w-1/2 lg:w-1/3 mx-auto mb-12 ">
          <img
            src="https://img.freepik.com/free-photo/happy-beautiful-yogi-woman-holding-her-mat-close-up_1163-4341.jpg?ga=GA1.1.2135881279.1702648427&semt=ais_hybrid" // Replace with your image URL
            alt="Yoga Mat"
            className="w-full h-auto rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-30"
          />
          {/* Hover Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            {/* Animated Yoga Mat Text - Four Copies */}
            <div className="bg-green-600 text-heading text-xl font-semibold py-3 px-6 rounded-lg animate-bounce mb-[120px]">
              Yoga Mat
            </div>
           
          </div>
        </div> <div className="relative group w-full md:w-1/2 lg:w-1/3 mx-auto mb-12">
          <img
            src="https://img.freepik.com/free-photo/happy-beautiful-yogi-woman-holding-her-mat-close-up_1163-4341.jpg?ga=GA1.1.2135881279.1702648427&semt=ais_hybrid" // Replace with your image URL
            alt="Yoga Mat"
            className="w-full h-auto rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-30"
          />
          {/* Hover Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            {/* Animated Yoga Mat Text - Four Copies */}
            <div className="bg-green-600 text-heading text-xl font-semibold py-3 px-6 rounded-lg animate-bounce mb-[120px]">
              Yoga Mat
            </div>
           
          </div>
        </div> <div className="relative group w-full md:w-1/2 lg:w-1/3 mx-auto mb-12">
          <img
            src="https://img.freepik.com/free-photo/happy-beautiful-yogi-woman-holding-her-mat-close-up_1163-4341.jpg?ga=GA1.1.2135881279.1702648427&semt=ais_hybrid" // Replace with your image URL
            alt="Yoga Mat"
            className="w-full h-auto rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-30"
          />
          {/* Hover Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            {/* Animated Yoga Mat Text - Four Copies */}
            <div className="bg-green-600 text-heading text-xl font-semibold py-3 px-6 rounded-lg animate-bounce mb-[120px]">
              Yoga Mat
            </div>
           
          </div>
        </div>
        </div>
       
      </div>

      <Contact/>
    </MainLayout>
  );
};

export default Product;
