import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Hello, I'm <span className="text-primary">Dara Manish Kumar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          I'm an AI & Data Science student with a strong foundation in Python, C, and C++. I'm disciplined and hardworking, committed to learning and applying knowledge effectively in a professional environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-primary border border-primary rounded-md hover:bg-gray-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
