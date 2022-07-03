import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "./Context";
import { FcAbout } from "react-icons/fc";

const About = (props) =>{
    const [context, setContext] = useContext(Context);
    const handleChange = () => {
     setContext(about);
    };
    const [about, setAbout] = useState({
        title: "",
        html: "",
    })
    useEffect(()=>{
        axios({
            method: "get",
            url: "http://localhost:2368/ghost/api/content/pages/62bdbcef7c98c21bb167a017/?key=f9b20154124d74a3a3bd3c5a5c&include=tags"
        }).then((res)=>{
            setAbout({
                title: res.data.pages[0].title, 
                html: res.data.pages[0].html
            })
        })
    },[])
    return <li onClick={handleChange} className="menu-item">
          <a><FcAbout></FcAbout>Om sidan</a>
        </li>
}

export default About;