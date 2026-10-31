import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderTrustSection() {
  return `
    <section class="py-20 relative z-10 border-t border-b border-white/[0.06] bg-[#0A0E21]/60" id="trust">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="badge-pill mb-4">
            <span>Our Core Philosophy</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Transforming Ideas Into <br class="hidden sm:inline" />
            <span class="gradient-text">Digital Possibilities</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            At ${siteConfig.companyName}, we bridge the divide between theoretical textbook concepts and the demands of modern software engineering. We combine state-of-the-art technology education with custom IT and AI engineering solutions to empower both ambitious learners and forward-thinking businesses.
          </p>
        </div>

        <!-- 3 Feature Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="glass-panel p-8 text-left group">
            <div class="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
              ${icons.graduationCap}
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              Technology Education
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
              Structured learning tracks in Web Development, Python, Machine Learning, and Generative AI curated for college students, beginners, and working professionals.
            </p>
            <div class="text-xs font-mono text-cyan-400 flex items-center gap-1">
              <span>EXPLORE CURRICULUM</span>
              ${icons.chevronRight}
            </div>
          </div>

          <div class="glass-panel p-8 text-left group">
            <div class="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
              ${icons.code2}
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              Practical & Project-Based
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
              Real coding from day one. Build end-to-end applications, deploy to live servers, review real architecture diagrams, and master version control workflows.
            </p>
            <div class="text-xs font-mono text-purple-400 flex items-center gap-1">
              <span>PROJECT-DRIVEN METHOD</span>
              ${icons.chevronRight}
            </div>
          </div>

          <div class="glass-panel p-8 text-left group">
            <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
              ${icons.bot}
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              AI Solutions & Consulting
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
              Providing enterprise clients with high-performing custom websites, intelligent AI integrations, workflow automation, and specialized technology consulting.
            </p>
            <div class="text-xs font-mono text-cyan-300 flex items-center gap-1">
              <span>ENTERPRISE SOLUTIONS</span>
              ${icons.chevronRight}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function renderWhyChooseUs() {
  return `
    <section class="py-24 relative z-10" id="why-choose-us">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="badge-pill mb-4">
            <span>Why Learn With Us</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered For Real World <br />
            <span class="gradient-text">Excellence and Impact</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-lg">
            We focus on developing genuine engineering competence and confidence rather than passive rote memorization.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${siteConfig.whyChooseUs.map((item, idx) => `
            <div class="glass-panel p-7 group hover:border-blue-500/40">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all">
                  ${getIcon(item.icon, "w-6 h-6")}
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    ${item.title}
                  </h3>
                  <p class="text-slate-400 text-sm leading-relaxed">
                    ${item.description}
                  </p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
