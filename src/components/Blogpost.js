import React from "react";
import { Context } from "./Context";
import { useState, useContext } from "react";

const Blogpost = () => {
  const [context, setContext] = useContext(Context);
  return (
    <article className=" card">
      <div className="card-header">
        <div className="card-title">
          {" "}
          <h3>{context.title}</h3>
        </div>
        <div className="divider"></div>
      </div>
      <div className="card-body">
        <p>{context.content}</p>
      </div>
      <div className="card-footer">
        <div className="divider"></div>
      </div>
    </article>
  );
};

export default Blogpost;
