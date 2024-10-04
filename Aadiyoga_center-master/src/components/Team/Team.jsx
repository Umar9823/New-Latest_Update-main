import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram, faTwitter, faGoogle, faLinkedin, faLine } from '@fortawesome/free-brands-svg-icons';

const TeamComponent = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-800 sm:text-6xl">Our Dedicated Team</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the passionate and experienced instructors who guide you on your journey to wellness and self-discovery.
        </p>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 xl:grid-cols-3np">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col">
            <img
              src="https://aadiyogacenter.com/wp-content/uploads/2024/05/IMG_1668-scaled-e1714829380536.jpg"
              alt="Yogi Aadi"
              className="w-full h-72 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Yogi Aadi</h3>
                <p className="text-gray-500">Founder & Lead Teacher</p>
                <p className="mt-4 text-gray-600">
                  With over a decade of experience, Yogi Aadi is our founder and lead teacher. He holds a Master's degree in Yoga and is a certified RYT 200 Hr from Yoga Alliance USA. His compassionate guidance and deep knowledge help students find inner peace and physical vitality.
                </p>
              </div>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 text-2xl">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="text-green-600 hover:text-green-700 text-2xl">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 text-2xl">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-700 text-2xl">
                  <FontAwesomeIcon icon={faLine} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-2 duration-300">
          <div className="flex flex-col">
            <img
              src="https://aadiyogacenter.com/wp-content/uploads/2024/05/IMG_8848-scaled-e1714677209763.jpg"
              alt="Yogi Deepak"
              className="w-full h-72 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Yogi Deepak</h3>
                <p className="text-gray-500">Ashtanga Yoga & Sound Healing</p>
                <p className="mt-4 text-gray-600">
                  An expert in Ashtanga yoga and sound healing, Yogi Deepak brings a unique blend of strength and tranquility to every session. His profound knowledge and passion help create a transformative experience for all.
                </p>
              </div>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-600 text-2xl">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-red-500 hover:text-red-600 text-2xl">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-800 text-2xl">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-700 text-2xl">
                  <FontAwesomeIcon icon={faLine} />
                </a>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default TeamComponent;
