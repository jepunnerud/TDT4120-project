import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import './globals.css';

const SearchBarTest = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const searchList = [
    {
      book: 'Demon Copperhead, by Barbara Kingsolver',
      link: 'https://www.apple.com/',
    },
    {
      book: 'quantumfield theory in a nutshell',
      link: 'https://www.apple.com/',
    },
    { book: 'game of thrones', link: 'https://www.apple.com/' },
    {
      book: 'The Candy House, by Jennifer Egan ',
      link: 'https://www.apple.com/',
    },
    { book: 'harry potter', link: 'https://www.apple.com/' },

    {
      book: 'Demon Copperhead, by Barbara Kingsolver',
      link: 'https://www.apple.com/',
    },
    {
      book: 'quantumfield theory in a nutshell',
      link: 'https://www.apple.com/',
    },
    { book: 'game of thrones', link: 'https://www.apple.com/' },
    {
      book: 'The Candy House, by Jennifer Egan ',
      link: 'https://www.apple.com/',
    },
    { book: 'harry potter', link: 'https://www.apple.com/' },

    {
      book: 'A Visit from the Goon Squad, by Jennifer Egan',
      link: 'https://bookshop.org/p/books/the-candy-house-jennifer-egan/18569940#:~:text=Jennifer%20Egan%20is%20the%20author%20of%20six%20previous,National%20Book%20Award%20Finalist%3B%20and%20The%20Invisible%20Circus.',
    },

    {
      book: 'The Lacuna, by Barbara Kingsolver ',
      link: 'https://www.goodreads.com/author/list/3541.Barbara_Kingsolver',
    },
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value === '') {
      setSuggestions([]);
    } else {
      const filteredList = searchList.filter((item) =>
        item.book.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredList);
    }
  };

  return (
    <div>
      <TextField
        autoComplete="off"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        label={<SearchIcon />}
        variant="standard"
      ></TextField>
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((item) => (
            <li className="suggestion-item" key={item.book}>
              <a href={item.link}>{item.book}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarTest;
