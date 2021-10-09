import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

export default function MyRating({ rate }) {
  const [rating, setRating] = useState(rate);

  useEffect(() => {
    setRating(rate);
  }, [rate]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      <Rating onClick={handleRating} ratingValue={rating} />
    </div>
  );
}
