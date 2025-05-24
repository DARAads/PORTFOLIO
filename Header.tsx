import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">Portfolio</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-gray-800 hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="text-gray-800 hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="text-gray-800 hover:text-primary transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col py-4">
            <a 
              href="#home" 
              className="px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
