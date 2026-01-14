
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, RotateCcw, Activity, Cpu, BarChart2, Save, 
  Search, Share2, Layers, Shield, Globe, Terminal, 
  Database, Server, Settings, Zap, ZapOff, Github, Code2, 
  GitBranch, GitPullRequest, Bookmark, Box, Smartphone, Monitor
} from 'lucide-react';

// --- GLOBAL METRICS GRID ---
export const GlobalMetricsGrid: React.FC = () => {
  const metrics = [
    { label: "Local LLMs", value: "50+", icon: Cpu, sub: "Distributed Inference Cluster" },
    { label: "MCP Servers", value: "310+", icon: Zap, sub: "Model Context Protocol Hubs" },
    { label: "Edge Containers", value: "Countless", icon: Box, sub: "Universal Microservice Mesh" },
    { label: "Client Reach", value: "Universal", icon: Globe, sub: "Every OS. Every Person." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-8 bg-wolf-dark/40 border border-white/5 rounded-[24px] hover:border-wolf-cyan/30 transition-all group"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-wolf-cyan/10 rounded-xl group-hover:bg-wolf-cyan/20 transition-colors">
              <metric.icon className="text-wolf-cyan" size={24} />
            </div>
          </div>
          <div className="text-5xl font-serif font-bold text-white mb-2 tracking-tighter italic">{metric.value}</div>
          <div className="text-sm font-bold text-wolf-silver/60 uppercase tracking-widest">{metric.label}</div>
          <div className="mt-4 pt-4 border-t border-white/5 text-[10px] font-mono text-wolf-silver/30 uppercase tracking-[0.2em]">
            {metric.sub}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- MEMORY FLOW DIAGRAM ---
export const MemoryFlowDiagram: React.FC = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 5);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { label: "Conversation Stream", icon: Share2, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Scripty Chunking", icon: Layers, color: "text-purple-400", bg: "bg-purple-400/10" },
    { label: "Librarian Embedding", icon: Cpu, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { label: "Vector Storage", icon: Save, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Semantic Search", icon: Search, color: "text-wolf-cyan", bg: "bg-wolf-cyan/10" }
  ];

  return (
    <div className="flex flex-col items-center p-10 bg-wolf-slate/40 backdrop-blur-xl rounded-[32px] border border-white/5 my-8 relative overflow-hidden group shadow-2xl shadow-wolf-cyan/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-wolf-cyan shadow-[0_0_15px_#22D3EE]"
          initial={{ width: "0%" }}
          animate={{ width: `${(step + 1) * 20}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <h3 className="font-serif text-2xl mb-2 text-white font-bold tracking-tight">The Cognitive Loop</h3>
      <p className="text-sm text-wolf-silver/40 mb-12 text-center max-w-md italic">
        "The wolf never forgets." Visualizing the lifecycle of a memory across the universal mesh.
      </p>

      <div className="relative flex items-center justify-between w-full max-w-2xl px-4 py-12">
        {steps.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4 relative z-10 group/item">
            <motion.div
              animate={{
                scale: step === i ? 1.2 : 1,
                borderColor: step === i ? "rgba(34, 211, 238, 0.6)" : "rgba(255, 255, 255, 0.05)",
                backgroundColor: step === i ? "rgba(34, 211, 238, 0.1)" : "rgba(15, 23, 42, 0.4)",
              }}
              className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500`}
            >
              <item.icon className={step === i ? 'text-wolf-cyan' : 'text-wolf-silver/20'} size={24} />
            </motion.div>
            <div className={`text-[10px] uppercase font-black tracking-widest text-center transition-colors duration-500 ${step === i ? 'text-white' : 'text-wolf-silver/10'}`}>
              {item.label}
            </div>
            
            {/* Connector Line */}
            {i < steps.length - 1 && (
              <div className="absolute top-8 left-16 w-full h-[1px] bg-white/5 -z-10">
                <motion.div 
                  className="h-full bg-wolf-cyan/30"
                  initial={{ width: "0%" }}
                  animate={{ width: step > i ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-4 bg-wolf-dark/50 border border-white/5 rounded-xl w-full">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-wolf-cyan animate-pulse"></div>
            <span className="text-xs font-mono text-wolf-silver/60 uppercase">System Heartbeat: {steps[step].label}</span>
        </div>
        <div className="font-mono text-[11px] text-wolf-silver/40">
          {step === 0 && "> Ingesting Android Node sensor data and interaction stream..."}
          {step === 1 && "> Tokenizing via Desktop Node cluster. Applying predatory chunking..."}
          {step === 2 && "> Inference cluster running embedding logic. Dimensions: 4096..."}
          {step === 3 && "> Storing in universal vector substrate. Resilience: Absolute..."}
          {step === 4 && "> The wolf remembers. Context successfully retrieved from the layer."}
        </div>
      </div>
    </div>
  );
};

// --- REPOSITORY MESH GRID ---
export const RepositoryMeshGrid: React.FC = () => {
  const repos = [
    { 
      name: "bio-wolf-metrics", 
      url: "https://github.com/complexsimplcitymedia/bio-wolf.git", 
      desc: "Physiological and biological node metrics for real-time cognitive monitoring.",
      icon: Activity, 
      color: "text-emerald-400" 
    },
    { 
      name: "md-app", 
      url: "https://github.com/complexsimplcitymedia/md-app.git", 
      desc: "The markdown engine powering the Persistent Cognitive Layer's universal UI.",
      icon: Bookmark, 
      color: "text-blue-400" 
    },
    { 
      name: "page-portfolio", 
      url: "https://github.com/complexsimplcitymedia/page-portfolio.git", 
      desc: "Presentation layer for the Wolf Logic mesh and production portfolio.",
      icon: Globe, 
      color: "text-wolf-cyan" 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {repos.map((repo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="group p-8 bg-wolf-slate/20 border border-white/5 rounded-3xl hover:border-wolf-cyan/50 hover:bg-wolf-cyan/5 transition-all duration-500"
        >
          <div className="flex items-center justify-between mb-8">
            <div className={`p-4 rounded-2xl bg-white/5 ${repo.color}`}>
              <repo.icon size={28} />
            </div>
            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-wolf-silver/20 hover:text-wolf-cyan transition-colors">
              <Github size={20} />
            </a>
          </div>
          
          <h4 className="text-2xl font-serif font-bold text-white mb-4 italic tracking-tight">{repo.name}</h4>
          <p className="text-sm text-wolf-silver/50 leading-relaxed mb-8 h-12 overflow-hidden">
            {repo.desc}
          </p>
          
          <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-wolf-silver/30 uppercase">
             <div className="flex items-center gap-1.5"><GitBranch size={12} /> main</div>
             <div className="flex items-center gap-1.5"><GitPullRequest size={12} /> active</div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5">
             <a 
               href={repo.url} 
               target="_blank" 
               className="text-[11px] font-mono text-wolf-cyan/60 hover:text-wolf-cyan transition-colors break-all"
             >
               {repo.url}
             </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- INFRASTRUCTURE MESH GRID ---
export const InfrastructureMeshGrid: React.FC = () => {
  const containers = [
    { name: "Android Client", url: "android.wolf-logic-ai.com", role: "Mobile Edge Node", icon: Smartphone, color: "text-emerald-400" },
    { name: "Universal Desktop", url: "desktop.wolf-logic-ai.com", role: "Compute Anchor", icon: Monitor, color: "text-blue-400" },
    { name: "Authentik Hub", url: "auth.complexsimplicityai.com", role: "Sovereign Identity", icon: Shield, color: "text-red-400" },
    { name: "MCP Mesh", url: "mcp.wolf-logic-ai.com", role: "310+ Servers Active", icon: Zap, color: "text-yellow-400" },
    { name: "AnyLLM Cluster", url: "anyllm.wolf-logic-ai.com", role: "50+ Models Active", icon: Terminal, color: "text-green-400" },
    { name: "Nextcloud Backend", url: "cloud.complexsimplicityai.com", role: "Memory Vault", icon: Database, color: "text-cyan-400" },
    { name: "Prometheus Hub", url: "health.wolf-logic-ai.com", role: "Cognitive Pulse", icon: Activity, color: "text-emerald-400" },
    { name: "Caddy Gateway", url: "wolf-logic-ai.com", role: "Universal Proxy", icon: Globe, color: "text-indigo-400" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {containers.map((container, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="group relative p-6 bg-wolf-dark/80 border border-white/5 rounded-2xl hover:border-wolf-cyan/40 hover:bg-wolf-cyan/5 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-white/5 ${container.color}`}>
              <container.icon size={20} />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
              <span className="text-[10px] font-mono text-emerald-500/80 font-bold tracking-tighter uppercase">Online</span>
            </div>
          </div>
          <h4 className="text-white font-bold text-lg mb-1">{container.name}</h4>
          <div className="text-[10px] text-wolf-silver/40 font-mono mb-4 uppercase tracking-widest">{container.role}</div>
          <div className="text-[11px] text-wolf-cyan/60 font-mono truncate border-t border-white/5 pt-4 group-hover:text-wolf-cyan transition-colors">
            {container.url}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- ARCHITECTURE STACK ---
export const ArchitectureStackDiagram: React.FC = () => {
  const layers = [
    { title: "User Entry Points", items: ["Android Client", "Universal Desktop", "AnyLLM", "OpenWebUI"], color: "from-blue-500/20 to-blue-600/20" },
    { title: "Inference Mesh", items: ["50+ Local LLMs", "Ollama Cluster", "vLLM Nodes", "RTX Distributed"], color: "from-emerald-500/20 to-emerald-600/20" },
    { title: "Persistence Core", items: ["310+ MCP Servers", "pgvector", "PostgreSQL Hub", "Authentik SSO"], color: "from-red-500/20 to-red-600/20" },
    { title: "Universal Mesh", items: ["Caddy Proxy", "Docker Swarm", "Every OS Target", "Every Person"], color: "from-purple-500/20 to-purple-600/20" },
  ];

  return (
    <div className="flex flex-col gap-4 p-8 bg-wolf-dark rounded-[32px] border border-white/10 shadow-2xl">
      <h3 className="text-white font-serif text-xl mb-6 font-bold flex items-center gap-2">
        <Layers size={20} className="text-wolf-cyan" /> Universal Mesh Topology
      </h3>
      {layers.map((layer, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`p-5 rounded-2xl bg-gradient-to-r ${layer.color} border border-white/5 backdrop-blur-sm group hover:border-white/20 transition-all`}
        >
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">{layer.title}</div>
          <div className="flex flex-wrap gap-2">
            {layer.items.map((item, j) => (
              <span key={j} className="px-3 py-1 bg-black/40 text-wolf-silver/80 rounded-md text-[10px] font-mono border border-white/5 group-hover:border-wolf-cyan/30 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- ECONOMIC MODEL DIAGRAM ---
export const EconomicModelDiagram: React.FC = () => {
    const [tier, setTier] = useState<'Free' | 'Compute' | 'Premium'>('Compute');
    
    const data = {
        Free: { cost: 0, memory: 5, compute: "Local Only", features: ["On-device Storage", "Basic LLM Only"] },
        Compute: { cost: 10, memory: 50, compute: "Mesh Cluster", features: ["50+ Model Access", "Vector Sync"] },
        Premium: { cost: 15, memory: "Infinite", compute: "Universal", features: ["All 310+ MCPs", "Global Sovereignty"] } 
    };

    const current = data[tier];

    return (
        <div className="flex flex-col md:flex-row gap-12 items-stretch p-12 bg-wolf-slate/30 text-wolf-silver rounded-[32px] my-8 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="flex-1 space-y-8">
                <div>
                    <h3 className="font-serif text-3xl mb-4 text-white font-bold tracking-tight italic">Resource Allocation</h3>
                    <p className="text-wolf-silver/40 text-sm leading-relaxed">
                        Scale your cognitive capacity. The wolf always eats. Secure your persistent memory through our flexible node distribution.
                    </p>
                </div>

                <div className="flex gap-2">
                    {(Object.keys(data) as Array<keyof typeof data>).map((t) => (
                        <button 
                            key={t}
                            onClick={() => setTier(t)} 
                            className={`px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${tier === t ? 'bg-wolf-cyan text-wolf-dark border-wolf-cyan shadow-lg shadow-wolf-cyan/20' : 'bg-white/5 text-wolf-silver/40 border-white/5 hover:border-white/20 hover:text-white'}`}
                        >
                            {t.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="space-y-4 pt-4">
                    {current.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-wolf-cyan animate-pulse"></div>
                            <span className="text-wolf-silver/70 font-mono tracking-tighter uppercase text-[11px]">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative w-full md:w-80 p-8 bg-wolf-dark/80 rounded-[40px] border border-white/10 flex flex-col items-center justify-center gap-6 group overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-wolf-cyan/5 to-transparent pointer-events-none"></div>
                
                <div className="text-sm font-mono text-wolf-silver/30 uppercase tracking-[0.3em]">Monthly Unit</div>
                <div className="text-8xl font-serif font-bold text-white relative italic">
                   <span className="text-3xl align-top mr-2 text-wolf-cyan">$</span>
                   <motion.span
                     key={tier}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                   >
                     {current.cost}
                   </motion.span>
                </div>
                
                <div className="w-full h-[1px] bg-white/5"></div>
                
                <div className="text-center">
                    <div className="text-[10px] font-black uppercase text-wolf-silver/30 tracking-widest mb-1">Compute Layer</div>
                    <div className="text-xl font-bold text-white italic">{current.compute}</div>
                </div>

                <button className="w-full py-4 bg-white text-wolf-dark font-black rounded-2xl hover:bg-wolf-cyan hover:scale-105 transition-all shadow-xl font-mono uppercase tracking-widest text-[11px]">
                    ACTIVATE NODE
                </button>
            </div>
        </div>
    )
}
