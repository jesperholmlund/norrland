import logo from "./logo.svg";
import "./App.css";
import "spectre.css";
import Blogpost from "./components/Blogpost";
import Bloglist from "./components/Bloglist";
import { useState, React } from "react";
import { Context } from "./components/Context";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {
  const [context, setContext] = useState({
    title: "Välkommen",
    content: "lorem ipsum",
  });
  const posts = [
    { title: "Kalvträskskidan", content: "lorem ipsum" },
    { title: "Lortsverige", content: "lorem lorem" },
    { title: "Drängsmark", content: "lorem lorem" },
  ];
  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
        <Nav></Nav>
        <main>
          <Bloglist data={posts}></Bloglist>
          <Blogpost></Blogpost>
        </main>
        <Search data={posts}></Search>
      </Context.Provider>
    </div>
  );
}

export default App;
