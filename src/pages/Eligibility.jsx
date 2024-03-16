import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionBanner from '../components/SectionBanner'
import SearchBar from '../components/SearchBar'

function Eligibility() {
  return (

    <div>
      {/* Header and footer comes from Main.jsx coz it is layout of the page  */}
      <SectionBanner names='Check Eligibility' />
      <SearchBar />
    </div>
  )
}

export default Eligibility