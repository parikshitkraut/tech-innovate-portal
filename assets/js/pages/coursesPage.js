import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderCoursesPage() {
  return `
    <div class="pt-36 pb-24 relative z-10" id="coursesPage">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>Comprehensive Curriculum Catalog</span>
          </div>
          <h1 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Industry-Aligned <br />
            <span class="iridescent-text">Technology Training Programs.</span>
          </h1>
          <p class="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed tracking-tight">
            Engineered to turn theoretical ambition into real-world software engineering capabilities. Select any program below to explore the detailed syllabus or request batch schedules.
          </p>
        </div>

        <!-- In-Depth Course List -->
        <div class="space-y-12">
          ${siteConfig.courses.map((course, idx) => `
            <div class="bento-card p-8 sm:p-12 border border-white/15 transition-all duration-300 tilt-card">
              <div class="hologram-glare"></div>

              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                <!-- Left: Header & Badges -->
                <div class="lg:col-span-5 space-y-5">
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} p-[1px] shadow-xl shrink-0">
                      <div class="w-full h-full bg-[#0E1428] rounded-[15px] flex items-center justify-center text-cyan-400">
                        ${getIcon(course.icon, "w-8 h-8")}
                      </div>
                    </div>
                    <div>
                      <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                        Track 0${idx + 1} &bull; ${course.category}
                      </span>
                      <h2 class="apple-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        ${course.name}
                      </h2>
                    </div>
                  </div>

                  <p class="text-slate-300 text-base leading-relaxed">
                    ${course.description}
                  </p>

                  <!-- Target Audience Box -->
                  <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                    <div class="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <span class="text-cyan-400">${icons.users}</span>
                      <span>Target Audience:</span>
                    </div>
                    <div class="text-xs text-slate-300 font-medium">
                      ${course.targetAudience}
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="pt-2 flex flex-wrap gap-3">
                    <button onclick="window.openEnquiryModal('Course: ${course.name}')" 
                            class="apple-btn-primary text-xs py-3 px-6 shadow-xl shadow-white/10">
                      <span>Enquire For This Course</span>
                      ${icons.arrowRight}
                    </button>
                    <a href="https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello!%20I%20would%20like%20more%20information%20about%20the%20${encodeURIComponent(course.name)}%20course." 
                       target="_blank" rel="noopener noreferrer" 
                       class="apple-btn-secondary text-xs py-3 px-5">
                      <span>WhatsApp Inquiry</span>
                      ${icons.whatsapp}
                    </a>
                  </div>
                </div>

                <!-- Right: Detailed Curriculum & Skills -->
                <div class="lg:col-span-7 space-y-6 lg:pl-8 lg:border-l lg:border-white/10">
                  
                  <div>
                    <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <span class="text-cyan-400">${icons.layers}</span>
                      <span>Key Curriculum Topics Covered:</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      ${course.highlights.map(topic => `
                        <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                          <span class="text-cyan-400 mt-0.5 shrink-0">${icons.check}</span>
                          <span>${topic}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <div>
                    <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                      <span class="text-blue-400">${icons.zap}</span>
                      <span>Skills & Competencies Acquired:</span>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      ${course.skills.map(skill => `
                        <span class="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-cyan-300 font-medium">
                          ${skill}
                        </span>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Learning Outcome Notice -->
                  <div class="text-[11px] text-slate-400 italic font-mono pt-2">
                    * Practical emphasis: 100% project-centric exercises with hands-on source code review.
                  </div>

                </div>

              </div>

            </div>
          `).join('')}
        </div>

        <!-- Academic Guidance Banner -->
        <div class="mt-20 text-center bento-card p-10 sm:p-14 border border-cyan-500/30 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-cyan-950/40">
          <div class="hologram-glare"></div>
          <div class="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 class="apple-display text-3xl font-bold text-white">Unsure Which Track Fits Your Goals?</h3>
            <p class="text-slate-300 text-base">
              Speak directly with our academic guidance team. We'll assess your background and recommend the most effective pathway for your career.
            </p>
            <div class="pt-2">
              <button onclick="window.openEnquiryModal('Personal Academic Counseling')" class="apple-btn-primary text-sm py-3.5 px-8">
                <span>Request Free Guidance Session</span>
                ${icons.arrowRight}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
