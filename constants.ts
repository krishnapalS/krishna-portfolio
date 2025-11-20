
import { Experience, Project, SkillCategory, Achievement, Certification } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Jio Platforms Limited",
    role: "Software Development Engineer - II",
    period: "Sept 2024 - Present",
    location: "Mumbai, Maharashtra",
    points: [
      "Full-Stack Developer at JioSign, developing a digital signing platform.",
      "Led frontend overhaul using React, Jio Design System (JDS), and Material UI, increasing user engagement by 25% and reducing bounce rate by 30%.",
      "Implemented Redux for global state management and Context API, improving performance by 20%.",
      "Designed server-side logic with Java, Spring Boot, Kafka, and Redis. Enhanced data retrieval times by 35%.",
      "Optimized CI/CD on Azure DevOps, reducing deployment time by 40%. Streamlined deployments with Docker & Kubernetes.",
      "Architected microservices ensuring scalability and improving delivery timelines by 15%."
    ]
  },
  {
    company: "Jio Platforms Limited",
    role: "Software Development Engineer - I",
    period: "Aug 2023 - Aug 2024",
    location: "Mumbai, Maharashtra",
    points: [
      "Developed Video-Based Customer Identification Process (VCIP) platform for Jio Financial Services.",
      "Built responsive UI using Angular and TypeScript, driving a 30% increase in engagement.",
      "Boosted backend performance by 25% using Spring Boot microservices and reduced retrieval times by 40% with Redis caching.",
      "Integrated MySQL for transaction storage and collaborated with FinTech partners to expand VKYC adoption.",
      "Delivered high-quality, compliant Video KYC solutions per RBI guidelines."
    ]
  },
  {
    company: "Microsoft",
    role: "Software Engineering Internship",
    period: "May 2022 - July 2022",
    location: "Hyderabad, Telangana",
    points: [
      "Collaborated with Enterprise Commerce India team (Azure Cloud + AI).",
      "Designed Active-Active Disaster Recovery setup for Azure Data Lake production environment.",
      "Established Secondary environment and parallel job execution, improving performance by 20%.",
      "Reduced downtime by 15% during failover scenarios through robust testing protocols."
    ]
  },
  {
    company: "Centre for Cognitive Computing (IIIT Allahabad)",
    role: "Deep Learning Research Intern",
    period: "May 2020 - July 2020",
    location: "Prayagraj, Uttar Pradesh",
    points: [
      "Research on Automatic Detection of COVID-19 using Chest X-ray Images and Deep CNNs.",
      "Implemented Transfer learning with VGG16, ResNet50, InceptionV3, and Xception.",
      "Achieved >93% Accuracy for InceptionV3 using custom layers and Adam optimizer."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Sudoku Solver",
    description: "Extracts and solves puzzles from images using Image Processing and CNNs (98% MNIST accuracy) with a backtracking algorithm for solving.",
    tags: ["Python", "OpenCV", "CNN", "Backtracking"],
    github: "https://github.com/krishnapalS",
    image: "https://images.unsplash.com/photo-1619266230820-6c29d79d20c7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Real Estate Price Predictor",
    description: "Forecasts property prices using Random Forest algorithms with 85% accuracy. Analyzed Linear Regression and Decision Trees.",
    tags: ["Machine Learning", "Scikit-Learn", "Random Forest"],
    github: "https://github.com/krishnapalS",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
  },
  {
    title: "DNA Classifier Using NLP",
    description: "Predicts gene families from DNA sequences using NLP and K-mer segmentation, improving classification accuracy by 15%.",
    tags: ["NLP", "Bioinformatics", "Python"],
    github: "https://github.com/krishnapalS",
    image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Flappy Bird Game",
    description: "Fully functional game using Pygame for graphics and random obstacle generation. Optimized for smooth gameplay.",
    tags: ["Python", "Pygame", "Game Dev"],
    github: "https://github.com/krishnapalS",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C++", "C", "TypeScript", "JavaScript", "SQL", "HTML/CSS", "CUDA"]
  },
  {
    category: "Frameworks",
    skills: ["Spring Boot", "React.js", "Angular", "Node.js", "OpenCV", "Pandas", "Scikit-Learn"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Kubernetes", "Azure DevOps", "Kafka", "Redis", "Figma", "Postman"]
  },
  {
    category: "Core Concepts",
    skills: ["Data Structures & Algo", "Microservices", "System Design", "Computer Vision", "NLP", "Cryptography"]
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "IIT-JEE Advanced 2018",
    description: "Achieved All India Rank 4050 among 1.5 million candidates.",
    rank: "AIR 4050"
  },
  {
    title: "IIT-JEE Mains 2018",
    description: "Achieved All India Rank 3152 among 1.5 million candidates.",
    rank: "AIR 3152"
  },
  {
    title: "Google HashCode 2021",
    description: "Secured All India Rank 777.",
    rank: "AIR 777"
  },
  {
    title: "Reply Code Challenge 2021",
    description: "Secured Global Rank 477.",
    rank: "Global 477"
  },
  {
    title: "Problem Solving",
    description: "Solved 1200+ coding problems on LeetCode, Codeforces, SPOJ, etc.",
    rank: "1200+"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "HacktoberFest 2020 & 2021",
    issuer: "DigitalOcean",
    description: "Successfully completed the open source contribution challenge for two consecutive years."
  },
  {
    title: "GitHub Arctic Code Vault Contributor",
    issuer: "GitHub",
    description: "Contributed code to repositories preserved in the Arctic Code Vault Program (2020)."
  },
  {
    title: "NCC 'B' Certificate",
    issuer: "National Cadet Corps",
    description: "Achieved 'B' Certificate in National Cadet Corps."
  }
];

export const LINKEDIN_URL = "https://www.linkedin.com/in/krishna-pal-deora-b4542b171/";

export const RESUME_CONTEXT = `
You are an AI assistant for Krishna Pal Deora's portfolio website.
Here is Krishna's resume data to answer questions:

Name: Krishna Pal Deora
Education: B.Tech + M.Tech (Integrated) in Mathematics and Computing at IIT Dhanbad (2018-2023), CGPA 8.12/10.
Current Role: SDE II at Jio Platforms Limited (Sept 2024 - Present).
Previous Experience: 
- SDE I at Jio Platforms (Aug 2023 - Aug 2024). Worked on Video KYC.
- Software Engineering Intern at Microsoft (May 2022 - July 2022). Azure Cloud + AI team.
- Deep Learning Research Intern at IIIT Allahabad (May 2020 - July 2020). COVID-19 detection.

Skills:
- Languages: C, C++, Java, Python, HTML, CSS, JS, TS, SQL, CUDA.
- Frameworks: Spring Boot, Angular, React.js, OpenCV, Scikit-Learn.
- Tools: Git, Azure DevOps, Docker, K8s, Kafka, Redis.

Achievements:
- AIR 4050 in IIT-JEE Advanced.
- AIR 3152 in IIT-JEE Mains.
- Solved 1200+ coding problems.
- HacktoberFest 2020/2021.

Projects:
- Sudoku Solver (CNN + Backtracking).
- Real Estate Price Predictor.
- DNA Classifier (NLP).
- Flappy Bird Game.

Certifications:
- HacktoberFest 2020 & 2021
- GitHub Arctic Code Vault
- NCC 'B' Certificate

Contact Info:
- Email: krishna.pal.deora.sde@gmail.com
- Phone: +91-9102791121
- LinkedIn: ${LINKEDIN_URL}
- Github: https://github.com/krishnapalS

Persona: Be professional, concise, and helpful. Greeting should be "Khamma Ghani Hukum 🙏".
`;
