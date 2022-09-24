import {
  Center,
  Divider,
  Container,
  Badge,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

function ErrorPage() {
  return (
    <Center height="50px" gap={"25px"} mt="370px">
      <Badge lg="1" fontSize="20px" colorScheme="red">
        404
      </Badge>
      <Divider orientation="vertical" />
      <Alert status="error" maxW={"250px"}>
        <AlertIcon />
        NO SUCH ANIME EXIST!
      </Alert>
    </Center>
  );
}

export default ErrorPage;
