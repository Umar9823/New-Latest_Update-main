import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Privatecls from '../components/Services/Privatecls';
import Contact from '../components/Contact/Contact';

const Normalcls = () => {
  return (
    <MainLayout>
        <Privatecls/>
        <Contact/>
    </MainLayout>
  )
}

export default Normalcls


