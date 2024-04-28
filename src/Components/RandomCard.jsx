import React from "react";
import { Box, Button, Text, Image, Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const RandomCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/${pokemon.name}`);
  };

  return (
    <Box margin="auto" width={["80%", "80%", "80%", "80%"]}>
      <Text
        color="white"
        fontSize="2rem"
        fontWeight={"700"}
        mb="2rem"
        textAlign="center"
      >
        Random Pokemon
      </Text>
      {pokemon ? (
        <Box
          border="1px solid gray"
          borderRadius="10px"
          backgroundColor="white"
          color="black"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <Text fontSize="2rem" fontWeight="bold" mb="0.5rem">
            <Text as="span" color="#427e90">
              Name:
            </Text>{" "}
            {pokemon.name}
          </Text>
          <Image
            padding={"1rem"}
            width={["100%", "100%", "100%", "30%"]}
            height={["50vh", "60vh", "60vh", "50vh"]}
            borderRadius="10px"
            textAlign="center"
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt={pokemon.name}
          />
          <Button
            w="40%"
            colorScheme="blue"
            fontSize="1rem"
            m="1rem"
            display="flex"
            alignItems="center"
            onClick={handleDetails}
            _hover={{
              color: "white",
            }}
            padding="0.5rem"
            cursor="pointer"
          >
            Details
          </Button>
        </Box>
      ) : (
        <Flex justify="center" align="center" height="300px">
          <Spinner size="xl" color="blue.500" />
        </Flex>
      )}
      <br />
    </Box>
  );
};

export default RandomCard;
