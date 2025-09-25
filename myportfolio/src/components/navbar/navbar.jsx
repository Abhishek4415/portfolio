import React from 'react'
import { SiCodersrank } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function navbar() {

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  
  return (
    <div>
      <nav className='flex z-50 text-xl justify-center  space-x-100 py-7'>
        <div className='flex text-2xl md:flex '>
          <SiCodersrank className='text-amber-200' />
          <span className='text-[#f7f7f7] italic font-bold '>Abhishek</span >
        </div>

        <div className='md:flex'>
          <ul className='flex gap-5 text-xl'>
            {menuItems.map((item) => (
              <li key={item.id} className='text-gray-400 hover:text-amber-200 hover:scale-110 transition '>
                <button>
                  {item.label}
                </button>
              </li>
            )
                
            )}
           

          </ul>
        </div>

        <div className='flex gap-4 text-3xl'>
          <a href="https://github.com/Abhishek4415" className="cursor-pointer
           text-gray-200 hover:text-amber-200" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar441/" 
           className='text-gray-200 hover:text-amber-200' target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://leetcode.com/u/abhishek_441/" 
           className='text-gray-200 hover:text-amber-200' target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>


        </div>
      </nav>

    </div>
  )
}
