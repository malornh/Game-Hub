import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <SkeletonText noOfLines={5} height='300px' style={{ transform: 'rotate(180deg) scaleX(-1)'}} />
    </Card>
  );
}

export default GameCardSkeleton