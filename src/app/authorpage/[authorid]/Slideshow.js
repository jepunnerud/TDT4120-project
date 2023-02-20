import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { ArrowForward } from '@mui/icons-material';
import BookCard from '@/app/components/BookCard';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  booksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '20px 0',
  },
  bookCard: {
    margin: '0 20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px 0',
  },
});

const Slideshow = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const classes = useStyles();
  console.log(books);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage === totalPages - 1) {
      books.shift();
      books.push(obj6);
      setCurrentPage(currentPage);
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const totalPages = Math.ceil(books.length / 5);
  const booksToShow = books.slice(currentPage * 5, currentPage * 5 + 5);

  return (
    <div className={classes.root}>
      <div className={classes.booksContainer}>
        <IconButton disabled={currentPage === 0} onClick={handlePrevClick}>
          <ArrowBack />
        </IconButton>
        {booksToShow.map((book) => (
          <div key={book.id} className={classes.bookCard}>
            <BookCard
              title={book.title}
              rating={book.rating}
              imgPath={`http://127.0.0.1:8090/api/files/books/${book.id}/${book.image}`}
            />
          </div>
        ))}
        <IconButton
          disabled={currentPage === totalPages - 1}
          onClick={handleNextClick}
        >
          <ArrowForward />
        </IconButton>
      </div>
    </div>
  );
};

export default Slideshow;
