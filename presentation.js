/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly Presentation
 * Master Presentation Engine & Editable PPTX Export
 * 20 Master Slides Following the Exact Assembly Order
 * Class Teacher: Mrs. Darshani Gunathilaka
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
      line: "“1. Sanuthi:\nA little smile, a little care,\nCan show someone that we are there.\n\n2. Dihas:\nA helping hand, a word that's kind,\nCan bring some sunshine to someone's mind.\n\n3. Nethan:\nBe fair to all, both big and small,\nGive everyone a chance to stand tall.\n\n4. Omin:\nTell the truth and do what's right,\nLet honesty be your guiding light.”",
      tip: "Recite with poetic rhythm and clear pronunciation."
    },
    10: {
      title: "Poem: Stanza 2 – Respect & Animals",
      speaker: "Inuli, Shenuki, Jeson, Praneeth",
      item: 2,
      line: "“5. Inuli:\nRespect your friends in all you do,\nLet love and kindness shine through.\n\n6. Shenuki:\nIf someone is sad or left alone,\nBe a kind friend; help them feel known.\n\n7. Jeson:\nDon't laugh at others or cause them pain,\nKind words bring sunshine after the rain.\n\n8. Praneeth:\nBe gentle to animals everywhere,\nShow them kindness and loving care.”",
      tip: "Step forward slightly as each pair speaks."
    },
    11: {
      title: "Poem: Stanza 3 – Courage, Justice & Forests",
      speaker: "Dasindu, Noveena, Kenula, Sara",
      item: 2,
      line: "“9. Dasindu:\nThey have feelings, they feel pain,\nTheir precious lives are not ours to claim.\n\n10. Noveena:\nTheir homes are forests, their skies are wide,\nLet's stand for them and be on their side.\n\n11. Kenula:\nStand up for justice, be brave and true,\nMake the world better in all you do.\n\n12. Sara:\nTogether we can make kindness grow,\nAnd let fairness shine wherever we go!”",
      tip: "Strong, confident projection across the auditorium."
    },
    12: {
      title: "Poem: Finale – Minugi Solo & Full 13-Child Chorus",
      speaker: "Lead: Minugi & All 13 Children",
      item: 2,
      line: "“13. Minugi:\nA little kindness can light the way,\nLet's spread love and justice every day!\n\nALL 13 CHILDREN TOGETHER:\nA little kindness goes a long way!\nLet love and justice lead the way!\nBe kind to people, protect animals too,\nThe world will be better because of what we do! ❤️”",
      tip: "Minugi opens solo at center; full chorus joins on the united refrain with open arms!"
    },
    13: {
      title: "Role Play: Part 1 – The Playground",
      speaker: "The Playground Cast",
      item: 3,
      line: "“Evodi: One morning during the school interval, a group of children were playing together. Their classmate, Nethuli, wanted to join them. But the others refused to let her play.\n\nNethuli: Hi friends. May I join you?\n\nLiyansa: No, no. We don't like to play with you.\n\nLiyara: You can go somewhere else!\n\nLiyansa: Yes, you cannot join our game.\n\nNethuli: Why are you treating me like this? I also want to play with you. I feel very sad.\n\nOsheera: Look at Nethuli... She is really hurt. If everyone treated us this way, how would we feel? I know this is wrong. But I'm afraid to say anything.\n\nSehansa: Someone needs to help her. Let's stop watching and do something. Nethuli is our friend too. Come and play with us, Nethuli!\n\nNethuli: Thank you, my dear. I thought nobody wanted me.\n\nLiyansa: Liyara, what we did wasn't right. We shouldn't treat anyone like that.\n\nLiyara & Liyansa (Together): We are sorry for treating you that way.\n\nNethuli: It's okay, dear. I just wanted to be your friend.\n\nGevin: Our words can hurt others. Staying silent can hurt them too. So, speak up when something is wrong. And never leave someone feeling alone.\n\nLisari: We should never make someone feel unwanted. If we see bullying, we should help safely and tell a teacher when necessary.”",
      tip: "Expressive acting: show the hurt of exclusion, then the bravery of speaking up."
    },
    14: {
      title: "Role Play: Part 2 – Speaking for the Voiceless",
      speaker: "Dehami, Shaini, Nethuki, Yeshitha, Minindee, Sinadhi",
      item: 3,
      line: "“Dehami: Dear friends, just like Nethuli felt excluded, have you ever thought about the pain animals go through because of humans? Some animals spend their lives behind bars, dreaming of running freely.\n\nShaini: Some are killed for their beautiful skins and tusks. Don't they deserve to live, just like us?\n\nNethuki: People cut down forests and destroy their homes. Where will these innocent animals go? Where will they find food and shelter?\n\nYeshitha: They cannot tell us, 'Please don't hurt us! Please don't destroy our homes! Please don't cage us!' But their silence does not mean they feel no pain.\n\nMinindee: We have voices, but they don't. So, shouldn't we use our voices to protect them? Every animal deserves kindness, safety, and a chance to live. Who gave us the right to take away their precious lives?\n\nSinadhi: They too deserve to live under the same sky, breathe the same air, and enjoy the freedom of this beautiful world. Their lives are not ours to take. Every life is precious, and no innocent creature deserves to die because of human cruelty.”",
      tip: "Minindee and cast speak with heartfelt moral conviction for animals and nature."
    },
    15: {
      title: "Role Play: Ending Chorus – Stand for What Is Right",
      speaker: "All (Together)",
      item: 3,
      line: "“All (Together):\n• Choose kindness!\n• Speak up!\n• Stand for what is right!\n• Be gentle with animals!\n• Never stay silent when someone needs help!\n• Justice starts with us!”",
      tip: "Delivered in powerful unison with confident, welcoming gestures."
    },
    16: {
      title: "Justice Detectives: Case Studies (Cases 01–05)",
      speaker: "Justice Detectives",
      item: 4,
      line: "“JUSTICE DETECTIVES CASE STUDIES (Part 1):\n• Case 01: Blamed Without Proof — Never blame others without the facts.\n• Case 02: Rules Are for Everyone — Follow classroom rules fairly.\n• Case 03: Left Out of the Game — Include every classmate.\n• Case 04: Taking Without Asking — Always ask for permission.\n• Case 05: Unfair Sharing — Share materials and turns equally.”",
      tip: "Present each case clearly, inviting students to reflect on fairness."
    },
    17: {
      title: "Justice Detectives: Case Studies (Cases 06–10)",
      speaker: "Justice Detectives",
      item: 4,
      line: "“JUSTICE DETECTIVES CASE STUDIES (Part 2):\n• Case 06: Cutting in Line — Wait patiently for your turn.\n• Case 07: Making a Mess — Clean up and respect school grounds.\n• Case 08: Whispering Rumors — Speak only what is truthful and kind.\n• Case 09: Picking Sides — Stand for what is right, not just popular.\n• Case 10: Judging by Looks — Respect everyone for who they are, not how they look.”",
      tip: "Highlight responsibility, truth, and honesty in everyday school life."
    },
    18: {
      title: "Video Presentation: Kindness & Justice in Action",
      speaker: "Video Feature",
      item: 5,
      line: "“Grade 4 Assembly Video Feature: Inspiring real-world examples of kindness, empathy, animal rescue, and standing up for justice in our community.”",
      tip: "Ensure auditorium projector audio is unmuted and clear."
    },
    19: {
      title: "Our Kindness & Justice Pledge: Nine Sacred Promises",
      speaker: "All Students Hand on Heart",
      item: 6,
      line: "“OUR KINDNESS & JUSTICE PLEDGE:\n✦ I promise to be kind to everyone.\n✦ I will speak the truth and treat others fairly.\n✦ I will respect my friends and help those in need.\n✦ I will never bully, hurt, or make fun of others.\n✦ I will be kind and gentle to animals.\n✦ I will protect nature and respect all living things.\n✦ I will speak up when I see someone being treated unfairly.\n✦ I will use my words and actions to spread love, kindness, and peace.\n✦ I understand that even a small act of kindness can make a big difference.”",
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
    15: "Justice starts with us!",
    16: "Everyday Fairness (Cases 01–05)",
    17: "Honesty & Equality (Cases 06–10)",
    18: "Kindness & Justice in Action",
    19: "Hand on Heart, Standing for Justice",
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
      btnSound: document.getElementById('btn-sound'),
      btnNotes: document.getElementById('btn-notes'),
      btnOverview: document.getElementById('btn-overview'),
      btnFullscreen: document.getElementById('btn-fullscreen'),
      speakerDrawer: document.getElementById('speaker-notes-drawer'),
      notesSpeakerChip: document.getElementById('notes-speaker-chip'),
      notesSlideTitle: document.getElementById('notes-slide-title'),
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
    if (dom.btnSound) dom.btnSound.addEventListener('click', toggleSound);
    if (dom.btnNotes) dom.btnNotes.addEventListener('click', () => toggleNotes());
    if (dom.btnOverview) dom.btnOverview.addEventListener('click', () => toggleOverview());
    if (dom.btnFullscreen) dom.btnFullscreen.addEventListener('click', toggleFullscreen);

    setupKeyboardShortcuts();
    window.addEventListener('resize', handleResize);
    handleResize();

    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        if (dom.viewport) dom.viewport.classList.add('fullscreen-mode');
      } else {
        if (dom.viewport) dom.viewport.classList.remove('fullscreen-mode');
      }
      handleResize();
    });
  }

  function handleResize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const targetW = 1920;
    const targetH = 1080;
    const scale = Math.min(vw / targetW, vh / targetH, 1);
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

  // Floating ambient dust particles in each slide's particle layer
  function setupAmbientParticles() {
    const layers = document.querySelectorAll('.particle-layer');
    layers.forEach((layer) => {
      layer.innerHTML = '';
      for (let i = 0; i < 18; i++) {
        const dot = document.createElement('div');
        dot.className = 'light-dust';
        const size = Math.random() * 5 + 3;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 85 + 10}%`;
        dot.style.animationDelay = `${Math.random() * 6}s`;
        dot.style.animationDuration = `${Math.random() * 5 + 5}s`;
        layer.appendChild(dot);
      }
    });
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

    if (dom.currentNum) dom.currentNum.textContent = String(state.currentSlide);
    if (dom.totalNum) dom.totalNum.textContent = String(state.totalSlides);

    const progressPercent = ((state.currentSlide - 1) / (state.totalSlides - 1)) * 100;
    if (dom.progressFill) dom.progressFill.style.width = `${Math.max(5, progressPercent)}%`;

    const cue = slideCues[state.currentSlide];
    if (dom.slideLabel && cue) {
      dom.slideLabel.textContent = cue.title;
    }

    // Update Drawer Panel with verbatim teacher scripts
    if (cue) {
      if (dom.notesSpeakerChip) dom.notesSpeakerChip.textContent = cue.speaker;
      if (dom.notesSlideTitle) dom.notesSlideTitle.textContent = cue.title;
      if (dom.notesTipText) dom.notesTipText.textContent = cue.tip;
      if (dom.notesScriptText) dom.notesScriptText.innerHTML = cue.line.replace(/\n/g, '<br>');
    }

    // Update Header Item Nav Highlight
    if (cue) {
      updateItemNavHighlight(cue.item);
    }

    if (playAudio) {
      if (state.currentSlide === 20 || state.currentSlide === 8 || state.currentSlide === 12 || state.currentSlide === 15) {
        playSuccessSound();
      } else {
        playSlideSound();
      }
    }
  }

  function nextSlide() {
    if (state.currentSlide < state.totalSlides) {
      goToSlide(state.currentSlide + 1);
    } else {
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
    if (!dom.itemNavBtns) return;
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
      const card = document.createElement('div');
      card.className = `overview-card ${i === state.currentSlide ? 'active' : ''}`;
      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-slide-num">SLIDE ${String(i).padStart(2, '0')}</span>
          <span class="card-item-tag">ITEM 0${cue ? cue.item : '1'}</span>
        </div>
        <div class="card-title">${cue ? cue.title : 'Slide ' + i}</div>
        <div class="card-speaker">${cue ? cue.speaker : ''}</div>
      `;
      card.onclick = () => {
        goToSlide(i);
        toggleOverview(false);
      };
      dom.overviewGrid.appendChild(card);
    }
  }

  function toggleNotes(forceState) {
    state.isNotesOpen = typeof forceState === 'boolean' ? forceState : !state.isNotesOpen;
    if (dom.speakerDrawer) {
      if (state.isNotesOpen) {
        dom.speakerDrawer.classList.add('open');
        if (dom.btnNotes) dom.btnNotes.classList.add('active');
      } else {
        dom.speakerDrawer.classList.remove('open');
        if (dom.btnNotes) dom.btnNotes.classList.remove('active');
      }
    }
  }

  function toggleOverview(forceState) {
    state.isOverviewOpen = typeof forceState === 'boolean' ? forceState : !state.isOverviewOpen;
    if (dom.overviewModal) {
      if (state.isOverviewOpen) {
        buildOverviewGrid();
        dom.overviewModal.classList.add('open');
        if (dom.btnOverview) dom.btnOverview.classList.add('active');
      } else {
        dom.overviewModal.classList.remove('open');
        if (dom.btnOverview) dom.btnOverview.classList.remove('active');
      }
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
      if (dom.viewport) dom.viewport.classList.add('fullscreen-mode');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      if (dom.viewport) dom.viewport.classList.remove('fullscreen-mode');
    }
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    if (dom.btnSound) {
      if (state.soundEnabled) {
        dom.btnSound.style.opacity = '1';
        playTone(659.25, 'sine', 0, 0.2, 0.1);
      } else {
        dom.btnSound.style.opacity = '0.4';
      }
    }
  }

  // =========================================================================
  // EDITABLE POWERPOINT (.PPTX) EXPORT (PptxGenJS)
  // Generates 20 visual-first slides with embedded verbatim teacher notes
  // =========================================================================
  function exportPPTX() {
    if (typeof PptxGenJS === 'undefined') {
      alert('PowerPoint generator library is loading. Please try again in a moment.');
      return;
    }

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Sussex College Grade 4';
    pptx.title = 'SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly';

    for (let i = 1; i <= state.totalSlides; i++) {
      const cue = slideCues[i];
      const motto = slideMottos[i] || '';
      const slide = pptx.addSlide();

      // Embed full original verbatim script into PowerPoint Speaker Notes
      if (cue && cue.line) {
        slide.addNotes(
          cue.speaker + ':\n\n' +
          cue.line.replace(/\n/g, '\n') +
          (cue.tip ? '\n\nStage Direction / Cue: ' + cue.tip : '') +
          '\n\nClass Teacher: Mrs. Darshani Gunathilaka • Sussex College'
        );
      }

      // Background
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: '100%', h: '100%',
        fill: { color: i === 20 ? 'FEF3C7' : (i === 1 ? 'E0F2FE' : 'F8FAFC') },
        line: { color: 'E2E8F0', width: 0 }
      });

      // Header Bar
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0.6, y: 0.35, w: 12.1, h: 0.7,
        fill: { color: 'FFFFFF' },
        line: { color: 'CBD5E1', width: 1 }
      });

      slide.addText([
        { text: 'SUSSEX COLLEGE  •  GRADE 4 ASSEMBLY  •  ', options: { bold: true, color: '0D2C54', fontSize: 13 } },
        { text: 'Class Teacher: Mrs. Darshani Gunathilaka', options: { bold: true, color: 'B45309', fontSize: 13 } }
      ], { x: 0.8, y: 0.4, w: 9.0, h: 0.6 });

      if (i === 1) {
        // Slide 1 Welcome
        slide.addText('SIX VOICES, ONE MESSAGE', {
          x: 1.0, y: 2.2, w: 11.3, h: 1.2,
          fontSize: 40, bold: true, color: '0D2C54', align: 'center'
        });
        slide.addText('“Kindness Is Contagious, Justice Starts with Us.”', {
          x: 1.0, y: 3.6, w: 11.3, h: 0.8,
          fontSize: 20, bold: true, color: '0284C7', align: 'center'
        });
        slide.addText('Official Grade 4 Assembly Presentation • Sussex College', {
          x: 1.0, y: 4.8, w: 11.3, h: 0.6,
          fontSize: 14, color: '64748B', align: 'center'
        });
      } else if (i === 15) {
        // Ending Chorus Slide
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 1.2, y: 1.4, w: 10.9, h: 5.2,
          fill: { color: 'FFFFFF' },
          line: { color: 'E2E8F0', width: 2 }
        });

        slide.addText('ITEM 03 • ROLE PLAY • ENDING CHORUS', {
          x: 1.5, y: 1.8, w: 10.3, h: 0.5,
          fontSize: 13, bold: true, color: 'EA580C', align: 'center'
        });

        slide.addText('Ending Chorus: Stand for What Is Right', {
          x: 1.5, y: 2.3, w: 10.3, h: 0.8,
          fontSize: 28, bold: true, color: '0D2C54', align: 'center'
        });

        const chorusLines = [
          'Choose kindness!',
          'Speak up!',
          'Stand for what is right!',
          'Be gentle with animals!',
          'Never stay silent when someone needs help!',
          'Justice starts with us!'
        ];

        chorusLines.forEach((line, idx) => {
          const col = idx % 2;
          const row = Math.floor(idx / 2);
          const xPos = 2.0 + col * 4.8;
          const yPos = 3.3 + row * 0.9;

          slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: xPos, y: yPos, w: 4.5, h: 0.7,
            fill: { color: 'FFF7ED' },
            line: { color: 'F97316', width: 1.5 }
          });
          slide.addText(line, {
            x: xPos, y: yPos + 0.1, w: 4.5, h: 0.5,
            fontSize: 14, bold: true, color: '9A3412', align: 'center'
          });
        });
      } else if (i === 16) {
        // Detective Cases 1 to 5
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 1.2, y: 1.4, w: 10.9, h: 5.2,
          fill: { color: 'FFFFFF' },
          line: { color: 'E2E8F0', width: 2 }
        });

        slide.addText('ITEM 04 • JUSTICE DETECTIVES', {
          x: 1.5, y: 1.7, w: 10.3, h: 0.4,
          fontSize: 13, bold: true, color: '4F46E5', align: 'center'
        });
        slide.addText('Everyday Fairness (Cases 01–05)', {
          x: 1.5, y: 2.2, w: 10.3, h: 0.7,
          fontSize: 26, bold: true, color: '0D2C54', align: 'center'
        });

        const cases1 = [
          '01. Blamed Without Proof',
          '02. Rules Are for Everyone',
          '03. Left Out of the Game',
          '04. Taking Without Asking',
          '05. Unfair Sharing'
        ];
        cases1.forEach((c, idx) => {
          slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: 2.5, y: 3.1 + idx * 0.65, w: 8.3, h: 0.52,
            fill: { color: 'EEF2FF' },
            line: { color: '6366F1', width: 1 }
          });
          slide.addText(c, {
            x: 2.7, y: 3.1 + idx * 0.65 + 0.06, w: 7.9, h: 0.4,
            fontSize: 13, bold: true, color: '3730A3', align: 'center'
          });
        });
      } else if (i === 17) {
        // Detective Cases 6 to 10
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 1.2, y: 1.4, w: 10.9, h: 5.2,
          fill: { color: 'FFFFFF' },
          line: { color: 'E2E8F0', width: 2 }
        });

        slide.addText('ITEM 04 • JUSTICE DETECTIVES', {
          x: 1.5, y: 1.7, w: 10.3, h: 0.4,
          fontSize: 13, bold: true, color: '4F46E5', align: 'center'
        });
        slide.addText('Truth, Respect & Equality (Cases 06–10)', {
          x: 1.5, y: 2.2, w: 10.3, h: 0.7,
          fontSize: 26, bold: true, color: '0D2C54', align: 'center'
        });

        const cases2 = [
          '06. Cutting in Line',
          '07. Making a Mess',
          '08. Whispering Rumors',
          '09. Picking Sides',
          '10. Judging by Looks'
        ];
        cases2.forEach((c, idx) => {
          slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: 2.5, y: 3.1 + idx * 0.65, w: 8.3, h: 0.52,
            fill: { color: 'EEF2FF' },
            line: { color: '6366F1', width: 1 }
          });
          slide.addText(c, {
            x: 2.7, y: 3.1 + idx * 0.65 + 0.06, w: 7.9, h: 0.4,
            fontSize: 13, bold: true, color: '3730A3', align: 'center'
          });
        });
      } else if (i === 19) {
        // Nine Sacred Promises
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 1.2, y: 1.3, w: 10.9, h: 5.4,
          fill: { color: 'FFFFFF' },
          line: { color: 'E2E8F0', width: 2 }
        });

        slide.addText('ITEM 06 • OUR KINDNESS & JUSTICE PLEDGE', {
          x: 1.5, y: 1.5, w: 10.3, h: 0.4,
          fontSize: 13, bold: true, color: 'B45309', align: 'center'
        });
        slide.addText('Nine Sacred Promises of Sussex Students', {
          x: 1.5, y: 1.95, w: 10.3, h: 0.6,
          fontSize: 24, bold: true, color: '0D2C54', align: 'center'
        });

        const promises = [
          '1. I promise to be kind to everyone.',
          '2. I will speak the truth and treat others fairly.',
          '3. I will respect my friends and help those in need.',
          '4. I will never bully, hurt, or make fun of others.',
          '5. I will be kind and gentle to animals.',
          '6. I will protect nature and respect all living things.',
          '7. I will speak up when I see someone being treated unfairly.',
          '8. I will use my words and actions to spread love, kindness, and peace.',
          '9. I understand that even a small act of kindness can make a big difference.'
        ];

        promises.forEach((p, idx) => {
          const col = idx % 2;
          const row = Math.floor(idx / 2);
          const xPos = idx === 8 ? 3.5 : (1.6 + col * 5.2);
          const yPos = 2.65 + row * 0.72;
          const wBox = idx === 8 ? 6.2 : 4.9;

          slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: xPos, y: yPos, w: wBox, h: 0.58,
            fill: { color: 'FEF3C7' },
            line: { color: 'F59E0B', width: 1 }
          });
          slide.addText(p, {
            x: xPos + 0.1, y: yPos + 0.05, w: wBox - 0.2, h: 0.48,
            fontSize: 11, bold: true, color: '92400E', align: 'center'
          });
        });
      } else if (i === 20) {
        // Slide 20 Grand Finale
        slide.addText('OUR SACRED ASSEMBLY PROMISE', {
          x: 1.0, y: 1.6, w: 11.3, h: 0.5,
          fontSize: 14, bold: true, color: '0D2C54', align: 'center'
        });
        slide.addText('“I will choose kindness. I will stand for justice. I will make a difference!”', {
          x: 1.0, y: 2.3, w: 11.3, h: 0.8,
          fontSize: 18, bold: true, color: 'B45309', align: 'center'
        });
        slide.addText('KINDNESS IS CONTAGIOUS,\nAND JUSTICE STARTS WITH US!', {
          x: 1.0, y: 3.4, w: 11.3, h: 2.0,
          fontSize: 34, bold: true, color: '0D2C54', align: 'center'
        });
        slide.addText('Guided with Love by Class Teacher: Mrs. Darshani Gunathilaka', {
          x: 1.0, y: 5.8, w: 11.3, h: 0.5,
          fontSize: 13, color: '64748B', align: 'center'
        });
      } else {
        // Standard Content Slide
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 1.2, y: 1.4, w: 10.9, h: 5.2,
          fill: { color: 'FFFFFF' },
          line: { color: 'E2E8F0', width: 2 }
        });

        // Speaker Pill
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 4.6, y: 1.8, w: 4.1, h: 0.65,
          fill: { color: '0284C7' },
          line: { color: '0369A1', width: 0 }
        });

        slide.addText(cue ? cue.speaker.toUpperCase() : '', {
          x: 4.6, y: 1.88, w: 4.1, h: 0.5,
          fontSize: 13, bold: true, color: 'FFFFFF', align: 'center'
        });

        // Title
        slide.addText(cue ? cue.title : '', {
          x: 1.5, y: 2.7, w: 10.3, h: 1.0,
          fontSize: 28, bold: true, color: '0D2C54', align: 'center'
        });

        // Motto Banner
        if (motto) {
          slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: 2.5, y: 4.0, w: 8.3, h: 0.9,
            fill: { color: 'FEF3C7' },
            line: { color: 'F59E0B', width: 1.5 }
          });

          slide.addText(motto, {
            x: 2.6, y: 4.15, w: 8.1, h: 0.6,
            fontSize: 16, bold: true, color: '92400E', align: 'center'
          });
        }

        slide.addText('Audience Display: Visual Cinematic Scene • Verbatim script in Speaker Notes', {
          x: 1.5, y: 5.8, w: 10.3, h: 0.5,
          fontSize: 11, color: '94A3B8', align: 'center'
        });
      }
    }

    pptx.writeFile({ fileName: 'Sussex_College_Grade_4_Assembly_Master.pptx' });
  }

  function exportPDF() {
    window.print();
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
    exportPPTX,
    exportPDF
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Presentation.init());
} else {
  Presentation.init();
}
