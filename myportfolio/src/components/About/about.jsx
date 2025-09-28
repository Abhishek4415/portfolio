import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import idcard from "../../assets/idcard/idcard2.png"
//#585956
//#ececec
//#ff5928
//#595351
export default function about() {
  return (
    <section className='flex-row md:flex justify-around '>
      {/* left side */}
      <div className='md:w-[35%] md:py-60 ml-10 mr-10 py-30 md:ml-30'>
        <h1 className='text-4xl'>
          I'M ABHISHEK !

        </h1>
        <span className="text-5xl font-bold text-amber-500">
          <Typewriter
            words={[
              'FULL STACK DEVELOPER',
              'APP DEVELOPER',
              'UI/UX DESIGNER',
              'CODER',
              'PROBLEM SOLVER'
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec]">{cursor}</span>
            )}
          />
        </span>

        <br />
        <br />
        <hr />

        <p className=''>I'm 24 year old, and was born in India'bihar.
          My expertise spans C++, Java, Python, React, Node.js, and MySQL, enabling me to design and build scalable, user-focused applications.
        </p>
        {/* resume  */}
        <a href="https://drive.google.com/file/d/1F0FOs4Mm5vdPS2OTKMpzPWNAqLu7Tjqa/view?usp=sharing"
        target='_blank'
        rel='nodeopen nodereferrer'
        className='py-3 px-10 bg-amber-300 ml-100 text-black rounded-4xl text-[18px] hover:bg-amber-50 transition delay-50 '>
            Download CV
        </a>
      </div>
      {/* right side */}
      <div className="">
        <div className="flex flex-col ml-10 md:mr-10 items-center w-80 h-100 relative md:top-30">
          {/* Strap */}
          <div className='text-2xl '>
            o
          </div>
          {/* Hanging card */}
          <div className="animate-hang swing-origin   drop-shadow-[0px_10px_20px_rgba(130,69,236,0.5)]">
            <img className="rounded-4xl object-cover" src={idcard} alt="ID Card" />
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes hang-swing {
          0%   { transform: rotate(10deg); }
          50%  { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }
        .animate-hang {
          animation: hang-swing 2s ease-in-out infinite;
          transform-origin: top center;
        }
              @media (max-width: 768px) {
      .animate-hang {
        animation: none;
      }
        
       
        
          
      
        `}
      </style>
    </section>
  )
}

