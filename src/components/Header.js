import React from "react";

function Header(props) {
  return (
    <header className="header-container d-flex px-5 pt-4 pb-2">
      <p className="h3">{props.text}</p>
      <div className="score px-4 py-2 rounded d-flex justify-content-center align-items-center">
        <p className="h4">Score: {props.score}</p>
      </div>
    </header>
  );
}

export default Header;
