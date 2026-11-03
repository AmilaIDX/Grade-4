/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly Presentation
 * Master Presentation Engine & Editable PPTX Export
 */

const Presentation = (() => {
  // State
  const state = {
    currentSlide: 1,
    totalSlides: 38,
    isAutoplay: false,
    autoplayTimer: null,
    autoplayDuration: 8500,
    soundEnabled: true,
    isOverviewOpen: false,
    isNotesOpen: false,
    audioCtx: null,
  };

  // Item starting slide indices
  const itemMap = {
    1: 2,   // Item 01 starts at slide 2
    2: 10,  // Item 02 starts at slide 10
    3: 15,  // Item 03 starts at slide 15
    4: 24,  // Item 04 starts at slide 24
    5: 35,  // Item 05 starts at slide 35
    6: 36,  // Item 06 starts at slide 36
  };

  // Complete Assembly Metadata for all 38 Slides
  const slideCues = {
    1: {
      title: "Assembly Welcome & Opening",
      speaker: "Assembly Opening",
      item: 1,
      line: "“Good morning respected Principal Sir, Vice Principal Madam, teachers, students, and guests. Welcome to the Grade 4 Assembly: Six Voices, One Message!”",
      tip: "Stand tall, smile warmly at the audience, and speak clearly into the microphone."
    },
    2: {
      title: "Abhippra: Introduction & Opening Greeting",
      speaker: "Abhippra",
      item: 1,
      line: "“Good morning, respected Principal Sir, Vice Principal Madam, teachers, and my dear friends. With your kind permission, we, the students of Grade 4, would like to present six short speeches on the theme ‘Kindness Is Contagious, Justice Starts with Us.’”",
      tip: "Deliver the formal opening greeting with dignity and a welcoming smile."
    },
    3: {
      title: "Abhippra: Kindness Makes a Difference",
      speaker: "Abhippra",
      item: 1,
      line: "“Let me begin with my speech on ‘Kindness Makes a Difference.’ Kindness means being helpful, caring, and friendly to others. A simple smile, a kind word, or a helping hand can make someone happy... Remember, kindness is contagious! When we are kind to others, they may be kind to others too. Thank you!”",
      tip: "Speak with warmth and heart. Pause slightly before the final 'Thank you!'."
    },
    4: {
      title: "Peshala: Fairness for Everyone",
      speaker: "Peshala",
      item: 1,
      line: "“Fairness means treating everyone equally and giving everyone a fair chance. We should not leave anyone out of a game or treat someone badly because they are different from us. Every child deserves respect, friendship, and love. Let us share, take turns, and include everyone. Remember, justice begins when we treat others fairly. Thank you!”",
      tip: "Speak with sportsmanlike enthusiasm and an open, welcoming hand gesture."
    },
    5: {
      title: "Thiseni: Honesty Is the Best Policy",
      speaker: "Thiseni",
      item: 1,
      line: "“Honesty means telling the truth and doing the right thing, even when nobody is watching. Sometimes, telling the truth may be difficult, but it helps others trust us. If we make a mistake, we should admit it and try to correct it. Let us always be truthful in our words and actions because honesty makes us better people. Thank you!”",
      tip: "Project calm, gentle honesty and clear confidence."
    },
    6: {
      title: "Bhanuja: Respect Makes Us Better",
      speaker: "Bhanuja",
      item: 1,
      line: "“Respect means treating others with kindness and care. We should respect our parents, teachers, friends, and everyone around us. We must listen when others speak, use polite words, and accept that people may have different ideas. We should also respect animals and never hurt them. When we show respect, we help make our school and our world a happier place. Thank you!”",
      tip: "Polite, thoughtful, and steady voice. Make eye contact across the auditorium."
    },
    7: {
      title: "Yenuth: Be Kind to Animals",
      speaker: "Yenuth",
      item: 1,
      line: "“Animals are living beings, and they need our love and care. They cannot always tell us when they are hungry, hurt, or frightened. So, we must be gentle with them and never tease, hit, or hurt them. We can help animals by giving them food and water when appropriate and by asking an adult to help an animal in danger. Remember, animals deserve kindness too! Thank you!”",
      tip: "Warm and compassionate tone. Imagine protecting a vulnerable pet."
    },
    8: {
      title: "Dewli: Stand Up for What Is Right",
      speaker: "Dewli",
      item: 1,
      line: "“Sometimes, we may see someone being bullied, left out, or treated unfairly. We should not laugh or simply walk away. We can support that person, speak kindly, and ask a trusted adult for help. Being brave does not mean fighting. It means choosing to do the right thing, even when it is difficult. Let us be brave, be fair, and stand up for justice! Thank you!”",
      tip: "Stand tall with quiet strength and clear moral courage."
    },
    9: {
      title: "All Six Children: Final Message",
      speaker: "All Six Children Together",
      item: 1,
      line: "“All together, loudly and confidently: ‘Kindness is contagious, and justice starts with us!’ Thank you!”",
      tip: "Deliver the united motto in unison with big smiles!"
    },
    10: {
      title: "Poem: Stanza 1 (Sanuthi, Dihas, Nethan, Omin)",
      speaker: "Sanuthi, Dihas, Nethan, Omin",
      item: 2,
      line: "“1. Sanuthi: A little smile, a little care... / 2. Dihas: A helping hand, a word that's kind... / 3. Nethan: Be fair to all, both big and small... / 4. Omin: Tell the truth and do what's right...”",
      tip: "Each child steps forward proudly to recite their exact two lines."
    },
    11: {
      title: "Poem: Stanza 2 (Inuli, Shenuki, Jeson, Praneeth)",
      speaker: "Inuli, Shenuki, Jeson, Praneeth",
      item: 2,
      line: "“5. Inuli: Respect your friends in all you do... / 6. Shenuki: If someone is sad or left alone... / 7. Jeson: Don't laugh at others or cause them pain... / 8. Praneeth: Be gentle to animals everywhere...”",
      tip: "Clear, poetic rhythm. Project clearly to the audience."
    },
    12: {
      title: "Poem: Stanza 3 (Dasindu, Noveena, Kenula, Sara)",
      speaker: "Dasindu, Noveena, Kenula, Sara",
      item: 2,
      line: "“9. Dasindu: They have feelings, they feel pain... / 10. Noveena: Their homes are forests, their skies are wide... / 11. Kenula: Stand up for justice, be brave and true... / 12. Sara: Together we can make kindness grow...”",
      tip: "Keep the rhythm flowing smoothly."
    },
    13: {
      title: "Poem: Stanza 4 (Minugi Solo)",
      speaker: "Minugi",
      item: 2,
      line: "“13. Minugi: A little kindness can light the way, Let's spread love and justice every day!”",
      tip: "Center stage solo with bright, joyful voice."
    },
    14: {
      title: "Poem: Grand Chorus (All 13 Children)",
      speaker: "All 13 Children Together",
      item: 2,
      line: "“ALL 13 CHILDREN TOGETHER: A little kindness goes a long way! Let love and justice lead the way! Be kind to people, protect animals too, The world will be better because of what we do! ❤️”",
      tip: "Full chorus unison with radiant energy!"
    },
    15: {
      title: "Role Play: Title & Scene Introduction",
      speaker: "Evodi (Narrator)",
      item: 3,
      line: "“Evodi: One morning during the school interval, a group of children were playing together. Their classmate, Nethuli, wanted to join them. But the others refused to let her play.”",
      tip: "Narrator sets the scene with calm, clear storytelling tone."
    },
    16: {
      title: "Part 1: The Playground – The Exclusion",
      speaker: "Nethuli, Liyansa, Liyara",
      item: 3,
      line: "“Nethuli: Hi friends. May I join you? / Liyansa: No, no. We don't like to play with you. / Liyara: You can go somewhere else! / Liyansa: Yes, you cannot join our game. / Nethuli: Why are you treating me like this?...”",
      tip: "Express genuine emotion in character."
    },
    17: {
      title: "Part 1: The Playground – Stepping In",
      speaker: "Osheera, Sehansa, Nethuli",
      item: 3,
      line: "“Osheera: Look at Nethuli... She is really hurt... / Sehansa: Someone needs to help her. Let's stop watching and do something. Nethuli is our friend too. Come and play with us, Nethuli! / Nethuli: Thank you, my dear...”",
      tip: "Sehansa steps forward with decisive friendship."
    },
    18: {
      title: "Part 1: The Playground – Reconciliation",
      speaker: "Liyansa, Liyara, Nethuli",
      item: 3,
      line: "“Liyansa: Liyara, what we did wasn't right. We shouldn't treat anyone like that. / Liyara & Liyansa (Together): We are sorry for treating you that way. / Nethuli: It's okay, dear. I just wanted to be your friend.”",
      tip: "Genuine apology and warm forgiveness."
    },
    19: {
      title: "Part 1: The Playground – Upstander Lessons",
      speaker: "Gevin, Lisari",
      item: 3,
      line: "“Gevin: Our words can hurt others. Staying silent can hurt them too. So, speak up when something is wrong... / Lisari: We should never make someone feel unwanted. If we see bullying, we should help safely and tell a teacher when necessary.”",
      tip: "Authoritative upstander reflections."
    },
    20: {
      title: "Part 2: Speaking for the Voiceless – Captivity",
      speaker: "Dehami, Shaini",
      item: 3,
      line: "“Dehami: Dear friends, just like Nethuli felt excluded, have you ever thought about the pain animals go through because of humans?... / Shaini: Some are killed for their beautiful skins and tusks. Don't they deserve to live, just like us?”",
      tip: "Thoughtful and caring presentation on animal welfare."
    },
    21: {
      title: "Part 2: Speaking for the Voiceless – Habitat Loss",
      speaker: "Nethuki, Yeshitha",
      item: 3,
      line: "“Nethuki: People cut down forests and destroy their homes. Where will these innocent animals go?... / Yeshitha: They cannot tell us, ‘Please don't hurt us!...’ But their silence does not mean they feel no pain.”",
      tip: "Speak with emotional impact and conviction."
    },
    22: {
      title: "Part 2: Speaking for the Voiceless – Protection",
      speaker: "Minindee, Sinadhi",
      item: 3,
      line: "“Minindee: We have voices, but they don't. So, shouldn't we use our voices to protect them?... / Sinadhi: They too deserve to live under the same sky, breathe the same air, and enjoy the freedom of this beautiful world...”",
      tip: "Minindee and Sinadhi champion animal rights with dignity."
    },
    23: {
      title: "Role Play Ending Chorus: All Together",
      speaker: "All Together",
      item: 3,
      line: "“All (Together): • Choose kindness! • Speak up! • Stand for what is right! • Be gentle with animals! • Never stay silent when someone needs help! • Justice starts with us!”",
      tip: "Chant the 6 proclamations rhythmically together."
    },
    24: {
      title: "Justice Detectives: Cover",
      speaker: "Item 04",
      item: 4,
      line: "“JUSTICE DETECTIVES • Grade 4 Assembly Case Studies”",
      tip: "Display the official title slide from Page 1 of the PDF."
    },
    25: {
      title: "Case 1: Blamed Without Proof",
      speaker: "Item 04",
      item: 4,
      line: "“BLAMED WITHOUT PROOF”",
      tip: "Present the situation from Page 2 of the PDF."
    },
    26: {
      title: "Case 2: Rules Are for Everyone",
      speaker: "Item 04",
      item: 4,
      line: "“RULES ARE FOR EVERYONE”",
      tip: "Present the situation from Page 3 of the PDF."
    },
    27: {
      title: "Case 3: Left Out of the Game",
      speaker: "Item 04",
      item: 4,
      line: "“LEFT OUT OF THE GAME”",
      tip: "Present the situation from Page 4 of the PDF."
    },
    28: {
      title: "Case 4: Taking Without Asking",
      speaker: "Item 04",
      item: 4,
      line: "“TAKING WITHOUT ASKING”",
      tip: "Present the situation from Page 5 of the PDF."
    },
    29: {
      title: "Case 5: Unfair Sharing",
      speaker: "Item 04",
      item: 4,
      line: "“UNFAIR SHARING”",
      tip: "Present the situation from Page 6 of the PDF."
    },
    30: {
      title: "Case 6: Cutting in Line",
      speaker: "Item 04",
      item: 4,
      line: "“CUTTING IN LINE”",
      tip: "Present the situation from Page 7 of the PDF."
    },
    31: {
      title: "Case 7: Making a Mess",
      speaker: "Item 04",
      item: 4,
      line: "“MAKING A MESS”",
      tip: "Present the situation from Page 8 of the PDF."
    },
    32: {
      title: "Case 8: Whispering Rumors",
      speaker: "Item 04",
      item: 4,
      line: "“WHISPERING RUMORS”",
      tip: "Present the situation from Page 9 of the PDF."
    },
    33: {
      title: "Case 9: Picking Sides",
      speaker: "Item 04",
      item: 4,
      line: "“PICKING SIDES”",
      tip: "Present the situation from Page 10 of the PDF."
    },
    34: {
      title: "Case 10: Judging by Looks",
      speaker: "Item 04",
      item: 4,
      line: "“JUDGING BY LOOKS”",
      tip: "Present the situation from Page 11 of the PDF."
    },
    35: {
      title: "Video Presentation",
      speaker: "Item 05",
      item: 5,
      line: "“Teacher Video Presentation • https://youtu.be/NIsGkTuO1vk”",
      tip: "Ensure sound is enabled on the auditorium speakers before playing."
    },
    36: {
      title: "Our Kindness & Justice Pledge: Intro",
      speaker: "Item 06",
      item: 6,
      line: "“OUR KINDNESS & JUSTICE PLEDGE • All Grade 4 students raise right hands.”",
      tip: "Prepare the whole class to raise hands in unison."
    },
    37: {
      title: "The Pledge: Promises 1 to 5",
      speaker: "Full Grade 4 Assembly",
      item: 6,
      line: "“1. I promise to be kind to everyone. / 2. I will speak the truth and treat others fairly. / 3. I will respect my friends and help those in need. / 4. I will never bully, hurt, or make fun of others. / 5. I will be kind and gentle to animals.”",
      tip: "Recite clearly and solemnly with right hands raised."
    },
    38: {
      title: "The Pledge: Finale & Final Message",
      speaker: "Full Grade 4 Assembly",
      item: 6,
      line: "“6. I will protect nature and respect all living things. / 7. I will speak up when I see someone being treated unfairly. / 8. I will use my words and actions to spread love, kindness, and peace. / 9. I understand that even a small act of kindness can make a big difference. • ‘I will choose kindness. I will stand for justice. I will make a difference!’ • KINDNESS IS CONTAGIOUS, AND JUSTICE STARTS WITH US!”",
      tip: "Grand celebratory climax with applause and confetti!"
    }
  };

  // DOM Cache
  let dom = {};

  // Initialize
  function init() {
    cacheElements();
    setupViewportScaling();
    setupOverviewGrid();
    setupKeyboardShortcuts();
    setupAmbientParticles();
    initAudio();
    initConfetti();
    goToSlide(1, false);

    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
  }

  function cacheElements() {
    dom = {
      viewport: document.getElementById('presentation-viewport'),
      canvas: document.getElementById('presentation-canvas'),
      slides: document.querySelectorAll('.slide-item'),
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
      itemNavBtns: document.querySelectorAll('.item-nav-btn'),
    };
  }

  // 16:9 Aspect Ratio Engine
  function setupViewportScaling() {
    handleResize();
  }

  function handleResize() {
    if (!dom.canvas) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const targetWidth = 1920;
    const targetHeight = 1080;

    const scaleX = (windowWidth - 20) / targetWidth;
    const scaleY = (windowHeight - 20) / targetHeight;
    const scale = Math.min(scaleX, scaleY, 1);

    dom.canvas.style.transform = `scale(${scale})`;
  }

  function handleFullscreenChange() {
    if (!document.fullscreenElement) {
      if (dom.btnFullscreen) dom.btnFullscreen.classList.remove('active-btn');
    } else {
      if (dom.btnFullscreen) dom.btnFullscreen.classList.add('active-btn');
    }
    handleResize();
  }

  // Overview Grid Generator
  function setupOverviewGrid() {
    if (!dom.overviewGrid) return;
    dom.overviewGrid.innerHTML = '';

    for (let i = 1; i <= state.totalSlides; i++) {
      const cue = slideCues[i];
      const card = document.createElement('div');
      card.className = `overview-card ${i === 1 ? 'active-card' : ''}`;
      card.innerHTML = `
        <span class="card-num-badge">SLIDE ${String(i).padStart(2, '0')}</span>
        <h4 class="card-label">${cue ? cue.title : 'Slide ' + i}</h4>
        <span class="card-subtext">${cue ? cue.speaker : ''}</span>
      `;
      card.addEventListener('click', () => {
        goToSlide(i);
        toggleOverview(false);
      });
      dom.overviewGrid.appendChild(card);
    }
  }

  // Keyboard Shortcuts
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
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
        case '1':
          e.preventDefault();
          goToItem(1);
          break;
        case '2':
          e.preventDefault();
          goToItem(2);
          break;
        case '3':
          e.preventDefault();
          goToItem(3);
          break;
        case '4':
          e.preventDefault();
          goToItem(4);
          break;
        case '5':
          e.preventDefault();
          goToItem(5);
          break;
        case '6':
          e.preventDefault();
          goToItem(6);
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

    if (dom.progressTrack) {
      dom.progressTrack.addEventListener('click', (e) => {
        const rect = dom.progressTrack.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        const target = Math.min(state.totalSlides, Math.max(1, Math.ceil(ratio * state.totalSlides)));
        goToSlide(target);
      });
    }

    if (dom.btnFullscreen) dom.btnFullscreen.addEventListener('click', toggleFullscreen);
    if (dom.btnOverview) dom.btnOverview.addEventListener('click', () => toggleOverview());
    if (dom.btnNotes) dom.btnNotes.addEventListener('click', () => toggleNotes());
    if (dom.btnSound) dom.btnSound.addEventListener('click', toggleSound);
  }

  // Ambient Particles
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

  // Web Audio Chimes
  function initAudio() {
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

  function playTone(freq, type = 'sine', startTime = 0, duration = 0.4, gainValue = 0.12) {
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

  function playSlideSound() {
    if (!state.soundEnabled) return;
    playTone(523.25, 'triangle', 0.0, 0.3, 0.1);
    playTone(659.25, 'sine', 0.06, 0.3, 0.08);
    playTone(783.99, 'sine', 0.12, 0.38, 0.09);
  }

  function playSuccessSound() {
    if (!state.soundEnabled) return;
    playTone(523.25, 'triangle', 0.0, 0.4, 0.14);
    playTone(659.25, 'triangle', 0.08, 0.4, 0.12);
    playTone(783.99, 'sine', 0.16, 0.45, 0.14);
    playTone(1046.50, 'sine', 0.24, 0.65, 0.16);
  }

  // Slide Navigation
  function goToSlide(targetIndex, playAudio = true) {
    if (targetIndex < 1 || targetIndex > state.totalSlides) return;
    state.currentSlide = targetIndex;

    dom.slides.forEach((slide) => {
      const slideNum = parseInt(slide.dataset.slide, 10);
      if (slideNum === state.currentSlide) {
        slide.classList.add('active');
        triggerEntranceAnimation(slide);
      } else {
        slide.classList.remove('active');
      }
    });

    if (dom.currentNum) dom.currentNum.textContent = String(state.currentSlide).padStart(2, '0');
    if (dom.totalNum) dom.totalNum.textContent = String(state.totalSlides).padStart(2, '0');

    const progressPercent = ((state.currentSlide - 1) / (state.totalSlides - 1)) * 100;
    if (dom.progressFill) dom.progressFill.style.width = `${Math.max(2.6, progressPercent)}%`;

    const cue = slideCues[state.currentSlide];
    if (dom.slideLabel && cue) {
      dom.slideLabel.textContent = `${cue.title}`;
    }

    // Update Item Quick-Jump Bar Active state
    const currentItem = cue ? cue.item : 1;
    if (dom.itemNavBtns) {
      dom.itemNavBtns.forEach((btn) => {
        const itemNum = parseInt(btn.dataset.item, 10);
        if (itemNum === currentItem) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // Update Overview Grid Active State
    const cards = dom.overviewGrid ? dom.overviewGrid.querySelectorAll('.overview-card') : [];
    cards.forEach((card, idx) => {
      if (idx + 1 === state.currentSlide) {
        card.classList.add('active-card');
      } else {
        card.classList.remove('active-card');
      }
    });

    updateSpeakerNotes(cue);

    if (dom.btnPrev) dom.btnPrev.disabled = state.currentSlide === 1;
    if (dom.btnNext) {
      if (state.currentSlide === state.totalSlides) {
        dom.btnNext.innerHTML = `<span class="btn-text">Celebrate</span>`;
      } else {
        dom.btnNext.innerHTML = `
          <span class="btn-text">Next</span>
          <svg class="dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
      }
    }

    if (playAudio) {
      if (state.currentSlide === state.totalSlides) {
        playSuccessSound();
        launchCelebration();
      } else {
        playSlideSound();
      }
    }

    if (state.isAutoplay) {
      resetAutoplayTimer();
    }
  }

  function goToItem(itemNumber) {
    const target = itemMap[itemNumber];
    if (target) {
      goToSlide(target);
    }
  }

  function nextSlide() {
    if (state.currentSlide < state.totalSlides) {
      goToSlide(state.currentSlide + 1);
    } else {
      launchCelebration();
    }
  }

  function prevSlide() {
    if (state.currentSlide > 1) {
      goToSlide(state.currentSlide - 1);
    }
  }

  function triggerEntranceAnimation(slideEl) {
    if (window.gsap) {
      const cards = slideEl.querySelectorAll('.speech-card-main, .poem-card, .dialogue-card, .detective-photo-frame, .video-player-container, .pledge-items-list, .official-callout-box');
      if (cards.length > 0) {
        gsap.fromTo(cards, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
        );
      }
    }
  }

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

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    if (state.soundEnabled) {
      dom.btnSound.classList.remove('active-btn');
      playTone(659.25, 'sine', 0, 0.2, 0.1);
    } else {
      dom.btnSound.classList.add('active-btn');
    }
  }

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

  // =========================================================================
  // EDITABLE POWERPOINT (.PPTX) EXPORT (PptxGenJS)
  // Generates true Microsoft PowerPoint native text boxes, shapes, and images
  // =========================================================================
  function exportPPTX() {
    if (typeof PptxGenJS === 'undefined') {
      alert('PowerPoint generator library is loading. Please try again in a moment.');
      return;
    }

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9'; // 1920x1080 proportional
    pptx.author = 'Sussex College Grade 4';
    pptx.title = 'SIX VOICES, ONE MESSAGE - Sussex College Assembly';

    // Loop through all 38 slides
    for (let i = 1; i <= state.totalSlides; i++) {
      const cue = slideCues[i];
      const slide = pptx.addSlide();

      // Background Gradient Shape
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: '100%', h: '100%',
        fill: { color: 'F0FDF4' },
        line: { color: 'E2E8F0', width: 0 }
      });

      // Top Header Bar
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0.5, y: 0.3, w: 12.3, h: 0.8,
        fill: { color: 'FFFFFF' },
        line: { color: 'CBD5E1', width: 1 }
      });

      // School & Title Text Box (Editable)
      slide.addText([
        { text: 'SUSSEX COLLEGE  •  GRADE 4 ASSEMBLY  •  ', options: { bold: true, color: '0D2C54', fontSize: 13 } },
        { text: 'Class Teacher: Darshani Gunathilaka', options: { bold: true, color: 'B45309', fontSize: 13 } }
      ], { x: 0.7, y: 0.35, w: 8.5, h: 0.7 });

      // Slide Topic / Speaker Badge
      slide.addText(cue ? cue.title : 'Slide ' + i, {
        x: 0.7, y: 1.4, w: 12.0, h: 0.8,
        fontSize: 26, bold: true, color: '0D2C54'
      });

      // Main Content Box (Editable Native Text)
      if (i >= 24 && i <= 34) {
        // Detective Slides: Photo + Heading
        const photoNum = String(i - 23).padStart(2, '0');
        slide.addImage({
          path: `detective_${photoNum}.jpg`,
          x: 2.5, y: 2.2, w: 8.3, h: 4.6
        });
      } else {
        // Text Card Shape
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.7, y: 2.2, w: 12.0, h: 4.5,
          fill: { color: 'FFFFFF' },
          line: { color: 'E2E8F0', width: 2 }
        });

        // Verbatim Speech / Dialogue / Poem text
        slide.addText(cue ? cue.line.replace(/[“”]/g, '') : '', {
          x: 1.1, y: 2.5, w: 11.2, h: 3.9,
          fontSize: 20, color: '1E293B', lineSpacing: 30
        });
      }

      // Slide Footer
      slide.addText(`Slide ${i} of ${state.totalSlides}  |  Sussex College Grade 4 Assembly`, {
        x: 0.7, y: 7.0, w: 12.0, h: 0.4,
        fontSize: 11, color: '94A3B8'
      });
    }

    // Save File
    pptx.writeFile({ fileName: 'Sussex_College_Grade_4_Assembly.pptx' })
      .then(() => {
        playTone(783.99, 'triangle', 0, 0.4, 0.15);
      })
      .catch((err) => {
        console.error('PPTX export error:', err);
      });
  }

  // =========================================================================
  // PDF EXPORT (High-Quality Vector Print via Window.print)
  // =========================================================================
  function exportPDF() {
    window.print();
  }

  // =========================================================================
  // CONFETTI CELEBRATION ENGINE
  // =========================================================================
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
    if (!dom.confettiCanvas || !dom.canvas) return;
    dom.confettiCanvas.width = dom.canvas.clientWidth;
    dom.confettiCanvas.height = dom.canvas.clientHeight;
  }

  function launchCelebration() {
    resizeConfettiCanvas();
    confettiParticles = [];
    const colors = ['#f43f5e', '#3b82f6', '#facc15', '#10b981', '#a855f7', '#fb923c', '#ffffff'];

    for (let i = 0; i < 200; i++) {
      confettiParticles.push({
        x: dom.confettiCanvas.width * (0.2 + Math.random() * 0.6),
        y: dom.confettiCanvas.height * 0.85,
        vx: (Math.random() - 0.5) * 20,
        vy: -Math.random() * 18 - 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 11 + 6,
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
    goToItem,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    toggleNotes,
    toggleOverview,
    toggleAutoplay,
    toggleSound,
    exportPPTX,
    exportPDF,
    launchCelebration,
  };
})();

// Auto Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Presentation.init());
} else {
  Presentation.init();
}
