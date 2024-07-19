import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import NavBar from '../components/NavBar';
import axios from 'axios';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredBooks = selectedCategory === 'All' ? books : books.filter(book => book.category === selectedCategory);

  return (
    <div>
      <NavBar/>
      <br/>
      <div className='flex flex-row '>
      <div className='basis-1/8 mx-2'>
        <div>
          <div className='font-bold'>Categories</div>
          <div><button onClick={() => handleFilter('All')}>All</button></div>
          {[...new Set(books.map(book => book.category))].map((category, index) => (
            <div key={index}><button onClick={() => handleFilter(category)}>{category}</button></div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 mx-3 basis-7/8">
        {filteredBooks.map(book => <BookCard key={book._id} book={book} />)}
      </div>
    </div>
    </div>
    
  );
}

export default HomePage;
