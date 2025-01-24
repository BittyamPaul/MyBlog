import React from "react"
import CommentSection from "./CommentSection"
import StarRating from "./StarRating"
import LikeButton from "./LikeButton"

function BlogPost({ post, onLike, onRate }) {
  return (
    <article className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-actions">
        <LikeButton likes={post.likes} onLike={() => onLike(post.id)} />
        <StarRating rating={post.rating} onRate={(rating) => onRate(post.id, rating)} />
      </div>
      <CommentSection postId={post.id} />
    </article>
  )
}

export default BlogPost

