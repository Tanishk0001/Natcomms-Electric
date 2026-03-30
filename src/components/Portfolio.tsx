import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, Award, Camera } from 'lucide-react';
import Reviews from './Reviews';

const beforeAfterItems = [
  {
    id: 1,
    title: 'Switchboard Modernization',
    before: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    desc: 'Upgraded an outdated, hazardous switchboard to a modern, safety-compliant system with RCD protection.'
  },
  {
    id: 2,
    title: 'Commercial Lighting Overhaul',
    before: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800',
    desc: 'Replaced inefficient fluorescent tubes with high-output, energy-saving LED panels for a modern office fit-out.'
  }
];

const galleryItems = [
  { id: 3, title: 'Our Service Fleet', category: 'Vehicle', img: 'https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Rapid Response Van', category: 'Vehicle', img: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Expert On-Site Technician', category: 'Team', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Master Electrician at Work', category: 'Team', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Precision Testing Tools', category: 'Equipment', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Advanced Diagnostics', category: 'Equipment', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Safety Gear & PPE', category: 'Equipment', img: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800' },
  { id: 10, title: 'Industrial Control Panel', category: 'Equipment', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">Portfolio</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of our recent projects across Sydney. Quality workmanship you can see, from emergency repairs to complex installations.
          </p>
        </motion.div>

        {/* Before & After Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Before & After Transformations</h2>
          </div>

          <div className="space-y-20">
            {beforeAfterItems.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                    <Zap className="w-4 h-4" />
                    Project Transformation
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <ShieldCheck className="w-5 h-5" />
                      Licensed Work
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-bold">
                      <Award className="w-5 h-5" />
                      Fixed Pricing
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 relative">
                  <div className="relative group">
                    <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">Before</div>
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50">
                      <img 
                        src={item.before} 
                        alt="Before" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="relative group mt-12 lg:mt-16">
                    <div className="absolute top-4 left-4 z-10 bg-primary text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/30">After</div>
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/50">
                      <img 
                        src={item.after} 
                        alt="After" 
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  
                  {/* Connecting line or arrow could go here if needed */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fleet, Team & Equipment Gallery */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Fleet, Team & Equipment</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-secondary text-xs font-black uppercase tracking-widest mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Testimonials / Reviews Section */}
      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Customer Testimonials</h2>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
}
