import React, { useState } from "react";
import { BiMenu, BiX, BiChevronDown } from "react-icons/bi"; // Import Chevron icon for dropdowns
import { navigation } from "./Navbar";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls the mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // Controls active dropdown

  const toggleDropdown = (index) => {
    // Toggle the dropdown based on index
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav>
      {/* Menu Icon Toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-4xl text-heading ml-[10px] lg:hidden z-50"
      >
        {isOpen ? <BiX /> : <BiMenu />} {/* Show BiX when open, BiMenu when closed */}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen ? "max-h-screen p-8" : "max-h-0 p-0"
        } flex flex-col absolute w-full bg-white top-20 left-0 shadow-lg space-y-6 overflow-hidden transition-all duration-300 lg:hidden`}
      >
        {navigation.map((item, index) => (
          <li key={index} className="px-4">
            <div
              className="flex items-center justify-between"
              onClick={() => item.submenu && toggleDropdown(index)} // Toggle dropdown for items with submenu
            >
              <a
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="block text-lg font-medium text-gray-800 hover:text-gray-600"
              >
                {item.name}
              </a>
              {item.submenu && (
                <BiChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    activeDropdown === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </div>
            {/* Dropdown Menu */}
            {item.submenu && activeDropdown === index && (
              <ul className="pl-4 mt-2 space-y-2">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.href}
                      onClick={() => setIsOpen(false)} // Close menu on link click
                      className="block text-md font-medium text-gray-600 hover:text-gray-800"
                    >
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
