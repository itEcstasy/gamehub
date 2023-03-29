import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { getGames, getError } = useGames();

  return (
    <>
      {getError && <Text>{getError}</Text>}
      <ul>
        {getGames.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
