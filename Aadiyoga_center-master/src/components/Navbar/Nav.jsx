import React from "react";
import { navigation } from "./Navbar";

const Nav = () => {
  return (
    <nav className="ml-[70px]">
      <ul className="flex gap-x-[42px]">
        {navigation.map((item, index) => (
          <li key={index} className="relative group">
            {/* Wrap the link in a div to increase hover area */}
            <div className="hover:text-gray-600">
              <a href={item.href}>{item.name}</a>
            </div>
            {item.submenu && (
              <ul
                className="
                  absolute left-0 mt-0 hidden
                  group-hover:block bg-white shadow-lg
                  p-2 group-hover:animate-fade-in"
                // z-index ensures dropdown is on top
                style={{ zIndex: 10, pointerEvents: 'auto' }}
                // Prevents dropdown from disappearing
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="p-2 hover:bg-gray-200"
                    style={{ minWidth: "150px" }}
                  >
                    <a href={subItem.href}>{subItem.name}</a>
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

export default Nav;
