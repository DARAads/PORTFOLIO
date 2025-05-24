import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                Profile Image
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Education & Background</h3>
            <p className="text-gray-700 mb-4">
              I am currently pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at R.M.K College of Engineering and Technology (2022-2026), where I maintain a strong academic record with 74.9%. My educational journey includes completing Class XII at Narayana Junior College, Nellore (2020-2022) with 77.8%, and Class X at Bhashyam High School, Kavali (2019-2020) with an impressive 90.3%.
            </p>
            <p className="text-gray-700 mb-4">
              My professional development includes valuable internships at prestigious organizations: Power BI Intern at Cognifyz Technologies, Artificial Intelligence at Cognizant, and Data Analytics and Visualization at Accenture. These experiences have strengthened my practical skills and industry knowledge.
            </p>
            <p className="text-gray-700 mb-6">
              Beyond academics, I've enhanced my skills through various certifications including Power-BI certification from Cognifyz, SQL basics from W3 Schools, Python workshop at IIT Madras Research Park, Google's Basics of Generative AI, Oracle AI Vector Search Professional, and Design Thinking from NPTEL. I'm also multilingual, speaking Telugu (native), Hindi (advanced), and both English and Tamil at intermediate levels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center"
              >
                Get In Touch
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-primary border border-primary rounded-md hover:bg-gray-50 transition-colors text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
