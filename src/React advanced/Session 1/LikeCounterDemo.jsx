import React from 'react';
import LikeCounter from './LikeCounter';
import './LikeCounter.css';

/**
 * Demo Component for React Advanced - Q2
 * 
 * Showcases:
 * 1. An interactive Instagram-styled Post Card with dynamic like counter and animations.
 * 2. A Minimal/Simple LikeCounter widget demonstrating useState increment functionality.
 * 3. Multiple independent LikeCounter instances in an Instagram feed layout.
 */
const LikeCounterDemo = () => {
  return (
    <div className="likecounter-demo-container">
      {/* Header */}
      <header className="demo-header">
        <span className="badge">❤️ React Advanced - Q2</span>
        <h1>Instagram LikeCounter Component</h1>
        <p>
          Managing interactive like state using the React <code>useState</code> hook with real-time UI feedback.
        </p>
      </header>

      {/* Main Showcase Section */}
      <div className="demo-sections">
        <div className="demo-showcase-grid">
          {/* Column 1: Instagram Post Card Experience */}
          <div className="showcase-column">
            <h2 className="column-title">📸 Instagram Post Card</h2>
            <p className="column-description">
              Click the heart icon or double-click the photo to like with animated heart burst.
            </p>

            <LikeCounter
              initialLikes={142}
              username="react_developer"
              location="Ahmedabad, India"
              caption="Building sleek React components with useState hooks! 💻✨ #ReactJS #WebDev #InstagramUI"
              postImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
              userAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80"
              variant="card"
            />
          </div>

          {/* Column 2: Minimal Counter & Technical Explanation */}
          <div className="showcase-column">
            <h2 className="column-title">⚡ Minimal Like Counter Widget</h2>
            <p className="column-description">
              Direct counter representation using <code>useState</code> to track and increment likes.
            </p>

            <LikeCounter
              initialLikes={0}
              variant="simple"
            />

            <h3 className="column-title" style={{ marginTop: '1.5rem', fontSize: '1.05rem' }}>
              🧠 React Concept Breakdown
            </h3>
            
            <div className="code-preview-box">
              <span className="comment">// 1. Initialize like counter state</span><br />
              <span className="keyword">const</span> [likes, setLikes] = <span className="function">useState</span>(initialLikes);<br />
              <span className="keyword">const</span> [isLiked, setIsLiked] = <span className="function">useState</span>(<span className="keyword">false</span>);<br /><br />
              
              <span className="comment">// 2. Handler function to update state</span><br />
              <span className="keyword">const</span> <span className="function">handleLikeClick</span> = () =&gt; &#123;<br />
              &nbsp;&nbsp;<span className="function">setLikes</span>((prev) =&gt; prev + 1);<br />
              &nbsp;&nbsp;<span className="function">setIsLiked</span>(<span className="keyword">true</span>);<br />
              &#125;;<br /><br />

              <span className="comment">// 3. JSX button triggering handler</span><br />
              &lt;<span className="keyword">button</span> <span className="string">onClick</span>=&#123;handleLikeClick&#125;&gt;<br />
              &nbsp;&nbsp;❤️ Likes: &#123;likes&#125;<br />
              &lt;/<span className="keyword">button</span>&gt;
            </div>
          </div>
        </div>

        {/* Section: Multiple Feed Grid */}
        <div className="multi-grid-section">
          <h2 className="column-title" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>
            📱 Multi-Post Feed (Independent States)
          </h2>
          <p className="column-description" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Each component instance independently tracks its own like count using its isolated <code>useState</code> hook.
          </p>

          <div className="multi-cards-grid">
            {/* Post 1 */}
            <LikeCounter
              initialLikes={89}
              username="design_daily"
              location="San Francisco, CA"
              caption="Clean UI / UX inspirations for modern web applications. 🎨"
              postImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
              userAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80"
              variant="card"
            />

            {/* Post 2 */}
            <LikeCounter
              initialLikes={356}
              username="wanderlust_travels"
              location="Kyoto, Japan"
              caption="Serene autumn vibes among the bamboo groves of Arashiyama 🍁⛩️"
              postImage="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80"
              userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80"
              variant="card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeCounterDemo;
