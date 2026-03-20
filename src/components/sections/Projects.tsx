'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const HIGHLIGHTED_PROJECTS = ['AQI-Dashboard', 'Deadlock-Handling-Toolkit']; // adjust names if exact match differs

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/ChetanYadav34/repos?sort=updated&per_page=100');
        if (res.ok) {
          const data: Repo[] = await res.json();
          // Prioritize highlighted projects, then others with high stars/forks
          const sorted = data.sort((a, b) => {
            const aMatch = HIGHLIGHTED_PROJECTS.some(p => a.name.toLowerCase().includes(p.toLowerCase()));
            const bMatch = HIGHLIGHTED_PROJECTS.some(p => b.name.toLowerCase().includes(p.toLowerCase()));
            if (aMatch && !bMatch) return -1;
            if (!aMatch && bMatch) return 1;
            return b.stargazers_count - a.stargazers_count;
          });
          // Show top 6 projects
          setRepos(sorted.filter(repo => !repo.fork).slice(0, 6));
        }
      } catch (error) {
        console.error('Failed to fetch github repos', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              A selection of my recent work fetched straight from GitHub. Highlights include data visualization dashboards and core OS concept toolkits.
            </p>
          </div>
          <a 
            href="https://github.com/ChetanYadav34" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium"
          >
            View GitHub Profile <ExternalLink size={18} />
          </a>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-64 bg-slate-800/50 rounded-xl animate-pulse border border-slate-800" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => {
              const isHighlighted = HIGHLIGHTED_PROJECTS.some(p => repo.name.toLowerCase().includes(p.toLowerCase()));
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-slate-900 border ${isHighlighted ? 'border-accent/40 shadow-[0_0_15px_rgba(251,191,36,0.1)]' : 'border-slate-800'} rounded-xl p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Github size={100} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4 z-10">
                    <div className="bg-slate-800 p-2 rounded-lg text-accent">
                      <Github size={24} />
                    </div>
                    <div className="flex gap-3 text-slate-400">
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" title="Live Demo">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" title="Source Code">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-light transition-all">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow z-10 line-clamp-3">
                    {repo.description || 'No description provided.'}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-800 z-10">
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                      <span>{repo.language || 'Multiple'}</span>
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                        <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                      </div>
                    </div>
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {repo.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-md">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
