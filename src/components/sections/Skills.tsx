'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'Python']
  },
  {
    title: 'Frameworks',
    skills: ['ReactJS', 'Next.js', 'ExpressJS', 'TailwindCSS']
  },
  {
    title: 'Backend & Databases',
    skills: ['REST APIs', 'Node.js', 'MongoDB', 'SQL']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Firebase', 'Power BI', 'Excel']
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Operating Systems']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Critical Thinking', 'Adaptability', 'Team Collaboration']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, tools, and paradigms I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-slate-800 rounded-xl p-6 hover:border-accent/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent rounded-full inline-block group-hover:w-12 transition-all" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-md border border-slate-700 hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
