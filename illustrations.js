/**
 * SIX VOICES, ONE MESSAGE - Custom Storybook SVG Illustrations
 * Sussex College Grade 4 Assembly
 * High-detail vector art with layered depth, gradients, and characters.
 */

const Illustrations = {
  // SVG Gradients & Shared Definitions
  getSharedDefs() {
    return `
      <defs>
        <!-- Campus & Building Gradients -->
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

        <linearGradient id="goldGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>

        <!-- Skin Tones -->
        <linearGradient id="skin1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fde047" stop-opacity="0.2" />
          <stop offset="0%" stop-color="#fed7aa" />
          <stop offset="100%" stop-color="#fbcfe8" />
        </linearGradient>
        <linearGradient id="skin2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcd34d" stop-opacity="0.2" />
          <stop offset="0%" stop-color="#fbb6ce" />
          <stop offset="100%" stop-color="#f472b6" />
        </linearGradient>
        <linearGradient id="skinWarm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffedd5" />
          <stop offset="100%" stop-color="#fed7aa" />
        </linearGradient>

        <!-- Drop Shadows -->
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

  // Helper to render a stylized storybook child
  drawKid(opts) {
    const { x, y, scale = 1, skinColor = "#fed7aa", hairColor = "#1e293b", hairStyle = "short", shirtColor = "#0284c7", pantsColor = "#334155", armPose = "wave", emotion = "smile", glasses = false } = opts;
    return `
      <g transform="translate(${x}, ${y}) scale(${scale})" class="animated-kid">
        <!-- Shadow -->
        <ellipse cx="0" cy="98" rx="28" ry="7" fill="#0f172a" opacity="0.18" />

        <!-- Legs & Shoes -->
        <rect x="-14" y="55" width="10" height="38" rx="5" fill="${pantsColor}" />
        <rect x="4" y="55" width="10" height="38" rx="5" fill="${pantsColor}" />
        <ellipse cx="-9" cy="94" rx="8" ry="4" fill="#0f172a" />
        <ellipse cx="9" cy="94" rx="8" ry="4" fill="#0f172a" />

        <!-- Torso & Shirt -->
        <rect x="-20" y="14" width="40" height="46" rx="14" fill="${shirtColor}" filter="url(#softShadow)" />
        <polygon points="-7,14 0,22 7,14" fill="#ffffff" />
        <circle cx="0" cy="30" r="2.5" fill="#ffffff" />
        <circle cx="0" cy="40" r="2.5" fill="#ffffff" />

        <!-- Arms -->
        ${armPose === 'wave' ? `
          <!-- Right arm waving -->
          <path d="M16 22 Q 32 8 36 -10" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="36" cy="-12" r="6" fill="${skinColor}" />
          <!-- Left arm rested -->
          <path d="M-16 22 Q -24 38 -20 50" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="-20" cy="52" r="6" fill="${skinColor}" />
        ` : armPose === 'hold' ? `
          <path d="M-16 22 Q -10 40 4 40" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="6" cy="40" r="6" fill="${skinColor}" />
          <path d="M16 22 Q 10 40 -4 40" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="-6" cy="40" r="6" fill="${skinColor}" />
        ` : armPose === 'reachDown' ? `
          <path d="M14 24 Q 28 48 38 70" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="39" cy="72" r="6.5" fill="${skinColor}" />
          <path d="M-14 24 Q -6 45 6 65" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="7" cy="67" r="6.5" fill="${skinColor}" />
        ` : armPose === 'raisedHand' ? `
          <!-- Right arm raised high for pledge -->
          <path d="M15 20 Q 26 -6 28 -32" stroke="${shirtColor}" stroke-width="10" stroke-linecap="round" fill="none" />
          <circle cx="28" cy="-35" r="7" fill="${skinColor}" />
          <!-- Sparkle on raised hand -->
          <circle cx="28" cy="-35" r="14" fill="#fef08a" opacity="0.4" />
          <!-- Left arm neat -->
          <path d="M-15 20 Q -22 36 -18 48" stroke="${shirtColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="-18" cy="50" r="6" fill="${skinColor}" />
        ` : `
          <!-- Default friendly stance -->
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

        <!-- Eyes -->
        <circle cx="-7" cy="-7" r="3.2" fill="#0f172a" />
        <circle cx="-6" cy="-8.5" r="1" fill="#ffffff" />
        <circle cx="7" cy="-7" r="3.2" fill="#0f172a" />
        <circle cx="8" cy="-8.5" r="1" fill="#ffffff" />

        <!-- Eyebrows -->
        <path d="M-12 -13 Q -7 -16 -2 -13" stroke="${hairColor}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M2 -13 Q 7 -16 12 -13" stroke="${hairColor}" stroke-width="2" stroke-linecap="round" fill="none" />

        <!-- Mouth -->
        ${emotion === 'smile' ? `
          <path d="M-8 -1 Q 0 7 8 -1" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M-5 0 Q 0 5 5 0 Z" fill="#ef4444" />
        ` : `
          <circle cx="0" cy="1" r="3.5" fill="#0f172a" />
        `}

        <!-- Glasses (if Bhanuja) -->
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
          <!-- Ponytails / ribbons -->
          <path d="M-22 -4 Q -28 6 -26 18" stroke="${hairColor}" stroke-width="7" stroke-linecap="round" fill="none" />
          <circle cx="-22" cy="-4" r="4" fill="#ec4899" />
          <path d="M22 -4 Q 28 6 26 18" stroke="${hairColor}" stroke-width="7" stroke-linecap="round" fill="none" />
          <circle cx="22" cy="-4" r="4" fill="#ec4899" />
        ` : hairStyle === 'ponytail' ? `
          <path d="M-22 -10 C -24 -32, -8 -34, 0 -34 C 8 -34, 24 -32, 22 -10 C 16 -16, 8 -18, 0 -18 C -8 -18, -16 -16, -22 -10 Z" fill="${hairColor}" />
          <path d="M12 -30 Q 30 -36 34 -15" stroke="${hairColor}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="16" cy="-28" r="5" fill="#f43f5e" />
        ` : `
          <!-- Neat short hair -->
          <path d="M-22 -8 C -24 -28, -10 -32, 0 -32 C 10 -32, 24 -28, 22 -8 C 16 -14, 8 -16, 0 -16 C -8 -16, -16 -14, -22 -8 Z" fill="${hairColor}" />
          <path d="M-18 -14 Q 0 -22 18 -14" fill="${hairColor}" />
        `}
      </g>
    `;
  },

  // Slide 1: Six Children Together on Sussex College Lawn
  renderSlide1() {
    return `
      <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <!-- Sky Backdrop & Sun -->
        <rect x="0" y="0" width="800" height="600" rx="20" fill="url(#skyGrad)" />
        <circle cx="400" cy="180" r="140" fill="#fef08a" opacity="0.4" filter="url(#glowEffect)" />
        <circle cx="400" cy="180" r="90" fill="#fde047" opacity="0.6" />

        <!-- Sussex College Building Backdrop Silhouette -->
        <g opacity="0.85">
          <!-- Main Hall -->
          <rect x="220" y="160" width="360" height="150" fill="url(#schoolWall)" rx="8" />
          <!-- Tower -->
          <rect x="360" y="80" width="80" height="120" fill="url(#schoolWall)" rx="6" />
          <polygon points="350,80 400,20 450,80" fill="url(#schoolRoof)" />
          <!-- Clock -->
          <circle cx="400" cy="115" r="18" fill="#ffffff" stroke="#1e3a8a" stroke-width="2" />
          <line x1="400" y1="115" x2="400" y2="104" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" />
          <line x1="400" y1="115" x2="408" y2="115" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" />
          <!-- Flagpole & Sussex Flag -->
          <line x1="400" y1="20" x2="400" y2="-5" stroke="#94a3b8" stroke-width="2.5" />
          <polygon points="400,-5 428,3 400,10" fill="#f59e0b" />
          <!-- Windows -->
          <rect x="250" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <rect x="300" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <rect x="470" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <rect x="520" y="180" width="30" height="45" rx="15" fill="#38bdf8" opacity="0.7" />
          <!-- Arched Grand Entrance -->
          <path d="M370 310 V 240 Q 400 220 430 240 V 310 Z" fill="#1e293b" />
        </g>

        <!-- Rolling Green Hills -->
        <path d="M-50 440 Q 200 340 500 400 T 850 360 L 850 600 L -50 600 Z" fill="url(#hillGrad1)" />
        <path d="M-50 480 Q 250 420 550 460 T 850 440 L 850 600 L -50 600 Z" fill="url(#hillGrad2)" />

        <!-- Pathway -->
        <path d="M320 600 Q 380 460 400 310 Q 420 460 480 600 Z" fill="#fde68a" opacity="0.6" />

        <!-- Garden Flowers & Bushes -->
        <circle cx="80" cy="460" r="30" fill="#22c55e" />
        <circle cx="110" cy="450" r="22" fill="#4ade80" />
        <circle cx="95" cy="435" r="7" fill="#fb7185" />
        <circle cx="700" cy="470" r="32" fill="#22c55e" />
        <circle cx="725" cy="455" r="24" fill="#86efac" />
        <circle cx="710" cy="445" r="8" fill="#facc15" />

        <!-- All Six Children Standing Proudly Side by Side -->
        <!-- 1. Abhippra (Left-mid, wave) -->
        ${this.drawKid({ x: 210, y: 440, scale: 1.05, shirtColor: '#0284c7', pantsColor: '#1e3a8a', hairColor: '#1e293b', hairStyle: 'curly', armPose: 'wave' })}
        <!-- 2. Peshala (Left, confident smile) -->
        ${this.drawKid({ x: 120, y: 445, scale: 1, shirtColor: '#ea580c', pantsColor: '#334155', hairColor: '#451a03', hairStyle: 'short', armPose: 'default' })}
        <!-- 3. Thiseni (Center-left, braided ribbons) -->
        ${this.drawKid({ x: 305, y: 435, scale: 1.02, shirtColor: '#eab308', pantsColor: '#047857', hairColor: '#18181b', hairStyle: 'braids', armPose: 'hold' })}
        <!-- 4. Bhanuja (Center-right, smart glasses) -->
        ${this.drawKid({ x: 495, y: 435, scale: 1.02, shirtColor: '#7c3aed', pantsColor: '#1e293b', hairColor: '#0f172a', hairStyle: 'short', armPose: 'hold', glasses: true })}
        <!-- 5. Yenuth (Right-mid, friendly posture) -->
        ${this.drawKid({ x: 590, y: 440, scale: 1.04, shirtColor: '#0d9488', pantsColor: '#1e3a8a', hairColor: '#365314', hairStyle: 'curly', armPose: 'default' })}
        <!-- 6. Dewli (Far right, waving with warmth) -->
        ${this.drawKid({ x: 680, y: 445, scale: 1, shirtColor: '#e11d48', pantsColor: '#4c1d95', hairColor: '#172554', hairStyle: 'ponytail', armPose: 'wave' })}

        <!-- Flying Birds / Doves in the Sky -->
        <path d="M160 120 Q 170 110 180 120 Q 190 110 200 120" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M620 140 Q 630 130 640 140 Q 650 130 660 140" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M650 115 Q 658 107 666 115 Q 674 107 682 115" stroke="#0284c7" stroke-width="2" stroke-linecap="round" fill="none" />
      </svg>
    `;
  },

  // Slide 3: Abhippra - Helping a classmate pick up dropped books
  renderSlide3() {
    return `
      <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <rect width="700" height="520" rx="20" fill="url(#skyGrad)" />
        
        <!-- Hallway Floor & Wall -->
        <rect x="0" y="320" width="700" height="200" fill="#fef3c7" />
        <line x1="0" y1="320" x2="700" y2="320" stroke="#fde68a" stroke-width="3" />
        <!-- Floor grid perspective lines -->
        <line x1="120" y1="320" x2="60" y2="520" stroke="#fde68a" stroke-width="2" opacity="0.6" />
        <line x1="320" y1="320" x2="280" y2="520" stroke="#fde68a" stroke-width="2" opacity="0.6" />
        <line x1="520" y1="320" x2="550" y2="520" stroke="#fde68a" stroke-width="2" opacity="0.6" />

        <!-- Classroom Lockers / Bulletin Board in Background -->
        <rect x="60" y="80" width="580" height="220" rx="12" fill="#ffffff" filter="url(#softShadow)" />
        <rect x="80" y="100" width="540" height="180" rx="8" fill="#e0f2fe" />
        <!-- Poster on bulletin board -->
        <rect x="110" y="120" width="100" height="130" rx="6" fill="#fef08a" />
        <text x="160" y="150" font-family="Outfit" font-size="12" font-weight="800" text-anchor="middle" fill="#854d0e">SUSSEX</text>
        <text x="160" y="170" font-family="Outfit" font-size="10" font-weight="700" text-anchor="middle" fill="#a16207">BE KIND</text>
        <circle cx="160" cy="205" r="14" fill="#fbbf24" />

        <!-- Abhippra Kneeling and Handing a Book (Left-Center) -->
        <g transform="translate(250, 310)">
          <!-- Abhippra's character -->
          ${this.drawKid({ x: 0, y: 30, scale: 1.15, shirtColor: '#0284c7', pantsColor: '#1e3a8a', hairColor: '#1e293b', hairStyle: 'curly', armPose: 'reachDown' })}
          <!-- Book in Abhippra's hands -->
          <rect x="36" y="88" width="45" height="30" rx="4" fill="#ea580c" transform="rotate(-15)" filter="url(#softShadow)" />
          <line x1="42" y1="92" x2="72" y2="84" stroke="#ffffff" stroke-width="2" />
        </g>

        <!-- Fallen Books & Papers Scattered on Floor -->
        <g transform="translate(360, 420)">
          <rect x="-40" y="-10" width="50" height="35" rx="4" fill="#3b82f6" transform="rotate(25)" />
          <rect x="10" y="15" width="48" height="32" rx="4" fill="#10b981" transform="rotate(-10)" />
          <rect x="-15" y="30" width="42" height="28" rx="4" fill="#f59e0b" transform="rotate(40)" />
          <!-- Scattered worksheets -->
          <rect x="30" y="-5" width="34" height="42" rx="2" fill="#ffffff" transform="rotate(-30)" stroke="#e2e8f0" />
          <line x1="36" y1="6" x2="56" y2="-4" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="38" y1="14" x2="58" y2="4" stroke="#94a3b8" stroke-width="1.5" />
        </g>

        <!-- Grateful Classmate (Right side, smiling thankfully) -->
        <g transform="translate(480, 290)">
          ${this.drawKid({ x: 0, y: 50, scale: 1.12, shirtColor: '#f43f5e', pantsColor: '#334155', hairColor: '#451a03', hairStyle: 'ponytail', armPose: 'hold' })}
        </g>

        <!-- Kindness Hearts & Sparkles Floating Between Them -->
        <g filter="url(#glowEffect)">
          <path d="M 360 270 C 360 260 375 255 385 268 C 395 255 410 260 410 270 C 410 285 385 300 385 305 C 385 300 360 285 360 270 Z" fill="#f43f5e" />
          <circle cx="340" cy="240" r="5" fill="#fde047" />
          <circle cx="430" cy="250" r="4" fill="#38bdf8" />
        </g>
      </svg>
    `;
  },

  // Slide 4: Peshala - Inviting everyone to play on the playground
  renderSlide4() {
    return `
      <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <rect width="700" height="520" rx="20" fill="url(#skyGrad)" />
        
        <!-- Sunny Playground Court & Green Field -->
        <path d="M0 310 Q 350 280 700 310 L 700 520 L 0 520 Z" fill="#86efac" />
        <rect x="0" y="360" width="700" height="160" fill="#fed7aa" />
        <!-- Court Line Markings -->
        <circle cx="350" cy="440" r="80" stroke="#ffffff" stroke-width="4" fill="none" />
        <line x1="350" y1="360" x2="350" y2="520" stroke="#ffffff" stroke-width="4" />

        <!-- Basketball Hoop in Background -->
        <line x1="610" y1="360" x2="610" y2="150" stroke="#475569" stroke-width="6" />
        <rect x="580" y="140" width="60" height="42" rx="4" fill="#ffffff" stroke="#e11d48" stroke-width="3" />
        <rect x="595" y="155" width="30" height="20" stroke="#e11d48" stroke-width="2" fill="none" />
        <ellipse cx="610" cy="182" rx="16" ry="5" fill="none" stroke="#ea580c" stroke-width="3" />
        <path d="M596 182 L 602 205 L 618 205 L 624 182" fill="none" stroke="#ffffff" stroke-width="1.5" />

        <!-- Peshala (Center-Left) Welcoming with Open Arm & Basketball -->
        <g transform="translate(260, 310)">
          ${this.drawKid({ x: 0, y: 35, scale: 1.15, shirtColor: '#ea580c', pantsColor: '#1e3a8a', hairColor: '#451a03', hairStyle: 'short', armPose: 'wave' })}
          <!-- Basketball in Peshala's left hand -->
          <circle cx="-32" cy="72" r="18" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <path d="M-48 72 H-16" stroke="#431407" stroke-width="1.8" />
          <path d="M-32 54 V90" stroke="#431407" stroke-width="1.8" />
        </g>

        <!-- New / Hesitant Student Invited In (Left, smiling happily now) -->
        <g transform="translate(100, 325)">
          ${this.drawKid({ x: 0, y: 30, scale: 1.05, shirtColor: '#10b981', pantsColor: '#334155', hairColor: '#1e293b', hairStyle: 'curly', armPose: 'hold' })}
        </g>

        <!-- Friends Playing Joyfully in the Background -->
        <g transform="translate(470, 280) scale(0.85)">
          ${this.drawKid({ x: 0, y: 30, scale: 1, shirtColor: '#3b82f6', pantsColor: '#1e293b', hairColor: '#1e293b', hairStyle: 'short', armPose: 'wave' })}
          ${this.drawKid({ x: 90, y: 35, scale: 0.98, shirtColor: '#ec4899', pantsColor: '#047857', hairColor: '#312e81', hairStyle: 'ponytail', armPose: 'default' })}
        </g>

        <!-- Big Inclusive Sun in Sky -->
        <circle cx="100" cy="110" r="50" fill="#fde047" opacity="0.8" />
        <circle cx="100" cy="110" r="70" fill="#fef08a" opacity="0.3" filter="url(#glowEffect)" />
      </svg>
    `;
  },

  // Slide 5: Thiseni - Returning a lost pencil case with honesty
  renderSlide5() {
    return `
      <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <rect width="700" height="520" rx="20" fill="url(#skyGrad)" />
        
        <!-- Classroom Background Wall & Windows -->
        <rect x="0" y="290" width="700" height="230" fill="#fed7aa" />
        <rect x="80" y="60" width="540" height="210" rx="14" fill="#ffffff" filter="url(#softShadow)" />
        <!-- Classroom Chalkboard -->
        <rect x="110" y="80" width="480" height="160" rx="8" fill="#065f46" stroke="#b45309" stroke-width="8" />
        <text x="350" y="140" font-family="Baloo 2" font-size="28" font-weight="700" text-anchor="middle" fill="#a7f3d0">Truth • Trust • Honesty</text>
        <text x="350" y="175" font-family="Outfit" font-size="16" font-weight="600" text-anchor="middle" fill="#ecfdf5">"Always choose what is right."</text>
        <!-- Chalk Stars on Board -->
        <polygon points="170,120 174,130 185,130 176,136 179,146 170,140 161,146 164,136 155,130 166,130" fill="#fde047" />
        <polygon points="530,120 534,130 545,130 536,136 539,146 530,140 521,146 524,136 515,130 526,130" fill="#fde047" />

        <!-- Student Desks -->
        <g transform="translate(130, 360)">
          <rect x="-50" y="0" width="160" height="30" rx="6" fill="#b45309" />
          <line x1="-35" y1="30" x2="-35" y2="120" stroke="#475569" stroke-width="8" />
          <line x1="95" y1="30" x2="95" y2="120" stroke="#475569" stroke-width="8" />
        </g>

        <!-- Thiseni (Center) Holding Out the Lost Pencil Case -->
        <g transform="translate(310, 275)">
          ${this.drawKid({ x: 0, y: 40, scale: 1.15, shirtColor: '#eab308', pantsColor: '#047857', hairColor: '#18181b', hairStyle: 'braids', armPose: 'hold' })}
          
          <!-- Sparkling Returned Pencil Case in Hands -->
          <g transform="translate(0, 75)" filter="url(#glowEffect)">
            <rect x="-24" y="-12" width="48" height="24" rx="8" fill="#ec4899" stroke="#ffffff" stroke-width="2" />
            <line x1="-20" y1="0" x2="16" y2="0" stroke="#fbcfe8" stroke-width="3" stroke-linecap="round" />
            <!-- Pencils peeking out -->
            <polygon points="18,-6 26,-6 22,-14" fill="#38bdf8" />
            <polygon points="10,-6 18,-6 14,-15" fill="#facc15" />
            <!-- Golden Glow Star -->
            <polygon points="0,-18 3,-10 11,-10 5,-5 7,3 0,-1 -7,3 -5,-5 -11,-10 -3,-10" fill="#fde047" />
          </g>
        </g>

        <!-- Classmate Delighted and Relieved (Right Side) -->
        <g transform="translate(500, 280)">
          ${this.drawKid({ x: 0, y: 38, scale: 1.1, shirtColor: '#06b6d4', pantsColor: '#334155', hairColor: '#1e293b', hairStyle: 'short', armPose: 'wave' })}
        </g>
      </svg>
    `;
  },

  // Slide 6: Bhanuja - Respect in classroom and listening to teacher
  renderSlide6() {
    return `
      <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <rect width="700" height="520" rx="20" fill="url(#skyGrad)" />
        
        <!-- Classroom Background with Arched Windows -->
        <rect x="0" y="330" width="700" height="190" fill="#fed7aa" />
        <g opacity="0.9">
          <!-- Two Big Arched Windows showing Sun and Tree -->
          <rect x="80" y="60" width="130" height="220" rx="65" fill="#bae6fd" stroke="#ffffff" stroke-width="8" />
          <line x1="145" y1="60" x2="145" y2="280" stroke="#ffffff" stroke-width="6" />
          <line x1="80" y1="170" x2="210" y2="170" stroke="#ffffff" stroke-width="6" />

          <rect x="490" y="60" width="130" height="220" rx="65" fill="#bae6fd" stroke="#ffffff" stroke-width="8" />
          <line x1="555" y1="60" x2="555" y2="280" stroke="#ffffff" stroke-width="6" />
          <line x1="490" y1="170" x2="620" y2="170" stroke="#ffffff" stroke-width="6" />
        </g>

        <!-- Kind Sussex Teacher Standing near Board (Left-Center) -->
        <g transform="translate(230, 210)">
          <!-- Teacher body -->
          <ellipse cx="0" cy="180" rx="30" ry="8" fill="#0f172a" opacity="0.15" />
          <rect x="-14" y="90" width="28" height="85" rx="8" fill="#1e3a8a" />
          <rect x="-22" y="30" width="44" height="65" rx="14" fill="#0284c7" />
          <!-- Teacher Head -->
          <circle cx="0" cy="0" r="22" fill="#fed7aa" />
          <circle cx="0" cy="-6" r="23" fill="#451a03" />
          <circle cx="0" cy="2" r="21" fill="#fed7aa" />
          <!-- Smile & Gentle Eyes -->
          <circle cx="-7" cy="1" r="2.5" fill="#0f172a" />
          <circle cx="7" cy="1" r="2.5" fill="#0f172a" />
          <path d="M-6 8 Q 0 14 6 8" stroke="#0f172a" stroke-width="2" fill="none" stroke-linecap="round" />
          <!-- Teaching gesture with pointer / book -->
          <path d="M18 45 Q 36 30 50 15" stroke="#0284c7" stroke-width="8" stroke-linecap="round" fill="none" />
          <circle cx="52" cy="13" r="6" fill="#fed7aa" />
          <!-- Teacher Name Badge -->
          <rect x="-35" y="100" width="70" height="15" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
          <text x="0" y="111" font-family="Outfit" font-size="8" font-weight="800" text-anchor="middle" fill="#0d2c54">MS. DARSHANI</text>
        </g>

        <!-- Bhanuja (Center-Right) Seated Respectfully, Hand Gently Raised, Circular Glasses -->
        <g transform="translate(410, 280)">
          ${this.drawKid({ x: 0, y: 35, scale: 1.15, shirtColor: '#7c3aed', pantsColor: '#1e293b', hairColor: '#0f172a', hairStyle: 'short', armPose: 'raisedHand', glasses: true })}
        </g>

        <!-- Peer Student Beside Bhanuja, Listening Politely -->
        <g transform="translate(560, 290)">
          ${this.drawKid({ x: 0, y: 30, scale: 1.08, shirtColor: '#10b981', pantsColor: '#334155', hairColor: '#18181b', hairStyle: 'braids', armPose: 'hold' })}
        </g>

        <!-- Floating Respect & Harmony Notes in Air -->
        <circle cx="340" cy="170" r="6" fill="#a855f7" filter="url(#glowEffect)" />
        <circle cx="380" cy="140" r="4" fill="#38bdf8" />
        <circle cx="450" cy="130" r="5" fill="#fde047" />
      </svg>
    `;
  },

  // Slide 7: Yenuth - Caring for a dog, cat, and birds in garden
  renderSlide7() {
    return `
      <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <rect width="700" height="520" rx="20" fill="url(#skyGrad)" />
        
        <!-- Sussex College Lush Garden Lawn & Flowers -->
        <path d="M0 310 Q 350 260 700 310 L 700 520 L 0 520 Z" fill="#4ade80" />
        <path d="M0 370 Q 350 330 700 370 L 700 520 L 0 520 Z" fill="#22c55e" />

        <!-- Sunflowers and Daisies in Background -->
        <g transform="translate(80, 240)">
          <line x1="0" y1="120" x2="0" y2="40" stroke="#15803d" stroke-width="6" />
          <circle cx="0" cy="40" r="28" fill="#facc15" />
          <circle cx="0" cy="40" r="14" fill="#78350f" />
        </g>
        <g transform="translate(130, 270)">
          <line x1="0" y1="100" x2="0" y2="35" stroke="#15803d" stroke-width="5" />
          <circle cx="0" cy="35" r="20" fill="#fde047" />
          <circle cx="0" cy="35" r="10" fill="#78350f" />
        </g>

        <!-- Yenuth Kneeling Warmly and Petting Animals (Center) -->
        <g transform="translate(300, 290)">
          ${this.drawKid({ x: 0, y: 35, scale: 1.15, shirtColor: '#0d9488', pantsColor: '#1e3a8a', hairColor: '#365314', hairStyle: 'curly', armPose: 'reachDown' })}
          <!-- Animal Care Badge on Yenuth's shirt -->
          <circle cx="0" cy="65" r="6" fill="#fde047" />
          <path d="M-2 65 L 0 67 L 3 63" stroke="#0f172a" stroke-width="1.2" fill="none" />
        </g>

        <!-- Golden Puppy Wagging Tail Happily (Right of Yenuth) -->
        <g transform="translate(420, 390)">
          <ellipse cx="0" cy="20" rx="34" ry="7" fill="#0f172a" opacity="0.18" />
          <!-- Dog Body -->
          <ellipse cx="0" cy="0" rx="30" ry="20" fill="#f59e0b" />
          <!-- Dog Legs -->
          <rect x="-18" y="10" width="8" height="18" rx="4" fill="#d97706" />
          <rect x="10" y="10" width="8" height="18" rx="4" fill="#d97706" />
          <!-- Dog Head -->
          <circle cx="-24" cy="-14" r="18" fill="#f59e0b" />
          <!-- Floppy Ear -->
          <ellipse cx="-28" cy="-8" rx="6" ry="14" fill="#b45309" transform="rotate(20)" />
          <!-- Nose & Eye -->
          <circle cx="-36" cy="-14" r="4" fill="#0f172a" />
          <circle cx="-24" cy="-18" r="3" fill="#0f172a" />
          <circle cx="-23" cy="-19" r="1" fill="#ffffff" />
          <!-- Wagging Tail -->
          <path d="M26 -4 Q 40 -18 36 -32" stroke="#d97706" stroke-width="6" stroke-linecap="round" fill="none" />
          <!-- Dog Collar -->
          <path d="M-18 -4 L -12 2" stroke="#e11d48" stroke-width="4" stroke-linecap="round" />
        </g>

        <!-- Cozy Kitten Sitting Peacefully (Left of Yenuth) -->
        <g transform="translate(190, 415)">
          <ellipse cx="0" cy="14" rx="22" ry="5" fill="#0f172a" opacity="0.15" />
          <!-- Kitten Body -->
          <ellipse cx="0" cy="0" rx="18" ry="14" fill="#e2e8f0" />
          <circle cx="0" cy="-12" r="12" fill="#e2e8f0" />
          <!-- Ears -->
          <polygon points="-8,-20 -2,-26 -1,-18" fill="#f43f5e" />
          <polygon points="8,-20 2,-26 1,-18" fill="#f43f5e" />
          <!-- Eyes & Whiskers -->
          <path d="M-5 -12 Q -3 -10 -1 -12" stroke="#0f172a" stroke-width="1.5" fill="none" />
          <path d="M1 -12 Q 3 -10 5 -12" stroke="#0f172a" stroke-width="1.5" fill="none" />
          <line x1="-12" y1="-9" x2="-2" y2="-9" stroke="#94a3b8" stroke-width="1" />
          <line x1="2" y1="-9" x2="12" y2="-9" stroke="#94a3b8" stroke-width="1" />
          <!-- Tail curled -->
          <path d="M16 2 Q 26 6 22 14" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round" fill="none" />
        </g>

        <!-- Bluebirds in Tree / Garden -->
        <g transform="translate(540, 200)">
          <path d="M0 0 Q 15 -10 25 0 Q 18 12 0 8 Z" fill="#0284c7" />
          <circle cx="20" cy="-2" r="5" fill="#0284c7" />
          <polygon points="25,-2 32,-1 25,2" fill="#f59e0b" />
          <circle cx="21" cy="-3" r="1" fill="#ffffff" />
          <!-- Wing -->
          <path d="M5 2 Q 12 -4 18 3" stroke="#0369a1" stroke-width="2" fill="none" />
        </g>

        <!-- Bowl of Clean Water / Seeds -->
        <g transform="translate(260, 440)">
          <ellipse cx="0" cy="0" rx="22" ry="8" fill="#94a3b8" />
          <ellipse cx="0" cy="-2" rx="18" ry="6" fill="#38bdf8" />
        </g>
      </svg>
    `;
  },

  // Slide 8: Dewli - Standing up for a classmate who is left out
  renderSlide8() {
    return `
      <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <rect width="700" height="520" rx="20" fill="url(#skyGrad)" />
        
        <!-- Schoolyard Under a Great Oak Tree -->
        <path d="M0 320 Q 350 280 700 320 L 700 520 L 0 520 Z" fill="#86efac" />
        <rect x="0" y="370" width="700" height="150" fill="#fde68a" opacity="0.7" />

        <!-- Wise Guardian Tree on the Left -->
        <path d="M0 380 Q 80 320 60 120" stroke="#78350f" stroke-width="45" stroke-linecap="round" fill="none" />
        <circle cx="80" cy="90" r="90" fill="#22c55e" opacity="0.9" />
        <circle cx="140" cy="120" r="75" fill="#16a34a" opacity="0.9" />
        <circle cx="50" cy="140" r="60" fill="#15803d" opacity="0.9" />

        <!-- Protective Radiant Shield Aura Around Dewli & Classmate -->
        <ellipse cx="370" cy="330" rx="190" ry="140" fill="#fef08a" opacity="0.35" filter="url(#glowEffect)" />

        <!-- Sad Classmate Who Was Excluded (Seated / Looking down) -->
        <g transform="translate(300, 310)">
          ${this.drawKid({ x: 0, y: 35, scale: 1.08, shirtColor: '#64748b', pantsColor: '#334155', hairColor: '#1e293b', hairStyle: 'curly', armPose: 'hold' })}
        </g>

        <!-- Dewli (Center-Right) Stepping Forward Courageously with Reassuring Smile -->
        <g transform="translate(430, 285)">
          ${this.drawKid({ x: 0, y: 38, scale: 1.18, shirtColor: '#e11d48', pantsColor: '#4c1d95', hairColor: '#172554', hairStyle: 'ponytail', armPose: 'wave' })}
          
          <!-- Dewli's hand gently supporting classmate -->
          <path d="M -22 65 Q -60 75 -85 75" stroke="#e11d48" stroke-width="8" stroke-linecap="round" fill="none" />
          <circle cx="-88" cy="75" r="6" fill="#fed7aa" />
        </g>

        <!-- Golden Heart of Courage Floating in Center -->
        <g transform="translate(365, 230)" filter="url(#glowEffect)">
          <path d="M 0 0 C 0 -12 15 -18 25 -5 C 35 -18 50 -12 50 0 C 50 16 25 32 25 38 C 25 32 0 16 0 0 Z" fill="#fbbf24" />
          <circle cx="25" cy="12" r="5" fill="#ffffff" />
        </g>
      </svg>
    `;
  },

  // Slide 9: Our Promise - All six children with hands raised high
  renderSlide9() {
    return `
      <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <rect width="600" height="500" rx="20" fill="url(#skyGrad)" />
        
        <!-- Assembly Stage Wooden Flooring -->
        <rect x="0" y="340" width="600" height="160" fill="#b45309" />
        <rect x="0" y="325" width="600" height="20" fill="#d97706" />

        <!-- Sussex College Crest Banner in Center Background -->
        <rect x="220" y="32" width="160" height="108" rx="10" fill="#1e3a8a" stroke="#fbbf24" stroke-width="4" filter="url(#softShadow)" />
        <image href="original-logo-1.webp" x="278" y="40" width="44" height="44" preserveAspectRatio="xMidYMid meet" />
        <text x="300" y="125" font-family="Outfit" font-size="12" font-weight="800" text-anchor="middle" fill="#ffffff">SUSSEX PLEDGE</text>

        <!-- Radiant Golden Beams Rising Above Heads -->
        <g opacity="0.6">
          <line x1="120" y1="280" x2="120" y2="120" stroke="#facc15" stroke-width="3" stroke-dasharray="6 6" />
          <line x1="200" y1="280" x2="200" y2="100" stroke="#facc15" stroke-width="3" stroke-dasharray="6 6" />
          <line x1="280" y1="280" x2="280" y2="90" stroke="#facc15" stroke-width="3" stroke-dasharray="6 6" />
          <line x1="360" y1="280" x2="360" y2="90" stroke="#facc15" stroke-width="3" stroke-dasharray="6 6" />
          <line x1="440" y1="280" x2="440" y2="100" stroke="#facc15" stroke-width="3" stroke-dasharray="6 6" />
          <line x1="510" y1="280" x2="510" y2="120" stroke="#facc15" stroke-width="3" stroke-dasharray="6 6" />
        </g>

        <!-- All Six Children with Hands Raised Together in Solemn Promise -->
        ${this.drawKid({ x: 90, y: 310, scale: 0.95, shirtColor: '#ea580c', pantsColor: '#334155', hairColor: '#451a03', hairStyle: 'short', armPose: 'raisedHand' })}
        ${this.drawKid({ x: 175, y: 305, scale: 0.98, shirtColor: '#0284c7', pantsColor: '#1e3a8a', hairColor: '#1e293b', hairStyle: 'curly', armPose: 'raisedHand' })}
        ${this.drawKid({ x: 260, y: 300, scale: 1.02, shirtColor: '#eab308', pantsColor: '#047857', hairColor: '#18181b', hairStyle: 'braids', armPose: 'raisedHand' })}
        ${this.drawKid({ x: 345, y: 300, scale: 1.02, shirtColor: '#7c3aed', pantsColor: '#1e293b', hairColor: '#0f172a', hairStyle: 'short', armPose: 'raisedHand', glasses: true })}
        ${this.drawKid({ x: 430, y: 305, scale: 0.98, shirtColor: '#0d9488', pantsColor: '#1e3a8a', hairColor: '#365314', hairStyle: 'curly', armPose: 'raisedHand' })}
        ${this.drawKid({ x: 515, y: 310, scale: 0.95, shirtColor: '#e11d48', pantsColor: '#4c1d95', hairColor: '#172554', hairStyle: 'ponytail', armPose: 'raisedHand' })}

        <!-- Golden Sparkles over Raised Hands -->
        <g filter="url(#glowEffect)">
          <circle cx="118" cy="275" r="7" fill="#fde047" />
          <circle cx="203" cy="270" r="7" fill="#fde047" />
          <circle cx="288" cy="265" r="8" fill="#fde047" />
          <circle cx="373" cy="265" r="8" fill="#fde047" />
          <circle cx="458" cy="270" r="7" fill="#fde047" />
          <circle cx="543" cy="275" r="7" fill="#fde047" />
        </g>
      </svg>
    `;
  },

  // Slide 10: Grand Finale Celebration
  renderSlide10() {
    return `
      <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${this.getSharedDefs()}
        <!-- Sky & Grand Rainbow -->
        <rect width="900" height="400" rx="20" fill="url(#skyGrad)" />
        
        <!-- Big Arching Rainbow Across the Sky -->
        <g opacity="0.75" filter="url(#softShadow)">
          <path d="M 50 360 A 400 300 0 0 1 850 360" stroke="#f43f5e" stroke-width="10" fill="none" />
          <path d="M 58 360 A 392 292 0 0 1 842 360" stroke="#fb923c" stroke-width="10" fill="none" />
          <path d="M 66 360 A 384 284 0 0 1 834 360" stroke="#facc15" stroke-width="10" fill="none" />
          <path d="M 74 360 A 376 276 0 0 1 826 360" stroke="#4ade80" stroke-width="10" fill="none" />
          <path d="M 82 360 A 368 268 0 0 1 818 360" stroke="#38bdf8" stroke-width="10" fill="none" />
          <path d="M 90 360 A 360 260 0 0 1 810 360" stroke="#c084fc" stroke-width="10" fill="none" />
        </g>

        <!-- Green Lawn Foreground -->
        <path d="M0 290 Q 450 250 900 290 L 900 400 L 0 400 Z" fill="#22c55e" />

        <!-- Floating Colorful Festive Balloons -->
        <g transform="translate(100, 100)">
          <line x1="0" y1="30" x2="0" y2="100" stroke="#94a3b8" stroke-width="1.5" />
          <ellipse cx="0" cy="0" rx="18" ry="24" fill="#ef4444" />
          <polygon points="0,24 -4,30 4,30" fill="#ef4444" />
        </g>
        <g transform="translate(140, 80)">
          <line x1="0" y1="30" x2="-20" y2="120" stroke="#94a3b8" stroke-width="1.5" />
          <ellipse cx="0" cy="0" rx="16" ry="22" fill="#3b82f6" />
          <polygon points="0,22 -4,28 4,28" fill="#3b82f6" />
        </g>
        <g transform="translate(760, 90)">
          <line x1="0" y1="30" x2="0" y2="110" stroke="#94a3b8" stroke-width="1.5" />
          <ellipse cx="0" cy="0" rx="18" ry="24" fill="#eab308" />
          <polygon points="0,24 -4,30 4,30" fill="#eab308" />
        </g>
        <g transform="translate(800, 110)">
          <line x1="0" y1="30" x2="20" y2="100" stroke="#94a3b8" stroke-width="1.5" />
          <ellipse cx="0" cy="0" rx="16" ry="22" fill="#10b981" />
          <polygon points="0,22 -4,28 4,28" fill="#10b981" />
        </g>

        <!-- All Six Children Cheering and Waving Joyfully -->
        ${this.drawKid({ x: 180, y: 280, scale: 1.05, shirtColor: '#ea580c', pantsColor: '#334155', hairColor: '#451a03', hairStyle: 'short', armPose: 'wave' })}
        ${this.drawKid({ x: 285, y: 275, scale: 1.08, shirtColor: '#0284c7', pantsColor: '#1e3a8a', hairColor: '#1e293b', hairStyle: 'curly', armPose: 'wave' })}
        ${this.drawKid({ x: 395, y: 270, scale: 1.1, shirtColor: '#eab308', pantsColor: '#047857', hairColor: '#18181b', hairStyle: 'braids', armPose: 'wave' })}
        ${this.drawKid({ x: 505, y: 270, scale: 1.1, shirtColor: '#7c3aed', pantsColor: '#1e293b', hairColor: '#0f172a', hairStyle: 'short', armPose: 'wave', glasses: true })}
        ${this.drawKid({ x: 615, y: 275, scale: 1.08, shirtColor: '#0d9488', pantsColor: '#1e3a8a', hairColor: '#365314', hairStyle: 'curly', armPose: 'wave' })}
        ${this.drawKid({ x: 720, y: 280, scale: 1.05, shirtColor: '#e11d48', pantsColor: '#4c1d95', hairColor: '#172554', hairStyle: 'ponytail', armPose: 'wave' })}

        <!-- Puppy & Kitten Celebrating Alongside Them -->
        <g transform="translate(345, 345) scale(0.8)">
          <ellipse cx="0" cy="0" rx="26" ry="18" fill="#f59e0b" />
          <circle cx="-20" cy="-12" r="15" fill="#f59e0b" />
          <circle cx="-28" cy="-12" r="3" fill="#0f172a" />
          <path d="M22 -2 Q 34 -14 30 -26" stroke="#d97706" stroke-width="5" stroke-linecap="round" fill="none" />
        </g>
        <g transform="translate(565, 355) scale(0.8)">
          <ellipse cx="0" cy="0" rx="16" ry="12" fill="#e2e8f0" />
          <circle cx="0" cy="-10" r="10" fill="#e2e8f0" />
          <polygon points="-6,-16 -2,-22 -1,-14" fill="#f43f5e" />
          <polygon points="6,-16 2,-22 1,-14" fill="#f43f5e" />
        </g>

        <!-- Golden Sparkles & Floating Confetti Stars -->
        <g filter="url(#glowEffect)">
          <polygon points="230,140 234,148 243,148 236,154 238,162 230,157 222,162 224,154 217,148 226,148" fill="#fde047" />
          <polygon points="670,140 674,148 683,148 676,154 678,162 670,157 662,162 664,154 657,148 666,148" fill="#fde047" />
          <polygon points="450,90 453,96 460,96 455,101 457,107 450,103 443,107 445,101 440,96 447,96" fill="#38bdf8" />
        </g>
      </svg>
    `;
  },

  // Initialize and inject all illustrations into their DOM containers
  init() {
    const targets = {
      'art-slide-1': this.renderSlide1(),
      'art-slide-3': this.renderSlide3(),
      'art-slide-4': this.renderSlide4(),
      'art-slide-5': this.renderSlide5(),
      'art-slide-6': this.renderSlide6(),
      'art-slide-7': this.renderSlide7(),
      'art-slide-8': this.renderSlide8(),
      'art-slide-9': this.renderSlide9(),
      'art-slide-10': this.renderSlide10(),
    };

    for (const [id, svgHtml] of Object.entries(targets)) {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = svgHtml;
      }
    }
  }
};

// Auto initialize on DOMContentLoaded or immediately if ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Illustrations.init());
} else {
  Illustrations.init();
}
