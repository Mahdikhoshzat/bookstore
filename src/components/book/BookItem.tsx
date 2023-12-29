import { Link } from "react-router-dom";

type Book = {
  book: any;
 }


const BookItem = (props : Book) => {

  {console.log("hello")}

  return (
    <li >
      <Link to={{ pathname: `/books/${props.book.id}`}}>
        {props.book.name} {props.book.summary} - {props.book.category}
      </Link>
    </li>
  );
};

export default BookItem;