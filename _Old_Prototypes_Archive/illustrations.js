/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly
 * Master Visual Art & Storybook Illustration Engine
 * Pixar & Children's Storybook inspired vector environments
 */

const Illustrations = (() => {
  // Shared High-End SVG Definitions (Gradients, Natural Lighting & Filters)
  function getSharedDefs() {
    return `
      <defs>
        <!-- Atmospheric Skies -->
        <linearGradient id="morningSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="45%" stop-color="#bae6fd" />
          <stop offset="80%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fed7aa" />
        </linearGradient>

        <linearGradient id="goldenSunrise" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="35%" stop-color="#fbbf24" />
          <stop offset="75%" stop-color="#fde68a" />
          <stop offset="100%" stop-color="#f0fdf4" />
        </linearGradient>

        <linearGradient id="forestGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#064e3b" />
          <stop offset="50%" stop-color="#047857" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>

        <linearGradient id="waterFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.8" />
          <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.85" />
        </linearGradient>

        <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#86efac" />
          <stop offset="55%" stop-color="#4ade80" />
          <stop offset="100%" stop-color="#22c55e" />
        </linearGradient>

        <linearGradient id="warmClassroom" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fffbeb" />
          <stop offset="50%" stop-color="#fef3c7" />
          <stop offset="100%" stop-color="#fde68a" />
        </linearGradient>

        <!-- Natural Animal Coat Gradients -->
        <linearGradient id="goldenFur" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="35%" stop-color="#fbbf24" />
          <stop offset="80%" stop-color="#d97706" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>

        <linearGradient id="catCalico" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="40%" stop-color="#fed7aa" />
          <stop offset="80%" stop-color="#f97316" />
          <stop offset="100%" stop-color="#78350f" />
        </linearGradient>

        <linearGradient id="deerCoat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="60%" stop-color="#b45309" />
          <stop offset="100%" stop-color="#78350f" />
        </linearGradient>

        <linearGradient id="robinChest" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ea580c" />
          <stop offset="100%" stop-color="#c2410c" />
        </linearGradient>

        <!-- Storybook Glow & Depth Filters -->
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="cinematicShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.18" />
        </filter>
      </defs>
    `;
  }

  // Realistic Anatomical Puppy (Golden Retriever, playful posture, soft paws, wagging tail)
  function drawPuppy(x, y, s = 1) {
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-puppy">
        <ellipse cx="40" cy="95" rx="50" ry="12" fill="#0f172a" opacity="0.22" />
        <!-- Wagging Tail -->
        <path d="M-10 65 Q -25 50 -18 35 Q -10 20 -2 32" stroke="#b45309" stroke-width="9" stroke-linecap="round" fill="none" class="wag-tail" />
        <ellipse cx="10" cy="78" rx="16" ry="14" fill="url(#goldenFur)" />
        <ellipse cx="6" cy="90" rx="9" ry="6" fill="#fef08a" />
        <!-- Torso -->
        <path d="M12 60 C 15 45, 35 40, 55 45 C 72 49, 78 68, 70 82 C 60 92, 25 90, 15 82 Z" fill="url(#goldenFur)" />
        <path d="M22 65 C 28 55, 45 52, 60 56 C 58 72, 38 78, 22 65 Z" fill="#fde68a" opacity="0.6" />
        <!-- Front Paws -->
        <rect x="52" y="65" width="10" height="26" rx="5" fill="url(#goldenFur)" />
        <ellipse cx="57" cy="91" rx="8" ry="5" fill="#fef08a" />
        <rect x="36" y="66" width="10" height="25" rx="5" fill="#b45309" />
        <ellipse cx="41" cy="91" rx="7" ry="5" fill="#fde68a" />
        <path d="M50 48 Q 62 55 58 68 Q 48 65 50 48 Z" fill="#ffffff" opacity="0.85" />
        <!-- Head & Expressive Eyes -->
        <g transform="translate(62, 38) rotate(-6)">
          <ellipse cx="0" cy="0" rx="19" ry="18" fill="url(#goldenFur)" />
          <ellipse cx="12" cy="5" rx="12" ry="10" fill="#fef08a" />
          <path d="M16 2 Q 22 2 20 6 Q 16 9 14 6 Z" fill="#1e293b" />
          <circle cx="18" cy="3.5" r="1.2" fill="#ffffff" />
          <path d="M18 6 L 18 10 M 15 10 Q 18 12 21 10" stroke="#78350f" stroke-width="1.5" stroke-linecap="round" fill="none" />
          <circle cx="3" cy="-2" r="4" fill="#451a03" />
          <circle cx="4" cy="-3" r="1.5" fill="#ffffff" />
          <circle cx="11" cy="-4" r="3.6" fill="#451a03" />
          <circle cx="12" cy="-5" r="1.3" fill="#ffffff" />
          <path d="M-8 -6 C -18 -4, -20 16, -10 24 C -5 20, -2 8, -6 -6 Z" fill="#b45309" />
          <path d="M1 -12 C 6 -14, 16 2, 12 18 C 7 14, 2 6, 1 -12 Z" fill="#9a3412" />
        </g>
      </g>
    `;
  }

  // Realistic Calico Cat Resting Naturally on Garden Stone
  function drawCat(x, y, s = 1) {
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-cat">
        <ellipse cx="35" cy="50" rx="55" ry="20" fill="#94a3b8" opacity="0.9" />
        <ellipse cx="32" cy="46" rx="48" ry="16" fill="#cbd5e1" />
        <path d="M5 45 C 5 28, 25 22, 50 25 C 68 28, 72 46, 60 52 C 45 56, 15 54, 5 45 Z" fill="url(#catCalico)" />
        <path d="M58 45 Q 74 48 76 34 Q 72 26 65 35" stroke="#ea580c" stroke-width="6" stroke-linecap="round" fill="none" />
        <path d="M22 24 C 28 20, 36 28, 30 36 C 24 35, 18 30, 22 24 Z" fill="#78350f" />
        <path d="M42 26 C 50 25, 54 36, 46 40 C 40 38, 38 30, 42 26 Z" fill="#ea580c" />
        <path d="M12 36 C 18 34, 20 44, 14 46 Z" fill="#1e293b" />
        <!-- Head Resting on Paws -->
        <g transform="translate(18, 36)">
          <ellipse cx="0" cy="0" rx="14" ry="12" fill="#ffffff" />
          <path d="M-6 -6 L -10 -18 L -1 -10 Z" fill="#ea580c" />
          <path d="M4 -8 L 8 -18 L 11 -7 Z" fill="#fed7aa" />
          <path d="M-7 -1 Q -4 2 -1 -1" stroke="#451a03" stroke-width="1.8" stroke-linecap="round" fill="none" />
          <path d="M3 -1 Q 6 2 9 -1" stroke="#451a03" stroke-width="1.8" stroke-linecap="round" fill="none" />
          <polygon points="1,2 -1,4 3,4" fill="#f472b6" />
          <line x1="-3" y1="3" x2="-14" y2="1" stroke="#94a3b8" stroke-width="0.8" />
          <line x1="-3" y1="5" x2="-13" y2="6" stroke="#94a3b8" stroke-width="0.8" />
          <line x1="5" y1="3" x2="16" y2="1" stroke="#94a3b8" stroke-width="0.8" />
          <line x1="5" y1="5" x2="15" y2="6" stroke="#94a3b8" stroke-width="0.8" />
        </g>
      </g>
    `;
  }

  // Realistic Perched Songbird
  function drawBird(x, y, s = 1, isBlue = false) {
    const mainColor = isBlue ? "#0284c7" : "#78350f";
    const chestColor = isBlue ? "#bae6fd" : "url(#robinChest)";
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-bird">
        <path d="M-25 22 Q 10 18 45 24" stroke="#78350f" stroke-width="5" stroke-linecap="round" fill="none" />
        <ellipse cx="25" cy="18" rx="6" ry="3" fill="#86efac" />
        <path d="M1 18 L 3 24 M 6 18 L 7 24 M 14 18 L 15 24" stroke="#451a03" stroke-width="1.6" stroke-linecap="round" />
        <polygon points="-12,12 -26,18 -18,8" fill="${mainColor}" />
        <ellipse cx="5" cy="8" rx="14" ry="12" fill="${mainColor}" />
        <path d="M2 3 Q 12 5 14 12 Q 2 16 -4 10 Z" fill="#451a03" opacity="0.4" />
        <path d="M6 3 Q 18 6 15 15 Q 6 18 4 12 Z" fill="${chestColor}" />
        <circle cx="14" cy="2" r="7" fill="${mainColor}" />
        <polygon points="19,1 27,3 19,5" fill="#f59e0b" />
        <circle cx="16" cy="0" r="2.2" fill="#0f172a" />
        <circle cx="16.6" cy="-0.6" r="0.8" fill="#ffffff" />
      </g>
    `;
  }

  // Realistic Butterfly with Natural Venation
  function drawButterfly(x, y, s = 1, color = "orange") {
    const wingFill = color === 'orange' ? '#f97316' : '#38bdf8';
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="flutter-butterfly">
        <path d="M0 0 C 8 -18, 24 -16, 20 -4 C 18 4, 8 6, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1.2" />
        <path d="M0 0 C -8 -18, -24 -16, -20 -4 C -18 4, -8 6, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1.2" />
        <path d="M0 2 C 10 4, 16 16, 8 18 C 2 16, 0 8, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1" />
        <path d="M0 2 C -10 4, -16 16, -8 18 C -2 16, 0 8, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1" />
        <line x1="0" y1="-8" x2="0" y2="10" stroke="#0f172a" stroke-width="2" stroke-linecap="round" />
        <path d="M0 -8 Q -4 -14 -6 -14 M 0 -8 Q 4 -14 6 -14" stroke="#0f172a" stroke-width="0.8" fill="none" />
      </g>
    `;
  }

  // Realistic Forest Deer
  function drawDeer(x, y, s = 1) {
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-deer">
        <ellipse cx="50" cy="115" rx="55" ry="12" fill="#0f172a" opacity="0.2" />
        <rect x="25" y="70" width="6" height="42" rx="3" fill="#9a3412" />
        <rect x="36" y="72" width="6" height="40" rx="3" fill="url(#deerCoat)" />
        <rect x="68" y="70" width="6" height="42" rx="3" fill="#9a3412" />
        <rect x="78" y="72" width="6" height="40" rx="3" fill="url(#deerCoat)" />
        <ellipse cx="52" cy="62" rx="34" ry="20" fill="url(#deerCoat)" />
        <path d="M30 68 Q 52 74 72 68 Q 65 72 35 72 Z" fill="#fef3c7" />
        <path d="M68 58 Q 78 40 84 26 L 94 30 Q 86 52 76 66 Z" fill="url(#deerCoat)" />
        <ellipse cx="94" cy="24" rx="14" ry="9" fill="url(#deerCoat)" transform="rotate(-15, 94, 24)" />
        <ellipse cx="104" cy="25" rx="5" ry="4" fill="#fef3c7" />
        <circle cx="106" cy="24" r="1.8" fill="#1e293b" />
        <circle cx="94" cy="20" r="3" fill="#1e293b" />
        <circle cx="95" cy="19" r="1" fill="#ffffff" />
        <path d="M84 14 Q 82 2 88 4 Q 92 8 88 18 Z" fill="url(#deerCoat)" />
      </g>
    `;
  }

  // Expressive Grade 4 Student
  function drawStudent(opts) {
    const { x, y, s = 1, shirt = "#0284c7", hair = "#1e293b", hairStyle = "short", arm = "open", glasses = false, pose = "stand" } = opts;
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="storybook-student">
        <ellipse cx="0" cy="100" rx="26" ry="7" fill="#0f172a" opacity="0.18" />

        ${pose === 'kneel' ? `
          <rect x="-16" y="58" width="12" height="36" rx="6" fill="#1e3a8a" transform="rotate(35, -16, 58)" />
          <rect x="2" y="58" width="12" height="36" rx="6" fill="#1e3a8a" transform="rotate(30, 2, 58)" />
          <rect x="-18" y="24" width="36" height="42" rx="12" fill="${shirt}" filter="url(#cinematicShadow)" />
          <path d="M12 36 Q 34 46 48 42" stroke="${shirt}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="50" cy="42" r="6" fill="#fed7aa" />
          <ellipse cx="58" cy="46" rx="14" ry="5" fill="#38bdf8" />
          <ellipse cx="58" cy="45" rx="16" ry="6" fill="none" stroke="#e2e8f0" stroke-width="3" />
        ` : `
          <rect x="-13" y="58" width="10" height="38" rx="5" fill="#1e3a8a" />
          <rect x="3" y="58" width="10" height="38" rx="5" fill="#1e3a8a" />
          <ellipse cx="-8" cy="96" rx="8" ry="4" fill="#0f172a" />
          <ellipse cx="8" cy="96" rx="8" ry="4" fill="#0f172a" />
          <rect x="-19" y="18" width="38" height="44" rx="13" fill="${shirt}" filter="url(#cinematicShadow)" />
          ${arm === 'wave' ? `
            <path d="M16 26 Q 30 12 34 -4" stroke="${shirt}" stroke-width="8" stroke-linecap="round" fill="none" />
            <circle cx="34" cy="-6" r="5.5" fill="#fed7aa" />
            <path d="M-15 26 Q -24 38 -20 50" stroke="${shirt}" stroke-width="8" stroke-linecap="round" fill="none" />
            <circle cx="-20" cy="52" r="5.5" fill="#fed7aa" />
          ` : `
            <path d="M-15 26 Q -26 40 -16 48" stroke="${shirt}" stroke-width="8" stroke-linecap="round" fill="none" />
            <circle cx="-16" cy="50" r="5.5" fill="#fed7aa" />
            <path d="M15 26 Q 26 40 16 48" stroke="${shirt}" stroke-width="8" stroke-linecap="round" fill="none" />
            <circle cx="16" cy="50" r="5.5" fill="#fed7aa" />
          `}
        `}

        <rect x="-6" y="6" width="12" height="15" rx="4" fill="#fed7aa" />
        <ellipse cx="0" cy="-2" rx="21" ry="23" fill="#fed7aa" filter="url(#cinematicShadow)" />
        <circle cx="-11" cy="4" r="4.5" fill="#f43f5e" opacity="0.32" />
        <circle cx="11" cy="4" r="4.5" fill="#f43f5e" opacity="0.32" />
        <circle cx="-7" cy="-3" r="3.2" fill="#0f172a" />
        <circle cx="-6" cy="-4.5" r="1.1" fill="#ffffff" />
        <circle cx="7" cy="-3" r="3.2" fill="#0f172a" />
        <circle cx="8" cy="-4.5" r="1.1" fill="#ffffff" />
        <path d="M-8 4 Q 0 11 8 4" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" fill="none" />

        ${glasses ? `
          <circle cx="-7" cy="-3" r="6.5" stroke="#1e293b" stroke-width="2" fill="none" />
          <circle cx="7" cy="-3" r="6.5" stroke="#1e293b" stroke-width="2" fill="none" />
          <line x1="-1" y1="-3" x2="1" y2="-3" stroke="#1e293b" stroke-width="2" />
        ` : ''}

        ${hairStyle === 'curly' ? `
          <path d="M-22 -8 C -24 -26, -10 -32, 0 -32 C 10 -32, 24 -26, 22 -8 C 16 -14, 8 -16, 0 -16 C -8 -16, -16 -14, -22 -8 Z" fill="${hair}" />
          <circle cx="-14" cy="-20" r="8" fill="${hair}" />
          <circle cx="0" cy="-24" r="9" fill="${hair}" />
          <circle cx="14" cy="-20" r="8" fill="${hair}" />
        ` : hairStyle === 'ponytail' ? `
          <path d="M-21 -8 C -23 -26, -10 -30, 0 -30 C 10 -30, 23 -26, 21 -8 Z" fill="${hair}" />
          <path d="M12 -24 Q 28 -28 30 -10" stroke="${hair}" stroke-width="8" stroke-linecap="round" fill="none" />
        ` : `
          <path d="M-21 -6 C -23 -24, -10 -28, 0 -28 C 10 -28, 23 -24, 21 -6 C 15 -12, 8 -14, 0 -14 C -8 -14, -15 -12, -21 -6 Z" fill="${hair}" />
        `}
      </g>
    `;
  }

  // =========================================================================
  // SCENE RENDERERS (Clean, Rich 16:9 Canvas Art)
  // =========================================================================

  // Slide 01: Welcome Hero Scene
  function renderSlide1() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#morningSky)" />
        <circle cx="500" cy="220" r="160" fill="#fef08a" opacity="0.45" filter="url(#softGlow)" />
        <circle cx="500" cy="220" r="90" fill="#fde047" opacity="0.6" />

        <!-- Sussex Clocktower -->
        <g opacity="0.88">
          <rect x="360" y="220" width="280" height="150" fill="#ffffff" rx="8" />
          <rect x="460" y="120" width="80" height="120" fill="#f8fafc" rx="6" />
          <polygon points="450,120 500,50 550,120" fill="#1e3a8a" />
          <circle cx="500" cy="160" r="18" fill="#ffffff" stroke="#1e3a8a" stroke-width="2.5" />
        </g>

        <!-- Rolling Terraces -->
        <path d="M-50 420 Q 250 330 600 380 T 1050 350 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />
        <path d="M-50 460 Q 300 400 700 440 T 1050 420 L 1050 600 L -50 600 Z" fill="#16a34a" opacity="0.85" />

        <!-- Children Group -->
        ${drawStudent({ x: 280, y: 440, s: 1.1, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 380, y: 445, s: 1.05, shirt: '#ea580c', hair: '#451a03', hairStyle: 'short' })}
        ${drawStudent({ x: 480, y: 435, s: 1.1, shirt: '#16a34a', hair: '#18181b', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 580, y: 435, s: 1.1, shirt: '#7c3aed', hair: '#0f172a', hairStyle: 'short', glasses: true })}
        ${drawStudent({ x: 680, y: 445, s: 1.05, shirt: '#0d9488', hair: '#365314', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 770, y: 450, s: 1.05, shirt: '#e11d48', hair: '#172554', hairStyle: 'ponytail', arm: 'wave' })}

        ${drawBird(180, 140, 1.2, true)}
        ${drawBird(840, 150, 1.1, true)}
      </svg>
    `;
  }

  // Slide 02: Abhippra - Introduction & Kindness Makes a Difference
  function renderSlide2() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#goldenSunrise)" />
        <circle cx="300" cy="180" r="140" fill="#fef08a" opacity="0.5" filter="url(#softGlow)" />
        <path d="M-50 440 Q 250 370 600 410 T 1050 390 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        <!-- School Garden Bench & Sharing -->
        <rect x="480" y="420" width="220" height="15" rx="4" fill="#9a3412" />
        <rect x="500" y="435" width="12" height="35" rx="3" fill="#78350f" />
        <rect x="670" y="435" width="12" height="35" rx="3" fill="#78350f" />

        ${drawStudent({ x: 530, y: 395, s: 1.15, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 650, y: 400, s: 1.1, shirt: '#f59e0b', hair: '#b45309', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 820, y: 420, s: 1.05, shirt: '#10b981', hair: '#0f172a', hairStyle: 'short', pose: 'kneel' })}

        ${drawButterfly(380, 290, 1.2, 'orange')}
        ${drawBird(220, 180, 1.2, false)}
      </svg>
    `;
  }

  // Slide 03: Peshala - Fairness for Everyone
  function renderSlide3() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#morningSky)" />
        <path d="M-50 440 Q 300 380 700 420 T 1050 400 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        <!-- Playground Swings -->
        <line x1="160" y1="180" x2="110" y2="480" stroke="#0284c7" stroke-width="7" stroke-linecap="round" />
        <line x1="160" y1="180" x2="210" y2="480" stroke="#0284c7" stroke-width="7" stroke-linecap="round" />
        <line x1="360" y1="180" x2="310" y2="480" stroke="#0284c7" stroke-width="7" stroke-linecap="round" />
        <line x1="360" y1="180" x2="410" y2="480" stroke="#0284c7" stroke-width="7" stroke-linecap="round" />
        <line x1="130" y1="180" x2="390" y2="180" stroke="#f59e0b" stroke-width="9" stroke-linecap="round" />

        <!-- Peshala & Inclusive Game -->
        ${drawStudent({ x: 560, y: 400, s: 1.15, shirt: '#ea580c', hair: '#451a03', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 700, y: 405, s: 1.1, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 840, y: 410, s: 1.05, shirt: '#ec4899', hair: '#18181b', hairStyle: 'ponytail', arm: 'wave' })}

        <circle cx="630" cy="460" r="18" fill="#ef4444" stroke="#ffffff" stroke-width="2.5" />
      </svg>
    `;
  }

  // Slide 04: Thiseni - Honesty Is the Best Policy
  function renderSlide4() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#warmClassroom)" />
        <rect x="0" y="440" width="1000" height="160" fill="#d97706" opacity="0.3" />

        <!-- Arched Windows with Sunbeams -->
        <path d="M140 400 V 160 Q 240 70 340 160 V 400 Z" fill="#e0f2fe" stroke="#ffffff" stroke-width="10" />
        <line x1="240" y1="110" x2="240" y2="400" stroke="#ffffff" stroke-width="5" />
        <line x1="140" y1="250" x2="340" y2="250" stroke="#ffffff" stroke-width="5" />

        <!-- Chalkboard -->
        <rect x="440" y="80" width="480" height="220" rx="12" fill="#064e3b" stroke="#78350f" stroke-width="12" />
        <text x="680" y="180" fill="#fef08a" font-family="'Baloo 2', sans-serif" font-size="28" font-weight="700" text-anchor="middle">HONESTY IS THE BEST POLICY</text>
        <text x="680" y="225" fill="#ffffff" opacity="0.85" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" text-anchor="middle">Doing the Right Thing • Always</text>

        <!-- Thiseni Returning Lost Item -->
        ${drawStudent({ x: 550, y: 400, s: 1.15, shirt: '#16a34a', hair: '#18181b', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 720, y: 405, s: 1.1, shirt: '#3b82f6', hair: '#451a03', hairStyle: 'curly', arm: 'open' })}
        <rect x="625" y="425" width="30" height="15" rx="5" fill="#f43f5e" stroke="#ffffff" stroke-width="1.8" />
      </svg>
    `;
  }

  // Slide 05: Bhanuja - Respect Makes Us Better
  function renderSlide5() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#warmClassroom)" />
        <rect x="0" y="440" width="1000" height="160" fill="#b45309" opacity="0.25" />

        <!-- Library Shelves -->
        <rect x="80" y="60" width="320" height="340" rx="10" fill="#78350f" stroke="#451a03" stroke-width="7" />
        <rect x="100" y="150" width="280" height="12" fill="#b45309" />
        <rect x="100" y="240" width="280" height="12" fill="#b45309" />
        <rect x="100" y="330" width="280" height="12" fill="#b45309" />

        <!-- Bhanuja Speaking with Attentive Friends -->
        ${drawStudent({ x: 680, y: 390, s: 1.2, shirt: '#7c3aed', hair: '#0f172a', hairStyle: 'short', glasses: true, arm: 'open' })}
        ${drawStudent({ x: 530, y: 400, s: 1.1, shirt: '#0284c7', hair: '#451a03', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 840, y: 400, s: 1.1, shirt: '#ec4899', hair: '#18181b', hairStyle: 'ponytail', arm: 'open' })}
      </svg>
    `;
  }

  // Slide 06: Yenuth - Be Kind to Animals (MASTER NATURAL SANCTUARY)
  // Anatomically realistic puppy, resting calico cat, perched birds, butterflies, clean water, caring child
  function renderSlide6() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#goldenSunrise)" />
        <circle cx="240" cy="160" r="140" fill="#fef08a" opacity="0.5" filter="url(#softGlow)" />

        <!-- Weeping Willow & Flora -->
        <g class="sway-trees">
          <path d="M-20 340 Q 60 120 100 30 Q 200 10 270 100 Q 320 220 240 380 Z" fill="#15803d" opacity="0.85" />
          <path d="M820 360 Q 880 160 940 70 Q 1020 30 1060 200 L 1040 400 Z" fill="#16a34a" opacity="0.85" />
          <circle cx="140" cy="100" r="12" fill="#fbcfe8" />
          <circle cx="180" cy="80" r="15" fill="#f472b6" opacity="0.7" />
        </g>

        <!-- Lush Green Terraced Lawns -->
        <path d="M-50 400 Q 250 330 600 370 T 1050 350 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />
        
        <!-- Freshwater Brook -->
        <path d="M0 520 Q 300 460 600 500 T 1000 470 L 1000 600 L 0 600 Z" fill="url(#waterFlow)" />
        <ellipse cx="200" cy="550" rx="30" ry="10" fill="#64748b" />
        <ellipse cx="420" cy="530" rx="24" ry="9" fill="#94a3b8" />
        <ellipse cx="760" cy="540" rx="35" ry="12" fill="#64748b" />

        <!-- 1. Resting Calico Cat on Warm Garden Stone -->
        ${drawCat(150, 380, 1.25)}

        <!-- 2. Realistic Golden Retriever Puppy Playing Gently -->
        ${drawPuppy(620, 390, 1.25)}

        <!-- 3. Yenuth - Gentle Child Kneeling and Offering Clean Fresh Water -->
        ${drawStudent({ x: 480, y: 375, s: 1.18, shirt: '#0d9488', hair: '#365314', hairStyle: 'curly', pose: 'kneel' })}

        <!-- 4. Perched Songbirds -->
        ${drawBird(110, 200, 1.3, false)}
        ${drawBird(890, 190, 1.35, true)}

        <!-- 5. Fluttering Butterflies -->
        ${drawButterfly(360, 250, 1.25, 'orange')}
        ${drawButterfly(720, 270, 1.1, 'blue')}
      </svg>
    `;
  }

  // Slide 07: Dewli - Stand Up for What Is Right
  function renderSlide7() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="#0284c7" />
        <circle cx="550" cy="180" r="170" fill="#fef08a" opacity="0.6" filter="url(#softGlow)" />
        <path d="M-50 440 Q 300 380 700 420 T 1050 400 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        <!-- Dewli Offering Support -->
        ${drawStudent({ x: 520, y: 380, s: 1.2, shirt: '#e11d48', hair: '#172554', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 410, y: 390, s: 1.12, shirt: '#64748b', hair: '#451a03', hairStyle: 'short', arm: 'open' })}

        <ellipse cx="465" cy="420" rx="120" ry="35" fill="#fef08a" opacity="0.3" filter="url(#softGlow)" />
        ${drawBird(680, 140, 1.25, true)}
        ${drawBird(760, 120, 1.1, true)}
      </svg>
    `;
  }

  // Slide 08: All Six Children Together - Final Message
  function renderSlide8() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="radial-gradient(circle at 500px 260px, #1e40af 0%, #030712 100%)" />
        <ellipse cx="500" cy="480" rx="440" ry="80" fill="#fef08a" opacity="0.25" filter="url(#softGlow)" />
        <polygon points="500,0 150,600 850,600" fill="rgba(254, 240, 138, 0.12)" />

        <!-- All 6 Children United on Stage -->
        ${drawStudent({ x: 220, y: 400, s: 1.15, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 330, y: 405, s: 1.12, shirt: '#ea580c', hair: '#451a03', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 440, y: 395, s: 1.15, shirt: '#16a34a', hair: '#18181b', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 570, y: 395, s: 1.15, shirt: '#7c3aed', hair: '#0f172a', hairStyle: 'short', glasses: true, arm: 'open' })}
        ${drawStudent({ x: 680, y: 405, s: 1.14, shirt: '#0d9488', hair: '#365314', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 790, y: 400, s: 1.12, shirt: '#e11d48', hair: '#172554', hairStyle: 'ponytail', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 09: Poem Stanza 1 - Kindness (Sanuthi, Dihas, Nethan, Omin)
  function renderSlide9() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#goldenSunrise)" />
        <path d="M-50 440 Q 250 370 600 410 T 1050 390 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />
        ${drawStudent({ x: 320, y: 395, s: 1.1, shirt: '#ec4899', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 440, y: 400, s: 1.1, shirt: '#3b82f6', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 570, y: 395, s: 1.1, shirt: '#10b981', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 690, y: 400, s: 1.1, shirt: '#f59e0b', hairStyle: 'short', arm: 'wave' })}

        ${drawButterfly(780, 280, 1.2, 'orange')}
        ${drawBird(200, 180, 1.2, false)}
      </svg>
    `;
  }

  // Slide 10: Poem Stanza 2 - Respect & Animals (Inuli, Shenuki, Jeson, Praneeth)
  function renderSlide10() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#morningSky)" />
        <path d="M-50 420 Q 300 350 700 390 T 1050 370 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />
        ${drawCat(180, 390, 1.2)}
        ${drawPuppy(780, 400, 1.15)}

        ${drawStudent({ x: 360, y: 385, s: 1.05, shirt: '#8b5cf6', hairStyle: 'ponytail' })}
        ${drawStudent({ x: 460, y: 390, s: 1.05, shirt: '#0284c7', hairStyle: 'short' })}
        ${drawStudent({ x: 560, y: 390, s: 1.05, shirt: '#10b981', hairStyle: 'short' })}
        ${drawStudent({ x: 660, y: 385, s: 1.05, shirt: '#f97316', hairStyle: 'curly' })}
      </svg>
    `;
  }

  // Slide 11: Poem Stanza 3 - Courage & Nature (Dasindu, Noveena, Kenula, Sara)
  function renderSlide11() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#morningSky)" />
        <polygon points="100,440 350,190 600,440" fill="#93c5fd" opacity="0.6" />
        <polygon points="450,440 750,150 1050,440" fill="#60a5fa" opacity="0.6" />
        <path d="M-50 440 Q 300 380 700 420 T 1050 400 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        ${drawStudent({ x: 340, y: 390, s: 1.1, shirt: '#ec4899', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 460, y: 385, s: 1.15, shirt: '#0284c7', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 580, y: 390, s: 1.1, shirt: '#f59e0b', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 700, y: 385, s: 1.15, shirt: '#10b981', hairStyle: 'ponytail', arm: 'wave' })}

        ${drawBird(520, 110, 1.8, true)}
      </svg>
    `;
  }

  // Slide 12: Poem Finale - Minugi Solo & All 13 Children
  function renderSlide12() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#goldenSunrise)" />
        <circle cx="500" cy="200" r="180" fill="#fef08a" opacity="0.5" filter="url(#softGlow)" />
        <path d="M-50 440 Q 300 380 700 420 T 1050 400 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        <!-- Minugi Lead & 13 Chorus Members -->
        ${drawStudent({ x: 500, y: 370, s: 1.25, shirt: '#e11d48', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 380, y: 385, s: 1.05, shirt: '#0284c7', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 620, y: 385, s: 1.05, shirt: '#10b981', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 260, y: 400, s: 0.95, shirt: '#ec4899', hairStyle: 'ponytail' })}
        ${drawStudent({ x: 740, y: 400, s: 0.95, shirt: '#f59e0b', hairStyle: 'short' })}
        ${drawStudent({ x: 150, y: 410, s: 0.9, shirt: '#8b5cf6', hairStyle: 'short' })}
        ${drawStudent({ x: 850, y: 410, s: 0.9, shirt: '#06b6d4', hairStyle: 'ponytail' })}
      </svg>
    `;
  }

  // Slide 13: Role Play Part 1 - The Playground (Exclusion & Speaking Up)
  function renderSlide13() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#morningSky)" />
        <circle cx="450" cy="180" r="140" fill="#fef08a" opacity="0.4" filter="url(#softGlow)" />
        <path d="M-50 440 Q 300 380 700 420 T 1050 400 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        <!-- Playground Exclusion & Resolution -->
        ${drawStudent({ x: 320, y: 390, s: 1.1, shirt: '#64748b', hairStyle: 'short', arm: 'open' })} <!-- Nethuli -->
        ${drawStudent({ x: 460, y: 380, s: 1.18, shirt: '#0284c7', hairStyle: 'short', arm: 'open' })} <!-- Gevin -->
        ${drawStudent({ x: 590, y: 385, s: 1.15, shirt: '#e11d48', hairStyle: 'ponytail', arm: 'open' })} <!-- Lisari -->
        ${drawStudent({ x: 720, y: 395, s: 1.08, shirt: '#10b981', hairStyle: 'curly', arm: 'wave' })} <!-- Liyansa -->
        ${drawStudent({ x: 840, y: 400, s: 1.05, shirt: '#f59e0b', hairStyle: 'short', arm: 'wave' })} <!-- Sehansa -->
      </svg>
    `;
  }

  // Slide 14: Role Play Part 2 - Speaking for the Voiceless (Minindee championing nature)
  function renderSlide14() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#forestGlow)" />
        <!-- Forest Sun Rays -->
        <polygon points="150,0 280,600 380,600 250,0" fill="rgba(254, 240, 138, 0.16)" />
        <polygon points="600,0 730,600 830,600 700,0" fill="rgba(254, 240, 138, 0.18)" />

        <!-- Wildlife Sanctuary -->
        ${drawDeer(140, 370, 1.25)}
        ${drawPuppy(760, 390, 1.15)}

        <!-- Minindee & Sinadhi Championing Voiceless Creatures -->
        ${drawStudent({ x: 450, y: 380, s: 1.2, shirt: '#ec4899', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 600, y: 385, s: 1.15, shirt: '#0d9488', hairStyle: 'curly', arm: 'open' })}

        ${drawBird(280, 210, 1.3, true)}
      </svg>
    `;
  }

  // Slide 15: Role Play Part 3 - The Train of Justice Chorus
  function renderSlide15() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="radial-gradient(circle at 500px 260px, #1e3a8a 0%, #030712 100%)" />
        <ellipse cx="500" cy="480" rx="420" ry="80" fill="#fef08a" opacity="0.22" filter="url(#softGlow)" />

        <!-- Rhythmic Dynamic Train Stage -->
        ${drawStudent({ x: 260, y: 395, s: 1.1, shirt: '#ef4444', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 380, y: 400, s: 1.12, shirt: '#f59e0b', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 510, y: 390, s: 1.18, shirt: '#10b981', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 640, y: 400, s: 1.12, shirt: '#0284c7', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 760, y: 395, s: 1.1, shirt: '#8b5cf6', hairStyle: 'ponytail', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 19: Pledge & Six Guiding Values
  function renderSlide19() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#goldenSunrise)" />
        <circle cx="500" cy="180" r="180" fill="#fef08a" opacity="0.55" filter="url(#softGlow)" />
        <path d="M-50 440 Q 300 380 700 420 T 1050 400 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        ${drawStudent({ x: 280, y: 385, s: 1.15, shirt: '#0284c7', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 420, y: 390, s: 1.15, shirt: '#16a34a', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 560, y: 380, s: 1.2, shirt: '#f59e0b', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 700, y: 390, s: 1.15, shirt: '#7c3aed', hairStyle: 'short', arm: 'open' })}
      </svg>
    `;
  }

  // Slide 20: Assembly Climax & Finale
  function renderSlide20() {
    return `
      <svg viewBox="0 0 1000 600" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1000" height="600" fill="url(#goldenSunrise)" />
        <circle cx="500" cy="200" r="200" fill="#fef08a" opacity="0.65" filter="url(#softGlow)" />
        <polygon points="500,200 80,0 160,0" fill="rgba(255,255,255,0.2)" />
        <polygon points="500,200 320,0 400,0" fill="rgba(255,255,255,0.2)" />
        <polygon points="500,200 600,0 680,0" fill="rgba(255,255,255,0.2)" />
        <polygon points="500,200 840,0 920,0" fill="rgba(255,255,255,0.2)" />
        <path d="M-50 440 Q 300 380 700 420 T 1050 400 L 1050 600 L -50 600 Z" fill="url(#grassGrad)" />

        ${drawStudent({ x: 250, y: 395, s: 1.15, shirt: '#0284c7', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 380, y: 400, s: 1.15, shirt: '#ea580c', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 510, y: 390, s: 1.2, shirt: '#16a34a', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 640, y: 400, s: 1.15, shirt: '#7c3aed', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 770, y: 395, s: 1.15, shirt: '#e11d48', hairStyle: 'curly', arm: 'wave' })}
      </svg>
    `;
  }

  // Scene Mapping
  const scenes = {
    1: renderSlide1,
    2: renderSlide2,
    3: renderSlide3,
    4: renderSlide4,
    5: renderSlide5,
    6: renderSlide6,
    7: renderSlide7,
    8: renderSlide8,
    9: renderSlide9,
    10: renderSlide10,
    11: renderSlide11,
    12: renderSlide12,
    13: renderSlide13,
    14: renderSlide14,
    15: renderSlide15,
    19: renderSlide19,
    20: renderSlide20
  };

  function init() {
    for (const [slideNum, renderer] of Object.entries(scenes)) {
      const container = document.getElementById('art-slide-' + slideNum);
      if (container) {
        container.innerHTML = renderer();
      }
    }
  }

  return {
    init,
    scenes
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Illustrations.init());
} else {
  Illustrations.init();
}
