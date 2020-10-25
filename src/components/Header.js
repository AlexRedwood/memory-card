import React, { useState } from "react";

function Header(props) {
  return (
    <header className="header-container d-flex justify-content-around align-items-center px-5 pt-4 pb-2">
      <p className="h3">Click on each painting only once</p>
      <p className="h3">Score: {props.score}</p>
    </header>
  );
}

export default Header;
