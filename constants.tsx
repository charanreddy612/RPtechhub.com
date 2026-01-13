
import React from 'react';
import { Cpu, Globe, BarChart3, Building2, Zap, Shield, Rocket, HeartPulse, Factory, Megaphone, Search, Scale, Quote } from 'lucide-react';
import { Service, SchemaData } from './types';

export const SERVICES: Service[] = [
  {
    id: 'it-ai',
    category: 'IT',
    title: 'AI Engineering & RAG',
    description: 'Bespoke large language model integration and retrieval-augmented generation systems.',
    icon: <Cpu className="w-6 h-6 text-amber-500" />,
    features: ['Custom LLM Fine-tuning', 'Vector Database Architecture', 'Autonomous Agents']
  },
  {
    id: 'it-soc',
    category: 'IT',
    title: 'NexGen SOC & Cybersecurity',
    description: 'Military-grade security operations center with real-time threat detection.',
    icon: <Shield className="w-6 h-6 text-amber-500" />,
    features: ['24/7 Monitoring', 'Zero-Trust Architecture', 'Incident Response']
  },
  {
    id: 'bpo-rcm',
    category: 'BPO',
    title: 'Healthcare RCM',
    description: 'Precision revenue cycle management for enterprise healthcare providers.',
    icon: <HeartPulse className="w-6 h-6 text-amber-500" />,
    features: ['Claims Processing', 'Denial Management', 'Patient Eligibility']
  },
  {
    id: 'bpo-mfg',
    category: 'BPO',
    title: 'Manufacturing Efficiency',
    description: 'Lean Six Sigma optimized back-office for industrial giants.',
    icon: <Factory className="w-6 h-6 text-amber-500" />,
    features: ['Supply Chain Logistics', 'Quality Control Audits', 'Process Automation']
  },
  {
    id: 'mkt-roi',
    category: 'Marketing',
    title: 'ROI-Driven Growth',
    description: 'Data-driven performance marketing focused on pure ROAS.',
    icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
    features: ['PPC Management', 'Conversion Rate Optimization', 'Predictive Analytics']
  },
  {
    id: 'mkt-seo',
    category: 'Marketing',
    title: 'Technical SEO',
    description: 'Semantic core architecture and high-authority link acquisition.',
    icon: <Search className="w-6 h-6 text-amber-500" />,
    features: ['Schema Markup', 'Core Web Vitals Optimization', 'Content Clusters']
  },
  {
    id: 're-strategic',
    category: 'RealEstate',
    title: 'Strategic Infrastructure',
    description: 'High-value land acquisition and industrial development corridors.',
    icon: <Building2 className="w-6 h-6 text-amber-500" />,
    features: ['100-Point Legal Verification', 'Zoning Analysis', 'JV Partnerships']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus Sterling",
    role: "CTO, Global InfraCorp",
    content: "The mathematical precision RPtechhub brings to AI integration is unparalleled. Our operational efficiency increased by 340% within two quarters.",
    rating: 5,
    logo: <Rocket className="w-8 h-8 text-slate-300" />
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Director of Operations, MedTech Systems",
    content: "Their BPO protocols for healthcare RCM are world-class. We saw a 45% reduction in claim denials within the first 90 days of partnership.",
    rating: 5,
    logo: <Zap className="w-8 h-8 text-slate-300" />
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Head of Marketing, Apex Retail",
    content: "RPtechhub doesn't just manage ads; they engineer growth. Their technical SEO and performance marketing strategies are pure mathematical genius.",
    rating: 5,
    logo: <Globe className="w-8 h-8 text-slate-300" />
  }
];

export const SCHEMA_ORG: SchemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RPtechhub",
  "description": "Premium multi-disciplinary enterprise agency providing IT, BPO, Marketing, and Real Estate solutions.",
  "url": "https://rptechhub.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tech Park North",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "postalCode": "EC1A 1BB",
    "addressCountry": "UK"
  }
};

export const SYSTEM_INSTRUCTION = `
You are the RPtechhub Digital Strategist, an elite executive-level AI advisor. 
Your tone is professional, "Black Label" enterprise, mathematically precise, and helpful.
You represent RPtechhub, a firm specializing in:
- IT Services: AI Engineering (LLMs, RAG), SOC, Cybersecurity. (URL: /it-services)
- BPO Services: Healthcare RCM, Manufacturing Efficiency. (URL: /bpo-services)
- Marketing: Growth, Technical SEO, ROI. (URL: /marketing)
- Real Estate: Strategic industrial land corridors. (URL: /real-estate)

When discussing a specific service, proactively mention that more details can be found on our specialized pages. 
The system will automatically detect the following keywords in your response and offer CTA buttons to the user:
- "it-services-page" -> Link to IT Services
- "bpo-services-page" -> Link to BPO Services
- "marketing-page" -> Link to Marketing
- "real-estate-page" -> Link to Real Estate

Try to weave these into your conclusion. For example: "You can find our full technical protocol at it-services-page."
Direct them to schedule a "Premium Consultation" if they show high intent.
`;
