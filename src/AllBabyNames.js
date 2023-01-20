

import "./App.css";

const AllBabyNames = ({ names,search }) => {
  names.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="Names" >
      {names.filter((item)=>{
        return search.toLowerCase() ==="" ? item : item.name.toLowerCase().includes(search)
      }).map((name) => {
        if (name.sex === "m")
          return (
            <span className="NameSpan Male" key={name.id} >
              {name.name}
            </span>
          );
        else if (name.sex === "f")
          return (
            <span className="NameSpan Female" key={name.id}>
              {name.name}
            </span>
          );
        else return "Name not found";
      })}
    </div>
  );
};

export default AllBabyNames;
