import React from 'react'
import { PiTelegramLogoDuotone } from "react-icons/pi";
const Nav = () => {
  return (
    <div className='flex items-center justify-center absolute top-0 w-screen'>
     <div className="container flex items-center justify-between py-2">
     <div className="lgogo w-[5rem] cursor-pointer"><img src="/images/name-logo.svg" alt="logo images" className='overflow-hidden'/></div>
     <div className='text-3xl cursor-pointer'><PiTelegramLogoDuotone /></div>
     </div>
    </div>
  )
}

export default Nav