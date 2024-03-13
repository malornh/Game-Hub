import useGenres from '../hooks/useGenres';
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { getCroppedImage } from '../services/image.url';

const GenreList = () => {
const {data} = useGenres();

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImage(g.image_background)} boxSize="35px" borderRadius="4px" />
            <Text fontSize='lg'>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList