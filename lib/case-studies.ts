export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: "ai" | "automation";
  highlight: string;
  tags: string[];
  clientContext: {
    type: string;
    scale: string;
    industry?: string;
  };
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    overview: string;
    architecture: string[];
    keyDecisions: string[];
  };
  results: {
    metrics: Array<{ label: string; value: string }>;
    impact: string[];
  };
  idealClient: string[];
  review?: {
    text: string;
    author: string;
    role?: string;
    company?: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-rag-system",
    title: "Enterprise RAG System",
    subtitle: "Accurate, Faster Answers, Low Token Usage",
    category: "ai",
    highlight: "60% cost reduction, 85% accuracy improvement",
    tags: ["RAG", "LangChain", "Pinecone", "Python", "Vector Search", "Hybrid Search"],
    clientContext: {
      type: "Consulting client",
      scale: "Hundreds of users",
      industry: "Enterprise internal teams",
    },
    problem: {
      title: "The Challenge",
      points: [
        "High hallucination rates from LLM-only chat solutions with no grounding in source documents",
        "Slow response times, making the system unusable for daily decision-making",
        "High token costs, driven by oversized prompts and poor retrieval",
        "Unstructured outputs, limiting usefulness for leadership and operations",
        "Traditional keyword search and naïve RAG pipelines failed to meet enterprise accuracy standards",
      ],
    },
    solution: {
      overview:
        "I designed and deployed a production-grade Retrieval-Augmented Generation (RAG) system optimized for accuracy, speed, and cost control.",
      architecture: [
        "LangChain-based RAG pipeline with Pinecone vector database for low latency and cost efficiency",
        "Semantic embeddings over thousands of frequently updated documents (PDFs, SOPs, contracts)",
        "API-first design for easy internal integration",
        "Advanced chunking strategy tuning to balance recall vs. precision",
        "Hybrid search (vector + keyword) to reduce hallucinations",
        "Metadata filtering to enforce document relevance and compliance boundaries",
        "Context window optimization to minimize prompt bloat",
        "Aggressive token minimization without sacrificing answer quality",
        "Query rewriting + caching to reduce redundant retrieval and LLM calls",
      ],
      keyDecisions: [
        "Selected Pinecone for its low latency and cost efficiency over alternatives",
        "Implemented hybrid search to combine semantic and keyword matching",
        "Designed chunking strategy specifically tuned for document types",
        "Built caching layer to avoid redundant LLM calls",
      ],
    },
    results: {
      metrics: [
        { label: "Token Cost Reduction", value: "60%" },
        { label: "Retrieval Accuracy", value: "85% improvement" },
        { label: "Response Time", value: "Near-instant" },
        { label: "Document Scale", value: "Thousands of docs" },
      ],
      impact: [
        "Measured through internal benchmarking against legacy system",
        "Faster response times enabling real-time decision-making",
        "Significantly reduced hallucinations with source-grounded answers",
        "Higher-quality, structured responses usable by leadership and ops teams",
        "System became trusted internal knowledge layer",
      ],
    },
    idealClient: [
      "Enterprise support teams",
      "Internal knowledge platforms",
      "Compliance-heavy organizations",
      "Companies struggling with hallucinations and AI cost overruns",
    ],
    review: {
      text: "Mohammed did a great job. It was very diligent and got our projects successfully completed on time. I'll highly recommend him.",
      author: "Amine",
      role: "Client",
    },
  },
  {
    slug: "amazon-edi-automation",
    title: "Amazon EDI Automation System",
    subtitle: "From 1 Week of Manual Work to 60 Seconds",
    category: "automation",
    highlight: "$1M+ saved, zero rejections",
    tags: ["X12 EDI", "Python", "Automation", "Amazon Vendor Central", "Inventory Sync"],
    clientContext: {
      type: "Amazon Vendor & Distributor",
      scale: "10,000+ ASINs, 600-700 SKUs weekly",
      industry: "E-commerce / Logistics",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Manual creation of 856 ASNs taking nearly a full week per cycle",
        "Constant updates to product quantities and expiry dates",
        "High error rates from spreadsheet-driven workflows",
        "Late shipment penalties, chargebacks, and compliance risks",
        "Operational bottlenecks that did not scale with growth",
      ],
    },
    solution: {
      overview:
        "I built a fully automated Amazon Vendor Central EDI system, tailored specifically for high-SKU, high-volume operations.",
      architecture: [
        "Custom internal dashboard for EDI visibility and control",
        "Robust X12 EDI parser to process raw Amazon messages",
        "Structured data-mapping layer to normalize complex EDI files",
        "Automated pipeline to auto-generate 856 ASNs",
        "Real-time inventory sync with Amazon systems",
        "CSV upload support for bulk updates",
        "Error prevention through validation and structured mapping",
      ],
      keyDecisions: [
        "Built custom parser instead of using generic EDI tools for better control",
        "Designed for high-volume operations (600-700 SKUs weekly)",
        "Integrated directly with inventory systems for real-time sync",
        "Created user-friendly dashboard for operations teams",
      ],
    },
    results: {
      metrics: [
        { label: "Processing Time", value: "1 week → 60 seconds" },
        { label: "Cost Savings", value: "$1M+ in one year" },
        { label: "ASN Rejections", value: "Zero after deployment" },
        { label: "SKUs Processed", value: "600-700 per week" },
      ],
      impact: [
        "Zero Amazon ASN rejections after deployment",
        "Significant labor cost reduction",
        "Avoided compliance penalties and chargebacks",
        "Faster, more reliable fulfillment workflows",
        "Operations scaled without increasing headcount",
      ],
    },
    idealClient: [
      "Amazon Vendors or distributors",
      "Companies managing high SKU counts",
      "Businesses facing EDI complexity, chargebacks, or compliance pressure",
      "Operations teams looking for automation that pays for itself fast",
    ],
    review: {
      text: "Muhammad delivered solid work once again. He quickly understood the scope, tackled the technical challenges with precision, and ensured the system performed as expected. Communication was smooth throughout the project, and he remained responsive to feedback. Overall, a reliable developer who takes ownership of the work. Will definitely work with him again!",
      author: "Sam",
      role: "Operations Manager",
    },
  },
  {
    slug: "stable-diffusion-optimization",
    title: "Stable Diffusion XL Optimization",
    subtitle: "73% Faster Inference, $100K/month Cost Savings",
    category: "ai",
    highlight: "73% faster, $100K/month saved",
    tags: ["Stable Diffusion", "ML Optimization", "Python", "PyTorch", "Latent Consistency"],
    clientContext: {
      type: "AI Image Generation Platform",
      scale: "High-volume workloads",
      industry: "Generative AI",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Standard SDXL inference too slow for real-time or interactive use (~2.58s at 1024×1024)",
        "Too expensive for high-volume deployments",
        "Not practical for edge or consumer hardware",
        "Baseline inference made it unsuitable for production workloads with tight latency requirements",
      ],
    },
    solution: {
      overview:
        "I designed a latent consistency optimization framework layered on top of SDXL, preserving image quality while drastically reducing computation.",
      architecture: [
        "Latent Consistency Model (LCM) integration",
        "Blended latent outputs: first 10 steps from original SDXL, final step from optimized model",
        "80/20 weighting: 80% original SDXL output, 20% optimized latent output",
        "CLIP-based similarity scoring for quality validation",
        "Side-by-side comparisons to ensure no perceptible degradation",
        "Edge-device-friendly deployment without quality loss",
      ],
      keyDecisions: [
        "Chose latent consistency approach over full model replacement",
        "Implemented blended approach to preserve quality",
        "Validated using CLIP scoring for objective quality measurement",
        "Optimized specifically for 1024×1024 resolution",
      ],
    },
    results: {
      metrics: [
        { label: "Inference Time", value: "2.58s → 0.7s (73% faster)" },
        { label: "Cost Savings", value: "~$100K/month GPU reduction" },
        { label: "Quality", value: "No perceptible degradation" },
        { label: "Resolution", value: "1024×1024 optimized" },
      ],
      impact: [
        "73% speed improvement enabling real-time generation",
        "~$100K/month GPU cost reduction for high-volume workloads",
        "Edge-device-friendly deployment without quality loss",
        "Framework reusable for optimizing other diffusion models",
      ],
    },
    idealClient: [
      "AI startups running large-scale image generation",
      "Companies optimizing GPU-heavy workloads",
      "Teams deploying generative models on edge devices",
      "Creative tools requiring real-time image generation",
    ],
  },
  {
    slug: "instantly-outreach-automation",
    title: "Instantly Outreach Automation",
    subtitle: "300 Meetings/Week, $100K+ Revenue Pipeline",
    category: "automation",
    highlight: "300 meetings/week",
    tags: ["Instantly", "Cold Outreach", "CRM Integration", "Automation", "Lead Generation"],
    clientContext: {
      type: "B2B Service Business",
      scale: "200+ inboxes, high-volume outbound",
      industry: "B2B Services",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Manual outreach processes not scalable",
        "Poor deliverability and inbox placement issues",
        "Low and inconsistent reply rates",
        "No unified system for lead enrichment, segmentation, and follow-up",
        "Limited visibility into pipeline impact",
      ],
    },
    solution: {
      overview:
        "I built an end-to-end outreach infrastructure from deliverability to conversion optimization.",
      architecture: [
        "Set up and managed 200+ inboxes for outbound",
        "Designed domain and sending strategies to protect deliverability",
        "Implemented warm-up and throttling strategies inside Instantly",
        "Built multiple Instantly campaigns with spintax-based personalization",
        "Segmented lead lists with dynamic messaging based on lead attributes",
        "Integrated Instantly with CRM systems, webhooks, and lead enrichment tools",
        "Automated lead flow from enrichment → campaign → CRM → follow-up",
        "Managed A/B testing, deliverability monitoring, and reply handling",
      ],
      keyDecisions: [
        "Scaled to 200+ inboxes for volume without compromising deliverability",
        "Integrated enrichment tools for better personalization",
        "Built automated workflows connecting all systems",
        "Continuously optimized send schedules and follow-ups",
      ],
    },
    results: {
      metrics: [
        { label: "Reply Rate", value: "~10% at scale" },
        { label: "Meetings Booked", value: "~300 per week" },
        { label: "Revenue Pipeline", value: "$100K+ recurring revenue" },
        { label: "Timeframe", value: "3 months" },
      ],
      impact: [
        "Predictable, repeatable lead generation",
        "Reduced reliance on manual SDR work",
        "Clear attribution from outreach → meetings → revenue",
        "Scalable outbound engine ready for expansion",
        "Stable inbox placement despite high volume",
      ],
    },
    idealClient: [
      "Agencies offering lead generation",
      "B2B sales teams",
      "SaaS and service founders",
      "Companies scaling outbound without SDR bloat",
    ],
  },
  {
    slug: "ai-voice-coach",
    title: "AI Voice Coach (Athena)",
    subtitle: "Production STT/TTS Voice Backend",
    category: "ai",
    highlight: "Production voice AI",
    tags: ["STT/TTS", "Voice AI", "LLM", "Python", "DigitalOcean Spaces", "Conversational AI"],
    clientContext: {
      type: "Consumer Fitness Application",
      scale: "Production deployment",
      industry: "Health & Fitness",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Needed reliable voice interaction pipeline supporting STT → AI → TTS flow",
        "Required cost constraints on LLM usage",
        "Needed clean integration with existing backend and database",
        "Required storage and replay of audio messages for both user and AI",
        "Must not break existing text-based chat flows",
      ],
    },
    solution: {
      overview:
        "I designed and implemented a production-ready STT/TTS backend pipeline with multimodal message support.",
      architecture: [
        "Finalized STT + TTS (API-based) approach for frontend simplicity and reliability",
        "Designed conversational flow: user taps call → audio recorded → speech transcribed → AI generates response → response converted to audio",
        "Added type field to Messages schema to support both text and audio messages",
        "Ensured backward compatibility with existing text chat flows",
        "Integrated cloud object storage (DigitalOcean Spaces) for user voice uploads and AI-generated TTS audio",
        "Stored audio URLs + transcripts in database for frontend rendering",
        "Evaluated multiple LLMs (GPT-4o, GPT-3.5-turbo, Gemini) for cost vs quality",
        "Controlled response length and prompt structure to avoid token bloat",
      ],
      keyDecisions: [
        "Chose API-based STT/TTS over streaming for reliability",
        "Designed schema-level multimodal support from the start",
        "Selected DigitalOcean Spaces for cost-effective audio storage",
        "Optimized LLM selection based on cost vs quality tradeoffs",
      ],
    },
    results: {
      metrics: [
        { label: "Message Types", value: "Audio + Text supported" },
        { label: "Response Quality", value: "Production-ready" },
        { label: "Cost Optimization", value: "Controlled LLM usage" },
        { label: "Integration", value: "Seamless with existing chat" },
      ],
      impact: [
        "Fully functional voice chat experience with AI responses",
        "Stable STT/TTS pipeline integrated into production backend",
        "Audio + text messages stored and replayable",
        "Reduced AI costs through controlled model selection",
        "No disruption to existing chat features",
      ],
    },
    idealClient: [
      "Voice AI projects",
      "AI assistant / agent roles",
      "STT / TTS / conversational AI work",
      "Full-stack AI systems (backend-heavy)",
    ],
  },
  {
    slug: "helpscout-ai-agents",
    title: "HelpScout AI Support Agents",
    subtitle: "Multi-Agent Customer Support Automation",
    category: "ai",
    highlight: "4.0+ helpfulness score",
    tags: ["AI Agents", "HelpScout", "Customer Support", "LLM", "Multi-Agent Systems"],
    clientContext: {
      type: "Direct-to-Consumer Beauty Brand",
      scale: "Production customer support",
      industry: "E-commerce / Beauty",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Single generic chatbot insufficient for different inquiry types",
        "Colorist questions require domain-specific knowledge",
        "Policy-heavy scenarios (refunds, billing) demand precision",
        "Misclassification leads to incorrect or unsatisfying answers",
        "Human agents overloaded with repetitive queries",
      ],
    },
    solution: {
      overview:
        "I built seven specialized AI support agents, each scoped to a specific category with domain-specific prompts and policy-aware constraints.",
      architecture: [
        "Complaints Handler agent",
        "Returns & Refunds Handler agent",
        "Promotions, Discounts & Loyalty Handler agent",
        "Order Changes & Cancellation Handler agent",
        "Shipping & Delivery Handler agent",
        "Payment & Billing Issues Handler agent",
        "Order Placement & Pre-Purchase (Colorist Helper) agent",
        "Each agent with domain-specific prompts, policy-aware constraints, tone guidelines, and clear scope boundaries",
        "Colorist Helper designed to answer shade-matching questions, recommend products, and handle ingredient questions",
        "Structured evaluation framework with AI-based and human judgment scoring",
      ],
      keyDecisions: [
        "Chose multi-agent architecture over single bot for specialization",
        "Designed Colorist Helper to mimic human colorist reasoning",
        "Implemented evaluation framework for continuous improvement",
        "Balanced helpfulness vs correctness in customer support",
      ],
    },
    results: {
      metrics: [
        { label: "Helpfulness Score", value: "4.0+ / 5 average" },
        { label: "Number of Agents", value: "7 specialized agents" },
        { label: "Highest Score", value: "4.7/5 (Shipping & Delivery)" },
        { label: "Correctness", value: "3.8/5 (Promotions & Loyalty)" },
      ],
      impact: [
        "Reduced load on human support agents",
        "Faster response times for customers",
        "More consistent, policy-aligned answers",
        "Improved pre-purchase confidence (fewer wrong shade purchases)",
        "Scalable support without sacrificing tone or brand trust",
      ],
    },
    idealClient: [
      "AI customer support automation",
      "HelpScout / Zendesk / Intercom AI",
      "AI agents & agent routing",
      "E-commerce support & CX optimization",
      "Domain-specific assistants (medical, legal, beauty, finance)",
    ],
  },
  {
    slug: "compliance-automation",
    title: "SOC2 & GDPR Compliance Automation",
    subtitle: "100% Automated Lead Qualification & Booking",
    category: "automation",
    highlight: "100% automated",
    tags: ["Automation", "Compliance", "SOC2", "GDPR", "Lead Qualification", "Workflow"],
    clientContext: {
      type: "B2B Compliance-Focused Business",
      scale: "High inbound lead volume",
      industry: "Compliance & Security",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Fully manual qualification and routing process",
        "Slow response times after conversion",
        "Dependent on human review of form answers",
        "Prone to missed or poorly qualified leads",
        "Workflow did not scale with increasing inbound volume",
      ],
    },
    solution: {
      overview:
        "I designed and implemented a fully automated qualification, routing, and booking system that replaced the manual process entirely.",
      architecture: [
        "Built dynamic forms capturing company details, website status, compliance readiness signals, and intent",
        "Designed logic to evaluate answers automatically",
        "Decision-based routing: qualified leads for SOC2/GDPR certificate issuance or routed to meeting booking flow",
        "End-to-end automation: campaigns → forms → logic engine → outcomes",
        "Automated lead qualification, compliance readiness assessment, meeting link delivery, and internal notifications",
        "Integrated with CRM for seamless lead tracking",
      ],
      keyDecisions: [
        "Built decision-based routing instead of simple form submission",
        "Designed for both certificate and advisory call paths",
        "Automated entire funnel from conversion to outcome",
        "Ensured structured compliance intake data",
      ],
    },
    results: {
      metrics: [
        { label: "Automation Level", value: "100% automated" },
        { label: "Response Time", value: "Instant after conversion" },
        { label: "Manual Review", value: "Fully eliminated" },
        { label: "Scalability", value: "High inbound volume ready" },
      ],
      impact: [
        "Manual review process fully eliminated",
        "Faster response times after conversion",
        "Consistent qualification logic across all leads",
        "Sales and compliance teams freed from repetitive work",
        "Increased operational efficiency and reduced cost per qualified lead",
        "Higher conversion rate due to instant response",
      ],
    },
    idealClient: [
      "Compliance & security firms",
      "SaaS companies offering audits or certifications",
      "Agencies selling assessments or advisory services",
      "B2B businesses with high inbound lead volume",
    ],
  },
  {
    slug: "podcast-research-chatbot",
    title: "AI Podcast Research Chatbot",
    subtitle: "Hallucination-Safe, Source-Quoted Research Automation",
    category: "ai",
    highlight: "Hallucination-safe",
    tags: ["RAG", "AI Research", "Podcast", "Hallucination Prevention", "Source Attribution"],
    clientContext: {
      type: "Podcast Production Team",
      scale: "Multiple podcasts",
      industry: "Media Production",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Manual research workflow taking hours per interview",
        "AI tools hallucinating facts",
        "Mixing host commentary with guest insights",
        "Inconsistent research formatting",
        "No reliable source attribution",
        "Accuracy non-negotiable - false information would harm show credibility",
      ],
    },
    solution: {
      overview:
        "I designed and implemented an AI chatbot that behaves like a research assistant, not a generic chatbot, with strict hallucination prevention.",
      architecture: [
        "Structured knowledge ingestion from multiple content types (podcast transcripts, YouTube videos, blogs, books)",
        "Classified content by speaker role (guest vs host) and source type",
        "Implemented RAG system where chatbot only answers using retrieved source documents",
        "Each insight grounded in uploaded material - no guessing",
        "Automatically generates structured research document with key themes, categorized sections, bullet-point summaries, and direct quotes",
        "Clear source attribution for all content",
        "Explicit prompt constraints to prevent hallucination",
        "Strict separation of host vs guest commentary",
        "Source-only answering (no external knowledge leakage)",
      ],
      keyDecisions: [
        "Built RAG system instead of generic LLM for accuracy",
        "Designed strict source attribution requirements",
        "Separated guest vs host content at ingestion level",
        "Created structured output format matching client SOP",
      ],
    },
    results: {
      metrics: [
        { label: "Research Time", value: "Hours → Minutes" },
        { label: "Hallucination Rate", value: "Zero reported" },
        { label: "Source Attribution", value: "100% quoted" },
        { label: "Format Consistency", value: "Structured output" },
      ],
      impact: [
        "Manual research process fully automated",
        "Research time reduced from hours to minutes",
        "Consistent formatting across all research documents",
        "Zero hallucinated content reported",
        "Hosts received ready-to-use, high-quality research before interviews",
        "Reduced research costs and faster episode preparation",
      ],
    },
    idealClient: [
      "Podcast networks",
      "Media production teams",
      "Content agencies",
      "Research-heavy creators",
      "Knowledge-driven businesses",
    ],
  },
  {
    slug: "gohighlevel-retell-automation",
    title: "GoHighLevel & Retell AI Automation",
    subtitle: "Multi-Channel Healthcare Outreach Automation",
    category: "automation",
    highlight: "Multi-channel automation",
    tags: ["GoHighLevel", "Retell AI", "Voice AI", "CRM", "Automation", "Healthcare"],
    clientContext: {
      type: "Home Care Organization",
      scale: "VA patient and caregiver outreach",
      industry: "Healthcare",
    },
    problem: {
      title: "The Challenge",
      points: [
        "Manual outreach slow and inconsistent",
        "Needed to scale outreach without increasing staffing",
        "Required automatic qualification of patients and caregivers",
        "Response delays affecting conversion",
        "Compliance-friendly workflows needed",
      ],
    },
    solution: {
      overview:
        "I built a fully automated outreach and recruitment system using GoHighLevel and Retell AI for VA patient and caregiver outreach.",
      architecture: [
        "Built AI voice & chat agents for VA patient outreach and qualification",
        "Automated caregiver recruitment and screening",
        "Automated initial contact, data collection, and appointment scheduling",
        "Automated follow-ups via SMS, email, and voice",
        "Integrated lead tracking and conversation history in GHL",
        "Designed workflows to expand into HR onboarding, compliance tracking, and care management scheduling",
        "Tuned AI messaging for clarity, tone, and response rate",
        "Reduced drop-offs through intelligent follow-ups",
      ],
      keyDecisions: [
        "Chose GoHighLevel + Retell AI for comprehensive automation",
        "Built multi-channel approach (voice, SMS, email)",
        "Designed for healthcare compliance requirements",
        "Created scalable foundation for future expansion",
      ],
    },
    results: {
      metrics: [
        { label: "Channels", value: "Voice, SMS, Email" },
        { label: "Automation Level", value: "Fully automated" },
        { label: "Response Time", value: "Faster lead qualification" },
        { label: "Scalability", value: "Ready for expansion" },
      ],
      impact: [
        "Faster lead qualification",
        "Reduced manual outreach effort",
        "Consistent AI-driven engagement across channels",
        "Scalable automation foundation for future expansion",
        "Compliance-friendly workflows maintained",
      ],
    },
    idealClient: [
      "Healthcare organizations",
      "Home care services",
      "Companies needing multi-channel outreach",
      "Businesses requiring compliance-friendly automation",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
