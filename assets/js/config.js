/**
 * ====================================================================
 * CENTRAL WEBSITE CONFIGURATION FILE
 * ====================================================================
 * You can easily customize the company name, founders, contact details,
 * courses, and services right here without editing HTML or styles!
 */

export const siteConfig = {
  // 1. BRANDING & COMPANY DETAILS
  companyName: "AI Tech",
  companyShortName: "AI Tech",
  companyLegalName: "AI Tech Solutions",
  tagline: "Brings Every Solution Towards You",
  subtitle: "Brings every solution towards you — empowering students, professionals and businesses with next-generation skills in Web Development, Artificial Intelligence and emerging technologies.",
  foundedYear: "2024",

  // 2. CONTACT INFORMATION
  contact: {
    email: "contact@aitech.in",
    admissionsEmail: "admissions@aitech.in",
    phone: "+91 90494 73739",                  // Dr. Sandeep Kale
    phoneSandeep: "+91 90494 73739",           // Dr. Sandeep Kale
    phonePravin: "+91 96075 04226",            // Dr. Pravin Kale
    altPhone: "+91 96075 04226",
    whatsapp: "+91 90494 73739",              // Instant WhatsApp chat
    whatsappPravin: "+91 96075 04226",
    address: {
      line1: "Leo Galaxy",
      line2: "Gokul Society",
      city: "Nagpur",
      state: "Maharashtra",
      country: "India",
      pincode: "440013",
      mapUrl: "https://maps.google.com/?q=Leo+Galaxy+Gokul+Society+Nagpur"
    },
    workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM (IST)",
    socials: {
      linkedin: "https://linkedin.com/company/placeholder",
      github: "https://github.com/placeholder",
      twitter: "https://twitter.com/placeholder",
      instagram: "https://instagram.com/placeholder",
      youtube: "https://youtube.com/placeholder"
    }
  },

  // 3. LEADERSHIP & FOUNDERS
  // Verified founders: Dr. Pravin Kale and Dr. Sandeep Kale
  founders: [
    {
      id: "pravin-kale",
      name: "Dr. Pravin Kale",
      role: "Founder",
      phone: "+91 96075 04226",
      tagline: "Visionary Leader in Technology Education & Enterprise Solutions",
      image: "assets/images/founder-pravin.svg",
      initials: "PK",
      bio: "Dr. Pravin Kale is the Founder of AI Tech, dedicated to transforming technology education and driving digital transformation. With a passion for practical, real-world skill-building and innovation, he leads the organization's strategic vision, academic rigor, and technology initiatives.",
      expertise: [
        "Strategic Leadership",
        "Technology Education",
        "Innovation & Research",
        "Curriculum Architecture"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "pravin.kale@aitech.in",
        phone: "+91 96075 04226"
      }
    },
    {
      id: "sandeep-kale",
      name: "Dr. Sandeep Kale",
      role: "Co-Founder",
      phone: "+91 90494 73739",
      tagline: "Innovator in AI Solutions & Professional Technical Skill Development",
      image: "assets/images/founder-sandeep.svg",
      initials: "SK",
      bio: "Dr. Sandeep Kale is the Co-Founder of AI Tech, bringing forward-thinking leadership to IT training and software engineering solutions. He focuses on empowering students and working professionals with modern, industry-relevant competencies in artificial intelligence and modern web architectures.",
      expertise: [
        "Applied Technology",
        "Skill Development",
        "Industry Mentorship",
        "IT Solutions Consulting"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sandeep.kale@aitech.in",
        phone: "+91 90494 73739"
      }
    }
  ],

  // 4. TRAINING PROGRAMS & COURSES
  // In accordance with guidelines: No invented fees, duration, or fake placement records.
  courses: [
    {
      id: "web-development",
      name: "Web Development",
      category: "Web Development",
      badge: "Foundation to Advanced",
      icon: "layout",
      color: "from-blue-500 to-cyan-400",
      description: "Master modern core web standards and responsive interfaces from scratch with real-world project development.",
      highlights: [
        "Semantic HTML5 & Modern CSS3 architecture",
        "Responsive web design & mobile-first approach",
        "Modern JavaScript (ES6+), DOM manipulation & API fetching",
        "CSS Grid, Flexbox, Tailwind CSS & styling workflows",
        "Git version control and multi-environment deployment"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design", "Git"],
      targetAudience: "College students, beginners entering IT, and aspiring web designers."
    },
    {
      id: "full-stack-development",
      name: "Full Stack Development",
      category: "Full Stack",
      badge: "Industry Favorite",
      icon: "layers",
      color: "from-cyan-400 to-blue-600",
      description: "Comprehensive end-to-end development covering client-side interfaces, server-side APIs, database modeling, and cloud hosting.",
      highlights: [
        "Modern frontend frameworks (React.js, component lifecycle, hooks)",
        "Backend server development with Node.js and Express",
        "Relational & NoSQL database management (MongoDB, PostgreSQL, SQL)",
        "RESTful API design, token-based authentication & state management",
        "Complete full-stack capstone projects deployed to production"
      ],
      skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Full Stack Architecture"],
      targetAudience: "Students and professionals aiming to become full-stack software engineers."
    },
    {
      id: "artificial-intelligence",
      name: "Artificial Intelligence",
      category: "AI & ML",
      badge: "Next-Gen",
      icon: "cpu",
      color: "from-purple-500 to-indigo-500",
      description: "Understand foundational AI concepts, intelligent algorithms, neural structures, and practical AI implementations.",
      highlights: [
        "Foundations of Artificial Intelligence & heuristic problem solving",
        "Search algorithms, knowledge representation, and probabilistic models",
        "Neural network fundamentals and perceptron modeling",
        "Computer vision basics and natural language understanding",
        "Real-world AI application development and ethical AI principles"
      ],
      skills: ["AI Fundamentals", "Neural Networks", "Algorithm Design", "Deep Learning Intro", "Python for AI"],
      targetAudience: "Engineers, computer science students, and technology enthusiasts."
    },
    {
      id: "generative-ai",
      name: "Generative AI",
      category: "AI & ML",
      badge: "Trending & High Demand",
      icon: "sparkles",
      color: "from-purple-500 to-pink-500",
      description: "Explore state-of-the-art Large Language Models (LLMs), prompt engineering, diffusion models, and building GenAI apps.",
      highlights: [
        "Transformer architecture, attention mechanisms, and LLM foundations",
        "Advanced prompt engineering, system prompt tuning, and few-shot prompting",
        "Building applications with LLM APIs (OpenAI, Gemini, Claude, Open Models)",
        "Retrieval-Augmented Generation (RAG) architectures and vector embeddings",
        "AI agents, autonomous workflows, and AI tool integration"
      ],
      skills: ["Prompt Engineering", "LLM APIs", "RAG Systems", "Vector Databases", "AI Agents", "LangChain"],
      targetAudience: "Developers and professionals looking to leverage modern Generative AI."
    },
    {
      id: "python-programming",
      name: "Python Programming",
      category: "Programming",
      badge: "Core Essential",
      icon: "terminal",
      color: "from-emerald-400 to-cyan-500",
      description: "Build robust programming logic from ground up with Python, covering data structures, OOP, file processing, and libraries.",
      highlights: [
        "Python syntax, control flow, functions, and module architecture",
        "Data structures (Lists, Tuples, Dictionaries, Sets) and algorithms",
        "Object-Oriented Programming (OOP): Classes, inheritance, polymorphism",
        "File I/O, error handling, regular expressions, and unit testing",
        "Working with external libraries, HTTP requests, and automation scripts"
      ],
      skills: ["Python 3", "OOP", "Data Structures", "Automation", "File Handling", "Algorithm Design"],
      targetAudience: "Beginners with zero prior coding experience as well as IT aspirants."
    },
    {
      id: "machine-learning",
      name: "Machine Learning",
      category: "AI & ML",
      badge: "Data-Driven",
      icon: "binary",
      color: "from-blue-600 to-purple-600",
      description: "Learn predictive modeling, data preprocessing, regression, classification, clustering, and model evaluation techniques.",
      highlights: [
        "Exploratory Data Analysis (EDA) with NumPy, Pandas, Matplotlib, and Seaborn",
        "Supervised learning: Linear/Logistic Regression, Decision Trees, Random Forests",
        "Unsupervised learning: K-Means clustering, PCA dimensionality reduction",
        "Model evaluation metrics (Accuracy, Precision, Recall, F1, ROC-AUC)",
        "End-to-end Machine Learning pipelines and model persistence"
      ],
      skills: ["Pandas", "NumPy", "Scikit-Learn", "Model Evaluation", "EDA", "Feature Engineering"],
      targetAudience: "Students and professionals passionate about data science and predictive analytics."
    }
  ],

  // 5. IT SERVICES & ENTERPRISE SOLUTIONS
  services: [
    {
      id: "website-development",
      name: "Website Development",
      icon: "globe",
      shortDesc: "High-performance, modern, accessible websites customized to elevate your brand presence and drive user conversion.",
      features: [
        "Custom responsive design tailored for mobile, tablet, and desktop",
        "Modern SEO architecture, blazing-fast Core Web Vitals performance",
        "Clean semantic code and cross-browser compatibility",
        "Content Management System (CMS) integration"
      ]
    },
    {
      id: "frontend-development",
      name: "Frontend Development",
      icon: "monitor",
      shortDesc: "Pixel-perfect interactive web interfaces engineered with modern frameworks, micro-interactions, and design systems.",
      features: [
        "React, Next.js, and modern Component-Driven architectures",
        "Dynamic state management and responsive user interfaces",
        "Accessible, high-conversion UX design with smooth transitions",
        "Performance optimization and lazy-loading techniques"
      ]
    },
    {
      id: "backend-development",
      name: "Backend Development",
      icon: "server",
      shortDesc: "Scalable, secure server-side engines, database architectures, and REST/GraphQL APIs built for high availability.",
      features: [
        "Microservices & Monolithic backend architecture with Node.js/Python",
        "Secure RESTful & GraphQL API design with robust authentication",
        "Relational & NoSQL database modeling, optimization, and backups",
        "Cloud deployment, serverless pipelines, and containerization"
      ]
    },
    {
      id: "ai-solutions",
      name: "AI-Based Technology Solutions",
      icon: "bot",
      shortDesc: "Cutting-edge artificial intelligence, LLM workflow automation, and custom predictive tools for enterprise productivity.",
      features: [
        "Custom AI agent development and automated enterprise workflows",
        "Intelligent document processing and generative content systems",
        "Retrieval-Augmented Generation (RAG) powered internal knowledge search",
        "Predictive analytics and data classification engines"
      ]
    },
    {
      id: "technology-consulting",
      name: "Technology Consulting",
      icon: "compass",
      shortDesc: "Expert strategic advisory to guide businesses through digital modernization, software architecture, and AI readiness.",
      features: [
        "Technology stack evaluation and modernization roadmaps",
        "System architecture review and security best-practice audits",
        "Cloud migration planning and operational cost optimization",
        "AI feasibility studies and technical proof-of-concepts (PoC)"
      ]
    },
    {
      id: "it-training-programs",
      name: "Corporate IT Training Programs",
      icon: "graduation-cap",
      shortDesc: "Customized technical upskilling programs designed for academic institutions, corporate teams, and engineering groups.",
      features: [
        "Custom curriculum tailored to institutional or team requirements",
        "Hands-on project-centric workshops led by experienced trainers",
        "Real-world software engineering simulations and code reviews",
        "Post-training assessments and competency reports"
      ]
    }
  ],

  // 6. WHY CHOOSE US PILLARS
  whyChooseUs: [
    {
      id: "practical-learning",
      title: "Practical Learning",
      icon: "code-2",
      description: "Move beyond passive theory. Every concept is reinforced through live coding, architectural design, and direct problem solving."
    },
    {
      id: "industry-skills",
      title: "Industry-Relevant Skills",
      icon: "target",
      description: "Curriculum aligned directly with modern software industry demands, cutting-edge tools, and emerging AI technologies."
    },
    {
      id: "expert-guidance",
      title: "Expert Guidance",
      icon: "users",
      description: "Learn under the strategic leadership of Dr. Pravin Kale and Dr. Sandeep Kale with dedicated mentorship."
    },
    {
      id: "hands-on-projects",
      title: "Hands-on Projects",
      icon: "folder-git-2",
      description: "Build robust, portfolio-worthy projects demonstrating end-to-end full stack architecture and intelligent AI features."
    },
    {
      id: "modern-tech",
      title: "Modern Technologies",
      icon: "zap",
      description: "Work with modern frameworks, cloud tools, Python, React, Next-gen LLMs, and enterprise-grade software standards."
    },
    {
      id: "career-oriented",
      title: "Career-Oriented Learning",
      icon: "trending-up",
      description: "Structured pathways designed to elevate confidence for college students, beginners, and working professionals alike."
    }
  ],

  // 7. TECHNOLOGIES
  technologies: [
    { name: "React", category: "Frontend", level: "Advanced", icon: "atom" },
    { name: "JavaScript", category: "Frontend / Backend", level: "ES6+", icon: "code" },
    { name: "Python", category: "AI / Backend", level: "Core & Data", icon: "terminal" },
    { name: "Node.js", category: "Backend", level: "Runtime", icon: "server" },
    { name: "HTML5", category: "Markup", level: "Semantic", icon: "file-code" },
    { name: "CSS3 / Tailwind", category: "Styling", level: "Modern UI", icon: "palette" },
    { name: "Artificial Intelligence", category: "AI & ML", level: "Next-Gen", icon: "cpu" },
    { name: "Machine Learning", category: "Data Science", level: "Predictive", icon: "binary" },
    { name: "Generative AI & LLMs", category: "Emerging Tech", level: "State-of-the-Art", icon: "sparkles" },
    { name: "MongoDB", category: "Database", level: "NoSQL", icon: "database" },
    { name: "PostgreSQL / SQL", category: "Database", level: "Relational", icon: "table" },
    { name: "Git & GitHub", category: "DevOps", level: "Version Control", icon: "git-branch" }
  ],

  // 8. FREQUENTLY ASKED QUESTIONS
  faqs: [
    {
      q: "Who can enroll in your courses?",
      a: "Our programs are specifically designed for college students, beginners seeking to enter the IT industry, working professionals looking to upskill, and anyone passionate about mastering Web Development or Artificial Intelligence."
    },
    {
      q: "Do I need prior coding experience to learn Python or Web Development?",
      a: "No prior programming experience is required! Our foundational modules start from absolute basics and progressively build towards advanced real-world concepts."
    },
    {
      q: "How does the training emphasize practical learning?",
      a: "Every module includes hands-on exercises, guided code walkthroughs, and portfolio projects that simulate real software industry workflows."
    },
    {
      q: "Do you provide custom IT and AI solutions for businesses?",
      a: "Yes. In addition to technology education, we build custom web applications, AI automation tools, and provide technology consulting for businesses in India and internationally."
    },
    {
      q: "How can I enroll in a course or request a service consultation?",
      a: "You can click any 'Explore Course' or 'Get Started' button on the website, fill out the simple enquiry form, or reach out directly via our contact details and WhatsApp."
    }
  ]
};
