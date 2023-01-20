
import "./App.css";

const SearchBar = ({ setSearch }) => {
  function findName(event) {
    // console.log(event.target.value);
    
    // let filteredNames = names.filter((name) =>
    //   name.name.toLowerCase().includes(event.target.value.toLowerCase())
    // );
    // console.log(filteredNames);
   
    // return setNames(filteredNames);
    setSearch(event.target.value)
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
