export type Experience = { role: string; company: string; location: string; period: string; summary: string[] };
export type Project = { title: string; type: string; description: string; tags: string[]; accent: "orange" | "blue" | "violet"; url?: string };

export const profile = {
  name: "Muhammad Moazzam", shortName: "MM", role: "Associate Software Engineer / Front-End Developer", location: "Rawalpindi, Pakistan", email: "rajamoazzam789@gmail.com", phone: "0341-1008699",
  linkedin: "https://linkedin.com/in/muhammad-moazzam", github: "https://github.com/webdesign4ever",
  about: "I am a front-end developer who enjoys turning complex business requirements into clear, reliable experiences. My work spans production Angular applications and the React / Next.js ecosystem, with a practical understanding of API integration and backend foundations in Nest.js, Express, and PostgreSQL.",
};
export const navigation = [["About", "about"], ["Experience", "experience"], ["Work", "projects"], ["Skills", "skills"], ["Contact", "contact"]] as const;
export const experiences: Experience[] = [
  { role: "Associate Software Engineer", company: "Funavry Technologies", location: "Islamabad", period: "Aug 2025 - Present", summary: ["Developing enterprise-grade Angular applications and REST API integrations for complex business requirements.", "Migrating legacy products to modern Angular architecture and building reusable, configurable UI foundations.", "Creating dynamic form builders, virtualized remote-search multi-select components, and production PDF workflows with pdfmake.", "Working across RxJS, Angular signals, IndexedDB, backend teams, and QA to ship dependable features."] },
  { role: "Junior Software Developer", company: "Code Frenetics (SMC-Private) Limited", location: "Rawalpindi", period: "Aug 2024 - Jul 2025", summary: ["Built front ends with React.js, Next.js, Gatsby, Material UI, and TypeScript.", "Contributed backend features using Nest.js, Express, and PostgreSQL."] },
  { role: "React & Next.js Fellow", company: "Bytewise Limited", location: "Remote", period: "Jun 2024 - Sept 2024", summary: ["Learned React through hands-on responsive interfaces built from Figma designs.", "Built a Next.js site covering SSR, static generation, and API routes."] },
];
export const projects: Project[] = [
  { title: "ChainAware", type: "Web3 client application", description: "An Angular application connecting polished user flows with on-chain interactions through Web3.js and Ethers.js.", tags: ["Angular", "Web3.js", "Ethers.js"], accent: "orange" },
  { title: "Delmonte Claims", type: "Enterprise claims management", description: "A large-scale claims platform with conditional form logic, resilient background sync, and a high-fidelity PDF generation and preview system.", tags: ["Angular", "RxJS", "IndexedDB", "pdfmake"], accent: "blue" },
  { title: "Fake Image Detection", type: "Deep learning platform", description: "An image-forensics system that flags AI-generated content and explains its decision with Grad-CAM heatmaps.", tags: ["Python", "TensorFlow", "Flask", "React"], accent: "violet" },
];
export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript"] },
  { label: "Frameworks & libraries", items: ["Angular", "RxJS", "Angular Material", "PrimeNG", "React.js", "Next.js", "Gatsby", "Bootstrap", "Tailwind CSS", "Material UI"] },
  { label: "Backend", items: ["Nest.js", "Express", "PostgreSQL"] },
  { label: "Web3", items: ["Web3.js", "Ethers.js"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Visual Studio"] },
];
export const certifications = ["Responsive Web Design - freeCodeCamp", "Advanced Styling with Responsive Design - Coursera", "Interactivity with JavaScript and jQuery - Coursera", "Animation with JavaScript and jQuery - Coursera", "Introduction to CSS3 - Coursera", "Certified Python Elementary Programmer - Python Career Trainers"];
