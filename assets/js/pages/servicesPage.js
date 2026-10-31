import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderServicesPage() {
  return `
    <div class="pt-28 pb-20 relative z-10" id="servicesPage">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="badge-pill mb-4">
            <span>Enterprise IT & AI Solutions</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineering Digital Systems for <br />
            <span class="gradient-text">Modern Organizations</span>
          </h1>
          <p class="text-slate-300 text-lg leading-relaxed">
            We partner with startups, expanding businesses, and academic organizations across India and internationally to design, architect, and deploy high-performance websites, AI automations, and scalable technical infrastructure.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          ${siteConfig.services.map(service => `
            <div class="glass-panel p-8 flex flex-col justify-between group border border-white/10 hover:border-cyan-500/40">
              
              <div>
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-white/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                  ${getIcon(service.icon, "w-8 h-8")}
                </div>

                <h2 class="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  ${service.name}
                </h2>

                <p class="text-slate-300 text-sm leading-relaxed mb-6">
                  ${service.shortDesc}
                </p>

                <div class="space-y-3 mb-8">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Core Capabilities:</div>
                  <ul class="space-y-2 text-xs text-slate-300">
                    ${service.features.map(f => `
                      <li class="flex items-start gap-2.5">
                        <span class="text-cyan-400 mt-0.5 shrink-0">${icons.check}</span>
                        <span>${f}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <div class="pt-6 border-t border-white/10 space-y-2">
                <button onclick="window.openEnquiryModal('Service Consultation: ${service.name}')" 
                        class="btn-primary w-full justify-center text-xs py-3 shadow-md shadow-blue-500/20">
                  <span>Request Proposal / Consultation</span>
                  ${icons.arrowRight}
                </button>
              </div>

            </div>
          `).join('')}
        </div>

        <!-- Development Process Framework -->
        <div class="glass-panel p-8 sm:p-12 mb-20 bg-[#0B0F24]/80">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">Our Engineering Methodology</h3>
            <p class="text-slate-400 text-sm">How we guarantee on-time, bug-free, and high-performance delivery.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-cyan-400 font-mono text-sm font-bold mb-2">01. Discovery</div>
              <h4 class="text-white font-bold text-base mb-1">Architecture Planning</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Requirement gathering, user journey definition, and system architecture design.</p>
            </div>
            <div class="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-blue-400 font-mono text-sm font-bold mb-2">02. Design</div>
              <h4 class="text-white font-bold text-base mb-1">UI/UX & Prototyping</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Interactive wireframes, responsive design systems, and client alignment.</p>
            </div>
            <div class="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-purple-400 font-mono text-sm font-bold mb-2">03. Build</div>
              <h4 class="text-white font-bold text-base mb-1">Agile Engineering</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Clean code, automated tests, scalable databases, and security hardening.</p>
            </div>
            <div class="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-emerald-400 font-mono text-sm font-bold mb-2">04. Deploy</div>
              <h4 class="text-white font-bold text-base mb-1">Cloud Launch & Support</h4>
              <p class="text-slate-400 text-xs leading-relaxed">CI/CD deployment, performance monitoring, and SLA-backed maintenance.</p>
            </div>
          </div>
        </div>

        <!-- Enterprise CTA -->
        <div class="text-center">
          <button onclick="window.openEnquiryModal('Enterprise Project Discussion')" class="btn-primary text-sm py-3.5 px-8">
            <span>Schedule a Technical Discovery Call</span>
            ${icons.arrowRight}
          </button>
        </div>

      </div>
    </div>
  `;
}
