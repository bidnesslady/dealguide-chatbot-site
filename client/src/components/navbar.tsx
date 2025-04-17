import * as React from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <span className="text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" />
            </svg>
          </span>
          <span>DealGuide AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-700 hover:text-primary transition-colors">Features</a>
          <a href="#benefits" className="text-slate-700 hover:text-primary transition-colors">Benefits</a>
          <a href="#audience" className="text-slate-700 hover:text-primary transition-colors">Who It's For</a>
          <a href="#testimonials" className="text-slate-700 hover:text-primary transition-colors">Testimonials</a>
          <a href="#signup">
            <Button variant="default">Get Started</Button>
          </a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-slate-700 hover:text-primary transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white shadow-md absolute w-full left-0 top-full ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
          <a 
            href="#features" 
            className="text-slate-700 hover:text-primary py-2 border-b border-slate-100"
            onClick={closeMenu}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className="text-slate-700 hover:text-primary py-2 border-b border-slate-100"
            onClick={closeMenu}
          >
            Benefits
          </a>
          <a 
            href="#audience" 
            className="text-slate-700 hover:text-primary py-2 border-b border-slate-100"
            onClick={closeMenu}
          >
            Who It's For
          </a>
          <a 
            href="#testimonials" 
            className="text-slate-700 hover:text-primary py-2 border-b border-slate-100"
            onClick={closeMenu}
          >
            Testimonials
          </a>
          <a 
            href="#signup" 
            onClick={closeMenu}
          >
            <Button className="w-full">Get Started</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
