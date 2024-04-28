import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Text,
  Heading,
  Image,
  Badge,
  Flex,
  Spinner,
  Button,
} from "@chakra-ui/react";

const DetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  const [pokemon, setPokemon] = useState({});

  // getting details of the pokemon
  const getData = async (id) => {
    setLoading(true);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response.json();
    console.log(data);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Box h="1000px" color="#333" py="4">
      <Box
        mb="1rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to="/">
          <Button
            color="white"
            fontSize="1rem"
            colorScheme="blue"
            ml="2rem"
            w="80px"
            display="flex"
            alignItems="center"
            _hover={{
              backgroundColor: "#427e90",
              color: "white",
            }}
            padding="0.5rem"
          >
            Back
          </Button>
        </Link>
      </Box>
      <Heading
        textAlign="center"
        fontSize={["1.1rem", "2rem", "2rem", "3rem"]}
        color="white"
        mb="2rem"
      >
        Details of {pokemon.name}
      </Heading>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="70vh">
          <Spinner size="xl" color="blue.400" />
        </Flex>
      ) : (
        <Flex
          width="80%"
          margin="auto"
          flexDirection={["column", "column", "row", "row"]}
          justifyContent="center"
          gap="2rem"
        >
          <Image
            width={["100%", "100%", "100%", "80%"]}
            height={["50vh", "90vh", "90vh", "78vh"]}
            borderRadius="10px"
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt={pokemon.name}
          />
          <Box
            width={["100%", "100%", "100%", "80%"]}
            height={["90vh", "90vh", "90vh", "78vh"]}
            textAlign="justify"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius={"10px"}
            backgroundColor={"white"}
          >
            <Box
              textAlign="justify"
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text
                fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                fontWeight="bold"
                color="#427e90"
                mt="1rem"
                mb="0.5rem"
              >
                Name:{" "}
                <Text as="span" color="black">
                  {pokemon.name}
                </Text>
              </Text>
              <Text
                fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                fontWeight="bold"
                color="#427e90"
                mb="0.5rem"
              >
                Order:{" "}
                <Text as="span" color="black">
                  {pokemon.order}
                </Text>
              </Text>
              <Flex alignItems="center" mb="0.5rem">
                <Text
                  fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                  fontWeight="bold"
                  color="#427e90"
                >
                  Types:
                </Text>
                <Flex justifyContent="justify" mt="1rem" mb="1rem">
                  {pokemon.types.map((type, index) => (
                    <Badge
                      backgroundColor={"teal"}
                      borderRadius={"10px"}
                      key={index}
                      fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                      variant="outline"
                      color="black"
                      mx="0.5rem"
                    >
                      {type.type.name}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
              <Flex mb="0.5rem" alignItems="center">
                <Text
                  fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                  fontWeight="bold"
                  color="#427e90"
                >
                  Abilities:
                </Text>
                <Flex flexDirection="column" ml="1rem">
                  {pokemon.abilities.map((ability, index) => (
                    <Text
                      key={index}
                      fontSize={{ base: "1.2rem", md: "1.5rem" }}
                      color="black"
                      textAlign="justify"
                    >
                      {index + 1}. {ability.ability.name}
                    </Text>
                  ))}
                </Flex>
              </Flex>
              <Text
                mb="0.5rem"
                fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                fontWeight="bold"
                color="#427e90"
              >
                Base Experience:{" "}
                <Text as="span" color="black">
                  {pokemon.base_experience}
                </Text>
              </Text>
              <Text
                mb="0.5rem"
                fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                fontWeight="bold"
                color="#427e90"
              >
                Height:{" "}
                <Text as="span" color="black">
                  {pokemon.height / 10} meters
                </Text>
              </Text>
              <Text
                mb="0.5rem"
                fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                fontWeight="bold"
                color="#427e90"
              >
                Weight:{" "}
                <Text as="span" color="black">
                  {pokemon.weight / 10} kg
                </Text>
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default DetailsPage;
