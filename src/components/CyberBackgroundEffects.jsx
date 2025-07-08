import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { animate } from 'animejs';

// Matrix Rain Effect
const MatrixRain = ({ canvasRef }) => {
  useEffect(() => {
    if (!canvasRef || !canvasRef.current) {
      console.error('MatrixRain: canvasRef is undefined or null');
      return;
    }
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas completely
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const cyberCommands = [
      'sudo nmap -sS 192.168.1.0/24',
      'ping -c 4 8.8.8.8',
      'iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
      'netstat -tuln',
      'tcpdump -i eth0',
      'nslookup google.com',
      'whois example.com',
      'dig @8.8.8.8 google.com',
      'ssh admin@192.168.1.1',
      'wireshark -i eth0',
      'nmap -A -T4 scanme.nmap.org',
      'hashcat -m 0 hash.txt wordlist.txt',
      'john --wordlist=wordlist.txt hash.txt',
      'aircrack-ng capture.cap',
      'metasploit',
      'burpsuite',
      'sqlmap -u "http://example.com/page?id=1"',
      'nikto -h http://example.com',
      'dirb http://example.com',
      'hydra -l admin -P wordlist.txt ssh://192.168.1.1'
    ];
    
    const hexValues = [
      '0x1A', '0x2B', '0x3C', '0x4D', '0x5E', '0x6F', '0x7A', '0x8B',
      '0x9C', '0xAD', '0xBE', '0xCF', '0xD0', '0xE1', '0xF2', '0x03'
    ];
    
    const ipAddresses = [
      '192.168.1.1', '10.0.0.1', '172.16.0.1', '8.8.8.8', '1.1.1.1',
      '208.67.222.222', '9.9.9.9', '149.112.112.112'
    ];
    
    const allSymbols = [...cyberCommands, ...hexValues, ...ipAddresses];
    
    const fontSize = 18;
    const columnSpacing = fontSize * 2; // Double the spacing between columns
    const columns = Math.floor(canvas.width / columnSpacing);
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(0, 255, 255, 0.18)';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = allSymbols[Math.floor(Math.random() * allSymbols.length)];
        ctx.fillText(text, i * columnSpacing, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 50);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Glitch Effect with anime.js
const GlitchEffect = ({ canvasRef }) => {
  useEffect(() => {
    if (!canvasRef || !canvasRef.current) {
      console.error('GlitchEffect: canvasRef is undefined or null');
      return;
    }
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas completely
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    console.log('GlitchEffect effect started');
    
    let time = 0;
    
    function drawGlitch() {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw effect name
      ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('GLITCH EFFECT', 20, 40);
      
      // Random glitch intervals
      if (Math.random() < 0.02) {
        // Horizontal scanlines
        for (let i = 0; i < canvas.height; i += 2) {
          if (Math.random() < 0.1) {
            ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
            ctx.fillRect(0, i, canvas.width, 1);
          }
        }
        
        // Vertical glitch
        const glitchX = Math.random() * canvas.width;
        const glitchWidth = Math.random() * 50;
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.fillRect(glitchX, 0, glitchWidth, canvas.height);
      }
      
      // Subtle flicker
      if (Math.random() < 0.01) {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      requestAnimationFrame(drawGlitch);
    }
    
    drawGlitch();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Particle Network with anime.js
const ParticleNetwork = ({ canvasRef }) => {
  useEffect(() => {
    if (!canvasRef || !canvasRef.current) {
      console.error('ParticleNetwork: canvasRef is undefined or null');
      return;
    }
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas completely
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    console.log('ParticleNetwork effect started');
    
    const particles = [];
    const particleCount = 100;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        const alpha = 0.5 + 0.5 * Math.sin(this.pulse);
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animate particles with requestAnimationFrame
    function animate() {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw effect name
      ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('PARTICLE NETWORK', 20, 40);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Terminal Window
const TerminalWindow = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const commands = [
      '$ whoami',
      '$ ssh admin@192.168.0.1',
      '$ sudo ufw enable',
      '$ nmap -sS 192.168.1.0/24',
      '$ netstat -tuln',
      '$ tcpdump -i eth0',
      '$ ping -c 4 8.8.8.8',
      '$ iptables -L',
      '$ ps aux | grep ssh',
      '$ cat /var/log/auth.log',
      '$ last',
      '$ w',
      '$ top',
      '$ df -h',
      '$ free -h',
      '$ systemctl status ssh',
      '$ journalctl -f',
      '$ tail -f /var/log/syslog'
    ];
    
    let currentCommand = 0;
    let currentChar = 0;
    let terminalX = 50;
    let terminalY = 100;
    let lineHeight = 20;
    let lines = [];
    
    function drawTerminal() {
      // Terminal background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)'; // Even darker background
      ctx.fillRect(terminalX - 10, terminalY - 30, 600, 400);
      
      // Remove Terminal border
      // ctx.strokeStyle = 'rgba(0, 255, 255, 0.18)';
      // ctx.lineWidth = 2;
      // ctx.strokeRect(terminalX - 10, terminalY - 30, 600, 400);
      
      // Terminal title
      ctx.fillStyle = 'rgba(0,255,255,0.85)';
      ctx.font = '14px monospace';
      ctx.fillText('root@cybersecurity:~#', terminalX, terminalY);
      
      // Draw previous lines
      ctx.fillStyle = 'rgba(0,255,255,0.85)';
      ctx.font = '12px monospace';
      lines.forEach((line, index) => {
        ctx.fillText(line, terminalX, terminalY + (index + 1) * lineHeight);
      });
      
      // Draw current command
      if (currentCommand < commands.length) {
        const command = commands[currentCommand];
        const displayText = command.substring(0, currentChar);
        ctx.fillText(displayText, terminalX, terminalY + (lines.length + 1) * lineHeight);
        
        // Cursor
        if (Math.floor(Date.now() / 500) % 2) {
          ctx.fillText('|', terminalX + ctx.measureText(displayText).width, terminalY + (lines.length + 1) * lineHeight);
        }
      }
    }
    
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawTerminal();
      
      // Type command
      if (currentCommand < commands.length) {
        if (currentChar < commands[currentCommand].length) {
          currentChar++;
        } else {
          // Command finished, move to next
          lines.push(commands[currentCommand]);
          currentCommand++;
          currentChar = 0;
          
          // Scroll terminal if too many lines
          if (lines.length > 15) {
            lines.shift();
          }
        }
      } else {
        // Reset to beginning
        currentCommand = 0;
        currentChar = 0;
        lines = [];
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Radar Pulse
const RadarPulse = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Radar origin at bottom-left corner
    const originX = 0;
    const originY = canvas.height;
    let waveRadius = 0;
    const maxRadius = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
    const waveSpeed = 2.5;
    
    // Animated red dots (findings)
    const findings = [];
    const findingCount = 8;
    for (let i = 0; i < findingCount; i++) {
      const angle = Math.random() * Math.PI / 2; // Only in top-right quadrant
      findings.push({
        angle,
        baseRadius: 60 + Math.random() * 80,
        speed: 1.2 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2
      });
    }
    
    function drawRadar() {
      // Fade previous frame
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw radar waves
      for (let i = 0; i < 3; i++) {
        const r = waveRadius - i * 80;
        if (r > 0 && r < maxRadius) {
          ctx.beginPath();
          ctx.arc(originX, originY, r, 0, Math.PI / 2);
          ctx.strokeStyle = `rgba(0,255,0,${0.18 - i * 0.05})`;
          ctx.lineWidth = 3 - i;
          ctx.stroke();
        }
      }
      
      // Draw animated red dots (findings)
      findings.forEach(finding => {
        // Each finding moves outward with the wave, with a little oscillation
        const progress = (waveRadius / maxRadius + finding.phase) % 1;
        const r = finding.baseRadius + progress * (maxRadius - finding.baseRadius);
        const x = originX + Math.cos(finding.angle) * r;
        const y = originY - Math.sin(finding.angle) * r;
        
        // Red dot
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,0,0,0.85)';
        ctx.shadowColor = 'red';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Pulse ring
        const pulse = 1 + Math.sin(Date.now() * 0.008 + finding.phase) * 0.5;
        ctx.beginPath();
        ctx.arc(x, y, 14 + pulse * 6, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,0,0,0.25)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      
      // Draw radar origin
      ctx.beginPath();
      ctx.arc(originX, originY, 12, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,255,0,0.5)';
      ctx.fill();
      
      // Animate wave
      waveRadius += waveSpeed;
      if (waveRadius > maxRadius + 200) waveRadius = 0;
    }
    
    function animate() {
      drawRadar();
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Neural Network with anime.js
const NeuralNetwork = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const nodes = [];
    const connections = [];
    const nodeCount = 36;
    
    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 4 + 2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.connections = [];
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        const alpha = 0.7 + 0.3 * Math.sin(this.pulse);
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }
    
    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 130) {
          connections.push({ from: i, to: j, distance });
        }
      }
    }
    
    // Animate with requestAnimationFrame
    function animate() {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw effect name
      // ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
      // ctx.font = 'bold 24px monospace';
      // ctx.fillText('NEURAL NETWORK', 20, 40);
      
      // Update nodes
      nodes.forEach(node => node.update());
      
      // Draw connections
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.13)';
      ctx.lineWidth = 1;
      
      connections.forEach(conn => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Lower opacity for nodes
        const alpha = 0.13 + 0.07 * Math.sin(node.pulse);
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        // Glow effect
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Lock and Circuit Overlay
const LockCircuit = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    let time = 0;
    const circuitPoints = [];
    
    // Generate circuit points
    for (let i = 0; i < 20; i++) {
      circuitPoints.push({
        x: centerX + (Math.random() - 0.5) * 400,
        y: centerY + (Math.random() - 0.5) * 400,
        active: false,
        pulse: Math.random() * Math.PI * 2
      });
    }
    
    function drawLock() {
      const lockSize = 80;
      
      // Lock body
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 3;
      ctx.strokeRect(centerX - lockSize/2, centerY - lockSize/2, lockSize, lockSize);
      
      // Lock hole
      ctx.beginPath();
      ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
      ctx.stroke();
      
      // Lock shackle
      ctx.beginPath();
      ctx.arc(centerX, centerY - lockSize/2 - 20, 25, Math.PI, 0);
      ctx.stroke();
    }
    
    function drawCircuit() {
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.lineWidth = 2;
      
      // Connect circuit points
      for (let i = 0; i < circuitPoints.length; i++) {
        for (let j = i + 1; j < circuitPoints.length; j++) {
          const dx = circuitPoints[i].x - circuitPoints[j].x;
          const dy = circuitPoints[i].y - circuitPoints[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(circuitPoints[i].x, circuitPoints[i].y);
            ctx.lineTo(circuitPoints[j].x, circuitPoints[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw circuit nodes
      circuitPoints.forEach((point, index) => {
        point.pulse += 0.02;
        const alpha = 0.5 + 0.5 * Math.sin(point.pulse);
        
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    
    function animate() {
      time += 0.01;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawCircuit();
      drawLock();
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// ASCII Art Background
const ASCIIBackground = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const asciiChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';
    const lines = [];
    const lineCount = Math.floor(canvas.height / 20);
    
    // Initialize lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        text: '',
        x: Math.random() * canvas.width,
        y: i * 20,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    function generateRandomText() {
      let text = '';
      const length = Math.floor(Math.random() * 50) + 20;
      for (let i = 0; i < length; i++) {
        text += asciiChars[Math.floor(Math.random() * asciiChars.length)];
      }
      return text;
    }
    
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach(line => {
        if (line.text === '') {
          line.text = generateRandomText();
        }
        
        ctx.fillStyle = `rgba(0, 255, 0, ${line.opacity})`;
        ctx.font = '12px monospace';
        ctx.fillText(line.text, line.x, line.y);
        
        line.x -= line.speed;
        
        if (line.x < -ctx.measureText(line.text).width) {
          line.x = canvas.width;
          line.text = '';
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Heatmap Data Grid
const HeatmapGrid = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const gridSize = 30;
    const cols = Math.floor(canvas.width / gridSize);
    const rows = Math.floor(canvas.height / gridSize);
    const grid = [];
    
    // Initialize grid
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < cols; j++) {
        grid[i][j] = {
          value: Math.random(),
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        };
      }
    }
    
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const cell = grid[i][j];
          cell.pulse += cell.pulseSpeed;
          
          const intensity = cell.value * (0.5 + 0.5 * Math.sin(cell.pulse));
          const alpha = intensity * 0.3;
          
          ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
          ctx.fillRect(j * gridSize, i * gridSize, gridSize - 1, gridSize - 1);
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  
  return null;
};

// Corner Wave Effect
const CornerWave = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let t = 0;
    const waveCount = 3;
    const waveGap = 180;
    const waveSpeed = 2.5;
    const maxRadius = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);

    function drawWaves() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < waveCount; i++) {
        const radius = ((t + i * waveGap) % maxRadius);
        const alpha = 0.18 * (1 - radius / maxRadius);
        if (radius > 0 && radius < maxRadius) {
          const gradient = ctx.createRadialGradient(0, canvas.height, 0, 0, canvas.height, radius);
          gradient.addColorStop(0, `rgba(0,255,255,${alpha})`);
          gradient.addColorStop(0.7, `rgba(0,255,255,${alpha * 0.5})`);
          gradient.addColorStop(1, 'rgba(0,255,255,0)');
          ctx.beginPath();
          ctx.arc(0, canvas.height, radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
      t += waveSpeed;
      requestAnimationFrame(drawWaves);
    }
    drawWaves();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
  return null;
};

// 3D/AR Corner Wave Effect
const CornerWaveAR = ({ className = '' }) => {
  const mountRef = React.useRef(null);
  const animationIdRef = React.useRef(null);

  React.useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / document.body.scrollHeight,
      0.1,
      1000
    );
    camera.position.set(-2, 2, 6);
    camera.lookAt(2, -2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, document.body.scrollHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = `${document.body.scrollHeight}px`;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.7);
    dir.position.set(5, 10, 10);
    scene.add(dir);

    // Waves (expanding rings)
    const maxRadius = Math.sqrt(window.innerWidth ** 2 + document.body.scrollHeight ** 2) * 0.9 / 100;
    const waveCount = 3;
    const waveGap = maxRadius / waveCount;
    const waves = [];
    for (let i = 0; i < waveCount; i++) {
      const geometry = new THREE.RingGeometry(0.1, 0.12, 128);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.13,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-3, -2.5, 0);
      mesh.rotation.x = -Math.PI / 2.5;
      scene.add(mesh);
      waves.push({ mesh, radius: 0.1 + i * waveGap });
    }

    // Red dots (detections) - static positions
    const dotCount = 14;
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      // Place dots randomly in the 90% coverage area (top-right quadrant)
      const r = Math.random() * maxRadius * 0.95 + 0.2;
      const angle = Math.random() * Math.PI / 2;
      const x = -3 + Math.cos(angle) * r;
      const y = -2.5 + Math.sin(angle) * r;
      const geometry = new THREE.SphereGeometry(0.07, 16, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0xff2222, transparent: true, opacity: 0 }); // Start hidden
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, 0.1);
      scene.add(mesh);
      dots.push({ mesh, r, angle, detectedAt: -100 });
    }

    // Add a 2D overlay canvas for radar lines and beam
    let overlayCanvas = document.createElement('canvas');
    overlayCanvas.width = window.innerWidth;
    overlayCanvas.height = document.body.scrollHeight;
    overlayCanvas.style.position = 'absolute';
    overlayCanvas.style.top = '0';
    overlayCanvas.style.left = '0';
    overlayCanvas.style.width = '100vw';
    overlayCanvas.style.height = `${document.body.scrollHeight}px`;
    overlayCanvas.style.pointerEvents = 'none';
    overlayCanvas.style.zIndex = 1;
    mountRef.current.appendChild(overlayCanvas);
    const overlayCtx = overlayCanvas.getContext('2d');

    function getScreenCoordsFrom3D(vec3, camera) {
      // Project 3D point to normalized device coordinates (NDC)
      const vector = vec3.clone().project(camera);
      // Convert NDC to screen coordinates
      return {
        x: (vector.x + 1) / 2 * overlayCanvas.width,
        y: (1 - vector.y) / 2 * overlayCanvas.height
      };
    }

    function drawRadarOverlay(angle, outerR) {
      overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
      // Project 3D origin to 2D
      const origin3D = new THREE.Vector3(-3, -2.5, 0);
      const origin2D = getScreenCoordsFrom3D(origin3D, camera);
      // Draw faint concentric circles (radar grid)
      overlayCtx.save();
      overlayCtx.strokeStyle = 'rgba(0,255,255,0.08)';
      overlayCtx.lineWidth = 1.2;
      for (let i = 1; i <= 5; i++) {
        overlayCtx.beginPath();
        overlayCtx.arc(origin2D.x, origin2D.y, (maxRadius * i) / 5 * 100, 0, Math.PI / 2);
        overlayCtx.stroke();
      }
      // Draw sweeping line (beam)
      overlayCtx.strokeStyle = 'rgba(0,255,255,0.18)';
      overlayCtx.lineWidth = 3;
      overlayCtx.beginPath();
      overlayCtx.moveTo(origin2D.x, origin2D.y);
      overlayCtx.lineTo(
        origin2D.x + Math.cos(angle) * outerR * 100,
        origin2D.y - Math.sin(angle) * outerR * 100
      );
      overlayCtx.stroke();
      // Draw glow at wavefront
      const grad = overlayCtx.createRadialGradient(
        origin2D.x + Math.cos(angle) * outerR * 100,
        origin2D.y - Math.sin(angle) * outerR * 100,
        0,
        origin2D.x + Math.cos(angle) * outerR * 100,
        origin2D.y - Math.sin(angle) * outerR * 100,
        60
      );
      grad.addColorStop(0, 'rgba(0,255,255,0.18)');
      grad.addColorStop(1, 'rgba(0,255,255,0)');
      overlayCtx.beginPath();
      overlayCtx.arc(
        origin2D.x + Math.cos(angle) * outerR * 100,
        origin2D.y - Math.sin(angle) * outerR * 100,
        60,
        0,
        Math.PI * 2
      );
      overlayCtx.fillStyle = grad;
      overlayCtx.fill();
      overlayCtx.restore();
    }

    let t = 0;
    function animate() {
      t += 0.025;
      // Animate waves
      waves.forEach((wave, i) => {
        let r = (t + i * waveGap) % maxRadius;
        if (r < 0.1) r = 0.1;
        wave.mesh.geometry.dispose();
        wave.mesh.geometry = new THREE.RingGeometry(r, r + 0.12, 128);
        wave.mesh.material.opacity = 0.13 * (1 - r / maxRadius);
        wave.mesh.visible = r < maxRadius;
      });
      // Detect dots with the outermost wave
      const outerR = (t + (waveCount - 1) * waveGap) % maxRadius;
      const sweepAngle = (t * 0.7) % (Math.PI / 2);
      dots.forEach((dot) => {
        if (Math.abs(dot.r - outerR) < 0.15) {
          dot.detectedAt = t;
        }
        const sinceDetect = t - dot.detectedAt;
        if (sinceDetect >= 0 && sinceDetect < 1.0) {
          const pulse = 1.2 + Math.sin((sinceDetect) * 8) * 0.3;
          dot.mesh.scale.setScalar(pulse);
          dot.mesh.material.opacity = 0.95;
          dot.mesh.material.color.set(0xff4444);
          dot.mesh.visible = true;
        } else {
          dot.mesh.scale.setScalar(1);
          dot.mesh.material.opacity = 0;
          dot.mesh.visible = false;
        }
      });
      renderer.render(scene, camera);
      drawRadarOverlay(sweepAngle, outerR);
      animationIdRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Handle resize and scroll
    const handleResize = () => {
      camera.aspect = window.innerWidth / document.body.scrollHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, document.body.scrollHeight);
      renderer.domElement.style.height = `${document.body.scrollHeight}px`;
      overlayCanvas.width = window.innerWidth;
      overlayCanvas.height = document.body.scrollHeight;
      overlayCanvas.style.height = `${document.body.scrollHeight}px`;
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (mountRef.current && overlayCanvas.parentNode === mountRef.current) {
        mountRef.current.removeChild(overlayCanvas);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      className={className}
    />
  );
};

// Main Component
const NAVBAR_HEIGHT = 56; // px (approx. 3.5rem)

const CyberBackgroundEffects = ({ effect = 'matrix', className = '' }) => {
  const canvasRef = useRef(null);
  const [canvasReady, setCanvasReady] = useState(false);
  
  console.log('CyberBackgroundEffects: effect =', effect, 'canvasRef =', canvasRef, 'canvasReady =', canvasReady, 'timestamp =', Date.now());
  
  // Wait for canvas to be mounted
  useEffect(() => {
    if (canvasRef.current) {
      setCanvasReady(true);
      console.log('Canvas is now ready:', canvasRef.current);
    }
  }, [canvasRef.current]);
  
  // Clear canvas when effect changes
  useEffect(() => {
    if (canvasRef.current && canvasReady) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Completely clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reset canvas size to force complete re-initialization
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      console.log('Canvas cleared and reset for effect:', effect);
    }
  }, [effect, canvasReady]);
  
  const renderEffect = () => {
    if (!canvasReady) {
      console.log('Canvas not ready yet, not rendering effect');
      return null;
    }
    
    console.log('Rendering effect:', effect);
    
    switch (effect) {
      case 'matrix':
        return <MatrixRain key="matrix" canvasRef={canvasRef} />;
      case 'glitch':
        return <GlitchEffect key="glitch" canvasRef={canvasRef} />;
      case 'particles':
        return <ParticleNetwork key="particles" canvasRef={canvasRef} />;
      case 'terminal':
        return <TerminalWindow key="terminal" canvasRef={canvasRef} />;
      case 'radar':
        return <RadarPulse key="radar" canvasRef={canvasRef} />;
      case 'neural':
        return <NeuralNetwork key="neural" canvasRef={canvasRef} />;
      case 'lock':
        return <LockCircuit key="lock" canvasRef={canvasRef} />;
      case 'ascii':
        return <ASCIIBackground key="ascii" canvasRef={canvasRef} />;
      case 'heatmap':
        return <HeatmapGrid key="heatmap" canvasRef={canvasRef} />;
      case 'cornerWave':
        return <CornerWave key="cornerWave" canvasRef={canvasRef} />;
      case 'cornerWaveAR':
        return <CornerWaveAR key="cornerWaveAR" className={className} />;
      default:
        return <MatrixRain key="matrix-default" canvasRef={canvasRef} />;
    }
  };
  
  return (
    <div
      key={effect}
      className={`fixed left-0 right-0 pointer-events-none z-0 ${className}`}
      style={{
        position: 'fixed',
        top: `${NAVBAR_HEIGHT}px`,
        left: 0,
        width: '100vw',
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div key={effect}>
        {renderEffect()}
      </div>
    </div>
  );
};

export default CyberBackgroundEffects; 