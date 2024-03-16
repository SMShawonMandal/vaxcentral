import React from 'react'
import SearchBar from './SearchBar';

function SectionBanner(props) {
    const { names } = props;
    return (

        <div>
            <div className='h-[20vh] w-full bg-gradient-to-b from-[#e0f2fa] to-white  flex justify-center items-center lg:text-3xl md:text-3xl text-2xl font-bold text-[#2F6E89]'>
                {names}
            </div>
        </div>
    )
}

export default SectionBanner