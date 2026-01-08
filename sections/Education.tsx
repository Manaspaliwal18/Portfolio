import Image from "next/image";
import { education } from "@/data";

export default function Education() {
  return (
    <section id="education" className="content-view fade-in">
      <h2 className="section-title">Academic Background</h2>
      
      <div className="education-stack">
        {education.map((edu, i) => (
          <div key={i} className="edu-card">
            {/* Top Branding Section */}
            <div className="edu-header">
              <div className="logo-box">
                <Image src={edu.logos.board} alt="" width={42} height={42} />
              </div>
              <div className="edu-info">
                <h3>{edu.board}</h3>
                <p className="muted">{edu.school}</p>
              </div>
            </div>

            {/* Bottom Stats Section */}
            <div className="edu-footer">
              <div className="edu-stat-group">
                {/* Score/Status Stat */}
                <div className="edu-stat">
                  <span className="label">
                    {String(edu.score).includes('%') ? "SCORE" : "STATUS"}
                  </span>
                  <div className="value-row">
                    <span className="value">{edu.score}</span>
                    {edu.pdfLink && (
                      <a href={edu.pdfLink} target="_blank" className="edu-document-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        VERIFY PDF
                      </a>
                    )}
                  </div>
                </div>

                {/* Timeline Stat */}
                <div className="edu-stat">
                  <span className="label">TIMELINE</span>
                  <span className="value">{edu.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}