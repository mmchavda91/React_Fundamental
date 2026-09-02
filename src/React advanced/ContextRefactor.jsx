import React, { useState, useContext } from 'react';
import { UserContext, UserProvider, useUser, USERS_DATA } from './UserContext';
import './ContextRefactor.css';

/**
 * ============================================================================
 * Level 4 (Leaf Component): LikeButton
 * ============================================================================
 * BEFORE (Prop Drilling):
 *   const LikeButton = ({ user, postId, initialLikes }) => { ... }
 * 
 * AFTER (React Context Refactor):
 *   No `user` prop needed! Directly consumes `user` from UserContext via `useContext`.
 */
export const LikeButton = ({ postId, initialLikes = 24 }) => {
  // Directly consume `user` from context without prop drilling
  const { user } = useUser();

  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="refactored-like-section">
      <div className="like-button-row">
        <button
          className={`btn-context-like ${isLiked ? 'liked' : ''}`}
          onClick={handleToggleLike}
          aria-label={isLiked ? "Unlike post" : "Like post"}
        >
          {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>

        <span className="like-count-display">
          <strong>{likes}</strong> {likes === 1 ? 'like' : 'likes'}
        </span>
      </div>

      {/* Demonstrates personalized consumption of user object from Context */}
      {isLiked && user && (
        <div className="liked-by-user-banner">
          <img src={user.avatar} alt={user.name} />
          <span>
            Liked as <strong>@{user.username}</strong> ({user.badge || 'User'})
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * ============================================================================
 * Level 3: Post Component
 * ============================================================================
 * BEFORE (Prop Drilling):
 *   const Post = ({ post, user }) => {
 *     return (
 *       <div>
 *         <p>{post.caption}</p>
 *         <LikeButton user={user} />  // <-- Post was a forced middleman!
 *       </div>
 *     );
 *   };
 * 
 * AFTER (React Context Refactor):
 *   Post ONLY receives `post` data. It doesn't know or care about `user`.
 */
export const Post = ({ post }) => {
  return (
    <article className="refactored-post-card">
      <header className="post-header">
        <div className="post-author">
          <img
            src={post.authorAvatar}
            alt={post.authorName}
            className="post-author-avatar"
          />
          <span className="post-author-name">{post.authorName}</span>
        </div>
        <span className="post-category-badge">{post.category}</span>
      </header>

      <div className="post-media">
        <img
          src={post.image}
          alt={post.title}
          className="post-image"
        />
      </div>

      <div className="post-body">
        <p className="post-caption">{post.caption}</p>

        {/* 
          Notice: LikeButton is rendered WITHOUT passing `user` prop!
          It retrieves `user` directly from UserContext.
        */}
        <LikeButton postId={post.id} initialLikes={post.likes} />
      </div>
    </article>
  );
};

/**
 * ============================================================================
 * Level 2: Feed Component
 * ============================================================================
 * BEFORE (Prop Drilling):
 *   const Feed = ({ posts, user }) => {
 *     return (
 *       <div>
 *         {posts.map(p => <Post post={p} user={user} />)} // <-- Feed was a middleman!
 *       </div>
 *     );
 *   };
 * 
 * AFTER (React Context Refactor):
 *   Feed ONLY receives its relevant data (`posts`). No `user` prop passed!
 */
export const Feed = ({ posts }) => {
  return (
    <div className="feed-container">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

/**
 * Sample Posts for Feed
 */
const SAMPLE_POSTS = [
  {
    id: 101,
    authorName: "Sarah Jenkins",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
    caption: "Modern interior minimalist design trends for 2026. Living in serenity. 🌿✨",
    likes: 58
  },
  {
    id: 102,
    authorName: "David Miller",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    caption: "Exploring quantum computing paradigms with modern web dev stacks. ⚛️💻",
    likes: 124
  }
];

/**
 * ============================================================================
 * Main Showcase & Educational Demo Component
 * ============================================================================
 */
const ContextRefactorDemoContent = () => {
  const { user, usersList, switchUser } = useUser();
  const [activeTab, setActiveTab] = useState('after');

  return (
    <div className="context-demo-container">
      {/* 1. Header */}
      <header className="context-header">
        <span className="badge">🔄 React Advanced - Q3</span>
        <h1>React Context Refactor (Prop Drilling Solution)</h1>
        <p>
          Eliminating 3 levels of prop drilling (<code>App &gt; Feed &gt; Post &gt; LikeButton</code>) using <code>createContext</code> & <code>useContext</code>.
        </p>
      </header>

      {/* 2. Interactive Global User Switcher Bar */}
      <div className="user-switcher-bar">
        <div className="switcher-info">
          <img src={user.avatar} alt={user.name} className="switcher-avatar" />
          <div className="switcher-details">
            <h3>
              {user.name} <span className="user-tag">{user.badge}</span>
            </h3>
            <p>
              Current Global User in Context: <strong>@{user.username}</strong> ({user.role})
            </p>
          </div>
        </div>

        <div className="switcher-buttons">
          <span className="switcher-label">Switch Context User:</span>
          {usersList.map((u) => (
            <button
              key={u.id}
              className={`btn-user-select ${user.id === u.id ? 'active' : ''}`}
              onClick={() => switchUser(u.id)}
            >
              <img src={u.avatar} alt={u.name} />
              {u.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Architecture Comparison Section */}
      <section className="architecture-section">
        <h2 className="section-heading">🏗️ Component Tree Flow Comparison</h2>
        <p className="section-subheading">
          Compare how the user object travels through the hierarchy before and after refactoring.
        </p>

        <div className="diagram-grid">
          {/* Before: Prop Drilling */}
          <div className="diagram-card problem">
            <h3 className="diagram-card-title">❌ Before: 3-Level Prop Drilling</h3>
            <p className="diagram-card-desc">
              <code>user</code> prop passed down through <code>Feed</code> and <code>Post</code> even though neither component uses it.
            </p>

            <div className="tree-flow">
              <div className="tree-node source">
                <span className="node-name">1. App</span>
                <span className="node-role">Holds user state</span>
              </div>
              <div className="tree-arrow drilled">↓ passes prop: user={'{user}'}</div>

              <div className="tree-node drilled">
                <span className="node-name">2. Feed</span>
                <span className="node-role">Unnecessary Middleman</span>
              </div>
              <div className="tree-arrow drilled">↓ forwards prop: user={'{user}'}</div>

              <div className="tree-node drilled">
                <span className="node-name">3. Post</span>
                <span className="node-role">Unnecessary Middleman</span>
              </div>
              <div className="tree-arrow drilled">↓ forwards prop: user={'{user}'}</div>

              <div className="tree-node consumer">
                <span className="node-name">4. LikeButton</span>
                <span className="node-role">Finally uses user</span>
              </div>
            </div>
          </div>

          {/* After: React Context */}
          <div className="diagram-card solution">
            <h3 className="diagram-card-title">✅ After: React Context (createContext)</h3>
            <p className="diagram-card-desc">
              <code>UserContext.Provider</code> wraps the tree. <code>LikeButton</code> directly consumes <code>user</code> via <code>useContext</code>.
            </p>

            <div className="tree-flow">
              <div className="tree-node source">
                <span className="node-name">1. UserContext.Provider</span>
                <span className="node-role">Provides user globally</span>
              </div>
              <div className="tree-arrow direct">↓ clean tree (No user props needed!)</div>

              <div className="tree-node clean">
                <span className="node-name">2. Feed</span>
                <span className="node-role">Clean (Only posts prop)</span>
              </div>
              <div className="tree-arrow">↓</div>

              <div className="tree-node clean">
                <span className="node-name">3. Post</span>
                <span className="node-role">Clean (Only post prop)</span>
              </div>
              <div className="tree-arrow direct">↓ useContext(UserContext) direct access</div>

              <div className="tree-node consumer">
                <span className="node-name">4. LikeButton</span>
                <span className="node-role">Consumes user directly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Refactored Feed */}
      <section className="feed-showcase-section">
        <h2 className="section-heading">📱 Live Refactored Feed (Zero Prop Drilling)</h2>
        <p className="section-subheading">
          Click Like on any post below to see <code>LikeButton</code> directly access the active User from Context:
        </p>

        {/* Level 2 Feed Component */}
        <Feed posts={SAMPLE_POSTS} />
      </section>

      {/* 5. Code Comparison Tabs */}
      <section className="code-comparison-section">
        <h2 className="section-heading">💻 Code Implementation Comparison</h2>
        <div className="code-tabs-header">
          <button
            className={`tab-button ${activeTab === 'after' ? 'active' : ''}`}
            onClick={() => setActiveTab('after')}
          >
            ✅ After Refactoring (React Context)
          </button>
          <button
            className={`tab-button ${activeTab === 'before' ? 'active' : ''}`}
            onClick={() => setActiveTab('before')}
          >
            ❌ Before (Prop Drilling)
          </button>
        </div>

        {activeTab === 'after' ? (
          <div className="code-preview-box">
            <span className="comment">// 1. Create Context (UserContext.js)</span><br />
            <span className="keyword">export const</span> UserContext = <span className="function">createContext</span>(<span className="keyword">null</span>);<br /><br />

            <span className="comment">// 2. Provide at Top Level (App / Provider)</span><br />
            &lt;<span className="keyword">UserContext.Provider</span> <span className="string">value</span>=&#123;&#123; user, switchUser &#125;&#125;&gt;<br />
            &nbsp;&nbsp;&lt;<span className="keyword">Feed</span> <span className="string">posts</span>=&#123;posts&#125; /&gt; <span className="comment">// &lt;-- Zero user prop drilling!</span><br />
            &lt;/<span className="keyword">UserContext.Provider</span>&gt;<br /><br />

            <span className="comment">// 3. Intermediate Components are Clean (Feed &amp; Post)</span><br />
            <span className="keyword">const</span> <span className="function">Feed</span> = (&#123; posts &#125;) =&gt; posts.<span className="function">map</span>(p =&gt; &lt;<span className="keyword">Post</span> <span className="string">key</span>=&#123;p.id&#125; <span className="string">post</span>=&#123;p&#125; /&gt;);<br />
            <span className="keyword">const</span> <span className="function">Post</span> = (&#123; post &#125;) =&gt; &lt;<span className="keyword">LikeButton</span> <span className="string">postId</span>=&#123;post.id&#125; /&gt;;<br /><br />

            <span className="comment">// 4. Leaf Component Consumes Directly via useContext</span><br />
            <span className="keyword">const</span> <span className="function">LikeButton</span> = (&#123; postId &#125;) =&gt; &#123;<br />
            &nbsp;&nbsp;<span className="keyword">const</span> &#123; user &#125; = <span className="function">useContext</span>(UserContext);<br />
            &nbsp;&nbsp;<span className="keyword">return</span> &lt;<span className="keyword">button</span>&gt;❤️ Liked as &#123;user.name&#125;&lt;/<span className="keyword">button</span>&gt;;<br />
            &#125;;
          </div>
        ) : (
          <div className="code-preview-box">
            <span className="comment">// ❌ Prop Drilling: Every intermediary must forward the `user` prop</span><br />
            <span className="keyword">function</span> <span className="function">App</span>() &#123;<br />
            &nbsp;&nbsp;<span className="keyword">const</span> [user, setUser] = <span className="function">useState</span>(userData);<br />
            &nbsp;&nbsp;<span className="keyword">return</span> &lt;<span className="keyword">Feed</span> <span className="string">posts</span>=&#123;posts&#125; <span className="string">user</span>=&#123;user&#125; /&gt;; <span className="comment">// Level 1</span><br />
            &#125;<br /><br />

            <span className="keyword">function</span> <span className="function">Feed</span>(&#123; posts, user &#125;) &#123; <span className="comment">// Feed doesn't use user!</span><br />
            &nbsp;&nbsp;<span className="keyword">return</span> posts.<span className="function">map</span>(p =&gt; &lt;<span className="keyword">Post</span> <span className="string">post</span>=&#123;p&#125; <span className="string">user</span>=&#123;user&#125; /&gt;); <span className="comment">// Level 2</span><br />
            &#125;<br /><br />

            <span className="keyword">function</span> <span className="function">Post</span>(&#123; post, user &#125;) &#123; <span className="comment">// Post doesn't use user!</span><br />
            &nbsp;&nbsp;<span className="keyword">return</span> &lt;<span className="keyword">LikeButton</span> <span className="string">user</span>=&#123;user&#125; /&gt;; <span className="comment">// Level 3</span><br />
            &#125;<br /><br />

            <span className="keyword">function</span> <span className="function">LikeButton</span>(&#123; user &#125;) &#123;<br />
            &nbsp;&nbsp;<span className="keyword">return</span> &lt;<span className="keyword">button</span>&gt;Liked by &#123;user.name&#125;&lt;/<span className="keyword">button</span>&gt;; <span className="comment">// Level 4</span><br />
            &#125;
          </div>
        )}
      </section>
    </div>
  );
};

/**
 * Top-level wrapper for Q3 Demo
 */
export const ContextRefactorDemo = () => {
  return (
    <UserProvider>
      <ContextRefactorDemoContent />
    </UserProvider>
  );
};

export default ContextRefactorDemo;
