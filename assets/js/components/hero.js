import { siteConfig } from '../config.js';
import { icons } from '../icons.js';

export function renderHero() {
  return `
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" id="hero">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Copy & Actions -->
          <div class="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            <!-- Futuristic Status Pill with Live Telemetry -->
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wide uppercase shadow-lg shadow-blue-500/10">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>SYS_TELEMETRY: ONLINE</span>
              <span class="text-slate-500">|</span>
              <span class="text-slate-300">QUANTUM CORE v4.2</span>
            </div>

            <!-- Main Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Build Your Future in Technology. <br />
              <span class="gradient-text">Learn. Innovate. Grow.</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              ${siteConfig.subtitle}
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#courses" data-nav="courses" class="btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-xl shadow-blue-600/30">
                <span>Explore Our Courses</span>
                ${icons.arrowRight}
              </a>
              <a href="#contact" data-nav="contact" class="btn-secondary w-full sm:w-auto text-base py-3.5 px-8">
                <span>Get In Touch</span>
                ${icons.externalLink}
              </a>
            </div>

            <!-- Heavy Telemetry Metric Dials -->
            <div class="pt-6 grid grid-cols-3 gap-3 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              
              <div class="p-3 rounded-xl bg-white/[0.02] border border-white/10 cyber-box">
                <div class="text-[10px] font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Latency
                </div>
                <div class="text-lg sm:text-xl font-mono font-bold text-white mt-0.5">
                  &lt; 18ms
                </div>
                <div class="text-[9px] text-slate-400 font-mono">Neural Inference</div>
              </div>

              <div class="p-3 rounded-xl bg-white/[0.02] border border-white/10 cyber-box">
                <div class="text-[10px] font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Precision
                </div>
                <div class="text-lg sm:text-xl font-mono font-bold text-white mt-0.5">
                  99.4%
                </div>
                <div class="text-[9px] text-slate-400 font-mono">Model Accuracy</div>
              </div>

              <div class="p-3 rounded-xl bg-white/[0.02] border border-white/10 cyber-box">
                <div class="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Rigor
                </div>
                <div class="text-lg sm:text-xl font-mono font-bold text-white mt-0.5">
                  100%
                </div>
                <div class="text-[9px] text-slate-400 font-mono">Practical Projects</div>
              </div>

            </div>

          </div>

          <!-- Right Column: Interactive Live AI & Coding Cyber Terminal -->
          <div class="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            <div class="relative w-full max-w-lg mx-auto hero-graphic-container flex flex-col items-center">
              
              <!-- Ambient Glow Backdrop -->
              <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-purple-600/20 to-cyan-400/25 rounded-full blur-3xl -z-10"></div>

              <!-- Tech Core Rings Visual (Compact & Sleek) -->
              <div class="tech-cube-wrapper mb-6 scale-90 sm:scale-100">
                <div class="tech-ring-1"></div>
                <div class="tech-ring-2"></div>
                
                <!-- Central Glowing Core -->
                <div class="tech-core">
                  <div class="text-center p-3">
                    <div class="text-cyan-400 mx-auto mb-1 flex justify-center">
                      ${icons.cpu}
                    </div>
                    <div class="text-xs font-mono font-bold tracking-wider text-white">AI / CORE</div>
                    <div class="text-[9px] font-mono text-cyan-300">ACTIVE ENGINE</div>
                  </div>
                </div>

                <!-- Floating Futuristic Badges -->
                <div class="floating-badge badge-top-left">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <div class="text-xs">
                    <span class="text-slate-400 block text-[9px] uppercase font-mono">Neural Net</span>
                    <span class="text-white font-bold font-mono">GenAI & LLMs</span>
                  </div>
                </div>

                <div class="floating-badge badge-top-right">
                  <span class="text-cyan-400">${icons.atom}</span>
                  <div class="text-xs">
                    <span class="text-slate-400 block text-[9px] uppercase font-mono">Frontend</span>
                    <span class="text-white font-bold font-mono">React & Next</span>
                  </div>
                </div>

                <div class="floating-badge badge-bottom-left">
                  <span class="text-blue-400">${icons.server}</span>
                  <div class="text-xs">
                    <span class="text-slate-400 block text-[9px] uppercase font-mono">Architecture</span>
                    <span class="text-white font-bold font-mono">Full Stack</span>
                  </div>
                </div>

                <div class="floating-badge badge-bottom-right">
                  <span class="text-purple-400">${icons.terminal}</span>
                  <div class="text-xs">
                    <span class="text-slate-400 block text-[9px] uppercase font-mono">Engine</span>
                    <span class="text-white font-bold font-mono">Python & ML</span>
                  </div>
                </div>
              </div>

              <!-- Interactive Cyber Terminal with Live Execution -->
              <div class="w-full code-terminal scanline-container neon-glow-border rounded-2xl relative shadow-2xl">
                <div class="hologram-scan"></div>
                
                <!-- Terminal Header Bar -->
                <div class="terminal-header bg-[#0B0F1D]/95 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div class="flex items-center gap-2">
                    <div class="terminal-dots">
                      <span class="terminal-dot bg-rose-500/80"></span>
                      <span class="terminal-dot bg-amber-500/80"></span>
                      <span class="terminal-dot bg-emerald-500/80"></span>
                    </div>
                    <span class="text-xs font-mono text-slate-400 pl-2">nexus-interactive-kernel.sh</span>
                  </div>
                  <div class="flex items-center gap-2 text-[10px] font-mono text-cyan-400">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>READY FOR RUN</span>
                  </div>
                </div>

                <!-- Interactive Command Preset Buttons -->
                <div class="bg-[#080C1B] px-3 py-2 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
                  <span class="text-[10px] font-mono uppercase text-slate-500 shrink-0">EXECUTE:</span>
                  <button data-preset="ai_inference" class="terminal-preset-btn px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-[11px] font-mono font-medium hover:bg-cyan-500/30 transition-all shrink-0">
                    1. AI Inference
                  </button>
                  <button data-preset="neural_train" class="terminal-preset-btn px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 text-[11px] font-mono font-medium hover:bg-white/10 hover:text-white transition-all shrink-0">
                    2. Train Neural Net
                  </button>
                  <button data-preset="fullstack_pipeline" class="terminal-preset-btn px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 text-[11px] font-mono font-medium hover:bg-white/10 hover:text-white transition-all shrink-0">
                    3. Deploy Web Stack
                  </button>
                </div>

                <!-- Active Command Display -->
                <div class="px-4 py-2 bg-[#060913] border-b border-white/5 font-mono text-xs text-white" id="terminalActiveCommand">
                  <span class="text-cyan-400">$</span> python -m nexustech.ai --inference --model llm-v4-instruct
                </div>

                <!-- Live Stream Console Log Output Window -->
                <div class="p-4 font-mono text-xs space-y-1.5 text-slate-300 bg-[#060913]/95 h-44 overflow-y-auto" id="terminalOutput">
                  <!-- Streamed by terminal.js -->
                </div>

                <!-- Terminal Footer Status -->
                <div class="px-4 py-2 bg-[#080B18] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span class="flex items-center gap-1.5 text-cyan-400">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> GPU TENSORS: ACTIVE
                  </span>
                  <span>CLICK PRESETS ABOVE TO RUN</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}
