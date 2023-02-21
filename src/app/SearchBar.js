import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getBooksAndAuthors } from './(lib)/pocketbase';
import Fuse from 'fuse.js';
import VerticalMenu from './VerticalMenu';

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
      <VerticalMenu menuItems={menuItems}></VerticalMenu>
    </>
  );
};

export default SearchBar;
