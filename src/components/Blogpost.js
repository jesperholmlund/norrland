import React from "react";
import { Context } from "./Context";
import { useState, useContext } from "react";
import { FcComments } from "react-icons/fc";

const Blogpost = () => {
  const [context, setContext] = useContext(Context);
  return (
    <article className="card" style={{marginLeft: "18px"}}>
      <div className="card-header">
        <div className="card-title">
          {" "}
          <h1>{context.title}</h1>
        </div>
        <div className="divider"></div>
      </div>
      <div className="card-body">
        <div dangerouslySetInnerHTML={{ __html: context.html }}></div>
      </div>
      <div className="card-footer">       
        <div className="divider">
        {context.tags === undefined ? <></> :<>{context.tags.map((t)=>(<span className="chip">{t.name}</span>))}</> }
         <br></br> <FcComments></FcComments> Comments</div>
      </div>
    </article>
  );
};

export default Blogpost;
