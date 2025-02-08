import React, { useState } from 'react'
export default function Navbar() {
  const [navbar, setNavbar] = useState(true)

  const menu = () => {
    setNavbar(!navbar)
  }
  return (
    <div className='text-white p-10'>
      <div className='hidden lg:flex justify-between items-center text-xl'>
        <div>
          <h1>Home</h1>
        </div>
        <div className='lg:flex lg:gap-10'>
          <h1>Services</h1>
          <h1>Pricing</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </div>
      <div className='lg:hidden text-2xl'>
        <svg onClick={menu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>
        <div className={navbar ? "hidden" : "block"} onClick={menu}>
          <h1>Home</h1>
          <h1>Services</h1>
          <h1>Pricing</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  )
}
