import React from 'react'
import projectPic from '../images/projects_1.jpg';
import project_2 from '../images/projects_2.jpg';
import project_3 from '../images/projects_3.jpg';
import project_6 from '../images/projects_6.jpg';
import project_7 from '../images/projects_7.jpg';
import project_8 from '../images/projects_8.jpg';
import project_9 from '../images/projects_9.jpg';
import project_16 from '../images/projects_16.jpg';
import project_18 from '../images/projects_18.jpg';
import project_19 from '../images/projects_19.jpg';
import project_20 from '../images/projects_20.jpg';
import project_21 from '../images/projects_21.jpg';

function Projects() {
    const projects = [
        {
            id: 1,
            src: projectPic,
        },
        {
            id: 2,
            src: project_20,
        },
        {
            id: 3,
            src: project_3,
        },
        {
            id: 4,
            src: project_6,
        },
        {
            id: 5,
            src: project_7,
        },
        {
            id: 6,
            src: project_8,
        },
        {
            id: 7,
            src: project_9,
        },
        {
            id: 8,
            src: project_16,
        },
        {
            id: 9,
            src: project_18,
        },
        {
            id: 10,
            src: project_19,
        },
        {
            id: 11,
            src: project_2,
        },
        {
            id: 12,
            src: project_21,
        },
    ]
    return (
        <div
          name="projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 text-center">
              <p className="text-4xl font-bold inline pb-2 border-b-2 uppercase border-gray-500">
                Projects
              </p>
              <p className="py-6">Here is some Sample</p>
            </div>
        
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {projects.map(({id, src}) => (
                  <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Projects