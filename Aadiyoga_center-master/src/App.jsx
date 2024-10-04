// import Hero from "./components/Hero";
// import Cards from "./components/Cards";
// import Facts from "./components/Facts";
// import Features from "./components/Features";
// import Courses from "./components/Courses";
// import Pricing from "./components/Pricing";
// import Newsletter from "./components/Newsletter";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Classes from './components/Classes'
// import AboutUs from "./components/Pages/Aboutus";

import Aos from "aos";
import "aos/dist/aos.css";

// function App() {
//   Aos.init({
//     duration: 1400,
//     offset: 100,
//     once: true,
//   });
//   return (
//     <div className="overflow-hidden">
//       <Hero />
//       <Cards />
//       <Facts />
//       <Features />
//       <Courses />
//       <Classes />
//       <Newsletter />
//       <Contact />
//       <Footer />

//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import ProtectedRoute from './components/protectedroute/ProtectedRoute'
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ScrollTop from './components/ScrollTop/ScrollTop'
import Schedule from "./Pages/Schedule";
import YogaClasses from "./Pages/Yogaclass";
import Normalcls from "./Pages/Normalcls";
import Privatecls from "./Pages/Privatecls";
import Pilates from './components/Services/Pilates';
import Kidsyoga from "./components/Services/Kidsyoga";
import YogaTherapy from "./components/Services/YogaTherapy";
import Soundhealing from "./components/Services/Soundhealing";
import Trainingcourses from "./components/Services/Trainingcourses";
import Services from "./components/Services/Services";
import Product from "./components/Product/Product";
// import ScheduleForm from "./components/AddSchedule/ScheduleForm";
import AuthForm from "./Pages/signup_signinform/AuthForm";
import SigninForm from "./Pages/signup_signinform/SignInform";

const App = () => {
  Aos.init({
    duration: 1400,
    offset: 100,
    once: true,
  });
  return (
    <AuthProvider>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/yogaclass" element={<YogaClasses />} />
          <Route path="/privateclass" element={<Privatecls />} />
          <Route path="/pilates" element={<Pilates />} />
          <Route path="/kidsyoga" element={<Kidsyoga />} />
          <Route path="/yogatherapy" element={<YogaTherapy />} />
          <Route path="/soundhealing" element={<Soundhealing />} />
          <Route path="/trainingcourse" element={<Trainingcourses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/signin" element={<SigninForm />} />
          {/* Conditionally render Normalcls route based on authentication */}
          <Route path="/normalclass" element={<ProtectedRoute element={<Normalcls />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
