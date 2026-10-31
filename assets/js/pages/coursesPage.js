import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderCoursesPage() {
  return `
    <div class="pt-28 pb-20 relative z-10" id="coursesPage">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="badge-pill mb-4">
            <span>Comprehensive Curriculum Catalog</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Industry-Aligned <br />
            <span class="gradient-text">Technology Training Programs</span>
          </h1>
          <p class="text-slate-300 text-lg leading-relaxed">
            Engineered to turn theoretical ambition into real-world software engineering capabilities. Select any program below to explore the detailed syllabus or request batch schedules.
          </p>
        </div>

        <!-- In-Depth Course List -->
        <div class="space-y-12">
          ${siteConfig.courses.map((course, idx) => `
            <div class="glass-panel p-8 sm:p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- Left: Header & Badges -->
                <div class="lg:col-span-5 space-y-4">
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} p-[1px] shadow-lg shrink-0">
                      <div class="w-full h-full bg-[#0E1428] rounded-[15px] flex items-center justify-center text-cyan-400">
                        ${getIcon(course.icon, "w-8 h-8")}
                      </div>
                    </div>
                    <div>
                      <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                        Track 0${idx + 1} &bull; ${course.category}
                      </span>
                      <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        ${course.name}
                      </h2>
                    </div>
                  </div>

                  <p class="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                    ${course.description}
                  </p>

                  <!-- Target Audience Box -->
                  <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
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
                            class="btn-primary text-xs sm:text-sm py-2.5 px-6 shadow-lg shadow-blue-500/25">
                      <span>Enquire For This Course</span>
                      ${icons.arrowRight}
                    </button>
                    <a href="https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello!%20I%20would%20like%20more%20information%20about%20the%20${encodeURIComponent(course.name)}%20course." 
                       target="_blank" rel="noopener noreferrer" 
                       class="btn-secondary text-xs sm:text-sm py-2.5 px-5">
                      <span>WhatsApp Inquiry</span>
                      ${icons.whatsapp}
                    </a>
                  </div>
                </div>

                <!-- Right: Detailed Curriculum & Skills -->
                <div class="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l lg:border-white/10">
                  
                  <div>
                    <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <span class="text-cyan-400">${icons.layers}</span>
                      <span>Key Curriculum Topics Covered:</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      ${course.highlights.map(topic => `
                        <div class="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
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
                        <span class="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/25 text-cyan-300 font-medium">
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

        <!-- Academic Consultation Banner -->
        <div class="mt-16 text-center glass-panel p-8 sm:p-12 border border-cyan-500/30 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-cyan-950/40">
          <h3 class="text-2xl font-bold text-white mb-2">Unsure Which Track Fits Your Goals?</h3>
          <p class="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Speak directly with our academic guidance team. We'll assess your background and recommend the most effective pathway for your career.
          </p>
          <button onclick="window.openEnquiryModal('Personal Academic Counseling')" class="btn-primary text-sm py-3 px-8">
            <span>Request Free Guidance Session</span>
            ${icons.arrowRight}
          </button>
        </div>

      </div>
    </div>
  `;
}
