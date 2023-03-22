import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

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
  },
  starEmpty: {
    color: theme.palette.grey[400],
    fontSize: 50,
    marginRight: theme.spacing(1),
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
  },
}));

function StarIcons(props) {
  const classes = useStyles();
  const [editable, setEditable] = useState(false);

  const handleClick = (value) => {
    setRating(value);
    console.log(value);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.stars}>
          {[1, 2, 3, 4, 5].map((value) => {
            const star =
              value <= props.rating ? (
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
      </div>
    </>
  );
}

export default StarIcons;
