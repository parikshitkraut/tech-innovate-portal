import { siteConfig } from '../config.js';
import { icons } from '../icons.js';

export function renderEnquiryModal() {
  return `
    <div id="enquiryModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity duration-300">
      <div class="relative w-full max-w-lg glass-panel-static p-6 sm:p-8 bg-[#0D1226] border border-white/20 shadow-2xl rounded-2xl max-h-[92vh] overflow-y-auto">
        
        <!-- Close Button -->
        <button onclick="window.closeEnquiryModal()" class="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="Close modal">
          ${icons.x}
        </button>

        <div class="mb-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold mb-2">
            <span>Enquiry & Admissions</span>
          </div>
          <h3 class="text-2xl font-bold text-white tracking-tight">
            Connect With Our Team
          </h3>
          <p class="text-xs text-slate-300 mt-1">
            Fill in your details below. We'll assist you with curriculum guidance, batch schedules, or enterprise IT solutions.
          </p>
        </div>

        <!-- Form -->
        <form id="modalEnquiryForm" onsubmit="window.handleModalSubmit(event)" class="space-y-4">
          
          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Full Name <span class="text-rose-400">*</span>
            </label>
            <input type="text" name="name" required placeholder="e.g. Rahul Sharma" 
                   class="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address <span class="text-rose-400">*</span>
              </label>
              <input type="email" name="email" required placeholder="name@example.com" 
                     class="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" />
            </div>
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Phone / WhatsApp <span class="text-rose-400">*</span>
              </label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" 
                     class="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Interested Course or Service <span class="text-rose-400">*</span>
            </label>
            <select name="program" id="modalProgramSelect" required 
                    class="w-full px-4 py-2.5 rounded-xl bg-[#0D1226] border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all">
              <option value="">Select a Course or Service...</option>
              <optgroup label="Training Programs">
                ${siteConfig.courses.map(c => `
                  <option value="Course: ${c.name}">Course: ${c.name}</option>
                `).join('')}
              </optgroup>
              <optgroup label="IT & AI Services">
                ${siteConfig.services.map(s => `
                  <option value="Service: ${s.name}">Service: ${s.name}</option>
                `).join('')}
              </optgroup>
              <option value="General Admission / Technology Consultation">General Admission / Consultation</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Your Learning Goal or Requirements
            </label>
            <textarea name="message" rows="3" placeholder="Tell us about your background, career goal, or project requirements..." 
                      class="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"></textarea>
          </div>

          <div class="pt-2">
            <button type="submit" id="modalSubmitBtn" class="apple-btn-primary w-full justify-center text-sm py-3.5 shadow-xl shadow-white/10">
              <span>Submit Enquiry</span>
              ${icons.send}
            </button>
          </div>

          <!-- Notice about verified backend -->
          <div class="text-[11px] text-slate-400 text-center font-mono">
            Directly connected to admissions. You will receive a verification confirmation.
          </div>

        </form>

        <!-- Success Feedback View (Initially hidden) -->
        <div id="modalSuccessView" class="hidden text-center py-6 space-y-4">
          <div class="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
            ${icons.checkCircle}
          </div>
          <h4 class="apple-display text-3xl font-bold text-white">Enquiry Received!</h4>
          <p class="text-sm text-slate-300 max-w-sm mx-auto" id="modalSuccessMessage">
            Thank you for reaching out. Our academic counselor will contact you within 24 business hours.
          </p>
          <div class="pt-4 flex justify-center gap-3">
            <button onclick="window.closeEnquiryModal()" class="apple-btn-secondary text-xs py-2.5 px-6">
              Close
            </button>
            <a id="modalWhatsAppLink" href="https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="apple-btn-primary text-xs py-2.5 px-6">
              <span>Chat on WhatsApp</span>
              ${icons.whatsapp}
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}
