import { useContext, ChangeEvent } from "react";

import PlayerName from "../player-names/player-name.component";

import {PlayersContext} from "../../context/players/players.context";

import './player-input.styles.scss';

// const playerState = {
//   playerOne:
//     {
//       playerOneName: '',
//       playerOneNameSubmitted: false,
//       playerOneTurn: false,
//     },
//   playerTwo:
//     {
//       playerTwoName: '',
//       playerTwoNameSubmitted: false,
//       playerTwoTurn: false,
//     },
//   playersSubmitted: false,
// }

const PlayerInput = (): JSX.Element => {
  const {
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
    playersSubmitted,
    setPlayersSubmitted,
    playerOneTurn,
    setPlayerOneTurn,
    playerTwoTurn,
    setPlayerTwoTurn
  } = useContext(PlayersContext);

  const onChangePlayerOneHandler = (evt: ChangeEvent<HTMLInputElement>):void => {
    const newValue = evt.target.value;
    if (!playersSubmitted) {
      setPlayerOne(newValue);
    }
  }

  const onChangePlayerTwoHandler = (evt: ChangeEvent<HTMLInputElement>):void => {
    const newValue = evt.target.value;
    if (!playersSubmitted) {
      setPlayerTwo(newValue);
    }
  }

  const handleClick = (): void => {
    if (setPlayersSubmitted) {
      setPlayersSubmitted(true);
    }
    console.log(playerOne)
    console.log(playerTwo)
  }
  return (
    <div>
      {
        playersSubmitted ? (
          <PlayerName
            playerOne={playerOne}
            setPlayerOne={setPlayerOne}
            playerTwo={playerTwo}
            setPlayerTwo={setPlayerTwo}
            playersSubmitted={playersSubmitted}
            setPlayersSubmitted={setPlayersSubmitted}
            playerOneTurn={playerOneTurn}
            setPlayerOneTurn={setPlayerOneTurn}
            playerTwoTurn={playerTwoTurn}
            setPlayerTwoTurn={setPlayerTwoTurn}
          />
        ) : (
          <form>
            <label htmlFor="playerOneInput">Player One Name: </label>
            <input type="text" className='playerOneInput' value={playerOne} onChange={onChangePlayerOneHandler} />
            <label htmlFor="playerOneInput">Player Two Name: </label>
            <input type="text" className='playerTwoInput' value={playerTwo} onChange={onChangePlayerTwoHandler} />
            <button type="button" value='Submit' onClick={handleClick} >Submit</button>
          </form>
        )
      }
    </div>
  )
}

export default PlayerInput;