import React, { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// BuildInfo Component — Session 13 (Q1)
//
// Demonstrates: npm run build
//   ✅ What it does
//   ✅ Build folder structure (actual output from this project)
//   ✅ File sizes after gzip
//   ✅ What each file means
// ─────────────────────────────────────────────────────────────────────────────

// Actual build output files from this project
const BUILD_FILES = [
  {
    path: "build/",
    type: "folder",
    desc: "Root build output folder — deploy this entire folder",
    icon: "📁",
  },
  {
    path: "build/index.html",
    type: "file",
    size: "609 B",
    desc: "Entry point HTML — browser loads this first",
    icon: "🌐",
  },
  {
    path: "build/asset-manifest.json",
    type: "file",
    size: "369 B",
    desc: "Maps asset names to their hashed filenames",
    icon: "🗺️",
  },
  {
    path: "build/static/js/main.e0bf7db8.js",
    type: "file",
    size: "349 KB  (108.81 KB gzipped)",
    desc: "All React JS code — minified + bundled into one file. Hash in name ensures cache busting.",
    icon: "⚡",
    highlight: true,
  },
  {
    path: "build/static/js/main.e0bf7db8.js.map",
    type: "file",
    size: "1.8 MB",
    desc: "Source map — helps debug production code (not served to users)",
    icon: "🗺️",
  },
  {
    path: "build/static/css/main.07b19bd5.css",
    type: "file",
    size: "17.9 KB  (4.1 KB gzipped)",
    desc: "All CSS — minified + bundled into one file",
    icon: "🎨",
    highlight: true,
  },
  {
    path: "build/static/css/main.07b19bd5.css.map",
    type: "file",
    size: "36 KB",
    desc: "CSS source map for debugging",
    icon: "🗺️",
  },
];

// Steps that happen when you run npm run build
const BUILD_STEPS = [
  { step: "1", label: "Compile JSX → JS", detail: "Babel converts JSX/ES6+ to browser-compatible JS" },
  { step: "2", label: "Bundle files", detail: "Webpack combines all imports into single files" },
  { step: "3", label: "Minify code", detail: "Removes whitespace, shortens variable names to reduce size" },
  { step: "4", label: "Hash filenames", detail: "Adds unique hash (e.g. main.e0bf7db8.js) for cache busting" },
  { step: "5", label: "Optimize assets", detail: "Images, fonts compressed for production" },
  { step: "6", label: "Output to /build", detail: "All final files written to the build/ folder" },
];

const BuildInfo = () => {
  const [activeTab, setActiveTab] = useState("output"); // 'output' | 'steps' | 'commands'

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>🏗️ npm run build</h1>
          <p style={styles.subtitle}>Session 13 · Q1 — Production Build Verification</p>

          {/* Build Status Badge */}
          <div style={styles.statusBadge}>
            <span style={styles.statusDot}></span>
            ✅ Build Successful — Compiled with warnings (exit code 0)
          </div>
        </div>

        {/* Terminal Output Box */}
        <div style={styles.terminal}>
          <div style={styles.terminalBar}>
            <span style={styles.termDot1}></span>
            <span style={styles.termDot2}></span>
            <span style={styles.termDot3}></span>
            <span style={styles.termTitle}>Terminal</span>
          </div>
          <pre style={styles.termText}>
{`> react_assignment@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled with warnings.

File sizes after gzip:

  108.81 kB  build/static/js/main.e0bf7db8.js
    4.10 kB  build/static/css/main.07b19bd5.css

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build`}
          </pre>
        </div>

        {/* Tab Buttons */}
        <div style={styles.tabs}>
          {["output", "steps", "commands"].map((tab) => (
            <button
              key={tab}
              style={{
                ...styles.tabBtn,
                ...(activeTab === tab ? styles.tabBtnActive : {}),
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "output" && "📁 Build Folder"}
              {tab === "steps" && "⚙️ Build Steps"}
              {tab === "commands" && "💻 Useful Commands"}
            </button>
          ))}
        </div>

        {/* Tab: Build Folder Output */}
        {activeTab === "output" && (
          <div>
            <p style={styles.sectionNote}>
              👇 Actual files generated inside <code>build/</code> folder of this project:
            </p>
            <div style={styles.fileList}>
              {BUILD_FILES.map((f, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.fileRow,
                    ...(f.highlight ? styles.fileRowHighlight : {}),
                    ...(f.type === "folder" ? styles.fileRowFolder : {}),
                  }}
                >
                  <span style={styles.fileIcon}>{f.icon}</span>
                  <div style={styles.fileInfo}>
                    <code style={styles.filePath}>{f.path}</code>
                    <p style={styles.fileDesc}>{f.desc}</p>
                  </div>
                  {f.size && (
                    <span style={styles.fileSize}>{f.size}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Build Steps */}
        {activeTab === "steps" && (
          <div style={styles.stepsList}>
            {BUILD_STEPS.map((s) => (
              <div key={s.step} style={styles.stepRow}>
                <div style={styles.stepNum}>{s.step}</div>
                <div>
                  <p style={styles.stepLabel}>{s.label}</p>
                  <p style={styles.stepDetail}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Useful Commands */}
        {activeTab === "commands" && (
          <div style={styles.cmdList}>
            {[
              { cmd: "npm run build", desc: "Create optimized production build in /build folder" },
              { cmd: "serve -s build", desc: "Locally serve the build folder to test production output" },
              { cmd: "npm install -g serve", desc: "Install the 'serve' static server globally" },
              { cmd: "npm start", desc: "Start development server (NOT for production)" },
            ].map((c, i) => (
              <div key={i} style={styles.cmdRow}>
                <pre style={styles.cmdCode}>{c.cmd}</pre>
                <p style={styles.cmdDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Dev vs Prod comparison */}
        <div style={styles.compareGrid}>
          <div style={{ ...styles.compareCard, borderColor: "#f38ba8" }}>
            <h3 style={{ color: "#f38ba8", margin: "0 0 12px" }}>🔧 npm start (Dev)</h3>
            <ul style={styles.compareList}>
              <li>❌ Not minified — large file sizes</li>
              <li>❌ Slow for users</li>
              <li>✅ Hot reload — fast development</li>
              <li>✅ Detailed error messages</li>
              <li>🌐 Runs on localhost:3000</li>
            </ul>
          </div>
          <div style={{ ...styles.compareCard, borderColor: "#a6e3a1" }}>
            <h3 style={{ color: "#a6e3a1", margin: "0 0 12px" }}>🚀 npm run build (Prod)</h3>
            <ul style={styles.compareList}>
              <li>✅ Minified — small file sizes</li>
              <li>✅ Fast for users</li>
              <li>✅ Hashed filenames for caching</li>
              <li>✅ Optimized performance</li>
              <li>📁 Outputs to /build folder</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

// ── Styles ────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#11111b",
    padding: "32px 16px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "900px",
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
    marginBottom: "16px",
  },
  statusBadge: {
    display: "inline-block",
    backgroundColor: "#1e1e2e",
    border: "1px solid #a6e3a1",
    color: "#a6e3a1",
    padding: "8px 20px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
  },
  statusDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#a6e3a1",
    marginRight: "8px",
    animation: "pulse 1.5s infinite",
  },
  terminal: {
    backgroundColor: "#181825",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "28px",
    border: "1px solid #313244",
  },
  terminalBar: {
    backgroundColor: "#313244",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  termDot1: { width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#f38ba8", display: "inline-block" },
  termDot2: { width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#f9e2af", display: "inline-block" },
  termDot3: { width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#a6e3a1", display: "inline-block" },
  termTitle: { color: "#6c7086", fontSize: "13px", marginLeft: "8px" },
  termText: {
    padding: "20px",
    margin: 0,
    color: "#a6e3a1",
    fontSize: "13px",
    lineHeight: "1.8",
    overflowX: "auto",
  },
  tabs: {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
  },
  tabBtn: {
    padding: "10px 20px",
    backgroundColor: "#1e1e2e",
    color: "#6c7086",
    border: "1px solid #313244",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
    transition: "all 0.2s",
  },
  tabBtnActive: {
    backgroundColor: "#cba6f7",
    color: "#1e1e2e",
    borderColor: "#cba6f7",
  },
  sectionNote: {
    color: "#6c7086",
    fontSize: "13px",
    marginBottom: "16px",
  },
  fileList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "28px",
  },
  fileRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    backgroundColor: "#1e1e2e",
    borderRadius: "10px",
    padding: "14px",
    border: "1px solid #313244",
  },
  fileRowHighlight: {
    borderColor: "#cba6f7",
    backgroundColor: "#1e1e2e",
  },
  fileRowFolder: {
    borderColor: "#89b4fa",
  },
  fileIcon: { fontSize: "22px", minWidth: "28px", textAlign: "center" },
  fileInfo: { flex: 1 },
  filePath: {
    color: "#89b4fa",
    fontSize: "13px",
    display: "block",
    marginBottom: "4px",
  },
  fileDesc: {
    color: "#bac2de",
    fontSize: "12px",
    margin: 0,
  },
  fileSize: {
    color: "#f9e2af",
    fontSize: "11px",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    marginTop: "2px",
  },
  stepsList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "28px",
  },
  stepRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    backgroundColor: "#1e1e2e",
    borderRadius: "10px",
    padding: "14px",
  },
  stepNum: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#cba6f7",
    color: "#1e1e2e",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "14px",
  },
  stepLabel: { color: "#cdd6f4", fontWeight: "bold", margin: "0 0 4px", fontSize: "14px" },
  stepDetail: { color: "#6c7086", fontSize: "12px", margin: 0 },
  cmdList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "28px",
  },
  cmdRow: {
    backgroundColor: "#1e1e2e",
    borderRadius: "10px",
    padding: "14px",
    border: "1px solid #313244",
  },
  cmdCode: {
    color: "#a6e3a1",
    backgroundColor: "#181825",
    borderRadius: "6px",
    padding: "8px 12px",
    margin: "0 0 8px",
    fontSize: "13px",
  },
  cmdDesc: { color: "#bac2de", fontSize: "13px", margin: 0 },
  compareGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  compareCard: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "20px",
    border: "1px solid",
  },
  compareList: {
    paddingLeft: "16px",
    margin: 0,
    fontSize: "13px",
    lineHeight: "2.2",
    color: "#bac2de",
  },
};

export default BuildInfo;
