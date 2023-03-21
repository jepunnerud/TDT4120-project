import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import pb from '../(lib)/pocketbase';

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
    fontSize: 40,
    marginRight: theme.spacing(1),
    cursor: 'pointer',
  },
  starEmpty: {
    color: theme.palette.grey[400],
    fontSize: 40,
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

function StarIconsWithButton(props) {
  const initialRating = 4;
  const classes = useStyles();
  const [rating, setRating] = useState(initialRating);
  const [editable, setEditable] = useState(false);
  const [bookid, setBookid] = useState(props.bookid);

  const handleClick = (value) => {
    setRating(value);
    console.log(value);
  };

  const handleRateClick = () => {
    setEditable(true);
  };

  const handleSaveClick = async () => {
    if (pb.authStore.isValid) {
      const data = {
        book_id: bookid,
        user_id: pb.authStore.model.id,
        rating: rating,
        review: props.description,
      };
      console.log(data.review);
      try {
        const fetchedRatings = await pb.collection('ratings').getFullList(200, {
          filter: `book_id = "${bookid}" && user_id = "${pb.authStore.model.id}"`,
        });

        if (fetchedRatings.length === 1) {
          await pb
            .collection('ratings')
            .update(`${fetchedRatings[0].id}`, data);
          console.log('rating have been updated');
        } else {
          await pb.collection('ratings').create(data);
          console.log('ratings have been registered');
        }
      } catch (error) {
        console.log('record could not be registered or created');
      }
    }
    setEditable(false);
  };

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
        {!editable ? (
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={handleRateClick}
          >
            Rate
          </Button>
        ) : (
          <Button
            className={classes.btnSave}
            variant="contained"
            color="primary"
            onClick={handleSaveClick}
          >
            Save
          </Button>
        )}
      </div>
    </>
  );
}

export default StarIconsWithButton;
