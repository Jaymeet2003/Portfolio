import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CyberBackgroundEffects from '../components/CyberBackgroundEffects';

export default function Projects() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP timeline for advanced animations
    const tl = gsap.timeline();

    // Animate the title with GSAP
    tl.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 100, 
        rotationX: 90,
        transformOrigin: "50% 50% -100px"
      },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    );

    // Scroll-triggered animations for project cards
    gsap.fromTo(".project-card",
      {
      opacity: 0,
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
      duration: 0.8,
      stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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

  const projects = [
    {
      title: "ScamurAI (Fraud Detection Firewall)",
      description: "Engineered a decentralized firewall using ML models to detect fraudulent transactions with 92% accuracy in under 1.5 seconds. Integrated P2P alerting via Gun.js and deployed a React-based dashboard for real-time threat visualization.",
      technologies: ["Python", "Machine Learning", "Gun.js", "React"],
      color: "red",
      icon: "🤖",
      category: "Defensive Security",
      link: "https://github.com/Jaymeet2003/ScamurAI"
    },
    {
      title: "Honeypot (Intrusion Detection)",
      description: "Simulated SSH/HTTP services using Python to bait attackers, capturing 1,000+ unique intrusion attempts. Automated threat categorization, reducing intelligence reporting time from 10 minutes to 5 minutes.",
      technologies: ["Python", "Honeypots", "Threat Categorization Automation"],
      color: "blue",
      icon: "🍯",
      category: "Defensive Security",
      link: "https://github.com/Jaymeet2003/Honeypot"
    },
    {
      title: "Malicious Proxy Server",
      description: "Developed a transparent proxy server using socket programming to intercept HTTP/HTTPS traffic. Reduced unauthorized transmission by 40%, flagging suspicious patterns in real-time.",
      technologies: ["Python", "Socket Programming", "HTTP/HTTPS Traffic Analysis"],
      color: "green",
      icon: "🖧",
      category: "Offensive Security",
      link: "https://github.com/Jaymeet2003/Malicious-Proxy"
    },
    {
      title: "DNS Poisoning Detection System",
      description: "Designed a hybrid tool integrating Wireshark traffic inspection with Python-based anomaly detection. Cut spoofing detection time by 40%, decreasing remediation delays during testing phases.",
      technologies: ["Wireshark", "Python", "DNS Analysis", "Anomaly Detection"],
      color: "purple",
      icon: "🔎",
      category: "Defensive Security",
      link: "https://github.com/Jaymeet2003/DNS-poisoining-Detector"
    },
    {
      title: "DNS Injection Simulation",
      description: "Crafted forged DNS packets using Scapy and dnspython to simulate injection attacks across 3 configurations. Strengthened internal testing protocols, improving DNS security validation coverage by 60%.",
      technologies: ["Scapy", "dnspython", "Python", "DNS Security"],
      color: "orange",
      icon: "📡",
      category: "Offensive Security",
      link: "https://github.com/Jaymeet2003/DNS-injector"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      red: "from-red-900/20 to-red-800/10 border-red-500/30 hover:border-red-400/50 text-red-400",
      blue: "from-blue-900/20 to-blue-800/10 border-blue-500/30 hover:border-blue-400/50 text-blue-400",
      green: "from-green-900/20 to-green-800/10 border-green-500/30 hover:border-green-400/50 text-green-400",
      purple: "from-purple-900/20 to-purple-800/10 border-purple-500/30 hover:border-purple-400/50 text-purple-400",
      orange: "from-orange-900/20 to-orange-800/10 border-orange-500/30 hover:border-orange-400/50 text-orange-400",
      pink: "from-pink-900/20 to-pink-800/10 border-pink-500/30 hover:border-pink-400/50 text-pink-400"
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <>
      <CyberBackgroundEffects effect="neural" className="cyber-effect" />
      <motion.section 
        className="relative min-h-screen py-20 px-6 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={containerVariants}>
            <motion.h1 
              ref={titleRef}
              className="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-[#A259F7] to-[#6A0DAD] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              PROJECTS
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Showcasing my cybersecurity expertise through hands-on projects and real-world implementations
            </motion.p>
            {/* GitHub Card */}
            <a
              href="https://www.github.com/jaymeet2003"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <motion.div
                className="github-card mt-8 mx-auto max-w-xl p-6 bg-gradient-to-r from-[#4B0082]/20 to-[#6A0DAD]/20 rounded-2xl border border-[#B10DC9]/30 flex flex-col items-center shadow-lg"
                whileHover={{
                  scale: 1.04,
                  rotateY: 8,
                  rotateX: 4,
                  boxShadow: '0 0 24px 6px #CBA0E3, 0 0 48px 12px #B10DC9',
                  transition: { duration: 0.03, ease: 'linear' }
                }}
                transition={{ duration: 0.03, ease: 'linear' }}
                style={{
                  boxShadow: 'none',
                  borderRadius: 18,
                  cursor: 'pointer',
                }}
              >
                <motion.div
                  className="flex items-center mb-2 relative"
                  style={{ perspective: 400 }}
                >
                  <motion.span
                    className="mr-3 flex items-center justify-center relative"
                    style={{ width: 40, height: 40 }}
                    animate={{
                      scale: [1, 1.12, 1],
                      filter: [
                        'drop-shadow(0 2px 8px #0008) drop-shadow(0 0 16px #CBA0E3)',
                        'drop-shadow(0 4px 16px #B10DC9) drop-shadow(0 0 32px #CBA0E3)',
                        'drop-shadow(0 2px 8px #0008) drop-shadow(0 0 16px #CBA0E3)'
                      ]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    {/* Blinking live dot */}
                    <motion.span
                      className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 40% 40%, #00FF99 70%, #008f5a 100%)',
                        boxShadow: '0 0 8px 2px #00FF99, 0 2px 8px 0 #008f5a, 0 0 0 2px #fff3 inset',
                        zIndex: 2,
                        border: '1.5px solid #fff6',
                        filter: 'drop-shadow(0 0 6px #00FF99) drop-shadow(0 2px 8px #008f5a)',
                      }}
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {/* GitHub SVG logo, 3D look with filter */}
                    <svg width="40" height="40" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M49 8C26.4 8 8 26.4 8 49c0 18.2 11.8 33.6 28.2 39c2.1.4 2.8-.9 2.8-2v-7c-11.5 2.5-13.9-5.5-13.9-5.5c-1.9-4.8-4.7-6.1-4.7-6.1c-3.8-2.6.3-2.6.3-2.6c4.2.3 6.4 4.3 6.4 4.3c3.7 6.4 9.7 4.6 12.1 3.5c.4-2.7 1.4-4.6 2.5-5.7c-9.2-1-18.9-4.6-18.9-20.5c0-4.5 1.6-8.2 4.3-11.1c-.4-1-1.9-5 .4-10.4c0 0 3.5-1.1 11.4 4.2c3.3-.9 6.8-1.3 10.3-1.3c3.5 0 7 .4 10.3 1.3c7.9-5.3 11.4-4.2 11.4-4.2c2.3 5.4.8 9.4.4 10.4c2.7 2.9 4.3 6.6 4.3 11.1c0 16-9.7 19.5-18.9 20.5c1.4 1.2 2.7 3.6 2.7 7.3v10.8c0 1.1.7 2.4 2.8 2c16.4-5.4 28.2-20.8 28.2-39C90 26.4 71.6 8 49 8z" fill="#fff"/>
                    </svg>
                  </motion.span>
                  <h3 className="text-white font-semibold text-xl">GitHub</h3>
                </motion.div>
                <p className="text-gray-300 mb-4 text-center">
                  Explore my open-source cybersecurity projects and code on GitHub.
                </p>
              </motion.div>
            </a>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              // Define glow color for each card
              const glowMap = {
                red: '0 0 24px 6px #FF6F61, 0 0 48px 12px #FF4500',
                blue: '0 0 24px 6px #4B0082, 0 0 48px 12px #6A0DAD',
                green: '0 0 24px 6px #00FF99, 0 0 48px 12px #00FFC3',
                purple: '0 0 24px 6px #B10DC9, 0 0 48px 12px #A259F7',
                orange: '0 0 24px 6px #FF6F61, 0 0 48px 12px #FF4500',
                pink: '0 0 24px 6px #CBA0E3, 0 0 48px 12px #B10DC9',
              };
              const glow = glowMap[project.color] || glowMap.purple;
              return (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <motion.div 
                    className={`project-card group relative p-8 bg-gradient-to-br ${colorClasses} rounded-3xl border transition-all duration-500 glass`}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.06,
                      rotateY: 10,
                      rotateX: 6,
                      boxShadow: glow,
                      transition: { duration: 0.03, ease: 'linear' }
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.03, ease: 'linear' }}
                    style={{
                      boxShadow: 'none',
                      borderRadius: 24,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-black/30 border border-current`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-black/30 rounded-lg text-xs font-mono text-gray-300 border border-gray-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </a>
              );
            })}
          </div>
      </div>
      </motion.section>
    </>
  );
}
