import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderCoursesSection(isFullPage = false) {
  const displayCourses = siteConfig.courses;

  return `
    <section class="${isFullPage ? 'py-12' : 'py-28'} relative z-10" id="courses">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>Specialized Training Programs</span>
          </div>
          <h2 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-4">
            Explore The Lineup. <br />
            <span class="iridescent-text">Choose Your Path.</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-xl font-normal tracking-tight">
            Comprehensive practical curriculums engineered for college students, beginners, and tech professionals.
          </p>
        </div>

        <!-- Apple-Style Segmented Pill Filter -->
        <div class="flex items-center justify-center gap-2 flex-wrap mb-16" id="courseFilterContainer">
          <button class="course-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white text-black shadow-lg shadow-white/20" data-filter="all">
            All Programs (6)
          </button>
          <button class="course-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white/[0.06] text-slate-300 border border-white/10 hover:bg-white/15 hover:text-white" data-filter="Web Development">
            Web Development
          </button>
          <button class="course-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white/[0.06] text-slate-300 border border-white/10 hover:bg-white/15 hover:text-white" data-filter="Full Stack">
            Full Stack
          </button>
          <button class="course-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white/[0.06] text-slate-300 border border-white/10 hover:bg-white/15 hover:text-white" data-filter="AI & ML">
            AI & Machine Learning
          </button>
          <button class="course-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white/[0.06] text-slate-300 border border-white/10 hover:bg-white/15 hover:text-white" data-filter="Programming">
            Python & Logic
          </button>
        </div>

        <!-- Course Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courseCardsGrid">
          ${displayCourses.map(course => renderCourseCard(course)).join('')}
        </div>

        ${!isFullPage ? `
          <div class="text-center mt-16">
            <a href="#courses" data-nav="courses" class="apple-btn-secondary text-sm py-3.5 px-8">
              <span>Compare All Syllabi & Deep Details</span>
              ${icons.arrowRight}
            </a>
          </div>
        ` : ''}

      </div>
    </section>
  `;
}

export function renderCourseCard(course) {
  return `
    <div class="bento-card p-8 flex flex-col justify-between group course-item tilt-card relative overflow-hidden" data-category="${course.category}">
      <div class="hologram-glare"></div>
      
      <div class="relative z-10">
        <!-- Top Row: Icon & Apple Badge -->
        <div class="flex items-center justify-between mb-8">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} p-[1px] shadow-xl group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-[#0E1428] rounded-[15px] flex items-center justify-center text-cyan-400">
              ${getIcon(course.icon, "w-8 h-8")}
            </div>
          </div>
          <span class="text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
            ${course.badge}
          </span>
        </div>

        <!-- Course Title -->
        <h3 class="apple-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          ${course.name}
        </h3>

        <!-- Description -->
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          ${course.description}
        </p>

        <!-- Highlights / Modules -->
        <div class="space-y-2 mb-6">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Key Modules:</div>
          <ul class="space-y-2 text-xs text-slate-300">
            ${course.highlights.slice(0, 3).map(h => `
              <li class="flex items-start gap-2.5">
                <span class="text-cyan-400 mt-0.5 shrink-0">${icons.check}</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Key Skills -->
        <div class="mb-8">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">Core Competencies:</div>
          <div class="flex flex-wrap gap-1.5">
            ${course.skills.map(skill => `
              <span class="text-xs font-mono px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-300">
                ${skill}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
        <span class="text-xs text-slate-400 font-medium font-mono">
          Project-Based
        </span>
        <button onclick="window.openEnquiryModal('Course: ${course.name}')" 
                class="apple-btn-primary text-xs py-2.5 px-5 shadow-lg shadow-white/10">
          <span>Explore Course</span>
          ${icons.arrowRight}
        </button>
      </div>

    </div>
  `;
}
