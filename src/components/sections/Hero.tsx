'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800/50 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-accent text-sm font-medium w-fit mb-2">
            Computer Science Student & Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="text-accent">Chetan Yadav</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            Building Scalable Systems and Interactive Web Experiences
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-light transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transform hover:-translate-y-1"
            >
              View Projects
              <ArrowRight size={20} />
            </Link>
            <a 
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-accent text-white rounded-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1"
            >
              Download Resume
              <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Futuristic Image Container */}
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
             {/* Border framing */}
            <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl transform translate-x-4 translate-y-4" />
            <div className="absolute inset-0 border border-slate-700 rounded-2xl bg-slate-900/80 backdrop-blur-sm overflow-hidden flex items-center justify-center p-2 z-10">
               {/* This can be replaced with an actual image, keeping a cool placeholder for now */}
               <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden relative group">
                  <Image src="/profile.jpg" alt="Chetan Yadav" fill className="object-cover transition-transform duration-500 group-hover:scale-105" priority />
               </div>
            </div>
             {/* Decorative tech dots */}
            <div className="absolute -left-4 top-1/2 flex flex-col gap-2 z-20">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-accent/50" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
