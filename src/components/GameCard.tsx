import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import { getCroppedImage } from '../services/image.url'

interface Props{
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card height='320px' width='250px' borderRadius='10px' overflow="hidden" >
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard