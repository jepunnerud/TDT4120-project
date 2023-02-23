import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';

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
  const initialRating = 4;
  const classes = useStyles();
  const [rating, setRating] = useState(initialRating);
  const [editable, setEditable] = useState(false);

  const handleClick = (value) => {
    setRating(value);
    console.log(value);
  };

  const handleRateClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
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

export default StarIcons;
