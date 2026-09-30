import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import './ThemeApp.css';

const Header = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <header className={`header ${state.theme}`}>
      <h1>Context API & useReducer</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span>Current Theme: <strong>{state.theme.toUpperCase()}</strong></span>
        <button 
          className="theme-toggle-btn"
          onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        >
          Toggle to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </header>
  );
};

const MainContent = () => {
  const { state } = useContext(ThemeContext);
  
  return (
    <main className={`main-content ${state.theme}`}>
      <h2>Welcome to the Theme App</h2>
      <p>
        This application demonstrates how to manage global state using React's 
        <code> Context API</code> combined with the <code>useReducer</code> hook. 
        Click the button in the header to see the theme change dynamically across components!
      </p>
    </main>
  );
};

// Main App Component that wraps everything with the Provider
const ThemeApp = () => {
  return (
    <ThemeProvider>
      <div className="theme-app-container">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
};

export default ThemeApp;
