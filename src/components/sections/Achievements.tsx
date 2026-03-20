'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const achievements = [
  "Active GitHub contributor with a streak of daily commits.",
  "Built real-world applications including an AQI Dashboard using Power BI and DAX.",
  "Hands-on cybersecurity training focusing on AES-256, SHA-256, and JWT.",
  "Continuously learning and applying full-stack backend technologies to build scalable web experiences."
];

export default function Achievements() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Achievements & <span className="text-accent">Activities</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent hidden md:block" />
          </div>

          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-accent hover:bg-slate-800/80 transition-all group"
              >
                <div className="mt-1 bg-background p-1 rounded-full border border-slate-700 group-hover:border-accent transition-colors">
                  <CheckCircle2 size={24} className="text-accent" />
                </div>
                <p className="text-slate-300 group-hover:text-white transition-colors text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
