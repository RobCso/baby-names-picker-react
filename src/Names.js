import React from "react";
import Data from "./babyNamesData.json";
import "./App.css";

const Names = () => {
  Data.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="Names">
      {Data.map((name) => {
        if (name.sex === "m")
          return (
            <span className="NameSpan Male" key={name.id}>
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

export default Names;
