'use client';
import StarIcons from '@/app/components/StarIcons';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { useRouter } from 'next/navigation';
import pb from '@/app/(lib)/pocketbase';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: '#22b573',
  },
}));

function Book({ params }) {
  const router = useRouter();
  const classes = useStyles();
  const [records, setRecords] = useState({});

  useEffect(() => {
    const foo = async () => {
      const fetchedRecords = await pb.collection('books').getOne(params.bookid);

      setRecords(fetchedRecords);
      console.log(fetchedRecords);
    };
    foo();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div></div>
        <IconButton color="primary" onClick={() => router.back()}>
          <ClearIcon style={{ fontSize: 40 }} />
        </IconButton>
      </div>
      <div id="gridContainer">
        <div className="item tall">
          <img
            src={
              records &&
              `http://127.0.0.1:8090/api/files/books/${records.id}/${records.image}`
            }
            alt="book cover"
          ></img>
        </div>
        <div className="item">
          <h1> {records && records.title}</h1>
          <p>by {records && records.autor}</p>
        </div>
        <div className="item">
          {records && <StarIcons rating={records.rating}></StarIcons>}
        </div>
        <div className="item">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Add to my library
          </Button>
        </div>
        <div className="item">
          <p>{records && records.description}</p>
        </div>
        <div className="item">
          <p className="book-text">Genre: {records && records.genre}</p>
          <p>First published: {records.length > 0 && records.releaseyear}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Book;
