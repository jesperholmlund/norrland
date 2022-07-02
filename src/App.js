import logo from "./logo.svg";
import "./App.css";
import "spectre.css";
import Blogpost from "./components/Blogpost";
import Bloglist from "./components/Bloglist";
import { useState, React, useEffect } from "react";
import { Context } from "./components/Context";
import Search from "./components/Search";
import Nav from "./components/Nav";
import axios from "axios"

function App() {
  const [context, setContext] = useState({
    title: "Välkommen",
    content: "lorem ipsum",
  });
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(()=>{
    axios({method: "get",
    url: "http://localhost:2368/ghost/api/content/posts/?key=f9b20154124d74a3a3bd3c5a5c&include=tags"}).then((res)=>{
      setBlogPosts(res.data.posts)
      console.log(blogPosts)
    })
  },[])
  const posts = [
    { title: "Kalvträskskidan", content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" },
    { title: "Lortsverige", content: "lorem lorem" },
    { title: "Drängsmark", content: "lorem lorem" },
  ];
  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
        <main>
          <div>
        <Nav></Nav>
          <Bloglist data={blogPosts}></Bloglist>
          </div>
          <Blogpost></Blogpost>
        </main>
        <Search data={posts}></Search>
      </Context.Provider>
    </div>
  );
}

export default App;
