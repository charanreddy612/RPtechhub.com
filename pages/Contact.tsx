
import React, { useState } from 'react';
import PageHero from '../components/PageHero.tsx';
import Reveal from '../components/Reveal.tsx';
import { Mail, Phone, MapPin, MessageSquare, ChevronRight, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  details: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  details?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required for protocol identification.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Enterprise Email is required for strategic response.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid enterprise email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject matter is required to route your inquiry.';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Inquiry details are mandatory for preliminary assessment.';
    } else if (formData.details.trim().length < 20) {
      newErrors.details = 'Please provide more specific details (min 20 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', subject: '', details: '' });
      }, 1500);
    }
  };

  return (
    <main className="bg-white">
      <PageHero 
        category="Global Access" 
        title="Strategic Correspondence" 
        subtitle="Connect with our executive team for high-stakes inquiries and global partnerships." 
      />
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="text-4xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic">Direct Channels</h2>
              <p className="text-slate-500 text-lg mb-12">
                For urgent strategic matters, please use our direct executive lines or visit our global headquarters. Our response protocols ensure a 4-hour turnaround for enterprise partners.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <MapPin className="text-amber-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-black tracking-widest text-slate-400 mb-1">Global HQ</h4>
                    <p className="text-slate-950 font-bold">Enterprise Tower, Level 42, London, EC1A 1BB, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone className="text-amber-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-black tracking-widest text-slate-400 mb-1">Executive Line</h4>
                    <p className="text-slate-950 font-bold">+44 (0) 20 8123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail className="text-amber-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-black tracking-widest text-slate-400 mb-1">Strategic Inquiries</h4>
                    <p className="text-slate-950 font-bold">strategy@rptechhub.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 p-8 bg-slate-950 text-white rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <MessageSquare className="text-amber-500 mb-4" size={32} />
                <h3 className="text-xl font-black mb-2 uppercase tracking-tighter italic">24/7 Digital Concierge</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Use the AI Strategist in the bottom right corner for immediate data-driven responses and service mapping.
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="bg-slate-50 p-10 border border-slate-200 rounded-sm">
              <h3 className="text-2xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic">Inquiry Protocol</h3>
              
              {submitStatus === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ChevronRight size={32} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 mb-2 uppercase italic">Protocol Initialized</h4>
                  <p className="text-slate-500">Your inquiry has been logged into our strategic queue. An executive will respond within 4 hours.</p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-8 text-amber-600 text-[10px] uppercase font-black tracking-widest hover:underline"
                  >
                    Send Another Communication
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-slate-200'} px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors`} 
                        placeholder="e.g. Victor Thorne" 
                      />
                      {errors.fullName && (
                        <div className="flex items-center space-x-1 text-red-500 text-[10px] font-bold uppercase tracking-tight">
                          <AlertCircle size={10} />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Enterprise Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-slate-200'} px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors`} 
                        placeholder="e.g. v.thorne@apex.com" 
                      />
                      {errors.email && (
                        <div className="flex items-center space-x-1 text-red-500 text-[10px] font-bold uppercase tracking-tight">
                          <AlertCircle size={10} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Subject Matter</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-white border ${errors.subject ? 'border-red-500' : 'border-slate-200'} px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors`} 
                      placeholder="e.g. Strategic Expansion Partnership" 
                    />
                    {errors.subject && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-bold uppercase tracking-tight">
                        <AlertCircle size={10} />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="details" className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Inquiry Details</label>
                    <textarea 
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={6} 
                      className={`w-full bg-white border ${errors.details ? 'border-red-500' : 'border-slate-200'} px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none`} 
                      placeholder="Provide a brief summary of your strategic requirements..."
                    ></textarea>
                    {errors.details && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-bold uppercase tracking-tight">
                        <AlertCircle size={10} />
                        <span>{errors.details}</span>
                      </div>
                    )}
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-slate-950 text-white text-xs uppercase tracking-[0.3em] font-black hover:bg-slate-900 transition-colors flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing Strategic Data...' : 'Initialize Communication'}
                    {!isSubmitting && <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
