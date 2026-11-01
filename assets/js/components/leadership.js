import { siteConfig } from '../config.js';
import { icons } from '../icons.js';

export function renderLeadershipSection() {
  return `
    <section class="py-24 relative z-10" id="leadership">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="badge-pill mb-4">
            <span>Executive Leadership & Vision</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Guided by Visionary <br />
            <span class="gradient-text">Founders & Innovators</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-lg">
            Dedicated to advancing practical IT education and intelligent digital solutions for the next generation of engineers and enterprises.
          </p>
        </div>

        <!-- Founder & Co-Founder Hologram Cyber Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          ${siteConfig.founders.map(founder => `
            <div class="glass-panel p-8 sm:p-10 flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-cyan-500/50 tilt-card cyber-box scanline-container">
              
              <!-- Holographic Glare Overlay that reacts to mouse -->
              <div class="hologram-glare"></div>

              <!-- Top Hologram Laser Scan Line -->
              <div class="hologram-scan"></div>

              <!-- Corner Ambient Light -->
              <div class="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-cyan-400/25 transition-all"></div>

              <div class="relative z-10">
                
                <!-- Biometric Header Tag -->
                <div class="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-[10px] font-mono">
                  <span class="text-cyan-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    ${founder.role === 'Founder' ? 'FOUNDER EXEC ID: PK-001' : 'CO-FOUNDER EXEC ID: SK-002'}
                  </span>
                  <span class="text-slate-400 uppercase tracking-widest bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                    LEVEL-5 CLEARANCE
                  </span>
                </div>

                <!-- Top Row: Photo Frame & Role Badge -->
                <div class="flex items-center gap-6 mb-6">
                  
                  <!-- Photo Container / Hologram Frame -->
                  <div class="relative shrink-0">
                    <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[2px] shadow-xl shadow-blue-500/25 group-hover:shadow-cyan-400/40 transition-all duration-300">
                      <div class="w-full h-full bg-[#0E1428] rounded-[14px] overflow-hidden flex flex-col items-center justify-center relative">
                        ${founder.image ? `
                          <img src="${founder.image}" alt="${founder.name}" class="w-full h-full object-cover rounded-[14px]" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                          <div class="hidden w-full h-full flex flex-col items-center justify-center">
                            <span class="text-2xl sm:text-3xl font-extrabold font-heading text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                              ${founder.initials}
                            </span>
                            <span class="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                              [PHOTO SLOT]
                            </span>
                          </div>
                        ` : `
                          <span class="text-2xl sm:text-3xl font-extrabold font-heading text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            ${founder.initials}
                          </span>
                          <span class="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                            [PHOTO SLOT]
                          </span>
                        `}
                      </div>
                    </div>
                  </div>

                  <!-- Name & Role -->
                  <div>
                    <span class="inline-block text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 font-semibold mb-2">
                      ${founder.role}
                    </span>
                    <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      ${founder.name}
                    </h3>
                    <div class="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                      ${founder.tagline}
                    </div>
                  </div>

                </div>

                <!-- Biography Placeholder -->
                <div class="space-y-4 mb-6">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span class="flex items-center gap-2">
                      <span class="text-cyan-400 font-bold">&gt;&gt;</span>
                      <span>Biography & Vision:</span>
                    </span>
                    <span class="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-mono">Verified Profile</span>
                  </div>
                  <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                    ${founder.bio}
                  </p>
                </div>

                <!-- Areas of Focus -->
                <div class="mb-6">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <span class="text-purple-400">${icons.zap}</span>
                    <span>Executive Focus Areas:</span>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    ${founder.expertise.map(area => `
                      <span class="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors">
                        ${area}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <!-- Direct Phone Contact Badge -->
                <div class="mb-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                  <span class="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                    <span class="text-cyan-400">${icons.phone}</span>
                    <span>Direct Helpline:</span>
                  </span>
                  <a href="tel:${founder.phone.replace(/[^0-9]/g, '')}" class="text-cyan-400 hover:text-cyan-300 font-mono font-bold tracking-wider hover:underline">
                    ${founder.phone}
                  </a>
                </div>

              </div>

              <!-- Footer with Direct Action -->
              <div class="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 relative z-10">
                <span class="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active Mentorship
                </span>
                <button onclick="window.openEnquiryModal('Leadership Advisory: ${founder.name}')" 
                        class="text-cyan-400 hover:text-cyan-300 font-semibold font-mono flex items-center gap-1 transition-colors">
                  <span>Connect With ${founder.name}</span>
                  ${icons.arrowRight}
                </button>
              </div>

            </div>
          `).join('')}
        </div>

        <!-- Note to User -->
        <div class="mt-12 text-center text-xs text-slate-500 font-mono max-w-xl mx-auto">
          * Note: Founder biographies and photo paths are centrally configured in <code class="text-cyan-400">assets/js/config.js</code> for seamless verification and updates.
        </div>

      </div>
    </section>
  `;
}
