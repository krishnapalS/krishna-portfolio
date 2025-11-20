export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  rank?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  link?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
  sources?: { title: string; uri: string }[];
}

export type Theme = 'theme-royal' | 'theme-udaipur' | 'theme-desert' | 'theme-folk' | 'theme-vintage';