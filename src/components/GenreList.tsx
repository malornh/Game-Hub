import useGenres, { Genre } from '../hooks/useGenres';
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { getCroppedImage } from '../services/image.url';

interface Props{
    handleGenreClick: (genre: Genre | null)=>void;
}

const GenreList = ({handleGenreClick}: Props) => {
const {data, isLoading} = useGenres();

 if(isLoading) return <Spinner />;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImage(g.image_background)} boxSize="35px" borderRadius="4px" />
            <Button fontSize='lg' variant='link' onClick={()=>handleGenreClick(g)}>{g.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList