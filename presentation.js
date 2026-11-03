/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly Presentation
 * Master Presentation Engine & Editable PPTX Export
 * 20 Master Slides Following the Exact Assembly Order
 */

const Presentation = (() => {
  // State
  const state = {
    currentSlide: 1,
    totalSlides: 20,
    isAutoplay: false,
    autoplayTimer: null,
    autoplayDuration: 9000,
    soundEnabled: true,
    isOverviewOpen: false,
    isNotesOpen: false,
    audioCtx: null,
  };

  // Item starting slide indices
  const itemMap = {
    1: 2,   // Item 01 starts at slide 2
    2: 9,   // Item 02 starts at slide 9
    3: 13,  // Item 03 starts at slide 13
    4: 16,  // Item 04 starts at slide 16
    5: 18,  // Item 05 starts at slide 18
    6: 19,  // Item 06 starts at slide 19
  };

  // 20 Master Slide Cues & Full Verbatim Live Scripts
  const slideCues = {
    1: {
      title: "Assembly Welcome & Opening",
      speaker: "Assembly Welcome",
      item: 1,
      line: "“Good morning respected Principal Sir, Vice Principal Madam, teachers, students, and guests. Welcome to the Grade 4 Assembly: Six Voices, One Message!”",
      tip: "Stand tall, smile warmly at the audience, and speak clearly into the microphone."
    },
    2: {
      title: "Abhippra: Introduction & Kindness Makes a Difference",
      speaker: "Abhippra",
      item: 1,
      line: "“Good morning, respected Principal Sir, Vice Principal Madam, teachers, and my dear friends.\n\nWith your kind permission, we, the students of Grade 4, would like to present six short speeches on the theme ‘Kindness Is Contagious, Justice Starts with Us.’\n\nLet me begin with my speech on ‘Kindness Makes a Difference.’\n\nKindness means being helpful, caring, and friendly to others. A simple smile, a kind word, or a helping hand can make someone happy. We should never laugh at others or hurt their feelings. Even a small act of kindness can make a big difference.\n\nRemember, kindness is contagious! When we are kind to others, they may be kind to others too.\n\nThank you!”",
      tip: "Deliver the opening greeting with poise and warmth. Pause slightly before the final 'Thank you!'."
    },
    3: {
      title: "Peshala: Fairness for Everyone",
      speaker: "Peshala",
      item: 1,
      line: "“Fairness means treating everyone equally and giving everyone a fair chance. We should not leave anyone out of a game or treat someone badly because they are different from us. Every child deserves respect, friendship, and love.\n\nLet us share, take turns, and include everyone. Remember, justice begins when we treat others fairly.\n\nThank you!”",
      tip: "Speak with sportsmanlike enthusiasm and an open, welcoming hand gesture."
    },
    4: {
      title: "Thiseni: Honesty Is the Best Policy",
      speaker: "Thiseni",
      item: 1,
      line: "“Honesty means telling the truth and doing the right thing, even when nobody is watching. Sometimes, telling the truth may be difficult, but it helps others trust us. If we make a mistake, we should admit it and try to correct it.\n\nLet us always be truthful in our words and actions because honesty makes us better people.\n\nThank you!”",
      tip: "Calm, gentle tone. Eye contact with the principal and teachers."
    },
    5: {
      title: "Bhanuja: Respect Makes Us Better",
      speaker: "Bhanuja",
      item: 1,
      line: "“Respect means treating others with kindness and care. We should respect our parents, teachers, friends, and everyone around us. We must listen when others speak, use polite words, and accept that people may have different ideas. We should also respect animals and never hurt them.\n\nWhen we show respect, we help make our school and our world a happier place.\n\nThank you!”",
      tip: "Thoughtful and steady voice. Project clearly to the back of the hall."
    },
    6: {
      title: "Yenuth: Be Kind to Animals",
      speaker: "Yenuth",
      item: 1,
      line: "“Animals are living beings, and they need our love and care. They cannot always tell us when they are hungry, hurt, or frightened. So, we must be gentle with them and never tease, hit, or hurt them.\n\nWe can help animals by giving them food and water when appropriate and by asking an adult to help an animal in danger. Remember, animals deserve kindness too!\n\nThank you!”",
      tip: "Compassionate, gentle tone. Radiate genuine love for all living creatures."
    },
    7: {
      title: "Dewli: Stand Up for What Is Right",
      speaker: "Dewli",
      item: 1,
      line: "“Sometimes, we may see someone being bullied, left out, or treated unfairly. We should not laugh or simply walk away. We can support that person, speak kindly, and ask a trusted adult for help.\n\nBeing brave does not mean fighting. It means choosing to do the right thing, even when it is difficult. Let us be brave, be fair, and stand up for justice!\n\nThank you!”",
      tip: "Stand tall with quiet moral courage and confidence."
    },
    8: {
      title: "All Six Children: Final Collective Message",
      speaker: "All Six Children Together",
      item: 1,
      line: "“All together, loudly and confidently: ‘Kindness is contagious, and justice starts with us!’ Thank you!”",
      tip: "Deliver the united motto in perfect unison with bright smiles!"
    },
    9: {
      title: "Poem: Stanza 1 – A Little Smile & Care",
      speaker: "Sanuthi, Dihas, Nethan, Omin",
      item: 2,
      line: "“1. Sanuthi: A little smile, a little care, Can bring such joy for all to share.\n2. Dihas: A helping hand, a word that's kind, Leaves sorrow and sadness far behind.\n3. Nethan: Be fair to all, both big and small, And answer when a friend does call.\n4. Omin: Tell the truth and do what's right, Let honesty be your shining light.”",
      tip: "Recite with poetic rhythm and clear pronunciation."
    },
    10: {
      title: "Poem: Stanza 2 – Respect & Animals",
      speaker: "Inuli, Shenuki, Jeson, Praneeth",
      item: 2,
      line: "“5. Inuli: Respect your friends in all you do, In words and actions, honest and true.\n6. Shenuki: If someone is sad or left alone, Make them feel this world's their own.\n7. Jeson: Don't laugh at others or cause them pain, Be gentle as the morning rain.\n8. Praneeth: Be gentle to animals everywhere, They need our love and thoughtful care.”",
      tip: "Step forward slightly as each pair speaks."
    },
    11: {
      title: "Poem: Stanza 3 – Courage, Justice & Forests",
      speaker: "Dasindu, Noveena, Kenula, Sara",
      item: 2,
      line: "“9. Dasindu: They have feelings, they feel pain, Protect them in the sun and rain.\n10. Noveena: Their homes are forests, their skies are wide, With care and love, walk by their side.\n11. Kenula: Stand up for justice, be brave and true, Stand for what is right in all you do.\n12. Sara: Together we can make kindness grow, Like gentle seeds we proudly sow.”",
      tip: "Strong, confident projection across the auditorium."
    },
    12: {
      title: "Poem: Finale – Minugi Solo & Full 13-Child Chorus",
      speaker: "Lead: Minugi & All 13 Children",
      item: 2,
      line: "“13. Minugi: A little kindness can light the way, Let's spread love and justice every day!\n\nALL 13 CHILDREN TOGETHER:\nA little kindness goes a long way!\nLet love and justice lead the way!\nBe kind to people, protect animals too,\nThe world will be better because of what we do! ❤️”",
      tip: "Minugi opens solo at center; full chorus joins on the united refrain with open arms!"
    },
    13: {
      title: "Role Play: Part 1 – The Playground",
      speaker: "The Playground Cast",
      item: 3,
      line: "“Evodi (Narrator): One morning during the school interval, a group of children were playing together. Their classmate, Nethuli, wanted to join them. But the others refused to let her play.\nNethuli: Can I play with you?\nLiyansa: No, our team is already full.\nLiyara: Yes, go find someone else to play with.\nOsheera: Why are you being so mean?\nSehansa: Yes, why can't she play?\nGevin: Because we made the rules, and we say she can't!\nLisari: But that’s not fair! Everyone deserves a chance to play!\nEvodi: That day, no one stood up for Nethuli. If only someone had spoken, things might have been different.”",
      tip: "Expressive acting: show the hurt of exclusion, then the bravery of speaking up."
    },
    14: {
      title: "Role Play: Part 2 – Speaking for the Voiceless",
      speaker: "Nature Cast (Minindee)",
      item: 3,
      line: "“Dehami: Look at that bird on the branch. It sings so sweetly, yet so many people ignore it.\nShaini: And the stray dog by the gate—it looked hungry and scared.\nNethuki: People often forget that animals have feelings too.\nYeshitha: They feel hunger, pain, and fear, just like us.\nMinindee: We have voices, but they don't. So, shouldn't we use our voices to protect them?\nSinadhi: Yes! They too deserve to live under the same sky, breathe the same air, and enjoy the freedom of this beautiful world.\nEvodi: Justice is not just for humans. It belongs to all living creatures.”",
      tip: "Minindee speaks with heartfelt moral conviction for animals and nature."
    },
    15: {
      title: "Role Play: Part 3 – The Train of Justice Chorus",
      speaker: "Role Play Company",
      item: 3,
      line: "“All: Choo, choo, chugga, chugga, whoosh! All aboard the train of justice!\nAll (Together):\n• Choose kindness!\n• Speak up!\n• Stand for what is right!\n• Be gentle with animals!\n• Never stay silent when someone needs help!\n• Justice starts with us!”",
      tip: "Dynamic rhythmic train chant. Energy and enthusiasm!"
    },
    16: {
      title: "Justice Detectives: Case Studies (Cases 1–5)",
      speaker: "Justice Detectives",
      item: 4,
      line: "“JUSTICE DETECTIVES CASE STUDIES (Part 1):\nCase 01: Blamed Without Proof\nCase 02: Rules Are for Everyone\nCase 03: Left Out of the Game\nCase 04: Taking Without Asking\nCase 05: Unfair Sharing”",
      tip: "Present each case clearly, inviting students to reflect on fairness."
    },
    17: {
      title: "Justice Detectives: Case Studies (Cases 6–10)",
      speaker: "Justice Detectives",
      item: 4,
      line: "“JUSTICE DETECTIVES CASE STUDIES (Part 2):\nCase 06: Cutting in Line\nCase 07: Making a Mess\nCase 08: Whispering Rumors\nCase 09: Picking Sides\nCase 10: Damaging Belongings”",
      tip: "Highlight responsibility, truth, and honesty in everyday school life."
    },
    18: {
      title: "Video Presentation: Kindness & Justice in Action",
      speaker: "Video Feature",
      item: 5,
      line: "“Grade 4 Assembly Video Feature: Inspiring real-world examples of kindness, empathy, animal rescue, and standing up for justice.”",
      tip: "Ensure auditorium projector audio is unmuted and clear."
    },
    19: {
      title: "Our Kindness & Justice Pledge: Nine Sacred Promises",
      speaker: "All Students Hand on Heart",
      item: 6,
      line: "“OUR KINDNESS AND JUSTICE PLEDGE:\n1. I promise to be kind to everyone, every day.\n2. I promise to share and take turns fairly.\n3. I promise to tell the truth and be honest.\n4. I promise to respect my teachers, elders, and friends.\n5. I promise to listen when others speak.\n6. I promise to treat animals with love and care.\n7. I promise to stand up for those who are treated unfairly.\n8. I promise to keep my classroom and school clean.\n9. I promise to make my school a happier, fairer, and kinder place.”",
      tip: "Hand on heart. Solemn, clear, dignified recital by all Grade 4 students."
    },
    20: {
      title: "Grand Assembly Finale: Collective Climax",
      speaker: "All Students Together",
      item: 6,
      line: "“Official Callout:\n‘I will choose kindness. I will stand for justice. I will make a difference!’\n\nGrand Final Assembly Message:\n‘KINDNESS IS CONTAGIOUS, AND JUSTICE STARTS WITH US!’”",
      tip: "Triumphant climax! Loud, joyful unison with joined hands!"
    }
  };

  const slideMottos = {
    1: "Kindness Is Contagious, Justice Starts with Us.",
    2: "Kindness is contagious!",
    3: "Justice begins when we treat others fairly.",
    4: "Always do the right thing.",
    5: "Respect makes us better.",
    6: "Animals deserve kindness too.",
    7: "Stand up for justice!",
    8: "Kindness is contagious, and justice starts with us!",
    9: "A gentle smile, a helping hand.",
    10: "Speak with care, protect animals.",
    11: "Stand for justice, brave and true.",
    12: "A little kindness goes a long way!",
    13: "If only someone had spoken.",
    14: "Guardians of nature and animals.",
    15: "Choo Choo! Stand up for justice!",
    16: "Justice Detectives (Cases 1–5)",
    17: "Justice Detectives (Cases 6–10)",
    18: "Kindness & Justice in Action",
    19: "Six Pillars of Sussex College",
    20: "Kindness is contagious, and justice starts with us!"
  };

  // DOM Elements Cache
  let dom = {};

  function init() {
    cacheDom();
    bindEvents();
    buildOverviewGrid();
    setupAmbientParticles();
    goToSlide(1, false);
    initAudio();
  }

  function cacheDom() {
    dom = {
      viewport: document.getElementById('presentation-viewport'),
      canvas: document.getElementById('presentation-canvas'),
      slides: Array.from(document.querySelectorAll('.slide-item')),
      currentNum: document.getElementById('current-slide-num'),
      totalNum: document.getElementById('total-slide-num'),
      slideLabel: document.getElementById('slide-label-badge'),
      progressFill: document.getElementById('progress-fill'),
      btnPrev: document.getElementById('btn-prev'),
      btnNext: document.getElementById('btn-next'),
      btnAutoplay: document.getElementById('btn-autoplay'),
      autoplayIcon: document.getElementById('autoplay-icon'),
      autoplayText: document.getElementById('autoplay-text'),
      btnSound: document.getElementById('btn-sound'),
      btnNotes: document.getElementById('btn-notes'),
      btnOverview: document.getElementById('btn-overview'),
      btnFullscreen: document.getElementById('btn-fullscreen'),
      speakerDrawer: document.getElementById('speaker-drawer'),
      notesSpeakerName: document.getElementById('notes-speaker-name'),
      notesTipText: document.getElementById('notes-tip-text'),
      notesScriptText: document.getElementById('notes-script-text'),
      overviewModal: document.getElementById('overview-modal'),
      overviewGrid: document.getElementById('overview-grid'),
      itemNavBtns: Array.from(document.querySelectorAll('.item-nav-btn')),
    };
  }

  function bindEvents() {
    if (dom.btnPrev) dom.btnPrev.addEventListener('click', prevSlide);
    if (dom.btnNext) dom.btnNext.addEventListener('click', nextSlide);
    if (dom.btnAutoplay) dom.btnAutoplay.addEventListener('click', toggleAutoplay);
    if (dom.btnSound) dom.btnSound.addEventListener('click', toggleSound);
    if (dom.btnNotes) dom.btnNotes.addEventListener('click', () => toggleNotes());
    if (dom.btnOverview) dom.btnOverview.addEventListener('click', () => toggleOverview());
    if (dom.btnFullscreen) dom.btnFullscreen.addEventListener('click', toggleFullscreen);

    setupKeyboardShortcuts();
    window.addEventListener('resize', handleResize);
    handleResize();
  }

  function handleResize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const targetW = 1920;
    const targetH = 1080;
    const scale = Math.min((vw - 20) / targetW, (vh - 20) / targetH, 1);
    if (dom.canvas) {
      dom.canvas.style.transform = `scale(${scale})`;
    }
  }

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
        case '1': e.preventDefault(); goToItem(1); break;
        case '2': e.preventDefault(); goToItem(2); break;
        case '3': e.preventDefault(); goToItem(3); break;
        case '4': e.preventDefault(); goToItem(4); break;
        case '5': e.preventDefault(); goToItem(5); break;
        case '6': e.preventDefault(); goToItem(6); break;
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
        case 'a':
        case 'A':
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
  }

  function setupAmbientParticles() {
    const container = document.getElementById('ambient-particles');
    if (!container) return;
    for (let i = 0; i < 22; i++) {
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

  function playSlideSound() {
    if (!state.soundEnabled) return;
    playTone(523.25, 'triangle', 0.0, 0.28, 0.1);
    playTone(659.25, 'sine', 0.06, 0.28, 0.08);
    playTone(783.99, 'sine', 0.12, 0.35, 0.09);
  }

  function playSuccessSound() {
    if (!state.soundEnabled) return;
    playTone(523.25, 'triangle', 0.0, 0.4, 0.14);
    playTone(659.25, 'triangle', 0.08, 0.4, 0.12);
    playTone(783.99, 'sine', 0.16, 0.45, 0.14);
    playTone(1046.50, 'sine', 0.24, 0.65, 0.16);
  }

  // Navigation Core
  function goToSlide(targetIndex, playAudio = true) {
    if (targetIndex < 1 || targetIndex > state.totalSlides) return;
    state.currentSlide = targetIndex;

    dom.slides.forEach((slide) => {
      const slideNum = parseInt(slide.dataset.slide, 10);
      if (slideNum === state.currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    if (dom.currentNum) dom.currentNum.textContent = String(state.currentSlide).padStart(2, '0');
    if (dom.totalNum) dom.totalNum.textContent = String(state.totalSlides).padStart(2, '0');

    const progressPercent = ((state.currentSlide - 1) / (state.totalSlides - 1)) * 100;
    if (dom.progressFill) dom.progressFill.style.width = `${Math.max(4, progressPercent)}%`;

    const cue = slideCues[state.currentSlide];
    if (dom.slideLabel && cue) {
      dom.slideLabel.textContent = cue.title;
    }

    // Update Drawer Panel
    if (cue) {
      if (dom.notesSpeakerName) dom.notesSpeakerName.textContent = cue.speaker;
      if (dom.notesTipText) dom.notesTipText.textContent = cue.tip;
      if (dom.notesScriptText) dom.notesScriptText.innerHTML = cue.line.replace(/\n/g, '<br>');
    }

    updateItemNavHighlight(cue ? cue.item : 1);

    if (playAudio) {
      if (state.currentSlide === state.totalSlides) {
        playSuccessSound();
        triggerConfetti();
      } else {
        playSlideSound();
      }
    }

    if (state.isAutoplay) resetAutoplayTimer();
  }

  function nextSlide() {
    if (state.currentSlide < state.totalSlides) {
      goToSlide(state.currentSlide + 1);
    } else if (state.isAutoplay) {
      goToSlide(1);
    }
  }

  function prevSlide() {
    if (state.currentSlide > 1) {
      goToSlide(state.currentSlide - 1);
    }
  }

  function goToItem(itemNum) {
    const target = itemMap[itemNum];
    if (target) goToSlide(target);
  }

  function updateItemNavHighlight(activeItem) {
    dom.itemNavBtns.forEach((btn) => {
      const itemVal = parseInt(btn.dataset.item, 10);
      if (itemVal === activeItem) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function buildOverviewGrid() {
    if (!dom.overviewGrid) return;
    dom.overviewGrid.innerHTML = '';
    for (let i = 1; i <= state.totalSlides; i++) {
      const cue = slideCues[i];
      const tile = document.createElement('div');
      tile.className = `overview-tile ${i === state.currentSlide ? 'active-tile' : ''}`;
      tile.innerHTML = `
        <span class="tile-num">SLIDE ${String(i).padStart(2, '0')}</span>
        <strong class="tile-title">${cue ? cue.title : 'Slide ' + i}</strong>
        <span class="tile-speaker">${cue ? cue.speaker : ''}</span>
      `;
      tile.onclick = () => {
        goToSlide(i);
        toggleOverview(false);
      };
      dom.overviewGrid.appendChild(tile);
    }
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
      buildOverviewGrid();
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
  // Generates 20 visual-first slides with embedded speaker notes
  // =========================================================================
  function exportPPTX() {
    if (typeof PptxGenJS === 'undefined') {
      alert('PowerPoint generator library is loading. Please try again in a moment.');
      return;
    }

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Sussex College Grade 4';
    pptx.title = 'SIX VOICES, ONE MESSAGE - Sussex College Assembly';

    for (let i = 1; i <= state.totalSlides; i++) {
      const cue = slideCues[i];
      const motto = slideMottos[i] || '';
      const slide = pptx.addSlide();

      // Embed full original verbatim script into PowerPoint Speaker Notes
      if (cue && cue.line) {
        slide.addNotes(cue.speaker + ':\n\n' + cue.line.replace(/\n/g, '\n') + (cue.tip ? '\n\nStage Direction / Cue: ' + cue.tip : ''));
      }

      // Background Card
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: '100%', h: '100%',
        fill: { color: i === 20 ? 'FEF3C7' : (i === 16 || i === 17 ? 'F8FAFC' : 'F0FDF4') },
        line: { color: 'E2E8F0', width: 0 }
      });

      // Top Header Bar
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0.6, y: 0.35, w: 12.1, h: 0.7,
        fill: { color: 'FFFFFF' },
        line: { color: 'CBD5E1', width: 1 }
      });

      slide.addText([
        { text: 'SUSSEX COLLEGE  •  GRADE 4 ASSEMBLY  •  ', options: { bold: true, color: '0D2C54', fontSize: 13 } },
        { text: 'Class Teacher: Darshani Gunathilaka', options: { bold: true, color: 'B45309', fontSize: 13 } }
      ], { x: 0.8, y: 0.4, w: 9.0, h: 0.6 });

      if (i === 16) {
        // Detective Cases 1 to 5
        slide.addText('Justice Detectives Case Studies (Cases 1–5)', {
          x: 0.8, y: 1.25, w: 11.5, h: 0.65,
          fontSize: 22, bold: true, color: '0D2C54'
        });
        for (let c = 1; c <= 5; c++) {
          const photoNum = String(c + 1).padStart(2, '0');
          slide.addImage({
            path: `detective_${photoNum}.jpg`,
            x: 0.8 + (c - 1) * 2.35, y: 2.1, w: 2.2, h: 4.2
          });
        }
      } else if (i === 17) {
        // Detective Cases 6 to 10
        slide.addText('Justice Detectives Case Studies (Cases 6–10)', {
          x: 0.8, y: 1.25, w: 11.5, h: 0.65,
          fontSize: 22, bold: true, color: '0D2C54'
        });
        for (let c = 6; c <= 10; c++) {
          const photoNum = String(c + 1).padStart(2, '0');
          slide.addImage({
            path: `detective_${photoNum}.jpg`,
            x: 0.8 + (c - 6) * 2.35, y: 2.1, w: 2.2, h: 4.2
          });
        }
      } else if (i === 19) {
        // Six Pillars of Sussex College
        slide.addText('Our Six Guiding Values', {
          x: 0.8, y: 1.25, w: 11.5, h: 0.65,
          fontSize: 24, bold: true, color: '0D2C54', align: 'center'
        });

        const pillars = [
          { name: 'KINDNESS', sub: 'Care & Friendship', color: '0284C7' },
          { name: 'HONESTY', sub: 'Truth & Integrity', color: '16A34A' },
          { name: 'FAIRNESS', sub: 'Equal for Everyone', color: 'EA580C' },
          { name: 'RESPECT', sub: 'Listening with Care', color: '7C3AED' },
          { name: 'COURAGE', sub: 'Stand Up for Right', color: 'E11D48' },
          { name: 'PROTECT NATURE', sub: 'Love Living Creatures', color: '0D9488' }
        ];

        pillars.forEach((p, idx) => {
          const col = idx % 3;
          const row = Math.floor(idx / 3);
          const xPos = 1.0 + col * 3.8;
          const yPos = 2.2 + row * 2.2;

          slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: xPos, y: yPos, w: 3.5, h: 1.9,
            fill: { color: 'FFFFFF' },
            line: { color: p.color, width: 2 }
          });
          slide.addText(p.name, {
            x: xPos, y: yPos + 0.35, w: 3.5, h: 0.6,
            fontSize: 18, bold: true, color: p.color, align: 'center'
          });
          slide.addText(p.sub, {
            x: xPos, y: yPos + 0.95, w: 3.5, h: 0.5,
            fontSize: 12, color: '64748B', align: 'center'
          });
        });
      } else if (i === 20) {
        // Climax Slide
        slide.addText('SUSSEX COLLEGE • GRADE 4 FINALE', {
          x: 0.8, y: 1.4, w: 11.7, h: 0.5,
          fontSize: 14, bold: true, color: '0D2C54', align: 'center'
        });

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 1.5, y: 2.2, w: 10.3, h: 1.1,
          fill: { color: 'FFFFFF' },
          line: { color: 'F59E0B', width: 2 }
        });

        slide.addText('“I will choose kindness. I will stand for justice. I will make a difference!”', {
          x: 1.7, y: 2.35, w: 9.9, h: 0.8,
          fontSize: 16, bold: true, color: 'B45309', align: 'center'
        });

        slide.addText('KINDNESS IS CONTAGIOUS,\nAND JUSTICE STARTS WITH US!', {
          x: 1.0, y: 3.8, w: 11.3, h: 2.2,
          fontSize: 34, bold: true, color: '0D2C54', align: 'center'
        });
      } else {
        // Visual Presentation Slides
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 1.2, y: 1.4, w: 10.9, h: 5.2,
          fill: { color: 'FFFFFF' },
          line: { color: 'E2E8F0', width: 2 }
        });

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 4.6, y: 1.8, w: 4.1, h: 0.65,
          fill: { color: '0284C7' },
          line: { color: '0284C7', width: 0 }
        });
        slide.addText(cue ? cue.speaker.toUpperCase() : 'GRADE 4', {
          x: 4.6, y: 1.85, w: 4.1, h: 0.55,
          fontSize: 14, bold: true, color: 'FFFFFF', align: 'center'
        });

        slide.addText(cue ? cue.title : 'Scene ' + i, {
          x: 1.5, y: 2.8, w: 10.3, h: 1.1,
          fontSize: 28, bold: true, color: '0D2C54', align: 'center'
        });

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 3.2, y: 4.2, w: 6.9, h: 0.9,
          fill: { color: 'FEF3C7' },
          line: { color: 'F59E0B', width: 2 }
        });
        slide.addText(motto ? `“${motto}”` : '', {
          x: 3.3, y: 4.35, w: 6.7, h: 0.65,
          fontSize: 18, bold: true, color: '92400E', align: 'center'
        });
      }

      slide.addText(`Slide ${i} of ${state.totalSlides}  |  Sussex College Grade 4 Assembly`, {
        x: 0.8, y: 7.05, w: 11.7, h: 0.35,
        fontSize: 11, color: '94A3B8'
      });
    }

    pptx.writeFile({ fileName: 'Sussex_College_Grade_4_Assembly.pptx' })
      .then(() => {
        playTone(783.99, 'triangle', 0, 0.4, 0.15);
      })
      .catch((err) => {
        console.error('PPTX export error:', err);
      });
  }

  function exportPDF() {
    window.print();
  }

  // Interactive Confetti Cannon
  function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '50';
    dom.canvas.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

    const particles = [];
    const colors = ['#f59e0b', '#0284c7', '#10b981', '#ec4899', '#8b5cf6', '#ef4444', '#ffffff'];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * 1920,
        y: Math.random() * -600,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 + 3,
        rotation: Math.random() * 360,
        vRot: Math.random() * 6 - 3,
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, 1920, 1080);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
        ctx.restore();
      });
      frame++;
      if (frame < 220) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(animate);
  }

  return {
    init,
    goToSlide,
    nextSlide,
    prevSlide,
    goToItem,
    toggleNotes,
    toggleOverview,
    toggleFullscreen,
    toggleSound,
    toggleAutoplay,
    exportPPTX,
    exportPDF
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Presentation.init());
} else {
  Presentation.init();
}
