import { useState, useEffect } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import AxiosInstance from "../../custom/axios/axiosInstance";

const ContactList = () => {
  const [books, setBooks] = useState([]);
  const [bestSell, setBestSell] = useState([]);
  const [history, setHistory] = useState([]);
  const [classic, setClassic] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        const response = await AxiosInstance.get("/books");
        const fetchedBooks = response?.data
        setBooks(fetchedBooks)
        let bestSellArr: any
        let historyArr: any
        let classicArr: any
        books.forEach((element:any) => {
          if(element.category === 'bestSell'){
            bestSellArr.push(element)
          }
          else if(element.category === 'history'){
            historyArr.push(element)
          }
          else if(element.category === 'classic'){
            classicArr.push(element)
          }
        });
        setBestSell(bestSellArr)
        setHistory(historyArr)
        setClassic(classicArr)
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <div>
      <h3>Best seller</h3>
      <ul>
        {bestSell?.map((book:any) => (
          <BookItem key={book?.id} book={book} />
        ))}
      </ul>
      </div>
      <div>
      <h3>History</h3>
      <ul>
        {history?.map((book:any) => (
          <BookItem key={book?.id} book={book} />
        ))}
      </ul>
      </div>
      <div>
      <h3>Classic</h3>
      <ul>
        {classic?.map((book:any) => (
          <BookItem key={book?.id} book={book} />
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ContactList;