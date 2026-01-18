import React from "react";
import {
  Cpu,
  Globe,
  BarChart3,
  Building2,
  Zap,
  Shield,
  Rocket,
  HeartPulse,
  Factory,
  Megaphone,
  Search,
  Landmark,
  Coins,
  Briefcase,
  Key,
  Home,
} from "lucide-react";
import { Service, SchemaData } from "./types";

export const SERVICES: Service[] = [
  {
    id: "it-ai",
    category: "IT",
    route: '/it-services',
    title: "AI Engineering & RAG",
    description:
      "Bespoke large language model integration and retrieval-augmented generation systems.",
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    features: [
      "Custom LLM Fine-tuning",
      "Vector Database Architecture",
      "Autonomous Agents",
    ],
  },
  {
    id: "it-soc",
    category: "IT",
    route: '/it-services',
    title: "NexGen SOC & Cybersecurity",
    description:
      "Military-grade security operations center with real-time threat detection.",
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    features: [
      "24/7 Monitoring",
      "Zero-Trust Architecture",
      "Incident Response",
    ],
  },
  {
    id: "bpo-rcm",
    category: "BPO",
    route: '/bpo-services',
    title: "Healthcare RCM",
    description:
      "Precision revenue cycle management for enterprise healthcare providers.",
    icon: <HeartPulse className="w-6 h-6 text-blue-500" />,
    features: ["Claims Processing", "Denial Management", "Patient Eligibility"],
  },
  {
    id: "bpo-mfg",
    category: "BPO",
    route: '/bpo-services',
    title: "Manufacturing Efficiency",
    description: "Lean Six Sigma optimized back-office for industrial giants.",
    icon: <Factory className="w-6 h-6 text-blue-500" />,
    features: [
      "Supply Chain Logistics",
      "Quality Control Audits",
      "Process Automation",
    ],
  },
  {
    id: "mkt-roi",
    category: "Marketing",
    route: '/marketing',
    title: "ROI-Driven Growth",
    description: "Data-driven performance marketing focused on pure ROAS.",
    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    features: [
      "PPC Management",
      "Conversion Rate Optimization",
      "Predictive Analytics",
    ],
  },
  {
    id: "finance-cap",
    category: "Finance",
    route: '/finance',
    title: "Capital Orchestration",
    description:
      "Institutional-grade funding solutions for high-ticket business and professional requirements.",
    icon: <Landmark className="w-6 h-6 text-blue-500" />,
    features: [
      "Business Expansion Loans",
      "Professional Practice Funding",
      "Mortgage Leveraging",
    ],
  },
  {
    id: "re-invest",
    category: "RealEstate",
    route: '/real-estate',
    title: "Real Estate Investment Advisory",
    description:
      "Strategic advisory for residential and commercial real estate investments.",
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    features: ["Asset Evaluation", "Yield Optimization", "Market Intelligence"],
  },
  {
    id: "re-mgmt",
    category: "RealEstate",
    route: '/real-estate',
    title: "Property & Asset Management",
    description:
      "End-to-end operational management for high-value real estate portfolios.",
    icon: <Home className="w-6 h-6 text-blue-500" />,
    features: [
      "Tenant Management",
      "Compliance Handling",
      "Revenue Optimization",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus Sterling",
    role: "CTO, Global InfraCorp",
    content:
      "The mathematical precision RPtechhub brings to AI integration is unparalleled. Our operational efficiency increased by 340% within two quarters.",
    rating: 5,
    logo: <Rocket className="w-8 h-8 text-slate-300" />,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Director of Operations, MedTech Systems",
    content:
      "Their BPO protocols for healthcare RCM are world-class. We saw a 45% reduction in claim denials within the first 90 days of partnership.",
    rating: 5,
    logo: <Zap className="w-8 h-8 text-slate-300" />,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Head of Marketing, Apex Retail",
    content:
      "RPtechhub doesn't just manage ads; they engineer growth. Their technical SEO and performance marketing strategies are pure mathematical genius.",
    rating: 5,
    logo: <Globe className="w-8 h-8 text-slate-300" />,
  },
];

export const SCHEMA_ORG: SchemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RPtechhub",
  description:
    "Premium multi-disciplinary enterprise agency providing IT, BPO, Marketing, and Real Estate solutions.",
  url: "https://rptechhub.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tech Park North",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "EC1A 1BB",
    addressCountry: "UK",
  },
};

export const SYSTEM_INSTRUCTION = `
You are the RPtechhub Digital Strategist, an elite executive-level AI advisor. 
Your tone is professional, "Black Label" enterprise, mathematically precise, and helpful.
You represent RPtechhub, a firm specializing in:
- IT Services: AI Engineering (LLMs, RAG), SOC, Cybersecurity. (URL: /it-services)
- BPO Services: Healthcare RCM, Manufacturing Efficiency. (URL: /bpo-services)
- Marketing: Growth, Technical SEO, ROI. (URL: /marketing)
- Real Estate: Strategic industrial land corridors. (URL: /real-estate)
- Financial Services: High-ticket Business Loans, Professional Loans, Home & Mortgage solutions. (URL: /finance)

When discussing a specific service, proactively mention that more details can be found on our specialized pages. 
The system will automatically detect the following keywords in your response and offer CTA buttons to the user:
- "it-services-page" -> Link to IT Services
- "bpo-services-page" -> Link to BPO Services
- "marketing-page" -> Link to Marketing
- "real-estate-page" -> Link to Real Estate
- "finance-page" -> Link to Financial Services

Try to weave these into your conclusion. For example: "For capital orchestration and high-ticket funding, visit our finance-page."
Direct them to schedule a "Premium Consultation" if they show high intent.
`;
