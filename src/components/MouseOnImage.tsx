import { useState } from 'react'
import { Screenshot } from '../hooks/useGames'
import { getCroppedImage } from '../services/image.url'
import {Box, HStack, Image } from '@chakra-ui/react'

interface Props{
    short_screenshots: Screenshot[]
}

const MouseOnImage = ({short_screenshots}: Props) => {
const [image, setImage] = useState(short_screenshots[1].image);

return (
  <Box position="relative">
    <Image src={getCroppedImage(image)} alt="Game screenshot" />
    <HStack
      position="absolute"
      top="90%"
      left="50%"
      transform="translate(-50%, -50%)">
      {short_screenshots
        .map((s) => (
          <Box
            onMouseEnter={()=>setImage(s.image)}
            key={s.image}
            width="45px"
            height="20px"
            bg={image === s.image ? 'rgba(255, 0, 0, 0.8)' : 'rgba(128, 128, 128, 0.8)'}
            borderRadius="15px"
          />
        ))
        .slice(1, 6)}
    </HStack>
  </Box>
);
}

export default MouseOnImage