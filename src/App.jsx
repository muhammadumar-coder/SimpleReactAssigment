import React from "react";
import About from "./Pages/About";
import HomePage from "./Pages/Home";
import Contact from "./Pages/contact";

import "./App.css";

function App() {
  const pages = prompt("Enter Your Pages").toLowerCase()
    if (pages === "about") {
    return <About />;
  } else if (pages === "home") {
    return <HomePage />;
  } else if (pages === "contact") {
    return <Contact />;
  } else {
    alert("invlide Pages");
  }
}

export default App;
