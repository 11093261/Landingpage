import React from 'react'

const Features = () => {
  return (
    <main className='h-[100%] w-[100%] bg-[#ffffff] flex flex-col justify-col items-center '>
      
        <div className='h-[100%]  w-[100%] gap-[2px]   bg-[#ffffff] py-[40px] flex flex-col justify-center items-center '>
            <h2 className='text-black'>Key Features</h2>
            <div className='bg-[lightgray] w-[100%] h-[20vh] flex flex-col justify-center items-center'>
                <h3 className='font-bold'>Sign Language Recognition</h3>
                <p className='w-[80%] text-[darkgray]'>Our AI-powered sign language recognition system accurately identifies hand gesture and translates them into text.</p>

            </div>
            <div className='bg-[lightgray] w-[100%] h-[20vh] flex flex-col justify-center items-center'>
                <h3 className='font-bold'>Real-time Feedback</h3>
                <p className='w-[80%] text-[darkgray]'>Get instant feedback on your sign language skills, helping you improve faster and more effectively.</p>


            </div>
            <div className='bg-[lightgray] w-[100%] h-[20vh] flex flex-col justify-center items-center'>
                <h3 className='font-bold'>Personalized Learning </h3>
                <p className='w-[80%] text-[darkgray]'>Our system adapts to your learning style, providing a personalized experience that suits your needs.</p>
            </div>
            <div className='h-[50%] w-[100%] flex flex-col items-center justify-center'>

                <button className='bg-[lightblue] hover:bg-[darkblue] w-[30vw] text-[16px]  rounded-[5px] border-none h-[6vh] text-[white]'>Learn More</button>
            </div>

        
        </div>
    </main>
  )
}

export default Features
