import React from "react";

function Blockquote(props) {
  const visible = props.visibleBlockquote;

  const fade = visible ? "fadeIn" : "fadeOut";

  return (
    <div
      onClick={props.goToMainGame}
      className={
        fade +
        " " +
        "blockquote-container d-flex justify-content-center align-items-center"
      }
    >
      <div className="dark-transparent d-flex justify-content-center align-items-center">
        <blockquote className="blockquote text-right">
          <h1 className="display-4">The Creation of Adam</h1>
          <footer className="blockquote-footer">
            <cite title="Source Title">Michelangelo</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Blockquote;
