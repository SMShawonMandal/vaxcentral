import React, { useContext } from 'react'
import SectionBanner from '../components/SectionBanner'
import ContactForm from '../components/ContactForm'
import { AuthContext } from '../provider/AuthProvider';

function Contact() {
  const {dataToken} = useContext(AuthContext)
  console.log(dataToken);
  return (
    <div>
      <SectionBanner names='Contact' />
      <ContactForm />
    </div>

  )
}

export default Contact