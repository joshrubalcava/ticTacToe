import Square from "../square/square.component";

import './board.styles.scss';

interface GameBoardState {
  topRow: string;
}

const Board = (): JSX.Element => {


  return (
    <div className='board-container'>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Board;