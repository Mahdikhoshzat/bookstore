import { useState, useEffect } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import AxiosInstance from "../../custom/axios/axiosInstance";

const ContactList = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        const response = await AxiosInstance.get("/books");
        const fetchedBooks = response?.data
        setBooks(fetchedBooks)
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books?.map((book:any) => (
          <BookItem key={book?.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;