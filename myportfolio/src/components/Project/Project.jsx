import React from 'react'
import { projects } from "../../content";
import Tilt from 'react-parallax-tilt';
export default function
  Project() {
  return (
    <section
      className='pb-24 px-[12vw] md:px-[7vw] lg:px-[15vw] relative'
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECT</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>

      </div>

      {/* proejcts grid*/}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-around '>

        {projects.map((project) => (

          <div
            key={project.id}
            className='border boder-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-purple-500 hover:-translate-y-5 transition delay-200 '>
            <Tilt>
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-65 object-cover p-4 rounded-[25px] hover:scale-120 hover:border border-white'
                />
              </div>
            </Tilt>
            <div className='p-5'>
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p>{project.description}</p>

              {/* mao tags */}
              <div className="mt-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block mb-2   bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1.5 mr-2  hover:bg-amber-50 hover:text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>


        ))}
      </div>
      
    </section>
  )
}
