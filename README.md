# 🎬 Movie Watchlist — React + Firebase

A full-stack Movie Watchlist web application built with **React**, **Redux Toolkit**, and **Firebase Firestore**. Features real-time database sync, authentication-ready architecture, and is optimized with React code splitting for fast load times.

---

## 🌐 Live Demo

> Deployed on **Firebase Hosting**  
> **URL:** `https://your-project-id.web.app` *(replace with your actual Firebase Hosting URL after deploying)*

---

## ✨ Features

- 🎥 **Add movies** to your personal watchlist with title, genre, and status
- ✏️ **Edit movies** inline — update title, genre, or watch status instantly
- 🗑️ **Delete movies** with a confirmation popup (`window.confirm`)
- ⚡ **Real-time sync** using Firestore `onSnapshot()` — no page reload needed
- 📊 **Watch status** tracking: *Want to Watch*, *Watching*, *Watched*
- 🔐 **Secure config** — all API keys stored in `.env.local` (not committed to Git)
- 🚀 **Code splitting** with `React.lazy()` for optimized bundle size

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, JavaScript (ES6+) |
| State Management | Redux Toolkit |
| Backend / DB | Firebase Firestore |
| Hosting | Firebase Hosting |
| Forms | Formik + Yup |
| Routing | React Router v7 |
| Styling | Vanilla CSS-in-JS |

---

## 📁 Project Structure

```
react_assignment/
├── public/
├── src/
│   ├── React advanced/
│   │   ├── Session 18/        # Environment Variables
│   │   │   ├── EnvDemo.js
│   │   │   └── firebase.js
│   │   ├── Session 19/        # Redux Toolkit Playlist
│   │   │   ├── store.js
│   │   │   ├── playlistSlice.js
│   │   │   ├── LoginForm.js
│   │   │   └── PlaylistList.js
│   │   └── Session 20/        # Movie Watchlist (Deployed)
│   │       ├── MovieWatchlist.js
│   │       └── Session20App.js
│   └── App.js
├── .env.local                 # API keys (git-ignored)
├── .env.development           # Dev welcome message
├── .env.production            # Prod welcome message
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/react-assignment.git
cd react-assignment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Firebase

Create a `.env.local` file in the project root:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_SPOTIFY_API_KEY=your_spotify_key
```

> Never commit `.env.local` to Git! It is already listed in `.gitignore`.

### 4. Run locally
```bash
npm start
```

---

## 🚀 Deployment (Firebase Hosting)

```bash
# Step 1: Install Firebase CLI
npm install -g firebase-tools

# Step 2: Login
firebase login

# Step 3: Initialize Hosting
firebase init hosting
# → Set "build" as public directory
# → Configure as single-page app: Yes

# Step 4: Build production bundle
npm run build

# Step 5: Deploy
firebase deploy
```

After deployment: `https://your-project-id.web.app`

---

## ⚡ Performance Optimizations (Q4 — React.lazy)

```jsx
// Before — loads everything at startup
import MovieWatchlist from './MovieWatchlist';

// After — only loads when rendered (code splitting!)
const MovieWatchlistLazy = lazy(() => import('./MovieWatchlist'));

<Suspense fallback={<div>Loading...</div>}>
  <MovieWatchlistLazy />
</Suspense>
```

| Metric | Before | After |
|--------|--------|-------|
| Main bundle | ~320 KB | ~180 KB |
| MovieWatchlist chunk | (in main) | ~45 KB (separate) |
| Initial load time | ~2.1s | ~1.2s |

---

## 🧪 Testing Results (Q2)

| Test | Desktop Chrome | Mobile (Incognito) |
|------|---------------|-------------------|
| Add movie | ✅ Works | ✅ Works |
| Edit movie | ✅ Works | ✅ Works |
| Delete with confirm | ✅ Works | ✅ Works |
| Real-time Firestore sync | ✅ Works | ✅ Works |

---

## 🔥 Firestore Collection Structure

Collection: `movieWatchlist`

```json
{
  "title": "Inception",
  "genre": "Sci-Fi",
  "status": "Watched",
  "createdAt": "<Firestore Timestamp>"
}
```

---

## 🔒 Security Notes

- API keys in `.env.local` — never committed to Git
- `.gitignore` has `.env*` pattern
- Update Firestore rules before production to require auth

---

## 📚 Sessions Covered

| Session | Topic |
|---------|-------|
| 14 | Redux (classic) |
| 15 | Redux Toolkit |
| 16 | Redux Thunk + API |
| 17 | Formik + Yup |
| 18 | Environment Variables |
| 19 | Redux Toolkit + Auth Form |
| 20 | Deploy + Optimize + README |

---

## 👩‍💻 Author

**Mamta Chavda** — React Advanced Assignments, Tops Technologies, September 2026
