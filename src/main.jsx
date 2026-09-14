import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const EMAIL = "naveenkhan0059@gmail.com";
const GITHUB_URL = "GITHUB_URL";
const LINKEDIN_URL = "https://www.linkedin.com/in/naveen-khan-417103258/";

const icons = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  external: <><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>,
  menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
  close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  spark: <><path d="m12 3-1.5 6.5L4 11l6.5 1.5L12 19l1.5-6.5L20 11l-6.5-1.5L12 3Z" /><path d="m19 17-.5 2.5L16 20l2.5.5L19 23l.5-2.5L22 20l-2.5-.5L19 17Z" /></>,
};

function Icon({ name, size = 18, strokeWidth = 1.7 }) {
  return <svg className="icon" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

const navItems = [
  ["About", "/about"], ["Experience", "/experience"], ["Projects", "/projects"],
  ["Research", "/research"], ["Skills", "/skills"], ["Contact", "/contact"],
];

const metrics = [
  ["93%+", "Computer vision accuracy", "model suite"],
  ["60%", "Faster internal query resolution", "enterprise RAG"],
  ["912K+", "Patient records processed", "clinical research"],
  ["95%", "Real-time threat detection", "edge AI wearable"],
];

const experiences = [
  {
    date: "08 / 2026", role: "Full Stack AI Engineer", company: "AI Hackathon · Sofstica Solutions (Pvt.) Ltd",
    summary: "Built a clinical research platform that turns natural language into validated, provenance-aware cohort insights.",
    impact: "912,284 patient records processed", tags: ["Python", "FastAPI", "Next.js", "LangChain", "Azure"],
    bullets: ["Engineered an end-to-end Data Quality Engine across 10 clinical tables.", "Added LLM-powered cohort exploration, SQL validation, provenance tracking and AI-generated summaries.", "Delivered the application as a FastAPI + Next.js system backed by SQLite and Docker."],
  },
  {
    date: "01 / 2026 — 04 / 2026", role: "AI Engineer Intern", company: "It Solera Pvt. Ltd.",
    summary: "Trained and optimized CNN and YOLO-based computer vision systems for medical, road and security use cases.",
    impact: "93%+ model accuracy · 40% less manual processing", tags: ["Python", "Deep Learning", "FastAPI", "Streamlit", "Roboflow"],
    bullets: ["Worked across medical image classification, damaged road detection and theft detection.", "Trained on 10,000+ images with systematic hyperparameter optimization.", "Automated repetitive data workflows to reduce manual processing time by approximately 40%."],
  },
  {
    date: "07 / 2025 — 08 / 2025", role: "AI Engineer Intern", company: "Civil Aviation Authority of Pakistan",
    summary: "Engineered an enterprise conversational AI system to make internal knowledge easier to retrieve.",
    impact: "60% reduction in internal query resolution time", tags: ["Python", "FastAPI", "RAG", "LangChain", "Hugging Face"],
    bullets: ["Designed semantic retrieval architecture with embeddings, chunking and document retrieval.", "Indexed 100+ organizational PDFs for grounded answers.", "Collaborated on AI workflows, model integration and enterprise knowledge retrieval."],
  },
  {
    date: "11 / 2024 — 11 / 2025", role: "AI Research", company: "Multimodal Smart Wearable for Personal Safety",
    summary: "Developed a connected safety system combining computer vision, multilingual speech and emergency response.",
    impact: "95% threat detection · alerts under 5 seconds · IEEE CS Exhibition 2nd Place",
    tags: ["PyTorch", "YOLOv8", "Raspberry Pi 4", "ESP32", "GPS / GSM"],
    bullets: ["Implemented YOLO-based robbery and threat detection with evidence capture.", "Connected GPS/GSM emergency communication with a Raspberry Pi and ESP32 wearable system.", "Research paper published internationally in 2026 after placing 2nd among 45+ projects."],
  },
];

const projects = [
  {
    slug: "clin-data-explorer", number: "01", title: "ClinData Explorer", kind: "clinical",
    categories: ["GENERATIVE AI", "RAG", "FULL STACK"], category: "GENERATIVE AI · TEXT-TO-SQL · CLINICAL AI · FULL STACK",
    blurb: "Natural language cohort exploration for clinical research teams.",
    description: "AI-powered clinical research platform that enables researchers to explore clinical data using natural language.",
    features: ["Natural language cohort definition", "Text-to-SQL with validation", "Data quality analysis", "Provenance tracking", "Cohort exploration", "AI-generated summaries"],
    results: [["912K+", "patient records"], ["10", "clinical tables"], ["12", "data quality rules"]],
    tech: ["Python", "FastAPI", "Next.js", "LLMs", "LangChain", "SQLite", "Docker", "Azure"],
    architecture: ["Researcher", "Natural language", "LLM / Text-to-SQL", "SQL validation", "Database", "Data quality engine", "AI insights"],
    challenge: "Clinical datasets are valuable but difficult to explore without SQL expertise. The system needed to make cohort questions accessible without hiding how an answer was produced.",
    solution: "A FastAPI + Next.js research workflow that pairs conversational access with SQL validation, provenance and quality signals.",
    outcome: "A full-stack research workflow moving from question to defensible insight across 912,284 patient records.",
    learnings: "Grounded interfaces create more trust when users can see both the answer and the path that produced it.",
    github: "https://github.com/Naveen-Khan/Ai-Based-Clinical-Data-Exprorar-Analysis",
    link: "https://clindata-frontend.agreeablehill-90bfeb84.centralindia.azurecontainerapps.io",
    linkLabel: "Live app",
  },
  {
    slug: "mcdonalds-ai-agent", number: "02", title: "McDonald's AI Customer Support Agent", kind: "agent",
    categories: ["AI AGENTS", "AUTOMATION"], category: "AI AGENT · AUTOMATION · CUSTOMER SUPPORT",
    blurb: "A conversational agent designed to automate common customer support workflows.",
    description: "An AI-powered customer support agent designed to automate customer interactions and handle common support workflows.",
    features: ["Customer conversation flow", "Intent detection", "Knowledge retrieval", "Workflow handoff", "Response generation"],
    results: [["LIVE", "interactive demo"], ["6", "workflow stages"]],
    tech: [],
    architecture: ["Customer", "AI agent", "Intent detection", "Knowledge / workflow", "Response", "Customer"],
    challenge: "Customer support questions need a fast, helpful response without forcing every interaction through a manual workflow.",
    solution: "A conversational agent flow that detects intent, retrieves the relevant knowledge or workflow, and returns a helpful response.",
    outcome: "A live AI agent experience for exploring how conversational automation can support common customer interactions.",
    learnings: "Good agent design makes the system state visible: intent detected, knowledge retrieved, response generated.",
    github: "https://github.com/Naveen-Khan/Machdonals-ai-agent",
    link: "https://machdonals-ai-agent.vercel.app", linkLabel: "Live demo",
  },
  {
    slug: "cardiorisk-ai", number: "03", title: "CardioRisk AI", kind: "risk",
    categories: ["MACHINE LEARNING", "FULL STACK"], category: "MACHINE LEARNING · CLINICAL AI · DECISION SUPPORT",
    blurb: "Clinical decision support for heart disease risk prediction.",
    description: "An intelligent clinical decision-support application that predicts heart disease risk using 13 clinical variables.",
    features: ["Real-time risk stratification", "Clinical prediction interface", "PDF report generation", "CSV export", "Excel export", "Model comparison"],
    results: [["97.6%", "prediction accuracy"], ["3,800+", "patient records"], ["13", "clinical variables"]],
    tech: ["Machine Learning", "Python", "Next.js", "SQLite", "Tailwind CSS", "Vercel"],
    architecture: ["Patient data", "13 clinical variables", "SVM model", "Risk prediction", "Clinical report"],
    challenge: "Clinical prediction needs to be understandable at the point of use, with the model output presented as decision support rather than an opaque claim.",
    solution: "A clinical interface around an SVM model, with comparison against a Logistic Regression baseline at 80.5% accuracy and exportable reports.",
    outcome: "A full-stack decision-support application reporting 97.6% prediction accuracy across 3,800+ patient records.",
    learnings: "The surrounding interface and export path are part of the model experience, not an afterthought.",
    link: "https://web-un87u2afa-naveenkhan0111-4662s-projects.vercel.app/", linkLabel: "Live demo",
  },
  {
    slug: "enterprise-rag-assistant", number: "04", title: "Enterprise RAG AI Assistant", kind: "rag",
    categories: ["GENERATIVE AI", "RAG"], category: "GENERATIVE AI · RAG · LLM · SEMANTIC SEARCH",
    blurb: "Grounded internal knowledge retrieval across 100+ organizational PDFs.",
    description: "Enterprise conversational AI system designed to retrieve information from organizational documents using semantic search and Retrieval-Augmented Generation.",
    features: ["Document ingestion", "Semantic chunking", "Embeddings", "Vector search", "Grounded RAG responses", "Enterprise knowledge retrieval"],
    results: [["100+", "documents indexed"], ["60%", "faster query resolution"]],
    tech: ["Python", "FastAPI", "LangChain", "RAG", "Hugging Face", "LLMs", ".NET"],
    architecture: ["100+ PDFs", "Document processing", "Chunking", "Embeddings", "Vector search", "Relevant context", "LLM answer"],
    challenge: "Internal answers were distributed across documents and took time to find. The key engineering problem was balancing retrieval relevance with concise, useful responses.",
    solution: "A semantic retrieval architecture with embeddings, chunking, vector search and RAG response generation.",
    outcome: "Reduced internal query resolution time by 60% while making the source knowledge base more accessible.",
    learnings: "Retrieval quality and response quality must be designed together; relevant context is the product.",
    github: "https://github.com/Naveen-Khan/Ai-RAG-Based-Chatbot",
  },
  {
    slug: "medical-image-classification", number: "05", title: "Medical Image Classification", kind: "medical",
    categories: ["COMPUTER VISION", "MACHINE LEARNING"], category: "COMPUTER VISION · DEEP LEARNING · MEDICAL AI",
    blurb: "Deep learning-based medical image classification for automated image analysis.",
    description: "Deep learning-based medical image classification system developed for automated image analysis.",
    features: ["Medical image preprocessing", "CNN / DenseNet inference", "Feature extraction", "Classification workflow", "Prediction interface"],
    results: [["93%+", "accuracy"]],
    tech: ["Python", "PyTorch", "TensorFlow", "Deep Learning", "CNN", "Computer Vision"],
    architecture: ["Medical image", "Preprocessing", "CNN / DenseNet", "Feature extraction", "Classification", "Prediction"],
    challenge: "Medical image workflows need a repeatable path from raw image to model prediction without hiding the analysis steps.",
    solution: "A model inference workflow built around CNN / DenseNet-based image analysis and a visual prediction interface.",
    outcome: "A practical medical computer vision system that achieved 93%+ accuracy.",
    learnings: "An image-analysis interface communicates model behavior more clearly than a list of frameworks.",
  },
  {
    slug: "safelink-wearable", number: "06", title: "SAFELINK", kind: "safelink",
    categories: ["COMPUTER VISION", "RESEARCH"], category: "EDGE AI · COMPUTER VISION · IOT · RESEARCH",
    blurb: "A multimodal wearable that detects threats and coordinates rapid emergency response.",
    description: "Multimodal smart wearable system designed for personal safety using computer vision, speech recognition, GPS and GSM.",
    features: ["YOLO-based threat detection", "Multilingual speech recognition", "Camera evidence capture", "GPS location tracking", "GSM emergency communication", "Raspberry Pi + ESP32"],
    results: [["95%", "threat detection accuracy"], ["<5 sec", "alert response"], ["2nd", "IEEE CS Exhibition 2025"]],
    tech: ["Python", "PyTorch", "YOLOv8", "Raspberry Pi", "ESP32", "GPS / GSM", "IoT"],
    architecture: ["Camera", "YOLOv8", "Threat detection", "Raspberry Pi", "GPS", "GSM", "Emergency alert"],
    challenge: "Personal safety systems need to work at the edge and respond quickly. The project combined multiple input modalities with an alert path designed for under-five-second response.",
    solution: "A connected wearable loop combining vision, speech, edge inference, evidence capture and GPS/GSM emergency communication.",
    outcome: "Reached 95% real-time threat detection accuracy, placed 2nd among 45+ projects, and became an internationally published paper in 2026.",
    learnings: "Edge AI is as much about response design and hardware coordination as it is about model accuracy.",
    github: "https://github.com/Naveen-Khan/Multimodal-Smar-Wearable-Device-For-Personal-Saftey",
    research: true,
  },
  {
    slug: "computer-vision-suite", number: "07", title: "Computer Vision Model Suite", kind: "vision-suite",
    categories: ["COMPUTER VISION", "MACHINE LEARNING"], category: "COMPUTER VISION · DEEP LEARNING",
    blurb: "Reusable vision solutions spanning healthcare, infrastructure and security.",
    description: "A collection of computer vision solutions developed for medical image classification, damaged road detection and theft detection.",
    features: ["Medical image classification", "Damaged road detection", "Theft detection", "Systematic optimization", "FastAPI serving", "Streamlit interfaces"],
    results: [["10,000+", "images"], ["93%+", "accuracy"], ["3", "applied domains"]],
    tech: ["Python", "CNN", "YOLO", "Roboflow", "Deep Learning", "FastAPI", "Streamlit"],
    architecture: ["Domain dataset", "Preprocessing", "CNN / YOLO model", "Evaluation + tuning", "Inference API", "Visual application"],
    challenge: "Different visual problems need different model and data decisions. The suite required repeatable workflows that could move from experiments to usable demos.",
    solution: "A set of applied computer vision workflows with a tabbed visual interface across medical, road and theft use cases.",
    outcome: "Trained on 10,000+ images with 93%+ accuracy across three applied domains.",
    learnings: "A shared inference vocabulary makes it easier to compare different computer vision applications.",
    tabs: ["MEDICAL", "ROAD", "THEFT"],
  },
  {
    slug: "sales-prediction", number: "08", title: "Sales Prediction App", kind: "sales",
    categories: ["MACHINE LEARNING"], category: "MACHINE LEARNING · PREDICTIVE ANALYTICS",
    blurb: "A polynomial regression workflow for exploring sales predictions.",
    description: "Machine learning application for sales prediction using polynomial regression.",
    features: ["Input data workflow", "Feature processing", "Polynomial regression", "Prediction visualization"],
    results: [],
    tech: [],
    architecture: ["Input data", "Feature processing", "Polynomial regression", "Prediction", "Visualization"],
    challenge: "Prediction becomes useful when model output is connected to a readable visual workflow rather than left as a raw number.",
    solution: "A focused machine learning application showing the path from input data through polynomial regression to a visual prediction.",
    outcome: "A compact predictive analytics experience centered on model flow and interpretable visualization.",
    learnings: "When verified model metrics are unavailable, the product should show the workflow without overstating performance.",
  },
];

const projectFilters = ["ALL", "GENERATIVE AI", "AI AGENTS", "RAG", "COMPUTER VISION", "MACHINE LEARNING", "FULL STACK", "RESEARCH", "AUTOMATION"];

const skillGroups = [
  ["01", "AI / ML", "Python", "Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "PyTorch", "YOLOv8"],
  ["02", "Generative AI", "LLMs", "RAG", "AI Agents", "LangChain", "Prompt Engineering", "LLM API Integration", "Semantic Retrieval", "Text-to-SQL"],
  ["03", "Application", "FastAPI", "Python", ".NET", "HTML", "CSS", "JavaScript", "Next.js", "Streamlit"],
  ["04", "Data", "MySQL", "PostgreSQL", "SQLite", "FAISS", "Pinecone", "Vector Databases"],
  ["05", "Automation", "n8n", "Workflow Automation", "JSON"],
  ["06", "Infrastructure", "Docker", "Azure", "Git", "GitHub", "Vercel"],
];

function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return [path, (next) => { window.history.pushState({}, "", next); setPath(next); window.scrollTo({ top: 0, behavior: "smooth" }); }];
}

function LinkButton({ href, children, className = "", onClick }) {
  return <a className={`button ${className}`} href={href} onClick={(e) => { if (onClick) onClick(e); }}>{children}</a>;
}

function PlaceholderLink({ label, href }) {
  if (href) return <a className="placeholder-link actual-link" href={href} target="_blank" rel="noreferrer"><span>{label}</span><Icon name="external" size={12} /></a>;
  return <span className="placeholder-link" title={`${label} link coming soon`}><span>{label}</span><small>coming soon</small></span>;
}

function Navbar({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const go = (href) => (e) => { e.preventDefault(); navigate(href); setOpen(false); };
  return <header className={`site-header ${open ? "menu-open" : ""}`}>
    <div className="nav-wrap">
      <a href="/" className="brand" onClick={go("/")}>
        <span className="brand-mark">NK</span><span>Naveen Khan</span>
      </a>
      <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={21} /></button>
      <nav className="nav-links" aria-label="Primary navigation">
        <a className={path === "/" ? "active" : ""} href="/" onClick={go("/")}>Home</a>
        {navItems.map(([label, href]) => <a key={href} className={path.startsWith(href) ? "active" : ""} href={href} onClick={go(href)}>{label}</a>)}
      </nav>
      <a className="nav-cta" href="/contact" onClick={go("/contact")}>Let's talk <Icon name="arrow" size={15} /></a>
    </div>
  </header>;
}

function SectionIntro({ eyebrow, title, children, action }) {
  return <div className="section-intro reveal">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    {children && <p className="intro-copy">{children}</p>}
    {action}
  </div>;
}

function MetricStrip() {
  return <section className="metrics section-pad" aria-label="Selected impact metrics">
    <div className="container metric-grid">{metrics.map(([value, label, context], index) =>
      <div className="metric reveal" key={label} style={{ "--delay": `${index * 70}ms` }}>
        <span className="metric-index">0{index + 1}</span><strong>{value}</strong><span className="metric-label">{label}</span><span className="metric-context">{context}</span>
      </div>
    )}</div>
  </section>;
}

function SystemVisual() {
  const nodes = [["01", "User query", "intent"], ["02", "LLM", "reasoning"], ["03", "RAG / agents", "context"], ["04", "FastAPI", "orchestration"], ["05", "Database", "ground truth"]];
  return <div className="system-visual" aria-label="AI system pipeline visualization">
    <div className="visual-topline"><span><i className="status-dot" /> system map</span><span>naveen.ai / 01</span></div>
    <div className="visual-caption"><span>01—05</span><b>From question<br />to intelligence.</b></div>
    <div className="pipeline">{nodes.map(([number, label, sub], i) => <React.Fragment key={label}>
      <div className={`pipeline-node ${i === 2 ? "highlight" : ""}`}><span>{number}</span><div><b>{label}</b><small>{sub}</small></div><em>{i === nodes.length - 1 ? "↗" : "→"}</em></div>
      {i < nodes.length - 1 && <div className="pipeline-line" />}
    </React.Fragment>)}</div>
    <div className="visual-result"><span className="result-dot" /> <b>AI response</b><small>grounded · useful · shipped</small></div>
  </div>;
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Portrait of Naveen Khan with AI engineering stack">
    <img src="/naveen-portrait.png" alt="Naveen Khan, AI Engineer" />
    <div className="hero-visual-shade" />
    <div className="hero-visual-top"><span><i className="status-dot" /> available for meaningful work</span><span>karachi / pk</span></div>
    <div className="portrait-label"><span>naveen khan</span><strong>AI engineer</strong></div>
    <div className="portrait-badge"><Icon name="spark" size={15} /><span>research → product</span></div>
    <div className="hero-stack-card">
      <div className="hero-stack-label"><span>01 / AI engineering stack</span><span>live map</span></div>
      <div className="hero-stack-flow"><b>LLM</b><i>→</i><b>RAG</b><i>→</i><b>FastAPI</b><i>→</i><b>Impact</b></div>
    </div>
  </div>;
}

function Home({ navigate }) {
  return <main>
    <section className="hero container">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="status-dot" /> AI ENGINEER · GENERATIVE AI · COMPUTER VISION</p>
        <h1>Building AI systems that <span>solve real problems.</span></h1>
        <p className="hero-lead">I’m Naveen Khan, an AI Engineer building practical intelligent systems across LLM applications, RAG, Text-to-SQL, Computer Vision and AI-powered backends.</p>
        <div className="hero-actions">
          <LinkButton href="/projects" className="button-primary" onClick={(e) => { e.preventDefault(); navigate("/projects"); }}>View my work <Icon name="arrow" size={17} /></LinkButton>
          <a className="button button-ghost resume-disabled" href="RESUME_URL" aria-disabled="true" title="Resume link coming soon" onClick={(e) => e.preventDefault()}>Download resume <span>soon</span></a>
          <LinkButton href="/contact" className="button-ghost" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>Let's connect</LinkButton>
        </div>
        <div className="social-row"><span>Find me at</span><PlaceholderLink label="GitHub" /><PlaceholderLink label="LinkedIn" href={LINKEDIN_URL} /><a href={`mailto:${EMAIL}`}>Email <Icon name="external" size={13} /></a></div>
      </div>
      <HeroVisual />
    </section>
    <MarqueeBar />
    <MetricStrip />
    <section className="container section-pad featured-projects">
      <SectionIntro eyebrow="Selected work / 01" title="Real systems. Measurable outcomes." action={<LinkButton href="/projects" className="text-link" onClick={(e) => { e.preventDefault(); navigate("/projects"); }}>View all projects <Icon name="arrow" size={15} /></LinkButton>}>
        From research prototypes to production-oriented platforms, each project starts with a hard problem and ends with something usable.
      </SectionIntro>
      <div className="project-preview-grid">{projects.slice(0, 3).map((project, i) => <ProjectCard key={project.slug} project={project} navigate={navigate} featured={i === 0} />)}</div>
    </section>
    <WhyHire navigate={navigate} />
    <section className="container section-pad home-experience">
      <SectionIntro eyebrow="Experience / 02" title="Applied AI, end to end." action={<LinkButton href="/experience" className="text-link" onClick={(e) => { e.preventDefault(); navigate("/experience"); }}>Read experience <Icon name="arrow" size={15} /></LinkButton>}>
        Building across the stack means the model is only one part of the job. I care about the data, interface, deployment and result.
      </SectionIntro>
      <div className="experience-teaser">{experiences.slice(0, 3).map((item, i) => <div className="teaser-row reveal" key={item.company}><span className="teaser-number">0{i + 1}</span><span className="teaser-role">{item.role}</span><span className="teaser-company">{item.company}</span><span className="teaser-date">{item.date}</span><Icon name="arrow" size={16} /></div>)}</div>
    </section>
    <ResearchCallout navigate={navigate} />
  </main>;
}

function ProjectCard({ project, navigate, featured }) {
  const result = project.results?.[0];
  return <article className={`project-card reveal ${featured ? "featured" : ""}`}>
    <div className="card-top"><span className="project-number">{project.number}</span><span className="card-arrow"><Icon name="arrow" size={17} /></span></div>
    <p className="card-category">{project.category}</p><h3>{project.title}</h3><p className="card-blurb">{project.blurb}</p>
    <div className="tag-list">{project.tech.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
    <div className="card-about"><p className="eyebrow">About this project</p><p>{project.description}</p></div>
    <div className="card-footer"><span>{result ? result[0] : "Built"} <small>{result ? result[1] : "project detail"}</small></span><div className="card-actions">{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Icon name="external" size={13} /></a>}</div></div>
  </article>;
}

function WhyHire({ navigate }) {
  const points = [["01", "Production AI", "Builds practical AI applications beyond notebooks."], ["02", "Full-stack capability", "Connects AI models with APIs, databases and web applications."], ["03", "Measurable impact", "Works toward accuracy, speed and workflow improvements that can be seen."], ["04", "Research + engineering", "Combines applied AI engineering with published research."]];
  return <section className="why-hire"><div className="container why-grid"><div className="why-heading reveal"><p className="eyebrow">Why hire Naveen?</p><h2>Evidence over<br /><span>empty claims.</span></h2><p>From the first prototype to the final interface, I build with the person and the outcome in mind.</p><LinkButton href="/contact" className="text-link" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>Start a conversation <Icon name="arrow" size={15} /></LinkButton></div><div className="points-grid">{points.map(([n, title, desc]) => <div className="why-point reveal" key={title}><span>{n}</span><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>;
}

function ResearchCallout({ navigate }) {
  return <section className="research-callout"><div className="container research-callout-inner reveal"><div><p className="eyebrow">Research / 03</p><h2>Research that<br /><span>leaves the lab.</span></h2></div><div><p>Khan, N., et al. (2026). <i>SAFELINK: A Multimodal Smart Wearable Device for Personal Safety.</i></p><p className="muted">THESES: International Journal of Multidisciplinary Research</p><LinkButton href="/research" className="text-link" onClick={(e) => { e.preventDefault(); navigate("/research"); }}>Read the publication <Icon name="arrow" size={15} /></LinkButton></div><div className="award-mark"><strong>2nd</strong><span>IEEE CS Exhibition<br />2025</span></div></div></section>;
}

function PageHeader({ eyebrow, title, intro }) {
  return <section className="page-header container reveal"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p>{intro}</p>}</section>;
}

function About() {
  return <main><PageHeader eyebrow="About / 01" title={<>Engineer. Researcher.<br /><span>AI builder.</span></>} intro="I build intelligent systems that move from research idea to useful product." /><section className="container about-layout section-pad"><div className="about-statement reveal"><span className="quote-mark">“</span><p>AI should make complex work feel more understandable, not more mysterious.</p></div><div className="about-body reveal"><p>I’m an AI Engineer based in Karachi, Pakistan, focused on building production-oriented AI systems across Generative AI, LLM applications, RAG, Text-to-SQL, Computer Vision, backend engineering and edge AI.</p><p>My work sits at the intersection of model capability and product reality: reliable data, clear interfaces, grounded outputs and systems that people can actually use.</p><div className="about-facts"><div><span>Based in</span><strong>Karachi, Pakistan</strong></div><div><span>Focus</span><strong>Practical intelligent systems</strong></div><div><span>Education</span><strong>BE Computer Systems Engineering</strong></div></div></div></section><section className="education-band"><div className="container education-inner"><div><p className="eyebrow">Education / 02</p><h2>Engineering foundations.</h2></div><div><p className="education-degree">BE Computer Systems Engineering</p><p>Mehran University of Engineering &amp; Technology</p><span>2021 — 2025</span></div></div></section><section className="container section-pad"><SectionIntro eyebrow="Approach / 03" title="Build for the last mile." /><div className="approach-grid">{["Understand the problem", "Engineer the system", "Measure the result"].map((item, i) => <div className="approach-card reveal" key={item}><span>0{i + 1}</span><h3>{item}</h3><p>{["Start with the person, workflow and decision the system needs to support.", "Connect models to real data, APIs, interfaces and reliable infrastructure.", "Keep the outcome visible: accuracy, time saved, response speed or a shipped capability."][i]}</p></div>)}</div></section></main>;
}

function Experience() {
  return <main><PageHeader eyebrow="Experience / 01" title={<>Building where<br /><span>AI meets reality.</span></>} intro="A timeline of applied engineering, research and the measurable outcomes behind it." /><section className="container timeline section-pad">{experiences.map((item, i) => <article className="timeline-item reveal" key={item.company}><div className="timeline-marker"><span>0{i + 1}</span><i /></div><div className="timeline-date">{item.date}</div><div className="timeline-content"><p className="eyebrow">{item.company}</p><h2>{item.role}</h2><p className="timeline-summary">{item.summary}</p><div className="impact-line"><span>Impact</span><strong>{item.impact}</strong></div><ul>{item.bullets.map((bullet) => <li key={bullet}><Icon name="check" size={15} />{bullet}</li>)}</ul><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</section></main>;
}

function ProjectVisualization({ project }) {
  const result = project.results?.[0];
  return <div className={`viz-shell quiet-viz ${project.kind}`}><div className="viz-header"><span><i className="status-dot" /> project signal</span><span>visual / {project.number}</span></div><div className="quiet-visual"><div className="quiet-orbit"><span /><span /><span /><b>{project.number}</b></div><div className="quiet-readout"><span>{project.category}</span><strong>{project.title}</strong><small>{project.kind === "agent" ? "conversational intelligence" : project.kind === "risk" ? "clinical decision support" : project.kind === "vision-suite" || project.kind === "medical" ? "computer vision inference" : project.kind === "sales" ? "predictive analytics" : "applied AI system"}</small></div></div><div className="quiet-metrics">{(project.results?.length ? project.results.slice(0, 3) : [["—", "verified metric unavailable"]]).map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="viz-footer"><span>{project.tech?.[0] || "Applied AI"}</span><div className="viz-footer-actions"><strong>{result ? "VERIFIED SIGNAL" : "WORKFLOW STUDY"}</strong>{project.github && <a className="viz-repo-link" href={project.github} target="_blank" rel="noreferrer">GITHUB ↗</a>}</div></div></div>;
}

function ProjectModal({ project, navigate, onClose }) {
  useEffect(() => {
    const onKey = (event) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = previousOverflow; };
  }, [onClose]);
  return <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-top"><span className="eyebrow">Case study / {project.number}</span><button className="modal-close" onClick={onClose} aria-label="Close case study"><Icon name="close" size={20} /></button></div><div className="modal-grid"><div className="modal-overview"><p className="detail-category">{project.category}</p><h2 id="modal-title">{project.title}</h2><p className="modal-lead">{project.description}</p><div className="modal-actions"><button className="button button-primary" onClick={() => { onClose(); navigate(`/projects/${project.slug}`); }}>Full case study <Icon name="arrow" size={15} /></button>{project.link && <a className="button button-ghost" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || "Live demo"} <Icon name="external" size={14} /></a>}{project.research && <button className="button button-ghost" onClick={() => { onClose(); navigate("/research"); }}>View research <Icon name="arrow" size={14} /></button>}</div></div><ProjectVisualization project={project} /></div><div className="modal-sections"><div><p className="eyebrow">Overview</p><p>{project.outcome}</p></div><div><p className="eyebrow">Solution</p><p>{project.solution}</p></div><div><p className="eyebrow">Technology</p><div className="tag-list">{project.tech.length ? project.tech.map((tag) => <span key={tag}>{tag}</span>) : <span>Not specified in project brief</span>}</div></div><div><p className="eyebrow">Learnings</p><p>{project.learnings}</p></div></div></div></div>;
}

function Projects({ navigate }) {
  const [filter, setFilter] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [pauseUntil, setPauseUntil] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const touchStart = useRef(null);
  const visibleProjects = useMemo(() => filter === "ALL" ? projects : projects.filter((project) => project.categories.includes(filter)), [filter]);
  const project = visibleProjects[activeIndex] || visibleProjects[0];

  useEffect(() => { setActiveIndex(0); }, [filter]);
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (Date.now() >= pauseUntil) setActiveIndex((index) => (index + 1) % visibleProjects.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [pauseUntil, visibleProjects.length]);

  const interact = (index) => { setActiveIndex((index + visibleProjects.length) % visibleProjects.length); setPauseUntil(Date.now() + 8000); };
  const swipeStart = (event) => { touchStart.current = event.touches[0].clientX; };
  const swipeEnd = (event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) interact(activeIndex + (distance < 0 ? 1 : -1)); touchStart.current = null; };

  return <main><PageHeader eyebrow="Selected work · AI engineering" title={<>AI Systems I’ve<br /><span>Built.</span></>} intro="From intelligent agents and clinical AI to RAG systems and computer vision, I build practical AI applications that connect models, data, APIs and real-world workflows." /><section className="container projects-showcase section-pad"><div className="showcase-counter reveal"><div><strong>08</strong><span>Selected projects</span></div><p>Across AI, ML, Computer Vision,<br />Automation &amp; Full-Stack Engineering.</p></div><div className="project-filters reveal" aria-label="Filter projects">{projectFilters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => { setFilter(item); setPauseUntil(Date.now() + 8000); }}>{item}</button>)}</div><div className="showcase-toolbar"><div><span className="eyebrow">Project navigation</span><strong>PROJECT {project.number} / {String(visibleProjects.length).padStart(2, "0")}</strong></div><div className="slider-controls"><button onClick={() => interact(activeIndex - 1)} aria-label="Previous project">←</button><button onClick={() => interact(activeIndex + 1)} aria-label="Next project">→</button></div></div><div className="project-tabs" role="tablist">{visibleProjects.map((item, index) => <button key={item.slug} className={index === activeIndex ? "active" : ""} onClick={() => interact(index)} role="tab" aria-selected={index === activeIndex}><span>{item.number}</span><b>{item.title}</b></button>)}</div><div className="showcase-progress"><span style={{ width: `${((activeIndex + 1) / visibleProjects.length) * 100}%` }} /></div><div id="project-stage" className="showcase-stage" onTouchStart={swipeStart} onTouchEnd={swipeEnd}><div className="showcase-copy project-swap" key={`${project.slug}-copy`}><span className="showcase-number">{project.number}</span><p className="card-category">{project.category}</p><h2>{project.title}</h2><p className="showcase-description">{project.blurb}</p><div className="showcase-results">{project.results.length ? project.results.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>) : <div><strong>—</strong><span>No verified metrics supplied</span></div>}</div>{project.tech.length > 0 && <div className="tag-list">{project.tech.slice(0, 6).map((tag) => <span key={tag}>{tag}</span>)}</div>}<div className="showcase-actions"><button className="button button-primary" onClick={() => setModalProject(project)}>View case study <Icon name="arrow" size={15} /></button>{project.link && <a className="button button-ghost" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Icon name="external" size={14} /></a>}{project.research && <button className="button button-ghost" onClick={() => navigate("/research")}>View research <Icon name="arrow" size={14} /></button>}</div></div><div className="showcase-visual project-swap" key={`${project.slug}-visual`}><ProjectVisualization project={project} /></div></div></section>{modalProject && <ProjectModal project={modalProject} navigate={navigate} onClose={() => setModalProject(null)} />}<section className="projects-end"><div className="container projects-end-inner reveal"><div><p className="eyebrow">Next problem</p><h2>Have an AI problem<br /><span>worth solving?</span></h2></div><div><p>I build intelligent applications that connect AI models, data and software into practical products.</p><button className="text-link" onClick={() => navigate("/contact")}>Let's work together <Icon name="arrow" size={15} /></button></div></div></section></main>;
}

function ProjectDetail({ project, navigate }) {
  return <main><section className="project-detail-head container reveal"><button className="back-link" onClick={() => navigate("/projects")}>← Back to projects</button><p className="eyebrow">Case study / {project.number}</p><h1>{project.title}</h1><p className="detail-category">{project.category}</p><p className="detail-lead">{project.description}</p><div className="detail-results">{project.results.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section><section className="container detail-body"><div className="detail-main"><div className="detail-section reveal"><p className="eyebrow">01 / The problem</p><h2>Why this needed building.</h2><p>{project.challenge}</p></div><div className="detail-section reveal"><p className="eyebrow">02 / The architecture</p><h2>From input to outcome.</h2><div className="detail-architecture">{project.architecture.map((node, i) => <React.Fragment key={node}><div className={i === project.architecture.length - 1 ? "last" : ""}><span>0{i + 1}</span><b>{node}</b></div>{i < project.architecture.length - 1 && <i />}</React.Fragment>)}</div></div><div className="detail-section reveal"><p className="eyebrow">03 / The result</p><h2>Useful, measurable, shipped.</h2><p>{project.outcome}</p></div></div><aside className="detail-aside"><div className="aside-block reveal"><p className="eyebrow">Capabilities</p><ul>{project.features.map((feature) => <li key={feature}><Icon name="check" size={14} />{feature}</li>)}</ul></div><div className="aside-block reveal"><p className="eyebrow">Technology</p><div className="tag-list">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="aside-note reveal"><Icon name="spark" size={18} /><p>Built with a bias toward clarity, traceability and a result someone can act on.</p></div></aside></section></main>;
}

function Research() {
  return <main><PageHeader eyebrow="Research / 01" title={<>Research that<br /><span>leaves the lab.</span></>} intro="Applied research with a path toward real-world use." /><section className="container publication-layout section-pad"><article className="publication-card reveal"><div className="publication-meta"><span>Publication / 2026</span><span>International journal</span></div><h2>SAFELINK: A Multimodal Smart Wearable Device for Personal Safety</h2><p className="authors">Khan, N., et al.</p><div className="publication-copy"><p>This research presents an AI-powered wearable safety system that combines threat detection, multilingual speech recognition, evidence capture and GPS/GSM emergency communication into one edge-oriented response loop.</p><p>The work explores how multimodal intelligence can reduce the distance between recognizing a safety event and getting a useful response to the person who needs it.</p></div><div className="publication-details"><div><span>Journal</span><strong>THESES: International Journal of Multidisciplinary Research</strong></div><div><span>Research area</span><strong>Computer Vision · Edge AI · IoT</strong></div><div><span>Technologies</span><strong>YOLOv8 · PyTorch · Raspberry Pi · ESP32</strong></div></div><span className="publication-pending">Publication link coming soon</span></article><aside className="research-aside reveal"><div className="award-card"><span className="eyebrow">Recognition / 02</span><strong>2nd place</strong><h3>IEEE CS Exhibition 2025</h3><p>Selected among 45+ competing projects for the Multimodal Smart Wearable for Personal Safety.</p><div className="award-line"><span>45+</span><small>projects</small></div></div><div className="research-quote">“Applied research should be brave enough to leave the lab.”</div></aside></section></main>;
}

function Skills() {
  const [selected, setSelected] = useState("Generative AI");
  const group = skillGroups.find((item) => item[1] === selected);
  return <main><PageHeader eyebrow="Skills / 01" title={<>An ecosystem for<br /><span>shipping intelligence.</span></>} intro="The stack is not a checklist. It is how models become reliable products." /><section className="container skills-layout section-pad"><div className="skills-nav"><p className="eyebrow">Select a layer</p>{skillGroups.map((item) => <button className={selected === item[1] ? "selected" : ""} key={item[1]} onClick={() => setSelected(item[1])}><span>{item[0]}</span>{item[1]}<Icon name="arrow" size={15} /></button>)}</div><div className="skills-detail reveal" key={selected}><div className="skill-detail-top"><span className="eyebrow">Layer {group[0]}</span><span className="status-label"><i className="status-dot" /> in the toolkit</span></div><h2>{group[1]}</h2><p>{selected === "Generative AI" ? "Grounded language systems, retrieval and model integration that connect intelligence to useful workflows." : "Tools and capabilities used to build practical systems from data, through interfaces, to deployment."}</p><div className="skill-cloud">{group.slice(2).map((skill) => <span key={skill}>{skill}</span>)}</div><div className="stack-flow"><span>Data</span><i /> <span>Model</span><i /> <span>API</span><i /> <span>Product</span></div></div></section><section className="stack-band"><div className="container stack-band-inner"><div><p className="eyebrow">AI engineering stack / 02</p><h2>Models are only<br /><span>one layer.</span></h2></div><div className="stack-diagram"><div>Human problem</div><i>↓</i><div className="active">AI system</div><i>↓</i><div>Useful outcome</div></div></div></section></main>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); const data = new FormData(e.currentTarget); const subject = `Portfolio enquiry from ${data.get("name")}`; const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\n\n${data.get("message")}`; setSent(true); window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; };
  return <main><PageHeader eyebrow="Contact / 01" title={<>Have an AI problem<br /><span>worth solving?</span></>} intro="Whether you’re building an AI product, automating a workflow, or exploring an intelligent application, let’s connect." /><section className="container contact-layout section-pad"><div className="contact-info reveal"><p className="eyebrow">Reach out directly</p><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL} <Icon name="arrow" size={18} /></a><div className="contact-list"><div><Icon name="map" size={18} /><span>Karachi, Pakistan</span></div><div><Icon name="mail" size={18} /><a href={`mailto:${EMAIL}`}>Send an email</a></div><div><span className="contact-symbol">in</span><PlaceholderLink label="LinkedIn" href={LINKEDIN_URL} /></div><div><span className="contact-symbol">gh</span><PlaceholderLink label="GitHub" /></div></div><div className="contact-note"><span>Open to</span><p>AI engineering roles, applied research, and thoughtful collaborations.</p></div></div><form className="contact-form reveal" onSubmit={submit}><div className="form-row"><label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label></div><label>Company <span className="optional">optional</span><input name="company" autoComplete="organization" placeholder="Where are you building?" /></label><label>Message<textarea required name="message" rows="6" placeholder="Tell me a little about what you're working on..." /></label><button className="button button-primary" type="submit">{sent ? "Opening your email client..." : "Send message"} <Icon name="arrow" size={16} /></button><p className="form-note">This form opens your email client with a prepared message. No information is stored on this site.</p></form></section></main>;
}

function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! I’m Naveen’s portfolio assistant. Ask me about her AI projects, experience, skills, or research." }]);
  const suggestions = ["What AI projects has Naveen built?", "Tell me about her RAG experience.", "How can I contact Naveen?"];
  const answer = (question) => {
    const q = question.toLowerCase();
    if (q.includes("contact") || q.includes("email") || q.includes("hire")) return `You can reach Naveen at ${EMAIL}. She is based in Karachi, Pakistan and is open to AI engineering roles, applied research, and thoughtful collaborations.`;
    if (q.includes("rag") || q.includes("aviation") || q.includes("assistant")) return "Naveen engineered an enterprise conversational AI system at the Civil Aviation Authority of Pakistan. It used semantic retrieval, embeddings, document chunking and RAG across 100+ organizational PDFs, reducing internal query resolution time by 60%.";
    if (q.includes("mcdonald") || q.includes("customer support") || q.includes("agent")) return "The McDonald's AI Customer Support Agent is a live conversational agent experience designed to handle common customer support workflows. It makes intent detection, knowledge retrieval and response generation visible without claiming unsupported business metrics.";
    if (q.includes("cardio") || q.includes("heart disease") || q.includes("risk")) return "CardioRisk AI is a clinical decision-support application that predicts heart disease risk using 13 clinical variables. Its SVM model reports 97.6% prediction accuracy across 3,800+ patient records, with report generation and CSV/Excel export.";
    if (q.includes("vision") || q.includes("yolo") || q.includes("computer")) return "Her computer vision work includes medical image classification, damaged road detection and theft detection. She trained CNN and YOLO-based models on 10,000+ images and achieved 93%+ accuracy. Her SAFELINK wearable reached 95% real-time threat detection accuracy.";
    if (q.includes("clindata") || q.includes("clinical") || q.includes("text")) return "ClinData Explorer is an AI-powered clinical research platform built with FastAPI and Next.js. It supports natural language cohort definition, Text-to-SQL, SQL validation, provenance tracking, data quality analysis and AI-generated summaries across 912,284 patient records.";
    if (q.includes("medical image") || q.includes("medical classification")) return "Naveen built a deep learning medical image classification workflow using a CNN / DenseNet-based architecture. The project achieved 93%+ accuracy and focuses on making model inference visible through an image-analysis interface.";
    if (q.includes("sales") || q.includes("polynomial") || q.includes("prediction")) return "The Sales Prediction App is a machine learning application using polynomial regression. The portfolio describes its input data, feature processing, prediction and visualization flow, but does not include verified model metrics.";
    if (q.includes("project") || q.includes("built")) return "Naveen has built ClinData Explorer, a McDonald's AI Customer Support Agent, CardioRisk AI, an Enterprise RAG AI Assistant, Medical Image Classification, SAFELINK, a Computer Vision Model Suite, and a Sales Prediction App. Ask me about any one for its details.";
    if (q.includes("skill") || q.includes("technology") || q.includes("stack")) return "Her toolkit spans Python, FastAPI, Next.js, LLMs, RAG, LangChain, Text-to-SQL, PyTorch, YOLOv8, TensorFlow, SQL databases, vector databases, Docker, Azure, Git and workflow automation.";
    if (q.includes("research") || q.includes("publication") || q.includes("paper")) return "Naveen’s research paper, “SAFELINK: A Multimodal Smart Wearable Device for Personal Safety,” was published internationally in 2026 in THESES: International Journal of Multidisciplinary Research. The project also won 2nd place at IEEE CS Exhibition 2025 among 45+ projects.";
    return "I don’t have that information in Naveen’s portfolio.";
  };
  const send = (text = input) => { if (!text.trim()) return; setMessages((m) => [...m, { from: "user", text }, { from: "bot", text: answer(text) }]); setInput(""); };
  return <div className={`assistant ${open ? "open" : ""}`}><button className="assistant-bubble" aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"} onClick={() => setOpen(!open)}>{open ? <Icon name="close" size={20} /> : <><Icon name="spark" size={20} /><span>Ask Naveen’s AI</span></>}</button>{open && <div className="assistant-panel"><div className="assistant-head"><div><span className="eyebrow">Portfolio assistant</span><strong>Ask Naveen’s AI</strong></div><span className="status-label"><i className="status-dot" /> grounded</span></div><div className="assistant-messages">{messages.map((m, i) => <p className={m.from} key={`${m.text}-${i}`}>{m.text}</p>)}</div>{messages.length === 1 && <div className="suggestions">{suggestions.map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}</div>}<form className="assistant-input" onSubmit={(e) => { e.preventDefault(); send(); }}><input value={input} onChange={(e) => setInput(e.target.value)} aria-label="Ask a question" placeholder="Ask about her work..." /><button aria-label="Send question" type="submit"><Icon name="arrow" size={16} /></button></form></div>}</div>;
}

function Footer({ navigate }) {
  const go = (href) => (e) => { e.preventDefault(); navigate(href); };
  return <footer><div className="container footer-main"><div><a className="brand" href="/" onClick={go("/")}><span className="brand-mark">NK</span><span>Naveen Khan</span></a><p>AI Engineer building intelligent systems.</p></div><div className="footer-nav"><p className="eyebrow">Explore</p>{navItems.slice(0, 4).map(([label, href]) => <a key={href} href={href} onClick={go(href)}>{label}</a>)}</div><div className="footer-nav"><p className="eyebrow">Connect</p><a href={`mailto:${EMAIL}`}>Email</a><PlaceholderLink label="GitHub" /><PlaceholderLink label="LinkedIn" href={LINKEDIN_URL} /></div><div className="footer-location"><p className="eyebrow">Based in</p><strong>Karachi, Pakistan</strong><span>© 2026 Naveen Khan.<br />All rights reserved.</span></div></div><div className="container footer-bottom"><span>Built with intent.</span><span>From research prototypes to production-ready AI applications.</span></div></footer>;
}

function MarqueeBar() {
  const items = projectFilters.slice(1);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);
  const itemSet = (duplicate = false) => <div className="marquee-set" aria-hidden={duplicate || reduced ? "true" : undefined}>{items.map((item) => <span className="marquee-item" key={`${duplicate ? "duplicate-" : ""}${item}`}><i />{item}</span>)}</div>;
  return <aside className={`marquee-bar ${paused ? "is-paused" : ""} ${reduced ? "is-reduced" : ""}`} aria-label="Naveen Khan's AI engineering focus areas"><div className="marquee-inner"><div className="marquee-viewport"><div className="marquee-track" aria-hidden="true">{itemSet()}{itemSet(true)}</div><p className="sr-only">Current focus areas: {items.join(", ")}.</p></div><button className="marquee-pause" type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? "Resume motion" : "Pause motion"}</button></div></aside>;
}

function App() {
  const [path, navigate] = usePath();
  const detail = useMemo(() => path.match(/^\/projects\/(.+)/)?.[1], [path]);
  const project = projects.find((item) => item.slug === detail);
  let page = path === "/" ? <Home navigate={navigate} /> : path === "/about" ? <About /> : path === "/experience" ? <Experience /> : path === "/projects" ? <Projects navigate={navigate} /> : project ? <ProjectDetail project={project} navigate={navigate} /> : path === "/research" ? <Research /> : path === "/skills" ? <Skills /> : path === "/contact" ? <Contact /> : <Home navigate={navigate} />;
  useEffect(() => { document.title = path.startsWith("/projects/") && project ? `${project.title} | Naveen Khan` : "Naveen Khan | AI Engineer | Generative AI, RAG & Computer Vision"; }, [path, project]);
  useEffect(() => {
    const revealItems = [...document.querySelectorAll(".reveal")];
    const sectionItems = [...document.querySelectorAll(".route-page main > section, .route-page main > article, .route-page main > aside")].filter((item) => !item.classList.contains("reveal"));
    sectionItems.forEach((item) => item.classList.add("scroll-section"));
    const animatedItems = [...new Set([...revealItems, ...sectionItems])];
    if (!("IntersectionObserver" in window)) {
      animatedItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    animatedItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [path]);
  return <><Navbar path={path} navigate={navigate} /><div className="route-page" key={path}>{page}</div><Assistant /><Footer navigate={navigate} /></>;
}

const rootElement = document.getElementById("root");
const appRoot = window.__naveenPortfolioRoot || (window.__naveenPortfolioRoot = createRoot(rootElement));
appRoot.render(<React.StrictMode><App /></React.StrictMode>);