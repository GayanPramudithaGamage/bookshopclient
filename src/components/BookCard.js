import React from 'react'
import RatingStars from './RatingStars';

function BookCard() {
    const rating = 4.5;
  return (
    <div>
    <button></button>
    <div class='w-52 p-2'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book" />
        <div class="columns-2">
            <RatingStars rating={rating} /> 
            <p class="text-right font-medium">LKR 1220</p>       
        </div>
        <p class="font-bold">The Lean Startup</p>
        <p class="font-thin text-sm">Eric Ries</p>
        <p class="w-14 my-2 text-xs text-white text-center bg-sky-500 rounded-md">Friction</p> 
    </div>
    </div>
  )
}

export default BookCard