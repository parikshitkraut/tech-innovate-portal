import { siteConfig } from '../config.js';
import { icons, getIcon } from '../icons.js';

export function renderCoursesSection(isFullPage = false) {
  const displayCourses = siteConfig.courses;

  return `
    <section class="${isFullPage ? 'py-12' : 'py-24'} relative z-10" id="courses">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="badge-pill mb-4">
            <span>Specialized Training Programs</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Master Cutting-Edge <br />
            <span class="gradient-text">Technologies & AI</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-lg">
            Structured hands-on curriculums engineered for college students, career switchers, and working tech professionals.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center justify-center gap-2 flex-wrap mb-12" id="courseFilterContainer">
          <button class="course-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-sm" data-filter="all">
            All Programs (6)
          </button>
          <button class="course-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white" data-filter="Web Development">
            Web Development
          </button>
          <button class="course-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white" data-filter="Full Stack">
            Full Stack
          </button>
          <button class="course-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white" data-filter="AI & ML">
            AI & Machine Learning
          </button>
          <button class="course-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white" data-filter="Programming">
            Python & Logic
          </button>
        </div>

        <!-- Course Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courseCardsGrid">
          ${displayCourses.map(course => renderCourseCard(course)).join('')}
        </div>

        ${!isFullPage ? `
          <div class="text-center mt-14">
            <a href="#courses" data-nav="courses" class="btn-secondary py-3 px-8 text-sm">
              <span>View Full Syllabus & Program Details</span>
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
    <div class="glass-panel p-7 flex flex-col justify-between group course-item tilt-card relative overflow-hidden" data-category="${course.category}">
      <div class="hologram-glare"></div>
      
      <div class="relative z-10">
        <!-- Top Row: Icon & Badge -->
        <div class="flex items-center justify-between mb-6">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} bg-opacity-20 p-[1px] shadow-lg group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-[#0E1428] rounded-[15px] flex items-center justify-center text-cyan-400">
              ${getIcon(course.icon, "w-7 h-7")}
            </div>
          </div>
          <span class="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
            ${course.badge}
          </span>
        </div>

        <!-- Course Title -->
        <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          ${course.name}
        </h3>

        <!-- Description -->
        <p class="text-slate-300 text-sm leading-relaxed mb-6">
          ${course.description}
        </p>

        <!-- Highlights / Key Topics -->
        <div class="space-y-2 mb-6">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Core Modules:</div>
          <ul class="space-y-1.5 text-xs text-slate-300">
            ${course.highlights.slice(0, 3).map(h => `
              <li class="flex items-start gap-2">
                <span class="text-cyan-400 mt-0.5 shrink-0">${icons.check}</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Key Skills Covered -->
        <div class="mb-6">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Skills:</div>
          <div class="flex flex-wrap gap-1.5">
            ${course.skills.map(skill => `
              <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-cyan-300">
                ${skill}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Footer & Action -->
      <div class="pt-6 border-t border-white/10 flex items-center justify-between">
        <span class="text-xs text-slate-400 font-medium">
          Practical Projects Track
        </span>
        <button onclick="window.openEnquiryModal('Course: ${course.name}')" 
                class="btn-primary text-xs py-2 px-4 shadow-sm group-hover:shadow-blue-500/30">
          <span>Explore Course</span>
          ${icons.arrowRight}
        </button>
      </div>

    </div>
  `;
}
