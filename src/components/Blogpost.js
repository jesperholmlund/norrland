import React from "react";
import { Context } from "./Context";
import { useState, useContext } from "react";
import { FcComments } from "react-icons/fc";

const Blogpost = () => {
  const [context, setContext] = useContext(Context);
  return (
    <article className="card" style={{marginLeft: "18px", boxShadow: "11px 10px 2px 0px rgba(48, 55, 66, .3"}}>
      <div className="card-header">
        <div className="card-title">
          {" "}
          <h1>{context.title}</h1>
        </div>
        <div className="divider"></div>
      </div>
      <div className="card-body">
        <h5>{context.content}</h5>
      </div>
      <div className="card-footer">
        <div className="divider"><FcComments></FcComments> Comments</div>
      </div>
    </article>
  );
};

export default Blogpost;
