import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Sydney's Trusted <span className="text-primary">Electrical</span> Partner
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            National Electrics is a trusted electrical service provider delivering high-quality residential and commercial solutions across Sydney. Our licensed electricians are committed to safety, reliability, and customer satisfaction on every job.
          </p>
        </motion.div>

        {/* Stats/Icons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
        >
          <motion.div variants={itemVariants} className="flex gap-6 items-start">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-slate-500">Strict adherence to safety protocols and Australian standards.</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex gap-6 items-start">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-slate-500">Highly trained, licensed, and approachable professionals.</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex gap-6 items-start">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-slate-500">Proudly serving Sydney and all surrounding regions.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white mb-24 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Dedicated Team</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                National Electrics is built on a foundation of expertise and commitment. Our team of licensed professionals brings years of experience to every project, ensuring your home or business is in safe hands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Service Areas</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Sydney CBD & Inner West</li>
                    <li>• Eastern Suburbs</li>
                    <li>• North Shore</li>
                    <li>• Western Sydney</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Certifications</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• NSW Electrical License</li>
                    <li>• Master Electricians Member</li>
                    <li>• ISO 9001 Certified</li>
                    <li>• OH&S Compliant</li>
                  </ul>
                </div>
              </div>
              <ul className="space-y-4">
                {['Licensed Electricians', 'Safety Compliance Officers', '24/7 Support Staff', 'Project Managers'].map((item, i) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                  alt="National Electrics Team"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-2xl font-black text-white">The Experts You Trust</p>
                  <p className="text-secondary font-bold">National Electrics Team</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-slate-50 rounded-[4rem] p-16 md:p-24 border border-slate-100 shadow-inner"
        >
          <h2 className="text-sm font-black text-secondary uppercase tracking-[0.5em] mb-16">Our Credentials</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {['ISO Certified', 'Master Electricians', 'NSW Licensed', 'Safety First'].map((logo) => (
              <motion.div 
                key={logo} 
                variants={itemVariants}
                className="group flex flex-col items-center gap-6"
              >
                <div className="w-28 h-28 bg-white rounded-[2rem] flex items-center justify-center shadow-2xl border border-slate-100 group-hover:scale-110 group-hover:border-primary transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <ShieldCheck className="w-12 h-12 text-primary relative z-10 group-hover:text-secondary transition-colors duration-500" />
                </div>
                <span className="text-lg font-black text-slate-900 tracking-tight">{logo}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
