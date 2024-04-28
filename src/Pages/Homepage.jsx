import React, { useEffect, useState } from "react";
import pokemon from "../assets/pokemon.png";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Center,
  Spinner,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import RandomCard from "../Components/RandomCard";

const Homepage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomPokemon, setRandomPokemon] = useState(null);
  const navigate = useNavigate();

  // fetching all pokemons data
  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?&limit=30`
      );
      const data = await response.json();
      console.log(data.results);
      setPokemonData(data.results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // fetching pokemon by id
  const fetchPokemonByID = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  };

  // fetching data for random pokemon card
  const getRandomPokemon = async () => {
    setLoading(true);
    try {
      const day = new Date().toISOString().slice(0, 10);
      console.log(day);
      const dateStored = localStorage.getItem("date");
      if (dateStored !== day) {
        const randomIndex = Math.floor(Math.random() * 898) + 1;
        const pokemon = await fetchPokemonByID(randomIndex);
        if (pokemon) {
          setRandomPokemon(pokemon);
          localStorage.setItem("randomID", pokemon.id);
          localStorage.setItem("date", day);
        }
      } else {
        const stored = localStorage.getItem("randomID");
        const pokemon = await fetchPokemonByID(stored);
        if (pokemon) {
          setRandomPokemon(pokemon);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Fetching failed", error);
      setLoading(false);
    }
  };

  // fetching data on when component mounts
  useEffect(() => {
    fetchPokemon();
    getRandomPokemon();
  }, []);

  // searching pokemon
  const searchPokemon = () => {
    setLoading(true);
    const searchN = search.replace(/\s/g, "");
    const filteredPokemon = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchN.toLowerCase())
    );
    setLoading(false);
    console.log(filteredPokemon);

    // sending state with navigation
    navigate(`/search/${searchN}`, {
      state: { filteredPokemon },
    });
  };

  const keyPress = (event) => {
    if (event.key === "Enter") {
      searchPokemon();
    }
  };

  return (
    <Box w="100%" margin="auto" h={["auto", "auto", "auto", "100vh"]}>
      <Box
        w="100%"
        margin="auto"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Center>
          <Image
            mt={"20px"}
            w={["50%", "50%", "50%", "20%"]}
            src={pokemon}
            alt="Pokemon Logo"
          />
        </Center>

        <Box
          margin={["0.5rem", "1rem", "1rem", "1rem"]}
          display="flex"
          flexDirection={["column", "row", "row", "row"]}
          gap="20px"
          justifyContent="center"
          alignItem="center"
        >
          <Input
            type="text"
            w={["auto", "60%", "60%", "60%"]}
            bg={"white"}
            onKeyPress={keyPress}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pokemon Here"
            color="black"
          />
          <Button colorScheme="blue" onClick={searchPokemon}>
            Search
          </Button>
        </Box>
        {loading ? (
          <VStack>
            <Spinner size="xl" color="blue.400" />
          </VStack>
        ) : (
          randomPokemon && <RandomCard pokemon={randomPokemon} />
        )}
      </Box>
    </Box>
  );
};

export default Homepage;
