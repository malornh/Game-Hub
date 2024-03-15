import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props{
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
 const { data, error, isLoading } = useGames(gameQuery);
 const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 if(error) return <Text>{error}</Text>;

    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingLeft={10}
        paddingY={5}
        spacing={6}>
        {isLoading
          ? skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data.map((g) => (
              <GameCardContainer key={g.id}>
                <GameCard game={g} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    );
  }


export default GameGrid