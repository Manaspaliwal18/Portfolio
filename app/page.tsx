"use client";
import { useState } from "react";
import Hero from "@/sections/Hero";
import SocialLinks from "@/sections/SocialLinks";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case "projects": return <Projects />;
      case "skills": return <Skills />;
      case "experience": return <Experience />;
      case "education": return <Education />;
      case "certificates": return <Certificates />;
      case "contact": return <Contact />;
      default: return null;
    }
  };

  return (
    <main>
      <Hero />

      {!activeTab ? (
        <>
          {/* DASHBOARD GRID */}
          <div className="portal-grid fade-in">
            <div className="portal-card" onClick={() => setActiveTab("projects")}>
              <div className="card-icon">📊</div>
              <h3>Case Studies</h3>
              <p className="muted">Detailed analytics pipelines & business impact.</p>
              <span className="view-tag">Explore Work</span>
            </div>

            <div className="portal-card" onClick={() => setActiveTab("skills")}>
              <div className="card-icon">🛠️</div>
              <h3>Tech Stack</h3>
              <p className="muted">Proficiency in SQL, Python, & BI Tools.</p>
              <span className="view-tag">View Tools</span>
            </div>

            <div className="portal-card" onClick={() => setActiveTab("experience")}>
              <div className="card-icon">💼</div>
              <h3>Experience</h3>
              <p className="muted">Professional journey & leadership roles.</p>
              <span className="view-tag">See Roles</span>
            </div>

            <div className="portal-card" onClick={() => setActiveTab("education")}>
              <div className="card-icon">🎓</div>
              <h3>Education</h3>
              <p className="muted">B.Tech in IT & Academic background.</p>
              <span className="view-tag">View Background</span>
            </div>

            <div className="portal-card" onClick={() => setActiveTab("certificates")}>
              <div className="card-icon">📜</div>
              <h3>Certificates</h3>
              <p className="muted">Google Cloud & Industry credentials.</p>
              <span className="view-tag">See Honors</span>
            </div>

            <div className="portal-card" onClick={() => setActiveTab("contact")}>
              <div className="card-icon">✉️</div>
              <h3>Contact</h3>
              <p className="muted">Available for global remote collaboration.</p>
              <span className="view-tag">Get in Touch</span>
            </div>
          </div>

          {/* MOVED CTA SECTION: NOW BELOW DASHBOARD */}
          <SocialLinks />
        </>
      ) : (
        <div className="content-view fade-in">
          <button className="back-btn" onClick={() => setActiveTab(null)}>
            ← Back to Dashboard
          </button>
          <div className="active-container">
            {renderContent()}
          </div>
        </div>
      )}
    </main>
  );
}