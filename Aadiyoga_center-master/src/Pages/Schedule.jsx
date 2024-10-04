import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import Classes from '../components/Classes/Classes'
import Contact from '../components/Contact/Contact'

const Schedule = () => {
  return (
    <MainLayout>
        <div className='mt-[120px]'>
        <Classes/>
        <Contact/>
        </div>
    </MainLayout>
  )
}

export default Schedule