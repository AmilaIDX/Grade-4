/**
 * SIX VOICES, ONE MESSAGE - Sussex College Grade 4 Assembly Presentation
 * Master Presentation Engine & Editable PPTX Export
 * 37 Master Slides Following the Exact Assembly Order
 * Class Teacher: Mrs. Darshani Gunathilaka
 */

const Presentation = (() => {
  // State
  const state = {
    currentSlide: 1,
    totalSlides: 37,
    isAutoplay: false,
    autoplayTimer: null,
    autoplayDuration: 9000,
    soundEnabled: false, // Default OFF as requested
    isOverviewOpen: false,
    isNotesOpen: false,
    audioCtx: null,
  };

  // Item starting slide indices
  const itemMap = {
    1: 2,   // Item 01 starts at slide 2
    2: 9,   // Item 02 starts at slide 9
    3: 14,  // Item 03 starts at slide 14
    4: 22,  // Item 04 starts at slide 22
    5: 33,  // Item 05 starts at slide 33
    6: 34,  // Item 06 starts at slide 34
  };

  // 37 Master Slide Cues & Full Verbatim Live Scripts
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
      title: "Poem: Stanza 1 (Sanuthi, Dihas, Nethan, Omin)",
      speaker: "Sanuthi, Dihas, Nethan, Omin",
      item: 2,
      line: "“1. Sanuthi:\nA little smile, a little care,\nCan show someone that we are there.\n\n2. Dihas:\nA helping hand, a word that's kind,\nCan bring some sunshine to someone's mind.\n\n3. Nethan:\nBe fair to all, both big and small,\nGive everyone a chance to stand tall.\n\n4. Omin:\nTell the truth and do what's right,\nLet honesty be your guiding light.”",
      tip: "Recite with poetic rhythm and clear pronunciation."
    },
    10: {
      title: "Poem: Stanza 2 (Inuli, Shenuki, Jeson, Praneeth)",
      speaker: "Inuli, Shenuki, Jeson, Praneeth",
      item: 2,
      line: "“5. Inuli:\nRespect your friends in all you do,\nLet love and kindness shine through.\n\n6. Shenuki:\nIf someone is sad or left alone,\nBe a kind friend; help them feel known.\n\n7. Jeson:\nDon't laugh at others or cause them pain,\nKind words bring sunshine after the rain.\n\n8. Praneeth:\nBe gentle to animals everywhere,\nShow them kindness and loving care.”",
      tip: "Step forward slightly as each pair speaks."
    },
    11: {
      title: "Poem: Stanza 3 (Dasindu, Noveena, Kenula, Sara)",
      speaker: "Dasindu, Noveena, Kenula, Sara",
      item: 2,
      line: "“9. Dasindu:\nThey have feelings, they feel pain,\nTheir precious lives are not ours to claim.\n\n10. Noveena:\nTheir homes are forests, their skies are wide,\nLet's stand for them and be on their side.\n\n11. Kenula:\nStand up for justice, be brave and true,\nMake the world better in all you do.\n\n12. Sara:\nTogether we can make kindness grow,\nAnd let fairness shine wherever we go!”",
      tip: "Strong, confident projection across the auditorium."
    },
    12: {
      title: "Poem: Stanza 4 (Minugi Solo)",
      speaker: "Minugi (Solo)",
      item: 2,
      line: "“13. Minugi:\nA little kindness can light the way,\nLet's spread love and justice every day!”",
      tip: "Minugi steps to center stage with a warm, inspiring solo voice."
    },
    13: {
      title: "Poem: Grand Chorus (All 13 Children Together)",
      speaker: "All 13 Children Together",
      item: 2,
      line: "“ALL 13 CHILDREN TOGETHER:\nA little kindness goes a long way!\nLet love and justice lead the way!\nBe kind to people, protect animals too,\nThe world will be better because of what we do! ❤️”",
      tip: "Full 13-voice unison chorus reciting with open arms and joy!"
    },
    14: {
      title: "Role Play: Title & Scene Introduction",
      speaker: "Evodi (Narrator)",
      item: 3,
      line: "“Evodi: One morning during the school interval, a group of children were playing together. Their classmate, Nethuli, wanted to join them. But the others refused to let her play.”",
      tip: "Set the scene clearly, inviting the audience into the playground story."
    },
    15: {
      title: "Part 1: The Playground – The Exclusion",
      speaker: "Nethuli, Liyansa, Liyara",
      item: 3,
      line: "“Nethuli: Hi friends. May I join you?\nLiyansa: No, no. We don't like to play with you.\nLiyara: You can go somewhere else!\nLiyansa: Yes, you cannot join our game.\nNethuli: Why are you treating me like this? I also want to play with you. I feel very sad.”",
      tip: "Show the authentic hurt of being left out."
    },
    16: {
      title: "Part 1: The Playground – Stepping In",
      speaker: "Osheera, Sehansa, Nethuli",
      item: 3,
      line: "“Osheera: Look at Nethuli... She is really hurt. If everyone treated us this way, how would we feel? I know this is wrong. But I'm afraid to say anything.\n\nSehansa: Someone needs to help her. Let's stop watching and do something. Nethuli is our friend too. Come and play with us, Nethuli!\n\nNethuli: Thank you, my dear. I thought nobody wanted me.”",
      tip: "Sehansa reaches out warmly, stepping forward to include Nethuli."
    },
    17: {
      title: "Part 1: The Playground – Reconciliation & Lessons",
      speaker: "Liyansa, Liyara, Gevin, Lisari",
      item: 3,
      line: "“Liyansa: Liyara, what we did wasn't right. We shouldn't treat anyone like that.\nLiyara & Liyansa (Together): We are sorry for treating you that way.\nNethuli: It's okay, dear. I just wanted to be your friend.\nGevin: Our words can hurt others. Staying silent can hurt them too. So, speak up when something is wrong. And never leave someone feeling alone.\nLisari: We should never make someone feel unwanted. If we see bullying, we should help safely and tell a teacher when necessary.”",
      tip: "A sincere apology followed by thoughtful lessons about upstanders."
    },
    18: {
      title: "Part 2: Speaking for the Voiceless – Helpless Animals",
      speaker: "Dehami",
      item: 3,
      line: "“Dehami: Dear friends, just like Nethuli felt excluded, have you ever thought about the pain animals go through because of humans? Some animals spend their lives behind bars, dreaming of running freely.”",
      tip: "Speak with deep, heartfelt empathy for animals in cages and shelters."
    },
    19: {
      title: "Part 2: Speaking for the Voiceless – Elephants & Tusks",
      speaker: "Shaini",
      item: 3,
      line: "“Shaini: Some are killed for their beautiful skins and tusks. Don't they deserve to live, just like us?”",
      tip: "Passionate plea to protect elephants and wildlife from harm."
    },
    20: {
      title: "Part 2: Speaking for the Voiceless – Forests & Protection",
      speaker: "Nethuki, Yeshitha, Minindee, Sinadhi",
      item: 3,
      line: "“Nethuki: People cut down forests and destroy their homes. Where will these innocent animals go? Where will they find food and shelter?\n\nYeshitha: They cannot tell us, 'Please don't hurt us! Please don't destroy our homes! Please don't cage us!' But their silence does not mean they feel no pain.\n\nMinindee: We have voices, but they don't. So, shouldn't we use our voices to protect them? Every animal deserves kindness, safety, and a chance to live. Who gave us the right to take away their precious lives?\n\nSinadhi: They too deserve to live under the same sky, breathe the same air, and enjoy the freedom of this beautiful world. Their lives are not ours to take. Every life is precious, and no innocent creature deserves to die because of human cruelty.”",
      tip: "Minindee and team speak with resolute moral conviction."
    },
    21: {
      title: "Role Play: Ending Chorus – All Together",
      speaker: "All (Together)",
      item: 3,
      line: "“All (Together):\n• Choose kindness!\n• Speak up!\n• Stand for what is right!\n• Be gentle with animals!\n• Never stay silent when someone needs help!\n• Justice starts with us!”",
      tip: "Delivered in powerful, energetic unison with confident gestures."
    },
    22: {
      title: "Justice Detectives: Title & Cover",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Item 04: Justice Detectives — Investigating fairness, honesty, and empathy in our everyday school life. Based on our Grade 4 case studies.”",
      tip: "Present the detective case files clearly to the school audience."
    },
    23: {
      title: "Case 01: Blamed Without Proof",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 01: Blamed Without Proof — It is unfair to accuse someone without evidence or facts. Always listen to the truth before making a judgment.”",
      tip: "Clear emphasis on fairness, listening, and evidence."
    },
    24: {
      title: "Case 02: Rules Are for Everyone",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 02: Rules Are for Everyone — School rules apply to every student equally, no matter who they are. Fairness means following the same standards.”",
      tip: "Emphasize equality and classroom discipline."
    },
    25: {
      title: "Case 03: Left Out of the Game",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 03: Left Out of the Game — Excluding a classmate from games causes real hurt. True justice means inviting others to join in.”",
      tip: "Encourage students to look for lonely classmates at interval."
    },
    26: {
      title: "Case 04: Taking Without Asking",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 04: Taking Without Asking — Respecting others means asking for permission before borrowing stationery or belongings.”",
      tip: "Focus on honesty, respect for property, and politeness."
    },
    27: {
      title: "Case 05: Unfair Sharing",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 05: Unfair Sharing — When sharing materials, group tasks, or playtime, everyone deserves an equal and fair portion.”",
      tip: "Highlight generous sharing and taking turns."
    },
    28: {
      title: "Case 06: Cutting in Line",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 06: Cutting in Line — Waiting patiently in line shows respect for everyone who arrived before you. Patience is part of justice.”",
      tip: "Remind students of canteen, washroom, and line etiquette."
    },
    29: {
      title: "Case 07: Making a Mess",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 07: Making a Mess — Leaving wrappers or rubbish for others to clean up is unfair. Respect your school environment.”",
      tip: "Cleanliness, pride in Sussex College, and responsibility."
    },
    30: {
      title: "Case 08: Whispering Rumors",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 08: Whispering Rumors — Gossiping and whispering can hurt feelings deeply. Speak only what is true, kind, and necessary.”",
      tip: "Encourage kind speech and shutting down rumors."
    },
    31: {
      title: "Case 09: Picking Sides",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 09: Picking Sides — Stand for what is right and fair, not simply for your best friend when they make a mistake.”",
      tip: "Quiet moral courage over popularity."
    },
    32: {
      title: "Case 10: Judging by Looks",
      speaker: "Justice Detectives",
      item: 4,
      line: "“Case 10: Judging by Looks — Never judge a person by how they look, dress, or sound. Real value comes from kindness in the heart.”",
      tip: "A strong message on inclusivity, empathy, and acceptance."
    },
    33: {
      title: "Audio Feature: Kindness & Justice in Action",
      speaker: "Audio Feature (1103.MP3)",
      item: 5,
      line: "“Item 05: Audio Presentation — Inspiring spoken audio feature and soundscapes of kindness, animal rescue, and standing up for justice in our community.”",
      tip: "Ensure auditorium projector or hall speakers are unmuted and set to comfortable volume."
    },
    34: {
      title: "Our Kindness & Justice Pledge: Introduction",
      speaker: "Full Grade 4 Assembly",
      item: 6,
      line: "“Item 06: Our Kindness & Justice Pledge — Respected Principal, teachers, and friends: We now invite all students to place their right hands on their hearts as Grade 4 recites our sacred promises.”",
      tip: "Solemn, dignified call to attention. Hand on heart."
    },
    35: {
      title: "The Pledge: Promises 1 to 5",
      speaker: "Full Grade 4 Assembly",
      item: 6,
      line: "“✦ 1. I promise to be kind to everyone.\n✦ 2. I will speak the truth and treat others fairly.\n✦ 3. I will respect my friends and help those in need.\n✦ 4. I will never bully, hurt, or make fun of others.\n✦ 5. I will be kind and gentle to animals.”",
      tip: "Clear, steady, dignified cadence in unison."
    },
    36: {
      title: "The Pledge: Promises 6 to 9",
      speaker: "Full Grade 4 Assembly",
      item: 6,
      line: "“✦ 6. I will protect nature and respect all living things.\n✦ 7. I will speak up when I see someone being treated unfairly.\n✦ 8. I will use my words and actions to spread love, kindness, and peace.\n✦ 9. I understand that even a small act of kindness can make a big difference.”",
      tip: "Building up energy toward the official callout."
    },
    37: {
      title: "Grand Assembly Finale & Celebration",
      speaker: "All Students Together",
      item: 6,
      line: "“Official Callout:\n‘I will choose kindness. I will stand for justice. I will make a difference!’\n\nGrand Final Assembly Message:\n‘KINDNESS IS CONTAGIOUS, AND JUSTICE STARTS WITH US!’”",
      tip: "Triumphant climax! Loud, joyful unison with joined hands! Confetti celebration launches!"
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
    12: "A little kindness can light the way!",
    13: "A little kindness goes a long way!",
    14: "When we speak up, we change everything.",
    15: "Why are you treating me like this?",
    16: "Come and play with us, Nethuli!",
    17: "Never leave someone feeling alone.",
    18: "Animals dreaming of running freely.",
    19: "Don't they deserve to live, just like us?",
    20: "Every animal deserves kindness and safety.",
    21: "Justice starts with us!",
    22: "Everyday Fairness in Our School",
    23: "Never blame someone without the truth.",
    24: "Fairness means the rules apply to all.",
    25: "Include everyone; nobody sits alone.",
    26: "Always ask permission first.",
    27: "Share equally and take fair turns.",
    28: "Wait your turn with patience.",
    29: "Take pride in our clean school.",
    30: "Speak what is true, kind, and helpful.",
    31: "Stand for justice, not popularity.",
    32: "Look at character and kindness inside.",
    33: "Real-World Stories of Courage & Compassion",
    34: "Nine Sacred Promises of Sussex Students",
    35: "Hand on heart, standing for justice.",
    36: "Even a small act makes a big difference.",
    37: "Kindness is contagious, and justice starts with us!"
  };

  // DOM Elements Cache
  let dom = {};

  // Confetti Particle Engine State
  let confettiParticles = [];
  let confettiAnimId = null;

  function init() {
    cacheDom();
    bindEvents();
    buildOverviewGrid();
    setupAmbientParticles();
    initConfettiCanvas();
    const hashMatch = window.location.hash.match(/slide-(\d+)/);
    const startSlide = hashMatch ? Math.min(state.totalSlides, Math.max(1, parseInt(hashMatch[1], 10))) : 1;
    goToSlide(startSlide, false);
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
      confettiCanvas: document.getElementById('confetti-canvas'),
      transitionCanvas: document.getElementById('transition-canvas'),
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

    window.addEventListener('hashchange', () => {
      const match = window.location.hash.match(/slide-(\d+)/);
      if (match) {
        const target = parseInt(match[1], 10);
        if (target !== state.currentSlide) goToSlide(target, false);
      }
    });

    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        if (dom.viewport) dom.viewport.classList.add('fullscreen-mode');
      } else {
        if (dom.viewport) dom.viewport.classList.remove('fullscreen-mode');
      }
      handleResize();
    });

    initSlide33AudioPlayer();
  }

  // Slide 33 Audio Presentation Playback Controller (1103.MP3)
  function initSlide33AudioPlayer() {
    const audio = document.getElementById('assembly-audio-player');
    const playBtn = document.getElementById('btn-audio-play');
    const playIcon = document.getElementById('icon-audio-play');
    const pauseIcon = document.getElementById('icon-audio-pause');
    const seekSlider = document.getElementById('audio-seek-slider');
    const timeCurrent = document.getElementById('audio-time-current');
    const timeTotal = document.getElementById('audio-time-total');
    const rewindBtn = document.getElementById('btn-audio-rewind');
    const forwardBtn = document.getElementById('btn-audio-forward');
    const resetBtn = document.getElementById('btn-audio-reset');
    const muteBtn = document.getElementById('btn-audio-mute');
    const volHigh = document.getElementById('icon-vol-high');
    const volMuted = document.getElementById('icon-vol-muted');
    const volSlider = document.getElementById('audio-vol-slider');
    const eqBars = document.getElementById('audio-visual-bars');
    const discHalo = document.getElementById('audio-disc-halo');

    if (!audio) return;

    function formatTime(seconds) {
      if (isNaN(seconds) || seconds < 0) return '0:00';
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function updatePlayState(isPlaying) {
      if (playIcon) playIcon.style.display = isPlaying ? 'none' : 'block';
      if (pauseIcon) pauseIcon.style.display = isPlaying ? 'block' : 'none';
      if (eqBars) eqBars.classList.toggle('is-playing', isPlaying);
      if (discHalo) discHalo.classList.toggle('is-playing', isPlaying);
    }

    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audio.paused) {
          audio.play().then(() => updatePlayState(true)).catch(() => {});
        } else {
          audio.pause();
          updatePlayState(false);
        }
      });
    }

    audio.addEventListener('play', () => updatePlayState(true));
    audio.addEventListener('pause', () => updatePlayState(false));
    audio.addEventListener('ended', () => {
      updatePlayState(false);
      if (seekSlider) seekSlider.value = 0;
      if (timeCurrent) timeCurrent.textContent = '0:00';
    });

    audio.addEventListener('loadedmetadata', () => {
      if (timeTotal) timeTotal.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.duration && seekSlider && !seekSlider.dataset.dragging) {
        seekSlider.value = (audio.currentTime / audio.duration) * 100;
        if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
      }
    });

    if (seekSlider) {
      seekSlider.addEventListener('input', () => {
        seekSlider.dataset.dragging = 'true';
        if (audio.duration) {
          const seekTo = (seekSlider.value / 100) * audio.duration;
          if (timeCurrent) timeCurrent.textContent = formatTime(seekTo);
        }
      });
      seekSlider.addEventListener('change', () => {
        delete seekSlider.dataset.dragging;
        if (audio.duration) {
          audio.currentTime = (seekSlider.value / 100) * audio.duration;
        }
      });
    }

    if (rewindBtn) {
      rewindBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.currentTime = Math.max(0, audio.currentTime - 10);
      });
    }

    if (forwardBtn) {
      forwardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.currentTime = 0;
        audio.play().then(() => updatePlayState(true)).catch(() => {});
      });
    }

    if (muteBtn && volSlider) {
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.muted = !audio.muted;
        if (volHigh) volHigh.style.display = audio.muted ? 'none' : 'block';
        if (volMuted) volMuted.style.display = audio.muted ? 'block' : 'none';
      });
      volSlider.addEventListener('input', (e) => {
        e.stopPropagation();
        audio.volume = parseFloat(volSlider.value);
        audio.muted = audio.volume === 0;
        if (volHigh) volHigh.style.display = audio.muted ? 'none' : 'block';
        if (volMuted) volMuted.style.display = audio.muted ? 'block' : 'none';
      });
    }
  }
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
    resizeConfettiCanvas();
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
        case 'c':
        case 'C':
          if (state.currentSlide === state.totalSlides) {
            e.preventDefault();
            launchCelebration();
          }
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
      for (let i = 0; i < 16; i++) {
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

  // Web Audio Chimes (Default OFF)
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

  // Helper to determine item for a slide
  function getItemForSlide(slideNum) {
    if (slideNum >= 34) return 6;
    if (slideNum === 33) return 5;
    if (slideNum >= 22) return 4;
    if (slideNum >= 14) return 3;
    if (slideNum >= 9) return 2;
    return 1;
  }

  // Navigation Core (Instant & Smooth, Zero Navigation Blocking or Transition Lag)
  function goToSlide(targetIndex, playAudio = true) {
    if (targetIndex < 1 || targetIndex > state.totalSlides) return;
    const prevSlide = state.currentSlide;
    state.currentSlide = targetIndex;

    try {
      if (window.location.hash !== `#slide-${targetIndex}`) {
        history.replaceState(null, '', `#slide-${targetIndex}`);
      }
    } catch (e) {}

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
    if (dom.progressFill) dom.progressFill.style.width = `${Math.max(3, progressPercent)}%`;

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

    // Check if on Final Slide 37: Launch Celebration Animation!
    if (state.currentSlide === state.totalSlides) {
      launchCelebration();
    }

    // Pause Slide 33 audio when navigating away
    const slide33Audio = document.getElementById('assembly-audio-player');
    if (slide33Audio && targetIndex !== 33 && !slide33Audio.paused) {
      slide33Audio.pause();
    }

    if (playAudio) {
      if (state.currentSlide === 37 || state.currentSlide === 8 || state.currentSlide === 13 || state.currentSlide === 21) {
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
      launchCelebration();
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
        dom.btnSound.title = 'Sound FX: Enabled (Press M to Mute)';
        playTone(659.25, 'sine', 0, 0.2, 0.1);
      } else {
        dom.btnSound.style.opacity = '0.5';
        dom.btnSound.title = 'Sound FX: Muted (Press M to Enable)';
      }
    }
  }

  // =========================================================================
  // CELEBRATION ANIMATION (Confetti & Gentle Bursts for Finale)
  // =========================================================================
  function initConfettiCanvas() {
    resizeConfettiCanvas();
  }

  function resizeConfettiCanvas() {
    if (!dom.confettiCanvas || !dom.canvas) return;
    dom.confettiCanvas.width = dom.canvas.clientWidth || 1920;
    dom.confettiCanvas.height = dom.canvas.clientHeight || 1080;
  }

  
  // =========================================================================
  // ANIMATED SLIDE TRANSITIONS & MAGICAL ITEM CHANGES ENGINE (60 FPS)
  // =========================================================================
  let transitionAnimId = null;
  let transitionParticles = [];

  function triggerSlideTransition(fromSlide, toSlide) {
    // Slide transitions removed per user request for immediate, responsive navigation
  }

  function triggerItemTransition(fromItem, toItem) {
    // Item transitions removed per user request for immediate, responsive navigation
  }

  function launchCelebration() {
    resizeConfettiCanvas();
    if (!dom.confettiCanvas) return;
    const ctx = dom.confettiCanvas.getContext('2d');
    if (!ctx) return;

    confettiParticles = [];
    const colors = ['#f59e0b', '#38bdf8', '#ef4444', '#10b981', '#a855f7', '#fbbf24', '#ffffff', '#ec4899'];

    const count = 220;
    for (let i = 0; i < count; i++) {
      confettiParticles.push({
        x: dom.confettiCanvas.width * (0.25 + Math.random() * 0.5),
        y: dom.confettiCanvas.height * 0.88,
        vx: (Math.random() - 0.5) * 22,
        vy: -Math.random() * 20 - 9,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 14,
        gravity: 0.36,
        drag: 0.985,
        alpha: 1,
      });
    }

    if (!confettiAnimId) {
      animateConfetti();
    }
  }

  function animateConfetti() {
    if (!dom.confettiCanvas) return;
    const ctx = dom.confettiCanvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.rotation += p.rotationSpeed;
      p.alpha -= 0.0035;

      if (p.alpha <= 0 || p.y > dom.confettiCanvas.height + 50) {
        confettiParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      ctx.restore();
    }

    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      ctx.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);
      confettiAnimId = null;
    }
  }

  // =========================================================================
  // EDITABLE POWERPOINT (.PPTX) EXPORT (PptxGenJS)
  // Generates 37 visual-first slides with embedded verbatim teacher notes
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
        fill: { color: i === 37 ? 'FEF3C7' : (i === 1 ? 'E0F2FE' : 'F8FAFC') },
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
      } else if (i >= 22 && i <= 32) {
        // Detective Slides 22-32
        const caseNum = i - 21; // 1 to 11
        const photoNum = String(caseNum).padStart(2, '0');
        slide.addText(cue ? cue.title : 'Justice Detectives', {
          x: 0.8, y: 1.25, w: 11.5, h: 0.6,
          fontSize: 22, bold: true, color: '0D2C54', align: 'center'
        });
        slide.addImage({
          path: `detective_${photoNum}.jpg`,
          x: 3.8, y: 1.95, w: 5.7, h: 4.8
        });
      } else if (i === 37) {
        // Slide 37 Grand Finale
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

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 4.6, y: 1.8, w: 4.1, h: 0.65,
          fill: { color: '0284C7' },
          line: { color: '0369A1', width: 0 }
        });

        slide.addText(cue ? cue.speaker.toUpperCase() : '', {
          x: 4.6, y: 1.88, w: 4.1, h: 0.5,
          fontSize: 13, bold: true, color: 'FFFFFF', align: 'center'
        });

        slide.addText(cue ? cue.title : '', {
          x: 1.5, y: 2.7, w: 10.3, h: 1.0,
          fontSize: 28, bold: true, color: '0D2C54', align: 'center'
        });

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
    launchCelebration,
    exportPPTX,
    exportPDF
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Presentation.init());
} else {
  Presentation.init();
}
