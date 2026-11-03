/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly Presentation
 * Interactive Presentation Controller & Motion Engine
 */

const Presentation = (() => {
  // Presentation State
  const state = {
    currentSlide: 1,
    totalSlides: 10,
    isAutoplay: false,
    autoplayTimer: null,
    autoplayDuration: 8500, // 8.5 seconds per slide
    soundEnabled: true,
    isOverviewOpen: false,
    isNotesOpen: false,
    audioCtx: null,
  };

  // Grade 4 Assembly Speaker Cues & Metadata
  const slideCues = {
    1: {
      title: "Six Voices, One Message",
      speaker: "Assembly Opening",
      line: "“Good morning respected Principal, teachers, our dear Class Teacher Mrs. Darshani Gunathilaka, and fellow students of Sussex College! Today, Grade 4 brings you a special message: Kindness Is Contagious, Justice Starts with Us.”",
      tip: "Stand tall, smile brightly at the audience, and speak with loud, proud voices together!"
    },
    2: {
      title: "Small Actions, Big Differences",
      speaker: "Group Value Overview",
      line: "“You don't need superpowers to change the world. It starts with five everyday choices: Be kind, be fair, be honest, show respect, and stand up for others.”",
      tip: "Gesture to each card as it lights up. Keep the pace steady and energetic."
    },
    3: {
      title: "Abhippra: Kindness Makes a Difference",
      speaker: "Abhippra",
      line: "“Hello friends, I'm Abhippra! When books fell in the hallway, walking past would have been easy. But bending down to help lifted my friend’s heart. A little kindness makes a big difference!”",
      tip: "Place your hand on your heart and make warm eye contact with the younger grades."
    },
    4: {
      title: "Peshala: Fairness for Everyone",
      speaker: "Peshala",
      line: "“Hi everyone, I'm Peshala! On the Sussex sports court, the best team is the one where everyone gets to play. True champions pass the ball and invite the quiet friend in!”",
      tip: "Speak with sportsmanship enthusiasm and an inviting open hand gesture."
    },
    5: {
      title: "Thiseni: Honesty Is the Best Policy",
      speaker: "Thiseni",
      line: "“Good morning, I'm Thiseni! Finding something that isn't ours tests who we truly are. Returning the lost pencil case brought more happiness than keeping it ever could. Always choose the truth!”",
      tip: "Smile reassuringly. Let the message of trust ring loud and clear."
    },
    6: {
      title: "Bhanuja: Respect Makes Us Better",
      speaker: "Bhanuja",
      line: "“Greetings teachers and friends, I'm Bhanuja! Respect is listening not just with our ears, but with our hearts. When we value each other’s words, our whole school shines.”",
      tip: "Speak gently, clearly, and thoughtfully with confident posture."
    },
    7: {
      title: "Yenuth: Be Kind to Animals",
      speaker: "Yenuth",
      line: "“Hello all, I'm Yenuth! Animals cannot speak our language, but they feel love, hunger, and cold. In Sussex gardens and at home, let us be gentle protectors of every living creature!”",
      tip: "Warm and compassionate tone. Imagine caring for your favorite pet."
    },
    8: {
      title: "Dewli: Stand Up for What Is Right",
      speaker: "Dewli",
      line: "“I'm Dewli! It takes real courage to step in when a friend is left out or teased. You don't have to shout—just walk up, say ‘Come sit with me,’ and be the reason someone feels safe.”",
      tip: "Project strength and courage. Stand tall with your chin up and eyes steady."
    },
    9: {
      title: "Our Promise: Grade 4 Pledge",
      speaker: "All Six Speakers Together",
      line: "“Now, please raise your right hands with us as Grade 4 takes our solemn Sussex pledge: We promise to be kind, fair, honest, respectful, care for animals, and stand up for what is right!”",
      tip: "Raise your right hand high together in unison on the stage!"
    },
    10: {
      title: "Thank You & Grand Finale",
      speaker: "Full Assembly Choir",
      line: "“Thank you, Sussex College! Special thanks to our teacher Darshani Gunathilaka for guiding us! Let's make every day a little kinder, fairer, and brighter. Remember: BE KIND, BE FAIR, BE THE CHANGE!”",
      tip: "Wave joyfully with both hands as the confetti fires, smiling with triumph!"
    }
  };

  // DOM Elements Cache
  let dom = {};

  // Initialize Presentation
  function init() {
    cacheElements();
    setupViewportScaling();
    setupIndicatorDots();
    setupOverviewGrid();
    setupKeyboardShortcuts();
    setupAmbientParticles();
    initAudio();
    initConfetti();
    goToSlide(1, false);

    // Resize listener for 16:9 canvas scaling
    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
  }

  function cacheElements() {
    dom = {
      viewport: document.getElementById('presentation-viewport'),
      canvas: document.getElementById('presentation-canvas'),
      slides: document.querySelectorAll('.slide-item'),
      dotsContainer: document.getElementById('dots-container'),
      currentNum: document.getElementById('slide-current-num'),
      totalNum: document.getElementById('slide-total-num'),
      progressFill: document.getElementById('dock-progress-fill'),
      progressTrack: document.getElementById('dock-progress-track'),
      slideLabel: document.getElementById('current-slide-label'),
      btnPrev: document.getElementById('btn-prev'),
      btnNext: document.getElementById('btn-next'),
      btnFullscreen: document.getElementById('btn-fullscreen'),
      btnOverview: document.getElementById('btn-overview'),
      btnSound: document.getElementById('btn-sound'),
      btnNotes: document.getElementById('btn-notes'),
      btnAutoplay: document.getElementById('btn-autoplay'),
      autoplayIcon: document.getElementById('autoplay-icon'),
      autoplayText: document.getElementById('autoplay-text'),
      speakerDrawer: document.getElementById('speaker-drawer'),
      drawerSpeakerName: document.getElementById('drawer-speaker-name'),
      drawerSlideTopic: document.getElementById('drawer-slide-topic'),
      drawerSpeakingLine: document.getElementById('drawer-speaking-line'),
      drawerSpeakingTip: document.getElementById('drawer-speaking-tip'),
      overviewModal: document.getElementById('overview-modal'),
      overviewGrid: document.getElementById('overview-grid-container'),
      confettiCanvas: document.getElementById('confetti-canvas'),
    };
  }

  // 16:9 Responsive Scaling Engine
  function setupViewportScaling() {
    handleResize();
  }

  function handleResize() {
    if (!dom.canvas) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const targetWidth = 1920;
    const targetHeight = 1080;

    const scaleX = (windowWidth - 24) / targetWidth;
    const scaleY = (windowHeight - 24) / targetHeight;
    const scale = Math.min(scaleX, scaleY, 1);

    dom.canvas.style.transform = `scale(${scale})`;
  }

  function handleFullscreenChange() {
    if (!document.fullscreenElement) {
      dom.btnFullscreen.classList.remove('active-btn');
    } else {
      dom.btnFullscreen.classList.add('active-btn');
    }
    handleResize();
  }

  // Build Indicator Dots
  function setupIndicatorDots() {
    if (!dom.dotsContainer) return;
    dom.dotsContainer.innerHTML = '';

    for (let i = 1; i <= state.totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `dot-btn ${i === 1 ? 'active' : ''}`;
      dot.setAttribute('title', `Slide ${i}: ${slideCues[i]?.title || ''}`);
      dot.setAttribute('aria-label', `Go to Slide ${i}`);
      dot.addEventListener('click', () => goToSlide(i));
      dom.dotsContainer.appendChild(dot);
    }
  }

  // Build Overview Modal Grid
  function setupOverviewGrid() {
    if (!dom.overviewGrid) return;
    dom.overviewGrid.innerHTML = '';

    for (let i = 1; i <= state.totalSlides; i++) {
      const cue = slideCues[i];
      const card = document.createElement('div');
      card.className = `overview-card ${i === 1 ? 'active-card' : ''}`;
      card.innerHTML = `
        <span class="card-num-badge">SLIDE ${String(i).padStart(2, '0')}</span>
        <h4 class="card-label">${cue.title}</h4>
        <span class="card-subtext">${cue.speaker}</span>
      `;
      card.addEventListener('click', () => {
        goToSlide(i);
        toggleOverview(false);
      });
      dom.overviewGrid.appendChild(card);
    }
  }

  // Keyboard Navigation
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ignore if user is inside an input or form
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'Backspace':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(state.totalSlides);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 's':
        case 'S':
        case 'n':
        case 'N':
          e.preventDefault();
          toggleNotes();
          break;
        case 'g':
        case 'G':
        case 'o':
        case 'O':
          e.preventDefault();
          toggleOverview();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          toggleAutoplay();
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleSound();
          break;
        case 'Escape':
          if (state.isOverviewOpen) toggleOverview(false);
          if (state.isNotesOpen) toggleNotes(false);
          break;
      }
    });

    // Progress track click-to-scrub
    if (dom.progressTrack) {
      dom.progressTrack.addEventListener('click', (e) => {
        const rect = dom.progressTrack.getBoundingClientRect();
        const clickRatio = (e.clientX - rect.left) / rect.width;
        const targetSlide = Math.min(state.totalSlides, Math.max(1, Math.ceil(clickRatio * state.totalSlides)));
        goToSlide(targetSlide);
      });
    }

    // Header buttons
    if (dom.btnFullscreen) dom.btnFullscreen.addEventListener('click', toggleFullscreen);
    if (dom.btnOverview) dom.btnOverview.addEventListener('click', () => toggleOverview());
    if (dom.btnNotes) dom.btnNotes.addEventListener('click', () => toggleNotes());
    if (dom.btnSound) dom.btnSound.addEventListener('click', toggleSound);
  }

  // Ambient Particles Generator
  function setupAmbientParticles() {
    const container = document.getElementById('ambient-particles');
    if (!container) return;
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.className = 'particle-dot';
      const size = Math.random() * 6 + 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 90 + 5}%`;
      p.style.animationDelay = `${Math.random() * 6}s`;
      p.style.animationDuration = `${Math.random() * 4 + 4}s`;
      container.appendChild(p);
    }
  }

  // Web Audio API Joyful Glockenspiel / Marimba Chimes
  function initAudio() {
    // AudioContext will resume on first user interaction
    const unlockAudio = () => {
      if (!state.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) state.audioCtx = new AudioCtx();
      }
      if (state.audioCtx && state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
  }

  function playTone(freq, type = 'sine', startTime = 0, duration = 0.4, gainValue = 0.15) {
    if (!state.soundEnabled || !state.audioCtx) return;
    try {
      const now = state.audioCtx.currentTime + startTime;
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(state.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (e) {
      // Audio fallback silent
    }
  }

  function playSlideSound() {
    if (!state.soundEnabled) return;
    // Friendly rising major triad (C5, E5, G5)
    playTone(523.25, 'triangle', 0.0, 0.35, 0.12);
    playTone(659.25, 'sine', 0.08, 0.35, 0.1);
    playTone(783.99, 'sine', 0.16, 0.45, 0.1);
  }

  function playSuccessSound() {
    if (!state.soundEnabled) return;
    // Celebration fanfare chord (C5, G5, C6)
    playTone(523.25, 'triangle', 0.0, 0.4, 0.14);
    playTone(783.99, 'sine', 0.1, 0.45, 0.14);
    playTone(1046.50, 'sine', 0.2, 0.6, 0.16);
  }

  // Slide Navigation Engine
  function goToSlide(targetIndex, playAudio = true) {
    if (targetIndex < 1 || targetIndex > state.totalSlides) return;
    if (targetIndex === state.currentSlide && playAudio) return;

    const prevIndex = state.currentSlide;
    state.currentSlide = targetIndex;

    // Update Slide Items Active State
    dom.slides.forEach((slide) => {
      const slideNum = parseInt(slide.dataset.slide, 10);
      if (slideNum === state.currentSlide) {
        slide.classList.add('active');
        triggerSlideEntranceAnimation(slide);
      } else {
        slide.classList.remove('active');
      }
    });

    // Update Counter & Progress Fill
    if (dom.currentNum) dom.currentNum.textContent = String(state.currentSlide).padStart(2, '0');
    if (dom.totalNum) dom.totalNum.textContent = String(state.totalSlides).padStart(2, '0');

    const progressPercent = ((state.currentSlide - 1) / (state.totalSlides - 1)) * 100;
    if (dom.progressFill) dom.progressFill.style.width = `${Math.max(10, progressPercent)}%`;

    // Update Indicator Dots
    const dots = dom.dotsContainer ? dom.dotsContainer.querySelectorAll('.dot-btn') : [];
    dots.forEach((dot, idx) => {
      if (idx + 1 === state.currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update Overview Grid Active Cards
    const cards = dom.overviewGrid ? dom.overviewGrid.querySelectorAll('.overview-card') : [];
    cards.forEach((card, idx) => {
      if (idx + 1 === state.currentSlide) {
        card.classList.add('active-card');
      } else {
        card.classList.remove('active-card');
      }
    });

    // Update Current Slide Label
    const cue = slideCues[state.currentSlide];
    if (dom.slideLabel && cue) {
      dom.slideLabel.textContent = `${cue.title}`;
    }

    // Update Speaker Notes Drawer Content
    updateSpeakerNotes(cue);

    // Nav Button States
    if (dom.btnPrev) dom.btnPrev.disabled = state.currentSlide === 1;
    if (dom.btnNext) {
      if (state.currentSlide === state.totalSlides) {
        dom.btnNext.innerHTML = `<span class="btn-text">Finish</span>`;
      } else {
        dom.btnNext.innerHTML = `
          <span class="btn-text">Next</span>
          <svg class="dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
      }
    }

    // Play Audio chime
    if (playAudio) {
      if (state.currentSlide === state.totalSlides) {
        playSuccessSound();
        launchCelebration();
      } else {
        playSlideSound();
      }
    }

    // Reset autoplay timer if running
    if (state.isAutoplay) {
      resetAutoplayTimer();
    }
  }

  function nextSlide() {
    if (state.currentSlide < state.totalSlides) {
      goToSlide(state.currentSlide + 1);
    } else {
      // Loop or trigger celebration
      launchCelebration();
    }
  }

  function prevSlide() {
    if (state.currentSlide > 1) {
      goToSlide(state.currentSlide - 1);
    }
  }

  // Smooth Motion with GSAP (with graceful CSS fallback)
  function triggerSlideEntranceAnimation(slideEl) {
    if (window.gsap) {
      const textCol = slideEl.querySelector('.story-text-column, .title-text-zone, .values-header-zone, .promise-header-zone, .finale-header');
      const visualCol = slideEl.querySelector('.story-visual-column, .title-artwork-zone, .promise-artwork-box, .finale-visual-box');
      const cards = slideEl.querySelectorAll('.value-card, .promise-item');

      if (textCol) {
        gsap.fromTo(textCol, 
          { opacity: 0, x: -30 }, 
          { opacity: 1, x: 0, duration: 0.65, ease: 'power2.out' }
        );
      }
      if (visualCol) {
        gsap.fromTo(visualCol, 
          { opacity: 0, scale: 0.94, y: 20 }, 
          { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: 'back.out(1.4)', delay: 0.1 }
        );
      }
      if (cards.length > 0) {
        gsap.fromTo(cards, 
          { opacity: 0, y: 25 }, 
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out', delay: 0.2 }
        );
      }
    }
  }

  // Speaker Notes Management
  function updateSpeakerNotes(cue) {
    if (!cue) return;
    if (dom.drawerSpeakerName) dom.drawerSpeakerName.textContent = cue.speaker;
    if (dom.drawerSlideTopic) dom.drawerSlideTopic.textContent = `Slide ${state.currentSlide}: ${cue.title}`;
    if (dom.drawerSpeakingLine) dom.drawerSpeakingLine.textContent = cue.line;
    if (dom.drawerSpeakingTip) dom.drawerSpeakingTip.textContent = cue.tip;
  }

  function toggleNotes(forceState) {
    state.isNotesOpen = typeof forceState === 'boolean' ? forceState : !state.isNotesOpen;
    if (state.isNotesOpen) {
      dom.speakerDrawer.classList.remove('hidden');
      dom.btnNotes.classList.add('active-btn');
    } else {
      dom.speakerDrawer.classList.add('hidden');
      dom.btnNotes.classList.remove('active-btn');
    }
  }

  // Slide Overview Modal
  function toggleOverview(forceState) {
    state.isOverviewOpen = typeof forceState === 'boolean' ? forceState : !state.isOverviewOpen;
    if (state.isOverviewOpen) {
      dom.overviewModal.classList.remove('hidden');
      dom.btnOverview.classList.add('active-btn');
    } else {
      dom.overviewModal.classList.add('hidden');
      dom.btnOverview.classList.remove('active-btn');
    }
  }

  // Fullscreen Management
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  // Sound Toggle
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    if (state.soundEnabled) {
      dom.btnSound.classList.remove('active-btn');
      playTone(659.25, 'sine', 0, 0.2, 0.1);
    } else {
      dom.btnSound.classList.add('active-btn');
    }
  }

  // Auto-play Management
  function toggleAutoplay() {
    state.isAutoplay = !state.isAutoplay;
    if (state.isAutoplay) {
      dom.btnAutoplay.classList.add('playing');
      dom.autoplayIcon.textContent = '⏸';
      dom.autoplayText.textContent = 'Pause';
      resetAutoplayTimer();
    } else {
      dom.btnAutoplay.classList.remove('playing');
      dom.autoplayIcon.textContent = '▶';
      dom.autoplayText.textContent = 'Auto-Play';
      if (state.autoplayTimer) clearTimeout(state.autoplayTimer);
    }
  }

  function resetAutoplayTimer() {
    if (state.autoplayTimer) clearTimeout(state.autoplayTimer);
    state.autoplayTimer = setTimeout(() => {
      if (state.currentSlide < state.totalSlides) {
        nextSlide();
      } else {
        goToSlide(1);
      }
    }, state.autoplayDuration);
  }

  // Slide 9: Interactive Pledge Checklist Animation
  function triggerPledgeAnimation() {
    const items = document.querySelectorAll('.promise-item');
    if (!items || items.length === 0) return;

    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active-pulse');
        playTone(440 + index * 60, 'triangle', 0, 0.3, 0.12);
        setTimeout(() => item.classList.remove('active-pulse'), 1200);
      }, index * 250);
    });
  }

  // Confetti Particle Engine (Zero external dependencies)
  let confettiCtx = null;
  let confettiParticles = [];
  let confettiAnimId = null;

  function initConfetti() {
    const canvas = dom.confettiCanvas;
    if (!canvas) return;
    confettiCtx = canvas.getContext('2d');
    resizeConfettiCanvas();
    window.addEventListener('resize', resizeConfettiCanvas);
  }

  function resizeConfettiCanvas() {
    if (!dom.confettiCanvas) return;
    dom.confettiCanvas.width = dom.canvas.clientWidth;
    dom.confettiCanvas.height = dom.canvas.clientHeight;
  }

  function launchCelebration() {
    resizeConfettiCanvas();
    confettiParticles = [];
    const colors = ['#f43f5e', '#3b82f6', '#facc15', '#10b981', '#a855f7', '#fb923c', '#ffffff'];

    for (let i = 0; i < 180; i++) {
      confettiParticles.push({
        x: dom.confettiCanvas.width * (0.3 + Math.random() * 0.4),
        y: dom.confettiCanvas.height * 0.85,
        vx: (Math.random() - 0.5) * 18,
        vy: -Math.random() * 16 - 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.38,
        drag: 0.98,
        alpha: 1,
      });
    }

    if (!confettiAnimId) {
      animateConfetti();
    }
  }

  function animateConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.alpha -= 0.005;

      if (p.alpha <= 0 || p.y > dom.confettiCanvas.height + 50) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.globalAlpha = Math.max(0, p.alpha);
      confettiCtx.fillStyle = p.color;

      // Draw ribbon rectangle
      confettiCtx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
      confettiCtx.restore();
    }

    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      confettiAnimId = null;
      confettiCtx.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);
    }
  }

  // Public API
  return {
    init,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    toggleNotes,
    toggleOverview,
    toggleAutoplay,
    toggleSound,
    triggerPledgeAnimation,
    launchCelebration,
  };
})();

// Auto-run when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Presentation.init());
} else {
  Presentation.init();
}
