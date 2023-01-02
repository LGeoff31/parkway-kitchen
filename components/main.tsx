import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Information } from "./information";
import { Navbar } from "./navbar";

export const Main = () => {
  return (
    <Box bgColor="#fff" color="#000">
      <Box>
        <Navbar />
        <Box margin={8}>
          <Heading textAlign="center">Parkway Kitchen</Heading>
          <Text textAlign="center" fontSize="lg">
            Cantonese & Szechuan Style | 名牌外賣快餐店
          </Text>
        </Box>
        <Flex justify="center">
          <Information />
          <Image h="420px" src="/images/parkway-kitchen.jpeg" alt="front" />
        </Flex>

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
      </Box>

      <div className="mapouter">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?q=670%20Highway%207%20East&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

      <Footer />
    </Box>
  );
};
