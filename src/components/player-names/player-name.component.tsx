import { useContext } from "react";
import {PlayersContext, PlayersContextType} from "../../context/players/players.context";

// interface PlayersStatus {
//   playerOne: {
//     playerOneName: string;
//     playerOneNameSubmitted: boolean;
//     playerOneTurn: boolean;
//   };
//
//   playerTwo: {
//     playerTwoName: string;
//     playerTwoNameSubmitted: boolean;
//     playerTwoTurn: boolean;
//   };
//
//   playersSubmitted?: boolean;
// }

const PlayerName = (props: PlayersContextType ): JSX.Element => {
  const {playerOne, playerOneTurn} = props;
  const {playerTwo} = props;


  return (
    <div>
      <div className='player-names-container'>
        <h3>{`${playerOne} as X`}</h3>
        <h3>{`${playerTwo} as O`}</h3>
      </div>
      <div className='current-players-turn'>
        {
          playerOneTurn ? (
            <h1>{`${playerTwo}'s Move`}</h1>
          ) : (
            <h1>{`${playerOne}'s Move`}</h1>
          )
        }
      </div>
    </div>

  )
}

export default PlayerName;