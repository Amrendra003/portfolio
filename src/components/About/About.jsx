/* eslint-disable no-unused-vars */
import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Full-Stack Web Developer with expertise in the MERN stack, MySQL, and competitive programming.
                      </h2>
                      <p className="mt-6 text-gray-600">
                      I am Amrendra Bahadur Yadav, a passionate Full-Stack Web Developer pursuing a B.Tech in Computer Science and Engineering at IET Lucknow with a CGPA of 7.53. I specialize in building dynamic web applications using the MERN stack and MySQL for data analytics. Additionally, I am an active competitive programmer, mentoring students and excelling in coding contests.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Demonstrated strong leadership and teamwork skills, effectively guiding teams and collaborating to achieve project goals. Excellent in public speaking and time management, ensuring clear communication and efficient task prioritization to meet deadlines.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}