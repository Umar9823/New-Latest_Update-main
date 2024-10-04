import React from 'react';
import Nav from '../components/Header/Header'; // Adjust the import path as necessary
import NavMobile from '../components/Navbar/NavMobile'; // Adjust the import path as necessary
import Footer from '../components/Footer/Footer'; // Import Footer
import Header from '../components/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Desktop Navigation */}
      <div className=" w-full max-w-[90vw] lg:max-w-[1170px] mx-auto">
        <Header />
      </div>

      {/* Mobile Navigation */}
      {/* <div className="block lg:hidden">
        <NavMobile />
      </div> */}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
