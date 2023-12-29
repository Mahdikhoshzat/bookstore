import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import myImage from '../../assets/img.jfif'

type Book = {
  book: any;
  index: any
 }


const BookItem = (props : Book) => {

  {console.log("hello")}
  
  return (
      <Grid item xs={3} key={props.index}>
      <Link to={{ pathname: `/books/${props.book.id}`}} style={{ textDecoration: 'none' }}>
       <Card>
         <CardMedia
           component="img"
           height="140"
           image={myImage}
           alt={props.book.name}
         />
         <CardContent>
           <Box sx={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
           <Typography gutterBottom variant="h5" component="div" sx={{textDecoration: 'none'}}>
             {props.book.name}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {props.book.summary.substring(0, 5)}
           </Typography>
           </Box>
         </CardContent>
       </Card>
      </Link>
     </Grid>
  );
};

export default BookItem;