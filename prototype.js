/**
 * PROTOTYPE CINEMATIC PRESENTATION ENGINE
 * Sussex College Grade 4 Assembly • 3 High-End Prototypes
 */

const Prototype = (() => {
  const state = {
    current: 1,
    total: 3,
    isDrawerOpen: false,
    soundEnabled: true,
    audioCtx: null
  };

  const scripts = {
    1: {
      speaker: "Abhippra",
      item: "Item 01 • Speaker 01",
      topic: "Kindness Makes a Difference",
      tip: "Deliver the opening address with warmth, dignity, and a welcoming smile.",
      text: `Good morning, respected Principal Sir, Vice Principal Madam, teachers, and my dear friends.

With your kind permission, we, the students of Grade 4, would like to present six short speeches on the theme “Kindness Is Contagious, Justice Starts with Us.”

Let me begin with my speech on “Kindness Makes a Difference.”

Kindness means being helpful, caring, and friendly to others. A simple smile, a kind word, or a helping hand can make someone happy. We should never laugh at others or hurt their feelings. Even a small act of kindness can make a big difference.

Remember, kindness is contagious! When we are kind to others, they may be kind to others too.

Thank you!`
    },
    2: {
      speaker: "Yenuth",
      item: "Item 01 • Speaker 05",
      topic: "Be Kind to Animals",
      tip: "Gentle and compassionate tone. Eye contact with audience.",
      text: `Animals are living beings, and they need our love and care. They cannot always tell us when they are hungry, hurt, or frightened. So, we must be gentle with them and never tease, hit, or hurt them.

We can help animals by giving them food and water when appropriate and by asking an adult to help an animal in danger. Remember, animals deserve kindness too!

Thank you!`
    },
    3: {
      speaker: "All Grade 4 Students Together",
      item: "Item 06 • Sacred Assembly Pledge",
      topic: "Our Kindness & Justice Pledge",
      tip: "Hand on heart, reciting together with solemnity, pride, and united strength.",
      text: `OUR KINDNESS AND JUSTICE PLEDGE:
1. I promise to be kind to everyone, every day.
2. I promise to share and take turns fairly.
3. I promise to tell the truth and be honest.
4. I promise to respect my teachers, elders, and friends.
5. I promise to listen when others speak.
6. I promise to treat animals with love and care.
7. I promise to stand up for those who are treated unfairly.
8. I promise to keep my classroom and school clean.
9. I promise to make my school a happier, fairer, and kinder place.

Official Callout:
“I will choose kindness. I will stand for justice. I will make a difference!”

Grand Final Assembly Message:
“KINDNESS IS CONTAGIOUS, AND JUSTICE STARTS WITH US!”`
    }
  };

  function init() {
    setupParticles();
    setupEvents();
    goTo(1, false);
    initAudio();
  }

  function setupParticles() {
    document.querySelectorAll('.particle-layer').forEach(layer => {
      layer.innerHTML = '';
      for (let i = 0; i < 20; i++) {
        const dust = document.createElement('div');
        dust.className = 'light-dust';
        const size = Math.random() * 6 + 3;
        dust.style.width = `${size}px`;
        dust.style.height = `${size}px`;
        dust.style.left = `${Math.random() * 100}%`;
        dust.style.top = `${Math.random() * 90 + 5}%`;
        dust.style.animationDelay = `${Math.random() * 6}s`;
        dust.style.animationDuration = `${Math.random() * 5 + 5}s`;
        layer.appendChild(dust);
      }
    });
  }

  function setupEvents() {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case '1': goTo(1); break;
        case '2': goTo(2); break;
        case '3': goTo(3); break;
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
        case 's':
        case 'S':
          e.preventDefault();
          toggleDrawer();
          break;
      }
    });

    window.addEventListener('resize', handleResize);
    handleResize();
  }

  function handleResize() {
    const canvas = document.querySelector('.canvas-16-9');
    if (!canvas) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min((vw - 20) / 1920, (vh - 20) / 1080, 1);
    canvas.style.transform = `scale(${scale})`;
  }

  function goTo(slideNum, playAudio = true) {
    if (slideNum < 1 || slideNum > state.total) return;
    state.current = slideNum;

    document.querySelectorAll('.prototype-slide').forEach(slide => {
      const num = parseInt(slide.dataset.slide, 10);
      if (num === state.current) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    document.querySelectorAll('.hud-slide-btn').forEach(btn => {
      const num = parseInt(btn.dataset.target, 10);
      if (num === state.current) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Drawer
    const s = scripts[state.current];
    if (s) {
      document.getElementById('drawer-speaker').textContent = `${s.speaker} — ${s.topic}`;
      document.getElementById('drawer-tip').textContent = s.tip;
      document.getElementById('drawer-script').innerHTML = s.text.replace(/\n/g, '<br>');
    }

    if (playAudio) {
      playTone(587.33, 'triangle', 0, 0.3, 0.12);
      playTone(880.00, 'sine', 0.08, 0.4, 0.1);
    }
  }

  function next() {
    if (state.current < state.total) goTo(state.current + 1);
    else goTo(1);
  }

  function prev() {
    if (state.current > 1) goTo(state.current - 1);
  }

  function toggleDrawer(force) {
    state.isDrawerOpen = typeof force === 'boolean' ? force : !state.isDrawerOpen;
    const drawer = document.getElementById('speaker-drawer');
    if (state.isDrawerOpen) {
      drawer.classList.add('open');
    } else {
      drawer.classList.remove('open');
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  function initAudio() {
    const unlock = () => {
      if (!state.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) state.audioCtx = new AudioCtx();
      }
      if (state.audioCtx && state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
    };
    window.addEventListener('click', unlock);
    window.addEventListener('keydown', unlock);
  }

  function playTone(freq, type = 'sine', startTime = 0, duration = 0.35, gainValue = 0.12) {
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
    } catch (e) {}
  }

  return {
    init,
    goTo,
    next,
    prev,
    toggleDrawer,
    toggleFullscreen
  };
})();

document.addEventListener('DOMContentLoaded', () => Prototype.init());
