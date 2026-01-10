export const profile = {
  name: "Manas Paliwal",
  role: "Data Analyst | Product & Business Analytics",
  summary: "Analytics-driven decision making across operations, logistics, and consumer behavior.",
  location: "Based in India — open to global remote collaboration across IST / CET / EST",
};

export const projects = [
  {
    title: "Olist Logistics Performance Command Center",
    logo: "/logos/olist-icon.png", 
    github: "https://github.com/manaspaliwal/olist-logistics", 
    liveLink: "https://app.powerbi.com/your-report-link", // Add your Power BI link here
    problem: "Unpredictable delivery delays in large-scale e-commerce operations.",
    approach: "Built an end-to-end analytics pipeline on 110,000+ orders to identify delay root causes.",
    impact: "Revealed that ~80% of delays were caused by 20% of sellers, enabling focused intervention.",
    // Minimalist tags for the UI
    tech: ["Python", "SQL", "Jupyter", "Power BI"],
    // Detailed context for the project body
    detailedTech: "Python (Pandas, NumPy), SQL, EDA, Business & Operations Analytics, Power BI", 
  },
  {
    title: "PocketBuddy — Daily Budget Intelligence Tool",
    logo: "/logos/pocketbuddy.png",
    github: "https://github.com/manaspaliwal/pocketbuddy",
    problem: "Students struggle to convert monthly budgets into safe daily spending decisions.",
    approach: "Designed a Python-based budgeting system using datetime logic and visual feedback.",
    impact: "Turned static budgets into actionable daily insights.",
    // Minimalist tags for the UI
    tech: ["Python", "Jupyter", "Matplotlib"],
    // Detailed context for the project body
    detailedTech: "Python (Pandas, NumPy), Jupyter Notebook, Matplotlib, Analytical Thinking",
  },
];

export const skillGroups = [
  {
    category: "Languages & Core",
    skills: [
      { name: "Python", logo: "/logos/Python.svg.png" },
      { name: "SQL", logo: "/logos/sql.png" },
    ]
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "Pandas", logo: "/logos/pandas.png" },
      { name: "NumPy", logo: "/logos/numpy (1).png" },
      { name: "Matplotlib", logo: "/logos/matplotlib.png" },
      { name: "Seaborn", logo: "/logos/seaborn(1).png" },
    ]
  },
  {
    category: "Analysis & Process",
    skills: [
      { name: "EDA", logo: "/logos/eda-icon.png" },
      { name: "Data Cleaning", logo: "/logos/cleaning-icon.png" },
      { name: "Operations Analytics", logo: "/logos/ops-icon.png" },
      { name: "Business Strategy", logo: "/logos/strategy-icon.png" },
    ]
  },
  {
    category: "Visualization & Tools",
    skills: [
      { name: "Power BI", logo: "/logos/powerbi.png" },
      { name: "Jupyter", logo: "/logos/jupyter.png" },
      { name: "Excel", logo: "/logos/excel.png" },
    ]
  }
];

export const education = [
  {
    board: "Rajasthan Board of Secondary Education",
    school: "L. Soldiers Senior Secondary School, Udaipur",
    year: "2024",
    score: "86.60%",
    pdfLink: "/logos/class-12-marksheet.pdf",
    logos: {
      board: "/logos/rbse.png",
      school: "/logos/lss-school.png",
    },
  },
  {
    board: "Bachelor of Technology (B.Tech) in AI & Data Science",
    school: "University College of Engineering and Technology, Bikaner",
    year: "2024 — Present", // Or your specific batch
    //score: "Pursuing", // Or your current CGPA
    pdfLink: "/files/btech-transcript.pdf", // Path to your PDF in the public folder
    logos: {
      board: "/logos/btu (1).png", // Path to your Uni logo
      school: "/logos/btu (1).png",
        },
    },
];

export const certificates = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2024",
    logo: "/logos/google-logo.png", // Ensure you have a Google logo in your public folder
    credentialLink: "https://your-google-credential-link.com" 
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    year: "2024",
    logo: "/logos/ibm.png",
    credentialLink: "https://your-ibm-credential-link.com"
  },
  // ... other existing certificates
];
export const contactInfo = {
  email: "manaspaliwal18@gmail.com",
  linkedin: "https://www.linkedin.com/in/manas-paliwal-979015311",
  availability: "Available for global remote collaboration across IST / CET / EST",
  location: "Udaipur, India"
};