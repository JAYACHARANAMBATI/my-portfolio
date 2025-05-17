import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaChalkboardTeacher, FaMicrophoneAlt, FaCode, FaUsers, FaTasks, FaLightbulb, FaUniversity, FaSchool, FaBriefcase, FaLaptopCode, FaReact, FaTools, FaBullseye, FaComments, FaPhone, FaArrowUp } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowBackToTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      sectionRefs.current[section.id] = section;
    });

    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0, // Trigger if any part is visible (adjust if needed)
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const scrollAnimationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // entry.target.classList.remove('visible'); // Optional: remove for re-animation
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      sectionObserver.observe(section);
      scrollAnimationObserver.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        sectionObserver.unobserve(section);
        scrollAnimationObserver.unobserve(section);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="gradient-text">AMBATI JAYA CHARAN</h1>
        <div className="links">
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#interests" className={activeSection === 'interests' ? 'active' : ''}>Interests</a> 
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </nav>

      <header className="header">
        <div className="home-content">
          <div className="text-content">
            <h1 className="name gradient-text">Ambati Jaya Charan</h1>
            <p className="title gradient-text">
              Tech Enthusiast | Frontend Developer | Generative AI Engineer
            </p>
            <p className="description gradient-text">
              Creating innovative solutions through code and design
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/JAYACHARANAMBATI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/ambati-jaya-charan-901052254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
              <a href="mailto:ambatijayacharan18@gmail.com">
                <FaEnvelope className="icon" />
              </a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dzc70c3lw/image/upload/v1747502112/1711743254380_w86f5m.jpg"
              alt="Ambati Jaya Charan"
              className="profile-image"
            />
          </div>
        </div>
      </header>

      <section id="education">
        <h2 className="gradient-text">Education</h2>
        <div className="education-entry-grid">
          <div className="education-entry">
            <FaUniversity className="education-icon" />
            <div>
              <h3 className="gradient-text">Kalasalingam Academy of Research and Education</h3>
              <p>B.Tech in Computer Science and Engineering</p>
              <p>CGPA – 8.01/10.0 (2022 - present)</p>
            </div>
          </div>
          <div className="education-entry">
            <FaSchool className="education-icon" />
            <div>
              <h3 className="gradient-text">Sri Sarada Junior College, Vijayawada</h3>
              <p>Pre-University Course</p>
              <p>Percentage: 79% (2020 - 2022)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="gradient-text">Skills Summary</h2>
        <div className="skills-grid">
          <div className="skill-category-card">
            <div className="skill-category-header">
              <FaLaptopCode className="skill-category-icon" />
              <h3 className="gradient-text">Languages</h3>
            </div>
            <div className="skills-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">JAVA</span>
            </div>
          </div>

          <div className="skill-category-card">
            <div className="skill-category-header">
              <FaReact className="skill-category-icon" />
              <h3 className="gradient-text">Frameworks</h3>
            </div>
            <div className="skills-tags">
              <span className="skill-tag">Streamlit</span>
              <span className="skill-tag">LangChain</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">Numpy</span>
              <span className="skill-tag">React (three.js)</span>
              <span className="skill-tag">Flutter</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Hugging Face</span>
              <span className="skill-tag">Transformers</span>
            </div>
          </div>

          <div className="skill-category-card">
            <div className="skill-category-header">
              <FaTools className="skill-category-icon" />
              <h3 className="gradient-text">Tools</h3>
            </div>
            <div className="skills-tags">
              <span className="skill-tag">Power BI</span>
              <span className="skill-tag">Excel</span>
              <span className="skill-tag">PowerPoint</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Chroma DB</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>

          <div className="skill-category-card">
            <div className="skill-category-header">
              <FaBullseye className="skill-category-icon" />
              <h3 className="gradient-text">Areas of Interest</h3>
            </div>
            <div className="skills-tags">
              <span className="skill-tag">Generative AI</span>
              <span className="skill-tag">Python & Web Apps</span>
              <span className="skill-tag">DSA</span>
            </div>
          </div>

          <div className="skill-category-card">
            <div className="skill-category-header">
              <FaComments className="skill-category-icon" />
              <h3 className="gradient-text">Soft Skills</h3>
            </div>
            <div className="skills-tags">
              <span className="skill-tag">Rapport Building</span>
              <span className="skill-tag">Stakeholder & People Management</span>
              <span className="skill-tag">Communication</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2 className="gradient-text">Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div className="experience-content">
              <h3 className="gradient-text">Research Student | Multicore Wave (MCW)</h3>
              <span className="experience-date">Aug 23 - Dec 24</span>
              <ul>
                <li>Worked on creating an image dataset, collecting and annotating 50,000+ images using LabelStudio</li>
                <li>Performed data preprocessing to enhance model performance</li>
                <li>Gained hands-on experience with ROS2 and SLAM, completing robotic mapping and localization crash courses</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div className="experience-content">
              <h3 className="gradient-text">Co-Treasurer | KARE IEEE Robotics & Automation Society</h3>
              <span className="experience-date">Dec 2024 – Present</span>
              <ul>
                <li>Responsible for financial planning, budgeting, and expense tracking for society-led events</li>
                <li>Collaborated with the executive team to manage funding and resource allocation</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <FaBriefcase className="experience-icon" />
            <div className="experience-content">
              <h3 className="gradient-text">Open Source Framework Lead | KARE Open-Source Society (KARE – OSS)</h3>
              <span className="experience-date">July 2024 – Present</span>
              <ul>
                <li>Spearheading development and optimization of open-source frameworks</li>
                <li>Cultivating partnerships with industry leaders for technology integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="interests">
        <h2 className="gradient-text">Interests</h2>
        <ul className="interests-list">
          <li><FaChalkboardTeacher className="interest-icon" /> Mentoring</li>
          <li><FaMicrophoneAlt className="interest-icon" /> Public Speaking</li>
          <li><FaCode className="interest-icon" /> Coding</li>
          <li><FaUsers className="interest-icon" /> Leadership</li>
          <li><FaTasks className="interest-icon" /> Organizing</li>
          <li><FaLightbulb className="interest-icon" /> Learning</li>
        </ul>
      </section>

      <section id="projects">
        <h2 className="gradient-text">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="gradient-text">Eco-Friendly Milk Packaging Website</h3>
            <p>Pure Seal is a modern, responsive website designed to promote eco-friendly milk pouch packaging. Built with the latest frontend technologies, it highlights the product's features, showcases the brand's identity, and includes an interactive contact form integrated with an email service.</p>
            <a href="https://pure-seal.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="gradient-text">FoamEase – Pen Sanitizer</h3>
            <p>FoamEase is a modern and interactive React-based e-commerce website for a pen sanitizer product. It features a 3D product view, smooth animations, and a fully functional shopping cart, all built with performance and user experience in mind.</p>
            <a href="https://foam-ease-site.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="gradient-text">FashionFits - E-commerce Web App</h3>
            <p>FashionFits is a modern, responsive fashion e-commerce web application built using React and Vite, designed to deliver a seamless shopping experience with Firebase Authentication and dynamic product browsing features.</p>
            <a href="https://fashion-fits-ten.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="gradient-text">NPTEL Quiz Game – One Health Exam Practice</h3>
            <p>This is a practice quiz web application designed to help students prepare for the NPTEL One Health exam.</p>
            <a href="https://nptel-quiz-game.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="gradient-text">AI-Powered Applications </h3>
            <p>This project showcases two powerful applications built with LangChain, Streamlit, and Google's Gemini 1.5 Pro model. The applications demonstrate how large language models (LLMs) can be integrated into practical tools for different domains—conversational AI and career enhancement.</p>
            <a href="https://resume-j17r.onrender.com/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
        <div className="github-link">
          <a href="https://github.com/JAYACHARANAMBATI?tab=repositories" target="_blank" rel="noopener noreferrer">
            For more projects, visit my GitHub
          </a>
        </div>
      </section>

      <section id="contact">
        <h2 className="gradient-text">Contact</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <h4>Email</h4>
              <a href="mailto:ambatijayacharan18@gmail.com">ambatijayacharan18@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-details">
              <h4>Phone</h4>
              <p>+91 9640179624</p>
            </div>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/ambati-jaya-charan-901052254/" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <div className="contact-details">
              <h4>GitHub</h4>
              <a href="https://github.com/jayacharanambati" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p className="gradient-text">
          © 2025 Ambati Jaya Charan. All rights reserved.
        </p>
      </footer>

      {showBackToTop && (
        <button onClick={scrollToTop} className="back-to-top-button" title="Back to Top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default App;
