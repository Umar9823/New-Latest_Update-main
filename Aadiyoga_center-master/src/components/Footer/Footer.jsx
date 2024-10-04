import React from "react";
import Logo from "../../assets/img/logo.png";
import { FaInstagram, FaFacebook, FaWhatsapp, FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Google Map Section */}
      <section className="w-full max-w-4xl h-64 lg:h-96 mb-10 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.706708421221!2d100.55458511082671!3d13.73619839759858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f9e256a5ce1%3A0x837a664190ab5c13!2sAadi%20Yoga%20%26%20Pilates%20Center!5e0!3m2!1sen!2sin!4v1727233079654!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-900 text-heading py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer Brand Section */}
            <div>
              <div className="flex items-center mb-4">
                {/* Replace with your logo */}
                <img src={Logo} alt="Logo" className="w-12 h-12 mr-3" />
                <span className="text-lg font-bold text-white">
                  Aadi Yoga Center
                </span>
              </div>
              <p className="text-sm text-gray-200">
                Discover tranquility at Aadi Yoga Center in Thailand. From yoga
                classes to therapy and sound healing, find your path to wellness
                with us.
              </p>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400 text-gray-200">
                    Yoga Classes (Private & Group)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 text-gray-200">
                    Yoga Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 text-gray-200">
                    Kids Yoga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 text-gray-200">
                    Yoga Teacher
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 text-gray-200">
                    Training Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 text-gray-200">
                    Sound Healing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Get in Touch</h3>
              <p className="text-sm text-gray-200 mb-3">
                27, 3 Sukhumvit 10 Alley, Khlong Toei, Khlong Toei, Bangkok 10110, Thailand
              </p>
              <p className="text-sm text-gray-200 mb-3">Phone: +66 963 340 218</p>
              <p className="text-sm text-gray-200">Email: info@aadiyogacenter.com</p>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              &copy; 2024 aadiyogacenter.com. All Rights Reserved. | Design & Develop by{" "}
              <a href="#" className="hover:text-gray-400 text-gray-200 font-extrabold">
                Info Minds
              </a>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Social Media Icons */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-green w-6 h-6 hover:text-gray-400" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaLine className="text-green w-6 h-6 hover:text-gray-400" />
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green w-6 h-6 hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
