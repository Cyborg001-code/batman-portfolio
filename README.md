# 🦇 Dual-Mode Portfolio (Corporate & Batcomputer)

A high-performance, interactive personal portfolio website built with React, Vite, Tailwind CSS, Three.js, and procedural Web Audio. It features an instant switch between a clean corporate Day mode and an authentic Snyderverse-inspired tactical **Batcomputer** Night mode.

---

## ⚡ Key Highlights

- **Corporate Day Profile** – Clean, minimalist layout for recruiters and corporate stakeholders
- **Tactical Batcomputer Night Profile** – Styled with the Snyderverse tactical palette (Matte Black, Dark Charcoal, Metallic Slate, Weathered Brass, and Crimson Threat highlights)
- **Cinematic Transition Sequence** – WebGL 3D extruded bat logo synchronized with dialogue audio (*"I am Vengeance... I am the Night... I am Batman!"*)
- **Interactive Background Atmosphere** – Procedural Gotham rain, rising Knightmare ash embers, and interactive sonar sweeps
- **Audio Synthesis** – Procedural Web Audio API sounds for UI chirps, lightning thunder, and mechanical clicks with zero external audio bloat

---

## ✏️ How to Change Profile Details & Data

All personal details, skills, experience, and project data are decoupled from UI components and stored in a single file:

📁 **`src/data/portfolioData.js`**

Open this file to update any of the following:

| Section to Edit | Data Object Inside `portfolioData.js` | What It Controls |
| :--- | :--- | :--- |
| **Personal Info** | `portfolioData.profile` | Name, title, codename, location, email, phone, and bio summary |
| **Social Links** | `portfolioData.profile.social` | GitHub, LinkedIn, and email address links |
| **Metrics / Stats** | `portfolioData.stats` | Uptime, accounts managed, breach incidents, and automation stats |
| **Skills & Tools** | `portfolioData.skills` | Categorized tech stack (OS, Cloud, IAM, Networking, DevOps) |
| **Projects** | `portfolioData.projects` | Project title, directive, description, tags, repo link, and live demo URL |
| **Experience** | `portfolioData.experience` | Job roles, company names, employment period, location, and bullet points |

> **Note:** Editing `src/data/portfolioData.js` updates **both** the Day profile and the Batcomputer Night profile automatically.

---

## 🛠️ Tech Stack

- **UI Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js (WebGL)
- **State Machine**: Zustand
- **Icons**: Lucide React
- **Audio**: Web Audio API & HTML5 Audio

---

## 📂 Project Structure

```text
batman-portfolio/
├── public/
│   ├── bat-emblem.png         # Tactical background watermark logo
│   └── batman-voice.mp3       # Cinematic transition dialogue audio
├── src/
│   ├── components/
│   │   ├── day/                # Corporate Day components (Hero, Projects, Skills, etc.)
│   │   ├── night/               # Batcomputer components (Hero, Projects, Terminal, etc.)
│   │   └── transition/          # 3D WebGL emblem and cinematic veil
│   ├── data/
│   │   └── portfolioData.js   # ⭐️ EDIT THIS FILE TO CHANGE ALL DATA
│   ├── store/
│   │   └── useThemeStore.js   # Theme state machine and transition timer
│   ├── utils/
│   │   └── audioFx.js         # Procedural sound effect generators
│   ├── App.jsx                # Main layout and theme switcher
│   ├── index.css              # Custom styling, animations & chamfered armor panels
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

### Prerequisites

Ensure you have Node.js (v16.0 or higher) installed on your machine. Check with:

```bash
node -v
npm -v
```

### Installation & Launch

- **Navigate to your project directory**
  ```bash
  cd batman-portfolio
  ```

- **Install dependencies**
  ```bash
  npm install
  ```

- **Verify assets in the `public/` directory**
  - `public/bat-emblem.png` (Required for the Night mode watermark)
  - `public/batman-voice.mp3` (Required for full cinematic dialogue audio; falls back to native browser speech synthesis if missing)

- **Start the local development server**
  ```bash
  npm run dev
  ```

- **Open the site**

  Click the local address printed in your terminal or open:
  ```
  http://localhost:5173/
  ```

---

## 📦 Building for Production

- **Generate an optimized, static production build**
  ```bash
  npm run build
  ```

- **Preview the built production site locally**
  ```bash
  npm run preview
  ```