import React, { useContext, useState } from "react";
import BlogListItem from "./BlogListItem";

const Bloglist = (props) => {
  const [list, setList] = useState(props.data);

  return (
    <aside>
      <ul className="menu">
        <li style={{background: "#ff5e57"}} className="text-light h5 menu-item"> Senaste inläggen</li>
        {list.map((l, i) => (
          <BlogListItem key={i} data={l}></BlogListItem>
        ))}
      </ul>
    </aside>
  );
};

export default Bloglist;
