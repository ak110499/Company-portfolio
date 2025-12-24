export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface Client {
  name: string;
  industry: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}