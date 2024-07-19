import React from 'react';
import RatingStars from './RatingStars';

function BookCard({ book }) {
  return (
    <div className='w-52 p-2'>
      <img className='h-64' src={book.image} alt="book" />
      <div className="columns-2">
        <RatingStars rating={book.rating} />
        <p className="text-right font-medium">{book.price}</p>
      </div>
      <p className="font-bold">{book.title}</p>
      <p className="font-thin text-sm">{book.author}</p>
      <p className="w-24 my-2 text-xs text-white text-center bg-sky-500 rounded-md">{book.category}</p>
    </div>
  );
}

export default BookCard;
