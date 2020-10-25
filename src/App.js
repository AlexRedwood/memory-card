import React, { useEffect, useState } from "react";

import paintings from "./images.js";
import style from "./style/style.scss";
import Blockquote from "./components/Blockquote";
import MainGame from "./components/MainGame";
import Winner from "./components/Winner";

function App() {
  const [visibleBlockquote, setVisibleBlockquote] = useState(false);
  const [visibleMainGame, setVisibleMainGame] = useState(true);
  const [score, setScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [text, setText] = useState("Click on each painting only once");
  const [images, setImages] = useState(shuffle(paintings));
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  useEffect(() => {
    if (score === 3) userWon();
  }, [score]);

  useEffect(() => {
    setImages((prevImages) => shuffle(prevImages));
  }, [score]);

  function incrementScore(event) {
    let id = event.currentTarget.id;
    let imageNumber = id.split("-")[1];

    if (!clickedIds.includes(imageNumber)) {
      userGuessedRight(imageNumber);
    } else {
      userLost();
    }
  }

  function shuffle(array) {
    let len = array.length;
    let randomIndex;
    while (len !== 0) {
      //take random index
      randomIndex = Math.floor(Math.random() * len);
      // console.log(`random index is ${randomIndex}`);
      len -= 1;
      // console.log(`Swapping index ${len} with random index ${randomIndex}`);
      //swap it with the last element
      [array[len], array[randomIndex]] = [array[randomIndex], array[len]];
    }
    return array;
  }

  function userGuessedRight(imgNumber) {
    setClickedIds((prevIds) => [...prevIds, imgNumber]);
    setScore((prevScore) => prevScore + 1);
    setText("Good job. Keep it up!");
  }

  function resetBoard() {
    setClickedIds([]);
    setScore(0);
  }
  function userWon() {
    resetBoard();
    setText("Wanna play more?");
    setShowModal(true);
  }

  function userLost() {
    resetBoard();
    setText("Pathetic. You lost.");
  }

  function goToMainGame() {
    hideBlockquote();
    showMainGame();
  }

  function hideBlockquote() {
    setVisibleBlockquote(() => false);
  }

  function showMainGame() {
    setVisibleMainGame(() => true);
  }

  // Change body overflow when MainPage appears to auto from hidden
  let bodyHasHiddenOverflow = true;
  function makeBodyOverflow() {
    const body = document.getElementsByTagName("body")[0];
    if (bodyHasHiddenOverflow) {
      body.style.overflow = "auto";
      bodyHasHiddenOverflow = false;
    }
  }

  return (
    <div className="App">
      <Blockquote
        goToMainGame={goToMainGame}
        visibleBlockquote={visibleBlockquote}
      />
      <MainGame
        images={images}
        incrementScore={incrementScore}
        makeBodyOverflow={makeBodyOverflow}
        text={text}
        score={score}
        visibleMainGame={visibleMainGame}
      />
      <Winner show={showModal} toggle={toggleModal} />
    </div>
  );
}

export default App;
