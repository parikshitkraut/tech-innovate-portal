import { siteConfig } from '../config.js';
import { icons } from '../icons.js';

export function renderHero() {
  return `
    <section class="relative pt-36 pb-24 md:pt-44 md:pb-36 overflow-hidden" id="hero">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Apple-Style Dynamic Island Pill Announcement -->
        <div class="flex justify-center mb-8 px-2">
          <div class="dynamic-island cursor-pointer group" onclick="window.openEnquiryModal('General Admission / Technology Consultation')">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping shrink-0"></span>
            <span class="text-[11px] sm:text-sm font-semibold text-white tracking-tight text-center">
              Next-Gen IT & AI Education &bull; Guided by Dr. Pravin Kale & Dr. Sandeep Kale
            </span>
            <span class="text-cyan-400 group-hover:translate-x-1 transition-transform text-xs shrink-0">
              ${icons.arrowRight}
            </span>
          </div>
        </div>

        <!-- Main Apple-Style Cinematic Headline -->
        <div class="text-center max-w-4xl mx-auto space-y-6">
          <h1 class="apple-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.04]">
            Build Your Future. <br />
            <span class="iridescent-text">Learn. Innovate. Grow.</span>
          </h1>

          <p class="text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
            ${siteConfig.subtitle}
          </p>

          <!-- Apple Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#courses" data-nav="courses" class="apple-btn-primary w-full sm:w-auto text-base">
              <span>Explore The Lineup</span>
              ${icons.arrowRight}
            </a>
            <a href="#contact" data-nav="contact" class="apple-btn-secondary w-full sm:w-auto text-base">
              <span>Connect With Us</span>
              ${icons.externalLink}
            </a>
          </div>

          <!-- Apple Spec Numbers Banner -->
          <div class="pt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/10">
            <div>
              <div class="spec-number text-3xl sm:text-4xl text-white">4x</div>
              <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium tracking-tight">Deeper Practical Coding</div>
            </div>
            <div>
              <div class="spec-number text-3xl sm:text-4xl iridescent-text">100%</div>
              <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium tracking-tight">Hands-on Production Code</div>
            </div>
            <div>
              <div class="spec-number text-3xl sm:text-4xl text-cyan-400">&lt; 18ms</div>
              <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium tracking-tight">Neural Model Inference</div>
            </div>
          </div>
        </div>

        <!-- Apple-Style "Pro Studio" Interactive Showcase Window -->
        <div class="mt-16 max-w-5xl mx-auto relative">
          
          <!-- Outer Ambient Glow Aura -->
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/25 to-cyan-400/30 rounded-[2.5rem] blur-3xl -z-10 opacity-70"></div>

          <!-- Studio Titanium Chassis -->
          <div class="bento-card p-6 sm:p-10 border border-white/20 shadow-2xl relative overflow-hidden">
            <div class="hologram-glare"></div>
            <div class="hologram-scan"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <!-- Left: Tech Ring Holographic Gyroscope Core -->
              <div class="lg:col-span-5 flex flex-col items-center justify-center text-center">
                <div class="tech-cube-wrapper scale-95 sm:scale-105 my-4">
                  <div class="tech-ring-1"></div>
                  <div class="tech-ring-2"></div>
                  
                  <!-- Central Glowing Core -->
                  <div class="tech-core">
                    <div class="text-center p-3">
                      <div class="text-cyan-400 mx-auto mb-1 flex justify-center">
                        ${icons.cpu}
                      </div>
                      <div class="text-xs font-mono font-bold tracking-wider text-white">PRO / CORE</div>
                      <div class="text-[9px] font-mono text-cyan-300">NEURAL ENGINE</div>
                    </div>
                  </div>

                  <!-- Floating Badges -->
                  <div class="floating-badge badge-top-left">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span class="text-white font-bold font-mono text-xs">GenAI / LLMs</span>
                  </div>

                  <div class="floating-badge badge-top-right">
                    <span class="text-cyan-400">${icons.atom}</span>
                    <span class="text-white font-bold font-mono text-xs">React & Next</span>
                  </div>

                  <div class="floating-badge badge-bottom-left">
                    <span class="text-blue-400">${icons.server}</span>
                    <span class="text-white font-bold font-mono text-xs">Full Stack</span>
                  </div>

                  <div class="floating-badge badge-bottom-right">
                    <span class="text-purple-400">${icons.terminal}</span>
                    <span class="text-white font-bold font-mono text-xs">Python & ML</span>
                  </div>
                </div>

                <div class="mt-4 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>ACTIVE HARDWARE ACCELERATION</span>
                </div>
              </div>

              <!-- Right: Interactive Live Execution Kernel -->
              <div class="lg:col-span-7">
                <div class="code-terminal scanline-container neon-glow-border rounded-2xl overflow-hidden shadow-2xl">
                  
                  <!-- Studio Header Bar -->
                  <div class="terminal-header bg-[#0B0F1D]/95 px-4 py-3 flex items-center justify-between border-b border-white/10">
                    <div class="flex items-center gap-2">
                      <div class="terminal-dots">
                        <span class="terminal-dot bg-rose-500/80"></span>
                        <span class="terminal-dot bg-amber-500/80"></span>
                        <span class="terminal-dot bg-emerald-500/80"></span>
                      </div>
                      <span class="text-xs font-mono text-slate-300 pl-2">aitech-kernel.sh</span>
                    </div>
                    <div class="text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                      <span>STREAM: READY</span>
                    </div>
                  </div>

                  <!-- Interactive Preset Buttons -->
                  <div class="bg-[#080C1B] px-3 py-2 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
                    <span class="text-[10px] font-mono uppercase text-slate-500 shrink-0">EXECUTE:</span>
                    <button data-preset="ai_inference" class="terminal-preset-btn px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-medium hover:bg-cyan-500/30 transition-all shrink-0">
                      1. AI Inference (LLM / RAG)
                    </button>
                    <button data-preset="neural_train" class="terminal-preset-btn px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-mono font-medium hover:bg-white/10 hover:text-white transition-all shrink-0">
                      2. Train Neural Net
                    </button>
                    <button data-preset="fullstack_pipeline" class="terminal-preset-btn px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-mono font-medium hover:bg-white/10 hover:text-white transition-all shrink-0">
                      3. Deploy Web Stack
                    </button>
                  </div>

                  <!-- Active Command Display -->
                  <div class="px-4 py-2 bg-[#060913] border-b border-white/5 font-mono text-xs text-white" id="terminalActiveCommand">
                    <span class="text-cyan-400">$</span> python -m aitech.core --inference --model llm-v4-instruct
                  </div>

                  <!-- Output Console -->
                  <div class="p-4 font-mono text-xs space-y-1.5 text-slate-300 bg-[#060913]/95 h-44 overflow-y-auto" id="terminalOutput">
                    <!-- Streamed dynamically by terminal.js -->
                  </div>

                  <!-- Status Bar -->
                  <div class="px-4 py-2 bg-[#080B18] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span class="text-cyan-400 flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> GPU TENSORS: OPTIMIZED
                    </span>
                    <span>CLICK PRESETS ABOVE TO RUN</span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
