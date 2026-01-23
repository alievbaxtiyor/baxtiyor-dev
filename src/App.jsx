import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';

function App() {
  const projects = [
    {
      id: 1,
      title: "NajmAI",
      description: "SaaS Framer Template",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "Damas",
      description: "Free Framer Template",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Bayt",
      description: "Real Estate Framer Template",
      image: "/images/project3.jpg"
    }
  ];

  const experiences = [
    {
      id: 1,
      company: "PixelForge Studios",
      description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
      date: "Jan 2020 - Present"
    },
    {
      id: 2,
      company: "BlueWave Innovators",
      description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
      date: "Jun 2017 - Dec 2019"
    },
    {
      id: 3,
      company: "TrendCraft Solutions",
      description: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
      date: "Mar 2015 - May 2017"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Starting and Growing a Career in Web Design",
      description: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
      date: "Apr 8, 2022",
      readTime: "6min read"
    },
    {
      id: 2,
      title: "Create a Landing Page That Performs Great",
      description: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
      date: "Mar 15, 2022",
      readTime: "6min read"
    },
    {
      id: 3,
      title: "How Can Designers Prepare for the Future?",
      description: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
      date: "Feb 28, 2022",
      readTime: "6min read"
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header-spacer"></div>
        <Navbar />
      </header>
      <section className="hero">
        <div className="hero-left">
          <Card
            name="Aliyev Baxtiyor"
            description="A Software Engineer who has developed countless innovative solutions."
            image="/images/hero.JPG"
          />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            <span className="title-solid">SOFTWARE</span>
            <span className="title-outline">ENGINEER</span>
          </h1>
          <p className="hero-description">
            Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">+3</span>
              <span className="stat-label">YEARS OF<br/>EXPERIENCE</span>
            </div>
            <div className="stat">
              <span className="stat-number">+10</span>
              <span className="stat-label">PROJECTS<br/>COMPLETED</span>
            </div>
            <div className="stat">
              <span className="stat-number">+5</span>
              <span className="stat-label">WORLDWIDE<br/>CLIENTS</span>
            </div>
          </div>
          <div className="hero-skills">
            <div className="skill-card">
              <i className="fi fi-rr-layers"></i>
              <h3>DYNAMIC ANIMATION,<br/>MOTION DESIGN</h3>
            </div>
            <div className="skill-card skill-card-alt">
              <h3>FRAMER, FIGMA,<br/>WORDPRESS, REACTJS</h3>
            </div>
          </div>

          <div className="projects">
            <h2 className="section-title">
              <span className="title-solid">RECENT</span>
              <span className="title-outline">PROJECTS</span>
            </h2>
            <div className="projects-list">
              {projects.map((project) => (
                <a href="#" className="project-item" key={project.id}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                  </div>
                  <i className="fi fi-rr-arrow-up-right project-arrow"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="experience">
            <h2 className="section-title">
              <span className="title-solid">3 YEARS OF</span>
              <span className="title-outline">EXPERIENCE</span>
            </h2>
            <div className="experience-list">
              {experiences.map((exp) => (
                <div className="experience-item" key={exp.id}>
                  <div className="experience-info">
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-desc">{exp.description}</p>
                    <span className="experience-date">{exp.date}</span>
                  </div>
                  <i className="fi fi-rr-arrow-up-right experience-arrow"></i>
                </div>
              ))}
            </div>
          </div>

          <div className="tools">
            <h2 className="section-title section-title-center">
              <span className="title-solid">PREMIUM</span>
              <span className="title-outline">TOOLS</span>
            </h2>
            <div className="tools-grid">
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-brands-figma"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Figma</h3>
                  <p className="tool-desc">Design Tool</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-rr-browser"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Framer</h3>
                  <p className="tool-desc">Website Builder</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-rr-comment-alt"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">ChatGPT</h3>
                  <p className="tool-desc">AI Assistant</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-rr-document"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Notion</h3>
                  <p className="tool-desc">Productivity Tool</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-rr-code-simple"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">VS Code</h3>
                  <p className="tool-desc">Code Editor</p>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon">
                  <i className="fi fi-rr-arrow-right"></i>
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">Next.js</h3>
                  <p className="tool-desc">React Framework</p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog">
            <h2 className="section-title section-title-center">
              <span className="title-solid">DESIGN</span>
              <span className="title-outline">THOUGHTS</span>
            </h2>
            <div className="blog-list">
              {articles.map((article) => (
                <a href="#" className="blog-item" key={article.id}>
                  <div className="blog-content">
                    <h3 className="blog-title">{article.title}</h3>
                    <p className="blog-desc">{article.description}</p>
                    <div className="blog-meta">
                      <span className="blog-date">{article.date}</span>
                      <span className="blog-read">{article.readTime}</span>
                    </div>
                  </div>
                  <i className="fi fi-rr-arrow-up-right blog-arrow"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact">
            <h2 className="section-title section-title-center">
              <span className="title-solid">LET'S WORK</span>
              <span className="title-outline">TOGETHER</span>
            </h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget</label>
                <select id="budget">
                  <option value="">Select...</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Message" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
