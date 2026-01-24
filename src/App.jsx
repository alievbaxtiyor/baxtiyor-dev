import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import { useLanguage } from './context/LanguageContext';
import { t } from './translations';

const TELEGRAM_BOT_TOKEN = '8563304520:AAHLZdSHduFC8gjbh61DgS0hYriBI3xoIXY';
const TELEGRAM_CHAT_ID = '8561864112';

function App() {
  const { language } = useLanguage();
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showAllTools, setShowAllTools] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const text = `📩 New Contact Form Message\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Message: ${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [projectsRef, experienceRef, toolsRef, contactRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "LMS",
      descKey: "lmsProject",
      link: "https://lms.uz",
      icon: "fi fi-rr-graduation-cap"
    },
    {
      id: 2,
      title: "Article",
      descKey: "maqolaProject",
      link: "https://maqola.devedu.uz",
      icon: "fi fi-rr-document"
    },
    {
      id: 3,
      title: "National Platform",
      descKey: "milliyMalakaProject",
      link: "https://uznqf.uz",
      icon: "fi fi-rr-diploma"
    }
  ];

  const experiences = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive web applications using React, Vue.js, and modern JavaScript. Creating reusable components and implementing state management solutions."
    },
    {
      id: 2,
      title: "UI/UX Implementation",
      description: "Translating design mockups into pixel-perfect interfaces. Working with CSS frameworks like Tailwind and Bootstrap to create visually appealing layouts."
    },
    {
      id: 3,
      title: "API Integration",
      description: "Connecting frontend applications with REST APIs and third-party services. Handling data fetching, authentication flows, and error management."
    },
    {
      id: 4,
      title: "AI-Assisted Development",
      description: "Leveraging AI tools effectively for code generation, debugging, and problem-solving. Writing precise prompts to accelerate development workflows."
    },
    {
      id: 5,
      title: "Bug Fixing & Debugging",
      description: "Identifying and resolving complex issues in web applications. Using browser dev tools, console logging, and systematic debugging approaches."
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header-spacer"></div>
        <Navbar />
      </header>
      <section className="hero" id="hero">
        <div className="hero-left">
          <Card
            name={t('cardName', language)}
            description={t('cardDescription', language)}
            image="/images/hero.JPG"
            language={language}
          />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            <span className="title-solid">{t('heroTitle1', language)}</span>
            <span className="title-outline">{t('heroTitle2', language)}</span>
          </h1>
          <p className="hero-description">
            {t('heroDescription', language)}
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">+2</span>
              <span className="stat-label">{t('yearsExperience', language)}<br/>{t('experience', language)}</span>
            </div>
            <div className="stat">
              <span className="stat-number">+10</span>
              <span className="stat-label">{t('projectsCompleted', language)}<br/>{t('completed', language)}</span>
            </div>
            <div className="stat">
              <span className="stat-number">+10</span>
              <span className="stat-label">{t('techStack', language)}<br/>{t('technologies', language)}</span>
            </div>
          </div>
          <div className="hero-skills">
            <div className="skill-card">
              <i className="fi fi-rr-layers"></i>
              <h3>{t('skillCard1Line1', language)}<br/>{t('skillCard1Line2', language)}</h3>
            </div>
            <div className="skill-card skill-card-alt">
              <h3>{t('skillCard2Line1', language)}<br/>{t('skillCard2Line2', language)}</h3>
            </div>
          </div>

          <div className="tools fade-in-section" id="tools" ref={toolsRef}>
            <h2 className="section-title">
              <span className="title-solid">{t('premium', language)}</span>
              <span className="title-outline">{t('tools', language)}</span>
            </h2>
            <div className={`tools-grid ${showAllTools ? 'expanded' : ''}`}>
              <div className="tool-item">
                <div className="tool-icon">
                  <img src="/images/BrandHtml5.svg" alt="HTML" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">HTML</h3>
                  <p className="tool-desc">{t('designTool', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <img src="/images/BrandCss3.svg" alt="CSS" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">CSS</h3>
                  <p className="tool-desc">{t('websiteBuilder', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <img src="/images/Js.svg" alt="JavaScript" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">JavaScript</h3>
                  <p className="tool-desc">{t('aiAssistant', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <img src="/images/Vuejs.svg" alt="Vue.js" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Vue.js</h3>
                  <p className="tool-desc">{t('productivityTool', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <img src="/images/React.svg" alt="React" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">React</h3>
                  <p className="tool-desc">{t('codeEditor', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <img src="/images/BrandGit.svg" alt="Git" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Git</h3>
                  <p className="tool-desc">{t('reactFramework', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-brands-typescript"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">TypeScript</h3>
                  <p className="tool-desc">{t('typescriptTool', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-rr-brain"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Prompt Engineering</h3>
                  <p className="tool-desc">{t('aiTool', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-brands-bootstrap"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Bootstrap</h3>
                  <p className="tool-desc">{t('bootstrapTool', language)}</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <img src="/images/BrandTailwind.svg" alt="Tailwind" />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Tailwind</h3>
                  <p className="tool-desc">{t('tailwindTool', language)}</p>
                </div>
              </div>
            </div>
            <button
              className="tools-toggle"
              onClick={() => setShowAllTools(!showAllTools)}
            >
              <i className={`fi ${showAllTools ? 'fi-rr-angle-up' : 'fi-rr-angle-down'}`}></i>
            </button>
          </div>

          <div className="projects fade-in-section" id="projects" ref={projectsRef}>
            <h2 className="section-title">
              <span className="title-solid">{t('recentProjects', language)}</span>
              <span className="title-outline">{t('projects', language)}</span>
            </h2>
            <div className="projects-list">
              {projects.map((project) => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-item" key={project.id}>
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-desc">{t(project.descKey, language)}</p>
                  </div>
                  <i className="fi fi-rr-arrow-up-right project-arrow"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="experience fade-in-section" id="experience" ref={experienceRef}>
            <h2 className="section-title">
              <span className="title-solid">{t('yearsOf', language)}</span>
              <span className="title-outline">{t('experienceTitle', language)}</span>
            </h2>
            <div className="experience-list">
              {experiences.map((exp) => (
                <div className="experience-item" key={exp.id}>
                  <div className="experience-info">
                    <h3 className="experience-company">{exp.title}</h3>
                    <p className="experience-desc">{exp.description}</p>
                  </div>
                  <i className="fi fi-rr-arrow-up-right experience-arrow"></i>
                </div>
              ))}
            </div>
          </div>

          <div className="contact fade-in-section" id="contact" ref={contactRef}>
            <h2 className="section-title">
              <span className="title-solid">{t('letsWork', language)}</span>
              <span className="title-outline">{t('together', language)}</span>
            </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('name', language)}</label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t('yourName', language)}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('emailLabel', language)}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('yourEmail', language)}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('message', language)}</label>
                <textarea
                  id="message"
                  placeholder={t('message', language)}
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? t('sending', language) : t('submit', language)}
              </button>
              {submitStatus === 'success' && (
                <p className="form-status success">{t('messageSent', language)}</p>
              )}
              {submitStatus === 'error' && (
                <p className="form-status error">{t('messageError', language)}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
