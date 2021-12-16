import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Highlighter from "react-highlight-words";
import "./search.scss";

const Search = () => {
  const handleSearch = (e) => {
    <Highlighter
      highlightClassName="YourHighlightClass"
      searchWords={e.target.value}
      autoEscape={true}
      textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
    />;

    // let textToSearch = document.getElementById("text-to-search"),
    //   value;
    // let searchText = document.getElementById("search-text");
  };
  return (
    <div className="search-box" id="search-text">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          width: 400,
        }}
        className="search-box__form"
      >
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <TextField
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          InputProps={{ disableUnderline: true }}
          style={{ width: "100%", paddingTop: 7 }}
          onInput={(e) => handleSearch(e)}
        />
      </Paper>
    </div>
  );
};

export default Search;
