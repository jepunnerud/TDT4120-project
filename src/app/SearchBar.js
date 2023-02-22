import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getBooksAndAuthors } from './(lib)/pocketbase';
import Fuse from 'fuse.js';
import SearchView from './SearchView';

const SearchBar = () => {
  const searchOptions = {
    includeScore: false,
    keys: ['title', 'name'],
  };
  let result;
  const [menuItems, setMenuItems] = useState([]);
  const [search, setSearch] = useState('');
  let col;
  let fuse;
  Promise.resolve(getBooksAndAuthors().then((value) => (col = value))).then(
    () => {
      fuse = new Fuse(col, searchOptions);
    }
  );

  return (
    <>
      <TextField
        autoComplete="off"
        fullWidth
        label={<SearchIcon />}
        variant="standard"
        onKeyUp={(event) => {
          try {
            setSearch(event.target.value);
            result = fuse.search(search);
            console.log(result);
            setMenuItems(result);
          } catch (error) {}
        }}
      />
      <SearchView menuItems={menuItems}></SearchView>
    </>
  );
};

export default SearchBar;
