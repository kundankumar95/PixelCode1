import React, { useState } from 'react';
import './Discuss.css';

const Discuss = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([{ content: newPost, date: new Date().toLocaleString() }, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="discuss-container">
      <h1>Discuss Section</h1>

      {/* Form to add new posts */}
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          rows="4"
        />
        <button type="submit">Post</button>
      </form>

      {/* Display all posts */}
      <div className="posts-list">
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <p>{post.content}</p>
            <small>{post.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discuss;

