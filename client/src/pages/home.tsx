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
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const projects = [
  {
    icon: MessageSquare,
    title: "AI Debate Arena",
    subtitle: "LangChain & LLMs",
    description: "🔮 A debate platform powered by LangChain & LLMs, integrating models like GPT, Claude, Gemini, and Mistral for multi-round AI argument simulation and judging.",
    emoji: "🔮"
  },
  {
    icon: Scale,
    title: "Legal Case Outcome Predictor",
    subtitle: "ML/NLP",
    description: "⚖️ An ML/NLP model that predicts applicable laws and outcomes from legal case facts using TF-IDF and KNN for accurate legal analysis.",
    emoji: "⚖️"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Image Recognition",
    subtitle: "GCP AutoML",
    description: "🧠 An image classifier deployed using GCP AutoML, Flask backend, and Firebase frontend for real-time predictions and scalable performance.",
    emoji: "🧠"
  },
  {
    icon: ChefHat,
    title: "Recipe Finder using NLP",
    subtitle: "NLP & String Matching",
    description: "🍲 Retrieves recipes from fuzzy ingredient input using advanced string-matching algorithms and synonym expansion for intelligent recipe discovery.",
    emoji: "🍲"
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <p className="text-lg text-gray-300 mb-2">
                Hello! I Am <span className="text-[var(--bright-purple)] font-medium">Vritika Savukar</span>
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="space-y-6"
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
                  Because what the code does not improve, you what else can?
                </p>
              </div>
            </motion.div>

            {/* Character Illustration */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-80 h-80 bg-gradient-to-br from-[var(--bright-purple)]/20 to-[var(--electric-purple)]/20 rounded-full flex items-center justify-center animate-glow"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                    <Code className="w-16 h-16 text-[var(--bright-purple)]" />
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--bright-purple)] rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-[var(--electric-purple)] rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
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
          >
            <Card className="bg-white/5 backdrop-blur-sm border-[var(--bright-purple)]/20 hover:border-[var(--bright-purple)]/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    👩‍💻 I'm <span className="text-white font-medium">Vritika Savukar</span>, a passionate Computer Science student currently in my penultimate year at Siddaganga Institute of Technology, specializing in <span className="text-[var(--bright-purple)] font-medium">Artificial Intelligence and Machine Learning</span>. I have a strong foundation in Data Structures & Algorithms, Software Design, and core CS subjects like Operating Systems, DBMS, and Computer Networks.
                  </p>

                  <p>
                    I'm especially interested in building scalable AI-driven applications that merge the power of ML, NLP, and Cloud Computing to solve real-world problems. My work often spans from intuitive frontend design to robust backend logic and intelligent model deployment.
                  </p>

                  <p>
                    My technical toolkit includes <span className="text-[var(--bright-purple)] font-medium">Python, Java, C</span>, and frameworks like <span className="text-[var(--bright-purple)] font-medium">Flask, Streamlit, and LangChain</span>. I'm highly comfortable with Unix/Linux, and I deploy projects using Google Cloud Platform, Docker, and CI/CD pipelines.
                  </p>

                  <div className="pt-4 space-y-2">
                    <p className="text-sm text-gray-400">
                      🎯 Top 10 finalist in Smart India Hackathon 2024 • Pre-Finalist in IndustrAI Hackathon @ IIT Madras 2025
                    </p>
                    <p className="text-sm text-gray-400">
                      Outside tech: Trained Carnatic classical vocalist • Karate enthusiast • DSA mentor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300">🚀 Here are a few of my favorite projects</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
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
                <Card className="bg-gradient-to-br from-[var(--bright-purple)]/10 to-[var(--deep-blue)]/20 border-[var(--bright-purple)]/30 hover:border-[var(--bright-purple)]/50 transition-all duration-300 hover:scale-[1.02] purple-glow-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--bright-purple)] to-[var(--electric-purple)] rounded-lg flex items-center justify-center mr-4">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-sm text-gray-400">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-[var(--bright-purple)] to-[var(--electric-purple)] text-white hover:shadow-lg hover:shadow-[var(--bright-purple)]/30 transition-all duration-200"
                      onClick={() => window.open('https://github.com/vritikasavukar', '_blank')}
                    >
                      LEARN MORE
                    </Button>
                  </CardContent>
                </Card>
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
            I'm currently looking to join a <span className="gradient-text">tech team</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            that values innovation and building AI-driven solutions to solve real-world problems
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/vritika-savukar" },
              { icon: Github, href: "https://github.com/vritikasavukar" },
              { icon: Twitter, href: "https://twitter.com/vritikasavukar" },
              { icon: Mail, href: "mailto:vritika.savukar@example.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[var(--bright-purple)] to-[var(--electric-purple)] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
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
