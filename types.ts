
// Fix: Import React to resolve 'React' namespace error for ReactNode
import React from 'react';

export interface Service {
  id: string;
  category: 'IT' | 'BPO' | 'Marketing' | 'RealEstate';
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SchemaData {
  "@context": string;
  "@type": string;
  "name": string;
  "description": string;
  "url": string;
  "address": {
    "@type": string;
    "streetAddress": string;
    "addressLocality": string;
    "addressRegion": string;
    "postalCode": string;
    "addressCountry": string;
  };
}
