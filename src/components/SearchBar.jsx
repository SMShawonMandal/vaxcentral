import React from 'react'

function SearchBar() {
    return (
        <div className='h-screen'>
            <div className=' text-lg font-bold text-[#2F6E89] flex gap-4 justify-center items-center'>
                <label htmlFor="">Date of Birth</label>
            </div>
            <form action="" className=''>
                <div className=' h-[15vh]  flex gap-4 justify-center items-center'>
                    <input type="date" className="appearance-none block  bg-[#DCF0FA] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] lg:w-[30vw] md:w-[30vw] w-[50vw] focus:outline-[#2F6E89]" placeholder="Select Date" />

                    <button className='btn btn-sm md:btn-md btn-info  text-md font-bold text-white' type='submit'> Search </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar