/* ==========================================================================
   PS DIGITAL STUDIOS – SITE DATA
   This is the ONLY file you need to edit to change the website content.
   Save the file, upload it to GitHub, and the site updates in a minute.
   ========================================================================== */

window.SITE = {

  /* ---------- Brand ---------- */
  brand: {
    name: "PS Digital Studios",
    tagline: "Your business. Better online."
  },

  /* ---------- Contact ---------- */
  contact: {
    whatsappNumber: "919305012250",           // country code + number, no + or spaces
    whatsappDisplay: "+91 93050 12250",
    whatsappMessage: "Hi PS Digital Studios, I'd like a website for my business.",
    instagramUrl: "https://www.instagram.com/ps_digitalstudios?stkn=MW9rOTBvMXgybm1lOA==",
    instagramHandle: "@ps_digitalstudios",
    email: ""                                  // optional, e.g. "hello@yourmail.com"
  },

  /* ---------- Home page hero ---------- */
  hero: {
    eyebrow: "Websites for local businesses",
    title1: "Your Business.",
    accent: "Better",
    title2: "Online.",
    text: "We design modern, fast and professional websites for local businesses, so you can get more customers, build trust and grow your brand.",
    showcaseProject: 0        // which project (by position, starting at 0) appears in the laptop and phone
  },

  /* ---------- Services ----------
     icon options: monitor, bolt, gear, pin, chat, star, mail                */
  services: [
    {
      icon: "monitor",
      title: "Business Websites",
      short: "Professional websites for your brand, services and customers.",
      includes: ["Multi-page design that matches your brand", "Looks right on phones, tablets and computers", "Contact details, map and social links", "Clean, fast-loading pages"]
    },
    {
      icon: "bolt",
      title: "Landing Pages",
      short: "Focused pages designed to turn visitors into enquiries or sales.",
      includes: ["One page built around one goal", "Clear offer and call-to-action", "Ideal for a promotion, launch or event", "Quick to build and quick to load"]
    },
    {
      icon: "gear",
      title: "Website Maintenance",
      short: "Updates, improvements and ongoing support when you need it.",
      includes: ["Text, photo and price updates", "Fixes and small improvements", "Adding new pages or sections", "Help when something looks wrong"]
    },
    {
      icon: "pin",
      title: "WhatsApp Integration",
      short: "Let your customers reach you instantly with one click.",
      includes: ["Chat button on every page", "Message pre-filled with your business name", "Works on phone and desktop", "Customers reach you where they already chat"]
    }
  ],

  /* ---------- Plans & pricing ----------
     Edit prices and features here. To add a plan, copy a whole { ... }, block.
     price / maintenance are shown exactly as typed, so include the ₹ sign.     */
  plans: {
    intro: "Clear, simple pricing for local businesses. Pick the plan that fits your business.",
    items: [
      {
        name: "Simple Website",
        tagline: "A clean, simple website to get your business online.",
        price: "₹5,000",
        priceNote: "one-time",
        maintenance: "₹500",
        maintenanceNote: "per month",
        features: [
          "Simple website for your business",
          "Works well on phones and computers",
          "WhatsApp chat button",
          "Your contact details and social links"
        ],
        featured: false,
        badge: ""
      },
      {
        name: "Professional Website",
        tagline: "A more polished, professional website to build trust and stand out.",
        price: "₹15,000",
        priceNote: "one-time",
        maintenance: "₹1,500",
        maintenanceNote: "per month",
        features: [
          "More professional design and layout",
          "More pages and sections for your business",
          "Works well on phones and computers",
          "WhatsApp chat button",
          "Your contact details and social links"
        ],
        featured: true,
        badge: ""
      }
    ],
    maintenanceTitle: "Monthly maintenance and checks",
    maintenanceText: "After your website goes live, the monthly fee covers regular checks and updates so your website keeps working and stays up to date.",
    note: "Have a different requirement? Tell us what you need and we'll suggest what fits."
  },

  /* ---------- Portfolio / Demo websites ----------
     HOW TO ADD A NEW ONE: copy a whole { ... }, block, paste it below the last one,
     and change the words. That's it.

     name        Business name
     category    Used for the filter buttons on the Portfolio page (e.g. "Restaurant & Café")
     headline    Big text shown on the preview picture
     button      Button text shown on the preview picture
     description Short line about the project
     url         Link to the live website. Leave "" if there isn't one yet
     image       Optional. A real screenshot, e.g. "assets/img/portfolio/my-client.jpg"
                 Leave "" to use the automatic preview picture instead.
     theme       Colours for the automatic preview: bg (background), fg (text),
                 accent (button), onAccent (button text)                       */
  projects: [
    {
      name: "Aura Salon",
      category: "Salon & Beauty",
      headline: "Look good. Feel great.",
      button: "Book appointment",
      description: "Hair, skin and bridal studio website with a price menu, packages and WhatsApp booking.",
      url: "https://1pun2.github.io/psdigitalstudios/demos/aura-salon/",
      image: "",
      theme: { bg: "#2b1233", fg: "#ffffff", accent: "#f7b59c", onAccent: "#2b1233" }
    },
    {
      name: "Forge Fitness",
      category: "Gym & Fitness",
      headline: "Stronger every day.",
      button: "Book a free trial",
      description: "Gym website with a live class timetable, membership plans, BMI check and free-trial booking.",
      url: "https://1pun2.github.io/psdigitalstudios/demos/forge-fitness/",
      image: "",
      theme: { bg: "#f1efe8", fg: "#101114", accent: "#2f4bff", onAccent: "#ffffff" }
    },
    {
      name: "Cafe Verde",
      category: "Restaurant & Café",
      headline: "Good food. Good mood.",
      button: "View menu",
      description: "Café website with a tabbed menu, veg and non-veg marks, and table reservations on WhatsApp.",
      url: "https://1pun2.github.io/psdigitalstudios/demos/cafe-verde/",
      image: "",
      theme: { bg: "#113a2c", fg: "#ffffff", accent: "#f6dd8b", onAccent: "#113a2c" }
    },
    {
      name: "Smile Dental Clinic",
      category: "Dental Clinic",
      headline: "Healthy smiles. Brighter futures.",
      button: "Book appointment",
      description: "Dental clinic website with treatments, dentist profiles, FAQs and appointment requests on WhatsApp.",
      url: "https://1pun2.github.io/psdigitalstudios/demos/smile-dental-clinic/",
      image: "",
      theme: { bg: "#f5f9f9", fg: "#0b2545", accent: "#0b7a70", onAccent: "#ffffff" }
    },
    {
      name: "Urban Interiors",
      category: "Interior Design",
      headline: "Designing Better Spaces",
      button: "See Projects",
      description: "Interior design studio website with a project gallery.",
      url: "",
      image: "",
      theme: { bg: "#e8e1d4", fg: "#2d2a24", accent: "#8a7a5c", onAccent: "#ffffff" }
    }

    /* ,{ ADD YOUR NEXT PROJECT HERE (put a comma after the block above) } */
  ],

  /* ---------- Reviews ----------
     Clients send reviews from the Reviews page. YOU approve them and paste
     the good ones here so they show on the site. See README.md, "Reviews".

     formEndpoint: paste your Formspree link here (free) so reviews arrive in
     your email. Example: "https://formspree.io/f/abcdwxyz"
     If you leave it empty, the review form opens WhatsApp with the review
     already typed, so it still works.                                        */
  reviews: {
    formEndpoint: "",
    items: [
      // Example (remove the two slashes at the start of each line to use it):
      // {
      //   name: "Client name",
      //   business: "Business name",
      //   rating: 5,
      //   text: "What the client said about working with you.",
      //   date: "September 2026"
      // },
    ]
  },

  /* ---------- Blog ----------
     HOW THIS "CHANGES DAILY": every post below has a "date" (YYYY-MM-DD).
     The blog page always shows the post whose date is closest to today,
     without going past today -- so as each date arrives, that day's post
     appears automatically, with no need to touch the code that day.
     To add tomorrow's post: copy a whole { ... }, block, paste it above
     the oldest one, give it a new date and write the content. The site
     does the rest by itself the moment that date arrives.
     If today is past every date below, the most recent post keeps showing
     until you add a new one -- so add a few posts ahead so it never runs out.  */
  blog: {
    intro: "Short, practical posts on websites and getting found online, for local business owners.",
    /* Each tag below gets its own colour automatically (see tagColor in app.js).
       Add a new tag simply by typing it on a post -- no extra setup needed.       */
    posts: [
      {
        date: "2026-09-23",
        title: "Does your business really need a website?",
        tag: "Getting started",
        body: [
          "Short answer: if customers ever search for you, check your hours, or decide whether to trust you before visiting, yes.",
          "A website does three jobs at once. It shows you're real and open. It puts your services, timings and location in one place instead of scattered across old posts. And it gives people a one-tap way to reach you on WhatsApp instead of hunting for your number.",
          "You don't need anything huge to start. A single clean page with what you do, where you are, and a WhatsApp button already puts you ahead of most local businesses that have nothing online at all."
        ]
      },
      {
        date: "2026-09-24",
        title: "3 things every local business website needs",
        tag: "Website tips",
        body: [
          "1. Your services and location, right up front. Visitors decide in seconds whether they're in the right place.",
          "2. A WhatsApp or call button that's easy to find. Most people would rather message than fill out a form.",
          "3. A design that works well on a phone. The majority of your visitors will open your site on their phone first, not a computer."
        ]
      },
      {
        date: "2026-09-25",
        title: "Why we build every website mobile-first",
        tag: "Behind the scenes",
        body: [
          "Most visitors to a local business website are on their phone, often while walking, in a shop, or deciding where to go next. If a site is slow or hard to tap on a small screen, they leave.",
          "That's why every website we build starts with the phone layout, not the desktop one. Buttons are big enough to tap, text is readable without zooming, and the WhatsApp button is always within thumb's reach.",
          "The desktop version still looks great, but the phone version is the one that has to work perfectly, because that's where most of your customers are."
        ]
      },
      {
        date: "2026-09-26",
        title: "What to send us to get a faster, better website",
        tag: "Working with us",
        body: [
          "The fastest projects start with a little preparation. Before you message us, it helps to have: your business name and what you do, your services or menu with prices if you want them shown, your address and opening hours, and a few photos if you have them.",
          "You don't need a logo, a colour scheme, or fancy copywriting. We can design around what you already have, and suggest colours and wording if you're not sure.",
          "The one thing that matters most: tell us what you want a visitor to do after reading your site, whether that's booking, calling, or visiting. Everything else follows from that."
        ]
      },
      {
        date: "2026-09-27",
        title: "WhatsApp button vs. contact form: why we choose WhatsApp",
        tag: "Website tips",
        body: [
          "A contact form asks a visitor to type a message, fill in their email, and wait for a reply. A WhatsApp button opens a chat they already know how to use, with your business name pre-filled in the message.",
          "For a local business, that difference matters. WhatsApp feels personal and immediate, which is exactly what someone wants when they're deciding whether to book a table, an appointment, or a service.",
          "That's why every website we build puts a WhatsApp button in the same easy-to-reach spot on every page, not buried at the bottom in a form."
        ]
      }
    ]
  },

  /* ---------- Founder / About photo ----------
     Edit your name, role and bio here. shortBio shows first; the rest shows
     when the visitor clicks "Show bio". Leave photo "" to hide the picture.  */
  founder: {
    photo: "assets/img/founder-puneet.jpg",
    name: "Puneet Singh",
    role: "Founder & Web Designer",
    shortBio: "I'm Puneet, the founder of PS Digital Studios. I create modern, responsive websites for local businesses, focusing on clean design, simple navigation, and making it easy for customers to connect with your business.",
    moreBio: [
      "I started PS Digital Studios because too many good local businesses are hard to find online, or don't have a website at all. I wanted to change that with websites that are simple to use, quick to load, and built around how customers actually search for and contact a business.",
      "Every project starts with a conversation about your business, not a template. From there I design something that fits your brand, works well on a phone, and makes it easy for customers to reach you on WhatsApp.",
      "When I'm not building websites, I'm learning new design and development skills so PS Digital Studios can keep offering better work to local businesses."
    ],
    quote: "Building PS Digital Studios, one business at a time."
  },

  /* ---------- About page ---------- */
  about: {
    title: "A small studio that builds websites for local businesses.",
    paragraphs: [
      "PS Digital Studios helps local businesses get found online. We build clean, fast websites that show what you do, earn trust, and make it easy for customers to contact you.",
      "Most of your customers are already on their phones and on WhatsApp. So we build every site to work well on a phone and to put a chat button right where people need it."
    ],
    points: [
      "Looks great on every screen size",
      "WhatsApp chat built into every page",
      "Simple, honest communication",
      "Support after your site goes live"
    ]
  },

  /* ---------- How we work (shown on Services and About pages) ---------- */
  process: [
    { title: "You tell us about your business", text: "Message us on WhatsApp with what you do and what you need." },
    { title: "We design your website", text: "We build a first version with your name, colours and content." },
    { title: "You review and request changes", text: "Tell us what to adjust until you are happy." },
    { title: "Your website goes live", text: "We publish it and stay available for updates." }
  ],

  /* ---------- Call-to-action banner ---------- */
  cta: {
    title: "Ready to take your business online?",
    text: "Let's create a website that works for you."
  },

  /* ---------- Chat assistant ----------
     Each answer has:
       keywords  words a visitor might type (lowercase)
       reply     what the assistant says
       actions   optional buttons. href can be "@whatsapp", "@instagram",
                 or a page like "portfolio.html"                             */
  chatbot: {
    name: "PS Assistant",
    greeting: "Hi! I'm the PS Digital Studios assistant. Ask me about our services, pricing, timing or how to get started.",
    suggestions: ["What services do you offer?", "What are your plans and prices?", "How long does it take?", "Show me your work"],
    fallback: "I'm not sure about that one. The quickest way to get a clear answer is to message us directly on WhatsApp.",
    fallbackActions: [{ label: "Ask on WhatsApp", href: "@whatsapp" }],
    answers: [
      {
        keywords: ["hi", "hello", "hey", "namaste", "hii", "good morning", "good evening"],
        reply: "Hello! How can I help you today? You can ask about services, pricing, timelines or our past work."
      },
      {
        keywords: ["service", "offer", "what do you do", "provide", "make", "build", "create"],
        reply: "We build business websites and landing pages for local businesses, add WhatsApp chat buttons, and maintain websites after launch.",
        actions: [{ label: "See all services", href: "services.html" }]
      },
      {
        keywords: ["plan", "price", "cost", "charge", "rate", "how much", "budget", "quote", "fees", "package", "pricing"],
        reply: "We have two plans. Simple Website: ₹5,000, with monthly maintenance and checks at ₹500. Professional Website: ₹15,000, with monthly maintenance and checks at ₹1,500. Message us if you need something different.",
        actions: [{ label: "See plans", href: "plans.html" }, { label: "Ask on WhatsApp", href: "@whatsapp" }]
      },
      {
        keywords: ["how long", "time", "days", "weeks", "deadline", "delivery", "fast", "quick", "urgent"],
        reply: "The timeline depends on the size of the website. A simple site is usually quicker than a multi-page one. Tell us your deadline on WhatsApp and we'll confirm what's possible.",
        actions: [{ label: "Tell us your deadline", href: "@whatsapp" }]
      },
      {
        keywords: ["portfolio", "demo", "work", "example", "sample", "previous", "past", "projects", "see"],
        reply: "You can see our demo websites and client projects on the Portfolio page.",
        actions: [{ label: "View portfolio", href: "portfolio.html" }]
      },
      {
        keywords: ["contact", "call", "phone", "number", "reach", "talk", "speak"],
        reply: "The fastest way to reach us is WhatsApp. You can also send a message through the Contact page or find us on Instagram.",
        actions: [{ label: "Chat on WhatsApp", href: "@whatsapp" }, { label: "Contact page", href: "contact.html" }]
      },
      {
        keywords: ["whatsapp"],
        reply: "Yes, we can add a WhatsApp chat button to your website so customers can message you in one tap. You can also chat with us directly on WhatsApp.",
        actions: [{ label: "Chat on WhatsApp", href: "@whatsapp" }]
      },
      {
        keywords: ["instagram", "insta", "social"],
        reply: "You can follow our work on Instagram at @ps_digitalstudios.",
        actions: [{ label: "Open Instagram", href: "@instagram" }]
      },
      {
        keywords: ["maintenance", "update", "change", "edit", "support", "after", "fix"],
        reply: "Yes, we offer website maintenance: updating text, photos and prices, small improvements, and help when something needs fixing. Monthly maintenance and checks cost ₹500 on the Simple plan and ₹1,500 on the Professional plan.",
        actions: [{ label: "See plans", href: "plans.html" }, { label: "Ask about maintenance", href: "@whatsapp" }]
      },
      {
        keywords: ["mobile", "responsive", "phone friendly", "tablet"],
        reply: "Every website we build is designed to look and work well on phones, tablets and computers."
      },
      {
        keywords: ["landing"],
        reply: "A landing page is a single focused page built to get one result, like enquiries for an offer. It's a good choice for a promotion or a new launch.",
        actions: [{ label: "Discuss a landing page", href: "@whatsapp" }]
      },
      {
        keywords: ["domain", "hosting", "host", "server"],
        reply: "Domain and hosting depend on your website's needs. Message us on WhatsApp and we'll explain the options for your business.",
        actions: [{ label: "Ask on WhatsApp", href: "@whatsapp" }]
      },
      {
        keywords: ["where", "location", "city", "area", "based", "local"],
        reply: "We work with local businesses. Message us on WhatsApp and tell us where you are and we'll let you know how we can help.",
        actions: [{ label: "Message us", href: "@whatsapp" }]
      },
      {
        keywords: ["review", "testimonial", "feedback", "rating"],
        reply: "Clients can leave a review on our Reviews page at any time. You can also read what others have said there.",
        actions: [{ label: "Reviews page", href: "reviews.html" }]
      },
      {
        keywords: ["start", "begin", "process", "how does it work", "how do i", "steps", "get started", "order"],
        reply: "It's simple: 1) message us about your business, 2) we design your website, 3) you review it and request changes, 4) we publish it. The first step is a message on WhatsApp.",
        actions: [{ label: "Get started", href: "@whatsapp" }]
      },
      {
        keywords: ["thanks", "thank you", "thx", "ok thanks", "great", "bye"],
        reply: "You're welcome! If you need anything else, just ask or message us on WhatsApp."
      }
    ]
  }
};
