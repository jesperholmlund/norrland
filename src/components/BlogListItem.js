import React, { useContext, useState } from "react";
import { Context } from "./Context";

const BlogListItem = (props) => {
  const [context, setContext] = useContext(Context);
  const handleChange = () => {
    setContext(props.data);
  };
  return (
    <li onClick={handleChange} className="menu-item">
      <a>{props.data.title}</a>
    </li>
  );
};

export default BlogListItem;
