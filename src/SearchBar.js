import React from "react";
import "./App.css";
import Data from "./babyNamesData.json";
import Names from "./Names";

const SearchBar = () => {
  function findName(event) {
    console.log(event.target.value);
    
      console.log(Data);
    
    return Data.filter((name) =>
      name.name.includes(event.target.value.toLowerCase())
    );
  }
  return (
    <div className="SearchBar">
      <input
        type={"text"}
        placeholder="Type in the name"
        onChange={findName}
      ></input>
    </div>
  );
};

export default SearchBar;
