import { siteConfig } from '../config.js';
import { icons } from '../icons.js';

export function renderNavbar(activePage = 'home') {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'services', label: 'Services' },
    { id: 'leadership', label: 'Our Team' },
    { id: 'contact', label: 'Contact' }
  ];

  return `
    <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300" id="mainNavbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo -->
          <a href="#home" data-nav="home" class="flex items-center gap-3 group text-decoration-none">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div class="w-full h-full bg-[#080B18] rounded-[11px] flex items-center justify-center text-white">
                <span class="font-bold text-lg font-mono bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI</span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="font-heading font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                ${siteConfig.companyName}
              </span>
              <span class="text-[9px] tracking-wider font-mono uppercase text-slate-400">
                Brings Every Solution
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-1 lg:gap-2">
            ${navItems.map(item => `
              <a href="#${item.id}" 
                 data-nav="${item.id}"
                 class="nav-link px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                   activePage === item.id 
                     ? 'text-cyan-400 bg-white/[0.06] border border-cyan-500/20 shadow-sm' 
                     : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                 }">
                ${item.label}
              </a>
            `).join('')}
          </nav>

          <!-- Desktop Action & Cyber HUD Controls -->
          <div class="hidden md:flex items-center gap-3">
            
            <!-- Cyber SFX Audio Synthesizer Toggle -->
            <button id="sfxToggleBtn" onclick="window.toggleCyberAudio()" 
                    class="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-2 transition-all shadow-sm"
                    title="Toggle Futuristic Cyber Audio Effects">
              <div class="eq-container" id="navEqualizer">
                <span class="eq-bar" style="height: 4px;"></span>
                <span class="eq-bar" style="height: 8px;"></span>
                <span class="eq-bar" style="height: 5px;"></span>
                <span class="eq-bar" style="height: 10px;"></span>
              </div>
              <span id="sfxStatusText">SFX: OFF</span>
            </button>

            <!-- Telemetry Status Pill -->
            <div class="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-cyan-300">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>CORE: ACTIVE</span>
            </div>

            <button onclick="window.openEnquiryModal('General Admission / Technology Consultation')" 
                    class="apple-btn-primary text-xs py-2 px-5 shadow-lg shadow-white/10">
              <span>Get Started</span>
              ${icons.arrowRight}
            </button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex md:hidden">
            <button id="mobileMenuBtn" aria-label="Toggle Navigation Menu" class="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              ${icons.menu}
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobileMenuDrawer" class="hidden md:hidden border-b border-white/10 bg-[#080B18]/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-2">
        ${navItems.map(item => `
          <a href="#${item.id}" 
             data-nav="${item.id}"
             class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium ${
               activePage === item.id 
                 ? 'text-cyan-400 bg-white/[0.08] font-semibold' 
                 : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
             }">
            ${item.label}
          </a>
        `).join('')}

        <!-- Mobile SFX & Telemetry Bar -->
        <div class="flex items-center justify-between px-2 pt-2 border-t border-white/10">
          <button onclick="window.toggleCyberAudio()" class="px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-400 flex items-center gap-2">
            <span>Toggle Cyber Sound FX</span>
          </button>
          <span class="text-[10px] font-mono text-slate-400 flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> System Stable
          </span>
        </div>

        <div class="pt-3 border-t border-white/10">
          <button onclick="window.openEnquiryModal('General Admission / Technology Consultation')" 
                  class="apple-btn-primary w-full justify-center text-sm py-3.5 shadow-lg shadow-white/10">
            <span>Get Started</span>
            ${icons.arrowRight}
          </button>
        </div>
      </div>
    </header>
  `;
}
