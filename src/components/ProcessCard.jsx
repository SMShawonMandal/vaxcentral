import React from 'react'

function ProcessCard(props) {
    const { sl, title, description } = props;
    return (
        <div>
            <div className="card xl:w-[250px] xl:h-[250px] lg:w-[220px] lg:h-[280px] md:w-[250px] md:h-[250px] w-[80vw] bg-white  border border-b-8 border-r-8 border-[#4FB2E5]">
                <div className="card-body items-center text-center">
                    <h2 className='card-title text-[#2F6E89]'>{sl}</h2>
                    <h2 className="card-title text-xl text-[#2F6E89]">{title}</h2>
                    <p className='text-[#7A7777]'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProcessCard