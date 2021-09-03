import React from "react";
import {
  TextField,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import categories from "../data/categories";
import "../App.css";

const Header = ({ word, setword, category, setCategory, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      type: lightMode ? "light" : "dark",
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
    },
  });

  const onChangehandler = (e) => {
    setCategory(e.target.value);
    setword("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="word"
            value={word}
            onChange={(e) => setword(e.target.value)}
            label="Search a word"
          />
          <TextField
            id="language"
            className="select"
            onChange={(e) => onChangehandler(e)}
            select
            label="Language"
            value={category}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
