import { siteConfig } from '../config.js';
import { icons } from '../icons.js';
import { renderLeadershipSection } from '../components/leadership.js';

export function renderAboutPage() {
  return `
    <div class="pt-36 pb-24 relative z-10" id="aboutPage">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>About ${siteConfig.companyName}</span>
          </div>
          <h1 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Empowering Minds. Engineering <br />
            <span class="iridescent-text">Future-Ready Technology.</span>
          </h1>
          <p class="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed tracking-tight">
            Founded by Dr. Pravin Kale and co-founded by Dr. Sandeep Kale, our organization was founded with a singular, resolute mission: to provide rigorous, industry-relevant technology education and deliver high-impact enterprise IT & AI solutions.
          </p>
        </div>

        <!-- Mission & Vision Dual Bento Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          <div class="bento-card p-8 sm:p-12 relative overflow-hidden group">
            <div class="hologram-glare"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                ${icons.compass}
              </div>
              <div class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">Our Mission</div>
              <h3 class="apple-display text-3xl font-bold text-white mb-4">
                Democratizing Advanced Technology Mastery
              </h3>
              <p class="text-slate-300 text-base leading-relaxed">
                To empower college students, career switchers, and working professionals with deep, hands-on competencies in modern web engineering, data intelligence, and artificial intelligence, transforming ambitious learners into capable, confident software engineers.
              </p>
            </div>
          </div>

          <div class="bento-card p-8 sm:p-12 relative overflow-hidden group">
            <div class="hologram-glare"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                ${icons.sparkles}
              </div>
              <div class="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-2">Our Vision</div>
              <h3 class="apple-display text-3xl font-bold text-white mb-4">
                A Global Hub for Innovation & Practical IT
              </h3>
              <p class="text-slate-300 text-base leading-relaxed">
                To be an internationally recognized center of excellence in modern technology education and enterprise AI solutions, bridging the academic-industry gap and pioneering ethical, impactful technological transformation.
              </p>
            </div>
          </div>

        </div>

        <!-- Our Core Values -->
        <div class="mb-24">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <h2 class="apple-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Our Core Values</h2>
            <p class="text-slate-400 text-base">The foundational principles guiding our teaching and engineering practices.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bento-card p-7">
              <div class="text-cyan-400 mb-4">${icons.code2}</div>
              <h4 class="font-bold text-white text-lg mb-2">Practical Rigor</h4>
              <p class="text-slate-400 text-xs leading-relaxed">We value live code and working systems over theoretical abstractions.</p>
            </div>
            <div class="bento-card p-7">
              <div class="text-blue-400 mb-4">${icons.cpu}</div>
              <h4 class="font-bold text-white text-lg mb-2">Modern Currency</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Continuously upgrading curriculums to reflect modern AI and full-stack ecosystems.</p>
            </div>
            <div class="bento-card p-7">
              <div class="text-purple-400 mb-4">${icons.users}</div>
              <h4 class="font-bold text-white text-lg mb-2">Inclusive Growth</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Welcoming beginners, students, and professionals at all stages of their journey.</p>
            </div>
            <div class="bento-card p-7">
              <div class="text-emerald-400 mb-4">${icons.shield}</div>
              <h4 class="font-bold text-white text-lg mb-2">Ethical Integrity</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Honest guidance, verified facts, and transparent educational standards.</p>
            </div>
          </div>
        </div>

        <!-- Our Practical Approach -->
        <div class="bento-card p-8 sm:p-14 mb-24 border border-blue-500/20 bg-[#0A0F26]/70">
          <div class="max-w-3xl mx-auto text-center space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase">
              <span>The Nexus Methodology</span>
            </div>
            <h3 class="apple-display text-3xl sm:text-4xl font-bold text-white">How We Teach: The Hands-On Framework</h3>
            <p class="text-slate-300 text-base leading-relaxed">
              Our pedagogical approach pairs conceptual understanding with immediate hands-on implementation. Students construct architectures, debug real-world codebases, integrate modern APIs, and build deployable software.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
              <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div class="text-cyan-400 font-mono text-sm font-bold mb-1">Step 01</div>
                <div class="text-white font-bold text-base mb-1">Conceptual Blueprint</div>
                <p class="text-slate-400 text-xs">Clear mental models without academic jargon.</p>
              </div>
              <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div class="text-blue-400 font-mono text-sm font-bold mb-1">Step 02</div>
                <div class="text-white font-bold text-base mb-1">Live Implementation</div>
                <p class="text-slate-400 text-xs">Interactive code labs and real-time execution.</p>
              </div>
              <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div class="text-purple-400 font-mono text-sm font-bold mb-1">Step 03</div>
                <div class="text-white font-bold text-base mb-1">Capstone Deployment</div>
                <p class="text-slate-400 text-xs">Live projects on GitHub and cloud environments.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Founder Profiles Section -->
        ${renderLeadershipSection()}

      </div>
    </div>
  `;
}
