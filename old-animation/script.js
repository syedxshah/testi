/* ============================================
   4F STUDIO — CINEMATIC ANIMATION ENGINE
   Zero-Gravity Physics + Particle System
   ============================================ */

(function () {
    'use strict';

    // ─── Configuration ───────────────────────
    const CONFIG = {
        colors: {
            blue: { r: 37, g: 99, b: 235 },
            blueLight: { r: 96, g: 165, b: 250 },
            gold: { r: 201, g: 168, b: 76 },
            goldLight: { r: 226, g: 204, b: 122 },
        },
        particles: {
            count: 120,
            maxSize: 2.2,
            minSize: 0.3,
            speed: 0.15,
            connectionDistance: 150,
            connectionOpacity: 0.06,
        },
        lightRays: {
            count: 5,
            maxWidth: 3,
            speed: 0.002,
        },
        physics: {
            floatSpeed: 0.0004,
            mouseInfluence: 0.02,
            damping: 0.95,
            returnForce: 0.01,
        },
    };

    // ─── State ───────────────────────────────
    const state = {
        mouse: { x: 0, y: 0, vx: 0, vy: 0 },
        time: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    };

    // ─── Particle Canvas ─────────────────────
    const particleCanvas = document.getElementById('particleCanvas');
    const pCtx = particleCanvas.getContext('2d');

    const lightCanvas = document.getElementById('lightRayCanvas');
    const lCtx = lightCanvas.getContext('2d');

    function resizeCanvases() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        state.width = window.innerWidth;
        state.height = window.innerHeight;

        [particleCanvas, lightCanvas].forEach(c => {
            c.width = state.width * dpr;
            c.height = state.height * dpr;
            c.style.width = state.width + 'px';
            c.style.height = state.height + 'px';
            c.getContext('2d').scale(dpr, dpr);
        });
    }

    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);

    // ─── Particle System ─────────────────────
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * state.width;
            this.y = Math.random() * state.height;
            this.size = CONFIG.particles.minSize + Math.random() * (CONFIG.particles.maxSize - CONFIG.particles.minSize);
            this.speedX = (Math.random() - 0.5) * CONFIG.particles.speed;
            this.speedY = (Math.random() - 0.5) * CONFIG.particles.speed;
            this.opacity = 0.1 + Math.random() * 0.4;
            this.phase = Math.random() * Math.PI * 2;
            this.isGold = Math.random() < 0.2;
            this.pulseSpeed = 0.005 + Math.random() * 0.01;
        }

        update(time) {
            this.x += this.speedX + Math.sin(time * 0.001 + this.phase) * 0.05;
            this.y += this.speedY + Math.cos(time * 0.0008 + this.phase) * 0.04;

            // Subtle mouse repulsion
            const dx = this.x - state.mouse.x;
            const dy = this.y - state.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
                const force = (200 - dist) / 200 * 0.3;
                this.x += (dx / dist) * force;
                this.y += (dy / dist) * force;
            }

            // Pulse opacity
            this.opacity = 0.15 + Math.sin(time * this.pulseSpeed + this.phase) * 0.15;

            // Wrap
            if (this.x < -10) this.x = state.width + 10;
            if (this.x > state.width + 10) this.x = -10;
            if (this.y < -10) this.y = state.height + 10;
            if (this.y > state.height + 10) this.y = -10;
        }

        draw(ctx) {
            const c = this.isGold ? CONFIG.colors.gold : CONFIG.colors.blue;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${this.opacity})`;
            ctx.fill();

            // Glow
            if (this.size > 1.2) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${this.opacity * 0.1})`;
                ctx.fill();
            }
        }
    }

    const particles = Array.from({ length: CONFIG.particles.count }, () => new Particle());

    function drawConnections(ctx) {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONFIG.particles.connectionDistance) {
                    const opacity = (1 - dist / CONFIG.particles.connectionDistance) * CONFIG.particles.connectionOpacity;
                    const c = particles[i].isGold || particles[j].isGold ? CONFIG.colors.gold : CONFIG.colors.blue;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    // ─── Light Rays ──────────────────────────
    class LightRay {
        constructor(index) {
            this.index = index;
            this.angle = (index / CONFIG.lightRays.count) * Math.PI * 2;
            this.speed = CONFIG.lightRays.speed * (0.5 + Math.random());
            this.width = 1 + Math.random() * CONFIG.lightRays.maxWidth;
            this.length = 0.4 + Math.random() * 0.5;
            this.isGold = index % 3 === 0;
            this.opacity = 0.03 + Math.random() * 0.04;
            this.phase = Math.random() * Math.PI * 2;
        }

        update(time) {
            this.angle += this.speed;
            this.opacity = 0.02 + Math.sin(time * 0.001 + this.phase) * 0.025;
        }

        draw(ctx) {
            const cx = state.width / 2;
            const cy = state.height / 2;
            const maxLen = Math.max(state.width, state.height) * this.length;

            const x1 = cx;
            const y1 = cy;
            const x2 = cx + Math.cos(this.angle) * maxLen;
            const y2 = cy + Math.sin(this.angle) * maxLen;

            const c = this.isGold ? CONFIG.colors.gold : CONFIG.colors.blueLight;
            const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
            gradient.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
            gradient.addColorStop(0.3, `rgba(${c.r}, ${c.g}, ${c.b}, ${this.opacity})`);
            gradient.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.width;
            ctx.stroke();
        }
    }

    const lightRays = Array.from({ length: CONFIG.lightRays.count }, (_, i) => new LightRay(i));

    // ─── Zero-Gravity Float System ───────────
    class FloatController {
        constructor(element) {
            this.el = element;
            this.speed = parseFloat(element.dataset.speed) || 0.3;
            this.amplitude = parseFloat(element.dataset.amplitude) || 20;
            this.phase = parseFloat(element.dataset.phase) || 0;

            this.baseX = 0;
            this.baseY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.rotX = 0;
            this.rotY = 0;
            this.rotZ = 0;
            this.velocityX = 0;
            this.velocityY = 0;

            // Get initial position from CSS
            const rect = element.getBoundingClientRect();
            this.baseX = rect.left + rect.width / 2;
            this.baseY = rect.top + rect.height / 2;
        }

        update(time, mouseX, mouseY) {
            const t = time * CONFIG.physics.floatSpeed;

            // Multi-axis sinusoidal float (weighted, slow physics)
            const floatX = Math.sin(t * this.speed + this.phase) * this.amplitude +
                           Math.sin(t * this.speed * 0.7 + this.phase * 1.3) * this.amplitude * 0.4;
            const floatY = Math.cos(t * this.speed * 0.8 + this.phase * 0.7) * this.amplitude * 0.8 +
                           Math.sin(t * this.speed * 0.5 + this.phase * 2.1) * this.amplitude * 0.3;
            const floatZ = Math.sin(t * this.speed * 0.3 + this.phase * 1.5) * this.amplitude * 0.5;

            // Mouse parallax influence (subtle, weighted)
            const centerX = state.width / 2;
            const centerY = state.height / 2;
            const mouseFactorX = (mouseX - centerX) / centerX;
            const mouseFactorY = (mouseY - centerY) / centerY;

            const targetVX = mouseFactorX * this.speed * 15;
            const targetVY = mouseFactorY * this.speed * 10;

            this.velocityX += (targetVX - this.velocityX) * CONFIG.physics.mouseInfluence;
            this.velocityY += (targetVY - this.velocityY) * CONFIG.physics.mouseInfluence;

            this.offsetX = floatX + this.velocityX;
            this.offsetY = floatY + this.velocityY;

            // Subtle rotation
            this.rotX = mouseFactorY * -3 + Math.sin(t * this.speed * 0.6 + this.phase) * 2;
            this.rotY = mouseFactorX * 3 + Math.cos(t * this.speed * 0.5 + this.phase) * 2;
            this.rotZ = Math.sin(t * this.speed * 0.2 + this.phase) * 1;

            // Apply transforms
            this.el.style.transform = `translate3d(${this.offsetX}px, ${this.offsetY}px, ${floatZ}px) 
                                       rotateX(${this.rotX}deg) 
                                       rotateY(${this.rotY}deg) 
                                       rotateZ(${this.rotZ}deg)`;
        }
    }

    // Initialize float controllers
    const floatElements = document.querySelectorAll('.float-element');
    const floatControllers = Array.from(floatElements).map(el => new FloatController(el));

    // ─── Mouse Tracking ──────────────────────
    let mouseActive = false;
    document.addEventListener('mousemove', (e) => {
        state.mouse.x = e.clientX;
        state.mouse.y = e.clientY;
        mouseActive = true;
    });

    // For touch devices
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            state.mouse.x = e.touches[0].clientX;
            state.mouse.y = e.touches[0].clientY;
            mouseActive = true;
        }
    }, { passive: true });

    // If no mouse, slowly drift
    if (!mouseActive) {
        state.mouse.x = state.width / 2;
        state.mouse.y = state.height / 2;
    }

    // ─── Floating Number Counter ─────────────
    function animateCounters() {
        const metrics = document.querySelectorAll('.metric-value');
        metrics.forEach(el => {
            const finalText = el.textContent;
            const match = finalText.match(/[\d.]+/);
            if (!match) return;

            const finalNum = parseFloat(match[0]);
            const prefix = finalText.slice(0, finalText.indexOf(match[0]));
            const suffix = finalText.slice(finalText.indexOf(match[0]) + match[0].length);
            let current = 0;
            const duration = 2500;
            const startTime = performance.now();

            function tick(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 4);
                current = finalNum * eased;

                if (finalNum >= 100) {
                    el.textContent = prefix + current.toFixed(finalNum % 1 === 0 ? 0 : 2) + suffix;
                } else {
                    el.textContent = prefix + current.toFixed(match[0].includes('.') ? match[0].split('.')[1].length : 0) + suffix;
                }

                if (progress < 1) requestAnimationFrame(tick);
                else el.textContent = finalText;
            }

            requestAnimationFrame(tick);
        });
    }

    // ─── Staggered Entrance Animation ────────
    function staggerEntrance() {
        const cards = document.querySelectorAll('.glass-card');
        const icons = document.querySelectorAll('.icon-3d');
        const geos = document.querySelectorAll('.geo-shape');

        [...cards, ...icons, ...geos].forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transition = `opacity 1.5s ease ${0.3 + i * 0.15}s`;
            requestAnimationFrame(() => {
                el.style.opacity = el.classList.contains('geo-shape') ? '0.15' : '1';
            });
        });
    }

    // ─── Main Animation Loop ─────────────────
    function animate(timestamp) {
        state.time = timestamp;

        // Clear canvases
        pCtx.clearRect(0, 0, state.width, state.height);
        lCtx.clearRect(0, 0, state.width, state.height);

        // Update & draw particles
        particles.forEach(p => {
            p.update(timestamp);
            p.draw(pCtx);
        });
        drawConnections(pCtx);

        // Update & draw light rays
        lightRays.forEach(r => {
            r.update(timestamp);
            r.draw(lCtx);
        });

        // Update float elements
        floatControllers.forEach(fc => {
            fc.update(timestamp, state.mouse.x, state.mouse.y);
        });

        // Auto-drift mouse if inactive
        if (!mouseActive) {
            state.mouse.x = state.width / 2 + Math.sin(timestamp * 0.0003) * 200;
            state.mouse.y = state.height / 2 + Math.cos(timestamp * 0.0002) * 100;
        }

        requestAnimationFrame(animate);
    }

    // ─── Interactive Hover Glow ──────────────
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(37, 99, 235, 0.35)';
            card.style.boxShadow = '0 8px 40px rgba(37, 99, 235, 0.15), 0 0 80px rgba(37, 99, 235, 0.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '';
            card.style.boxShadow = '';
        });

        // Card tilt on mouse
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.setProperty('--tiltX', (y * -8) + 'deg');
            card.style.setProperty('--tiltY', (x * 8) + 'deg');
        });
    });

    // ─── Boot ────────────────────────────────
    window.addEventListener('load', () => {
        staggerEntrance();
        setTimeout(animateCounters, 800);
        requestAnimationFrame(animate);
    });

})();
