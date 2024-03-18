import React from 'react'
import { Link } from 'react-router-dom'
import fb1 from '../assets/facebook.svg'
import gm1 from '../assets/gmail.svg'

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-white text-base-content lg:flex-row md:flex-row flex-col  lg:justify-around md:justify-around ">
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <div className='flex flex-col gap-2'>
            <Link to='/'> Home </Link>
            <Link to='/contact'> Contacts </Link>
            <Link to='/eligibility'> Eligibility Check </Link>
            <Link to='/faq'> FAQ </Link>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <div className='flex flex-col gap-2'>
            <Link to='/'> Privacy Policy </Link>
            <Link to='/'> Terms of Services </Link>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
          <Link to='#'><img src={fb1} className='h-10 w-10'/></Link>
        <Link to='#'><img src={gm1} className='h-10 w-10'/></Link>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer