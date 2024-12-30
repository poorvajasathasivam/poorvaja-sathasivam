'use client'

import Image from 'next/image'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function InfoPage() {
  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-[12vw] font-light tracking-[0.2em] text-gray-500 mb-8">
            INFO
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-black">
            <Image
              src="/images/profile.jpg"
              alt="Profile Image"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
              Hi, I’m Poorvaja. My journey started with a simple curiosity about how things work, which gradually turned into a passion for solving problems with code. 
              Over the years, I’ve had the opportunity to work on diverse projects, ranging from machine learning in medical imaging to building interactive web applications. 
              </p>
              <p>
              While I’ve gained experience in areas like AI, software development, and cloud technologies, I recognize that I’m just beginning to scratch the surface. 
              I’m constantly learning—whether it’s through hands-on projects, exploring new technologies, or engaging with the wider community. 
              I try to approach every challenge with humility, knowing there’s always room for growth and new perspectives.
              </p>
              <p>
              In addition to my technical work, I enjoy sharing what I’ve learned through my blog. Writing has been a great way for me to process my thoughts, reflect on 
              my experiences, and connect with others. 
              </p>
              <p>
              When I’m not coding or writing, I like to experiment with new tools and technologies in my spare time. 
              Whether it’s developing software, exploring generative AI, or collaborating on open-source projects, 
              I strive to push the boundaries of what I can create.
              </p>
              <p>
              Ultimately, I’m grateful for the opportunity to work in a field that continuously challenges and inspires me. I know that the world of technology is ever-evolving, 
              and I’m excited to continue learning, growing, and contributing to the exciting changes ahead.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-8 pt-6">
              <a 
                href="mailto:poorvaja.sathasivam@outlook.com" 
                className="text-gray-400 hover:text-white transition-colors hover-glow p-2 rounded-full"
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="https://linkedin.com/in/poorvaja-satha-sivam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors hover-glow p-2 rounded-full"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/poorvajasathasivam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors hover-glow p-2 rounded-full"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

