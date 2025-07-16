import { motion } from "framer-motion";
import { 
  Code, 
  MessageSquare, 
  Scale, 
  Cloud, 
  ChefHat,
  Linkedin,
  Github,
  Twitter,
  Mail,
  Menu,
  X,
  Terminal,
  Cpu,
  Binary
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const projects = [
  {
    icon: MessageSquare,
    title: "AI Debate Platform",
    subtitle: "LangChain & LLMs",
    description: "🔮 A debate platform powered by LangChain & LLMs, integrating models like GPT, Claude, Gemini, and Mistral for multi-round AI argument simulation and judging.",
    emoji: "🔮",
    github: "https://github.com/SavukarVritika/AI_Debat_Platform"
  },
  {
    icon: Scale,
    title: "Traffic Law Prediction and Outcome Forecasting",
    subtitle: "ML/NLP",
    description: "⚖️ An ML/NLP model that predicts applicable laws and outcomes from legal case facts using TF-IDF and KNN for accurate legal analysis.",
    emoji: "⚖️",
    github: "https://github.com/SavukarVritika/law-prediction-outcome-forcesting"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Image Recognition",
    subtitle: "GCP, AutoML, Vision AI, Cloud Run, Firebase",
    description: "🧠 The Cloud-Based Image Recognition System is a full-stack web application designed to allow users to upload images through a browser and receive real-time classification results using a machine learning model hosted on Google Cloud. The system's frontend is built using HTML, CSS, and JavaScript, and is hosted on Firebase Hosting to ensure fast, secure, and globally available access. The backend is developed using Python Flask, structured as a RESTful API that handles image uploads, connects to the prediction model, and returns the output to the frontend. This Flask application is containerized using Docker and deployed on Google Cloud Run, enabling serverless execution with automatic scaling and low operational overhead.",
    emoji: "🧠",
    github: "#"
  },
  {
    icon: ChefHat,
    title: "Recipe Finder using NLP",
    subtitle: "NLP and Information Retrieval",
    description: "🍲 Retrieves recipes from fuzzy ingredient input using advanced string-matching algorithms and synonym expansion for intelligent recipe discovery.",
    emoji: "🍲",
    github: "https://github.com/SavukarVritika/recipe-finder"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const TypewriterText = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="text-[var(--bright-purple)] font-medium">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy)]/80 backdrop-blur-md border-b border-[var(--bright-purple)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold gradient-text">V</div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-[var(--electric-purple)] transition-colors duration-200 font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[var(--electric-purple)] transition-colors duration-200 font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-[var(--electric-purple)] transition-colors duration-200 font-medium"
                >
                  Projects
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--navy)]/95">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block px-3 py-2 text-white hover:text-[var(--electric-purple)] transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-gray-300 hover:text-[var(--electric-purple)] transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block px-3 py-2 text-gray-300 hover:text-[var(--electric-purple)] transition-colors duration-200"
                >
                  Projects
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-2 font-serif">
                Hello! I Am <TypewriterText text="Vritika Savukar" delay={80} />
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Character Illustration - Left Side */}
            <motion.div 
              className="flex justify-center lg:justify-start order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-80 h-80 bg-gradient-to-br from-[var(--bright-purple)]/30 to-[var(--electric-purple)]/30 rounded-2xl flex items-center justify-center"
                  style={{ 
                    transform: `translateY(${scrollY * 0.1}px)`,
                    boxShadow: '0 0 100px rgba(139, 69, 255, 0.4)'
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 100px rgba(139, 69, 255, 0.4)',
                      '0 0 120px rgba(139, 69, 255, 0.6)',
                      '0 0 100px rgba(139, 69, 255, 0.4)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-[var(--bright-purple)]/30 relative overflow-hidden">
                    {/* Background grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 h-full w-full">
                        {[...Array(64)].map((_, i) => (
                          <div key={i} className="border border-[var(--bright-purple)]/20"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Central icons */}
                    <div className="relative z-10 flex items-center justify-center space-x-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Cpu className="w-16 h-16 text-[var(--bright-purple)]" />
                      </motion.div>
                      <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Terminal className="w-12 h-12 text-[var(--electric-purple)]" />
                      </motion.div>
                    </div>
                    
                    {/* Floating code symbols */}
                    <motion.div 
                      className="absolute top-4 right-4 text-[var(--bright-purple)] opacity-60"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      &lt;/&gt;
                    </motion.div>
                    <motion.div 
                      className="absolute bottom-4 left-4 text-[var(--electric-purple)] opacity-60"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    >
                      {}
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Floating tech elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--bright-purple)] rounded-lg opacity-80 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Binary className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-[var(--electric-purple)] rounded-lg opacity-80 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <Code className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Additional floating elements */}
                <motion.div 
                  className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-[var(--bright-purple)] to-[var(--electric-purple)] rounded-full"
                  animate={{ 
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-1/4 -right-4 w-4 h-4 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--bright-purple)] rounded-full"
                  animate={{ 
                    y: [10, -10, 10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>

            {/* Text Content - Right Side */}
            <motion.div 
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-300">A CS Student who</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Builds AI Solutions
                  <br />by their <span className="gradient-text">Code</span>...
                </h1>
                <p className="text-gray-400 text-sm max-w-md">
                  Where Code Meets Intelligence, Innovation Happens!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I'm a Computer Science Student</h2>
            <p className="text-xl text-gray-300">
              Currently, I'm a CS Student at <span className="text-[var(--bright-purple)] font-medium">Siddaganga Institute of Technology</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg text-justify font-serif">
                👩‍💻 I'm <span className="text-white font-semibold">Vritika Savukar</span>, a passionate Computer Science student currently in my penultimate year at Siddaganga Institute of Technology, specializing in <span className="text-[var(--bright-purple)] font-semibold">Artificial Intelligence and Machine Learning</span>. I have a strong foundation in Data Structures & Algorithms, Software Design, and core CS subjects like Operating Systems, DBMS, and Computer Networks.
              </p>

              <p className="text-lg text-justify font-serif">
                I'm especially passionate about building scalable AI-driven applications that merge the power of ML, NLP, and Cloud Computing to solve real-world problems. My work spans from intuitive frontend design to robust backend logic and intelligent model deployment, creating comprehensive solutions that make a meaningful impact.
              </p>

              <p className="text-lg text-justify font-serif">
                My technical toolkit includes <span className="text-[var(--bright-purple)] font-semibold">Python, Java, C</span>, and frameworks like <span className="text-[var(--bright-purple)] font-semibold">Flask, Streamlit, and LangChain</span>. I'm highly comfortable with Unix/Linux environments and deploy projects using Google Cloud Platform, Docker, and CI/CD pipelines for seamless production deployments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="gradient-border">
                  <div className="gradient-border-inner p-6 h-full">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--bright-purple)] to-[var(--electric-purple)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {project.description.replace(/🔮|⚖️|🧠|🍲/g, '').trim().length > 150 
                            ? project.description.replace(/🔮|⚖️|🧠|🍲/g, '').trim().substring(0, 150) + '...'
                            : project.description.replace(/🔮|⚖️|🧠|🍲/g, '').trim()}
                        </p>
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-[var(--bright-purple)] to-[var(--electric-purple)] text-white hover:shadow-lg hover:shadow-[var(--bright-purple)]/30 transition-all duration-200 text-xs"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          VIEW PROJECT
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            I'm currently looking to join a <span className="gradient-text">cross-functional</span> team
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            that values improving people's lives through accessible design
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/vritika-savukar-71885b266/" },
              { icon: Github, href: "https://github.com/SavukarVritika" },
              { icon: Mail, href: "mailto:savukarvritika@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[var(--bright-purple)] to-[var(--electric-purple)] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>

          {/* Coding Profile Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <a
              href="https://www.geeksforgeeks.org/user/pysd1s2tsd/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-[var(--bright-purple)] to-[var(--electric-purple)] text-white rounded-lg hover:shadow-lg hover:shadow-[var(--bright-purple)]/30 transition-all duration-200 font-medium"
            >
              GeeksforGeeks
            </a>
            <a
              href="https://leetcode.com/u/Vritika_VS/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-[var(--bright-purple)] to-[var(--electric-purple)] text-white rounded-lg hover:shadow-lg hover:shadow-[var(--bright-purple)]/30 transition-all duration-200 font-medium"
            >
              LeetCode
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--bright-purple)]/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Vritika Savukar. Built with passion for AI and innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
