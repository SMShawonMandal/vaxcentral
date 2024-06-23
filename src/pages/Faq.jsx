import React from 'react'
import SectionBanner from '../components/SectionBanner'
import FaqField from '../components/FaqField'

function Faq() {
  return (
    <div>
      <SectionBanner names='Freequently Asked Questions' />
      <h2 className='text-lg font-bold text-[#2F6E89] flex justify-center items-center'>Vaccine Registration</h2>
      <div className='lg:w-[60%] md:w-[80%] w-[96%] m-auto'>
        <FaqField />
      </div>
    </div>
  )
}

export default Faq