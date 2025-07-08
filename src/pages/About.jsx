import React from 'react';
import { motion } from 'framer-motion';
import CornerWave3D from '../components/CornerWave3D';
import CyberBackgroundEffects from '../components/CyberBackgroundEffects';

export default function About() {
  return (
    <>
      <CyberBackgroundEffects effect="cornerWaveAR" className="absolute top-0 left-0 w-[100vw] min-h-[100%] h-[100%] z-[-1]" />
      <section className="relative min-h-screen py-20 px-6 overflow-hidden pt-32 sm:pt-20">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <motion.h1
              className="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-[#A259F7] to-[#6A0DAD] bg-clip-text text-transparent"
            >
              ABOUT ME
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Cybersecurity student with expertise in offensive and defensive security operations
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 lg:mb-20">
            {/* Photo Placeholder */}
            <div className="flex justify-center items-center h-full">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#222] to-[#444] border-4 border-[#A259F7] flex items-center justify-center shadow-xl">
                <span className="text-4xl text-[#A259F7] font-bold select-none">Photo</span>
              </div>
            </div>
            {/* Background Section */}
            <motion.div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Background</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm Jimmy Patel (Jaymeet Patel), a dedicated cybersecurity professional with over five years of experience protecting digital assets and infrastructure across complex environments.
                </p>
                <p>
                  My expertise covers both offensive security, including penetration testing and vulnerability assessments, and defensive security, such as incident response, threat hunting, and continuous monitoring. I specialize in purple team operations, combining offensive and defensive strategies to deliver comprehensive, real-world security solutions.
                </p>
                <p>
                  With a strong focus on threat detection, secure system design, and proactive defense, I have contributed to initiatives that improved detection accuracy, reduced incident response times, and enhanced overall security posture. I am passionate about building scalable, secure systems and collaborating with teams that value innovation, resilience, and measurable impact.
                </p>
              </div>
            </motion.div>
          </div>
          {/* Certifications & Technical Skills Side by Side Below Background */}
          <motion.div className="flex flex-col lg:flex-row gap-8">
            {/* Certifications */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "EC-Council - Applied Data Loss Prevention",
                    url: "https://learn.eccouncil.org/certificate/e06c1cff-803a-4666-9520-8ad014ac59e8?logged=true"
                  },
                  {
                    name: "EC-Council - Digital Forensics for Pentesters (Hands-on)",
                    url: "https://learn.eccouncil.org/certificate/26ccd19a-c719-4986-98fd-fb7c1985e21b?logged=true"
                  },
                  {
                    name: "IBM & ISC2 - Cybersecurity Specialist Certification",
                    url: "https://www.coursera.org/account/accomplishments/specialization/S22C8UHX6OLK"
                  },
                  {
                    name: "Cybrary - PenTest+: Tools and Code Analysis",
                    url: "https://app.cybrary.it/courses/api/certificate/CC-c188de23-3905-4c91-8c80-b368e362b609/view"
                  }
                ].map((cert, index) => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/30 cursor-pointer hover:shadow-lg"
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
                        borderRadius: 12,
                      }}
                    >
                      <p className="text-white font-semibold">{cert.name}</p>
                    </motion.div>
                  </a>
                ))}
              </div>
              {/* Tools & Technologies below Certifications */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Wireshark", "Scapy", "OpenSSL", "Honeypots", "Squid Proxy", "Burp Suite", "Nmap", "Metasploit", "Splunk", "ELK Stack",
                    "Python", "C++", "Java", "C", "Golang", "R", "SQL", "MongoDB",
                    "Flask", "Django", "FastAPI", "Node.js", "Pandas", "NumPy", "Scikit-learn", "XGBoost",
                    "AWS", "Azure", "Docker", "Kubernetes", "Git", "REST APIs", "splunk", "nessus"
                  ].map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="px-3 py-1 bg-gradient-to-r from-[#6A0DAD]/20 to-[#A259F7]/20 rounded-full text-[#C3B1E1] border border-[#B10DC9]/30 text-sm"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 24px 6px #CBA0E3, 0 0 48px 12px #B10DC9',
                        transition: { duration: 0.03, ease: 'linear' }
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.03, ease: 'linear' }}
                      style={{
                        boxShadow: 'none',
                        borderRadius: 9999,
                      }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            {/* Technical Skills */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="space-y-6">
                {[
                  { name: "Penetration Testing", level: 93, color: "from-red-500 to-red-700" },
                  { name: "Incident Response", level: 90, color: "from-blue-500 to-blue-700" },
                  { name: "Threat Hunting", level: 88, color: "from-green-500 to-green-700" },
                  { name: "Malware Analysis", level: 85, color: "from-purple-500 to-purple-700" },
                  { name: "Security Architecture", level: 92, color: "from-[#A259F7] to-[#6A0DAD]" },
                  { name: "Cryptography", level: 86, color: "from-pink-500 to-pink-700" }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.03, ease: 'linear' }}
                    style={{
                      boxShadow: 'none',
                      borderRadius: 12,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
      </div>
    </section>
    </>
  );
}
