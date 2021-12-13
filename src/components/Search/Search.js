import React from "react";
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from "@material-ui/icons/Search";
import './search.scss'

const Search = () => {
  return (
    <div className="search-box">
      <Paper component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', flexDirection:'row',width: 400 }}
      className="search-box__form">
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Input
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        disableUnderline ={true}
        style={{width: "100%"}}
      />
      </Paper>
    </div>
  );
};

export default Search;
