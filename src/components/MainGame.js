import React, { useState } from "react";
import Header from "./Header";
import Painting from "./Painting";
import paintings from "../images.js";

function MainGame(props) {
  const [score, setScore] = useState("10");

  return (
    <div className="maingame-container">
      <Header score={score} />
      <Painting images={paintings} />
    </div>
  );
}

export default MainGame;
