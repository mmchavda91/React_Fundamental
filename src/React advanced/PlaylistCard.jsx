import React from 'react';
import './PlaylistCard.css';

/**
 * PlaylistCard Component
 * 
 * Reusable component to render a music playlist card.
 * Accepts `songName` (or `song`/`title`) and `artist` (or `artistName`) as props.
 */
const PlaylistCard = ({ songName, artist, song, title, artistName, coverImage, duration, genre }) => {
  // Support prop naming flexibilities while ensuring core songName & artist props work directly
  const displaySong = songName || song || title || "Untitled Song";
  const displayArtist = artist || artistName || "Unknown Artist";

  return (
    <div className="playlist-card">
      <div className="card-media">
        {coverImage ? (
          <img src={coverImage} alt={displaySong} className="card-cover" />
        ) : (
          <div className="card-avatar">
            <span className="music-icon">🎵</span>
          </div>
        )}
        <button className="play-button" aria-label={`Play ${displaySong}`}>
          ▶
        </button>
      </div>

      <div className="card-content">
        <div className="card-info">
          <h3 className="song-title">{displaySong}</h3>
          <p className="artist-name">{displayArtist}</p>
        </div>
        
        {(genre || duration) && (
          <div className="card-meta">
            {genre && <span className="genre-badge">{genre}</span>}
            {duration && <span className="duration-text">{duration}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
