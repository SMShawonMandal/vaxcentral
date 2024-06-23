import React, { useContext } from 'react'
import SectionBanner from '../components/SectionBanner'
import ContactForm from '../components/ContactForm'
import { AuthContext } from '../provider/AuthProvider';

function Contact() {
  const { dataToken } = useContext(AuthContext)
  console.log(dataToken);
  return (
    <div className='w-full pb-10 h-[100vh]'>
      <SectionBanner names='Contact' />
      <div className='p-10'>
        <ContactForm />
      </div>
    </div>

  )
}

export default Contact