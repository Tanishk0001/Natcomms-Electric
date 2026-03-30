import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, ShieldCheck, Clock, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

import Reviews from './Reviews';

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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[850px] lg:min-h-screen flex items-center pt-40 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
            alt="Electrician at work"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-20 lg:pb-48 mt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-2xl text-white border border-white/20 px-8 py-3 rounded-full text-sm font-black mb-10 shadow-[0_0_30px_rgba(255,255,255,0.1)] group cursor-default">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/40 transition-all duration-500">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <span className="tracking-[0.2em] uppercase text-xs">24/7 Emergency Support</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Powering Homes & Businesses with <span className="text-secondary">Reliable</span> Solutions
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-slate-300 mb-10 leading-relaxed">
              Licensed electricians delivering safe, efficient, and same-day services across Sydney. Your safety is our priority.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-xl shadow-primary/20"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0280054322"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Happy Clients', value: '2k+' },
                { label: 'Licensed Experts', value: '25+' },
                { label: 'Service Areas', value: 'Sydney' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border-r border-white/10 last:border-0">
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-black text-secondary uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">The National Electrics Advantage</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Zap, title: 'Same-Day Service', desc: 'Fast response for all jobs.' },
              { icon: ShieldCheck, title: 'Licensed', desc: 'Fully insured professionals.' },
              { icon: Award, title: 'Fixed Pricing', desc: 'No hidden costs, ever.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group text-center"
              >
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 overflow-hidden group-hover:scale-110">
                  <div className="w-full h-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-all" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
          >
            <div className="max-w-xl">
              <h2 className="text-sm font-black text-secondary uppercase tracking-[0.3em] mb-4">Our Services</h2>
              <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Comprehensive Electrical Solutions</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: 'Residential', desc: 'Home installations, repairs & safety upgrades.', img: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800' },
              { title: 'Commercial', desc: 'Reliable systems for offices & retail spaces.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
              { title: 'Emergency', desc: '24/7 rapid response for urgent electrical issues.', img: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800' },
              { title: 'Maintenance', desc: 'Regular checks to keep your property safe.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' },
            ].map((service) => (
              <motion.div 
                key={service.title} 
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-secondary font-bold text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Need an electrician today?<br />We’re ready to help.
            </h2>
            <Link
              to="/contact"
              className="inline-flex bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary hover:text-white transition-all shadow-xl"
            >
              Book a Job Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Dynamic Reviews Section */}
      <Reviews />
    </div>
  );
}
