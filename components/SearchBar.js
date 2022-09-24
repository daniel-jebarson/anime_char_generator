import React from "react";
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const PasswordInput = () => {
  //   const [show, setShow] = React.useState(false);
  //   const handleClick = () => setShow(!show);

  return (
    <Container maxW="550px" color="white" mt="250px">
      <InputGroup size="md" w="550px">
        <Input
          bg="#e6e1e1"
          type="text"
          placeholder="Search Here"
          color="black"
        />
        <InputRightElement width="3rem">
          <IconButton
            h="2.3rem"
            size="md"
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};

export default PasswordInput;
