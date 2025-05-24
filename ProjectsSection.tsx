import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 overflow-hidden">
        {/* Replace with actual image */}
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
          {image || 'Project Image'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary/90 transition-colors"
            >
              Live Demo
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-primary text-sm border border-primary rounded hover:bg-gray-50 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Explosion Threat Zone Prediction',
      description: 'This project predicts explosion threat zones in oil and gas industries using machine learning and geospatial analysis. It analyzes hazardous material data and environmental factors to identify high-risk areas. GIS mapping and heatmaps visualize threat zones for proactive safety measures. Selected for the first round of Smart India Hackathon.',
      image: '',
      tags: ['Machine Learning', 'Geospatial Analysis', 'GIS Mapping', 'Risk Assessment'],
    },
    {
      title: 'Patient Adherence Prediction',
      description: 'A healthcare analytics project to predict patient adherence to specialty pharmaceutical treatments using historical and behavioral data. The system identifies non-adherent patients early for targeted interventions, improving treatment outcomes and reducing healthcare costs.',
      image: '',
      tags: ['Data Analytics', 'Healthcare', 'Predictive Modeling', 'Python'],
    },
    {
      title: 'AI & DS Symposium (TEZAS 2K25)',
      description: 'Organized a department symposium focused on Artificial Intelligence and Data Science, coordinating technical sessions, workshops, and competitions. This project demonstrated leadership, event management, and technical knowledge sharing capabilities.',
      image: '',
      tags: ['Event Management', 'AI & DS', 'Leadership', 'Technical Coordination'],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here are some of the key projects I've worked on. Each project represents my application of AI and data science concepts to solve real-world problems. These projects showcase my technical skills and my ability to deliver meaningful solutions.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/DARAads" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors inline-block"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
