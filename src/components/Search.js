import React from "react";
import { useState } from "react";

const Search = (props) => {
  const [searchList, setSearchList] = useState([]);
  const handleChange = (e) => {
    const query = e.target.value;
    const filteredArray = props.data.filter(
      (f) => f.title.includes(query) || f.html.includes(query)
    );
    setSearchList(filteredArray);
  };
  const [visibility, setVisibility] = useState(props.show)
  return (
    <div onclick={props.visibility} className={"modal modal-bg " + (props.show === true ? "active" : "notactive")} id="modal-id">
      <div style={{minHeight: "600px"}} className="modal-container">
        <div className="modal-header">
          <div className="modal-title h3">Sök artiklar</div>
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
            <div className="tile">
              <div className="title-contet">
                <p className="tile-title h5">{s.title}</p>
                <p className="tile-subtitle text-gray">{s.excerpt}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
