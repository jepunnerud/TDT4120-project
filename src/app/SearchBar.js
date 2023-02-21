import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';
import { getBooksAndAuthors } from './(lib)/pocketbase';
import Fuse from 'fuse.js';

const SearchBar = () => {
  const searchOptions = {
    includeScore: false,
    keys: ['title', 'name'],
  };

  const ref = useRef(null);
  const [search, setSearch] = useState('');
  let col;
  let fuse;
  Promise.resolve(getBooksAndAuthors().then((value) => (col = value))).then(
    () => {
      fuse = new Fuse(col, searchOptions);
    }
  );
  let result;

  return (
    <TextField
      fullWidth
      label={<SearchIcon />}
      variant="standard"
      ref={ref}
      onKeyUp={(event) => {
        try {
          setSearch(event.target.value);
          result = fuse.search(search);
          console.log(result);
        } catch (error) {}
      }}
    />
  );
};

export default SearchBar;
