import Image from "next/image";
import { certificates } from "@/data";

export default function Certificates() {
  return (
    <section id="certificates" className="content-view fade-in">
      <h2 className="section-title">Certifications</h2>
      
      <div className="cert-stack-container">
        {certificates.map((cert, i) => (
          <div key={i} className="cert-item-card">
            {/* Professional Left-Aligned Group */}
            <div className="cert-identity">
              <div className="cert-logo-wrapper">
                <Image 
                  src={cert.logo} 
                  alt={cert.issuer} 
                  width={42} 
                  height={42} 
                  className="cert-logo-img"
                />
              </div>
              <div className="cert-text-group">
                <span className="cert-issuer-tag">{cert.issuer}</span>
                <h3 className="cert-title-main">{cert.title}</h3>
                <span className="cert-year-muted">{cert.year}</span>
              </div>
            </div>
            
            <a 
              href={cert.credentialLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="credential-btn"
            >
              View Credential
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}