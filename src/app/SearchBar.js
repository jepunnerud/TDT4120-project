import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <TextField fullWidth label={<SearchIcon />} variant="standard"></TextField>
  );
};

export default SearchBar;
