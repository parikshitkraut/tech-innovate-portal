import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderTrustSection() {
  return `
    <section class="py-28 relative z-10 border-t border-b border-white/[0.08] bg-[#0A0E21]/60" id="trust">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>The Innovation Architecture</span>
          </div>
          <h2 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Transforming Ideas Into <br />
            <span class="iridescent-text">Digital Possibilities.</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-xl font-normal leading-relaxed tracking-tight">
            At ${siteConfig.companyName}, we engineer education for the modern era. We unite hands-on software development with applied Artificial Intelligence and enterprise IT solutions.
          </p>
        </div>

        <!-- Apple-Style Cinematic Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <!-- Bento Tile 1: Massive 8-Column Feature Tile -->
          <div class="md:col-span-8 bento-card p-8 sm:p-12 flex flex-col justify-between group">
            <div class="hologram-glare"></div>
            <div class="relative z-10 space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-lg mb-6">
                <div class="w-full h-full bg-[#0E1428] rounded-[15px] flex items-center justify-center text-cyan-400">
                  ${icons.graduationCap}
                </div>
              </div>
              <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                FLAGSHIP METHODOLOGY
              </span>
              <h3 class="apple-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Practical Learning. Zero Fluff. Pure Engineering.
              </h3>
              <p class="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                We believe you learn software by writing software. Every concept is tested through live code execution, real-world bug diagnosis, git commit workflows, and cloud deployments.
              </p>
            </div>

            <div class="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
              <div>
                <div class="text-2xl font-bold text-white font-mono">100%</div>
                <div class="text-xs text-slate-400 font-medium">Hands-on Execution</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-cyan-400 font-mono">ES6+ / AI</div>
                <div class="text-xs text-slate-400 font-medium">Modern Currency</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-purple-400 font-mono">Git-First</div>
                <div class="text-xs text-slate-400 font-medium">Source Workflow</div>
              </div>
            </div>
          </div>

          <!-- Bento Tile 2: 4-Column AI & Generative Intelligence -->
          <div class="md:col-span-4 bento-card p-8 sm:p-10 flex flex-col justify-between group">
            <div class="hologram-glare"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                ${icons.sparkles}
              </div>
              <span class="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold block mb-2">
                STATE-OF-THE-ART
              </span>
              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Generative AI & LLMs
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                Master Prompt Engineering, Transformer architectures, RAG pipelines, and Vector Databases to build intelligent next-gen apps.
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 relative z-10 flex items-center justify-between text-xs text-purple-400 font-mono font-semibold">
              <span>EXPLORE AI TRACK</span>
              ${icons.arrowRight}
            </div>
          </div>

          <!-- Bento Tile 3: 4-Column Full-Stack Architecture -->
          <div class="md:col-span-4 bento-card p-8 sm:p-10 flex flex-col justify-between group">
            <div class="hologram-glare"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                ${icons.layers}
              </div>
              <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                FULL ECOSYSTEM
              </span>
              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Full-Stack Architecture
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                From responsive React user interfaces to scalable Node.js microservices and NoSQL/SQL databases deployed on cloud clusters.
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 relative z-10 flex items-center justify-between text-xs text-cyan-400 font-mono font-semibold">
              <span>EXPLORE STACK</span>
              ${icons.arrowRight}
            </div>
          </div>

          <!-- Bento Tile 4: 8-Column Enterprise IT Solutions -->
          <div class="md:col-span-8 bento-card p-8 sm:p-12 flex flex-col justify-between group">
            <div class="hologram-glare"></div>
            <div class="relative z-10 space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                ${icons.bot}
              </div>
              <span class="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold block">
                ENTERPRISE SERVICES
              </span>
              <h3 class="apple-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                AI Solutions & Technology Consulting
              </h3>
              <p class="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                We empower businesses across India and internationally with custom website development, AI-based workflow automations, and strategic digital modernization advisory.
              </p>
            </div>

            <div class="pt-8 border-t border-white/10 relative z-10 flex flex-wrap items-center justify-between gap-4">
              <span class="text-xs text-slate-400 font-mono">
                Serving Businesses in India & Globally
              </span>
              <button onclick="window.openEnquiryModal('Enterprise Project Discussion')" class="apple-btn-primary text-xs py-2 px-5">
                <span>Request Enterprise Proposal</span>
                ${icons.arrowRight}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function renderWhyChooseUs() {
  return `
    <section class="py-28 relative z-10" id="why-choose-us">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>The Competitive Edge</span>
          </div>
          <h2 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-4">
            Engineered For Impact. <br />
            <span class="iridescent-text">Built For The Real World.</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-xl font-normal tracking-tight">
            We focus on developing genuine engineering competence and confidence rather than passive memorization.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${siteConfig.whyChooseUs.map((item, idx) => `
            <div class="bento-card p-8 group">
              <div class="hologram-glare"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/15 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                  ${getIcon(item.icon, "w-7 h-7")}
                </div>
                <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Pillar 0${idx + 1}</div>
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  ${item.title}
                </h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                  ${item.description}
                </p>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
