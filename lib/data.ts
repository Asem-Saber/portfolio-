export interface IProject {
  title: string;
  slug: string;
  tagline: string;
  year: number;
  description: string;
  role: string;
  keyFeatures?: string[];
  techStack: string[];
  thumbnail: string;
  images: string[];
  sourceCode: string;
  liveUrl?: string;
  featured: boolean;
}

export interface IExperience {
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
  logo: string;
  type: "work" | "education" | "training";
}

export interface TechItem {
  name: string;
  icon: string;
}

export const GENERAL_INFO = {
  name: "Asem Saber",
  role: "AI Engineer",
  location: "Cairo, Egypt",
  email: "asem.saber.ai@gmail.com",
  phone: "+201129601354",
  resumeUrl: "https://drive.google.com/file/d/1SJDYde7jNYpO-oATUoLmusX4oqn2b0yQ/view?usp=sharing",
  availability: "Open to opportunities",
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Asem-Saber" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/asem-saber-8657a6278" },
  { name: "Kaggle", url: "https://www.kaggle.com/asemsaber" },
];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "8+", label: "Projects Built" },
  { value: "3.3", label: "GPA / 4.0" },
  { value: "2026", label: "Graduating Class" },
];

export const ABOUT_TEXT = {
  quote:
    "I build intelligent systems that understand language, extract knowledge, and act autonomously.",
  bio: `B.S. in Computers & AI from Benha University. I specialize in building enterprise-grade AI systems powered by Large Language Models, AI Agents, and Generative AI. My work spans the full stack — from fine-tuning models and designing RAG pipelines to deploying end-to-end LLM-powered applications using LangChain, LangGraph, OpenAI, and Hugging Face.`,
  highlights: [
    "Multi-agent systems with LangGraph",
    "RAG pipelines and hybrid retrieval systems",
    "Fine-tuning large language models",
    "Full-stack AI Applications",
  ],
};

export const TECH_STACK: TechItem[][] = [
  // Row 1 — 8 items (Languages & AI/ML)
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
  ],
  // Row 2 — 6 items (AI Frameworks & LLM Tools)
  [
    { name: "LangChain", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.44.0/files/dark/langchain-color.png" },
    { name: "LangGraph", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.44.0/files/dark/langchain-color.png" },
    { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "OpenAI SDK", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.44.0/files/dark/openai.png" },
    { name: "Anthropic", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.44.0/files/dark/anthropic.png" },
    { name: "Ollama", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.44.0/files/dark/ollama.png" },
  ],
  // Row 3 — 4 items (Databases)
  [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  // Row 4 — 3 items (DevOps & Tools)
  [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ],
  // Row 5 — 2 items
  [
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  ],
];

export const PROJECTS: IProject[] = [
  {
    title: "QAura",
    slug: "qaura",
    tagline: "Autonomous Software Testing & Self-Healing Multi-Agent System",
    year: 2026,
    description:
      "QAura orchestrates 8 specialized AI agents through a 5-phase pipeline that follows the Software Testing Life Cycle: plan tests, generate them, execute them, analyze failures, and automatically heal broken tests — with human approval gates at critical decision points. You provide your application source code and a requirements document. QAura does the rest.",
    role: "",
    keyFeatures: [
      "Self-healing loop that auto-fixes test drift and app bugs, re-executes to verify, up to 3 iterations before escalating",
      "RAG-powered code understanding via ChromaDB + Ollama embeddings for semantic codebase search",
      "Knowledge graph tracking components, defects, and healing actions — enabling pattern matching and blast radius analysis",
      "Human-in-the-loop gates requiring approval before test generation, with feedback-driven revision",
      "lean-ctx MCP integration for AST-aware context compression — agents read code at up to 95% fewer tokens, enabling deeper codebase exploration within LLM context limits",
    ],
    techStack: [
      "Python",
      "LangGraph",
      "LangChain",
      "LangSmith",
      "OpenAI APIs",
      "ChromaDB",
      "NetworkX",
      "FastAPI",
      "Playwright",
      "Pytest",
    ],
    thumbnail: "/images/projects/qaura-slogan.png",
    images: [
      "/images/projects/qaura-interface.png",
      "/images/projects/qaura-running.png",
      "/images/projects/qaura-hitl.png",
    ],
    sourceCode: "https://github.com/Asem-Saber/QAura",
    featured: true,
  },
  {
    title: "Historical RAG QA",
    slug: "historical-rag-qa",
    tagline: "RAG Pipeline with Hybrid Search & Cross-Encoder Re-ranking",
    year: 2026,
    description:
      "A production-grade Retrieval-Augmented Generation system for answering questions about Ancient Egyptian civilization. Built with an agentic LangGraph workflow that retrieves, validates, and generates source-grounded answers from the Encyclopedia of Ancient Egypt.",
    role: "",
    keyFeatures: [
      "Agentic RAG pipeline — LangGraph state machine orchestrating guardrails, retrieval, grading, and generation with conditional routing",
      "Hybrid search combining BM25 keyword retrieval (40%) with Chroma vector similarity (60%), re-ranked by CrossEncoder",
      "LLM document grading with automatic query rewriting and re-retrieval on failure, up to 2 attempts",
      "Generation quality checks for hallucination and relevance, with automatic retry",
      "Inline citations referencing numbered sources so every claim is traceable to the encyclopedia",
    ],
    techStack: [
      "Python",
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "Ollama",
      "LangSmith",
      "FastAPI",
      "SentenceTransformers",
      "Docker",
      "HTMX",
    ],
    thumbnail: "/images/projects/historical-rag-1.png",
    images: ["/images/projects/historical-rag-1.png"],
    sourceCode:
      "https://github.com/Asem-Saber/Ancient-Egypt-RAG-Based-QA-Chatbot",
    featured: true,
  },
  {
    title: "Eyes on the MiddleEast",
    slug: "eyes-on-the-middleeast",
    tagline: "Arabic News Aggregation & NLP Topic Modeling Platform",
    year: 2026,
    description:
      "Al Jazeera publishes a constant stream of Arabic political news, but there's no easy way to see what topics dominate coverage over time. This project scrapes that coverage, uses BERTopic to automatically discover recurring themes, and surfaces the results in an interactive dashboard — so instead of reading headlines one by one, you can see topic trends, distribution, and top contributors at a glance.",
    role: "",
    keyFeatures: [
      "Selenium-based scraper collecting 20,000+ articles from Al Jazeera's Arabic politics section",
      "BERTopic NLP pipeline clustering articles into 200+ topics and labeling new articles as they come in",
      "Three-stage pipeline: scrape, model, serve — fully containerized with Docker Compose",
      "Interactive React dashboard for real-time topic trend exploration and author analysis",
    ],
    techStack: [
      "Python",
      "Selenium",
      "BERTopic",
      "FastAPI",
      "Docker",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    thumbnail: "/images/projects/eyes-middleeast-1.png",
    images: [
      "/images/projects/eyes-middleeast-1.png",
      "/images/projects/eyes-middleeast-2.png",
      "/images/projects/eyes-middleeast-3.png",
      "/images/projects/eyes-middleeast-4.png",
    ],
    sourceCode: "https://github.com/Asem-Saber/Eyes-on-the-Middle-East",
    featured: true,
  },
  {
    title: "ASAP",
    slug: "asap",
    tagline: "Arabic Sentiment Analysis Platform",
    year: 2026,
    description:
      "A full-stack Arabic sentiment analysis platform that processes 330,000 records, navigating severe morphological complexities and dialectal slang prefixes inherent to Arabic text.",
    role: "",
    keyFeatures: [
      "Domain-adapted multilingual BERT fine-tuned with Masked Language Modeling, achieving 85% F1 on SemEval-2017",
      "Real-time single and batch prediction via FastAPI REST API",
      "React dashboard with confidence scores and user feedback collection",
      "Fully containerized microservices architecture with Docker Compose",
    ],
    techStack: [
      "HuggingFace",
      "Docker",
      "FastAPI",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    thumbnail: "/images/projects/asap-dashboard.png",
    images: [
      "/images/projects/asap-dashboard.png",
      "/images/projects/asap-batch.png",
      "/images/projects/asap-analytics.png",
    ],
    sourceCode: "https://github.com/Asem-Saber/Arabic-Reviews-Sentiment",
    featured: true,
  },
  {
    title: "ISHARA",
    slug: "ishara",
    tagline: "Two-Way Arabic Sign Language Translation Platform",
    year: 2024,
    description:
      "Graduation project addressing the lack of Egyptian Arabic Sign Language (EASL) resources — from building the dataset from scratch to delivering a two-way translation platform used via mobile and web.",
    role: "",
    keyFeatures: [
      "Collected and curated a custom Egyptian Arabic Sign Language dataset from scratch — no existing Egyptian dataset was available",
      "Real-time Sign-to-Text via video and Text-to-Sign via GAN-generated avatars, supporting 200+ signs at 89% accuracy",
      "ML pipeline using Transformers for sign recognition and MediaPipe for pose and face landmark detection",
      "Flask and Node.js backend serving predictions in under 500ms",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "MediaPipe",
      "GANs",
      "Transformers",
      "React",
      "Node.js",
      "Flutter",
    ],
    thumbnail: "/images/projects/ishara-icon.png",
    images: [
      "/images/projects/ishara-1.png",
    ],
    sourceCode: "",
    featured: false,
  },
  {
    title: "CXR Analyzer",
    slug: "cxr-analyzer",
    tagline: "Chest X-Ray Analysis with Deep Learning",
    year: 2024,
    description:
      "A dual-task deep learning system for Chest X-Ray analysis — classifying four lung conditions (COVID-19, Lung Opacity, Normal, Viral Pneumonia) while simultaneously generating pixel-level segmentation masks of affected regions.",
    role: "",
    keyFeatures: [
      "Custom dual-headed U-Net — single model handles both classification and segmentation simultaneously",
      "Achieved a 95.4% mean IoU score on the COVID-19 Radiography Database (IEEE Xplore) test set",
      "Pixel-level lung segmentation with Binary Jaccard Index (IoU) evaluation",
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "Streamlit"],
    thumbnail: "/images/projects/cxr-analyzer-1.png",
    images: ["/images/projects/cxr-analyzer-1.png"],
    sourceCode: "https://github.com/Asem-Saber/CXR-Analyzer",
    featured: false,
  },
  {
    title: "Face Mask Detection",
    slug: "face-mask-detection",
    tagline: "Real-Time Face Mask Detection System",
    year: 2023,
    description:
      "A real-time object detection system that classifies whether individuals are wearing a mask correctly, incorrectly, or not at all — across images, videos, and live webcam streams.",
    role: "",
    keyFeatures: [
      "Achieved 80.5% mAP@0.5:0.95 with 17.6ms inference latency (56 FPS) on an NVIDIA RTX 3060 Ti",
      "Dataset augmentation to improve model generalization across varied lighting and angles",
      "Real-time inference across images, videos, and live webcam streams",
      "FastAPI REST API backend with Docker support",
    ],
    techStack: ["Python", "Ultralytics", "FastAPI", "Streamlit", "Docker", "OpenCV"],
    thumbnail: "/images/projects/face-mask-1.png",
    images: [
      "/images/projects/face-mask-1.png",
      "/images/projects/face-mask-2.png",
    ],
    sourceCode: "https://github.com/Asem-Saber/Face-Mask-Detection",
    featured: false,
  },
  {
    title: "Smart Churn Predictor",
    slug: "smart-churn-predictor",
    tagline: "Customer Churn Prediction with ML",
    year: 2023,
    description:
      "An end-to-end machine learning pipeline for predicting customer churn on the Telco Customer Churn Dataset. Trains and compares 10 classification models, engineers 10 custom features, and serves predictions through an interactive Dash dashboard with real-time churn probability and retention recommendations.",
    role: "",
    keyFeatures: [
      "10 trained models compared side-by-side (Logistic Regression through LightGBM) with full evaluation metrics",
      "10 engineered features including tenure grouping, charges analysis, contract risk scoring, and behavioral flags",
      "Interactive Dash dashboard with data exploration, model comparison, and real-time prediction",
      "Actionable retention recommendations based on predicted churn probability",
    ],
    techStack: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "Dash"],
    thumbnail: "/images/projects/churn-predictor-1.png",
    images: ["/images/projects/churn-predictor-1.png"],
    sourceCode: "https://github.com/Asem-Saber/Telco-Customer-Churn-Prediction",
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export const EXPERIENCES: IExperience[] = [
  {
    title: "Agentic AI Intern",
    organization: "National Telecommunication Institute",
    location: "Egypt",
    duration: "Apr 2026 – Jul 2026",
    description:
      "Implemented transformer architectures, prompt engineering strategies, and vector database integrations. Built a RAG-powered conversational pipeline over enterprise documents using ChromaDB and OpenAI embeddings. Delivered QAura as capstone project — presented to a panel of industry evaluators.",
    logo: "/images/nti.png",
    type: "work",
  },
  {
    title: "Business Intelligence Trainee",
    organization: "Information Technology Institute",
    location: "Egypt",
    duration: "Jul 2023 – Sep 2023",
    description:
      "Mastered SQL fundamentals, relational data modeling, and data warehouse design patterns (star/snowflake schemas). Designed interactive dashboards using Tableau and Power BI for KPI tracking and trend analysis.",
    logo: "/images/iti.jpg",
    type: "training",
  },
  {
    title: "B.S. Computer Science & AI",
    organization: "Benha University",
    location: "Egypt",
    duration: "Oct 2020 – Jun 2024",
    description:
      "GPA 3.3 / 4.0. Built ISHARA as graduation project — a two-way Arabic Sign Language translation platform with 89% recognition accuracy across 200+ signs.",
    logo: "/images/university.png",
    type: "education",
  },
];
