import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

export default function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

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

    // Scroll-triggered animations for contact elements
    gsap.fromTo(".contact-element",
      {
      opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-element",
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

  useEffect(() => {
    // Force scroll to top after Contact page is mounted
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "jaymeet5087d@gmail.com",
      link: "mailto:jaymeet5087d@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (630)-464-4830",
      link: "tel:+16304644830"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Chicago, IL",
      link: "#"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "linkedin.com/in/jaymeet2003",
      link: "https://linkedin.com/in/jaymeet2003"
    }
  ];

  return (
    <>
      <motion.section 
        className="relative min-h-screen py-20 px-6 overflow-hidden bg-transparent"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={containerVariants}>
            <motion.h1 
              ref={titleRef}
              className="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-[#A259F7] to-[#6A0DAD] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              CONTACT
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Let's discuss cybersecurity opportunities and collaborate on security projects
            </motion.p>
          </motion.div>

          {/* Availability Status - moved here */}
          <motion.div 
            className="contact-element p-6 mb-10 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl border border-green-500/30 max-w-2xl mx-auto"
            whileHover={{
              scale: 1.04,
              rotateY: 8,
              rotateX: 4,
              boxShadow: '0 0 24px 6px #00FF99, 0 0 48px 12px #00FFC3',
              transition: { duration: 0.03, ease: 'linear' }
            }}
            transition={{ duration: 0.03, ease: 'linear' }}
            style={{
              boxShadow: 'none',
              borderRadius: 18,
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <h3 className="text-white font-semibold">Available for Opportunities</h3>
            </div>
            <p className="text-gray-300">
              Currently accepting new cybersecurity projects, consulting opportunities, and full-time positions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  // Use LinkedIn card's purple glow for all except availability
                  const glow = '0 0 24px 6px #CBA0E3, 0 0 48px 12px #B10DC9';
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact-element group flex items-center p-6 bg-gradient-to-r from-[#4B0082]/20 to-[#6A0DAD]/20 rounded-2xl border border-[#B10DC9]/30 hover:border-[#A259F7]/50 transition-all duration-300"
                      whileHover={{
                        scale: 1.04,
                        rotateY: 8,
                        rotateX: 4,
                        boxShadow: glow,
                        x: 10,
                        transition: { duration: 0.03, ease: 'linear' }
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.03, ease: 'linear' }}
                      style={{
                        boxShadow: 'none',
                        borderRadius: 18,
                      }}
                    >
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Send Message</h2>
              <motion.div 
                variants={itemVariants} 
                className="space-y-6 p-6 bg-gradient-to-r from-[#4B0082]/20 to-[#6A0DAD]/20 rounded-2xl border border-[#B10DC9]/30 shadow-lg w-full"
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
                }}
              >
                <motion.form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-semibold">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="Project inquiry, job opportunity, etc."
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-white font-semibold">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </motion.div>
                  {success && (
                    <div className="text-green-400 font-semibold text-center">{success}</div>
                  )}
                  {error && (
                    <div className="text-red-400 font-semibold text-center">{error}</div>
                  )}
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>
          </div>
      </div>
      </motion.section>
      <footer className="w-full mt-20 border-t border-[#4B0082]/30 bg-gradient-to-r from-[#181828] to-[#232347] py-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center px-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block align-middle w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_2px_#00FF00] animate-pulse"></span>
            <span className="text-base font-semibold text-[#A259F7] tracking-wide select-none" style={{ fontFamily: "'Snell Roundhand', 'Apple Chancery', cursive" }}>Jaymeet Patel</span>
          </div>
          <div className="text-xs text-gray-400 font-sans tracking-wider mb-2 text-center">
            © {new Date().getFullYear()} — Jaymeet Patel. All rights reserved.
          </div>
          <div className="flex gap-6 mb-2">
            <a href="https://linkedin.com/in/jimmypatel" target="_blank" rel="noopener noreferrer" className="text-[#CBA0E3] hover:text-[#FF6F61] transition-colors text-sm font-semibold">LinkedIn</a>
            <a href="mailto:jimmy.patel@cybersecurity.com" className="text-[#CBA0E3] hover:text-[#FF6F61] transition-colors text-sm font-semibold">Email</a>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#A259F7] via-[#6A0DAD] to-[#CBA0E3] opacity-70 rounded-full animate-pulse" />
        </div>
      </footer>
    </>
  );
}
