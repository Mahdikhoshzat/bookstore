import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  AxiosInstance  from "../../custom/axios/axiosInstance";
import MyFakeData from "./myFakeData.json"
import { Box } from "@mui/material";
import MyImage from "../../assets/img.jfif"

type MyParams = {
  id: string;
 };

const BookDetails = () => {
  const { id } = useParams<MyParams>();
  const [book, setBook] = useState<any>({});

  useEffect(() => {
    (async () => {
        try {
            // const response = await AxiosInstance.get(
            //   `books/${id}`
            // );
            // const fetchedBook = response.data;
            // setBook(fetchedBook);
            if (id){
              const fetchedBook = MyFakeData[+id - 1]
              setBook(fetchedBook)
            }
          } catch (error) {
            console.error("Error fetching book details:", error);
          }
    })();
  }, []);

  return (
    <div>
      <h2>Book Details</h2>
      {book ? (
        <Box>
          <Box>
            <Box sx={{height: "250px", width: "350px"}} component='img' src={MyImage} alt="book photo" />
          </Box>
          <Box>
            <Box>
              <Box>{book.name}</Box>
              <Box>My Icon</Box>
            </Box>
            <Box>{book.summary}</Box>
          </Box>
          {/* <p>
            Name: {book.name} {book.summary}
          </p>
          <p>Phone: {book.photo}</p>
          <p>Category: {book.category}</p> */}
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails