import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-background/50 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/ChetanYadav34" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:chetan3contact@gmail.com" className="text-slate-400 hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Chetan Yadav. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
