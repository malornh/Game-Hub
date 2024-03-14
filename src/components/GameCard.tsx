import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import { getCroppedImage } from '../services/image.url'
import Emoji from './Emoji'

interface Props{
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name} <Emoji  rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard