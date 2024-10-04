import React from 'react';
import Hero from '../components/Hero/Hero';
import Cards from '../components/Cards/Cards';
import Features from '../components/Features/Features';
import MainLayout from '../Layouts/MainLayout';
import Facts from '../components/Facts/Facts';
import Courses from '../components/Courses/Courses';
import TeamComponent from '../components/Team/Team';
import Newsletter from '../components/Newslatter/Newsletter'
import Contact from '../components/Contact/Contact';
import About from '../components/Aboutyogacenter/Yogacenter';
import Reveiw from '../components/Reveiw/Reveiw';





const Home = () => {
  return (
    <MainLayout>
    <Hero />
       <Cards />
       <Facts />
       <Features />
       <About/>
       <Courses />
       <Reveiw/>
       <TeamComponent />
       <Newsletter />
       <Contact />
    </MainLayout>
  );
};

export default Home;
