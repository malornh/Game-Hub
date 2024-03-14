import useGenres, { Genre } from '../hooks/useGenres';
import { Box, Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { getCroppedImage } from '../services/image.url';

interface Props{
    handleGenreClick: (genre: Genre | null)=>void,
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, handleGenreClick}: Props) => {
const {data, isLoading} = useGenres();

 if(isLoading) return <Spinner />;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImage(g.image_background)} boxSize="35px" borderRadius="4px" />
            <Box>
            <Button fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={()=>handleGenreClick(g)}>{g.name}</Button>
            </Box>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList