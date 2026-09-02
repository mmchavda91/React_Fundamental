import React, { useState } from 'react';
import './LikeCounter.css';

/**
 * LikeCounter Component (React Advanced - Q2)
 * 
 * Uses the `useState` hook to track and display the number of likes,
 * incrementing the count when the 'Like' button is clicked, similar to Instagram.
 * 
 * Supports:
 * - Direct button click to increment / toggle like count
 * - Double-tap / double-click on post image with heart burst animation
 * - Floating heart particle effects
 * - Modular variants: 'card' (Instagram post), 'simple' (Counter widget), and 'compact'
 */
const LikeCounter = ({
  initialLikes = 0,
  username = "react_developer",
  location = "Ahmedabad, India",
  caption = "Building sleek React components with useState hooks! 💻✨ #ReactJS #WebDev #InstagramUI",
  postImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  userAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
  variant = "card",
  onLikeChange
}) => {
  // 1. State hook to track the number of likes
  const [likes, setLikes] = useState(initialLikes);

  // 2. State hook to track if the current user has liked the post
  const [isLiked, setIsLiked] = useState(false);

  // 3. State hook for triggering center pop heart animation on double tap
  const [showPopHeart, setShowPopHeart] = useState(false);

  // 4. State hook for floating heart particle animation on like
  const [floatingHearts, setFloatingHearts] = useState([]);

  // Trigger floating heart particles
  const spawnFloatingHeart = () => {
    const id = Date.now() + Math.random();
    const randomX = (Math.random() * 80 - 40) + 'px';
    const newHeart = { id, randomX };

    setFloatingHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1200);
  };

  // Handle Like Button click (Increment count / Toggle like)
  const handleLikeClick = () => {
    if (isLiked) {
      // If already liked, unliking decreases the count
      setLikes((prevCount) => {
        const next = Math.max(0, prevCount - 1);
        if (onLikeChange) onLikeChange(next, false);
        return next;
      });
      setIsLiked(false);
    } else {
      // Increments count each time 'Like' is clicked
      setLikes((prevCount) => {
        const next = prevCount + 1;
        if (onLikeChange) onLikeChange(next, true);
        return next;
      });
      setIsLiked(true);
      spawnFloatingHeart();
    }
  };

  // Pure increment handler (always adds +1 without toggling off)
  const handlePureIncrement = () => {
    setLikes((prevCount) => {
      const next = prevCount + 1;
      if (onLikeChange) onLikeChange(next, true);
      return next;
    });
    setIsLiked(true);
    spawnFloatingHeart();
  };

  // Handle Double-Click on post image (Instagram signature feature)
  const handleMediaDoubleClick = () => {
    if (!isLiked) {
      setLikes((prevCount) => {
        const next = prevCount + 1;
        if (onLikeChange) onLikeChange(next, true);
        return next;
      });
      setIsLiked(true);
    }

    // Trigger big heart burst animation
    setShowPopHeart(true);
    spawnFloatingHeart();

    setTimeout(() => {
      setShowPopHeart(false);
    }, 900);
  };

  // Handle Reset Likes
  const handleReset = () => {
    setLikes(initialLikes);
    setIsLiked(false);
    if (onLikeChange) onLikeChange(initialLikes, false);
  };

  // Format like counter text (e.g. "1 like" vs "1,248 likes")
  const formatLikesCount = (count) => {
    return new Intl.NumberFormat('en-US').format(count);
  };

  // Render: Simple Minimal Widget Variant
  if (variant === 'simple') {
    return (
      <div className="simple-like-box">
        <div className="simple-count-display">
          <span className="simple-count-number">{formatLikesCount(likes)}</span>
          <span className="simple-count-label">{likes === 1 ? 'Total Like' : 'Total Likes'}</span>
        </div>

        <div className="simple-buttons-group">
          <button 
            className="btn-like-primary"
            onClick={handleLikeClick}
            aria-label="Like button"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="20" 
              height="20" 
              fill={isLiked ? "#ffffff" : "none"} 
              stroke="#ffffff" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {isLiked ? 'Liked ❤️' : 'Like'}
          </button>

          <button 
            className="btn-secondary"
            onClick={handlePureIncrement}
            title="Always increments count by +1"
          >
            +1 Like
          </button>

          <button 
            className="btn-secondary"
            onClick={handleReset}
            title="Reset like counter to initial value"
          >
            Reset
          </button>
        </div>

        {/* Floating Heart Particles */}
        {floatingHearts.map((heart) => (
          <span 
            key={heart.id} 
            className="floating-heart" 
            style={{ '--random-x': heart.randomX }}
          >
            ❤️
          </span>
        ))}
      </div>
    );
  }

  // Render: Full Instagram Post Card Variant (Default)
  return (
    <article className="ig-card">
      {/* 1. Header: Avatar, Username, Location & Options */}
      <header className="ig-card-header">
        <div className="ig-user-info">
          <div className="ig-avatar-wrapper">
            <img 
              src={userAvatar} 
              alt={username} 
              className="ig-avatar" 
            />
          </div>
          <div className="ig-user-meta">
            <div className="ig-username-row">
              <span className="ig-username">{username}</span>
              <span className="ig-verified-badge" title="Verified Creator">✓</span>
            </div>
            {location && <span className="ig-location">{location}</span>}
          </div>
        </div>

        <button className="ig-more-btn" aria-label="More options">•••</button>
      </header>

      {/* 2. Media Area: Post Image with Double-Tap to Like */}
      <div 
        className="ig-media-container" 
        onDoubleClick={handleMediaDoubleClick}
        title="Double-click to Like"
      >
        <img 
          src={postImage} 
          alt="Instagram Post" 
          className="ig-post-image" 
        />

        {/* Big Heart Burst on Double Tap */}
        {showPopHeart && (
          <svg 
            className="ig-pop-heart" 
            viewBox="0 0 24 24" 
            fill="#ff3040" 
            stroke="#ff3040"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        )}

        {/* Floating Heart Particles */}
        {floatingHearts.map((heart) => (
          <span 
            key={heart.id} 
            className="floating-heart" 
            style={{ '--random-x': heart.randomX }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* 3. Card Body: Action Buttons, Like Count & Caption */}
      <div className="ig-card-body">
        {/* Action Buttons Row */}
        <div className="ig-actions-row">
          <div className="ig-actions-left">
            {/* Instagram Heart Like Button */}
            <button 
              className={`ig-action-btn ig-like-btn ${isLiked ? 'liked' : ''}`}
              onClick={handleLikeClick}
              aria-label={isLiked ? "Unlike post" : "Like post"}
            >
              <svg 
                className="ig-like-icon"
                viewBox="0 0 24 24" 
                fill={isLiked ? "#ff3040" : "none"} 
                stroke={isLiked ? "#ff3040" : "currentColor"} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* Comment Button */}
            <button className="ig-action-btn" aria-label="Comment">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </button>

            {/* Share / Direct Message Button */}
            <button className="ig-action-btn" aria-label="Share">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>

          {/* Bookmark Button */}
          <button className="ig-action-btn" aria-label="Save post">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        {/* Dynamic Likes Counter Display */}
        <div className="ig-likes-counter">
          <span className="likes-number">{formatLikesCount(likes)}</span>
          <span>{likes === 1 ? 'like' : 'likes'}</span>
          <span className="ig-double-tap-tip">(Double-tap photo to like)</span>
        </div>

        {/* Caption */}
        {caption && (
          <div className="ig-caption-block">
            <span className="ig-caption-author">{username}</span>
            <span>{caption}</span>
          </div>
        )}

        {/* Post Timestamp */}
        <div className="ig-time-stamp">
          2 hours ago • React State Hook Demo
        </div>
      </div>
    </article>
  );
};

export default LikeCounter;
