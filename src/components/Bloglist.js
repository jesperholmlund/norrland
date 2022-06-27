import React, { useContext, useState } from "react";
import BlogListItem from "./BlogListItem";

const Bloglist = (props) => {
  const [list, setList] = useState(props.data);

  return (
    <aside>
      <ul className="menu">
        <li className="text-primary h4 menu-item"> Senaste inläggen</li>
        {list.map((l, i) => (
          <BlogListItem key={i} data={l}></BlogListItem>
        ))}
      </ul>
    </aside>
  );
};

export default Bloglist;
