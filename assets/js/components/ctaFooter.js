import { siteConfig } from '../config.js';
import { icons } from '../icons.js';

export function renderCTA() {
  return `
    <section class="py-28 relative z-10 overflow-hidden" id="cta">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="relative rounded-[2.5rem] overflow-hidden p-10 sm:p-16 lg:p-20 text-center border border-white/20 bg-gradient-to-r from-blue-900/35 via-indigo-950/50 to-purple-900/35 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 bento-card">
          <div class="hologram-glare"></div>
          
          <!-- Background Ambient Glows -->
          <div class="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
              <span>Ready For Launch</span>
            </div>

            <h2 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
              Ready to Upgrade Your Skills and <br class="hidden sm:inline" />
              <span class="iridescent-text">Shape Your Future?</span>
            </h2>

            <p class="text-slate-300 text-base sm:text-xl max-w-xl mx-auto tracking-tight leading-relaxed">
              Start your technology journey with us today. Gain industry-grade mastery in Web Development, Artificial Intelligence, and modern software engineering.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button onclick="window.openEnquiryModal('Program Admission Enquiry')" 
                      class="apple-btn-primary w-full sm:w-auto text-base py-4 px-10 shadow-2xl shadow-white/20">
                <span>Join Our Programs</span>
                ${icons.arrowRight}
              </button>
              <a href="#contact" data-nav="contact" class="apple-btn-secondary w-full sm:w-auto text-base py-4 px-8">
                <span>Contact Us</span>
                ${icons.externalLink}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="border-t border-white/10 bg-[#060913] relative z-10 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          
          <!-- Column 1: Company Profile -->
          <div class="lg:col-span-2 space-y-5">
            <a href="#home" data-nav="home" class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px]">
                <div class="w-full h-full bg-[#080B18] rounded-[11px] flex items-center justify-center text-white">
                  <span class="font-bold text-lg font-mono bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">NT</span>
                </div>
              </div>
              <span class="font-heading font-bold text-xl tracking-tight text-white">
                ${siteConfig.companyName}
              </span>
            </a>

            <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering students, professionals, and global organizations through cutting-edge technology education, full-stack software development, and modern artificial intelligence solutions.
            </p>

            <!-- Social Links -->
            <div class="flex items-center gap-3 pt-2">
              <a href="${siteConfig.contact.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all">
                ${icons.linkedin}
              </a>
              <a href="${siteConfig.contact.socials.github}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all">
                ${icons.github}
              </a>
              <a href="https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-center transition-all">
                ${icons.whatsapp}
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="space-y-4">
            <h4 class="font-bold text-white text-sm uppercase tracking-wider font-mono">Navigation</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li><a href="#home" data-nav="home" class="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" data-nav="about" class="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#courses" data-nav="courses" class="hover:text-cyan-400 transition-colors">Courses & Syllabus</a></li>
              <li><a href="#services" data-nav="services" class="hover:text-cyan-400 transition-colors">IT & AI Services</a></li>
              <li><a href="#leadership" data-nav="leadership" class="hover:text-cyan-400 transition-colors">Leadership Team</a></li>
              <li><a href="#contact" data-nav="contact" class="hover:text-cyan-400 transition-colors">Contact & Admissions</a></li>
            </ul>
          </div>

          <!-- Column 3: Courses -->
          <div class="space-y-4">
            <h4 class="font-bold text-white text-sm uppercase tracking-wider font-mono">Training Tracks</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              ${siteConfig.courses.map(course => `
                <li>
                  <button onclick="window.openEnquiryModal('Course: ${course.name}')" class="hover:text-cyan-400 transition-colors text-left">
                    ${course.name}
                  </button>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Column 4: Contact Placeholders -->
          <div class="space-y-4">
            <h4 class="font-bold text-white text-sm uppercase tracking-wider font-mono">Contact Details</h4>
            <div class="space-y-3 text-xs text-slate-400">
              <div class="flex items-start gap-2.5">
                <span class="text-cyan-400 shrink-0 mt-0.5">${icons.mapPin}</span>
                <span>${siteConfig.contact.address.line1}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}</span>
              </div>
              <div class="flex items-center gap-2.5">
                <span class="text-cyan-400 shrink-0">${icons.mail}</span>
                <span class="font-mono">${siteConfig.contact.email}</span>
              </div>
              <div class="flex items-center gap-2.5">
                <span class="text-cyan-400 shrink-0">${icons.phone}</span>
                <span class="font-mono">${siteConfig.contact.phone}</span>
              </div>
              <div class="flex items-center gap-2.5">
                <span class="text-emerald-400 shrink-0">${icons.whatsapp}</span>
                <span class="font-mono">${siteConfig.contact.whatsapp}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; ${currentYear} ${siteConfig.companyName}. Founded by Dr. Pravin Kale & Dr. Sandeep Kale. All rights reserved.
          </div>
          <div class="flex items-center gap-6">
            <span>India & Global Operations</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}
