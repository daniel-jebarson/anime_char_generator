import {
  Container,
  Image,
  Center,
  Grid,
  GridItem,
  useColorModeValue,
  scaleFadeConfig,
} from "@chakra-ui/react";
import { animate, transform } from "framer-motion";
function Display(props) {
  const { name, data } = props;
  const bg = useColorModeValue("#9ac5cd", "#413c3c");

  //   const x = name + " exists with image as " + data.img;
  const capitalizer = (str) => {
    const arr = str.split("_");
    let temp = "";
    arr.map((str, index) => {
      temp += str.charAt(0).toUpperCase() + str.slice(1) + " ";
    });
    return temp;
  };

  const descripter = (arr) => {
    let t = "";
    arr.map((str, index) => {
      if (index < 6) {
        t += str["fact"] + ". ";
      }
    });
    return t;
  };

  return (
    <Container
      border={"2px solid grey"}
      mt="150px"
      backgroundColor={bg}
      maxW="850px"
      _hover={{
        bg: "#9fa969",
        maxW: "865px",
        h: "460px",
        color: "#5a583b",
        transitionDuration: "200ms",
      }}
      borderRadius={"20px"}
    >
      <Center
        h="50px"
        // color="black"
        fontStyle={"italic"}
        fontSize="4xl"
        fontWeight={"bold"}
        mt={"4px"}
      >
        {capitalizer(name)}
      </Center>

      <Grid
        h={"360px"}
        templateRows="repeat(2,1fr)"
        templateColumns={"repeat(5,1fr)"}
        gap="4"
        mt={"30px"}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Image
            cols
            borderRadius="25"
            boxSize="300px"
            src={data.img}
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={3} mt="37px">
          <Container>{descripter(data.data)}</Container>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Display;
