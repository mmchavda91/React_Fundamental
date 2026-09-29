import React, { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// NetlifyDeploy Component — Session 13 (Q2)
//
// Step-by-step guide to:
//   1. Create a new simple React app (separate from class project)
//   2. Push it to GitHub
//   3. Deploy to Netlify via dashboard
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    phase: "🛠️ Create New React App",
    color: "#89b4fa",
    steps: [
      {
        title: "Open terminal and run:",
        code: "npx create-react-app netlify-demo-app\ncd netlify-demo-app",
        note: "This creates a brand new React project called 'netlify-demo-app'",
      },
      {
        title: "Customize src/App.js (simple app):",
        code: `function App() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🚀 My Netlify App</h1>
      <p>Deployed with Netlify!</p>
    </div>
  );
}
export default App;`,
        note: "Keep it simple — just a heading and paragraph",
      },
      {
        title: "Build the production files:",
        code: "npm run build",
        note: "This creates the /build folder with optimized production files",
      },
    ],
  },
  {
    phase: "🐙 Push to GitHub",
    color: "#cba6f7",
    steps: [
      {
        title: "Initialize Git repository:",
        code: "git init\ngit add .\ngit commit -m \"Initial commit - netlify demo app\"",
        note: "Run inside the netlify-demo-app folder",
      },
      {
        title: "Create new repo on GitHub:",
        code: "1. Go to github.com → New repository\n2. Name: netlify-demo-app\n3. Keep it Public\n4. Do NOT add README (repo is already initialized)",
        note: "github.com/new",
        isText: true,
      },
      {
        title: "Connect and push to GitHub:",
        code: "git remote add origin https://github.com/YOUR_USERNAME/netlify-demo-app.git\ngit branch -M main\ngit push -u origin main",
        note: "Replace YOUR_USERNAME with your GitHub username",
      },
    ],
  },
  {
    phase: "🌐 Deploy on Netlify",
    color: "#a6e3a1",
    steps: [
      {
        title: "Sign up / Login to Netlify:",
        code: "1. Go to https://netlify.com\n2. Click 'Sign up'\n3. Choose 'Sign up with GitHub' (easiest!)\n4. Authorize Netlify to access your GitHub",
        note: "Free account — no credit card needed",
        isText: true,
      },
      {
        title: "Add new site from GitHub:",
        code: "1. Dashboard → 'Add new site'\n2. Select 'Import an existing project'\n3. Choose 'Deploy with GitHub'\n4. Select your 'netlify-demo-app' repository",
        note: "Netlify will auto-detect it as a React app",
        isText: true,
      },
      {
        title: "Configure build settings:",
        code: "Branch to deploy:  main\nBuild command:     npm run build\nPublish directory: build",
        note: "Netlify auto-fills these for Create React App ✅",
        isText: true,
      },
      {
        title: "Click 'Deploy site'!",
        code: "Netlify will:\n✅ Clone your GitHub repo\n✅ Run npm run build\n✅ Deploy the /build folder\n✅ Give you a live URL like:\n   https://random-name.netlify.app",
        note: "Takes ~1-2 minutes. Your app is LIVE!",
        isText: true,
      },
    ],
  },
  {
    phase: "🔄 Auto-Deploy (Bonus)",
    color: "#f9e2af",
    steps: [
      {
        title: "Every future git push auto-deploys!",
        code: "# Make a change in App.js, then:\ngit add .\ngit commit -m \"Update app\"\ngit push",
        note: "Netlify detects the push and rebuilds automatically — NO manual deploy needed!",
      },
    ],
  },
];

const NetlifyDeploy = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const toggleStep = (key) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const totalSteps = STEPS.reduce((sum, p) => sum + p.steps.length, 0);
  const progress = Math.round((completedSteps.size / totalSteps) * 100);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>🌐 Deploy to Netlify</h1>
          <p style={styles.subtitle}>Session 13 · Q2 — GitHub + Netlify Deployment Guide</p>

          {/* Progress bar */}
          <div style={styles.progressWrap}>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${progress}%`,
                }}
              />
            </div>
            <span style={styles.progressText}>
              {completedSteps.size}/{totalSteps} steps done ({progress}%)
            </span>
          </div>
        </div>

        {/* Phase selector tabs */}
        <div style={styles.phaseTabs}>
          {STEPS.map((phase, i) => (
            <button
              key={i}
              style={{
                ...styles.phaseTab,
                borderColor: activePhase === i ? phase.color : "#313244",
                color: activePhase === i ? phase.color : "#6c7086",
                backgroundColor: activePhase === i ? "#1e1e2e" : "#181825",
              }}
              onClick={() => setActivePhase(i)}
            >
              {phase.phase}
            </button>
          ))}
        </div>

        {/* Active phase steps */}
        <div style={styles.stepsContainer}>
          {STEPS[activePhase].steps.map((step, si) => {
            const key = `${activePhase}-${si}`;
            const done = completedSteps.has(key);
            return (
              <div
                key={si}
                style={{
                  ...styles.stepCard,
                  borderColor: done ? STEPS[activePhase].color : "#313244",
                  opacity: done ? 0.75 : 1,
                }}
              >
                {/* Step header */}
                <div style={styles.stepHeader}>
                  <div style={styles.stepNumWrap}>
                    <div
                      style={{
                        ...styles.stepNum,
                        backgroundColor: done
                          ? STEPS[activePhase].color
                          : "#313244",
                        color: done ? "#1e1e2e" : "#6c7086",
                      }}
                    >
                      {done ? "✓" : si + 1}
                    </div>
                  </div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <button
                    style={{
                      ...styles.checkBtn,
                      backgroundColor: done
                        ? STEPS[activePhase].color
                        : "transparent",
                      color: done ? "#1e1e2e" : STEPS[activePhase].color,
                      borderColor: STEPS[activePhase].color,
                    }}
                    onClick={() => toggleStep(key)}
                  >
                    {done ? "✅ Done" : "Mark Done"}
                  </button>
                </div>

                {/* Code / Text block */}
                <pre
                  style={{
                    ...styles.codeBlock,
                    borderLeftColor: STEPS[activePhase].color,
                  }}
                >
                  {step.code}
                </pre>

                {/* Note */}
                {step.note && (
                  <p style={styles.stepNote}>💡 {step.note}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Nav buttons */}
        <div style={styles.navRow}>
          <button
            style={{
              ...styles.navBtn,
              opacity: activePhase === 0 ? 0.3 : 1,
            }}
            onClick={() => setActivePhase((p) => Math.max(0, p - 1))}
            disabled={activePhase === 0}
          >
            ← Previous
          </button>
          <span style={styles.phaseIndicator}>
            Phase {activePhase + 1} of {STEPS.length}
          </span>
          <button
            style={{
              ...styles.navBtn,
              opacity: activePhase === STEPS.length - 1 ? 0.3 : 1,
            }}
            onClick={() =>
              setActivePhase((p) => Math.min(STEPS.length - 1, p + 1))
            }
            disabled={activePhase === STEPS.length - 1}
          >
            Next →
          </button>
        </div>

        {/* Summary box */}
        <div style={styles.summaryBox}>
          <h3 style={styles.summaryTitle}>📋 Quick Summary</h3>
          <div style={styles.summaryGrid}>
            {[
              { icon: "💻", label: "Step 1", val: "npx create-react-app netlify-demo-app" },
              { icon: "⚒️", label: "Step 2", val: "npm run build  →  creates /build folder" },
              { icon: "🐙", label: "Step 3", val: "git init → git add . → git push to GitHub" },
              { icon: "🌐", label: "Step 4", val: "Netlify Dashboard → Import from GitHub → Deploy" },
              { icon: "🔗", label: "Result", val: "Live URL: https://your-app.netlify.app" },
            ].map((item, i) => (
              <div key={i} style={styles.summaryItem}>
                <span style={styles.summaryIcon}>{item.icon}</span>
                <div>
                  <strong style={styles.summaryLabel}>{item.label}</strong>
                  <p style={styles.summaryVal}>{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// ── Styles ────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#11111b",
    padding: "32px 16px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "860px",
    margin: "0 auto",
    color: "#cdd6f4",
  },
  header: {
    textAlign: "center",
    marginBottom: "28px",
  },
  title: {
    color: "#cba6f7",
    fontSize: "32px",
    margin: "0 0 6px",
  },
  subtitle: {
    color: "#6c7086",
    fontSize: "13px",
    marginBottom: "20px",
  },
  progressWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  progressBar: {
    width: "100%",
    maxWidth: "400px",
    height: "8px",
    backgroundColor: "#313244",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#a6e3a1",
    borderRadius: "4px",
    transition: "width 0.4s ease",
  },
  progressText: {
    color: "#a6e3a1",
    fontSize: "12px",
    fontWeight: "bold",
  },
  phaseTabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  phaseTab: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
    transition: "all 0.2s",
  },
  stepsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "24px",
  },
  stepCard: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "20px",
    border: "1px solid",
    transition: "all 0.2s",
  },
  stepHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "14px",
  },
  stepNumWrap: { flexShrink: 0 },
  stepNum: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "13px",
    transition: "all 0.3s",
  },
  stepTitle: {
    flex: 1,
    margin: 0,
    fontSize: "14px",
    color: "#cdd6f4",
    fontWeight: "bold",
  },
  checkBtn: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
    transition: "all 0.2s",
    flexShrink: 0,
  },
  codeBlock: {
    backgroundColor: "#181825",
    borderRadius: "8px",
    padding: "14px",
    fontSize: "12px",
    color: "#a6e3a1",
    lineHeight: "1.8",
    margin: "0 0 10px",
    overflowX: "auto",
    borderLeft: "3px solid",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
  stepNote: {
    color: "#6c7086",
    fontSize: "12px",
    margin: 0,
    fontStyle: "italic",
  },
  navRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
  },
  navBtn: {
    padding: "10px 24px",
    backgroundColor: "#cba6f7",
    color: "#1e1e2e",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "13px",
    transition: "opacity 0.2s",
  },
  phaseIndicator: {
    color: "#6c7086",
    fontSize: "13px",
  },
  summaryBox: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid #313244",
  },
  summaryTitle: {
    color: "#cba6f7",
    margin: "0 0 16px",
    fontSize: "16px",
  },
  summaryGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  summaryItem: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    padding: "10px",
    backgroundColor: "#181825",
    borderRadius: "8px",
  },
  summaryIcon: { fontSize: "20px", flexShrink: 0 },
  summaryLabel: { color: "#cba6f7", fontSize: "12px", display: "block", marginBottom: "2px" },
  summaryVal: { color: "#bac2de", fontSize: "12px", margin: 0, fontFamily: "monospace" },
};

export default NetlifyDeploy;
