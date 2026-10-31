/**
 * ===================================================================
 * INTERACTIVE NEURAL CONSTELLATION & QUANTUM MESH CANVAS
 * High-performance 60FPS physics particles with cursor gravity,
 * neural synapse links, and moving laser pulse packets.
 * ===================================================================
 */

export class NeuralCanvas {
  constructor(canvasId = 'neuralCanvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.pulses = [];
    this.mouse = { x: -1000, y: -1000, radius: 160 };
    this.animationId = null;
    this.width = 0;
    this.height = 0;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Mouse tracking
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    this.createParticles();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    if (this.particles.length > 0) {
      this.createParticles();
    }
  }

  createParticles() {
    this.particles = [];
    // Density calculation based on screen size
    const count = Math.min(Math.floor((this.width * this.height) / 16000), 95);

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        baseColor: i % 3 === 0 ? 'rgba(0, 212, 255,' : (i % 3 === 1 ? 'rgba(56, 107, 255,' : 'rgba(139, 92, 246,'),
        pulseAngle: Math.random() * Math.PI * 2
      });
    }
  }

  spawnPulse(p1, p2) {
    if (Math.random() < 0.008 && this.pulses.length < 25) {
      this.pulses.push({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        progress: 0,
        speed: 0.025 + Math.random() * 0.035,
        color: p1.baseColor
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Physics move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce on borders
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse proximity repulsion
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouse.radius) {
        const force = (this.mouse.radius - dist) / this.mouse.radius;
        const angle = Math.atan2(dy, dx);
        p.x -= Math.cos(angle) * force * 3;
        p.y -= Math.sin(angle) * force * 3;
      }

      // Draw particle
      p.pulseAngle += 0.03;
      const alpha = 0.5 + Math.sin(p.pulseAngle) * 0.3;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.baseColor} ${alpha})`;
      this.ctx.fill();

      // 2. Connect with neighbors
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
        const maxDist = 130;

        if (distance < maxDist) {
          const lineAlpha = (1 - distance / maxDist) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(56, 107, 255, ${lineAlpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();

          // Chance to spawn travelling data pulse
          this.spawnPulse(p, p2);
        }
      }

      // Connect to mouse if close
      if (dist < 150) {
        const mouseAlpha = (1 - dist / 150) * 0.45;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.strokeStyle = `rgba(0, 212, 255, ${mouseAlpha})`;
        this.ctx.lineWidth = 1.2;
        this.ctx.stroke();
      }
    }

    // 3. Update & render travelling pulses
    for (let k = this.pulses.length - 1; k >= 0; k--) {
      const pulse = this.pulses[k];
      pulse.progress += pulse.speed;

      if (pulse.progress >= 1) {
        this.pulses.splice(k, 1);
        continue;
      }

      const curX = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
      const curY = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

      this.ctx.beginPath();
      this.ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
      this.ctx.fillStyle = `${pulse.color} 0.9)`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = '#00D4FF';
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // reset
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
