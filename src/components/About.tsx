import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Sydney's Trusted <span className="text-primary">Electrical</span> Partner
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            National Electro is a trusted electrical service provider delivering high-quality residential and commercial solutions across Sydney. Our licensed electricians are committed to safety, reliability, and customer satisfaction on every job.
          </p>
        </div>

        {/* Stats/Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-slate-500">Strict adherence to safety protocols and Australian standards.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-slate-500">Highly trained, licensed, and approachable professionals.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-slate-500">Proudly serving Sydney and all surrounding regions.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Dedicated Team</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our team consists of industry veterans who bring years of expertise to every project. We pride ourselves on our friendly, approachable tone and our ability to solve complex electrical challenges with ease.
              </p>
              <ul className="space-y-4">
                {['Licensed Electricians', 'Safety Compliance Officers', '24/7 Support Staff', 'Project Managers'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
                alt="Team working"
                className="rounded-2xl aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
                alt="Electrical panel"
                className="rounded-2xl aspect-square object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="text-center">
          <h2 className="text-sm font-black text-secondary uppercase tracking-[0.3em] mb-12">Our Credentials</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['ISO Certified', 'Master Electricians', 'NSW Licensed', 'Safety First'].map((logo) => (
              <div 
                key={logo} 
                className="text-xl md:text-2xl font-black text-slate-700 border-2 border-slate-300 px-8 py-4 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
