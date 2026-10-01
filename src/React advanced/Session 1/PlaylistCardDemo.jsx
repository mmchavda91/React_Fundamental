import React from 'react';
import PlaylistCard from './PlaylistCard';
import './PlaylistCard.css';

/**
 * Demo Component for React Advanced - Q1
 * Renders three PlaylistCard components passing different songName & artist props.
 */
const PlaylistCardDemo = () => {
  return (
    <div className="playlist-demo-container">
      <header className="demo-header">
        <span className="badge">React Advanced - Q1</span>
        <h1>🎵 Music Playlist</h1>
        <p>Demonstrating prop passing with three <code>PlaylistCard</code> components</p>
      </header>

      <div className="playlist-grid">
        {/* Render 1st PlaylistCard */}
        <PlaylistCard
          songName="Blinding Lights"
          artist="The Weeknd"
          duration="3:20"
          genre="Synthwave"
          coverImage="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80"
        />

        {/* Render 2nd PlaylistCard */}
        <PlaylistCard
          songName="Kesariya"
          artist="Arijit Singh"
          duration="4:28"
          genre="Bollywood"
          coverImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80"
        />

        {/* Render 3rd PlaylistCard */}
        <PlaylistCard
          songName="Bohemian Rhapsody"
          artist="Queen"
          duration="5:55"
          genre="Classic Rock"
          coverImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80"
        />
      </div>
    </div>
  );
};

export default PlaylistCardDemo;
