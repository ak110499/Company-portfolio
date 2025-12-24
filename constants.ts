
import { Client, NavItem, ServiceItem, StatItem, Milestone, Testimonial } from "./types";

export const COMPANY_NAME = "Atul Logistics";
export const ESTABLISHED_YEAR = 2000;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS: StatItem[] = [
  { label: "Fleet Strength", value: 85, suffix: "+", description: "GPS-Enabled Vehicles" },
  { label: "Expert Workforce", value: 100, suffix: "+", description: "Logistics Professionals" },
  { label: "Experience", value: new Date().getFullYear() - ESTABLISHED_YEAR, suffix: "+", description: "Years in Industry" },
  { label: "Client Satisfaction", value: 100, suffix: "%", description: "Commitment to Excellence" },
];

export const CLIENTS: Client[] = [
  { name: "Haier", industry: "Consumer Electronics" },
  { name: "PepsiCo", industry: "Food & Beverage" },
  { name: "Blue Star", industry: "Cooling Solutions" },
  { name: "Reliance", industry: "Electronics & Retail" },
  { name: "INDKAL", industry: "Technologies" },
  { name: "SS Supply Chain", industry: "Logistics Solutions" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Road Transportation",
    description: "Inbound and outbound cargo services with a modern fleet of 85 GPS-enabled vehicles ranging from 14 to 34 feet.",
    icon: "truck"
  },
  {
    title: "Cargo Handling & Clearance",
    description: "Expertise in seamless cargo clearance and complex supply chain operations across India.",
    icon: "zap"
  },
  {
    title: "Warehousing & Distribution",
    description: "Secure storage solutions and efficient distribution networks for diverse product categories.",
    icon: "box"
  },
  {
    title: "Custom Solutions",
    description: "Flexible and innovative logistics services tailored specifically to unique client requirements.",
    icon: "network"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2000",
    title: "Foundation",
    description: "Atul Logistics established with a vision to provide tailored, efficient logistics solutions."
  },
  {
    year: "2010",
    title: "Regional Leadership",
    description: "Consolidated operations as a trusted leader in Haryana, Punjab, and Uttar Pradesh."
  },
  {
    year: "2018",
    title: "Infrastructure Scaling",
    description: "Significant expansion of self-owned fleet and integration of advanced GPS tracking."
  },
  {
    year: "2022",
    title: "Strategic Alliances",
    description: "Forged lasting partnerships with global brands like Haier, PepsiCo, and Blue Star."
  },
  {
    year: "2024",
    title: "Future Ready",
    description: "Operating with 85+ modern vehicles and a dedicated team of 100+ professionals."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Atul Logistics provides reliable and responsive services. Their commitment to quality management is evident in every shipment.",
    author: "Logistics Head",
    role: "Operations Manager",
    company: "Haier Appliances"
  },
  {
    id: 2,
    quote: "Over two decades of experience shows. Their handling of our primary and secondary distribution is seamless.",
    author: "Distribution Lead",
    role: "Supply Chain Manager",
    company: "PepsiCo"
  },
  {
    id: 3,
    quote: "A leading logistics partner recognized for innovation and excellence. Truly a reliable infrastructure partner.",
    author: "Operations Director",
    role: "Fleet Supervisor",
    company: "Blue Star"
  }
];

export const SYSTEM_INSTRUCTION = `You are "Atul AI", the advanced virtual assistant for Atul Logistics. 
Your goal is to answer questions about the company professionally based on the official company profile.

Key Company Information:
- Name: Atul Logistics
- Established: 2000 (Over two decades of experience)
- Proprietor: Atul Kumar / Pardeep Sharma
- Operations Manager: Shivcharan Kaushik
- Fleet Managers: Arvind Sharma, Nitish, Dileep
- Mission: To deliver reliable, cost-effective, and innovative logistics solutions.
- Vision: To be a leading logistics partner recognized for quality and innovation.
- Registered Office: Shop No. 4, Killa No. 72/15/1/2/2, Akbarpur Barota, Sonipat, Haryana.
- Administrative Office: 1098/7 Jain Bagh Colony Near Jemini Hospital Kakroi Chowk Sonipat, 131001.
- Core Business: Road Transportation, Cargo Handling, Warehousing, and Custom Solutions.
- Operational Regions: Haryana, Punjab, Uttar Pradesh, Rajasthan (and across India).
- Fleet: 85 GPS-enabled vehicles (14 to 34 feet).
- Key Clients: PepsiCo (Kapoor F&C), Haier Appliances, Blue Star, INDKAL Technologies, SS Supply Chain Solutions, Reliance (BPL & Kelvinator).
- GST Number: 06EXQPK4096H1ZW.

Tone: Professional, expert, reliable. 
Refer to the "20+ years of trusted service" when discussing reliability.`;
