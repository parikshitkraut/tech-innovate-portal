import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderTechStack() {
  return `
    <section class="py-24 relative z-10 border-t border-b border-white/[0.08] bg-[#0A0E21]/40" id="technologies">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>Modern Engineering Ecosystem</span>
          </div>
          <h2 class="apple-display text-4xl sm:text-5xl font-extrabold text-white tracking-tighter mb-4">
            Master The Tools Powering <br />
            <span class="iridescent-text">Global Digital Standards.</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-lg tracking-tight">
            We train and build using industry-standard enterprise frameworks, modern runtimes, and artificial intelligence pipelines.
          </p>
        </div>

        <!-- Tech Badges Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          ${siteConfig.technologies.map(tech => `
            <div class="bento-card p-5 text-center group hover:-translate-y-1">
              <div class="hologram-glare"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 mx-auto rounded-2xl bg-white/[0.04] border border-white/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-all">
                  ${getIcon(tech.icon, "w-7 h-7")}
                </div>
                <div class="font-bold text-white text-base mb-1 group-hover:text-cyan-400 transition-colors">
                  ${tech.name}
                </div>
                <div class="text-[11px] font-mono text-slate-400">
                  ${tech.category}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

export function renderServicesSection(isFullPage = false) {
  return `
    <section class="${isFullPage ? 'py-12' : 'py-28'} relative z-10" id="services">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>Enterprise & Development Services</span>
          </div>
          <h2 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-4">
            Engineering Digital Systems for <br />
            <span class="iridescent-text">Modern Businesses.</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-xl font-normal tracking-tight">
            Beyond education, we build custom high-performance websites, AI automations, and provide technology consulting for businesses in India and internationally.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${siteConfig.services.map(service => `
            <div class="bento-card p-8 flex flex-col justify-between group tilt-card">
              <div class="hologram-glare"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-white/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all">
                  ${getIcon(service.icon, "w-8 h-8")}
                </div>

                <h3 class="apple-display text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  ${service.name}
                </h3>

                <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  ${service.shortDesc}
                </p>

                <div class="space-y-2.5 mb-8">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Capabilities:</div>
                  <ul class="space-y-2 text-xs text-slate-300">
                    ${service.features.map(feat => `
                      <li class="flex items-start gap-2.5">
                        <span class="text-cyan-400 mt-0.5 shrink-0">${icons.check}</span>
                        <span>${feat}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <div class="pt-6 border-t border-white/10 relative z-10">
                <button onclick="window.openEnquiryModal('Service Consultation: ${service.name}')" 
                        class="apple-btn-secondary w-full justify-center text-xs py-3">
                  <span>Enquire For Service</span>
                  ${icons.arrowRight}
                </button>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
