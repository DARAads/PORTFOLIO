import React from 'react';
import { Code, Database, Brain, Users, BookOpen, Globe } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SkillCard = ({ title, description, icon }: SkillCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      title: 'Programming Languages',
      description: 'Proficient in Python, C, and C++, with a strong foundation in algorithm development and problem-solving. I apply these languages to create efficient solutions for complex computational problems in AI and data science applications.',
      icon: <Code size={36} />,
    },
    {
      title: 'Web Technologies',
      description: 'Familiar with HTML and SQL, enabling me to develop basic web interfaces and manage databases effectively. These skills complement my core programming abilities and allow me to create end-to-end solutions.',
      icon: <Globe size={36} />,
    },
    {
      title: 'Data Analysis',
      description: 'Experienced in data analytics and visualization through my internship at Accenture. I can transform raw data into meaningful insights using various analytical tools and techniques to support decision-making processes.',
      icon: <Database size={36} />,
    },
    {
      title: 'Artificial Intelligence',
      description: 'Developing expertise in AI through my academic program and internship at Cognizant. I\'m particularly interested in machine learning applications and have completed Google\'s Basics of Generative AI course.',
      icon: <Brain size={36} />,
    },
    {
      title: 'Team Collaboration',
      description: 'Strong teamwork abilities demonstrated through organizing the TEZAS 2K25 symposium and participating in the Smart India Hackathon. I effectively collaborate with diverse teams to achieve common goals.',
      icon: <Users size={36} />,
    },
    {
      title: 'Continuous Learning',
      description: 'Committed to ongoing professional development through certifications and workshops, including Power BI certification from Cognifyz, Python workshop at IIT Madras Research Park, and Oracle AI Vector Search Professional certification.',
      icon: <BookOpen size={36} />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I've developed a diverse set of technical and soft skills throughout my academic and professional journey. My expertise in AI and data science is complemented by strong communication abilities and critical thinking skills, allowing me to approach problems holistically.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Technical Proficiencies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">Python</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[90%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">C/C++</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">HTML</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[75%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">SQL</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[70%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">Power BI</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[80%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">Critical Thinking</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">Communication</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <p className="font-medium text-gray-800">Team Work</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
