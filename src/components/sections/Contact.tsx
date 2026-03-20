'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I&apos;m currently open for new opportunities or collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <a href="mailto:chetan3contact@gmail.com" className="flex items-center gap-4 p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-accent transition-all group">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-accent/10 transition-colors">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-slate-400 text-sm mb-1">Email</h4>
                <p className="text-white font-medium text-lg">chetan3contact@gmail.com</p>
              </div>
            </a>

            <a href="tel:+917905141458" className="flex items-center gap-4 p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-accent transition-all group">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-accent/10 transition-colors">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-slate-400 text-sm mb-1">Phone</h4>
                <p className="text-white font-medium text-lg">+91-7905141458</p>
              </div>
            </a>

            <div className="flex gap-4 p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <div className="w-full">
                <h4 className="text-slate-400 text-sm mb-3">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/ChetanYadav34" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-accent transition-colors text-white">
                    <Github size={20} /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-accent transition-colors text-white">
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-8"
          >
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-slate-400">Your Name</label>
                <input type="text" id="name" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-slate-400">Your Email</label>
                <input type="email" id="email" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-slate-400">Message</label>
                <textarea id="message" rows={4} className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Hello Chetan..."></textarea>
              </div>
              <button className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-accent text-slate-900 font-bold rounded-lg hover:bg-accent-light transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
