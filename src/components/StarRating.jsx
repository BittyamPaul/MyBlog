import React from "react"

function StarRating({ rating, onRate }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onRate(star)}
          style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default StarRating

