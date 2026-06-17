import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#080b14",
  bgSecondary: "#0d1120",
  bgCard: "#111827",
  accent: "#00b8ff",
  accentSecondary: "#7c3aed",
  accentGreen: "#10b981",
  accentRed: "#ef4444",
  text: "#e2e8f0",
  textMuted: "#94a3b8",
  textDark: "#64748b",
  border: "rgba(0,184,255,0.15)",
  borderHover: "rgba(0,184,255,0.4)",
  gradientHero: "linear-gradient(135deg, #080b14 0%, #0d1120 50%, #0a0f1e 100%)",
  gradientAccent: "linear-gradient(135deg, #00b8ff, #7c3aed)",
  gradientCard: "linear-gradient(145deg, #111827, #1a2235)",
};

const styles = {
  // LAYOUT
  app: {
    fontFamily: "'Poppins', sans-serif",
    background: COLORS.bg,
    color: COLORS.text,
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
  },

  // HEADER
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(8,11,20,0.95)",
    backdropFilter: "blur(20px)",
    borderBottom: `1px solid ${COLORS.border}`,
    padding: "0.75rem 0",
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    background: COLORS.gradientAccent,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textDecoration: "none",
    letterSpacing: "-0.5px",
  },
  nav: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: COLORS.textMuted,
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "400",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  btnOutline: {
    background: "transparent",
    border: `1px solid rgba(255,255,255,0.2)`,
    color: COLORS.text,
    padding: "0.5rem 1.25rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.85rem",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-block",
  },
  btnCta: {
    background: COLORS.gradientAccent,
    border: "none",
    color: "#fff",
    padding: "0.5rem 1.25rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.85rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-block",
    boxShadow: "0 4px 15px rgba(0,184,255,0.3)",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "0.5rem",
  },
  hamburgerLine: {
    width: "25px",
    height: "2px",
    background: COLORS.text,
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },

  // HERO
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: COLORS.gradientHero,
    paddingTop: "80px",
    position: "relative",
    overflow: "hidden",
  },
  heroGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "800px",
    background: "radial-gradient(ellipse, rgba(0,184,255,0.08) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)",
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    maxWidth: "850px",
    margin: "0 auto",
    padding: "2rem 1.5rem",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "700",
    lineHeight: "1.15",
    marginBottom: "1.5rem",
    background: "linear-gradient(135deg, #ffffff 0%, #00b8ff 50%, #7c3aed 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSubtitle: {
    fontSize: "1.1rem",
    color: COLORS.textMuted,
    lineHeight: "1.7",
    marginBottom: "2rem",
    maxWidth: "700px",
    margin: "0 auto 2rem",
  },
  heroLogoWrapper: {
    marginBottom: "1.5rem",
    display: "flex",
    justifyContent: "center",
  },
  heroLogoPlaceholder: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "700",
    background: COLORS.gradientAccent,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    filter: "drop-shadow(0 0 15px rgba(0,184,255,0.3))",
  },
  heroSlogan: {
    fontSize: "1.2rem",
    color: COLORS.accent,
    fontWeight: "300",
    letterSpacing: "2px",
    marginBottom: "2.5rem",
    fontStyle: "italic",
  },

  // SECTION GENERAL
  section: {
    padding: "5rem 0",
  },
  sectionAlt: {
    padding: "5rem 0",
    background: COLORS.bgSecondary,
  },
  sectionTitle: {
    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #ffffff, #00b8ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  sectionDescription: {
    textAlign: "center",
    color: COLORS.textMuted,
    fontSize: "1rem",
    maxWidth: "750px",
    margin: "0 auto 1rem",
    lineHeight: "1.7",
  },

  // VIDEO SECTION
  vslSection: {
    padding: "4rem 0",
    background: COLORS.bgSecondary,
    display: "flex",
    justifyContent: "center",
  },
  videoWrapper: {
    position: "relative",
    maxWidth: "800px",
    width: "100%",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  videoContainer: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 0 60px rgba(0,184,255,0.2), 0 0 120px rgba(124,58,237,0.1)",
    border: `1px solid ${COLORS.border}`,
  },
  videoAnimatedBorder: {
    position: "absolute",
    inset: "-2px",
    borderRadius: "18px",
    background: "linear-gradient(90deg, #00b8ff, #7c3aed, #00b8ff)",
    backgroundSize: "200% 100%",
    zIndex: 0,
    animation: "borderMove 3s linear infinite",
  },
  videoInner: {
    position: "relative",
    zIndex: 1,
    borderRadius: "14px",
    overflow: "hidden",
    background: "#000",
  },
  video: {
    width: "100%",
    display: "block",
    aspectRatio: "16/9",
  },

  // FEATURES
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "3rem",
  },
  featureCard: {
    background: COLORS.gradientCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "16px",
    padding: "2rem",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  featureIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, rgba(0,184,255,0.15), rgba(124,58,237,0.15))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.25rem",
    fontSize: "1.5rem",
    color: COLORS.accent,
  },
  featureTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "0.75rem",
  },
  featureText: {
    color: COLORS.textMuted,
    fontSize: "0.9rem",
    lineHeight: "1.6",
  },

  // MODELS
  modelGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.25rem",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  modelCard: {
    background: COLORS.gradientCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "16px",
    padding: "1.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    minWidth: "130px",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  modelLogoPlaceholder: {
    width: "52px",
    height: "52px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(0,184,255,0.2), rgba(124,58,237,0.2))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.4rem",
    marginBottom: "0.25rem",
  },
  modelName: {
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.95rem",
  },
  modelBadge: {
    background: "rgba(0,184,255,0.15)",
    color: COLORS.accent,
    fontSize: "0.72rem",
    fontWeight: "600",
    padding: "2px 10px",
    borderRadius: "20px",
    border: `1px solid rgba(0,184,255,0.3)`,
  },
  capGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "1.25rem",
    marginTop: "2rem",
  },
  capCard: {
    background: COLORS.gradientCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "14px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  capIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(0,184,255,0.15), rgba(124,58,237,0.15))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    color: COLORS.accent,
    margin: "0 auto 1rem",
  },
  modelsNote: {
    textAlign: "center",
    color: COLORS.textMuted,
    fontSize: "0.85rem",
    marginTop: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },

  // PRICING
  pricingIntro: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  pricingIntroText: {
    color: COLORS.textMuted,
    fontSize: "1rem",
    lineHeight: "1.7",
    marginBottom: "0.5rem",
  },
  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  priceCard: {
    background: COLORS.gradientCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "20px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  priceCardFeatured: {
    background: "linear-gradient(145deg, #131f35, #1a2845)",
    border: `1px solid rgba(0,184,255,0.4)`,
    boxShadow: "0 0 40px rgba(0,184,255,0.15)",
  },
  pricePlanName: {
    fontSize: "0.85rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: COLORS.accent,
    marginBottom: "0.25rem",
  },
  priceAmount: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#fff",
    lineHeight: "1",
  },
  pricePeriod: {
    fontSize: "1rem",
    color: COLORS.textMuted,
    fontWeight: "400",
  },
  priceDesc: {
    color: COLORS.textMuted,
    fontSize: "0.9rem",
    lineHeight: "1.6",
    marginBottom: "0.5rem",
  },
  priceList: {
    listStyle: "none",
    padding: 0,
    margin: "0.5rem 0 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    flex: 1,
  },
  priceListItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.6rem",
    color: COLORS.text,
    fontSize: "0.85rem",
    lineHeight: "1.5",
  },
  priceListIcon: {
    color: COLORS.accentGreen,
    fontSize: "0.8rem",
    marginTop: "3px",
    flexShrink: 0,
  },
  selectPlanBtn: {
    background: COLORS.gradientAccent,
    color: "#fff",
    border: "none",
    padding: "0.85rem 1.5rem",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
    transition: "all 0.3s ease",
    display: "block",
    boxShadow: "0 4px 15px rgba(0,184,255,0.25)",
    marginTop: "auto",
  },
  pricingFooter: {
    marginTop: "3rem",
    textAlign: "center",
  },
  pricingNote: {
    background: "rgba(0,184,255,0.05)",
    border: `1px solid rgba(0,184,255,0.15)`,
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginBottom: "1rem",
    maxWidth: "700px",
    margin: "0 auto 1rem",
  },
  pricingNoteTitle: {
    color: COLORS.accent,
    fontWeight: "600",
    fontSize: "0.9rem",
    marginBottom: "0.4rem",
  },
  pricingNoteText: {
    color: COLORS.textMuted,
    fontSize: "0.82rem",
    lineHeight: "1.6",
  },
  pricingAdditional: {
    color: COLORS.textMuted,
    fontSize: "0.85rem",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
  },

  // PARA QUIEN
  paraQuienGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  paraQuienCard: {
    background: COLORS.gradientCard,
    borderRadius: "20px",
    padding: "2rem",
    border: `1px solid ${COLORS.border}`,
  },
  paraQuienHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  paraQuienIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    flexShrink: 0,
  },
  paraQuienTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#fff",
  },
  paraQuienList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
  },
  paraQuienItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    fontSize: "0.9rem",
    color: COLORS.textMuted,
    lineHeight: "1.5",
  },

  // CONTACT
  contactSection: {
    padding: "5rem 0",
    background: COLORS.bgSecondary,
  },
  contactForm: {
    maxWidth: "600px",
    margin: "3rem auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.25rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  formLabel: {
    color: COLORS.textMuted,
    fontSize: "0.85rem",
    fontWeight: "500",
  },
  formInput: {
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${COLORS.border}`,
    borderRadius: "10px",
    padding: "0.85rem 1rem",
    color: COLORS.text,
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.3s ease",
    fontFamily: "'Poppins', sans-serif",
  },
  formTextarea: {
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${COLORS.border}`,
    borderRadius: "10px",
    padding: "0.85rem 1rem",
    color: COLORS.text,
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.3s ease",
    fontFamily: "'Poppins', sans-serif",
    minHeight: "140px",
    resize: "vertical",
  },

  // FOOTER
  footer: {
    background: "#050811",
    borderTop: `1px solid ${COLORS.border}`,
    padding: "3rem 0 2rem",
    textAlign: "center",
  },
  footerLogo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    background: COLORS.gradientAccent,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "1rem",
    display: "block",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    listStyle: "none",
    padding: 0,
    margin: "0 0 1.5rem",
    flexWrap: "wrap",
  },
  footerLink: {
    color: COLORS.textMuted,
    textDecoration: "none",
    fontSize: "0.85rem",
    transition: "color 0.3s ease",
  },
  footerCopy: {
    color: COLORS.textDark,
    fontSize: "0.8rem",
  },

  // MOBILE MENU
  mobileMenu: {
    position: "fixed",
    top: "65px",
    left: 0,
    right: 0,
    background: "rgba(8,11,20,0.98)",
    backdropFilter: "blur(20px)",
    borderBottom: `1px solid ${COLORS.border}`,
    padding: "1.5rem",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  mobileNavLink: {
    color: COLORS.text,
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 0",
    borderBottom: `1px solid ${COLORS.border}`,
    display: "block",
    cursor: "pointer",
  },
};

// Icon component using Unicode symbols (no external deps)
const Icon = ({ name, style = {} }) => {
  const icons = {
    sitemap: "🗂",
    balance: "⚖",
    cogs: "⚙",
    laptop: "💻",
    brain: "🧠",
    palette: "🎨",
    video: "🎬",
    sync: "🔄",
    check: "✓",
    times: "✕",
    checkCircle: "✅",
    timesCircle: "❌",
    globe: "🌐",
    plus: "➕",
    openai: "🤖",
    claude: "🦋",
    gemini: "💎",
    heygen: "🎥",
    elevenlabs: "🎙",
  };
  return (
    <span style={{ fontSize: "1.2rem", ...style }}>
      {icons[name] || "•"}
    </span>
  );
};

const modelData = [
  { key: "openai", icon: "🤖", name: "GPT-5", badge: "Pro", color: "#00a67e" },
  { key: "claude", icon: "🦋", name: "Claude", badge: "Pro", color: "#d97706" },
  { key: "gemini", icon: "💎", name: "Gemini", badge: "Pro", color: "#4285f4" },
  { key: "heygen", icon: "🎥", name: "HeyGen", badge: "Video", color: "#e91e8c" },
  { key: "elevenlabs", icon: "🎙", name: "ElevenLabs", badge: "Voz", color: "#8b5cf6" },
];

const featuresData = [
  {
    icon: "sitemap",
    title: "Acceso Centralizado",
    text: "Trabaja con inteligencia artificial desde un solo lugar, sin saltar entre plataformas ni cuentas diferentes.",
  },
  {
    icon: "balance",
    title: "Claridad en Resultados",
    text: "PassportAI te permite entender y evaluar los resultados que obtienes al usar inteligencia artificial, sin complejidad técnica.",
  },
  {
    icon: "cogs",
    title: "Experiencia Unificada",
    text: "Texto, imagen, voz y video integrados en una sola experiencia intuitiva, sin necesidad de programación ni configuraciones complejas.",
  },
  {
    icon: "laptop",
    title: "Automatización con Sentido",
    text: "No se trata de automatizar por automatizar. PassportAI te ayuda a crear flujos de trabajo lógicos y útiles, alineados con objetivos reales.",
  },
];

const plansData = [
  {
    id: "pro",
    name: "PRO",
    price: "U$S 19",
    period: "/mes",
    desc: "Pensado para quienes quieren usar inteligencia artificial de forma constante en su trabajo o negocio.",
    items: [
      "U$S 19/mes créditos (vence a los 60 días).",
      "Incluye acceso a Coursera Plus con el patrocinio del Centro de Graduados de Ingeniería de la Universidad de Buenos Aires (FIUBA).",
      "Entorno estable para el trabajo diario.",
    ],
    cta: "Elegir Plan",
    href: "/register?plan=pro",
    featured: true,
  },
  {
    id: "agente",
    name: "AGENTE con chatbot customizado",
    price: "U$S 99",
    period: "/mes",
    desc: "Diseñado para quienes buscan implementar agentes inteligentes y chatbots adaptados a su negocio.",
    items: [
      "U$S 99/mes créditos (vence a los 90 días).",
      "Acceso a capacidades de agentes personalizados.",
      "Ideal para atención, soporte o flujos automatizados.",
      "Despliegue de un agente personalizado con chatbot customizado (No incluye setup completo).",
      "Incluye acceso a Coursera Plus con el patrocinio de FIUBA.",
    ],
    cta: "Elegir Plan",
    href: "/register?plan=agente-custom",
    featured: false,
  },
  {
    id: "licencia",
    name: "LICENCIA VITALICIA",
    price: "U$S 990",
    period: "",
    desc: "",
    items: [
      "Plan PRO de por vida (pago único).",
      "Incluye acceso perpetuo a Coursera Plus con el patrocinio de FIUBA.",
      "Formación integrada sin costos recurrentes.",
      "Aun hay más Beneficios — preguntar por ellos.",
    ],
    cta: "Elegir Plan",
    href: "/register?plan=licencia-vitalicia",
    featured: false,
  },
];

const paraQuienSi = [
  "Eres emprendedor, empresario, consultor o profesional y quieres aplicar IA en tu trabajo o negocio de forma práctica.",
  "Estás cansado de usar herramientas sueltas, cursos inconexos y soluciones que no se integran entre sí.",
  "Quieres ahorrar tiempo, reducir fricción y trabajar con un sistema claro en lugar de improvisar.",
  "Valoras la formación respaldada y el aprendizaje aplicado, no solo la tecnología.",
  "Buscas una plataforma que pueda crecer contigo, desde el primer uso hasta la automatización avanzada.",
];

const paraQuienNo = [
  "Buscas \"una IA mágica\" que haga todo sin involucrarte en el proceso.",
  "No tienes interés en aprender ni aplicar la inteligencia artificial en tu contexto real.",
  "Prefieres seguir probando herramientas aisladas sin orden ni estrategia.",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredModel, setHoveredModel] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [formSent, setFormSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar con backend real (endpoint de contacto de passportai.app)
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const headerBg = scrolled
    ? "rgba(8,11,20,0.98)"
    : "rgba(8,11,20,0.85)";

  return (
    <div style={styles.app}>
      {/* CSS animations injected via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,184,255,0.2); }
          50% { box-shadow: 0 0 40px rgba(0,184,255,0.5); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-in-up {
          animation: fadeInUp 0.7s ease forwards;
        }
        .float-anim {
          animation: float 4s ease-in-out infinite;
        }
        .pulse-anim {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080b14; }
        ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #00b8ff; }
        input::placeholder, textarea::placeholder { color: #475569; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-auth { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .form-row-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ========== HEADER ========== */}
      <header
        style={{
          ...styles.header,
          background: headerBg,
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={styles.headerInner}>
          {/* TODO: reemplazar con <img src="/static/img/logo/logo_horizontal_degradado.png" alt="Central Passport AI" style={{height:"46px"}} /> */}
          <span style={styles.logoText}>PassportAI</span>

          <ul className="desktop-nav" style={styles.nav}>
            {[
              { label: "Características", id: "features" },
              { label: "Modelos IA", id: "models" },
              { label: "Precios", id: "pricing" },
              { label: "Contacto", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <span
                  style={styles.navLink}
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="desktop-auth" style={styles.authButtons}>
            <a
              href="/login"
              style={{
                ...styles.btnOutline,
                ...(hoveredBtn === "login" ? { borderColor: COLORS.accent, color: COLORS.accent } : {}),
              }}
              onMouseEnter={() => setHoveredBtn("login")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Iniciar Sesión
            </a>
            <a
              href="/register"
              style={{
                ...styles.btnCta,
                ...(hoveredBtn === "register" ? { opacity: 0.85, transform: "translateY(-1px)" } : {}),
              }}
              onMouseEnter={() => setHoveredBtn("register")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Regístrate
            </a>
          </div>

          <button
            className="hamburger-btn"
            style={{ ...styles.hamburger, display: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span
              style={{
                ...styles.hamburgerLine,
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                ...styles.hamburgerLine,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                ...styles.hamburgerLine,
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {[
            { label: "Características", id: "features" },
            { label: "Modelos IA", id: "models" },
            { label: "Precios", id: "pricing" },
            { label: "Contacto", id: "contact" },
          ].map((item) => (
            <span
              key={item.id}
              style={styles.mobileNavLink}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </span>
          ))}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <a href="/login" style={{ ...styles.btnOutline, flex: 1, textAlign: "center" }}>
              Iniciar Sesión
            </a>
            <a href="/register" style={{ ...styles.btnCta, flex: 1, textAlign: "center" }}>
              Regístrate
            </a>
          </div>
        </div>
      )}

      <main>
        {/* ========== HERO ========== */}
        <section style={styles.hero}>
          <div style={styles.heroGlow} />
          {/* decorative orbs */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "10%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,184,255,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "8%",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={styles.heroContent} className="fade-in-up">
            <h1 style={styles.heroTitle}>
              Deja de Probar IA al Azar. Usa un Pasaporte que Te Lleve al Siguiente Nivel
            </h1>
            <p style={styles.heroSubtitle}>
              Cursos, herramientas, prompts, suscripciones... la IA se volvió caótica. PassportAI existe para poner orden.
              Es tu pasaporte a un entorno donde la inteligencia artificial se usa con claridad, estructura y propósito,
              ayudándote a aplicar IA en tu negocio sin perder tiempo ni energía en plataformas dispersas.
            </p>
            <div style={styles.heroLogoWrapper} className="float-anim">
              {/* TODO: reemplazar con <img src="/static/img/logo/logo_horizontal_degradado.png" alt="Central Passport AI" style={{height:"80px",filter:"drop-shadow(0 0 15px rgba(0,184,255,0.3))"}} /> */}
              <div style={styles.heroLogoPlaceholder}>
                🛂 Central Passport AI
              </div>
            </div>
            <p style={styles.heroSlogan}>
              Tu pasaporte para conectarte con todas las IAs . . .
            </p>
            <a
              href="#pricing"
              onClick={(e) => { e.preventDefault(); scrollTo("pricing"); }}
              style={{
                ...styles.btnCta,
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                borderRadius: "12px",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 30px rgba(0,184,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "none";
                e.target.style.boxShadow = "0 4px 15px rgba(0,184,255,0.3)";
              }}
            >
              Descubre el sistema
            </a>
          </div>
        </section>

        {/* ========== VIDEO / VSL ========== */}
        <section style={styles.vslSection}>
          <div style={styles.videoWrapper}>
            <div style={styles.videoContainer}>
              <div
                style={{
                  position: "absolute",
                  inset: "-2px",
                  borderRadius: "18px",
                  background: "linear-gradient(90deg, #00b8ff, #7c3aed, #00b8ff)",
                  backgroundSize: "200% 100%",
                  zIndex: 0,
                  animation: "borderMove 3s linear infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#000",
                  margin: "2px",
                }}
              >
                {/* TODO: reemplazar la URL del video con la fuente real si cambia */}
                <video
                  controls
                  playsInline
                  preload="metadata"
                  style={styles.video}
                >
                  <source
                    src="https://assets.cdn.filesafe.space/tz0PoLeuZQ9NkbmkIj5E/media/69dfa4f7190683601a61a98c.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section id="features" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Nuestra Propuesta de Valor</h2>
            <div style={styles.featureGrid}>
              {featuresData.map((f, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.featureCard,
                    ...(hoveredCard === `feat-${i}`
                      ? {
                          borderColor: "rgba(0,184,255,0.4)",
                          transform: "translateY(-6px)",
                          boxShadow: "0 12px 40px rgba(0,184,255,0.15)",
                        }
                      : {}),
                  }}
                  onMouseEnter={() => setHoveredCard(`feat-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={styles.featureIcon}>
                    <Icon name={f.icon} />
                  </div>
                  <h3 style={styles.featureTitle}>{f.title}</h3>
                  <p style={styles.featureText}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== MODELS ========== */}
        <section id="models" style={styles.sectionAlt}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Modelos de IA Integrados</h2>
            <p style={styles.sectionDescription}>
              PassportAI te da acceso a los modelos de inteligencia artificial más avanzados del mercado desde una sola
              plataforma, sin atarte a una tecnología específica ni obligarte a elegir "el modelo correcto" cada vez.
            </p>
            <p style={{ ...styles.sectionDescription, marginTop: "0.5rem" }}>
              Aquí no dependes de una sola IA. Tienes un pasaporte que te permite trabajar con distintas capacidades
              según lo que necesites en cada momento.
            </p>

            <div style={styles.modelGrid}>
              {modelData.map((m) => (
                <div
                  key={m.key}
                  style={{
                    ...styles.modelCard,
                    ...(hoveredModel === m.key
                      ? {
                          borderColor: "rgba(0,184,255,0.5)",
                          transform: "translateY(-8px) scale(1.03)",
                          boxShadow: "0 16px 40px rgba(0,184,255,0.2)",
                        }
                      : {}),
                  }}
                  onMouseEnter={() => setHoveredModel(m.key)}
                  onMouseLeave={() => setHoveredModel(null)}
                >
                  {/* TODO: reemplazar con <img src={`/static/img/models/${m.key}.png`} alt={m.name} className="model-logo" style={{width:"52px",height:"52px",objectFit:"contain",borderRadius:"10px"}} /> */}
                  <div
                    style={{
                      ...styles.modelLogoPlaceholder,
                      background: `linear-gradient(135deg, ${m.color}22, ${m.color}44)`,
                    }}
                  >
                    {m.icon}
                  </div>
                  <span style={styles.modelName}>{m.name}</span>
                  <span style={styles.modelBadge}>{m.badge}</span>
                </div>
              ))}
            </div>

            {/* Models description */}
            <div
              style={{
                background: COLORS.gradientCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "20px",
                padding: "2.5rem",
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                Acceso a Modelos Líderes del Mercado
              </h3>
              <p style={{ ...styles.sectionDescription, marginBottom: "2rem" }}>
                Trabaja con modelos de lenguaje, generación creativa y video de última generación, integrados en una
                experiencia unificada y fácil de usar.
              </p>
              <div style={styles.capGrid}>
                {[
                  {
                    icon: "brain",
                    title: "Lenguaje Avanzado",
                    text: "Modelos de lenguaje de última generación para texto, análisis y conversaciones inteligentes",
                  },
                  {
                    icon: "palette",
                    title: "Generación Creativa",
                    text: "Modelos especializados en creación de contenido visual, imágenes y diseño",
                  },
                  {
                    icon: "video",
                    title: "Video y Voz",
                    text: "Tecnología avanzada para video y comunicación visual con voces realistas",
                  },
                ].map((cap, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.capCard,
                      ...(hoveredCard === `cap-${i}`
                        ? { borderColor: "rgba(0,184,255,0.4)", transform: "translateY(-4px)" }
                        : {}),
                    }}
                    onMouseEnter={() => setHoveredCard(`cap-${i}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div style={styles.capIcon}>
                      <Icon name={cap.icon} />
                    </div>
                    <h4 style={{ color: "#fff", fontWeight: "600", fontSize: "1rem", marginBottom: "0.5rem" }}>
                      {cap.title}
                    </h4>
                    <p style={{ color: COLORS.textMuted, fontSize: "0.85rem", lineHeight: "1.6", margin: 0 }}>
                      {cap.text}
                    </p>
                  </div>
                ))}
              </div>
              <p style={styles.modelsNote}>
                <Icon name="sync" style={{ fontSize: "0.9rem" }} />
                Los modelos se actualizan y amplían continuamente dentro de la plataforma
              </p>
            </div>
          </div>
        </section>

        {/* ========== PRICING ========== */}
        <section id="pricing" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Planes Diseñados para Cada Etapa de Tu Camino con IA</h2>
            <div style={styles.pricingIntro}>
              <p style={styles.pricingIntroText}>
                PassportAI crece contigo. Por eso ofrecemos distintos planes según el nivel de acceso, acompañamiento y
                aplicación que necesitas en este momento.
              </p>
              <p style={styles.pricingIntroText}>
                Puedes comenzar gratis, escalar con formación y automatización, o asegurar tu acceso de por vida.
              </p>
            </div>
            <div style={styles.pricingGrid}>
              {plansData.map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    ...styles.priceCard,
                    ...(plan.featured ? styles.priceCardFeatured : {}),
                    ...(hoveredCard === `plan-${plan.id}`
                      ? {
                          transform: "translateY(-8px)",
                          boxShadow: plan.featured
                            ? "0 20px 60px rgba(0,184,255,0.25)"
                            : "0 12px 40px rgba(0,0,0,0.3)",
                        }
                      : {}),
                  }}
                  onMouseEnter={() => setHoveredCard(`plan-${plan.id}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {plan.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: COLORS.gradientAccent,
                        color: "#fff",
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        padding: "4px 20px",
                        borderRadius: "0 0 10px 10px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Más Popular
                    </div>
                  )}
                  <p style={styles.pricePlanName}>{plan.name}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "0.5rem" }}>
                    <span style={styles.priceAmount}>{plan.price}</span>
                    {plan.period && <span style={styles.pricePeriod}>{plan.period}</span>}
                  </div>
                  {plan.desc && <p style={styles.priceDesc}>{plan.desc}</p>}
                  <ul style={styles.priceList}>
                    {plan.items.map((item, idx) => (
                      <li key={idx} style={styles.priceListItem}>
                        <span style={styles.priceListIcon}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.href}
                    style={{
                      ...styles.selectPlanBtn,
                      ...(hoveredCard === `plan-cta-${plan.id}`
                        ? { opacity: 0.85, transform: "translateY(-1px)" }
                        : {}),
                    }}
                    onMouseEnter={() => setHoveredCard(`plan-cta-${plan.id}`)}
                    onMouseLeave={() => setHoveredCard(`plan-${plan.id}`)}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <div style={styles.pricingFooter}>
              <div style={styles.pricingNote}>
                <h4 style={styles.pricingNoteTitle}>Nota aclaratoria</h4>
                <p style={styles.pricingNoteText}>
                  El acceso a Coursera Plus está sujeto a la vigencia y condiciones del patrocinio académico del Centro
                  de Graduados de Ingeniería de la Universidad de Buenos Aires (FIUBA).
                </p>
              </div>
              <p style={styles.pricingAdditional}>
                <Icon name="plus" style={{ fontSize: "0.9rem", color: COLORS.accent }} />
                También disponible: Sistema de créditos por uso y Add-ons como analítica avanzada.
              </p>
            </div>
          </div>
        </section>

        {/* ========== PARA QUIÉN ========== */}
        <section style={styles.sectionAlt}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>¿Para Quién es PassportAI (y Para Quién No)?</h2>
            <p style={styles.sectionDescription}>
              PassportAI no es una herramienta más de moda. Es una plataforma pensada para personas y organizaciones que
              quieren usar la inteligencia artificial con sentido, estructura y visión de negocio.
            </p>
            <div style={styles.paraQuienGrid}>
              {/* ES PARA TI */}
              <div
                style={{
                  ...styles.paraQuienCard,
                  borderColor: "rgba(16,185,129,0.3)",
                  background: "linear-gradient(145deg, #0f1f18, #111827)",
                }}
              >
                <div style={styles.paraQuienHeader}>
                  <div
                    style={{
                      ...styles.paraQuienIcon,
                      background: "rgba(16,185,129,0.15)",
                      color: COLORS.accentGreen,
                    }}
                  >
                    ✅
                  </div>
                  <h3 style={styles.paraQuienTitle}>PassportAI es para ti si...</h3>
                </div>
                <ul style={styles.paraQuienList}>
                  {paraQuienSi.map((item, i) => (
                    <li key={i} style={styles.paraQuienItem}>
                      <span style={{ color: COLORS.accentGreen, fontSize: "0.8rem", marginTop: "3px", flexShrink: 0 }}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NO ES PARA TI */}
              <div
                style={{
                  ...styles.paraQuienCard,
                  borderColor: "rgba(239,68,68,0.3)",
                  background: "linear-gradient(145deg, #1f1010, #111827)",
                }}
              >
                <div style={styles.paraQuienHeader}>
                  <div
                    style={{
                      ...styles.paraQuienIcon,
                      background: "rgba(239,68,68,0.15)",
                      color: COLORS.accentRed,
                    }}
                  >
                    ❌
                  </div>
                  <h3 style={styles.paraQuienTitle}>PassportAI no es para ti si...</h3>
                </div>
                <ul style={styles.paraQuienList}>
                  {paraQuienNo.map((item, i) => (
                    <li key={i} style={styles.paraQuienItem}>
                      <span style={{ color: COLORS.accentRed, fontSize: "0.8rem", marginTop: "3px", flexShrink: 0 }}>
                        ✕
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CONTACT ========== */}
        <section id="contact" style={styles.contactSection}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Contacto</h2>
            <p style={styles.sectionDescription}>
              ¿Tienes preguntas sobre PassportAI? Escríbenos y te responderemos a la brevedad.
            </p>
            <form onSubmit={handleFormSubmit} style={styles.contactForm}>
              <div className="form-row-grid" style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel} htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    style={styles.formInput}
                    onFocus={(e) => (e.target.style.borderColor = COLORS.accent)}
                    onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={styles.formInput}
                    onFocus={(e) => (e.target.style.borderColor = COLORS.accent)}
                    onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
                    required
                  />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  style={styles.formTextarea}
                  onFocus={(e) => (e.target.style.borderColor = COLORS.accent)}
                  onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
                  required
                />
              </div>
              {formSent && (
                <div
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: "10px",
                    padding: "1rem",
                    textAlign: "center",
                    color: COLORS.accentGreen,
                    fontSize: "0.9rem",
                    fontWeight: "500",
                  }}
                >
                  ✅ ¡Mensaje enviado! Te responderemos pronto.
                </div>
              )}
              <button
                type="submit"
                style={{
                  ...styles.selectPlanBtn,
                  fontSize: "1rem",
                  padding: "1rem",
                  ...(hoveredBtn === "submit"
                    ? { opacity: 0.85, transform: "translateY(-1px)" }
                    : {}),
                }}
                onMouseEnter={() => setHoveredBtn("submit")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          {/* TODO: reemplazar con logo real */}
          <span style={styles.footerLogo}>🛂 PassportAI</span>
          <ul style={styles.footerLinks}>
            {[
              { label: "Características", id: "features" },
              { label: "Modelos IA", id: "models" },
              { label: "Precios", id: "pricing" },
              { label: "Contacto", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <span
                  style={styles.footerLink}
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
                >
                  {item.label}
                </span>
              </li>
            ))}
            {/* TODO: agregar links reales a términos y privacidad */}
            <li>
              <a href="/terms" style={styles.footerLink}
                onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
              >
                Términos
              </a>
            </li>
            <li>
              <a href="/privacy" style={styles.footerLink}
                onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
              >
                Privacidad
              </a>
            </li>
          </ul>
          <p style={styles.footerCopy}>
            © {new Date().getFullYear()} Central Passport AI — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}