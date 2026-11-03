# SIX VOICES, ONE MESSAGE
## Sussex College • Grade 4 Assembly Presentation

> **Main Theme:** *Kindness Is Contagious, Justice Starts with Us.*  
> **Audience:** Grade 4 School Assembly, Sussex College  
> **Class Teacher:** Mrs. Darshani Gunathilaka  
> **Official Crest / Logo:** Sussex College Emblem (`original-logo-1.webp`)  
> **Format:** Standalone 16:9 Interactive Web Application (HTML5 / CSS3 / JavaScript / SVG / GSAP)

---

## ☁️ Hosting on Vercel (Step-by-Step Guide)

You can host this project on **Vercel** in under 2 minutes to get a live web link that works on any PC, laptop, or projector with an internet connection:

### Method 1: Push to GitHub & Import to Vercel (Recommended)
1. Initialize a git repo and push to GitHub (or upload the files to a repository):
   ```bash
   git init
   git add .
   git commit -m "Sussex College Grade 4 Assembly Presentation"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Leave framework preset as **"Other"** (Root directory: `./`, no build command needed).
5. Click **"Deploy"**. Within 15 seconds, Vercel gives you your live link (e.g., `https://six-voices-assembly.vercel.app`)!

### Method 2: Deploy directly via Vercel CLI
Open your terminal in this project folder and run:
```bash
npx vercel
```
- Follow the prompt (press Enter to accept default settings).
- To deploy straight to production:
```bash
npx vercel --prod
```

### 📶 Will it work if the presentation PC has internet?
**YES, absolutely 100%!**  
When the auditorium PC is connected to the internet:
1. Open your Vercel link in Google Chrome or Microsoft Edge.
2. Press **`F`** to enter full-screen mode (locks to crisp 16:9 aspect ratio).
3. Use the arrow keys or spacebar to present.
4. All images (`original-logo-1.webp`), animations, synthesized chime sounds, and confetti will load instantly with 60fps performance from Vercel's global edge network.

*(Tip: Keep a copy of this folder on a USB flash drive as an offline backup just in case the school Wi-Fi ever flickers!)*

---

## 🌟 Overview & Creative Concept

**Six Voices, One Message** is an art-directed interactive storybook presentation crafted specifically for a Grade 4 assembly at Sussex College. Rather than a generic slideshow, this experience transports students into an illustrated, warm, Pixar-inspired world where six Grade 4 children guide the school through six foundational moral values.

Every scene is illustrated with custom vector SVGs featuring expressive, age-appropriate Grade 4 characters, layered environmental depth (Sussex College campus, classrooms, playground, sensory garden, and assembly hall), smooth transitions, interactive chimes, and a physics-based confetti engine.

---

## 🎭 The 10-Slide Storyboard

| Slide | Title / Speaker | Value / Core Theme | Key Illustration & Visual Concept | Main Quote |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **SIX VOICES, ONE MESSAGE** | Sussex College Assembly Opening | Sunrise over Sussex College campus clock tower, all six children standing united on the green lawn | *“Kindness Is Contagious, Justice Starts with Us.”* |
| **02** | **SMALL ACTIONS, BIG DIFFERENCES** | The Five Core Daily Values | 5 illuminated value cards: Be Kind, Be Fair, Be Honest, Show Respect, Stand Up for Others | *“When we put all our small good deeds together, Sussex College shines like gold!”* |
| **03** | **ABHIPPRA** | Kindness Makes a Difference | Hallway scene: A classmate has dropped heavy books; Abhippra kneels down warmly to help pick them up | *“A little kindness can make a big difference.”* |
| **04** | **PESHALA** | Fairness for Everyone | Playground court: Peshala warmly invites a hesitant friend into the basketball game so no one is left out | *“Everyone deserves a fair chance.”* |
| **05** | **THISENI** | Honesty Is the Best Policy | Grade 4 classroom: Thiseni returns a lost, sparkling pencil case to its grateful owner | *“Always choose the truth.”* |
| **06** | **BHANUJA** | Respect Makes Us Better | Classroom circle: Bhanuja and peers listening attentively to their teacher and raising hands politely | *“Listen, care and respect everyone.”* |
| **07** | **YENUTH** | Be Kind to Animals | Sussex garden: Yenuth caring for a friendly golden pup, peaceful kitten, and bluebirds | *“Every living creature deserves kindness.”* |
| **08** | **DEWLI** | Stand Up for What Is Right | Courtyard oak tree: Dewli courageously steps up beside an excluded classmate to offer support | *“Be brave. Be kind. Make things right.”* |
| **09** | **OUR PROMISE** | Grade 4 Assembly Pledge | All six children on stage with right hands raised, illuminated by golden beams and interactive pledge items | *“We promise to be kind, fair, honest, respectful, care for animals, and stand up for what is right.”* |
| **10** | **THANK YOU!** | Grand Finale & Call to Action | Full celebration: Arching rainbow, floating balloons, cheering children, confetti cannon | *“BE KIND. BE FAIR. BE THE CHANGE!”* |

---

## 🚀 How to Run the Presentation

### Option 1: Direct File Launch (Recommended & Instant)
1. Double-click `index.html` (or `start_presentation.bat`).
2. The presentation will instantly open in your default browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari).
3. Press **`F`** to toggle full-screen presentation mode on your projector or display.

### Option 2: Run via Local Server (Optional)
If you prefer running through a local HTTP server:
```bash
# Python 3:
python -m http.server 8000

# Open in browser:
http://localhost:8000
```

> **Note:** The presentation is 100% self-contained and works completely **offline**. All vector graphics, sound synthesizers, and animations are locally embedded without requiring any external backend or active internet connection.

---

## ⌨️ Keyboard & Navigation Controls

| Key / Control | Action | Description |
| :--- | :--- | :--- |
| `→` / `Space` / `PageDown` / `Enter` | **Next Slide** | Advances to the next slide with smooth transitions |
| `←` / `Backspace` / `PageUp` | **Previous Slide** | Returns to the previous slide |
| `Home` | **Slide 1** | Jumps directly to the Title Slide |
| `End` | **Slide 10** | Jumps directly to the Grand Finale Slide |
| `F` | **Toggle Fullscreen** | Switches into true 16:9 full-screen presentation mode |
| `S` or `N` | **Speaker Notes** | Opens the Grade 4 speaker cue drawer with rehearsal lines and tips |
| `G` or `O` | **Overview Grid** | Opens thumbnail navigator to jump to any slide instantly |
| `P` | **Auto-Play** | Toggles 8.5-second automated slideshow rehearsal mode |
| `M` | **Audio Mute/Unmute** | Toggles joyful Web Audio marimba chimes |
| `Esc` | **Close Overlays** | Closes open drawers or overview modals |

---

## 💎 Features Built Specifically for Sussex College

1. **Pixel-Perfect 16:9 Scaler:** Automatically computes aspect ratio scaling so the slide canvas looks sharp on any laptop screen, interactive whiteboard, or high-definition school auditorium projector without letterboxing distortion.
2. **Built-in Speaker Cues Drawer:** Pressing `S` displays real Grade 4 assembly talking lines for Abhippra, Peshala, Thiseni, Bhanuja, Yenuth, and Dewli, helping students practice their stage lines.
3. **Interactive Pledge Checklist (Slide 9):** Clicking *"Pledge Along with Grade 4!"* triggers a sequential musical chime and golden pulse across all six pledge promises.
4. **Live Confetti Particle Physics (Slide 10):** Interactive canvas celebration cannon with wind, gravity, and fluttering ribbons for the assembly finale.
5. **Harmonious Sound Synthesizer:** Real-time Web Audio API glockenspiel chimes synthesize pleasant musical chords on slide turns without downloading external audio files.

---

*Created with pride for the Sussex College Grade 4 Assembly.*
