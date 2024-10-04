import React from "react";
import { cards } from "./Carddata";

const Cards = () => {
  return (
    <section
      className="bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]" >
        <div className="flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px] z-10 lg:-mt-[77px] mx-auto">
          <div
            className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px]  rounded-md max-h-[282px] " 
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className="text-lg lg:text-xl xl:text-2xl lg:leading-8 font-bold text-heading mr-8">
                {cards.heading1}
              </h4>
              <h2 className="h2 text-stroke-2">1</h2>
            </div>
            <div>
              <img src={cards.img1} alt="" />
            </div>
          </div>
          <div
            className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className="text-lg lg:text-xl xl:text-2xl lg:leading-6 font-bold text-heading mr-8">
                {cards.heading2}
              </h4>
              <h2 className="h2 text-stroke-2">2</h2>
            </div>
            <div>
              <img src={cards.img2} alt="" />
            </div>
          </div>
        </div>
        <div
          className="bg-white w-full flex-1 max-w-[580px] mx-auto p-[14px] lg:p-[26px] mt-4 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start max-h-[282px]"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="max-w-[240px]">
            <div className="flex items-center mb-4 lg:mb-8">
              <h4 className="text-lg lg:text-xl xl:text-2xl lg:leading-7 font-bold text-heading mr-8">
                {cards.heading3}
              </h4>
              <h2 className="h2 text-stroke-2">3</h2>
            </div>
            <p className="mb-4 lg:mb-3">{cards.description}</p>
            <a
              href="#"
              className="text-xs lg:text-sm font-bold uppercase text-heading"
            >
              {cards.anchorText}
            </a>
          </div>
          <div>
            <img src={cards.img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
