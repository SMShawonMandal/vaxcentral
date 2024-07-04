import React from 'react'
import ProcessCard from './ProcessCard'

function LandingBody() {
    return (
        <div className='bg-[#DCF0FA] lg:mx-[5vw] 2xl:mx-[15vw] md:mx-[10vw]  my-20 p-16 rounded-lg'>
            <h2 className='lg:text-3xl md:text-3xl text-2xl text-center pb-16 font-bold text-[#2F6E89]'> Process of receiving vaccine </h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 justify-center justify-items-center'>
                <ProcessCard sl='1' title='Select Vaccine' description='Select the vaccine you want.' />
                <ProcessCard sl='2' title='Registration' description=' in person at the vaccination center on the specified date with the vaccine card.' />
                <ProcessCard sl='3' title='Notification' description='After registering online, you can go the nearest vaccination center' />
                <ProcessCard sl='4' title='Vaccine' description='You have to appear in person at the vaccination center.' />
            </div>
        </div>

    )
}

export default LandingBody