import React from "react";
//import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from "@material-ui/icons/Search";
import './search.scss'

const Search = () => {
  return (
    <div className="search-box">
      <Paper component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', flexDirection:'row',width: 400 }}>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
        {/* <Input placeholder="Search" style={{width: 600}}/> */}
      </Paper>
    </div>
  );
};

export default Search;
