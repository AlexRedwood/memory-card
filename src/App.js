import React, { useState } from "react";

import style from "./style/style.scss";
import Blockquote from "./components/Blockquote";
import MainGame from "./components/MainGame";

function App() {
  const [visibleBlockquote, setVisibleBlockquote] = useState(false);
  const [visibleMainGame, setVisibleMainGame] = useState(false);

  const hideBlockquote = () => {
    setVisibleBlockquote(() => false);
  };

  const showMainGame = () => {
    setVisibleMainGame(() => true);
  };

  return (
    <div className="App">
      <Blockquote
        hideBlockquote={hideBlockquote}
        visibleBlockquote={visibleBlockquote}
      />
      <MainGame />
    </div>
  );
}

export default App;
