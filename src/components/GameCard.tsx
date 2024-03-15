import { Game } from '../hooks/useGames'
import { Box, Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import { getCroppedImage } from '../services/image.url'
import Emoji from './Emoji'
import { useState } from 'react'
import MouseOnImage from './MouseOnImage'

interface Props{
    game: Game
}

const GameCard = ({game}: Props) => {
const [mouseOnImage, setMouseOnImage] = useState(false);

  return (
    <Card>
      <Box
        onMouseEnter={() => setMouseOnImage(true)}
        onMouseLeave={() => setMouseOnImage(false)}>
        {mouseOnImage ? 
          <MouseOnImage short_screenshots={game.short_screenshots} />
         : 
          <Image src={getCroppedImage(game.background_image)} />
        }
      </Box>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard