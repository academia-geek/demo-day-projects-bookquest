import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Api() {
    const [books, setBooks] = useState();

    const fetchBooks = async () => {
        const options = {
            method: 'GET',
            url: 'https://books-api7.p.rapidapi.com/books/get/random/',
            headers: {
                'X-RapidAPI-Key': '8f0a844acfmshee1e895a7605156p171fe3jsn503caaa8a513',
                'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setBooks(response.data);
            console.log(books.author);
            return response.data
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };


    return (
        <div>
            <h1>Books Librearay</h1>
            <button className="btn btn-warning" onClick={() => fetchBooks()}>Books</button>
            {/* {books?.map((book, index) => (
                <div key={index}>
                    <img src={book.cover} alt='Book cover' />
                    <h1>{book.review.name}</h1> 
                </div>
            ))} */}
        </div>
    );
}
