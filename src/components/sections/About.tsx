'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
            <p>
              I am a Computer Science student at <strong className="text-white font-medium">Lovely Professional University</strong> with a strong passion for transforming complex ideas into elegant, functional digital experiences.
            </p>
            <p>
              My journey in technology is driven by an intense curiosity for <strong className="text-white font-medium">full-stack development, data visualization, and system-level problem solving</strong>. I believe that the best solutions come from understanding both the high-level user experience and the low-level systemic architecture.
            </p>
            <p>
              Whether it&apos;s managing concurrency in OS concepts through my Deadlock Handling Toolkit or translating raw datasets into actionable insights with my AQI Dashboard, I strive to build applications that are not just technically sound, but practically impactful.
            </p>
            <p>
              When I&apos;m not coding, you can find me actively contributing to GitHub repositories, exploring cybersecurity, and continuously pushing my boundaries to learn the latest backend and frontend technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
