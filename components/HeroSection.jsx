import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
    const HandleButton = () => navigate("/Language")

  return (
    <main className='h-[100%] py-[20px]  flex w-[100%] flex flex-col bg-[blue-500] justify-center items-center'>
      
        <div className='h-[100%] py-[40px] text-[white] text-center  flex w-[100%] bg-[#87ceeb] flex flex-col justify-center items-center'>
            <h1 className='text-[30px] md:text-[20px] font-bold mb-[10px] w-[80%]'>Break Down Barriers with Sign Language Recognition</h1>
            <h2 className='text-[16px] w-[80%] font-bold md:text-[20px] '>Learn, practice, and communicate with our innovative technology </h2>
            <button onClick={HandleButton} className="buttons md:w-[20vw]">Try Now</button>
        
        </div>
    </main>
  )
}

export default HeroSection
