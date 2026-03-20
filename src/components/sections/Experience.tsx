'use client';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl mt-12 md:mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Training & <span className="text-accent">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12 pb-12">
          {/* Cyber Security Training Item */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-5 top-1 h-10 w-10 rounded-full bg-slate-900 border-2 border-accent flex items-center justify-center p-1 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
              <Shield size={20} className="text-accent" />
            </div>
            
            <div className="bg-background border border-slate-800 hover:border-accent/40 rounded-xl p-6 md:p-8 transition-colors group">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                Cyber Security Essentials
              </h3>
              <p className="text-slate-400 mb-4 font-medium">Training Program</p>
              
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>Implementation and understanding of cryptographic algorithms such as <strong className="text-white">AES-256</strong> and <strong className="text-white">SHA-256</strong>.</li>
                <li>Setup <strong className="text-white">JWT (JSON Web Tokens)</strong> for secure authentication mechanisms.</li>
                <li>Gained practical knowledge of building and securing real-time systems against common vulnerabilities.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Education Section embedded physically next to it or follows closely. Based on design, we separate the component conceptually but can make Education a similar timeline. */}
      </div>
    </section>
  );
}
