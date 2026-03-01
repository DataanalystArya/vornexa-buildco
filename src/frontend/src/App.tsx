import {
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Compass,
  Facebook,
  Gem,
  Home,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Twitter,
  Wrench,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useActor } from "./hooks/useActor";

/* =========================================
   SEO META TAGS
   ========================================= */
function useMetaTags() {
  useEffect(() => {
    document.title = "Vornexa BuildCo | Premium Construction & Interior Design";

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Vornexa BuildCo delivers premium residential, commercial, and luxury interior projects with unmatched quality, innovation, and trust. 10+ years of excellence.",
    );
    setOg(
      "og:title",
      "Vornexa BuildCo | Premium Construction & Interior Design",
    );
    setOg(
      "og:description",
      "Premium residential, commercial, and luxury interior projects with unmatched quality and innovation.",
    );
    setOg("og:type", "website");
    setMeta("twitter:card", "summary_large_image");
    setMeta(
      "twitter:title",
      "Vornexa BuildCo | Premium Construction & Interior Design",
    );
    setMeta(
      "twitter:description",
      "Premium residential, commercial, and luxury interior projects.",
    );
  }, []);
}

/* =========================================
   SCROLL REVEAL HOOK
   ========================================= */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  });
}

/* =========================================
   SCROLL HELPER
   ========================================= */
function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

/* =========================================
   NAVIGATION
   ========================================= */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const handleMobileNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => scrollTo(href), 10);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group"
            aria-label="Vornexa BuildCo Home"
          >
            <span className="text-gold font-display font-black text-xl tracking-tight leading-none">
              VORNEXA
            </span>
            <span className="text-white font-display font-light text-xl tracking-[0.15em] leading-none">
              BUILDCO
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold text-sm font-medium tracking-wider transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold text-navy font-display font-bold text-sm px-5 py-2.5 tracking-wide hover:bg-gold-dark transition-colors duration-200"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-navy border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleMobileNavClick(link.href)}
              className="text-white/80 hover:text-gold text-sm font-medium tracking-wider uppercase py-1 transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleMobileNavClick("#contact")}
            className="bg-gold text-navy font-display font-bold text-sm px-5 py-3 text-center tracking-wide mt-2"
          >
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

/* =========================================
   HERO SECTION
   ========================================= */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-construction.dim_1920x1080.jpg"
          alt="Vornexa BuildCo premium construction project"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-navy/75" />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="hero-fade hero-fade-delay-1 inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
            Premium Construction & Design
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>

        {/* Main Heading */}
        <h1 className="hero-fade hero-fade-delay-2 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-black leading-[0.95] tracking-tight mb-6">
          Building Excellence.
          <br />
          <span className="text-gold">Designing</span> the Future.
        </h1>

        {/* Subheading */}
        <p className="hero-fade hero-fade-delay-3 text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Vornexa BuildCo delivers premium residential, commercial, and luxury
          interior projects with unmatched quality, innovation, and trust.
        </p>

        {/* Buttons */}
        <div className="hero-fade hero-fade-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-gold text-navy font-display font-bold px-8 py-4 text-sm tracking-wider hover:bg-gold-dark transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            View Projects
            <ChevronRight size={16} />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border-2 border-gold text-gold font-display font-bold px-8 py-4 text-sm tracking-wider hover:bg-gold hover:text-navy transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}

/* =========================================
   ABOUT US SECTION
   ========================================= */
function AboutSection() {
  return (
    <section id="about" className="bg-section-grey py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-navy font-black mb-6 leading-tight">
              A Decade of{" "}
              <span className="relative inline-block">
                Excellence
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gold" />
              </span>
            </h2>
            <p className="reveal reveal-delay-2 text-navy/70 text-lg leading-relaxed mb-8">
              With over 10 years of excellence in construction and interior
              design, Vornexa BuildCo has become a trusted name in delivering
              transformative spaces. We combine cutting-edge technology, premium
              materials, and visionary design to exceed client expectations at
              every turn.
            </p>
            <div className="reveal reveal-delay-3 grid grid-cols-1 gap-6">
              <div className="border-l-4 border-gold pl-5">
                <h3 className="font-display font-bold text-navy text-sm tracking-widest uppercase mb-1">
                  Our Mission
                </h3>
                <p className="text-navy/70">
                  To build lasting structures that inspire and endure for
                  generations to come.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-5">
                <h3 className="font-display font-bold text-navy text-sm tracking-widest uppercase mb-1">
                  Our Vision
                </h3>
                <p className="text-navy/70">
                  To be the most trusted construction and design firm in the
                  region, setting new standards of quality.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Skilled Professionals" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-delay-${i + 1} bg-navy rounded-sm p-8 flex flex-col items-center justify-center text-center aspect-square shadow-card`}
              >
                <span className="font-display text-4xl lg:text-5xl text-gold font-black mb-2">
                  {stat.number}
                </span>
                <span className="text-white/70 text-sm font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SERVICES SECTION
   ========================================= */
const services = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Building dream homes with precision, care, and enduring quality materials.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Delivering large-scale commercial spaces on time and within budget.",
  },
  {
    icon: Gem,
    title: "Luxury Interiors",
    desc: "Crafting bespoke interiors of unparalleled elegance and refinement.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Breathing new life into existing structures with expert renovation.",
  },
  {
    icon: Compass,
    title: "Architectural Planning",
    desc: "From concept to blueprint with expert precision and creative vision.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "End-to-end oversight ensuring seamless delivery from start to finish.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              What We Do
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-navy font-black">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-white border border-border rounded-sm p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                <div className="w-12 h-12 bg-section-grey rounded-sm flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-navy group-hover:text-navy transition-colors duration-300"
                  />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   WHY CHOOSE US
   ========================================= */
const whyUs = [
  {
    title: "On-Time Delivery",
    desc: "We honor every deadline with rigorous project scheduling and accountability.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs — detailed quotes and full financial visibility throughout.",
  },
  {
    title: "Skilled Engineers & Designers",
    desc: "Our team brings decades of combined expertise across every discipline.",
  },
  {
    title: "Premium Quality Materials",
    desc: "We source only the finest materials to ensure lasting results.",
  },
  {
    title: "100% Client Satisfaction",
    desc: "Our track record speaks for itself — we don't rest until you're thrilled.",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Our Advantage
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-white font-black">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyUs.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} text-center group`}
            >
              <div className="w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors duration-300">
                <CheckCircle2
                  size={20}
                  className="text-gold group-hover:text-navy transition-colors duration-300"
                />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FEATURED PROJECTS
   ========================================= */
type ProjectCategory = "All" | "Residential" | "Commercial" | "Interior";

const projects = [
  {
    image: "/assets/generated/project-residential.dim_800x600.jpg",
    title: "Oakridge Villa",
    category: "Residential" as ProjectCategory,
    area: "8,400 sq ft",
  },
  {
    image: "/assets/generated/project-commercial.dim_800x600.jpg",
    title: "Nexus Tower",
    category: "Commercial" as ProjectCategory,
    area: "120,000 sq ft",
  },
  {
    image: "/assets/generated/project-interior.dim_800x600.jpg",
    title: "Sapphire Penthouse",
    category: "Interior" as ProjectCategory,
    area: "5,200 sq ft",
  },
  {
    image: "/assets/generated/project-renovation.dim_800x600.jpg",
    title: "Grand Hotel Lobby",
    category: "Interior" as ProjectCategory,
    area: "12,000 sq ft",
  },
  {
    image: "/assets/generated/project-planning.dim_800x600.jpg",
    title: "City Centre Complex",
    category: "Commercial" as ProjectCategory,
    area: "85,000 sq ft",
  },
  {
    image: "/assets/generated/project-residential.dim_800x600.jpg",
    title: "Elmwood Residences",
    category: "Residential" as ProjectCategory,
    area: "6,800 sq ft",
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
];

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Our Portfolio
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-navy font-black mb-8">
            Featured Projects
          </h2>

          {/* Filter Tabs */}
          <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-sm font-medium tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-section-grey text-navy/60 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={`${project.title}-${activeCategory}`}
              className="project-card relative overflow-hidden rounded-sm shadow-card group cursor-pointer"
            >
              <div className="aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} project by Vornexa BuildCo`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 tracking-wider">
                {project.category}
              </div>
              {/* Hover overlay */}
              <div className="project-overlay absolute inset-x-0 bottom-0 bg-navy/92 p-6">
                <h3 className="font-display font-bold text-gold text-xl mb-1">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">{project.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   PROCESS SECTION
   ========================================= */
const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We listen to your vision, goals, and requirements in a detailed discovery session.",
  },
  {
    number: "02",
    title: "Planning & Design",
    desc: "Blueprints, 3D renders, and material selection tailored to your brief.",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Our skilled team brings your project to life with precision and care.",
  },
  {
    number: "04",
    title: "Delivery",
    desc: "Final walkthrough and handover with complete documentation and support.",
  },
];

function ProcessSection() {
  return (
    <section id="process" className="bg-section-grey py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              How We Work
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-navy font-black">
            Our Process
          </h2>
        </div>

        {/* Steps — horizontal on desktop */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-gold/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} relative text-center`}
              >
                {/* Circle */}
                <div className="w-[5.5rem] h-[5.5rem] bg-gold rounded-full flex items-center justify-center mx-auto mb-5 shadow-gold relative z-10">
                  <span className="font-display font-black text-navy text-xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   TESTIMONIALS
   ========================================= */
const testimonials = [
  {
    quote:
      "Vornexa BuildCo transformed our office into a world-class space. Delivered on time and beyond expectations.",
    name: "Sarah Mitchell",
    title: "CEO, Mitchell Corp",
    initials: "SM",
  },
  {
    quote:
      "The attention to detail in our home renovation was extraordinary. Truly a premium experience from start to finish.",
    name: "James Thornton",
    title: "Homeowner",
    initials: "JT",
  },
  {
    quote:
      "Professional, transparent, and incredibly skilled. Our commercial project was handled flawlessly.",
    name: "David Chen",
    title: "Director, Chen Enterprises",
    initials: "DC",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Client Stories
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-white font-black">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} bg-navy-light border-t-2 border-gold rounded-sm p-8 shadow-card`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <Star key={k} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-navy text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-white/50 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   STATISTICS
   ========================================= */
const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Skilled Professionals" },
  { number: "10+", label: "Years Experience" },
];

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gold py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${visible ? "counter-animate" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-display text-5xl lg:text-6xl font-black text-navy mb-2">
                {stat.number}
              </div>
              <div className="text-navy/70 font-medium text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   CALL TO ACTION
   ========================================= */
function CtaSection() {
  return (
    <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -left-24 -top-24 w-64 h-64 border border-gold/10 rounded-full" />
      <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-gold/10 rounded-full" />
      <div className="absolute right-32 top-8 w-24 h-24 border border-gold/20 rounded-full" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-px bg-gold" />
          <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
            Take the Next Step
          </span>
          <span className="w-10 h-px bg-gold" />
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-6xl text-white font-black mb-5 leading-tight">
          Ready to Build Your
          <br />
          <span className="text-gold">Dream Project?</span>
        </h2>
        <p className="reveal reveal-delay-2 text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s turn your vision into reality. Our team is ready to guide
          you every step of the way.
        </p>
        <a
          href="#contact"
          className="reveal reveal-delay-3 inline-flex items-center gap-2 bg-gold text-navy font-display font-bold px-10 py-5 text-base tracking-wider hover:bg-gold-dark transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
        >
          Contact Us Today
          <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}

/* =========================================
   CONTACT SECTION
   ========================================= */
interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = useCallback((): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) errs.phone = "Phone is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    if (!actor) return;

    setLoading(true);
    try {
      await actor.submitContact(
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-section-grey border border-border px-4 py-3 text-navy placeholder-navy/40 text-sm focus:outline-none focus:border-gold transition-colors duration-200";
  const labelClass =
    "block text-navy/70 text-xs font-medium tracking-wider uppercase mb-1.5";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Let&apos;s Connect
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-navy font-black">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <div className="reveal">
            <h3 className="font-display font-bold text-navy text-2xl mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-navy/50 text-xs uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="text-navy font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-navy/50 text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-navy font-medium">
                    info@vornexabuildco.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-navy/50 text-xs uppercase tracking-widest mb-1">
                    Address
                  </p>
                  <p className="text-navy font-medium">
                    123 Construction Ave, Business District
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-display font-bold px-6 py-3 text-sm tracking-wider hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="mt-8 bg-section-grey h-48 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin size={24} className="text-gold mx-auto mb-2" />
                <p className="text-navy/40 text-sm">
                  123 Construction Ave, Business District
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-2">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-section-grey">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} className="text-navy" />
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-3">
                  Message Sent!
                </h3>
                <p className="text-navy/60 max-w-xs">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-gold text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="John Doe"
                    className={inputClass}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className={errorClass} role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="john@example.com"
                    className={inputClass}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className={errorClass} role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className={errorClass} role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className={errorClass} role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navy text-white font-display font-bold py-4 text-sm tracking-wider hover:bg-gold hover:text-navy transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FOOTER
   ========================================= */
function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    "Residential Construction",
    "Commercial Construction",
    "Luxury Interiors",
    "Renovation & Remodeling",
    "Architectural Planning",
  ];

  const socialLinks = [
    { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-navy">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-gold font-display font-black text-lg tracking-tight">
                VORNEXA
              </span>
              <span className="text-white font-display font-light text-lg tracking-[0.1em]">
                BUILDCO
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Building Excellence. Designing the Future.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRight size={12} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRight size={12} />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  info@vornexabuildco.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  123 Construction Ave,
                  <br />
                  Business District
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gold/30" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-sm">
          © {year} Vornexa BuildCo. All Rights Reserved.
        </p>
        <p className="text-white/30 text-xs">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/60 hover:text-gold transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

/* =========================================
   APP ROOT
   ========================================= */
export default function App() {
  useMetaTags();
  useScrollReveal();

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <StatsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
