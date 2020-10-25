import React, { useState } from "react";

function Painting(props) {
  return (
    <div className="painting-container container-fluid mx-auto">
      <div className="row">
        {props.images.map((image) => (
          <div
            key={image.id}
            className="paint-wrapper d-flex flex-column justify-content-around col-sm-4 col-md-3 col-lg-2 p-3"
          >
            <div
              id={"image-" + image.id}
              onClick={props.incrementScore}
              className="paint-title d-flex flex-column justify-content-between p-3 rounded"
            >
              <img className="painting img-fluid mt-3" src={image.src}></img>
              <div className="title h6 mt-3 mb-3">{image.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Painting;
