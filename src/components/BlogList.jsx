import React, { useState } from "react"
import BlogPost from "./BlogPost"

function BlogList() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Blog Post", content: "This is the content of the first blog post.", likes: 0, rating: 0 },
    { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post.", likes: 0, rating: 0 },
  ])

  const handleLike = (postId) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  const handleRating = (postId, rating) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, rating } : post)))
  }

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} onLike={handleLike} onRate={handleRating} />
      ))}
    </div>
  )
}

export default BlogList

