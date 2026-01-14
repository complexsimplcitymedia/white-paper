
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { NeuralMeshScene, DatabaseVisScene } from './components/WolfScene';
import { 
  MemoryFlowDiagram, 
  ArchitectureStackDiagram, 
  EconomicModelDiagram,
  InfrastructureMeshGrid,
  RepositoryMeshGrid,
  GlobalMetricsGrid
} from './components/Diagrams';
import { ArrowDown, Menu, X, Shield, Cpu, Database, Network, Zap, Globe, Activity, Terminal, Github, Code2, Quote, Smartphone, Monitor } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: string }) => {
  return (
    <div 
      className="flex flex-col p-8 bg-wolf-slate/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-wolf-cyan/30 transition-all duration-500 group"
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 rounded-xl bg-wolf-cyan/10 flex items-center justify-center mb-6 group-hover:bg-wolf-cyan/20 transition-colors">
        <Icon className="text-wolf-cyan" size={24} />
      </div>
      <h3 className="font-serif text-2xl text-white mb-3">{title}</h3>
      <p className="text-wolf-silver/60 leading-relaxed text-sm">{desc}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const brandingImg = "https://lh3.googleusercontent.com/a/ACg8ocIAf3moy1bgxW2Pbj_7pXbNSfg0Y6Q83ABzwWUlCwR2NUf0BMJhsA=s288-c-no";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-wolf-dark text-wolf-silver selection:bg-wolf-cyan selection:text-wolf-dark font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-wolf-dark/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative group">
              <div className="absolute inset-0 bg-wolf-cyan blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <img src={brandingImg} alt="Wolf" className="w-10 h-10 rounded-full border border-wolf-cyan/50 shadow-lg shadow-wolf-cyan/20 relative z-10 transition-transform group-hover:scale-110" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              WOLF<span className="text-wolf-cyan">LOGIC</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.15em] text-wolf-silver/60">
            <a href="#abstract" onClick={scrollToSection('abstract')} className="hover:text-wolf-cyan transition-colors uppercase">Abstract</a>
            <a href="#universal" onClick={scrollToSection('universal')} className="hover:text-wolf-cyan transition-colors uppercase">Universal</a>
            <a href="#mesh" onClick={scrollToSection('mesh')} className="hover:text-wolf-cyan transition-colors uppercase">The Mesh</a>
            <a href="#repos" onClick={scrollToSection('repos')} className="hover:text-wolf-cyan transition-colors uppercase">Codebases</a>
            <a 
              href="https://github.com/complexsimplcitymedia" 
              target="_blank"
              className="px-6 py-2 bg-white text-wolf-dark rounded-full hover:bg-wolf-cyan transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5 flex items-center gap-2"
            >
              <Github size={14} /> GITHUB
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-wolf-dark flex flex-col items-center justify-center gap-8 text-2xl font-serif">
            <a href="#abstract" onClick={scrollToSection('abstract')} className="hover:text-wolf-cyan">Abstract</a>
            <a href="#universal" onClick={scrollToSection('universal')} className="hover:text-wolf-cyan">Universal Node</a>
            <a href="#mesh" onClick={scrollToSection('mesh')} className="hover:text-wolf-cyan">Node Mesh</a>
            <a href="#repos" onClick={scrollToSection('repos')} className="hover:text-wolf-cyan">Repositories</a>
            <button onClick={() => setMenuOpen(false)} className="px-8 py-4 bg-wolf-cyan text-wolf-dark rounded-full font-bold">Access Mesh</button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <NeuralMeshScene />
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wolf-cyan/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-wolf-cyan blur-2xl opacity-20 animate-pulse"></div>
              <img src={brandingImg} alt="Wolf Avatar" className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-wolf-cyan/50 shadow-2xl relative z-10" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-wolf-cyan/30 text-wolf-cyan text-[10px] tracking-[0.3em] uppercase font-black rounded-full backdrop-blur-md bg-wolf-cyan/5">
              <Zap size={12} /> The wolf always eats. The wolf never forgets.
            </div>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-10 text-white tracking-tight">
            Universal <br/><span className="italic font-normal gradient-text">Persistence</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-wolf-silver/70 font-light leading-relaxed mb-16">
            Every AI model. Every OS. Every Person. <br className="hidden md:block"/> 
            A global scale deployment of the <span className="text-wolf-cyan font-mono font-bold">Persistent Cognitive State Layer</span>.
          </p>
          
          <div className="flex flex-col items-center gap-12">
             <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-wolf-dark rounded-xl font-bold hover:bg-wolf-cyan transition-all flex items-center gap-2 shadow-2xl shadow-wolf-cyan/20">
                   <Globe size={18} /> Visit Production Site
                </button>
                <button className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                   <Activity size={18} /> Node Status
                </button>
             </div>
             
             <a href="#abstract" onClick={scrollToSection('abstract')} className="group flex flex-col items-center gap-3 text-xs font-bold text-wolf-silver/40 hover:text-wolf-cyan transition-colors">
                <span>EXPLORE THE SCALE</span>
                <span className="p-3 border border-white/10 rounded-full group-hover:border-wolf-cyan/50 transition-colors bg-white/5">
                    <ArrowDown size={18} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Abstract */}
        <section id="abstract" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-block mb-4 text-xs font-black tracking-[0.2em] text-wolf-cyan uppercase">01 / The Vision</div>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight text-white font-bold">Absolute Retention</h2>
              <div className="w-20 h-1.5 bg-wolf-cyan mb-8 rounded-full shadow-lg shadow-wolf-cyan/40"></div>
              <p className="text-wolf-silver/50 text-sm font-mono leading-relaxed italic">
                "The wolf never forgets. Every interaction is vectorized, every session is persisted, across every platform."
              </p>
              
              <div className="mt-12 p-8 border border-white/5 bg-white/5 rounded-3xl relative">
                <Quote className="absolute -top-4 -left-4 text-wolf-cyan/20" size={64} />
                <p className="text-wolf-silver/80 italic font-serif text-lg relative z-10 leading-relaxed">
                  "The wolf always eats, the wolf never forgets. From Android clients to universal desktop nodes, the memory layer is absolute."
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 text-xl text-wolf-silver/80 leading-relaxed space-y-8 font-light">
              <p>
                <span className="text-7xl float-left mr-4 mt-[-4px] font-serif text-wolf-cyan font-bold">W</span>olf Logic has scaled to the ultimate threshold. We now orchestrate over <strong className="text-white">50 local LLMs</strong> and <strong className="text-white">310+ MCP servers</strong> through a unified memory substrate. 
              </p>
              <p>
                Our <strong className="text-white">Android-client nodes</strong> and <strong className="text-white">Universal Desktop nodes</strong> ensure that no matter the OS or model, the cognitive state remains synchronized. This is predatory intelligence—always watching, always learning, and never forgetting.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12">
                <FeatureCard 
                  icon={Smartphone} 
                  title="Android Nodes" 
                  desc="Mobile edge nodes bridging physical sensor data with the cognitive memory mesh."
                  delay="0s"
                />
                <FeatureCard 
                  icon={Monitor} 
                  title="Universal Desktop" 
                  desc="High-compute anchors for local vectorization and sub-millisecond memory retrieval."
                  delay="0.1s"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Metrics Grid */}
        <section id="universal" className="py-24 bg-wolf-slate/10 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4 italic tracking-tight">The Predator's Reach</h2>
                    <p className="text-wolf-silver/40 font-mono text-sm uppercase tracking-widest">Active Deployment Parameters</p>
                </div>
                <GlobalMetricsGrid />
            </div>
        </section>

        {/* Infrastructure Mesh Grid */}
        <section id="mesh" className="py-32 bg-wolf-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block mb-4 text-xs font-black tracking-[0.2em] text-wolf-cyan uppercase">02 / THE MESH</div>
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 text-white font-bold tracking-tight">The Wolf Node Stack</h2>
                    <p className="text-lg text-wolf-silver/60 leading-relaxed max-w-2xl mx-auto">
                        Countless Docker containers and edge nodes forming the backbone of a global memory layer.
                    </p>
                </div>
                
                <InfrastructureMeshGrid />
            </div>
        </section>

        {/* Repositories Section */}
        <section id="repos" className="py-32 relative overflow-hidden bg-wolf-dark border-t border-white/5">
             <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block mb-4 text-xs font-black tracking-[0.2em] text-wolf-cyan uppercase">03 / ECOSYSTEM SOURCE</div>
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 text-white font-bold tracking-tight">Code Origin Nodes</h2>
                    <p className="text-lg text-wolf-silver/60 leading-relaxed max-w-2xl mx-auto">
                        Defining the logic for biological metrics and universal markdown orchestration.
                    </p>
                </div>
                
                <RepositoryMeshGrid />
            </div>
        </section>

        {/* The System Architecture */}
        <section id="architecture" className="py-32 relative bg-wolf-slate/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div className="inline-block text-xs font-black tracking-[0.2em] text-wolf-cyan uppercase">04 / ARCHITECTURE</div>
                        <h2 className="font-serif text-5xl md:text-6xl text-white font-bold">Agentic Orchestration</h2>
                        <div className="p-1 border border-white/10 rounded-2xl bg-wolf-dark/50">
                            <div className="p-8 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-wolf-blue/20 flex items-center justify-center text-wolf-blue shadow-lg shadow-wolf-blue/20">
                                        <Cpu size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">310+ MCP Servers</h3>
                                </div>
                                <p className="text-wolf-silver/60">A massive army of Model Context Protocol endpoints bridging AnyLLM, Claude, and Gemini with the universal substrate.</p>
                            </div>
                            <div className="p-8 border-t border-white/5 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-wolf-cyan/20 flex items-center justify-center text-wolf-cyan shadow-lg shadow-wolf-cyan/20">
                                        <Activity size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">50+ Local LLMs</h3>
                                    <span className="ml-auto px-2 py-0.5 bg-wolf-cyan/10 text-wolf-cyan text-[10px] font-bold rounded animate-pulse">CLUSTER ONLINE</span>
                                </div>
                                <p className="text-wolf-silver/60">Dedicated private inference cluster across universal nodes, providing air-gapped cognitive security.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ArchitectureStackDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-32">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-wolf-blue/20 to-wolf-cyan/20 rounded-[40px] border border-wolf-cyan/30 backdrop-blur-xl relative overflow-hidden group shadow-2xl shadow-wolf-cyan/10">
                    <div className="absolute inset-0 bg-wolf-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src={brandingImg} alt="Wolf" className="w-16 h-16 rounded-full mx-auto mb-6 border-2 border-wolf-cyan shadow-lg relative z-10" />
                    <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 relative z-10 tracking-tight">The Wolf Never Forgets</h2>
                    <p className="text-xl text-wolf-silver/80 mb-12 relative z-10">Deploy your Android or Desktop node now. The wolf always eats. The wolf never forgets.</p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <button className="px-10 py-4 bg-white text-wolf-dark font-black rounded-2xl hover:bg-wolf-cyan hover:scale-105 transition-all shadow-xl flex items-center gap-3 font-mono tracking-tighter">
                            <Shield size={20} /> SECURE SSO LOGIN
                        </button>
                        <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all font-mono tracking-tighter">
                            NODE EXPLORER
                        </button>
                    </div>
                    <p className="mt-8 text-xs text-wolf-silver/40 font-mono uppercase tracking-widest italic font-bold">Every AI Model. Every OS. Every Person.</p>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-wolf-dark/50 border-t border-white/5 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <img src={brandingImg} alt="Wolf" className="w-8 h-8 rounded-full border border-wolf-cyan shadow-lg shadow-wolf-cyan/20" />
                    <span className="font-bold text-white tracking-tighter">WOLF LOGIC</span>
                </div>
                <p className="text-wolf-silver/40 text-sm leading-relaxed max-w-xs font-mono text-[10px] uppercase font-bold">
                    THE WOLF ALWAYS EATS. THE WOLF NEVER FORGETS. UNIVERSAL COGNITIVE SOVEREIGNTY.
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest text-wolf-cyan">Infrastructure</h4>
                    <nav className="flex flex-col gap-2 text-wolf-silver/40 text-sm font-medium">
                        <a href="https://portainer.wolf-logic-ai.com" target="_blank" className="hover:text-wolf-cyan transition-colors">Portainer Command</a>
                        <a href="https://grafana.wolf-logic-ai.com" target="_blank" className="hover:text-wolf-cyan transition-colors">Mesh Observability</a>
                        <a href="https://auth.complexsimplicityai.com" target="_blank" className="hover:text-wolf-cyan transition-colors">Authentik SSO Hub</a>
                    </nav>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest text-wolf-cyan">Access Nodes</h4>
                    <nav className="flex flex-col gap-2 text-wolf-silver/40 text-sm font-medium">
                        <a href="#" className="hover:text-wolf-cyan transition-colors">Android Mesh Client</a>
                        <a href="#" className="hover:text-wolf-cyan transition-colors">Universal Desktop EXE</a>
                        <a href="#" className="hover:text-wolf-cyan transition-colors">Ollama Local Cluster</a>
                    </nav>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest text-wolf-cyan">Global Connect</h4>
                <div className="flex gap-4">
                    <a href="https://github.com/complexsimplcitymedia" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-wolf-silver/60 hover:text-wolf-cyan hover:bg-white/10 transition-all cursor-pointer">
                        <Github size={18} />
                    </a>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-wolf-silver/60 hover:text-wolf-cyan hover:bg-white/10 transition-all cursor-pointer">
                        <Smartphone size={18} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-wolf-silver/60 hover:text-wolf-cyan hover:bg-white/10 transition-all cursor-pointer">
                        <Monitor size={18} />
                    </div>
                </div>
                <p className="text-wolf-silver/30 text-xs font-mono">Status: 50+ LLMs / 310+ MCPs / Every OS</p>
                <img src={brandingImg} alt="Wolf Small" className="w-6 h-6 rounded-full opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help" />
            </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-wolf-silver/20 uppercase tracking-[0.2em] font-black">
            <span>© 2026 COMPLEX SIMPLICITY AI</span>
            <span className="text-wolf-cyan animate-pulse">THE WOLF NEVER FORGETS</span>
            <span>WOLF LOGIC ECOSYSTEM VERSION 2.0.0-MAX</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
