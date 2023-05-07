import React, { useEffect, useState } from "react";
import './App.css';
import Card from "./components/Card";
import Carousel from "./components/Carousel";




function App() {
  return (
    <div className="App">
      <h1>𝙏𝙀𝘾𝙃𝙈𝘼𝙍𝙏</h1>
      <Carousel />
      <Card />
    </div>
  );
}

export default App;
