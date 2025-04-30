import React from "react";
import Home from "./home";
import Navbar from "./navigation";
import Aboutme from "./Aboutme";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme/>
    </div>
  );
};

export default App;
