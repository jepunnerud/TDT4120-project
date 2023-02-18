'use client';
import img from './download.jpeg';
import StarIcons from './StarIcons';
//import pb from '../../(lib)/pocketbase';
import { useEffect, useState } from 'react';

import PocketBase from 'pocketbase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';

import { useRouter } from 'next/navigation';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: '#22b573',
  },
}));

const pb = new PocketBase('http://127.0.0.1:8090');

function Book({ params }) {
  const router = useRouter();

  const classes = useStyles();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    const foo = async () => {
      const authData = await pb.admins.authWithPassword(
        'jepunnerud@gmail.com',
        'heihei1234'
      );
      const fetchedRecords = await pb
        .collection('books')
        .getFullList(200 /* batch size */, {
          sort: '-created',
        });
      setRecords(fetchedRecords);
      console.log(fetchedRecords);
      console.log(fetchedRecords[0].title);
    };
    foo();
  }, []);

  // <h1 id="title">Book page {params.bookid}</h1>
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
          <img src={img.src} alt="book cover"></img>
        </div>
        <div className="item">
          <h1> {records.length > 0 && records[0].title}</h1>
          <p>by {records.length > 0 && records[0].autor}</p>
        </div>
        <div className="item">
          <StarIcons></StarIcons>
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
          <p>{records.length > 0 && records[0].description}</p>
        </div>
        <div className="item">
          <p className="book-text">
            Genre: {records.length > 0 && records[0].genre}
          </p>
          <p>First published: {records.length > 0 && records[0].releaseyear}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Book;
