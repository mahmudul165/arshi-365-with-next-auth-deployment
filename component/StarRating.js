import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function StarRating() {
  const [rating, setRating] = useState(0); // initial rating value
  // Catch Rating value
  const handleRating = ({ number }) => {
    setRating(number);
    // other logic
  };

  return (
    <div className="w-25 py-3">
      <Rating
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
      />
    </div>
  );
}

export default StarRating;
