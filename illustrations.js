/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly
 * Visual Art Engine & Scene Illustrations
 */

const Illustrations = {
  // Shared SVG Definitions (Gradients & Filters)
  getSharedDefs() {
    return `
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bae6fd" />
          <stop offset="60%" stop-color="#e0f2fe" />
          <stop offset="100%" stop-color="#fef3c7" />
        </linearGradient>

        <linearGradient id="hillGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#86efac" />
          <stop offset="100%" stop-color="#4ade80" />
        </linearGradient>

        <linearGradient id="hillGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4ade80" />
          <stop offset="100%" stop-color="#22c55e" />
        </linearGradient>

        <linearGradient id="schoolWall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>

        <linearGradient id="schoolRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e40af" />
          <stop offset="100%" stop-color="#1e3a8a" />
        </linearGradient>

        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.15" />
        </filter>
        <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    `;
  },

  // Helper to draw consistent, expressive Grade 4 students
  drawKid(opts) {
    const { x, y, scale = 1, skinColor = "#fed7aa", hairColor = "#1e293b", hairStyle = "short", shirtColor = "#0284c7", pantsColor = "#334155", armPose = "wave", emotion = "smile", glasses = false } = opts;
    return `
      <g transform="translate(${x}, ${y}) scale(${scale})" class="animated-kid">
        <!-- Ground Shadow -->
        <ellipse cx="0" cy="98" rx="28" ry="7" fill="#0f172a" opacity="0.16" />

        <!-- Legs & Shoes -->
        <rect x="-14" y="55" width="10" height="38" rx="5" fill="${pantsColor}" />
        <rect x="4" y="55" width="10" height="38" rx="5" fill="${pantsColor}" />
        <ellipse cx="-9" cy="94" rx="8" ry="4" fill="#0f172a" />
        <ellipse cx="9" cy="94" rx="8" ry="4" fill="#0f172a" />

        <!-- Torso & School Shirt -->
        <rect x="-20" y="14" width="40" height="46" rx="14" fill="${shirtColor}" filter="url(#softShadow)" />
        <polygon points="-7,14 0,22 7,14" fill="#ffffff" />
        <circle cx="0" cy="30" r="2.5" fill="#ffffff" />
        <circle cx="0" cy="40" r="2.5" fill="#ffffff" />

        <!-- Arms -->
        ${armPose === 'wave' ? `
          <path d="M16 22 Q 32 8 36 -10" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="36" cy="-12" r="6" fill="${skinColor}" />
          <path d="M-16 22 Q -24 38 -20 50" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="-20" cy="52" r="6" fill="${skinColor}" />
        ` : `
          <path d="M-16 22 Q -26 36 -22 48" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="-22" cy="50" r="6" fill="${skinColor}" />
          <path d="M16 22 Q 26 36 22 48" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="22" cy="50" r="6" fill="${skinColor}" />
        `}

        <!-- Neck & Head -->
        <rect x="-6" y="2" width="12" height="15" rx="4" fill="${skinColor}" />
        <ellipse cx="0" cy="-6" rx="22" ry="24" fill="${skinColor}" filter="url(#softShadow)" />

        <!-- Ears -->
        <ellipse cx="-22" cy="-6" rx="4.5" ry="6" fill="${skinColor}" />
        <ellipse cx="22" cy="-6" rx="4.5" ry="6" fill="${skinColor}" />

        <!-- Cheeks -->
        <circle cx="-12" cy="0" r="5" fill="#f43f5e" opacity="0.3" />
        <circle cx="12" cy="0" r="5" fill="#f43f5e" opacity="0.3" />

        <!-- Eyes & Sparkles -->
        <circle cx="-7" cy="-7" r="3.2" fill="#0f172a" />
        <circle cx="-6" cy="-8.5" r="1" fill="#ffffff" />
        <circle cx="7" cy="-7" r="3.2" fill="#0f172a" />
        <circle cx="8" cy="-8.5" r="1" fill="#ffffff" />

        <!-- Eyebrows -->
        <path d="M-12 -13 Q -7 -16 -2 -13" stroke="${hairColor}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M2 -13 Q 7 -16 12 -13" stroke="${hairColor}" stroke-width="2" stroke-linecap="round" fill="none" />

        <!-- Smile -->
        <path d="M-8 -1 Q 0 7 8 -1" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M-5 0 Q 0 5 5 0 Z" fill="#ef4444" />

        <!-- Glasses if Bhanuja -->
        ${glasses ? `
          <circle cx="-7" cy="-7" r="7" stroke="#1e293b" stroke-width="2" fill="none" />
          <circle cx="7" cy="-7" r="7" stroke="#1e293b" stroke-width="2" fill="none" />
          <line x1="0" y1="-7" x2="0" y2="-7" stroke="#1e293b" stroke-width="2" />
        ` : ''}

        <!-- Hair Styles -->
        ${hairStyle === 'curly' ? `
          <path d="M-23 -12 C -24 -28, -12 -34, 0 -34 C 12 -34, 24 -28, 23 -12 C 20 -15, 14 -18, 0 -18 C -14 -18, -20 -15, -23 -12 Z" fill="${hairColor}" />
          <circle cx="-16" cy="-24" r="8" fill="${hairColor}" />
          <circle cx="-5" cy="-30" r="9" fill="${hairColor}" />
          <circle cx="8" cy="-30" r="9" fill="${hairColor}" />
          <circle cx="17" cy="-22" r="8" fill="${hairColor}" />
        ` : hairStyle === 'braids' ? `
          <path d="M-22 -8 C -24 -30, -10 -34, 0 -34 C 10 -34, 24 -30, 22 -8 C 18 -15, 10 -18, 0 -18 C -10 -18, -18 -15, -22 -8 Z" fill="${hairColor}" />
          <path d="M-22 -4 Q -28 6 -26 18" stroke="${hairColor}" stroke-width="7" stroke-linecap="round" fill="none" />
          <circle cx="-22" cy="-4" r="4" fill="#ec4899" />
          <path d="M22 -4 Q 28 6 26 18" stroke="${hairColor}" stroke-width="7" stroke-linecap="round" fill="none" />
          <circle cx="22" cy="-4" r="4" fill="#ec4899" />
        ` : hairStyle === 'ponytail' ? `
          <path d="M-22 -10 C -24 -32, -8 -34, 0 -34 C 8 -34, 24 -32, 22 -10 C 16 -16, 8 -18, 0 -18 C -8 -18, -16 -16, -22 -10 Z" fill="${hairColor}" />
          <path d="M12 -30 Q 30 -36 34 -15" stroke="${hairColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="16" cy="-28" r="5" fill="#f43f5e" />
        ` : `
          <path d="M-22 -8 C -24 -28, -10 -32, 0 -32 C 10 -32, 24 -28, 22 -8 C 16 -14, 8 -16, 0 -16 C -8 -16, -16 -14, -22 -8 Z" fill="${hairColor}" />
        `}
      </g>
    `;
  },

  // Slide 01: Welcome Hero Scene
  renderSlide1() {
    return `
      <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <!-- Sky Backdrop & Golden Sun -->
        <rect x="0" y="0" width="800" height="600" rx="20" fill="url(#skyGrad)" />
        <circle cx="400" cy="180" r="140" fill="#fef08a" opacity="0.4" filter="url(#glowEffect)" />
        <circle cx="400" cy="180" r="90" fill="#fde047" opacity="0.6" />

        <!-- Sussex College Clock Tower Backdrop -->
        <g opacity="0.88">
          <rect x="220" y="160" width="360" height="150" fill="url(#schoolWall)" rx="8" />
          <rect x="360" y="80" width="80" height="120" fill="url(#schoolWall)" rx="6" />
          <polygon points="350,80 400,20 450,80" fill="url(#schoolRoof)" />
          <circle cx="400" cy="115" r="18" fill="#ffffff" stroke="#1e3a8a" stroke-width="2" />
          <line x1="400" y1="115" x2="400" y2="104" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" />
          <line x1="400" y1="115" x2="408" y2="115" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" />
          <line x1="400" y1="20" x2="400" y2="-5" stroke="#94a3b8" stroke-width="2.5" />
          <polygon points="400,-5 428,3 400,10" fill="#f59e0b" />
          <rect x="250" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <rect x="300" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <rect x="470" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <rect x="520" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <path d="M370 310 V 240 Q 400 220 430 240 V 310 Z" fill="#1e293b" />
        </g>

        <!-- Rolling Green Hills -->
        <path d="M-50 440 Q 200 340 500 400 T 850 360 L 850 600 L -50 600 Z" fill="url(#hillGrad1)" />
        <path d="M-50 480 Q 250 420 550 460 T 850 440 L 850 600 L -50 600 Z" fill="url(#hillGrad2)" />

        <!-- Pathway -->
        <path d="M320 600 Q 380 460 400 310 Q 420 460 480 600 Z" fill="#fde68a" opacity="0.6" />

        <!-- All Six Children Standing Proudly Side by Side -->
        ${this.drawKid({ x: 210, y: 440, scale: 1.05, shirtColor: '#0284c7', pantsColor: '#1e3a8a', hairColor: '#1e293b', hairStyle: 'curly', armPose: 'wave' })}
        ${this.drawKid({ x: 120, y: 445, scale: 1, shirtColor: '#ea580c', pantsColor: '#334155', hairColor: '#451a03', hairStyle: 'short', armPose: 'default' })}
        ${this.drawKid({ x: 305, y: 435, scale: 1.02, shirtColor: '#eab308', pantsColor: '#047857', hairColor: '#18181b', hairStyle: 'braids', armPose: 'wave' })}
        ${this.drawKid({ x: 495, y: 435, scale: 1.02, shirtColor: '#7c3aed', pantsColor: '#1e293b', hairColor: '#0f172a', hairStyle: 'short', armPose: 'default', glasses: true })}
        ${this.drawKid({ x: 590, y: 440, scale: 1.04, shirtColor: '#0d9488', pantsColor: '#1e3a8a', hairColor: '#365314', hairStyle: 'curly', armPose: 'wave' })}
        ${this.drawKid({ x: 680, y: 445, scale: 1, shirtColor: '#e11d48', pantsColor: '#4c1d95', hairColor: '#172554', hairStyle: 'ponytail', armPose: 'wave' })}

        <!-- Doves Flying in Sky -->
        <path d="M160 120 Q 170 110 180 120 Q 190 110 200 120" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M620 140 Q 630 130 640 140 Q 650 130 660 140" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" fill="none" />
      </svg>
    `;
  },

  // Initialize
  init() {
    const artSlide1 = document.getElementById('art-slide-1');
    if (artSlide1) artSlide1.innerHTML = this.renderSlide1();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Illustrations.init());
} else {
  Illustrations.init();
}
