import useGenres, { Genre } from '../hooks/useGenres';
import { Box, Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { getCroppedImage } from '../services/image.url';

interface Props{
    handleGenreClick: (genre: Genre | null)=>void,
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, handleGenreClick}: Props) => {
const {data, isLoading} = useGenres();

 if(isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImage(g.image_background)}
                boxSize="40px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => handleGenreClick(g)}>
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList