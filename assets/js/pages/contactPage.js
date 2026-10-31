import { siteConfig } from '../config.js';
import { icons } from '../icons.js';

export function renderContactPage() {
  return `
    <div class="pt-36 pb-24 relative z-10" id="contactPage">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <span>Direct Admissions & Client Desk</span>
          </div>
          <h1 class="apple-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Let's Discuss Your Future in <br />
            <span class="iridescent-text">Technology & AI.</span>
          </h1>
          <p class="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed tracking-tight">
            Have questions regarding our training courses, enterprise IT solutions, or admissions? Reach out directly to our team via the form, WhatsApp, phone, or email.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          <!-- Left Column: Direct Contact Information Cards -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bento-card p-8 sm:p-10 space-y-6">
              <h2 class="apple-display text-2xl sm:text-3xl font-bold text-white tracking-tight">Direct Channels</h2>
              <p class="text-slate-400 text-sm">
                Our team is available Monday through Saturday to answer questions from students, parents, and enterprise clients.
              </p>

              <!-- Phone -->
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-blue-500/40 transition-colors">
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  ${icons.phone}
                </div>
                <div>
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Phone & Helpline</div>
                  <a href="tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}" class="text-white font-mono font-semibold text-base hover:text-cyan-400 transition-colors block mt-0.5">
                    ${siteConfig.contact.phone}
                  </a>
                  <div class="text-xs text-slate-500 font-mono mt-0.5">Mon - Sat: 9 AM - 7 PM IST</div>
                </div>
              </div>

              <!-- WhatsApp Direct -->
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-emerald-500/40 transition-colors">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  ${icons.whatsapp}
                </div>
                <div>
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400">WhatsApp Instant Connect</div>
                  <a href="https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20IT%20courses%20and%20solutions." 
                     target="_blank" rel="noopener noreferrer" 
                     class="text-white font-mono font-semibold text-base hover:text-emerald-400 transition-colors block mt-0.5">
                    ${siteConfig.contact.whatsapp}
                  </a>
                  <div class="text-xs text-emerald-400/80 font-mono mt-0.5 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Quick response for admissions</span>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-purple-500/40 transition-colors">
                <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  ${icons.mail}
                </div>
                <div>
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Official Email</div>
                  <a href="mailto:${siteConfig.contact.email}" class="text-white font-mono font-semibold text-sm hover:text-purple-400 transition-colors block mt-0.5 break-all">
                    ${siteConfig.contact.email}
                  </a>
                  <a href="mailto:${siteConfig.contact.admissionsEmail}" class="text-slate-400 font-mono text-xs hover:text-purple-400 transition-colors block mt-0.5 break-all">
                    ${siteConfig.contact.admissionsEmail}
                  </a>
                </div>
              </div>

              <!-- Office Address -->
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-cyan-500/40 transition-colors">
                <div class="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  ${icons.mapPin}
                </div>
                <div>
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400">Head Office</div>
                  <div class="text-white font-medium text-sm mt-0.5 leading-snug">
                    ${siteConfig.contact.address.line1}<br />
                    ${siteConfig.contact.address.line2}<br />
                    ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} - ${siteConfig.contact.address.pincode}<br />
                    ${siteConfig.contact.address.country}
                  </div>
                </div>
              </div>

            </div>

            <!-- Founders Contact Note -->
            <div class="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20 text-xs text-slate-300 space-y-2">
              <div class="font-bold text-white flex items-center gap-2">
                <span class="text-cyan-400">${icons.award}</span>
                <span>Executive Office: Dr. Pravin Kale & Dr. Sandeep Kale</span>
              </div>
              <p class="text-slate-400 leading-relaxed">
                For academic partnerships, institutional workshops, or strategic consulting engagements, please specify in the subject line or schedule an executive advisory call.
              </p>
            </div>

          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div class="lg:col-span-7">
            <div class="bento-card p-8 sm:p-12 border border-white/15">
              
              <div class="mb-8">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
                  <span>Send a Message</span>
                </div>
                <h3 class="apple-display text-3xl font-bold text-white tracking-tight">
                  Start Your Inquiry
                </h3>
                <p class="text-slate-400 text-sm mt-1">
                  Complete the fields below and our team will get in touch with you promptly.
                </p>
              </div>

              <form id="contactPageForm" onsubmit="window.handleContactFormSubmit(event)" class="space-y-5">
                
                <!-- Name -->
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Full Name <span class="text-rose-400">*</span>
                  </label>
                  <input type="text" name="name" required placeholder="e.g. Aditi Deshmukh" 
                         class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" />
                </div>

                <!-- Email & Phone -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span class="text-rose-400">*</span>
                    </label>
                    <input type="email" name="email" required placeholder="name@example.com" 
                           class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" />
                  </div>
                  <div>
                    <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number <span class="text-rose-400">*</span>
                    </label>
                    <input type="tel" name="phone" required placeholder="+91 98765 43210" 
                           class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" />
                  </div>
                </div>

                <!-- Interested Course or Service -->
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Interested Course / Service <span class="text-rose-400">*</span>
                  </label>
                  <select name="subject" required 
                          class="w-full px-4 py-3.5 rounded-2xl bg-[#0D1226] border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all">
                    <option value="">Choose a Program or Service...</option>
                    <optgroup label="Technology Training Tracks">
                      ${siteConfig.courses.map(c => `
                        <option value="Course: ${c.name}">Course: ${c.name}</option>
                      `).join('')}
                    </optgroup>
                    <optgroup label="IT & AI Enterprise Services">
                      ${siteConfig.services.map(s => `
                        <option value="Service: ${s.name}">Service: ${s.name}</option>
                      `).join('')}
                    </optgroup>
                    <option value="Other Inquiries">Other Inquiries / Partnerships</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Message / Requirements <span class="text-rose-400">*</span>
                  </label>
                  <textarea name="message" rows="4" required placeholder="Let us know about your current background, learning objectives, or the project specifications you want to discuss..." 
                            class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"></textarea>
                </div>

                <div class="pt-2">
                  <button type="submit" id="contactSubmitBtn" class="apple-btn-primary w-full justify-center text-sm py-4 shadow-xl shadow-white/15">
                    <span>Send Message</span>
                    ${icons.send}
                  </button>
                </div>

                <div class="text-center text-[11px] text-slate-400 font-mono pt-2">
                  * Note: Direct client-side validation triggers ready-to-dispatch WhatsApp & Email packets.
                </div>

              </form>

              <!-- Success Notification State -->
              <div id="contactSuccessState" class="hidden text-center py-10 space-y-4">
                <div class="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  ${icons.checkCircle}
                </div>
                <h4 class="apple-display text-3xl font-bold text-white">Message Formatted & Verified!</h4>
                <p class="text-sm text-slate-300 max-w-md mx-auto" id="contactSuccessSummary">
                  Your inquiry details have been validated. You can send them directly to our admissions desk via WhatsApp or Email below.
                </p>
                <div class="pt-4 flex flex-wrap justify-center gap-3">
                  <a id="contactWhatsAppDispatch" href="#" target="_blank" rel="noopener noreferrer" class="apple-btn-primary text-xs py-3 px-6">
                    <span>Send via WhatsApp</span>
                    ${icons.whatsapp}
                  </a>
                  <a id="contactEmailDispatch" href="#" class="apple-btn-secondary text-xs py-3 px-6">
                    <span>Send via Email Client</span>
                    ${icons.mail}
                  </a>
                  <button onclick="window.resetContactForm()" class="apple-btn-secondary text-xs py-3 px-4 text-slate-400 hover:text-white">
                    Submit Another
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="max-w-4xl mx-auto pt-10">
          <div class="text-center mb-14">
            <h3 class="apple-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Frequently Asked Questions</h3>
            <p class="text-slate-400 text-base">Everything you need to know about our training programs and solutions.</p>
          </div>

          <div class="space-y-4" id="faqAccordion">
            ${siteConfig.faqs.map((faq, idx) => `
              <div class="bento-card overflow-hidden border border-white/10">
                <button onclick="window.toggleFaq(${idx})" class="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none">
                  <span class="font-bold text-white text-base sm:text-lg">${faq.q}</span>
                  <span class="text-cyan-400 shrink-0 transform transition-transform duration-200" id="faqIcon-${idx}">
                    ${icons.chevronRight}
                  </span>
                </button>
                <div class="hidden px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4" id="faqAnswer-${idx}">
                  ${faq.a}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}
