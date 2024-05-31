import { useState } from 'react'
import { Screenshot } from '../hooks/useGames'
import { getCroppedImage } from '../services/image.url'
import {Box, HStack, Image } from '@chakra-ui/react'
import noImage from '../assets/noImage.webp'

interface Props{
    short_screenshots: Screenshot[]
}

const MouseOnImage = ({short_screenshots}: Props) => {
const [imageIndex, setImageIndex] = useState(1);

    if (!short_screenshots || short_screenshots.length === 0) {
      return <Image src={noImage} />;
  }

function countPictures(num: number) {
  if(num<=6)
    {
      return num;
    }
    return 6;
}

return (
  <Box position="relative" onClick={()=> imageIndex === 5 || short_screenshots.length === 2 ? setImageIndex(1) : setImageIndex(imageIndex+1)}>
    <Image src={getCroppedImage(short_screenshots[imageIndex].image)} alt="Game screenshot" />
    <HStack
      position="absolute"
      top="90%"
      left="50%"
      transform="translate(-50%, -50%)">
      {short_screenshots
        .map((_, index) => (
          <Box
            onMouseEnter={()=>setImageIndex(index)}
            width="45px"
            height="20px"
            bg={imageIndex === index ? 'rgba(255, 0, 0, 0.8)' : 'rgba(128, 128, 128, 0.8)'}
            borderRadius="15px"
          />
        ))
        .slice(1, countPictures(short_screenshots.length))}
    </HStack>
  </Box>
);
}

export default MouseOnImage