import React from "react";
import Header from "./Header";
import Painting from "./Painting";

function MainGame(props) {
  const visible = props.visibleMainGame;

  const makeVisible = () => {
    return "maingame-container fadeIn";
  };

  const fade = visible ? makeVisible() : "fadeOut";

  return (
    <div onMouseMove={props.makeBodyOverflow} className={fade}>
      <Header text={props.text} score={props.score} />
      <Painting incrementScore={props.incrementScore} images={props.images} />
    </div>
  );
}

export default MainGame;
