"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        {/* Branding - Flexible font size */}
        <Link href="/" className="nav-logo">
          <span className="logo-main">M</span>
          <span className="logo-accent">.</span>
          <span className="logo-sub">P</span>
        </Link>

        {/* Right Section */}
        <div className="nav-right">
          {/* Status Pill - Responsive classes */}
          <div className="status-pill">
            <span className="pulse-dot"></span>
            <span className="status-text hide-mobile">Available Globally</span>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="menu-toggle"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay fade-in">
          <Link href="#projects" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)}>Tech Stack</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}