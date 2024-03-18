import React from 'react'
import SectionBanner from '../components/SectionBanner'
import FaqField from '../components/FaqField'

function Faq() {
  return (
    <div>
      <SectionBanner names='Freequently Asked Questions'/>
      <h2 className='text-lg font-bold text-[#2F6E89] flex justify-center items-center'>Vaccine Registration</h2>
      <FaqField />
    </div>
  )
}

export default Faq