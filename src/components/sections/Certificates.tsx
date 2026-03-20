'use client';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  { id: 1, title: 'Cyber Security Essentials', issuer: 'Cisco Networking Academy', image: '' },
  { id: 2, title: 'Full Stack Web Development', issuer: 'LPU Add-On Course', image: '' },
  // Placeholders for future certificates
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Certificates</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional certifications and courses showcasing my commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-accent transition-colors group relative"
            >
              <div className="aspect-video bg-slate-900 flex items-center justify-center relative">
                {cert.image ? (
                  // Uses standard img tag or Next Image when actual pictures exist
                  <div className="w-full h-full bg-slate-700"></div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-50">
                     <Award size={48} className="text-accent mb-2" />
                     <span className="text-sm text-slate-400">[Certificate Image]</span>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">View Credential</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
