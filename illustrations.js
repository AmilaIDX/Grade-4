/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly
 * Master Visual Art & Cinematic Storybook Engine
 * Pixar & Storybook inspired environmental animations & vector diorama art
 */

const Illustrations = (() => {
  // Shared High-End SVG Definitions (Gradients, Natural Lighting & Filters)
  function getSharedDefs() {
    return `
      <defs>
        <!-- Atmospheric Skies -->
        <linearGradient id="morningSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="50%" stop-color="#bae6fd" />
          <stop offset="85%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fed7aa" />
        </linearGradient>

        <linearGradient id="goldenSunrise" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="40%" stop-color="#fbbf24" />
          <stop offset="80%" stop-color="#fde68a" />
          <stop offset="100%" stop-color="#f0fdf4" />
        </linearGradient>

        <linearGradient id="forestCanopy" x1="0" y1="0" x2="0" y2="1">
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
          <stop offset="60%" stop-color="#4ade80" />
          <stop offset="100%" stop-color="#22c55e" />
        </linearGradient>

        <linearGradient id="warmClassroom" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fffbeb" />
          <stop offset="50%" stop-color="#fef3c7" />
          <stop offset="100%" stop-color="#fde68a" />
        </linearGradient>

        <!-- Natural Fur & Animal Gradients -->
        <linearGradient id="goldenFur" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="40%" stop-color="#fbbf24" />
          <stop offset="85%" stop-color="#d97706" />
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

        <!-- Lighting Filters -->
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

  // Realistic Anatomical Puppy (Golden Retriever pup, playful head tilt, soft paws, natural tail)
  function drawRealisticPuppy(x, y, s = 1) {
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-puppy">
        <!-- Soft Ground Contact Shadow -->
        <ellipse cx="40" cy="95" rx="50" ry="12" fill="#0f172a" opacity="0.22" />

        <!-- Hind Legs & Tail -->
        <path d="M-10 65 Q -25 50 -18 35 Q -10 20 -2 32" stroke="#b45309" stroke-width="9" stroke-linecap="round" fill="none" class="wag-tail" />
        <ellipse cx="10" cy="78" rx="16" ry="14" fill="url(#goldenFur)" />
        <ellipse cx="6" cy="90" rx="9" ry="6" fill="#fef08a" />

        <!-- Torso & Realistic Coat Shading -->
        <path d="M12 60 C 15 45, 35 40, 55 45 C 72 49, 78 68, 70 82 C 60 92, 25 90, 15 82 Z" fill="url(#goldenFur)" />
        <path d="M22 65 C 28 55, 45 52, 60 56 C 58 72, 38 78, 22 65 Z" fill="#fde68a" opacity="0.6" />

        <!-- Front Paws with Soft Pads -->
        <rect x="52" y="65" width="10" height="26" rx="5" fill="url(#goldenFur)" />
        <ellipse cx="57" cy="91" rx="8" ry="5" fill="#fef08a" />
        <rect x="36" y="66" width="10" height="25" rx="5" fill="#b45309" />
        <ellipse cx="41" cy="91" rx="7" ry="5" fill="#fde68a" />

        <!-- Chest White Fur Bib -->
        <path d="M50 48 Q 62 55 58 68 Q 48 65 50 48 Z" fill="#ffffff" opacity="0.85" />

        <!-- Puppy Head & Floppy Ears (Playful Angle) -->
        <g transform="translate(62, 38) rotate(-6)">
          <ellipse cx="0" cy="0" rx="19" ry="18" fill="url(#goldenFur)" />
          <!-- Muzzle & Realistic Nose -->
          <ellipse cx="12" cy="5" rx="12" ry="10" fill="#fef08a" />
          <path d="M16 2 Q 22 2 20 6 Q 16 9 14 6 Z" fill="#1e293b" />
          <circle cx="18" cy="3.5" r="1.2" fill="#ffffff" />
          <path d="M18 6 L 18 10 M 15 10 Q 18 12 21 10" stroke="#78350f" stroke-width="1.5" stroke-linecap="round" fill="none" />
          
          <!-- Realistic Warm Brown Eyes with Specular Highlights -->
          <circle cx="3" cy="-2" r="4" fill="#451a03" />
          <circle cx="4" cy="-3" r="1.5" fill="#ffffff" />
          <circle cx="11" cy="-4" r="3.6" fill="#451a03" />
          <circle cx="12" cy="-5" r="1.3" fill="#ffffff" />

          <!-- Floppy Natural Ears with Soft Fur Depth -->
          <path d="M-8 -6 C -18 -4, -20 16, -10 24 C -5 20, -2 8, -6 -6 Z" fill="#b45309" />
          <path d="M1 -12 C 6 -14, 16 2, 12 18 C 7 14, 2 6, 1 -12 Z" fill="#9a3412" />
        </g>
      </g>
    `;
  }

  // Realistic Resting Calico Cat (Curled naturally on garden rock)
  function drawRealisticCat(x, y, s = 1) {
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-cat">
        <!-- Garden Sun Stone -->
        <ellipse cx="35" cy="50" rx="55" ry="20" fill="#94a3b8" opacity="0.9" />
        <ellipse cx="32" cy="46" rx="48" ry="16" fill="#cbd5e1" />

        <!-- Sleeping Torso & Curled Tail -->
        <path d="M5 45 C 5 28, 25 22, 50 25 C 68 28, 72 46, 60 52 C 45 56, 15 54, 5 45 Z" fill="url(#catCalico)" />
        <path d="M58 45 Q 74 48 76 34 Q 72 26 65 35" stroke="#ea580c" stroke-width="6" stroke-linecap="round" fill="none" />

        <!-- Calico Coat Patches -->
        <path d="M22 24 C 28 20, 36 28, 30 36 C 24 35, 18 30, 22 24 Z" fill="#78350f" />
        <path d="M42 26 C 50 25, 54 36, 46 40 C 40 38, 38 30, 42 26 Z" fill="#ea580c" />
        <path d="M12 36 C 18 34, 20 44, 14 46 Z" fill="#1e293b" />

        <!-- Cat Head Resting on Paws -->
        <g transform="translate(18, 36)">
          <ellipse cx="0" cy="0" rx="14" ry="12" fill="#ffffff" />
          <path d="M-6 -6 L -10 -18 L -1 -10 Z" fill="#ea580c" />
          <path d="M4 -8 L 8 -18 L 11 -7 Z" fill="#fed7aa" />
          <!-- Contented Closed Eyes -->
          <path d="M-7 -1 Q -4 2 -1 -1" stroke="#451a03" stroke-width="1.8" stroke-linecap="round" fill="none" />
          <path d="M3 -1 Q 6 2 9 -1" stroke="#451a03" stroke-width="1.8" stroke-linecap="round" fill="none" />
          <polygon points="1,2 -1,4 3,4" fill="#f472b6" />
          <!-- Delicate Whiskers -->
          <line x1="-3" y1="3" x2="-14" y2="1" stroke="#94a3b8" stroke-width="0.8" />
          <line x1="-3" y1="5" x2="-13" y2="6" stroke="#94a3b8" stroke-width="0.8" />
          <line x1="5" y1="3" x2="16" y2="1" stroke="#94a3b8" stroke-width="0.8" />
          <line x1="5" y1="5" x2="15" y2="6" stroke="#94a3b8" stroke-width="0.8" />
        </g>
      </g>
    `;
  }

  // Realistic Perched Songbird (European Robin / Bluebird on branch)
  function drawRealisticBird(x, y, s = 1, isBlue = false) {
    const mainColor = isBlue ? "#0284c7" : "#78350f";
    const chestColor = isBlue ? "#bae6fd" : "url(#robinChest)";
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-bird">
        <!-- Natural Branch -->
        <path d="M-25 22 Q 10 18 45 24" stroke="#78350f" stroke-width="5" stroke-linecap="round" fill="none" />
        <ellipse cx="25" cy="18" rx="6" ry="3" fill="#86efac" />
        <ellipse cx="-15" cy="20" rx="5" ry="2.5" fill="#86efac" />

        <!-- Claws Grasping Branch -->
        <path d="M1 18 L 3 24 M 6 18 L 7 24 M 14 18 L 15 24" stroke="#451a03" stroke-width="1.6" stroke-linecap="round" />

        <!-- Tail Feathers -->
        <polygon points="-12,12 -26,18 -18,8" fill="${mainColor}" />

        <!-- Bird Body & Wing -->
        <ellipse cx="5" cy="8" rx="14" ry="12" fill="${mainColor}" />
        <path d="M2 3 Q 12 5 14 12 Q 2 16 -4 10 Z" fill="#451a03" opacity="0.4" />
        <!-- Puffed Chest -->
        <path d="M6 3 Q 18 6 15 15 Q 6 18 4 12 Z" fill="${chestColor}" />

        <!-- Head, Eye & Anatomical Beak -->
        <circle cx="14" cy="2" r="7" fill="${mainColor}" />
        <polygon points="19,1 27,3 19,5" fill="#f59e0b" />
        <circle cx="16" cy="0" r="2.2" fill="#0f172a" />
        <circle cx="16.6" cy="-0.6" r="0.8" fill="#ffffff" />
      </g>
    `;
  }

  // Realistic Butterfly with Natural Venation (Monarch / Morpho)
  function drawRealisticButterfly(x, y, s = 1, color = "orange") {
    const wingFill = color === 'orange' ? '#f97316' : '#38bdf8';
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="flutter-butterfly">
        <path d="M0 0 C 8 -18, 24 -16, 20 -4 C 18 4, 8 6, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1.2" />
        <path d="M0 0 C -8 -18, -24 -16, -20 -4 C -18 4, -8 6, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1.2" />
        <path d="M0 2 C 10 4, 16 16, 8 18 C 2 16, 0 8, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1" />
        <path d="M0 2 C -10 4, -16 16, -8 18 C -2 16, 0 8, 0 2 Z" fill="${wingFill}" stroke="#0f172a" stroke-width="1" />
        <!-- Body & Antennae -->
        <line x1="0" y1="-8" x2="0" y2="10" stroke="#0f172a" stroke-width="2" stroke-linecap="round" />
        <path d="M0 -8 Q -4 -14 -6 -14 M 0 -8 Q 4 -14 6 -14" stroke="#0f172a" stroke-width="0.8" fill="none" />
      </g>
    `;
  }

  // Realistic Forest Deer & Fawn (Item 03 Speaking for Voiceless)
  function drawRealisticDeer(x, y, s = 1) {
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="natural-deer">
        <ellipse cx="50" cy="115" rx="55" ry="12" fill="#0f172a" opacity="0.2" />
        <!-- Slender Legs -->
        <rect x="25" y="70" width="6" height="42" rx="3" fill="#9a3412" />
        <rect x="36" y="72" width="6" height="40" rx="3" fill="url(#deerCoat)" />
        <rect x="68" y="70" width="6" height="42" rx="3" fill="#9a3412" />
        <rect x="78" y="72" width="6" height="40" rx="3" fill="url(#deerCoat)" />

        <!-- Torso & White Underbelly -->
        <ellipse cx="52" cy="62" rx="34" ry="20" fill="url(#deerCoat)" />
        <path d="M30 68 Q 52 74 72 68 Q 65 72 35 72 Z" fill="#fef3c7" />

        <!-- Graceful Neck & Head -->
        <path d="M68 58 Q 78 40 84 26 L 94 30 Q 86 52 76 66 Z" fill="url(#deerCoat)" />
        <ellipse cx="94" cy="24" rx="14" ry="9" fill="url(#deerCoat)" transform="rotate(-15, 94, 24)" />
        <ellipse cx="104" cy="25" rx="5" ry="4" fill="#fef3c7" />
        <circle cx="106" cy="24" r="1.8" fill="#1e293b" />
        <circle cx="94" cy="20" r="3" fill="#1e293b" />
        <circle cx="95" cy="19" r="1" fill="#ffffff" />

        <!-- Natural Alert Ears -->
        <path d="M84 14 Q 82 2 88 4 Q 92 8 88 18 Z" fill="url(#deerCoat)" />
        <path d="M86 6 Q 89 10 86 15" stroke="#fef3c7" stroke-width="1.5" />
      </g>
    `;
  }

  // Expressive Grade 4 Student
  function drawStudent(opts) {
    const { x, y, s = 1, shirt = "#0284c7", hair = "#1e293b", hairStyle = "short", arm = "open", glasses = false, pose = "stand" } = opts;
    return `
      <g transform="translate(${x}, ${y}) scale(${s})" class="storybook-student">
        <!-- Shadow -->
        <ellipse cx="0" cy="100" rx="26" ry="7" fill="#0f172a" opacity="0.18" />

        ${pose === 'kneel' ? `
          <!-- Kneeling Pose for Animal Care -->
          <rect x="-16" y="58" width="12" height="36" rx="6" fill="#1e3a8a" transform="rotate(35, -16, 58)" />
          <rect x="2" y="58" width="12" height="36" rx="6" fill="#1e3a8a" transform="rotate(30, 2, 58)" />
          <rect x="-18" y="24" width="36" height="42" rx="12" fill="${shirt}" filter="url(#cinematicShadow)" />
          <!-- Outstretched caring arms -->
          <path d="M12 36 Q 34 46 48 42" stroke="${shirt}" stroke-width="9" stroke-linecap="round" fill="none" />
          <circle cx="50" cy="42" r="6" fill="#fed7aa" />
          <!-- Water bowl being offered -->
          <ellipse cx="58" cy="46" rx="14" ry="5" fill="#38bdf8" />
          <ellipse cx="58" cy="45" rx="16" ry="6" fill="none" stroke="#e2e8f0" stroke-width="3" />
        ` : `
          <!-- Standing Confident Pose -->
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

        <!-- Head, Face & Warm Storybook Features -->
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

        <!-- Hair -->
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
  // SCENE BUILDERS FOR EVERY VISUAL SLIDE
  // =========================================================================

  // Slide 01: Welcome Hero Scene
  function renderSlide1() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <circle cx="600" cy="240" r="180" fill="#fef08a" opacity="0.4" filter="url(#softGlow)" />
        <circle cx="600" cy="240" r="100" fill="#fde047" opacity="0.55" />

        <!-- Sussex College Clocktower Silhouette -->
        <g opacity="0.85">
          <rect x="420" y="240" width="360" height="180" fill="#ffffff" rx="10" />
          <rect x="560" y="130" width="80" height="140" fill="#f8fafc" rx="6" />
          <polygon points="550,130 600,60 650,130" fill="#1e3a8a" />
          <circle cx="600" cy="180" r="20" fill="#ffffff" stroke="#1e3a8a" stroke-width="3" />
        </g>

        <!-- Rolling Green Terraces -->
        <path d="M-50 460 Q 300 360 700 420 T 1250 390 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        <path d="M-50 510 Q 400 440 800 490 T 1250 470 L 1250 680 L -50 680 Z" fill="#16a34a" opacity="0.8" />

        <!-- All Six Children Welcoming Assembly -->
        ${drawStudent({ x: 340, y: 500, s: 1.1, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 440, y: 505, s: 1.05, shirt: '#ea580c', hair: '#451a03', hairStyle: 'short' })}
        ${drawStudent({ x: 540, y: 495, s: 1.08, shirt: '#16a34a', hair: '#18181b', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 650, y: 495, s: 1.08, shirt: '#7c3aed', hair: '#0f172a', hairStyle: 'short', glasses: true })}
        ${drawStudent({ x: 750, y: 505, s: 1.06, shirt: '#0d9488', hair: '#365314', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 850, y: 510, s: 1.04, shirt: '#e11d48', hair: '#172554', hairStyle: 'ponytail', arm: 'wave' })}

        <!-- Flying Birds -->
        ${drawRealisticBird(220, 140, 1.2, true)}
        ${drawRealisticBird(980, 170, 1.1, true)}
      </svg>
    `;
  }

  // Slide 02: Abhippra - Introduction (Stage & Welcoming Banner)
  function renderSlide2() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <!-- Auditorium Warm Spotlight -->
        <rect width="1200" height="680" fill="radial-gradient(circle at 600px 300px, #1e3a8a 0%, #060d1d 100%)" />
        <ellipse cx="600" cy="550" rx="420" ry="80" fill="#fef08a" opacity="0.22" filter="url(#softGlow)" />
        
        <!-- Warm Velvet Stage Curtains -->
        <path d="M0 0 L 220 0 C 180 200, 120 400, 0 680 Z" fill="#991b1b" />
        <path d="M1200 0 L 980 0 C 1020 200, 1080 400, 1200 680 Z" fill="#991b1b" />
        <path d="M0 0 Q 600 120 1200 0 L 1200 60 Q 600 160 0 60 Z" fill="#b91c1c" />

        <!-- Sussex College Stage Banner -->
        <rect x="350" y="80" width="500" height="70" rx="16" fill="rgba(255,255,255,0.15)" stroke="#fde047" stroke-width="2" />
        <text x="600" y="125" fill="#fef08a" font-family="'Baloo 2', sans-serif" font-size="28" font-weight="700" text-anchor="middle">GRADE 4 ASSEMBLY WELCOME</text>

        <!-- Speaker Podium & Abhippra -->
        <rect x="550" y="440" width="100" height="130" rx="8" fill="#78350f" stroke="#b45309" stroke-width="3" />
        <ellipse cx="600" cy="440" rx="55" ry="12" fill="#9a3412" />
        <circle cx="600" cy="385" r="9" fill="#94a3b8" />
        <line x1="600" y1="394" x2="600" y2="435" stroke="#64748b" stroke-width="3" />
        ${drawStudent({ x: 600, y: 390, s: 1.25, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 03: Abhippra - Kindness Makes a Difference (Sharing & Helping in Garden)
  function renderSlide3() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <circle cx="950" cy="180" r="140" fill="#fef08a" opacity="0.5" filter="url(#softGlow)" />

        <!-- Garden Park Trees & Flower Garden -->
        <path d="M-50 480 Q 300 400 650 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        <!-- Big Shady Oak Tree -->
        <path d="M120 480 Q 140 260 160 150 Q 80 140 60 220 Q 30 140 120 70 Q 250 50 300 130 Q 360 120 340 240 Q 220 280 200 480 Z" fill="#15803d" />

        <!-- Wooden Park Bench -->
        <rect x="520" y="440" width="220" height="16" rx="4" fill="#9a3412" />
        <rect x="540" y="456" width="12" height="40" rx="3" fill="#78350f" />
        <rect x="710" y="456" width="12" height="40" rx="3" fill="#78350f" />

        <!-- Two Children Sharing Books and Smiling -->
        ${drawStudent({ x: 570, y: 410, s: 1.15, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 690, y: 415, s: 1.1, shirt: '#f59e0b', hair: '#b45309', hairStyle: 'ponytail', arm: 'open' })}
        
        <!-- Open Shared Storybook -->
        <polygon points="620,430 635,424 650,430 648,445 635,440 622,445" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" />

        <!-- Third Child Helping Pick Up Fallen Crayons with Big Smile -->
        ${drawStudent({ x: 880, y: 440, s: 1.05, shirt: '#10b981', hair: '#0f172a', hairStyle: 'short', pose: 'kneel' })}

        <!-- Fluttering Butterflies -->
        ${drawRealisticButterfly(400, 320, 1.2, 'orange')}
        ${drawRealisticButterfly(450, 270, 0.9, 'blue')}
        ${drawRealisticBird(240, 180, 1.1, false)}
      </svg>
    `;
  }

  // Slide 04: Peshala - Fairness for Everyone (Lively Inclusive Playground)
  function renderSlide4() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <path d="M-50 480 Q 400 420 800 460 T 1250 440 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- Playground Swing Set -->
        <line x1="200" y1="200" x2="140" y2="520" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
        <line x1="200" y1="200" x2="260" y2="520" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
        <line x1="420" y1="200" x2="360" y2="520" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
        <line x1="420" y1="200" x2="480" y2="520" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
        <line x1="170" y1="200" x2="450" y2="200" stroke="#f59e0b" stroke-width="10" stroke-linecap="round" />
        <!-- Swing Chains & Seat -->
        <line x1="280" y1="200" x2="275" y2="400" stroke="#94a3b8" stroke-width="3" />
        <line x1="340" y1="200" x2="345" y2="400" stroke="#94a3b8" stroke-width="3" />
        <rect x="265" y="400" width="90" height="12" rx="4" fill="#dc2626" />

        <!-- Four-Square Court & Children Taking Turns Playing Fairly -->
        <rect x="620" y="450" width="380" height="150" rx="8" fill="rgba(255,255,255,0.4)" stroke="#ffffff" stroke-width="4" stroke-dasharray="10 8" />
        
        <!-- Peshala Waving and Welcoming a Friend to Join -->
        ${drawStudent({ x: 670, y: 430, s: 1.15, shirt: '#ea580c', hair: '#451a03', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 820, y: 440, s: 1.1, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 960, y: 450, s: 1.05, shirt: '#ec4899', hair: '#18181b', hairStyle: 'ponytail', arm: 'wave' })}

        <!-- Bouncing Playground Ball -->
        <circle cx="750" cy="500" r="22" fill="#ef4444" stroke="#ffffff" stroke-width="3" />
      </svg>
    `;
  }

  // Slide 05: Thiseni - Honesty Is the Best Policy (Sunlit Classroom, Returning Lost Item)
  function renderSlide5() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <!-- Classroom Wall & Big Arched Sunlit Windows -->
        <rect width="1200" height="680" fill="url(#warmClassroom)" />
        <rect x="0" y="490" width="1200" height="190" fill="#d97706" opacity="0.35" />

        <!-- Arched Window with Sunbeams -->
        <path d="M180 440 V 180 Q 300 80 420 180 V 440 Z" fill="#e0f2fe" stroke="#ffffff" stroke-width="12" />
        <line x1="300" y1="120" x2="300" y2="440" stroke="#ffffff" stroke-width="6" />
        <line x1="180" y1="280" x2="420" y2="280" stroke="#ffffff" stroke-width="6" />

        <!-- Classroom Chalkboard -->
        <rect x="520" y="100" width="560" height="260" rx="14" fill="#064e3b" stroke="#78350f" stroke-width="14" />
        <text x="800" y="210" fill="#fef08a" font-family="'Baloo 2', sans-serif" font-size="34" font-weight="700" text-anchor="middle">HONESTY IS THE BEST POLICY</text>
        <text x="800" y="260" fill="#ffffff" opacity="0.8" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" text-anchor="middle">Truth • Trust • Doing What Is Right</text>

        <!-- Thiseni Returning Lost Pencil Case to Grateful Classmate -->
        ${drawStudent({ x: 620, y: 440, s: 1.15, shirt: '#16a34a', hair: '#18181b', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 800, y: 445, s: 1.1, shirt: '#3b82f6', hair: '#451a03', hairStyle: 'curly', arm: 'open' })}

        <!-- The Returned Pencil Case -->
        <rect x="700" y="470" width="36" height="18" rx="6" fill="#f43f5e" stroke="#ffffff" stroke-width="2" />
      </svg>
    `;
  }

  // Slide 06: Bhanuja - Respect Makes Us Better (Attentive Reading Circle & Teacher)
  function renderSlide6() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#warmClassroom)" />
        <rect x="0" y="480" width="1200" height="200" fill="#b45309" opacity="0.3" />

        <!-- Cozy Library Bookshelf Wall -->
        <rect x="100" y="80" width="380" height="380" rx="12" fill="#78350f" stroke="#451a03" stroke-width="8" />
        <!-- Shelves with Colorful Books -->
        <rect x="120" y="180" width="340" height="14" fill="#b45309" />
        <rect x="120" y="280" width="340" height="14" fill="#b45309" />
        <rect x="120" y="380" width="340" height="14" fill="#b45309" />
        <!-- Stacked Books -->
        <rect x="130" y="110" width="18" height="70" rx="3" fill="#3b82f6" />
        <rect x="152" y="120" width="16" height="60" rx="3" fill="#ef4444" />
        <rect x="172" y="105" width="20" height="75" rx="3" fill="#10b981" />
        <rect x="196" y="125" width="18" height="55" rx="3" fill="#f59e0b" />

        <!-- Respect Banner on Wall -->
        <rect x="580" y="90" width="500" height="70" rx="14" fill="rgba(255,255,255,0.7)" stroke="#7c3aed" stroke-width="3" />
        <text x="830" y="135" fill="#6d28d9" font-family="'Baloo 2', sans-serif" font-size="28" font-weight="700" text-anchor="middle">LISTENING WITH RESPECT & CARE</text>

        <!-- Bhanuja Speaking with Respect while Friends Listen Attentively -->
        ${drawStudent({ x: 820, y: 430, s: 1.2, shirt: '#7c3aed', hair: '#0f172a', hairStyle: 'short', glasses: true, arm: 'open' })}
        ${drawStudent({ x: 650, y: 440, s: 1.1, shirt: '#0284c7', hair: '#451a03', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 1000, y: 440, s: 1.1, shirt: '#ec4899', hair: '#18181b', hairStyle: 'ponytail', arm: 'open' })}
      </svg>
    `;
  }

  // Slide 07: Yenuth - Be Kind to Animals (MASTER NATURAL SANCTUARY)
  // Anatomically realistic puppy, resting calico cat, perched birds, butterflies, clean water, caring child
  function renderSlide7() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <!-- Soft Morning Garden Sky -->
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <circle cx="280" cy="180" r="160" fill="#fef08a" opacity="0.5" filter="url(#softGlow)" />

        <!-- Weeping Willow & Flowering Cherry Blossom Trees -->
        <g class="sway-trees">
          <path d="M-20 380 Q 80 140 120 40 Q 240 10 320 120 Q 380 260 280 440 Z" fill="#15803d" opacity="0.85" />
          <path d="M960 400 Q 1020 180 1100 80 Q 1200 40 1240 220 L 1220 460 Z" fill="#16a34a" opacity="0.85" />
          <!-- Cherry blossoms in bloom -->
          <circle cx="160" cy="120" r="14" fill="#fbcfe8" />
          <circle cx="210" cy="90" r="18" fill="#f472b6" opacity="0.7" />
          <circle cx="260" cy="130" r="15" fill="#fbcfe8" />
        </g>

        <!-- Lush Green Terraced Lawns & Daisy Flowers -->
        <path d="M-50 440 Q 300 360 700 400 T 1250 380 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        
        <!-- Crystal Clear Natural Freshwater Brook with Smooth Stones -->
        <path d="M0 580 Q 350 510 650 550 T 1200 520 L 1200 680 L 0 680 Z" fill="url(#waterFlow)" />
        <ellipse cx="240" cy="620" rx="35" ry="12" fill="#64748b" />
        <ellipse cx="480" cy="600" rx="28" ry="10" fill="#94a3b8" />
        <ellipse cx="850" cy="610" rx="40" ry="14" fill="#64748b" />

        <!-- 1. Realistic Calico Cat Resting Naturally on Warm Rock -->
        ${drawRealisticCat(180, 420, 1.3)}

        <!-- 2. Realistic Golden Retriever Puppy Playing Gently -->
        ${drawRealisticPuppy(680, 430, 1.25)}

        <!-- 3. Yenuth - Gentle Child Kneeling and Offering Clean Fresh Water -->
        ${drawStudent({ x: 540, y: 410, s: 1.2, shirt: '#0d9488', hair: '#365314', hairStyle: 'curly', pose: 'kneel' })}

        <!-- 4. Realistic Birds Perched on Willow Branches -->
        ${drawRealisticBird(130, 240, 1.35, false)}
        ${drawRealisticBird(1040, 220, 1.4, true)}

        <!-- 5. Colorful Fluttering Butterflies -->
        ${drawRealisticButterfly(420, 280, 1.3, 'orange')}
        ${drawRealisticButterfly(780, 310, 1.1, 'blue')}
        ${drawRealisticButterfly(900, 250, 0.95, 'orange')}
      </svg>
    `;
  }

  // Slide 08: Dewli - Stand Up for What Is Right (Courtyard Support & Breaking Sunlight)
  function renderSlide8() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <!-- Dramatic Clouds with Golden Sunlight Breaking Through -->
        <rect width="1200" height="680" fill="#0284c7" />
        <circle cx="650" cy="200" r="190" fill="#fef08a" opacity="0.6" filter="url(#softGlow)" />
        <path d="M-50 490 Q 400 420 800 460 T 1250 440 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- School Archway -->
        <path d="M250 490 V 240 Q 400 160 550 240 V 490 Z" fill="none" stroke="#ffffff" stroke-width="16" />

        <!-- Dewli Standing Bravely Beside Excluded Peer Offering Warm Hand -->
        ${drawStudent({ x: 580, y: 420, s: 1.2, shirt: '#e11d48', hair: '#172554', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 470, y: 430, s: 1.12, shirt: '#64748b', hair: '#451a03', hairStyle: 'short', arm: 'open' })}

        <!-- Welcoming Sunshine Halo over the Pair -->
        <ellipse cx="525" cy="460" rx="140" ry="40" fill="#fef08a" opacity="0.35" filter="url(#softGlow)" />
        
        <!-- Two Doves of Peace Soaring -->
        ${drawRealisticBird(750, 160, 1.3, true)}
        ${drawRealisticBird(840, 130, 1.1, true)}
      </svg>
    `;
  }

  // Slide 09: All Six Children - Final Message (Illuminated Grand Stage)
  function renderSlide9() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <!-- Grand Auditorium Glow -->
        <rect width="1200" height="680" fill="radial-gradient(circle at 600px 300px, #1e40af 0%, #030712 100%)" />
        <ellipse cx="600" cy="540" rx="500" ry="100" fill="#fef08a" opacity="0.28" filter="url(#softGlow)" />

        <!-- Golden Beams from Above -->
        <polygon points="600,0 200,680 1000,680" fill="rgba(254, 240, 138, 0.12)" />

        <!-- All Six Children Joined Hand-in-Hand Under Spotlight -->
        ${drawStudent({ x: 260, y: 450, s: 1.15, shirt: '#0284c7', hair: '#1e293b', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 390, y: 455, s: 1.12, shirt: '#ea580c', hair: '#451a03', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 520, y: 445, s: 1.15, shirt: '#16a34a', hair: '#18181b', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 670, y: 445, s: 1.15, shirt: '#7c3aed', hair: '#0f172a', hairStyle: 'short', glasses: true, arm: 'open' })}
        ${drawStudent({ x: 800, y: 455, s: 1.14, shirt: '#0d9488', hair: '#365314', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 930, y: 450, s: 1.12, shirt: '#e11d48', hair: '#172554', hairStyle: 'ponytail', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 10: Poem - Kindness (Sanuthi & Dihas)
  function renderSlide10() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <path d="M-50 480 Q 300 410 700 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        <!-- Golden Autumn Trees -->
        <path d="M180 480 Q 220 280 250 160 Q 360 80 420 180 Q 480 300 360 480 Z" fill="#f59e0b" opacity="0.9" />
        
        <!-- Sanuthi & Dihas Walking Together, Sharing Warmth -->
        ${drawStudent({ x: 520, y: 430, s: 1.15, shirt: '#ec4899', hair: '#1e293b', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 660, y: 435, s: 1.15, shirt: '#3b82f6', hair: '#451a03', hairStyle: 'short', arm: 'wave' })}

        ${drawRealisticBird(380, 220, 1.25, false)}
        ${drawRealisticButterfly(780, 320, 1.2, 'orange')}
      </svg>
    `;
  }

  // Slide 11: Poem - Fairness & Honesty (Nethan, Omin, Inuli)
  function renderSlide11() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <path d="M-50 480 Q 400 420 800 460 T 1250 440 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        <!-- Sunbeams of Trust -->
        <circle cx="600" cy="200" r="160" fill="#fef08a" opacity="0.45" filter="url(#softGlow)" />

        <!-- Nethan, Omin, Inuli Playing Sports & Fairness -->
        ${drawStudent({ x: 420, y: 430, s: 1.12, shirt: '#0284c7', hair: '#18181b', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 590, y: 435, s: 1.14, shirt: '#10b981', hair: '#451a03', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 760, y: 430, s: 1.12, shirt: '#f59e0b', hair: '#0f172a', hairStyle: 'ponytail', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 12: Poem - Respect & Animals (Shenuki, Jeson, Praneeth, Dasindu)
  function renderSlide12() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <path d="M-50 460 Q 400 390 800 430 T 1250 410 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- Resting Animals in Meadow -->
        ${drawRealisticCat(220, 430, 1.2)}
        ${drawRealisticPuppy(880, 440, 1.15)}

        <!-- Shenuki, Jeson, Praneeth, Dasindu in Gentle Circle -->
        ${drawStudent({ x: 420, y: 420, s: 1.08, shirt: '#8b5cf6', hair: '#18181b', hairStyle: 'ponytail' })}
        ${drawStudent({ x: 530, y: 425, s: 1.08, shirt: '#0284c7', hair: '#451a03', hairStyle: 'short' })}
        ${drawStudent({ x: 650, y: 425, s: 1.08, shirt: '#10b981', hair: '#0f172a', hairStyle: 'short' })}
        ${drawStudent({ x: 760, y: 420, s: 1.08, shirt: '#f97316', hair: '#365314', hairStyle: 'curly' })}
      </svg>
    `;
  }

  // Slide 13: Poem - Courage & Nature (Noveena, Kenula, Sara)
  function renderSlide13() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <!-- Majestic Mountain Overlook & Blue Sky -->
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <!-- Distant Purple Mountains -->
        <polygon points="100,500 400,220 700,500" fill="#93c5fd" opacity="0.6" />
        <polygon points="500,500 850,180 1200,500" fill="#60a5fa" opacity="0.6" />
        <!-- Lush Pine Forests -->
        <polygon points="200,520 260,340 320,520" fill="#065f46" />
        <polygon points="850,520 920,320 990,520" fill="#065f46" />
        <path d="M-50 490 Q 400 430 800 470 T 1250 450 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- Noveena, Kenula, Sara Standing Courageous -->
        ${drawStudent({ x: 440, y: 430, s: 1.15, shirt: '#ec4899', hair: '#0f172a', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 600, y: 425, s: 1.18, shirt: '#0284c7', hair: '#451a03', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 760, y: 430, s: 1.15, shirt: '#f59e0b', hair: '#18181b', hairStyle: 'ponytail', arm: 'open' })}

        <!-- Soaring Eagle in Freedom -->
        ${drawRealisticBird(620, 140, 1.8, true)}
      </svg>
    `;
  }

  // Slide 14: Final Poem Chorus (Minugi & All 13 Children)
  function renderSlide14() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <circle cx="600" cy="220" r="220" fill="#fef08a" opacity="0.5" filter="url(#softGlow)" />
        <path d="M-50 480 Q 400 410 800 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- 13 Joyful Children on Vibrant Celebratory Stage -->
        ${drawStudent({ x: 120, y: 460, s: 0.95, shirt: '#ec4899', hairStyle: 'ponytail' })}
        ${drawStudent({ x: 200, y: 465, s: 0.95, shirt: '#3b82f6', hairStyle: 'short' })}
        ${drawStudent({ x: 280, y: 460, s: 0.95, shirt: '#10b981', hairStyle: 'curly' })}
        ${drawStudent({ x: 360, y: 465, s: 0.95, shirt: '#f59e0b', hairStyle: 'short' })}
        ${drawStudent({ x: 440, y: 460, s: 0.95, shirt: '#8b5cf6', hairStyle: 'ponytail' })}
        ${drawStudent({ x: 520, y: 465, s: 0.95, shirt: '#06b6d4', hairStyle: 'short' })}
        ${drawStudent({ x: 600, y: 450, s: 1.1, shirt: '#e11d48', hairStyle: 'ponytail', arm: 'wave' })} <!-- Minugi Lead -->
        ${drawStudent({ x: 680, y: 465, s: 0.95, shirt: '#84cc16', hairStyle: 'short' })}
        ${drawStudent({ x: 760, y: 460, s: 0.95, shirt: '#f97316', hairStyle: 'curly' })}
        ${drawStudent({ x: 840, y: 465, s: 0.95, shirt: '#6366f1', hairStyle: 'short' })}
        ${drawStudent({ x: 920, y: 460, s: 0.95, shirt: '#14b8a6', hairStyle: 'ponytail' })}
        ${drawStudent({ x: 1000, y: 465, s: 0.95, shirt: '#eab308', hairStyle: 'short' })}
        ${drawStudent({ x: 1080, y: 460, s: 0.95, shirt: '#d946ef', hairStyle: 'ponytail' })}
      </svg>
    `;
  }

  // Slide 15: Role Play 1 - Playground Morning (Evodi, Nethuli, Liyansa, Liyara)
  function renderSlide15() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <path d="M-50 480 Q 400 420 800 460 T 1250 440 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        <!-- Playground Equipment & Skipping Ropes -->
        ${drawStudent({ x: 380, y: 430, s: 1.1, shirt: '#f43f5e', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 520, y: 435, s: 1.1, shirt: '#3b82f6', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 680, y: 430, s: 1.1, shirt: '#10b981', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 820, y: 435, s: 1.1, shirt: '#eab308', hairStyle: 'ponytail', arm: 'open' })}
      </svg>
    `;
  }

  // Slide 16: Role Play 1 - The Exclusion (Osheera, Sehansa)
  function renderSlide16() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <!-- Sombre Atmospheric Shift -->
        <rect width="1200" height="680" fill="#334155" />
        <circle cx="850" cy="220" r="160" fill="#cbd5e1" opacity="0.3" />
        <path d="M-50 490 Q 400 440 800 470 T 1250 450 L 1250 680 L -50 680 Z" fill="#475569" />

        <!-- Solitary Bench with Left-Out Peer -->
        <rect x="280" y="440" width="180" height="14" rx="4" fill="#1e293b" />
        <rect x="300" y="454" width="10" height="35" rx="3" fill="#0f172a" />
        <rect x="430" y="454" width="10" height="35" rx="3" fill="#0f172a" />
        ${drawStudent({ x: 370, y: 410, s: 1.1, shirt: '#64748b', hairStyle: 'short' })}

        <!-- Group in Distance Whispering / Withholding Ball -->
        ${drawStudent({ x: 780, y: 430, s: 1.05, shirt: '#f97316', hairStyle: 'curly' })}
        ${drawStudent({ x: 890, y: 435, s: 1.05, shirt: '#8b5cf6', hairStyle: 'ponytail' })}
      </svg>
    `;
  }

  // Slide 17: Role Play 1 - Speaking Up (Gevin, Lisari)
  function renderSlide17() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <circle cx="500" cy="220" r="160" fill="#fef08a" opacity="0.4" filter="url(#softGlow)" />
        <path d="M-50 480 Q 400 420 800 460 T 1250 440 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- Gevin & Lisari Stepping Forward Resolutely -->
        ${drawStudent({ x: 480, y: 420, s: 1.2, shirt: '#0284c7', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 640, y: 425, s: 1.18, shirt: '#e11d48', hairStyle: 'ponytail', arm: 'open' })}
      </svg>
    `;
  }

  // Slide 18: Role Play 1 - Friendship Restored
  function renderSlide18() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <path d="M-50 480 Q 400 410 800 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        
        <!-- Big Circle of Joined Hands & Big Smiles -->
        ${drawStudent({ x: 300, y: 430, s: 1.1, shirt: '#f43f5e', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 440, y: 435, s: 1.1, shirt: '#3b82f6', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 580, y: 430, s: 1.15, shirt: '#10b981', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 720, y: 435, s: 1.1, shirt: '#eab308', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 860, y: 430, s: 1.1, shirt: '#8b5cf6', hairStyle: 'ponytail', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 19: Role Play 2 - Voice of Nature (Dehami, Shaini)
  function renderSlide19() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#forestCanopy)" />
        <!-- Ancient Trees & Golden Sun Rays Filtering Through Leaves -->
        <polygon points="200,0 350,680 450,680 300,0" fill="rgba(254, 240, 138, 0.15)" />
        <polygon points="700,0 850,680 950,680 800,0" fill="rgba(254, 240, 138, 0.18)" />

        <!-- Dehami & Shaini Listening to Nature -->
        ${drawStudent({ x: 500, y: 440, s: 1.15, shirt: '#047857', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 680, y: 445, s: 1.15, shirt: '#0d9488', hairStyle: 'curly', arm: 'open' })}

        ${drawRealisticBird(320, 260, 1.3, true)}
        ${drawRealisticBird(850, 220, 1.25, false)}
      </svg>
    `;
  }

  // Slide 20: Role Play 2 - Wildlife Sanctuary (Nethuki, Yeshitha)
  function renderSlide20() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <path d="M-50 480 Q 400 410 800 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />
        <!-- Realistic Deer and River -->
        <path d="M0 580 Q 350 520 650 560 T 1200 530 L 1200 680 L 0 680 Z" fill="url(#waterFlow)" />
        ${drawRealisticDeer(160, 420, 1.3)}
        
        <!-- Nethuki & Yeshitha Watching with Respect -->
        ${drawStudent({ x: 620, y: 430, s: 1.15, shirt: '#16a34a', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 780, y: 435, s: 1.15, shirt: '#0284c7', hairStyle: 'short', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 21: Role Play 2 - Caring for the Voiceless (Minindee, Sinadhi)
  function renderSlide21() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#morningSky)" />
        <path d="M-50 480 Q 400 410 800 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- Animals Being Cared For -->
        ${drawRealisticPuppy(260, 430, 1.2)}
        ${drawRealisticCat(840, 430, 1.25)}

        <!-- Minindee & Sinadhi Offering Gentle Care -->
        ${drawStudent({ x: 470, y: 420, s: 1.15, shirt: '#ec4899', hairStyle: 'ponytail', pose: 'kneel' })}
        ${drawStudent({ x: 670, y: 425, s: 1.15, shirt: '#0d9488', hairStyle: 'curly', arm: 'open' })}
      </svg>
    `;
  }

  // Slide 22: Role Play 2 - Harmony with the Earth
  function renderSlide22() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <!-- Radiant Rainbow in Sky -->
        <path d="M100 480 A 500 500 0 0 1 1100 480" stroke="#f43f5e" stroke-width="10" fill="none" opacity="0.4" />
        <path d="M110 480 A 490 490 0 0 1 1090 480" stroke="#fbbf24" stroke-width="10" fill="none" opacity="0.4" />
        <path d="M120 480 A 480 480 0 0 1 1080 480" stroke="#34d399" stroke-width="10" fill="none" opacity="0.4" />
        <path d="M130 480 A 470 470 0 0 1 1070 480" stroke="#38bdf8" stroke-width="10" fill="none" opacity="0.4" />
        <path d="M-50 480 Q 400 410 800 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- Wildlife & Children Together in Peace -->
        ${drawRealisticDeer(120, 420, 1.1)}
        ${drawRealisticPuppy(940, 430, 1.1)}
        ${drawStudent({ x: 440, y: 430, s: 1.1, shirt: '#10b981', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 580, y: 435, s: 1.12, shirt: '#0284c7', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 720, y: 430, s: 1.1, shirt: '#f59e0b', hairStyle: 'curly', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 23: Role Play 3 - Ending Chorus (The Unity Train)
  function renderSlide23() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="radial-gradient(circle at 600px 300px, #1e3a8a 0%, #030712 100%)" />
        <ellipse cx="600" cy="540" rx="480" ry="90" fill="#fef08a" opacity="0.25" filter="url(#softGlow)" />

        <!-- Children Standing in Unity Like a Dynamic Express Train -->
        ${drawStudent({ x: 300, y: 440, s: 1.1, shirt: '#ef4444', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 430, y: 445, s: 1.12, shirt: '#f59e0b', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 570, y: 435, s: 1.18, shirt: '#10b981', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 710, y: 445, s: 1.12, shirt: '#0284c7', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 840, y: 440, s: 1.1, shirt: '#8b5cf6', hairStyle: 'ponytail', arm: 'wave' })}
      </svg>
    `;
  }

  // Slide 36: Item 06 - Our Kindness & Justice Pledge (Sunrise Gathering)
  function renderSlide36() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <circle cx="600" cy="200" r="220" fill="#fef08a" opacity="0.6" filter="url(#softGlow)" />
        <path d="M-50 480 Q 400 410 800 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- Children Hand-on-Heart in Reverence and Unity -->
        ${drawStudent({ x: 320, y: 430, s: 1.15, shirt: '#0284c7', hairStyle: 'curly', arm: 'open' })}
        ${drawStudent({ x: 460, y: 435, s: 1.15, shirt: '#16a34a', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 600, y: 425, s: 1.2, shirt: '#f59e0b', hairStyle: 'ponytail', arm: 'open' })}
        ${drawStudent({ x: 740, y: 435, s: 1.15, shirt: '#7c3aed', hairStyle: 'short', arm: 'open' })}
        ${drawStudent({ x: 880, y: 430, s: 1.15, shirt: '#e11d48', hairStyle: 'curly', arm: 'open' })}
      </svg>
    `;
  }

  // Slide 37: 6 Core Value Emblems (Crystalline Floating Badges)
  function renderSlide37() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="radial-gradient(circle at 600px 340px, #1e3a8a 0%, #030712 100%)" />
        <circle cx="600" cy="340" r="280" fill="#fef08a" opacity="0.15" filter="url(#softGlow)" />
      </svg>
    `;
  }

  // Slide 38: Final Climax (Golden Sunrise, Sussex College Crest)
  function renderSlide38() {
    return `
      <svg viewBox="0 0 1200 680" class="cinema-svg" preserveAspectRatio="xMidYMid slice">
        ${getSharedDefs()}
        <rect width="1200" height="680" fill="url(#goldenSunrise)" />
        <circle cx="600" cy="240" r="240" fill="#fef08a" opacity="0.65" filter="url(#softGlow)" />
        <polygon points="600,240 100,0 200,0" fill="rgba(255,255,255,0.2)" />
        <polygon points="600,240 400,0 500,0" fill="rgba(255,255,255,0.2)" />
        <polygon points="600,240 700,0 800,0" fill="rgba(255,255,255,0.2)" />
        <polygon points="600,240 1000,0 1100,0" fill="rgba(255,255,255,0.2)" />
        <path d="M-50 480 Q 400 410 800 450 T 1250 430 L 1250 680 L -50 680 Z" fill="url(#grassGrad)" />

        <!-- All Children Rejoicing -->
        ${drawStudent({ x: 280, y: 440, s: 1.15, shirt: '#0284c7', hairStyle: 'curly', arm: 'wave' })}
        ${drawStudent({ x: 440, y: 445, s: 1.15, shirt: '#ea580c', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 600, y: 435, s: 1.2, shirt: '#16a34a', hairStyle: 'ponytail', arm: 'wave' })}
        ${drawStudent({ x: 760, y: 445, s: 1.15, shirt: '#7c3aed', hairStyle: 'short', arm: 'wave' })}
        ${drawStudent({ x: 920, y: 440, s: 1.15, shirt: '#e11d48', hairStyle: 'curly', arm: 'wave' })}
      </svg>
    `;
  }

  // Main Render Map
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
    16: renderSlide16,
    17: renderSlide17,
    18: renderSlide18,
    19: renderSlide19,
    20: renderSlide20,
    21: renderSlide21,
    22: renderSlide22,
    23: renderSlide23,
    36: renderSlide36,
    37: renderSlide37,
    38: renderSlide38
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
