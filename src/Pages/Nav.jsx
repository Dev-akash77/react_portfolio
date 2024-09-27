import React from 'react'
import { PiTelegramLogoDuotone } from "react-icons/pi";
const Nav = () => {
  return (
    <div className='flex items-center justify-center absolute top-0 z-50 h-[5rem] w-screen'>
     <div className="container flex items-center justify-between py-2">
     <div className="lgogo w-[5rem] cursor-pointer"><img src="./images/name-logo-white.svg" alt="logo images" className='overflow-hidden'/></div>
     <div className='text-3xl cursor-pointer text-white'><PiTelegramLogoDuotone /></div>
     </div>
    </div>
  )
}

export default Nav