import React, { useState } from 'react';
import './App.css';
import AllBabyNames from './AllBabyNames';
import SearchBar from './SearchBar';
import AllNames from "./babyNamesData.json"
import Favourites from './Favourites';

function App() {
  //const [names, setNames] = useState(AllNames)
  const [search, setSearch] = useState("")
  const [favNames, setFavNames] = useState("")
  return (
    <div className="App">
      <SearchBar
        
        setSearch={setSearch}
      />
      <Favourites />
      <AllBabyNames
        names={AllNames}        
        search={search}        
      />
    </div>
  );
}

export default App;
