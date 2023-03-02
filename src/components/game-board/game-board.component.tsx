import React from "react";
import PlayerInput from "../player-input/player-input.component";
import Board from "../board/board.component";

const GameBoard = () => {
  return (
    <div>
      <PlayerInput />
      <Board />
    </div>
  )
}

export default GameBoard;