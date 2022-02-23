import React, { createContext, /*useState*/ useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  /*
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    { title: 'the final empire', author: 'branon sanderson', id: 2}
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
  */

  // empty array b/c we start with no books at all.
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]); // whenever the books array changes, run this code


  return (
    <BookContext.Provider value={{ books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )

}

export default BookContextProvider