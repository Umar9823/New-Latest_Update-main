import React from "react";
import MainLayout from "../Layouts/MainLayout";
// import Normalclass from '../components/Services/Normalcls';
import Contact from '../components/Contact/Contact';
import ClassBooking from '../components/Services/classbooking/ClassBooking'

const Normalcls = () => {
  return (
    <MainLayout>
        {/* <Normalclass/> */}
        <ClassBooking/>
        <Contact/>
    </MainLayout>
  )
}

export default Normalcls


