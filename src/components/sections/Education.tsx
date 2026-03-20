'use client';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Lovely Professional University',
    score: 'CGPA: 7.47',
    year: 'Present',
  },
  {
    degree: '12th Grade (Senior Secondary)',
    institution: 'Sarla International Academy',
    score: 'Percentage: 60%',
    year: 'Completed',
  },
  {
    degree: '10th Grade (Secondary)',
    institution: 'Dawn Vasco School',
    score: 'Percentage: 59%',
    year: 'Completed',
  }
];

export default function Education() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="text-accent">Education</span> Journey
          </h2>
        </motion.div>

        <div className="space-y-8 pl-4 md:pl-0">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 border-l border-slate-700"
            >
              <div className="absolute -left-[18px] top-1 bg-background p-2 rounded-full border border-slate-700 group flex items-center justify-center">
                 <GraduationCap size={18} className="text-accent" />
              </div>
              
              <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 hover:border-accent/40 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-accent/10 text-accent rounded-full w-fit">
                    {edu.year}
                  </span>
                </div>
                <p className="text-lg text-slate-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-slate-400 font-mono text-sm">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
