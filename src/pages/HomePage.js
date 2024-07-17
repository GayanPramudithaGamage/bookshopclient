import React from 'react'
import BookCard from '../components/BookCard'

function HomePage() {
  return (
    <div class='p-5'>
        <div class="grid grid-cols-1 md:grid-cols-6">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </div>
    </div>

  )
}

export default HomePage