import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { isLoading, getError, getData } = useGenres();

  if (getError) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {getData.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
