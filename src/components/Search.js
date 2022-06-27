import React from "react";
import { useState } from "react";

const Search = (props) => {
  const [searchList, setSearchList] = useState([]);
  const handleChange = (e) => {
    const query = e.target.value;
    const filteredArray = props.data.filter(
      (f) => f.title.includes(query) || f.content.includes(query)
    );
    setSearchList(filteredArray);
  };
  return (
    <div className="modal" id="modal-id">
      <div className="modal-container">
        <div className="modal-header">
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="search"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="modal-body">
          {searchList.map((s) => (
            <p>{s.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
