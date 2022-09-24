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
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container maxW="550px" color="white" mt="250px">
      <InputGroup size="md" w="550px">
        <Input
          bg="#d1cbcb"
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="3rem">
          <IconButton
            h="2rem"
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
