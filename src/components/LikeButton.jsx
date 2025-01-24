import React from "react"

function LikeButton({ likes, onLike }) {
  return (
    <button onClick={onLike} className="like-button">
      👍 {likes}
    </button>
  )
}

export default LikeButton

