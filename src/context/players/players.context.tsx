import { ReactNode, useState, createContext, SetStateAction, Dispatch } from "react";

export type PlayersContextType = {
  playerOne: string;
  setPlayerOne: Dispatch<SetStateAction<string>>;
  playerOneTurn: boolean;
  setPlayerOneTurn: Dispatch<SetStateAction<boolean>>;
  playerTwo: string;
  setPlayerTwo: Dispatch<SetStateAction<string>>;
  playerTwoTurn: boolean;
  setPlayerTwoTurn: Dispatch<SetStateAction<boolean>>;
  playersSubmitted: boolean;
  setPlayersSubmitted: Dispatch<SetStateAction<boolean>>;
};

export const PlayersContext = createContext<PlayersContextType>({
  playerOne: '',
  setPlayerOne: player => {},
  playerOneTurn: false,
  setPlayerOneTurn: player => {},
  playerTwo: '',
  setPlayerTwo: player => {},
  playerTwoTurn: false,
  setPlayerTwoTurn: player => {},
  playersSubmitted: false,
  setPlayersSubmitted: submitted => {},
});

type Props = {
  children: ReactNode;
};

export const PlayersProvider = ({ children }: Props) => {
  const [ playerOne, setPlayerOne ] = useState<string>('');
  const [ playerTwo, setPlayerTwo ] = useState<string>('');
  const [ playersSubmitted, setPlayersSubmitted ] = useState<boolean>(false);
  const [ playerOneTurn, setPlayerOneTurn ] = useState<boolean>(false);
  const [ playerTwoTurn, setPlayerTwoTurn ] = useState<boolean>(false);

  return (
    <PlayersContext.Provider value={{
      playerOne,
      setPlayerOne,
      playerTwo,
      setPlayerTwo,
      playersSubmitted,
      setPlayersSubmitted,
      playerOneTurn,
      setPlayerOneTurn,
      playerTwoTurn,
      setPlayerTwoTurn,
    }}>
      { children }
    </PlayersContext.Provider>
  )
};