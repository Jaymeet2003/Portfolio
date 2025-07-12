import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CornerWave3D from '../components/CornerWave3D';
import CyberBackgroundEffects from '../components/CyberBackgroundEffects';
import ProfileCard from '../components/ProfileCard/ProfileCard';

export default function About() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('education');
  
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
            {/* Profile Card */}
            <div className="flex justify-center items-center h-full">
              <ProfileCard
                name="Jimmy Patel"
                title="Cybersecurity Student"
                handle="jaymeet2003"
                status="Available"
                contactText="Get In Touch"
                avatarUrl="/Portfolio/jimmy.png"
                miniAvatarUrl="/Portfolio/jimmy.png"
                showUserInfo={true}
                enableTilt={true}
                showBehindGradient={true}
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)"
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                className="cyber-profile-card"
                grainUrl="/Portfolio/grain.JPG"
                iconUrl="/Portfolio/terminal-icon.svg"
                onContactClick={() => navigate('/contact')}
              />
  
            </div>
            {/* Background Section */}
            <motion.div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Background</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm Jimmy Patel, a dedicated cybersecurity professional with over five years of experience protecting digital assets and infrastructure across complex environments.
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

          {/* Journey/Timeline for Education and Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Education Journey */}
            <motion.div
              className="glassy-glow-card rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 cursor-pointer"
              whileHover={{
                scale: 1.04,
                rotateY: 8,
                rotateX: 4,
                boxShadow: '0 0 24px 6px #CBA0E3, 0 0 48px 12px #B10DC9',
                transition: { duration: 0.03, ease: 'linear' }
              }}
              transition={{ duration: 0.03, ease: 'linear' }}
            >
              <h4 className="text-xl font-bold mb-6 text-[#A259F7]">Education Journey</h4>
              <div className="relative pl-6">
                {[
                  {
                    title: 'Masters of Science in Cybersecurity',
                    place: 'Depaul University, Chicago, IL',
                    period: 'Jun 2027',
                    details: [
                      { label: 'Concentration', value: 'Networking and Infrastructure' },
                    ],
                  },
                  {
                    title: 'Bachelor of Science in Computer Science',
                    place: 'University of Illinois Chicago, Chicago, IL',
                    period: 'May 2025',
                    details: [
                      { label: 'Minor', value: 'Mathematics' },
                      { label: 'Relevant Coursework', value: [
                        'Network Security',
                        'Cryptography',
                        'Concurrent Programming',
                        'Data Science',
                        'Database Systems',
                        'Algorithms',
                        'Data Structures',
                        'Networking',
                      ] },
                    ],
                  },
                  {
                    title: 'Bachelor of Business Administration in Business Administration',
                    place: 'University of Illinois Chicago, Chicago, IL',
                    period: 'Dec 2024',
                    details: [
                      { label: 'Awards', value: '3× Dean’s List Recipient', highlight: true },
                    ],
                  },
                ].map((edu, idx, arr) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.4, ease: 'easeOut' }}
                    className="mb-8 last:mb-0 flex items-start relative"
                  >
                    {/* Animated Dot */}
                    <motion.span
                      className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#A259F7] to-[#6A0DAD]"
                      initial={{ scale: 0.5, background: '#6A0DAD' }}
                      whileInView={{ scale: 1, background: 'linear-gradient(to bottom right, #A259F7, #6A0DAD)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18, delay: idx * 0.15 + 0.1 }}
                    />
                    {/* Animated Line */}
                    {idx !== arr.length - 1 && (
                      <motion.span
                        className="absolute left-[6px] top-6 w-0.5 bg-gradient-to-b from-[#A259F7]/60 to-[#6A0DAD]/60"
                        initial={{ height: 0 }}
                        whileInView={{ height: 'calc(100% - 1.5rem)' }}
                        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: idx * 0.15 + 0.2 }}
                        style={{ originY: 0 }}
                      />
                    )}
                    <div className="ml-6">
                      <div className="font-semibold text-white text-lg">{edu.title}</div>
                      <div className="text-[#A259F7] text-sm font-medium">{edu.place} <span className="text-gray-400">({edu.period})</span></div>
                      <ul className="text-gray-300 text-sm mt-2 space-y-1">
                        {edu.details.map((item, i) =>
                          Array.isArray(item.value) ? (
                            <li key={i}>
                              <span className="font-semibold text-[#A259F7]">{item.label}:</span>
                              <ul className="list-disc list-inside ml-4 mt-1">
                                {item.value.map((course, j) => (
                                  <li key={j}>{course}</li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={i} className={item.highlight ? 'font-semibold text-yellow-300' : ''}>
                              <span className="font-semibold text-[#A259F7]">{item.label}:</span> {item.value}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Work Experience Journey */}
            <motion.div
              className="glassy-glow-card rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 cursor-pointer"
              whileHover={{
                scale: 1.04,
                rotateY: 8,
                rotateX: 4,
                boxShadow: '0 0 24px 6px #CBA0E3, 0 0 48px 12px #B10DC9',
                transition: { duration: 0.03, ease: 'linear' }
              }}
              transition={{ duration: 0.03, ease: 'linear' }}
            >
              <h4 className="text-xl font-bold mb-6 text-[#A259F7]">Work Experience Journey</h4>
              <div className="relative pl-6">
                {[
                  {
                    title: 'Web Developer',
                    place: 'UIC SA-TECH, Chicago, IL/USA',
                    period: 'August 2021 – December 2024',
                    details: [
                      { label: 'Impact', value: 'Enhanced web platforms serving 5,000+ students annually, driving significant improvement in functionality and user engagement.' },
                      { label: 'Mentorship', value: 'Mentored three junior developers, resulting in a 40% reduction in onboarding time.' },
                      { label: 'Reliability', value: 'Resolved technical issues in under 24 hours on average, maintaining an uptime of 99.8%.' },
                    ],
                  },
                ].map((work, idx, arr) => (
                  <motion.div
                    key={work.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.4, ease: 'easeOut' }}
                    className="mb-8 last:mb-0 flex items-start relative"
                  >
                    {/* Animated Dot */}
                    <motion.span
                      className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#A259F7] to-[#6A0DAD]"
                      initial={{ scale: 0.5, background: '#6A0DAD' }}
                      whileInView={{ scale: 1, background: 'linear-gradient(to bottom right, #A259F7, #6A0DAD)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18, delay: idx * 0.15 + 0.1 }}
                    />
                    {/* Animated Line */}
                    {idx !== arr.length - 1 && (
                      <motion.span
                        className="absolute left-[6px] top-6 w-0.5 bg-gradient-to-b from-[#A259F7]/60 to-[#6A0DAD]/60"
                        initial={{ height: 0 }}
                        whileInView={{ height: 'calc(100% - 1.5rem)' }}
                        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: idx * 0.15 + 0.2 }}
                        style={{ originY: 0 }}
                      />
                    )}
                    <div className="ml-6">
                      <div className="font-semibold text-white text-lg">{work.title}</div>
                      <div className="text-[#A259F7] text-sm font-medium">{work.place} <span className="text-gray-400">({work.period})</span></div>
                      <ul className="text-gray-300 text-sm mt-2 space-y-1">
                        {work.details.map((item, i) => (
                          <li key={i}>
                            <span className="font-semibold text-[#A259F7]">{item.label}:</span> {item.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
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
