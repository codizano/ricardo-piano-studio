import { useState } from "react";
import profileImage from "./assets/profile.png";
import estudioImage from "./assets/estudio.png";
import recitalImage from "./assets/recital.jpg";
import compartiendoImage from "./assets/compartiendo.jpg";
import ritmoImage from "./assets/ritmo.jpg";

const WHATSAPP_URL = "https://wa.me/573133741678";

const testimonials = [
  {
    quote:
      "Las clases han permitido que mi hijo avance mucho más rápido y, sobre todo, que disfrute cada vez más tocar piano.",
    author: "Madre de estudiante",
  },
  {
    quote:
      "Me gusta que cada clase tiene un objetivo claro y que el repertorio se adapta a lo que realmente quiero aprender.",
    author: "Estudiante adulto",
  },
  {
    quote:
      "La metodología combina técnica y música de una manera muy natural. Mi hija está mucho más motivada para practicar.",
    author: "Padre de estudiante",
  },
];

const faqItems = [
  {
    question: "¿Necesito tener conocimientos previos para empezar clases de piano?",
    answer:
      "No. Las clases están dirigidas tanto a personas que comienzan desde cero como a estudiantes que ya tienen experiencia. El contenido se adapta al nivel y objetivos de cada alumno.",
  },
  {
    question: "¿A qué edad se puede empezar a estudiar piano?",
    answer:
      "Se puede comenzar desde edades tempranas y también en la adolescencia o adultez. Lo importante es adaptar la metodología, el repertorio y los objetivos a cada estudiante.",
  },
  {
    question: "¿Qué voy a aprender en las clases de piano?",
    answer:
      "Además de aprender canciones, se trabajan aspectos fundamentales como técnica pianística, lectura musical, teoría, postura, coordinación y expresión musical, buscando que el estudiante desarrolle una formación sólida.",
  },
  {
    question: "¿Necesito tener un piano en casa para tomar clases?",
    answer:
      "Lo ideal es contar con un instrumento para practicar entre clases, pero no necesariamente tiene que ser un piano acústico. Un piano digital con teclas contrapesadas puede ser una excelente alternativa para estudiar en casa.",
  },
  {
    question: "¿Cuánto cuesta una clase y cómo puedo probarla?",
    answer:
      "El plan mensual incluye 4 clases y cada sesión tiene un valor de $38.750 COP. Es decir, el paquete completo queda en $155.000 COP al mes. Además, puedes solicitar una primera clase gratuita para conocer la metodología y resolver tus dudas antes de comenzar.",
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <AboutTeacher />
        <Pricing />
        <Gallery />
        <Testimonials />
        <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="#inicio" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">♬</span>
        <span>pianohora</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Navegación principal">
        <a href="#metodologia" onClick={closeMenu}>Metodología</a>
        <a href="#profesor" onClick={closeMenu}>Profesor</a>
        <a href="#clases" onClick={closeMenu}>Clases</a>
        <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
        <a href="#faq" onClick={closeMenu}>Preguntas</a>
        <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
          <span>Empieza tu primera</span>
          <span>lección gratuita</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-piano-shape" />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">Lic. Ricardo Otálora Luna</p>
        <h1>Aprende piano.<br />Desarrolla tu musicalidad.</h1>
        <p className="hero-subtitle">
          Clases de piano personalizadas para niños, jóvenes y adultos.
        </p>
        <a className="button button--light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Solicitar clase de prueba
        </a>
      </div>
    </section>
  );
}

function ValueProposition() {
  return (
    <section className="section section--value" id="metodologia">
      <div className="container split-value">
        <div>
          <p className="eyebrow">METODOLOGÍA</p>
          <h2>Formación pianística personalizada.</h2>
        </div>
        <div className="value-card">
          <span className="quote-mark">“</span>
          <p>
            Técnica, lectura musical, teoría, postura, coordinación y repertorio
            adaptados al nivel y objetivos de cada estudiante.
          </p>
          <span className="card-line" />
        </div>
      </div>
    </section>
  );
}

function AboutTeacher() {
  return (
    <section className="section" id="profesor">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">EL PROFESOR</p>
          <h2>Una formación musical con propósito.</h2>
        </div>

        <div className="teacher-card">
          <div className="portrait-frame">
            <img
              className="portrait-image"
              src={profileImage}
              alt="Fotografía de Ricardo Otálora"
            />
          </div>
          <div className="teacher-copy">
            <p className="teacher-kicker">RICARDO OTÁLORA</p>
            <h3>Licenciado en Música — Ejecución Instrumental, Piano</h3>
            <p>
              Soy profesor de piano y mi objetivo es acompañar a cada estudiante
              en un proceso de aprendizaje musical personalizado, desarrollando
              no solamente la capacidad de tocar canciones, sino también una
              comprensión sólida del instrumento y de la música.
            </p>
            <a className="button button--dark" href="#clases">Conocer las clases</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section section--soft" id="clases">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">PLANES MENSUALES</p>
          <h2>Una formación diseñada alrededor de cada estudiante.</h2>
        </div>

        <div className="pricing-grid">
          {/* PLAN REGULAR */}
          <article className="price-card price-card--regular">
            <div className="price-top">
              <span className="price-label">Plan Regular</span>
              <p className="price-subtitle">Progreso constante</p>
              <p className="price-description">
                Ideal para quienes buscan una formación sólida y constante.
              </p>
              <div className="price">
                <strong>$155.000</strong>
                <span>COP / mes</span>
              </div>
            </div>

            <div className="price-details">
              <p><span>✓</span> 1 clase por semana (4 clases al mes)</p>
              <p><span>✓</span> 50 minutos por sesión</p>
              <p><span>✓</span> Horario fijo y reservado</p>
              <p><span>✓</span> Material de apoyo digital (partituras, ejercicios)</p>
              <p><span>✓</span> Seguimiento personalizado de tu progreso</p>
            </div>

            <a 
              className="button button--dark" 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noreferrer"
            >
              Elegir este plan
            </a>
          </article>

          {/* PLAN INTENSIVO */}
          <article className="price-card price-card--intensive price-card--featured">
            <div className="price-badge">Más intensivo</div>
            <div className="price-top">
              <span className="price-label">Plan Intensivo</span>
              <p className="price-subtitle">Aprendizaje acelerado</p>
              <p className="price-description">
                Diseñado para lograr metas en menor tiempo mediante la inmersión musical.
              </p>
              <div className="price">
                <strong>$299.000</strong>
                <span>COP / mes</span>
              </div>
            </div>

            <div className="price-details">
              <p><span>✓</span> 2 clases por semana (8 clases al mes)</p>
              <p><span>✓</span> 50 minutos por sesión</p>
              <p><span>✓</span> Horarios fijos semanales</p>
              <p><span>✓</span> Seguimiento prioritario</p>
              <p><span>✓</span> Feedback más frecuente</p>
              <p><span>✓</span> Repertorio personalizado acelerado</p>
            </div>

            <a 
              className="button button--dark" 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noreferrer"
            >
              Elegir este plan
            </a>
          </article>
        </div>

        {/* Optional: Individual session option */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
            ¿Prefieres clases sueltas? 
            <a href="#clase-individual" style={{ marginLeft: "0.5rem", fontWeight: 600 }}>
              Ver sesión individual
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const gallery = [
    ["Recital", "La música en escena", recitalImage],
    ["Estudio", "Construyendo técnica", estudioImage],
    ["Compartir", "Compartiendo la música", compartiendoImage],
    ["Ritmo", "Cada estudiante, su camino", ritmoImage],
  ];

  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCIA</p>
          <h2>La música también se vive.</h2>
          <p className="section-intro">
            Cada clase es un paso hacia una mayor confianza, expresión y dominio del instrumento.
          </p>
        </div>

        <div className="gallery">
          {gallery.map(([label, title, image], index) => (
            <div className={`gallery-item gallery-item--${index + 1}`} key={title}>
              <div
                className="gallery-placeholder"
                style={
                  image
                    ? {
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.08) 40%, rgba(0, 0, 0, 0.12) 100%), url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: image.includes("ritmo")
                          ? "center 28%"
                          : image.includes("compartiendo")
                            ? "55% 20%"
                            : "center",
                        backgroundRepeat: "no-repeat",
                      }
                    : undefined
                }
              >
                <span>{label}</span>
                <strong>{title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">TESTIMONIOS</p>
          <h2>Lo que dicen nuestros estudiantes.</h2>
        </div>

        <div className="testimonials">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.author}>
              <span className="testimonial-mark">“</span>
              <p>{item.quote}</p>
              <div className="testimonial-author">{item.author}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ openFaq, setOpenFaq }) {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">PREGUNTAS FRECUENTES</p>
          <h2>Resuelve tus dudas antes de comenzar.</h2>
          <p>
            Si tienes alguna otra pregunta, puedes escribir directamente por
            WhatsApp.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-answer" aria-hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta-content">
        <p className="eyebrow">EL PRIMER PASO</p>
        <h2>¿Listo para comenzar a estudiar piano?</h2>
        <p>Da el primer paso y conoce nuestra metodología.</p>
        <a className="button button--gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Empieza tu primera lección gratuita
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-mark" aria-hidden="true">♩</div>
        <h2>Ricardo Piano Studio</h2>
        <span className="footer-line" />
        <p>
          Formación pianística personalizada para niños, jóvenes y adultos.
          <br />
          Técnica, lectura musical, teoría y repertorio adaptados a cada estudiante.
        </p>
        <div className="footer-bottom">© 2026 Ricardo Piano Studio</div>
      </div>
    </footer>
  );
}

export default App;
