import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, AlertTriangle, Lightbulb, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Electrical',
    desc: 'Complete home electrical solutions including installations, repairs, lighting, and safety upgrades.',
    img: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=1200',
    features: ['Switchboard Upgrades', 'Lighting Installation', 'Safety Inspections', 'Power Point Installation']
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Electrical',
    desc: 'Reliable electrical systems for offices, retail, and industrial spaces with minimal downtime.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    features: ['Office Fit-outs', 'Data & Communications', 'Emergency Lighting', 'Preventative Maintenance']
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    title: 'Emergency / After-Hours',
    desc: '24/7 rapid response for urgent electrical issues to keep your property safe and powered.',
    img: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=1200',
    features: ['Power Outages', 'Electrical Faults', 'Storm Damage', 'Safety Hazards']
  }
];

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
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional electrical solutions tailored to your specific needs. From small repairs to large-scale commercial projects.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, j) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + j * 0.1 }}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services List */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[120px]" />
          
          <div className="relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black text-secondary uppercase tracking-[0.4em] mb-4">Expertise</h2>
              <p className="text-4xl md:text-5xl font-extrabold tracking-tight">Additional Specializations</p>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[
                'Switchboard upgrades',
                'Lighting installation',
                'Fault finding & repairs',
                'Power point installation',
                'Wiring & rewiring',
                'Safety inspections'
              ].map((item) => (
                <motion.div 
                  key={item} 
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] flex flex-col items-center gap-6 border border-white/10 hover:bg-white/10 transition-all group text-center"
                >
                  <div className="w-24 h-24 flex items-center justify-center shrink-0 overflow-hidden bg-white/10 rounded-[1.5rem] group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Zap className="w-10 h-10 text-secondary drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
                  </div>
                  <span className="font-black text-xl tracking-tight text-white">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
