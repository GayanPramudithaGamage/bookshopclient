import React from 'react';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating">
      {Array(fullStars).fill(<span className="star">★</span>)}
      {halfStar && <span className="star half">★</span>}
      {Array(emptyStars).fill(<span className="star">☆</span>)}
    </div>
  );
};

export default RatingStars;