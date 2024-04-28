import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Cards from "../Components/Card";
import { Link, useLocation, useParams } from "react-router-dom";

const SearchResultPage = () => {
  const { query } = useParams();
  const location = useLocation();

  // getting state using useLocation
  const filteredPokemon = location.state ? location.state.filteredPokemon : [];

  return (
    <Box w="100%" margin="auto" display="flex" flexDirection="column">
      <Box w="90%" margin="auto" flex="1">
        <Text
          color="white"
          fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
          pt="2rem"
          ml="2rem"
        >
          Search Results for "{query}"
        </Text>
        <Link to="/" style={{ textDecoration: "none", color: "#4285f4" }}>
          <Button
            color="white"
            fontSize="1rem"
            colorScheme="blue"
            mt="1rem"
            ml="2rem"
            mb="2rem"
            w="80px"
            display="flex"
            alignItems="center"
            _hover={{
              color: "white",
            }}
            padding="0.5rem"
          >
            Back
          </Button>
        </Link>
        {filteredPokemon.length === 0 ? (
          <Box
            width="90%"
            margin="auto"
            display="flex"
            justifyContent="center"
            m="2rem"
            alignItems="flex-start"
          >
            <Text color="white" fontSize="1.5rem">
              "No Result found matching the search criteria."
            </Text>
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            ml="2rem"
          >
            <Box
              display="grid"
              gridTemplateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap="20px"
              width="90%"
              margin="auto"
              justifyContent="center"
              alignItems="center"
            >
              {filteredPokemon.map((pokemon, index) => {
                return <Cards key={index} pokemon={pokemon} />;
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchResultPage;
