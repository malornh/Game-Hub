import topRating from '../assets/topRating.png'
import thumbsUp from '../assets/thumbsUp.png'
import cat from '../assets/cat.webp'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props{
    rating: number
}

const Emoji = ({rating}: Props) => {
if(rating<3) return null;

const emojiMap: {[key: number]: ImageProps} = {
    3: {src: cat, alt: 'cat'},
    4: {src: thumbsUp, alt: 'recommended'},
    5: {src: topRating, alt: 'exeptional'}
}

  return (
    <Image {...emojiMap[rating]} boxSize='40px' marginTop={2} />
  )
}

export default Emoji