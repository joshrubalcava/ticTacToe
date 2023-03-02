import React from 'react';

import GameBoard from "./components/game-board/game-board.component";

import {PlayersProvider} from "./context/players/players.context";

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <PlayersProvider>
        <GameBoard />
      </PlayersProvider>
    </div>
  );
}

export default App;
