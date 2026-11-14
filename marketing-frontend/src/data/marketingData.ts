import { MarketingChannel, ServiceProvider } from "@/types/marketing";

export const RECOMMENDED_CHANNELS: MarketingChannel[] = [
  // Low Budget
  {
    id: "whatsapp-facebook-groups",
    name: "WhatsApp and Facebook groups",
    description: "Community building and zero-cost direct customer communication.",
    icon: "message-circle",
    category: "organic",
    budgetBands: ["Low"],
  },
  {
    id: "organic-instagram-tiktok",
    name: "Organic Instagram and TikTok",
    description: "Consistent short-form reels and stories to grow an engaged following.",
    icon: "share-2",
    category: "organic",
    budgetBands: ["Low"],
  },
  {
    id: "email-referrals",
    name: "Email list and referrals",
    description: "Encourage word-of-mouth and retain early signups with regular updates.",
    icon: "mail",
    category: "retention",
    budgetBands: ["Low"],
  },

  // Medium Budget
  {
    id: "paid-meta-ads",
    name: "Paid Facebook and Instagram ads",
    description: "Targeted by age and location",
    icon: "facebook",
    category: "paid",
    budgetBands: ["Medium"],
  },
  {
    id: "seo",
    name: "Search engine optimisation",
    description: "Steady long-term traffic",
    icon: "search",
    category: "organic",
    budgetBands: ["Medium"],
  },
  {
    id: "micro-influencers",
    name: "Micro-influencer partnerships",
    description: "Trust from small, loyal audiences",
    icon: "users",
    category: "brand",
    budgetBands: ["Medium"],
  },
  {
    id: "email-campaigns",
    name: "Email campaigns",
    description: "Nurture leads and subscribers",
    icon: "mail",
    category: "retention",
    budgetBands: ["Medium"],
  },

  // High Budget
  {
    id: "multi-channel-paid-ads",
    name: "Multi-channel paid ads",
    description: "Scalable acquisition across Google Search, Meta Ads, and YouTube.",
    icon: "trending-up",
    category: "paid",
    budgetBands: ["High"],
  },
  {
    id: "video-brand-campaigns",
    name: "Video and brand campaigns",
    description: "High-production brand stories that establish category authority.",
    icon: "video",
    category: "brand",
    budgetBands: ["High"],
  },
  {
    id: "marketing-automation-crm",
    name: "Marketing automation and CRM",
    description: "Full lifecycle customer engagement, segmentation, and automated retargeting.",
    icon: "cpu",
    category: "retention",
    budgetBands: ["High"],
  },
];

export const SERVICE_PROVIDERS: ServiceProvider[] = [
  {
    id: "creative-hub",
    name: "CreativeHub Agency",
    tagline: "Logos and brand kits",
    initials: "CH",
    logoBg: "#8e8e93",
    categories: ["Graphic design", "Content", "Service", "Products"],
    businessTypes: ["Products", "Services"],
    about:
      "CreativeHub Agency specializes in building distinctive, memorable brand identities and high-converting visual assets for early-stage and growing startups across Sri Lanka.",
    services: [
      {
        title: "Branding and design",
        description: "Comprehensive visual systems, brand voice guidelines, and typography palettes.",
      },
      {
        title: "Logos and brand kits",
        description: "Custom vector logos, social media templates, business cards, and packaging mockups.",
      },
    ],
    contacts: {
      email: "hello@creativehub.lk",
      phone: "+94 11 234 5678",
      whatsapp: "+94 77 123 4567",
      facebook: "facebook.com/creativehublk",
      location: "Colombo 03, Sri Lanka",
    },
  },
  {
    id: "byteworks-studio",
    name: "ByteWorks Studio",
    tagline: "Social media marketing",
    initials: "BW",
    logoBg: "#8e8e93",
    categories: ["Web development", "Service", "Products"],
    businessTypes: ["Products", "Services"],
    about:
      "ByteWorks Studio helps startups leverage performance marketing, custom web platforms, and organic social growth to achieve repeatable customer acquisition.",
    services: [
      {
        title: "Social media marketing",
        description: "Paid social campaign management, creative ad copywriting, and conversion tracking.",
      },
      {
        title: "Web development",
        description: "Fast, responsive web applications and landing pages tailored for startups.",
      },
    ],
    contacts: {
      email: "contact@byteworks.io",
      phone: "+94 11 456 7890",
      whatsapp: "+94 71 987 6543",
      facebook: "facebook.com/byteworksstudio",
      location: "Kandy & Colombo, Sri Lanka",
    },
  },
  {
    id: "island-media-solutions",
    name: "Island Media Solutions",
    tagline: "Branding and design",
    initials: "IM",
    logoBg: "#8e8e93",
    categories: ["Content", "Service", "Products"],
    businessTypes: ["Products", "Services"],
    about:
      "Island Media Solutions is a creative production house crafting authentic stories, photography, video campaigns, and brand experiences for forward-thinking enterprises.",
    services: [
      {
        title: "Content production",
        description: "Product photography, video ads, testimonials, and copy tailored for Sri Lankan markets.",
      },
      {
        title: "Branding and design",
        description: "End-to-end launch kits, packaging design, and promotional materials.",
      },
    ],
    contacts: {
      email: "info@islandmedia.lk",
      phone: "+94 11 876 5432",
      whatsapp: "+94 76 543 2109",
      facebook: "facebook.com/islandmediasolutions",
      location: "Colombo 07, Sri Lanka",
    },
  },
  {
    id: "apex-digital",
    name: "Apex Digital Marketing",
    tagline: "Performance marketing and SEO",
    initials: "AD",
    logoBg: "#8e8e93",
    categories: ["Web development", "Content", "Service"],
    businessTypes: ["Products", "Services"],
    about:
      "Apex Digital Marketing is a data-driven growth agency helping startups optimize search rankings, customer conversion funnels, and paid advertising ROI.",
    services: [
      {
        title: "Search engine optimisation",
        description: "Technical SEO audits, keyword ranking strategies, and local business listing optimizations.",
      },
      {
        title: "Paid search campaigns",
        description: "Google Ads, retargeting display networks, and high-intent customer acquisition.",
      },
    ],
    contacts: {
      email: "hello@apexdigital.lk",
      phone: "+94 11 345 6789",
      whatsapp: "+94 77 345 6789",
      facebook: "facebook.com/apexdigitallk",
      location: "Colombo 04, Sri Lanka",
    },
  },
  {
    id: "pulse-pr",
    name: "Pulse PR & Communications",
    tagline: "Public relations and media reach",
    initials: "PR",
    logoBg: "#8e8e93",
    categories: ["Content", "Service"],
    businessTypes: ["Products", "Services"],
    about:
      "Pulse PR connects emerging startups with mainstream tech publications, industry podcasts, and premier influencer partners across South Asia.",
    services: [
      {
        title: "Press & Media Releases",
        description: "Media outreach, launch announcements, and executive thought leadership articles.",
      },
      {
        title: "Influencer Partnerships",
        description: "Vetted creator collaborations, product reviews, and brand ambassadorships.",
      },
    ],
    contacts: {
      email: "press@pulsecomms.lk",
      phone: "+94 11 567 8901",
      whatsapp: "+94 71 567 8901",
      facebook: "facebook.com/pulseprlk",
      location: "Colombo 02, Sri Lanka",
    },
  },
  {
    id: "spark-studios",
    name: "Spark Studios LK",
    tagline: "Product photography and creative design",
    initials: "SS",
    logoBg: "#8e8e93",
    categories: ["Graphic design", "Content", "Products"],
    businessTypes: ["Products", "Services"],
    about:
      "Spark Studios crafts high-impact product photography, 3D renderings, and packaging visuals tailored for e-commerce stores and retail displays.",
    services: [
      {
        title: "E-Commerce Photography",
        description: "High-resolution studio photography on clean backgrounds and lifestyle settings.",
      },
      {
        title: "Packaging & Print Design",
        description: "Retail box packaging, labels, unboxing inserts, and point-of-sale collateral.",
      },
    ],
    contacts: {
      email: "studio@sparkstudios.lk",
      phone: "+94 11 678 9012",
      whatsapp: "+94 76 678 9012",
      facebook: "facebook.com/sparkstudioslk",
      location: "Rajagiriya, Sri Lanka",
    },
  },
];

export const PROBLEM_OPTIONS = [
  "High product prices",
  "Lack of time",
  "Limited availability",
  "Delivery delays",
  "Poor service",
];

export const PLATFORM_OPTIONS = [
  "Facebook",
  "Instagram",
  "TikTok",
  "YouTube",
  "Google Search",
  "WhatsApp",
];
