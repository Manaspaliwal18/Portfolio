import Image from "next/image";
import { skillGroups } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="content-view fade-in">
      <h2 className="section-title">Technical Ecosystem</h2>
      
      <div className="skills-wrapper">
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-category-block">
            <h3 className="category-label">{group.category}</h3>
            
            <div className="icon-grid">
              {group.skills.map((skill, j) => (
                <div key={j} className="skill-item">
                  <div className="logo-container">
                    <Image 
                      src={skill.logo} 
                      alt={skill.name} 
                      width={32} 
                      height={32} 
                    />
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}