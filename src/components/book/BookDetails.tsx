import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  AxiosInstance  from "../../custom/axios/axiosInstance";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<any>({});



  useEffect(() => {
    (async () => {
        try {
            const response = await AxiosInstance.get(
              `books/${id}`
            );
            const fetchedBook = response.data;
            setBook(fetchedBook);
          } catch (error) {
            console.error("Error fetching book details:", error);
          }
    })();
   }, []);


  return (
    <div>
      <h2>Book Details</h2>
      {book ? (
        <div>
          <p>
            Name: {book.name} {book.summary}
          </p>
          <p>Phone: {book.photo}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails