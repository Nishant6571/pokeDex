import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ pokemon }) => {
  const navigate = useNavigate();

  const handledetails = () => {
    navigate(`/${pokemon.name}`);
  };

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent="center"
      alignItems="center"
      border="1px solid gray"
      textAlign="Justify"
      borderRadius="10px"
      backgroundColor="white"
      color="Black"
      width="80%"
      boxShadow="0 0 10px 3px rgba(0, 128, 128, 0.5)"
      rounded="md"
      overflow="hidden"
      mx="4"
      my="2"
      _hover={{ boxShadow: "lg" }}
      transition="box-shadow 0.2s"
    >
      <img
        style={{
          height: "150px",
          width: "150px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          margin: "auto",
        }}
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        alt="pokemon"
      />

      <Box m="1rem" textAlign="center">
        <Text
          color="#c95b6a"
          fontSize="2rem"
          fontWeight="bold"
          textShadow="2px 2px black"
        >
          {pokemon.name}
        </Text>
      </Box>

      <Button
        w="40%"
        colorScheme="blue"
        fontSize="1rem"
        m="1rem"
        display="flex"
        alignItems="center"
        onClick={handledetails}
        _hover={{
          color: "white",
        }}
        padding="0.5rem"
        cursor="pointer"
      >
        Details
      </Button>
    </Box>
  );
};

export default Cards;
