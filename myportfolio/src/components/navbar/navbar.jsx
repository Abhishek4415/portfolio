import React from 'react'
import { SiCodersrank } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function navbar() {
  return (
    <div>
      <nav className='flex mt-6 ml-10 text-2xl justify-center'>
        <SiCodersrank className='text-amber-200' />
        <p className='text-[#f7f7f7] italic font-bold '>Abhishek?Kumar</p>
        <div className=''>
          <ul className='flex gap-5 ml-70 '>
            <li>About</li>
            <li>Experience</li>
            <li>Project</li>
            <li>Skills</li>
            <li>Contact</li>

          </ul>
        </div>
        
        <div className='ml-100 flex gap-4'>
          <FaGithub />
          <FaLinkedin />

        </div>
      </nav>

    </div>
  )
}
