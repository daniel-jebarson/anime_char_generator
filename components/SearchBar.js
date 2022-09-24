import React from "react";
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Container,
} from "@chakra-ui/react";

import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar() {
  const [query, setQuery] = useState("");
  const logging = () => {
    console.log(query);
  };
  return (
    <Container maxW="550px" color="white" mt="150px">
      <InputGroup size="md" w="550px">
        <Input
          bg="#e6e1e1"
          type="text"
          placeholder="Search Here"
          color="black"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              logging();
            }
          }}
        />
        <InputRightElement width="3rem">
          <IconButton
            h="2.3rem"
            size="md"
            colorScheme="blue"
            aria-label="Get request"
            icon={<SearchIcon />}
            onClick={logging}
          />
        </InputRightElement>
      </InputGroup>
    </Container>
  );
}

export default SearchBar;
