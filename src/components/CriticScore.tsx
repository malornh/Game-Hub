import { Badge } from '@chakra-ui/react'

interface Props{
    score: number
}

const CriticScore = ({score}: Props) => {
    const scoreColor = score > 90 ? 'green' : score > 80 ? 'yellow' : '';
  return (
    <Badge colorScheme={scoreColor} borderRadius='4px' padding={3}>{score}</Badge>
  )
}

export default CriticScore