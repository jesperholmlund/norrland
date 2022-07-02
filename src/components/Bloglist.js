import React, { useContext, useState } from "react";
import BlogListItem from "./BlogListItem";

const Bloglist = (props) => {
  const [list, setList] = useState(props.data);
  return (
    <aside>
      <ul className="menu">
        <li className=" h5 menu-item"> Senaste inläggen</li>
        {props.data.map((l, i) => (
          <BlogListItem key={i} data={l}></BlogListItem>
        ))}
      </ul>
    </aside>
  );
};

export default Bloglist;
