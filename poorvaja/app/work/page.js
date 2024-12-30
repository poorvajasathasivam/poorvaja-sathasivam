'use client'

import { useState } from 'react'
import ProjectThumbnail from '../components/project-thumbnail'

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const projects = [
    {
      title: "PREDICTING SUBSTANCE USE BEHAVIOUR",
      image: "/images/glass-smoke.jpg",
      link: "https://github.com/poorvajasathasivam/predicting-substance-use-behaviour",
      category: "PROJECTS"
    },
    {
      title: "SOCIAL MEDIA API DEVELOPEMENT",
      image: "/images/social-media.jpg",
      link: "https://github.com/poorvajasathasivam/chatterhub",
      category: "PROJECTS"
    },
    {
      title: "DIGITAL DREAMS",
      image: "/images/digital-dream.jpg",
      link: "https://github.com/poorvajasathasivam/digital-dreams",
      category: "PROTOTYPES"
    },
    {
      title: "BURNT TOAST",
      image: "/images/burn.jpg",
      link: "https://github.com/poorvajasathasivam/burnt-toast",
      category: "EXPLORATIONS"
    },
    {
        title: "HOLOCRON",
        image: "/images/holocron.webp",
        link: "https://github.com/poorvajasathasivam/holocron",
        category: "PROTOTYPES"
      },
      {
        title: "PREP ME",
        image: "/images/prep-me.png",
        link: "https://github.com/poorvajasathasivam/prep-me",
        category: "PROJECTS"
      }
  ]

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-[12vw] font-light tracking-[0.2em] text-gray-500 mb-8">
            WORK
          </h1>
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            {['ALL', 'PROJECTS', 'PROTOTYPES', 'EXPLORATIONS'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-[0.2em] ${
                  activeCategory === category ? 'text-white' : 'text-gray-500'
                } hover:text-white transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectThumbnail key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

