import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  
  const navigate = useNavigate()
  const HandleNav = ()=> navigate("/Language") 
  const Handlescroll = () =>{
    window.scrollTo({
      left:"200",
      behavior:"smooth"
      
    })
   
  }
  return (
    <header className='flex flex-col h-[10vh] bg-[#3498db] items-center w-[100%]'>
        <div className='flex flex-row justify-between gap-[5px] px-[20px] items-center h-[10vh] w-[80%]'>
          <img src="" alt="" />
            <nav className='flex flex-row  text-[20px] gap-[2px] justify-between items-center w-[80%]'>
              <a  className='text-[#333333] text' href="">Home</a>
              <a onClick={Handlescroll} className='text-[#333333] text' href="">About</a>
              <a className='text-[#333333] text' href="">Contact</a>
              


            </nav>
                
                <button onClick={HandleNav} className='buttons cursor-pointer'>Try Now</button>
            
            

        </div>
      
    </header>
  )
}

export default Header
