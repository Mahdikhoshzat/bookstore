import { Link } from "react-router-dom";

type Book = {
  book: any;
 }


const BookItem = (props : Book) => {

  

  return (
    <li >
      <Link to={{ pathname: `/${props.book.id}`}}>
        {props.book.first_name} {props.book.last_name} - {props.book.photo}
      </Link>
    </li>
  );
};

export default BookItem;