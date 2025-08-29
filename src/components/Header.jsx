import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import React, { useState } from "react";

const navLink = ({ isActive }) =>
  isActive
    ? 'text-primary-600 dark:text-primary-400 font-semibold'
    : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-100 dark:border-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          My<span className="text-primary-600 dark:text-primary-400">-Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLink} end>Home</NavLink>
          <NavLink to="/projects" className={navLink}>Projects</NavLink>
          <NavLink to="/about" className={navLink}>About</NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Resume
          </a>
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon (☰)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 flex flex-col gap-3">
          <NavLink to="/" className={navLink} end onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/projects" className={navLink} onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/about" className={navLink} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLink} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}
