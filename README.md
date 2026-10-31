# NexusTech Innovations - IT Services & Technology Training Website
### Premium, Futuristic, and Responsive Web Application
*Founded by Dr. Pravin Kale & Co-Founded by Dr. Sandeep Kale*

---

## 🌟 Overview

This is an agency-grade, modern, and futuristic web platform built for an IT services and technology training enterprise. It features a deep-navy aesthetic (`#080B18`), electric blue (`#386BFF`), purple (`#8B5CF6`), and cyan highlights (`#00D4FF`), glassmorphism cards, glowing ambient orbs, interactive course filters, working enquiry modals, and client-side form validation.

---

## 🚀 1. How to Run the Website

You have multiple convenient ways to run this website:

### Method A: Immediate Zero-Installation (Recommended for Beginners)
1. Navigate to the project folder:
   `C:\Users\shewa\.gemini\antigravity\scratch\tech-innovate-portal\`
2. Double-click **`index.html`** to open it directly in any web browser (Google Chrome, Microsoft Edge, Brave, Firefox, etc.).
3. The website will load instantly with full animations, navigation, filters, and modals!

### Method B: Using VS Code Live Server
1. Open this folder in **Visual Studio Code** or **Antigravity**.
2. If you have the **Live Server** extension installed, right-click `index.html` and choose **"Open with Live Server"**.
3. It will run on `http://127.0.0.1:5500`.

### Method C: Using Vite / Node.js (When Node.js is installed)
```bash
# 1. Open terminal in the project directory
cd "C:\Users\shewa\.gemini\antigravity\scratch\tech-innovate-portal"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

---

## ✏️ 2. How to Change the Company Name

All company branding is centrally managed in **`assets/js/config.js`** so you never have to hunt through HTML files.

1. Open `assets/js/config.js` in your editor.
2. At the very top, locate the `siteConfig` object:
   ```javascript
   export const siteConfig = {
     companyName: "YOUR COMPANY NAME HERE",
     companyShortName: "YourBrand",
     companyLegalName: "Your Registered Company Pvt. Ltd.",
     tagline: "Build Your Future in Technology. Learn. Innovate. Grow.",
     ...
   ```
3. Save the file. Refresh your browser to see your new company name reflected everywhere across the site, header, and footer!

---

## 📸 3. How to Add Founder Photographs

The website already includes sleek SVG monogram badges for **Dr. Pravin Kale** and **Dr. Sandeep Kale**. When you are ready to add real photographs:

1. Prepare your portrait photos (square or portrait ratio, JPG or PNG format).
2. Save your photos inside the folder:
   `assets/images/`
   - Example: `assets/images/founder-pravin.jpg`
   - Example: `assets/images/founder-sandeep.jpg`
3. Open `assets/js/config.js`, scroll to the `founders` array, and update the `image` field:
   ```javascript
   founders: [
     {
       id: "pravin-kale",
       name: "Dr. Pravin Kale",
       role: "Founder",
       image: "assets/images/founder-pravin.jpg", // <-- Update filename here
       ...
     },
     {
       id: "sandeep-kale",
       name: "Dr. Sandeep Kale",
       role: "Co-Founder",
       image: "assets/images/founder-sandeep.jpg", // <-- Update filename here
       ...
     }
   ]
   ```
4. Save the file. If an image path is invalid or missing, it automatically falls back gracefully to the monogram placeholder.

---

## 📞 4. How to Change Phone Number, Email & WhatsApp

1. Open `assets/js/config.js`.
2. Locate the `contact` section:
   ```javascript
   contact: {
     email: "your-email@yourdomain.com",
     admissionsEmail: "admissions@yourdomain.com",
     phone: "+91 98765 43210",
     whatsapp: "+91 98765 43210", // Used for 1-click WhatsApp messaging!
     address: {
       line1: "Your Office Address Line 1",
       line2: "Near Landmark",
       city: "Pune",
       state: "Maharashtra",
       country: "India",
       pincode: "411001",
     },
     socials: {
       linkedin: "https://linkedin.com/company/your-company",
       github: "https://github.com/your-company",
       ...
     }
   }
   ```
3. Save the file. The contact cards, footer, WhatsApp quick-chat triggers, and enquiry forms will instantly update with your real details.

---

## 📚 5. How to Add, Edit, or Remove Courses

Courses are structured in `assets/js/config.js` under the `courses` array.

### To edit an existing course:
Change the `name`, `description`, `highlights`, or `skills` array for any of the 6 tracks.

### To add a new course:
Copy and paste this template into the `courses` array:
```javascript
{
  id: "cloud-computing",
  name: "Cloud Computing & DevOps",
  category: "Full Stack",
  badge: "High Growth",
  icon: "server", // choices: layout, layers, cpu, sparkles, terminal, binary, server, globe
  color: "from-blue-600 to-indigo-600",
  description: "Master modern cloud architectures, Docker containerization, CI/CD, and AWS/GCP deployments.",
  highlights: [
    "Docker containers and microservices architecture",
    "CI/CD pipelines with GitHub Actions",
    "Cloud infrastructure and serverless deployments"
  ],
  skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
  targetAudience: "Engineers and computer science students."
}
```

---

## 🌐 6. How to Publish the Website Using GitHub & Vercel

Publishing to the web is completely free:

### Step 1: Push to GitHub
1. Create a free account at [github.com](https://github.com).
2. Click **New Repository** and name it (e.g. `tech-training-website`).
3. In your local project terminal, run:
   ```bash
   cd "C:\Users\shewa\.gemini\antigravity\scratch\tech-innovate-portal"
   git init
   git add .
   git commit -m "Initial commit of IT services and technology training website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tech-training-website.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (1-Click, Free)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Select your newly created repository (`tech-training-website`).
4. Keep the default settings and click **"Deploy"**.
5. Within 30 seconds, Vercel will give you a live HTTPS web address (e.g., `https://tech-training-website.vercel.app`) that you can share with students, clients, and partners worldwide!

---

## 📁 Project Structure

```
tech-innovate-portal/
├── index.html                  # Main production entrypoint
├── package.json                # Modern package configuration
├── vite.config.js              # Vite server & bundler configuration
├── tailwind.config.js          # Tailwind theme & design system
├── README.md                   # This instruction guide
├── assets/
│   ├── css/
│   │   └── style.css           # Glassmorphism, glows, ambient orbs, animations
│   ├── js/
│   │   ├── config.js           # Central editable configuration (Start here!)
│   │   ├── icons.js            # Sharp, high-performance SVG icons
│   │   ├── app.js              # App routing, modal controller, form validation
│   │   ├── components/
│   │   │   ├── navbar.js       # Sticky header & mobile drawer
│   │   │   ├── hero.js         # Futuristic hero with 3D tech rings & code window
│   │   │   ├── trustWhy.js     # "Transforming Ideas Into Digital Possibilities" & Why Choose Us
│   │   │   ├── courses.js      # Filterable course cards
│   │   │   ├── servicesTech.js # IT services & tech stack badges
│   │   │   ├── leadership.js   # Dr. Pravin Kale & Dr. Sandeep Kale leadership cards
│   │   │   ├── ctaFooter.js    # Conversion CTA banner & comprehensive footer
│   │   │   └── modal.js        # Interactive Course & Consultation Enquiry modal
│   │   └── pages/
│   │       ├── aboutPage.js    # Mission, Vision, Core Values, Practical Methodology
│   │       ├── coursesPage.js  # Dedicated in-depth course catalog
│   │       ├── servicesPage.js # Detailed IT & AI enterprise services
│   │       └── contactPage.js  # Validated contact form, direct channels & FAQ
│   └── images/
│       ├── founder-pravin.svg  # Default avatar badge for Dr. Pravin Kale
│       ├── founder-sandeep.svg # Default avatar badge for Dr. Sandeep Kale
│       └── README.txt          # Guide for adding portrait photographs
```
