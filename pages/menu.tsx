import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const Menu = () => {
  return (
    <Box>
      <Navbar />
      <Heading mt={10} textAlign="center" size="lg">
        Our Menu
      </Heading>
      <Text textAlign="center">Take a look at our complete menu</Text>
      <Image
        m="20px auto"
        w="60vw"
        src="/images/menu1.jpg"
        alt="menu1"
        border="2px solid #000"
        borderRadius="10px"
        boxShadow="dark-lg"
      />
      <Image
        m="20px auto"
        w="60vw"
        src="/images/menu2.jpg"
        alt="menu2"
        border="2px solid #000"
        borderRadius="10px"
        boxShadow="dark-lg"
      />
      <Footer />
    </Box>
  );
};

export default Menu;
