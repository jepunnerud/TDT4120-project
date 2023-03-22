import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import pb from '@/app/(lib)/pocketbase';
import { Record } from 'pocketbase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  stars: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  star: {
    color: theme.palette.secondary.main,
    fontSize: 50,
    marginRight: theme.spacing(1),
    cursor: 'pointer',
  },
  starEmpty: {
    color: theme.palette.grey[400],
    fontSize: 50,
    marginRight: theme.spacing(1),
    cursor: 'pointer',
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
  },
  btnSave: {
    marginLeft: '13px',
  },
  btn: {
    marginLeft: '13px',
    backgroundColor: '#22b573',
  },
}));

function StarIcons(props) {
  const isAdmin = props.isAdmin;
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [editable, setEditable] = useState(false);
  const [bookid, setBookid] = useState(props.bookid);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleRateClick = () => {
    setEditable(true);
  };

  const handleSaveClick = async () => {
    try {
      await pb
        .collection('books')
        .update(`${props.bookId}`, { professionalRating: rating });
    } catch (error) {
      console.log('record could not be registered or created');
    }
    setEditable(false);
  };

  useEffect(() => {
    const getRating = async () => {
      const book = await pb.collection('books').getOne(`${props.bookId}`);
      setRating(book.professionalRating);
    };
    getRating();
  }, [props.bookId]);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.stars}>
          {[1, 2, 3, 4, 5].map((value) => {
            const star =
              value <= rating ? (
                <StarIcon
                  className={classes.star}
                  onClick={() => {
                    if (editable) handleClick(value);
                  }}
                />
              ) : (
                <StarBorderIcon
                  className={classes.starEmpty}
                  onClick={() => {
                    if (editable) handleClick(value);
                  }}
                />
              );
            return star;
          })}
        </div>
        {isAdmin &&
          (!editable ? (
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={handleRateClick}
            >
              Change rating
            </Button>
          ) : (
            <Button
              className={classes.btnSave}
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
            >
              Save rating
            </Button>
          ))}
      </div>
    </>
  );
}

export default StarIcons;
