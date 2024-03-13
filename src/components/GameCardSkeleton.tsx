import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card height='320px' width='250px' borderRadius='10px' overflow="hidden">
        <Skeleton height='200px'>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Skeleton>
    </Card>
  );
}

export default GameCardSkeleton