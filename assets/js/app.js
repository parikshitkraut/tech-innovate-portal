/**
 * ===================================================================
 * CORE APPLICATION CONTROLLER (CYBERNETIC EDITION)
 * Routing, 3D Tilt Physics, Neural Canvas, Terminal Engine, SFX Audio
 * ===================================================================
 */

import { siteConfig } from './config.js';
import { sound } from './audio.js';
import { NeuralCanvas } from './canvas.js';
import { init3DTilt } from './tilt.js';
import { initInteractiveTerminal } from './terminal.js';

import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderTrustSection, renderWhyChooseUs } from './components/trustWhy.js';
import { renderCoursesSection } from './components/courses.js';
import { renderTechStack, renderServicesSection } from './components/servicesTech.js';
import { renderLeadershipSection } from './components/leadership.js';
import { renderCTA, renderFooter } from './components/ctaFooter.js';
import { renderEnquiryModal } from './components/modal.js';
import { renderAboutPage } from './pages/aboutPage.js';
import { renderCoursesPage } from './pages/coursesPage.js';
import { renderServicesPage } from './pages/servicesPage.js';
import { renderContactPage } from './pages/contactPage.js';

class App {
  constructor() {
    this.currentPage = 'home';
    this.canvas = null;
    this.init();
  }

  init() {
    // 1. Initialize 60FPS Neural Constellation Canvas
    this.canvas = new NeuralCanvas('neuralCanvas');

    // 2. Parse current URL hash
    this.handleRoute();

    // 3. Listen to hash changes (back / forward / clicks)
    window.addEventListener('hashchange', () => {
      sound.playWarp();
      this.handleRoute();
    });

    // 4. Setup global listeners
    this.setupGlobalListeners();
  }

  handleRoute() {
    const rawHash = window.location.hash.replace('#', '').trim();
    const validPages = ['home', 'about', 'courses', 'services', 'leadership', 'contact'];
    
    this.currentPage = validPages.includes(rawHash) ? rawHash : 'home';

    // Update document title for SEO & clarity
    const pageTitles = {
      home: `${siteConfig.companyName} | IT Services & Technology Training`,
      about: `About Us | ${siteConfig.companyName} - Founded by Dr. Pravin Kale & Dr. Sandeep Kale`,
      courses: `Courses & Training Programs | ${siteConfig.companyName}`,
      services: `IT & AI Solutions | ${siteConfig.companyName}`,
      leadership: `Leadership & Founders | ${siteConfig.companyName}`,
      contact: `Contact & Admissions | ${siteConfig.companyName}`
    };
    document.title = pageTitles[this.currentPage] || siteConfig.companyName;

    // Render the view
    this.render();

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile drawer if open
    const drawer = document.getElementById('mobileMenuDrawer');
    if (drawer && !drawer.classList.contains('hidden')) {
      drawer.classList.add('hidden');
    }
  }

  render() {
    const root = document.getElementById('app');
    if (!root) return;

    let pageContent = '';

    switch (this.currentPage) {
      case 'about':
        pageContent = renderAboutPage();
        break;
      case 'courses':
        pageContent = renderCoursesPage();
        break;
      case 'services':
        pageContent = renderServicesPage();
        break;
      case 'leadership':
        pageContent = `
          <div class="pt-28 pb-12">
            ${renderLeadershipSection()}
          </div>
        `;
        break;
      case 'contact':
        pageContent = renderContactPage();
        break;
      case 'home':
      default:
        pageContent = `
          ${renderHero()}
          ${renderTrustSection()}
          ${renderCoursesSection(false)}
          ${renderWhyChooseUs()}
          ${renderTechStack()}
          ${renderServicesSection(false)}
          ${renderLeadershipSection()}
          ${renderCTA()}
        `;
        break;
    }

    root.innerHTML = `
      ${renderNavbar(this.currentPage)}
      <main id="mainContent" class="min-h-screen">
        ${pageContent}
      </main>
      ${renderFooter()}
      ${renderEnquiryModal()}
      <div id="toastNotification" class="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none"></div>
    `;

    // Initialize interactive cyber features
    this.initCourseFilters();
    this.initMobileMenu();
    this.initNavbarScrollEffect();

    // Initialize 3D tilt physics and holographic glare
    init3DTilt();

    // Initialize live interactive terminal on home
    if (this.currentPage === 'home') {
      initInteractiveTerminal();
    }

    // Attach cyber audio feedback to all buttons and anchors
    this.attachAudioTriggers();
  }

  attachAudioTriggers() {
    const interactiveElements = document.querySelectorAll('button, a, .glass-panel');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => sound.playHover());
      el.addEventListener('click', () => sound.playClick());
    });
  }

  initNavbarScrollEffect() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('shadow-2xl', 'shadow-black/70', 'bg-[#080B18]/95');
      } else {
        navbar.classList.remove('shadow-2xl', 'shadow-black/70', 'bg-[#080B18]/95');
      }
    });
  }

  initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileMenuDrawer');
    if (btn && drawer) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        drawer.classList.toggle('hidden');
      });
    }
  }

  initCourseFilters() {
    const filterBtns = document.querySelectorAll('.course-filter-btn');
    const cards = document.querySelectorAll('.course-item');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        filterBtns.forEach(b => {
          b.className = 'course-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white/[0.06] text-slate-300 border border-white/10 hover:bg-white/15 hover:text-white';
        });
        btn.className = 'course-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white text-black shadow-lg shadow-white/20';

        const filter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  setupGlobalListeners() {
    // Cyber Audio Toggle
    window.toggleCyberAudio = () => {
      const active = sound.toggle();
      const sfxText = document.getElementById('sfxStatusText');
      const eq = document.getElementById('navEqualizer');
      if (sfxText) sfxText.innerText = active ? 'SFX: ON' : 'SFX: OFF';
      if (eq) {
        if (active) eq.classList.add('eq-active');
        else eq.classList.remove('eq-active');
      }
      this.showToast(active ? 'Cyber SFX Synthesizer Activated 🔊' : 'Cyber SFX Synthesizer Muted 🔇');
    };

    // Modal Open Helper
    window.openEnquiryModal = (programName = '') => {
      sound.playWarp();
      const modal = document.getElementById('enquiryModal');
      const select = document.getElementById('modalProgramSelect');
      const form = document.getElementById('modalEnquiryForm');
      const successView = document.getElementById('modalSuccessView');

      if (modal) {
        modal.classList.remove('hidden');
        if (form) form.classList.remove('hidden');
        if (successView) successView.classList.add('hidden');

        if (select && programName) {
          let found = false;
          for (let opt of select.options) {
            if (opt.value.toLowerCase().includes(programName.toLowerCase())) {
              select.value = opt.value;
              found = true;
              break;
            }
          }
          if (!found) {
            select.value = "General Admission / Technology Consultation";
          }
        }
      }
    };

    // Modal Close Helper
    window.closeEnquiryModal = () => {
      sound.playClick();
      const modal = document.getElementById('enquiryModal');
      if (modal) {
        modal.classList.add('hidden');
      }
    };

    // Modal Submit Handler
    window.handleModalSubmit = (e) => {
      e.preventDefault();
      sound.playSuccess();
      const form = e.target;
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        program: formData.get('program'),
        message: formData.get('message') || ''
      };

      const whatsappText = `*New Admission / Service Enquiry*\n` +
        `*Name:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Phone:* ${data.phone}\n` +
        `*Program/Service:* ${data.program}\n` +
        (data.message ? `*Notes:* ${data.message}` : '');

      const waCleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
      const waLink = `https://wa.me/${waCleanNumber}?text=${encodeURIComponent(whatsappText)}`;

      const formEl = document.getElementById('modalEnquiryForm');
      const successView = document.getElementById('modalSuccessView');
      const waButton = document.getElementById('modalWhatsAppLink');
      const successMsg = document.getElementById('modalSuccessMessage');

      if (formEl && successView) {
        formEl.classList.add('hidden');
        successView.classList.remove('hidden');
        if (waButton) waButton.href = waLink;
        if (successMsg) {
          successMsg.innerText = `Thank you, ${data.name}. Your enquiry for "${data.program}" has been validated. You can chat immediately on WhatsApp or await our response.`;
        }
      }

      form.reset();
      this.showToast(`Enquiry for "${data.program}" validated & formatted!`);
    };

    // Contact Page Form Submit Handler
    window.handleContactFormSubmit = (e) => {
      e.preventDefault();
      sound.playSuccess();
      const form = e.target;
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      const whatsappText = `*Website Contact Inquiry*\n` +
        `*From:* ${data.name}\n` +
        `*Phone:* ${data.phone}\n` +
        `*Email:* ${data.email}\n` +
        `*Subject:* ${data.subject}\n` +
        `*Message:* ${data.message}`;

      const waCleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
      const waLink = `https://wa.me/${waCleanNumber}?text=${encodeURIComponent(whatsappText)}`;

      const mailtoLink = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(data.subject + ' - Inquiry from ' + data.name)}&body=${encodeURIComponent('From: ' + data.name + '\nPhone: ' + data.phone + '\nEmail: ' + data.email + '\n\nMessage:\n' + data.message)}`;

      const formEl = document.getElementById('contactPageForm');
      const successEl = document.getElementById('contactSuccessState');
      const waDispatch = document.getElementById('contactWhatsAppDispatch');
      const mailDispatch = document.getElementById('contactEmailDispatch');
      const summaryEl = document.getElementById('contactSuccessSummary');

      if (formEl && successEl) {
        formEl.classList.add('hidden');
        successEl.classList.remove('hidden');
        if (waDispatch) waDispatch.href = waLink;
        if (mailDispatch) mailDispatch.href = mailtoLink;
        if (summaryEl) {
          summaryEl.innerText = `Inquiry from ${data.name} for "${data.subject}" formatted successfully. Direct transmission options ready below.`;
        }
      }

      form.reset();
      this.showToast('Contact message validated & formatted!');
    };

    // Reset contact form handler
    window.resetContactForm = () => {
      sound.playClick();
      const formEl = document.getElementById('contactPageForm');
      const successEl = document.getElementById('contactSuccessState');
      if (formEl && successEl) {
        formEl.classList.remove('hidden');
        successEl.classList.add('hidden');
      }
    };

    // FAQ Accordion Toggle
    window.toggleFaq = (idx) => {
      sound.playClick();
      const answer = document.getElementById(`faqAnswer-${idx}`);
      const icon = document.getElementById(`faqIcon-${idx}`);
      if (answer && icon) {
        const isHidden = answer.classList.contains('hidden');
        if (isHidden) {
          answer.classList.remove('hidden');
          icon.style.transform = 'rotate(90deg)';
        } else {
          answer.classList.add('hidden');
          icon.style.transform = 'rotate(0deg)';
        }
      }
    };
  }

  showToast(message) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;

    toast.innerHTML = `
      <div class="px-5 py-3 rounded-xl bg-[#0F172A] border border-cyan-500/40 text-white shadow-2xl flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
        <span class="text-sm font-medium font-mono">${message}</span>
      </div>
    `;
    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    }, 4000);
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
