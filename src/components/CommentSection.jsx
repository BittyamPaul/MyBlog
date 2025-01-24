import React, { useState } from "react"

function CommentSection({ postId }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }])
      setNewComment("")
    }
  }

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Write a comment..." />
        <button type="submit">Post Comment</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default CommentSection

