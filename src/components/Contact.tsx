import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Residential Electrical',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      // 1. Save to Firestore (Backup & Dashboard)
      try {
        await addDoc(collection(db, 'contacts'), {
          ...formData,
          createdAt: serverTimestamp()
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, 'contacts');
      }

      // 2. Send via FormSubmit (No SMTP required)
      // This will send an email to service@nationalelectro.com.au
      console.log('Sending inquiry to FormSubmit for:', formData.name);
      const response = await fetch('https://formsubmit.co/ajax/service@nationalelectro.com.au', {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Website Inquiry from ${formData.name}`,
          _template: 'table'
        })
      });
      
      const result = await response.json();
      console.log('FormSubmit response:', result);
      
      if (response.ok && (result.success === 'true' || result.success === true)) {
        setFormState('success');
        setFormData({ name: '', phone: '', service: 'Residential Electrical', message: '' });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        console.error('FormSubmit error detail:', result);
        throw new Error(result.message || 'Failed to send email. Please check if your email is confirmed with FormSubmit.');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setFormState('idle');
      
      // Check if it's a Firestore permission error
      if (err instanceof Error && err.message.includes('insufficient permissions')) {
        alert('Permission denied. Please check your Firebase Security Rules.');
      } else if (err instanceof Error && err.message.includes('offline')) {
        alert('The client is offline. Please check your internet connection and Firebase configuration.');
      } else {
        alert(`Something went wrong: ${err instanceof Error ? err.message : 'Unknown error'}. Please try again or call us directly.`);
      }
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Let's Get <span className="text-primary">Started</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have an electrical project or an emergency? Our team is ready to assist you 24/7. Reach out today for a free, no-obligation quote.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  <p className="text-slate-500 mb-1">Available 24/7 for emergencies.</p>
                  <a href="tel:0280054322" className="text-2xl font-black text-primary hover:text-secondary transition-colors">
                    (02) 8005 4322
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-slate-500 mb-1">General inquiries & quotes.</p>
                  <a href="mailto:service@nationalelectro.com.au" className="text-xl font-bold text-slate-900 hover:text-secondary transition-colors">
                    service@nationalelectro.com.au
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Location</h3>
                  <p className="text-slate-500 mb-1">Serving all of Sydney.</p>
                  <p className="text-xl font-bold text-slate-900">
                    Sydney, NSW, Australia
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Hours</h3>
                  <p className="text-slate-500">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-slate-900 font-bold">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. We've received your inquiry and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-3xl font-extrabold mb-8">Send an Inquiry</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0400 000 000"
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all outline-none appearance-none"
                      >
                        <option>Residential Electrical</option>
                        <option>Commercial Electrical</option>
                        <option>Emergency Support</option>
                        <option>Maintenance</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20 disabled:opacity-70"
                    >
                      {formState === 'submitting' ? (
                        <>
                          Booking...
                          <Loader2 className="w-6 h-6 animate-spin" />
                        </>
                      ) : (
                        <>
                          Book a Job Now
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Map Section - Premium Look */}
        <div className="mt-24 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative w-full h-[500px] bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10">
            {/* Dark Overlay for Premium Feel */}
            <div className="absolute inset-0 pointer-events-none bg-slate-900/10 z-10" />
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.102951134!2d150.6517855!3d-33.84735665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017ad1780cd850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1711620000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) brightness(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0"
            ></iframe>

            {/* Premium Info Card Overlay */}
            <div className="absolute bottom-10 left-10 z-20 hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-white max-w-sm shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Our Service Area</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We proudly serve the entire Sydney metropolitan area, providing 24/7 emergency support and same-day services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                    <Clock className="w-4 h-4" />
                    Rapid Response Zone
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
